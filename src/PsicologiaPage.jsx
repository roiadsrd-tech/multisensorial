import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Smile, Activity, HeartHandshake, HelpCircle, ChevronDown, ChevronUp, Clock, Sun, Zap, Baby, User, ArrowRight, ShieldCheck, Compass, CheckCircle2, Sparkles, Check, MessagesSquare, ClipboardCheck, FileCheck, Target, GraduationCap, Home, Heart, Puzzle } from 'lucide-react';
import ServiceFooterExtras from './ServiceFooterExtras';
import Footer from './Footer';
import './ServicesPages.css';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      border: '3px solid var(--color-primary-dark)',
      boxShadow: isOpen ? '4px 4px 0px var(--color-secondary)' : '4px 4px 0px var(--color-primary-dark)',
      marginBottom: '14px',
      overflow: 'hidden',
      transition: 'all 0.2s ease'
    }}>
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '18px 22px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'left',
          fontSize: '1.05rem',
          fontWeight: 800,
          color: 'var(--color-primary-dark)',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <HelpCircle size={20} color="var(--color-primary-dark)" />
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
            transition={{ duration: 0.25 }}
          >
            <div style={{
              padding: '0 22px 20px 54px',
              color: 'var(--color-primary-dark)',
              fontSize: '0.95rem',
              lineHeight: 1.55,
              fontWeight: 600,
              opacity: 0.9,
              borderTop: '2px dashed rgba(35, 71, 239, 0.15)'
            }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const childImpactAreas = [
  {
    id: 'escuela',
    label: 'En la Escuela',
    image: '/psicologia/school.jpg',
    headline: 'Aprender con calma y concentración.',
    description: 'Tu hijo deja atrás la frustración con las materias. Desarrolla atención sostenida, comprende a su propio ritmo y vuelve a disfrutar el aula sin lágrimas ni angustia.',
    points: [
      'Menos frustración con tareas y exámenes',
      'Mayor atención y participación activa en clase',
      'Seguridad para aprender a su ritmo'
    ]
  },
  {
    id: 'hogar',
    label: 'En el Hogar',
    image: '/psicologia/home.jpg',
    headline: 'Tardes de calma y conexión familiar.',
    description: 'Convertimos los momentos difíciles en cooperación. Rutinas predecibles y herramientas prácticas de crianza para que la paz y la armonía vuelvan a casa.',
    points: [
      'Menos desbordes y pataletas',
      'Rutinas diarias que fluyen sin lucha',
      'Convivencia tranquila y afectiva'
    ]
  },
  {
    id: 'desarrollo',
    label: 'Desarrollo Emocional',
    image: '/psicologia/emotional.jpg',
    headline: 'Un niño seguro que confía en sí mismo.',
    description: 'Fortalecemos su autoestima e inteligencia emocional para que se anime a intentar cosas nuevas, exprese lo que siente con serenidad y haga amigos con naturalidad.',
    points: [
      'Confianza para expresarse sin miedo',
      'Herramientas para tolerar la frustración',
      'Seguridad en sus habilidades sociales'
    ]
  },
  {
    id: 'familia',
    label: 'Guía a los Padres',
    image: '/psicologia/parents.jpg',
    headline: 'Un camino claro para ustedes como padres.',
    description: 'Sesiones de orientación directa con nuestros psicólogos: sin juicios ni recetas genéricas, sabiendo con total claridad cómo apoyar a su hijo en equipo.',
    points: [
      'Respuestas claras y concretas a sus dudas',
      'Estrategias aplicables a la realidad de su hogar',
      'Acompañamiento cercano en cada etapa'
    ]
  }
];

const PsicologiaPage = ({ onBack, onBook, onNavigateService }) => {
  const [activeTrack, setActiveTrack] = useState('nino'); // 'nino' | 'adulto'
  const [activeChildArea, setActiveChildArea] = useState(0);

  const handleTrackChange = (track) => {
    setActiveTrack(track);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`service-detail-page ${activeTrack === 'nino' ? 'bg-blue' : 'bg-cream'}`} style={{ transition: 'background-color 0.4s ease' }}>
      {/* Sticky Dual-Track Switcher across entire page */}
      <div className="psico-sticky-switcher-container">
        <div className="psico-track-selector">
          <button
            type="button"
            onClick={() => handleTrackChange('nino')}
            className={`psico-track-btn ${activeTrack === 'nino' ? 'active' : ''}`}
            aria-pressed={activeTrack === 'nino'}
          >
            {activeTrack === 'nino' && (
              <motion.div
                layoutId="activePsicoTrack"
                className="psico-track-highlight"
                style={{ background: 'var(--color-secondary)' }}
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
            <span className="psico-track-content">
              <Baby size={15} strokeWidth={2.4} />
              <span>Psicología Infantil</span>
            </span>
          </button>
          <button
            type="button"
            onClick={() => handleTrackChange('adulto')}
            className={`psico-track-btn ${activeTrack === 'adulto' ? 'active' : ''}`}
            aria-pressed={activeTrack === 'adulto'}
          >
            {activeTrack === 'adulto' && (
              <motion.div
                layoutId="activePsicoTrack"
                className="psico-track-highlight"
                style={{ background: 'var(--color-pink)' }}
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
            <span className="psico-track-content">
              <User size={15} strokeWidth={2.4} />
              <span>Psicología Adultos</span>
            </span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        className={`service-hero with-grid ${activeTrack === 'nino' ? 'bg-blue' : 'bg-cream'}`} 
        style={{ 
          position: 'relative', 
          overflow: 'hidden', 
          padding: '76px 0 140px',
          minHeight: '640px',
          transition: 'background-color 0.4s ease'
        }}
      >
        {/* Subtle Background Watermark with Typography & Illustrated Character */}
        <div 
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: activeTrack === 'nino' ? '3%' : 'auto',
            left: activeTrack === 'adulto' ? '3%' : 'auto',
            bottom: '24px',
            display: 'flex',
            alignItems: 'flex-end',
            gap: '20px',
            flexDirection: 'row',
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 0,
            transition: 'all 0.4s ease',
            opacity: 0.88
          }}
        >
          <span
            style={{
              fontSize: 'clamp(4.5rem, 11vw, 9.5rem)',
              fontWeight: 950,
              fontFamily: 'var(--font-body)',
              lineHeight: 0.85,
              color: 'transparent',
              WebkitTextStroke: '2.5px rgba(35, 71, 239, 0.13)',
              textTransform: 'uppercase',
              letterSpacing: '-2px'
            }}
          >
            {activeTrack === 'nino' ? 'INFANTIL' : 'ADULTOS'}
          </span>

          {/* Character Illustration SVG */}
          {activeTrack === 'nino' ? (
            <svg 
              viewBox="0 0 140 140" 
              width="135" 
              height="135" 
              fill="none" 
              stroke="rgba(35, 71, 239, 0.16)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{ marginBottom: '10px', transform: 'rotate(-3deg)' }}
            >
              {/* Playful Child Line Art */}
              <circle cx="70" cy="62" r="32" />
              <path d="M 46 54 C 44 38, 58 32, 70 32 C 82 32, 96 38, 94 54" />
              <path d="M 52 35 C 50 25, 62 20, 68 28" />
              <path d="M 68 28 C 74 18, 86 24, 84 34" />
              <circle cx="58" cy="60" r="3.5" fill="rgba(35, 71, 239, 0.16)" />
              <circle cx="82" cy="60" r="3.5" fill="rgba(35, 71, 239, 0.16)" />
              <path d="M 58 72 Q 70 84 82 72" />
              <ellipse cx="50" cy="68" rx="4" ry="2" />
              <ellipse cx="90" cy="68" rx="4" ry="2" />
              <path d="M 38 60 Q 32 64 38 70" />
              <path d="M 102 60 Q 108 64 102 70" />
              <path d="M 63 94 L 63 104" />
              <path d="M 77 94 L 77 104" />
              <path d="M 44 130 C 50 108, 62 104, 70 104 C 78 104, 90 108, 96 130" />
              <path d="M 60 104 Q 70 114 80 104" />
              <path d="M 112 30 L 115 38 L 123 38 L 117 43 L 119 51 L 112 46 L 105 51 L 107 43 L 101 38 L 109 38 Z" strokeWidth="2" />
            </svg>
          ) : (
            <svg 
              viewBox="0 0 140 140" 
              width="135" 
              height="135" 
              fill="none" 
              stroke="rgba(35, 71, 239, 0.16)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{ marginBottom: '10px', transform: 'rotate(2deg)' }}
            >
              {/* Adult 40s Mature/Professional Line Art */}
              <path d="M 44 58 C 44 42, 54 34, 70 34 C 86 34, 96 42, 96 58 C 96 74, 90 88, 70 94 C 50 88, 44 74, 44 58 Z" />
              <path d="M 43 52 C 40 34, 52 22, 72 22 C 88 22, 98 30, 97 48" />
              <path d="M 48 34 Q 68 28 88 36" />
              <path d="M 45 42 Q 62 34 78 40" />
              <line x1="45" y1="52" x2="45" y2="64" />
              <line x1="95" y1="52" x2="95" y2="64" />
              <rect x="49" y="52" width="16" height="12" rx="3" />
              <rect x="75" y="52" width="16" height="12" rx="3" />
              <line x1="65" y1="57" x2="75" y2="57" />
              <line x1="45" y1="56" x2="49" y2="56" />
              <line x1="91" y1="56" x2="95" y2="56" />
              <circle cx="57" cy="58" r="2.5" fill="rgba(35, 71, 239, 0.16)" />
              <circle cx="83" cy="58" r="2.5" fill="rgba(35, 71, 239, 0.16)" />
              <path d="M 70 59 L 68 70 L 73 70" />
              <path d="M 60 78 Q 70 83 80 78" />
              <path d="M 54 75 Q 56 79 58 81" strokeWidth="1.8" />
              <path d="M 86 75 Q 84 79 82 81" strokeWidth="1.8" />
              <path d="M 62 94 L 62 106" />
              <path d="M 78 94 L 78 106" />
              <path d="M 38 132 C 44 112, 56 106, 70 106 C 84 106, 96 112, 102 132" />
              <path d="M 56 106 L 68 122 L 72 122 L 84 106" />
              <line x1="70" y1="122" x2="70" y2="132" />
            </svg>
          )}
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className={`brand-hero-split ${activeTrack === 'adulto' ? 'reverse-split' : ''}`}>
            {/* Left Column: Typography matching Main Page */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              {/* Direct Eyebrow - Pure Typography Without Background */}
              <div 
                style={{ 
                  color: 'var(--color-primary-dark)', 
                  fontSize: '0.84rem',
                  fontWeight: 900,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  marginBottom: '14px', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px'
                }}
              >
                {activeTrack === 'nino' ? (
                  <>
                    <Baby size={16} strokeWidth={2.4} />
                    <span>Psicología Clínica · Área Infantil</span>
                  </>
                ) : (
                  <>
                    <User size={16} strokeWidth={2.4} />
                    <span>Psicología Clínica · Área Adultos</span>
                  </>
                )}
              </div>

              <h1 style={{ fontSize: '3.4rem', marginBottom: '18px', lineHeight: 1.15, color: 'var(--color-primary-dark)', fontWeight: 900 }}>
                {activeTrack === 'nino' ? (
                  <>Evaluamos a tu hijo y te damos un <span style={{ color: 'var(--color-accent)' }}>plan claro</span>.</>
                ) : (
                  <>Te ayudamos a entenderte mejor y a manejar lo que sientes <span style={{ color: 'var(--color-accent)' }}>día a día</span>.</>
                )}
              </h1>
              
              <p style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-primary-dark)', marginBottom: '28px', lineHeight: 1.6, opacity: 0.95 }}>
                {activeTrack === 'nino' 
                  ? "Hacemos una evaluación diagnóstica completa, aplicamos pruebas psicológicas reconocidas y te orientamos sobre cómo apoyar a tu hijo según su condición. El objetivo es que tu hijo tenga una mejor calidad de vida y se desarrolle como debe."
                  : "Ofrecemos atención diagnóstica y terapéutica para adultos. Te ayudamos a conocerte mejor, a manejar el estrés, a controlar lo que sientes y a pensar con más claridad."
                }
              </p>

              {/* Action Buttons matching Main Page */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button onClick={onBook} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                  Agendar consulta clínica <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>

            {/* Right Column: Clean Neo-brutalist Photo Frame */}
            <motion.div 
              key={activeTrack}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="brand-hero-photo-wrap"
            >
              <div 
                className="brand-hero-photo-frame" 
                style={{ 
                  boxShadow: activeTrack === 'nino' ? '10px 10px 0px var(--color-primary-dark)' : '10px 10px 0px var(--color-accent)' 
                }}
              >
                <img 
                  src={activeTrack === 'nino' ? "/instagram/insta_educational_toys.webp" : "/waiting_space.webp"} 
                  alt={activeTrack === 'nino' ? "Espacio y recursos de desarrollo infantil" : "Espacio de consulta clínica"} 
                />
              </div>

              {/* Neo-brutalist Floating Corner Tag on Photo */}
              <div 
                className="brand-floating-sticker"
                style={{
                  background: activeTrack === 'nino' ? 'var(--color-secondary)' : 'var(--color-pink)',
                  bottom: '-14px',
                  right: activeTrack === 'nino' ? '-10px' : 'auto',
                  left: activeTrack === 'adulto' ? '-10px' : 'auto',
                  transform: activeTrack === 'nino' ? 'rotate(3deg)' : 'rotate(-3deg)',
                  boxShadow: '4px 4px 0px var(--color-primary-dark)',
                  border: '3px solid var(--color-primary-dark)'
                }}
              >
                {activeTrack === 'nino' ? (
                  <>
                    <Baby size={16} strokeWidth={2.4} />
                    <span>Área Infantil</span>
                  </>
                ) : (
                  <>
                    <User size={16} strokeWidth={2.4} />
                    <span>Área Adultos</span>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Track Details Section */}
      <section 
        id="detalles" 
        className="service-content-section bg-yellow with-grid" 
        style={{ 
          backgroundColor: 'var(--color-secondary)', 
          borderTop: '4px solid var(--color-primary-dark)', 
          borderBottom: '4px solid var(--color-primary-dark)', 
          padding: '95px 0 105px 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Giant Thematic Background Icons & Geometric Motifs (Like Main Page) */}
        <div style={{ position: 'absolute', top: '-60px', right: '-80px', opacity: 0.08, transform: 'rotate(14deg)', pointerEvents: 'none', color: 'var(--color-primary-dark)' }}>
          <Brain size={480} strokeWidth={1.2} />
        </div>
        <div style={{ position: 'absolute', bottom: '-50px', left: '-70px', opacity: 0.07, transform: 'rotate(-16deg)', pointerEvents: 'none', color: 'var(--color-primary-dark)' }}>
          <Smile size={420} strokeWidth={1.2} />
        </div>
        <div style={{ position: 'absolute', top: '35%', left: '4%', opacity: 0.06, transform: 'rotate(24deg)', pointerEvents: 'none', color: 'var(--color-primary-dark)' }}>
          <Puzzle size={360} strokeWidth={1.2} />
        </div>
        <div style={{ position: 'absolute', bottom: '15%', right: '8%', opacity: 0.07, transform: 'rotate(-10deg)', pointerEvents: 'none', color: 'var(--color-primary-dark)' }}>
          <Heart size={340} strokeWidth={1.2} />
        </div>

        {/* Floating Neo-Brutalist Shapes from Main Page */}
        <div className="dec-star-4 orange" style={{ top: '80px', right: '12%', opacity: 1, transform: 'scale(1.2)' }}></div>
        <div className="dec-wiggle" style={{ bottom: '120px', left: '5%', opacity: 1 }}></div>
        <div className="dec-circle" style={{ top: '18%', left: '-60px', width: '150px', height: '150px', background: 'var(--color-pink)', opacity: 1, border: '3px solid var(--color-primary-dark)' }}></div>
        <div className="dec-star-4 cyan" style={{ bottom: '40px', right: '4%', opacity: 0.9 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <AnimatePresence mode="wait">
            {activeTrack === 'nino' ? (
              <motion.div 
                key="details-nino"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {/* Editorial Header */}
                <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
                  <h2 style={{ 
                    fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)', 
                    lineHeight: 1.05, 
                    color: 'var(--color-primary-dark)', 
                    marginBottom: '14px',
                    letterSpacing: '-1.2px',
                    fontWeight: 900
                  }}>
                    ¿Cómo cambia el día a día de tu hijo?
                  </h2>
                  <p style={{ 
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)', 
                    color: 'var(--color-primary-dark)', 
                    lineHeight: 1.5, 
                    fontWeight: 600,
                    margin: 0,
                    opacity: 0.95
                  }}>
                    Menos frustración en la escuela, más tranquilidad en casa y la seguridad de que avanza feliz.
                  </p>
                </div>

                {/* Minimalist Area Switcher (Direct pill tabs on yellow, NO cards) */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  flexWrap: 'wrap',
                  marginBottom: '36px'
                }}>
                  {childImpactAreas.map((area, idx) => {
                    const isSelected = activeChildArea === idx;
                    return (
                      <button
                        key={area.id}
                        type="button"
                        onClick={() => setActiveChildArea(idx)}
                        style={{
                          padding: '12px 24px',
                          borderRadius: '999px',
                          border: '3px solid var(--color-primary-dark)',
                          background: isSelected ? 'var(--color-primary-dark)' : 'transparent',
                          color: isSelected ? '#FED65C' : 'var(--color-primary-dark)',
                          fontSize: '0.95rem',
                          fontWeight: 900,
                          cursor: 'pointer',
                          transition: 'all 0.18s ease'
                        }}
                      >
                        {area.label}
                      </button>
                    );
                  })}
                </div>

                {/* Visual Showcase Split (NO CARDS, directly on the yellow canvas) */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeChildArea}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.22 }}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '48px',
                      alignItems: 'center',
                      marginBottom: '64px'
                    }}
                  >
                    {/* Left: Big Framed Editorial Image */}
                    <div style={{
                      borderRadius: '28px',
                      border: '6px solid var(--color-primary-dark)',
                      boxShadow: '10px 10px 0px var(--color-primary-dark)',
                      overflow: 'hidden',
                      height: '420px',
                      background: '#FFFFFF'
                    }}>
                      <img
                        src={childImpactAreas[activeChildArea].image}
                        alt={childImpactAreas[activeChildArea].headline}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    </div>

                    {/* Right: Direct Editorial Typography */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                      <h3 style={{
                        fontSize: 'clamp(1.9rem, 3vw, 2.5rem)',
                        lineHeight: 1.12,
                        color: 'var(--color-primary-dark)',
                        margin: 0,
                        fontWeight: 900,
                        letterSpacing: '-0.8px'
                      }}>
                        {childImpactAreas[activeChildArea].headline}
                      </h3>

                      <p style={{
                        fontSize: '1.08rem',
                        lineHeight: 1.55,
                        color: 'var(--color-primary-dark)',
                        fontWeight: 600,
                        margin: 0
                      }}>
                        {childImpactAreas[activeChildArea].description}
                      </p>

                      {/* Clean bullet items without boxes */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px' }}>
                        {childImpactAreas[activeChildArea].points.map((pt, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '50%',
                              background: 'var(--color-primary-dark)',
                              color: '#FED65C',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}>
                              <Check size={14} strokeWidth={3} />
                            </div>
                            <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div style={{ marginTop: '8px' }}>
                        <button
                          type="button"
                          onClick={onBook}
                          className="btn-primary"
                          style={{ border: 'none', cursor: 'pointer', padding: '14px 28px', fontSize: '1rem' }}
                        >
                          Agendar Evaluación de Psicología <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Real Space Context Showcase (NO CARDS) */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '40px',
                  alignItems: 'center',
                  paddingTop: '36px',
                  borderTop: '3px dashed rgba(35, 71, 239, 0.3)'
                }}>
                  <div style={{
                    borderRadius: '24px',
                    border: '5px solid var(--color-primary-dark)',
                    boxShadow: '8px 8px 0px var(--color-primary-dark)',
                    overflow: 'hidden',
                    height: '280px'
                  }}>
                    <img
                      src="/play_area.webp"
                      alt="Área clínica y de estimulación en Multisensorial"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                      color: 'var(--color-primary-dark)',
                      lineHeight: 1.2,
                      fontWeight: 900,
                      marginBottom: '12px'
                    }}>
                      Un espacio diseñado para evaluar jugando
                    </h3>
                    <p style={{
                      fontSize: '1.05rem',
                      color: 'var(--color-primary-dark)',
                      lineHeight: 1.6,
                      fontWeight: 600,
                      margin: 0
                    }}>
                      En Multisensorial no hay batas blancas ni consultorios fríos. Tu hijo juega, se relaja y se siente seguro mientras nuestros psicólogos observan cómo se desenvuelve de verdad.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="details-adulto"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
                  <h2 style={{ 
                    fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)', 
                    lineHeight: 1.05, 
                    color: 'var(--color-primary-dark)', 
                    marginBottom: '14px',
                    letterSpacing: '-1.2px',
                    fontWeight: 900
                  }}>
                    Claridad mental y calma para tu día a día
                  </h2>
                  <p style={{ 
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.25rem)', 
                    color: 'var(--color-primary-dark)', 
                    lineHeight: 1.5, 
                    fontWeight: 600,
                    margin: 0,
                    opacity: 0.95
                  }}>
                    Terapia con psicólogos clínicos: aprende a regularte, a frenar el sobrepensamiento y a tomar decisiones con serenidad.
                  </p>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '48px',
                  alignItems: 'center'
                }}>
                  {/* Left: Professional Warm Adult Consultation Photo */}
                  <div style={{
                    borderRadius: '28px',
                    border: '6px solid var(--color-primary-dark)',
                    boxShadow: '10px 10px 0px var(--color-primary-dark)',
                    overflow: 'hidden',
                    height: '420px',
                    background: '#FFFFFF'
                  }}>
                    <img
                      src="/psicologia/adult.jpg"
                      alt="Sesión de Psicología Clínica para Adultos"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>

                  {/* Right: Direct Editorial Points */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <h3 style={{
                      fontSize: 'clamp(1.9rem, 3vw, 2.5rem)',
                      lineHeight: 1.12,
                      color: 'var(--color-primary-dark)',
                      margin: 0,
                      fontWeight: 900,
                      letterSpacing: '-0.8px'
                    }}>
                      Espacio de escucha, claridad y dirección
                    </h3>

                    <p style={{
                      fontSize: '1.08rem',
                      lineHeight: 1.55,
                      color: 'var(--color-primary-dark)',
                      fontWeight: 600,
                      margin: 0
                    }}>
                      Acompañamos a adultos con herramientas prácticas para entender qué detona la ansiedad o el agotamiento, procesar emociones difíciles y recuperar el control.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '6px' }}>
                      {[
                        'Manejo efectivo de ansiedad, estrés continuo y burnout',
                        'Herramientas para salir del sobrepensamiento y la culpa',
                        'Toma de decisiones y límites sanos en tu vida diaria'
                      ].map((pt, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            background: 'var(--color-primary-dark)',
                            color: '#FED65C',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            <Check size={14} strokeWidth={3} />
                          </div>
                          <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
                            {pt}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: '10px' }}>
                      <button
                        type="button"
                        onClick={onBook}
                        className="btn-primary"
                        style={{ border: 'none', cursor: 'pointer', padding: '14px 28px', fontSize: '1rem' }}
                      >
                        Agendar Consulta de Adultos <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Proceso de Consulta - Card-Free Editorial Layout on Paper */}
      <section className="with-paper-image" style={{ backgroundColor: '#FFFFFF', padding: '100px 0', borderBottom: '3px dashed var(--color-primary-dark)', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'start'
          }}>
            {/* Left Column: Editorial Anchor & Booking */}
            <div style={{ position: 'sticky', top: '160px' }}>
              <span style={{
                fontSize: '0.82rem',
                fontWeight: 900,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                display: 'block',
                marginBottom: '12px'
              }}>
                Proceso Clínico
              </span>

              <h2 style={{
                fontSize: '3.4rem',
                lineHeight: 1.08,
                color: 'var(--color-primary-dark)',
                marginBottom: '20px'
              }}>
                ¿Cómo funciona la consulta?
              </h2>

              <p style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--color-primary-dark)',
                lineHeight: 1.45,
                marginBottom: '16px',
                opacity: 0.95
              }}>
                Directo y sin vueltas. Tres pasos.
              </p>

              <p style={{
                fontSize: '1.05rem',
                color: 'var(--color-primary-dark)',
                lineHeight: 1.6,
                marginBottom: '32px',
                opacity: 0.85
              }}>
                Sin burocracia ni esperas largas. Desde la primera semana ya tienes una dirección clara.
              </p>

              <div>
                <button
                  onClick={onBook}
                  className="btn-primary"
                  style={{ border: 'none', cursor: 'pointer', margin: 0, padding: '16px 32px' }}
                >
                  Agendar primera consulta <ArrowRight size={18} />
                </button>
                <div style={{
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: 'var(--color-primary-dark)',
                  opacity: 0.75,
                  marginTop: '12px'
                }}>
                  Atención presencial u online por videoconsulta
                </div>
              </div>
            </div>

            {/* Right Column: Open-Air Typographic Stream (Zero Cards, Zero Emojis) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {/* Movement 01 */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3.2rem',
                  lineHeight: 1,
                  fontWeight: 900,
                  color: 'var(--color-primary-dark)',
                  opacity: 0.35,
                  flexShrink: 0
                }}>
                  01
                </span>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.65rem',
                    color: 'var(--color-primary-dark)',
                    marginBottom: '8px',
                    lineHeight: 1.2
                  }}>
                    Servicio de atención diagnóstica
                  </h3>
                  <p style={{
                    fontSize: '1.02rem',
                    lineHeight: 1.6,
                    color: 'var(--color-primary-dark)',
                    opacity: 0.9,
                    margin: 0
                  }}>
                    Primera sesión clínica para escucharte, entender qué está pasando y realizar la evaluación diagnóstica inicial de tu hijo o tu situación personal.
                  </p>
                </div>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '16px 16px 4px 16px',
                  background: 'rgba(166, 223, 253, 0.45)',
                  border: '2px solid var(--color-primary-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '4px'
                }}>
                  <MessagesSquare size={22} color="var(--color-primary-dark)" />
                </div>
              </div>

              <div style={{ height: '1px', borderTop: '2px dashed rgba(35, 71, 239, 0.25)', width: '100%' }} />

              {/* Movement 02 */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3.2rem',
                  lineHeight: 1,
                  fontWeight: 900,
                  color: 'var(--color-primary-dark)',
                  opacity: 0.35,
                  flexShrink: 0
                }}>
                  02
                </span>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.65rem',
                    color: 'var(--color-primary-dark)',
                    marginBottom: '8px',
                    lineHeight: 1.2
                  }}>
                    Aplicación de pruebas psicológicas estandarizadas
                  </h3>
                  <p style={{
                    fontSize: '1.02rem',
                    lineHeight: 1.6,
                    color: 'var(--color-primary-dark)',
                    opacity: 0.9,
                    margin: 0
                  }}>
                    Aplicamos pruebas psicológicas estandarizadas y reconocidas para medir con objetividad y rigor clínico el perfil y las necesidades reales, sin especular.
                  </p>
                </div>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  background: 'rgba(253, 208, 114, 0.5)',
                  border: '2px solid var(--color-primary-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '4px'
                }}>
                  <ClipboardCheck size={22} color="var(--color-primary-dark)" />
                </div>
              </div>

              <div style={{ height: '1px', borderTop: '2px dashed rgba(35, 71, 239, 0.25)', width: '100%' }} />

              {/* Movement 03 */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3.2rem',
                  lineHeight: 1,
                  fontWeight: 900,
                  color: 'var(--color-primary-dark)',
                  opacity: 0.35,
                  flexShrink: 0
                }}>
                  03
                </span>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.65rem',
                    color: 'var(--color-primary-dark)',
                    marginBottom: '8px',
                    lineHeight: 1.2
                  }}>
                    Guía a la familia y plan de abordaje
                  </h3>
                  <p style={{
                    fontSize: '1.02rem',
                    lineHeight: 1.6,
                    color: 'var(--color-primary-dark)',
                    opacity: 0.9,
                    margin: 0
                  }}>
                    Te orientamos sobre los enfoques actuales para la condición de tu hijo, con el abordaje más completo posible para brindar su funcionalidad y correcto desarrollo. En adultos, iniciamos el plan terapéutico.
                  </p>
                </div>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(18, 179, 122, 0.3)',
                  border: '2px solid var(--color-primary-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '4px'
                }}>
                  <FileCheck size={22} color="var(--color-primary-dark)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bite-sized FAQs */}
      <section className="service-content-section" style={{ background: '#FAF9DC', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.8rem', color: 'var(--color-primary-dark)' }}>Preguntas Frecuentes</h2>
          </div>
          
          <FAQItem 
            question="¿Qué hacen exactamente en psicología infantil?" 
            answer="Evaluamos a tu hijo, aplicamos pruebas psicológicas reconocidas para entender su situación y te orientamos sobre cómo apoyarlo según lo que encontramos. El objetivo es que tu hijo tenga una mejor calidad de vida y se desarrolle como debe." 
          />
          <FAQItem 
            question="¿Para qué sirve la terapia de adultos?" 
            answer="Te ayuda a entenderte mejor, a regularte emocionalmente, a manejar el estrés, a cambiar pensamientos que te hacen daño y a vivir más en el presente. Si te sientes ansioso, agotado o atrapado en patrones que se repiten, esto es para ti." 
          />
          <FAQItem 
            question="¿Qué es eso de la cognición temporal?" 
            answer="Básicamente: vivir demasiado en el pasado te lleva a la depresión, y vivir demasiado en el futuro te lleva a la ansiedad. En terapia trabajamos para que puedas volver al presente, donde sí tienes control." 
          />
        </div>
      </section>

      {/* Service Footer Extras */}
      <ServiceFooterExtras serviceId="psicologia" onBack={onBack} onNavigateService={onNavigateService} />

      {/* Footer */}
      <Footer onNavigate={onBack} onOpenBooking={onBook} />
    </div>
  );
};

export default PsicologiaPage;


