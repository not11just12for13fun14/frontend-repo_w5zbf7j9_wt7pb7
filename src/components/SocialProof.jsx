export default function SocialProof() {
  return (
    <section id="social" className="bg-blue-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Follow @xpertkitchen.pk</h3>
            <p className="text-slate-600">See product drops, tips and real customer kitchens.</p>
          </div>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-blue-700"
          >
            Open Instagram
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-white border border-slate-100 overflow-hidden">
              <img src={`/placeholder-social-${i % 4}.jpg`} alt="Instagram post" className="w-full h-full object-cover" onError={(e)=>{e.currentTarget.style.display='none'}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
