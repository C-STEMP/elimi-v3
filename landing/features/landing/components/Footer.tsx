import Image from "next/image";
import Link from "next/link";
import { logoIcon } from "@/assets";

export function Footer() {
  return (
    <footer className="bg-[#241014] text-white/80 pt-16 pb-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Logo & Info */}
          <div className="md:col-span-5">
            <Link href="/">
              <Image
                src={logoIcon}
                alt="Elimi Logo"
                width={130}
                height={48}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/70 leading-relaxed">
              Nigeria&apos;s leading platform for TVET training, certification, and trade job placements. Built on a unified identity model for seamless skills progression.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-6 md:col-span-7">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#f9a825]">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#faqs" className="hover:text-white transition-colors">FAQs</Link></li>
                <li><Link href="#portal" className="hover:text-white transition-colors">Portal</Link></li>
                <li><Link href="#workforce" className="hover:text-white transition-colors">Workforce Hub</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#f9a825]">
                What We Do
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li><Link href="#pipeline" className="hover:text-white transition-colors">Get Trained</Link></li>
                <li><Link href="#pipeline" className="hover:text-white transition-colors">Get Certified</Link></li>
                <li><Link href="#pipeline" className="hover:text-white transition-colors">Employer Services</Link></li>
                <li><Link href="#pillars" className="hover:text-white transition-colors">Product Pillars</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#f9a825]">
                Legal
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          ELIMI &copy; {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
