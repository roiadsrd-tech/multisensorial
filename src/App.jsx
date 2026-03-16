import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, BrainCircuit, HeartHandshake, ArrowRight, Menu, Headphones, Puzzle, Speech, ChevronDown, Volume2, VolumeX, BookOpen, Monitor, Waves, Users, Smile, Baby, Flower, HandHeart, Star, Instagram, MapPin, Phone, MessageCircleHeart, Video, CheckCircle, Smartphone, Calendar, Clock } from 'lucide-react';
import './App.css';

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
    icon: <Monitor size={28} />,
    title: "Evaluación Virtual",
    description: "Diagnósticos clínicos y psicopedagógicos precisos."
  },
  {
    icon: <Speech size={28} />,
    title: "Método Ventura",
    description: "Estimulación del lenguaje audiovisual."
  },
  {
    icon: <BookOpen size={28} />,
    title: "Homeschooling",
    description: "Acompañamiento para niños no escolarizados."
  }
];

function ServiceCard({ title, description, icon, colorClass, index }) {
  return (
    <motion.div
      className={`service-card-modern ${colorClass}`}
      variants={fadeUp}
      whileHover={{ y: -12, rotate: index % 2 === 0 ? 1 : -1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      style={{ position: 'relative', zIndex: 1 }}
    >
      <div className="service-card-icon">
        {icon}
      </div>
      <div className="service-card-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="service-card-decor"></div>
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
  const tomatisVideoRef = useRef(null);

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

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="nav-logo">
            <img src="/logo.webp" className="nav-logo-img" alt="Multisensorial RD Logo" style={{ height: '45px', width: 'auto' }} />
            Multisensorial
          </div>
          <div className="nav-links">
            <a href="#metodo" className="nav-link">Método</a>
            <a href="#servicios" className="nav-link">Servicios</a>

            <button onClick={() => setIsBookingModalOpen(true)} className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem', border: 'none', cursor: 'pointer' }}>
              Agendar Cita
            </button>
          </div>
          <button className="mobile-toggle">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero bg-cream with-grid" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Decor */}
        <div className="dec-star-4 orange" style={{ top: '15%', left: '5%', opacity: 1, transform: 'scale(1.5)' }}></div>
        <div className="dec-circle" style={{ top: '-50px', right: '-50px', width: '300px', height: '300px', background: 'var(--color-secondary)', opacity: 1 }}></div>
        <div className="dec-wiggle" style={{ top: '80%', left: '40%', opacity: 1 }}></div>
        <div className="dec-star-4 yellow" style={{ bottom: '15%', right: '15%', opacity: 1, transform: 'scale(1.2)' }}></div>
        <div className="dec-wiggle" style={{ top: '25%', right: '35%', opacity: 1 }}></div>

        <div className="container hero-content">
          <motion.div
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ position: 'relative', zIndex: 2 }}
          >
            <motion.h1 variants={fadeUp} style={{ color: 'var(--color-text)' }}>
              Un espacio donde tu <span style={{ color: 'var(--color-accent)' }}>hijo</span> se siente seguro para aprender y crecer.
            </motion.h1>
            <motion.p variants={fadeUp}>
              A través de estímulos multisensoriales, herramientas como el Método Tomatis y muchísimo amor, ayudamos a que tu pequeño gane confianza, mejore su atención y disfrute aprender.
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
              style={{ pointerEvents: 'none' }}
              aria-label={isMuted ? "Activar sonido" : "Silenciar"}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
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
              <motion.p variants={fadeUp}>
                El oído no solo nos ayuda a escuchar, también activa el cerebro, y con el Método Tomatis trabajamos la escucha de tu hijo mediante una estimulación especial que fortalece su oído y le ayuda a entender, concentrarse y aprender mejor.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              style={{ maxWidth: '350px', margin: '0 auto' }}
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
        </div>
      </section>

      <div className="section-divider-circle" />

      {/* Services Section - Accordion Style */}
      <section id="servicios" className="services-modern with-paper-image" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
        <div className="dec-star-4 orange" style={{ bottom: '10%', left: '5%', opacity: 1, transform: 'scale(1.5)', zIndex: 1, position: 'absolute' }}></div>
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
              return (
                <ServiceCard
                  key={index}
                  index={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  colorClass={`card-${colors[index % colors.length]}`}
                />
              );
            })}
          </motion.div>
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
                  <img src="/carlos_perez_new.webp" alt="Carlos Pérez" className="team-image" />
                </div>
                <div className="team-info">
                  <h3>Carlos Pérez</h3>
                  <span className="team-role">Psicólogo Clínico / Consultor Tomatis®</span>
                  <p className="team-desc-desktop">Psicólogo clínico y Consultor Tomatis®. Especializado en la evaluación e intervención del neurodesarrollo mediante la estimulación audiosensorial.</p>
                  <p className="team-desc-mobile">Psicólogo clínico y Consultor Tomatis®.</p>
                </div>
              </motion.div>

              <motion.div className="team-card" variants={fadeUp}>
                <div className="team-image-container" style={{ background: 'var(--color-pink)' }}>
                  <img src="/mery_torrealba_new.webp" alt="Mery Torrealba" className="team-image" />
                </div>
                <div className="team-info">
                  <h3>Mery Torrealba</h3>
                  <span className="team-role">Educadora / Terapeuta Neurobiofeedback</span>
                  <p className="team-desc-desktop">Licenciada en educación de estudiantes excepcionales. Terapeuta en neurobiofeedback y experta en evaluación de la atención en realidad virtual.</p>
                  <p className="team-desc-mobile">Educadora y terapeuta en neurobiofeedback.</p>
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

      {/* CTA Section */}
      <section className="cta bg-blue" style={{ position: 'relative', overflow: 'hidden' }}>
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
              <motion.h2 variants={fadeUp} style={{ color: 'var(--color-text)' }}>Inicia la transformación hoy.</motion.h2>
              <motion.p variants={fadeUp} style={{ color: 'var(--color-text)' }} className="cta-description">
                En Multisensorial RD, somos una familia dedicada a cuidar del crecimiento de la tuya. Ven a visitarnos y descubre un espacio donde tu hijo se sentirá siempre como en casa mientras alcanza su máximo potencial.
              </motion.p>
              <motion.div variants={fadeUp}>
                <button onClick={() => setIsBookingModalOpen(true)} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                  Agendar Evaluación Inicial
                </button>
              </motion.div>
            </div>

            <div className="cta-media">
              <motion.div className="cta-image-wrapper" variants={fadeUp}>
                <img src="/cta_image.webp" alt="Terapia Multisensorial" className="cta-img" />
              </motion.div>
            </div>
          </div>

          <div className="cta-bottom">
            <motion.div className="location-details-modern" variants={fadeUp}>
              <div className="location-badge">
                <MapPin size={32} />
                <span><strong>Ubicación:</strong> Calle Paseo Los Locutores #45, Edificio Digicolor, Nivel 1C, Santo Domingo</span>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.0970341753177!2d-69.9392262!3d18.4729177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea5621361c47101%3A0x8fcbeb80ba7ab7e0!2sPaseo%20De%20Los%20Locutores%2045%2C%20Santo%20Domingo!5e0!3m2!1sen!2sdo!4v1709400000000!5m2!1sen!2sdo"
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
      <footer className="footer bg-blue">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col" style={{ gridColumn: 'span 2' }}>
              <span className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <img src="/logo.webp" className="nav-logo-img" alt="Multisensorial Torrealba Logo" style={{ height: '80px', width: 'auto' }} />
                Multisensorial
              </span>
              <p style={{ maxWidth: '80%' }}>
                Centro de Estimulación Multisensorial y Neuropedagogía. Especialistas en el Método Tomatis en República Dominicana.
              </p>
            </div>
            <div className="footer-col">
              <h4>Enlaces</h4>
              <ul>
                <li><a href="#metodo">Método</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><button onClick={() => setIsBookingModalOpen(true)} style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', font: 'inherit', cursor: 'pointer', textDecoration: 'underline' }}>Agendar Cita</button></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Ubicación & Contacto</h4>
              <ul>
                <li>Calle Paseo Los Locutores #45, Edificio Digicolor</li>
                <li>Santo Domingo, Rep. Dom.</li>
                <li>Tel: +1 (809) 306-5040</li>
                <li><a href="https://instagram.com/multisensorialrd" target="_blank" rel="noreferrer">@multisensorialrd</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Centro Multisensorial RD. Todos los derechos reservados.
          </div>
        </div>
      </footer>
      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div 
            className="booking-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setIsBookingModalOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(28, 78, 130, 0.85)', // Dark blue background instead of teal
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div 
              className="booking-modal-content"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
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
                padding: '25px 5px 5px 5px'
              }}
            >
              <button 
                onClick={() => setIsBookingModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  background: 'var(--color-primary-dark)',
                  border: '4px solid white',
                  borderRadius: '50%',
                  width: '45px',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  color: 'white',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                }}
              >
                ✕
              </button>
              
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

                  <iframe 
                    src="https://api.leadconnectorhq.com/widget/booking/i0TBYq6Ec4GK21NpfPFu?primaryColor=%23EF476F&backgroundColor=%23ffffff&fontFamily=Nunito" 
                    style={{ width: '100%', border: 'none', minHeight: '850px', borderRadius: '0 0 28px 28px' }} 
                    scrolling="yes" 
                    id="i0TBYq6Ec4GK21NpfPFu_1773700990303"
                  ></iframe>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
