import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, RectangleGoggles, Sparkles, Monitor, Users, Eye, HelpCircle, ChevronDown, ChevronUp, Star, ShieldCheck, HeartHandshake } from 'lucide-react';
import ServiceFooterExtras from './ServiceFooterExtras';
import './ServicesPages.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const VRClassroomSimulator = () => {
  const [activeDistractor, setActiveDistractor] = useState(null);
  const [logMessages, setLogMessages] = useState([
    'Sistema listo. Calibración de lentes completada.',
    'Giroscopio: ACTIVO. Mirando a la pizarra...'
  ]);
  const [attentionScore, setAttentionScore] = useState(98);
  const [motorActivity, setMotorActivity] = useState(12);

  const distractors = {
    car: {
      label: "Coche por la Ventana",
      desc: "Un coche pasa sonando su bocina fuera del aula.",
      log: "⚠️ Distractor: Bocina exterior. Desviación de mirada (18.2° L) registrada. Duración: 1.8s.",
      attentionImpact: -18,
      motorImpact: 10,
    },
    board: {
      label: "Escritura del Profesor",
      desc: "El maestro golpea ligeramente la tiza en la pizarra.",
      log: "✅ Estímulo central: Tapping en pizarra. Foco central activo.",
      attentionImpact: 2,
      motorImpact: -2,
    },
    student: {
      label: "Compañero que Susurra",
      desc: "Un alumno de la fila de al lado susurra un comentario.",
      log: "⚠️ Distractor: Murmullo lateral. Actividad motora (9.4° R) e inquietud registrada.",
      attentionImpact: -24,
      motorImpact: 32,
    }
  };

  const triggerDistractor = (key) => {
    if (activeDistractor) return; // prevent overlap
    setActiveDistractor(key);
    
    // Add logs
    setLogMessages(prev => [distractors[key].log, ...prev.slice(0, 3)]);
    
    // Animate stats
    setAttentionScore(prev => Math.max(40, Math.min(100, prev + distractors[key].attentionImpact)));
    setMotorActivity(prev => Math.max(5, Math.min(100, prev + distractors[key].motorImpact)));

    // Auto reset distractor state after animation duration
    setTimeout(() => {
      setActiveDistractor(null);
      // slowly recover stats
      const recoverInterval = setInterval(() => {
        setAttentionScore(prev => {
          if (prev >= 95) { clearInterval(recoverInterval); return 95; }
          return Math.min(95, prev + 2);
        });
        setMotorActivity(prev => {
          if (prev <= 15) { return 15; }
          return Math.max(15, prev - 3);
        });
      }, 400);
    }, 3000);
  };

  const handleDeskButtonClick = () => {
    if (activeDistractor === 'board') {
      // Clicked correctly during whiteboard trigger
      setLogMessages(prev => ["🎯 ¡Acierto! Estímulo detectado. Tiempo de reacción: 310ms.", ...prev.slice(0, 3)]);
      setAttentionScore(prev => Math.min(100, prev + 5));
    } else {
      // Clicked incorrectly (commission error)
      setLogMessages(prev => ["❌ Omisión / Error de Comisión. Estímulo ausente.", ...prev.slice(0, 3)]);
      setAttentionScore(prev => Math.max(40, prev - 10));
    }
  };

  return (
    <div className="vr-classroom-simulator-container">
      {/* Left Column: Interactive Screen Viewport */}
      <div className="simulator-left-column">
        {/* Visor Area */}
        <div className="vr-visor-screen-area">
            {/* Reflection glass effect */}
            <div className="vr-visor-reflection"></div>
            
            {/* Viewfinder */}
            <div className="vr-lens-viewfinder">
              
              {/* Classroom Scene */}
              <div className="vr-classroom-scene">
                {/* Grid Floor */}
                <div className="classroom-grid-floor"></div>

                {/* Left Wall & Window */}
                <div className="classroom-left-wall">
                  <div className="classroom-window-frame">
                    <div className="window-glass-view">
                      <div className="sky-bg">
                        <div className="cloud cloud-1"></div>
                        <div className="cloud cloud-2"></div>
                      </div>
                      <div className="outside-hills"></div>
                      
                      {/* Car Distractor */}
                      <AnimatePresence>
                        {activeDistractor === 'car' && (
                          <motion.div 
                            className="classroom-distractor-car"
                            initial={{ x: -40, y: 15 }}
                            animate={{ x: 60, y: 15 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 2.8, ease: "easeInOut" }}
                          >
                            <div className="car-body">
                              <div className="car-window"></div>
                              <div className="car-wheel wheel-1"></div>
                              <div className="car-wheel wheel-2"></div>
                            </div>
                            <div className="sound-waves">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Front Whiteboard Wall */}
                <div className="classroom-front-wall">
                  {/* Clock */}
                  <div className="classroom-clock">
                    <div className="clock-hand hour"></div>
                    <div className="clock-hand minute"></div>
                  </div>

                  {/* Board */}
                  <div className="classroom-whiteboard-wrapper">
                    <div className="whiteboard-border">
                      <div className="whiteboard-surface">
                        <div className="whiteboard-marker-drawings">
                          <span className="whiteboard-title">ATTENTION KIDS AULA</span>
                          
                          {activeDistractor === 'board' ? (
                            <motion.div 
                              className="whiteboard-active-signal"
                              animate={{ scale: [0.95, 1.05, 0.95] }}
                              transition={{ repeat: Infinity, duration: 0.6 }}
                            >
                              <div className="chalk-tap-icon">✏️</div>
                              <span className="tap-signal-text">★ ¡REGISTRAR FOCO! ★</span>
                              <div className="tapping-ripples">
                                <span></span>
                                <span></span>
                              </div>
                            </motion.div>
                          ) : (
                            <div className="whiteboard-regular-lesson">
                              <div className="math-formula">f(x) = 3x² + 5</div>
                              <div className="drawing-shapes">
                                <svg width="30" height="20" viewBox="0 0 40 30" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5">
                                  <polygon points="20,2 38,28 2,28" />
                                  <circle cx="20" cy="18" r="6" />
                                </svg>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Area (Classmate) */}
                <div className="classroom-right-area">
                  <div className={`classmate-sitting ${activeDistractor === 'student' ? 'whispering' : ''}`}>
                    <div className="classmate-head-container">
                      <div className="classmate-hair"></div>
                      <div className="classmate-head">
                        {activeDistractor === 'student' && <div className="whisper-eye"></div>}
                      </div>
                    </div>
                    <div className="classmate-body"></div>

                    {/* Whisper speech bubble */}
                    <AnimatePresence>
                      {activeDistractor === 'student' && (
                        <motion.div 
                          className="whisper-speech-bubble"
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                        >
                          <span className="whisper-text">Psst...</span>
                          <div className="whisper-waves">
                            <span></span><span></span><span></span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Desk Foreground */}
                <div className="classroom-foreground-desk">
                  <div className="pupil-notebook">
                    <div className="notebook-line"></div>
                    <div className="notebook-line"></div>
                    <div className="notebook-line"></div>
                  </div>
                  <div className="pupil-pencil"></div>
                  
                  {/* Big Red Button */}
                  <div className="desk-test-button-wrapper">
                    <button 
                      className={`desk-test-button ${activeDistractor === 'board' ? 'highlight' : ''}`}
                      onClick={handleDeskButtonClick}
                    >
                      <div className="button-cap"></div>
                    </button>
                    <span className="desk-button-label">PULSAR EN ESTÍMULO</span>
                  </div>
                </div>

                {/* HUD Overlay */}
                <div className="hud-overlay-container">
                  <div className="hud-corner top-left">
                    <div className="hud-battery">
                      <span className="battery-icon">🔋</span>
                      <span className="battery-text">84%</span>
                    </div>
                    <div className="hud-wifi">📶 5.8G</div>
                  </div>
                  <div className="hud-corner top-right">
                    <span className="hud-gaze-status">👁️ GAZE: LOCK</span>
                    <span className="hud-time">00:03:42</span>
                  </div>
                  
                  {/* Scope */}
                  <div className="hud-center-scope">
                    <div className="scope-circle outer"></div>
                    <div className="scope-circle inner"></div>
                    <div className="scope-crosshairs"></div>
                    {activeDistractor && (
                      <div className="scope-scanning-alert">
                        <span className="alert-text">ANALIZANDO...</span>
                        <div className="alert-progress-bar">
                          <div className="progress-fill"></div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="hud-bottom-bar">
                    <div className="hud-data-tag">ROT: {activeDistractor === 'car' ? '18.2° L' : activeDistractor === 'student' ? '9.4° R' : '0.0°'}</div>
                    <div className="hud-data-tag">TRACKING: ON</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      {/* Right Column: Info Text + Clinician Control Dashboard */}
      <div className="simulator-right-column">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="simulator-info-text">
          <div className="badge-modern" style={{ background: 'var(--color-pink)', color: 'white', marginBottom: '16px', fontWeight: 800 }}>SIMULADOR VR</div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--color-primary-dark)', lineHeight: 1.15 }}>Prueba los Distractores del Aula</h2>
          <p style={{ fontSize: '1.05rem', marginBottom: '12px', color: 'var(--color-primary-dark)', opacity: 0.9, lineHeight: 1.5 }}>
            Durante el test oficial de 20 minutos, los sensores integrados de movimiento cefálico y giroscopio calculan exactamente hacia dónde mira el niño. Esto ayuda a diferenciar un problema puramente de atención de uno motor o de impulsividad.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-primary-dark)', fontWeight: 700, lineHeight: 1.5, marginBottom: '24px' }}>
            Prueba en nuestro simulador didáctico: haz clic en cualquiera de los botones de distractores en el panel para ver el evento en el aula 3D y el registro métrico inmediato que recibe el clínico.
          </p>
        </motion.div>

        {/* CLINICIAN CONTROL PANEL */}
        <div className="clinician-control-dashboard">
        <div className="dashboard-header">
          <div className="header-title">
            <span className="panel-led"></span>
            <h4 style={{ color: 'white', margin: 0 }}>Consola de Control del Clínico</h4>
          </div>
          <div className="dashboard-tags">
            <span className="tag-clinical">LIVE HUD</span>
          </div>
        </div>

        {/* Dashboard grid */}
        <div className="dashboard-grid">
          {/* Real-time stats */}
          <div className="dashboard-col stats-col">
            <div className="metric-progress-group">
              <div className="metric-label" style={{ color: 'white' }}>
                <span>NIVEL DE ATENCIÓN</span>
                <span className={`metric-value ${attentionScore < 70 ? 'danger' : ''}`}>{attentionScore}%</span>
              </div>
              <div className="metric-bar-outer">
                <motion.div 
                  className={`metric-bar-fill ${attentionScore < 70 ? 'danger' : ''}`}
                  animate={{ width: `${attentionScore}%` }}
                  transition={{ type: "spring", stiffness: 80 }}
                />
              </div>
            </div>

            <div className="metric-progress-group">
              <div className="metric-label" style={{ color: 'white' }}>
                <span>ACTIVIDAD MOTOR</span>
                <span className="metric-value warning" style={{ color: 'var(--color-accent)' }}>{motorActivity}%</span>
              </div>
              <div className="metric-bar-outer">
                <motion.div 
                  className="metric-bar-fill warning"
                  style={{ background: 'var(--color-accent)' }}
                  animate={{ width: `${motorActivity}%` }}
                  transition={{ type: "spring", stiffness: 80 }}
                />
              </div>
            </div>
          </div>

          {/* Trigger Distractors */}
          <div className="dashboard-col triggers-col">
            <span className="col-label">Lanzar Estímulos / Distractores</span>
            <div className="control-btn-grid">
              {Object.keys(distractors).map((key) => (
                <button
                  key={key}
                  onClick={() => triggerDistractor(key)}
                  disabled={activeDistractor !== null}
                  className={`control-trigger-btn btn-${key} ${activeDistractor === key ? 'active' : ''}`}
                >
                  <div className="btn-icon">
                    {key === 'car' ? '🚗' : key === 'board' ? '✏️' : '👤'}
                  </div>
                  <div className="btn-label-text">
                    <span className="btn-title">{distractors[key].label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live log Console */}
        <div className="clinician-log-console">
          <div className="console-header">
            <span>REGISTRO DE MÉTRICAS VR (LIVE FEED)</span>
            <span className="blinking-cursor">● GRABANDO</span>
          </div>
          <div className="console-lines-wrapper">
            {logMessages.map((msg, i) => (
              <div key={i} className={`console-line ${i === 0 ? 'newest' : ''}`} style={{ opacity: i === 0 ? 1 : 0.8 - (i * 0.2) }}>
                <span className="line-prefix">&gt;</span>
                <span className="line-text">{msg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
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

const EvaluacionAulaVirtualPage = ({ onBack, onBook, onNavigateService }) => {
  return (
    <div className="service-detail-page">
      <nav className="navbar" style={{ position: 'sticky', top: 0 }}>
        <div className="container nav-container">
          <button onClick={onBack} className="btn-back" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
            <ArrowLeft size={20} /> Volver al Inicio
          </button>
          <div className="nav-logo">
            <img src="/multilogo2 (1).png" alt="Logo" className="nav-logo-img" style={{ margin: '0 auto' }} />
          </div>
        </div>
      </nav>

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
            <div className="badge-modern">Evaluación de Vanguardia</div>
            <h1 style={{ fontSize: '3.8rem', marginBottom: '20px' }}>
              Evaluación <span style={{ color: 'var(--color-accent)' }}>Attention Kids Aula</span>
            </h1>
            <p style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '30px' }}>
              Diagnóstico objetivo y estandarizado de los procesos atencionales de niños de 6 a 16 años a través de Realidad Virtual.
            </p>
            <button onClick={onBook} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
              Reservar Prueba Attention Kids
            </button>
          </motion.div>
        </div>
      </section>

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

      {/* Interactive Tool */}
      <section className="service-interactive-section">
        <div className="container">
          <VRClassroomSimulator />
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
      <footer style={{ padding: '60px 0', background: 'white', textAlign: 'center', borderTop: '2px dashed var(--color-border)' }}>
        <img src="/multilogo2 (1).png" alt="Logo" className="nav-logo-img" style={{ margin: '0 auto 20px' }} />
        <p>© 2026 Multisensorial RD. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default EvaluacionAulaVirtualPage;
