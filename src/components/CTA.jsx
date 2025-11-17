export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white">Make your kitchen smarter today</h3>
        <p className="mt-2 text-blue-100">Fast delivery nationwide. Secure payments. Local warranty.</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <a href="#products" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-blue-700 font-semibold shadow-sm hover:bg-blue-50">Buy Now</a>
          <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-white font-medium shadow-sm hover:bg-blue-800">Order on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
