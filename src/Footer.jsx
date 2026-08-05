import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="footer" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="footer-bg-logo-right">
        <img src="/branding/logopng.webp" alt="" className="footer-logo-img" />
      </div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-col" style={{ gridColumn: 'span 2' }}>
            <span className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <img src="/multilogo2 (1).png" className="nav-logo-img" alt="Multisensorial Logo" style={{ height: '90px' }} />
            </span>
            <p style={{ maxWidth: '80%' }}>
              Centro de Estimulación Multisensorial y Neuropedagogía. Especialistas en el Método Tomatis en República Dominicana.
            </p>
          </div>
          <div className="footer-col">
            <h4>Enlaces</h4>
            <ul>
              <li>
                {onNavigate ? (
                  <button onClick={() => onNavigate('metodo')} style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', font: 'inherit', cursor: 'pointer' }}>Método</button>
                ) : (
                  <a href="#metodo">Método</a>
                )}
              </li>
              <li>
                {onNavigate ? (
                  <button onClick={() => onNavigate('servicios')} style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', font: 'inherit', cursor: 'pointer' }}>Servicios</button>
                ) : (
                  <a href="#servicios">Servicios</a>
                )}
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', font: 'inherit', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Agendar Cita
                </button>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Ubicación & Contacto</h4>
            <ul>
              <li>Calle Teodoro Chasseriau, Las Praderas</li>
              <li>Santo Domingo, Rep. Dom.</li>
              <li>Tel: +1 (809) 306-5040</li>
              <li>Email: <a href="mailto:multisensorialrd@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>multisensorialrd@gmail.com</a></li>
              <li>
                <a href="https://instagram.com/multisensorialrd" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'inherit' }}>
                  <Instagram size={16} /> @multisensorialrd
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Centro Multisensorial RD. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
