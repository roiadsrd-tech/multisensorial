import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Headphones, BrainCircuit, Waves, Star, CheckCircle, 
  Smartphone, HeartHandshake, Speech, Smile, ExternalLink, Award, 
  Activity, Zap, Play, Pause, Radio, Volume2, Sparkles, Compass, ShieldCheck 
} from 'lucide-react';
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

  const barCount = isMobile ? 6 : 10;

  return (
    <div className="tomatis-visual-container brain-filtering">
      <div className="filtering-scene">
        {/* Input: Chaos */}
        <div className="sound-input chaotic-spectrum">
          {[...Array(barCount)].map((_, i) => {
            const h1 = (i * 17) % 35 + 15;
            const h2 = (i * 23) % 55 + 30;
            const h3 = (i * 11) % 25 + 10;
            const h4 = (i * 29) % 65 + 25;
            return (
              <motion.div
                key={`noise-bar-${i}`}
                className="spectrum-bar noise-bar"
                animate={{ 
                  height: [`${h1}px`, `${h2}px`, `${h3}px`, `${h4}px`, `${h1}px`]
                }}
                transition={{ 
                  duration: 0.7 + (i % 3) * 0.2, 
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: i * 0.05
                }}
                style={{ 
                  backgroundColor: i % 2 === 0 ? 'var(--color-accent)' : 'var(--color-pink)' 
                }}
              />
            );
          })}
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
          {[...Array(barCount)].map((_, i) => {
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

const TomatisMetodoVisualInfographic = () => {
  const [soundMode, setSoundMode] = React.useState('suave'); // 'suave' | 'salto'

  return (
    <div className="tomatis-visual-split">
      {/* LADO A: Las 2 Partes del Oído (Cuerpo y Mente) */}
      <div className="tomatis-visual-cardless-panel">
        <span className="badge-modern" style={{ background: 'var(--color-secondary)', color: 'var(--color-primary-dark)', marginBottom: '14px' }}>
          PARTE 1: EL OÍDO INTERNO
        </span>
        <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary-dark)', marginBottom: '8px', lineHeight: 1.2 }}>
          Recarga el Cuerpo y la Mente
        </h3>
        <p style={{ fontSize: '1rem', color: 'var(--color-primary-dark)', opacity: 0.85, marginBottom: '15px' }}>
          El 80% de los estímulos sensoriales entran por el oído:
        </p>

        {/* Drawing of Inner Ear (Vestíbulo + Cóclea) */}
        <div style={{ width: '100%', maxWidth: '300px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 300 200" width="100%" height="100%">
            <circle cx="150" cy="100" r="85" fill="rgba(166, 223, 253, 0.2)" />
            
            {/* VESTÍBULO (Orange loops - Balance & Body) */}
            <g transform="translate(100, 20)">
              <motion.ellipse
                cx="50" cy="40" rx="35" ry="22"
                fill="none"
                stroke="#FF8651"
                strokeWidth="4.5"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <ellipse cx="30" cy="48" rx="20" ry="14" fill="none" stroke="#FF8651" strokeWidth="3.5" />
              <ellipse cx="70" cy="48" rx="20" ry="14" fill="none" stroke="#FF8651" strokeWidth="3.5" />
              <circle cx="50" cy="50" r="8" fill="#FF8651" />
              <text x="50" y="8" textAnchor="middle" fontSize="11" fontWeight="900" fill="#FF8651">
                VESTÍBULO
              </text>
            </g>

            {/* CÓCLEA (Blue snail - Attention & Voice) */}
            <g transform="translate(100, 90)">
              <motion.path
                d="M 50 25 C 75 25 90 45 85 70 C 80 90 60 100 40 95 C 20 90 10 75 15 55 C 20 40 40 35 55 40 C 65 45 68 58 60 68"
                fill="none"
                stroke="var(--color-primary-dark)"
                strokeWidth="4.5"
                strokeLinecap="round"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <circle cx="60" cy="68" r="4.5" fill="var(--color-primary-dark)" />
              <text x="50" y="118" textAnchor="middle" fontSize="11" fontWeight="900" fill="var(--color-primary-dark)">
                CÓCLEA
              </text>
            </g>
          </svg>
        </div>

        {/* Micro Bullets (Short, punchy, easy to grasp) */}
        <div className="tomatis-micro-bullets">
          <div className="tomatis-micro-item">
            <span className="tomatis-micro-badge" style={{ background: '#FF8651', color: 'white' }}>
              VESTÍBULO
            </span>
            <span>
              <strong>Equilibrio y calma:</strong> Tonifica la postura para sentarse erguido y reduce la inquietud física.
            </span>
          </div>
          <div className="tomatis-micro-item">
            <span className="tomatis-micro-badge" style={{ background: 'var(--color-primary-dark)', color: 'white' }}>
              CÓCLEA
            </span>
            <span>
              <strong>Atención y lenguaje:</strong> Apaga el ruido del aula para enfocar la voz del profesor a la primera.
            </span>
          </div>
        </div>
      </div>

      {/* LADO B: El Entrenamiento (Casco Óseo + La Báscula) */}
      <div className="tomatis-visual-cardless-panel">
        <span className="badge-modern" style={{ background: 'var(--color-pink-light)', color: 'var(--color-primary-dark)', marginBottom: '14px' }}>
          PARTE 2: EL ENTRENAMIENTO
        </span>
        <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary-dark)', marginBottom: '8px', lineHeight: 1.2 }}>
          Gimnasia con Cascos Especiales
        </h3>
        <p style={{ fontSize: '1rem', color: 'var(--color-primary-dark)', opacity: 0.85, marginBottom: '15px' }}>
          El niño escucha música mientras dibuja o descansa:
        </p>

        {/* Drawing of Headphone & Soundwave */}
        <div style={{ width: '100%', maxWidth: '300px', height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 280 140" width="100%" height="130">
            {/* Head profile */}
            <path d="M 100 125 C 80 95 75 60 110 35 C 145 15 175 35 170 80 C 170 100 160 120 145 125" fill="none" stroke="var(--color-primary-dark)" strokeWidth="3" />
            {/* Headphone Arch */}
            <path d="M 70 85 C 65 20 110 5 140 5 C 170 5 210 20 200 85" fill="none" stroke="var(--color-primary-dark)" strokeWidth="5.5" strokeLinecap="round" />
            
            {/* 1. Bone vibrator */}
            <rect x="126" y="0" width="28" height="12" rx="4" fill="#FF8651" stroke="var(--color-primary-dark)" strokeWidth="2.5" />
            <motion.path
              d="M 120 18 Q 140 26 160 18"
              fill="none"
              stroke="#FF8651"
              strokeWidth="3"
              strokeLinecap="round"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            {/* 2. Ear Cup */}
            <rect x="65" y="70" width="16" height="35" rx="7" fill="var(--color-primary)" stroke="var(--color-primary-dark)" strokeWidth="2.5" />
            
            <text x="140" y="-4" textAnchor="middle" fontSize="10" fontWeight="900" fill="#FF8651">
              VIBRADOR EN HUESO
            </text>
            <text x="60" y="125" textAnchor="middle" fontSize="10" fontWeight="900" fill="var(--color-primary-dark)">
              OÍDO
            </text>
          </svg>

          {/* Interactive Toggle for Music Gating */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
            <button
              type="button"
              className={`tomatis-pill-simple ${soundMode === 'suave' ? 'active' : ''}`}
              onClick={() => setSoundMode('suave')}
              style={{ padding: '6px 14px', fontSize: '0.85rem' }}
            >
              ☁️ Música Suave
            </button>
            <button
              type="button"
              className={`tomatis-pill-simple ${soundMode === 'salto' ? 'active' : ''}`}
              onClick={() => setSoundMode('salto')}
              style={{ padding: '6px 14px', fontSize: '0.85rem' }}
            >
              ⚡ Salto de Tono
            </button>
          </div>
        </div>

        {/* Micro Bullets */}
        <div className="tomatis-micro-bullets">
          <div className="tomatis-micro-item">
            <span className="tomatis-micro-badge" style={{ background: '#FF8651', color: 'white' }}>
              VÍA ÓSEA
            </span>
            <span>
              <strong>Avisa al cerebro antes:</strong> Vibra en el hueso un instante antes para evitar sobresaltos en niños sensibles.
            </span>
          </div>
          <div className="tomatis-micro-item">
            <span className="tomatis-micro-badge" style={{ background: 'var(--color-primary-dark)', color: 'white' }}>
              BÁSCULA
            </span>
            <span>
              <strong>Gimnasio del oído:</strong> La música salta por sorpresa para obligar a los músculos del oído a flexionarse y enfocarse.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TomatisPage = ({ onBack, onBook, onNavigateService }) => {
  return (
    <div className="tomatis-page bg-cream">
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
      <section className="with-paper-image" style={{ backgroundColor: '#FFFFFF', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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

      {/* SECCIÓN EXPLICATIVA VISUAL: ¿Cómo Funciona el Método Tomatis? */}
      <section className="with-paper-image" style={{ backgroundColor: '#FFFFFF', padding: '80px 0', borderTop: '2px dashed var(--color-border)', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '10px' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="badge-modern" style={{ background: 'var(--color-secondary)', color: 'var(--color-primary-dark)', margin: '0 auto 15px' }}>
                EL MÉTODO EN RESUMEN VISUAL
              </div>
              <h2 style={{ fontSize: '2.8rem', color: 'var(--color-primary-dark)', lineHeight: 1.15, marginBottom: '14px' }}>
                ¿Cómo Funciona el <span style={{ color: 'var(--color-accent)' }}>Método Tomatis</span>?
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--color-primary-dark)', opacity: 0.9, lineHeight: 1.5 }}>
                El oído envía más del <strong>80% de los estímulos</strong> al cerebro. Así lo reentrenamos con sonido:
              </p>
            </motion.div>
          </div>

          <TomatisMetodoVisualInfographic />

          {/* Micro takeaway strip */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', marginTop: '40px', paddingTop: '24px', borderTop: '2px dashed rgba(35, 71, 239, 0.15)' }}>
            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--color-primary-dark)' }}>✓ Menos sobrecarga y rabietas por ruido</span>
            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--color-primary-dark)' }}>✓ Atiende a la primera instrucción</span>
            <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--color-primary-dark)' }}>✓ Mayor calma para estudiar y sentarse derecho</span>
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
      <section className="bg-cream with-grid" style={{ padding: '70px 0 85px 0', borderTop: '2px dashed var(--color-border)' }}>
        <div className="container">
          {/* Simple Quote */}
          <motion.p 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            className="tomatis-simple-quote"
          >
            “Somos el único centro en el país certificado oficialmente en el Método Tomatis®”
          </motion.p>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="tomatis-cert-box"
          >
            {/* Background Certificate Star Seal Watermark */}
            <div className="tomatis-cert-watermark" aria-hidden="true">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* 16-point certificate rosette / starburst */}
                <path 
                  d="M100 2 L114 26 L141 18 L149 45 L176 53 L173 81 L198 100 L173 119 L176 147 L149 155 L141 182 L114 174 L100 198 L86 174 L59 182 L51 155 L24 147 L27 119 L2 100 L27 81 L24 53 L51 45 L59 18 L86 26 Z" 
                  fill="currentColor" 
                  fillOpacity="0.14"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <circle cx="100" cy="100" r="64" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="54" stroke="currentColor" strokeWidth="1.5" />
                {/* Central Certificate 5-point Star */}
                <polygon 
                  points="100,60 112,85 138,88 119,106 124,132 100,119 76,132 81,106 62,88 88,85" 
                  fill="currentColor" 
                  fillOpacity="0.22"
                  stroke="currentColor" 
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <div className="tomatis-cert-content">
              <div className="tomatis-cert-badge">
                ÚNICOS EN REPÚBLICA DOMINICANA
              </div>
              <h2 className="tomatis-cert-title">
                Certificación Oficial Nivel 4
              </h2>
              <p className="tomatis-cert-desc">
                Somos el <strong>único centro en todo el país</strong> avalado con el máximo nivel de acreditación internacional en el Método Tomatis®. Garantiza una estimulación auditiva y neurosensorial de primer nivel.
              </p>

              <div className="tomatis-cert-points">
                <div className="tomatis-cert-point">
                  <CheckCircle size={18} color="var(--color-primary)" />
                  <span>Máximo nivel de acreditación mundial (Nivel 4)</span>
                </div>
                <div className="tomatis-cert-point">
                  <CheckCircle size={18} color="var(--color-primary)" />
                  <span>Registrados en el directorio oficial Tomatis®</span>
                </div>
                <div className="tomatis-cert-point">
                  <CheckCircle size={18} color="var(--color-primary)" />
                  <span>Protocolos validados desde Francia</span>
                </div>
              </div>

              <a 
                href="https://www.tomatis.com/es/profesional/republica-dominicana/" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary tomatis-cert-btn"
              >
                Verificar en el sitio oficial <ExternalLink size={18} />
              </a>
            </div>

            <div className="tomatis-cert-image">
              <div className="tomatis-cert-img-frame">
                <div className="tomatis-cert-img-header">
                  <span className="cert-dot cert-dot-red"></span>
                  <span className="cert-dot cert-dot-yellow"></span>
                  <span className="cert-dot cert-dot-green"></span>
                  <span className="tomatis-cert-img-url">tomatis.com/es/profesional/republica-dominicana</span>
                </div>
                <img 
                  src="/oficialscreenshot.png" 
                  alt="Certificación Tomatis Nivel 4 - Multisensorial RD" 
                  className="tomatis-cert-screenshot"
                  onError={(e) => { 
                    e.target.style.display = 'none'; 
                    e.target.nextSibling.style.display = 'flex'; 
                  }}
                />
                <div style={{ display: 'none', padding: '60px 20px', flexDirection: 'column', alignItems: 'center', gap: '16px', background: 'var(--color-bg)' }}>
                  <Award size={64} color="var(--color-accent)" />
                  <span style={{ fontWeight: 800, color: 'var(--color-primary-dark)', fontSize: '1.2rem' }}>Directorio Oficial Tomatis®</span>
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
