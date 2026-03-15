import React from 'react'

const topStories = [
  {
    id: 1,
    category: 'Panamá',
    title: 'Debate nacional sobre el futuro del Canal de Panamá ante cambios climáticos',
    summary: 'Autoridades, analistas y sectores logísticos discuten nuevas estrategias para enfrentar periodos de sequía y mantener la competitividad del Canal.',
    truthScore: 72,
    status: 'En desarrollo',
    sourceCount: 2,
  },
  {
    id: 2,
    category: 'Negocios Panamá',
    title: 'Aumento del interés internacional por inversiones inmobiliarias frente al mar',
    summary: 'Proyectos turísticos y residenciales en zonas costeras están atrayendo inversionistas extranjeros y nuevos desarrollos premium.',
    truthScore: 74,
    status: 'Información preliminar',
    sourceCount: 2,
  },
  {
    id: 3,
    category: 'Mundo',
    title: 'Gobiernos analizan nuevas regulaciones para inteligencia artificial',
    summary: 'Distintos países evalúan marcos regulatorios para supervisar sistemas de IA, equilibrando innovación con seguridad y privacidad.',
    truthScore: 76,
    status: 'Alta discusión global',
    sourceCount: 3,
  },
]

const feeds = [
  { name: 'Panamá Feed 01', type: 'RSS / XML', status: 'Activo', cadence: 'Cada 15 min' },
  { name: 'Negocios Globales', type: 'RSS / API', status: 'Activo', cadence: 'Cada 10 min' },
  { name: 'Alertas Oficiales', type: 'Gov / Press', status: 'Monitoreo', cadence: 'Tiempo real' },
  { name: 'Trending Signals', type: 'Social / Search', status: 'Analizando', cadence: 'Cada 5 min' },
]

const pipeline = [
  ['1', 'Ingesta automática', 'Recolecta titulares, enlaces y metadatos desde RSS, APIs y fuentes oficiales.'],
  ['2', 'Deduplicación', 'Agrupa historias similares y reduce ruido editorial.'],
  ['3', 'Scoring editorial', 'Calcula Truth Score, prioridad y riesgo antes de publicar.'],
  ['4', 'Redacción con IA', 'Genera borradores con resumen, contexto e impacto.'],
  ['5', 'Panel editorial', 'Permite aprobar, corregir o rechazar historias.'],
]

const special = [
  ['Epstein', 'Seguimiento de documentos judiciales, investigaciones y repercusiones políticas.'],
  ['Irán', 'Cobertura de tensiones geopolíticas, energía y conflictos regionales.'],
  ['Trump', 'Noticias políticas, económicas y electorales relacionadas con Donald Trump.'],
]

const mobile = [
  ['Home móvil', 'Titulares, alertas, secciones y acceso rápido al newsletter.'],
  ['Breaking news', 'Notificaciones push y seguimiento minuto a minuto.'],
  ['Guardar y leer', 'Modo oscuro, favoritos y artículos guardados.'],
  ['Panel editorial', 'Aprobación rápida y estado de las colas de redacción.'],
]

export default function App() {
  return (
    <div>
      <header className="header">
        <div className="container nav">
          <div className="brand">
            <div className="logo">AI</div>
            <div>
              <div className="brand-title">AI NOTICIAS PANAMÁ</div>
              <div className="brand-sub">Noticias filtradas por inteligencia artificial</div>
            </div>
          </div>
          <nav className="menu">
            <a href="#portada">Portada</a>
            <a href="#pipeline">Pipeline</a>
            <a href="#feeds">Feeds</a>
            <a href="#movil">App móvil</a>
          </nav>
          <button className="btn btn-dark">Panel editorial</button>
        </div>
      </header>

      <section id="portada" className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Newsroom inteligente</div>
            <h1>Diario digital con feeds automáticos, detector de breaking news y redacción asistida por IA</h1>
            <p className="lead">
              Prototipo visual para AI NOTICIAS PANAMÁ con portada editorial, secciones, flujo de verificación,
              módulos de RSS y experiencia móvil.
            </p>
            <div className="stats">
              <div className="stat"><span>Noticias analizadas hoy</span><strong>148</strong></div>
              <div className="stat"><span>Publicadas</span><strong>36</strong></div>
              <div className="stat"><span>En revisión</span><strong>22</strong></div>
              <div className="stat"><span>Descartadas</span><strong>17</strong></div>
            </div>
          </div>
          <div className="panel dark">
            <div className="panel-tag">Breaking engine</div>
            <h3>Señales de aceleración</h3>
            <div className="signal">
              <span>Subida rápida de cobertura en 12 minutos</span>
              <b>Alerta roja</b>
            </div>
            <div className="signal">
              <span>Coincidencia entre medios y comunicado oficial</span>
              <b>Muy fuerte</b>
            </div>
            <div className="signal">
              <span>Aumento de búsqueda regional</span>
              <b>En monitoreo</b>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Titulares de ejemplo dentro del layout</h2>
            <p>Contenido de muestra para que veas cómo se presenta el periódico.</p>
          </div>
          <div className="story-list">
            {topStories.map((story) => (
              <article key={story.id} className="story-card">
                <div className="badges">
                  <span className="badge red">{story.category}</span>
                  <span className="badge amber">{story.status}</span>
                  <span className="badge blue">{story.sourceCount} fuentes</span>
                </div>
                <h3>{story.title}</h3>
                <p>{story.summary}</p>
                <div className="story-actions">
                  <span className="score">Truth Score: {story.truthScore}</span>
                  <button className="btn">Leer nota</button>
                  <button className="btn">Ver fuentes</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pipeline" className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Pipeline completo</h2>
            <p>Cómo funciona el periódico de punta a punta.</p>
          </div>
          <div className="grid-5">
            {pipeline.map(([num, title, desc]) => (
              <div className="panel" key={title}>
                <div className="step">{num}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="feeds" className="section">
        <div className="container split">
          <div className="panel dark">
            <div className="panel-tag">Feeds y fuentes</div>
            <h3>Conexión con RSS, APIs y fuentes oficiales</h3>
            <p>Zona conceptual para monitorear salud de feeds, frecuencia de actualización y estado operativo de cada fuente.</p>
          </div>
          <div className="grid-2">
            {feeds.map((feed) => (
              <div className="panel" key={feed.name}>
                <div className="feed-top">
                  <h3>{feed.name}</h3>
                  <span className="badge green">{feed.status}</span>
                </div>
                <p>{feed.type}</p>
                <strong className="accent">{feed.cadence}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div>
            <div className="section-head left">
              <h2>AI Writer</h2>
              <p>Cola de borradores generados por IA para edición y aprobación.</p>
            </div>
            <div className="story-list">
              <div className="panel">
                <div className="badges">
                  <span className="badge red">Panamá</span>
                  <span className="badge blue">Prioridad alta</span>
                  <span className="badge amber">Listo para edición</span>
                </div>
                <h3>Nuevo borrador: impacto económico de sequía en logística</h3>
                <div className="story-actions">
                  <button className="btn btn-dark">Abrir borrador</button>
                  <button className="btn">Editar prompt</button>
                </div>
              </div>
              <div className="panel">
                <div className="badges">
                  <span className="badge red">Negocios</span>
                  <span className="badge blue">Prioridad media</span>
                  <span className="badge amber">Generado por IA</span>
                </div>
                <h3>Borrador: inversiones costeras y turismo premium</h3>
                <div className="story-actions">
                  <button className="btn btn-dark">Abrir borrador</button>
                  <button className="btn">Editar prompt</button>
                </div>
              </div>
            </div>
          </div>
          <div className="panel">
            <div className="panel-tag light">Plantilla del artículo</div>
            <h3>Título generado por IA</h3>
            <p>Resumen ejecutivo de la historia con contexto rápido, impacto y elementos pendientes por confirmar.</p>
            <ul className="template-list">
              <li><strong>Qué ocurrió:</strong> descripción principal del evento.</li>
              <li><strong>Qué dicen las fuentes:</strong> comparación resumida entre medios.</li>
              <li><strong>Impacto:</strong> consecuencias económicas, políticas o sociales.</li>
              <li><strong>Qué falta confirmar:</strong> elementos pendientes antes de subir el score.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Cobertura especial</h2>
            <p>Áreas editoriales dedicadas.</p>
          </div>
          <div className="grid-3">
            {special.map(([title, desc]) => (
              <div className="panel" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="movil" className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Vista conceptual de la app móvil</h2>
            <p>Así se puede presentar la experiencia móvil del periódico.</p>
          </div>
          <div className="grid-4">
            {mobile.map(([title, desc]) => (
              <div className="mobile-card" key={title}>
                <div className="phone">{title}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
