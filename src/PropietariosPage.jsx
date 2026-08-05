/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Building, Award, Sparkles, MapPin, Users, CheckCircle, 
  Send, HeartHandshake, ArrowRight, Shield, Globe, Star
} from 'lucide-react';
import Footer from './Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

const PropietariosPage = ({ onBack }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeCity, setActiveCity] = useState("nagua");

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api.leadconnectorhq.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const steps = [
    {
      title: "1. Tu Espacio",
      desc: "Facilitas un aula o consultorio en tu provincia durante jornadas puntuales (fines de semana o días de operativo).",
      icon: <Building size={24} />
    },
    {
      title: "2. Nuestra Logística",
      desc: "Trasladamos especialistas certificados, equipos oficiales Tomatis® y todo el material necesario de estimulación auditiva y sensorial.",
      icon: <Users size={24} />
    },
    {
      title: "3. El Operativo",
      desc: "Llevamos a cabo las evaluaciones de perfil de escucha y aplicamos la terapia auditiva de forma profesional a las familias del interior.",
      icon: <Award size={24} />
    }
  ];

  const cities = {
    nagua: {
      name: "Nagua",
      desc: "Operativo con familias de toda la costa norte. Llevamos evaluaciones completas de lenguaje e integración sensorial en un fin de semana lleno de esperanza.",
      stat: "30+ Familias Atendidas",
      color: "var(--color-primary)"
    },
    bonao: {
      name: "Bonao",
      desc: "Jornada intensiva de evaluación auditiva con gran impacto. Identificamos perfiles de escucha para orientar diagnósticos de desarrollo infantil.",
      stat: "15+ Diagnósticos Realizados",
      color: "var(--color-secondary)"
    },
    lavega: {
      name: "La Vega",
      desc: "Pasadilla clínica de seguimiento personalizado a niños con espectro autista, TDAH e hipersensibilidad al ruido.",
      stat: "2 Días Intensivos",
      color: "var(--color-pink)"
    },
    sfm: {
      name: "San Francisco",
      desc: "Jornada de integración con el Método Tomatis® certificado. Acercamos la terapia auditiva de nivel 4 a familias locales.",
      stat: "100% Familias Satisfechas",
      color: "var(--color-green)"
    }
  };

  return (
    <div className="propietarios-page bg-cream" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Mini Nav */}
      <nav className="navbar" style={{ position: 'sticky', top: 0, zIndex: 100, background: 'var(--color-bg)', borderBottom: '3px solid var(--color-primary-dark)' }}>
        <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <button onClick={onBack} className="btn-back" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
            <ArrowLeft size={20} /> Volver al Inicio
          </button>
          <div className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/multilogo2 (1).png" alt="Logo" className="nav-logo-img" style={{ maxHeight: '50px', objectFit: 'contain', margin: 0 }} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="propietarios-hero bg-blue with-grid" style={{ padding: '100px 0 80px', position: 'relative', overflow: 'hidden', borderBottom: '4px solid var(--color-primary-dark)' }}>
        <div className="dec-star-4 orange" style={{ top: '12%', right: '10%', transform: 'scale(1.2)', position: 'absolute' }}></div>
        <div className="dec-circle" style={{ bottom: '-40px', left: '-40px', width: '160px', height: '160px', background: 'var(--color-pink)', opacity: 0.9, borderRadius: '50%', position: 'absolute', border: '3px solid var(--color-primary-dark)' }}></div>
        
        <div className="container" style={{ maxWidth: '950px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge-modern" style={{ background: 'var(--color-secondary)', color: 'var(--color-primary-dark)', marginBottom: '20px' }}>PROPUESTA DE COLABORACIÓN</div>
            <h1 style={{ fontSize: '4rem', marginBottom: '20px', lineHeight: 1.1, color: 'var(--color-primary-dark)' }}>
              Llevemos el <span style={{ color: 'var(--color-accent)' }}>Método Tomatis®</span> a tu provincia
            </h1>
            <p style={{ fontSize: '1.35rem', color: 'var(--color-primary-dark)', marginBottom: '0px', fontWeight: 700, maxWidth: '800px', margin: '0 auto' }}>
              Colabora con nosotros y abre una ventana de neurodesarrollo líder mundial para las familias de tu comunidad local.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Certification seal (no cards) */}
      <section style={{ padding: '80px 0', background: '#ffffff', borderBottom: '4px solid var(--color-primary-dark)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center', justifyContent: 'center' }}>
            {/* Seal Visual */}
            <motion.div 
              initial={{ rotate: -5, scale: 0.95 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              style={{
                position: 'relative',
                width: '280px',
                height: '280px',
                background: 'var(--color-secondary)',
                borderRadius: '50%',
                border: '5px solid var(--color-primary-dark)',
                boxShadow: '10px 10px 0px var(--color-primary-dark)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                textAlign: 'center'
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: '5px',
                  borderRadius: '50%',
                  border: '2px dashed var(--color-primary-dark)'
                }}
              />
              <Award size={64} style={{ color: 'var(--color-primary-dark)', marginBottom: '10px', zIndex: 2 }} />
              <h4 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', margin: '5px 0', zIndex: 2, color: 'var(--color-primary-dark)' }}>
                NIVEL 4
              </h4>
              <p style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-primary-dark)', zIndex: 2, margin: 0 }}>
                Certificación Oficial
              </p>
              <div style={{ position: 'absolute', bottom: '25px', zIndex: 2, background: 'var(--color-accent)', color: 'white', padding: '4px 10px', borderRadius: '20px', fontWeight: 800, fontSize: '0.75rem', border: '2px solid var(--color-primary-dark)' }}>
                ÚNICOS EN RD
              </div>
            </motion.div>

            {/* Content text */}
            <div style={{ flex: '1 1 450px', maxWidth: '600px' }}>
              <div className="badge-modern" style={{ background: 'var(--color-primary)', color: 'var(--color-primary-dark)', marginBottom: '15px' }}>CONFIANZA TOTAL</div>
              <h2 style={{ fontSize: '2.8rem', color: 'var(--color-primary-dark)', marginBottom: '20px' }}>
                Respaldados por la Licencia Original Tomatis®
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--color-primary-dark)', fontWeight: 600, lineHeight: 1.5, marginBottom: '20px' }}>
                Somos la única clínica en República Dominicana con los 4 niveles de certificación del método suizo-francés original. Llevamos equipos con auriculares de conducción ósea y aérea oficiales para garantizar el resultado terapéutico.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700 }}>
                  <CheckCircle size={20} style={{ color: 'var(--color-green)' }} /> Equipamiento importado y calibrado oficialmente
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700 }}>
                  <CheckCircle size={20} style={{ color: 'var(--color-green)' }} /> Especialistas y neuropedagogos autorizados
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Decentralization block */}
      <section className="bg-pink with-grid" style={{ padding: '80px 0', borderBottom: '4px solid var(--color-primary-dark)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div className="badge-modern" style={{ background: 'white', color: 'var(--color-primary-dark)', marginBottom: '20px' }}>NUESTRA MISIÓN</div>
            <h2 style={{ fontSize: '3rem', color: 'var(--color-primary-dark)', marginBottom: '24px' }}>
              La salud infantil no debe detenerse en la capital
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', fontWeight: 600, lineHeight: 1.6, marginBottom: '40px' }}>
              No es justo que solo las familias de Santo Domingo disfruten del beneficio del Método Tomatis®. Queremos que los niños del interior del país reciban exactamente la misma calidad de intervención en neurodesarrollo. Por eso creamos los operativos de traslado.
            </p>
            
            {/* Asymmetric connectors visual */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginTop: '30px' }}>
              <div style={{ background: 'var(--color-secondary)', padding: '12px 24px', borderRadius: '15px', border: '3px solid var(--color-primary-dark)', fontWeight: 800 }}>
                Santo Domingo (Multisensorial RD)
              </div>
              <motion.div 
                animate={{ x: [0, 15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ color: 'var(--color-primary-dark)', fontWeight: 900 }}
              >
                <ArrowRight size={24} />
              </motion.div>
              <div style={{ background: 'white', padding: '12px 24px', borderRadius: '15px', border: '3px solid var(--color-primary-dark)', fontWeight: 800 }}>
                Tu Centro en Provincias
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Interactive timeline steps */}
      <section style={{ padding: '80px 0', background: 'var(--color-bg)', borderBottom: '4px solid var(--color-primary-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <div className="badge-modern" style={{ background: 'var(--color-accent)', color: 'white' }}>SIMPLIFICADO</div>
            <h2 style={{ fontSize: '3rem', color: 'var(--color-primary-dark)' }}>¿Cómo nos organizamos?</h2>
            <p style={{ fontWeight: 600, color: 'var(--color-primary-dark)' }}>Tú facilitas el espacio físico, nosotros nos encargamos del resto.</p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            {/* Interactive Timeline Tabs */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap', position: 'relative', marginBottom: '35px' }}>
              {/* Connector line behind */}
              <div style={{ position: 'absolute', top: '28px', left: '10%', right: '10%', height: '4px', background: 'var(--color-primary-dark)', zIndex: 1, display: 'block' }} className="hide-mobile-flex" />
              
              {steps.map((st, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  style={{
                    flex: '1 1 200px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    zIndex: 2,
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: activeStep === index ? 'var(--color-accent)' : 'white',
                    color: activeStep === index ? 'white' : 'var(--color-primary-dark)',
                    border: '4px solid var(--color-primary-dark)',
                    boxShadow: activeStep === index ? '2px 2px 0px var(--color-primary-dark)' : '4px 4px 0px var(--color-primary-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    transform: activeStep === index ? 'scale(1.1) translate(2px, 2px)' : 'scale(1)'
                  }}>
                    {st.icon}
                  </div>
                  <span style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontWeight: 900, 
                    color: 'var(--color-primary-dark)',
                    fontSize: '1.1rem',
                    textDecoration: activeStep === index ? 'underline' : 'none'
                  }}>
                    {st.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Step Content Card Container (not repetitive grid!) */}
            <div style={{
              background: '#ffffff',
              border: '4px solid var(--color-primary-dark)',
              borderRadius: '24px',
              padding: '30px',
              boxShadow: '6px 6px 0px var(--color-primary-dark)'
            }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 style={{ fontSize: '2rem', color: 'var(--color-primary-dark)', marginBottom: '15px' }}>
                    {steps[activeStep].title}
                  </h3>
                  <p style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
                    {steps[activeStep].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Past Events Highlights - Interactive map/pinboard */}
      <section style={{ padding: '80px 0', background: '#ffffff', borderBottom: '4px solid var(--color-primary-dark)', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="badge-modern" style={{ background: 'var(--color-secondary)', color: 'var(--color-primary-dark)' }}>HISTORIAL</div>
            <h2 style={{ fontSize: '3rem', color: 'var(--color-primary-dark)' }}>Pasadillas y Operativos Realizados</h2>
            <p style={{ fontWeight: 600, color: 'var(--color-primary-dark)' }}>Selecciona una provincia para ver el impacto clínico de nuestra visita.</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', maxWidth: '950px', margin: '0 auto', alignItems: 'stretch' }}>
            {/* Interactive Selectors (Buttons arranged like tags) */}
            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
              {Object.keys(cities).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveCity(key)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    border: '3px solid var(--color-primary-dark)',
                    background: activeCity === key ? cities[key].color : 'transparent',
                    color: 'var(--color-primary-dark)',
                    fontWeight: 900,
                    fontSize: '1.15rem',
                    textAlign: 'left',
                    boxShadow: activeCity === key ? '2px 2px 0px var(--color-primary-dark)' : '5px 5px 0px var(--color-primary-dark)',
                    transform: activeCity === key ? 'translate(3px, 3px)' : 'translate(0px, 0px)',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={20} />
                    {cities[key].name}
                  </span>
                  <ArrowRight size={18} />
                </button>
              ))}
            </div>

            {/* Spotlight Details Area (Styled like a Polaroid tag, very visual) */}
            <div style={{ flex: '1 2 450px', display: 'flex' }}>
              <div style={{
                flex: 1,
                border: '4px solid var(--color-primary-dark)',
                borderRadius: '24px',
                background: 'var(--color-bg)',
                padding: '40px 30px',
                boxShadow: '8px 8px 0px var(--color-primary-dark)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '280px'
              }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCity}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{
                      display: 'inline-block',
                      background: 'var(--color-primary-dark)',
                      color: '#ffffff',
                      padding: '4px 12px',
                      borderRadius: '10px',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      marginBottom: '15px'
                    }}>
                      OPERATIVO COMPLETADO
                    </div>
                    <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary-dark)', marginBottom: '15px' }}>
                      {cities[activeCity].name}
                    </h3>
                    <p style={{ fontSize: '1.15rem', color: 'var(--color-primary-dark)', fontWeight: 500, lineHeight: 1.5, marginBottom: '25px' }}>
                      {cities[activeCity].desc}
                    </p>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'white',
                      border: '3px solid var(--color-primary-dark)',
                      padding: '10px 18px',
                      borderRadius: '12px',
                      fontWeight: 900,
                      color: 'var(--color-accent)'
                    }}>
                      <Star size={18} fill="var(--color-accent)" stroke="none" />
                      {cities[activeCity].stat}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Benefits in Alternating Zig-Zag (no cards) */}
      <section className="bg-pink with-grid" style={{ padding: '80px 0', borderBottom: '4px solid var(--color-primary-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="badge-modern" style={{ background: 'white', color: 'var(--color-primary-dark)' }}>PROPUESTA DE VALOR</div>
            <h2 style={{ fontSize: '3rem', color: 'var(--color-primary-dark)' }}>¿Qué gana tu centro en la alianza?</h2>
            <p style={{ fontWeight: 600, color: 'var(--color-primary-dark)' }}>Un intercambio simbiótico para sumar valor a tu comunidad local.</p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '50px' }}>
            {[
              {
                num: "01",
                title: "Prestigio de Marca Oficial",
                desc: "Posiciona tu espacio local como el centro pionero y único canalizador de la terapia auditiva original Tomatis® en tu provincia.",
                color: "var(--color-primary)",
                isLeft: true
              },
              {
                num: "02",
                title: "Atracción de Nuevas Familias",
                desc: "Atrae familias locales interesadas en la marca Multisensorial y Tomatis® a tus instalaciones, abriendo la puerta a que contraten tus propios servicios permanentes.",
                color: "var(--color-secondary)",
                isLeft: false
              },
              {
                num: "03",
                title: "Impacto en Desarrollo Social",
                desc: "Ofrece a niños con autismo, retraso del habla, TDAH y dificultades de aprendizaje un estándar de terapia internacional sin tener que viajar.",
                color: "var(--color-green)",
                isLeft: true
              },
              {
                num: "04",
                title: "Enriquecimiento Profesional",
                desc: "Trabaja mano a mano con el equipo neuropedagógico y clínico líder de Multisensorial RD, enriqueciendo los procesos de tu propio personal.",
                color: "var(--color-accent)",
                isLeft: false
              }
            ].map((ben, idx) => (
              <div 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  flexDirection: ben.isLeft ? 'row' : 'row-reverse', 
                  flexWrap: 'wrap',
                  alignItems: 'center', 
                  gap: '30px',
                  justifyContent: 'space-between'
                }}
              >
                {/* Big Number Circle */}
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: ben.color,
                  border: '4px solid var(--color-primary-dark)',
                  boxShadow: '5px 5px 0px var(--color-primary-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  color: 'var(--color-primary-dark)',
                  fontWeight: 900
                }}>
                  {ben.num}
                </div>

                {/* Content Block */}
                <div style={{ flex: '1 1 300px', maxWidth: '600px' }}>
                  <h3 style={{ fontSize: '2rem', color: 'var(--color-primary-dark)', marginBottom: '10px' }}>
                    {ben.title}
                  </h3>
                  <p style={{ fontSize: '1.15rem', color: 'var(--color-primary-dark)', fontWeight: 600, lineHeight: 1.5, margin: 0 }}>
                    {ben.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Form in Split Panel layout */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '950px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'stretch' }}>
            
            {/* Left Column: What's Next Checklist (no cards) */}
            <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="badge-modern" style={{ background: 'var(--color-primary)', color: 'var(--color-primary-dark)', alignSelf: 'flex-start' }}>PROCESO</div>
              <h2 style={{ fontSize: '3rem', color: 'var(--color-primary-dark)', marginBottom: '20px' }}>
                ¿Listo para colaborar?
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--color-primary-dark)', fontWeight: 600, marginBottom: '30px' }}>
                Completa el formulario y nos encargamos de todo el proceso técnico.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ 
                    width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-secondary)', 
                    border: '2px solid var(--color-primary-dark)', display: 'flex', alignItems: 'center', 
                    justifyContent: 'center', fontWeight: 900, flexShrink: 0
                  }}>1</div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Recibimos tus datos</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-primary-dark)', fontWeight: 500 }}>Revisamos las dimensiones y ubicación de tu centro.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ 
                    width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-pink)', 
                    border: '2px solid var(--color-primary-dark)', display: 'flex', alignItems: 'center', 
                    justifyContent: 'center', fontWeight: 900, flexShrink: 0
                  }}>2</div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Videollamada corta</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-primary-dark)', fontWeight: 500 }}>Agendamos una breve reunión de 15 minutos para conversar y aclarar dudas.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ 
                    width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-primary)', 
                    border: '2px solid var(--color-primary-dark)', display: 'flex', alignItems: 'center', 
                    justifyContent: 'center', fontWeight: 900, flexShrink: 0
                  }}>3</div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Planificamos logística</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-primary-dark)', fontWeight: 500 }}>Fijamos fechas y organizamos el operativo de traslado.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form with gorgeous layout */}
            <div style={{ flex: '1 2 450px' }}>
              <div style={{
                background: 'white',
                border: '4px solid var(--color-primary-dark)',
                borderRadius: '30px',
                padding: '35px',
                boxShadow: '8px 8px 0px var(--color-primary-dark)'
              }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/Tm96BaO9R0trKrHvpTXv"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '24px', minHeight: '650px' }}
                  id="inline-Tm96BaO9R0trKrHvpTXv" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Colaboracion"
                  data-height="650"
                  data-layout-iframe-id="inline-Tm96BaO9R0trKrHvpTXv"
                  data-form-id="Tm96BaO9R0trKrHvpTXv"
                  title="Formulario de Colaboración"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onBack} />
    </div>
  );
};

export default PropietariosPage;
