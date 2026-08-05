import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, CheckCircle2, Phone, User, MessageSquare, Send, Sparkles, Award, Heart, Play, Navigation } from 'lucide-react';
import ServiceFooterExtras from './ServiceFooterExtras';
import Footer from './Footer';
import './ServicesPages.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const cityData = {
  bonao: {
    name: "Bonao",
    badge: "Monseñor Nouel",
    desc: "En Bonao realizamos una jornada intensiva donde acercamos la estimulación neurosensorial del Método Tomatis® a decenas de niños. Gracias a nuestros equipos portátiles de conducción ósea y aérea, evaluamos la atención, la comunicación y el procesamiento auditivo en la villa de las hortensias, brindando orientación directa a las familias.",
    cover: "/instagram/bonao/bonao.jpeg",
    objectPosition: "center 25%",
    images: [
      "/instagram/bonao/WhatsApp Image 2026-07-20 at 12.14.01.jpeg",
      "/instagram/bonao/WhatsApp Image 2026-07-20 at 12.14.02 (1).jpeg",
      "/instagram/bonao/WhatsApp Image 2026-07-20 at 12.14.02 (2).jpeg",
      "/instagram/bonao/WhatsApp Image 2026-07-20 at 12.14.02 (3).jpeg"
    ],
    video: "/instagram/bonao/WhatsApp Video 2026-07-20 at 12.14.13.mp4"
  },
  lavega: {
    name: "La Vega",
    badge: "Provincia La Vega",
    desc: "Nuestra llegada a la culta y olímpica ciudad de La Vega permitió a las familias locales experimentar de primera mano la tecnología de modulación sonora del Método Tomatis®. Realizamos pruebas de escucha personalizadas para identificar retos de procesamiento auditivo y potenciar la concentración y el habla.",
    cover: "/instagram/la vega/lavega.png",
    objectPosition: "center 15%",
    images: [
      "/instagram/la vega/WhatsApp Image 2026-07-20 at 12.14.02.jpeg"
    ]
  },
  santiago: {
    name: "Santiago de los Caballeros",
    badge: "Ciudad Corazón",
    desc: "En el corazón del Cibao, Santiago fue sede de jornadas completas de neuroestimulación Tomatis®. Trabajamos de la mano con familias santiagueras para estimular la plasticidad cerebral, mejorando la integración sensorial, la autorregulación emocional y el aprendizaje infantil.",
    cover: "/instagram/santiago/santiago.jpg",
    objectPosition: "center 15%",
    images: [
      "/instagram/santiago/WhatsApp Image 2026-07-20 at 12.16.38 (1).jpeg",
      "/instagram/santiago/WhatsApp Image 2026-07-20 at 12.16.38.jpeg"
    ]
  },
  sfm: {
    name: "San Francisco de Macorís",
    badge: "Duarte",
    desc: "San Francisco de Macorís nos recibió en una jornada dedicada a la salud neurosensorial infantil. Adaptamos nuestros dispositivos de escucha activa Tomatis® para realizar valoraciones completas, ayudando a los niños de la provincia Duarte a fortalecer su lenguaje, enfoque académico y confianza.",
    cover: "/instagram/sfm/sanfranmac.png",
    objectPosition: "center 75%",
    images: [
      "/instagram/sfm/WhatsApp Image 2026-07-20 at 12.14.15.jpeg"
    ]
  }
};

const TomatisEnRutaPage = ({ onBack, onNavigateService }) => {
  const [selectedCity, setSelectedCity] = useState('bonao');
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
      <nav className="navbar" style={{ position: 'sticky', top: 0, zIndex: 100, background: 'white', borderBottom: '2px solid var(--color-primary-dark)' }}>
        <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px' }}>
          <button onClick={onBack} className="btn-back" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, color: 'var(--color-primary-dark)', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
            <ArrowLeft size={20} /> Volver al Inicio
          </button>
          <div className="nav-logo">
            <img src="/multilogo2 (1).png" alt="Logo" className="nav-logo-img" style={{ height: '45px', margin: '0 auto' }} />
          </div>
        </div>
      </nav>

      {/* Hero Header - Multisensorial Brand Blue Style */}
      <section className="hero bg-blue with-grid" style={{ position: 'relative', padding: '75px 0 65px', overflow: 'hidden' }}>
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
      <section id="galeria-visitas" style={{ padding: '75px 0', background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="badge-modern" style={{ background: 'var(--color-secondary)', color: 'var(--color-primary-dark)', border: '2px solid var(--color-primary-dark)', padding: '6px 16px', borderRadius: '20px', fontWeight: 800, fontSize: '0.85rem', display: 'inline-block', marginBottom: '12px' }}>
              GALERÍA DE VISITAS
            </div>
            <h2 style={{ fontSize: '2.8rem', color: 'var(--color-primary-dark)', fontWeight: 900 }}>
              Ciudades donde hemos llevado el bienestar
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', maxWidth: '650px', margin: '8px auto 0' }}>
              Haz clic en cada ciudad para ver las fotos reales de nuestras intervenciones y talleres.
            </p>
          </div>

          {/* City Selection Chips */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {[
              { id: 'bonao', label: 'Bonao' },
              { id: 'lavega', label: 'La Vega' },
              { id: 'santiago', label: 'Santiago' },
              { id: 'sfm', label: 'San Francisco de Macorís' }
            ].map((city) => (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city.id)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '30px',
                  border: '3px solid var(--color-primary-dark)',
                  fontWeight: 800,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: selectedCity === city.id ? 'var(--color-accent)' : 'white',
                  color: selectedCity === city.id ? 'white' : 'var(--color-primary-dark)',
                  boxShadow: selectedCity === city.id ? '4px 4px 0px var(--color-primary-dark)' : '2px 2px 0px var(--color-primary-dark)'
                }}
              >
                {city.label}
              </button>
            ))}
          </div>

          {/* City Content Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCity}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{
                background: 'white',
                borderRadius: '32px',
                padding: '40px',
                border: '3px solid var(--color-primary-dark)',
                boxShadow: '8px 8px 0px var(--color-primary-dark)'
              }}
            >
              {/* City Cover Hero Banner (Image as background) */}
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '3.5px solid var(--color-primary-dark)',
                boxShadow: '6px 6px 0px var(--color-primary-dark)',
                position: 'relative',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '36px 32px',
                marginBottom: '32px',
                backgroundImage: `linear-gradient(to top, rgba(15, 23, 42, 0.88) 0%, rgba(15, 23, 42, 0.4) 60%, rgba(0, 0, 0, 0.15) 100%), url("${encodeURI(activeCity.cover)}")`,
                backgroundSize: 'cover',
                backgroundPosition: activeCity.objectPosition || 'center center'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'var(--color-secondary)',
                  padding: '8px 18px',
                  borderRadius: '20px',
                  border: '2px solid var(--color-primary-dark)',
                  fontWeight: 900,
                  fontSize: '0.85rem',
                  color: 'var(--color-primary-dark)',
                  boxShadow: '2px 2px 0px var(--color-primary-dark)'
                }}>
                  ✓ Visita Realizada
                </div>

                <div>
                  <div style={{
                    display: 'inline-block',
                    background: 'var(--color-accent)',
                    color: 'white',
                    padding: '4px 14px',
                    borderRadius: '14px',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                    border: '2px solid var(--color-primary-dark)'
                  }}>
                    {activeCity.badge}
                  </div>
                  <h3 style={{
                    fontSize: '2.8rem',
                    fontWeight: 900,
                    color: 'white',
                    margin: 0,
                    lineHeight: 1.1,
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                  }}>
                    {activeCity.name}
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '32px' }}>
                {activeCity.desc}
              </p>

              {/* Photo Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: activeCity.video ? '36px' : '0' }}>
                {activeCity.images.map((imgSrc, idx) => {
                  const isPortraitCity = selectedCity === 'lavega' || selectedCity === 'sfm';
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(0,0,0,0.14)' }}
                      transition={{ duration: 0.2 }}
                      style={{
                        borderRadius: '14px',
                        overflow: 'hidden',
                        border: '1px solid #E2E8F0',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.07)',
                        height: isPortraitCity ? 'auto' : '260px',
                        maxHeight: isPortraitCity ? '550px' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#FFF'
                      }}
                    >
                      <img
                        src={imgSrc}
                        alt={`Visita ${activeCity.name} ${idx + 1}`}
                        style={{
                          width: '100%',
                          height: isPortraitCity ? 'auto' : '100%',
                          maxHeight: isPortraitCity ? '550px' : '100%',
                          objectFit: isPortraitCity ? 'contain' : 'cover',
                          display: 'block'
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Video if available */}
              {activeCity.video && (
                <div style={{ marginTop: '32px' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Play size={20} fill="var(--color-accent)" color="var(--color-accent)" /> Video de la jornada en {activeCity.name}
                  </h4>
                  <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid #E2E8F0', boxShadow: '0 8px 25px rgba(0,0,0,0.12)', background: 'black' }}>
                    <video
                      src={activeCity.video}
                      controls
                      playsInline
                      style={{ width: '100%', maxHeight: '440px', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Demand Funnel Form */}
      <section id="solicitar-form" style={{ padding: '80px 0', background: '#FFF' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{
            background: '#FAF9DC',
            borderRadius: '36px',
            padding: '44px',
            border: '4px solid var(--color-primary-dark)',
            boxShadow: '10px 10px 0px var(--color-primary-dark)'
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
                        outline: 'none'
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
                        outline: 'none'
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
                        resize: 'none'
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
