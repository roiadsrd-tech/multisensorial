import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, RectangleGoggles, Sparkles, Monitor, Users, Eye, HelpCircle, 
  ChevronDown, ChevronUp, Star, ShieldCheck, HeartHandshake, 
  Play, Pause, Maximize2, Volume2, VolumeX, CheckCircle2, ChevronRight 
} from 'lucide-react';
import ServiceFooterExtras from './ServiceFooterExtras';
import Footer from './Footer';
import './ServicesPages.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-accordion-item" style={{
      background: 'white',
      borderRadius: '20px',
      border: '3px solid var(--color-primary-dark)',
      marginBottom: '15px',
      overflow: 'hidden'
    }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'left',
          fontSize: '1.1rem',
          fontWeight: 800,
          color: 'var(--color-primary-dark)'
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <HelpCircle size={20} style={{ color: 'var(--color-accent)' }} />
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
              padding: '0 20px 20px 50px',
              color: 'var(--color-text-muted)',
              fontSize: '0.95rem',
              lineHeight: 1.5,
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

const vrTestData = [
  {
    id: "aula",
    num: "01",
    title: "Attention Kids Aula, Aula School",
    shortTitle: "Attention Kids Aula",
    subtitle: "Evaluación Escolar en Realidad Virtual",
    age: "Niños de 6 a 16 años",
    ageBadge: "6 - 16 años",
    desc: "Sumerge al estudiante en un aula escolar interactiva 3D con profesor y compañeros de clase reales. Mide con precisión matemática la atención sostenida, nivel de impulsividad motora, velocidad de respuesta y resistencia ante distractores habituales del colegio.",
    highlights: [
      "Atención Sostenida y Focalizada",
      "Resistencia a Distractores Escolares",
      "Control de Impulsividad y Respuestas",
      "Tiempo de Reacción en Milisegundos"
    ],
    color: "var(--color-primary-light)",
    accentColor: "var(--color-accent)",
    icon: <RectangleGoggles size={26} color="var(--color-primary-dark)" />,
    video: "/Videos VR/attentionkidsaula.mp4",
    poster: "/Videos VR/attentionkidsaula_thumb.jpg"
  },
  {
    id: "aquarium",
    num: "02",
    title: "Attention Adults Acuarium",
    shortTitle: "Attention Adults Acuarium",
    subtitle: "Evaluación Atencional para Adultos y Mayores",
    age: "Edades de 16 a 92 años",
    ageBadge: "16 - 92 años",
    desc: "Entorno acuático inmersivo, sereno y libre de estrés para evaluar foco atencional sostenido, flexibilidad cognitiva, control inhibitorio y memoria operativa en jóvenes, adultos y personas mayores.",
    highlights: [
      "Estandarizado de 16 a 92 años",
      "Entorno Acuático Relajante y Dinámico",
      "Flexibilidad Cognitiva y Foco Mental",
      "Detección de Fatiga y Saturación"
    ],
    color: "var(--color-pink)",
    accentColor: "#E11D48",
    icon: <Sparkles size={26} color="var(--color-primary-dark)" />,
    video: "/Videos VR/attentionmemoryaquarium.mp4",
    poster: "/Videos VR/attentionmemoryaquarium_thumb.jpg"
  },
  {
    id: "icecream",
    num: "03",
    title: "Funciones Ejecutivas, Ice Cream",
    shortTitle: "Funciones Ejecutivas Ice Cream",
    subtitle: "Evaluación de Funciones Ejecutivas en Heladería VR",
    age: "Entre 8 a 80 años",
    ageBadge: "8 - 80 años",
    desc: "Ambiente lúdico e interactivo en 3D ambientado en una heladería virtual. Evalúa funciones ejecutivas de alto nivel: planificación secuencial, memoria de trabajo operativa, toma de decisiones y adaptabilidad ante cambios de consigna.",
    highlights: [
      "Planificación y Organización Estratégica",
      "Memoria de Trabajo Operativa",
      "Toma de Decisiones en Tiempo Real",
      "Flexibilidad Mental y Adaptabilidad"
    ],
    color: "var(--color-secondary)",
    accentColor: "#D97706",
    icon: <Star size={26} color="var(--color-primary-dark)" />,
    video: "/Videos VR/executivefunctionsicecream.mp4",
    poster: "/Videos VR/executivefunctionsicecream_thumb.jpg"
  },
  {
    id: "memory",
    num: "04",
    title: "Memory, Suite",
    shortTitle: "Memory Suite",
    subtitle: "Evaluación Avanzada de Procesos de Memoria",
    age: "A edades de 12 a 85 años",
    ageBadge: "12 - 85 años",
    desc: "Batería de pruebas en entorno virtual inmersivo para la evaluación cuantitativa de la memoria visual y auditiva, curva de retención y aprendizaje, capacidad de almacenamiento a corto y mediano plazo y velocidad de evocación.",
    highlights: [
      "Memoria Visual y Auditiva Rigurosa",
      "Curva de Aprendizaje y Retención",
      "Capacidad de Evocación Inmediata y Diferida",
      "Métricas Clínicas Estandarizadas"
    ],
    color: "#C6F6D5",
    accentColor: "#059669",
    icon: <Monitor size={26} color="var(--color-primary-dark)" />,
    video: "/Videos VR/Memorysuite.mp4",
    poster: "/Videos VR/Memorysuite_thumb.jpg"
  }
];

const VRInteractiveShowcase = ({ onBook }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const theaterRef = useRef(null);

  const activeTest = vrTestData[activeIdx];

  const handleSelectTest = (idx) => {
    setActiveIdx(idx);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section className="service-content-section bg-cream with-grid" style={{ padding: '80px 0', borderTop: '2px dashed var(--color-border)' }}>
      <div className="container" ref={theaterRef}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge-modern" style={{ background: 'var(--color-accent)', color: 'white', display: 'inline-block', marginBottom: '12px' }}>
            NUESTRAS 4 PRUEBAS EN VR
          </div>
          <h2 style={{ fontSize: '2.8rem', color: 'var(--color-primary-dark)', fontWeight: 900 }}>
            Explorador de Pruebas de Realidad Virtual
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '8px auto 0' }}>
            Selecciona una prueba para conocer sus variables clínicas y el rango de edad evaluado.
          </p>
        </div>

        {/* Desktop View: Buttons + HD Theater Player */}
        <div className="vr-desktop-only">
          {/* 4 Compact Video Tab Buttons at top */}
          <div style={{
            display: 'flex',
            gap: '14px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '36px'
          }}>
            {vrTestData.map((test, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <motion.button
                  key={test.id}
                  onClick={() => handleSelectTest(idx)}
                  whileHover={{ y: -3, boxShadow: '5px 5px 0px var(--color-primary-dark)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 18px 10px 10px',
                    borderRadius: '20px',
                    border: isSelected ? '3px solid var(--color-primary-dark)' : '2.5px solid var(--color-primary-dark)',
                    background: isSelected ? test.color : 'white',
                    boxShadow: isSelected ? '5px 5px 0px var(--color-primary-dark)' : '3px 3px 0px var(--color-primary-dark)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    minWidth: '220px',
                    flex: '1 1 220px',
                    maxWidth: '280px'
                  }}
                >
                  {/* 16:9 Thumbnail Image */}
                  <div style={{
                    width: '76px',
                    aspectRatio: '16/9',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1.5px solid var(--color-primary-dark)',
                    position: 'relative',
                    flexShrink: 0,
                    background: '#0a0d14'
                  }}>
                    <img
                      src={test.poster}
                      alt={test.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                  </div>

                  {/* Title & Age info */}
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{
                      fontSize: '0.88rem',
                      fontWeight: 900,
                      color: 'var(--color-primary-dark)',
                      lineHeight: 1.25,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {test.shortTitle}
                    </div>
                    <div style={{
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      color: 'var(--color-primary-dark)',
                      opacity: 0.85,
                      marginTop: '3px'
                    }}>
                      {test.age}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Main HD Cinema Theater Stage */}
          <motion.div
            key={activeTest.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="vr-theater-grid"
          >
            {/* Left: HD Video Player Screen */}
            <div style={{
              background: 'black',
              borderRadius: '28px',
              border: '4px solid var(--color-primary-dark)',
              boxShadow: '8px 8px 0px var(--color-primary-dark)',
              overflow: 'hidden',
              display: 'flex',
              position: 'relative',
              minHeight: '380px'
            }}>
              <video
                key={activeTest.id}
                ref={videoRef}
                src={activeTest.video}
                poster={activeTest.poster}
                controls
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Right: Detailed Clinical Information */}
            <div style={{
              background: 'white',
              borderRadius: '28px',
              border: '4px solid var(--color-primary-dark)',
              boxShadow: '8px 8px 0px var(--color-primary-dark)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                {/* Header tags */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary-dark)', opacity: 0.2, lineHeight: 1 }}>
                    {activeTest.num}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary-dark)', marginBottom: '8px', lineHeight: 1.2 }}>
                  {activeTest.title}
                </h3>

                {/* Prominent Age Badge */}
                <div style={{ marginBottom: '18px' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: activeTest.color,
                    border: '2px solid var(--color-primary-dark)',
                    padding: '6px 16px',
                    borderRadius: '14px',
                    fontSize: '0.95rem',
                    fontWeight: 900,
                    color: 'var(--color-primary-dark)',
                    boxShadow: '3px 3px 0px var(--color-primary-dark)'
                  }}>
                    {activeTest.age}
                  </span>
                </div>

                {/* Description */}
                <p style={{ fontSize: '1.02rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '22px' }}>
                  {activeTest.desc}
                </p>

                {/* Highlights */}
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--color-primary-dark)', marginBottom: '10px', opacity: 0.8 }}>
                    Variables Clínicas Evaluadas:
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
                    {activeTest.highlights.map((h, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: 'var(--color-primary-dark)',
                        background: 'var(--color-bg)',
                        padding: '6px 10px',
                        borderRadius: '10px',
                        border: '1.5px solid var(--color-primary-dark)'
                      }}>
                        <CheckCircle2 size={16} color="var(--color-accent)" />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>


            </div>
          </motion.div>
        </div>

        {/* Mobile View: Swipeable Cards Horizontal Carousel */}
        <div className="vr-mobile-carousel">
          {vrTestData.map((test) => (
            <div key={test.id} className="vr-mobile-card">
              <div>
                {/* Header Number */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '12px' }}>
                  <span style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--color-primary-dark)', opacity: 0.2, lineHeight: 1 }}>
                    {test.num}
                  </span>
                </div>

                {/* 16:9 Video Box */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/9',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '2.5px solid var(--color-primary-dark)',
                  marginBottom: '14px',
                  background: '#0a0d14'
                }}>
                  <video
                    src={test.video}
                    poster={test.poster}
                    controls
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--color-primary-dark)', marginBottom: '8px', lineHeight: 1.25 }}>
                  {test.title}
                </h3>

                {/* Age Badge */}
                <div style={{ marginBottom: '12px' }}>
                  <span style={{
                    display: 'inline-block',
                    background: test.color,
                    border: '1.5px solid var(--color-primary-dark)',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.85rem',
                    fontWeight: 900,
                    color: 'var(--color-primary-dark)',
                    boxShadow: '2px 2px 0px var(--color-primary-dark)'
                  }}>
                    {test.age}
                  </span>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '14px' }}>
                  {test.desc}
                </p>

                {/* Clinical Variables Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {test.highlights.map((h, i) => (
                    <span key={i} style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--color-primary-dark)',
                      background: 'var(--color-bg)',
                      padding: '3px 8px',
                      borderRadius: '8px',
                      border: '1px solid var(--color-primary-dark)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <CheckCircle2 size={12} color="var(--color-accent)" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EvaluacionAulaVirtualPage = ({ onBack, onBook, onNavigateService }) => {
  return (
    <div className="service-detail-page">
      {/* Hero */}
      <section className="service-hero bg-blue with-grid" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Floating background VR Goggles (Right side, large) */}
        <motion.div 
          style={{
            position: 'absolute',
            right: '-6%',
            top: '8%',
            opacity: 0.05,
            color: 'var(--color-primary-dark)',
            pointerEvents: 'none',
            zIndex: 0
          }}
          animate={{ 
            y: [0, -18, 0],
            rotate: [15, 17, 15]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 7, 
            ease: "easeInOut" 
          }}
        >
          <RectangleGoggles size={460} strokeWidth={0.8} />
        </motion.div>

        {/* Floating background VR Goggles (Left side, medium, offset) */}
        <motion.div 
          style={{
            position: 'absolute',
            left: '-4%',
            bottom: '5%',
            opacity: 0.03,
            color: 'var(--color-primary-dark)',
            pointerEvents: 'none',
            zIndex: 0
          }}
          animate={{ 
            y: [0, 15, 0],
            rotate: [-12, -10, -12]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8, 
            ease: "easeInOut",
            delay: 1.2
          }}
        >
          <RectangleGoggles size={300} strokeWidth={0.8} />
        </motion.div>

        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge-modern">EVALUACIÓN DE VANGUARDIA</div>
            <h1 style={{ fontSize: '3.8rem', marginBottom: '20px' }}>
              Evaluación de la Atención en <span style={{ color: 'var(--color-accent)' }}>Realidad Virtual</span>
            </h1>
            <p style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '30px' }}>
              Prueba objetiva y estandarizada de los procesos atencionales de niños de 6 a 16 años a través de Realidad Virtual.
            </p>
            <button onClick={onBook} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
              Reservar Prueba de Atención VR
            </button>
          </motion.div>
        </div>
      </section>

      {/* 4 VR Attention Tests Showcase */}
      <VRInteractiveShowcase onBook={onBook} />

      {/* Content */}
      <section className="service-content-section aula-intro-section">
        <div className="container">
          <div className="interactive-container-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="badge-modern" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--color-accent)', color: 'white', marginBottom: '16px', fontSize: '0.85rem', fontWeight: 800 }}>
                <Sparkles size={14} /> TECNOLOGÍA EN EVALUACIÓN
              </div>
              <h2 style={{ fontSize: '2.8rem', marginBottom: '20px', lineHeight: 1.1 }}>
                El Aula Virtual que revela <span style={{ color: 'var(--color-accent)' }}>cómo atiende</span> tu hijo
              </h2>
              <p style={{ fontSize: '1.25rem', marginBottom: '24px', color: 'var(--color-primary-dark)', fontWeight: 700, lineHeight: 1.4 }}>
                A diferencia de las monótonas pruebas tradicionales en papel, Attention Kids Aula sumerge al niño en una clase escolar realista en 3D.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'var(--color-primary-light)', padding: '16px', borderRadius: '20px', border: '3px solid var(--color-primary-dark)', boxShadow: '4px 4px 0px var(--color-primary-dark)' }}>
                  <div style={{ background: 'var(--color-primary-dark)', color: 'white', padding: '8px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <RectangleGoggles size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '4px' }}>Entorno 3D Inmersivo</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-primary-dark)', opacity: 0.9, lineHeight: 1.4 }}>El niño siente que está en un salón de clases real, sentado en su pupitre y mirando a la pizarra.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'var(--color-pink)', padding: '16px', borderRadius: '20px', border: '3px solid var(--color-primary-dark)', boxShadow: '4px 4px 0px var(--color-primary-dark)' }}>
                  <div style={{ background: 'var(--color-primary-dark)', color: 'white', padding: '8px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Eye size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '4px' }}>Distractores Reales</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-primary-dark)', opacity: 0.9, lineHeight: 1.4 }}>Registramos con precisión cómo reacciona ante murmullos, paso de coches y movimientos de compañeros.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'var(--color-secondary)', padding: '16px', borderRadius: '20px', border: '3px solid var(--color-primary-dark)', boxShadow: '4px 4px 0px var(--color-primary-dark)' }}>
                  <div style={{ background: 'var(--color-primary-dark)', color: 'white', padding: '8px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '4px' }}>Sin Ansiedad ni Presión</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-primary-dark)', opacity: 0.9, lineHeight: 1.4 }}>Se presenta como una experiencia interactiva y lúdica, eliminando la tensión del examen tradicional.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
                {/* Floating Badge */}
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '-12px',
                  background: 'var(--color-accent)',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  border: '3px solid var(--color-primary-dark)',
                  boxShadow: '3px 3px 0px var(--color-primary-dark)',
                  zIndex: 10,
                  transform: 'rotate(-5deg)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  ▶ CÓMO FUNCIONA
                </div>
                
                {/* Smartphone Mockup */}
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  borderRadius: '50px', 
                  overflow: 'hidden', 
                  border: '12px solid var(--color-primary-dark)', 
                  boxShadow: '14px 14px 0px var(--color-secondary)',
                  background: '#fff'
                }}>
                  {/* Phone Notch/Speaker */}
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '120px',
                    height: '24px',
                    background: 'var(--color-primary-dark)',
                    borderBottomLeftRadius: '16px',
                    borderBottomRightRadius: '16px',
                    zIndex: 5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <div style={{ width: '44px', height: '5px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }} />
                  </div>

                  <video 
                    src="/Video-727.mp4" 
                    controls 
                    controlsList="nodownload"
                    style={{ width: '100%', display: 'block', paddingBottom: '24px' }} 
                  />
                  
                  {/* Phone Home Bar */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '90px',
                    height: '5px',
                    background: 'var(--color-primary-dark)',
                    borderRadius: '3px',
                    opacity: 0.6
                  }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="aula-metrics-section">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <div className="badge-modern" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--color-primary-dark)', color: 'white', marginBottom: '16px', fontSize: '0.85rem', fontWeight: 800 }}>
              <Sparkles size={14} /> MÉTRICAS CIENTÍFICAS
            </div>
            <h2 style={{ fontSize: '3.2rem', marginBottom: '20px' }}>Variables Clínicas Clave Medidas</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', fontWeight: 700, maxWidth: '600px', margin: '0 auto' }}>
              Métricas cuantitativas e imparciales para un diagnóstico clínico seguro.
            </p>
          </motion.div>
          
          <motion.div 
            className="benefits-grid-premium"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12
                }
              }
            }}
          >
            {[
              { 
                icon: <Eye size={24} />, 
                title: "Atención Sostenida", 
                desc: "Mide cuánto tiempo logra mantenerse atento el niño a las indicaciones y tareas continuas en el aula virtual.", 
                color: "var(--color-primary)",
                badge: "Focalización"
              },
              { 
                icon: <Monitor size={24} />, 
                title: "Tiempo de Reacción", 
                desc: "Calcula en milisegundos la velocidad de procesamiento cognitivo al responder ante los estímulos.", 
                color: "var(--color-pink)",
                badge: "Velocidad"
              },
              { 
                icon: <ShieldCheck size={24} />, 
                title: "Autoregulación", 
                desc: "Evalúa la capacidad de controlar impulsos motrices y resistirse a desviar la atención ante distractores.", 
                color: "#C6F6D5", // Hermoso verde pastel neo-brutalista
                badge: "Control Motor"
              },
              { 
                icon: <RectangleGoggles size={24} />, 
                title: "Consistencia de Respuesta", 
                desc: "Analiza el patrón de variabilidad a lo largo del test para identificar fatiga atencional y otros factores.", 
                color: "var(--color-accent)",
                badge: "Estabilidad"
              }
            ].map((b, i) => (
              <motion.div 
                key={i} 
                className="aula-metric-card"
                style={{ 
                  background: b.color,
                  boxShadow: '6px 6px 0px var(--color-primary-dark)'
                }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { type: "spring", stiffness: 100, damping: 15 } 
                  }
                }}
                whileHover={{ 
                  y: -8, 
                  x: -2,
                  boxShadow: '10px 10px 0px var(--color-primary-dark)'
                }}
              >
                <div className="aula-metric-badge">{b.badge}</div>
                <div className="aula-metric-icon-wrapper">
                  {b.icon}
                </div>
                <div className="aula-metric-content">
                  <h3>{b.title}</h3>
                  <p style={{ paddingRight: '40px' }}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="service-content-section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '3rem' }}>Preguntas Frecuentes</h2>
          </div>
          
          <FAQItem 
            question="¿A partir de qué edad se puede realizar el test Attention Kids Aula?" 
            answer="La prueba de evaluación Attention Kids Aula está estandarizada y normalizada para evaluar procesos atencionales en niños y adolescentes de 6 a 16 años." 
          />
          <FAQItem 
            question="¿La prueba causa mareos en los niños?" 
            answer="Es sumamente inusual. El entorno virtual está diseñado de forma estática (el niño está sentado en un pupitre virtual) para evitar la cinetosis (mareo por movimiento)." 
          />
          <FAQItem 
            question="¿Reemplaza a un diagnóstico médico/psicológico?" 
            answer="No lo reemplaza, sino que actúa como una prueba científica de soporte. Brinda al especialista un informe con datos duros, percentiles y gráficos objetivos para formular un diagnóstico clínico riguroso." 
          />
        </div>
      </section>

      {/* Service Footer Extras */}
      <ServiceFooterExtras serviceId="evaluacion-aula-virtual" onBack={onBack} onNavigateService={onNavigateService} />

      {/* Footer */}
      <Footer onNavigate={onBack} onOpenBooking={onBook} />
    </div>
  );
};

export default EvaluacionAulaVirtualPage;
