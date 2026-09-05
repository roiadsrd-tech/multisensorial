import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Smile, Sparkles, Star, Speech, Award, ShieldCheck, HelpCircle, ChevronDown, ChevronUp, ChevronRight, Activity, CheckCircle2, Heart, Wind, Flame, Check, Utensils, CupSoda, Fish, GlassWater } from 'lucide-react';
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
    <div style={{
      background: 'white',
      borderRadius: '24px',
      border: '3px solid var(--color-primary-dark)',
      marginBottom: '16px',
      overflow: 'hidden',
      boxShadow: '4px 4px 0px var(--color-primary-dark)'
    }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '22px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'left',
          fontSize: '1.15rem',
          fontWeight: 800,
          color: 'var(--color-primary-dark)',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer'
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <HelpCircle size={22} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
          {question}
        </span>
        {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div style={{
              padding: '0 24px 24px 58px',
              color: 'var(--color-text-muted)',
              fontSize: '1rem',
              lineHeight: 1.6,
              borderTop: '2px dashed #E2E8F0'
            }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AppleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/>
    <path d="M10 2c1 .5 2 2 2 5"/>
  </svg>
);

const KissIcon = ({ size = 26, color = "var(--color-primary-dark)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12c2.5-3 5.5-4 8-1 2.5-3 5.5-2 8 1-2.5 3-5.5 4-8 1-2.5 3-5.5 2-8-1z"/>
    <path d="M4 12c4 2 8 4 16 0"/>
  </svg>
);

const TongueIcon = ({ size = 26, color = "var(--color-primary-dark)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="9" cy="9" r="1" fill={color}/>
    <circle cx="15" cy="9" r="1" fill={color}/>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
    <path d="M10 16v2a2 2 0 0 0 4 0v-2" fill="#FF85A1" stroke={color} strokeWidth="1.5"/>
  </svg>
);

const BenefitShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const benefits = [
    {
      id: "habla",
      num: "01",
      icon: <Speech size={24} color="var(--color-primary-dark)" />,
      title: "Mejora del habla y pronunciación",
      tagline: "Comunicación clara y articulada",
      desc: "Ayuda a que el niño articule mejor los sonidos y palabras, fortaleciendo los músculos linguales y labiales para una comunicación más fluida, comprensible y espontánea.",
      impacts: ["Articulación clara de fonemas", "Mayor agilidad lingual", "Fluidez al expresarse"],
      color: "var(--color-tertiary)"
    },
    {
      id: "alimentacion",
      num: "02",
      icon: <AppleIcon />,
      title: "Facilita la alimentación y deglución",
      tagline: "Masticación eficiente y segura",
      desc: "Corrige dificultades para masticar o tragar, previene atragantamientos y promueve una transición alimentaria sin rechazos ni aversiones de textura.",
      impacts: ["Masticación sólida y coordinada", "Deglución segura", "Aceptación de nuevas texturas"],
      color: "var(--color-pink)"
    },
    {
      id: "respiracion",
      num: "03",
      icon: <Wind size={24} color="var(--color-primary-dark)" />,
      title: "Favorece la respiración adecuada",
      tagline: "Respiración nasal y mejor descanso",
      desc: "Reeduca el patrón respiratorio para que el niño respire por la nariz y no por la boca, optimizando la oxigenación cerebral, el sueño reparador y la postura corporal.",
      impacts: ["Patrón respiratorio nasal", "Sueño profundo y descanso", "Mejor postura y oxigenación"],
      color: "var(--color-secondary)"
    },
    {
      id: "prevencion",
      num: "04",
      icon: <ShieldCheck size={24} color="var(--color-primary-dark)" />,
      title: "Prevención de malformaciones",
      tagline: "Crecimiento maxilar armónico",
      desc: "Una adecuada tono orofacial evita problemas severos de mordida (abierta o cruzada) y orienta un crecimiento equilibrado y saludable de la mandíbula y maxilares.",
      impacts: ["Alineación maxilar correcta", "Prevención de mordida abierta", "Desarrollo facial simétrico"],
      color: "#D1F4E0"
    },
    {
      id: "autoestima",
      num: "05",
      icon: <Heart size={24} color="var(--color-primary-dark)" />,
      title: "Aumento de la autoestima y confianza",
      tagline: "Seguridad para relacionarse",
      desc: "Al desenvolverse con soltura al hablar y comer sin dificultades, el niño gana seguridad personal y se integra con alegría en sus entornos social y escolar.",
      impacts: ["Mayor confianza social", "Seguridad al hablar en público", "Bienestar emocional"],
      color: "#FFE4D6"
    }
  ];

  const activeBenefit = benefits[activeIndex];

  return (
    <>
      {/* Desktop Grid Layout */}
      <div className="orofacial-benefits-desktop" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'stretch' }}>
        {/* Left List Tabs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {benefits.map((b, idx) => {
            const isActive = activeIndex === idx;
            return (
              <motion.div
                key={b.id}
                onClick={() => setActiveIndex(idx)}
                whileHover={{ x: isActive ? 6 : 4 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  borderRadius: '20px',
                  background: isActive ? 'var(--color-primary-dark)' : 'rgba(255, 255, 255, 0.72)',
                  backdropFilter: 'blur(10px)',
                  border: isActive ? '3px solid var(--color-primary-dark)' : '2px solid rgba(13, 44, 93, 0.12)',
                  boxShadow: isActive ? '6px 6px 0px var(--color-accent)' : 'none',
                  transform: isActive ? 'translateX(6px)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1.5)'
                }}
              >
                <span style={{
                  fontSize: '0.95rem',
                  fontWeight: 900,
                  color: 'var(--color-primary-dark)',
                  background: isActive ? b.color : 'rgba(13, 44, 93, 0.08)',
                  padding: '4px 10px',
                  borderRadius: '10px',
                  border: isActive ? '1.5px solid var(--color-primary-dark)' : 'none',
                  flexShrink: 0
                }}>
                  {b.num}
                </span>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'white',
                  border: isActive ? '2px solid white' : '1.5px solid rgba(13, 44, 93, 0.14)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.18)' : 'none'
                }}>
                  {b.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: isActive ? 'white' : 'var(--color-primary-dark)',
                    margin: 0,
                    lineHeight: 1.25
                  }}>
                    {b.title}
                  </h4>
                  <span style={{
                    fontSize: '0.82rem',
                    color: isActive ? 'rgba(255, 255, 255, 0.85)' : 'var(--color-text-muted)',
                    fontWeight: 600
                  }}>
                    {b.tagline}
                  </span>
                </div>
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: isActive ? 'rgba(255, 255, 255, 0.16)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <ChevronRight size={18} color={isActive ? 'white' : 'rgba(13, 44, 93, 0.3)'} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Active Spotlight Panel */}
        <motion.div
          key={activeBenefit.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'white',
            borderRadius: '32px',
            padding: '40px 36px',
            border: '4px solid var(--color-primary-dark)',
            boxShadow: '10px 10px 0px var(--color-accent)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: activeBenefit.color,
                border: '3px solid var(--color-primary-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {activeBenefit.icon}
              </div>
              <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-primary-dark)', opacity: 0.2 }}>
                {activeBenefit.num}
              </span>
            </div>

            <h3 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--color-primary-dark)', marginBottom: '14px', lineHeight: 1.2 }}>
              {activeBenefit.title}
            </h3>

            <p style={{ fontSize: '1.12rem', color: 'var(--color-primary-dark)', lineHeight: 1.6, marginBottom: '28px', opacity: 0.9 }}>
              {activeBenefit.desc}
            </p>

            <div style={{ marginBottom: '24px' }}>
              <h5 style={{ fontSize: '0.88rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-accent)', marginBottom: '12px' }}>
                Impactos Directos:
              </h5>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {activeBenefit.impacts.map((imp, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: '#FAF9DC',
                      border: '2px solid var(--color-primary-dark)',
                      padding: '8px 16px',
                      borderRadius: '30px',
                      fontWeight: 800,
                      fontSize: '0.88rem',
                      color: 'var(--color-primary-dark)'
                    }}
                  >
                    ✓ {imp}
                  </span>
                ))}
              </div>
            </div>
          </div>


        </motion.div>
      </div>

      {/* Mobile Swipeable Carousel */}
      <div className="orofacial-benefits-carousel">
        {benefits.map((b) => (
          <div
            key={b.id}
            className="orofacial-benefit-card"
            style={{
              boxShadow: `6px 6px 0px ${b.color}`,
              background: 'white'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: b.color,
                  border: '2.5px solid var(--color-primary-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {b.icon}
                </div>
                <span style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--color-primary-dark)', opacity: 0.2 }}>
                  {b.num}
                </span>
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-primary-dark)', marginBottom: '8px', lineHeight: 1.2 }}>
                {b.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-accent)', fontWeight: 800, marginBottom: '14px' }}>
                {b.tagline}
              </p>

              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '20px' }}>
                {b.desc}
              </p>

              <div style={{ marginBottom: '14px' }}>
                <h5 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--color-primary-dark)', marginBottom: '10px' }}>
                  Impactos Directos:
                </h5>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {b.impacts.map((imp, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: '#FAF9DC',
                        border: '2px solid var(--color-primary-dark)',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontWeight: 800,
                        fontSize: '0.8rem',
                        color: 'var(--color-primary-dark)'
                      }}
                    >
                      ✓ {imp}
                    </span>
                  ))}
                </div>
              </div>
            </div>


          </div>
        ))}
      </div>
    </>
  );
};

const TerapiaOrofacialPage = ({ onBack, onBook, onNavigateService }) => {
  const homeExercises = [
    {
      title: "Besitos al aire",
      instruction: "Lanza besos al aire con movimientos labiales pronunciados",
      desc: "Fortalece el sellado de los labios y mejora el tono de los músculos orbiculares.",
      color: "#FFE4E8",
      icon: <KissIcon size={26} />
    },
    {
      title: "Carita de pez",
      instruction: "Frunce los labios y aspira las mejillas hacia adentro",
      desc: "Ejercita los buccinadores y la fuerza de agarre oral para facilitar la masticación.",
      color: "#FFF3D6",
      icon: <Fish size={26} color="var(--color-primary-dark)" />
    },
    {
      title: "Soplo con pajilla",
      instruction: "Sopla con una pajilla sobre un vaso de agua",
      desc: "Favorece el control del soplo, la capacidad pulmonar y el sellado de los labios.",
      color: "#E0F7FA",
      icon: <GlassWater size={26} color="var(--color-primary-dark)" />
    },
    {
      title: "Lengua de lado a lado",
      instruction: "Lleva la lengua de una comisura a la otra",
      desc: "Desarrolla la agilidad y precisión de la punta lingual para la correcta articulación.",
      color: "#E8F5E9",
      icon: <TongueIcon size={26} />
    }
  ];

  return (
    <div className="service-detail-page" style={{ background: '#FAF9F5' }}>
      {/* Hero */}
      <section className="service-hero with-grid" style={{ position: 'relative', overflow: 'hidden', padding: '75px 0 60px', borderBottom: '3px solid var(--color-primary-dark)', background: '#ECE4F9' }}>
        {/* Decoraciones de fondo */}
        <div className="dec-star-4 orange" style={{ top: '15%', right: '6%', transform: 'scale(1.3)' }}></div>
        <div className="dec-star-4" style={{ bottom: '15%', left: '5%', transform: 'scale(1.1)', background: 'var(--color-tertiary)' }}></div>
        <div className="dec-circle" style={{ top: '-40px', left: '-40px', width: '180px', height: '180px', background: 'var(--color-secondary)', opacity: 0.7 }}></div>
        <div className="dec-wiggle" style={{ bottom: '25px', right: '12%', transform: 'rotate(-20deg)', opacity: 0.6 }}></div>

        <div className="container" style={{ textAlign: 'center', maxWidth: '850px', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge-modern" style={{ background: 'var(--color-secondary)', color: 'var(--color-primary-dark)', padding: '8px 18px', borderRadius: '30px', fontWeight: 800, fontSize: '0.9rem', display: 'inline-block', marginBottom: '16px' }}>
              Músculos, Habla y Deglución
            </div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '18px', color: 'var(--color-primary-dark)', fontWeight: 900, lineHeight: 1.15 }}>
              Terapia <span style={{ color: 'var(--color-accent)' }}>Orofacial Infantil</span>
            </h1>
            <p style={{ fontSize: '1.2rem', fontWeight: 500, marginBottom: '28px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Fortalecemos y coordinamos los músculos de la boca, lengua, labios, mejillas y mandíbula. Es la clave para un desarrollo óptimo del habla, la alimentación y la respiración.
            </p>

            <button onClick={onBook} className="btn-primary" style={{ border: 'none', cursor: 'pointer', padding: '16px 36px', fontSize: '1.1rem', borderRadius: '30px', fontWeight: 800 }}>
              Reservar Evaluación Orofacial
            </button>
          </motion.div>

          {/* Video Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={{
              marginTop: '45px',
              borderRadius: '28px',
              overflow: 'hidden',
              border: '4px solid var(--color-primary-dark)',
              boxShadow: '8px 8px 0px var(--color-secondary)',
              background: '#000'
            }}
          >
            <video 
              src="/videoorofacial.mp4" 
              controls 
              autoPlay 
              muted 
              loop 
              playsInline
              style={{ width: '100%', maxHeight: '460px', objectFit: 'cover', display: 'block' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Qué es la Terapia Orofacial */}
      <section style={{ padding: '80px 0', background: '#FFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="badge-modern" style={{ background: 'var(--color-pink)', color: 'var(--color-primary-dark)', padding: '6px 16px', borderRadius: '20px', fontWeight: 800, fontSize: '0.85rem', display: 'inline-block', marginBottom: '14px' }}>
                ¿EN QUÉ CONSISTE?
              </div>
              <h2 style={{ fontSize: '2.6rem', marginBottom: '18px', color: 'var(--color-primary-dark)', fontWeight: 800, lineHeight: 1.2 }}>
                El tratamiento enfocado en mejorar las funciones orales
              </h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                La terapia orofacial es un conjunto especializado de ejercicios y técnicas dirigidas a tonificar y coordinar los músculos de la cara y la cavidad oral.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                A través de dinámicas lúdicas y adaptadas a la edad de cada niño, facilitamos una comunicación limpia, una articulación precisa de fonemas y un patrón de masticación y deglución seguro.
              </p>
            </motion.div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <div style={{ background: '#FAF9DC', padding: '24px', borderRadius: '24px', border: '3px solid var(--color-primary-dark)', boxShadow: '4px 4px 0px var(--color-primary-dark)' }}>
                <Speech size={36} color="var(--color-primary-dark)" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '4px' }}>Mejora del habla</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>Articulación correcta de fonemas complejos.</p>
              </div>
              <div style={{ background: '#E8F5E9', padding: '24px', borderRadius: '24px', border: '3px solid var(--color-primary-dark)', boxShadow: '4px 4px 0px var(--color-primary-dark)' }}>
                <Utensils size={36} color="var(--color-primary-dark)" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '4px' }}>Promueve masticación</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>Fuerza y movilidad de músculos maseteros.</p>
              </div>
              <div style={{ background: '#FFE4E8', padding: '24px', borderRadius: '24px', border: '3px solid var(--color-primary-dark)', boxShadow: '4px 4px 0px var(--color-primary-dark)' }}>
                <CupSoda size={36} color="var(--color-primary-dark)" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '4px' }}>Facilita deglución</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>Prevención de deglución atípica y babeo.</p>
              </div>
              <div style={{ background: '#E0F7FA', padding: '24px', borderRadius: '24px', border: '3px solid var(--color-primary-dark)', boxShadow: '4px 4px 0px var(--color-primary-dark)' }}>
                <Wind size={36} color="var(--color-primary-dark)" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '4px' }}>Fomenta respiración</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>Fomento del patrón respiratorio nasal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 5 Beneficios Principales (Interactive Spotlight Layout) */}
      <section className="bg-yellow with-grid" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="badge-modern" style={{ background: 'var(--color-accent)', color: 'white', padding: '6px 16px', borderRadius: '20px', fontWeight: 800, fontSize: '0.85rem', display: 'inline-block', marginBottom: '12px' }}>
              IMPACTO REAL EN EL NIÑO
            </div>
            <h2 style={{ fontSize: '2.8rem', color: 'var(--color-primary-dark)', fontWeight: 900 }}>
              Beneficios Principales
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '8px auto 0' }}>
              Haz clic en cada beneficio para descubrir cómo transforma el día a día de tu hijo.
            </p>
          </div>

          <BenefitShowcase />
        </div>
      </section>

      {/* Guía de Ejercicios en Casa */}
      <section className="bg-blue with-grid" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="badge-modern" style={{ background: 'var(--color-pink)', color: 'var(--color-primary-dark)', padding: '6px 16px', borderRadius: '20px', fontWeight: 800, fontSize: '0.85rem', display: 'inline-block', marginBottom: '12px' }}>
              ACTIVIDADES PRÁCTICAS
            </div>
            <h2 style={{ fontSize: '2.8rem', color: 'var(--color-primary-dark)', fontWeight: 900 }}>
              Guía de Ejercicios en Casa
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
              Cuatro ejercicios orofaciales sencillos para hacer con los pequeños. ¡A divertirse jugando!
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {homeExercises.map((ex, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.02 }}
                style={{
                  background: ex.color,
                  padding: '28px',
                  borderRadius: '24px',
                  border: '3px solid var(--color-primary-dark)',
                  boxShadow: '6px 6px 0px var(--color-primary-dark)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'white', border: '2px solid var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                    {ex.icon}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '10px', color: 'var(--color-primary-dark)' }}>
                    {ex.title}
                  </h3>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.85)',
                    padding: '12px 14px',
                    borderRadius: '14px',
                    border: '2px dashed var(--color-primary-dark)',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    color: 'var(--color-primary-dark)',
                    marginBottom: '14px',
                    lineHeight: 1.4
                  }}>
                    "{ex.instruction}"
                  </div>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-primary-dark)', opacity: 0.9, lineHeight: 1.5, margin: 0 }}>
                  {ex.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQs */}
      <section style={{ padding: '80px 0', background: '#FFF' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <h2 style={{ fontSize: '2.8rem', color: 'var(--color-primary-dark)', fontWeight: 900 }}>Preguntas Frecuentes</h2>
          </div>

          <FAQItem 
            question="¿A qué edad se recomienda iniciar la terapia orofacial?" 
            answer="Se puede iniciar desde los 2 a 3 años de edad en casos de babeo persistente, dificultades para tragar sólidos, respiración bucal o retrasos notorios en la articulación del habla." 
          />
          <FAQItem 
            question="¿Cuánto dura el tratamiento de terapia orofacial?" 
            answer="Depende del tono muscular de cada paciente. Casos sencillos toman de 3 a 4 meses con constancia diaria en casa, mientras que intervenciones miofuncionales complejas requieren 6 meses o más." 
          />
          <FAQItem 
            question="¿Ayuda la terapia orofacial si mi hijo respira por la boca?" 
            answer="¡Sí, totalmente! La terapia enseña al niño el sellado labial consciente y reeduca el patrón respiratorio hacia la vía nasal, evitando deformaciones en el paladar y maxilares." 
          />
        </div>
      </section>

      {/* Service Footer Extras */}
      <ServiceFooterExtras serviceId="terapia-orofacial" onBack={onBack} onNavigateService={onNavigateService} />

      {/* Footer */}
      <Footer onNavigate={onBack} onOpenBooking={onBook} />
    </div>
  );
};

export default TerapiaOrofacialPage;
