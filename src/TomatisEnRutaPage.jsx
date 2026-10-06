import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, CheckCircle2, Phone, User, MessageSquare, Send, Sparkles, Award, Heart, Play, Navigation, ArrowRight, Camera } from 'lucide-react';
import ServiceFooterExtras from './ServiceFooterExtras';
import Footer from './Footer';
import './ServicesPages.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const cityData = {
  bonao: {
    id: "bonao",
    name: "Bonao",
    province: "Provincia Monseñor Nouel",
    tag: "Monseñor Nouel",
    color: "var(--color-accent)", // #FF8651 Coral Orange
    colorLight: "#FFF1EC",
    headerImage: "/instagram/bonao/bonao.jpeg",
    headerAlt: "Monumento y letras icónicas de Bonao",
    desc: "Jornada intensiva donde acercamos la estimulación neurosensorial del Método Tomatis® a decenas de niños, evaluando atención, comunicación y procesamiento auditivo con orientación personalizada.",
    images: [
      "/instagram/bonao/WhatsApp Image 2026-07-20 at 12.14.01.jpeg",
      "/instagram/bonao/WhatsApp Image 2026-07-20 at 12.14.02 (1).jpeg",
      "/instagram/bonao/WhatsApp Image 2026-07-20 at 12.14.02 (2).jpeg",
      "/instagram/bonao/WhatsApp Image 2026-07-20 at 12.14.02 (3).jpeg"
    ],
    video: "/instagram/bonao/WhatsApp Video 2026-07-20 at 12.14.13.mp4"
  },
  lavega: {
    id: "lavega",
    name: "La Vega",
    province: "Provincia de La Vega",
    tag: "El Valle Real",
    color: "var(--color-secondary)", // #FDD072 Sunny Yellow
    colorLight: "#FFFBEA",
    headerImage: "/instagram/la vega/lavega.png",
    headerAlt: "Monumento de entrada a La Vega",
    desc: "Evaluaciones y pruebas de escucha sonora con modulación acústica, ayudando a las familias a identificar retos de procesamiento auditivo y potenciar el lenguaje y la atención.",
    images: [
      "/instagram/la vega/WhatsApp Image 2026-07-20 at 12.14.02.jpeg"
    ],
    video: null
  },
  santiago: {
    id: "santiago",
    name: "Santiago",
    province: "Santiago de los Caballeros",
    tag: "Ciudad Corazón",
    color: "var(--color-primary)", // #A6DFFD Sky Blue
    colorLight: "#EDF8FF",
    headerImage: "/instagram/santiago/santiago.jpg",
    headerAlt: "Monumento a los Héroes de la Restauración en Santiago",
    desc: "Sesiones de neuroestimulación con familias locales enfocadas en la plasticidad cerebral, integración sensorial y autorregulación para el desarrollo infantil.",
    images: [
      "/instagram/santiago/WhatsApp Image 2026-07-20 at 12.16.38 (1).jpeg",
      "/instagram/santiago/WhatsApp Image 2026-07-20 at 12.16.38.jpeg"
    ],
    video: null
  },
  sfm: {
    id: "sfm",
    name: "San Francisco de Macorís",
    province: "Provincia Duarte",
    tag: "Provincia Duarte",
    color: "var(--color-pink)", // #FFB7D5 Bubblegum Pink
    colorLight: "#FFF0F7",
    headerImage: "/instagram/sfm/sanfranmac.png",
    headerAlt: "Monumento de bienvenida a San Francisco de Macorís",
    desc: "Valoraciones integrales con tecnología de escucha activa Tomatis®, acompañando a niños y padres en el fortalecimiento del habla, la concentración escolar y la confianza.",
    images: [
      "/instagram/sfm/WhatsApp Image 2026-07-20 at 12.14.15.jpeg"
    ],
    video: null
  }
};

const collagePhotos = [
  { src: "/instagram/bonao/WhatsApp Image 2026-07-20 at 12.14.01.jpeg", city: "Bonao" },
  { src: "/instagram/la vega/WhatsApp Image 2026-07-20 at 12.14.02.jpeg", city: "La Vega" },
  { src: "/instagram/santiago/WhatsApp Image 2026-07-20 at 12.16.38.jpeg", city: "Santiago" },
  { src: "/instagram/sfm/WhatsApp Image 2026-07-20 at 12.14.15.jpeg", city: "San Francisco" },
  { src: "/instagram/bonao/WhatsApp Image 2026-07-20 at 12.14.02 (1).jpeg", city: "Bonao" },
  { src: "/instagram/santiago/WhatsApp Image 2026-07-20 at 12.16.38 (1).jpeg", city: "Santiago" },
  { src: "/instagram/bonao/WhatsApp Image 2026-07-20 at 12.14.02 (2).jpeg", city: "Bonao" },
  { src: "/instagram/la vega/lavega.png", city: "La Vega" },
  { src: "/instagram/sfm/sanfranmac.png", city: "San Francisco" },
  { src: "/instagram/bonao/bonao.jpeg", city: "Bonao" },
  { src: "/instagram/santiago/santiago.jpg", city: "Santiago" },
  { src: "/instagram/bonao/WhatsApp Image 2026-07-20 at 12.14.02 (3).jpeg", city: "Bonao" },
  { src: "/instagram/la vega/WhatsApp Image 2026-07-20 at 12.14.02.jpeg", city: "La Vega" },
  { src: "/instagram/santiago/WhatsApp Image 2026-07-20 at 12.16.38.jpeg", city: "Santiago" },
  { src: "/instagram/bonao/WhatsApp Image 2026-07-20 at 12.14.01.jpeg", city: "Bonao" },
  { src: "/instagram/sfm/WhatsApp Image 2026-07-20 at 12.14.15.jpeg", city: "San Francisco" },
];

const TomatisEnRutaPage = ({ onBack, onNavigateService, initialCity = 'bonao' }) => {
  const [selectedCity, setSelectedCity] = useState(initialCity || 'bonao');

  useEffect(() => {
    if (initialCity && cityData[initialCity]) {
      setSelectedCity(initialCity);
    }
  }, [initialCity]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    city: 'Santiago',
    phone: '',
    comments: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const activeCity = cityData[selectedCity];

  return (
    <div className="service-detail-page" style={{ background: '#FAF9F5' }}>
      {/* Hero Header - Multisensorial Brand Blue Style */}
      <section className="service-hero bg-blue with-grid" style={{ position: 'relative', padding: '60px 0 55px', overflow: 'hidden' }}>
        {/* Decor elements */}
        <div className="dec-star-4 orange" style={{ top: '15%', left: '4%', transform: 'scale(1.3)' }}></div>
        <div className="dec-wiggle hide-mobile" style={{ top: '25%', right: '45%' }}></div>
        <div className="dec-circle" style={{ bottom: '-40px', right: '-40px', width: '220px', height: '220px', background: 'var(--color-secondary)', opacity: 0.5 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', alignItems: 'center' }}>
            
            {/* Left Content */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div style={{
                background: 'var(--color-accent)',
                color: 'white',
                padding: '6px 18px',
                borderRadius: '30px',
                fontWeight: 800,
                fontSize: '0.85rem',
                display: 'inline-block',
                marginBottom: '16px',
                border: '2px solid var(--color-primary-dark)'
              }}>
                PROGRAMA PROVINCIAL
              </div>
              <h1 style={{ fontSize: '3.4rem', marginBottom: '18px', color: 'var(--color-primary-dark)', fontWeight: 900, lineHeight: 1.15 }}>
                Tomatis® <span style={{ color: 'var(--color-accent)' }}>en Ruta</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', lineHeight: 1.6, marginBottom: '28px', opacity: 0.9 }}>
                Llevamos la tecnología neurosensorial del Método Tomatis® directamente a las provincias de la República Dominicana. ¡Conoce nuestras jornadas y solicita que vayamos a tu ciudad!
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '28px' }}>
                <button
                  onClick={() => {
                    document.getElementById('solicitar-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary"
                  style={{
                    padding: '14px 28px',
                    fontSize: '1rem',
                    borderRadius: '24px',
                    fontWeight: 800,
                    border: '3px solid var(--color-primary-dark)',
                    cursor: 'pointer',
                    boxShadow: '4px 4px 0px var(--color-primary-dark)'
                  }}
                >
                  Solicitar mi ciudad
                </button>
                <button
                  onClick={() => {
                    document.getElementById('galeria-visitas')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    padding: '14px 28px',
                    fontSize: '1rem',
                    borderRadius: '24px',
                    fontWeight: 800,
                    background: 'white',
                    color: 'var(--color-primary-dark)',
                    border: '3px solid var(--color-primary-dark)',
                    cursor: 'pointer',
                    boxShadow: '4px 4px 0px var(--color-primary-dark)'
                  }}
                >
                  Ver fotos de jornadas
                </button>
              </div>

              {/* Feature Highlights */}
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, fontSize: '0.95rem', color: 'var(--color-primary-dark)' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--color-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--color-primary-dark)', flexShrink: 0 }}>
                    <Award size={18} color="var(--color-primary-dark)" />
                  </div>
                  Equipamiento Certificado
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, fontSize: '0.95rem', color: 'var(--color-primary-dark)' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--color-primary-dark)', flexShrink: 0 }}>
                    <Navigation size={18} color="var(--color-primary-dark)" />
                  </div>
                  4+ Provincias
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, fontSize: '0.95rem', color: 'var(--color-primary-dark)' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#FFD6E0', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--color-primary-dark)', flexShrink: 0 }}>
                    <Heart size={18} color="var(--color-accent)" fill="var(--color-accent)" />
                  </div>
                  Terapias Personalizadas
                </div>
              </div>
            </motion.div>

            {/* Right Photo Frame - Brand Style */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div style={{
                borderRadius: '32px',
                border: '5px solid var(--color-primary-dark)',
                boxShadow: '10px 10px 0px var(--color-accent)',
                overflow: 'hidden',
                background: 'white',
                aspectRatio: '4/3'
              }}>
                <img
                  src="/instagram/bonao/WhatsApp Image 2026-07-20 at 12.14.01.jpeg"
                  alt="Jornada Tomatis en Ruta"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Visited Cities Gallery */}
      <section id="galeria-visitas" className="city-gallery-section">
        <div className="container">
          <h2 className="city-gallery-title">
            Ciudades visitadas
          </h2>

          <div className="city-gallery-layout">
            {/* Left: On-brand Multisensorial Buttons */}
            <div className="city-nav-list">
              {Object.values(cityData).map((city) => {
                const isSelected = selectedCity === city.id;
                return (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCity(city.id)}
                    className={`city-nav-btn ${isSelected ? 'active' : ''}`}
                    style={{
                      '--btn-brand-color': city.color,
                      '--btn-brand-light': city.colorLight
                    }}
                  >
                    <span>{city.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Right: Selected City Content with Place Photo Header */}
            <div className="city-content-panel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCity}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Header with photo of the place */}
                  <div className="city-hero-header">
                    <div className="city-hero-cover">
                      <img
                        src={activeCity.headerImage}
                        alt={activeCity.headerAlt || `Vista de ${activeCity.name}`}
                        className="city-hero-cover-img"
                      />
                    </div>

                    <div className="city-hero-info">
                      <h3 className="city-hero-name">{activeCity.name}</h3>
                      <p className="city-content-desc">{activeCity.desc}</p>
                    </div>
                  </div>

                  {/* Photo & Video Grid (Video matches same uniform photo size) */}
                  <div className="city-photos-grid">
                    {activeCity.images.map((imgSrc, idx) => (
                      <div key={idx} className="city-photo-item">
                        <img
                          src={imgSrc}
                          alt={`${activeCity.name} foto ${idx + 1}`}
                          loading="lazy"
                        />
                      </div>
                    ))}

                    {activeCity.video && (
                      <div className="city-photo-item city-video-item">
                        <video
                          src={activeCity.video}
                          controls
                          playsInline
                          preload="metadata"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Demand Funnel Form */}
      <section id="solicitar-form" className="solicitar-form-section">
        {/* Background Photo Collage of Visits */}
        <div className="form-collage-backdrop" aria-hidden="true">
          <div className="form-collage-grid">
            {collagePhotos.map((photo, i) => (
              <div key={i} className={`collage-photo-card card-tilt-${(i % 5) + 1}`}>
                <div className="collage-photo-inner">
                  <img src={photo.src} alt={photo.city} loading="lazy" />
                  <span className="collage-city-tag">📍 {photo.city}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="form-collage-overlay" />
        </div>

        <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 10 }}>
          <div style={{
            background: 'var(--color-primary-light)',
            borderRadius: '36px',
            padding: '44px',
            border: '4px solid var(--color-primary-dark)',
            boxShadow: '12px 12px 0px var(--color-primary-dark)',
            position: 'relative',
            zIndex: 10
          }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div className="badge-modern" style={{ background: 'var(--color-accent)', color: 'white', padding: '6px 18px', borderRadius: '20px', fontWeight: 800, fontSize: '0.85rem', display: 'inline-block', marginBottom: '12px' }}>
                ¿VIVES EN OTRA PROVINCIA?
              </div>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary-dark)', fontWeight: 900 }}>
                Solicita Tomatis® en Tu Ciudad
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginTop: '8px' }}>
                Medimos la demanda de cada región para priorizar nuestras próximas visitas médicas. ¡Déjanos tus datos y suma tu provincia!
              </p>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: 'white',
                  padding: '36px',
                  borderRadius: '24px',
                  border: '3px solid var(--color-primary-dark)',
                  textAlign: 'center'
                }}
              >
                <div style={{ marginBottom: '12px' }}><CheckCircle2 size={48} color="var(--color-accent)" style={{ margin: '0 auto' }} /></div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--color-primary-dark)', marginBottom: '12px' }}>
                  ¡Solicitud Registrada!
                </h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Muchas gracias <strong>{formData.parentName || 'estimado padre/madre'}</strong>. Tu voto para <strong>{formData.city}</strong> ha sido agregado a nuestra lista prioritaria. Te contactaremos cuando confirmemos fechas en tu zona.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '8px', fontSize: '0.95rem' }}>
                    Nombre del Padre, Madre o Tutor:
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                    <input
                      type="text"
                      required
                      placeholder="Ej. María Rodríguez"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px 14px 48px',
                        borderRadius: '16px',
                        border: '3px solid var(--color-primary-dark)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        outline: 'none',
                        background: 'white'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '8px', fontSize: '0.95rem' }}>
                    ¿En qué Ciudad o Provincia vives?
                  </label>
                  <div style={{ position: 'relative' }}>
                    <MapPin size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px 14px 48px',
                        borderRadius: '16px',
                        border: '3px solid var(--color-primary-dark)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        outline: 'none',
                        background: 'white',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="Santiago">Santiago</option>
                      <option value="La Vega">La Vega</option>
                      <option value="Bonao">Bonao</option>
                      <option value="San Francisco de Macorís">San Francisco de Macorís</option>
                      <option value="Puerto Plata">Puerto Plata</option>
                      <option value="Moca">Moca</option>
                      <option value="Baní">Baní</option>
                      <option value="San Cristóbal">San Cristóbal</option>
                      <option value="Higüey / Punta Cana">Higüey / Punta Cana</option>
                      <option value="Barahona">Barahona</option>
                      <option value="Azua">Azua</option>
                      <option value="Otra provincia">Otra provincia</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '8px', fontSize: '0.95rem' }}>
                    Teléfono de Contacto (WhatsApp):
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                    <input
                      type="tel"
                      required
                      placeholder="Ej. (809) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px 14px 48px',
                        borderRadius: '16px',
                        border: '3px solid var(--color-primary-dark)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        outline: 'none',
                        background: 'white'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '8px', fontSize: '0.95rem' }}>
                    Comentarios o edad del niño/a:
                  </label>
                  <div style={{ position: 'relative' }}>
                    <MessageSquare size={20} style={{ position: 'absolute', left: '16px', top: '18px', color: 'var(--color-text-muted)' }} />
                    <textarea
                      rows={3}
                      placeholder="Cuéntanos brevemente sobre las necesidades de tu hijo..."
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px 14px 48px',
                        borderRadius: '16px',
                        border: '3px solid var(--color-primary-dark)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        outline: 'none',
                        resize: 'none',
                        background: 'white'
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    border: 'none',
                    cursor: 'pointer',
                    padding: '16px 28px',
                    fontSize: '1.1rem',
                    borderRadius: '24px',
                    fontWeight: 900,
                    marginTop: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  <Send size={20} /> Solicitar Visita a Mi Provincia
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer Extras */}
      <ServiceFooterExtras serviceId="tomatis" onBack={onBack} onNavigateService={onNavigateService} />

      {/* Footer */}
      <Footer onNavigate={onBack} />
    </div>
  );
};

export default TomatisEnRutaPage;
