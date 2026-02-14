// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Menu, X, Search, Phone, Mail, MapPin, ChevronDown, Heart, Info, Store, Users, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [showContactDropdown, setShowContactDropdown] = useState(false)
  const [showProductsDropdown, setShowProductsDropdown] = useState(false)

  // Effet pour le changement de style au scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/recherche?q=${searchQuery}`
    }
  }

  // Catégories pour le menu déroulant
  const categories = [
    { id: 'sacs', nom: 'Sacs et Paniers', icon: '👜' },
    { id: 'chapeaux', nom: 'Chapeaux', icon: '🧢' },
    { id: 'plats', nom: 'Plats et Vaisselle', icon: '🍽️' },
    { id: 'sculptures', nom: 'Sculptures', icon: '🪵' },
    { id: 'textiles', nom: 'Textiles', icon: '🧣' },
    { id: 'bijoux', nom: 'Bijoux', icon: '💍' },
    { id: 'paniers', nom: 'Paniers Tressés', icon: '🧺' },
    { id: 'lambas', nom: 'Lambas', icon: '🥻' }
  ]

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="hidden lg:block bg-amber-900 text-amber-100 text-sm py-1.5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="https://wa.me/261341234567" className="flex items-center gap-1 hover:text-white transition text-xs">
                <Phone size={12} />
                <span>+261 34 12 345 67</span>
              </a>
              <a href="mailto:contact@artimada.mg" className="flex items-center gap-1 hover:text-white transition text-xs">
                <Mail size={12} />
                <span>contact@artimada.mg</span>
              </a>
              <div className="flex items-center gap-1 text-xs">
                <MapPin size={12} />
                <span>Antananarivo</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-amber-300 text-xs">🇲🇬 Artisanat Malgache</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-r from-amber-50 to-amber-100 shadow-md'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo - Plus compact */}
            <a href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <span className="text-3xl filter drop-shadow-lg group-hover:scale-110 transition-transform">🇲🇬</span>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
                  ARTIMADA
                </span>
                <span className="text-[10px] text-amber-600 font-medium -mt-1">
                  Société Artisanale
                </span>
              </div>
            </a>

            {/* Desktop Navigation - Compact */}
            <div className="hidden lg:flex items-center space-x-0.5">
              {/* Accueil */}
              <a href="/" className="px-3 py-1.5 text-sm text-gray-700 hover:text-amber-700 font-medium rounded-lg hover:bg-amber-50 transition flex items-center gap-1">
                <Store size={16} />
                Accueil
              </a>

              {/* Produits - Menu déroulant */}
              <div 
                className="relative"
                onMouseEnter={() => setShowProductsDropdown(true)}
                onMouseLeave={() => setShowProductsDropdown(false)}
              >
                <button className="px-3 py-1.5 text-sm text-gray-700 hover:text-amber-700 font-medium rounded-lg hover:bg-amber-50 transition flex items-center gap-1">
                  <ShoppingBag size={16} />
                  Produits
                  <ChevronDown size={14} className={`transition-transform ${showProductsDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Mega Menu Produits - Plus compact */}
                {showProductsDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-[550px] bg-white rounded-xl shadow-xl border border-amber-100 p-4 grid grid-cols-2 gap-2 animate-fadeIn">
                    {categories.map((cat) => (
                      <a
                        key={cat.id}
                        href={`/categorie/${cat.id}`}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition group"
                      >
                        <span className="text-xl group-hover:scale-110 transition">{cat.icon}</span>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-amber-700">
                          {cat.nom}
                        </span>
                      </a>
                    ))}
                    <div className="col-span-2 mt-1 pt-3 border-t border-gray-100">
                      <a href="/produits" className="block text-center text-sm text-amber-600 hover:text-amber-700 font-semibold">
                        Voir tous les produits →
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Société - Menu principal */}
              <div className="relative group">
                <button className="px-3 py-1.5 text-sm text-gray-700 hover:text-amber-700 font-medium rounded-lg hover:bg-amber-50 transition flex items-center gap-1">
                  <Users size={16} />
                  Société
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                </button>
                
                {/* Dropdown Société - Plus compact */}
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-amber-100 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <a href="/artisans" className="block px-4 py-2 hover:bg-amber-50 transition">
                    <div className="font-medium text-sm text-gray-800 hover:text-amber-700">Nos Artisans</div>
                    <div className="text-[10px] text-gray-500">Rencontrez nos talents</div>
                  </a>
                  <a href="/notre-histoire" className="block px-4 py-2 hover:bg-amber-50 transition">
                    <div className="font-medium text-sm text-gray-800 hover:text-amber-700">Notre Histoire</div>
                    <div className="text-[10px] text-gray-500">L'aventure ARTIMADA</div>
                  </a>
                  <a href="/engagements" className="block px-4 py-2 hover:bg-amber-50 transition">
                    <div className="font-medium text-sm text-gray-800 hover:text-amber-700">Nos Engagements</div>
                    <div className="text-[10px] text-gray-500">Commerce équitable</div>
                  </a>
                  <a href="/a-propos" className="block px-4 py-2 hover:bg-amber-50 transition">
                    <div className="font-medium text-sm text-gray-800 hover:text-amber-700">À propos</div>
                    <div className="text-[10px] text-gray-500">Qui sommes-nous</div>
                  </a>
                </div>
              </div>

              {/* Contact - Menu dédié */}
              <div 
                className="relative"
                onMouseEnter={() => setShowContactDropdown(true)}
                onMouseLeave={() => setShowContactDropdown(false)}
              >
                <button className="px-3 py-1.5 text-sm text-gray-700 hover:text-amber-700 font-medium rounded-lg hover:bg-amber-50 transition flex items-center gap-1">
                  <Phone size={16} />
                  Contact
                  <ChevronDown size={14} className={`transition-transform ${showContactDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showContactDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-amber-100 p-3 animate-fadeIn">
                    <div className="space-y-2">
                      <a href="https://wa.me/261341234567" className="flex items-center gap-2 p-2 rounded-lg hover:bg-green-50 transition group">
                        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200">
                          <Phone size={14} className="text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-gray-800">WhatsApp</div>
                          <div className="text-[10px] text-gray-500">Réponse sous 24h</div>
                        </div>
                      </a>
                      
                      <a href="mailto:contact@artimada.mg" className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition group">
                        <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200">
                          <Mail size={14} className="text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-gray-800">Email</div>
                          <div className="text-[10px] text-gray-500">contact@artimada.mg</div>
                        </div>
                      </a>
                      
                      <div className="pt-2 border-t border-gray-100">
                        <div className="flex items-center gap-2 p-1">
                          <MapPin size={12} className="text-gray-400" />
                          <span className="text-xs text-gray-600">Antananarivo, Madagascar</span>
                        </div>
                        <div className="flex items-center gap-2 p-1">
                          <Heart size={12} className="text-gray-400" />
                          <span className="text-xs text-gray-600">Lun-Ven: 8h-17h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* À propos - Lien visible */}
              <a href="/a-propos" className="px-3 py-1.5 text-sm text-gray-700 hover:text-amber-700 font-medium rounded-lg hover:bg-amber-50 transition flex items-center gap-1">
                <Info size={16} />
                À propos
              </a>
            </div>

            {/* Search Bar - Desktop - RÉDUITE */}
            <form onSubmit={handleSearch} className="hidden lg:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 text-sm rounded-full border border-amber-200 
                           focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200 
                           w-40 xl:w-48 transition bg-white/80 backdrop-blur-sm"
                />
                <Search className="absolute left-2.5 top-2 text-gray-400" size={14} />
              </div>
              <button 
                type="submit" 
                className="ml-1 bg-amber-600 text-white px-3 py-1.5 rounded-full text-sm
                         hover:bg-amber-700 transition shadow-sm hover:shadow 
                         flex items-center gap-1"
              >
                <Search size={14} />
                <span className="hidden xl:inline text-xs">Chercher</span>
              </button>
            </form>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden text-amber-800 hover:bg-amber-100 p-1.5 rounded-lg transition"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu - Compact */}
          {isOpen && (
            <div className="lg:hidden py-3 border-t border-amber-200 animate-slideDown">
              <div className="space-y-3">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="flex gap-1">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Rechercher..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-3 py-1.5 pl-8 text-sm rounded-lg border border-amber-200 focus:outline-none focus:border-amber-500"
                    />
                    <Search className="absolute left-2.5 top-2 text-gray-400" size={14} />
                  </div>
                  <button type="submit" className="bg-amber-600 text-white px-3 py-1.5 text-sm rounded-lg">
                    OK
                  </button>
                </form>

                {/* Mobile Navigation */}
                <div className="space-y-1">
                  <a href="/" className="block px-3 py-2 text-sm text-gray-700 hover:bg-amber-50 rounded-lg font-medium">
                    Accueil
                  </a>
                  
                  {/* Produits Mobile */}
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-sm text-gray-700 font-medium flex items-center gap-2">
                      <ShoppingBag size={16} />
                      Produits
                    </div>
                    <div className="pl-7 space-y-1">
                      {categories.map((cat) => (
                        <a 
                          key={cat.id} 
                          href={`/categorie/${cat.id}`}
                          className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-amber-50 rounded-lg"
                        >
                          {cat.icon} {cat.nom}
                        </a>
                      ))}
                      <a href="/produits" className="block px-3 py-1.5 text-xs text-amber-600 hover:bg-amber-50 rounded-lg font-medium">
                        Voir tous →
                      </a>
                    </div>
                  </div>

                  {/* Société Mobile */}
                  <div>
                    <div className="px-3 py-2 text-sm text-gray-700 font-medium flex items-center gap-2">
                      <Users size={16} />
                      Société
                    </div>
                    <div className="pl-7 space-y-1">
                      <a href="/artisans" className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-amber-50 rounded-lg">
                        Nos Artisans
                      </a>
                      <a href="/notre-histoire" className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-amber-50 rounded-lg">
                        Notre Histoire
                      </a>
                      <a href="/engagements" className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-amber-50 rounded-lg">
                        Nos Engagements
                      </a>
                    </div>
                  </div>

                  {/* Contact Mobile */}
                  <div>
                    <div className="px-3 py-2 text-sm text-gray-700 font-medium flex items-center gap-2">
                      <Phone size={16} />
                      Contact
                    </div>
                    <div className="pl-7 space-y-1">
                      <a href="https://wa.me/261341234567" className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-green-50 rounded-lg">
                        📱 WhatsApp
                      </a>
                      <a href="mailto:contact@artimada.mg" className="block px-3 py-1.5 text-xs text-gray-600 hover:bg-blue-50 rounded-lg">
                        📧 Email
                      </a>
                      <div className="px-3 py-1.5 text-xs text-gray-500">
                        📍 Antananarivo
                      </div>
                    </div>
                  </div>

                  <a href="/a-propos" className="block px-3 py-2 text-sm text-gray-700 hover:bg-amber-50 rounded-lg font-medium">
                    À propos
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}