import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Users, Sparkles, Smile, CheckCircle2, XCircle, Clock, ShieldCheck, HelpCircle, ChevronDown, ChevronUp, Star, HeartHandshake, ArrowRight, Home, Zap, Award } from 'lucide-react';
import ServiceFooterExtras from './ServiceFooterExtras';
import Footer from './Footer';
import './ServicesPages.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const ReinforcementSimulator = () => {
  const [activeScenario, setActiveScenario] = useState('tablet');

  const scenarios = {
    tablet: {
      label: "Pantallas & Celular",
      reactive: {
        text: "Gritar '¡se acabó!' y arrebatar el celular de golpe en medio del llanto.",
        result: "La frustración escala a berrinche abierto y mañana se repite exactamente la misma pelea.",
        badge: "Escalada de conflicto"
      },
      positive: {
        text: "Anticipación visual: alarma pactada con aviso de 5 minutos y transición inmediata a un juego activo.",
        result: "El niño entrega el dispositivo en calma porque el entorno anticipa sus tiempos sin sorpresas.",
        badge: "Cooperación anticipada"
      }
    },
    vestirse: {
      label: "Peleas por Vestirse",
      reactive: {
        text: "Apurarlo entre reproches por llegar tarde y terminar vistiéndolo a la fuerza.",
        result: "Aprende que la queja logra que mamá o papá hagan todo por él, anulando su iniciativa.",
        badge: "Pérdida de autonomía"
      },
      positive: {
        text: "Tablero visual preparado la noche anterior: solo 2 opciones accesibles listas para elegir.",
        result: "Autonomía guiada: se viste solo en minutos sin discusiones matutinas.",
        badge: "Autonomía en calma"
      }
    },
    comida: {
      label: "Sentarse a Comer",
      reactive: {
        text: "Exigirle permanecer quieto 40 minutos o encender pantallas para que coma distraído.",
        result: "Desconexión sensorial con la saciedad, fatiga postural y tensión familiar.",
        badge: "Tensión en la mesa"
      },
      positive: {
        text: "Soporte ergonómico para pies, platos porcionados y meta familiar compartida de 20 minutos.",
        result: "Comodidad propioceptiva y una relación tranquila y predecible con los alimentos.",
        badge: "Disfrute compartido"
      }
    }
  };

  return (
    <div>
      {/* Scenario Selection Chips */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {Object.keys(scenarios).map((key) => (
          <button
            key={key}
            onClick={() => setActiveScenario(key)}
            style={{
              background: activeScenario === key ? 'var(--color-primary-dark)' : 'white',
              color: activeScenario === key ? 'white' : 'var(--color-primary-dark)',
              border: '2px solid var(--color-primary-dark)',
              boxShadow: activeScenario === key ? '3px 3px 0px var(--color-secondary)' : '2px 2px 0px var(--color-primary-dark)',
              borderRadius: '50px',
              padding: '8px 16px',
              fontWeight: 800,
              fontSize: '0.84rem',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {scenarios[key].label}
          </button>
        ))}
      </div>

      {/* Clinical Contrast Board */}
      <div 
        style={{
          background: 'white',
          border: '3.5px solid var(--color-primary-dark)',
          boxShadow: '8px 8px 0px var(--color-primary-dark)',
          borderRadius: '26px',
          overflow: 'hidden'
        }}
      >
        {/* Case Bar */}
        <div style={{ padding: '14px 22px', background: 'var(--color-primary-light)', borderBottom: '2.5px solid var(--color-primary-dark)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-primary-dark)' }}>
            RETO: {scenarios[activeScenario].label}
          </span>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, background: 'white', padding: '3px 10px', borderRadius: '12px', border: '1.5px solid var(--color-primary-dark)', color: 'var(--color-primary-dark)' }}>
            ANÁLISIS CLÍNICO
          </span>
        </div>

        {/* Content Comparison */}
        <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Reactive Approach */}
          <div style={{ background: '#FFF7F7', border: '2px solid #E63946', borderRadius: '16px', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#E63946' }}>
                Enfoque Común · Reactivo
              </span>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#E63946' }}>
                {scenarios[activeScenario].reactive.badge}
              </span>
            </div>
            <p style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '6px', lineHeight: 1.35 }}>
              "{scenarios[activeScenario].reactive.text}"
            </p>
            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#666', margin: 0, lineHeight: 1.4 }}>
              {scenarios[activeScenario].reactive.result}
            </p>
          </div>

          {/* Environmental Adaptation Approach */}
          <div style={{ background: '#F2FCF7', border: '2px solid var(--color-green)', borderRadius: '16px', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-green)' }}>
                Método Multisensorial · Preventivo
              </span>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--color-green)' }}>
                {scenarios[activeScenario].positive.badge}
              </span>
            </div>
            <p style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '6px', lineHeight: 1.35 }}>
              "{scenarios[activeScenario].positive.text}"
            </p>
            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#165D3C', margin: 0, lineHeight: 1.4 }}>
              {scenarios[activeScenario].positive.result}
            </p>
          </div>
        </div>
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
      boxShadow: isOpen ? '4px 4px 0px var(--color-accent)' : '3px 3px 0px var(--color-primary-dark)',
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
          <Smile size={20} color="var(--color-accent)" />
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

const TerapiaConductualPage = ({ onBack, onBook, onNavigateService }) => {
  const programSessions = [
    {
      num: "01",
      title: "Decodificación",
      colorClass: "color-blue",
      desc: "¿Qué comunica su conducta? Descubrimos qué detona los berrinches en casa."
    },
    {
      num: "02",
      title: "El Ambiente",
      colorClass: "color-yellow",
      desc: "Cambiando su entorno cambia su conducta: rutinas visuales y espacios predecibles."
    },
    {
      num: "03",
      title: "Refuerzo Real",
      colorClass: "color-green",
      desc: "Ciencia conductual: cómo premiar lo positivo y apagar lo negativo sin gritos."
    },
    {
      num: "04",
      title: "Tu Calma",
      colorClass: "color-pink",
      desc: "Un niño en tormenta necesita un adulto en calma. Técnicas de corregulación."
    },
    {
      num: "05",
      title: "Retos Diarios",
      colorClass: "color-orange",
      desc: "Pautas específicas: pantallas, berrinches en la calle, comidas y sueño."
    },
    {
      num: "06",
      title: "Autonomía",
      colorClass: "color-purple",
      desc: "Resultados duraderos. Tu familia domina la fórmula para resolver crisis futuras."
    }
  ];

  return (
    <div className="service-detail-page bg-cream">
      {/* Hero with Clean Typography & Grounded Neo-brutalism */}
      <section className="service-hero bg-cream with-grid" style={{ position: 'relative', overflow: 'hidden', padding: '55px 0 120px' }}>
        {/* Subtle Background Watermark */}
        <div 
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '4%',
            bottom: '15px',
            fontSize: 'clamp(5rem, 12vw, 10rem)',
            fontWeight: 950,
            fontFamily: 'var(--font-body)',
            lineHeight: 0.8,
            color: 'transparent',
            WebkitTextStroke: '2px rgba(35, 71, 239, 0.1)',
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 0,
            textTransform: 'uppercase',
            letterSpacing: '-2px'
          }}
        >
          CONDUCTA
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="brand-hero-split">
            {/* Left Column: Direct Typography */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div 
                style={{ 
                  color: 'var(--color-primary-dark)', 
                  fontSize: '0.84rem', 
                  fontWeight: 900, 
                  letterSpacing: '0.08em', 
                  textTransform: 'uppercase', 
                  marginBottom: '14px', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px' 
                }}
              >
                <Users size={16} strokeWidth={2.4} />
                <span>MÉTODO CONDUCTUAL · 6 SESIONES</span>
              </div>

              <h1 style={{ fontSize: '3.4rem', marginBottom: '18px', lineHeight: 1.15, color: 'var(--color-primary-dark)', fontWeight: 900 }}>
                Cambiando el ambiente, <span style={{ color: 'var(--color-accent)' }}>transformamos su conducta</span>.
              </h1>

              <p style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-primary-dark)', marginBottom: '28px', lineHeight: 1.6, opacity: 0.95 }}>
                Basta de terapias que aíslan a tu hijo 45 minutos en un cuarto cerrado. Te entrenamos a ti como mamá o papá con un método práctico y científico para desactivar crisis y consolidar hábitos en casa.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button onClick={onBook} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                  Agendar Programa de Padres <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>

            {/* Right Column: Grounded Photo Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="brand-hero-photo-wrap"
            >
              <div 
                className="brand-hero-photo-frame"
                style={{
                  boxShadow: '10px 10px 0px var(--color-secondary)'
                }}
              >
                <img src="/instagram/insta_family_joy.webp" alt="Familia feliz aprendiendo juntos" />
              </div>
              <div 
                className="brand-floating-sticker"
                style={{
                  background: 'var(--color-secondary)',
                  bottom: '-12px',
                  right: '-10px',
                  boxShadow: '4px 4px 0px var(--color-primary-dark)',
                  border: '2.5px solid var(--color-primary-dark)',
                  transform: 'rotate(2deg)'
                }}
              >
                <Users size={15} strokeWidth={2.4} />
                <span>Enfoque Familiar</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Scrapbook: Real Moments in Therapy & Home */}
      <section className="service-content-section" style={{ background: 'var(--color-primary-light)', borderTop: '3px dashed var(--color-primary-dark)', borderBottom: '3px dashed var(--color-primary-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <span className="badge-modern" style={{ background: 'white', color: 'var(--color-primary-dark)' }}>
              TRANSFORMACIONES COTIDIANAS
            </span>
            <h2 style={{ fontSize: '2.6rem', marginTop: '10px' }}>
              Lo que resolvemos juntos en casa
            </h2>
            <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary-dark)', opacity: 0.9 }}>
              Resultados reales cuando mamá y papá dominan el diseño del entorno familiar.
            </p>
          </div>

          <div className="polaroid-gallery-row">
            {/* Polaroid 1 */}
            <div className="brand-polaroid" style={{ transform: 'rotate(-2deg)' }}>
              <div className="polaroid-img-wrapper">
                <img src="/instagram/insta_therapy_kids.webp" alt="Niño jugando y cooperando" />
              </div>
              <div className="polaroid-caption">
                <span>Mañanas Ágiles</span>
                <span style={{ fontSize: '0.85rem', background: 'var(--color-secondary)', padding: '2px 8px', borderRadius: '6px' }}>01</span>
              </div>
              <p className="polaroid-desc">Rutinas visuales para vestirse y desayunar sin prisas ni batallas matutinas.</p>
            </div>

            {/* Polaroid 2 */}
            <div className="brand-polaroid" style={{ transform: 'rotate(2deg)' }}>
              <div className="polaroid-img-wrapper">
                <img src="/play_area.webp" alt="Área de juego interactiva" />
              </div>
              <div className="polaroid-caption">
                <span>Fin al Berrinche</span>
                <span style={{ fontSize: '0.85rem', background: 'var(--color-pink)', padding: '2px 8px', borderRadius: '6px' }}>02</span>
              </div>
              <p className="polaroid-desc">Anticipación estructurada al retirar pantallas o salir de lugares divertidos.</p>
            </div>

            {/* Polaroid 3 */}
            <div className="brand-polaroid" style={{ transform: 'rotate(-1.5deg)' }}>
              <div className="polaroid-img-wrapper">
                <img src="/instagram/insta_educational_toys.webp" alt="Juegos educativos" />
              </div>
              <div className="polaroid-caption">
                <span>Convivencia en Paz</span>
                <span style={{ fontSize: '0.85rem', background: '#C7F9CC', padding: '2px 8px', borderRadius: '6px' }}>03</span>
              </div>
              <p className="polaroid-desc">Hermanos que aprenden a compartir turnos con reglas visuales claras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Conventional vs Multisensorial - Asymmetric Editorial Spread */}
      <section className="service-content-section" style={{ background: '#FFFFFF', padding: '95px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px' }}>
            <div 
              style={{ 
                color: 'var(--color-primary-dark)', 
                fontSize: '0.84rem', 
                fontWeight: 900, 
                letterSpacing: '0.08em', 
                textTransform: 'uppercase', 
                marginBottom: '12px' 
              }}
            >
              PARADIGMA CLÍNICO
            </div>
            <h2 style={{ fontSize: '2.8rem', color: 'var(--color-primary-dark)', fontWeight: 900, lineHeight: 1.15, marginBottom: '14px' }}>
              ¿Por qué fracasa la terapia tradicional de conducta?
            </h2>
            <p style={{ fontSize: '1.08rem', fontWeight: 600, color: 'var(--color-primary-dark)', opacity: 0.9, lineHeight: 1.6 }}>
              La conducta de un niño no ocurre en un consultorio artificial: ocurre en el comedor, a la hora de vestirse y en el auto.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            {/* Left Column: Direct Typographic Analysis (No Box/Drop-shadow Clones) */}
            <div>
              <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: 'var(--color-primary-dark)', lineHeight: 1.25, marginBottom: '18px' }}>
                El problema del cuarto cerrado: el consultorio no es la vida real.
              </h3>
              <p style={{ fontSize: '1.02rem', color: 'var(--color-primary-dark)', opacity: 0.9, lineHeight: 1.6, marginBottom: '24px' }}>
                Un niño puede cooperar 45 minutos con un profesional desconocido bajo reglas ajenas. Pero al regresar a casa, los detonantes cotidianos siguen intactos, generando frustración continua en la familia.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ borderLeft: '3.5px solid #E63946', paddingLeft: '16px' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--color-primary-dark)', marginBottom: '4px' }}>
                    01. Aislamiento del entorno real
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-primary-dark)', opacity: 0.85, margin: 0, lineHeight: 1.45 }}>
                    Tu hijo aprende a regularse con el terapeuta, pero no transfiere esa respuesta a ti ni a sus hermanos en casa.
                  </p>
                </div>
                <div style={{ borderLeft: '3.5px solid #E63946', paddingLeft: '16px' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--color-primary-dark)', marginBottom: '4px' }}>
                    02. Recaída inmediata en el hogar
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-primary-dark)', opacity: 0.85, margin: 0, lineHeight: 1.45 }}>
                    Al no modificar las señales del ambiente familiar (pantallas, tiempos, demandas), las crisis se repiten a diario.
                  </p>
                </div>
                <div style={{ borderLeft: '3.5px solid #E63946', paddingLeft: '16px' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--color-primary-dark)', marginBottom: '4px' }}>
                    03. Dependencia prolongada
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-primary-dark)', opacity: 0.85, margin: 0, lineHeight: 1.45 }}>
                    Meses o años asistiendo a consultas semanales sin que tú recibas las herramientas para resolver las situaciones en casa.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Elevated Multisensorial Model Container */}
            <div 
              style={{
                background: '#FAF9DC',
                border: '3.5px solid var(--color-primary-dark)',
                boxShadow: '10px 10px 0px var(--color-secondary)',
                borderRadius: '30px',
                padding: '36px'
              }}
            >
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'var(--color-secondary)',
                  color: 'var(--color-primary-dark)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: '2px solid var(--color-primary-dark)',
                  fontWeight: 900,
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  marginBottom: '18px'
                }}
              >
                <ShieldCheck size={16} strokeWidth={2.4} />
                <span>EL MODELO MULTISENSORIAL EN CASA</span>
              </div>

              <h3 style={{ fontSize: '1.7rem', fontWeight: 900, color: 'var(--color-primary-dark)', marginBottom: '14px', lineHeight: 1.25 }}>
                Padres entrenados, ambiente adaptado: cambios para siempre.
              </h3>

              <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-primary-dark)', opacity: 0.95, lineHeight: 1.55, marginBottom: '24px' }}>
                No aislamos al niño: capacitamos a mamá y papá para ser los verdaderos líderes conductuales de su hogar mediante diseño ambiental y refuerzo contingente.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} color="var(--color-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.94rem', color: 'var(--color-primary-dark)' }}>Programa Intensivo de 6 Sesiones</strong>
                    <span style={{ fontSize: '0.84rem', color: 'var(--color-primary-dark)', opacity: 0.85 }}>Herramientas prácticas de aplicación inmediata desde el primer día, sin procesos interminables.</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} color="var(--color-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.94rem', color: 'var(--color-primary-dark)' }}>Intervención en el Sistema Familiar</strong>
                    <span style={{ fontSize: '0.84rem', color: 'var(--color-primary-dark)', opacity: 0.85 }}>Modificamos los detonantes del entorno para que cooperar sea la opción más natural y sencilla para el niño.</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} color="var(--color-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.94rem', color: 'var(--color-primary-dark)' }}>Autonomía Definitiva</strong>
                    <span style={{ fontSize: '0.84rem', color: 'var(--color-primary-dark)', opacity: 0.85 }}>Ustedes dominan la metodología y adquieren la capacidad de resolver cualquier reto futuro sin intermediarios.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Session Roadmap with Brand Colorful Cards */}
      <section id="sesiones" className="service-content-section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
            <span className="badge-modern" style={{ background: 'var(--color-accent)', color: 'white' }}>
              EL CAMINO PASO A PASO
            </span>
            <h2 style={{ fontSize: '2.8rem', marginTop: '10px' }}>
              Programa Básico de 6 Sesiones
            </h2>
            <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
              Cada sesión te da una herramienta concreta para aplicar esa misma noche en casa.
            </p>
          </div>

          <div className="sessions-roadmap-grid">
            {programSessions.map((session, idx) => (
              <div key={idx} className={`session-card-vibrant ${session.colorClass}`}>
                <div className="session-card-num-badge">{session.num}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '6px', color: 'var(--color-primary-dark)' }}>
                  {session.title}
                </h3>
                <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary-dark)', lineHeight: 1.4, opacity: 0.9 }}>
                  {session.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Simulator Section */}
      <section 
        className="service-interactive-section with-paper-image" 
        style={{ 
          backgroundColor: '#FAF9DC', 
          padding: '95px 0', 
          borderTop: '3px dashed var(--color-primary-dark)', 
          borderBottom: '3px dashed var(--color-primary-dark)',
          position: 'relative'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="interactive-container-grid" style={{ alignItems: 'center', gap: '48px' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div 
                style={{ 
                  color: 'var(--color-primary-dark)', 
                  fontSize: '0.84rem', 
                  fontWeight: 900, 
                  letterSpacing: '0.08em', 
                  textTransform: 'uppercase', 
                  marginBottom: '12px', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px' 
                }}
              >
                <Zap size={16} strokeWidth={2.4} />
                <span>DEMOSTRACIÓN INTERACTIVA</span>
              </div>

              <h2 style={{ fontSize: '2.8rem', lineHeight: 1.15, marginBottom: '16px', color: 'var(--color-primary-dark)', fontWeight: 900 }}>
                Prueba en el Simulador: ¿Cómo reacciona tu hogar?
              </h2>

              <p style={{ fontSize: '1.08rem', fontWeight: 600, color: 'var(--color-primary-dark)', marginBottom: '22px', lineHeight: 1.6, opacity: 0.95 }}>
                El 80% de los desbordes conductuales se resuelven modificando el <strong>diseño del ambiente antes de la crisis</strong>, no regañando en medio de ella.
              </p>

              <p style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '12px' }}>
                Selecciona una situación cotidiana para ver el contraste clínico:
              </p>

              <button onClick={onBook} className="btn-primary" style={{ border: 'none', cursor: 'pointer', marginTop: '12px' }}>
                Agendar Mi Evaluación <ArrowRight size={18} />
              </button>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <ReinforcementSimulator />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bite-sized FAQs */}
      <section className="service-content-section" style={{ background: '#FAF9DC' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.6rem' }}>Preguntas Rápidas</h2>
          </div>
          
          <FAQItem 
            question="¿Por qué se trabaja con los padres y no solo con el niño?" 
            answer="Porque el terapeuta solo ve a tu hijo 45 minutos por semana, mientras que tú estás presente todos los días. Si cambiamos las pautas y el entorno en casa, el avance es diez veces más rápido y dura para siempre." 
          />
          <FAQItem 
            question="¿6 sesiones alcanzan para notar cambios?" 
            answer="Sí. Desde la segunda sesión, con los primeros ajustes visuales y ambientales en casa, las familias ven una reducción drástica en la intensidad de los berrinches." 
          />
          <FAQItem 
            question="¿Y si papá y mamá no nos ponemos de acuerdo en criar?" 
            answer="El programa unifica criterios clínicos por escrito. Ambos tendrán el mismo mapa de ruta claro para actuar en sintonía y sin contradicciones." 
          />
        </div>
      </section>

      {/* Service Footer Extras */}
      <ServiceFooterExtras serviceId="terapia-conductual" onBack={onBack} onNavigateService={onNavigateService} />

      {/* Footer */}
      <Footer onNavigate={onBack} onOpenBooking={onBook} />
    </div>
  );
};

export default TerapiaConductualPage;


