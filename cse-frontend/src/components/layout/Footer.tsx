import Link from "next/link";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Alumni", href: "/alumni" },
  { name: "Team", href: "/team" },
  { name: "Join Society", href: "/join" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 px-6 pb-8 pt-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-black text-sm font-semibold text-white">
                C
              </div>

              <div className="leading-none">
                <p className="text-sm font-semibold tracking-tight text-neutral-950">
                  CSE SOCIETY
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-neutral-500">
                  BIT SINDRI
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-6 text-neutral-500">
              A community of curious minds, ambitious builders and future
              leaders shaping the next chapter of technology.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400">
              Explore
            </p>

            <div className="mt-5 flex flex-col items-start gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-neutral-600 transition-colors duration-200 hover:text-neutral-950"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400">
              Connect
            </p>

            <div className="mt-5 flex flex-col items-start gap-3">
              <Link
                href="/contact"
                className="text-sm text-neutral-600 transition-colors duration-200 hover:text-neutral-950"
              >
                Contact Society
              </Link>

              <a
                href="mailto:cse.society@bitsindri.ac.in"
                className="text-sm text-neutral-600 transition-colors duration-200 hover:text-neutral-950"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} CSE Society, BIT Sindri.
          </p>

          <p className="text-xs text-neutral-400">
            Computer Science & Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}