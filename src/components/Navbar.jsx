import { Menu, Phone, ShoppingCart } from "lucide-react";
import { useState } from "react";

const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
    {children}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold">X</div>
            <span className="font-semibold tracking-tight text-slate-900">Xpert Kitchen</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#why">Why Xpert</NavLink>
            <NavLink href="#reviews">Reviews</NavLink>
            <NavLink href="#social">Instagram</NavLink>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" /> Buy Now
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+923001234567" className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900">
              <Phone className="w-4 h-4" /> +92 300 1234567
            </a>
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200 text-slate-700"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-slate-100">
            <div className="pt-4 grid gap-3">
              <NavLink href="#products">Products</NavLink>
              <NavLink href="#why">Why Xpert</NavLink>
              <NavLink href="#reviews">Reviews</NavLink>
              <NavLink href="#social">Instagram</NavLink>
              <a
                href="#cta"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm w-max"
              >
                <ShoppingCart className="w-4 h-4" /> Buy Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
