import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Baby, Sparkles, Star, Trophy, Activity, Award, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import ServiceFooterExtras from './ServiceFooterExtras';
import Footer from './Footer';
import './ServicesPages.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const MotorTimeline = () => {
  const [activeAge, setActiveAge] = useState(2); // index 2: 9 meses

  const milestones = [
    {
      age: "3m",
      title: "Control Cefálico (3 Meses)",
      desc: "El bebé logra levantar la cabeza y el pecho cuando está acostado boca abajo, apoyándose en los antebrazos.",
      exercise: "✓ Tiempo boca abajo (Tummy Time) con juguetes brillantes al frente.\n✓ Rodamientos asistidos suaves de lado a lado.",
      svgColor: "var(--color-primary)"
    },
    {
      age: "6m",
      title: "Sedestación (6 Meses)",
      desc: "Comienza a sentarse de forma independiente apoyando las manos hacia adelante (posición de trípode).",
      exercise: "✓ Sentarlo con apoyo de almohadas en forma de U.\n✓ Alcanzar sonajeros estirando los brazos desde sentado.",
      svgColor: "var(--color-accent)"
    },
    {
      age: "9m",
      title: "Gateo y Arrastre (9 Meses)",
      desc: "Desplazamiento autónomo en cuatro puntos. El gateo conecta e integra ambos hemisferios cerebrales.",
      exercise: "✓ Colocar rodillos de espuma bajo el abdomen para practicar el balanceo.\n✓ Crear pistas de obstáculos suaves con cojines.",
      svgColor: "var(--color-pink)"
    },
    {
      age: "12m",
      title: "Bipedestación (12 Meses)",
      desc: "Logra ponerse de pie apoyándose en muebles y da sus primeros pasos laterales agarrado.",
      exercise: "✓ Colocar juguetes en mesas bajas para motivarlo a ponerse de pie.\n✓ Caminar empujando carritos pesados o andadores estables.",
      svgColor: "var(--color-green)"
    },
    {
      age: "18m+",
      title: "Coordinación Compleja (18+ Meses)",
      desc: "Camina con soltura, corre, se agacha a recoger objetos sin caerse y sube escalones de la mano.",
      exercise: "✓ Caminar sobre líneas pintadas en el suelo (equilibrio).\n✓ Lanzar y patear pelotas grandes de espuma.",
      svgColor: "var(--color-secondary)"
    }
  ];

  return (
    <div className="milestone-timeline-wrapper">
      <div style={{ textAlign: 'center' }}>
        <span className="badge-modern" style={{ background: milestones[activeAge].svgColor, color: activeAge === 0 || activeAge === 2 || activeAge === 4 ? 'var(--color-primary-dark)' : 'white' }}>
          Hito: {milestones[activeAge].age}
        </span>
        <h4 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginTop: '8px' }}>
          {milestones[activeAge].title}
        </h4>
      </div>

      {/* Code generated physics-like mockup visual */}
      <div className="fisiot-milestone-art">
        <svg viewBox="0 0 200 100" width="100%" height="100%">
          {/* Mat ground */}
          <line x1="10" y1="85" x2="190" y2="85" stroke="var(--color-primary-dark)" strokeWidth="4" />
          
          {/* Swings/Gym elements */}
          <circle cx="100" cy="25" r="8" fill="var(--color-accent)" stroke="var(--color-primary-dark)" strokeWidth="2" />
          <line x1="100" y1="33" x2="100" y2="70" stroke="var(--color-primary-dark)" strokeWidth="2" strokeDasharray="3,3" />
          <rect x="85" y="70" width="30" height="8" rx="3" fill="var(--color-secondary)" stroke="var(--color-primary-dark)" strokeWidth="2" />

          {/* Child representation (changing positions based on age) */}
          <g>
            {activeAge === 0 && (
              /* Lying down tummy time */
              <g transform="translate(40, 15)">
                <ellipse cx="60" cy="65" rx="20" ry="10" fill="white" stroke="var(--color-primary-dark)" strokeWidth="3" />
                <circle cx="75" cy="50" r="10" fill="white" stroke="var(--color-primary-dark)" strokeWidth="3" />
                <path d="M 45,65 Q 40,75 35,70" stroke="var(--color-primary-dark)" strokeWidth="3" fill="none" />
              </g>
            )}
            {activeAge === 1 && (
              /* Sitting */
              <g transform="translate(50, 15)">
                <ellipse cx="50" cy="55" rx="12" ry="18" fill="white" stroke="var(--color-primary-dark)" strokeWidth="3" />
                <circle cx="50" cy="30" r="10" fill="white" stroke="var(--color-primary-dark)" strokeWidth="3" />
                <path d="M 40,65 Q 50,75 60,65" stroke="var(--color-primary-dark)" strokeWidth="3" fill="none" />
              </g>
            )}
            {activeAge === 2 && (
              /* Crawling */
              <g transform="translate(45, 15)">
                <ellipse cx="50" cy="55" rx="22" ry="12" fill="white" stroke="var(--color-primary-dark)" strokeWidth="3" />
                <circle cx="72" cy="40" r="10" fill="white" stroke="var(--color-primary-dark)" strokeWidth="3" />
                <line x1="38" y1="65" x2="32" y2="78" stroke="var(--color-primary-dark)" strokeWidth="4" />
                <line x1="62" y1="65" x2="68" y2="78" stroke="var(--color-primary-dark)" strokeWidth="4" />
              </g>
            )}
            {activeAge === 3 && (
              /* Standing */
              <g transform="translate(40, 0)">
                <rect x="55" y="30" width="18" height="35" rx="5" fill="white" stroke="var(--color-primary-dark)" strokeWidth="3" />
                <circle cx="64" cy="18" r="9" fill="white" stroke="var(--color-primary-dark)" strokeWidth="3" />
                <line x1="58" y1="65" x2="58" y2="82" stroke="var(--color-primary-dark)" strokeWidth="4.5" />
                <line x1="70" y1="65" x2="70" y2="82" stroke="var(--color-primary-dark)" strokeWidth="4.5" />
              </g>
            )}
            {activeAge === 4 && (
              /* Running/jumping */
              <g transform="translate(40, 0)">
                <rect x="55" y="25" width="18" height="35" rx="5" fill="white" stroke="var(--color-primary-dark)" strokeWidth="3" transform="rotate(10 64 42)" />
                <circle cx="68" cy="13" r="9" fill="white" stroke="var(--color-primary-dark)" strokeWidth="3" />
                <line x1="56" y1="60" x2="48" y2="76" stroke="var(--color-primary-dark)" strokeWidth="4" />
                <line x1="68" y1="60" x2="78" y2="74" stroke="var(--color-primary-dark)" strokeWidth="4" />
              </g>
            )}
          </g>
        </svg>
      </div>

      <div style={{ padding: '15px', background: '#fcfcfc', border: '2px solid var(--color-primary-dark)', borderRadius: '20px' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '8px' }}>
          {milestones[activeAge].desc}
        </p>
        <div style={{ whiteSpace: 'pre-line', fontSize: '0.8rem', color: 'var(--color-primary-dark)', fontWeight: 800, borderTop: '2px dashed var(--color-bg)', paddingTop: '8px' }}>
          {milestones[activeAge].exercise}
        </div>
      </div>

      <input 
        type="range" 
        min="0" 
        max="4" 
        value={activeAge}
        onChange={(e) => setActiveAge(parseInt(e.target.value))}
        className="fisiot-slider-range"
      />

      <div className="milestones-ticks-row">
        {milestones.map((m, idx) => (
          <button
            key={idx}
            onClick={() => setActiveAge(idx)}
            className={`milestone-tick-btn ${activeAge === idx ? 'active' : ''}`}
          >
            <div className="milestone-tick-circle"></div>
            <span>{m.age}</span>
          </button>
        ))}
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

const FisioterapiaPage = ({ onBack, onBook, onNavigateService }) => {
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
        {/* Floating background Activity (Right side, large) */}
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
          <Activity size={460} strokeWidth={0.8} />
        </motion.div>

        {/* Floating background Activity (Left side, medium, offset) */}
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
          <Activity size={300} strokeWidth={0.8} />
        </motion.div>

        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge-modern">Movimiento y Coordinación</div>
            <h1 style={{ fontSize: '3.8rem', marginBottom: '20px' }}>
              Fisioterapia <span style={{ color: 'var(--color-accent)' }}>Pediátrica</span>
            </h1>
            <p style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '30px' }}>
              Desarrollamos el tono muscular, el equilibrio, la fuerza y la coordinación motriz de tu pequeño a través de terapias dinámicas y divertidas.
            </p>
            <button onClick={onBook} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
              Agendar Evaluación Fisioterapéutica
            </button>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="service-content-section">
        <div className="container">
          <div className="interactive-container-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>El movimiento abre el camino a la cognición</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '15px', color: 'var(--color-text-muted)' }}>
                En la infancia, el desarrollo motor está íntimamente ligado al aprendizaje. Un gateo coordinado estimula el cuerpo calloso cerebral, mejorando la lectoescritura posterior. La estabilidad del tronco permite que el niño permanezca sentado atendiendo al maestro sin cansancio.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>
                Nuestras terapeutas físicas utilizan la estimulación vestibular (columpios, rampas) y propioceptiva (piscinas de pelotas, rodillos) para afinar la postura, el tono muscular y corregir pisadas incorrectas de forma lúdica.
              </p>
            </motion.div>
            
            <div style={{ position: 'relative', width: '100%', borderRadius: '40px', overflow: 'hidden', border: '5px solid var(--color-primary-dark)', boxShadow: '8px 8px 0px var(--color-secondary)' }}>
              <img src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=85" alt="Sala de fisioterapia pediátrica" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool */}
      <section className="service-interactive-section">
        <div className="container">
          <div className="interactive-container-grid">
            <MotorTimeline />
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="badge-modern" style={{ background: 'var(--color-pink)' }}>HITOS DE CRECIMIENTO</div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Línea de Hitos y Estimulación Motora</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '15px' }}>
                Monitorear los hitos motores desde bebés permite detectar demoras leves de desarrollo que pueden solucionarse rápidamente con estimulación oportuna y ejercicios físicos enfocados.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-primary-dark)', fontWeight: 700 }}>
                Prueba en el control interactivo: desliza la barra de edades para ver cómo progresa el desarrollo motor del niño y lee los ejercicios que puedes practicar con él en el hogar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="service-content-section" style={{ background: '#FAF9DC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '3rem' }}>Servicios y Especialidades</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>Mejorando la destreza corporal de tu hijo de forma segura.</p>
          </div>
          
          <div className="benefits-grid-premium">
            {[
              { icon: <Activity />, title: "Estimulación Temprana", desc: "Acompañamiento psicomotor para bebés para guiar volteos, sentado y gateo armonioso.", color: "var(--color-primary)" },
              { icon: <Baby />, title: "Reeducación Postural", desc: "Corrección de desviaciones de columna leves y fortalecimiento del cinturón del tronco (core).", color: "var(--color-accent)" },
              { icon: <Star />, title: "Integración Vestibular", desc: "Ejercicios en columpios y rampas para resolver problemas de vértigo, caídas y torpeza al correr.", color: "var(--color-pink)" },
              { icon: <Trophy />, title: "Fortalecimiento de Tono Muscular", desc: "Ejercicios terapéuticos para niños con hipotonía (debilidad de agarre y postura).", color: "var(--color-green)" }
            ].map((b, i) => (
              <div key={i} className="benefit-card-premium">
                <div className="benefit-icon-wrapper" style={{ background: b.color }}>
                  {b.icon}
                </div>
                <div className="benefit-content">
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="service-content-section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '3rem' }}>Preguntas Frecuentes</h2>
          </div>
          
          <FAQItem 
            question="¿A partir de qué edad se puede iniciar fisioterapia?" 
            answer="Se puede iniciar desde los primeros meses de nacido (2-3 meses) con masajes y estimulación de hitos motores iniciales." 
          />
          <FAQItem 
            question="¿Cómo ayuda la fisioterapia en la atención escolar?" 
            answer="Un niño con bajo tono muscular en el abdomen y espalda se cansa rápidamente al estar sentado en su silla. Esto causa que empiece a moverse constantemente, agitarse o recostarse sobre el pupitre, lo cual disminuye su atención en clase." 
          />
          <FAQItem 
            question="¿Qué calzado recomiendan para corregir la marcha?" 
            answer="Recomendamos calzados flexibles y planos en el hogar para favorecer la propiocepción del pie. Si la marcha hacia adentro o el pie plano persiste pasados los 3 años, la especialista realizará un diagnóstico completo de marcha." 
          />
        </div>
      </section>

      {/* Service Footer Extras */}
      <ServiceFooterExtras serviceId="fisioterapia" onBack={onBack} onNavigateService={onNavigateService} />

      {/* Footer */}
      <Footer onNavigate={onBack} onOpenBooking={onBook} />
    </div>
  );
};

export default FisioterapiaPage;
