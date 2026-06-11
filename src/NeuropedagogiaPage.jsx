import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BrainCircuit, Sparkles, Lightbulb, Zap, Star, ShieldCheck, HeartHandshake, HelpCircle, ChevronDown, ChevronUp, Eye, Headphones, Activity } from 'lucide-react';
import ServiceFooterExtras from './ServiceFooterExtras';
import './ServicesPages.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const SynapseMap = () => {
  const [activeStimulus, setActiveStimulus] = useState('visual');

  const stimuli = {
    visual: {
      title: "Estímulo Visual (Lóbulo Occipital)",
      desc: "Luces, colores, mapas mentales, videos y tarjetas didácticas estructuradas. Activa la corteza visual primaria en la parte posterior del cerebro.",
      color: "var(--color-accent)",
      highlightNodes: [1, 2, 6],
      paths: ["M 100 40 Q 80 80 50 110", "M 100 40 Q 120 80 150 110"]
    },
    auditivo: {
      title: "Estímulo Auditivo (Lóbulo Temporal)",
      desc: "Método Tomatis, ritmos, modulación de frecuencias de voz y audiolibros. Activa la corteza auditiva, mejorando la atención verbal.",
      color: "var(--color-primary-dark)",
      highlightNodes: [3, 4, 9],
      paths: ["M 60 70 Q 100 90 140 70", "M 60 70 Q 100 50 140 70"]
    },
    motor: {
      title: "Estímulo Kinestésico (Corteza Motora)",
      desc: "Movimiento corporal, manipulación de bloques, balanceo y juego sensorial físico. Conecta la corteza prefrontal con el cerebelo.",
      color: "var(--color-green)",
      highlightNodes: [5, 7, 8],
      paths: ["M 100 25 L 100 135", "M 40 50 L 160 110"]
    }
  };

  return (
    <div className="synapse-map-wrapper">
      <div style={{ textAlign: 'center', marginBottom: '15px' }}>
        <h4 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)' }}>
          {stimuli[activeStimulus].title}
        </h4>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '4px', minHeight: '40px' }}>
          {stimuli[activeStimulus].desc}
        </p>
      </div>

      <div style={{ background: '#FAF9DC', borderRadius: '25px', padding: '15px', border: '3px solid var(--color-primary-dark)' }}>
        <svg className="synapse-map-svg" viewBox="0 0 200 160">
          {/* Base Brain structure */}
          <path 
            d="M 100,20 C 45,20 25,50 25,80 C 25,110 45,140 85,140 C 92,140 97,135 100,135 C 103,135 108,140 115,140 C 155,140 175,110 175,80 C 175,50 155,20 100,20 Z" 
            fill="none" 
            stroke="var(--color-primary-dark)" 
            strokeWidth="3.5" 
            opacity="0.25"
          />

          {/* Active Synaptic Pathways */}
          <AnimatePresence mode="wait">
            <motion.path
              key={activeStimulus}
              d={stimuli[activeStimulus].paths.join(" ")}
              fill="none"
              stroke={stimuli[activeStimulus].color}
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </AnimatePresence>

          {/* Neutral Synaptic Paths */}
          <path d="M 60 40 L 140 120 M 140 40 L 60 120" fill="none" stroke="var(--color-primary-dark)" strokeWidth="1.5" opacity="0.1" />

          {/* Brain Nodes */}
          {[
            { id: 1, cx: 100, cy: 30, color: 'var(--color-pink)' },
            { id: 2, cx: 60, cy: 50, color: 'var(--color-accent)' },
            { id: 3, cx: 140, cy: 50, color: 'var(--color-primary)' },
            { id: 4, cx: 45, cy: 80, color: 'var(--color-secondary)' },
            { id: 5, cx: 155, cy: 80, color: 'var(--color-green)' },
            { id: 6, cx: 80, cy: 110, color: 'var(--color-pink)' },
            { id: 7, cx: 120, cy: 110, color: 'var(--color-accent)' },
            { id: 8, cx: 100, cy: 75, color: 'var(--color-primary)' },
            { id: 9, cx: 100, cy: 130, color: 'var(--color-green)' }
          ].map((node) => {
            const isHighlighted = stimuli[activeStimulus].highlightNodes.includes(node.id);
            return (
              <g key={node.id}>
                {isHighlighted && (
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r="12"
                    fill="none"
                    stroke={stimuli[activeStimulus].color}
                    strokeWidth="2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                )}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r="6"
                  fill={isHighlighted ? stimuli[activeStimulus].color : 'white'}
                  stroke="var(--color-primary-dark)"
                  strokeWidth="2.5"
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="neuroped-stimulus-bar">
        {Object.keys(stimuli).map((type) => (
          <button
            key={type}
            onClick={() => setActiveStimulus(type)}
            className={`stimulus-tab`}
            style={{
              background: activeStimulus === type ? stimuli[type].color : 'white',
              color: activeStimulus === type ? 'white' : 'var(--color-primary-dark)'
            }}
          >
            {type}
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

const NeuropedagogiaPage = ({ onBack, onBook, onNavigateService }) => {
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
        {/* Floating background Lightbulb (Right side, large) */}
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
          <Lightbulb size={460} strokeWidth={0.8} />
        </motion.div>

        {/* Floating background Lightbulb (Left side, medium, offset) */}
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
          <Lightbulb size={300} strokeWidth={0.8} />
        </motion.div>

        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge-modern">Cerebro y Aprendizaje</div>
            <h1 style={{ fontSize: '3.8rem', marginBottom: '20px' }}>
              Neuropedagogía <span style={{ color: 'var(--color-accent)' }}>Científica</span>
            </h1>
            <p style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '30px' }}>
              Entendemos cómo funciona el cerebro de tu hijo para estructurar un método de aprendizaje que realmente haga clic con él.
            </p>
            <button onClick={onBook} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
              Agendar Evaluación Neurocognitiva
            </button>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="service-content-section">
        <div className="container">
          <div className="interactive-container-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>De la Neurociencia a la Práctica Escolar</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '15px', color: 'var(--color-text-muted)' }}>
                Cada cerebro está cableado de manera única. La neuropedagogía une la pedagogía con la neurociencia para diagnosticar cómo procesa la información tu hijo: ¿Tiene más afinidad visual? ¿Su lóbulo temporal asimila mejor el ritmo auditivo?
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>
                En lugar de forzar al niño a adaptarse a una única metodología escolar rígida, adaptamos las materias de manera multisensorial. Esto reduce la fatiga mental y activa los centros cerebrales del placer de aprender.
              </p>
            </motion.div>
            
            <div style={{ position: 'relative', width: '100%', borderRadius: '40px', overflow: 'hidden', border: '5px solid var(--color-primary-dark)', boxShadow: '8px 8px 0px var(--color-secondary)' }}>
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=85" alt="Neuropedagogía niños" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool */}
      <section className="service-interactive-section">
        <div className="container">
          <div className="interactive-container-grid">
            <SynapseMap />
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="badge-modern" style={{ background: 'var(--color-pink)' }}>NEUROPLASTICIDAD</div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Conexiones Sinápticas y Estímulos</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '15px' }}>
                Cuando combinamos canales de aprendizaje (por ejemplo, escuchar música filtrada y dibujar), generamos nuevas ramificaciones nerviosas y fortalecemos la memoria a largo plazo.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-primary-dark)', fontWeight: 700 }}>
                Prueba en el gráfico interactivo: selecciona un estímulo didáctico y observa cómo se iluminan diferentes partes del circuito neuronal del cerebro de tu hijo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="service-content-section" style={{ background: '#FAF9DC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '3rem' }}>Pilares de nuestra intervención</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>Optimizando las funciones ejecutivas del cerebro infantil.</p>
          </div>
          
          <div className="benefits-grid-premium">
            {[
              { icon: <Eye />, title: "Perfil de Canales de Entrada", desc: "Identificamos con precisión el perfil receptivo de tu hijo (Visual, Auditivo, Kinestésico) para optimizar el estudio.", color: "var(--color-accent)" },
              { icon: <Lightbulb />, title: "Estrategias de Aprendizaje Acelerado", desc: "Diseñamos mapas dinámicos y técnicas que facilitan guardar información con menor esfuerzo.", color: "var(--color-pink)" },
              { icon: <Activity />, title: "Entrenamiento en Funciones Ejecutivas", desc: "Fortalecemos la planificación, la memoria de trabajo y el autocontrol del estudiante.", color: "var(--color-green)" },
              { icon: <Zap />, title: "Neuroestimulación Sensorial", desc: "Activamos canales subcorticales del oído y el equilibrio para mejorar la capacidad de alerta en clase.", color: "var(--color-primary)" }
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
            question="¿Qué diferencia hay entre Pedagogía y Neuropedagogía?" 
            answer="La pedagogía tradicional se enfoca en métodos de enseñanza estándar para grupos. La neuropedagogía analiza primero el cerebro individual del niño, sus limitaciones funcionales y fortalezas de memoria para diseñar una enseñanza a medida basada en ciencia cognitiva." 
          />
          <FAQItem 
            question="¿Es útil para niños con TDAH o autismo?" 
            answer="Sí, es sumamente efectiva. Al comprender los déficits de funciones ejecutivas y de integración sensorial típicos del TDAH o TEA, estructuramos dinámicas adaptadas que reducen la sobrecarga cognitiva y maximizan su foco." 
          />
          <FAQItem 
            question="¿Cuánto tiempo toma ver mejoras?" 
            answer="Por lo general, al cabo de 6 a 8 semanas de intervención constante con nuestras pautas neuropedagógicas personalizadas, las familias y colegios empiezan a reportar mayor autonomía escolar y mejor organización." 
          />
        </div>
      </section>

      {/* Service Footer Extras */}
      <ServiceFooterExtras serviceId="neuropedagogia" onBack={onBack} onNavigateService={onNavigateService} />

      {/* Footer */}
      <footer style={{ padding: '60px 0', background: 'white', textAlign: 'center', borderTop: '2px dashed var(--color-border)' }}>
        <img src="/multilogo2 (1).png" alt="Logo" className="nav-logo-img" style={{ margin: '0 auto 20px' }} />
        <p>© 2026 Multisensorial RD. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default NeuropedagogiaPage;
