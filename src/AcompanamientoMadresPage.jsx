import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Compass, Sparkles, Smile, HelpCircle, ChevronDown, ChevronUp, Star, CheckCircle2, UserCheck, ArrowRight, Brain, BatteryCharging, Waves, Coffee } from 'lucide-react';
import ServiceFooterExtras from './ServiceFooterExtras';
import Footer from './Footer';
import './ServicesPages.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const SelfCareCompass = () => {
  const [selectedSegment, setSelectedSegment] = useState('asimilacion');
  const [rotation, setRotation] = useState(0);

  const segments = {
    asimilacion: {
      title: "Asimilación y Compasión",
      desc: "Soltar la culpa y el duelo de las expectativas. Tu hijo tiene un potencial único y hermoso.",
      color: "var(--color-primary-dark)",
      angle: 0
    },
    estres: {
      title: "Afrontamiento del Estrés",
      desc: "La sobrecarga del cuidador es real. Necesitas micropausas para recargar tu propia energía.",
      color: "var(--color-accent)",
      angle: 90
    },
    calma: {
      title: "Razonamiento y Calma",
      desc: "Ante desbordes o miradas en la calle: respirar, autorregularte y ser el faro seguro de tu hijo.",
      color: "var(--color-pink)",
      angle: 180
    },
    transiciones: {
      title: "Etapas del Desarrollo",
      desc: "Anticipar con claridad médica y psicológica los cambios escolares, apagando la angustia del futuro.",
      color: "var(--color-green)",
      angle: 270
    }
  };

  const selectSegment = (key) => {
    setSelectedSegment(key);
    setRotation(-segments[key].angle);
  };

  return (
    <div className="compass-widget-wrapper" style={{ background: 'white', border: '4px solid var(--color-primary-dark)', boxShadow: '8px 8px 0px var(--color-pink)', borderRadius: '28px', padding: '26px' }}>
      <motion.div 
        className="compass-dial-outer"
        animate={{ rotate: rotation }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="compass-center-spinner">
          <Heart size={24} style={{ color: 'var(--color-accent)' }} />
        </div>
        <div className="compass-needle"></div>

        {/* Quadrants */}
        <div 
          onClick={() => selectSegment('asimilacion')} 
          className="compass-segment-btn" 
          style={{ top: 0, left: 0, width: '100%', height: '50%', background: 'rgba(35, 71, 239, 0.08)' }}
        >
          <span className="compass-segment-text" style={{ top: '24px', left: '50%', transform: 'translateX(-50%)', fontWeight: 900 }}>Asimilación</span>
        </div>
        <div 
          onClick={() => selectSegment('estres')} 
          className="compass-segment-btn" 
          style={{ top: '50%', left: '50%', width: '50%', height: '50%', background: 'rgba(255, 134, 81, 0.08)' }}
        >
          <span className="compass-segment-text" style={{ bottom: '24px', right: '24px', transform: 'rotate(-90deg)', fontWeight: 900 }}>Estrés</span>
        </div>
        <div 
          onClick={() => selectSegment('calma')} 
          className="compass-segment-btn" 
          style={{ top: '50%', left: 0, width: '50%', height: '50%', background: 'rgba(255, 183, 213, 0.15)' }}
        >
          <span className="compass-segment-text" style={{ bottom: '24px', left: '24px', transform: 'rotate(-180deg)', fontWeight: 900 }}>Calma</span>
        </div>
        <div 
          onClick={() => selectSegment('transiciones')} 
          className="compass-segment-btn" 
          style={{ top: 0, left: '50%', width: '50%', height: '50%', background: 'rgba(18, 179, 122, 0.08)' }}
        >
          <span className="compass-segment-text" style={{ top: '24px', right: '24px', transform: 'rotate(-270deg)', fontWeight: 900 }}>Etapas</span>
        </div>
      </motion.div>

      <div style={{ textAlign: 'center', marginTop: '20px', minHeight: '90px' }}>
        <h4 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '6px', fontWeight: 900 }}>
          {segments[selectedSegment].title}
        </h4>
        <p style={{ fontSize: '0.88rem', color: 'var(--color-primary-dark)', lineHeight: 1.45, maxWidth: '320px', margin: '0 auto', fontWeight: 600 }}>
          {segments[selectedSegment].desc}
        </p>
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '12px' }}>
        {Object.keys(segments).map((key) => (
          <button
            key={key}
            onClick={() => selectSegment(key)}
            className="stimulus-tab"
            style={{
              background: selectedSegment === key ? segments[key].color : 'white',
              color: selectedSegment === key ? 'white' : 'var(--color-primary-dark)',
              borderColor: 'var(--color-primary-dark)',
              fontSize: '0.78rem',
              fontWeight: 800,
              borderRadius: '50px',
              padding: '6px 14px'
            }}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{
      background: 'white',
      borderRadius: '18px',
      border: '3px solid var(--color-primary-dark)',
      boxShadow: isOpen ? '4px 4px 0px var(--color-pink)' : '3px 3px 0px var(--color-primary-dark)',
      marginBottom: '12px',
      overflow: 'hidden',
      transition: 'all 0.2s ease'
    }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '18px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'left',
          fontSize: '1.05rem',
          fontWeight: 800,
          color: 'var(--color-primary-dark)',
          cursor: 'pointer'
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Heart size={20} color="var(--color-accent)" />
          {question}
        </span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div style={{
              padding: '0 20px 18px 50px',
              color: 'var(--color-primary-dark)',
              fontSize: '0.95rem',
              lineHeight: 1.5,
              fontWeight: 600,
              borderTop: '2px dashed var(--color-bg)'
            }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AcompanamientoMadresPage = ({ onBack, onBook, onNavigateService }) => {
  const clinicalAxes = [
    {
      num: "01",
      badge: "DUELO & ACEPTACIÓN",
      colorClass: "color-blue",
      title: "Asimilación del Proceso",
      icon: <Brain size={24} color="var(--color-primary-dark)" />,
      desc: "Soltar la culpa y el duelo de las expectativas ideales. Validar tus emociones para abrazar la identidad y potencial real de tu hijo."
    },
    {
      num: "02",
      badge: "SALUD DE LA MAMÁ",
      colorClass: "color-orange",
      title: "Afrontamiento del Estrés",
      icon: <BatteryCharging size={24} color="var(--color-accent)" />,
      desc: "El burnout del cuidador existe y agota. Blindamos tu energía física y mental con pausas realistas dentro de tu rutina cotidiana."
    },
    {
      num: "03",
      badge: "AUTORREGULACIÓN",
      colorClass: "color-pink",
      title: "Razonamiento y Calma",
      icon: <Waves size={24} color="var(--color-primary-dark)" />,
      desc: "Frente a crisis de conducta o miradas ajenas: herramientas para no reaccionar con frustración y ser el ancla serena que tu pequeño necesita."
    },
    {
      num: "04",
      badge: "TRANSICIONES VITALES",
      colorClass: "color-green",
      title: "Etapas del Desarrollo",
      icon: <Sparkles size={24} color="var(--color-green)" />,
      desc: "Estrategias anticipatorias para cada nueva etapa: escolarización, cambios biológicos y autonomía, reemplazando la angustia por confianza."
    }
  ];

  return (
    <div className="service-detail-page bg-cream">
      {/* Hero with Real Photo & Badges */}
      <section className="service-hero bg-cream with-grid" style={{ position: 'relative', overflow: 'hidden', padding: '60px 0 50px' }}>
        <div className="container">
          <div className="brand-hero-split">
            {/* Left Column: Punchy Copy */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="badge-modern" style={{ background: 'var(--color-pink)', color: 'var(--color-primary-dark)', marginBottom: '14px' }}>
                💖 CUIDAR A LA QUE CUIDA · ACOMPAÑAMIENTO CLÍNICO
              </div>
              <h1 style={{ fontSize: '3.4rem', marginBottom: '16px', lineHeight: 1.1 }}>
                Acompañamiento a Mamás de Niños con <span style={{ color: 'var(--color-accent)' }}>Alguna Condición</span>
              </h1>
              <p style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '22px', lineHeight: 1.5 }}>
                Porque no puedes dar agua de una jarra vacía. Un espacio cálido y profesional para sanar la culpa, recuperar la calma y liderar el desarrollo de tu hijo sin perderte en el intento.
              </p>

              {/* Punchy Stat Pills */}
              <div className="punchy-stat-row">
                <span className="punchy-stat-pill">
                  <Heart size={16} color="var(--color-accent)" /> 100% Sin Juicios
                </span>
                <span className="punchy-stat-pill">
                  <Coffee size={16} color="var(--color-primary-dark)" /> Contención Real
                </span>
                <span className="punchy-stat-pill">
                  <UserCheck size={16} color="var(--color-green)" /> Vivencia Propia
                </span>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '26px' }}>
                <button onClick={onBook} className="btn-primary" style={{ border: 'none', cursor: 'pointer', padding: '14px 32px' }}>
                  Agendar Sesión de Contención
                </button>
                <a href="#ejes" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Ver los 4 Ejes <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Warm Photo Card */}
            <motion.div 
              initial={{ opacity: 0, rotate: -2, scale: 0.95 }}
              animate={{ opacity: 1, rotate: 1.5, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="brand-hero-photo-wrap"
            >
              <div className="brand-hero-tape">AMOR & CIENCIA</div>
              <div className="brand-hero-photo-frame" style={{ boxShadow: '10px 10px 0px var(--color-pink)' }}>
                <img src="/hero.webp" alt="Madre abrazando a su hijo con amor" />
              </div>
              <div className="brand-floating-sticker" style={{ background: 'var(--color-pink)' }}>
                <Heart size={16} fill="var(--color-accent)" color="var(--color-accent)" /> No Estás Sola
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Therapist Spotlight with Real Photo of Mery Torrealba */}
      <section className="service-content-section" style={{ background: '#FAF9DC', borderTop: '3px dashed var(--color-primary-dark)', borderBottom: '3px dashed var(--color-primary-dark)' }}>
        <div className="container">
          <div className="therapist-spotlight-container">
            {/* Photo of Mery Torrealba */}
            <div className="therapist-photo-frame">
              <img src="/mery_torrealba_new.webp" alt="Mery Torrealba - Especialista y Madre" />
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                right: '10px',
                background: 'rgba(255, 255, 255, 0.95)',
                border: '2px solid var(--color-primary-dark)',
                borderRadius: '12px',
                padding: '6px 10px',
                textAlign: 'center',
                fontWeight: 900,
                fontSize: '0.82rem',
                color: 'var(--color-primary-dark)'
              }}>
                Mery Torrealba · Fundadora & Terapeuta
              </div>
            </div>

            {/* Quote & Credentials */}
            <div>
              <span className="badge-modern" style={{ background: 'var(--color-secondary)', color: 'var(--color-primary-dark)', marginBottom: '12px' }}>
                ⭐ NUESTRA MAYOR DIFERENCIA
              </span>
              <h2 style={{ fontSize: '2.4rem', marginTop: '8px', marginBottom: '14px', lineHeight: 1.15 }}>
                Experiencia clínica y, ante todo, vivencia personal de esta maternidad
              </h2>
              
              <div style={{ background: '#FFF5F0', borderLeft: '5px solid var(--color-accent)', padding: '16px 20px', borderRadius: '0 18px 18px 0', marginBottom: '18px' }}>
                <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary-dark)', fontStyle: 'italic', lineHeight: 1.5 }}>
                  "Sé lo que se siente esperar un diagnóstico con el corazón encogido, el cansancio de las salas de espera y las miradas en la calle. No te hablaré desde manuales abstractos: unimos la ciencia de la conducta con la empatía real de quien camina exactamente en tus mismos zapatos."
                </p>
              </div>

              <div className="punchy-stat-row">
                <span className="punchy-stat-pill" style={{ background: 'white' }}>
                  <CheckCircle2 size={16} color="var(--color-green)" /> Especialista en Neurodesarrollo
                </span>
                <span className="punchy-stat-pill" style={{ background: 'white' }}>
                  <CheckCircle2 size={16} color="var(--color-green)" /> Vivencia propia de madre
                </span>
                <span className="punchy-stat-pill" style={{ background: 'white' }}>
                  <CheckCircle2 size={16} color="var(--color-green)" /> Cero fórmulas teóricas imposibles
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Clinical Axes as Vibrant Neo-brutalist Cards */}
      <section id="ejes" className="service-content-section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <span className="badge-modern" style={{ background: 'var(--color-accent)', color: 'white' }}>
              LOS 4 PILARES TERAPÉUTICOS
            </span>
            <h2 style={{ fontSize: '2.8rem', marginTop: '10px' }}>
              Los 4 Ejes del Acompañamiento
            </h2>
            <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
              Estructurados para devolverte la serenidad, la energía y la certeza.
            </p>
          </div>

          <div className="sessions-roadmap-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {clinicalAxes.map((axis, idx) => (
              <div key={idx} className={`session-card-vibrant ${axis.colorClass}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 900, background: 'var(--color-primary-dark)', color: 'white', padding: '3px 10px', borderRadius: '8px' }}>
                    {axis.badge}
                  </span>
                  <div style={{ background: 'white', padding: '8px', borderRadius: '12px', border: '2px solid var(--color-primary-dark)' }}>
                    {axis.icon}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '8px', color: 'var(--color-primary-dark)' }}>
                  {axis.title}
                </h3>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary-dark)', lineHeight: 1.45, opacity: 0.9 }}>
                  {axis.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Polaroid Strip: Espacios & Momentos */}
      <section className="service-content-section" style={{ background: 'var(--color-primary-light)', borderTop: '3px dashed var(--color-primary-dark)', borderBottom: '3px dashed var(--color-primary-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <span className="badge-modern" style={{ background: 'white', color: 'var(--color-primary-dark)' }}>
              TU REFUGIO
            </span>
            <h2 style={{ fontSize: '2.6rem', marginTop: '10px' }}>
              Un espacio para recargar tu copa
            </h2>
          </div>

          <div className="polaroid-gallery-row">
            <div className="brand-polaroid" style={{ transform: 'rotate(-2deg)' }}>
              <div className="polaroid-img-wrapper">
                <img src="/waiting_space.webp" alt="Sala de espera acogedora" />
              </div>
              <div className="polaroid-caption">
                <span>Pausa & Escucha</span>
                <span style={{ fontSize: '0.85rem', background: 'var(--color-secondary)', padding: '2px 8px', borderRadius: '6px' }}>01</span>
              </div>
              <p className="polaroid-desc">Un café caliente y desahogo sincero sin miedo a ser juzgada.</p>
            </div>

            <div className="brand-polaroid" style={{ transform: 'rotate(2deg)' }}>
              <div className="polaroid-img-wrapper">
                <img src="/instagram/insta_sensory_lights.webp" alt="Espacio sensorial" />
              </div>
              <div className="polaroid-caption">
                <span>Comprender su Mundo</span>
                <span style={{ fontSize: '0.85rem', background: 'var(--color-pink)', padding: '2px 8px', borderRadius: '6px' }}>02</span>
              </div>
              <p className="polaroid-desc">Descifrar cómo siente tu hijo para acompañarlo con certeza.</p>
            </div>

            <div className="brand-polaroid" style={{ transform: 'rotate(-1deg)' }}>
              <div className="polaroid-img-wrapper">
                <img src="/cta_image.webp" alt="Madre e hijo felices" />
              </div>
              <div className="polaroid-caption">
                <span>Disfrutar de Nuevo</span>
                <span style={{ fontSize: '0.85rem', background: '#C7F9CC', padding: '2px 8px', borderRadius: '6px' }}>03</span>
              </div>
              <p className="polaroid-desc">Recuperar el goce y la conexión profunda de la maternidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool: Self-Care & Coping Compass */}
      <section className="service-interactive-section" style={{ background: '#FAF9DC' }}>
        <div className="container">
          <div className="interactive-container-grid">
            <SelfCareCompass />
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="badge-modern" style={{ background: 'var(--color-pink)', color: 'var(--color-primary-dark)' }}>
                BRÚJULA DE CALMA
              </div>
              <h2 style={{ fontSize: '2.5rem', marginTop: '10px', marginBottom: '16px' }}>
                Tu brújula para momentos de tormenta
              </h2>
              <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '18px', lineHeight: 1.5 }}>
                Toca los cuatro cuadrantes para descubrir el ancla de contención que más necesitas hoy: asimilación, recarga de estrés, calma o visión de futuro.
              </p>
              <button onClick={onBook} className="btn-primary" style={{ border: 'none', cursor: 'pointer', padding: '14px 28px' }}>
                Conversar con Mery
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bite-sized FAQs */}
      <section className="service-content-section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.6rem' }}>Preguntas Frecuentes</h2>
          </div>
          
          <FAQItem 
            question="¿Por qué importa tanto la vivencia personal de la terapeuta?" 
            answer="Porque la crianza de un hijo con alguna condición tiene miedos y agotamientos que no se aprenden solo en un libro. Esa experiencia compartida te asegura comprensión total y cero recetas imposibles." 
          />
          <FAQItem 
            question="¿Es normal sentirme culpable por estar agotada de mi propio hijo?" 
            answer="Completamente normal. No significa falta de amor, sino saturación de un cuidador sin descanso. En sesión trabajamos en sanar esa culpa y crear rutinas de recarga viables." 
          />
          <FAQItem 
            question="¿Con qué frecuencia son las sesiones?" 
            answer="Recomendamos iniciar de manera quincenal para que pongas en práctica las pautas sin sobrecargar tu semana." 
          />
        </div>
      </section>

      {/* Service Footer Extras */}
      <ServiceFooterExtras serviceId="acompanamiento-madres" onBack={onBack} onNavigateService={onNavigateService} />

      {/* Footer */}
      <Footer onNavigate={onBack} onOpenBooking={onBook} />
    </div>
  );
};

export default AcompanamientoMadresPage;


