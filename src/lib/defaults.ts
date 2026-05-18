export const DEFAULT_HOURS: Record<string, string> = {
  monday: "5:30 PM – 10:00 PM",
  tuesday: "",
  wednesday: "5:30 PM – 10:00 PM",
  thursday: "8:00 AM – 10:00 PM",
  friday: "5:30 PM – 10:00 PM",
  saturday: "5:30 PM – 10:00 PM",
  sunday: "5:30 PM – 10:00 PM",
};

export interface ServiceItem {
  title: string;
  price: string;
  items: string[];
  note: string;
}

export const DEFAULT_SERVICES: ServiceItem[] = [
  {
    title: "Personal Training",
    price: "$25 per hour",
    items: [
      "One-on-one workout sessions",
      "Strength and conditioning training",
      "Beginner to advanced training",
    ],
    note: "*Mobile service available — pricing may vary based on travel distance.",
  },
  {
    title: "Recovery & Mobility Training",
    price: "$25 per hour",
    items: [
      "Physical therapy style exercises",
      "Mobility work",
      "Muscle activation",
      "Injury recovery support",
    ],
    note: "*Mobile service available — pricing may vary based on travel distance.",
  },
  {
    title: "Personalized Workout Plans",
    price: "$55 per custom plan",
    items: [
      "Fully customized based on your goals and desired results",
      "Tailored to limitations, injuries, and experience level",
      "Built around exercises you enjoy and ones to avoid",
      "A personalized coaching experience — not just a PDF",
    ],
    note: "",
  },
];

export interface TestimonialItem {
  name: string;
  service: string;
  stars: number;
  quote: string;
}

export const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Marcus J.",
    service: "Personal Training",
    stars: 5,
    quote:
      "Ali pushed me past limits I didn\u2019t know I had. I came in barely able to do 10 push-ups and now I\u2019m hitting PRs every week. The energy and knowledge he brings to every session is unmatched.",
  },
  {
    name: "Taylor W.",
    service: "Massage & Recovery",
    stars: 5,
    quote:
      "I had chronic shoulder tightness for months. After just two sessions with Ali, the pain was almost completely gone. The cupping and muscle stimulation therapy made a huge difference. Highly recommend!",
  },
  {
    name: "Jordan K.",
    service: "Personalized Workout Plan",
    stars: 5,
    quote:
      "Ali built me a plan that actually fits my life \u2014 not some cookie-cutter PDF. He asked about my injuries, my goals, what exercises I enjoy, and designed something I actually want to follow. Worth every penny.",
  },
];

export interface ContactInfo {
  phone: string;
  instagram: string;
  instagram_url: string;
  cashapp: string;
}

export const DEFAULT_CONTACT: ContactInfo = {
  phone: "(470) 399-3351",
  instagram: "@healingbyali_coach",
  instagram_url: "https://instagram.com/healingbyali_coach",
  cashapp: "$healingbyali",
};
