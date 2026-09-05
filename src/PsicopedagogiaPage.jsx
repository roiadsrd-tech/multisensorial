import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Puzzle, Sparkles, BookOpen, PenTool, CheckSquare, Award, HelpCircle, ChevronDown, ChevronUp, Star, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import ServiceFooterExtras from './ServiceFooterExtras';
import Footer from './Footer';
import './ServicesPages.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const ScaffoldingRoad = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '1',
      title: "Mapeo de Barreras",
      desc: "Evaluación psicométrica y observación clínica. Encontramos la raíz de la dificultad escolar del niño, ya sea dislexia, discalculia o fallos de atención.",
      color: "var(--color-primary)"
    },
    {
      num: '2',
      title: "Adaptación del Andamiaje",
      desc: "Diseño de plantillas visuales, esquemas matemáticos y adaptaciones curriculares personalizadas para que el niño procese los temas del colegio sin frustrarse.",
      color: "var(--color-accent)"
    },
    {
      num: '3',
      title: "Consolidación de Hábitos",
      desc: "Entrenamiento en el centro mediante dinámicas lúdicas y juegos cognitivos. Desarrollamos perseverancia y técnicas para organizar cuadernos y tareas.",
      color: "var(--color-pink)"
    },
    {
      num: '4',
      title: "Autonomía e Integración",
      desc: "El estudiante adquiere las competencias necesarias para estudiar solo en casa y seguir el ritmo del salón escolar de forma independiente.",
      color: "var(--color-green)"
    }
  ];

  return (
    <div className="scaffolding-road-wrapper">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className={`scaffolding-step-card ${activeStep === idx ? 'active' : ''}`}
          onClick={() => setActiveStep(idx)}
        >
          <div 
            className="scaffolding-number-circle"
            style={{ 
              background: activeStep === idx ? step.color : 'white',
              color: activeStep === idx ? 'white' : 'var(--color-primary-dark)'
            }}
          >
            {step.num}
          </div>
          <div className="scaffolding-text">
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        </div>
      ))}
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

const PsicopedagogiaPage = ({ onBack, onBook, onNavigateService }) => {
  return (
    <div className="service-detail-page">
      {/* Hero */}
      <section className="service-hero bg-blue with-grid" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Floating background Puzzle (Right side, large) */}
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
          <Puzzle size={460} strokeWidth={0.8} />
        </motion.div>

        {/* Floating background Puzzle (Left side, medium, offset) */}
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
          <Puzzle size={300} strokeWidth={0.8} />
        </motion.div>

        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge-modern">Estrategias Escolares</div>
            <h1 style={{ fontSize: '3.8rem', marginBottom: '20px' }}>
              Psicopedagogía <span style={{ color: 'var(--color-accent)' }}>Especializada</span>
            </h1>
            <p style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '30px' }}>
              Ayudamos a superar las barreras de lectura, escritura y cálculo, transformando la frustración escolar en autoconfianza.
            </p>
            <button onClick={onBook} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
              Agendar Evaluación Psicopedagógica
            </button>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="service-content-section">
        <div className="container">
          <div className="interactive-container-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Superando las Dificultades de Aprendizaje</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '15px', color: 'var(--color-text-muted)' }}>
                Muchos niños inteligentes y capaces se frustran en la escuela porque sus procesos de lectura o lógica matemática no encajan con la enseñanza tradicional. La psicopedagogía se enfoca en corregir y compensar dificultades específicas como la Dislexia, la Discalculia y el Trastorno del Aprendizaje No Verbal.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>
                Utilizamos dinámicas multisensoriales que asocian el juego y las texturas con los conceptos abstractos, logrando que el niño capte las bases que antes le costaban tanto esfuerzo comprender en el aula.
              </p>
            </motion.div>
            
            <div style={{ position: 'relative', width: '100%', borderRadius: '40px', overflow: 'hidden', border: '5px solid var(--color-primary-dark)', boxShadow: '8px 8px 0px var(--color-secondary)' }}>
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=85" alt="Psicopedagogía" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool */}
      <section className="service-interactive-section">
        <div className="container">
          <div className="interactive-container-grid">
            <ScaffoldingRoad />
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="badge-modern" style={{ background: 'var(--color-pink)' }}>ANDAMIAJE COGNITIVO</div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ruta del Aprendizaje Escalonado</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '15px' }}>
                En consulta psicopedagógica no saturamos al niño con planas o sumas repetitivas. Aplicamos el concepto de "andamiaje": le brindamos apoyos temporales adaptados (apoyo visual, auditivo y manipulativo) y los retiramos progresivamente a medida que gana seguridad.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-primary-dark)', fontWeight: 700 }}>
                Haz clic en cada paso del camino para comprender cómo estructuramos el andamiaje psicopedagógico en Multisensorial.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas of Support */}
      <section className="service-content-section" style={{ background: '#FAF9DC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '3rem' }}>Servicios de Apoyo Específico</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>Herramientas personalizadas para resolver las necesidades del aula.</p>
          </div>
          
          <div className="benefits-grid-premium">
            {[
              { icon: <BookOpen />, title: "Lectoescritura (Dislexia)", desc: "Entrenamiento visual-auditivo para superar problemas de confusión de letras y velocidad lectora.", color: "var(--color-primary)" },
              { icon: <PenTool />, title: "Disgrafía y Motricidad Fina", desc: "Ejercicios lúdicos de trazo y agarre para mejorar la legibilidad y soltura al escribir.", color: "var(--color-accent)" },
              { icon: <Compass />, title: "Lógica y Razonamiento (Discalculia)", desc: "Comprensión del sentido numérico y de las operaciones a través de materiales manipulativos.", color: "var(--color-pink)" },
              { icon: <CheckSquare />, title: "Métodos de Organización", desc: "Técnicas adaptadas para organizar mochilas, planificar proyectos escolares y tomar apuntes.", color: "var(--color-green)" }
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
            question="¿A qué edad se recomienda una evaluación psicopedagógica?" 
            answer="Se puede realizar a partir de los 4 o 5 años en etapa preescolar para detectar alertas tempranas de lectoescritura, aunque las demandas aumentan formalmente en primaria (6-7 años)." 
          />
          <FAQItem 
            question="¿Cómo coordinan con el colegio de mi hijo?" 
            answer="Nuestros especialistas redactan informes psicopedagógicos detallados para el departamento de orientación del colegio y sugerimos adaptaciones de aula viables para los maestros." 
          />
          <FAQItem 
            question="¿Es lo mismo que una tutoría escolar (reforzamiento)?" 
            answer="No. Una tutoría o reforzamiento escolar explica nuevamente el tema escolar. La psicopedagogía diagnostica y corrige el proceso cognitivo que impide al niño entender el tema, habilitando habilidades básicas de razonamiento y atención." 
          />
        </div>
      </section>

      {/* Service Footer Extras */}
      <ServiceFooterExtras serviceId="psicopedagogia" onBack={onBack} onNavigateService={onNavigateService} />

      {/* Footer */}
      <Footer onNavigate={onBack} onOpenBooking={onBook} />
    </div>
  );
};

export default PsicopedagogiaPage;
