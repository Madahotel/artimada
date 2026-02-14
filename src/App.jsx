import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Produits from './pages/Produits'
import Categorie from './pages/Categorie'
import ProduitDetail from './pages/ProduitDetail'
import Artisans from './pages/Artisans'
import APropos from './pages/APropos'
import Recherche from './pages/Recherche'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/categorie/:id" element={<Categorie />} />
        <Route path="/produit/:id" element={<ProduitDetail />} />
        <Route path="/artisans" element={<Artisans />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/recherche" element={<Recherche />} />
      </Routes>
    </Router>
  )
}

export default App
