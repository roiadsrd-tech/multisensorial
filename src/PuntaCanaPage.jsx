import React, { useEffect, useRef, useState } from 'react';
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

const WA_PUNTA_CANA = "https://wa.me/18093065040?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20la%20Jornada%20Punta%20Cana";
const getWATandaLink = (tanda) => `https://wa.me/18093065040?text=${encodeURIComponent(`Hola, quiero apartar cupo en la tanda de ${tanda} para la Jornada Punta Cana.`)}`;
const MAP_SEARCH_PEQUENINES = "https://www.google.com/maps/search/?api=1&query=Centro%20de%20Educaci%C3%B3n%20Infantil%20Peque%C3%B1ines%20Paso%20a%20Paso%2C%20Residencial%20Rijo%2C%20detr%C3%A1s%20de%20los%20paneles%20solares%20de%20CEPM.%20B%C3%A1varo%2C%20Punta%20Cana.";
const COORDS_PEQUENINES = [18.5565510, -68.3691611];

const cronogramaMilestones = [
  {
    num: "01",
    date: "Sábado 17 de Octubre",
    title: "Charla inicial",
    tag: "Apertura"
  },
  {
    num: "02",
    date: "Domingo 18 de Octubre",
    title: "Evaluaciones diagnósticas",
    tag: "Calibración"
  },
  {
    num: "03",
    date: "Lunes 19 de Octubre",
    title: "Inicio terapia intensiva",
    tag: "13 Días"
  },
  {
    num: "04",
    date: "Viernes 31 de Octubre",
    title: "Cierre y entrega de informe",
    tag: "Resultados"
  }
];

const tandasCalendar = [
  {
    id: "tanda-1",
    time: "8:00 AM – 10:00 AM",
    emoji: "🌅",
    label: "Tanda Matutina 1",
    spots: "Solo 5 cupos",
    status: "Cupos limitados"
  },
  {
    id: "tanda-2",
    time: "10:00 AM – 12:00 PM",
    emoji: "☀️",
    label: "Tanda Matutina 2",
    spots: "Solo 5 cupos",
    status: "Cupos limitados"
  },
  {
    id: "tanda-3",
    time: "2:00 PM – 4:00 PM",
    emoji: "🌤️",
    label: "Tanda Vespertina 1",
    spots: "Solo 5 cupos",
    status: "Cupos limitados"
  },
  {
    id: "tanda-4",
    time: "4:00 PM – 6:00 PM",
    emoji: "🌆",
    label: "Tanda Vespertina 2",
    spots: "Solo 5 cupos",
    status: "Cupos limitados"
  }
];

export default function PuntaCanaPage({ onNavigateHome }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedTanda, setSelectedTanda] = useState("tanda-1");
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
      });

      window.L.control.zoom({ position: 'bottomright' }).addTo(map);
      window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 9,
        maxZoom: 16,
        attribution: '&copy; OpenStreetMap'
      }).addTo(map);

      // Marker: Pequeñines Paso a Paso
      const markerPequenines = window.L.marker(COORDS_PEQUENINES, {
        title: 'Sede Oficial · Pequeñines Paso a Paso',
        icon: window.L.divIcon({
          className: 'compact-map-pin-wrap',
          html: '<div class="pin-badge pin-pequenines"><span class="pin-order-num">📍</span><div class="pin-logo-wrap"><img src="/assets/pequenines-square.webp" alt="Pequeñines" /></div><span class="pin-label">Sede de Terapias</span></div>',
          iconSize: [210, 48],
          iconAnchor: [105, 48]
        })
      }).addTo(map);

      markerPequenines.bindPopup(
        '<strong>Pequeñines Paso a Paso</strong><br><span style="font-size:12px;color:#1e40af;font-weight:700;">Sede Oficial de Evaluaciones y Terapias</span><br><span style="font-size:12px;">Residencial Rijo · CEPM, Bávaro</span>',
        { offset: [0, -32] }
      ).openPopup();

      map.setView(COORDS_PEQUENINES, 14);

      markerPequenines.on('click', () => {
        markerPequenines.openPopup();
        map.flyTo(COORDS_PEQUENINES, 14, { duration: 0.6 });
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
    if (leafletMapInstance.current) {
      leafletMapInstance.current.flyTo(COORDS_PEQUENINES, 14, { duration: 0.6 });
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="landing-layout compact-page">
      {/* HEADER */}
      <header className="header" role="banner">
        <a 
          className="brand" 
          href="#inicio" 
          aria-label="Ir al inicio"
          onClick={(e) => {
            if (onNavigateHome) {
              e.preventDefault();
              onNavigateHome();
            }
          }}
        >
          <img 
            src="/assets/logo.webp" 
            alt="Centro Multisensorial RD" 
            width="230" 
            height="42" 
            priority="true"
          />
        </a>

        <nav aria-label="Navegación principal">
          <a className="nav-link" href="#cronograma">Cronograma</a>
          <a className="nav-link" href="#inscripcion">Inscripción</a>
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

          {/* Minimal Testimonials Marquee - 2 Rows */}
          <div className="hero-quotes-marquee" aria-label="Opiniones de familias">
            <div className="hero-quotes-track track-row-1">
              {[...quotesRow1, ...quotesRow1].map((quote, idx) => (
                <div key={`r1-${idx}`} className="hero-quote-item">
                  <span className="hero-quote-stars" aria-hidden="true">★★★★★</span>
                  <span className="hero-quote-text">{quote}</span>
                </div>
              ))}
            </div>
            <div className="hero-quotes-track track-row-2">
              {[...quotesRow2, ...quotesRow2].map((quote, idx) => (
                <div key={`r2-${idx}`} className="hero-quote-item">
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
        <section className="family-story" id="tu-hijo" aria-labelledby="family-title">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">2. ¿ES ESTA JORNADA PARA TU HIJO?</p>
              <h2 id="family-title">
                Si notas estas señales,<br />
                <span><mark className="text-highlight" data-highlight>este intensivo es para él.</mark></span>
              </h2>
              <p>Identifica los retos del día a día antes de comenzar:</p>
            </div>

            <ul className="moment-grid problem-grid brand-signals-grid">
              <li className="moment-card">
                <img src="/assets/family-understanding.webp" alt="Retraso en el habla" width="1536" height="1024" loading="lazy" />
                <div className="moment-copy">
                  <h3><span className="bullet">🗣️</span> Retraso en el habla</h3>
                  <p>No dice palabras claras o se frustra al intentar comunicarse.</p>
                </div>
              </li>
              <li className="moment-card">
                <img src="/assets/family-questions.webp" alt="Falta de atención" width="1536" height="1024" loading="lazy" />
                <div className="moment-copy">
                  <h3><span className="bullet">👂</span> Falta de atención</h3>
                  <p>Lo llamas por su nombre y parece ausente o desconectado.</p>
                </div>
              </li>
              <li className="moment-card">
                <img src="/assets/family-sounds.webp" alt="Sensibilidad al ruido" width="1536" height="1024" loading="lazy" />
                <div className="moment-copy">
                  <h3><span className="bullet">🔊</span> Sensibilidad al ruido</h3>
                  <p>Se tapa los oídos o colapsa con sonidos fuertes y bulla.</p>
                </div>
              </li>
              <li className="moment-card">
                <img src="/assets/families/photo-04.webp" alt="Sin avances" width="1536" height="1024" loading="lazy" />
                <div className="moment-copy">
                  <h3><span className="bullet">⏳</span> Sin avances</h3>
                  <p>Lleva meses en terapias de siempre y no arranca.</p>
                </div>
              </li>
            </ul>

            <div className="compact-outcome">
              <p className="scroll-phrase">Un camino claro para entender y activar a tu hijo.</p>
              <span>El Método Tomatis® reentrena cómo el cerebro procesa los sonidos para devolver calma, atención y lenguaje desde la raíz.</span>
            </div>
          </div>
        </section>

        {/* 3. CRONOGRAMA OFICIAL Y SEDES */}
        <section className="cronograma-official-section" id="cronograma" aria-labelledby="cronograma-title">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">3. CRONOGRAMA OFICIAL Y SEDES</p>
              <h2 id="cronograma-title">
                Todo en tu propia localidad,<br />
                <span><mark className="text-highlight highlight-blue" data-highlight>sin viajar a Santo Domingo.</mark></span>
              </h2>
              <p>Etapas clave de la jornada intensiva en Punta Cana:</p>
            </div>

            {/* Stepper Pipeline with Motion */}
            <div className="stepper-pipeline-wrap">
              <div className="stepper-pipeline-track">
                {cronogramaMilestones.map((m, idx) => (
                  <div key={m.num} className={`stepper-node stepper-node-${idx + 1}`}>
                    <div className="stepper-marker">
                      <span className="stepper-num">{m.num}</span>
                      <span className="stepper-pulse-ring" aria-hidden="true"></span>
                    </div>
                    <div className="stepper-info">
                      <span className="stepper-tag">{m.tag}</span>
                      <strong className="stepper-date">{m.date}</strong>
                      <p className="stepper-title">{m.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sede y Mapa */}
            <div className="venue-map-block">
              <div className="venue-info-card">
                <span className="venue-pill-badge">📍 SEDE DE EVALUACIONES Y TERAPIAS</span>
                <h3>Centro de Educación Infantil Pequeñines Paso a Paso</h3>
                <p className="venue-address">
                  Residencial Rijo, detrás de los paneles solares de CEPM, Bávaro Punta Cana.
                </p>
                <div className="venue-links">
                  <a 
                    className="button button-small" 
                    href={MAP_SEARCH_PEQUENINES} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span>Abrir en Google Maps / GPS ↗</span>
                  </a>
                </div>
              </div>

              <div className="locations-card venue-map-card">
                <div className="locations-toolbar">
                  <strong>Mapa · Pequeñines Paso a Paso (Bávaro)</strong>
                  <button type="button" className="map-overview" onClick={handleCenterMap}>
                    Centrar sede
                  </button>
                </div>
                <div 
                  className="geographic-map" 
                  ref={mapRef}
                  id="locations-map" 
                  aria-label="Mapa de Pequeñines Paso a Paso en Punta Cana"
                />
              </div>
            </div>

            {/* UI de Calendario para Tandas a Elegir */}
            <div className="calendar-planner-ui" aria-label="Calendario de tandas disponibles">
              <div className="calendar-planner-header">
                <div className="calendar-header-main">
                  <span className="calendar-badge-icon">📅</span>
                  <div>
                    <h4>Tandas a elegir · Octubre 2026</h4>
                    <p>13 días continuos · 2 horas diarias de estimulación</p>
                  </div>
                </div>
                <span className="calendar-limit-pill">Solo 5 niños por grupo</span>
              </div>

              {/* Days Strip View */}
              <div className="calendar-dates-strip" aria-hidden="true">
                <div className="calendar-day-tab"><span>Sáb</span><strong>17</strong><small>Charla</small></div>
                <div className="calendar-day-tab"><span>Dom</span><strong>18</strong><small>Eval</small></div>
                <div className="calendar-day-tab is-active"><span>Lun</span><strong>19</strong><small>Inicio</small></div>
                <div className="calendar-day-tab"><span>Mar</span><strong>20</strong><small>Día 2</small></div>
                <div className="calendar-day-tab"><span>Mié</span><strong>21</strong><small>Día 3</small></div>
                <div className="calendar-day-tab"><span>...</span><strong>...</strong><small>Intensivo</small></div>
                <div className="calendar-day-tab is-end"><span>Vie</span><strong>31</strong><small>Cierre</small></div>
              </div>

              {/* Time Slots Grid */}
              <div className="calendar-slots-grid">
                {tandasCalendar.map((slot) => {
                  const isSelected = selectedTanda === slot.id;
                  return (
                    <div 
                      key={slot.id} 
                      className={`calendar-slot-card ${isSelected ? 'is-selected' : ''}`}
                      onClick={() => setSelectedTanda(slot.id)}
                    >
                      <div className="slot-left">
                        <span className="slot-emoji" aria-hidden="true">{slot.emoji}</span>
                        <div>
                          <strong className="slot-time">{slot.time}</strong>
                          <span className="slot-label">{slot.label}</span>
                        </div>
                      </div>
                      <div className="slot-right">
                        <span className="slot-spots-badge">{slot.spots}</span>
                        <a 
                          className="slot-book-btn"
                          href={getWATandaLink(`${slot.label} (${slot.time})`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Apartar →
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="calendar-footer-note">
                ⚡ <em>Importante: La calibración de equipos y el espacio solo permiten 5 niños por tanda. Se asignan por orden de reserva.</em>
              </div>
            </div>
          </div>
        </section>

        {/* 4. ¿CÓMO ME INSCRIBO? (Paso a Paso) */}
        <section className="inscripcion-section section-wrap" id="inscripcion" aria-labelledby="inscripcion-title">
          <div className="section-heading">
            <p className="eyebrow">4. ¿CÓMO ME INSCRIBO?</p>
            <h2 id="inscripcion-title">
              Paso a paso.<br />
              <span><mark className="text-highlight" data-highlight>Fácil y directo.</mark></span>
            </h2>
            <p>Así aseguras la participación de tu hijo en la jornada:</p>
          </div>

          <div className="steps-flow-container">
            <div className="step-flow-row">
              <div className="step-flow-number">01</div>
              <div className="step-flow-text">
                <h3>Solicita tu inscripción y apartado de horario por WhatsApp</h3>
                <p>Es importante elegir tu tanda rápido porque los turnos se completan pronto con solo 5 cupos por grupo.</p>
              </div>
            </div>

            <div className="step-flow-row">
              <div className="step-flow-number">02</div>
              <div className="step-flow-text">
                <h3>Recibe la información de pago y tu contrato personal</h3>
                <p>Te enviamos los datos oficiales para formalizar la reserva con total transparencia y seguridad.</p>
              </div>
            </div>

            <div className="step-flow-row">
              <div className="step-flow-number">03</div>
              <div className="step-flow-text">
                <h3>Asiste a la evaluación inicial y comienza el programa</h3>
                <p>El domingo 18 realizamos la evaluación individual para calibrar el protocolo específico de tu pequeño.</p>
              </div>
            </div>
          </div>

          <div className="steps-cta-center">
            <a className="button" href={WA_PUNTA_CANA} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={20} color="#000000" />
              <span>Solicitar inscripción por WhatsApp →</span>
            </a>
          </div>
        </section>

        {/* 5. PREGUNTAS FRECUENTES (Acordeón de 1 toque) */}
        <section className="faqs section-wrap" id="preguntas" aria-labelledby="faq-title">
          <div className="faq-intro">
            <p className="eyebrow">5. PREGUNTAS FRECUENTES</p>
            <h2 id="faq-title">
              Acordeón de 1 toque.<br />
              <span><mark className="text-highlight highlight-blue">Respuestas claras.</mark></span>
            </h2>
            <p>Todo lo que necesitas saber antes de la jornada intensiva.</p>
          </div>

          <div className="faq-content">
            <div className="faq-list">
              {/* FAQ 1 */}
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
                  <span>¿Qué es el Método Tomatis®?</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  <p>
                    Es un programa de estimulación auditiva y conducción ósea mediante auriculares especiales. Mientras el niño juega y realiza dinámicas lúdicas, el método estimula las conexiones del cerebro para despertar el lenguaje, mejorar la atención y regular las emociones desde la raíz.
                  </p>
                </div>
              </details>

              {/* FAQ 2 */}
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
                  <span>¿Qué hace el niño durante las 2 horas de sesión?</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  <p>
                    Realiza actividades didácticas guiadas (pintura, rompecabezas, motricidad fina) en mesas y sobre alfombras de foam con los auriculares puestos.
                  </p>
                </div>
              </details>

              {/* FAQ 3 */}
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
                  <span>¿Debe quedarse un acompañante?</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  <p>
                    Sí, cada niño debe asistir diariamente acompañado por mamá, papá o un adulto responsable.
                  </p>
                </div>
              </details>

              {/* FAQ 4 */}
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
                  <span>¿Necesita un diagnóstico médico previo?</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  <p>
                    No. El domingo 18 de octubre realizamos la evaluación individual para calibrar el protocolo específico de tu pequeño.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* 6. CIERRE CON URGENCIA */}
        <section className="compact-contact urgency-contact section-wrap" id="cierre" aria-labelledby="cierre-title">
          <p className="eyebrow">6. CIERRE CON URGENCIA</p>
          <h2 id="cierre-title">
            Asegura el horario de tu hijo<br />
            <span><mark className="text-highlight">antes de que se llenen los cupos.</mark></span>
          </h2>
          <p className="urgency-subtext">
            Nuestra visita a Punta Cana es por única vez en el año. Por el espacio y la calibración de equipos, solo admitimos 5 niños por grupo.
          </p>

          <a className="button urgency-main-btn" href={WA_PUNTA_CANA} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={22} color="#042f13" />
            <span>Apartar horario por WhatsApp →</span>
          </a>

          <div className="direct-contact-bar">
            <span>Contacto Directo:</span>
            <a href="tel:+18093065040">+1 (809) 306-5040</a>
            <span className="sep-dot">·</span>
            <span>Centro Multisensorial RD</span>
          </div>
        </section>
      </main>

      {/* FIXED BOTTOM CTA FOR MOBILE (Botón verde flotante) */}
      <div className={`fixed-cta ${showFixedCta ? 'is-visible' : ''}`} aria-hidden={!showFixedCta}>
        <a className="button mobile-green-btn" href={WA_PUNTA_CANA} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={20} color="#042f13" />
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
