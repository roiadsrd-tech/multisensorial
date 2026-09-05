import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Brain, Sparkles, Smile, Star, ShieldCheck, HeartHandshake, HelpCircle, ChevronDown, ChevronUp, Clock, Frown, Compass, Heart } from 'lucide-react';
import ServiceFooterExtras from './ServiceFooterExtras';
import Footer from './Footer';
import './ServicesPages.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const BreathingWidget = () => {
  const [emotion, setEmotion] = useState('calma');
  const [breathingText, setBreathingText] = useState('Inhala...');
  const [scale, setScale] = useState(1);

  const emotions = {
    ansiedad: { label: 'Ansiedad / Miedo', color: 'var(--color-primary)', bg: 'rgba(166, 223, 253, 0.2)', hint: 'Inhalaciones profundas para calmar el sistema nervioso.' },
    enojo: { label: 'Enojo / Frustración', color: 'var(--color-accent)', bg: 'rgba(255, 134, 81, 0.2)', hint: 'Exhalaciones fuertes para liberar tensión acumulada.' },
    tristeza: { label: 'Tristeza / Desanimo', color: 'var(--color-pink)', bg: 'rgba(255, 183, 213, 0.2)', hint: 'Respiración pausada para recobrar el balance emocional.' },
    calma: { label: 'Calma / Paz', color: 'var(--color-green)', bg: 'rgba(18, 179, 122, 0.2)', hint: 'Flujo respiratorio regular para sostener el bienestar.' }
  };

  useEffect(() => {
    let interval;
    let step = 0;
    
    const runBreathingCycle = () => {
      // 4-4-4 cycle
      if (step === 0) {
        setBreathingText('Inhala...');
        setScale(1.6);
        step = 1;
      } else if (step === 1) {
        setBreathingText('Mantén...');
        step = 2;
      } else {
        setBreathingText('Exhala...');
        setScale(1.0);
        step = 0;
      }
    };

    runBreathingCycle();
    interval = setInterval(runBreathingCycle, 3000);

    return () => clearInterval(interval);
  }, [emotion]);

  return (
    <div className="breathing-circle-wrapper">
      <div className="badge-modern" style={{ background: emotions[emotion].color, color: emotion === 'enojo' || emotion === 'calma' ? 'white' : 'var(--color-primary-dark)' }}>
        {emotions[emotion].label}
      </div>
      
      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '20px', textAlign: 'center', maxWidth: '300px' }}>
        {emotions[emotion].hint}
      </p>

      <div className="breathing-circle-outer" style={{ background: emotions[emotion].bg }}>
        <motion.div 
          className="breathing-circle-inner"
          animate={{ scale: scale }}
          transition={{ duration: 3, ease: "easeInOut" }}
          style={{ 
            width: '120px', 
            height: '120px',
            background: emotions[emotion].color,
            color: emotion === 'enojo' || emotion === 'calma' ? 'white' : 'var(--color-primary-dark)'
          }}
        >
          {breathingText}
        </motion.div>
      </div>

      <div className="emotion-buttons-grid">
        {Object.keys(emotions).map((key) => (
          <button
            key={key}
            onClick={() => setEmotion(key)}
            className="emotion-btn"
            style={{
              background: emotion === key ? emotions[key].color : 'white',
              color: emotion === key && (key === 'enojo' || key === 'calma') ? 'white' : 'var(--color-primary-dark)'
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

const PsicologiaPage = ({ onBack, onBook, onNavigateService }) => {
  return (
    <div className="service-detail-page">
      {/* Hero */}
      <section className="service-hero bg-blue with-grid" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Floating background Brain (Right side, large) */}
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
          <Brain size={460} strokeWidth={0.8} />
        </motion.div>

        {/* Floating background Brain (Left side, medium, offset) */}
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
          <Brain size={300} strokeWidth={0.8} />
        </motion.div>

        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge-modern">Terapia de Confianza</div>
            <h1 style={{ fontSize: '3.8rem', marginBottom: '20px' }}>
              Psicología Clínica <span style={{ color: 'var(--color-accent)' }}>Infantil y Familiar</span>
            </h1>
            <p style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '30px' }}>
              Ayudamos a que tu hijo desarrolle resiliencia, aprenda a gestionar sus emociones y crezca con una autoestima fuerte.
            </p>
            <button onClick={onBook} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
              Agendar Primera Sesión
            </button>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="service-content-section">
        <div className="container">
          <div className="interactive-container-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>¿Cómo apoyamos el mundo emocional de tu hijo?</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '15px', color: 'var(--color-text-muted)' }}>
                La terapia infantil en Multisensorial se enfoca en hacer sentir al niño seguro y escuchado. A través del juego, el arte y el diálogo adaptado, nuestros terapeutas clínicos descubren la raíz del comportamiento y la frustración.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>
                No solo trabajamos con el niño: brindamos a los padres herramientas prácticas de contención y límites afectivos, asegurando que los avances del centro se extiendan al hogar de manera armoniosa y duradera.
              </p>
            </motion.div>
            
            <div style={{ position: 'relative', width: '100%', borderRadius: '40px', overflow: 'hidden', border: '5px solid var(--color-primary-dark)', boxShadow: '8px 8px 0px var(--color-secondary)' }}>
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=85" alt="Terapia infantil" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool */}
      <section className="service-interactive-section">
        <div className="container">
          <div className="interactive-container-grid">
            <BreathingWidget />
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="badge-modern" style={{ background: 'var(--color-pink)' }}>HERRAMIENTA CLÍNICA</div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Simulador de Regulación Emocional</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '15px' }}>
                La autorregulación fisiológica es la base para el autocontrol conductual. En consulta enseñamos a los pequeños cómo conectar con su respiración para reducir impulsos o calmar la irritación.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-primary-dark)', fontWeight: 700 }}>
                Prueba con tu hijo: selecciona una emoción en el panel y guíalo a respirar en sintonía con la animación. ¡Es un ejercicio excelente antes de dormir o durante un momento difícil!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="service-content-section" style={{ background: '#FAF9DC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '3rem' }}>Áreas clave de nuestro apoyo</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>Un enfoque completo para el desarrollo integral.</p>
          </div>
          
          <div className="benefits-grid-premium">
            {[
              { icon: <Heart />, title: "Gestión de la Ansiedad y Miedos", desc: "Técnicas estructuradas para ayudar a los niños a entender y aliviar sus temores cotidianos.", color: "var(--color-primary)" },
              { icon: <Smile />, title: "Fortalecimiento de la Autoestima", desc: "Ayudamos a que los pequeños se reconozcan valiosos, capaces y confíen en sus habilidades.", color: "var(--color-accent)" },
              { icon: <Clock />, title: "Manejo de Transiciones y Cambios", desc: "Acompañamiento en mudanzas, cambios escolares, duelos o nuevas dinámicas familiares.", color: "var(--color-pink)" },
              { icon: <ShieldCheck />, title: "Orientación y Crianza para Padres", desc: "Estrategias personalizadas para criar con firmeza cariñosa, evitando el desgaste emocional.", color: "var(--color-green)" }
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
            question="¿Cuánto dura cada sesión de psicología clínica?" 
            answer="Las sesiones individuales tienen una duración aproximada de 45 a 50 minutos. Esto permite captar la atención óptima del niño sin agotarlo." 
          />
          <FAQItem 
            question="¿Es obligatoria la participación de los padres?" 
            answer="Sí, la terapia infantil es sistémica. Realizamos sesiones periódicas de seguimiento exclusivas para padres para alinear estrategias en el hogar." 
          />
          <FAQItem 
            question="¿Cómo sé si mi hijo necesita acudir a un psicólogo?" 
            answer="Algunas señales comunes son cambios abruptos en el comportamiento, problemas persistentes de sueño o alimentación, irritabilidad recurrente, retrocesos en hitos de desarrollo o dificultades severas en el rendimiento académico y social." 
          />
        </div>
      </section>

      {/* Service Footer Extras */}
      <ServiceFooterExtras serviceId="psicologia" onBack={onBack} onNavigateService={onNavigateService} />

      {/* Footer */}
      <Footer onNavigate={onBack} onOpenBooking={onBook} />
    </div>
  );
};

export default PsicologiaPage;
