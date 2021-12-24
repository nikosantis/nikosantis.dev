import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft, FiDownload } from 'react-icons/fi'

import ResumePage from 'components/resume/page'
import avatarImg from 'public/images/nikolas-santis.png'
import ResumeDarkmode from 'components/resume/darkmode'
import ResumeLanguageChange from 'components/resume/language-change'

export default function CvPage() {
  return (
    <ResumePage>
      <header className='w-full h-full flex justify-between items-center mb-4 px-4 py-6'>
        <div className=''>
          <div className='inline-flex items-center'>
            <Link href='/en'>
              <a className='inline-flex'>
                <div className='flex justify-center items-center mr-2'>
                  <FiArrowLeft />
                </div>
                <div className=''>Back</div>
              </a>
            </Link>
          </div>
          <h1 className='text-3xl'>Nikolas Santis Curriculum</h1>
        </div>
        <div className='flex'>
          <div className='flex'>
            <ResumeDarkmode />
          </div>
          <div className='flex'>
            <ResumeLanguageChange />
          </div>
          <div>
            <a
              className='flex justify-center items-center'
              href='/resumes/nikolas-santis-cv-es.pdf'
              target='_blank'
              title='Descargar Curriculum'
            >
              <div className='w-[50px] h-[50px] cursor-pointer bg-none rounded-lg transition-colors ligth flex justify-center items-center'>
                <div className='flex justify-center items-center'>
                  <FiDownload size='20' />
                </div>
              </div>
            </a>
          </div>
        </div>
      </header>
      <div className='w-full h-full flex flex-col md:flex-row lg:flex-row min-h-resume px-4 mx-auto lg:max-w-5xl xl:max-w-6xl overflow-auto resume'>
        <aside className='w-full md:w-[280px] lg:w-[320px] h-full flex flex-col px-4'>
          <header className='flex flex-col items-center mb-8'>
            <div className='w-[100px] h-[100px] rounded-full overflow-hidden relative lg:w-[100px] lg:h-[100px] mb-6'>
              <Image
                src={avatarImg}
                alt='Nikolas Santis'
                layout='fill'
                objectFit='contain'
                placeholder='blur'
              />
            </div>
            <h2 className='uppercase text-xl text-center mb-4'>
              Nikolas Santis Escalante
            </h2>
            <h5 className='text-center'>
              Full Stack JavaScript & TypeScript Senior
            </h5>
          </header>
          <section className='flex flex-col items-center text-center h-full w-full flex-1'>
            <div className='w-full mb-8'>
              <h4 className='uppercase font-extrabold mb-4'>Datos</h4>
              <p className='text-sm'>
                <a href='mailto:nikosantis@gmail.com'>nikosantis@gmail.com</a>
              </p>
              <p className='text-sm'>
                <a href='tel:+56984155721'>+56 9 8415 5721</a>
              </p>
              <p className='text-sm'>
                <a
                  href='https://www.linkedin.com/in/nikosantis/'
                  target='_blank'
                  rel='noreferrer'
                >
                  linkedin.com/in/nikosantis
                </a>
              </p>
              <p className='text-sm'>
                <a
                  href='https://github.com/nikosantis'
                  target='_blank'
                  rel='noreferrer'
                >
                  github.com/nikosantis
                </a>
              </p>
              <p className='text-sm'>33 años</p>
              <p className='text-sm'>Casado</p>
              <p className='text-sm'>Chileno</p>
              <p className='text-sm'>Trabajando remoto desde Santiago, Chile</p>
            </div>
            <div className='w-full mb-8'>
              <h4 className='uppercase font-extrabold mb-4'>Estudios</h4>
              <p className='text-sm'>
                <strong>Licenciado en Diseño con Distinción</strong>
              </p>
              <p className='text-sm'>
                <strong>Diseñador Gráfico</strong>
              </p>
              <p className='text-sm'>Universidad Santo Tomás</p>
              <p className='text-sm mb-3'>Santiago, Chile 2014</p>
              <p className='text-sm'>
                <strong>Coach</strong>
              </p>
              <p className='text-sm'>Diplomado en Coaching, 122 horas</p>
              <p className='text-sm'>Universidad Centro Médico Bautista</p>
              <p className='text-sm mb-3'>Asunción, Paraguay, Abril 2019</p>
              <p className='text-sm'>
                <strong>Certificación Coaching</strong>
              </p>
              <p className='text-sm'>
                Curso certificado de las técnicas fundamentales de Coaching. 61
                horas de capacitación específica para ser coach como parte del
                Professional Coach Certificate Program ACSTH aprobadas por la
                International Coach Federation.
              </p>
              <p className='text-sm'>Active Results LLC</p>
              <p className='text-sm'>Certificación el 08 de Abril 2019</p>
            </div>
            <div className='w-full mb-8'>
              <h4 className='uppercase font-extrabold mb-4'>Cosas sobre mí</h4>
              <p className='text-sm'>
                Me gusta muchísimo leer libros, perderme en internet, estudiar,
                conversar, escuchar podcasts, la política, enseñar a otras
                personas, participar de aprendizajes, salir a comer, me encanta
                la cerveza, la pizza, las hamburguesas, ver películas, series y
                animés, jugar videojuegos, viajar y disfrutar de la vida con mi
                esposa y mi familia.
              </p>
              <p className='text-sm'>
                No solo soy un computín y paso metido en el código, sino también
                he querido formarme en otras competencias, como por ejemplo el
                coaching, para poder sacar todo el potencial que tengo en mí y
                también poder aportar a otros en mis relaciones cotidianas. Esto
                me ha permitido adquirir nuevas herramientas para trabajar en
                equipo. Además fue un bonito proceso de aprendizaje que junto a
                mi esposa hemos podido recorrer.
              </p>
            </div>
            <div className='w-full mb-8'>
              <h4 className='uppercase font-extrabold mb-4'>Reconocimientos</h4>
              <p className='text-sm'>
                Titulado con Distinción en la Universidad Santo Tomás el año
                2014.
              </p>
              <p className='text-sm'>
                Finalista concurso de Diseño Ideas Jóvenes Con-Suma
                Responsabilidad año 2013.
              </p>
              <p className='text-sm'>
                Durante el periodo de 2011/2012 fui Vicepresidente de la
                Federación de Estudiantes UST a nivel nacional.
              </p>
              <p className='text-sm'>
                El 2011 fui invitado y forme parte de la Primera Escuela de
                Líderes de la Universidad Santo Tomás a nivel nacional.
              </p>
            </div>
          </section>
        </aside>
        <main
          role='main'
          className='flex-1 md:px-8 lg:px-8 lg:border-l lg:border-l-gray-100 py-4'
        >
          <div className='w-full mb-8'>
            <h3 className='uppercase font-extrabold mb-4'>Resume</h3>
            <p>
              Hola, soy Niko, Desarrollador de Software trabajando remotamente
              desde Chile.
            </p>
            <p>
              Me gusta generar contenido y estoy compartiendo sobre las
              tecnologías que uso actualmente, experiencias y vida cotidiana
              mientras desarrollo, a través de mi blog y creando comunidad.
            </p>
            <p>
              Trabajo para Stefanini Latam como Desarrollador Full Stack Senior
              en un gran proyecto de Transformación Digital, levantando MVPs y
              llevándolos a producción para clientes reales de todo Chile y
              Latinoamérica.
            </p>
            <p className='mb-2'>
              Tengo más de 12 años de experiencia trabajando en el mundo
              digital.
            </p>
            <p className='mb-2'>Actualmente trabajo con:</p>
            <p className='mb-2'>
              JavaScript, TypeScript, React, Nextjs, Tailwindcss, Testing
              unitario, integración y e2e, Jest, React, Testing Library,
              Cypress, Express / Nest.js, Java Spring Boot, GraphQL / API Rest,
              MongoDB, Microservicios, Github Actions, Docker, Kubernetes y AWS.
            </p>
            <p>
              Me encanta crear nuevos productos con interfaces que sean
              amigables con los usuarios, con arquitecturas modernas,
              desarrollando con las últimas tecnologías y trabajando en equipo.
            </p>
            <p>
              Mi stack favorito es: Nextjs + Express + GraphQL + Neo4j + Vercel.
            </p>
            <p>
              Soy inquieto por aprender más y me gusta afrontar nuevos retos.
            </p>
            <p>No le tengo miedo a lo nuevo.</p>
            <p>
              Soy ñoño. Me gustan los videojuegos, las series, leer y hablar
              mucho.
            </p>
          </div>
          <div className='w-full mb-8'>
            <h3 className='uppercase font-extrabold mb-4'>Experiencia</h3>
            <p>
              <strong>Stefanini Latam</strong>, Octubre 2020
            </p>
            <p>
              Proyecto de Transformación Digital, levantando MVPs y llevándolos
              a producción para clientes reales de todo Chile y Latinoamérica.
            </p>
            <p className='mb-3'>
              Desarrollo de la app principal, desarrollo de microservicios,
              modernización del legacy, administración de librerías, entre otras
              cosas.
            </p>
            <p>
              <strong>4P</strong>, Febrero 2020 / Septiembre 2020
            </p>
            <p className='mb-3'>
              Arquitecto y desarrollador de software: desarrollo web,
              aplicaciones mobile, modelado de base de datos, desarrollo
              microservicios, APIs REST, Graphql y desarrollo frontend con React
              y Nextjs. Despliegue y mantención de código.
            </p>
            <p>
              <strong>OQO Diseño y Publicidad</strong>, Noviembre 2017 / Febrero
              2020
            </p>
            <p className='mb-3'>
              Inteligencia Digital: líder de innovación tecnológica. Desarrollo
              de APIs REST y servicios de Graphql. Desarrollo y optimización de
              sitios web, de aplicaciones y sistemas de CRM. Modelado de bases
              de datos. Evangelizador de transformación digital y agilidad.
            </p>
            <p>
              <strong>WebClass</strong>, Octubre 2017 / Noviembre 2017
            </p>
            <p className='mb-3'>
              Desarrollador Frontend y Encargado de Marketing Digital:
              desarrollo y diseño web para el área de Marketing. Promoción a
              través de variadas estrategias, acciones y medios, los servicios
              de la unidad de negocio con fines de posicionamiento y venta.
            </p>
            <p>
              <strong>PasajeBus.com</strong>, Julio 2017 / Octubre 2017
            </p>
            <p className='mb-3'>
              Digital Manager: líder del equipo digital para la creación de
              estrategias digitales de optimización y posicionamiento del canal
              ecommerce para la venta de tickes online de pasajes de bus.
            </p>
            <p>
              <strong>OQO Diseño y Publicidad</strong>, Marzo 2015 / Julio 2017
            </p>
            <p className='mb-3'>
              Especialista Digital: liderar la creación y desarrollo de sitios
              web y aplicaciones mobile. Mantenimiento, optimización y
              posicionamiento. Desarrollador Backend y Frontend.
            </p>
            <p>
              <strong>Agencia Brootal</strong>, Diciembre 2014 / Marzo 2015
            </p>
            <p className='mb-3'>
              Especialista Digital: encargado de desarrollo web. Liderar la
              gestión del contenido para redes sociales y de la implementación
              de campañas de posicionamiento digital y web.
            </p>
            <p>
              <strong>Agencia Digital Giga</strong>, Octubre 2014 / Diciembre
              2014
            </p>
            <p className='mb-3'>
              Desarrollador Frontend y Especialista Contenido Digital:
              Desarrollo dirección de diseño de sitios Web. Diseño de
              estrategias digitales para campañas social media y contenido
              digital.
            </p>
            <p>
              <strong>Agencia Digital Socialweb</strong>, Octubre 2013 / Octubre
              2014
            </p>
            <p className='mb-3'>
              Desarrollador Web: desarrollo frontend de sitios web. Diseño de
              estrategias de optimización de sitios web.
            </p>
            <p>
              <strong>Galileo Libros</strong>, Diciembre 2012 / Junio 2013
            </p>
            <p className='mb-3'>
              Diagramador, Diseñador y Editor: Libros y Textos Escolares para el
              Ministerio de Educación de Chile.
            </p>
            <p>
              <strong>Samtecno</strong>, Marzo 2010 / Diciembre 2011
            </p>
            <p>Desarrollador: Diseño y Desarrollo de sitios web</p>
          </div>
          <div className='w-full mb-8'>
            <h3 className='uppercase font-extrabold mb-4'>Competencias</h3>
            <p>
              Liderazgo, trabajo en equipo, dominio en habilidades
              comunicacionales y de expresión, enfoque en la innovación,
              mentoring, coaching, aprendizaje rápido y autónomo, autogestión,
              escucha activa, empatía, mentalidad solucionista, responsabilidad,
              vocación por la tecnología, entre otras competencias en las que me
              he ido especializando.
            </p>
          </div>
          <div className='w-full mb-8'>
            <h3 className='uppercase font-extrabold mb-4'>Espero</h3>
            <p>Trabajar 100% remoto.</p>
            <p>
              Trabajar con tecnologías modernas en una empresa que tenga un foco
              en las personas tanto como en los clientes.
            </p>
            <p>
              Deseo desarrollar productos innovadores y aprovechar tanto el
              potencial como lo aprendido.
            </p>
            <p>Quiero seguir aprendiendo y seguir cultivando mi carrera.</p>
            <p>
              Formar parte de un equipo que en sus valores, no exista la
              discriminación, sino que busque la diversidad y la equidad de
              género.
            </p>
            <p>
              Quiero hacer softwares que sean amigables en su experiencia e
              interfaz.
            </p>
            <p>
              Anhelo que mi trabajo sea una buena experiencia, estimulante,
              enérgica, colaborativa, desafiante y significativa para mí.
            </p>
          </div>
          <div className='w-full mb-8'>
            <h3 className='uppercase font-extrabold mb-4'>Por qué yo?</h3>
            <p>Me gusta hacer mi trabajo con excelencia.</p>
            <p>Por que el trabajo en equipo es indispensable para mí.</p>
            <p>Siempre me enfoco en la retroalimentación positiva.</p>
            <p>Me encanta promover el aprendizaje colectivo.</p>
            <p>Porque puedo ser un Padawan como un maestro Jedi.</p>
            <p>Me encanta asumir nuevos desafíos.</p>
            <p>Tengo mucha motivación.</p>
            <p>Nunca quiero parar de aprender.</p>
            <p>Soy un buen compañero y también un buen líder.</p>
            <p>Llevo mucho tiempo preparándome.</p>
            <p>Soy responsable con mi trabajo.</p>
            <p>Dejemos lo demás para que me conozcas.</p>
          </div>
          <div className='w-full'>
            <h3 className='uppercase font-extrabold mb-4'>
              Certificaciones y Cursos
            </h3>
            <p>
              Platzi: Transformación Digital para Empresas, Fundamentos
              JavaScript, Frontend Developer, Curso Práctico de React.js, Curso
              Profesional de JavaScript, Curso de React Router y Redux,
              Prácticas y Entornos de Desarrollo, Server Side Rendering con
              Express, Backend for Frontend, Backend con Node.js, Curso de
              Webpack, Curso de React.js, Curso de React Avanzado, Curso de
              Next.js, Curso de Autenticación con Passport. js, Curso
              Profesional de Git y Github, Curso Esenciales de Node.js, Curso de
              Node. js, Curso Avanzado IoT con Node.js, Curso de Node.js con
              Hapi, Curso de Express. js, Curso Básico de Graphql, Programación
              Funcional JavaScript, Unit Testing con Jasmine MEAN, Curso de
              React Native, Unit Testing con Jest React, Redux, React Router,
              Bases de Datos, MySQL, PosgreSQL, MongoDB, Introducción a Python,
              POO y Algoritmos en Python, Programación Dinámica y Estocástica
              Python, Machine Learning, Introducción a Java SE, Java Spring
              Boot, etc.
            </p>
            <p>
              Inbound Marketing en HubSpot Academy, Marketing Digital iab Spain
              Google Actívate, Analítica Web EOI Escuela de Organización
              Industria Google Actívate, E-Commerce EOI Escuela de Organización
              Industria Google Actívate, Certificación de Publicidad en
              Búsqueda, Video, Móviles y Shopping Google Ads en Google
              Skillshop, Certificación de Analytics en Google Skillshop.
            </p>
          </div>
        </main>
      </div>
      <footer className='w-full py-6 px-7 text-center mt-3 border-t border-t-gray-100'>
        <p className='text-sm'>
          <strong>Nikolas Santis</strong>, Santiago, Chile | Full Stack
          JavaScript & TypeScript Senior
        </p>
      </footer>
    </ResumePage>
  )
}
