// src/components/Navbar.jsx - Version adaptée aux catalogues
import React, { useState, useEffect, useRef } from 'react'
import { 
  Menu, X, Search, Phone, Mail, MapPin, ChevronDown, 
  Heart, Info, Store, Users, ShoppingBag, Clock, 
  Award, Target, Users2, Globe, Briefcase, Building2,
  BookOpen, Shield, Map, HeartHandshake, Baby, 
  Sun, Flower2, Gem, Scissors, Package, Palette
} from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  
  const dropdownRefs = {
    products: useRef(null),
    company: useRef(null),
    contact: useRef(null)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.entries(dropdownRefs).forEach(([key, ref]) => {
        if (ref.current && !ref.current.contains(event.target)) {
          if (activeDropdown === key) {
            setActiveDropdown(null)
          }
        }
      })
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [activeDropdown])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/recherche?q=${searchQuery}`
    }
  }

  // 📦 STRUCTURE DES PRODUITS BASÉE SUR LES CATALOGUES
  const productCategories = [
    {
      id: 'macrame',
      nom: 'Macramé Bags',
      description: 'Sacs en macramé faits main',
      icon: '🪢',
      count: 12,
      catalog: 'MACRAME BAG',
      items: [
        { nom: 'MACR-DISC', prix: 8.75 },
        { nom: 'MACR-DELINE', prix: '10,00 / 8,05 / 6,53' },
        { nom: 'MACR-FILET', prix: 13.75 },
        { nom: 'MACR-CLASSIC', prix: 10.00 },
        { nom: 'MACR-POUCH', prix: 6.50 },
        { nom: 'MACR-CROSS', prix: 11.75 },
        { nom: 'MACR-HAT', prix: 8.75 },
        { nom: 'MACR-LIVA', prix: 10.00 },
        { nom: 'MACR-STYLISH', prix: '5,00 / 4,25 / 8,00 / 7,50' },
        { nom: 'MACR-NEW', prix: '8,75 / 8,75 / 8,75' }
      ]
    },
    {
      id: 'fashion-bags',
      nom: 'Fashion Bags',
      description: 'Sacs mode en rabane et jute',
      icon: '👝',
      count: 28,
      catalog: 'FASHION BAG',
      items: [
        { nom: 'FSH-LILA / FSH-LISY' },
        { nom: 'FSH-LALAO / FSH-LAKANA' },
        { nom: 'FSH-LIANAH', prix: 6.63 },
        { nom: 'FSH-LOVA', prix: 5.90 },
        { nom: 'FSH-LEZA', prix: 5.95 },
        { nom: 'FSH-JOSSY', prix: '6,38 / 5,63' },
        { nom: 'FSH-VAO', prix: 4.33 },
        { nom: 'FSH-VERO', prix: 4.25 },
        { nom: 'FSH-POETRY', prix: 4.20 },
        { nom: 'FSH-REBEKA', prix: 5.88 },
        { nom: 'FSH-BAGETY', description: 'rabane / jute-rabane' },
        { nom: 'FSH-BACKPACK', prix: 5.88 },
        { nom: 'FSH-MAMY', prix: 6.88 },
        { nom: 'FSH-ROMY', prix: 6.13 },
        { nom: 'FSH-MARIA', prix: 3.75 },
        { nom: 'FSH-MIRANA', prix: 5.38 },
        { nom: 'FSH-TSANTA', prix: 3.63 }
      ]
    },
    {
      id: 'kids',
      nom: 'Articles Enfants',
      description: 'Sacs et accessoires pour enfants',
      icon: '🧸',
      count: 22,
      catalog: 'ITEMS FOR KIDS',
      items: [
        { nom: 'KID-PRISCA', prix: 2.13 },
        { nom: 'KID-ANDY', prix: 2.10 },
        { nom: 'KID-ALINE', prix: 2.43 },
        { nom: 'KID-SETA', prix: 2.18 },
        { nom: 'KID-REMI', prix: 2.38 },
        { nom: 'KID-FESTON', prix: 2.13 },
        { nom: 'KID-PENJY', prix: 2.13 },
        { nom: 'KID-JACQUES', prix: 2.50 },
        { nom: 'KID-HAZO', prix: 2.13 },
        { nom: 'KID-VOANGY', prix: 2.50 },
        { nom: 'KID-ZION', prix: 2.50 },
        { nom: 'KID-CROCH', prix: 3.03 },
        { nom: 'KID-FILET', prix: 3.00 },
        { nom: 'KID-TRESS', description: 'hat & bag' },
        { nom: 'KID-TUBE', prix: 2.13 },
        { nom: 'KID-POM', prix: 2.18 },
        { nom: 'KID-ZAZA', prix: 2.80 },
        { nom: 'KID-TONG', prix: 3.25 },
        { nom: 'KID-EVAH', prix: 2.50 },
        { nom: 'KID-NJARA', prix: 5.88 },
        { nom: 'KID-YVONNE', prix: 2.75 },
        { nom: 'KID-SIZA', prix: 2.50 }
      ]
    },
    {
      id: 'beach-bags',
      nom: 'Sacs de Plage',
      description: 'Sacs de plage en raphia',
      icon: '🏖️',
      count: 25,
      catalog: 'RAFFIA BEACH BAG / CABAS',
      items: [
        { nom: 'PLAYA 1-9', prix: '7,40 / 7,38 / 7,38 / 8,38 / 7,88 / 7,25 / 7,25 / 8,00 / 7,50' },
        { nom: 'PLAYA 13-16', prix: '6,75 / 8,50 / 7,73 / 5,50' },
        { nom: 'GAUFRE 17', prix: 'L:8,00 / S:6,25' },
        { nom: 'BB-ANGAR', prix: 7.25 },
        { nom: 'BB-MAHEF', prix: 'classic 7,02 / two-tone 8,02' },
        { nom: 'BB-DUO', prix: 7.36 },
        { nom: 'BB-BAND', prix: 9.03 },
        { nom: 'BB-ZEBRA', prix: 9.37 },
        { nom: 'BB-CHECK', prix: 9.37 },
        { nom: 'BB-DOTS', prix: 'L:9,58 / M:8,13 / S:7,45' },
        { nom: 'BB-TRI', prix: 7.55 },
        { nom: 'BB-SET-PLAIN', prix: 'L:8,05 / M:7,15 / S:6,10 / XS:5,10' },
        { nom: 'BB-SET-STRIPE', prix: 'L:8,30 / M:7,35 / S:6,35 / XS:5,43' },
        { nom: 'BB-POSY', prix: 7.73 },
        { nom: 'BB-RECYCLED', prix: 8.03 },
        { nom: 'BB-ROLA', prix: 10.00 },
        { nom: 'BB-GIRAF', prix: 13.08 }
      ]
    },
    {
      id: 'straw-baskets',
      nom: 'Paniers Naturels',
      description: 'Paniers en paille naturelle',
      icon: '🧺',
      count: 35,
      catalog: 'NATURAL STRAW BASKET',
      items: [
        { nom: 'SHOP-MAMY', prix: 4.88 },
        { nom: 'SHOP-BAKOLY', prix: 4.13 },
        { nom: 'SHOP-TREFLE', prix: '4,88 / 4,38' },
        { nom: 'SHOP-RARIBOKA', prix: '5,10 / 4,58 / 4,23' },
        { nom: 'SHOP-RABINE', prix: '6,45 / 5,33 / 4,48' },
        { nom: 'SHOP-CARO', prix: '7,25 / 5,95 / 4,90' },
        { nom: 'SHOP-BROD', prix: '7,15 / 6,15 / 5,18' },
        { nom: 'SHOP-DP-NAT', prix: 'XL:5,23 / L:4,30 / M:3,68 / S:3,23' },
        { nom: 'SHOP-ZO', prix: 'XL:4,10 / L:3,53 / M:3,05 / S:2,68' },
        { nom: 'SHOP-MELIE', prix: '4,18 / 3,95 / 4,20 / 4,28' },
        { nom: 'SHOP-SATRANA', prix: '4,53 / 5,13 / 3,78 / 3,65 / 3,65 / 3,50' },
        { nom: 'SHOP-HAZONDRANO', prix: '5,00 / 6,13 / 6,70 / 5,25' },
        { nom: 'SHOP-JACQUEL', prix: '7,50 / 7,50' },
        { nom: 'SHOP-PIANINA', prix: 6.00 },
        { nom: 'SHOP-PENJY', prix: 3.75 },
        { nom: 'SHOP-MAJUNGA', prix: 4.75 }
      ]
    },
    {
      id: 'tote-bags',
      nom: 'Tote Bags Raphia',
      description: 'Tote bags en raphia',
      icon: '🛍️',
      count: 18,
      catalog: 'RAFFIA TOTE BAG',
      items: [
        { nom: 'TT-ZOMA-stripe', prix: 'L:6,13 / M:4,85 / S:4,35' },
        { nom: 'TT-ROSE', prix: '15,70' },
        { nom: 'TT-LAK', prix: 'L:6,78 / M:5,55 / S:4,88' },
        { nom: 'TT-TINA', prix: 'L:7,08 / M:6,10 / S:5,30' },
        { nom: 'CABAS-11a/11b', prix: '5,25 / 5,38' },
        { nom: 'KANTO', prix: 'large 7,63' },
        { nom: 'TT-TRI-S3', prix: 'L:6,95 / M:5,85 / S:5,30' },
        { nom: 'TT-GEOMETRIC', prix: 'L:6,95 / M:5,85 / S:5,30' },
        { nom: 'TT-OVAL', prix: 'L:7,63 / M:6,65 / S:5,83' },
        { nom: 'TT-MELANGE', prix: 'L:6,55 / M:5,45 / S:4,70' },
        { nom: 'TT-JUMBO-XL', prix: 8.38 },
        { nom: 'TT-ZEBRA', prix: 'L:7,28 / M:6,05 / S:5,15' }
      ]
    }
  ]

  // Calcul du nombre total de produits
  const totalProducts = productCategories.reduce((acc, cat) => acc + cat.count, 0)

  // Structure du menu À Propos
  const aboutMenuItems = [
    {
      title: 'Qui sommes-nous',
      description: 'Découvrez ARTIMADA, artisanat malgache',
      icon: Building2,
      href: '/a-propos',
      color: 'amber',
      featured: true
    },
    {
      title: 'Notre Histoire',
      description: 'L\'aventure depuis nos débuts',
      icon: BookOpen,
      href: '/notre-histoire',
      color: 'blue'
    },
    {
      title: 'Nos Artisans',
      description: 'Rencontrez nos talents',
      icon: Users2,
      href: '/artisans',
      color: 'green'
    },
    {
      title: 'Nos Engagements',
      description: 'Commerce équitable',
      icon: HeartHandshake,
      href: '/engagements',
      color: 'red'
    },
    {
      title: 'Savoir-faire',
      description: 'Techniques artisanales',
      icon: Scissors,
      href: '/savoir-faire',
      color: 'purple'
    },
    {
      title: 'Matériaux',
      description: 'Raphia, rabane, jute, paille',
      icon: Package,
      href: '/materiaux',
      color: 'indigo'
    },
    {
      title: 'Présence',
      description: 'Nos ateliers à Madagascar',
      icon: Map,
      href: '/presence',
      color: 'pink'
    }
  ]

  return (
    <>
      {/* Top Bar avec coordonnées des catalogues */}
      <div className={`hidden lg:block transition-all duration-300 ${
        scrolled ? 'bg-amber-950 text-amber-100' : 'bg-amber-900 text-amber-100'
      } text-sm py-2`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a href="https://wa.me/261349727107" className="flex items-center gap-2 hover:text-white transition group">
                <div className="p-1 rounded-full bg-amber-800/50 group-hover:bg-amber-700/50 transition">
                  <Phone size={12} />
                </div>
                <span className="text-xs font-medium">+261 34 97 271 07</span>
              </a>
              <a href="mailto:groupartimada@gmail.com" className="flex items-center gap-2 hover:text-white transition group">
                <div className="p-1 rounded-full bg-amber-800/50 group-hover:bg-amber-700/50 transition">
                  <Mail size={12} />
                </div>
                <span className="text-xs font-medium">groupartimada@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-amber-800/50">
                  <MapPin size={12} />
                </div>
                <span className="text-xs font-medium">Antananarivo, Madagascar</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-amber-300 text-xs flex items-center gap-1">
                <Package size={12} />
                {totalProducts} produits artisanaux
              </span>
              <span className="text-amber-300 text-xs font-medium px-2 py-1 bg-amber-800/30 rounded-full">
                🇲🇬 Artisanat Malgache
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-r from-amber-50 via-white to-amber-50 shadow-md'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20 lg:h-24">
            
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <span className="text-4xl filter drop-shadow-xl group-hover:scale-110 transition-transform duration-300">
                  🇲🇬
                </span>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent tracking-tight">
                  ARTIMADA
                </span>
                <span className="text-xs text-amber-600 font-medium -mt-1 tracking-wider">
                  Artisanat Malgache
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Accueil */}
              <a href="/" className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-amber-700 rounded-xl hover:bg-amber-50/80 transition-all duration-200 flex items-center gap-2 group">
                <Store size={18} className="group-hover:scale-110 transition" />
                Accueil
              </a>

              {/* PRODUITS - Menu avec catégories des catalogues */}
              <div 
                ref={dropdownRefs.products}
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 flex items-center gap-2 group ${
                  activeDropdown === 'products' 
                    ? 'text-amber-700 bg-amber-50/80' 
                    : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50/80'
                }`}>
                  <ShoppingBag size={18} className="group-hover:scale-110 transition" />
                  Nos Produits
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Mega Menu avec toutes les catégories des catalogues */}
                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-0 mt-2 w-[750px] bg-white rounded-2xl shadow-2xl border border-amber-100 p-5 animate-slideDown">
                    <div className="grid grid-cols-3 gap-3">
                      {/* Macramé Bags */}
                      <a href="/categorie/macrame" className="group p-3 rounded-xl hover:bg-amber-50/80 transition border border-transparent hover:border-amber-200">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl">🪢</span>
                          <div>
                            <span className="font-semibold text-gray-800 group-hover:text-amber-700">Macramé Bags</span>
                            <span className="text-xs text-gray-400 block">12 articles</span>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 space-y-1">
                          <p>MACR-DISC, DELINE, FILET...</p>
                          <p className="text-amber-600">Dès 4,25 USD</p>
                        </div>
                      </a>

                      {/* Fashion Bags */}
                      <a href="/categorie/fashion-bags" className="group p-3 rounded-xl hover:bg-amber-50/80 transition border border-transparent hover:border-amber-200">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl">👝</span>
                          <div>
                            <span className="font-semibold text-gray-800 group-hover:text-amber-700">Fashion Bags</span>
                            <span className="text-xs text-gray-400 block">28 articles</span>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 space-y-1">
                          <p>RABANE, JUTE, FSH-LOVA...</p>
                          <p className="text-amber-600">Dès 3,63 USD</p>
                        </div>
                      </a>

                      {/* Articles Enfants */}
                      <a href="/categorie/kids" className="group p-3 rounded-xl hover:bg-amber-50/80 transition border border-transparent hover:border-amber-200">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl">🧸</span>
                          <div>
                            <span className="font-semibold text-gray-800 group-hover:text-amber-700">Pour Enfants</span>
                            <span className="text-xs text-gray-400 block">22 articles</span>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 space-y-1">
                          <p>KID-PRISCA, ANDY, ALINE...</p>
                          <p className="text-amber-600">Dès 2,10 USD</p>
                        </div>
                      </a>

                      {/* Sacs de Plage */}
                      <a href="/categorie/beach-bags" className="group p-3 rounded-xl hover:bg-amber-50/80 transition border border-transparent hover:border-amber-200">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl">🏖️</span>
                          <div>
                            <span className="font-semibold text-gray-800 group-hover:text-amber-700">Sacs de Plage</span>
                            <span className="text-xs text-gray-400 block">25 articles</span>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 space-y-1">
                          <p>PLAYA, BB-ANGAR, MAHEF...</p>
                          <p className="text-amber-600">Dès 5,50 USD</p>
                        </div>
                      </a>

                      {/* Paniers Naturels */}
                      <a href="/categorie/straw-baskets" className="group p-3 rounded-xl hover:bg-amber-50/80 transition border border-transparent hover:border-amber-200">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl">🧺</span>
                          <div>
                            <span className="font-semibold text-gray-800 group-hover:text-amber-700">Paniers Naturels</span>
                            <span className="text-xs text-gray-400 block">35 articles</span>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 space-y-1">
                          <p>SHOP-MAMY, BAKOLY, TREFLE...</p>
                          <p className="text-amber-600">Dès 2,68 USD</p>
                        </div>
                      </a>

                      {/* Tote Bags */}
                      <a href="/categorie/tote-bags" className="group p-3 rounded-xl hover:bg-amber-50/80 transition border border-transparent hover:border-amber-200">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl">🛍️</span>
                          <div>
                            <span className="font-semibold text-gray-800 group-hover:text-amber-700">Tote Bags</span>
                            <span className="text-xs text-gray-400 block">18 articles</span>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 space-y-1">
                          <p>TT-ZOMA, ROSE, LAK...</p>
                          <p className="text-amber-600">Dès 4,35 USD</p>
                        </div>
                      </a>
                    </div>

                    {/* Nouveautés et promotions */}
                    <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                      <div className="bg-amber-50 rounded-xl p-3">
                        <span className="text-xs font-semibold text-amber-800">🌟 Nouveautés</span>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-gray-600">BB-GIRAF</span>
                          <span className="text-xs font-medium text-amber-700">13,08 USD</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-600">TT-JUMBO-XL</span>
                          <span className="text-xs font-medium text-amber-700">8,38 USD</span>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-xl p-3">
                        <span className="text-xs font-semibold text-green-800">💰 Meilleurs prix</span>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-gray-600">KID-ANDY</span>
                          <span className="text-xs font-medium text-green-700">2,10 USD</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-600">FSH-TSANTA</span>
                          <span className="text-xs font-medium text-green-700">3,63 USD</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-xs text-gray-500">{totalProducts} produits artisanaux</span>
                      <a href="/produits" className="text-sm font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1 group">
                        Voir tous nos produits
                        <ChevronDown size={16} className="rotate-[-90deg] group-hover:translate-x-1 transition" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* À Propos */}
              <div 
                ref={dropdownRefs.company}
                className="relative"
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 flex items-center gap-2 group ${
                  activeDropdown === 'company' 
                    ? 'text-amber-700 bg-amber-50/80' 
                    : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50/80'
                }`}>
                  <Building2 size={18} className="group-hover:scale-110 transition" />
                  À propos
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === 'company' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-amber-100 p-3 animate-slideDown">
                    {/* Section en vedette */}
                    <div className="mb-2">
                      <a
                        href="/a-propos"
                        className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-amber-50 to-amber-100/50 hover:from-amber-100 hover:to-amber-200/50 transition group"
                      >
                        <div className="p-3 rounded-xl bg-amber-200/50 group-hover:bg-amber-300/50 transition">
                          <Building2 size={24} className="text-amber-700" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-base text-gray-800 group-hover:text-amber-700 mb-1">
                            Qui sommes-nous
                          </div>
                          <div className="text-xs text-gray-600">
                            Artisans malgaches passionnés depuis 2018
                          </div>
                          <div className="mt-2 text-xs font-medium text-amber-600 flex items-center gap-1">
                            Découvrir notre histoire
                            <ChevronDown size={12} className="rotate-[-90deg]" />
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* Grille des autres sections */}
                    <div className="grid grid-cols-2 gap-1 mt-2 pt-2 border-t border-gray-100">
                      {aboutMenuItems.filter(item => !item.featured).map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="flex items-start gap-2 p-3 rounded-xl hover:bg-amber-50/80 transition group"
                        >
                          <div className={`p-1.5 rounded-lg bg-${item.color}-50 group-hover:bg-${item.color}-100 transition`}>
                            <item.icon size={16} className={`text-${item.color}-600`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-xs text-gray-800 group-hover:text-amber-700 truncate">
                              {item.title}
                            </div>
                            <div className="text-[10px] text-gray-500 leading-tight">
                              {item.description}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-3 pt-3 border-t border-gray-100 grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="font-bold text-amber-700 text-sm">45+</div>
                        <div className="text-[10px] text-gray-500">Artisans</div>
                      </div>
                      <div>
                        <div className="font-bold text-amber-700 text-sm">{totalProducts}</div>
                        <div className="text-[10px] text-gray-500">Produits</div>
                      </div>
                      <div>
                        <div className="font-bold text-amber-700 text-sm">6</div>
                        <div className="text-[10px] text-gray-500">Catégories</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact */}
              <div 
                ref={dropdownRefs.contact}
                className="relative"
                onMouseEnter={() => setActiveDropdown('contact')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 flex items-center gap-2 group ${
                  activeDropdown === 'contact' 
                    ? 'text-amber-700 bg-amber-50/80' 
                    : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50/80'
                }`}>
                  <Phone size={18} className="group-hover:scale-110 transition" />
                  Contact
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === 'contact' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === 'contact' && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-amber-100 p-4 animate-slideDown">
                    <div className="space-y-3">
                      <a href="https://wa.me/261349727107" className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition group">
                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition">
                          <Phone size={18} className="text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm text-gray-800">WhatsApp</div>
                          <div className="text-xs text-gray-500">Commandes & devis</div>
                          <div className="text-xs text-green-600 font-medium mt-1">+261 34 97 271 07</div>
                        </div>
                      </a>
                      
                      <div className="space-y-2">
                        <a href="mailto:groupartimada@gmail.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition group">
                          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition">
                            <Mail size={18} className="text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm text-gray-800">Principal</div>
                            <div className="text-xs text-gray-500">groupartimada@gmail.com</div>
                          </div>
                        </a>
                        
                        <a href="mailto:artimadasarlu@gmail.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition group">
                          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                            <Mail size={18} className="text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm text-gray-800">Secondaire</div>
                            <div className="text-xs text-gray-500">artimadasarlu@gmail.com</div>
                          </div>
                        </a>
                      </div>
                      
                      <div className="pt-3 mt-2 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <MapPin size={14} className="text-gray-400" />
                          <span>Antananarivo, Madagascar</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock size={14} className="text-gray-400" />
                          <span>Lun-Ven: 8h00 - 17h00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden lg:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher (MACR, FSH, KID...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 text-sm rounded-xl border border-amber-200 
                           focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 
                           w-48 xl:w-64 transition bg-white/80 backdrop-blur-sm"
                />
                <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              </div>
              <button 
                type="submit" 
                className="ml-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-5 py-2.5 rounded-xl text-sm
                         hover:from-amber-700 hover:to-amber-800 transition-all duration-200 shadow-md hover:shadow-lg 
                         flex items-center gap-2 font-medium"
              >
                <Search size={16} />
                <span>Chercher</span>
              </button>
            </form>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden text-amber-800 hover:bg-amber-100 p-2.5 rounded-xl transition-all duration-200"
              aria-label="Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-amber-200 animate-slideDown">
              <div className="space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Rechercher un produit..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 pl-10 text-sm rounded-xl border border-amber-200 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />
                    <Search className="absolute left-3 top-3.5 text-gray-400" size={16} />
                  </div>
                  <button type="submit" className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 text-sm rounded-xl font-medium">
                    OK
                  </button>
                </form>

                {/* Mobile Navigation */}
                <div className="space-y-2">
                  <a href="/" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-amber-50 rounded-xl font-medium">
                    <Store size={18} />
                    Accueil
                  </a>
                  
                  {/* Produits Mobile */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-4 py-3 text-gray-800 font-medium">
                      <ShoppingBag size={18} />
                      Nos Produits
                    </div>
                    <div className="ml-11 space-y-1 border-l-2 border-amber-100 pl-3">
                      {productCategories.map((cat) => (
                        <a 
                          key={cat.id}
                          href={`/categorie/${cat.id}`}
                          className="flex items-center justify-between px-3 py-2.5 text-sm text-gray-600 hover:bg-amber-50 rounded-lg"
                        >
                          <span>
                            {cat.icon} {cat.nom}
                          </span>
                          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                            {cat.count}
                          </span>
                        </a>
                      ))}
                      <a href="/produits" className="block px-3 py-2.5 text-sm text-amber-600 hover:bg-amber-50 rounded-lg font-medium mt-2">
                        Voir tous les produits →
                      </a>
                    </div>
                  </div>

                  {/* À Propos Mobile */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-4 py-3 text-gray-800 font-medium">
                      <Building2 size={18} />
                      À propos
                    </div>
                    <div className="ml-11 space-y-1 border-l-2 border-amber-100 pl-3">
                      <a 
                        href="/a-propos"
                        className="flex items-start gap-2 px-3 py-3 mb-2 bg-amber-50 rounded-lg hover:bg-amber-100 transition"
                      >
                        <Building2 size={18} className="text-amber-600" />
                        <div>
                          <span className="font-medium text-sm text-amber-800">Qui sommes-nous</span>
                          <p className="text-xs text-gray-600">Découvrez ARTIMADA</p>
                        </div>
                      </a>
                      
                      {aboutMenuItems.filter(item => !item.featured).map((item, index) => (
                        <a 
                          key={index}
                          href={item.href}
                          className="flex items-start gap-2 px-3 py-2.5 text-sm text-gray-600 hover:bg-amber-50 rounded-lg"
                        >
                          <item.icon size={16} className="text-gray-400 mt-0.5" />
                          <div>
                            <span className="font-medium">{item.title}</span>
                            <p className="text-xs text-gray-500">{item.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Contact Mobile */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-4 py-3 text-gray-800 font-medium">
                      <Phone size={18} />
                      Contact
                    </div>
                    <div className="ml-11 space-y-2 border-l-2 border-amber-100 pl-3">
                      <a href="https://wa.me/261349727107" className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-600 hover:bg-green-50 rounded-lg">
                        <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                          <Phone size={14} className="text-green-600" />
                        </div>
                        <span>WhatsApp: +261 34 97 271 07</span>
                      </a>
                      <a href="mailto:groupartimada@gmail.com" className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-600 hover:bg-blue-50 rounded-lg">
                        <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Mail size={14} className="text-blue-600" />
                        </div>
                        <span>groupartimada@gmail.com</span>
                      </a>
                      <a href="mailto:artimadasarlu@gmail.com" className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-600 hover:bg-blue-50 rounded-lg">
                        <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Mail size={14} className="text-blue-600" />
                        </div>
                        <span>artimadasarlu@gmail.com</span>
                      </a>
                      <div className="px-3 py-2.5 text-sm text-gray-500 flex items-center gap-2">
                        <MapPin size={14} />
                        Antananarivo, Madagascar
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <div className="bg-amber-50 rounded-xl p-4">
                    <div className="grid grid-cols-3 gap-2 text-center mb-3">
                      <div>
                        <div className="font-bold text-amber-700 text-base">45+</div>
                        <div className="text-xs text-gray-600">Artisans</div>
                      </div>
                      <div>
                        <div className="font-bold text-amber-700 text-base">{totalProducts}</div>
                        <div className="text-xs text-gray-600">Produits</div>
                      </div>
                      <div>
                        <div className="font-bold text-amber-700 text-base">6</div>
                        <div className="text-xs text-gray-600">Catégories</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-amber-800">
                      <Clock size={16} />
                      <span className="text-sm font-medium">Horaires: Lun-Ven 8h-17h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </>
  )
}