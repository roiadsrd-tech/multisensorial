import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BrainCircuit, Sparkles, Activity, ShieldAlert, Zap, HelpCircle, ChevronDown, ChevronUp, Star, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';
import ServiceFooterExtras from './ServiceFooterExtras';
import Footer from './Footer';
import './ServicesPages.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const BrainwaveMonitor = () => {
  const [activeMode, setActiveMode] = useState('focus');

  const modes = {
    focus: {
      title: "Ondas Beta (Enfoque y Atención)",
      desc: "Ondas de frecuencia rápida (12-30 Hz). Indican procesamiento cognitivo activo, resolución de problemas y atención enfocada al exterior.",
      color: "#FF8651",
      path: "M 0 50 Q 15 20 30 50 T 60 50 T 90 50 T 120 50 T 150 50 T 180 50 T 210 50 T 240 50 T 270 50 T 300 50",
      speed: "1.2s"
    },
    relax: {
      title: "Ondas Alpha (Relajación Alerta)",
      desc: "Ondas de frecuencia media (8-12 Hz). Aparecen en estados de descanso mental consciente, calma y meditación tranquila.",
      color: "#A6DFFD",
      path: "M 0 50 Q 25 10 50 50 T 100 50 T 150 50 T 200 50 T 250 50 T 300 50",
      speed: "2s"
    },
    sleep: {
      title: "Ondas Theta / Delta (Sueño y Meditación Profunda)",
      desc: "Ondas de frecuencia muy lenta (0.5-8 Hz). Dominan durante el sueño profundo y estados de relajación física completa.",
      color: "#FFB7D5",
      path: "M 0 50 Q 40 -10 80 50 T 160 50 T 240 50 T 320 50",
      speed: "3.5s"
    }
  };

  return (
    <div className="wave-monitor-wrapper">
      <div className="wave-screen-grid"></div>
      
      <div className="eeg-status-indicator">
        <div className="eeg-status-dot"></div>
        <span>MONITOR EEG EN VIVO - {activeMode.toUpperCase()}</span>
      </div>

      <div className="wave-display-canvas">
        <svg viewBox="0 0 300 100" width="100%" height="80px" style={{ overflow: 'visible' }}>
          <AnimatePresence mode="wait">
            <motion.path
              key={activeMode}
              d={modes[activeMode].path}
              fill="none"
              stroke={modes[activeMode].color}
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </svg>
      </div>

      <div style={{ textAlign: 'center', color: 'white', minHeight: '60px', zIndex: 3, marginBottom: '10px' }}>
        <h4 style={{ fontSize: '1.1rem', color: modes[activeMode].color, marginBottom: '4px' }}>
          {modes[activeMode].title}
        </h4>
        <p style={{ fontSize: '0.75rem', opacity: 0.8, maxWidth: '280px', margin: '0 auto' }}>
          {modes[activeMode].desc}
        </p>
      </div>

      <div className="wave-controls-panel">
        {Object.keys(modes).map((key) => (
          <button
            key={key}
            onClick={() => setActiveMode(key)}
            className={`wave-mode-btn ${activeMode === key ? 'active' : ''}`}
            style={{
              borderColor: modes[key].color,
              background: activeMode === key ? modes[key].color : 'transparent',
              color: activeMode === key ? '#111' : 'white'
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

const NeurofeedbackPage = ({ onBack, onBook, onNavigateService }) => {
  return (
    <div className="service-detail-page">
      {/* Hero */}
      <section className="service-hero bg-blue with-grid" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Floating background BrainCircuit (Right side, large) */}
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
          <BrainCircuit size={460} strokeWidth={0.8} />
        </motion.div>

        {/* Floating background BrainCircuit (Left side, medium, offset) */}
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
          <BrainCircuit size={300} strokeWidth={0.8} />
        </motion.div>

        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge-modern">Entrenamiento Cerebral</div>
            <h1 style={{ fontSize: '3.8rem', marginBottom: '20px' }}>
              Neurofeedback <span style={{ color: 'var(--color-accent)' }}>Clínico</span>
            </h1>
            <p style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '30px' }}>
              Entrenamos los patrones cerebrales de tu hijo de forma natural, mejorando la concentración, la autorregulación y el sueño sin medicamentos.
            </p>
            <button onClick={onBook} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
              Agendar Sesión Inicial
            </button>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="service-content-section">
        <div className="container">
          <div className="interactive-container-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>¿Qué es el Neurofeedback?</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '15px', color: 'var(--color-text-muted)' }}>
                El Neurofeedback es una tecnología basada en electroencefalografía (EEG) que permite observar la actividad eléctrica cerebral en tiempo real. Mediante un sistema de recompensa visual (un juego o un video), el cerebro del niño aprende a autorregularse.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>
                Si el cerebro del niño empieza a distraerse (aumentan las ondas lentas), el video en pantalla se pausa o pierde brillo. Cuando el cerebro vuelve a enfocarse (ondas Beta), el video corre con fluidez. Con la práctica repetida, este enfoque se vuelve un hábito automático e inconsciente.
              </p>
            </motion.div>
            
            <div style={{ position: 'relative', width: '100%', borderRadius: '40px', overflow: 'hidden', border: '5px solid var(--color-primary-dark)', boxShadow: '8px 8px 0px var(--color-secondary)' }}>
              <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=85" alt="Neurofeedback sesión" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool */}
      <section className="service-interactive-section">
        <div className="container">
          <div className="interactive-container-grid">
            <BrainwaveMonitor />
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="badge-modern" style={{ background: 'var(--color-pink)' }}>BIOFEEDBACK EEG</div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Simulador de Ondas Cerebrales</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '15px' }}>
                En una sesión real, colocamos sensores indoloros en el cuero cabelludo para medir la frecuencia de las ondas. El software filtra el ruido externo y premia al cerebro cuando alcanza la frecuencia idónea según el tratamiento.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-primary-dark)', fontWeight: 700 }}>
                Prueba en el osciloscopio interactivo: selecciona entre los modos "Focus", "Relax" y "Sleep" para ver cómo cambia la frecuencia y amplitud de las señales neuronales medidas por el EEG.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="service-content-section" style={{ background: '#FAF9DC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '3rem' }}>Beneficios Clínicos Comprobados</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>Entrenamiento neuro-tecnológico seguro y sin efectos secundarios.</p>
          </div>
          
          <div className="benefits-grid-premium">
            {[
              { icon: <Activity />, title: "Reducción de Impulsividad", desc: "El entrenamiento enseña al lóbulo frontal a controlar reacciones inmediatas.", color: "var(--color-accent)" },
              { icon: <Sparkles />, title: "Incremento de la Atención Sostenida", desc: "Facilita mantenerse enfocado en tareas rutinarias o académicas por periodos más largos.", color: "var(--color-pink)" },
              { icon: <Zap />, title: "Mejora de la Calidad del Sueño", desc: "Regula los ciclos circadianos y el paso adecuado de ondas rápidas a ondas lentas nocturnas.", color: "var(--color-green)" },
              { icon: <ShieldCheck />, title: "Sin Medicación (No Invasivo)", desc: "Los sensores solo leen la actividad cerebral, nunca envían electricidad ni fármacos al cuerpo.", color: "var(--color-primary)" }
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
            question="¿Los sensores transmiten descargas eléctricas al cerebro?" 
            answer="Absolutamente no. Los sensores colocados son pasivos; funcionan como micrófonos que escuchan el sonido del latido eléctrico cerebral. Es una técnica 100% segura y no invasiva." 
          />
          <FAQItem 
            question="¿Cuántas sesiones se necesitan para ver resultados duraderos?" 
            answer="Los cambios iniciales se notan en las primeras 10 sesiones, pero para lograr una consolidación a largo plazo que permanezca en el tiempo se recomienda realizar un protocolo promedio de 20 a 30 sesiones." 
          />
          <FAQItem 
            question="¿Para qué condiciones está indicado?" 
            answer="Es ampliamente utilizado y avalado científicamente para el tratamiento del TDAH, problemas de ansiedad escolar, insomnio, migrañas recurrentes y dificultades severas de autorregulación emocional en el espectro autista." 
          />
        </div>
      </section>

      {/* Service Footer Extras */}
      <ServiceFooterExtras serviceId="neurofeedback" onBack={onBack} onNavigateService={onNavigateService} />

      {/* Footer */}
      <Footer onNavigate={onBack} onOpenBooking={onBook} />
    </div>
  );
};

export default NeurofeedbackPage;
