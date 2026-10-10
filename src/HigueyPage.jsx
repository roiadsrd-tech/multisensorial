import React, { useEffect, useRef, useState } from 'react';
import { Star, MessageSquare, ClipboardCheck, Headphones, FileText, MapPin, Layers, Puzzle } from 'lucide-react';
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

const WA_HIGUEY = "https://wa.me/18093065040?text=Hola%2C%20me%20interesa%20la%20jornada%20Tomatis%20en%20Hig%C3%BCey%20en%20CPIME.%20Quisiera%20informaci%C3%B3n%20sobre%20la%20charla%20del%201%20de%20noviembre%20y%20el%20intensivo%20del%203%20al%2015.";
const COORDS_HIGUEY = [18.6122531, -68.7084201];
const MAP_URL_HIGUEY = "https://maps.app.goo.gl/6yzrgr5NENw8TswY8";

const JORNADA_TARGET_DATE = new Date('2026-11-01T09:00:00-04:00').getTime();

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

const workshopTopics = [
  {
    num: '01',
    entity: 'Multisensorial RD®',
    topic: 'Método Tomatis e intervención temprana',
    logo: '/branding/logopng.webp',
    logoClass: 'logo-multisensorial',
  },
  {
    num: '02',
    entity: 'Sensorialmente®',
    topic: 'Terapia Ocupacional y desorden en el procesamiento sensorial (planes a distancia)',
    logo: '/assets/sensorialmente-brand.png',
    logoClass: 'logo-sensorialmente',
  },
  {
    num: '03',
    entity: 'Dra. Solanyi Herrera Valdez',
    topic: 'Abordaje Biomédico integral',
    logo: '/assets/dra-solanyi-logo.webp',
    logoClass: 'logo-solanyi',
  },
  {
    num: '04',
    entity: 'Dra. Idelsa Polanco',
    topic: 'Abordaje gastrointestinal del niño con TDAH y autismo',
    logo: null,
    logoClass: '',
  },
  {
    num: '05',
    entity: 'Ama Academy®',
    topic: 'Homeschooling por proyectos para niños con alguna condición',
    logo: '/assets/ama-academy-brand.png',
    logoClass: 'logo-ama',
  },
];

export default function HigueyPage({ onNavigateHome, onNavigateTomatis }) {
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
    document.title = "Jornada Tomatis en Higüey | Centro Multisensorial RD";

    const handleScroll = () => {
      setShowFixedCta(window.scrollY > 380);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.title = prevTitle;
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Leaflet map setup for Higüey - CPIME
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
        maxZoom: 17,
        attribution: '&copy; OpenStreetMap'
      }).addTo(map);

      map.setView(COORDS_HIGUEY, 14);

      const markerHiguey = window.L.marker(COORDS_HIGUEY, {
        title: 'CPIME · Centro de Atención Psicopedagógica Educativa',
        icon: window.L.divIcon({
          className: 'compact-map-pin-wrap',
          html: '<div class="pin-badge pin-pequenines"><div class="pin-logo-wrap" style="width:34px;height:34px;box-shadow:0 2px 6px rgba(0,0,0,0.2);"><img src="/assets/cpime-logo.webp" alt="CPIME" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" /></div><div class="pin-text-block"><span class="pin-label">CPIME</span><span class="pin-date-tag">1 al 15 Nov</span></div></div>',
          iconSize: [180, 56],
          iconAnchor: [90, 56]
        })
      }).addTo(map);

      markerHiguey.bindPopup(
        '<div style="text-align:center;padding:4px 2px;"><div style="width:52px;height:52px;margin:0 auto 6px;border-radius:50%;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.18);"><img src="/assets/cpime-logo.webp" alt="CPIME" style="width:100%;height:100%;object-fit:cover;display:block;" /></div><strong style="font-size:14px;color:#172541;">CPIME</strong><br><span style="font-size:11.5px;color:#64748b;display:block;margin-top:2px;">Centro de Atención Psicopedagógica Educativa</span><span style="font-size:12px;color:#1e40af;font-weight:700;display:block;margin:4px 0 2px;">Jornada Tomatis · 1 al 15 Nov</span><span style="font-size:12px;color:#334155;display:block;">Avenida 27 de Febrero, Higüey</span><a href="' + MAP_URL_HIGUEY + '" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-top:8px;padding:5px 12px;background:#2563eb;color:#fff;border-radius:8px;font-size:11px;font-weight:700;text-decoration:none;">Abrir en Google Maps ↗</a></div>',
        { offset: [0, -32] }
      );

      markerHiguey.on('click', () => {
        markerHiguey.openPopup();
        map.flyTo(COORDS_HIGUEY, 15, { duration: 0.5 });
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

  const toggleFaq = (idx) => {
    setActiveFaq(prev => prev === idx ? null : idx);
  };

  return (
    <div className="compact-page" data-city="Higüey">
      <a className="skip-link" href="#contenido">Ir al contenido</a>

      {/* TOP COUNTDOWN BANNER (SINGLE LINE) */}
      <aside className="top-timer-banner" aria-label="Tiempo restante para la jornada en Higüey">
        <div className="top-timer-inner">
          <span className="top-timer-label">Inicia en:</span>

          <div className="top-timer-countdown" role="timer" aria-live="polite">
            <span className="top-timer-unit">
              <strong>{padTwo(timeLeft.days)}</strong><small>d</small>
            </span>
            <span className="top-timer-sep" aria-hidden="true">:</span>
            <span className="top-timer-unit">
              <strong>{padTwo(timeLeft.hours)}</strong><small>h</small>
            </span>
            <span className="top-timer-sep" aria-hidden="true">:</span>
            <span className="top-timer-unit">
              <strong>{padTwo(timeLeft.minutes)}</strong><small>m</small>
            </span>
            <span className="top-timer-sep" aria-hidden="true">:</span>
            <span className="top-timer-unit">
              <strong>{padTwo(timeLeft.seconds)}</strong><small>s</small>
            </span>
          </div>

          <a 
            className="top-timer-btn" 
            href={WA_HIGUEY} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Reservar cupo en WhatsApp"
          >
            <span>Reservar</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </aside>

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
          <a className="nav-link" href="#intensivo">La jornada</a>
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
        <section className="hero compact-hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-grid section-wrap">
            <div className="hero-copy">
              <p className="eyebrow">SANTO DOMINGO TRASLADA SU MÉTODO EXCLUSIVO</p>
              <h1 id="hero-title">
                ¡Por fin en <span className="text-brand-gradient">Higüey</span>! <span className="text-brand-highlight">Terapia intensiva</span> para niños con condición.
              </h1>
              <p className="hero-description">
                El método neurosensorial de la capital, del 1 al 15 de noviembre en CPIME, Av. 27 de Febrero.
              </p>
              <div className="hero-actions">
                <a className="button hero-cta-button" href={WA_HIGUEY} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon size={20} color="#000000" />
                  <span>Consultar cupos por WhatsApp →</span>
                </a>
              </div>
            </div>

            <figure className="hero-visual">
              <div className="photo-crop">
                <video
                  src="/higueyvid.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  title="Jornada Tomatis Higüey"
                />
              </div>
            </figure>
          </div>

          {/* Minimal Testimonials Marquee - Desktop 1 row, Mobile 2 rows */}
          <div className="hero-quotes-marquee" aria-label="Opiniones de familias">
            <div className="hero-quotes-track hero-quotes-track-desktop">
              {[...miniTestimonialQuotes, ...miniTestimonialQuotes].map((quote, idx) => (
                <div key={`d-${idx}`} className="hero-quote-item">
                  <span className="hero-quote-stars" aria-hidden="true">★★★★★</span>
                  <span className="hero-quote-text">{quote}</span>
                </div>
              ))}
            </div>

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
              <a className="button" href={WA_HIGUEY} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} color="#000000" />
                <span>Apartar horario por WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* CHARLA Y WORKSHOP INICIAL: EQUIPO MULTIDISCIPLINARIO */}
        <section className="section-workshop-clean" id="workshop" aria-labelledby="workshop-title">
          <div className="section-wrap">
            <div className="workshop-clean-header">
              <p className="eyebrow">SÁBADO 1 DE NOVIEMBRE · CPIME, HIGÜEY</p>
              <h2 id="workshop-title">
                Charla y Workshop Inicial
              </h2>
            </div>

            {/* VIDEO DEL WORKSHOP */}
            <div className="workshop-video-frame">
              <video
                className="workshop-video-player"
                src="/workshop-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                title="Workshop inicial en Higüey"
              />
            </div>

            {/* TÍTULO: LAS 5 ETAPAS DEL WORKSHOP */}
            <h3 className="workshop-stages-heading">
              Las 5 etapas del workshop
            </h3>

            <div className="workshop-clean-container">
              {workshopTopics.map((item) => (
                <div key={item.num} className="workshop-clean-row">
                  <span className="workshop-clean-num">{item.num}</span>
                  <div className="workshop-clean-body">
                    <h3 className="workshop-clean-entity">{item.entity}</h3>
                    <p className="workshop-clean-topic">{item.topic}</p>
                  </div>
                  {item.logo && (
                    <div className="workshop-clean-logo-wrap">
                      <img 
                        src={item.logo} 
                        alt={item.entity} 
                        className={`workshop-clean-logo ${item.logoClass}`} 
                        loading="lazy" 
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="workshop-clean-action">
              <a className="button" href={WA_HIGUEY} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} color="#000000" />
                <span>Consultar sobre la charla por WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* JORNADA INTENSIVA (FONDO AMARILLO) */}
        <section className="section-intensivo-yellow" id="intensivo" aria-labelledby="intensivo-title">
          <div className="section-wrap">
            <div className="intensivo-header">
              <span className="intensivo-eyebrow">3 AL 15 DE NOVIEMBRE · CPIME, HIGÜEY</span>
              <h2 id="intensivo-title">La Jornada Intensiva</h2>
              <p className="intensivo-lead">
                13 días de terapia neurosensorial personalizada (2 horas diarias) para avanzar en semanas lo que suele tomar meses.
              </p>
            </div>

            {/* FOTOS DE LA JORNADA */}
            <div className="intensivo-photos-wrap">
              <div className="intensivo-compact-gallery" aria-label="Fotos de terapia en jornada">
                <figure className="intensivo-mini-photo">
                  <img 
                    src="/assets/families/photo-01.webp" 
                    alt="Acompañamiento individual en mesa" 
                    loading="lazy" 
                  />
                </figure>
                <figure className="intensivo-mini-photo">
                  <img 
                    src="/assets/families/photo-04.webp" 
                    alt="Actividades de pinza fina y didácticos" 
                    loading="lazy" 
                  />
                </figure>
                <figure className="intensivo-mini-photo">
                  <img 
                    src="/assets/families/photo-02.webp" 
                    alt="Trabajo con rompecabezas y juego" 
                    loading="lazy" 
                  />
                </figure>
                <figure className="intensivo-mini-photo">
                  <img 
                    src="/assets/families/photo-06.webp" 
                    alt="Dinámica en alfombra de foam" 
                    loading="lazy" 
                  />
                </figure>
                <figure className="intensivo-mini-photo">
                  <img 
                    src="/assets/families/photo-11.webp" 
                    alt="Terapeutas guiando la sesión" 
                    loading="lazy" 
                  />
                </figure>
              </div>
            </div>
          </div>

          {/* Minimal Testimonials Marquee */}
          <div className="hero-quotes-marquee intensivo-quotes-marquee" aria-label="Opiniones de familias">
            <div className="hero-quotes-track hero-quotes-track-desktop">
              {[...miniTestimonialQuotes, ...miniTestimonialQuotes].map((quote, idx) => (
                <div key={`iq-d-${idx}`} className="hero-quote-item">
                  <span className="hero-quote-stars" aria-hidden="true">★★★★★</span>
                  <span className="hero-quote-text">{quote}</span>
                </div>
              ))}
            </div>

            <div className="hero-quotes-track hero-quotes-track-mobile track-row-1">
              {[...quotesRow1, ...quotesRow1, ...quotesRow1, ...quotesRow1].map((quote, idx) => (
                <div key={`iq-m1-${idx}`} className="hero-quote-item">
                  <span className="hero-quote-stars" aria-hidden="true">★★★★★</span>
                  <span className="hero-quote-text">{quote}</span>
                </div>
              ))}
            </div>
            <div className="hero-quotes-track hero-quotes-track-mobile track-row-2">
              {[...quotesRow2, ...quotesRow2, ...quotesRow2, ...quotesRow2].map((quote, idx) => (
                <div key={`iq-m2-${idx}`} className="hero-quote-item">
                  <span className="hero-quote-stars" aria-hidden="true">★★★★★</span>
                  <span className="hero-quote-text">{quote}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="section-wrap">
            {/* 3 PILARES VISUALES */}
            <div className="intensivo-pillars-row">
              <div className="intensivo-pillar-item">
                <div className="intensivo-pillar-icon-wrap" aria-hidden="true">
                  <Headphones size={26} strokeWidth={2.5} />
                </div>
                <div className="intensivo-pillar-info">
                  <h3>Audífonos Tomatis®</h3>
                  <p>Conducción ósea y auditiva para acelerar habla y atención.</p>
                </div>
              </div>

              <div className="intensivo-pillar-item">
                <div className="intensivo-pillar-icon-wrap" aria-hidden="true">
                  <Layers size={26} strokeWidth={2.5} />
                </div>
                <div className="intensivo-pillar-info">
                  <h3>Mesa y suelo con foam</h3>
                  <p>Dinámicas cómodas sobre alfombras acolchadas, cero sobrecarga.</p>
                </div>
              </div>

              <div className="intensivo-pillar-item">
                <div className="intensivo-pillar-icon-wrap" aria-hidden="true">
                  <Puzzle size={26} strokeWidth={2.5} />
                </div>
                <div className="intensivo-pillar-info">
                  <h3>Juegos didácticos</h3>
                  <p>Rompecabezas, pinza fina y coloreado mientras se estimulan.</p>
                </div>
              </div>
            </div>

            <div className="intensivo-cta-action">
              <a 
                className="button intensivo-cta-btn" 
                href={WA_HIGUEY} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} color="#000000" />
                <span>Consultar cupos de la jornada por WhatsApp</span>
              </a>
            </div>

            {/* TARJETA INDEPENDIENTE DEL MÉTODO TOMATIS® */}
            <div className="mini-tomatis-card intensivo-tomatis-card" id="metodo-tomatis">
              <div className="mini-tomatis-image-wrap">
                <img 
                  src="/tomatis_kids.webp" 
                  alt="Niños usando el Método Tomatis®" 
                  className="mini-tomatis-img" 
                  loading="lazy" 
                />
              </div>
              <div className="mini-tomatis-content">
                <span className="mini-tomatis-kicker">TERAPIA NEUROSENSORIAL</span>
                <h3 id="tomatis-mini-title">¿Qué es el Método Tomatis®?</h3>
                <p className="mini-tomatis-desc">
                  Terapia con audífonos especiales que ayuda a los niños a hablar, concentrarse mejor y calmar sus emociones.
                </p>
                <div className="mini-tomatis-action">
                  <button 
                    type="button"
                    onClick={() => {
                      if (onNavigateTomatis) {
                        onNavigateTomatis();
                      } else if (onNavigateHome) {
                        onNavigateHome();
                      } else {
                        window.location.href = '/';
                      }
                    }}
                    className="button button-small mini-tomatis-btn"
                  >
                    <span>Conocer más sobre el Método Tomatis® →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CRONOGRAMA PASO A PASO */}
        <section className="cronograma-section" id="cronograma" aria-labelledby="cronograma-title">
          <div className="section-wrap">
            <div className="cronograma-heading">
              <p className="eyebrow">CRONOGRAMA CONFIRMADO · HIGÜEY</p>
              <h2 id="cronograma-title">
                Fechas de la <span>jornada.</span>
              </h2>
            </div>

            <div className="chrono-linear-flow">
              <div className="chrono-linear-step">
                <div className="chrono-top-bar">
                  <div className="chrono-num-group">
                    <span className="chrono-big-num">01</span>
                    <MessageSquare className="chrono-inline-icon" size={26} aria-hidden="true" />
                  </div>
                  <span className="chrono-step-date">Sáb 1 Nov</span>
                </div>
                <div className="chrono-step-body">
                  <div className="chrono-step-main">
                    <h3 className="chrono-step-title">Charla inicial</h3>
                    <p className="chrono-step-desc">CPIME · Av. 27 de Febrero, Higüey</p>
                  </div>
                  <img
                    src="/assets/cpime-logo.webp"
                    alt="CPIME"
                    className="chrono-venue-logo chrono-venue-logo-pequenines"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="chrono-linear-step">
                <div className="chrono-top-bar">
                  <div className="chrono-num-group">
                    <span className="chrono-big-num">02</span>
                    <ClipboardCheck className="chrono-inline-icon" size={26} aria-hidden="true" />
                  </div>
                  <span className="chrono-step-date">Dom 2 Nov</span>
                </div>
                <div className="chrono-step-body">
                  <div className="chrono-step-main">
                    <h3 className="chrono-step-title">Evaluaciones diagnósticas</h3>
                    <p className="chrono-step-desc">CPIME · Calibración personalizada</p>
                  </div>
                  <img
                    src="/assets/cpime-logo.webp"
                    alt="CPIME"
                    className="chrono-venue-logo chrono-venue-logo-pequenines"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="chrono-linear-step">
                <div className="chrono-top-bar">
                  <div className="chrono-num-group">
                    <span className="chrono-big-num">03</span>
                    <Headphones className="chrono-inline-icon" size={26} aria-hidden="true" />
                  </div>
                  <span className="chrono-step-date">3 al 15 Nov</span>
                </div>
                <div className="chrono-step-body">
                  <div className="chrono-step-main">
                    <h3 className="chrono-step-title">Terapias Tomatis®</h3>
                    <p className="chrono-step-desc">Sede CPIME · 2h diarias continuas</p>
                  </div>
                  <img
                    src="/assets/cpime-logo.webp"
                    alt="CPIME"
                    className="chrono-venue-logo chrono-venue-logo-pequenines"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="chrono-linear-step">
                <div className="chrono-top-bar">
                  <div className="chrono-num-group">
                    <span className="chrono-big-num">04</span>
                    <FileText className="chrono-inline-icon" size={26} aria-hidden="true" />
                  </div>
                  <span className="chrono-step-date">Sáb 15 Nov</span>
                </div>
                <div className="chrono-step-body">
                  <div className="chrono-step-main">
                    <h3 className="chrono-step-title">Entrega de informe y cierre</h3>
                    <p className="chrono-step-desc">Sede CPIME · Pautas para casa</p>
                  </div>
                  <img
                    src="/assets/cpime-logo.webp"
                    alt="CPIME"
                    className="chrono-venue-logo chrono-venue-logo-pequenines"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEDE EN HIGÜEY - MAPA LIMPIO */}
        <section className="section-map-wrap section-wrap" id="mapa" aria-labelledby="map-heading">
          <div className="map-section-header">
            <p className="eyebrow">SEDE EN HIGÜEY</p>
            <h2 id="map-heading">
              <span>¿Dónde es?</span>
              <MapPin className="map-heading-inline-pin" size={38} aria-hidden="true" />
            </h2>
            <p style={{ marginTop: '8px', fontSize: '16px', color: 'rgba(23, 37, 65, 0.85)', fontWeight: 600 }}>
              <strong>Centro de Atención Psicopedagógica Educativa CPIME</strong> · Av. 27 de Febrero, Higüey.
            </p>
          </div>
          <div className="simple-map-container">
            <div 
              className="geographic-map" 
              ref={mapRef}
              id="locations-map" 
              aria-label="Mapa de Higüey - CPIME"
            ></div>
          </div>
          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <a 
              href={MAP_URL_HIGUEY} 
              target="_blank" 
              rel="noopener noreferrer"
              className="directory-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 800 }}
            >
              <MapPin size={18} />
              <span>Ver ubicación en Google Maps ↗</span>
            </a>
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

        {/* TANDAS A ELEGIR */}
        <section className="section-tandas-brand" id="tandas" aria-labelledby="tandas-title">
          <div className="section-wrap">
            <div className="tandas-brand-header">
              <p className="eyebrow">HORARIOS DISPONIBLES</p>
              <h2 id="tandas-title">
                Tandas a elegir
              </h2>
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
              <a className="button" href={WA_HIGUEY} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={20} color="#000000" />
                <span>Apartar horario por WhatsApp</span>
              </a>
              <p className="tandas-action-note">
                Los cupos por tanda se completan rápido por orden de inscripción.
              </p>
            </div>
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
                      <strong>3. Te confirmamos el cupo</strong> para la evaluación del domingo 2 de noviembre.
                    </li>
                  </ol>
                  <a className="faq-inline-cta" href={WA_HIGUEY} target="_blank" rel="noopener noreferrer">
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
                  <p>No. El domingo 2 de noviembre realizamos la evaluación previa para calibrar el protocolo específico de tu pequeño.</p>
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
              No volveremos a Higüey<br />
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

          <a className="button button-countdown-action" href={WA_HIGUEY} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={20} color="#000000" />
            <span>Apartar cupo por WhatsApp antes de que inicie</span>
          </a>

          <a className="compact-phone" href="tel:+18093065040">
            📞 +1 (809) 306-5040 | Centro Multisensorial RD
          </a>
        </section>
      </main>

      {/* FIXED BOTTOM CTA */}
      <div className={`fixed-cta ${showFixedCta ? 'is-visible' : ''}`} aria-hidden={!showFixedCta}>
        <a className="button" href={WA_HIGUEY} target="_blank" rel="noopener noreferrer">
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
