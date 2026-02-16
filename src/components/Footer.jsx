import React from 'react'
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* À propos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">ARTIMADA</h3>
            <p className="text-sm leading-relaxed">
              Artisanat malgache depuis 2018. Nous travaillons directement avec des artisans 
              à travers Madagascar pour vous proposer des pièces uniques et authentiques.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-amber-400 transition">Accueil</a></li>
              <li><a href="/produits" className="hover:text-amber-400 transition">Produits</a></li>
              <li><a href="/artisans" className="hover:text-amber-400 transition">Artisans</a></li>
              <li><a href="/a-propos" className="hover:text-amber-400 transition">À propos</a></li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-white font-semibold mb-4">Collections</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/categorie/macrame" className="hover:text-amber-400 transition">Macramé Bags</a></li>
              <li><a href="/categorie/fashion-bags" className="hover:text-amber-400 transition">Fashion Bags</a></li>
              <li><a href="/categorie/kids" className="hover:text-amber-400 transition">Articles Enfants</a></li>
              <li><a href="/categorie/beach-bags" className="hover:text-amber-400 transition">Sacs de Plage</a></li>
              <li><a href="/categorie/straw-baskets" className="hover:text-amber-400 transition">Paniers Naturels</a></li>
              <li><a href="/categorie/tote-bags" className="hover:text-amber-400 transition">Tote Bags</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-amber-400" />
                <a href="https://wa.me/261349727107" className="hover:text-amber-400">
                  +261 34 97 271 07
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-amber-400" />
                <a href="mailto:groupartimada@gmail.com" className="hover:text-amber-400">
                  groupartimada@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-amber-400" />
                <span>Antananarivo, Madagascar</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-amber-400" />
                <span>Lun-Ven: 8h - 17h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 mt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} ARTIMADA. Tous droits réservés.</p>
          <p className="flex items-center justify-center gap-1 mt-2 text-xs text-gray-500">
            Fait avec <Heart size={12} className="text-red-500" /> à Madagascar
          </p>
        </div>
      </div>
    </footer>
  )
}