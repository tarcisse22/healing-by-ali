export default function Footer() {
  return (
    <footer className="bg-warm-brown-dark text-cream-dark py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cream-light">
              Healing by Ali
            </p>
            <p className="text-sm mt-2 text-cream-dark/80">
              Helping your body move, recover, and perform better.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-semibold text-cream-light mb-3 text-sm uppercase tracking-wider">
              Quick Links
            </p>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-sm text-cream-dark hover:text-cream-light transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="block text-sm text-cream-dark hover:text-cream-light transition-colors"
              >
                Services
              </a>
              <a
                href="#massage"
                className="block text-sm text-cream-dark hover:text-cream-light transition-colors"
              >
                Massage &amp; Recovery
              </a>
              <a
                href="#policies"
                className="block text-sm text-cream-dark hover:text-cream-light transition-colors"
              >
                Policies
              </a>
              <a
                href="#faq"
                className="block text-sm text-cream-dark hover:text-cream-light transition-colors"
              >
                FAQ
              </a>
              <a
                href="#location"
                className="block text-sm text-cream-dark hover:text-cream-light transition-colors"
              >
                Location
              </a>
              <a
                href="#contact"
                className="block text-sm text-cream-dark hover:text-cream-light transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <p className="font-semibold text-cream-light mb-3 text-sm uppercase tracking-wider">
              Contact
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+14703993351"
                className="block text-cream-dark hover:text-cream-light transition-colors"
              >
                (470) 399-3351
              </a>
              <a
                href="https://instagram.com/healingbyali_coach"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cream-dark hover:text-cream-light transition-colors"
              >
                @healingbyali_coach
              </a>
              <p className="text-cream-dark/80">
                Based in Stone Mountain, GA — by appointment
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream-dark/20 flex items-center justify-between text-xs text-cream-dark/60">
          <span>&copy; {new Date().getFullYear()} Healing by Ali. All rights reserved.</span>
          <a
            href="/admin"
            className="text-cream-dark/40 hover:text-cream-dark transition-colors"
          >
            Owner Login
          </a>
        </div>
      </div>
    </footer>
  );
}
