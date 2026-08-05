/* eslint-disable no-unused-vars, no-empty */
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, BrainCircuit, HeartHandshake, ArrowRight, Menu, X, Headphones, Puzzle, Speech, ChevronDown, Volume2, VolumeX, BookOpen, RectangleGoggles, Waves, Users, Smile, Baby, Flower, HandHeart, Star, Instagram, Youtube, MapPin, Phone, MessageCircleHeart, Video, CheckCircle, Smartphone, Calendar, Clock, Award, ShieldCheck, Play, Car, ExternalLink } from 'lucide-react';
import './App.css';
import TomatisPage from './TomatisPage';
import HomeschoolingPage from './HomeschoolingPage';
import PropietariosPage from './PropietariosPage';
import PsicologiaPage from './PsicologiaPage';
import NeuropedagogiaPage from './NeuropedagogiaPage';
import PsicopedagogiaPage from './PsicopedagogiaPage';
import NeurofeedbackPage from './NeurofeedbackPage';
import EvaluacionAulaVirtualPage from './EvaluacionAulaVirtualPage';
import AcompanamientoMadresPage from './AcompanamientoMadresPage';
import TerapiaOrofacialPage from './TerapiaOrofacialPage';
import FisioterapiaPage from './FisioterapiaPage';
import TerapiaConductualPage from './TerapiaConductualPage';
import TomatisEnRutaPage from './TomatisEnRutaPage';
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

const mediaAppearances = [
  {
    title: "\"La Mirada\" | IA y los límites terapéuticos",
    speakers: "Carlos Eduardo Pérez y Carlos Pérez Díaz",
    url: "https://www.youtube.com/watch?v=JiJXut5kviU&list=PLMWb8sBwbKFYe3kamLfPxjBnWz5ni2jc2&index=1",
    thumbnail: "https://img.youtube.com/vi/JiJXut5kviU/maxresdefault.jpg"
  },
  {
    title: "\"La Mirada\" | 'Adolescencia' de Netflix: lo que los padres deben entender",
    speakers: "Carlos Eduardo Pérez y Carlos Pérez Díaz",
    url: "https://www.youtube.com/watch?v=yDlEPuyxBFs&list=PLMWb8sBwbKFYe3kamLfPxjBnWz5ni2jc2&index=2",
    thumbnail: "https://img.youtube.com/vi/yDlEPuyxBFs/maxresdefault.jpg"
  },
  {
    title: "QUÉ TAN CARO ES CRIAR UN HIJO AUTISTA?",
    speakers: "Estonoesradio | Carlos Eduardo Pérez",
    url: "https://www.youtube.com/watch?v=NK1u6dsNqBo&list=PLMWb8sBwbKFYe3kamLfPxjBnWz5ni2jc2&index=7",
    thumbnail: "https://img.youtube.com/vi/NK1u6dsNqBo/maxresdefault.jpg"
  },
  {
    title: "Especialistas hablan sobre el espectro del autismo con Jatnna",
    speakers: "Carlos Eduardo Pérez y Carlos Pérez Díaz",
    url: "https://www.youtube.com/watch?v=NSRzUZ-Tqhc&list=PLMWb8sBwbKFYe3kamLfPxjBnWz5ni2jc2&index=6",
    thumbnail: "https://img.youtube.com/vi/NSRzUZ-Tqhc/maxresdefault.jpg"
  },
  {
    title: "Entrevista Mery Torrealba - Carlos Pérez",
    speakers: "Hora de Te | 05 Octubre 2023",
    url: "https://www.youtube.com/watch?v=lK8_ZQcQuK0&list=PLMWb8sBwbKFYe3kamLfPxjBnWz5ni2jc2&index=5",
    thumbnail: "https://img.youtube.com/vi/lK8_ZQcQuK0/maxresdefault.jpg"
  },
  {
    title: "HOMESCHOOLING (Escuela en casa) para niños con AUTISMO en RD",
    speakers: "AzulPodcast EP 32 | Carlos Eduardo Pérez y Mery Torrealba",
    url: "https://www.youtube.com/watch?v=ZKI_bcbkVI0&t=3s",
    thumbnail: "https://img.youtube.com/vi/ZKI_bcbkVI0/maxresdefault.jpg"
  },
];

const services = [
  {
    icon: <HeartHandshake size={28} />,
    title: "Psicología Clínica",
    description: "Apoyo psicológico y diagnóstico integral."
  },
  {
    icon: <BrainCircuit size={28} />,
    title: "Neuropedagogía",
    description: "Neurociencias aplicadas al aprendizaje."
  },
  {
    icon: <Headphones size={28} />,
    title: "Método Tomatis®",
    description: "Única clínica en RD. Mejora escucha y atención."
  },
  {
    icon: <Puzzle size={28} />,
    title: "Psicopedagogía",
    description: "Intervención temprana y personalizada."
  },
  {
    icon: <Waves size={28} />,
    title: "Neurofeedback",
    description: "Entrenamos el cerebro sin medicamentos."
  },
  {
    icon: <RectangleGoggles size={28} />,
    title: "Evaluación Aula Virtual",
    description: "Software estandarizado para el diagnóstico del TDAH."
  },
  {
    icon: <Speech size={28} />,
    title: "Acompañamiento a Madres",
    description: "Acompañamiento psicológico en el proceso de las madres."
  },
  {
    icon: <BookOpen size={28} />,
    title: "Homeschooling Presencial",
    description: "Mini escuela presencial y personalizada para niños en nuestro centro."
  },
  {
    icon: <Smile size={28} />,
    title: "Terapia Orofacial",
    description: "Mejora de las funciones de succión, masticación y habla."
  },
  {
    icon: <Baby size={28} />,
    title: "Fisioterapia",
    description: "Desarrollo motor y fortalecimiento físico."
  },
  {
    icon: <Users size={28} />,
    title: "Terapia Conductual",
    description: "Modificación de conducta y habilidades sociales."
  }
];

function ServiceCard({ title, description, icon, colorClass, index, onClick, isHighlighted }) {
  const isClickable = !!onClick;
  return (
    <motion.div variants={fadeUp} style={{ position: 'relative', height: '100%' }}>
      <motion.div
        className={`service-card-modern ${colorClass} ${isClickable ? 'clickable-card' : ''}`}
        whileHover={isClickable ? { y: -16, scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 } : { y: -12, rotate: index % 2 === 0 ? 1 : -1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        style={{
          position: 'relative',
          zIndex: 1,
          cursor: isClickable ? 'pointer' : 'default',
          overflow: 'hidden',
          border: '3px solid var(--color-primary-dark)',
          boxShadow: '6px 6px 0px var(--color-primary-dark)',
          height: '100%'
        }}
        onClick={onClick}
      >
        <div className="service-card-icon">
          {icon}
        </div>
        <div className="service-card-info">
          <h3>{title}</h3>
          <p>{description}</p>
          {isClickable && (
            <span className="card-learn-more" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              marginTop: '12px',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: 'var(--color-primary-dark)',
              borderBottom: '2px solid var(--color-primary-dark)'
            }}>
              Ver Más <ArrowRight size={12} />
            </span>
          )}
        </div>
        <div className="service-card-decor"></div>
      </motion.div>
    </motion.div>
  );
}


function App() {
  const whatsappUrl = "https://wa.me/18093065040"; // Phone based on search data
  const [isMuted, setIsMuted] = useState(true);
  const [isTomatisMuted, setIsTomatisMuted] = useState(true);
  const [tomatisPlaying, setTomatisPlaying] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isBookingComplete, setIsBookingComplete] = useState(false);
  const [isCalendarLoading, setIsCalendarLoading] = useState(true);
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false);

  const [currentPage, setCurrentPage] = useState('home');
  const [showProvincialPopup, setShowProvincialPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadIframe(true);
    }, 2000);

    const popupTimer = setTimeout(() => {
      const hasBeenShown = sessionStorage.getItem('provincial_popup_shown');
      if (!hasBeenShown) {
        setShowProvincialPopup(true);
        sessionStorage.setItem('provincial_popup_shown', 'true');
      }
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(popupTimer);
    };
  }, []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const tomatisVideoRef = useRef(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const servicePagesList = [
    { id: 'todos', label: 'Ver todos los servicios' },
    { id: 'tomatis', label: 'Método Tomatis®', icon: <Headphones size={18} /> },
    { id: 'psicologia', label: 'Psicología Clínica', icon: <HeartHandshake size={18} /> },
    { id: 'neuropedagogia', label: 'Neuropedagogía', icon: <BrainCircuit size={18} /> },
    { id: 'psicopedagogia', label: 'Psicopedagogía', icon: <Puzzle size={18} /> },
    { id: 'neurofeedback', label: 'Neurofeedback', icon: <Waves size={18} /> },
    { id: 'evaluacion-aula-virtual', label: 'Evaluación Aula Virtual', icon: <RectangleGoggles size={18} /> },
    { id: 'acompanamiento-madres', label: 'Acompañamiento a Madres', icon: <Speech size={18} /> },
    { id: 'homeschooling', label: 'Homeschooling Presencial', icon: <BookOpen size={18} /> },
    { id: 'terapia-orofacial', label: 'Terapia Orofacial', icon: <Smile size={18} /> },
    { id: 'fisioterapia', label: 'Fisioterapia', icon: <Baby size={18} /> },
    { id: 'terapia-conductual', label: 'Terapia Conductual', icon: <Users size={18} /> }
  ];

  useEffect(() => {
    const video = tomatisVideoRef.current;
    if (!video) return;
    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => {
            video.play().catch(() => { });
          }, 2000);
        } else {
          clearTimeout(timer);
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(video);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (isBookingModalOpen) {
      document.body.style.overflow = 'hidden';
      setShouldLoadIframe(true);
    } else {
      document.body.style.overflow = 'unset';
      // Give the closing animation a tiny delay before resetting the content
      setTimeout(() => {
        setIsBookingComplete(false);
      }, 300);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isBookingModalOpen]);

  useEffect(() => {
    if (isBookingComplete) {
      setIsCalendarLoading(true);
    }
  }, [isBookingComplete]);

  useEffect(() => {
    // Listen for LeadConnector iframe message events for successful booking
    const handleIframeMessage = (e) => {
      let dataStr = '';
      try {
        if (typeof e.data === 'string') {
          dataStr = e.data;
        } else {
          dataStr = JSON.stringify(e.data);
        }
      } catch (err) { }

      // Handle the various ways GHL widget might announce success
      if (
        dataStr && (
          dataStr.includes('msgsndr-booking-complete') ||
          dataStr.includes('appointment-successful') ||
          dataStr.includes('appointment_scheduled') ||
          dataStr.includes('booking_completed') ||
          dataStr.includes('calendar-booking-success') ||
          dataStr.includes('booking'))
      ) {
        if (!dataStr.includes('setHeight') && !dataStr.includes('analytics')) {
          setIsBookingComplete(true);
        }
      }
    };
    window.addEventListener('message', handleIframeMessage);
    return () => window.removeEventListener('message', handleIframeMessage);
  }, []);

  if (currentPage === 'propietarios') {
    return <PropietariosPage 
      onBack={() => {
        setCurrentPage('home');
        window.scrollTo(0, 0);
      }}
    />;
  }

  const handleNavigateService = (id) => {
    setCurrentPage(id);
    window.scrollTo(0, 0);
  };

  if (currentPage === 'tomatis') {
    return <TomatisPage 
      onBack={() => {
        setCurrentPage('home');
        window.scrollTo(0, 0);
      }} 
      onBook={() => {
        setIsBookingModalOpen(true);
      }}
      onNavigateService={handleNavigateService}
    />;
  }

  if (currentPage === 'homeschooling') {
    return <HomeschoolingPage 
      onBack={() => {
        setCurrentPage('home');
        window.scrollTo(0, 0);
      }} 
      onBook={() => {
        setIsBookingModalOpen(true);
      }}
      onNavigateService={handleNavigateService}
    />;
  }

  if (currentPage === 'psicologia') {
    return <PsicologiaPage 
      onBack={() => {
        setCurrentPage('home');
        window.scrollTo(0, 0);
      }} 
      onBook={() => {
        setIsBookingModalOpen(true);
      }}
      onNavigateService={handleNavigateService}
    />;
  }

  if (currentPage === 'neuropedagogia') {
    return <NeuropedagogiaPage 
      onBack={() => {
        setCurrentPage('home');
        window.scrollTo(0, 0);
      }} 
      onBook={() => {
        setIsBookingModalOpen(true);
      }}
      onNavigateService={handleNavigateService}
    />;
  }

  if (currentPage === 'psicopedagogia') {
    return <PsicopedagogiaPage 
      onBack={() => {
        setCurrentPage('home');
        window.scrollTo(0, 0);
      }} 
      onBook={() => {
        setIsBookingModalOpen(true);
      }}
      onNavigateService={handleNavigateService}
    />;
  }

  if (currentPage === 'neurofeedback') {
    return <NeurofeedbackPage 
      onBack={() => {
        setCurrentPage('home');
        window.scrollTo(0, 0);
      }} 
      onBook={() => {
        setIsBookingModalOpen(true);
      }}
      onNavigateService={handleNavigateService}
    />;
  }

  if (currentPage === 'evaluacion-aula-virtual') {
    return <EvaluacionAulaVirtualPage 
      onBack={() => {
        setCurrentPage('home');
        window.scrollTo(0, 0);
      }} 
      onBook={() => {
        setIsBookingModalOpen(true);
      }}
      onNavigateService={handleNavigateService}
    />;
  }

  if (currentPage === 'acompanamiento-madres') {
    return <AcompanamientoMadresPage 
      onBack={() => {
        setCurrentPage('home');
        window.scrollTo(0, 0);
      }} 
      onBook={() => {
        setIsBookingModalOpen(true);
      }}
      onNavigateService={handleNavigateService}
    />;
  }

  if (currentPage === 'terapia-orofacial') {
    return <TerapiaOrofacialPage 
      onBack={() => {
        setCurrentPage('home');
        window.scrollTo(0, 0);
      }} 
      onBook={() => {
        setIsBookingModalOpen(true);
      }}
      onNavigateService={handleNavigateService}
    />;
  }

  if (currentPage === 'fisioterapia') {
    return <FisioterapiaPage 
      onBack={() => {
        setCurrentPage('home');
        window.scrollTo(0, 0);
      }} 
      onBook={() => {
        setIsBookingModalOpen(true);
      }}
      onNavigateService={handleNavigateService}
    />;
  }

  if (currentPage === 'terapia-conductual') {
    return <TerapiaConductualPage 
      onBack={() => {
        setCurrentPage('home');
        window.scrollTo(0, 0);
      }} 
      onBook={() => {
        setIsBookingModalOpen(true);
      }}
      onNavigateService={handleNavigateService}
    />;
  }

  if (currentPage === 'tomatis-en-ruta') {
    return <TomatisEnRutaPage 
      onBack={() => {
        setCurrentPage('home');
        window.scrollTo(0, 0);
      }} 
      onNavigateService={handleNavigateService}
    />;
  }

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        {/* Promotional Banner */}
        <div 
          onClick={() => {
          setCurrentPage('homeschooling');
          window.scrollTo(0, 0);
        }}
        style={{
          background: 'var(--color-accent)',
          color: 'white',
          padding: '4px 10px',
          textAlign: 'center',
          fontWeight: 700,
          fontSize: '0.8rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          width: '100%',
          cursor: 'pointer'
        }}
      >
        <Star size={14} fill="white" className="hide-mobile" />
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>¡Inscripciones abiertas para Homeschooling!</span>
          <span className="hide-mobile-inline"> Reserva tu cupo ahora.</span>
        </span>
        <span style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          background: 'rgba(255,255,255,0.2)', 
          padding: '2px 10px', 
          borderRadius: '100px', 
          fontSize: '0.75rem',
          gap: '4px',
          marginLeft: '4px',
          whiteSpace: 'nowrap'
        }}>
          Ver Más <ArrowRight size={12} />
        </span>
      </div>

        <div className="container nav-container">
          <div className="nav-logo">
                                                                                                                                                <img src="/multilogo2 (1).png" className="nav-logo-img" alt="Multisensorial Logo" />
          </div>
          <div className="nav-links">
            <a href="#metodo" className="nav-link" onClick={() => setCurrentPage('home')}>Método</a>
            
            <div 
              className="nav-dropdown-container" 
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
              style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
            >
              <a href="#servicios" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '4px' }} onClick={(e) => { e.preventDefault(); setCurrentPage('home'); setTimeout(() => { document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>
                Servicios <ChevronDown size={16} />
              </a>
              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '0',
                      background: 'white',
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                      padding: '10px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5px',
                      minWidth: '240px',
                      zIndex: 100,
                      border: '2px solid var(--color-primary-dark)'
                    }}
                  >
                    {servicePagesList.map(s => (
                      <button
                        key={s.id}
                        onClick={() => { 
                          if (s.id === 'todos') {
                            setCurrentPage('home');
                            setTimeout(() => { document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' }); }, 100);
                          } else {
                            setCurrentPage(s.id); 
                            window.scrollTo(0,0); 
                          }
                          setIsServicesDropdownOpen(false); 
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          textAlign: 'left',
                          padding: s.id === 'todos' ? '10px 12px' : '8px 12px',
                          background: s.id === 'todos' ? 'var(--color-secondary)' : 'transparent',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontWeight: s.id === 'todos' ? 800 : 600,
                          color: s.id === 'todos' ? 'var(--color-primary-dark)' : 'var(--color-primary-dark)',
                          fontSize: '0.95rem',
                          marginBottom: s.id === 'todos' ? '8px' : '0'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = s.id === 'todos' ? 'var(--color-primary-dark)' : 'var(--color-bg)';
                          if(s.id === 'todos') e.currentTarget.style.color = 'white';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = s.id === 'todos' ? 'var(--color-secondary)' : 'transparent';
                          if(s.id === 'todos') e.currentTarget.style.color = 'var(--color-primary-dark)';
                        }}
                      >
                        {s.icon}
                        <span>{s.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={() => setIsBookingModalOpen(true)} className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem', border: 'none', cursor: 'pointer' }}>
              Agendar Cita
            </button>
          </div>
          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div 
                className="mobile-menu-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(28, 78, 130, 0.4)',
                  backdropFilter: 'blur(4px)',
                  zIndex: 140
                }}
              />
              
              <motion.div 
                className="mobile-menu"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              >
                <div className="mobile-menu-links">
                  <a href="#metodo" className="mobile-menu-link" onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }}>Método</a>
                  
                  <div style={{ width: '100%' }}>
                    <div 
                      className="mobile-menu-link" 
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', border: 'none', background: 'none' }}
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    >
                      Servicios <ChevronDown size={20} style={{ transform: isMobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} />
                    </div>
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', paddingLeft: '20px', gap: '15px', marginTop: '15px' }}
                        >
                          {servicePagesList.map(s => (
                            <button
                              key={s.id}
                              onClick={() => {
                                if (s.id === 'todos') {
                                  setCurrentPage('home');
                                  setTimeout(() => { document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' }); }, 100);
                                } else {
                                  setCurrentPage(s.id);
                                  window.scrollTo(0, 0);
                                }
                                setIsMobileMenuOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                textAlign: 'left',
                                background: s.id === 'todos' ? 'var(--color-secondary)' : 'transparent',
                                border: 'none',
                                fontSize: '1.1rem',
                                fontWeight: s.id === 'todos' ? 800 : 600,
                                color: s.id === 'todos' ? 'var(--color-primary-dark)' : 'var(--color-primary-dark)',
                                padding: s.id === 'todos' ? '12px 15px' : '0',
                                borderRadius: s.id === 'todos' ? '8px' : '0',
                                marginBottom: s.id === 'todos' ? '5px' : '0',
                                cursor: 'pointer'
                              }}
                              onMouseOver={(e) => { 
                                if(s.id === 'todos') {
                                  e.currentTarget.style.background = 'var(--color-primary-dark)';
                                  e.currentTarget.style.color = 'white';
                                }
                              }}
                              onMouseOut={(e) => { 
                                if(s.id === 'todos') {
                                  e.currentTarget.style.background = 'var(--color-secondary)';
                                  e.currentTarget.style.color = 'var(--color-primary-dark)';
                                }
                              }}
                            >
                              {s.icon}
                              <span>{s.label}</span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <a href="#testimonios" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Testimonios</a>
                  <a href="#contacto" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>
                  
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsBookingModalOpen(true);
                    }} 
                    className="btn-primary" 
                    style={{ width: '100%', marginTop: '20px', padding: '15px', border: 'none' }}
                  >
                    Agendar Cita
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="hero bg-cream with-grid" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Decor */}
        <div className="dec-star-4 orange" style={{ top: '15%', left: '5%', opacity: 1, transform: 'scale(1.5)' }}></div>
        <div className="dec-circle" style={{ top: '-50px', right: '-50px', width: '300px', height: '300px', background: 'var(--color-secondary)', opacity: 1 }}></div>
                        <div className="dec-wiggle hide-mobile" style={{ top: '65%', left: '30%', opacity: 1 }}></div>
                        <div className="dec-star-4 yellow" style={{ bottom: '28%', right: '12%', opacity: 1, transform: 'scale(1.2)' }}></div>
        <div className="dec-wiggle hide-mobile" style={{ top: '25%', right: '35%', opacity: 1 }}></div>

        <div className="container hero-content">
          <motion.div
            className="hero-header"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ position: 'relative', zIndex: 2 }}
          >
            <motion.h1 variants={fadeUp} style={{ color: 'var(--color-text)' }}>
              Un espacio donde tu <span style={{ color: 'var(--color-accent)' }}>hijo</span> se siente seguro para aprender y crecer.
            </motion.h1>
          </motion.div>

          <div className="hero-image-wrapper vertical">
            <div className="hero-video-clipper">
              <video
                src="/Video-779.mp4"
                className="hero-video"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                width="100%"
                height="100%"
                onClick={() => setIsMuted(!isMuted)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div
              className="video-sound-toggle"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </div>
          </div>

          <motion.div
            className="hero-body"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ position: 'relative', zIndex: 2 }}
          >
            <motion.p variants={fadeUp} className="hero-subtitle-desktop hide-mobile" style={{ marginTop: '-80px' }}>
              A través de estímulos multisensoriales, herramientas como el Método Tomatis y muchísimo amor, ayudamos a que tu pequeño gane confianza, mejore su atención y disfrute aprender.
            </motion.p>
            <motion.p variants={fadeUp} className="hero-subtitle-mobile">
              Con estímulos multisensoriales, el Método Tomatis y mucho amor, ayudamos a tu pequeño a aprender y crecer con confianza.
            </motion.p>
            <motion.div className="hero-actions" variants={fadeUp}>
              <button onClick={() => setIsBookingModalOpen(true)} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                Agendar primera cita <ArrowRight size={20} />
              </button>
              <a href="#servicios" className="btn-outline">
                Explorar terapias
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Media Presence Section - Static Grid */}
        <div className="hero-media-static">

          <div className="container">
            <div className="media-static-label">PRESENCIA EN MEDIOS:</div>
            <div className="media-logos-grid">
              <img src="/logosasseenin/azulpodcast.webp" alt="Azul Podcast" />
              <img src="/logosasseenin/colorvision.webp" alt="Color Visión" />
              <img src="/logosasseenin/estonoesradio.webp" alt="Esto No Es Radio" />
              <img src="/logosasseenin/lamirada.webp" alt="La Mirada" />
              <img src="/logosasseenin/rnn.webp" alt="RNN" />
            </div>
          </div>
        </div>
      </section>



      {/* Split Info Section: Why Tomatis */}
      <section id="metodo" className="split-info bg-blue" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Thematic Background Decor for Tomatis */}
        <div style={{ position: 'absolute', top: '10%', left: '-5%', opacity: 0.05, transform: 'rotate(-15deg)', pointerEvents: 'none' }}>
          <Headphones size={400} />
        </div>
        <div style={{ position: 'absolute', bottom: '5%', right: '-5%', opacity: 0.05, transform: 'rotate(15deg)', pointerEvents: 'none' }}>
          <Waves size={500} />
        </div>
        <div style={{ position: 'absolute', top: '45%', right: '20%', opacity: 0.05, transform: 'rotate(5deg)', pointerEvents: 'none' }}>
          <Headphones size={250} />
        </div>

        <div className="dec-wiggle" style={{ top: '50px', left: '45%', opacity: 1 }}></div>
        <div className="dec-star-4 orange" style={{ bottom: '10%', right: '5%', opacity: 1, transform: 'scale(1.3)' }}></div>
        <div className="dec-circle" style={{ top: '40%', right: '-100px', width: '200px', height: '200px', background: 'var(--color-secondary)', opacity: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="split-info-top">
            <motion.div
              className="split-info-text-v2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp}>Pioneros en el Método Tomatis® en RD.</motion.h2>
              <motion.p variants={fadeUp} className="hide-mobile">
                El oído no solo nos ayuda a escuchar, también activa el cerebro, y con el Método Tomatis trabajamos la escucha de tu hijo mediante una estimulación especial que fortalece su oído y le ayuda a entender, concentrarse y aprender mejor.
              </motion.p>
              <motion.div variants={fadeUp} style={{ marginTop: '30px' }}>
                <button 
                  onClick={() => {
                    setCurrentPage('tomatis');
                    window.scrollTo(0, 0);
                  }} 
                  className="btn-primary" 
                  style={{ border: 'none', cursor: 'pointer', textDecoration: 'none' }}
                >
                  Aprender más del Método Tomatis <ArrowRight size={20} />
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              style={{ width: '100%', maxWidth: '500px', marginLeft: 'auto' }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '851 / 1024', borderRadius: '40px', border: '8px solid var(--color-accent)', overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => setIsTomatisMuted(m => !m)}>
                <video
                  ref={tomatisVideoRef}
                  src="/Video-319.mp4"
                  muted={isTomatisMuted}
                  playsInline
                  loop
                  preload="metadata"
                  onPlay={() => setTomatisPlaying(true)}
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
                {/* Poster overlay — fades out when video plays */}
                <img
                  src="/tomatis_kids.webp"
                  alt="Método Tomatis"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: tomatisPlaying ? 0 : 1,
                    transition: 'opacity 1.5s ease',
                    pointerEvents: 'none',
                  }}
                />
                {/* Sound toggle */}
                <div
                  className="video-sound-toggle"
                  style={{ pointerEvents: 'none' }}
                  aria-label={isTomatisMuted ? 'Activar sonido' : 'Silenciar'}
                >
                  {isTomatisMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="split-info-cards"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="info-card-vertical" variants={fadeUp}>
              <div className="info-icon"><BrainCircuit size={32} /></div>
              <div className="info-content">
                <h3>Mejora la atención y concentración</h3>
              </div>
            </motion.div>

            <motion.div className="info-card-vertical" variants={fadeUp}>
              <div className="info-icon"><Speech size={32} /></div>
              <div className="info-content">
                <h3>Fomenta el lenguaje y la comunicación</h3>
              </div>
            </motion.div>

            <motion.div className="info-card-vertical" variants={fadeUp}>
              <div className="info-icon"><HeartHandshake size={32} /></div>
              <div className="info-content">
                <h3>Favorece la regulación emocional</h3>
              </div>
            </motion.div>
          </motion.div>

          {/* Integrated Certification Authority Bar */}
          <motion.a
            href="https://www.tomatis.com/es/profesional/republica-dominicana/"
            target="_blank"
            rel="noreferrer"
            className="tomatis-integrated-cert-bar"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', cursor: 'pointer' }}
          >
            <div className="cert-bar-graphic">
              <div className="elegant-laurel-wreath-tiny">
                <svg viewBox="-100 -100 200 200" fill="currentColor">
                  <g transform="translate(0, 75)">
                    <path d="M0,0 C-40,0 -80,-40 -80,-100" fill="none" stroke="currentColor" strokeWidth="3" />
                    {[...Array(6)].map((_, i) => {
                      const angle = -10 - (i * 25);
                      const rad = (angle * Math.PI) / 180;
                      const x = Math.sin(rad) * 90;
                      const y = Math.cos(rad) * 90 - 90;
                      return <path key={`l-${i}`} d="M0,0 C-10,-5 -15,-15 -5,-18 C5,-21 10,-10 0,0 Z" transform={`translate(${x}, ${y}) rotate(${angle - 90})`} />;
                    })}
                  </g>
                  <g transform="translate(0, 75)">
                    <path d="M0,0 C40,0 80,-40 80,-100" fill="none" stroke="currentColor" strokeWidth="3" />
                    {[...Array(6)].map((_, i) => {
                      const angle = 10 + (i * 25);
                      const rad = (angle * Math.PI) / 180;
                      const x = Math.sin(rad) * 90;
                      const y = Math.cos(rad) * 90 - 90;
                      return <path key={`r-${i}`} d="M0,0 C10,-5 15,-15 5,-18 C-5,-21 -10,-10 0,0 Z" transform={`translate(${x}, ${y}) rotate(${angle + 90})`} />;
                    })}
                  </g>
                </svg>
              </div>
              <div className="tiny-logo-holder">
                <img src="/branding/tomatis-official.webp" alt="Tomatis" className="tiny-tomatis-logo" />
              </div>
            </div>
            <div className="cert-bar-text">
              <h4>Certificación Oficial Tomatis®</h4>
              <p>Única terapeuta en el país con los 4 niveles de certificación oficial.</p>
              <span style={{ 
                fontSize: '0.9rem', 
                color: 'var(--color-accent)', 
                fontWeight: 800, 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px', 
                marginTop: '4px'
              }}>
                Ver directorio oficial <ExternalLink size={14} />
              </span>
            </div>
            <div className="cert-bar-badge-right">
              <span className="cert-badge-premium">Nivel 4</span>
            </div>
          </motion.a>
        </div>
      </section>

      <div className="section-divider-circle" />

      {/* Services Section - Accordion Style */}
      <section id="servicios" className="services-modern with-paper-image" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
        {/* Subtle Background Logo */}
        <div className="services-bg-logo">
          <img src="/branding/logopng.webp" alt="" style={{ width: '100%', height: 'auto', mixBlendMode: 'multiply' }} />
        </div>
        <div className="dec-wiggle" style={{ top: '20%', right: '15%', opacity: 1, zIndex: 1, position: 'absolute' }}></div>
        <div className="container services-container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '60px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>Nuestros Servicios</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>Todo lo que tu hijo necesita, bajo un mismo techo.</p>
          </motion.div>

          <motion.div
            className="services-grid-modern"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {services.map((service, index) => {
              const colors = ['orange', 'blue', 'yellow', 'pink', 'green', 'blue-dark', 'orange-light', 'yellow-bright'];
              const specialColors = ['purple', 'teal', 'coral'];
              const isTomatis = service.title.includes("Tomatis");
              const isHomeschooling = service.title.toLowerCase().includes("homeschooling");

              // Use special colors for the last 3 services
              const colorClass = index >= services.length - 3
                ? `card-${specialColors[index - (services.length - 3)]}`
                : `card-${colors[index % colors.length]}`;

              let pageKey = null;
              if (isTomatis) pageKey = 'tomatis';
              else if (isHomeschooling) pageKey = 'homeschooling';
              else if (service.title === "Psicología Clínica") pageKey = 'psicologia';
              else if (service.title === "Neuropedagogía") pageKey = 'neuropedagogia';
              else if (service.title === "Psicopedagogía") pageKey = 'psicopedagogia';
              else if (service.title === "Neurofeedback") pageKey = 'neurofeedback';
              else if (service.title === "Evaluación Aula Virtual") pageKey = 'evaluacion-aula-virtual';
              else if (service.title === "Acompañamiento a Madres") pageKey = 'acompanamiento-madres';
              else if (service.title === "Terapia Orofacial") pageKey = 'terapia-orofacial';
              else if (service.title === "Fisioterapia") pageKey = 'fisioterapia';
              else if (service.title === "Terapia Conductual") pageKey = 'terapia-conductual';

              const onClick = pageKey 
                ? () => { setCurrentPage(pageKey); window.scrollTo(0, 0); }
                : undefined;

              return (
                <motion.div key={index} className={isTomatis ? 'service-card-wide' : ''}>
                  <ServiceCard
                    index={index}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    colorClass={colorClass}
                    onClick={onClick}
                    isHighlighted={isHomeschooling}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        {/* Playful Background Decor near transition */}
        <div className="dec-star-4 yellow" style={{ bottom: '40px', left: '8%', transform: 'scale(1.1)' }}></div>
        <div className="dec-wiggle" style={{ bottom: '30px', right: '5%', opacity: 0.7 }}></div>
      </section>

      {/* Tomatis en Ruta Section */}
      <section className="tomatis-ruta with-grid">
        {/* Fun Background Decor */}
        <div style={{ position: 'absolute', top: '15%', right: '5%', opacity: 0.05, transform: 'rotate(15deg)', pointerEvents: 'none' }}>
          <MapPin size={400} />
        </div>
        <div className="dec-circle" style={{ top: '-30px', right: '10%', width: '90px', height: '90px', background: 'var(--color-pink)', opacity: 0.3 }}></div>
        <div className="dec-wiggle" style={{ top: '30px', left: '5%', opacity: 0.8 }}></div>
        <div className="dec-wiggle" style={{ bottom: '10%', right: '10%', opacity: 0.6 }}></div>

        <div className="container">
          <div className="ruta-layout">
            <motion.div
              className="ruta-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <div className="badge-modern">TOMATIS® EN RUTA</div>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Llevamos bienestar a <span style={{ color: 'var(--color-accent)' }}>donde nos necesitan</span></h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '32px' }}>
                Viajamos exclusivamente a las provincias y comunidades que solicitan nuestra presencia y donde las familias nos necesitan específicamente.
              </p>

              <div className="ruta-cities-list">
                <div className="city-chip">Nagua</div>
                <div className="city-chip">Bonao</div>
                <div className="city-chip">La Vega</div>
                <div className="city-chip">San Francisco de Macorís</div>
                <div className="city-chip">¡Y más!</div>
              </div>

              <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button
                  onClick={() => { setCurrentPage('tomatis-en-ruta'); window.scrollTo(0, 0); }}
                  className="btn-primary"
                  style={{ cursor: 'pointer', fontSize: '1rem', padding: '14px 26px', border: 'none', borderRadius: '24px', fontWeight: 800 }}
                >
                  Ver fotos de visitas
                </button>
                <button
                  onClick={() => { setCurrentPage('propietarios'); window.scrollTo(0, 0); }}
                  className="btn-outline"
                  style={{ cursor: 'pointer', fontSize: '0.85rem', padding: '12px 18px', letterSpacing: '0.5px' }}
                >
                  ¿Eres propietario de un centro?
                </button>
              </div>
            </motion.div>

            <motion.div
              className="ruta-map-container"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="stylized-map-wrapper">
                <div className="map-image-container">
                  <img src="/branding/mapa_rd.webp" alt="Mapa República Dominicana" className="dr-real-map" />

                  {/* Overlay SVG for animation and markers */}
                  <svg viewBox="0 0 500 350" className="map-overlay-svg">
                    {/* City Markers with Pulse Effect */}
                    <g className="city-marker" transform="translate(325, 230)">
                      <circle r="12" fill="var(--color-primary)" opacity="0.2">
                        <animate attributeName="r" values="8;15;8" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle r="5" fill="var(--color-primary)" stroke="white" strokeWidth="2" />
                    </g>
                    <g className="city-marker" transform="translate(230, 155)">
                      <circle r="5" fill="var(--color-accent)" stroke="white" strokeWidth="2" />
                    </g>
                    <g className="city-marker" transform="translate(180, 100)">
                      <circle r="5" fill="var(--color-accent)" stroke="white" strokeWidth="2" />
                    </g>
                    <g className="city-marker" transform="translate(230, 105)">
                      <circle r="5" fill="var(--color-accent)" stroke="white" strokeWidth="2" />
                    </g>
                    <g className="city-marker" transform="translate(280, 85)">
                      <circle r="5" fill="var(--color-accent)" stroke="white" strokeWidth="2" />
                    </g>

                    {/* Animated Car Following the Route */}
                    <motion.g
                      animate={{
                        x: [325, 230, 180, 230, 280, 325],
                        y: [230, 155, 100, 105, 85, 230],
                      }}
                      transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <g transform="translate(-15, -15)" className="map-car-icon">
                        <circle cx="15" cy="15" r="18" fill="var(--color-secondary)" opacity="0.4" />
                        <Car size={24} color="var(--color-primary-dark)" fill="var(--color-secondary)" />
                      </g>
                    </motion.g>

                    {/* Floating Labels */}
                    <text x="325" y="255" className="map-label main" textAnchor="middle">Santo Domingo</text>
                    <text x="220" y="160" className="map-label" textAnchor="end">Bonao</text>
                    <text x="170" y="105" className="map-label" textAnchor="end">La Vega</text>
                    <text x="230" y="90" className="map-label" textAnchor="middle">SFM</text>
                    <text x="280" y="70" className="map-label" textAnchor="middle">Nagua</text>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      <div className="section-divider-wiggle" />

      {/* Team Section */}
      <section className="team-section bg-cream with-grid" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Thematic Background Decor for Team: Family oriented */}
        <div className="decor-handheart">
          <HandHeart color="var(--color-tertiary)" />
        </div>
        <div style={{ position: 'absolute', bottom: '10%', right: '-8%', opacity: 0.05, transform: 'rotate(15deg)', pointerEvents: 'none' }}>
          <Smile size={600} color="var(--color-tertiary)" />
        </div>
        <div style={{ position: 'absolute', top: '40%', right: '15%', opacity: 0.04, transform: 'rotate(5deg)', pointerEvents: 'none' }}>
          <Flower size={250} color="var(--color-accent)" />
        </div>

        <div className="dec-star-4" style={{ top: '10%', right: '15%', background: 'var(--color-tertiary)' }}></div>
        <div className="dec-wiggle" style={{ bottom: '5%', right: '40%' }}></div>
        <div className="dec-circle" style={{ bottom: '20%', left: '-50px', width: '150px', height: '150px', background: 'var(--color-secondary)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            style={{ textAlign: 'center' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>Conoce a la <span style={{ color: 'var(--color-accent)' }}>familia</span></h2>
            <p className="team-subtitle-desktop" style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>Somos una empresa familiar que pone el corazón en cada terapia. Con un trato cercano, amoroso y real, estamos aquí para acompañarte y hacer que tu hijo se sienta siempre como en casa.</p>
            <p className="team-subtitle-mobile" style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>Una familia que pone el corazón en cada terapia, con amor real y trato cercano.</p>
          </motion.div>

          <div className="team-layout">
            <motion.div
              className="team-grid vertical"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div className="team-card" variants={fadeUp}>
                <div className="team-image-container" style={{ background: 'var(--color-secondary)' }}>
                  <img src="/carlos_perez_diaz_new.webp" alt="Carlos Pérez Díaz" className="team-image" />
                </div>
                <div className="team-info">
                  <h3>Carlos Pérez Díaz</h3>
                  <span className="team-role">Especialista en Neuropedagogía</span>
                  <p className="team-desc-desktop">Licenciado en educación y especialista en neuropedagogía. Enfocado en optimizar el proceso de aprendizaje desde una perspectiva neurocognitiva.</p>
                  <p className="team-desc-mobile">Especialista en neuropedagogía y aprendizaje.</p>
                </div>
              </motion.div>

              <motion.div className="team-card" variants={fadeUp}>
                <div className="team-image-container" style={{ background: '#73C6F7' }}>
                  <img src="/carlos_perez_new.webp" alt="Carlos Eduardo Pérez" className="team-image" />
                </div>
                <div className="team-info">
                  <h3>Carlos Eduardo Pérez</h3>
                  <span className="team-role">Psicólogo Clínico / Consultor Tomatis® / Terapeuta en Neurofeedback</span>
                  <p className="team-desc-desktop">Psicólogo clínico, Consultor Tomatis® y Terapeuta en Neurofeedback. Especializado en la evaluación e intervención del neurodesarrollo mediante la estimulación audiosensorial y el entrenamiento cerebral.</p>
                  <p className="team-desc-mobile">Psicólogo clínico, Consultor Tomatis® y Terapeuta en Neurofeedback.</p>
                </div>
              </motion.div>

              <motion.div className="team-card" variants={fadeUp}>
                <div className="team-image-container" style={{ background: 'var(--color-pink)' }}>
                  <img src="/mery_torrealba_new.webp" alt="Mery Torrealba" className="team-image" />
                </div>
                <div className="team-info">
                  <h3>Mery Torrealba</h3>
                  <span className="team-role">Lic. en Psicopedagogía / Consultor Tomatis® / Terapeuta en Neurofeedback</span>
                  <p className="team-desc-desktop">Licenciada en Psicopedagogía, Consultor Tomatis® y Terapeuta en Neurofeedback. Experta en evaluación psicopedagógica y entrenamiento neurosensorial para el desarrollo integral infantil.</p>
                  <p className="team-desc-mobile">Lic. en Psicopedagogía, Consultor Tomatis® y Terapeuta en Neurofeedback.</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="team-video-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <div className="team-video-clipper">
                <video src="/reviews/fam.mp4" autoPlay loop muted playsInline preload="metadata" className="team-video-element"></video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section bg-yellow with-grid" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Thematic Background Decor for Testimonials */}
        <div className="decor-testimonials-msg">
          <MessageCircleHeart color="var(--color-primary-dark)" />
        </div>
        <div className="decor-testimonials-video">
          <Video color="var(--color-pink)" />
        </div>
        <div style={{ position: 'absolute', top: '45%', right: '15%', opacity: 0.05, transform: 'rotate(25deg)', pointerEvents: 'none' }}>
          <Star size={250} color="var(--color-accent)" />
        </div>

        <div className="dec-star-4 orange" style={{ top: '10%', right: '5%', opacity: 1, transform: 'scale(1.2)' }}></div>
        <div className="dec-circle" style={{ bottom: '-50px', left: '-50px', width: '200px', height: '200px', background: 'var(--color-pink)', opacity: 0.8 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            style={{ textAlign: 'center' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>Testimonios</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>Descubre cómo estamos cambiando vidas, en palabras de nuestras familias.</p>
          </motion.div>

          <motion.div
            className="testimonials-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="testimonial-card" variants={fadeUp}>
              <div className="testimonial-video-container">
                <video src="/reviews/rev1.mp4#t=2.0" className="testimonial-video" controls playsInline preload="metadata" />
              </div>
              <div className="testimonial-text">
                <div className="testimonial-rating">
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                </div>
                <p>“Es la mejor decisión que hemos hecho como familia.”</p>
              </div>
            </motion.div>

            <motion.div className="testimonial-card" variants={fadeUp}>
              <div className="testimonial-video-container">
                <video src="/reviews/review_2.mp4#t=2.0" className="testimonial-video" controls playsInline preload="metadata" />
              </div>
              <div className="testimonial-text">
                <div className="testimonial-rating">
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                </div>
                <p>¡Yeiry recibe la palabra más deseada!</p>
              </div>
            </motion.div>

            <motion.div className="testimonial-card" variants={fadeUp}>
              <div className="testimonial-video-container">
                <video src="/reviews/rev4.mov#t=2.0" className="testimonial-video" controls playsInline preload="metadata" />
              </div>
              <div className="testimonial-text">
                <div className="testimonial-rating">
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                </div>
                <p>“El niño decía nada. Ya dice mamá y papá, mami y papi.”</p>
              </div>
            </motion.div>

            <motion.div className="testimonial-card" variants={fadeUp}>
              <div className="testimonial-video-container">
                <video src="/reviews/rev3.mp4#t=2.0" className="testimonial-video" controls playsInline preload="metadata" />
              </div>
              <div className="testimonial-text">
                <div className="testimonial-rating">
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                </div>
                <p>“Eso que ustedes hacen es demasiado maravilloso.”</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="instagram-section bg-yellow with-grid" style={{ position: 'relative', overflow: 'hidden', paddingTop: '0', paddingBottom: '160px' }}>
        {/* Thematic Background Decor for Instagram */}
        <div style={{ position: 'absolute', top: '10%', right: '-15%', opacity: 0.05, transform: 'rotate(15deg)', pointerEvents: 'none' }}>
          <Instagram size={700} color="var(--color-primary-dark)" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="instagram-container">
            <motion.div
              className="instagram-mockup"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="iphone-frame">
                <div className="iphone-screen">
                  <img src="/instagram_mockup.webp" alt="Instagram Profile" className="instagram-img" />
                </div>
                <div className="iphone-button"></div>
              </div>
            </motion.div>

            <motion.div
              className="instagram-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp}>
                <div className="insta-badge">
                  <Instagram size={20} /> @multisensorialrd
                </div>
                <h2 style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--color-primary-dark)' }}>Únete a nuestra comunidad</h2>
                <p className="insta-desc" style={{ fontSize: '1.2rem', marginBottom: '30px', color: 'var(--color-text-muted)' }}>
                  Ya somos más de <strong>18,000 seguidores</strong> compartiendo consejos, historias y el día a día de nuestro centro. ¡Síguenos para no perderte nada!
                </p>
                <a href="https://instagram.com/multisensorialrd" target="_blank" rel="noreferrer" className="btn-primary insta-btn-desktop">
                  Seguir en Instagram
                </a>
              </motion.div>
            </motion.div>
          </div>

          <div className="insta-btn-mobile-wrapper">
            <a href="https://instagram.com/multisensorialrd" target="_blank" rel="noreferrer" className="btn-primary">
              Seguir en Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Media & Press Section */}
      <section className="media-section bg-cream" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="dec-circle" style={{ top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'var(--color-primary-light)', opacity: 0.5 }}></div>
        <div className="container">
          <motion.div
            className="section-header-centered"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="cert-tag-minimal" style={{ margin: '0 auto 16px' }}>
              <Video size={14} color="var(--color-accent)" /> <span>Presencia en Medios</span>
            </div>
            <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Entrevistas y <span style={{ color: 'var(--color-accent)' }}>Apariciones</span></h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 40px', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
              Compartiendo nuestra experiencia en distintos medios de comunicación.
            </p>
          </motion.div>

          <motion.div
            className="media-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {mediaAppearances.map((media, idx) => (
              <motion.a
                key={idx}
                href={media.url}
                target="_blank"
                rel="noreferrer"
                className="media-card-modern"
                variants={fadeUp}
              >
                <div className="media-thumb-wrapper">
                  <img src={media.thumbnail} alt={media.title} className="media-thumbnail" />
                  <div className="media-play-overlay">
                    <div className="play-icon-circle">
                      <Play fill="white" size={24} />
                    </div>
                  </div>
                  <div className="media-source-tag">YouTube</div>
                </div>
                <div className="media-content-modern">
                  <h3 className="media-card-title">{media.title}</h3>
                  <p className="media-card-speakers">{media.speakers}</p>
                  <div className="media-card-footer">
                    <span className="watch-now-text">Ver video <ArrowRight size={14} /></span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta bg-blue" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="cta-bg-logo-left">
          <img src="/branding/logopng.webp" alt="" style={{ width: '100%', height: 'auto', mixBlendMode: 'multiply' }} />
        </div>
        <div className="dec-circle cta-circle-decor" style={{ top: '-100px', left: '-50px', width: '300px', height: '300px' }}></div>
        <div className="dec-star-4 orange" style={{ top: '30%', right: '10%' }}></div>
        <div className="dec-wiggle" style={{ bottom: '20%', left: '20%' }}></div>

        <motion.div className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <div className="cta-layout">
            <div className="cta-info">
              <motion.h2 variants={fadeUp} style={{ color: 'var(--color-text)' }}>Hoy puede ser el inicio de su progreso.</motion.h2>
              <motion.p variants={fadeUp} style={{ color: 'var(--color-text)' }} className="cta-description">
                En Multisensorial RD, somos una familia dedicada a cuidar del crecimiento de la tuya. Ven a visitarnos y descubre un espacio donde tu hijo se sentirá siempre como en casa mientras alcanza su máximo potencial.
              </motion.p>
            </div>

            <div className="cta-media">
              <motion.div className="cta-image-wrapper" variants={fadeUp}>
                <img src="/cta_image.webp" alt="Terapia Multisensorial" className="cta-img" />
              </motion.div>
            </div>

            <motion.div className="cta-actions" variants={fadeUp}>
              <button onClick={() => setIsBookingModalOpen(true)} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                Agendar Evaluación Inicial
              </button>
            </motion.div>
          </div>

          <div className="cta-bottom">
            <motion.div className="location-details-modern" variants={fadeUp}>
              <div className="location-badge">
                <MapPin size={32} />
                <span><strong>Ubicación:</strong> Calle Teodoro Chasseriau, Las Praderas, Santo Domingo</span>
              </div>
              <div className="location-badge">
                <Phone size={32} />
                <span><strong>Teléfono:</strong> +1 (809) 306-5040</span>
              </div>
            </motion.div>

            <motion.div
              className="location-map"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <iframe
                title="Google Maps Location"
                src="https://maps.google.com/maps?q=18.4644604,-69.9635049&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer onOpenBooking={() => setIsBookingModalOpen(true)} />
      <motion.div
        className="booking-modal-overlay"
        aria-hidden={!isBookingModalOpen}
        initial={{ opacity: 0, visibility: 'hidden', display: 'none' }}
        animate={{ 
          opacity: isBookingModalOpen ? 1 : 0,
          pointerEvents: isBookingModalOpen ? 'auto' : 'none',
          visibility: isBookingModalOpen ? 'visible' : 'hidden',
          display: isBookingModalOpen ? 'flex' : 'none'
        }}
        transition={{ duration: 0.15 }}
        onClick={() => setIsBookingModalOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(28, 78, 130, 0.85)',
          zIndex: 9999,
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
      >
        <motion.div
          className="booking-modal-content"
          initial={{ scale: 0.95, y: 15 }}
          animate={{ 
            scale: isBookingModalOpen ? 1 : 0.95, 
            y: isBookingModalOpen ? 0 : 15 
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={e => e.stopPropagation()}
          style={{
            backgroundColor: '#ffffff', // Keep calendar background matching
            borderRadius: '32px',
            boxShadow: '0 24px 48px rgba(0,0,0,0.15)',
            border: '4px solid var(--color-accent)', // Coral pink border
            width: '100%',
            maxWidth: '850px',
            maxHeight: '90vh',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch', // Enable native momentum scrolling on iOS
            position: 'relative',
            padding: '25px 0 0 0'
          }}
        >
              <div style={{ position: 'sticky', top: 0, right: 0, zIndex: 10, display: 'flex', justifyContent: 'flex-end', padding: '0 12px' }}>
                <button
                  onClick={() => setIsBookingModalOpen(false)} // Assuming closeBookingModal is equivalent to this
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary-dark)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    transition: 'transform 0.2s',
                    color: '#fff'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {isBookingComplete ? (
                <div style={{ padding: '40px 20px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    style={{ background: 'var(--color-pink-light)', padding: '20px', borderRadius: '50%', marginBottom: '20px' }}
                  >
                    <CheckCircle size={64} color="var(--color-accent)" />
                  </motion.div>
                  <h2 style={{ color: 'var(--color-text)', fontSize: '2.5rem', marginBottom: '15px' }}>¡Cita Confirmada!</h2>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '80%', margin: '0 auto 40px auto' }}>
                    Hemos recibido correctamente los datos de tu cita. Nos pondremos en contacto pronto para confirmar todos los detalles.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', maxWidth: '400px' }}>
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '1.1rem', padding: '15px' }}>
                      <Phone size={20} /> Escríbenos por WhatsApp
                    </a>
                    <a href="https://instagram.com/multisensorialrd" target="_blank" rel="noreferrer" className="btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '1.1rem', padding: '15px' }}>
                      <Instagram size={20} /> Síguenos en Instagram
                    </a>
                  </div>

                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '30px' }}>
                    ¿Para algo más inmediato? Llámanos al <a href="tel:+18093065040" style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>+1 (809) 306-5040</a>
                  </p>
                </div>
              ) : (
                <>
                  <div style={{ padding: '0 20px', textAlign: 'center', marginBottom: '10px' }}>
                    <h2 style={{ color: 'var(--color-accent)', fontSize: '2rem', margin: '0' }}>Agenda tu Cita</h2>
                    <p style={{ color: 'var(--color-text-muted)', margin: '5px 0 0 0', fontFamily: 'var(--font-primary)' }}>Elige el día y la hora que mejor funcione para ti.</p>
                  </div>

                  {isCalendarLoading && (
                    <div style={{ padding: '40px', textAlign: 'center', minHeight: '850px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        style={{ width: '50px', height: '50px', border: '5px solid var(--color-pink-light)', borderTopColor: 'var(--color-accent)', borderRadius: '50%' }}
                      />
                      <p style={{ marginTop: '20px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-primary)' }}>Cargando calendario...</p>
                    </div>
                  )}
                  {shouldLoadIframe && (
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/booking/i0TBYq6Ec4GK21NpfPFu?primaryColor=%23EF476F&backgroundColor=%23ffffff&fontFamily=Nunito"
                      style={{ width: '100%', border: 'none', minHeight: '850px', borderRadius: '0 0 28px 28px', display: isCalendarLoading ? 'none' : 'block' }}
                      scrolling="yes"
                      id="i0TBYq6Ec4GK21NpfPFu_1773700990303"
                      onLoad={() => setIsCalendarLoading(false)}
                    ></iframe>
                  )}
                </>
              )}
            </motion.div>
          </motion.div>

      {/* Floating Provincial Pop-Up */}
      <AnimatePresence>
        {showProvincialPopup && currentPage === 'home' && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ delay: 2, duration: 0.4 }}
            style={{
              position: 'fixed',
              bottom: '24px',
              left: '24px',
              zIndex: 9999,
              width: '320px',
              background: 'white',
              borderRadius: '16px',
              padding: '16px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            <button
              onClick={() => setShowProvincialPopup(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#718096',
                padding: '2px',
                zIndex: 10
              }}
            >
              <X size={16} />
            </button>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0, border: '1px solid #E2E8F0' }}>
                <img src="/instagram/bonao/WhatsApp Image 2026-07-20 at 12.14.01.jpeg" alt="Visita" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ paddingRight: '12px' }}>
                <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-primary-dark)', lineHeight: 1.25 }}>
                  ¿No vives en Santo Domingo?
                </h4>
                <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.3 }}>
                  Llevamos el Método Tomatis® a tu provincia.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setCurrentPage('tomatis-en-ruta');
                window.scrollTo(0, 0);
              }}
              style={{
                background: 'var(--color-accent)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                padding: '10px 14px',
                fontWeight: 800,
                fontSize: '0.85rem',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'center'
              }}
            >
              Solicitar Visita
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
