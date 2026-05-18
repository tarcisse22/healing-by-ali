import { Redis } from "@upstash/redis";
import {
  DEFAULT_HOURS,
  DEFAULT_SERVICES,
  DEFAULT_TESTIMONIALS,
  DEFAULT_CONTACT,
  type ServiceItem,
  type TestimonialItem,
  type ContactInfo,
} from "./defaults";

let redis: Redis | null = null;

function getRedis(): Redis | null {
  if (redis) return redis;
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (url && token) {
    redis = new Redis({ url, token });
    return redis;
  }
  return null;
}

async function getValue<T>(key: string, fallback: T): Promise<T> {
  const r = getRedis();
  if (!r) return fallback;
  try {
    const value = await r.get<T>(key);
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

async function setValue<T>(key: string, value: T): Promise<boolean> {
  const r = getRedis();
  if (!r) return false;
  try {
    await r.set(key, value);
    return true;
  } catch {
    return false;
  }
}

export async function getHours(): Promise<Record<string, string>> {
  return getValue("hours", DEFAULT_HOURS);
}

export async function setHours(hours: Record<string, string>): Promise<boolean> {
  return setValue("hours", hours);
}

export async function getServices(): Promise<ServiceItem[]> {
  return getValue("services", DEFAULT_SERVICES);
}

export async function setServices(services: ServiceItem[]): Promise<boolean> {
  return setValue("services", services);
}

export async function getTestimonials(): Promise<TestimonialItem[]> {
  return getValue("testimonials", DEFAULT_TESTIMONIALS);
}

export async function setTestimonials(testimonials: TestimonialItem[]): Promise<boolean> {
  return setValue("testimonials", testimonials);
}

export async function getPendingTestimonials(): Promise<TestimonialItem[]> {
  return getValue("pending_testimonials", []);
}

export async function setPendingTestimonials(testimonials: TestimonialItem[]): Promise<boolean> {
  return setValue("pending_testimonials", testimonials);
}

export async function addPendingTestimonial(testimonial: TestimonialItem): Promise<boolean> {
  const pending = await getPendingTestimonials();
  pending.push(testimonial);
  return setPendingTestimonials(pending);
}

export async function approvePendingTestimonial(index: number): Promise<boolean> {
  const pending = await getPendingTestimonials();
  if (index < 0 || index >= pending.length) return false;
  const approved = pending[index];
  const current = await getTestimonials();
  current.push(approved);
  const ok = await setTestimonials(current);
  if (!ok) return false;
  pending.splice(index, 1);
  return setPendingTestimonials(pending);
}

export async function rejectPendingTestimonial(index: number): Promise<boolean> {
  const pending = await getPendingTestimonials();
  if (index < 0 || index >= pending.length) return false;
  pending.splice(index, 1);
  return setPendingTestimonials(pending);
}

export async function getContact(): Promise<ContactInfo> {
  return getValue("contact", DEFAULT_CONTACT);
}

export async function setContact(contact: ContactInfo): Promise<boolean> {
  return setValue("contact", contact);
}

export async function getAllContent() {
  const [hours, services, testimonials, contact, pendingTestimonials] = await Promise.all([
    getHours(),
    getServices(),
    getTestimonials(),
    getContact(),
    getPendingTestimonials(),
  ]);
  return { hours, services, testimonials, contact, pendingTestimonials };
}

export function isStoreConfigured(): boolean {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}
