import React from 'react';
import { Star, ArrowLeft, Video, ExternalLink, ArrowRight, Play, MessageCircleHeart, Puzzle, BrainCircuit, Users, Headphones, BookOpen, RectangleGoggles, HeartHandshake, Smile, Speech, Waves } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const serviceIcons = {
  tomatis: <Headphones size={32} color="var(--color-primary-dark)" />,
  homeschooling: <BookOpen size={32} color="var(--color-primary-dark)" />,
  psicologia: <HeartHandshake size={32} color="var(--color-primary-dark)" />,
  neuropedagogia: <BrainCircuit size={32} color="var(--color-primary-dark)" />,
  psicopedagogia: <Puzzle size={32} color="var(--color-primary-dark)" />,
  neurofeedback: <Waves size={32} color="var(--color-primary-dark)" />,
  'evaluacion-aula-virtual': <RectangleGoggles size={32} color="var(--color-primary-dark)" />,
  'acompanamiento-madres': <Users size={32} color="var(--color-primary-dark)" />,
  'terapia-orofacial': <Smile size={32} color="var(--color-primary-dark)" />,
  fisioterapia: <Play size={32} color="var(--color-primary-dark)" />,
  'terapia-conductual': <Speech size={32} color="var(--color-primary-dark)" />,
  'taller-padres-homeschooling': <Users size={32} color="var(--color-primary-dark)" />
};

const serviceDescriptions = {
  tomatis: "Estimulación neurosensorial avanzada.",
  homeschooling: "Educación personalizada en casa.",
  psicologia: "Apoyo emocional y psicológico integral.",
  neuropedagogia: "Aprendizaje basado en el cerebro.",
  psicopedagogia: "Apoyo especializado en el aprendizaje.",
  neurofeedback: "Entrenamiento cerebral y atención.",
  'evaluacion-aula-virtual': "Diagnóstico preciso de TDAH.",
  'acompanamiento-madres': "Soporte y guía maternal.",
  'terapia-orofacial': "Rehabilitación motora orofacial.",
  fisioterapia: "Desarrollo motor y movimiento.",
  'terapia-conductual': "Manejo efectivo de conductas.",
  'taller-padres-homeschooling': "Guía y soporte para educar en casa."
};

const serviceData = {
  tomatis: {
    title: "Método Tomatis®",
    similar: [
      { id: 'neurofeedback', label: 'Neurofeedback' },
      { id: 'terapia-orofacial', label: 'Terapia Orofacial' },
      { id: 'psicopedagogia', label: 'Psicopedagogía' },
      { id: 'neuropedagogia', label: 'Neuropedagogía' }
    ],
    media: [
      { title: "\"La Mirada\" | IA y los límites terapéuticos", url: "https://www.youtube.com/watch?v=JiJXut5kviU", source: "YouTube Video" },
      { title: "Especialistas hablan sobre el espectro del autismo con Jatnna", url: "https://www.youtube.com/watch?v=NSRzUZ-Tqhc", source: "Entrevista Jatnna" }
    ]
  },
  homeschooling: {
    title: "Homeschooling Presencial",
    similar: [
      { id: 'psicopedagogia', label: 'Psicopedagogía' },
      { id: 'neuropedagogia', label: 'Neuropedagogía' },
      { id: 'evaluacion-aula-virtual', label: 'Evaluación Aula Virtual' },
      { id: 'taller-padres-homeschooling', label: 'Padres como tutores (Taller de formación para tutores en casa)' }
    ],
    media: [
      { title: "HOMESCHOOLING (Escuela en casa) para niños con AUTISMO en RD", url: "https://www.youtube.com/watch?v=ZKI_bcbkVI0", source: "AzulPodcast EP 32" }
    ]
  },
  psicologia: {
    title: "Psicología Clínica",
    similar: [
      { id: 'terapia-conductual', label: 'Terapia Conductual' },
      { id: 'acompanamiento-madres', label: 'Acompañamiento a Madres' },
      { id: 'neuropedagogia', label: 'Neuropedagogía' },
      { id: 'psicopedagogia', label: 'Psicopedagogía' }
    ],
    media: [
      { title: "\"La Mirada\" | 'Adolescencia' de Netflix: lo que los padres deben entender", url: "https://www.youtube.com/watch?v=yDlEPuyxBFs", source: "YouTube Video" }
    ]
  },
  neuropedagogia: {
    title: "Neuropedagogía",
    similar: [
      { id: 'psicopedagogia', label: 'Psicopedagogía' },
      { id: 'neurofeedback', label: 'Neurofeedback' },
      { id: 'evaluacion-aula-virtual', label: 'Evaluación Aula Virtual' },
      { id: 'tomatis', label: 'Método Tomatis®' }
    ],
    media: [
      { title: "QUÉ TAN CARO ES CRIAR UN HIJO AUTISTA? - Carlos Eduardo Pérez", url: "https://www.youtube.com/watch?v=NK1u6dsNqBo", source: "Esto No Es Radio" }
    ]
  },
  psicopedagogia: {
    title: "Psicopedagogía",
    similar: [
      { id: 'neuropedagogia', label: 'Neuropedagogía' },
      { id: 'homeschooling', label: 'Homeschooling Presencial' },
      { id: 'evaluacion-aula-virtual', label: 'Evaluación Aula Virtual' },
      { id: 'tomatis', label: 'Método Tomatis®' }
    ],
    media: []
  },
  neurofeedback: {
    title: "Neurofeedback",
    similar: [
      { id: 'tomatis', label: 'Método Tomatis®' },
      { id: 'neuropedagogia', label: 'Neuropedagogía' },
      { id: 'evaluacion-aula-virtual', label: 'Evaluación Aula Virtual' },
      { id: 'psicopedagogia', label: 'Psicopedagogía' }
    ],
    media: [
      { title: "Entrevista Mery Torrealba & Carlos Pérez | Neurofeedback", url: "https://www.youtube.com/watch?v=lK8_ZQcQuK0", source: "Hora de Te" }
    ]
  },
  'evaluacion-aula-virtual': {
    title: "Evaluación Aula Virtual",
    similar: [
      { id: 'psicopedagogia', label: 'Psicopedagogía' },
      { id: 'neurofeedback', label: 'Neurofeedback' },
      { id: 'neuropedagogia', label: 'Neuropedagogía' },
      { id: 'homeschooling', label: 'Homeschooling Presencial' }
    ],
    media: []
  },
  'acompanamiento-madres': {
    title: "Acompañamiento a Madres",
    similar: [
      { id: 'psicologia', label: 'Psicología Clínica' },
      { id: 'terapia-conductual', label: 'Terapia Conductual' },
      { id: 'psicopedagogia', label: 'Psicopedagogía' },
      { id: 'neuropedagogia', label: 'Neuropedagogía' }
    ],
    media: []
  },
  'terapia-orofacial': {
    title: "Terapia Orofacial",
    similar: [
      { id: 'fisioterapia', label: 'Fisioterapia' },
      { id: 'tomatis', label: 'Método Tomatis®' },
      { id: 'terapia-conductual', label: 'Terapia Conductual' },
      { id: 'psicopedagogia', label: 'Psicopedagogía' }
    ],
    media: []
  },
  fisioterapia: {
    title: "Fisioterapia",
    similar: [
      { id: 'terapia-orofacial', label: 'Terapia Orofacial' },
      { id: 'tomatis', label: 'Método Tomatis®' },
      { id: 'terapia-conductual', label: 'Terapia Conductual' },
      { id: 'neurofeedback', label: 'Neurofeedback' }
    ],
    media: []
  },
  'terapia-conductual': {
    title: "Terapia Conductual",
    similar: [
      { id: 'psicologia', label: 'Psicología Clínica' },
      { id: 'acompanamiento-madres', label: 'Acompañamiento a Madres' },
      { id: 'terapia-orofacial', label: 'Terapia Orofacial' },
      { id: 'psicopedagogia', label: 'Psicopedagogía' }
    ],
    media: []
  }
};

const getYoutubeId = (url) => {
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
};

const ServiceFooterExtras = ({ serviceId, onBack, onNavigateService }) => {
  const data = serviceData[serviceId] || { title: "", similar: [], media: [] };

  return (
    <div className="service-footer-extras" style={{ position: 'relative', overflow: 'hidden', borderTop: '4px dashed var(--color-border)' }}>
      
      {/* Testimonials Section (Copied from main page exactly) */}
      <section className="testimonials-section bg-yellow with-grid" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Thematic Background Decor for Testimonials */}
        <div className="decor-testimonials-msg">
          <MessageCircleHeart color="var(--color-primary-dark)" />
        </div>
        <div className="decor-testimonials-video">
          <Video color="var(--color-pink)" />
        </div>
        <div style={{ position: 'absolute', top: '45%', right: '15%', opacity: 0.05, transform: 'rotate(25deg)', pointerEvents: 'none' }}>
          <Star size={250} color="var(--color-accent)" />
        </div>

        <div className="dec-star-4 orange" style={{ top: '10%', right: '5%', opacity: 1, transform: 'scale(1.2)' }}></div>
        <div className="dec-circle" style={{ bottom: '-50px', left: '-50px', width: '200px', height: '200px', background: 'var(--color-pink)', opacity: 0.8 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            style={{ textAlign: 'center' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>Testimonios</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>Descubre cómo estamos cambiando vidas, en palabras de nuestras familias.</p>
          </motion.div>

          <motion.div
            className="testimonials-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="testimonial-card" variants={fadeUp}>
              <div className="testimonial-video-container">
                <video src="/reviews/rev1.mp4#t=2.0" className="testimonial-video" controls playsInline preload="metadata" />
              </div>
              <div className="testimonial-text">
                <div className="testimonial-rating">
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                </div>
                <p>“Es la mejor decisión que hemos hecho como familia.”</p>
              </div>
            </motion.div>

            <motion.div className="testimonial-card" variants={fadeUp}>
              <div className="testimonial-video-container">
                <video src="/reviews/review_2.mp4#t=2.0" className="testimonial-video" controls playsInline preload="metadata" />
              </div>
              <div className="testimonial-text">
                <div className="testimonial-rating">
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                </div>
                <p>¡Yeiry recibe la palabra más deseada!</p>
              </div>
            </motion.div>

            <motion.div className="testimonial-card" variants={fadeUp}>
              <div className="testimonial-video-container">
                <video src="/reviews/rev4.mov#t=2.0" className="testimonial-video" controls playsInline preload="metadata" />
              </div>
              <div className="testimonial-text">
                <div className="testimonial-rating">
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                </div>
                <p>“El niño decía nada. Ya dice mamá y papá, mami y papi.”</p>
              </div>
            </motion.div>

            <motion.div className="testimonial-card" variants={fadeUp}>
              <div className="testimonial-video-container">
                <video src="/reviews/rev3.mp4#t=2.0" className="testimonial-video" controls playsInline preload="metadata" />
              </div>
              <div className="testimonial-text">
                <div className="testimonial-rating">
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                  <Star size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
                </div>
                <p>“Eso que ustedes hacen es demasiado maravilloso.”</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Internet / Media Section */}
      {data.media.length > 0 && (
        <section className="service-extra-media" style={{ 
          padding: '100px 0', 
          background: 'var(--color-pink-light)', 
          position: 'relative' 
        }}>
          {/* Decoraciones de fondo */}
          <div className="dec-wiggle" style={{ top: '40px', left: '5%', opacity: 0.6, transform: 'rotate(-15deg)' }}></div>
          <div className="dec-star-4" style={{ bottom: '60px', right: '8%', transform: 'scale(1.5)', opacity: 0.4, background: 'var(--color-secondary)' }}></div>

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <div className="badge-modern" style={{ background: 'white' }}>EN INTERNET Y MEDIOS</div>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary-dark)', marginTop: '10px' }}>Apariciones y Videos Relacionados</h3>
            </div>
            
            <div className="media-mini-list" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {data.media.map((med, idx) => {
                const videoId = getYoutubeId(med.url);
                const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;

                return (
                  <a
                    key={idx}
                    href={med.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      background: 'white',
                      border: '3px solid var(--color-primary-dark)',
                      borderRadius: '24px',
                      padding: '20px 25px',
                      boxShadow: '6px 6px 0px var(--color-primary-dark)',
                      textDecoration: 'none',
                      transition: 'transform 0.2s',
                      flexWrap: 'wrap'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    {thumbnailUrl ? (
                      <div style={{ 
                        width: '280px', 
                        height: '160px', 
                        borderRadius: '16px', 
                        overflow: 'hidden', 
                        position: 'relative',
                        flexShrink: 0,
                        border: '2px solid var(--color-primary-dark)'
                      }}>
                        <img 
                          src={thumbnailUrl} 
                          alt={med.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          background: 'rgba(255,255,255,0.95)',
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-primary)'
                        }}>
                          <Play size={24} fill="currentColor" style={{ marginLeft: '4px' }}/>
                        </div>
                      </div>
                    ) : (
                      <div style={{
                        background: 'var(--color-bg)',
                        width: '80px',
                        height: '80px',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-accent)',
                        flexShrink: 0
                      }}>
                        <Video size={30} />
                      </div>
                    )}
                    
                    <div style={{ flex: 1, minWidth: '250px' }}>
                      <h4 style={{
                        margin: 0,
                        fontSize: '1.4rem',
                        color: 'var(--color-primary-dark)',
                        fontWeight: 800,
                        lineHeight: 1.3,
                        marginBottom: '10px'
                      }}>
                        {med.title}
                      </h4>
                      <span style={{
                        display: 'inline-block',
                        background: 'var(--color-bg)',
                        padding: '6px 14px',
                        borderRadius: '100px',
                        fontSize: '0.9rem',
                        color: 'var(--color-text)',
                        fontWeight: 700
                      }}>
                        {med.source}
                      </span>
                    </div>
                    <div style={{ padding: '0 15px' }}>
                      <ExternalLink size={28} style={{ color: 'var(--color-primary-dark)' }} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Navigation & Similar Services */}
      <section className="service-extra-navigation" style={{ 
        padding: '100px 0', 
        background: '#ffffff',
        position: 'relative'
      }}>
        {/* Decoraciones */}
        <div className="dec-circle" style={{ top: '-100px', right: '10%', width: '300px', height: '300px', background: 'var(--color-primary-light)', opacity: 0.15 }}></div>
        <div className="dec-circle" style={{ bottom: '-50px', left: '-50px', width: '150px', height: '150px', background: 'var(--color-secondary)', opacity: 0.3 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Similar Services Grid - Using main page style */}
          {data.similar.length > 0 && (
            <div style={{ marginBottom: '60px' }}>
              <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h4 style={{
                  fontSize: '2.5rem',
                  color: 'var(--color-primary-dark)',
                  marginBottom: '10px',
                  fontWeight: 800
                }}>
                  Otros servicios relacionados
                </h4>
              </div>

              <motion.div
                className="services-grid-modern"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
              >
                {data.similar.map((sim, index) => {
                  const colors = ['orange', 'blue', 'yellow', 'pink', 'green', 'blue-dark', 'orange-light', 'yellow-bright'];
                  const colorClass = `card-${colors[index % colors.length]}`;
                  
                  return (
                    <motion.div
                      key={sim.id}
                      className={`service-card-modern ${colorClass} clickable-card`}
                      variants={fadeUp}
                      whileHover={{ y: -16, scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      style={{ position: 'relative', zIndex: 1, cursor: 'pointer' }}
                      onClick={() => {
                        if (onNavigateService) {
                          onNavigateService(sim.id);
                        }
                      }}
                    >
                      <div className="service-card-icon">
                        {serviceIcons[sim.id] || <Star size={32} color="var(--color-primary-dark)" />}
                      </div>
                      <div className="service-card-info">
                        <h3>{sim.label}</h3>
                        <p>{serviceDescriptions[sim.id] || "Descubre más información."}</p>
                        <span className="card-learn-more" style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          marginTop: '12px',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          color: 'var(--color-primary-dark)',
                          borderBottom: '2px solid var(--color-primary-dark)'
                        }}>
                          Ver Más <ArrowRight size={12} />
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          )}

          {/* Action Back Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
            <button
              onClick={onBack}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'var(--color-secondary)',
                color: 'var(--color-primary-dark)',
                border: 'none',
                borderRadius: '100px',
                padding: '18px 40px',
                fontSize: '1.2rem',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 6px 0px rgba(0,0,0,0.2)',
                transition: 'all 0.1s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 0px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 0px rgba(0,0,0,0.2)';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'translateY(6px)';
                e.currentTarget.style.boxShadow = '0 0px 0px rgba(0,0,0,0.2)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 0px rgba(0,0,0,0.2)';
              }}
            >
              <ArrowLeft size={24} /> Volver a la Página Principal
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ServiceFooterExtras;
