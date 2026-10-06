import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import './JornadaEstePage.css';

const miniTestimonialQuotes = [
  "“Es la mejor decisión que hemos hecho como familia.”",
  "“Mi hijo ha avanzado muchísimo.”",
  "“Acabo de recibir la palabra más deseada: «mamá».”",
  "“Ya se sabe las vocales, sabe diferenciarlas.”",
  "“El niño decía nada. Ya dice mamá y papá, mami y papi.”",
  "“Ya me entiende cuando yo le hablo.”",
  "“Le digo ven y viene, le digo pásame eso y me lo pasa.”",
  "“Yo pude ver múchisimos cambios en Samuel.”",
  "“Pude ver resultados con el método en tan solo 15 días, ya dejó de hacer los sonidos y correr de lado a lado.”",
  "“Eso que ustedes hacen es demasiado maravilloso.”"
];

const WA_PUNTA_CANA = "https://wa.me/18093065040?text=Hola%2C%20me%20interesa%20la%20jornada%20Tomatis%20en%20Punta%20Cana%2C%20en%20Peque%C3%B1ines%20Paso%20a%20Paso.%20Quisiera%20orientaci%C3%B3n%20para%20mi%20hijo%20y%20conocer%20fechas%2C%20horarios%20y%20disponibilidad.";
const MAP_SEARCH_PUNTA_CANA = "https://www.google.com/maps/search/?api=1&query=Centro%20de%20Educaci%C3%B3n%20Infantil%20Peque%C3%B1ines%20Paso%20a%20Paso%2C%20Residencial%20Rijo%2C%20detr%C3%A1s%20de%20los%20paneles%20solares%20de%20CEPM.%20B%C3%A1varo%2C%20Punta%20Cana.";
const COORDS_PUNTA_CANA = [18.5565510, -68.3691611];

export default function PuntaCanaPage({ onNavigateHome }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showFixedCta, setShowFixedCta] = useState(false);
  const mapRef = useRef(null);
  const leafletMapInstance = useRef(null);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Jornada Tomatis en Punta Cana | Centro Multisensorial RD";

    const handleScroll = () => {
      setShowFixedCta(window.scrollY > 380);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.title = prevTitle;
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Leaflet map setup for Punta Cana
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
      }).setView(COORDS_PUNTA_CANA, 12);

      window.L.control.zoom({ position: 'bottomright' }).addTo(map);
      window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 8,
        maxZoom: 16,
        attribution: '&copy; OpenStreetMap'
      }).addTo(map);

      const marker = window.L.marker(COORDS_PUNTA_CANA, {
        title: 'Pequeñines Paso a Paso - Bávaro, Punta Cana',
        icon: window.L.divIcon({
          className: 'locality-marker map-marker-selected',
          html: '<span class="map-logo"><img src="/assets/pequenines-logo.png" alt="Sede" style="height:28px;object-fit:contain;" /></span>',
          iconSize: [142, 46],
          iconAnchor: [71, 23]
        })
      }).addTo(map).bindTooltip('Sede: Pequeñines Paso a Paso', {
        permanent: true,
        direction: 'top',
        offset: [0, -27],
        className: 'locality-label'
      });

      marker.on('click', () => map.flyTo(COORDS_PUNTA_CANA, 13, { duration: 0.85 }));

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
      leafletMapInstance.current.flyTo(COORDS_PUNTA_CANA, 13, { duration: 0.85 });
    }
  };

  const toggleFaq = (idx) => {
    setActiveFaq(prev => prev === idx ? null : idx);
  };

  return (
    <div className="compact-page" data-city="Punta Cana">
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
          <a className="nav-link" href="#sede">Sede</a>
          <a className="nav-link" href="#preguntas">Preguntas</a>
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
            href={WA_PUNTA_CANA} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Quiero orientación
          </a>
        </nav>
      </header>

      <main id="contenido">
        {/* HERO */}
        <section className="hero compact-hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-grid section-wrap">
            <div className="hero-copy">
              <span className="hero-kicker-badge">PUNTA CANA · MÉTODO TOMATIS® OFICIAL</span>
              <h1 id="hero-title">
                ¡Por fin en <span className="text-brand-gradient">Punta Cana</span>! <span className="text-brand-highlight">Terapia intensiva</span> para niños con condición.
              </h1>
              <p className="hero-description">
                Estimulación neuroauditiva clínica en Bávaro para niños de 2 a 18 años con autismo, TDAH o retraso del habla. Sin medicamentos y con evaluación previa individual.
              </p>
              <div className="hero-actions">
                <a className="button hero-cta-button" href={WA_PUNTA_CANA} target="_blank" rel="noopener noreferrer">
                  Consultar cupos por WhatsApp →
                </a>
              </div>
            </div>

            <figure className="hero-visual">
              <div className="photo-crop">
                <img 
                  src="/assets/family-playing.webp" 
                  alt="Padre e hijo jugando y conectando" 
                  width="1536" 
                  height="1024" 
                  fetchPriority="high" 
                />
              </div>
            </figure>
          </div>
        </section>


        {/* MEDIA PRESENCE */}
        <section className="media-presence" aria-label="Presencia en medios">
          <div className="media-heading section-wrap">
            <p>Visto en medios nacionales</p>
          </div>
          <div className="media-window">
            <div className="media-track">
              <div className="media-group">
                <a className="media-logo logo-azulpodcast" href="https://www.youtube.com/watch?v=ZKI_bcbkVI0" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/media-azulpodcast.webp" alt="Azul Podcast" width="160" height="90" loading="lazy" />
                </a>
                <a className="media-logo logo-colorvision" href="https://www.youtube.com/watch?v=NSRzUZ-Tqhc" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/media-colorvision.webp" alt="Color Visión" width="160" height="90" loading="lazy" />
                </a>
                <a className="media-logo logo-estonoesradio" href="https://www.youtube.com/watch?v=NK1u6dsNqBo" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/media-estonoesradio.webp" alt="Esto No Es Radio" width="160" height="90" loading="lazy" />
                </a>
                <a className="media-logo logo-lamirada" href="https://www.youtube.com/watch?v=JiJXut5kviU" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/media-lamirada.webp" alt="La Mirada" width="160" height="90" loading="lazy" />
                </a>
                <a className="media-logo logo-rnn" href="https://www.centromultisensorial.com/" target="_blank" rel="noopener noreferrer">
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

        {/* PROBLEM / EVERYDAY CHALLENGES */}
        <section className="family-story" id="tu-familia" aria-labelledby="family-title">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">EL DÍA A DÍA</p>
              <h2 id="family-title">
                ¿Te resulta<br />
                <span><mark className="text-highlight" data-highlight>familiar?</mark></span>
              </h2>
            </div>

            <ul className="moment-grid problem-grid">
              <li className="moment-card">
                <img src="/assets/family-understanding.webp" alt="Dificultad para comunicarse" width="1536" height="1024" loading="lazy" />
                <div className="moment-copy">
                  <h3>Adivinar lo que necesita</h3>
                  <p>Te toma de la mano pero cuesta saber si tiene hambre, dolor o frustración.</p>
                </div>
              </li>
              <li className="moment-card">
                <img src="/assets/family-sounds.webp" alt="Sensibilidad a ruidos o estímulos" width="1536" height="1024" loading="lazy" />
                <div className="moment-copy">
                  <h3>Sensibilidad a estímulos</h3>
                  <p>Los ruidos fuertes o lugares nuevos le abruman e interrumpen las salidas.</p>
                </div>
              </li>
              <li className="moment-card">
                <img src="/assets/family-questions.webp" alt="Búsqueda de orientación clara" width="1536" height="1024" loading="lazy" />
                <div className="moment-copy">
                  <h3>Dudas sobre qué sigue</h3>
                  <p>Múltiples consultas previas, pero sin un plan práctico para hacer en casa.</p>
                </div>
              </li>
            </ul>

            <div className="compact-outcome">
              <p className="scroll-phrase">Un camino claro para entender a tu hijo.</p>
              <span>El Método Tomatis® reentrena cómo el cerebro procesa los sonidos para devolver calma, atención y conexión.</span>
            </div>
          </div>
        </section>

        {/* PROGRAM STRUCTURE */}
        <section className="program" id="programa" aria-labelledby="program-title">
          <div className="section-wrap program-inner">
            <div className="program-heading">
              <p className="eyebrow">PROGRAMA INTENSIVO · PUNTA CANA</p>
              <h2 id="program-title">
                13 días para avanzar.<br />
                <span><mark className="text-highlight highlight-blue" data-highlight>Paso a paso.</mark></span>
              </h2>
              <p>Estimulación auditiva con música modificada, juego guiado y acompañamiento familiar.</p>
            </div>

            <div className="program-stats" aria-label="Duración del programa">
              <div><strong>13</strong><span>días seguidos</span></div>
              <div><strong>2</strong><span>horas diarias</span></div>
              <div><strong>26</strong><span>horas de estímulo</span></div>
            </div>

            <ol className="program-steps">
              <li data-scroll-rail>
                <span>01</span>
                <div><h3>Evaluación individual</h3><p>Perfil de escucha y metas de tu hijo.</p></div>
              </li>
              <li data-scroll-rail>
                <span>02</span>
                <div><h3>Sesiones Tomatis®</h3><p>Música procesada con auriculares de conducción ósea.</p></div>
              </li>
              <li data-scroll-rail>
                <span>03</span>
                <div><h3>Plan para el hogar</h3><p>Informe detallado y pautas para la familia.</p></div>
              </li>
            </ol>

            <div className="program-conditions">
              <p><strong>Modalidad:</strong> Turno diario fijo de 2 horas. Un familiar lo acompaña cada día.</p>
            </div>

            <div className="compact-team">
              <div className="compact-team-faces">
                <img src="/assets/mery.webp" alt="Mery Torrealba" width="400" height="480" loading="lazy" />
                <img src="/assets/carlos.webp" alt="Carlos Eduardo Pérez" width="400" height="480" loading="lazy" />
              </div>
              <div>
                <strong>Mery Torrealba y Carlos Eduardo Pérez</strong>
                <p>Consultores certificados Tomatis® Nivel 4</p>
                <a className="directory-link" href="https://www.tomatis.com/es/profesional/republica-dominicana/" target="_blank" rel="noopener noreferrer">
                  Verificar acreditación oficial en Tomatis.com ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* COLLAGE REAL MOMENTS */}
        <section className="session-collage section-wrap" id="familias" aria-labelledby="collage-title">
          <div className="collage-heading">
            <div>
              <p className="eyebrow">MOMENTOS REALES</p>
              <h2 id="collage-title">Así se vive.<br /><span>En familia.</span></h2>
            </div>
          </div>

          <div className="session-scenes">
            <figure className="session-scene scene-1">
              <img src="/assets/families/photo-01.webp" alt="Familia en sesión" loading="lazy" decoding="async" />
            </figure>
            <figure className="session-scene scene-2">
              <video 
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
              <img src="/assets/families/photo-04.webp" alt="Actividad de escucha" loading="lazy" decoding="async" />
            </figure>
            <figure className="session-scene scene-4">
              <img src="/assets/families/photo-11.webp" alt="Acompañamiento cercano" loading="lazy" decoding="async" />
            </figure>
            <figure className="session-scene scene-5">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                preload="metadata" 
                poster="/assets/families/clip-18.webp" 
                src="/assets/families/loop-18.mp4" 
                aria-label="Interacción lúdica"
              />
            </figure>
            <figure className="session-scene scene-6">
              <img src="/assets/families/photo-03.webp" alt="Progreso en familia" loading="lazy" decoding="async" />
            </figure>
          </div>
        </section>

        {/* VENUE & LOCATION */}
        <section className="locations section-wrap" id="sede" aria-labelledby="locations-title">
          <div className="locations-heading">
            <div>
              <p className="eyebrow">UBICACIÓN CONFIRMADA</p>
              <h2 id="locations-title">Sede Bávaro, Punta Cana</h2>
            </div>
          </div>

          <div className="venue-overview">
            <article className="venue-card" style={{ gridColumn: '1 / -1', maxWidth: '780px', margin: '0 auto', width: '100%' }}>
              <p className="venue-type">Sede Oficial de la Jornada</p>
              <h3 className="venue-wordmark">
                <img src="/assets/pequenines-logo.png" alt="Pequeñines Paso a Paso" width="1774" height="887" loading="lazy" decoding="async" />
              </h3>
              <address>
                <strong>Centro de Educación Infantil Pequeñines Paso a Paso</strong>
                <span>Residencial Rijo · Detrás de los paneles solares de CEPM, Bávaro.</span>
              </address>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '16px' }}>
                <a className="button venue-cta" href={WA_PUNTA_CANA} target="_blank" rel="noopener noreferrer">
                  Apartar cupo en esta sede
                </a>
                <a className="venue-map-link" href={MAP_SEARCH_PUNTA_CANA} target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'center' }}>
                  Abrir en Google Maps ↗
                </a>
              </div>
            </article>
          </div>

          <div className="locations-card" style={{ marginTop: '24px' }}>
            <div className="locations-toolbar">
              <strong>Mapa · Bávaro, Punta Cana</strong>
              <button type="button" className="map-overview" onClick={handleCenterMap}>
                Centrar mapa
              </button>
            </div>
            <div 
              className="geographic-map" 
              ref={mapRef}
              id="locations-map" 
              aria-label="Mapa de Punta Cana"
            >
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="faqs section-wrap" id="preguntas" aria-labelledby="faq-title">
          <div className="faq-intro">
            <p className="eyebrow">PREGUNTAS FRECUENTES</p>
            <h2 id="faq-title">Lo esencial.<br /><span>Sin rodeos.</span></h2>
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
                  <span>¿Para qué edades está recomendado?</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  <p>Para niños y jóvenes de <strong>2 a 18 años</strong>. En la evaluación inicial se analiza su perfil sensorial para confirmar que califica.</p>
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
                  <span>¿Qué hace el niño en cada sesión?</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  <p>Lleva auriculares especiales Tomatis® de conducción ósea mientras escucha música modificada y participa en actividades lúdicas guiadas.</p>
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
                  <span>¿Cuál es el formato de asistencia?</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  <p><strong>13 días continuos, 2 horas al día</strong> en un turno fijo asignado, acompañados siempre por un adulto.</p>
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
                  <span>¿Cómo aparto un cupo en Bávaro?</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  <p>Los cupos están limitados a 6 niños para garantizar máxima dedicación. Escríbenos por WhatsApp para reservar.</p>
                  <a href={WA_PUNTA_CANA} target="_blank" rel="noopener noreferrer">
                    Consultar cupos disponibles →
                  </a>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* FINAL CONTACT CTA */}
        <section className="compact-contact section-wrap">
          <p className="eyebrow">CONTACTO DIRECTO</p>
          <h2>
            ¿Quieres saber si la jornada<br />
            <span><mark className="text-highlight">es para tu hijo?</mark></span>
          </h2>
          <p>Escríbenos para recibir orientación personalizada y verificar cupos en Bávaro.</p>
          <a className="button" href={WA_PUNTA_CANA} target="_blank" rel="noopener noreferrer">
            Hablar por WhatsApp con un especialista
          </a>
          <a className="compact-phone" href="tel:+18093065040">
            +1 (809) 306-5040
          </a>
        </section>
      </main>

      {/* FIXED BOTTOM CTA (Only appears after scrolling past hero) */}
      {showFixedCta && (
        <div className="fixed-cta">
          <a className="button" href={WA_PUNTA_CANA} target="_blank" rel="noopener noreferrer">
            Consultar cupos por WhatsApp →
          </a>
        </div>
      )}

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
          Sitio Oficial Centro Multisensorial RD
        </a>
      </footer>
    </div>
  );
}
