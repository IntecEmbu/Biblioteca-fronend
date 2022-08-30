import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar.js'
import CardHome from '../../components/CardHome/CardHome.js' 
import '../../styles/Home.css'

function index() {

  // Coleta o nome do usuário logado
  const name = JSON.parse(localStorage.getItem('user')).librarian_name

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="home-text">
          <span className="home-title">
            Olá, {name}!
          </span>
        </div>
      </div>
      <CardHome />
    </div>
  )
}

export default index