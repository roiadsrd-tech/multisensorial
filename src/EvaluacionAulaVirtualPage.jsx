import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, RectangleGoggles, Sparkles, Monitor, Users, Eye, HelpCircle, ChevronDown, ChevronUp, Star, ShieldCheck, HeartHandshake } from 'lucide-react';
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
      <section className="service-content-section bg-cream with-grid" style={{ padding: '80px 0', borderTop: '2px dashed var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="badge-modern" style={{ background: 'var(--color-accent)', color: 'white', display: 'inline-block', marginBottom: '12px' }}>
              NUESTRAS 4 PRUEBAS EN VR
            </div>
            <h2 style={{ fontSize: '2.8rem', color: 'var(--color-primary-dark)', fontWeight: 900 }}>
              Las 4 Pruebas de Evaluación en Realidad Virtual
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', maxWidth: '650px', margin: '8px auto 0' }}>
              Evaluaciones estandarizadas en entornos 3D inmersivos adaptadas a cada perfil de edad y etapa del neurodesarrollo.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              {
                num: "01",
                title: "Aula Virtual (Nesplora Aula)",
                badge: "Niños y Adolescentes (6 a 16 años)",
                desc: "Sumerge al estudiante en un aula de clases 3D con profesor y compañeros reales para evaluar atención sostenida, impulsividad y distracción ante estímulos del entorno.",
                color: "var(--color-primary-light)",
                icon: <RectangleGoggles size={24} color="var(--color-primary-dark)" />
              },
              {
                num: "02",
                title: "Aquarius (Nesplora Aquarium)",
                badge: "Jóvenes y Adultos (16+ años)",
                desc: "Entorno acuático inmersivo diseñado para evaluar foco sostenido, flexibilidad cognitiva y memoria de trabajo sin la sobrecarga ni el estrés de pruebas tradicionales.",
                color: "var(--color-pink)",
                icon: <Sparkles size={24} color="var(--color-primary-dark)" />
              },
              {
                num: "03",
                title: "Ice Cream Suite (Heladería VR)",
                badge: "Etapas Tempranas y Preescolar",
                desc: "Ambiente lúdico y estimulante en 3D para evaluar funciones ejecutivas iniciales, atención selectiva y planificación en niños pequeños.",
                color: "var(--color-secondary)",
                icon: <Star size={24} color="var(--color-primary-dark)" />
              },
              {
                num: "04",
                title: "VR Drive Suite (Conducción Virtual)",
                badge: "Control Ejecutivo y Motor",
                desc: "Simulador interactivo para medir tiempos de reacción en milisegundos, inhibición de respuesta motora y consistencia atencional bajo demandas continuas.",
                color: "#C6F6D5",
                icon: <Monitor size={24} color="var(--color-primary-dark)" />
              }
            ].map((test, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, boxShadow: '8px 8px 0px var(--color-primary-dark)' }}
                style={{
                  background: 'white',
                  borderRadius: '24px',
                  padding: '28px 24px',
                  border: '3px solid var(--color-primary-dark)',
                  boxShadow: '4px 4px 0px var(--color-primary-dark)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: test.color,
                      border: '2px solid var(--color-primary-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {test.icon}
                    </div>
                    <span style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--color-primary-dark)', opacity: 0.25 }}>
                      {test.num}
                    </span>
                  </div>

                  <span style={{
                    display: 'inline-block',
                    background: test.color,
                    border: '1.5px solid var(--color-primary-dark)',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: 'var(--color-primary-dark)',
                    marginBottom: '12px'
                  }}>
                    {test.badge}
                  </span>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--color-primary-dark)', marginBottom: '10px' }}>
                    {test.title}
                  </h3>

                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.55, margin: 0 }}>
                    {test.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
