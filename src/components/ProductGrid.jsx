import { useState } from "react";

const DEFAULT_PRODUCTS = {
  Juicers: [
    { id: "j1", name: "Xpert Pro Juicer J700", price: 12999, image: "/placeholder-juicer.jpg" },
    { id: "j2", name: "Compact Cold Press J450", price: 15999, image: "/placeholder-juicer.jpg" },
  ],
  Blenders: [
    { id: "b1", name: "PowerBlend 1000W", price: 9999, image: "/placeholder-blender.jpg" },
    { id: "b2", name: "SmartMix 2-in-1", price: 8999, image: "/placeholder-blender.jpg" },
  ],
  "Food Factories": [
    { id: "f1", name: "ChefStation 8-in-1", price: 21999, image: "/placeholder-foodfactory.jpg" },
  ],
  Toasters: [
    { id: "t1", name: "CrispToast 2-Slice", price: 4999, image: "/placeholder-toaster.jpg" },
  ],
  "Sandwich Makers": [
    { id: "s1", name: "GrillMate Nonstick", price: 5999, image: "/placeholder-sandwich.jpg" },
  ],
  "Electric Kettles": [
    { id: "k1", name: "RapidBoil 1.8L", price: 6499, image: "/placeholder-kettle.jpg" },
  ],
};

function ProductCard({ product }) {
  return (
    <div className="group rounded-xl border border-slate-100 bg-white p-4 shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="aspect-square rounded-lg bg-slate-50 mb-3 flex items-center justify-center text-slate-400 text-xs">
        {/* Replace with real image */}
        <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" onError={(e)=>{e.currentTarget.style.display='none'}} />
        <span className="absolute">Image</span>
      </div>
      <h4 className="font-semibold text-slate-900 text-sm">{product.name}</h4>
      <p className="text-blue-600 font-bold mt-1">Rs {product.price.toLocaleString()}</p>
      <div className="mt-3 flex gap-2">
        <a href="#cta" className="flex-1 inline-flex justify-center items-center text-sm bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700">Buy Now</a>
        <a
          href={`https://wa.me/923001234567?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex justify-center items-center text-sm border border-slate-300 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function ProductGrid({ products = DEFAULT_PRODUCTS }) {
  const categories = Object.keys(products);
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="products" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h3 className="text-2xl font-bold text-slate-900">Products</h3>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm border ${
                  active === cat ? "bg-blue-600 text-white border-blue-600" : "border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {(products[active] || []).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
