import React from 'react'
import { categories } from '../data/produitsData'

export default function CategoriesNav() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Nos Collections
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/categorie/${cat.id}`}
              className="group bg-gradient-to-br from-amber-50 to-amber-100 
                       rounded-xl p-6 text-center hover:shadow-xl transition-all 
                       duration-300 hover:-translate-y-1"
            >
              <span className="text-4xl block mb-3 group-hover:scale-110 transition">
                {cat.icon}
              </span>
              <h3 className="font-semibold text-gray-800 group-hover:text-amber-700">
                {cat.nom}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{cat.count} articles</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}