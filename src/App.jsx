/* eslint-disable no-unused-vars, no-empty */
import React, { useState, useRef, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, BrainCircuit, HeartHandshake, ArrowRight, ArrowLeft, Menu, X, Headphones, Puzzle, Speech, ChevronDown, Volume2, VolumeX, BookOpen, RectangleGoggles, Waves, Users, Smile, Baby, Flower, HandHeart, Star, Instagram, Youtube, MapPin, Phone, MessageCircleHeart, Video, CheckCircle, Smartphone, Calendar, Clock, Award, ShieldCheck, Play, Car, ExternalLink } from 'lucide-react';
import './App.css';

const TomatisPage = lazy(() => import('./TomatisPage'));
const HomeschoolingPage = lazy(() => import('./HomeschoolingPage'));
const PropietariosPage = lazy(() => import('./PropietariosPage'));
const PsicologiaPage = lazy(() => import('./PsicologiaPage'));
const NeuropedagogiaPage = lazy(() => import('./NeuropedagogiaPage'));
const PsicopedagogiaPage = lazy(() => import('./PsicopedagogiaPage'));
const NeurofeedbackPage = lazy(() => import('./NeurofeedbackPage'));
const EvaluacionAulaVirtualPage = lazy(() => import('./EvaluacionAulaVirtualPage'));
const AcompanamientoMadresPage = lazy(() => import('./AcompanamientoMadresPage'));
const TerapiaOrofacialPage = lazy(() => import('./TerapiaOrofacialPage'));
const FisioterapiaPage = lazy(() => import('./FisioterapiaPage'));
const TerapiaConductualPage = lazy(() => import('./TerapiaConductualPage'));
const TomatisEnRutaPage = lazy(() => import('./TomatisEnRutaPage'));
const PuntaCanaPage = lazy(() => import('./PuntaCanaPage'));
const HigueyPage = lazy(() => import('./HigueyPage'));
import Footer from './Footer';
import WhatsAppIcon from './WhatsAppIcon';

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
  {
    title: "Entrevista a Sr. Carlos Pérez y Sra. Mery Torrealba En Así es Raúl Grisanty",
    speakers: "Así es Raúl Grisanty | Carlos Pérez y Mery Torrealba",
    url: "https://www.youtube.com/watch?v=1HIYwVGQikY",
    thumbnail: "/entrevista-raul-grisanty.webp"
  }
];

const miniTestimonialQuotes = [
  "“Es la mejor decisión que hemos hecho como familia.”",
  "“Mi hijo ha avanzado muchísimo.”",
  "“Acabo de recibir la palabra más deseada: «mamá».”",
  "“Ya se sabe las vocales, sabe diferenciarlas.”",
  "“El niño decía nada. Ya dice mamá y papá, mami y papi.”",
  "“Ya me entiende cuando yo le hablo.”",
  "“Le digo ven y viene, le digo pásame eso y me lo pasa.”",
  "“Yo pude ver múchisimos cambios en Samuel.”",
  "“Pude ver resultados con el método en tan solo 15 días, ya dejó de hacer los sonidos y correr de lado a lado.”",
  "“Eso que ustedes hacen es demasiado maravilloso.”"
];

const quotesRow1 = miniTestimonialQuotes.filter((_, i) => i % 2 === 0);
const quotesRow2 = miniTestimonialQuotes.filter((_, i) => i % 2 !== 0);

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
    title: "Pruebas Atencionales en Realidad Virtual",
    description: "Evaluación objetiva de la atención en entorno de Realidad Virtual."
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
        whileHover={isClickable ? { y: -8, scale: 1.02 } : { y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        style={{
          position: 'relative',
          zIndex: 1,
          cursor: isClickable ? 'pointer' : 'default',
          overflow: 'hidden',
          border: '3px solid var(--color-primary-dark)',
          boxShadow: '5px 5px 0px var(--color-primary-dark)',
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
              gap: '6px',
              marginTop: '10px',
              fontSize: '0.82rem',
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

const heroVideoWall = [
  { id: 'vw-1', src: '/videowall_86298.mp4?v=35' },
  { id: 'vw-2', src: '/videowall_240.mp4?v=35' },
  { id: 'vw-3', src: '/videowall_319.mp4?v=35', className: 'pos-top' },
  { id: 'vw-4', src: '/videowall_orofacial.mp4?v=35', className: 'pos-orofacial' },
  { id: 'vw-5', src: '/videowall_whatsapp.mp4?v=35' },
  { id: 'vw-6', src: '/videowall_team.mp4?v=35', className: 'pos-team' },
];

const WA_PUNTA_CANA = "https://wa.me/18093065040?text=Hola%2C%20me%20interesa%20la%20jornada%20Tomatis%20en%20Punta%20Cana.%20Quisiera%20informaci%C3%B3n%20sobre%20el%20taller%20del%2018%20de%20octubre%20en%20Spotcast%20Caf%C3%A9%20y%20el%20intensivo%20del%2019%20al%2031%20en%20Peque%C3%B1ines%20Paso%20a%20Paso.";

function App() {
  const whatsappUrl = "https://wa.me/18093065040"; // Phone based on search data
  const [isMuted, setIsMuted] = useState(true);
  const [isTomatisMuted, setIsTomatisMuted] = useState(true);
  const [tomatisPlaying, setTomatisPlaying] = useState(false);
  const isBookingModalOpen = false;
  const setIsBookingModalOpen = (open) => {
    if (open) window.open("https://wa.me/18093065040", "_blank");
  };
  const [isBookingComplete, setIsBookingComplete] = useState(false);
  const [isCalendarLoading, setIsCalendarLoading] = useState(true);
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false);

  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
      if (path === '/higuey') {
        return 'higuey';
      }
      if (
        path === '/jornada-este' ||
        path === '/jornada' ||
        path === '/jornadas' ||
        path === '/jornada-tomatis' ||
        path === '/este' ||
        path === '/jornada-higuey-puntacana' ||
        path === '/jornada-puntacana' ||
        path === '/puntacana' ||
        path === '/punta-cana'
      ) {
        return 'punta-cana';
      }
    }
    return 'home';
  });
  const [tomatisRutaCity, setTomatisRutaCity] = useState('bonao');
  const [showProvincialPopup, setShowProvincialPopup] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      if (typeof window !== 'undefined') {
        const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
        if (path === '/higuey') {
          setCurrentPage('higuey');
        } else if (
          path === '/jornada-este' ||
          path === '/jornada' ||
          path === '/jornadas' ||
          path === '/jornada-tomatis' ||
          path === '/este' ||
          path === '/jornada-higuey-puntacana' ||
          path === '/jornada-puntacana' ||
          path === '/puntacana' ||
          path === '/punta-cana'
        ) {
          setCurrentPage('punta-cana');
        } else if (path === '' || path === '/') {
          setCurrentPage('home');
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToPage = (pageName, pathSlug = null) => {
    setCurrentPage(pageName);
    if (typeof window !== 'undefined') {
      if (pageName === 'punta-cana' || pageName === 'jornada-este') {
        window.history.pushState({}, '', pathSlug || '/punta-cana');
      } else if (pageName === 'higuey') {
        window.history.pushState({}, '', pathSlug || '/higuey');
      } else if (pageName === 'home') {
        window.history.pushState({}, '', '/');
      }
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadIframe(true);
    }, 2000);

    const popupTimer = setTimeout(() => {
      const hasBeenDismissed = sessionStorage.getItem('puntacana_popup_dismissed');
      if (!hasBeenDismissed) {
        setShowProvincialPopup(true);
      }
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(popupTimer);
    };
  }, []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [activeFamilyIdx, setActiveFamilyIdx] = useState(null);
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
    { id: 'todos', label: 'Ver todos los servicios', color: 'var(--color-secondary)' },
    { id: 'tomatis', label: 'Método Tomatis®', icon: <Headphones size={18} />, color: 'var(--color-secondary)' },
    { id: 'psicologia', label: 'Psicología Clínica', icon: <HeartHandshake size={18} />, color: 'var(--color-accent)' },
    { id: 'neuropedagogia', label: 'Neuropedagogía', icon: <BrainCircuit size={18} />, color: 'var(--color-primary)' },
    { id: 'psicopedagogia', label: 'Psicopedagogía', icon: <Puzzle size={18} />, color: 'var(--color-pink)' },
    { id: 'neurofeedback', label: 'Neurofeedback', icon: <Waves size={18} />, color: 'var(--color-green)' },
    { id: 'evaluacion-aula-virtual', label: 'Pruebas Atencionales VR', icon: <RectangleGoggles size={18} />, color: '#8CA6D1' },
    { id: 'acompanamiento-madres', label: 'Acompañamiento a Madres', icon: <Speech size={18} />, color: '#FFA68A' },
    { id: 'homeschooling', label: 'Homeschooling Presencial', icon: <BookOpen size={18} />, color: '#FFE1A8' },
    { id: 'terapia-orofacial', label: 'Terapia Orofacial', icon: <Smile size={18} />, color: '#E0C3FC' },
    { id: 'fisioterapia', label: 'Fisioterapia', icon: <Baby size={18} />, color: '#B2F2BB' },
    { id: 'terapia-conductual', label: 'Terapia Conductual', icon: <Users size={18} />, color: '#FFC9C9' }
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
      document.documentElement.style.overflow = 'hidden';
      setShouldLoadIframe(true);
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      // Give the closing animation a tiny delay before resetting the content
      setTimeout(() => {
        setIsBookingComplete(false);
      }, 300);
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
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

  const handleNavigateService = (id) => {
    setCurrentPage(id);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      {/* Navbar (Only rendered when not on dedicated Jornada Este landing page) */}
      {currentPage !== 'jornada-este' && currentPage !== 'punta-cana' && currentPage !== 'higuey' && (
        <nav className="navbar">
          {/* Promotional Banner */}
          <div 
            onClick={() => {
              navigateToPage('punta-cana');
            }}
            className="top-promo-banner"
          >
            <Sparkles size={14} fill="white" className="hide-mobile" />
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>📍 <strong>Jornada Tomatis en Punta Cana</strong>: 13 días intensivos.</span>
              <span className="hide-mobile-inline"> Cupos limitados a 6 niños.</span>
            </span>
            <span className="top-promo-btn">
              Ver Jornada Punta Cana <ArrowRight size={12} />
            </span>
          </div>

        <div className="container nav-container">
          {currentPage === 'home' ? (
            <div className="nav-logo" onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} style={{ cursor: 'pointer' }}>
              <img src="/multilogo2 (1).png" className="nav-logo-img" alt="Multisensorial Logo" />
            </div>
          ) : (
            <button
              onClick={() => {
                setCurrentPage('home');
                window.scrollTo(0, 0);
              }}
              className="btn-back"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 800,
                color: 'var(--color-primary-dark)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.05rem',
                padding: '8px 0',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(-4px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
            >
              <ArrowLeft size={22} /> Volver al Inicio
            </button>
          )}
          <div className="nav-links">
            <a 
              href="#metodo" 
              className="nav-link" 
              onClick={(e) => {
                if (currentPage !== 'home') {
                  e.preventDefault();
                  setCurrentPage('home');
                  setTimeout(() => {
                    document.getElementById('metodo')?.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }
              }}
            >
              Método
            </a>
            
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
                          if (s.id === 'todos') {
                            e.currentTarget.style.background = 'var(--color-primary-dark)';
                            e.currentTarget.style.color = 'white';
                          } else {
                            e.currentTarget.style.background = s.color || 'var(--color-bg)';
                            e.currentTarget.style.color = 'var(--color-primary-dark)';
                          }
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = s.id === 'todos' ? 'var(--color-secondary)' : 'transparent';
                          e.currentTarget.style.color = 'var(--color-primary-dark)';
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
                  {currentPage !== 'home' && (
                    <button
                      className="mobile-menu-link"
                      onClick={() => {
                        setCurrentPage('home');
                        setIsMobileMenuOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontWeight: 800,
                        color: 'var(--color-accent)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0 0 10px 0',
                        fontSize: '1.1rem',
                        borderBottom: '1px dashed rgba(13, 44, 93, 0.15)',
                        width: '100%',
                        textAlign: 'left'
                      }}
                    >
                      <ArrowLeft size={20} /> Volver al Inicio
                    </button>
                  )}
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
                    className="mobile-menu-link"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigateToPage('punta-cana');
                    }}
                    style={{
                      background: 'var(--color-accent)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      fontWeight: 900,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      boxShadow: '3px 3px 0px var(--color-border)',
                      marginTop: '8px'
                    }}
                  >
                    <Sparkles size={18} /> Jornada Punta Cana
                  </button>

                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsBookingModalOpen(true);
                    }} 
                    className="btn-primary" 
                    style={{ width: '100%', marginTop: '14px', padding: '15px', border: 'none' }}
                  >
                    Agendar Cita
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
      )}

      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
      <section className="hero bg-cream with-grid" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Decor */}
        <div className="dec-circle" style={{ top: '-50px', right: '-50px', width: '300px', height: '300px', background: 'var(--color-secondary)', opacity: 1 }}></div>
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
            <motion.div
              variants={fadeUp}
              onClick={() => navigateToPage('punta-cana')}
              className="hero-puntacana-pill"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') navigateToPage('punta-cana'); }}
            >
              <span className="pill-dot-pulse" />
              <span className="pill-badge-city">PUNTA CANA</span>
              <span className="pill-badge-copy">Jornada Tomatis® 18–31 Octubre · Cupos limitados</span>
              <span className="pill-badge-cta">Ver detalles <ArrowRight size={13} /></span>
            </motion.div>
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
            <motion.p variants={fadeUp} className="hero-subtitle-desktop hide-mobile">
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

        {/* Minimal Testimonials Marquee - Desktop 1 row, Mobile 2 rows */}
        <div className="hero-quotes-marquee" aria-label="Opiniones de familias">
          {/* Desktop Single Row */}
          <div className="hero-quotes-track hero-quotes-track-desktop">
            {[...miniTestimonialQuotes, ...miniTestimonialQuotes].map((quote, idx) => (
              <div key={`d-${idx}`} className="hero-quote-item">
                <span className="hero-quote-stars" aria-hidden="true">★★★★★</span>
                <span className="hero-quote-text">{quote}</span>
              </div>
            ))}
          </div>

          {/* Mobile Two Rows */}
          <div className="hero-quotes-track hero-quotes-track-mobile track-row-1">
            {[...quotesRow1, ...quotesRow1].map((quote, idx) => (
              <div key={`m1-${idx}`} className="hero-quote-item">
                <span className="hero-quote-stars" aria-hidden="true">★★★★★</span>
                <span className="hero-quote-text">{quote}</span>
              </div>
            ))}
          </div>
          <div className="hero-quotes-track hero-quotes-track-mobile track-row-2">
            {[...quotesRow2, ...quotesRow2].map((quote, idx) => (
              <div key={`m2-${idx}`} className="hero-quote-item">
                <span className="hero-quote-stars" aria-hidden="true">★★★★★</span>
                <span className="hero-quote-text">{quote}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pure Seamless Video Wall - Directly Below Hero (No cards, full section coverage) */}
      <section className="hero-seamless-videowall">
        <div className="hero-videowall-grid">
          {heroVideoWall.map((vid) => (
            <div key={vid.id} className="hero-videowall-cell">
              <video
                src={vid.src}
                autoPlay
                loop
                muted
                playsInline
                className={`hero-videowall-video ${vid.className || ''}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Media Presence Section - Below the videos */}
      <section className="hero-media-static bg-blue">
        <div className="container">
          <div className="media-static-label">PRESENCIA EN MEDIOS:</div>
          <div className="media-logos-grid">
            <div className="media-logo-item">
              <img src="/logosasseenin/azulpodcast.webp" alt="Azul Podcast" />
            </div>
            <div className="media-logo-item">
              <img src="/logosasseenin/colorvision.webp" alt="Color Visión" />
            </div>
            <div className="media-logo-item">
              <img src="/logosasseenin/estonoesradio.webp" alt="Esto No Es Radio" />
            </div>
            <div className="media-logo-item">
              <img src="/logosasseenin/lamirada.webp" alt="La Mirada" />
            </div>
            <div className="media-logo-item">
              <img src="/logosasseenin/rnn.webp" alt="RNN" />
            </div>
          </div>
        </div>
      </section>

      {/* Punta Cana Spotlight Section */}
      <section id="jornada-punta-cana" className="punta-cana-spotlight-section">
        <div className="container">
          <div className="pc-spotlight-inner">
            <div className="pc-spotlight-copy">
              <div className="pc-spotlight-badge">
                <span className="pc-badge-dot" />
                <span>EDICIÓN ESPECIAL · PUNTA CANA & BÁVARO</span>
              </div>
              <h2 className="pc-spotlight-title">
                El Método Tomatis® llega a <span className="pc-highlight">Punta Cana</span>
              </h2>
              <p className="pc-spotlight-desc">
                Por primera vez, trasladamos nuestra intervención clínica intensiva al Este. 13 días continuos de estimulación neurosensorial y talleres prácticos para familias en Bávaro, sin que tengas que viajar a Santo Domingo.
              </p>

              <div className="pc-highlights-list">
                <div className="pc-highlight-item">
                  <div className="pc-item-icon">🗓</div>
                  <div className="pc-item-content">
                    <div className="pc-item-label">18 al 31 de Octubre</div>
                    <div className="pc-item-sub">Workshop para padres en Spotcast Café + 13 días intensivos en Pequeñines Paso a Paso.</div>
                  </div>
                </div>

                <div className="pc-highlight-item">
                  <div className="pc-item-icon">👥</div>
                  <div className="pc-item-content">
                    <div className="pc-item-label">Cupo Limitado: Solo 6 Niños</div>
                    <div className="pc-item-sub">Atención 1 a 1 altamente personalizada para garantizar el máximo impacto neurosensorial.</div>
                  </div>
                </div>

                <div className="pc-highlight-item">
                  <div className="pc-item-icon">🧠</div>
                  <div className="pc-item-content">
                    <div className="pc-item-label">Resultados Comprobados</div>
                    <div className="pc-item-sub">Avances clínicos visibles en lenguaje, atención sostenida, conducta y conexión familiar.</div>
                  </div>
                </div>
              </div>

              <div className="pc-spotlight-actions">
                <button
                  onClick={() => navigateToPage('punta-cana')}
                  className="btn-primary pc-btn-main"
                >
                  Ver Programa de Punta Cana <ArrowRight size={18} />
                </button>
                <a
                  href={WA_PUNTA_CANA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline pc-btn-wa"
                >
                  <WhatsAppIcon size={18} color="currentColor" />
                  <span>Consultar Cupos por WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="pc-spotlight-media">
              <div 
                className="pc-video-card"
                onClick={() => navigateToPage('punta-cana')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') navigateToPage('punta-cana'); }}
              >
                <div className="pc-video-wrapper">
                  <video
                    src="/0929-copy.mp4"
                    poster="/0929-poster.webp"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="pc-spotlight-video"
                  />
                  <div className="pc-video-overlay-tag">
                    <span>📍 Bávaro · Punta Cana</span>
                  </div>
                  <div className="pc-video-prompt">
                    <span>Ver programa y fechas completas →</span>
                  </div>
                </div>
                <div className="pc-venues-strip">
                  <div className="pc-venue-tag">
                    <span className="venue-num">#1</span>
                    <div>
                      <strong>Spotcast Café</strong>
                      <small>Sáb 18 Oct · Workshop</small>
                    </div>
                  </div>
                  <div className="pc-venue-tag">
                    <span className="venue-num">#2</span>
                    <div>
                      <strong>Pequeñines Paso a Paso</strong>
                      <small>19 al 31 Oct · Terapia</small>
                    </div>
                  </div>
                </div>
              </div>
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

        <div className="dec-wiggle" style={{ top: '20px', left: '8%', opacity: 0.8 }}></div>
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

              <motion.div
                className="split-info-cards"
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

              <motion.div variants={fadeUp} style={{ marginTop: '24px' }}>
                <button 
                  onClick={() => {
                    setCurrentPage('tomatis');
                    window.scrollTo(0, 0);
                  }} 
                  className="btn-primary" 
                  style={{ border: 'none', cursor: 'pointer', textDecoration: 'none', padding: '14px 28px', fontSize: '1rem' }}
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
              style={{ width: '100%', maxWidth: '440px', marginLeft: 'auto' }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 5', borderRadius: '32px', border: '7px solid var(--color-accent)', overflow: 'hidden', cursor: 'pointer', boxShadow: '8px 8px 0px var(--color-primary-dark)' }}
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
              <div className="cert-bar-screenshot-mini" title="Verificación oficial en Tomatis.com">
                <div className="cert-mini-browser-bar">
                  <div className="cert-mini-dots">
                    <span className="cert-mini-dot cert-mini-dot-red" />
                    <span className="cert-mini-dot cert-mini-dot-yellow" />
                    <span className="cert-mini-dot cert-mini-dot-green" />
                  </div>
                  <span className="cert-mini-domain">tomatis.com</span>
                </div>
                <img 
                  src="/oficialscreenshot.png" 
                  alt="Verificación oficial en Tomatis.com" 
                  className="cert-mini-screenshot-img" 
                />
              </div>
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
            style={{ textAlign: 'center', marginBottom: '36px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>Nuestros Servicios</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>Todo lo que tu hijo necesita, bajo un mismo techo.</p>
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
              else if (service.title.includes("Realidad Virtual") || service.title.includes("Aula Virtual")) pageKey = 'evaluacion-aula-virtual';
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
        {/* Background Photo Collage of Visits with Purple Overlay */}
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
          <div className="tomatis-ruta-collage-overlay" />
        </div>

        {/* Fun Background Decor */}
        <div style={{ position: 'absolute', top: '15%', right: '5%', opacity: 0.05, transform: 'rotate(15deg)', pointerEvents: 'none', zIndex: 3 }}>
          <MapPin size={400} />
        </div>
        <div className="dec-circle" style={{ top: '-30px', right: '10%', width: '90px', height: '90px', background: 'var(--color-pink)', opacity: 0.3, zIndex: 3 }}></div>
        <div className="dec-wiggle" style={{ top: '30px', left: '5%', opacity: 0.8, zIndex: 3 }}></div>
        <div className="dec-wiggle" style={{ bottom: '10%', right: '10%', opacity: 0.6, zIndex: 3 }}></div>

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

              <div className="ruta-actions">
                <button
                  onClick={() => { setCurrentPage('tomatis-en-ruta'); window.scrollTo(0, 0); }}
                  className="btn-primary"
                  style={{ cursor: 'pointer', fontSize: '0.92rem', padding: '13px 22px', border: 'none', borderRadius: '24px', fontWeight: 800, whiteSpace: 'nowrap' }}
                >
                  Ver fotos de visitas
                </button>
                <button
                  onClick={() => { setCurrentPage('propietarios'); window.scrollTo(0, 0); }}
                  className="btn-outline"
                  style={{ cursor: 'pointer', fontSize: '0.85rem', padding: '11px 18px', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}
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
              style={{ position: 'relative' }}
            >
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '250px', height: '250px', background: '#C084FC', filter: 'blur(80px)', borderRadius: '50%', zIndex: -1, opacity: 0.5, pointerEvents: 'none' }}></div>
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

          <div className="family-showcase">
            <motion.div
              className="family-members-row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {/* Member 1: Carlos Pérez Díaz */}
              <motion.div
                className={`family-member ${activeFamilyIdx === 0 ? 'active' : ''}`}
                variants={fadeUp}
                onClick={() => setActiveFamilyIdx(activeFamilyIdx === 0 ? null : 0)}
              >
                <div className="family-portrait-stage" style={{ background: '#FFE6A3' }}>
                  <img src="/carlos_perez_diaz_new.webp" alt="Carlos Pérez Díaz" className="family-portrait-img family-img-diaz" />
                  <div className="family-hover-drawer" style={{ background: '#FFE6A3' }}>
                    <p className="family-hover-desc">
                      Licenciado en educación y especialista en neuropedagogía. Enfocado en optimizar el aprendizaje desde una perspectiva neurocognitiva integral.
                    </p>
                  </div>
                </div>
                <div className="family-member-info">
                  <h3 className="family-member-name">Carlos Pérez Díaz</h3>
                  <span className="family-member-role-pill" style={{ background: '#FFE6A3' }}>
                    Neuropedagogía
                  </span>
                </div>
              </motion.div>

              {/* Member 2: Carlos Eduardo Pérez */}
              <motion.div
                className={`family-member ${activeFamilyIdx === 1 ? 'active' : ''}`}
                variants={fadeUp}
                onClick={() => setActiveFamilyIdx(activeFamilyIdx === 1 ? null : 1)}
              >
                <div className="family-portrait-stage" style={{ background: '#D0EEFF' }}>
                  <img src="/carlos_perez_new.webp" alt="Carlos Eduardo Pérez" className="family-portrait-img family-img-eduardo" />
                  <div className="family-hover-drawer" style={{ background: '#D0EEFF' }}>
                    <p className="family-hover-desc">
                      Psicólogo clínico, Consultor Tomatis® y Terapeuta en Neurofeedback. Especializado en neurodesarrollo y estimulación audiosensorial.
                    </p>
                  </div>
                </div>
                <div className="family-member-info">
                  <h3 className="family-member-name">Carlos Eduardo Pérez</h3>
                  <span className="family-member-role-pill" style={{ background: '#D0EEFF' }}>
                    Psicología & Tomatis®
                  </span>
                </div>
              </motion.div>

              {/* Member 3: Mery Torrealba */}
              <motion.div
                className={`family-member ${activeFamilyIdx === 2 ? 'active' : ''}`}
                variants={fadeUp}
                onClick={() => setActiveFamilyIdx(activeFamilyIdx === 2 ? null : 2)}
              >
                <div className="family-portrait-stage" style={{ background: '#FFD6DF' }}>
                  <img src="/mery_torrealba_new.webp" alt="Mery Torrealba" className="family-portrait-img family-img-mery" />
                  <div className="family-hover-drawer" style={{ background: '#FFD6DF' }}>
                    <p className="family-hover-desc">
                      Licenciada en Psicopedagogía, Consultor Tomatis® y Terapeuta en Neurofeedback. Experta en desarrollo neurosensorial e intervención infantil.
                    </p>
                  </div>
                </div>
                <div className="family-member-info">
                  <h3 className="family-member-name">Mery Torrealba</h3>
                  <span className="family-member-role-pill" style={{ background: '#FFD6DF' }}>
                    Psicopedagogía & Tomatis®
                  </span>
                </div>
              </motion.div>
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
                <p>Acabo de recibir la palabra más deseada "mamá".</p>
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
      <section className="media-section with-paper-image" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
        <div className="dec-circle" style={{ top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'var(--color-primary-light)', opacity: 0.5 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Centered Section Header */}
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
            <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>
              Entrevistas y <span style={{ color: 'var(--color-accent)' }}>Apariciones</span>
            </h2>
            <p style={{ maxWidth: '620px', margin: '0 auto 48px', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
              Compartiendo nuestra experiencia clínica en distintos medios y programas sobre neurodesarrollo y abordajes actuales.
            </p>
          </motion.div>

          {/* Bento Media Showcase */}
          <div className="media-bento-container">
            {/* Left Column: Vertical 9:16 Reel Card */}
            <div className="media-bento-reel-col">
              <motion.a
                href="https://www.instagram.com/reel/CgfJ_WovZS8/?utm_source=ig_web_button_share_sheet&stkn=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noreferrer"
                className="media-card-modern media-card-reel"
                variants={fadeUp}
              >
                <div className="media-reel-thumb-wrapper">
                  <video
                    src="/mery-raul-grisanty.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="media-reel-video"
                  />
                  <div className="media-play-overlay">
                    <div className="play-icon-circle">
                      <Play fill="white" size={24} />
                    </div>
                  </div>
                  <div className="media-source-tag media-reel-badge-tag">
                    275K Vistas
                  </div>
                </div>
                <div className="media-content-modern">
                  <span className="media-reel-channel">
                    Así es Raúl Grisanty · TV
                  </span>
                  <h3 className="media-card-title">Mery Torrealba: Señales de alerta temprana</h3>
                  <p className="media-card-speakers">Entrevista en TV Nacional</p>
                  <div className="media-card-footer">
                    <span className="watch-now-text">
                      Ver Reel en Instagram <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Right Column: 4 YouTube Cards in 2x2 grid */}
            <div className="media-bento-yt-col">
              {mediaAppearances.slice(0, 4).map((media, idx) => (
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
            </div>
          </div>

          {/* Bottom Row: Remaining YouTube Cards */}
          {mediaAppearances.length > 4 && (
            <div className="media-bottom-row">
              {mediaAppearances.slice(4).map((media, idx) => (
                <motion.a
                  key={idx + 4}
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
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta bg-blue" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="cta-bg-logo-left">
          <img src="/branding/logopng.webp" alt="" style={{ width: '100%', height: 'auto', mixBlendMode: 'multiply' }} />
        </div>
        <div className="dec-circle cta-circle-decor" style={{ top: '-100px', left: '-50px', width: '300px', height: '300px', background: 'var(--color-secondary)' }}></div>
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
                <img src="/cta_image.jpg" alt="Terapia Multisensorial" className="cta-img" />
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
        </>
      )}

      <Suspense fallback={null}>
        {currentPage === 'propietarios' && (
          <PropietariosPage 
            onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} 
          />
        )}

        {currentPage === 'tomatis' && (
          <TomatisPage 
            onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} 
            onBook={() => setIsBookingModalOpen(true)}
            onNavigateService={handleNavigateService}
          />
        )}

        {currentPage === 'homeschooling' && (
          <HomeschoolingPage 
            onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} 
            onBook={() => setIsBookingModalOpen(true)}
            onNavigateService={handleNavigateService}
          />
        )}

        {currentPage === 'psicologia' && (
          <PsicologiaPage 
            onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} 
            onBook={() => setIsBookingModalOpen(true)}
            onNavigateService={handleNavigateService}
          />
        )}

        {currentPage === 'neuropedagogia' && (
          <NeuropedagogiaPage 
            onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} 
            onBook={() => setIsBookingModalOpen(true)}
            onNavigateService={handleNavigateService}
          />
        )}

        {currentPage === 'psicopedagogia' && (
          <PsicopedagogiaPage 
            onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} 
            onBook={() => setIsBookingModalOpen(true)}
            onNavigateService={handleNavigateService}
          />
        )}

        {currentPage === 'neurofeedback' && (
          <NeurofeedbackPage 
            onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} 
            onBook={() => setIsBookingModalOpen(true)}
            onNavigateService={handleNavigateService}
          />
        )}

        {currentPage === 'evaluacion-aula-virtual' && (
          <EvaluacionAulaVirtualPage 
            onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} 
            onBook={() => setIsBookingModalOpen(true)}
            onNavigateService={handleNavigateService}
          />
        )}

        {currentPage === 'acompanamiento-madres' && (
          <AcompanamientoMadresPage 
            onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} 
            onBook={() => setIsBookingModalOpen(true)}
            onNavigateService={handleNavigateService}
          />
        )}

        {currentPage === 'terapia-orofacial' && (
          <TerapiaOrofacialPage 
            onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} 
            onBook={() => setIsBookingModalOpen(true)}
            onNavigateService={handleNavigateService}
          />
        )}

        {currentPage === 'fisioterapia' && (
          <FisioterapiaPage 
            onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} 
            onBook={() => setIsBookingModalOpen(true)}
            onNavigateService={handleNavigateService}
          />
        )}

        {currentPage === 'terapia-conductual' && (
          <TerapiaConductualPage 
            onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} 
            onBook={() => setIsBookingModalOpen(true)}
            onNavigateService={handleNavigateService}
          />
        )}

        {currentPage === 'tomatis-en-ruta' && (
          <TomatisEnRutaPage 
            onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} 
            onNavigateService={handleNavigateService}
            initialCity={tomatisRutaCity}
          />
        )}

        {(currentPage === 'jornada-este' || currentPage === 'punta-cana') && (
          <PuntaCanaPage 
            onNavigateHome={() => navigateToPage('home')}
          />
        )}

        {currentPage === 'higuey' && (
          <HigueyPage 
            onNavigateHome={() => navigateToPage('home')}
          />
        )}
      </Suspense>
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
          padding: '20px',
          overscrollBehavior: 'contain'
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
            overscrollBehavior: 'contain',
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

      {/* Floating Punta Cana Pop-Up */}
      <AnimatePresence>
        {showProvincialPopup && currentPage === 'home' && (
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 35, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="floating-puntacana-popup"
          >
            <button
              onClick={() => {
                setShowProvincialPopup(false);
                sessionStorage.setItem('puntacana_popup_dismissed', 'true');
              }}
              className="floating-popup-close"
              aria-label="Cerrar aviso"
            >
              <X size={16} />
            </button>

            <div className="floating-popup-header">
              <span className="floating-popup-badge">🌴 PUNTA CANA & BÁVARO</span>
            </div>

            <div className="floating-popup-body">
              <div className="floating-popup-img-wrap">
                <img 
                  src="/assets/punta-cana-coast-v2.webp" 
                  alt="Jornada Tomatis Punta Cana" 
                  className="floating-popup-img" 
                />
              </div>
              <div className="floating-popup-text">
                <h4>¿Buscas la Jornada en Punta Cana?</h4>
                <p>13 días intensivos del Método Tomatis® (18–31 Octubre). Solo 6 cupos disponibles.</p>
              </div>
            </div>

            <button
              onClick={() => {
                setShowProvincialPopup(false);
                sessionStorage.setItem('puntacana_popup_dismissed', 'true');
                navigateToPage('punta-cana');
              }}
              className="floating-popup-cta"
            >
              <span>Ver Jornada Punta Cana</span>
              <ArrowRight size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
