import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Headphones, BrainCircuit, Waves, Star, CheckCircle, Smartphone, HeartHandshake, Speech, Smile, ExternalLink, Award, Activity } from 'lucide-react';
import ServiceFooterExtras from './ServiceFooterExtras';
import Footer from './Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

const TomatisVisual = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="tomatis-visual-container brain-filtering">
      <div className="filtering-scene">
        {/* Input: Chaos */}
        <div className="sound-input chaotic-spectrum">
          {[...Array(isMobile ? 6 : 10)].map((_, i) => (
            <motion.div
              key={`noise-bar-${i}`}
              className="spectrum-bar noise-bar"
              animate={{ 
                height: [
                  `${Math.random() * (isMobile ? 30 : 50) + (isMobile ? 10 : 15)}px`,
                  `${Math.random() * (isMobile ? 50 : 90) + (isMobile ? 20 : 30)}px`,
                  `${Math.random() * (isMobile ? 20 : 30) + 5}px`,
                  `${Math.random() * (isMobile ? 60 : 100) + (isMobile ? 20 : 30)}px`,
                  `${Math.random() * (isMobile ? 30 : 50) + (isMobile ? 10 : 15)}px`
                ]
              }}
              transition={{ 
                duration: 0.5 + Math.random() * 0.4, 
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: i * 0.04
              }}
              style={{ 
                backgroundColor: i % 2 === 0 ? 'var(--color-accent)' : 'var(--color-pink)' 
              }}
            />
          ))}
        </div>

        {/* The Processor: Brain */}
        <div className="brain-processor">
          <motion.div 
            className="brain-ring outer-ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="brain-ring inner-ring"
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="brain-aura"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <div className="brain-main">
            <BrainCircuit size={isMobile ? 50 : 80} strokeWidth={1.5} />
            <motion.div 
              className="processing-core"
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.9, 1.2, 0.9] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Output: Focus */}
        <div className="sound-output organized-spectrum">
          {[...Array(isMobile ? 6 : 10)].map((_, i) => {
            const delay = i * 0.15;
            return (
              <motion.div
                key={`focus-bar-${i}`}
                className="spectrum-bar focus-bar"
                animate={{ 
                  height: [
                    `${isMobile ? 10 : 15}px`,
                    `${isMobile ? 50 : 85}px`,
                    `${isMobile ? 10 : 15}px`
                  ]
                }}
                transition={{ 
                  duration: 1.6, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delay
                }}
                style={{ 
                  backgroundColor: 'var(--color-primary-dark)' 
                }}
              />
            );
          })}
        </div>
      </div>
      
      <div className="visual-labels">
        <span className="label-chaos">RUIDO</span>
        <span className="label-focus">ENFOQUE</span>
      </div>
      
    </div>
  );
};

const TomatisPage = ({ onBack, onNavigateService }) => {
  return (
    <div className="tomatis-page bg-cream">
      {/* Mini Nav */}
      <nav className="navbar" style={{ position: 'sticky', top: 0 }}>
        <div className="container nav-container">
          <button onClick={onBack} className="btn-back" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
            <ArrowLeft size={20} /> Volver al Inicio
          </button>
          <div className="nav-logo">
            <img src="/multilogo2 (1).png" alt="Logo" className="nav-logo-img" />
          </div>
        </div>
      </nav>

      {/* Hero Detail */}
      <section className="tomatis-hero bg-blue with-grid" style={{ padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
        {/* Floating background Headphones (Right side, large) */}
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
          <Headphones size={460} strokeWidth={0.8} />
        </motion.div>

        {/* Floating background Headphones (Left side, medium, offset) */}
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
          <Headphones size={300} strokeWidth={0.8} />
        </motion.div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="badge-modern">GUÍA PARA PADRES</div>
              <h1 style={{ fontSize: '4rem', marginBottom: '24px', lineHeight: 1.1 }}>
                ¿Qué es el <span style={{ color: 'var(--color-accent)' }}>Método Tomatis</span> y cómo ayuda a mi hijo?
              </h1>
              <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '40px' }}>
                Una explicación sencilla sobre la tecnología que está transformando el aprendizaje y la atención a través del oído.
              </p>

              {/* Video Embed */}
              <motion.div 
                className="video-container-modern"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="video-aspect-ratio">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/Ke_Bf1q4UZ0" 
                    title="Método Tomatis" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="ruta-layout" style={{ alignItems: 'start' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Oír no es lo mismo que <span style={{ color: 'var(--color-primary)' }}>Escuchar</span></h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                Imagina que el oído es como una puerta al cerebro. Podemos "oír" ruidos (la puerta está abierta), pero "escuchar" es la capacidad de procesar esa información sin distraernos ni estresarnos.
              </p>
              <p style={{ fontSize: '1.1rem' }}>
                Muchos niños tienen un oído sano, pero su cerebro no sabe "filtrar" bien lo que escucha. Esto causa que se distraigan fácilmente, les cueste seguir instrucciones o se sientan abrumados.
              </p>
            </motion.div>
            <TomatisVisual />
          </div>
        </div>
      </section>

      {/* Video Explicativo Section (Vertical Video) */}
      <section className="bg-cream with-grid" style={{ padding: '100px 0', borderTop: '2px dashed var(--color-border)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '80px', flexWrap: 'wrap' }}>
            
            {/* Mobile-only Title */}
            <motion.div 
              className="hide-desktop"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              style={{ width: '100%', textAlign: 'center', marginBottom: '-60px' }}
            >
              <div className="badge-modern" style={{ background: 'var(--color-pink-light)', color: 'var(--color-primary-dark)', margin: '0 auto 15px' }}>
                VIDEO EXPLICATIVO
              </div>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary-dark)', lineHeight: 1.1 }}>
                El Método en Detalle
              </h2>
            </motion.div>

            {/* Left: Vertical Video */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}
            >
              <div style={{ 
                width: '100%', 
                maxWidth: '340px', 
                borderRadius: '32px', 
                overflow: 'hidden', 
                border: '8px solid white', 
                boxShadow: '15px 15px 0px var(--color-accent)',
                background: 'black',
                position: 'relative',
                aspectRatio: '9/16'
              }}>
                <video 
                  src="/Video-319.mp4" 
                  controls 
                  playsInline 
                  preload="metadata"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </motion.div>

            {/* Right: Text & Context */}
            <motion.div 
              className="hide-mobile"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              style={{ flex: '1 1 400px' }}
            >
              <div className="badge-modern" style={{ background: 'var(--color-pink-light)', color: 'var(--color-primary-dark)', marginBottom: '20px' }}>
                VIDEO EXPLICATIVO
              </div>
              <h2 style={{ fontSize: '3.5rem', color: 'var(--color-primary-dark)', marginBottom: '32px', lineHeight: 1.1 }}>
                El Método en Detalle
              </h2>
              
              <div style={{ background: 'white', padding: '40px', borderRadius: '24px', border: '3px solid var(--color-primary-dark)', boxShadow: '8px 8px 0px var(--color-primary-dark)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ background: 'var(--color-secondary)', padding: '12px', borderRadius: '16px', display: 'inline-flex', color: 'var(--color-primary-dark)' }}>
                    <BrainCircuit size={28} />
                  </div>
                </div>
                <p style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-primary-dark)', marginBottom: '12px' }}>
                  Entiende cómo estimulamos su cerebro
                </p>
                <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Te explicamos cómo funciona el entrenamiento auditivo con tecnología Tomatis en Multisensorial. Aprende cómo el filtrado de frecuencias y el contraste sonoro ayudan a reorganizar el procesamiento sensorial del niño.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="bg-blue with-grid" style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              style={{ fontSize: '3.5rem', marginBottom: '20px' }}
            >
              ¿En qué ayuda a mi hijo?
            </motion.h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>Resultados tangibles que transforman el día a día.</p>
          </div>
          <div className="benefits-grid-premium">
            {[
              { icon: <Star />, title: "Atención", desc: "Logra concentrarse por más tiempo en sus tareas escolares sin distraerse con ruidos externos.", color: "var(--color-primary)" },
              { icon: <Speech />, title: "Lenguaje", desc: "Mejora la fluidez al hablar, la pronunciación y la comprensión de instrucciones complejas.", color: "var(--color-accent)" },
              { icon: <Smile />, title: "Emociones", desc: "Reduce la irritabilidad y la ansiedad, ayudando a que el niño se sienta más seguro y tranquilo.", color: "var(--color-pink)" },
              { icon: <CheckCircle />, title: "Aprendizaje", desc: "Facilita la adquisición de la lectura, la escritura y el aprendizaje de nuevos idiomas.", color: "var(--color-secondary)" },
              { icon: <BrainCircuit />, title: "Memoria", desc: "Mejora la retención de información, la memoria de trabajo y la agilidad para recordar conceptos.", color: "var(--color-green)" },
              { icon: <Activity />, title: "Psicomotricidad (Gruesa y Fina)", desc: "Desarrolla el equilibrio, la coordinación corporal, el ritmo motor y el control fino manual.", color: "#8E44AD" }
            ].map((b, i) => (
              <motion.div 
                key={i} 
                className="benefit-card-premium"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
                }}
              >
                <div className="benefit-icon-wrapper" style={{ background: b.color }}>
                  {b.icon}
                </div>
                <div className="benefit-content">
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="bg-cream with-grid" style={{ padding: '100px 0', borderTop: '2px dashed var(--color-border)' }}>
        <div className="container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="tomatis-cert-box"
          >
            <div className="tomatis-cert-content">
              <div className="badge-modern" style={{ background: 'var(--color-pink-light)', color: 'var(--color-primary-dark)', marginBottom: '20px' }}>
                ÚNICOS EN REPÚBLICA DOMINICANA
              </div>
              <h2 className="tomatis-cert-title">
                Certificación Oficial Nivel 4
              </h2>
              <p className="tomatis-cert-desc">
                Somos el <strong>único centro</strong> en todo el país que cuenta con la certificación oficial del Método Tomatis® en su máximo nivel (Nivel 4). Esto garantiza que tu hijo recibirá la intervención más avanzada, segura y especializada posible, respaldada directamente por la organización internacional en Francia.
              </p>
              <a 
                href="https://www.tomatis.com/es/profesional/republica-dominicana/" 
                target="_blank" 
                rel="noreferrer"
                className="btn-outline tomatis-cert-btn"
              >
                Verificar en el sitio oficial <ExternalLink size={20} />
              </a>
            </div>
            <div className="tomatis-cert-image">
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '4px solid var(--color-secondary)',
                boxShadow: '8px 8px 0px var(--color-secondary)',
                background: 'var(--color-bg)',
                position: 'relative'
              }}>
                <img 
                  src="/oficialscreenshot.png" 
                  alt="Certificación Tomatis Nivel 4 - Multisensorial RD" 
                  style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                  onError={(e) => { 
                    e.target.style.display = 'none'; 
                    e.target.nextSibling.style.display = 'flex'; 
                  }}
                />
                <div style={{ display: 'none', padding: '80px 20px', flexDirection: 'column', alignItems: 'center', gap: '20px', background: 'var(--color-bg)' }}>
                  <Award size={80} color="var(--color-accent)" />
                  <span style={{ fontWeight: 800, color: 'var(--color-primary-dark)', fontSize: '1.4rem' }}>Directorio Oficial Tomatis®</span>
                  <span style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>(Sube el screenshot a public/oficialscreenshot.png)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Footer Extras */}
      <ServiceFooterExtras serviceId="tomatis" onBack={onBack} onNavigateService={onNavigateService} />

      {/* Final CTA */}
      <section className="bg-yellow with-grid" style={{ padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>¿Listo para empezar?</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
            Somos la única clínica en República Dominicana con los 4 niveles de certificación oficial. Tu hijo está en las mejores manos.
          </p>
          <button onClick={onBack} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
            Agendar una Evaluación <ArrowLeft size={20} style={{ transform: 'rotate(180deg)' }} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onBack} onOpenBooking={onBook} />
    </div>
  );
};

export default TomatisPage;
