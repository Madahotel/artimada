// src/components/CategoriesNav.jsx
import React from 'react'
import { categories } from '../data/produitsData'

export default function CategoriesNav() {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-amber-800">
          Nos Catégories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((categorie) => (
            <a
              key={categorie.id}
              href={`/categorie/${categorie.id}`}
              className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl 
                       hover:shadow-lg transition duration-300 text-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {categorie.icon}
              </div>
              <div className="font-semibold text-gray-800 group-hover:text-amber-700">
                {categorie.nom}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                {categorie.count} articles
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}