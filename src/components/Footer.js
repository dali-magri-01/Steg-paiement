import React from 'react'
import "./FooterStyle.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">A propos</h5>
            <p className="text-muted">La Société tunisienne de l'électricité et du gaz (arabe : الشركة التونسية للكهرباء و الغاز) ou STEG est une société tunisienne de droit public à caractère non administratif. Créée en 1962, elle a pour mission la production et la distribution de l'électricité et du gaz naturel sur le territoire tunisien.

La STEG est la deuxième plus grande entreprise tunisienne par son chiffre d'affaires en 2012</p>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4">
            <h5 className="text-uppercase mb-4"></h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com/steg.tunisie">Facebook</a></li>
              
              <li><a href="https://www.steg.com.tn">Site web steg</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <p className="mb-0">Copyright © {new Date().getFullYear()}
        <a href="https://example.com/"> Example.com</a>. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer