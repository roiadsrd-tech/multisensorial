import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Smile, Sparkles, Star, Speech, Award, ShieldCheck, HelpCircle, ChevronDown, ChevronUp, Activity, CheckCircle2, Heart, Wind, Flame, Check } from 'lucide-react';
import ServiceFooterExtras from './ServiceFooterExtras';
import Footer from './Footer';
import './ServicesPages.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const MuscleMap = () => {
  const [activeZone, setActiveZone] = useState('lengua');

  const zones = {
    lengua: {
      title: "Ejercicios Linguales (Lengua)",
      desc: "Fortalece la movilidad, agilidad y tono lingual. Ideal para corregir la pronunciación de fonemas como la 'R', 'S' y corregir la deglución atípica.",
      color: "var(--color-pink)",
      exercise: "✓ Chasquidos de lengua contra el paladar durante 10 repeticiones.\n✓ Sacar la lengua e intentar tocar la punta de la nariz."
    },
    labios: {
      title: "Ejercicios Labiales (Labios y Mejillas)",
      desc: "Corrige el sellado labial pasivo (respiradores bucales) y fortalece los músculos buccinadores para mejorar la dicción.",
      color: "var(--color-accent)",
      exercise: "✓ Lanzar besos ruidosos al aire sosteniendo la postura 5 segundos.\n✓ Inflar las mejillas alternando el aire de izquierda a derecha."
    },
    mandibula: {
      title: "Ejercicios Mandibulares (Músculos Maseteros)",
      desc: "Estimula la fuerza y alineación maxilar para una masticación más sólida y eficaz, previniendo el babeo involuntario.",
      color: "var(--color-secondary)",
      exercise: "✓ Realizar movimientos laterales de mandíbula de forma pausada.\n✓ Masticar alimentos de consistencia firme (zanahoria, manzanas)."
    }
  };

  return (
    <div style={{
      background: 'white',
      padding: '32px',
      borderRadius: '32px',
      border: '3px solid var(--color-primary-dark)',
      boxShadow: '8px 8px 0px var(--color-primary-dark)'
    }}>
      <div style={{
        background: '#FAF9DC',
        padding: '24px',
        borderRadius: '24px',
        border: '2px solid var(--color-primary-dark)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: '220px', height: 'auto' }}>
          {/* Face outline */}
          <path d="M 50,40 C 20,40 10,70 10,100 C 10,160 50,190 100,190 C 150,190 190,160 190,100 C 190,70 180,40 150,40 Z" fill="#FFF8E7" stroke="var(--color-primary-dark)" strokeWidth="4" />
          
          {/* Eyes */}
          <circle cx="65" cy="80" r="9" fill="var(--color-primary-dark)" />
          <circle cx="135" cy="80" r="9" fill="var(--color-primary-dark)" />
          
          {/* Cheeks */}
          <circle cx="45" cy="115" r="14" fill="#FFD1DC" opacity="0.6" />
          <circle cx="155" cy="115" r="14" fill="#FFD1DC" opacity="0.6" />

          {/* Nose */}
          <path d="M 100,85 L 95,110 L 105,110 Z" fill="none" stroke="var(--color-primary-dark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

          {/* Interactive Node: Lips */}
          <g onClick={() => setActiveZone('labios')} style={{ cursor: 'pointer' }}>
            <circle cx="100" cy="142" r="20" fill={activeZone === 'labios' ? 'var(--color-accent)' : 'white'} stroke="var(--color-primary-dark)" strokeWidth="3" />
            <path d="M 88,142 Q 100,154 112,142" fill="none" stroke="var(--color-primary-dark)" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* Interactive Node: Tongue */}
          <g onClick={() => setActiveZone('lengua')} style={{ cursor: 'pointer' }}>
            <circle cx="100" cy="112" r="13" fill={activeZone === 'lengua' ? 'var(--color-pink)' : 'white'} stroke="var(--color-primary-dark)" strokeWidth="3" />
            <circle cx="100" cy="112" r="4" fill="var(--color-primary-dark)" />
          </g>

          {/* Interactive Node: Jaw */}
          <g onClick={() => setActiveZone('mandibula')} style={{ cursor: 'pointer' }}>
            <circle cx="100" cy="176" r="12" fill={activeZone === 'mandibula' ? 'var(--color-secondary)' : 'white'} stroke="var(--color-primary-dark)" strokeWidth="3" />
            <path d="M 88,176 L 112,176" fill="none" stroke="var(--color-primary-dark)" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <h4 style={{ fontSize: '1.3rem', color: 'var(--color-primary-dark)', fontWeight: 800, marginBottom: '8px' }}>
          {zones[activeZone].title}
        </h4>
        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '16px' }}>
          {zones[activeZone].desc}
        </p>

        <div style={{
          whiteSpace: 'pre-line',
          fontSize: '0.9rem',
          background: '#F7FAFC',
          padding: '16px',
          borderRadius: '16px',
          border: '2px dashed var(--color-primary-dark)',
          color: 'var(--color-primary-dark)',
          fontWeight: 700,
          textAlign: 'left'
        }}>
          {zones[activeZone].exercise}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
        {Object.keys(zones).map((key) => (
          <button
            key={key}
            onClick={() => setActiveZone(key)}
            style={{
              padding: '10px 20px',
              borderRadius: '30px',
              border: '2px solid var(--color-primary-dark)',
              fontWeight: 800,
              cursor: 'pointer',
              textTransform: 'capitalize',
              fontSize: '0.9rem',
              transition: 'all 0.2s ease',
              background: activeZone === key ? zones[key].color : 'white',
              boxShadow: activeZone === key ? '2px 2px 0px var(--color-primary-dark)' : 'none'
            }}
          >
            {key}
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
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'stretch' }}>
      {/* Left List Tabs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {benefits.map((b, idx) => {
          const isActive = activeIndex === idx;
          return (
            <motion.div
              key={b.id}
              onClick={() => setActiveIndex(idx)}
              whileHover={{ x: 6 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '18px 24px',
                borderRadius: '20px',
                background: isActive ? b.color : 'white',
                border: '3px solid var(--color-primary-dark)',
                boxShadow: isActive ? '6px 6px 0px var(--color-primary-dark)' : '2px 2px 0px rgba(0,0,0,0.06)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--color-primary-dark)', width: '28px' }}>
                {b.num}
              </span>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'white',
                border: '2px solid var(--color-primary-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {b.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-primary-dark)', margin: 0 }}>
                  {b.title}
                </h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-primary-dark)', opacity: 0.8, fontWeight: 600 }}>
                  {b.tagline}
                </span>
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

        <div style={{ paddingTop: '20px', borderTop: '2px dashed var(--color-primary-dark)' }}>
          <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary-dark)', margin: 0 }}>
            ¿Tu hijo presenta un desafío similar? Diseñamos un plan terapéutico a su medida.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const TerapiaOrofacialPage = ({ onBack, onBook, onNavigateService }) => {
  const homeExercises = [
    {
      title: "Besitos al aire",
      instruction: "Lanza besos al aire con movimientos labiales pronunciados",
      desc: "Fortalece el sellado de los labios y mejora el tono de los músculos orbiculares.",
      color: "#FFE4E8"
    },
    {
      title: "Carita de pez",
      instruction: "Frunce los labios y aspira las mejillas hacia adentro",
      desc: "Ejercita los buccinadores y la fuerza de agarre oral para facilitar la masticación.",
      color: "#FFF3D6"
    },
    {
      title: "Soplo con pajilla",
      instruction: "Sopla con una pajilla sobre un vaso de agua",
      desc: "Favorece el control del soplo, la capacidad pulmonar y el sellado de los labios.",
      color: "#E0F7FA"
    },
    {
      title: "Lengua de lado a lado",
      instruction: "Lleva la lengua de una comisura a la otra",
      desc: "Desarrolla la agilidad y precisión de la punta lingual para la correcta articulación.",
      color: "#E8F5E9"
    }
  ];

  return (
    <div className="service-detail-page" style={{ background: '#FAF9F5' }}>
      <nav className="navbar" style={{ position: 'sticky', top: 0, zIndex: 100, background: 'white', borderBottom: '2px solid var(--color-primary-dark)' }}>
        <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px' }}>
          <button onClick={onBack} className="btn-back" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, color: 'var(--color-primary-dark)', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
            <ArrowLeft size={20} /> Volver al Inicio
          </button>
          <div className="nav-logo">
            <img src="/multilogo2 (1).png" alt="Logo" className="nav-logo-img" style={{ height: '45px', margin: '0 auto' }} />
          </div>
        </div>
      </nav>

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
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '4px' }}>Habla</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>Articulación correcta de fonemas complejos.</p>
              </div>
              <div style={{ background: '#E8F5E9', padding: '24px', borderRadius: '24px', border: '3px solid var(--color-primary-dark)', boxShadow: '4px 4px 0px var(--color-primary-dark)' }}>
                <Smile size={36} color="var(--color-primary-dark)" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '4px' }}>Masticación</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>Fuerza y movilidad de músculos maseteros.</p>
              </div>
              <div style={{ background: '#FFE4E8', padding: '24px', borderRadius: '24px', border: '3px solid var(--color-primary-dark)', boxShadow: '4px 4px 0px var(--color-primary-dark)' }}>
                <Activity size={36} color="var(--color-primary-dark)" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '4px' }}>Deglución</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>Prevención de deglución atípica y babeo.</p>
              </div>
              <div style={{ background: '#E0F7FA', padding: '24px', borderRadius: '24px', border: '3px solid var(--color-primary-dark)', boxShadow: '4px 4px 0px var(--color-primary-dark)' }}>
                <Wind size={36} color="var(--color-primary-dark)" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '4px' }}>Respiración</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>Fomento del patrón respiratorio nasal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 5 Beneficios Principales (Interactive Spotlight Layout) */}
      <section style={{ padding: '80px 0', background: '#FFFDF5' }}>
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
      <section style={{ padding: '80px 0', background: '#FFF' }}>
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
                    <Smile size={26} color="var(--color-primary-dark)" />
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

      {/* Interactive Muscle Map Section */}
      <section style={{ padding: '80px 0', background: '#FAF9F5' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <MuscleMap />

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="badge-modern" style={{ background: 'var(--color-secondary)', color: 'var(--color-primary-dark)', padding: '6px 16px', borderRadius: '20px', fontWeight: 800, fontSize: '0.85rem', display: 'inline-block', marginBottom: '14px' }}>
                PRÁCTICA INTERACTIVA
              </div>
              <h2 style={{ fontSize: '2.6rem', marginBottom: '18px', color: 'var(--color-primary-dark)', fontWeight: 800, lineHeight: 1.2 }}>
                Explora las Zonas Musculares
              </h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '20px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                Haz clic sobre los diferentes nodos del mapa facial (Lengua, Labios o Mandíbula) para descubrir la zona anatómica objetivo y el ejercicio específico diseñado por nuestras terapeutas.
              </p>

              <div style={{ background: 'white', padding: '24px', borderRadius: '24px', border: '3px solid var(--color-primary-dark)', boxShadow: '5px 5px 0px var(--color-primary-dark)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '8px', fontSize: '1.1rem' }}>
                  <CheckCircle2 size={24} color="var(--color-green)" /> Sesiones Lúdicas y Personalizadas
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
                  Adaptamos la intensidad de los praxias orofaciales según la edad y condición neuromuscular de cada niño para garantizar avances consistentes y motivadores.
                </p>
              </div>
            </motion.div>
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
