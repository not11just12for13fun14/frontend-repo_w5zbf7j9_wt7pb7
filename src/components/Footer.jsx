export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-blue-600 text-white font-bold flex items-center justify-center">X</div>
              <span className="font-semibold text-slate-900">Xpert Kitchen</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Premium Pakistani kitchen appliances. Smart, stylish, powerful.</p>
          </div>
          <div>
            <h5 className="font-semibold text-slate-900">Company</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#why" className="hover:text-slate-900">About</a></li>
              <li><a href="#products" className="hover:text-slate-900">Shop</a></li>
              <li><a href="#reviews" className="hover:text-slate-900">Reviews</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-slate-900">Support</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Warranty</a></li>
              <li><a href="#" className="hover:text-slate-900">User Manuals</a></li>
              <li><a href="#" className="hover:text-slate-900">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-slate-900">Contact</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Email: support@xpertkitchen.pk</li>
              <li>Phone: +92 300 1234567</li>
              <li>Karachi, Pakistan</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-100 pt-6 text-xs text-slate-500">© {new Date().getFullYear()} Xpert Kitchen Appliances. All rights reserved.</div>
      </div>
    </footer>
  );
}
