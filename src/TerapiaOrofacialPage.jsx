import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Smile, Sparkles, Star, Speech, Award, ShieldCheck, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import ServiceFooterExtras from './ServiceFooterExtras';
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
      desc: "Fortalece la movilidad y tono de la lengua. Ideal para corregir la pronunciación de la 'R', 'S' y degluciones atípicas.",
      color: "var(--color-pink)",
      exercise: "✓ Chasquidos de lengua contra el paladar durante 10 repeticiones.\n✓ Sacar la lengua e intentar tocar la punta de la nariz."
    },
    labios: {
      title: "Ejercicios Labiales (Labios y Mejillas)",
      desc: "Corrige el sellado labial débil (respiradores bucales) y la flacidez de las mejillas, mejorando la pronunciación.",
      color: "var(--color-accent)",
      exercise: "✓ Lanzar besos ruidosos al aire sosteniendo la postura 5 segundos.\n✓ Inflar las mejillas alternando el aire de izquierda a derecha."
    },
    mandibula: {
      title: "Ejercicios Mandibulares (Músculos Maseteros)",
      desc: "Estimula la fuerza y alineación del maxilar para facilitar una masticación sólida y prevenir babeos involuntarios.",
      color: "var(--color-secondary)",
      exercise: "✓ Realizar movimientos laterales de mandíbula de forma pausada.\n✓ Masticar alimentos de consistencia firme (zanahoria, manzanas)."
    }
  };

  return (
    <div className="muscle-map-wrapper">
      <div style={{ background: '#FAF9DC', padding: '20px', borderRadius: '25px', border: '3px solid var(--color-primary-dark)', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <svg className="facial-interactive-svg" viewBox="0 0 200 200">
          {/* Face outline */}
          <path d="M 50,40 C 20,40 10,70 10,100 C 10,160 50,190 100,190 C 150,190 190,160 190,100 C 190,70 180,40 150,40 Z" fill="none" stroke="var(--color-primary-dark)" strokeWidth="4" />
          
          {/* Eyes */}
          <circle cx="65" cy="80" r="10" fill="var(--color-primary-dark)" />
          <circle cx="135" cy="80" r="10" fill="var(--color-primary-dark)" />
          
          {/* Nose */}
          <path d="M 100,85 L 95,115 L 105,115 Z" fill="none" stroke="var(--color-primary-dark)" strokeWidth="3" />

          {/* Interactive Node: Lips */}
          <g className="facial-hotspot-node" onClick={() => setActiveZone('labios')}>
            <circle cx="100" cy="140" r="18" fill={activeZone === 'labios' ? 'var(--color-accent)' : 'white'} stroke="var(--color-primary-dark)" strokeWidth="3" className="facial-hotspot-circle" />
            <path d="M 90,140 Q 100,150 110,140" fill="none" stroke="var(--color-primary-dark)" strokeWidth="2.5" />
          </g>

          {/* Interactive Node: Tongue */}
          <g className="facial-hotspot-node" onClick={() => setActiveZone('lengua')}>
            <circle cx="100" cy="110" r="12" fill={activeZone === 'lengua' ? 'var(--color-pink)' : 'white'} stroke="var(--color-primary-dark)" strokeWidth="2.5" className="facial-hotspot-circle" />
            <circle cx="100" cy="110" r="4" fill="var(--color-primary-dark)" />
          </g>

          {/* Interactive Node: Jaw */}
          <g className="facial-hotspot-node" onClick={() => setActiveZone('mandibula')}>
            <circle cx="100" cy="175" r="12" fill={activeZone === 'mandibula' ? 'var(--color-secondary)' : 'white'} stroke="var(--color-primary-dark)" strokeWidth="2.5" className="facial-hotspot-circle" />
            <path d="M 85,175 L 115,175" fill="none" stroke="var(--color-primary-dark)" strokeWidth="2" />
          </g>
        </svg>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px', minHeight: '110px' }}>
        <h4 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '6px' }}>
          {zones[activeZone].title}
        </h4>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '8px' }}>
          {zones[activeZone].desc}
        </p>
        <div style={{ whiteSpace: 'pre-line', fontSize: '0.8rem', background: '#f5f5f5', padding: '10px', borderRadius: '12px', border: '1.5px dashed var(--color-primary-dark)', color: 'var(--color-primary-dark)', fontWeight: 800 }}>
          {zones[activeZone].exercise}
        </div>
      </div>

      <div className="orofacial-zones-list">
        {Object.keys(zones).map((key) => (
          <button
            key={key}
            onClick={() => setActiveZone(key)}
            className={`orofacial-zone-chip ${activeZone === key ? 'active' : ''}`}
            style={{
              background: activeZone === key ? zones[key].color : 'white',
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

const TerapiaOrofacialPage = ({ onBack, onBook, onNavigateService }) => {
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
        {/* Floating background Speech (Right side, large) */}
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
          <Speech size={460} strokeWidth={0.8} />
        </motion.div>

        {/* Floating background Speech (Left side, medium, offset) */}
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
          <Speech size={300} strokeWidth={0.8} />
        </motion.div>

        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge-modern">Músculos y Lenguaje</div>
            <h1 style={{ fontSize: '3.8rem', marginBottom: '20px' }}>
              Terapia <span style={{ color: 'var(--color-accent)' }}>Orofacial Miofuncional</span>
            </h1>
            <p style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '30px' }}>
              Fortalecemos la musculatura de la boca, lengua y mejillas para asegurar una masticación sólida, una deglución sana y una excelente articulación del habla.
            </p>
            <button onClick={onBook} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
              Reservar Evaluación Orofacial
            </button>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="service-content-section">
        <div className="container">
          <div className="interactive-container-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>La base muscular del habla y la deglución</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '15px', color: 'var(--color-text-muted)' }}>
                Muchos problemas en la pronunciación (por ejemplo, dificultad para decir la 'R' o 'L') o el babeo constante no son cognitivos, sino puramente de tono muscular en la zona de la cara y la boca. La terapia orofacial entrena de manera lúdica estos músculos.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>
                A través de divertidos masajes, vibraciones y juegos de soplo, nuestros terapeutas especializados tonifican el sistema estomatognático del niño, facilitando la respiración nasal fisiológica adecuada y una deglución madura.
              </p>
            </motion.div>
            
            <div style={{ position: 'relative', width: '100%', borderRadius: '40px', overflow: 'hidden', border: '5px solid var(--color-primary-dark)', boxShadow: '8px 8px 0px var(--color-secondary)' }}>
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=85" alt="Masaje terapia orofacial" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool */}
      <section className="service-interactive-section">
        <div className="container">
          <div className="interactive-container-grid">
            <MuscleMap />
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="badge-modern" style={{ background: 'var(--color-pink)' }}>EJERCICIOS CASEROS</div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Guía de Ejercicios Miofuncionales</h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '15px' }}>
                La constancia en casa es clave. Realizar 3 a 5 minutos diarios de praxias bucofonatorias recomendadas por la especialista acelera notablemente la corrección del tono de la lengua y los labios.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-primary-dark)', fontWeight: 700 }}>
                Prueba en nuestro mapa facial interactivo: haz clic sobre los diferentes nodos (Labios, Lengua, Mandíbula) para revelar un ejercicio práctico y didáctico ilustrado.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="service-content-section" style={{ background: '#FAF9DC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '3rem' }}>Áreas de Tratamiento</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>Solucionamos problemas estéticos, respiratorios y de fonación.</p>
          </div>
          
          <div className="benefits-grid-premium">
            {[
              { icon: <Speech />, title: "Dislalias y Articulación", desc: "Corrección de la postura bucal al pronunciar fonemas complejos como 'R', 'D', 'T' y 'S'.", color: "var(--color-primary)" },
              { icon: <Smile />, title: "Respiración Bucal Crónica", desc: "Entrenamiento para fortalecer el sellado de los labios y fomentar la respiración nasal.", color: "var(--color-accent)" },
              { icon: <Star />, title: "Masticación y Deglución Atípica", desc: "Ayuda para los niños que tragan empujando la lengua contra los dientes (mordida abierta).", color: "var(--color-pink)" },
              { icon: <Award />, title: "Control de Babeo (Sialorrea)", desc: "Ejercicios de deglución espontánea y tonificación de los músculos de la mandíbula.", color: "var(--color-green)" }
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
            question="¿Cuánto dura el tratamiento de terapia orofacial?" 
            answer="Varía según la disfunción muscular. Casos sencillos de dislalias (pronunciación de la 'R') toman alrededor de 3 a 4 meses, mientras que degluciones atípicas complejas requieren de 6 meses o más en conjunto con ortodoncia." 
          />
          <FAQItem 
            question="¿Afecta la masticación de alimentos duros al habla?" 
            answer="Totalmente. Los niños criados con dietas blandas (papillas prolongadas) no desarrollan fuerza mandibular suficiente en los maseteros, lo que causa flacidez labial y repercute en una peor pronunciación." 
          />
          <FAQItem 
            question="¿Qué es una deglución atípica?" 
            answer="Es cuando al tragar saliva o alimentos, la lengua empuja hacia adelante o los lados en vez de subir al paladar. Esto deforma los dientes y requiere reeducación miofuncional para evitar que el tratamiento dental fracase." 
          />
        </div>
      </section>

      {/* Service Footer Extras */}
      <ServiceFooterExtras serviceId="terapia-orofacial" onBack={onBack} onNavigateService={onNavigateService} />

      {/* Footer */}
      <footer style={{ padding: '60px 0', background: 'white', textAlign: 'center', borderTop: '2px dashed var(--color-border)' }}>
        <img src="/multilogo2 (1).png" alt="Logo" className="nav-logo-img" style={{ margin: '0 auto 20px' }} />
        <p>© 2026 Multisensorial RD. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default TerapiaOrofacialPage;
