import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Users, Sparkles, Smile, MessageSquareCode, Award, ShieldCheck, HelpCircle, ChevronDown, ChevronUp, Star, HeartHandshake } from 'lucide-react';
import ServiceFooterExtras from './ServiceFooterExtras';
import Footer from './Footer';
import './ServicesPages.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const ReinforcementSimulator = () => {
  const [activeScenario, setActiveScenario] = useState('tablet');

  const scenarios = {
    tablet: {
      label: "Berrinche por retirar la Tableta",
      reactive: {
        text: "Gritar al niño y quitarle el aparato a la fuerza de inmediato.",
        result: "Aumenta el berrinche por frustración y se resiente el vínculo de confianza.",
        mood: "☹ (Frustración alta)"
      },
      positive: {
        text: "Usar un temporizador visual de 5 minutos de anticipación y ofrecer una recompensa alternativa al finalizar.",
        result: "El niño asimila la transición con calma y autodisciplina. Se premia su obediencia.",
        mood: "☺ (Calma y regulación)"
      }
    },
    vestirse: {
      label: "Resistencia a Vestirse por las Mañanas",
      reactive: {
        text: "Vestir al niño apresuradamente entre reproches para no llegar tarde.",
        result: "Inicia el día con estrés y se promueve una actitud dependiente y de oposición.",
        mood: "☹ (Tensión matutina)"
      },
      positive: {
        text: "Darle a elegir entre dos opciones de ropa previamente seleccionadas usando un tablero de rutinas visual.",
        result: "Se fomenta su sentido de control y autonomía, agilizando la rutina del hogar.",
        mood: "☺ (Autonomía cooperativa)"
      }
    },
    compartir: {
      label: "Dificultad para Compartir Juguetes",
      reactive: {
        text: "Obligarlo a entregar el juguete de inmediato diciendo 'tienes que ser bueno'.",
        result: "Siente que compartir es un castigo, aumentando su resistencia en futuros juegos.",
        mood: "☹ (Sensación de pérdida)"
      },
      positive: {
        text: "Estructurar turnos de 3 minutos usando un reloj de arena y elogiar efusivamente cuando entregue el turno.",
        result: "El niño aprende que el juguete siempre regresa, asociando el compartir con emociones positivas.",
        mood: "☺ (Habilidad social lograda)"
      }
    }
  };

  return (
    <div className="behavioral-simulator-wrapper">
      <div className="aba-scenarios-selection">
        <h5 style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '8px', color: 'var(--color-primary-dark)' }}>Escenarios Cotidianos</h5>
        {Object.keys(scenarios).map((key) => (
          <button
            key={key}
            onClick={() => setActiveScenario(key)}
            className={`aba-scenario-card ${activeScenario === key ? 'active' : ''}`}
            style={{
              borderColor: 'var(--color-primary-dark)'
            }}
          >
            {scenarios[key].label}
          </button>
        ))}
      </div>

      <div className="aba-outcomes-grid">
        <div className="aba-outcome-card reactive">
          <div className="aba-outcome-badge">Respuesta Reactiva</div>
          <p style={{ fontSize: '0.8rem', fontWeight: 800, marginTop: '5px' }}>
            {scenarios[activeScenario].reactive.text}
          </p>
          <p style={{ fontSize: '0.75rem', color: '#555', borderTop: '1px dashed rgba(0,0,0,0.1)', paddingTop: '6px' }}>
            <strong>Resultado:</strong> {scenarios[activeScenario].reactive.result}
          </p>
          <div className="aba-kid-reaction-face" style={{ color: 'var(--color-accent)' }}>
            {scenarios[activeScenario].reactive.mood}
          </div>
        </div>

        <div className="aba-outcome-card positive">
          <div className="aba-outcome-badge">Refuerzo Positivo (ABA)</div>
          <p style={{ fontSize: '0.8rem', fontWeight: 800, marginTop: '5px' }}>
            {scenarios[activeScenario].positive.text}
          </p>
          <p style={{ fontSize: '0.75rem', color: '#555', borderTop: '1px dashed rgba(0,0,0,0.1)', paddingTop: '6px' }}>
            <strong>Resultado:</strong> {scenarios[activeScenario].positive.result}
          </p>
          <div className="aba-kid-reaction-face" style={{ color: 'var(--color-green)' }}>
            {scenarios[activeScenario].positive.mood}
          </div>
        </div>
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

const TerapiaConductualPage = ({ onBack, onBook, onNavigateService }) => {
  return (
    <div className="service-detail-page">
      {/* Hero */}
      <section className="service-hero bg-blue with-grid" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Floating background Smile (Right side, large) */}
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
          <Smile size={460} strokeWidth={0.8} />
        </motion.div>

        {/* Floating background Smile (Left side, medium, offset) */}
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
          <Smile size={300} strokeWidth={0.8} />
        </motion.div>

        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge-modern">Estrategias de Conducta</div>
            <h1 style={{ fontSize: '3.8rem', marginBottom: '20px' }}>
              Terapia Conductual <span style={{ color: 'var(--color-accent)' }}>Respetuosa y ABA</span>
            </h1>
            <p style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '30px' }}>
              Guiamos a tu hijo para que desarrolle habilidades sociales, aprenda a manejar la frustración y reduzca conductas disruptivas mediante refuerzo positivo.
            </p>
            <button onClick={onBook} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
              Agendar Asesoría de Conducta
            </button>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="service-content-section">
        <div className="container">
          <div className="interactive-container-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Análisis Conductual Aplicado (ABA) moderno</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '15px', color: 'var(--color-text-muted)' }}>
                Las conductas disruptivas (berrinches severos, agresividad, oposicionismo) suelen ser canales ineficaces que usa el niño para comunicar una necesidad insatisfecha o una sobrecarga emocional. En consulta conductual nos enfocamos en descifrar esa función conductual.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>
                Bajo los principios de la terapia conductual respetuosa y el Análisis Conductual Aplicado (ABA), reemplazamos las malas conductas enseñándole al niño una habilidad alternativa socialmente adecuada. No castigamos; enseñamos y reforzamos los comportamientos positivos.
              </p>
            </motion.div>
            
            <div style={{ position: 'relative', width: '100%', borderRadius: '40px', overflow: 'hidden', border: '5px solid var(--color-primary-dark)', boxShadow: '8px 8px 0px var(--color-secondary)' }}>
              <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=85" alt="Terapia conductual" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool */}
      <section className="service-interactive-section">
        <div className="container">
          <div className="interactive-container-grid">
            <ReinforcementSimulator />
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="badge-modern" style={{ background: 'var(--color-pink)' }}>SIMULADOR CONDUCTUAL</div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Simulador de Refuerzo Positivo</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '15px' }}>
                El cambio conductual requiere consistencia de reacción por parte de los padres en el hogar. Reaccionar de forma impulsiva o permisiva perpetúa la frustración y debilita la confianza mutua.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-primary-dark)', fontWeight: 700 }}>
                Prueba en nuestro simulador didáctico: selecciona una situación cotidiana en el panel de la izquierda para contrastar el resultado de una respuesta reactiva tradicional frente al abordaje de refuerzo positivo (ABA).
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="service-content-section" style={{ background: '#FAF9DC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '3rem' }}>Pilares de la Terapia</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>Desarrollando habilidades de por vida de manera respetuosa.</p>
          </div>
          
          <div className="benefits-grid-premium">
            {[
              { icon: <Smile />, title: "Rutinas Visuales en Casa", desc: "Diseño de tableros con dibujos para que los niños anticipen y completen sus tareas sin reclamos.", color: "var(--color-primary)" },
              { icon: <Users />, title: "Grupos de Habilidades Sociales", desc: "Talleres grupales dirigidos para aprender a conversar, compartir, ganar y perder en equipo.", color: "var(--color-accent)" },
              { icon: <Star />, title: "Manejo de la Frustración", desc: "Enseñamos técnicas corporales y palabras clave que el niño puede usar al sentirse abrumado.", color: "var(--color-pink)" },
              { icon: <Award />, title: "Sistemas de Puntos (Economía de Fichas)", desc: "Creación de contratos visuales de recompensa que motivan de forma divertida hábitos positivos.", color: "var(--color-green)" }
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
            question="¿La terapia conductual moderna usa castigos?" 
            answer="Definitivamente no. El castigo físico o el aislamiento humillante solo generan miedo y resentimiento temporal. La terapia moderna se basa en retirar privilegios de forma anticipada y, principalmente, en premiar de forma constante el comportamiento alternativo correcto." 
          />
          <FAQItem 
            question="¿Cuánto dura cada intervención conductual?" 
            answer="Depende del caso. Hábitos de rutina escolar toman 3 meses de seguimiento, mientras que planes completos de modificación de conducta en el espectro autista o TDAH severo se extienden en planes continuos de 6 meses en adelante." 
          />
          <FAQItem 
            question="¿Cómo aplico estas pautas si mi pareja y yo no nos ponemos de acuerdo?" 
            answer="Es fundamental la alineación. Al estructurar la intervención conductual, diseñamos pautas sencillas y unificadas por escrito para que todos los cuidadores del niño (madre, padre, abuela o nana) reaccionen exactamente de la misma manera." 
          />
        </div>
      </section>

      {/* Service Footer Extras */}
      <ServiceFooterExtras serviceId="terapia-conductual" onBack={onBack} onNavigateService={onNavigateService} />

      {/* Footer */}
      <Footer onNavigate={onBack} onOpenBooking={onBook} />
    </div>
  );
};

export default TerapiaConductualPage;
