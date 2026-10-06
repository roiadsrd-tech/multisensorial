import React, { useState, useEffect, useRef } from 'react';
import './JornadaEstePage.css';

const WA_PUNTA_CANA = "https://wa.me/18093065040?text=Hola%2C%20me%20interesa%20la%20jornada%20Tomatis%20en%20Punta%20Cana%2C%20en%20Peque%C3%B1ines%20Paso%20a%20Paso.%20Quisiera%20orientaci%C3%B3n%20para%20mi%20hijo%20y%20conocer%20fechas%2C%20horarios%2C%20qu%C3%A9%20incluye%20el%20programa%20y%20el%20pin%20de%20la%20sede.";
const WA_HIGUEY = "https://wa.me/18093065040?text=Hola%2C%20me%20interesa%20la%20jornada%20Tomatis%20en%20Hig%C3%BCey.%20Quisiera%20orientaci%C3%B3n%20para%20mi%20hijo%20y%20conocer%20fechas%2C%20sede%2C%20horarios%20y%20qu%C3%A9%20incluye%20el%20programa.";

const MAP_SEARCH_PUNTA_CANA = "https://www.google.com/maps/search/?api=1&query=Centro%20de%20Educaci%C3%B3n%20Infantil%20Peque%C3%B1ines%20Paso%20a%20Paso%2C%20Residencial%20Rijo%2C%20detr%C3%A1s%20de%20los%20paneles%20solares%20de%20CEPM.%20B%C3%A1varo%2C%20Punta%20Cana.";
const MAP_SEARCH_HIGUEY = "https://www.google.com/maps/search/?api=1&query=Hig%C3%BCey%2C%20La%20Altagracia%2C%20Rep%C3%BAblica%20Dominicana";

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

export default function JornadaEstePage({ onNavigateHome, initialCity = 'punta-cana' }) {
  const [city, setCity] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('higuey')) return 'higuey';
    }
    return initialCity;
  });

  const [videosPaused, setVideosPaused] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeReviewSound, setActiveReviewSound] = useState(null);

  const mapRef = useRef(null);
  const leafletMapInstance = useRef(null);
  const videoRefs = useRef([]);

  const isPuntaCana = city === 'punta-cana';
  const whatsappUrl = isPuntaCana ? WA_PUNTA_CANA : WA_HIGUEY;

  // Sync title & meta
  useEffect(() => {
    const prevTitle = document.title;
    document.title = isPuntaCana 
      ? "Jornada Tomatis en Punta Cana | Centro Multisensorial RD" 
      : "Jornada Tomatis en Higüey | Centro Multisensorial RD";
    return () => {
      document.title = prevTitle;
    };
  }, [isPuntaCana]);

  // Leaflet map setup
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

      const coords = isPuntaCana ? [18.5565510, -68.3691611] : [18.6131313, -68.7114484];
      const cityName = isPuntaCana ? 'Punta Cana' : 'Higüey';

      const map = window.L.map(mapRef.current, {
        scrollWheelZoom: false,
        zoomControl: false,
        attributionControl: false,
        dragging: !window.L.Browser.mobile
      }).setView(coords, 11);

      window.L.control.zoom({ position: 'bottomright' }).addTo(map);
      window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 7,
        maxZoom: 16,
        attribution: '&copy; OpenStreetMap'
      }).addTo(map);

      if (!isPuntaCana) {
        const marker = window.L.marker(coords, {
          title: `Jornada en ${cityName}`,
          icon: window.L.divIcon({
            className: 'locality-marker map-marker-selected',
            html: '<span class="map-logo"><img src="/assets/logo.png" alt="" /></span>',
            iconSize: [142, 46],
            iconAnchor: [71, 23]
          })
        }).addTo(map).bindTooltip(cityName, {
          permanent: true,
          direction: 'top',
          offset: [0, -27],
          className: 'locality-label'
        });
        marker.on('click', () => map.flyTo(coords, 11, { duration: 0.85 }));
      }

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
  }, [city, isPuntaCana]);

  const handleCenterMap = () => {
    if (leafletMapInstance.current) {
      const coords = isPuntaCana ? [18.5565510, -68.3691611] : [18.6131313, -68.7114484];
      leafletMapInstance.current.flyTo(coords, 11, { duration: 0.85 });
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
    <div className={`compact-page ${!isPuntaCana ? 'higuey-page' : ''}`} data-city={isPuntaCana ? "Punta Cana" : "Higüey"}>
      {/* SKIP LINK */}
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

        {/* City Selector Tabs */}
        <div className="jornada-switcher-wrap">
          <div className="jornada-city-tabs">
            <button 
              type="button" 
              className={`jornada-city-tab ${isPuntaCana ? 'is-active' : ''}`}
              onClick={() => {
                setCity('punta-cana');
                if (typeof window !== 'undefined') window.history.replaceState({}, '', '/punta-cana');
              }}
            >
              Punta Cana
            </button>
            <button 
              type="button" 
              className={`jornada-city-tab ${!isPuntaCana ? 'is-active' : ''}`}
              onClick={() => {
                setCity('higuey');
                if (typeof window !== 'undefined') window.history.replaceState({}, '', '/higuey');
              }}
            >
              Higüey
            </button>
          </div>
        </div>

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
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Quiero orientación
          </a>
        </nav>
      </header>

      <main id="contenido">
        {/* ================= HERO SECTION ================= */}
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-grid section-wrap">
            <div className="hero-copy">
              <p className="eyebrow">Jornada Tomatis · {isPuntaCana ? "Punta Cana" : "Higüey"}</p>
              
              {isPuntaCana ? (
                <h1 id="hero-title">
                  Quieres ayudarlo.<br />¿Por dónde<br />
                  <span><mark className="text-highlight" data-highlight>empiezas?</mark></span>
                </h1>
              ) : (
                <h1 id="hero-title">
                  ¿Qué necesita<br />
                  <span>mi hijo?</span>
                </h1>
              )}

              {isPuntaCana ? (
                <p className="hero-description">
                  Tomatis para tu hijo. <strong>Un siguiente paso claro para tu familia.</strong>
                </p>
              ) : (
                <p className="hero-description">
                  Empieza con una <strong>evaluación individual</strong>, sesiones Tomatis y orientación para tu familia en Higüey.
                </p>
              )}

              <div className="hero-actions">
                <a className="button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Quiero orientación {isPuntaCana ? '' : <span aria-hidden="true">↗</span>}
                </a>
              </div>

              <p className="hero-note">
                {isPuntaCana 
                  ? "De 2 a 18 años · Evaluación individual." 
                  : "Niños y jóvenes de 2–18 años · Según valoración profesional."}
              </p>
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
              <figcaption>
                {isPuntaCana 
                  ? "Cada niño, su ritmo. Cada familia, acompañada." 
                  : "Entender sus necesidades. Acompañar su proceso."}
              </figcaption>
            </figure>
          </div>

          <div className="hero-status section-wrap">
            <span>{isPuntaCana ? "Bávaro · Punta Cana" : "Centro Multisensorial RD"}</span>
            {isPuntaCana ? (
              <a href="#localidades">Sede confirmada · Fecha por confirmar</a>
            ) : (
              <span>Fecha y sede por confirmar.</span>
            )}
          </div>
        </section>

        {/* ================= HERO QUOTES ================= */}
        <aside className="hero-quotes section-wrap" aria-label="Frases de testimonios publicados por el centro">
          <blockquote>“Es la mejor decisión que hemos hecho como familia.”</blockquote>
          <blockquote>“Eso que ustedes hacen es demasiado maravilloso.”</blockquote>
        </aside>

        {/* ================= MEDIA PRESENCE MARQUEE ================= */}
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

        {/* ================= FAMILY STORY / PROBLEM GRID ================= */}
        <section className="family-story" id="tu-familia" aria-labelledby="family-title">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">{isPuntaCana ? "El día a día no siempre es fácil" : "Lo que pasa en el día a día"}</p>
              <h2 id="family-title">
                ¿Te resulta<br />
                {isPuntaCana ? (
                  <span><mark className="text-highlight" data-highlight>familiar?</mark></span>
                ) : (
                  <span>familiar?</span>
                )}
              </h2>
              {!isPuntaCana && (
                <p>Hay momentos que te dejan con más preguntas que respuestas.</p>
              )}
            </div>

            <ul className="moment-grid problem-grid">
              <li className="moment-card">
                <img src="/assets/family-understanding.webp" alt="Madre e hijo intentando comprenderse, ilustración" width="1536" height="1024" loading="lazy" />
                <div className="moment-copy">
                  <h3>{!isPuntaCana && <span className="bullet" aria-hidden="true">•</span>}Adivinar {isPuntaCana ? "qué" : "lo que"} necesita.</h3>
                  <p>{isPuntaCana ? "Te lleva de la mano… y sigues sin saber." : "Señala, te lleva de la mano… y no sabes si quiere agua, ayuda o una pausa."}</p>
                </div>
              </li>
              <li className="moment-card">
                <img src="/assets/family-sounds.webp" alt="Una madre acompaña a su hijo durante una pausa en el parque, ilustración" width="1536" height="1024" loading="lazy" />
                <div className="moment-copy">
                  <h3>{!isPuntaCana && <span className="bullet" aria-hidden="true">•</span>}{isPuntaCana ? "Salidas interrumpidas." : "Cambiar los planes."}</h3>
                  <p>{isPuntaCana ? "Un ruido o una luz cambian los planes." : "Los ruidos o las luces le incomodan. Una salida en familia termina antes de lo esperado."}</p>
                </div>
              </li>
              <li className="moment-card">
                <img src="/assets/family-questions.webp" alt="Un padre busca orientación para su hija, ilustración" width="1536" height="1024" loading="lazy" />
                <div className="moment-copy">
                  <h3>{!isPuntaCana && <span className="bullet" aria-hidden="true">•</span>}{isPuntaCana ? "¿Y ahora qué?" : "No saber por dónde seguir."}</h3>
                  <p>{isPuntaCana ? "Muchas citas. Ningún siguiente paso claro." : "Entre citas, consejos y videos, sigues buscando un próximo paso para tu hijo."}</p>
                </div>
              </li>
            </ul>

            {isPuntaCana ? (
              <div className="compact-outcome">
                <p className="scroll-phrase" data-scroll-words>Entenderlo mejor. Acompañarlo con claridad.</p>
                <span>Una petición más clara. Una salida a su ritmo. Saber qué hacer en casa. Metas que se conversan en la evaluación.</span>
              </div>
            ) : (
              <p className="story-bridge">Empieza por conocer sus necesidades. No tienes que resolver cada pregunta a solas.</p>
            )}
          </div>
        </section>

        {/* HIGÜEY SPECIFIC: GOALS GRID */}
        {!isPuntaCana && (
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
        )}

        {/* ================= PROGRAM SECTION ================= */}
        <section className="program" id="programa" aria-labelledby="program-title">
          <div className="section-wrap program-inner">
            <div className="program-heading">
              <p className="eyebrow">La jornada {isPuntaCana ? "Tomatis · Punta Cana" : "en Higüey"}</p>
              {isPuntaCana ? (
                <h2 id="program-title">
                  Conocerlo.<br />
                  <span><mark className="text-highlight highlight-blue" data-highlight>Acompañarlo.</mark></span>
                </h2>
              ) : (
                <h2 id="program-title">
                  Un plan para<br />
                  <span>acompañarlo.</span>
                </h2>
              )}
              <p>
                {isPuntaCana 
                  ? "Escucha con música procesada, juego adaptado y orientación para casa." 
                  : "Evaluación individual, sesiones Tomatis y orientación familiar. Un programa de escucha con música procesada y auriculares de conducción aérea y ósea."}
              </p>
            </div>

            <div className="program-stats" aria-label="Duración de un bloque de sesiones">
              <div><strong>13</strong><span>días continuos</span></div>
              <div><strong>2</strong><span>{isPuntaCana ? "horas al día" : "horas por día"}</span></div>
              <div><strong>26</strong><span>horas de sesiones</span></div>
            </div>

            <ol className="program-steps">
              <li data-scroll-rail>
                <span>01</span>
                <div>
                  <h3>{isPuntaCana ? "Evaluación individual." : "Conocerlo."}</h3>
                  {!isPuntaCana && <p>Evaluación para orientar los objetivos y valorar su participación.</p>}
                </div>
              </li>
              <li data-scroll-rail>
                <span>02</span>
                <div>
                  <h3>{isPuntaCana ? "Sesiones Tomatis." : "Acompañarlo."}</h3>
                  {!isPuntaCana && <p>Sesiones de escucha, juego y actividades adaptadas.</p>}
                </div>
              </li>
              <li data-scroll-rail>
                <span>03</span>
                <div>
                  <h3>{isPuntaCana ? "Informe y orientación familiar." : "Saber qué sigue."}</h3>
                  {!isPuntaCana && <p>Orientación familiar e informe con recomendaciones.</p>}
                </div>
              </li>
            </ol>

            <div className="program-conditions">
              <p>
                <strong>{isPuntaCana ? "Turno fijo · Adulto acompañante." : "Asistencia:"}</strong> Asistencia a las 26 horas, incluidos fines de semana y feriados.
              </p>
              {!isPuntaCana && (
                <details>
                  <summary>Etapas del programa e inscripción</summary>
                  <p>El proceso informado contempla 3 etapas con descansos de aproximadamente 4 semanas. Estos 13 días corresponden a un bloque de 26 horas; consulta cómo se organizan las etapas posteriores.</p>
                  <p>Antes de reservar, confirma fechas, sede, horarios, inversión total, qué etapas incluye, anticipo y condiciones de cancelación. Los objetivos y resultados son individuales.</p>
                </details>
              )}
            </div>

            {isPuntaCana && (
              <div className="compact-team">
                <div className="compact-team-faces">
                  <img src="/assets/mery.webp" alt="Mery Torrealba" width="400" height="480" loading="lazy" />
                  <img src="/assets/carlos.webp" alt="Carlos Eduardo Pérez" width="400" height="480" loading="lazy" />
                </div>
                <div>
                  <strong>Mery Torrealba y Carlos Eduardo Pérez</strong>
                  <p>Consultores Tomatis®</p>
                  <a className="directory-link" href="https://www.tomatis.com/es/profesional/republica-dominicana/" target="_blank" rel="noopener noreferrer">
                    Ver equipo en el directorio oficial
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* HIGÜEY SPECIFIC: TEAM SECTION */}
        {!isPuntaCana && (
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
        )}

        {/* ================= COLLAGE REAL MOMENTS ================= */}
        <section className="session-collage section-wrap" id="familias" aria-labelledby="collage-title">
          <div className="collage-heading">
            <div>
              <p className="eyebrow">{isPuntaCana ? "Momentos reales del centro" : "Una jornada por dentro"}</p>
              <h2 id="collage-title">
                {isPuntaCana ? (
                  <>Así se vive.<br /><span>En familia.</span></>
                ) : (
                  <>Escuchar. Jugar.<br /><span>Estar juntos.</span></>
                )}
              </h2>
            </div>
            <div className="collage-aside">
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

        {/* HIGÜEY SPECIFIC: REAL REVIEWS VIDEOS */}
        {!isPuntaCana && (
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
        )}

        {/* ================= FAQS SECTION ================= */}
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
                  {isPuntaCana ? (
                    <>
                      <p>Incluye evaluación, 26 horas de sesiones, orientación familiar e informe. La sede es Pequeñines Paso a Paso, en Bávaro; la fecha está por confirmar.</p>
                      <p>Escríbenos para confirmar fechas, horarios, inversión y condiciones antes de reservar.</p>
                    </>
                  ) : (
                    <>
                      <p>La fecha y la sede exacta de <strong>Higüey</strong> están pendientes de confirmación.</p>
                      <p>Consulta con nuestro equipo disponibilidad, sedes sugeridas e inversión antes de separar tu cupo.</p>
                    </>
                  )}
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Quiero orientación
                  </a>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* ================= LOCATIONS & MAP SECTION ================= */}
        <section className="locations section-wrap" id="localidades" aria-labelledby="locations-title">
          <div className="locations-heading">
            <div>
              <p className="eyebrow">{isPuntaCana ? "Sede confirmada · Fecha por confirmar" : "La jornada en tu localidad"}</p>
              <h2 id="locations-title">
                Tu próximo paso.<br />
                {isPuntaCana ? (
                  <span><mark className="text-highlight" data-highlight>En Punta Cana.</mark></span>
                ) : (
                  <span>En Higüey.</span>
                )}
              </h2>
            </div>
          </div>

          {isPuntaCana ? (
            <div className="venue-overview">
              <figure className="locality-photo">
                <img 
                  src="/assets/punta-cana-coast-v2.webp" 
                  alt="Vista panorámica de una playa de Punta Cana" 
                  width="1600" 
                  height="455" 
                  loading="lazy" 
                />
                <figcaption>
                  <span>Imagen de Punta Cana; no representa la sede.</span>
                  <a href="https://commons.wikimedia.org/wiki/File:Punta_Cana10.jpg" target="_blank" rel="noopener noreferrer">
                    Inmouchar · Dominio público
                  </a>
                </figcaption>
              </figure>
              <article className="venue-card">
                <p className="venue-type">Centro de Educación Infantil</p>
                <h3 className="venue-wordmark">
                  <img src="/assets/pequenines-logo.png" alt="Pequeñines Paso a Paso" width="1774" height="887" loading="lazy" decoding="async" />
                </h3>
                <address>
                  <strong>Residencial Rijo · Bávaro</strong>
                  <span>Detrás de los paneles solares de CEPM.</span>
                </address>
                <a className="venue-map-link" href={MAP_SEARCH_PUNTA_CANA} target="_blank" rel="noopener noreferrer">
                  Buscar sede en Google Maps
                </a>
                <a className="button venue-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Quiero orientación
                </a>
              </article>
            </div>
          ) : (
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
          )}

          {/* Interactive Map Box */}
          <details className="compact-map" open>
            <summary>
              Explorar la zona en el mapa <span aria-hidden="true">+</span>
            </summary>
            <div className="locations-card">
              <div className="locations-toolbar">
                <strong>{isPuntaCana ? "Punta Cana · Vista de la zona" : "Higüey · República Dominicana"}</strong>
                <button type="button" className="map-overview" id="map-overview" onClick={handleCenterMap}>
                  Centrar mapa
                </button>
              </div>
              <div 
                className="geographic-map" 
                ref={mapRef}
                id="locations-map" 
                data-show-marker={isPuntaCana ? "false" : "true"} 
                aria-label={isPuntaCana ? "Mapa de Punta Cana" : "Mapa de Higüey"}
              >
              </div>
              <p className="map-note">
                {isPuntaCana 
                  ? "Vista general de Punta Cana. Solicita el pin de la sede a nuestro equipo antes de llegar." 
                  : "El punto representa la localidad. La dirección de la sede se informará al confirmarla."}
              </p>
            </div>
          </details>
        </section>

        {/* COMPACT CONTACT CTA SECTION */}
        <section className="compact-contact section-wrap">
          <p className="eyebrow">Hablemos de tu caso</p>
          <h2>
            ¿Quieres saber si la jornada<br />
            <span><mark className="text-highlight">es para tu familia?</mark></span>
          </h2>
          <p>Escríbenos para conocer más detalles sobre la jornada de {isPuntaCana ? "Punta Cana" : "Higüey"}, cupos disponibles y el proceso para tu hijo.</p>
          <a className="button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Quiero orientación
          </a>
          <a className="compact-phone" href="tel:+18093065040">
            +1 (809) 306-5040
          </a>
        </section>
      </main>

      {/* FIXED BOTTOM CTA */}
      <div className="fixed-cta">
        <a className="button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Quiero orientación
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
