import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Upgrade Your Kitchen –
              <span className="text-blue-600"> Smart, Stylish, Powerful</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-slate-600 leading-relaxed"
            >
              Xpert Kitchen Appliances brings premium performance to Pakistani homes. From juicers and blenders to
              sandwich makers and electric kettles — built for speed, safety and everyday reliability.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-blue-700 transition"
              >
                Shop Bestsellers
              </a>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-slate-700 font-medium hover:bg-slate-50"
              >
                Chat on WhatsApp
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">Free delivery nationwide. 1-year warranty on core appliances.</p>
          </div>
          <div className="relative">
            <div className="absolute -right-12 -top-8 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-4"
            >
              {["Juicer", "Blender", "Food Factory", "Toaster", "Sandwich Maker", "Kettle"].map((label, i) => (
                <div key={label} className="aspect-square rounded-xl bg-slate-50 flex items-center justify-center text-sm text-slate-700 border border-slate-100">
                  {label}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
