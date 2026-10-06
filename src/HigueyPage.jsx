import React, { useEffect, useRef, useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import './JornadaEstePage.css';

const WA_HIGUEY = "https://wa.me/18093065040?text=Hola%2C%20me%20interesa%20la%20jornada%20Tomatis%20en%20Hig%C3%BCey.%20Quisiera%20orientaci%C3%B3n%20para%20mi%20hijo%20y%20conocer%20fechas%2C%20sede%2C%20horarios%20y%20qu%C3%A9%20incluye%20el%20programa.";
const COORDS_HIGUEY = [18.6131313, -68.7114484];

const HIGUEY_REVIEWS = [
  {
    id: "review-1",
    src: "https://www.centromultisensorial.com/reviews/rev1.mp4#t=2.0",
    title: "La decisión de empezar"
  },
  {
    id: "review-2",
    src: "https://www.centromultisensorial.com/reviews/rev3.mp4#t=2.0",
    title: "Una experiencia compartida"
  }
];

export default function HigueyPage({ onNavigateHome }) {
  const [videosPaused, setVideosPaused] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeReviewSound, setActiveReviewSound] = useState(null);

  const mapRef = useRef(null);
  const leafletMapInstance = useRef(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Jornada Tomatis en Higüey | Centro Multisensorial RD";
    return () => {
      document.title = prevTitle;
    };
  }, []);

  // Leaflet map setup for Higüey
  useEffect(() => {
    let active = true;

    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = '/vendor/leaflet/leaflet.css';
      document.head.appendChild(link);
    }

    const initMap = () => {
      if (!active || !mapRef.current || !window.L) return;

      if (leafletMapInstance.current) {
        leafletMapInstance.current.remove();
        leafletMapInstance.current = null;
      }

      const map = window.L.map(mapRef.current, {
        scrollWheelZoom: false,
        zoomControl: false,
        attributionControl: false,
        dragging: !window.L.Browser.mobile
      }).setView(COORDS_HIGUEY, 11);

      window.L.control.zoom({ position: 'bottomright' }).addTo(map);
      window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 7,
        maxZoom: 16,
        attribution: '&copy; OpenStreetMap'
      }).addTo(map);

      const marker = window.L.marker(COORDS_HIGUEY, {
        title: 'Jornada en Higüey',
        icon: window.L.divIcon({
          className: 'locality-marker map-marker-selected',
          html: '<span class="map-logo"><img src="/assets/logo.png" alt="" /></span>',
          iconSize: [142, 46],
          iconAnchor: [71, 23]
        })
      }).addTo(map).bindTooltip('Higüey', {
        permanent: true,
        direction: 'top',
        offset: [0, -27],
        className: 'locality-label'
      });

      marker.on('click', () => map.flyTo(COORDS_HIGUEY, 11, { duration: 0.85 }));

      leafletMapInstance.current = map;
    };

    if (window.L) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = '/vendor/leaflet/leaflet.js';
      script.async = true;
      script.onload = () => {
        if (active) initMap();
      };
      document.body.appendChild(script);
    }

    return () => {
      active = false;
      if (leafletMapInstance.current) {
        leafletMapInstance.current.remove();
        leafletMapInstance.current = null;
      }
    };
  }, []);

  const handleCenterMap = () => {
    if (leafletMapInstance.current) {
      leafletMapInstance.current.flyTo(COORDS_HIGUEY, 11, { duration: 0.85 });
    }
  };

  const handleToggleVideos = () => {
    const nextState = !videosPaused;
    setVideosPaused(nextState);
    videoRefs.current.forEach(v => {
      if (v) {
        if (nextState) v.pause();
        else v.play().catch(() => {});
      }
    });
  };

  const toggleFaq = (idx) => {
    setActiveFaq(prev => prev === idx ? null : idx);
  };

  const toggleReviewSound = (idx) => {
    setActiveReviewSound(prev => prev === idx ? null : idx);
  };

  return (
    <div className="higuey-page" data-city="Higüey">
      <a className="skip-link" href="#contenido">Ir al contenido</a>

      {/* HEADER */}
      <header className="header">
        <a 
          className="brand" 
          href="#inicio" 
          aria-label="Centro Multisensorial inicio"
          onClick={(e) => {
            if (onNavigateHome) {
              e.preventDefault();
              onNavigateHome();
            }
          }}
        >
          <img src="/assets/logo.png" alt="Multisensorial RD" width="260" height="48" />
        </a>

        <nav aria-label="Navegación principal">
          <a className="nav-link" href="#programa">La jornada</a>
          {onNavigateHome && (
            <button 
              onClick={onNavigateHome}
              className="text-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Portada Principal ↗
            </button>
          )}
          <a 
            className="button button-small" 
            href={WA_HIGUEY} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={17} color="#000000" />
            <span>Quiero orientación</span>
          </a>
        </nav>
      </header>

      <main id="contenido">
        {/* HERO */}
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-grid section-wrap">
            <div className="hero-copy">
              <p className="eyebrow">Jornada Tomatis · Higüey</p>
              <h1 id="hero-title">
                ¿Qué necesita<br />
                <span>mi hijo?</span>
              </h1>
              <p className="hero-description">
                Empieza con una <strong>evaluación individual</strong>, sesiones Tomatis y orientación para tu familia en Higüey.
              </p>
              <div className="hero-actions">
                <a className="button" href={WA_HIGUEY} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon size={20} color="#000000" />
                  <span>Quiero orientación <span aria-hidden="true">↗</span></span>
                </a>
              </div>
              <p className="hero-note">Niños y jóvenes de 2–18 años · Según valoración profesional.</p>
            </div>

            <figure className="hero-visual">
              <div className="photo-crop">
                <img 
                  src="/assets/family-playing.webp" 
                  alt="Ilustración de un padre y su hijo compartiendo un rompecabezas en casa" 
                  width="1536" 
                  height="1024" 
                  fetchPriority="high" 
                />
              </div>
              <figcaption>Entender sus necesidades. Acompañar su proceso.</figcaption>
            </figure>
          </div>

          <div className="hero-status section-wrap">
            <span>Centro Multisensorial RD</span>
            <span>Fecha y sede por confirmar.</span>
          </div>
        </section>

        {/* QUOTES */}
        <aside className="hero-quotes section-wrap" aria-label="Frases de testimonios publicados por el centro">
          <blockquote>“Es la mejor decisión que hemos hecho como familia.”</blockquote>
          <blockquote>“Eso que ustedes hacen es demasiado maravilloso.”</blockquote>
        </aside>

        {/* MEDIA PRESENCE */}
        <section className="media-presence" aria-label="Presencia en medios">
          <div className="media-heading section-wrap">
            <p>Presencia en medios</p>
          </div>
          <div className="media-window">
            <div className="media-track">
              <div className="media-group">
                <a className="media-logo logo-azulpodcast" href="https://www.youtube.com/watch?v=ZKI_bcbkVI0" target="_blank" rel="noopener noreferrer" aria-label="Ver aparición en Azul Podcast">
                  <img src="/assets/media-azulpodcast.webp" alt="Azul Podcast" width="160" height="90" loading="lazy" />
                </a>
                <a className="media-logo logo-colorvision" href="https://www.youtube.com/watch?v=NSRzUZ-Tqhc" target="_blank" rel="noopener noreferrer" aria-label="Ver aparición en Color Visión">
                  <img src="/assets/media-colorvision.webp" alt="Color Visión" width="160" height="90" loading="lazy" />
                </a>
                <a className="media-logo logo-estonoesradio" href="https://www.youtube.com/watch?v=NK1u6dsNqBo" target="_blank" rel="noopener noreferrer" aria-label="Ver aparición en Esto No Es Radio">
                  <img src="/assets/media-estonoesradio.webp" alt="Esto No Es Radio" width="160" height="90" loading="lazy" />
                </a>
                <a className="media-logo logo-lamirada" href="https://www.youtube.com/watch?v=JiJXut5kviU" target="_blank" rel="noopener noreferrer" aria-label="Ver aparición en La Mirada">
                  <img src="/assets/media-lamirada.webp" alt="La Mirada" width="160" height="90" loading="lazy" />
                </a>
                <a className="media-logo logo-rnn" href="https://www.centromultisensorial.com/" target="_blank" rel="noopener noreferrer" aria-label="Ver aparición en RNN">
                  <img src="/assets/media-rnn.webp" alt="RNN" width="160" height="90" loading="lazy" />
                </a>
              </div>
              <div className="media-group" aria-hidden="true">
                <span className="media-logo logo-azulpodcast">
                  <img src="/assets/media-azulpodcast.webp" alt="" width="160" height="90" loading="lazy" />
                </span>
                <span className="media-logo logo-colorvision">
                  <img src="/assets/media-colorvision.webp" alt="" width="160" height="90" loading="lazy" />
                </span>
                <span className="media-logo logo-estonoesradio">
                  <img src="/assets/media-estonoesradio.webp" alt="" width="160" height="90" loading="lazy" />
                </span>
                <span className="media-logo logo-lamirada">
                  <img src="/assets/media-lamirada.webp" alt="" width="160" height="90" loading="lazy" />
                </span>
                <span className="media-logo logo-rnn">
                  <img src="/assets/media-rnn.webp" alt="" width="160" height="90" loading="lazy" />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM GRID */}
        <section className="family-story" id="tu-familia" aria-labelledby="family-title">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">Lo que pasa en el día a día</p>
              <h2 id="family-title">¿Te resulta<br /><span>familiar?</span></h2>
              <p>Hay momentos que te dejan con más preguntas que respuestas.</p>
            </div>

            <ul className="moment-grid problem-grid">
              <li className="moment-card">
                <img src="/assets/family-understanding.webp" alt="Ilustración de una madre intentando comprender qué necesita su hijo" width="1536" height="1024" loading="lazy" />
                <div className="moment-copy">
                  <h3><span className="bullet" aria-hidden="true">•</span>Adivinar lo que necesita.</h3>
                  <p>Señala, te lleva de la mano… y no sabes si quiere agua, ayuda o una pausa.</p>
                </div>
              </li>
              <li className="moment-card">
                <img src="/assets/family-sounds.webp" alt="Ilustración de una madre acompañando a su hijo a hacer una pausa en un parque" width="1536" height="1024" loading="lazy" />
                <div className="moment-copy">
                  <h3><span className="bullet" aria-hidden="true">•</span>Cambiar los planes.</h3>
                  <p>Los ruidos o las luces le incomodan. Una salida en familia termina antes de lo esperado.</p>
                </div>
              </li>
              <li className="moment-card">
                <img src="/assets/family-questions.webp" alt="Ilustración de un padre pensando qué recomendaciones seguir mientras su hija juega" width="1536" height="1024" loading="lazy" />
                <div className="moment-copy">
                  <h3><span className="bullet" aria-hidden="true">•</span>No saber por dónde seguir.</h3>
                  <p>Entre citas, consejos y videos, sigues buscando un próximo paso para tu hijo.</p>
                </div>
              </li>
            </ul>

            <p className="story-bridge">Empieza por conocer sus necesidades. No tienes que resolver cada pregunta a solas.</p>
          </div>
        </section>

        {/* GOALS GRID */}
        <section className="family-goals" aria-labelledby="goals-title">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">Lo que deseas para tu familia</p>
              <h2 id="goals-title">Imagina más<br /><span>momentos así.</span></h2>
            </div>
            <ul className="moment-grid goal-grid">
              <li className="moment-card tone-yellow">
                <img src="/assets/family-connection.webp" alt="Ilustración de un padre y su hija usando tarjetas para compartir una actividad" width="1536" height="1024" loading="lazy" />
                <div className="moment-copy">
                  <h3><span className="bullet" aria-hidden="true">•</span>Comprender una petición.</h3>
                  <p>Una palabra, un gesto o una tarjeta que te ayude a entender qué necesita.</p>
                </div>
              </li>
              <li className="moment-card tone-pink">
                <img src="/assets/family-park.webp" alt="Ilustración de una madre y su hija compartiendo una pausa en un parque" width="1536" height="1024" loading="lazy" />
                <div className="moment-copy">
                  <h3><span className="bullet" aria-hidden="true">•</span>Compartir a su ritmo.</h3>
                  <p>Un juego o una salida con pausas y apoyos que respeten su comodidad.</p>
                </div>
              </li>
              <li className="moment-card tone-blue">
                <img src="/assets/family-guidance.webp" alt="Ilustración de una familia recibiendo orientación de una profesional" width="1536" height="1024" loading="lazy" />
                <div className="moment-copy">
                  <h3><span className="bullet" aria-hidden="true">•</span>Tener un siguiente paso.</h3>
                  <p>Saber qué acompañar en casa, qué observar y con quién continuar.</p>
                </div>
              </li>
            </ul>
            <p className="goals-note">Son metas que puedes conversar en la evaluación. Cada niño tiene su propio proceso y resultados individuales.</p>
          </div>
        </section>

        {/* PROGRAM */}
        <section className="program" id="programa" aria-labelledby="program-title">
          <div className="section-wrap program-inner">
            <div className="program-heading">
              <p className="eyebrow">La jornada en Higüey</p>
              <h2 id="program-title">Un plan para<br /><span>acompañarlo.</span></h2>
              <p>Evaluación individual, sesiones Tomatis y orientación familiar. Un programa de escucha con música procesada y auriculares de conducción aérea y ósea.</p>
            </div>

            <div className="program-stats" aria-label="Duración del bloque de sesiones">
              <div><strong>13</strong><span>días continuos</span></div>
              <div><strong>2</strong><span>horas por día</span></div>
              <div><strong>26</strong><span>horas de sesiones</span></div>
            </div>

            <ol className="program-steps">
              <li>
                <span>01</span>
                <div>
                  <h3>Conocerlo.</h3>
                  <p>Evaluación para orientar los objetivos y valorar su participación.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Acompañarlo.</h3>
                  <p>Sesiones de escucha, juego y actividades adaptadas.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Saber qué sigue.</h3>
                  <p>Orientación familiar e informe con recomendaciones.</p>
                </div>
              </li>
            </ol>

            <div className="program-conditions">
              <p><strong>Asistencia:</strong> Turno fijo, un adulto acompañante y asistencia a las 26 horas, incluyendo fines de semana y feriados.</p>
              <details>
                <summary>Etapas del programa e inscripción</summary>
                <p>El proceso informado contempla 3 etapas con descansos de aproximadamente 4 semanas. Estos 13 días corresponden a un bloque de 26 horas; consulta cómo se organizan las etapas posteriores.</p>
                <p>Antes de reservar, confirma fechas, sede, horarios, inversión total, qué etapas incluye, anticipo y condiciones de cancelación. Los objetivos y resultados son individuales.</p>
              </details>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="team section-wrap" aria-labelledby="team-title">
          <div className="team-copy">
            <p className="eyebrow">Tu equipo</p>
            <h2 id="team-title">Un equipo que<br /><span>te escucha.</span></h2>
            <a className="directory-link" href="https://www.tomatis.com/es/profesional/republica-dominicana/" target="_blank" rel="noopener noreferrer">
              Nuestro equipo en el directorio oficial Tomatis®
            </a>
          </div>
          <div className="team-portraits">
            <article className="person">
              <div className="portrait portrait-pink">
                <img src="/assets/mery.webp" alt="Mery Torrealba" width="400" height="480" loading="lazy" />
              </div>
              <h3>Mery Torrealba</h3>
              <p>Psicopedagogía<br />Consultora Tomatis®</p>
            </article>
            <article className="person">
              <div className="portrait portrait-yellow">
                <img src="/assets/carlos.webp" alt="Carlos Eduardo Pérez" width="400" height="480" loading="lazy" />
              </div>
              <h3>Carlos Eduardo Pérez</h3>
              <p>Psicología clínica<br />Consultor Tomatis®</p>
            </article>
          </div>
        </section>

        {/* COLLAGE REAL MOMENTS */}
        <section className="session-collage section-wrap" id="familias" aria-labelledby="collage-title">
          <div className="collage-heading">
            <div>
              <p className="eyebrow">Una jornada por dentro</p>
              <h2 id="collage-title">Escuchar. Jugar.<br /><span>Estar juntos.</span></h2>
            </div>
            <div className="collage-aside">
              <p>Momentos reales compartidos por el equipo.</p>
              <button 
                type="button" 
                className="collage-motion" 
                aria-pressed={videosPaused} 
                onClick={handleToggleVideos}
              >
                {videosPaused ? "Reanudar videos ▶" : "Pausar videos Ⅱ"}
              </button>
            </div>
          </div>

          <div className="session-scenes">
            <figure className="session-scene scene-1">
              <img src="/assets/families/photo-01.webp" alt="Una jornada, muchas familias" loading="lazy" decoding="async" />
            </figure>
            <figure className="session-scene scene-2">
              <video 
                ref={el => videoRefs.current[0] = el}
                autoPlay 
                muted 
                loop 
                playsInline 
                preload="metadata" 
                poster="/assets/families/clip-03.webp" 
                src="/assets/families/loop-03.mp4" 
                aria-label="Explorar juntos"
              />
            </figure>
            <figure className="session-scene scene-3">
              <img src="/assets/families/photo-04.webp" alt="La curiosidad también cuenta" loading="lazy" decoding="async" />
            </figure>
            <figure className="session-scene scene-4">
              <img src="/assets/families/photo-11.webp" alt="Familias que acompañan" loading="lazy" decoding="async" />
            </figure>
            <figure className="session-scene scene-5">
              <video 
                ref={el => videoRefs.current[1] = el}
                autoPlay 
                muted 
                loop 
                playsInline 
                preload="metadata" 
                poster="/assets/families/clip-18.webp" 
                src="/assets/families/loop-18.mp4" 
                aria-label="Un recuerdo compartido"
              />
            </figure>
            <figure className="session-scene scene-6">
              <img src="/assets/families/photo-03.webp" alt="Un saludo para recordar" loading="lazy" decoding="async" />
            </figure>
          </div>
        </section>

        {/* REAL REVIEWS */}
        <section className="real-reviews section-wrap" aria-labelledby="reviews-title">
          <div className="reviews-heading">
            <div>
              <p className="eyebrow">Familias reales</p>
              <h2 id="reviews-title">Lo que dicen<br /><span>las familias.</span></h2>
            </div>
          </div>
          <div className="reviews-grid">
            {HIGUEY_REVIEWS.map((rev, idx) => (
              <figure key={rev.id} className="review-video">
                <video 
                  autoPlay 
                  muted={activeReviewSound !== idx}
                  loop 
                  playsInline 
                  preload="metadata" 
                  src={rev.src} 
                  aria-label={`Testimonio: ${rev.title}`}
                >
                  Tu navegador no puede reproducir el video.
                </video>
                <figcaption>
                  <span className="review-number">0{idx + 1}</span>
                  <strong>{rev.title}</strong>
                  <button 
                    className="review-sound" 
                    type="button" 
                    aria-pressed={activeReviewSound === idx} 
                    onClick={() => toggleReviewSound(idx)}
                  >
                    {activeReviewSound === idx ? "Silenciar" : "Activar sonido"}
                  </button>
                  <a href={rev.src} target="_blank" rel="noopener noreferrer" aria-label={`Ver video original: ${rev.title}`}>↗</a>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FAQS */}
        <section className="faqs section-wrap" id="preguntas" aria-labelledby="faq-title">
          <div className="faq-intro">
            <p className="eyebrow">Antes de dar el paso</p>
            <h2 id="faq-title">Lo esencial.<br /><span>Sin dudas.</span></h2>
          </div>
          <div className="faq-content">
            <div className="faq-list">
              <details 
                className={`faq-item ${activeFaq === 1 ? 'is-open' : ''}`}
                open={activeFaq === 1}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq(1);
                }}
              >
                <summary>
                  <span className="faq-number">01</span>
                  <span>¿Es adecuado para mi hijo?</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  <p>Para niños y jóvenes de <strong>2 a 18 años</strong>. La evaluación individual permite valorar su participación y acordar objetivos con tu familia.</p>
                </div>
              </details>

              <details 
                className={`faq-item ${activeFaq === 2 ? 'is-open' : ''}`}
                open={activeFaq === 2}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq(2);
                }}
              >
                <summary>
                  <span className="faq-number">02</span>
                  <span>¿Qué hace durante una sesión?</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  <p>Escucha música procesada con auriculares Tomatis de conducción aérea y ósea, mientras juega o realiza actividades adaptadas. Un familiar o tutor lo acompaña cada día.</p>
                </div>
              </details>

              <details 
                className={`faq-item ${activeFaq === 3 ? 'is-open' : ''}`}
                open={activeFaq === 3}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq(3);
                }}
              >
                <summary>
                  <span className="faq-number">03</span>
                  <span>¿Cómo organizamos la asistencia?</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  <p><strong>13 días continuos, 2 horas al día</strong>, con turno fijo y asistencia completa, incluidos fines de semana y feriados.</p>
                  <p>El proceso contempla 3 etapas con descansos de unas 4 semanas. Confirma qué etapas incluye tu inscripción y cómo se organizan.</p>
                </div>
              </details>

              <details 
                className={`faq-item ${activeFaq === 4 ? 'is-open' : ''}`}
                open={activeFaq === 4}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq(4);
                }}
              >
                <summary>
                  <span className="faq-number">04</span>
                  <span>¿Qué cambios puedo esperar?</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  <p>Los objetivos se acuerdan en la evaluación y se observan durante las sesiones. Cada proceso es individual: no hay un plazo ni un resultado garantizado.</p>
                </div>
              </details>

              <details 
                className={`faq-item ${activeFaq === 5 ? 'is-open' : ''}`}
                open={activeFaq === 5}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq(5);
                }}
              >
                <summary>
                  <span className="faq-number">05</span>
                  <span>¿Cómo me inscribo?</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  <p>La fecha y la sede exacta de <strong>Higüey</strong> están pendientes de confirmación.</p>
                  <p>Consulta con nuestro equipo disponibilidad, sedes sugeridas e inversión antes de separar tu cupo.</p>
                  <a href={WA_HIGUEY} target="_blank" rel="noopener noreferrer">
                    Quiero orientación
                  </a>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section className="locations section-wrap" id="localidades" aria-labelledby="locations-title">
          <div className="locations-heading">
            <div>
              <p className="eyebrow">La jornada en tu localidad</p>
              <h2 id="locations-title">Tu próximo paso.<br /><span>En Higüey.</span></h2>
            </div>
          </div>

          <figure className="locality-photo">
            <img 
              src="/assets/higuey-locality-v2.webp" 
              alt="Vista aérea de la Basílica Nuestra Señora de la Altagracia y la ciudad de Higüey" 
              width="1134" 
              height="755" 
              loading="lazy" 
            />
            <figcaption>
              <span>Higüey, La Altagracia</span>
            </figcaption>
          </figure>

          <details className="compact-map" open>
            <summary>
              Explorar la zona en el mapa <span aria-hidden="true">+</span>
            </summary>
            <div className="locations-card">
              <div className="locations-toolbar">
                <strong>Higüey · República Dominicana</strong>
                <button type="button" className="map-overview" id="map-overview" onClick={handleCenterMap}>
                  Centrar mapa
                </button>
              </div>
              <div 
                className="geographic-map" 
                ref={mapRef}
                id="locations-map" 
                data-show-marker="true" 
                aria-label="Mapa de Higüey"
              >
              </div>
              <p className="map-note">
                El punto representa la localidad. La dirección de la sede se informará al confirmarla.
              </p>
            </div>
          </details>
        </section>
      </main>

      {/* FIXED BOTTOM CTA */}
      <div className="fixed-cta">
        <a className="button" href={WA_HIGUEY} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={20} color="#000000" />
          <span>Quiero orientación</span>
        </a>
      </div>

      {/* FOOTER */}
      <footer className="footer section-wrap">
        <a 
          className="brand" 
          href="#inicio" 
          aria-label="Volver al inicio"
          onClick={(e) => {
            if (onNavigateHome) {
              e.preventDefault();
              onNavigateHome();
            }
          }}
        >
          <img src="/assets/logo.png" alt="Multisensorial RD" width="230" height="42" loading="lazy" />
        </a>
        <a href="tel:+18093065040">+1 (809) 306-5040</a>
        <a 
          href="https://www.centromultisensorial.com/" 
          onClick={(e) => {
            if (onNavigateHome) {
              e.preventDefault();
              onNavigateHome();
            }
          }}
        >
          Visitar el sitio del centro
        </a>
      </footer>
    </div>
  );
}
