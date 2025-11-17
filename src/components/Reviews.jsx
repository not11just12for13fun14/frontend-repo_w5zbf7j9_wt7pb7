const reviews = [
  { name: "Ayesha", text: "The blender is powerful and quiet. Smoothies in seconds!", rating: 5 },
  { name: "Hamza", text: "Kettle boils fast and looks premium on the counter.", rating: 5 },
  { name: "Sana", text: "Great value for money. Warranty claim was super easy.", rating: 4 },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-yellow-500" : "text-slate-300"}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Loved by thousands of homes</h3>
          <p className="mt-2 text-slate-600">Real feedback from customers across Pakistan.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {reviews.map((r, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white border border-slate-100 shadow-sm">
              <Stars count={r.rating} />
              <p className="mt-3 text-slate-700">“{r.text}”</p>
              <p className="mt-2 text-sm font-medium text-slate-900">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
