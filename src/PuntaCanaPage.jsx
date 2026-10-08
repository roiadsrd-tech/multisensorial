import React, { useEffect, useRef, useState } from 'react';
import { Star, MessageSquare, ClipboardCheck, Headphones, FileText } from 'lucide-react';
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

const WA_PUNTA_CANA = "https://wa.me/18093065040?text=Hola%2C%20me%20interesa%20la%20jornada%20Tomatis%20en%20Punta%20Cana.%20Quisiera%20informaci%C3%B3n%20sobre%20el%20taller%20del%2018%20de%20octubre%20en%20Spotcast%20Caf%C3%A9%20y%20el%20intensivo%20del%2019%20al%2031%20en%20Peque%C3%B1ines%20Paso%20a%20Paso.";
const MAP_SEARCH_PEQUENINES = "https://www.google.com/maps/search/?api=1&query=Centro%20de%20Educaci%C3%B3n%20Infantil%20Peque%C3%B1ines%20Paso%20a%20Paso%2C%20Residencial%20Rijo%2C%20detr%C3%A1s%20de%20los%20paneles%20solares%20de%20CEPM.%20B%C3%A1varo%2C%20Punta%20Cana.";
const MAP_SEARCH_SPOTCAST = "https://www.google.com/maps/search/?api=1&query=Spotcast+Cafe+Plaza+Boulevard+Center+Avenida+Estados+Unidos+Bavaro+Punta+Cana";
const COORDS_PEQUENINES = [18.5565510, -68.3691611];
const COORDS_SPOTCAST = [18.66278, -68.42921];

const JORNADA_TARGET_DATE = new Date('2026-10-17T09:00:00-04:00').getTime();

function getJornadaTimeLeft() {
  const diff = JORNADA_TARGET_DATE - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const padTwo = (val) => String(val).padStart(2, '0');

export default function PuntaCanaPage({ onNavigateHome }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showFixedCta, setShowFixedCta] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getJornadaTimeLeft);
  const mapRef = useRef(null);
  const leafletMapInstance = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getJornadaTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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

      // Marker 1: Spotcast Café (#1 Workshop)
      const markerSpotcast = window.L.marker(COORDS_SPOTCAST, {
        title: '#1 Workshop · Spotcast Café',
        icon: window.L.divIcon({
          className: 'compact-map-pin-wrap',
          html: '<div class="pin-badge pin-spotcast"><span class="pin-order-num">#1</span><div class="pin-logo-wrap"><img src="/assets/spotcast-square.webp" alt="Spotcast" /></div><span class="pin-label">Workshop</span></div>',
          iconSize: [160, 48],
          iconAnchor: [80, 48]
        })
      }).addTo(map);

      markerSpotcast.bindPopup(
        '<strong>#1 Spotcast Café</strong><br><span style="font-size:12px;color:#c2531a;font-weight:700;">Workshop para Padres (Sáb 18 Oct)</span><br><span style="font-size:12px;">Plaza Boulevard Center, Av. Estados Unidos</span>',
        { offset: [0, -32] }
      );

      // Marker 2: Pequeñines Paso a Paso (#2 Jornada Terapéutica)
      const markerPequenines = window.L.marker(COORDS_PEQUENINES, {
        title: '#2 Jornada Terapéutica · Pequeñines Paso a Paso',
        icon: window.L.divIcon({
          className: 'compact-map-pin-wrap',
          html: '<div class="pin-badge pin-pequenines"><span class="pin-order-num">#2</span><div class="pin-logo-wrap"><img src="/assets/pequenines-square.webp" alt="Pequeñines" /></div><span class="pin-label">Jornada Terapéutica</span></div>',
          iconSize: [210, 48],
          iconAnchor: [105, 48]
        })
      }).addTo(map);

      markerPequenines.bindPopup(
        '<strong>#2 Pequeñines Paso a Paso</strong><br><span style="font-size:12px;color:#1e40af;font-weight:700;">2º Paso · Terapia Intensiva (19 al 31 Oct)</span><br><span style="font-size:12px;">Residencial Rijo · CEPM, Bávaro</span>',
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
          <img src="/assets/logo.webp" alt="Multisensorial RD" width="260" height="48" fetchPriority="high" />
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
            {/* Desktop Single Row */}
            <div className="hero-quotes-track hero-quotes-track-desktop">
              {[...miniTestimonialQuotes, ...miniTestimonialQuotes].map((quote, idx) => (
                <div key={`d-${idx}`} className="hero-quote-item">
                  <span className="hero-quote-stars" aria-hidden="true">★★★★★</span>
                  <span className="hero-quote-text">{quote}</span>
                </div>
              ))}
            </div>

            {/* Mobile Two Rows (strictly vertical / mobile only) */}
            <div className="hero-quotes-track hero-quotes-track-mobile track-row-1">
              {[...quotesRow1, ...quotesRow1, ...quotesRow1, ...quotesRow1].map((quote, idx) => (
                <div key={`m1-${idx}`} className="hero-quote-item">
                  <span className="hero-quote-stars" aria-hidden="true">★★★★★</span>
                  <span className="hero-quote-text">{quote}</span>
                </div>
              ))}
            </div>
            <div className="hero-quotes-track hero-quotes-track-mobile track-row-2">
              {[...quotesRow2, ...quotesRow2, ...quotesRow2, ...quotesRow2].map((quote, idx) => (
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

        {/* ¿ES ESTA JORNADA PARA TU HIJO? */}
        <section className="family-story section-signals" id="tu-familia" aria-labelledby="family-title">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">PERFIL DE LA JORNADA</p>
              <h2 id="family-title">
                ¿Es esta jornada<br />
                <span><mark className="text-highlight" data-highlight>para tu hijo?</mark></span>
              </h2>
              <p className="section-subtitle">
                Si notas alguna de estas señales en tu pequeño, este intensivo es para él:
              </p>
            </div>

            <div className="signals-list-clean">
              <div className="signal-row-item">
                <img 
                  src="/assets/family-understanding.webp" 
                  alt="Retraso en el habla" 
                  className="signal-thumb" 
                  loading="lazy" 
                />
                <div className="signal-content">
                  <h3>Retraso en el habla</h3>
                  <p>No dice palabras claras o se frustra al intentar comunicarse.</p>
                </div>
              </div>

              <div className="signal-row-item">
                <img 
                  src="/assets/families/photo-04.webp" 
                  alt="Falta de atención" 
                  className="signal-thumb" 
                  loading="lazy" 
                />
                <div className="signal-content">
                  <h3>Falta de atención</h3>
                  <p>Lo llamas por su nombre y parece ausente o no responde.</p>
                </div>
              </div>

              <div className="signal-row-item">
                <img 
                  src="/assets/family-sounds.webp" 
                  alt="Sensibilidad al ruido" 
                  className="signal-thumb" 
                  loading="lazy" 
                />
                <div className="signal-content">
                  <h3>Sensibilidad al ruido</h3>
                  <p>Se tapa los oídos o colapsa con la bulla y sonidos fuertes.</p>
                </div>
              </div>

              <div className="signal-row-item">
                <img 
                  src="/assets/family-questions.webp" 
                  alt="Sin avances" 
                  className="signal-thumb" 
                  loading="lazy" 
                />
                <div className="signal-content">
                  <h3>Sin avances</h3>
                  <p>Lleva meses en terapias de siempre y no arranca.</p>
                </div>
              </div>
            </div>

            <div className="signals-cta-action">
              <a className="button" href={WA_PUNTA_CANA} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} color="#000000" />
                <span>Apartar horario por WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* CRONOGRAMA PASO A PASO */}
        <section className="cronograma-section" id="cronograma" aria-labelledby="cronograma-title">
          <div className="section-wrap">
            <div className="cronograma-heading">
              <p className="eyebrow">CRONOGRAMA CONFIRMADO · BÁVARO</p>
              <h2 id="cronograma-title">
                Paso a paso cronológico.<br />
                <span><mark className="text-highlight highlight-blue" data-highlight>Fechas de la jornada.</mark></span>
              </h2>
            </div>

            <div className="chrono-linear-flow">
              <div className="chrono-linear-step">
                <div className="chrono-top-bar">
                  <div className="chrono-num-group">
                    <span className="chrono-big-num">01</span>
                    <MessageSquare className="chrono-inline-icon" size={26} aria-hidden="true" />
                  </div>
                  <span className="chrono-step-date">Sáb 17 Oct</span>
                </div>
                <div className="chrono-line-track"></div>
                <h3 className="chrono-step-title">Charla inicial</h3>
                <div className="chrono-venue-row">
                  <img src="/assets/spotcast-square.webp" alt="Spotcast Café" className="chrono-venue-logo" loading="lazy" />
                  <span className="chrono-venue-text">Spotcast Café · Plaza Boulevard Center</span>
                </div>
              </div>

              <div className="chrono-linear-step">
                <div className="chrono-top-bar">
                  <div className="chrono-num-group">
                    <span className="chrono-big-num">02</span>
                    <ClipboardCheck className="chrono-inline-icon" size={26} aria-hidden="true" />
                  </div>
                  <span className="chrono-step-date">Dom 18 Oct</span>
                </div>
                <div className="chrono-line-track"></div>
                <h3 className="chrono-step-title">Evaluaciones diagnósticas</h3>
                <div className="chrono-venue-row">
                  <img src="/assets/pequenines-square.webp" alt="Pequeñines Paso a Paso" className="chrono-venue-logo" loading="lazy" />
                  <span className="chrono-venue-text">Pequeñines Paso a Paso · Bávaro</span>
                </div>
              </div>

              <div className="chrono-linear-step">
                <div className="chrono-top-bar">
                  <div className="chrono-num-group">
                    <span className="chrono-big-num">03</span>
                    <Headphones className="chrono-inline-icon" size={26} aria-hidden="true" />
                  </div>
                  <span className="chrono-step-date">19 al 31 Oct</span>
                </div>
                <div className="chrono-line-track"></div>
                <h3 className="chrono-step-title">Terapia intensiva</h3>
                <div className="chrono-venue-row">
                  <img src="/assets/pequenines-square.webp" alt="Pequeñines" className="chrono-venue-logo" loading="lazy" />
                  <span className="chrono-venue-text">Sede Pequeñines · 2h diarias continuas</span>
                </div>
              </div>

              <div className="chrono-linear-step">
                <div className="chrono-top-bar">
                  <div className="chrono-num-group">
                    <span className="chrono-big-num">04</span>
                    <FileText className="chrono-inline-icon" size={26} aria-hidden="true" />
                  </div>
                  <span className="chrono-step-date">Vie 31 Oct</span>
                </div>
                <div className="chrono-line-track"></div>
                <h3 className="chrono-step-title">Cierre y entrega de informe</h3>
                <div className="chrono-venue-row">
                  <img src="/assets/pequenines-square.webp" alt="Pequeñines" className="chrono-venue-logo" loading="lazy" />
                  <span className="chrono-venue-text">Sede Pequeñines · Pautas para casa</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEDES EN BÁVARO - MAPA LIMPIO */}
        <section className="section-map-wrap section-wrap" id="mapa" aria-labelledby="map-heading">
          <div className="map-section-header">
            <p className="eyebrow">SEDES EN BÁVARO</p>
            <h2 id="map-heading">
              1. Spotcast Café · 2. Pequeñines Paso a Paso
            </h2>
          </div>
          <div className="simple-map-container">
            <div 
              className="geographic-map" 
              ref={mapRef}
              id="locations-map" 
              aria-label="Mapa de Punta Cana"
            ></div>
          </div>
        </section>

        {/* TANDAS A ELEGIR */}
        <section className="section-tandas-brand" id="tandas" aria-labelledby="tandas-title">
          <div className="section-wrap">
            <div className="tandas-brand-header">
              <p className="eyebrow">HORARIOS DISPONIBLES</p>
              <h2 id="tandas-title">
                Tandas a elegir
              </h2>
              <div>
                <span className="tandas-badge-pill">Solo 5 niños por grupo</span>
              </div>
            </div>

            <div className="tandas-grid-large">
              <div className="tanda-card-large">
                <span className="tanda-tag-label">Tanda Matutina 1</span>
                <span className="tanda-time-display">8:00 AM – 10:00 AM</span>
                <span className="tanda-capacity-tag">5 cupos</span>
              </div>

              <div className="tanda-card-large">
                <span className="tanda-tag-label">Tanda Matutina 2</span>
                <span className="tanda-time-display">10:00 AM – 12:00 PM</span>
                <span className="tanda-capacity-tag">5 cupos</span>
              </div>

              <div className="tanda-card-large">
                <span className="tanda-tag-label">Tanda Vespertina 1</span>
                <span className="tanda-time-display">2:00 PM – 4:00 PM</span>
                <span className="tanda-capacity-tag">5 cupos</span>
              </div>

              <div className="tanda-card-large">
                <span className="tanda-tag-label">Tanda Vespertina 2</span>
                <span className="tanda-time-display">4:00 PM – 6:00 PM</span>
                <span className="tanda-capacity-tag">5 cupos</span>
              </div>
            </div>

            <div className="tandas-action-wrap">
              <a className="button" href={WA_PUNTA_CANA} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={20} color="#000000" />
                <span>Apartar horario por WhatsApp</span>
              </a>
              <p className="tandas-action-note">
                Los cupos por tanda se completan rápido por orden de inscripción.
              </p>
            </div>
          </div>
        </section>

        {/* SPECIALISTS SECTION */}
        <section className="program program-specialists-large" id="especialistas" aria-labelledby="specialists-title">
          <div className="section-wrap program-inner">
            <div className="program-specialists" style={{ marginTop: 0, paddingTop: 0, borderTop: 'none' }}>
              <div className="program-specialists-intro">
                <p className="eyebrow">CONSULTORES CERTIFICADOS</p>
                <h3 id="specialists-title">Especialistas a cargo de la jornada</h3>
              </div>

              <div className="program-specialists-grid">
                {/* Mery Torrealba */}
                <div className="program-specialist-card">
                  <div className="specialist-arch-stage" style={{ background: '#FFD6DF' }}>
                    <img
                      src="/mery_torrealba_new.webp"
                      alt="Mery Torrealba"
                      className="specialist-arch-img specialist-img-mery"
                      loading="lazy"
                    />
                  </div>
                  <div className="specialist-card-info">
                    <h4 className="specialist-card-name">Mery Torrealba</h4>
                    <span className="specialist-card-pill" style={{ background: '#FFD6DF' }}>
                      Psicopedagogía & Tomatis® Nivel 4
                    </span>
                  </div>
                </div>

                {/* Carlos Eduardo Pérez */}
                <div className="program-specialist-card">
                  <div className="specialist-arch-stage" style={{ background: '#D0EEFF' }}>
                    <img
                      src="/carlos_perez_new.webp"
                      alt="Carlos Eduardo Pérez"
                      className="specialist-arch-img specialist-img-eduardo"
                      loading="lazy"
                    />
                  </div>
                  <div className="specialist-card-info">
                    <h4 className="specialist-card-name">Carlos Eduardo Pérez</h4>
                    <span className="specialist-card-pill" style={{ background: '#D0EEFF' }}>
                      Psicología & Tomatis® Nivel 4
                    </span>
                  </div>
                </div>
              </div>

              <div className="program-specialists-verify">
                <a
                  className="directory-link"
                  href="https://www.tomatis.com/es/profesional/republica-dominicana/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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

        {/* PREGUNTAS FRECUENTES */}
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
                  <span>¿Cómo me inscribo y aparto horario?</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  <ol className="faq-steps-list">
                    <li>
                      <strong>1. Escríbenos por WhatsApp</strong> solicitando tu inscripción y el horario deseado <em>(los cupos por tanda se completan rápido)</em>.
                    </li>
                    <li>
                      <strong>2. Recibirás los datos</strong> para realizar el pago de reserva y tu contrato personal.
                    </li>
                    <li>
                      <strong>3. Te confirmamos el cupo</strong> para la evaluación del domingo 18.
                    </li>
                  </ol>
                  <a className="faq-inline-cta" href={WA_PUNTA_CANA} target="_blank" rel="noopener noreferrer">
                    Solicitar inscripción por WhatsApp →
                  </a>
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
                  <span>¿Qué es el Método Tomatis®?</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  <p>Es una tecnología de estimulación auditiva y conducción por el hueso del cráneo mediante audífonos especiales. Mientras el niño juega, estimula las vías neuronales para activar el habla, la atención y la autorregulación emocional.</p>
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
                  <span>¿Qué hace el niño durante las 2 horas de terapia?</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  <p>Realiza actividades lúdicas guiadas (rompecabezas, pintura, motricidad fina) sobre alfombras de foam o mesas de trabajo con los audífonos puestos.</p>
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
                  <span>¿Debe quedarse un acompañante?</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  <p>Sí, cada niño debe asistir diariamente acompañado por mamá, papá o un tutor.</p>
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
                  <span>¿Necesita un diagnóstico médico previo?</span>
                  <span className="faq-toggle" aria-hidden="true"></span>
                </summary>
                <div className="faq-answer">
                  <p>No. El domingo 18 de octubre realizamos la evaluación previa para calibrar el protocolo específico de tu pequeño.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* COUNTDOWN & FINAL CONTACT CTA */}
        <section className="compact-contact section-wrap" id="cuenta-regresiva" aria-labelledby="countdown-heading">
          <p className="eyebrow">CUENTA REGRESIVA · INICIO DE JORNADA</p>
          <div className="cta-headline-combo">
            <span className="cta-callout-font">Solo 5 niños por tanda</span>
            <h2 id="countdown-heading">
              No volveremos a Punta Cana<br />
              <span>hasta el próximo año.</span>
            </h2>
          </div>

          {/* TIMER EN VIVO */}
          <div className="countdown-display" role="timer" aria-live="polite" aria-label="Tiempo restante para el inicio de la jornada">
            <div className="countdown-unit">
              <span className="countdown-number">{padTwo(timeLeft.days)}</span>
              <span className="countdown-label">Días</span>
            </div>
            <span className="countdown-separator" aria-hidden="true">:</span>
            <div className="countdown-unit">
              <span className="countdown-number">{padTwo(timeLeft.hours)}</span>
              <span className="countdown-label">Horas</span>
            </div>
            <span className="countdown-separator" aria-hidden="true">:</span>
            <div className="countdown-unit">
              <span className="countdown-number">{padTwo(timeLeft.minutes)}</span>
              <span className="countdown-label">Min</span>
            </div>
            <span className="countdown-separator" aria-hidden="true">:</span>
            <div className="countdown-unit">
              <span className="countdown-number">{padTwo(timeLeft.seconds)}</span>
              <span className="countdown-label">Seg</span>
            </div>
          </div>

          <p className="countdown-note">
            Los cupos por grupo son estrictamente limitados a <strong>5 niños por tanda</strong> para garantizar máxima calma y estimulación personalizada.
          </p>

          <a className="button button-countdown-action" href={WA_PUNTA_CANA} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={20} color="#000000" />
            <span>Apartar cupo por WhatsApp antes de que inicie</span>
          </a>

          <a className="compact-phone" href="tel:+18093065040">
            📞 +1 (809) 306-5040 | Centro Multisensorial RD
          </a>
        </section>
      </main>

      {/* FIXED BOTTOM CTA (Animates smoothly in and out) */}
      <div className={`fixed-cta ${showFixedCta ? 'is-visible' : ''}`} aria-hidden={!showFixedCta}>
        <a className="button" href={WA_PUNTA_CANA} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={20} color="#000000" />
          <span>Consultar cupos por WhatsApp →</span>
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
