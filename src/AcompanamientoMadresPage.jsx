import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Heart, Compass, Sparkles, MessageCircle, HeartHandshake, Smile, HelpCircle, ChevronDown, ChevronUp, Star, ShieldCheck } from 'lucide-react';
import ServiceFooterExtras from './ServiceFooterExtras';
import Footer from './Footer';
import './ServicesPages.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const SelfCareCompass = () => {
  const [selectedSegment, setSelectedSegment] = useState('tiempo');
  const [rotation, setRotation] = useState(0);

  const segments = {
    tiempo: {
      title: "Tiempo Propio (Autocuidado)",
      desc: "Apartar aunque sean 15 minutos diarios para ti misma, sin hijos ni pendientes. Leer, meditar o tomar un café caliente sin interrupciones es salud mental.",
      color: "var(--color-accent)",
      angle: 0
    },
    culpa: {
      title: "Gestión de la Culpa",
      desc: "Reconoce que no existe la madre perfecta y que cometer errores en la crianza es normal. Ser compasiva contigo misma beneficia la relación con tu hijo.",
      color: "var(--color-primary-dark)",
      angle: 90
    },
    limites: {
      title: "Límites Asertivos",
      desc: "Aprender a decir 'no' a demandas externas y pedidos familiares que sobrecarguen tu agenda. Resguardar tu energía es prioritario para cuidar bien.",
      color: "var(--color-pink)",
      angle: 180
    },
    red: {
      title: "Red de Apoyo activa",
      desc: "Pedir ayuda no es señal de debilidad. Delegar tareas en tu pareja, familiares o amigas de confianza disminuye el cansancio acumulado.",
      color: "var(--color-green)",
      angle: 270
    }
  };

  const selectSegment = (key) => {
    setSelectedSegment(key);
    setRotation(-segments[key].angle);
  };

  return (
    <div className="compass-widget-wrapper">
      <motion.div 
        className="compass-dial-outer"
        animate={{ rotate: rotation }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="compass-center-spinner">
          <Heart size={24} style={{ color: 'var(--color-accent)' }} />
        </div>
        <div className="compass-needle"></div>

        {/* Clicking areas/text */}
        <div 
          onClick={() => selectSegment('tiempo')} 
          className="compass-segment-btn" 
          style={{ top: 0, left: 0, width: '100%', height: '50%', background: 'rgba(255, 134, 81, 0.1)' }}
        >
          <span className="compass-segment-text" style={{ top: '30px', left: '50%', transform: 'translateX(-50%)' }}>Autocuidado</span>
        </div>
        <div 
          onClick={() => selectSegment('culpa')} 
          className="compass-segment-btn" 
          style={{ top: '50%', left: '50%', width: '50%', height: '50%', background: 'rgba(35, 71, 239, 0.05)' }}
        >
          <span className="compass-segment-text" style={{ bottom: '30px', right: '30px', transform: 'rotate(-90deg)' }}>Culpa</span>
        </div>
        <div 
          onClick={() => selectSegment('limites')} 
          className="compass-segment-btn" 
          style={{ top: '50%', left: 0, width: '50%', height: '50%', background: 'rgba(255, 183, 213, 0.1)' }}
        >
          <span className="compass-segment-text" style={{ bottom: '30px', left: '30px', transform: 'rotate(-180deg)' }}>Límites</span>
        </div>
        <div 
          onClick={() => selectSegment('red')} 
          className="compass-segment-btn" 
          style={{ top: 0, left: '50%', width: '50%', height: '50%', background: 'rgba(18, 179, 122, 0.1)' }}
        >
          <span className="compass-segment-text" style={{ top: '30px', right: '30px', transform: 'rotate(-270deg)' }}>Red</span>
        </div>
      </motion.div>

      <div style={{ textAlign: 'center', marginTop: '25px', minHeight: '110px' }}>
        <h4 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '8px' }}>
          {segments[selectedSegment].title}
        </h4>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.4, maxWidth: '320px', margin: '0 auto' }}>
          {segments[selectedSegment].desc}
        </p>
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '15px' }}>
        {Object.keys(segments).map((key) => (
          <button
            key={key}
            onClick={() => selectSegment(key)}
            className="stimulus-tab"
            style={{
              background: selectedSegment === key ? segments[key].color : 'white',
              color: selectedSegment === key && key === 'culpa' ? 'white' : 'var(--color-primary-dark)',
              borderColor: 'var(--color-primary-dark)'
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

const AcompanamientoMadresPage = ({ onBack, onBook, onNavigateService }) => {
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
        {/* Floating background Heart (Right side, large) */}
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
          <Heart size={460} strokeWidth={0.8} />
        </motion.div>

        {/* Floating background Heart (Left side, medium, offset) */}
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
          <Heart size={300} strokeWidth={0.8} />
        </motion.div>

        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge-modern">Cuidar a la que Cuida</div>
            <h1 style={{ fontSize: '3.8rem', marginBottom: '20px' }}>
              Acompañamiento <span style={{ color: 'var(--color-accent)' }}>a Madres</span>
            </h1>
            <p style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '30px' }}>
              Un espacio de contención, asesoría y apoyo psicológico exclusivo para ti, transitando juntas los desafíos de la crianza de tu hijo.
            </p>
            <button onClick={onBook} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
              Conectar con una Especialista
            </button>
          </motion.div>
        </div>
      </section>

      {/* Open Letter */}
      <section className="service-content-section" style={{ background: '#FAF9DC' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ background: 'white', border: '4px solid var(--color-primary-dark)', borderRadius: '30px', padding: '40px', boxShadow: '8px 8px 0px var(--color-pink)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <Heart size={40} style={{ color: 'var(--color-accent)' }} />
            </div>
            <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '20px', color: 'var(--color-primary-dark)' }}>Una Carta Abierta Para Ti</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--color-text-muted)', marginBottom: '15px' }}>
              Sabemos el peso emocional y físico que conlleva acompañar el desarrollo de un niño, especialmente cuando enfrenta desafíos de aprendizaje, atención o conducta. Es común que, en el afán de ser el soporte de tu pequeño, te coloques al final de tu lista de prioridades.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--color-text-muted)', marginBottom: '15px' }}>
              **En Multisensorial creemos firmemente en que no puedes verter agua de una jarra vacía.** Para sostener el crecimiento de tu hijo con paciencia y amor, necesitas un espacio donde tú seas sostenida y escuchada, sin juicios de valor sobre tu crianza.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--color-primary-dark)', fontWeight: 800, textAlign: 'right' }}>
              — El Equipo de Multisensorial
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tool */}
      <section className="service-interactive-section">
        <div className="container">
          <div className="interactive-container-grid">
            <SelfCareCompass />
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="badge-modern" style={{ background: 'var(--color-secondary)' }}>AUTOCUIDADO DIARIO</div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Brújula de Contención y Calma</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '15px' }}>
                En las sesiones de acompañamiento psicológico a madres, reestructuramos hábitos y diseñamos un plan de autocuidado viable que encaje dentro de tus rutinas familiares cotidianas.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-primary-dark)', fontWeight: 700 }}>
                Prueba en la brújula interactiva: haz clic sobre los diferentes segmentos de la rueda para orientar la aguja y leer un consejo terapéutico práctico enfocado en tu bienestar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formats of Support */}
      <section className="service-content-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '3rem' }}>Formatos de Acompañamiento</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>Espacios pensados para adaptarse a tus tiempos y necesidades.</p>
          </div>
          
          <div className="benefits-grid-premium">
            {[
              { icon: <Smile />, title: "Consultas Individuales", desc: "Sesiones privadas de asesoría clínica de crianza y contención emocional personalizadas.", color: "var(--color-primary)" },
              { icon: <MessageCircle />, title: "Círculos de Madres (Apoyo Grupal)", desc: "Espacios de contención grupal con otras madres que transitan desafíos similares de neurodiversidad.", color: "var(--color-accent)" },
              { icon: <HeartHandshake />, title: "Talleres Psicoeducativos", desc: "Sesiones formativas y prácticas sobre control de estrés y comunicación afectiva en la familia.", color: "var(--color-pink)" },
              { icon: <ShieldCheck />, title: "Soporte y Orientación Escolar", desc: "Te preparamos con pautas y herramientas para las reuniones y planes curriculares con el colegio.", color: "var(--color-green)" }
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
      <section className="service-content-section" style={{ background: '#FAF9DC' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '3rem' }}>Preguntas Frecuentes</h2>
          </div>
          
          <FAQItem 
            question="¿Es lo mismo que terapia familiar?" 
            answer="No exactamente. El foco de este servicio es exclusivamente tu bienestar, tu salud mental y tus recursos emocionales como madre. Es un espacio para ti, no para resolver conflictos de pareja o dinámicas completas del hogar." 
          />
          <FAQItem 
            question="¿Qué frecuencia tienen las sesiones?" 
            answer="Recomendamos iniciar de manera quincenal para permitirte poner en práctica las herramientas en casa sin que interfiera de manera abrumadora con tu rutina semanal." 
          />
          <FAQItem 
            question="¿Cómo puedo unirme a los círculos de apoyo?" 
            answer="Abrimos convocatorias periódicas para los círculos de apoyo a madres. Al agendar tu sesión inicial, la terapeuta te indicará los grupos activos que coincidan con la edad y perfil neurocognitivo de tu hijo." 
          />
        </div>
      </section>

      {/* Service Footer Extras */}
      <ServiceFooterExtras serviceId="acompanamiento-madres" onBack={onBack} onNavigateService={onNavigateService} />

      {/* Footer */}
      <Footer onNavigate={onBack} onOpenBooking={onBook} />
    </div>
  );
};

export default AcompanamientoMadresPage;
