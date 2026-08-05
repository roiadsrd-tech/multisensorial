import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, Star, CheckCircle, Award, ShieldCheck, HelpCircle, ChevronDown, ChevronUp, FileCheck, Landmark, Library, ClipboardCheck, Scan, GraduationCap, Zap, Sparkles, ChevronLeft, ChevronRight, Video, PenTool, MessageCircle } from 'lucide-react';
import ServiceFooterExtras from './ServiceFooterExtras';
import Footer from './Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// --- ANIMS & GRAPHICS GENERATED WITH CODE (ULTRA PREMIUM & DETAILED) ---

// Paso 1: Evaluación - Brain scan con electrodos y conexiones SVG reales
const BrainWaveGraphic = () => (
  <div className="step-graphic-container brain-scan-wrapper">
    <div className="scanner-grid-bg"></div>
    <div className="scan-scope-ring"></div>
    <div className="brain-svg-container">
      <svg className="detailed-brain-svg" viewBox="0 0 200 160" width="100%" height="100%">
        {/* Brain Contour */}
        <path 
          d="M 100,20 C 40,20 20,50 20,80 C 20,110 40,140 80,140 C 90,140 95,135 100,135 C 105,135 110,140 120,140 C 160,140 180,110 180,80 C 180,50 160,20 100,20 Z" 
          fill="rgba(35, 71, 239, 0.05)" 
          stroke="var(--color-primary-dark)" 
          strokeWidth="4" 
          strokeDasharray="4,4"
        />
        {/* Cerebellum */}
        <path 
          d="M 60,130 C 50,145 80,155 100,148 C 120,155 150,145 140,130 Z" 
          fill="none" 
          stroke="var(--color-primary-dark)" 
          strokeWidth="3"
        />
        {/* Connection circuits */}
        <path d="M 60,50 L 100,40 L 140,50 L 150,80 L 100,90 L 50,80 Z" fill="none" stroke="var(--color-primary-dark)" strokeWidth="2" opacity="0.4" />
        <path d="M 60,110 L 100,120 L 140,110 L 100,90 Z" fill="none" stroke="var(--color-primary-dark)" strokeWidth="2" opacity="0.4" />
        <path d="M 100,40 L 100,120" fill="none" stroke="var(--color-primary-dark)" strokeWidth="1.5" opacity="0.3" />

        {/* Pulsing Brain Nodes (Electrodos) */}
        <circle cx="100" cy="40" r="8" fill="var(--color-accent)" className="brain-node node-1" />
        <circle cx="60" cy="50" r="8" fill="var(--color-secondary)" className="brain-node node-2" />
        <circle cx="140" cy="50" r="8" fill="var(--color-pink)" className="brain-node node-3" />
        <circle cx="50" cy="80" r="8" fill="var(--color-green)" className="brain-node node-4" />
        <circle cx="150" cy="80" r="8" fill="var(--color-primary)" className="brain-node node-5" />
        <circle cx="100" cy="90" r="9" fill="var(--color-accent)" className="brain-node node-6" />
        <circle cx="60" cy="110" r="8" fill="var(--color-secondary)" className="brain-node node-7" />
        <circle cx="140" cy="110" r="8" fill="var(--color-pink)" className="brain-node node-8" />
        <circle cx="100" cy="120" r="8" fill="var(--color-green)" className="brain-node node-9" />
      </svg>
    </div>
    <div className="radar-sweep-line"></div>
    <span className="visual-scan-badge">SCANNING...</span>
  </div>
);

// Paso 2: Diseño - Cuaderno espiral realista con hoja cuadriculada y lápiz flotante
const BookFlipGraphic = () => (
  <div className="step-graphic-container book-flip-wrapper">
    <div className="realistic-notebook">
      {/* Spiral Binder (CSS loops) */}
      <div className="spiral-binder-column">
        {[...Array(6)].map((_, i) => <div key={i} className="notebook-spiral-ring"></div>)}
      </div>
      
      {/* Right side page with grid and lines */}
      <div className="notebook-inner-sheet">
        <div className="sheet-grid-lines"></div>
        <div className="sheet-margin-line"></div>
        <div className="notebook-written-content">
          <div className="handwriting-line long"></div>
          <div className="handwriting-line medium"></div>
          <div className="handwriting-line long"></div>
          <div className="handwriting-line short"></div>
        </div>
      </div>
      
      {/* 3D Floating Pencil */}
      <div className="pencil-3d-floating-wrapper">
        <div className="pencil-body">
          <div className="pencil-tip"></div>
          <div className="pencil-eraser"></div>
        </div>
      </div>
    </div>
    <div className="sparkle-stars">
      <Sparkles size={24} className="sparkle-1" />
      <Sparkles size={16} className="sparkle-2" />
    </div>
  </div>
);

// Paso 3: Clases y Biblioteca - Laptop con videollamada y estantería de libros con texturas
const LibraryShelfGraphic = () => (
  <div className="step-graphic-container library-shelf-wrapper">
    {/* Background structured bookshelf */}
    <div className="bookshelf-wood-grid">
      <div className="wood-plank vertical-left"></div>
      <div className="wood-plank vertical-right"></div>
      <div className="wood-plank horizontal-shelf"></div>
    </div>

    {/* Structured Books on shelf */}
    <div className="detailed-books-row">
      <div className="spine-book book-navy" style={{ height: '85px' }}><span className="spine-text">MATH</span></div>
      <div className="spine-book book-orange" style={{ height: '100px' }}><span className="spine-text">CORE</span></div>
      <div className="spine-book book-yellow" style={{ height: '90px', transform: 'rotate(-5deg)' }}><span className="spine-text">ART</span></div>
      <div className="spine-book book-pink" style={{ height: '80px' }}><span className="spine-text">LANG</span></div>
    </div>

    {/* Realistic Laptop Chassis */}
    <div className="laptop-chassis-wrapper">
      <div className="laptop-screen">
        <div className="laptop-webcam"></div>
        <div className="screen-active-videocall">
          {/* Mockup Classroom view */}
          <div className="teacher-video-feed">
            <Video size={16} className="feed-camera-icon" />
            <div className="teacher-head"></div>
            <div className="teacher-body"></div>
          </div>
          <div className="child-pip-feed">
            <div className="child-head"></div>
          </div>
          <div className="screen-caption-box">Clase Interactiva</div>
        </div>
      </div>
      <div className="laptop-keyboard-base">
        <div className="keyboard-groove"></div>
      </div>
    </div>
  </div>
);

// Paso 4: Reportes con QR - Hoja de calificaciones con tabla de notas y scanner láser
const QRScanGraphic = () => (
  <div className="step-graphic-container qr-scan-wrapper">
    <div className="report-card-paper">
      {/* Header logo & title */}
      <div className="report-card-header">
        <div className="micro-logo-icon"></div>
        <span className="report-card-title">MULTISENSORIAL RD</span>
      </div>
      
      {/* Grading Table */}
      <div className="grades-table-mock">
        <div className="table-row table-header-row">
          <span>MATERIA</span>
          <span>NOTA</span>
        </div>
        <div className="table-row">
          <span>Lectoescritura</span>
          <span className="grade-pill grade-a">A+</span>
        </div>
        <div className="table-row">
          <span>Matemáticas</span>
          <span className="grade-pill grade-a">A</span>
        </div>
        <div className="table-row">
          <span>Ciencias</span>
          <span className="grade-pill grade-a">A+</span>
        </div>
        <div className="table-row">
          <span>Escucha y Atención</span>
          <span className="grade-pill grade-100">100%</span>
        </div>
      </div>

      {/* Structured QR Code */}
      <div className="high-fidelity-qr-wrapper">
        <svg viewBox="0 0 100 100" className="qr-svg-vector">
          {/* QR corner squares */}
          <rect x="5" y="5" width="25" height="25" fill="none" stroke="var(--color-primary-dark)" strokeWidth="6" />
          <rect x="12.5" y="12.5" width="10" height="10" fill="var(--color-primary-dark)" />
          <rect x="70" y="5" width="25" height="25" fill="none" stroke="var(--color-primary-dark)" strokeWidth="6" />
          <rect x="77.5" y="12.5" width="10" height="10" fill="var(--color-primary-dark)" />
          <rect x="5" y="70" width="25" height="25" fill="none" stroke="var(--color-primary-dark)" strokeWidth="6" />
          <rect x="12.5" y="77.5" width="10" height="10" fill="var(--color-primary-dark)" />
          
          {/* QR pixels */}
          <rect x="40" y="10" width="10" height="10" fill="var(--color-primary-dark)" />
          <rect x="55" y="20" width="10" height="10" fill="var(--color-primary-dark)" />
          <rect x="45" y="45" width="15" height="15" fill="var(--color-primary-dark)" />
          <rect x="75" y="45" width="10" height="10" fill="var(--color-primary-dark)" />
          <rect x="45" y="75" width="10" height="15" fill="var(--color-primary-dark)" />
          <rect x="75" y="75" width="15" height="10" fill="var(--color-primary-dark)" />
        </svg>
      </div>

      {/* Laser scan line overlay */}
      <div className="laser-scanning-line"></div>
      <div className="laser-glowing-shade"></div>
    </div>
  </div>
);

// Paso 5: Certificación y Homologación - Pergamino enrollado real y birrete con borla
const GraduationStampGraphic = () => (
  <div className="step-graphic-container graduation-stamp-wrapper">
    {/* Rolled parchment diploma */}
    <div className="realistic-parchment-scroll">
      <div className="parchment-body">
        <div className="parchment-text-mock"></div>
        <div className="parchment-text-mock long"></div>
        
        {/* Notary golden stamp and ribbons */}
        <div className="diploma-gold-notary-seal">
          <Award size={18} />
        </div>
        <div className="diploma-notary-red-ribbons"></div>
      </div>
    </div>

    {/* Interactive stamping tool */}
    <div className="mechanical-stamp-device">
      <div className="device-handle"></div>
      <div className="device-piston"></div>
      <div className="device-rubber">APROBADO</div>
    </div>

    {/* 3D-like Graduation Cap */}
    <div className="graduation-cap-3d-model">
      <div className="cap-rhombus"></div>
      <div className="cap-head-ring"></div>
      <div className="cap-tassel-tread"></div>
      <div className="cap-tassel-borla"></div>
    </div>

    {/* Burst of Confetti */}
    <div className="bursting-confetti-elements">
      {[...Array(6)].map((_, i) => <div key={i} className={`confetti-piece p-${i}`}></div>)}
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="faq-accordion-item" style={{
      background: 'white',
      borderRadius: '20px',
      border: '3px solid var(--color-primary-dark)',
      boxShadow: isOpen ? '4px 4px 0px var(--color-primary-dark)' : '6px 6px 0px var(--color-primary-dark)',
      marginBottom: '20px',
      overflow: 'hidden',
      transition: 'all 0.2s ease'
    }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: isMobile ? '16px' : '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'left',
          fontSize: isMobile ? '1rem' : '1.2rem',
          fontWeight: 800,
          color: 'var(--color-primary-dark)',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <HelpCircle size={24} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
          {question}
        </span>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{
              padding: isMobile ? '0 16px 16px 20px' : '0 24px 24px 60px',
              color: 'var(--color-text-muted)',
              fontSize: isMobile ? '0.95rem' : '1.05rem',
              lineHeight: 1.6,
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

// --- INTERACTIVE PHYSICAL DIPLOMA ---
const InteractiveDiploma = () => {
  const [selectedHotspot, setSelectedHotspot] = useState('sc');
  const [isMobile, setIsMobile] = useState(false);
  const keys = ['sc', 'qr', 'notary'];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const hotspots = {
    sc: {
      title: "Matrícula y Registro en EE. UU.",
      badge: "Acreditación Oficial EE.UU.",
      shortBadge: "Matrícula EE.UU.",
      desc: "Inscripción escolar oficial válida en Estados Unidos. El estudiante cursa su ciclo escolar con el soporte legal de un distrito escolar norteamericano formal y acreditado (AMA Academy).",
      color: "var(--color-secondary)",
      idx: 0
    },
    qr: {
      title: "Boletines de Calificaciones con Código QR",
      badge: "Calificaciones con Código QR",
      shortBadge: "Boletín QR",
      desc: "Cada reporte de notas escolar y expediente físico cuenta con un código QR único de verificación digital. Esto permite a cualquier colegio de reingreso validar al instante el expediente escolar en línea.",
      color: "var(--color-pink)",
      idx: 1
    },
    notary: {
      title: "Expediente de Equivalencia para el MINERD",
      badge: "Convalidación en RD (MINERD)",
      shortBadge: "MINERD (RD)",
      desc: "El expediente final se entrega traducido por intérprete judicial oficial y certificado ante notario público, estructurado y legalizado según los requisitos del Ministerio de Educación dominicano para su homologación.",
      color: "var(--color-primary)",
      idx: 2
    }
  };

  const handleNext = () => {
    const currentIdx = hotspots[selectedHotspot].idx;
    const nextIdx = (currentIdx + 1) % keys.length;
    setSelectedHotspot(keys[nextIdx]);
  };

  const handlePrev = () => {
    const currentIdx = hotspots[selectedHotspot].idx;
    const prevIdx = (currentIdx - 1 + keys.length) % keys.length;
    setSelectedHotspot(keys[prevIdx]);
  };

  return (
    <div className="diploma-interactive-section">
      {/* Mobile Horizontal Tabs Selector */}
      <div className="diploma-mobile-tabs">
        {keys.map((key) => (
          <button
            key={key}
            onClick={() => setSelectedHotspot(key)}
            className={`mobile-tab-btn ${selectedHotspot === key ? 'active' : ''}`}
            style={{
              background: selectedHotspot === key ? hotspots[key].color : 'white'
            }}
          >
            {hotspots[key].shortBadge || hotspots[key].badge}
          </button>
        ))}
      </div>

      <div className="diploma-flex-container">
        
        {/* The Graphic Diploma */}
        <div className="physical-diploma-wrapper hide-mobile-flex">
          <div className="diploma-sheet">
            {/* Watermark Logo */}
            <div className="diploma-watermark">
              <Landmark size={150} />
            </div>

            {/* Header */}
            <div className="diploma-header">
              <h3>AMA ACADEMY</h3>
              <h5>OFFICIAL TRANSCRIPT & GRADE SYSTEM</h5>
              <div className="diploma-divider-lines"></div>
            </div>

            {/* Body Mockup Text */}
            <div className="diploma-body-text">
              <p className="stub-text-line long"></p>
              <p className="stub-text-line medium"></p>
              <p className="stub-text-line long"></p>
              <p className="stub-text-line short"></p>
            </div>

            {/* Hotspot 1: QR (Top Right) */}
            <div 
              className={`diploma-hotspot qr-hotspot ${selectedHotspot === 'qr' ? 'active' : ''}`}
              onClick={() => setSelectedHotspot('qr')}
            >
              <div className="hotspot-pulse-ring"></div>
              <div className="hotspot-inner">
                <Scan size={24} />
              </div>
              <span className="hotspot-label">Reporte QR</span>
            </div>

            {/* Hotspot 2: Gold Seal (Bottom Left) */}
            <div 
              className={`diploma-hotspot seal-hotspot ${selectedHotspot === 'sc' ? 'active' : ''}`}
              onClick={() => setSelectedHotspot('sc')}
            >
              <div className="hotspot-pulse-ring-gold"></div>
              <div className="hotspot-inner-gold">
                <Award size={24} />
              </div>
              <span className="hotspot-label">Registro EE.UU.</span>
            </div>

            {/* Hotspot 3: Notary Ribbon (Bottom Right) */}
            <div 
              className={`diploma-hotspot ribbon-hotspot ${selectedHotspot === 'notary' ? 'active' : ''}`}
              onClick={() => setSelectedHotspot('notary')}
            >
              <div className="hotspot-pulse-ring-blue"></div>
              <div className="hotspot-inner-blue">
                <Landmark size={24} />
              </div>
              <span className="hotspot-label">Homologación</span>
            </div>
          </div>
        </div>

        {/* Dynamic Details Box with Nav Arrows */}
        <div className="diploma-detail-box" style={{
          background: 'white',
          border: '4px solid var(--color-primary-dark)',
          borderRadius: isMobile ? '24px' : '30px',
          padding: isMobile ? '20px' : '30px',
          boxShadow: isMobile ? '6px 6px 0px var(--color-primary-dark)' : '8px 8px 0px var(--color-primary-dark)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: isMobile ? 'auto' : '260px',
          position: 'relative'
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedHotspot}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              style={{ flex: 1 }}
            >
              <span style={{
                background: hotspots[selectedHotspot].color,
                color: 'var(--color-primary-dark)',
                padding: '6px 14px',
                borderRadius: '100px',
                fontSize: '0.8rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                border: '2px solid var(--color-primary-dark)',
                display: 'inline-block',
                marginBottom: '15px'
              }}>
                {hotspots[selectedHotspot].badge}
              </span>
              <h3 style={{ fontSize: isMobile ? '1.5rem' : '2rem', color: 'var(--color-primary-dark)', marginBottom: '12px' }}>
                {hotspots[selectedHotspot].title}
              </h3>
              <p style={{ fontSize: isMobile ? '0.95rem' : '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                {hotspots[selectedHotspot].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Nav Controls */}
          <div className="diploma-nav-controls" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '20px',
            borderTop: '2px dashed var(--color-bg)',
            paddingTop: '15px'
          }}>
            <button onClick={handlePrev} className="ux-nav-btn" aria-label="Anterior">
              <ChevronLeft size={20} /> Anterior
            </button>
            <button onClick={handleNext} className="ux-nav-btn" aria-label="Siguiente">
              Siguiente <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

const HomeschoolingPage = ({ onBack, onBook, onNavigateService }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const steps = [
    {
      title: "Evaluación Previa",
      shortTitle: "1. Evaluación",
      subtitle: "Paso 1",
      desc: "Evaluación neurocognitiva y psicopedagógica completa del estudiante. Mapeamos a profundidad su perfil sensorial y estilo cognitivo de aprendizaje para ajustar de forma precisa la enseñanza.",
      graphic: <BrainWaveGraphic />,
      color: "var(--color-accent)"
    },
    {
      title: "Adaptación Curricular",
      shortTitle: "2. Currículo",
      subtitle: "Paso 2",
      desc: "Personalización del currículo oficial de EE. UU. (AMA Academy) ajustándolo al plan educativo de tu país de origen, asegurando una transición fluida en caso de regresar al colegio convencional.",
      graphic: <BookFlipGraphic />,
      color: "var(--color-primary)"
    },
    {
      title: "Clases y Recursos de Apoyo",
      shortTitle: "3. Clases",
      subtitle: "Paso 3",
      desc: "Clases guiadas en grupos interactivos pequeños y acceso irrestricto a nuestra biblioteca educativa digital, la cual contiene más de 1,000 materiales y guías estructuradas grado por grado.",
      graphic: <LibraryShelfGraphic />,
      color: "var(--color-pink)"
    },
    {
      title: "Certificación y Homologación",
      shortTitle: "4. Homologación",
      subtitle: "Paso 4",
      desc: "Emisión de certificado oficial estadounidense y estructuración física/digital del dossier, dejándolo listo para homologar formalmente ante el MINERD.",
      graphic: <GraduationStampGraphic />,
      color: "var(--color-green)"
    }
  ];

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div className="homeschooling-page bg-cream">
      {/* Mini Nav */}
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

      {/* Hero Section */}
      <section className="homeschooling-hero bg-blue with-grid" style={{ padding: isMobile ? '80px 0 40px' : '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
        {/* Floating background GraduationCap (Right side, large) */}
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
          <GraduationCap size={isMobile ? 240 : 460} strokeWidth={0.8} />
        </motion.div>

        {/* Floating background GraduationCap (Left side, medium, offset) */}
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
          <GraduationCap size={isMobile ? 160 : 300} strokeWidth={0.8} />
        </motion.div>

        <div className="dec-star-4 orange" style={{ top: '12%', left: '4%', transform: 'scale(1.3)', zIndex: 1, position: 'absolute' }}></div>
        <div className="dec-circle" style={{ top: '-40px', right: '-40px', width: '220px', height: '220px', background: 'var(--color-pink)', zIndex: 1, position: 'absolute', borderRadius: '50%' }}></div>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="badge-modern" style={{ background: 'var(--color-accent)', color: 'white', display: 'inline-block', marginBottom: '16px' }}>PROGRAMA OFICIAL</div>
              <h1 style={{ fontSize: isMobile ? '2.2rem' : '3.8rem', marginBottom: '24px', lineHeight: 1.1, color: 'var(--color-primary-dark)' }}>
                Homeschooling con <span style={{ color: 'var(--color-accent)' }}>Respaldo Internacional</span>
              </h1>
              <p style={{ fontSize: isMobile ? '1.1rem' : '1.3rem', color: 'var(--color-primary-dark)', marginBottom: '40px', fontWeight: 600 }}>
                Escuela en casa flexible y adaptada al perfil de tu hijo, con diploma oficial de Estados Unidos y convalidación en República Dominicana.
              </p>

              {/* Video Podcast Embed */}
              <motion.div 
                className="video-container-modern"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{
                  border: '6px solid var(--color-primary-dark)',
                  boxShadow: isMobile ? '8px 8px 0px var(--color-secondary)' : '15px 15px 0px var(--color-secondary)',
                  borderRadius: isMobile ? '24px' : '40px',
                  overflow: 'hidden',
                  background: 'var(--color-primary-dark)'
                }}
              >
                <div className="video-aspect-ratio" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    src="https://www.youtube.com/embed/ZKI_bcbkVI0" 
                    title="Homeschooling para niños con autismo en RD - Multisensorial" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qué incluye el programa Section */}
      <section className="homeschooling-details" style={{ padding: isMobile ? '60px 0' : '100px 0' }}>
        <div className="container">


          {/* Benefits: Creative Organic Blobs */}
          <div style={{ marginTop: isMobile ? '60px' : '100px' }}>
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '50px' }}>
              <div className="badge-modern" style={{ background: 'var(--color-pink)', color: 'var(--color-primary-dark)' }}>BENEFICIOS PREMIUM</div>
              <h3 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', color: 'var(--color-primary-dark)' }}>¿Por qué elegir Multisensorial?</h3>
            </div>

            <div className="benefits-blobs-grid">
              {[
                { title: "Malla Core Knowledge", desc: "Contenidos educativos ordenados con alto rigor cultural y científico.", color: "var(--color-primary)", shape: "blob-shape-1" },
                { title: "Grupos Pequeños", desc: "Clases y actividades reducidas que garantizan atención directa.", color: "var(--color-secondary)", shape: "blob-shape-2" },
                { title: "Soporte de AMA Academy", desc: "Certificación y diploma de EE. UU. reconocido internacionalmente.", color: "var(--color-pink)", shape: "blob-shape-3" },
                { title: "Acompañamiento Experto", desc: "Profesores y pedagogos guiando tu labor escolar día a día.", color: "var(--color-green)", shape: "blob-shape-4" },
                { title: "Biblioteca Ilimitada", desc: "Acceso a más de 1,000 guías prácticas, cuadernos y recursos.", color: "var(--color-accent)", shape: "blob-shape-5" }
              ].map((b, idx) => (
                <motion.div 
                  key={idx}
                  className={`benefit-organic-blob ${b.shape}`}
                  whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 3 : -3 }}
                  style={{ background: b.color }}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="blob-icon-wrapper">
                    <CheckCircle size={28} />
                  </div>
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Pathway Section (Dashboard-Based Layout) */}
      <section className="bg-blue with-grid" style={{ padding: isMobile ? '60px 0' : '120px 0', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '60px' }}>
            <div className="badge-modern" style={{ background: 'var(--color-accent)', color: 'white' }}>CÓMO FUNCIONA</div>
            <h2 style={{ fontSize: isMobile ? '2.2rem' : '3.5rem', color: 'var(--color-primary-dark)', marginTop: '10px' }}>Proceso de Homeschooling</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>Descubre cómo guiamos a tu hijo desde la primera evaluación hasta su diploma oficial estadounidense.</p>
          </div>

          {/* Compact Step Selector Timeline (Directly above the visor grid) */}
          <div className="trail-progress-bar-container">
            <div className="trail-progress-bar">
              {steps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`progress-step-pill-btn ${activeStep === idx ? 'active' : ''}`}
                  style={{
                    borderBottomColor: activeStep === idx ? step.color : 'var(--color-primary-dark)'
                  }}
                >
                  <span className="step-num-circle" style={{ background: activeStep === idx ? step.color : 'white' }}>
                    {idx + 1}
                  </span>
                  <span className="step-btn-text">{step.shortTitle}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Graphic Display Grid */}
          <div className="trail-display-dashboard">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                className="display-dashboard-grid"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                
                {/* Code-Generated Animation Box */}
                <div className="dashboard-animation-box">
                  {steps[activeStep].graphic}
                </div>

                {/* Content Box with Paging Controls */}
                <div className="dashboard-content-card">
                  <span className="step-tag-pill" style={{ background: steps[activeStep].color }}>
                    Paso {activeStep + 1}
                  </span>
                  <h3>{steps[activeStep].title}</h3>
                  <p className="step-explanation-text">{steps[activeStep].desc}</p>
                  
                  <div className="notebook-handwritten-note">
                    <p>✓ Adaptación garantizada según el perfil neurocognitivo del niño.</p>
                  </div>

                  {/* Slider controls (right inside the details box) */}
                  <div className="trail-slider-controls" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '25px',
                    borderTop: '2px dashed var(--color-bg)',
                    paddingTop: '20px'
                  }}>
                    <button onClick={prevStep} className="ux-nav-btn">
                      <ChevronLeft size={20} /> Anterior
                    </button>
                    <button onClick={nextStep} className="ux-nav-btn">
                      Siguiente <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Paging Indicator Dots */}
            <div className="mobile-dots-indicator show-mobile-only" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`dot-indicator ${activeStep === idx ? 'active' : ''}`}
                  style={{
                    background: activeStep === idx ? steps[idx].color : 'rgba(35, 71, 239, 0.2)'
                  }}
                  aria-label={`Ir al paso ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Proof Video Section (Adapted for Vertical) */}
      <section className="bg-cream with-grid" style={{ padding: isMobile ? '60px 0' : '120px 0', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', gap: isMobile ? '30px' : '80px', flexWrap: 'wrap' }}>

            {/* Mobile: Badge + Title above video */}
            {isMobile && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                style={{ width: '100%', textAlign: 'center' }}
              >
                <div className="badge-modern" style={{ background: 'var(--color-pink-light)', color: 'var(--color-primary-dark)', marginBottom: '16px', display: 'inline-block' }}>CLASE EN ACCIÓN</div>
                <h2 style={{ fontSize: '2.2rem', color: 'var(--color-primary-dark)', lineHeight: 1.1, margin: 0 }}>Culminación de 1er Grado</h2>
              </motion.div>
            )}
            
            {/* Left: Vertical Video */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', width: '100%' }}
            >
              <div style={{ 
                width: '100%', 
                maxWidth: '340px', 
                borderRadius: '32px', 
                overflow: 'hidden', 
                border: '8px solid white', 
                boxShadow: isMobile ? '8px 8px 0px var(--color-primary-dark)' : '15px 15px 0px var(--color-primary-dark)',
                background: 'black',
                position: 'relative',
                aspectRatio: '9/16'
              }}>
                <video 
                  src="/Video-240.mp4" 
                  controls 
                  playsInline 
                  preload="metadata"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </motion.div>

            {/* Right: Text & Context (desktop only) */}
            {!isMobile && (
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                style={{ flex: '1 1 400px', width: '100%' }}
              >
                <div className="badge-modern" style={{ background: 'var(--color-pink-light)', color: 'var(--color-primary-dark)', marginBottom: '20px' }}>CLASE EN ACCIÓN</div>
                <h2 style={{ fontSize: '3.5rem', color: 'var(--color-primary-dark)', marginBottom: '32px', lineHeight: 1.1 }}>Culminación de 1er Grado</h2>
                
                <div style={{ background: 'white', padding: '40px', borderRadius: '24px', border: '3px solid var(--color-primary-light)', boxShadow: '8px 8px 0px var(--color-primary-light)' }}>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="var(--color-secondary)" color="var(--color-secondary)" />)}
                  </div>
                  <p style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--color-primary-dark)', marginBottom: '12px' }}>"Resultados tangibles desde casa."</p>
                  <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    Nuestros estudiantes demuestran un progreso excepcional en sus habilidades sociales, comunicativas y académicas, interactuando en un ambiente guiado y seguro.
                  </p>
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes Section */}
      <section className="bg-pink with-grid" style={{ padding: isMobile ? '60px 0' : '120px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '60px' }}>
            <div className="badge-modern" style={{ background: 'white', color: 'var(--color-primary-dark)' }}>RESOLVEMOS TUS DUDAS</div>
            <h2 style={{ fontSize: isMobile ? '2.2rem' : '3.5rem', color: 'var(--color-primary-dark)', marginTop: '10px' }}>Preguntas Frecuentes</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', opacity: 0.9 }}>Información clara para ayudarte a tomar la mejor decisión.</p>
          </div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
          >
            <FAQItem 
              question="¿El diploma de graduación es válido internacionalmente?"
              answer="Sí. Al estar avalado por AMA Academy y registrado legalmente ante el Departamento de Educación en Estados Unidos, el diploma emitido es completamente oficial y tiene validez internacional."
            />
            <FAQItem 
              question="¿Cómo se homologa el grado escolar en República Dominicana?"
              answer="Nosotros preparamos y te entregamos un expediente completo, ordenado, debidamente apostillado y notariado que recopila las evidencias de aprendizaje, reportes de calificaciones y el diploma estadounidense. Este expediente está listo para ser presentado ante el Ministerio de Educación dominicano (MINERD) para el proceso formal de homologación."
            />
            <FAQItem 
              question="¿Quién se encarga de la adecuación curricular de mi hijo?"
              answer="En Multisensorial ejercemos como tutores &quot;padres&quot; para la adecuación curricular del niño y así pueda tener un proceso acorde a sus necesidades (paralelo a los servicios psicopedagógicos)."
            />

            <FAQItem 
              question="¿Por qué se requiere una evaluación previa antes de ingresar?"
              answer="La evaluación previa es obligatoria porque no creemos en planes genéricos. Necesitamos entender a profundidad el perfil de procesamiento sensorial, capacidad de atención y nivel curricular actual de tu hijo para diseñar las adaptaciones específicas que aseguren su éxito en el programa. Además, los cupos son limitados por grado."
            />
          </motion.div>
        </div>
      </section>

      {/* Service Footer Extras */}
      <ServiceFooterExtras serviceId="homeschooling" onBack={onBack} onNavigateService={onNavigateService} />

      {/* CTA Final */}
      <section className="bg-yellow with-grid" style={{ padding: isMobile ? '80px 0' : '120px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="dec-star-4 orange" style={{ top: '15%', right: '10%', transform: 'scale(1.2)' }}></div>
        <div className="dec-wiggle" style={{ bottom: '10%', left: '10%' }}></div>
        <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 2 }}>
          <div className="badge-modern" style={{ background: 'var(--color-primary-dark)', color: 'white', marginBottom: '20px' }}>CUPOS LIMITADOS</div>
          <h2 style={{ fontSize: isMobile ? '2.2rem' : '4rem', marginBottom: '24px', color: 'var(--color-primary-dark)', lineHeight: 1.1 }}>
            ¿Listo para darle la educación que tu hijo merece?
          </h2>
          <p style={{ fontSize: isMobile ? '1.1rem' : '1.3rem', color: 'var(--color-primary-dark)', marginBottom: '40px', fontWeight: 600, opacity: 0.9 }}>
            La evaluación previa es requerida para reservar el cupo de tu hijo en nuestro programa de acompañamiento. ¡Comienza hoy!
          </p>
          <div style={{ display: 'flex', gap: isMobile ? '12px' : '20px', justifyContent: 'center', flexWrap: 'wrap', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
            <a href="https://wa.me/18093065040" target="_blank" rel="noreferrer" className="btn-primary" style={{ border: 'none', cursor: 'pointer', padding: isMobile ? '12px 24px' : '16px 36px', fontSize: isMobile ? '1rem' : '1.15rem', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', width: isMobile ? '100%' : 'auto', justifyContent: 'center' }}>
              Contactar por WhatsApp <MessageCircle size={20} />
            </a>
            <button onClick={onBack} className="btn-outline" style={{ padding: isMobile ? '12px 24px' : '16px 36px', fontSize: isMobile ? '1rem' : '1.15rem', width: isMobile ? '100%' : 'auto' }}>
              Volver al inicio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onBack} onOpenBooking={onBook} />
    </div>
  );
};

export default HomeschoolingPage;
