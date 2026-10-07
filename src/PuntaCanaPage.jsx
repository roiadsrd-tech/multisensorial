import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
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

const quotesRow1 = miniTestimonialQuotes.filter((_, i) => i % 2 === 0);
const quotesRow2 = miniTestimonialQuotes.filter((_, i) => i % 2 !== 0);

const WA_PUNTA_CANA = "https://wa.me/18093065040?text=Hola%2C%20quisiera%20apartar%20un%20horario%20para%20la%20jornada%20intensiva%20en%20Punta%20Cana.";
const MAP_SEARCH_PEQUENINES = "https://www.google.com/maps/search/?api=1&query=Centro%20de%20Educaci%C3%B3n%20Infantil%20Peque%C3%B1ines%20Paso%20a%20Paso%2C%20Residencial%20Rijo%2C%20detr%C3%A1s%20de%20los%20paneles%20solares%20de%20CEPM.%20B%C3%A1varo%2C%20Punta%20Cana.";
const MAP_SEARCH_SPOTCAST = "https://www.google.com/maps/search/?api=1&query=Spotcast+Cafe+Plaza+Boulevard+Center+Avenida+Estados+Unidos+Bavaro+Punta+Cana";
const COORDS_PEQUENINES = [18.5565510, -68.3691611];
const COORDS_SPOTCAST = [18.66278, -68.42921];

export default function PuntaCanaPage({ onNavigateHome }) {
  const [activeFaq, setActiveFaq] = useState(1);
  const [showFixedCta, setShowFixedCta] = useState(false);
  const mapRef = useRef(null);
  const leafletMapInstance = useRef(null);

  const toggleFaq = (id) => {
    setActiveFaq(prev => (prev === id ? null : id));
  };

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
      });

      window.L.control.zoom({ position: 'bottomright' }).addTo(map);
      window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 8,
        maxZoom: 16,
        attribution: '&copy; OpenStreetMap'
      }).addTo(map);

      // Marker 1: Spotcast Café (Charla inicial)
      const markerSpotcast = window.L.marker(COORDS_SPOTCAST, {
        title: 'Spotcast Café · Charla Inicial',
        icon: window.L.divIcon({
          className: 'compact-map-pin-wrap',
          html: '<div class="pin-badge pin-spotcast"><span class="pin-order-num">#1</span><div class="pin-logo-wrap"><img src="/assets/spotcast-square.webp" alt="Spotcast" /></div><span class="pin-label">Charla Inicial</span></div>',
          iconSize: [160, 48],
          iconAnchor: [80, 48]
        })
      }).addTo(map);

      markerSpotcast.bindPopup(
        '<strong>Spotcast Café</strong><br><span style="font-size:12px;color:#c2531a;font-weight:700;">Charla Inicial Multidisciplinaria (Sáb 17 Oct)</span><br><span style="font-size:12px;">Plaza Boulevard Center, Bávaro</span>',
        { offset: [0, -32] }
      );

      // Marker 2: Pequeñines Paso a Paso (Evaluaciones y Terapias)
      const markerPequenines = window.L.marker(COORDS_PEQUENINES, {
        title: 'Pequeñines Paso a Paso · Evaluaciones & Terapias',
        icon: window.L.divIcon({
          className: 'compact-map-pin-wrap',
          html: '<div class="pin-badge pin-pequenines"><span class="pin-order-num">#2</span><div class="pin-logo-wrap"><img src="/assets/pequenines-square.webp" alt="Pequeñines" /></div><span class="pin-label">Evaluaciones & Terapias</span></div>',
          iconSize: [210, 48],
          iconAnchor: [105, 48]
        })
      }).addTo(map);

      markerPequenines.bindPopup(
        '<strong>Pequeñines Paso a Paso</strong><br><span style="font-size:12px;color:#1e40af;font-weight:700;">Sede de Evaluaciones y Terapias (18 al 31 Oct)</span><br><span style="font-size:12px;">Residencial Rijo · CEPM, Bávaro</span>',
        { offset: [0, -32] }
      );

      const bounds = window.L.latLngBounds([COORDS_SPOTCAST, COORDS_PEQUENINES]);
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 12 });

      markerSpotcast.on('click', () => {
        markerSpotcast.openPopup();
        map.flyTo(COORDS_SPOTCAST, 13, { duration: 0.6 });
      });
      markerPequenines.on('click', () => {
        markerPequenines.openPopup();
        map.flyTo(COORDS_PEQUENINES, 13, { duration: 0.6 });
      });

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
    if (leafletMapInstance.current && window.L) {
      const bounds = window.L.latLngBounds([COORDS_SPOTCAST, COORDS_PEQUENINES]);
      leafletMapInstance.current.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
    }
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
          <img src="/assets/logo.webp" alt="Multisensorial RD" width="260" height="48" fetchPriority="high" />
        </a>

        <nav aria-label="Navegación principal">
          <a className="nav-link" href="#cronograma">Cronograma</a>
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
            <WhatsAppIcon size={17} color="#000000" />
            <span>Quiero orientación</span>
          </a>
        </nav>
      </header>

      <main id="contenido">
        {/* HERO */}
        <section className="hero compact-hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-grid section-wrap">
            <div className="hero-copy">
              <p className="eyebrow">SANTO DOMINGO TRASLADA SU MÉTODO EXCLUSIVO</p>
              <h1 id="hero-title">
                ¡Por fin en <span className="text-brand-gradient">Punta Cana</span>! <span className="text-brand-highlight">Terapia intensiva</span> para niños con condición.
              </h1>
              <p className="hero-description">
                El método neurosensorial de la capital, por 13 días en Punta Cana.
              </p>
              <div className="hero-actions">
                <a className="button hero-cta-button" href={WA_PUNTA_CANA} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon size={20} color="#000000" />
                  <span>Consultar cupos por WhatsApp →</span>
                </a>
              </div>
            </div>

            <figure className="hero-visual">
              <div className="photo-crop">
                <video
                  src="/0929-copy.mp4"
                  poster="/0929-poster.webp"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  title="Jornada Tomatis Punta Cana"
                />
              </div>
            </figure>
          </div>

          {/* Minimal Testimonials Marquee - Desktop 1 row, Mobile 2 rows */}
          <div className="hero-quotes-marquee" aria-label="Opiniones de familias">
            {/* Desktop: 1 fila */}
            <div className="hero-quotes-track hero-quotes-track-desktop">
              {[...miniTestimonialQuotes, ...miniTestimonialQuotes].map((quote, idx) => (
                <div key={`d-${idx}`} className="hero-quote-item">
                  <span className="hero-quote-stars" aria-hidden="true">★★★★★</span>
                  <span className="hero-quote-text">{quote}</span>
                </div>
              ))}
            </div>

            {/* Mobile: 2 filas */}
            <div className="hero-quotes-track hero-quotes-track-mobile track-row-1">
              {[...quotesRow1, ...quotesRow1].map((quote, idx) => (
                <div key={`m1-${idx}`} className="hero-quote-item">
                  <span className="hero-quote-stars" aria-hidden="true">★★★★★</span>
                  <span className="hero-quote-text">{quote}</span>
                </div>
              ))}
            </div>
            <div className="hero-quotes-track hero-quotes-track-mobile track-row-2">
              {[...quotesRow2, ...quotesRow2].map((quote, idx) => (
                <div key={`m2-${idx}`} className="hero-quote-item">
                  <span className="hero-quote-stars" aria-hidden="true">★★★★★</span>
                  <span className="hero-quote-text">{quote}</span>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* MEDIA PRESENCE (Static Grid matching Main Page Hero) */}
        <section className="hero-media-static" aria-label="Presencia en medios">
          <div className="container">
            <div className="media-static-label">PRESENCIA EN MEDIOS:</div>
            <div className="media-logos-grid">
              <a
                className="media-logo-item"
                href="https://www.youtube.com/watch?v=ZKI_bcbkVI0"
                target="_blank"
                rel="noopener noreferrer"
                title="Azul Podcast"
              >
                <img src="/logosasseenin/azulpodcast.webp" alt="Azul Podcast" loading="lazy" />
              </a>
              <a
                className="media-logo-item"
                href="https://www.youtube.com/watch?v=NSRzUZ-Tqhc"
                target="_blank"
                rel="noopener noreferrer"
                title="Color Visión"
              >
                <img src="/logosasseenin/colorvision.webp" alt="Color Visión" loading="lazy" />
              </a>
              <a
                className="media-logo-item"
                href="https://www.youtube.com/watch?v=NK1u6dsNqBo"
                target="_blank"
                rel="noopener noreferrer"
                title="Esto No Es Radio"
              >
                <img src="/logosasseenin/estonoesradio.webp" alt="Esto No Es Radio" loading="lazy" />
              </a>
              <a
                className="media-logo-item"
                href="https://www.youtube.com/watch?v=JiJXut5kviU"
                target="_blank"
                rel="noopener noreferrer"
                title="La Mirada"
              >
                <img src="/logosasseenin/lamirada.webp" alt="La Mirada" loading="lazy" />
              </a>
              <a
                className="media-logo-item"
                href="https://www.youtube.com/watch?v=1HIYwVGQikY"
                target="_blank"
                rel="noopener noreferrer"
                title="RNN"
              >
                <img src="/logosasseenin/rnn.webp" alt="RNN" loading="lazy" />
              </a>
            </div>
          </div>
        </section>

        {/* 2. ¿ES ESTA JORNADA PARA TU HIJO? */}
        <section className="fit-section section-wrap" id="es-para-tu-hijo" aria-labelledby="fit-title">
          <div className="section-heading fit-heading">
            <p className="eyebrow">EVALUACIÓN TEMPRANA</p>
            <h2 id="fit-title">
              ¿Es esta jornada<br />
              <span><mark className="text-highlight">para tu hijo?</mark></span>
            </h2>
            <p className="fit-lead">
              Si notas alguna de estas señales en tu pequeño, este intensivo está diseñado para él:
            </p>
          </div>

          <div className="signals-flow">
            <div className="signal-item signal-speech">
              <div className="signal-icon-badge" aria-hidden="true">🗣️</div>
              <div className="signal-content">
                <div className="signal-header-row">
                  <h3 className="signal-title">Retraso en el habla</h3>
                  <span className="signal-tag tag-speech">Lenguaje & Expresión</span>
                </div>
                <p className="signal-desc">No dice palabras claras o se frustra al intentar comunicarse.</p>
              </div>
            </div>

            <div className="signal-item signal-attention highlight-box">
              <div className="signal-icon-badge" aria-hidden="true">👂</div>
              <div className="signal-content">
                <div className="signal-header-row">
                  <h3 className="signal-title">Falta de atención</h3>
                  <span className="signal-tag tag-attention">Conexión Sensorial</span>
                </div>
                <p className="signal-desc">Lo llamas por su nombre y parece ausente o desconectado.</p>
              </div>
            </div>

            <div className="signal-item signal-sound">
              <div className="signal-icon-badge" aria-hidden="true">🔊</div>
              <div className="signal-content">
                <div className="signal-header-row">
                  <h3 className="signal-title">Sensibilidad al ruido</h3>
                  <span className="signal-tag tag-sound">Hipersensibilidad</span>
                </div>
                <p className="signal-desc">Se tapa los oídos o colapsa con sonidos fuertes y bulla.</p>
              </div>
            </div>

            <div className="signal-item signal-progress accent-border">
              <div className="signal-icon-badge" aria-hidden="true">⏳</div>
              <div className="signal-content">
                <div className="signal-header-row">
                  <h3 className="signal-title">Sin avances</h3>
                  <span className="signal-tag tag-progress">Estancamiento</span>
                </div>
                <p className="signal-desc">Lleva meses en terapias de siempre y no arranca.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CRONOGRAMA OFICIAL Y SEDES */}
        <section className="cronograma-section section-wrap" id="cronograma" aria-labelledby="cronograma-title">
          <div className="section-heading cronograma-heading">
            <p className="eyebrow">FECHAS & UBICACIONES CONFIRMADAS</p>
            <h2 id="cronograma-title">
              Cronograma oficial<br />
              <span><mark className="text-highlight highlight-blue">y sedes en Bávaro</mark></span>
            </h2>
            <p className="cronograma-lead">
              Todo en tu propia localidad, sin viajar a Santo Domingo:
            </p>
          </div>

          {/* Timeline Milestones */}
          <div className="timeline-flow" aria-label="Calendario de la jornada">
            <div className="timeline-node">
              <div className="timeline-dot"></div>
              <div className="timeline-info">
                <div className="timeline-date-chip">🗓️ Sábado 17 de Octubre</div>
                <h4>Charla inicial multidisciplinaria</h4>
                <p>Encuentro de orientación con el equipo en <strong>Spotcast Café</strong> (Plaza Boulevard Center).</p>
              </div>
            </div>

            <div className="timeline-node">
              <div className="timeline-dot"></div>
              <div className="timeline-info">
                <div className="timeline-date-chip">🗓️ Domingo 18 de Octubre</div>
                <h4>Evaluaciones diagnósticas individuales</h4>
                <p>Diagnóstico sensorial individualizado para calibrar el protocolo exacto de cada niño.</p>
              </div>
            </div>

            <div className="timeline-node timeline-active">
              <div className="timeline-dot"></div>
              <div className="timeline-info">
                <div className="timeline-date-chip chip-highlight">🗓️ Lunes 19 de Octubre</div>
                <h4>Inicio de la terapia intensiva</h4>
                <p>2 horas diarias continuas de estimulación neurosensorial y actividades guiadas.</p>
              </div>
            </div>

            <div className="timeline-node">
              <div className="timeline-dot"></div>
              <div className="timeline-info">
                <div className="timeline-date-chip">🗓️ Viernes 31 de Octubre</div>
                <h4>Cierre y entrega de informe formal</h4>
                <p>Evaluación final evolutiva, balance de logros y entrega de informe formal para el hogar.</p>
              </div>
            </div>
          </div>

          {/* Sede Principal & Tandas Box + Mapa */}
          <div className="venue-tandas-split">
            <div className="venue-tandas-card">
              <div className="venue-header-box">
                <span className="venue-pin-badge">📍 SEDE DE EVALUACIONES Y TERAPIAS</span>
                <h3>Centro de Educación Infantil Pequeñines Paso a Paso</h3>
                <p className="venue-address">
                  Residencial Rijo, detrás de los paneles solares de CEPM, Bávaro Punta Cana.
                </p>
                <div className="venue-actions">
                  <a className="venue-gps-btn" href={MAP_SEARCH_PEQUENINES} target="_blank" rel="noopener noreferrer">
                    Abrir en Google Maps ↗
                  </a>
                </div>
              </div>

              <div className="tandas-block">
                <div className="tandas-title-row">
                  <h4>Tandas a elegir</h4>
                  <span className="tandas-capacity-badge">Solo 5 niños por grupo</span>
                </div>

                <div className="tandas-grid">
                  <div className="tanda-pill">
                    <span className="tanda-emoji">🌅</span>
                    <div className="tanda-details">
                      <strong>8:00 AM – 10:00 AM</strong>
                      <small>Turno 1 · Mañana</small>
                    </div>
                  </div>
                  <div className="tanda-pill">
                    <span className="tanda-emoji">☀️</span>
                    <div className="tanda-details">
                      <strong>10:00 AM – 12:00 PM</strong>
                      <small>Turno 2 · Media mañana</small>
                    </div>
                  </div>
                  <div className="tanda-pill">
                    <span className="tanda-emoji">🌤️</span>
                    <div className="tanda-details">
                      <strong>2:00 PM – 4:00 PM</strong>
                      <small>Turno 3 · Tarde</small>
                    </div>
                  </div>
                  <div className="tanda-pill">
                    <span className="tanda-emoji">🌆</span>
                    <div className="tanda-details">
                      <strong>4:00 PM – 6:00 PM</strong>
                      <small>Turno 4 · Atardecer</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="venue-map-panel">
              <div className="locations-toolbar">
                <strong>Ubicación · Bávaro, Punta Cana</strong>
                <button type="button" className="map-overview" onClick={handleCenterMap}>
                  Centrar mapa
                </button>
              </div>
              <div 
                className="geographic-map" 
                ref={mapRef}
                id="locations-map" 
                aria-label="Mapa de sedes en Punta Cana"
              />
            </div>
          </div>
        </section>

        {/* 4. ¿CÓMO ME INSCRIBO? (Paso a Paso) */}
        <section className="steps-section section-wrap" id="inscripcion" aria-labelledby="steps-title">
          <div className="section-heading steps-heading">
            <p className="eyebrow">PASO A PASO</p>
            <h2 id="steps-title">
              ¿Cómo me inscribo?<br />
              <span><mark className="text-highlight">Proceso fácil y transparente.</mark></span>
            </h2>
          </div>

          <div className="steps-sequence">
            <div className="step-card-num step-one">
              <div className="step-num-bubble">1</div>
              <div className="step-content">
                <h3>Solicita tu inscripción y apartado de horario por WhatsApp</h3>
                <p className="step-note">
                  <em>Es importante elegir tu tanda rápido porque los turnos se completan pronto.</em>
                </p>
              </div>
            </div>

            <div className="step-card-num step-two">
              <div className="step-num-bubble">2</div>
              <div className="step-content">
                <h3>Recibe la información de pago y tu contrato personal</h3>
                <p>Formaliza la reserva y asegura oficialmente el puesto de tu hijo en la jornada.</p>
              </div>
            </div>

            <div className="step-card-num step-three">
              <div className="step-num-bubble">3</div>
              <div className="step-content">
                <h3>Asiste a la evaluación inicial y comienza el programa</h3>
                <p>El equipo calibra la estimulación auditiva y comienza el plan intensivo de 13 días.</p>
              </div>
            </div>
          </div>

          <div className="steps-cta-wrap">
            <a className="button steps-cta-btn" href={WA_PUNTA_CANA} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={20} color="#000000" />
              <span>Solicitar inscripción por WhatsApp →</span>
            </a>
          </div>
        </section>

        {/* 5. PREGUNTAS FRECUENTES (Acordeón de 1 toque) */}
        <section className="faqs-accordion-section section-wrap" id="preguntas" aria-labelledby="faqs-title">
          <div className="section-heading faqs-heading">
            <p className="eyebrow">PREGUNTAS FRECUENTES</p>
            <h2 id="faqs-title">
              Preguntas frecuentes.<br />
              <span><mark className="text-highlight">Acordeón de 1 toque.</mark></span>
            </h2>
          </div>

          <div className="accordion-list">
            <details 
              className={`accordion-item ${activeFaq === 1 ? 'is-active' : ''}`}
              open={activeFaq === 1}
              onClick={(e) => {
                e.preventDefault();
                toggleFaq(1);
              }}
            >
              <summary className="accordion-summary">
                <span className="accordion-title">¿Qué es el Método Tomatis®?</span>
                <span className="accordion-icon" aria-hidden="true">{activeFaq === 1 ? '−' : '+'}</span>
              </summary>
              <div className="accordion-body">
                <p>
                  Es un programa de estimulación auditiva y conducción ósea mediante auriculares especiales. Mientras el niño juega y realiza dinámicas lúdicas, el método estimula las conexiones del cerebro para despertar el lenguaje, mejorar la atención y regular las emociones desde la raíz.
                </p>
              </div>
            </details>

            <details 
              className={`accordion-item ${activeFaq === 2 ? 'is-active' : ''}`}
              open={activeFaq === 2}
              onClick={(e) => {
                e.preventDefault();
                toggleFaq(2);
              }}
            >
              <summary className="accordion-summary">
                <span className="accordion-title">¿Qué hace el niño durante las 2 horas de sesión?</span>
                <span className="accordion-icon" aria-hidden="true">{activeFaq === 2 ? '−' : '+'}</span>
              </summary>
              <div className="accordion-body">
                <p>
                  Realiza actividades didácticas guiadas (pintura, rompecabezas, motricidad fina) en mesas y sobre alfombras de foam con los auriculares puestos.
                </p>
              </div>
            </details>

            <details 
              className={`accordion-item ${activeFaq === 3 ? 'is-active' : ''}`}
              open={activeFaq === 3}
              onClick={(e) => {
                e.preventDefault();
                toggleFaq(3);
              }}
            >
              <summary className="accordion-summary">
                <span className="accordion-title">¿Debe quedarse un acompañante?</span>
                <span className="accordion-icon" aria-hidden="true">{activeFaq === 3 ? '−' : '+'}</span>
              </summary>
              <div className="accordion-body">
                <p>
                  Sí, cada niño debe asistir diariamente acompañado por mamá, papá o un adulto responsable.
                </p>
              </div>
            </details>

            <details 
              className={`accordion-item ${activeFaq === 4 ? 'is-active' : ''}`}
              open={activeFaq === 4}
              onClick={(e) => {
                e.preventDefault();
                toggleFaq(4);
              }}
            >
              <summary className="accordion-summary">
                <span className="accordion-title">¿Necesita un diagnóstico médico previo?</span>
                <span className="accordion-icon" aria-hidden="true">{activeFaq === 4 ? '−' : '+'}</span>
              </summary>
              <div className="accordion-body">
                <p>
                  No. El domingo 18 de octubre realizamos la evaluación individual para calibrar el protocolo específico de tu pequeño.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* 6. CIERRE CON URGENCIA */}
        <section className="urgency-section section-wrap" id="cierre" aria-labelledby="urgency-title">
          <div className="urgency-banner">
            <span className="urgency-badge">⚠️ ÚNICA VISITA DEL AÑO</span>
            <h2 id="urgency-title">Asegura el horario de tu hijo antes de que se llenen los cupos.</h2>
            <p className="urgency-text">
              Nuestra visita a Punta Cana es por única vez en el año. Por el espacio y la calibración de equipos, solo admitimos 5 niños por grupo.
            </p>
            <div className="urgency-cta-wrapper">
              <a className="button urgency-cta-btn" href={WA_PUNTA_CANA} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={22} color="#000000" />
                <span>Apartar horario por WhatsApp →</span>
              </a>
            </div>
            <div className="urgency-contact-line">
              <a href="tel:+18093065040" className="urgency-phone">+1 (809) 306-5040</a>
              <span className="urgency-sep">|</span>
              <span className="urgency-brand-name">Centro Multisensorial RD</span>
            </div>
          </div>
        </section>
      </main>

      {/* FIXED BOTTOM CTA (Animates smoothly in and out on mobile) */}
      <div className={`fixed-cta ${showFixedCta ? 'is-visible' : ''}`} aria-hidden={!showFixedCta}>
        <a className="button mobile-green-cta" href={WA_PUNTA_CANA} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={20} color="#000000" />
          <span>Apartar horario en WhatsApp</span>
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
          <img src="/assets/logo.webp" alt="Multisensorial RD" width="230" height="42" loading="lazy" />
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
