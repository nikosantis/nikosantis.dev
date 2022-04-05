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
          <h1 className='text-3xl'>Nikolas Santis Resume</h1>
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
              href='/resumes/nikolas-santis-resume-en.pdf'
              target='_blank'
              title='Download Resume'
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
              <h4 className='uppercase font-extrabold mb-4'>Info</h4>
              <p className='text-sm'>
                <a href='mailto:nikosantis@gmail.com'>nikosantis@gmail.com</a>
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
              <p className='text-sm'>I&apos;m 33 years old</p>
              <p className='text-sm'>Married</p>
              <p className='text-sm'>Chilean</p>
              <p className='text-sm'>Working remotely from Santiago, Chile</p>
            </div>
            <div className='w-full mb-8'>
              <h4 className='uppercase font-extrabold mb-4'>Studies</h4>
              <p className='text-sm'>
                <strong>Bachelor of Design with Distinction</strong>
              </p>
              <p className='text-sm'>
                <strong>Graphic Designer</strong>
              </p>
              <p className='text-sm'>Universidad Santo Tomás</p>
              <p className='text-sm mb-3'>Santiago, Chile 2014</p>
              <p className='text-sm'>
                <strong>Coach</strong>
              </p>
              <p className='text-sm'>Diploma in Coaching, 122 hours</p>
              <p className='text-sm'>Universidad Centro Médico Bautista</p>
              <p className='text-sm mb-3'>Asunción, Paraguay, Abril 2019</p>
              <p className='text-sm'>
                <strong>Coaching Certification</strong>
              </p>
              <p className='text-sm'>
                Certified course of the fundamental techniques of Coaching. 61
                hours of specific training to be a coach as part of the
                Professional Coach Certificate Program ACSTH approved by the
                International Coach Federation.
              </p>
              <p className='text-sm'>Active Results LLC</p>
              <p className='text-sm'>Certification on April 08, 2019</p>
            </div>
            <div className='w-full mb-8'>
              <h4 className='uppercase font-extrabold mb-4'>About me</h4>
              <p className='text-sm'>
                I really like reading books, getting lost on the internet,
                studying, talking, listening to podcasts, politics, teaching
                other people, participating in learning, going out to eat, I
                love beer, pizza, hamburgers, watching movies, series and anime
                , play video games, travel and enjoy life with my wife and
                family.
              </p>
              <p className='text-sm'>
                I am not just a computer nerd and I spend time into code. I have
                also wanted to train in other skills, such as coaching, to be
                able to unleash the full potential that I have in myself and
                also to be able to contribute to others in my daily
                relationships. This has allowed me to acquire new tools to work
                as a team. It was also a beautiful learning process that
                together with my wife we have been able to go through.
              </p>
            </div>
            <div className='w-full mb-8'>
              <h4 className='uppercase font-extrabold mb-4'>Acknowledgments</h4>
              <p className='text-sm'>
                Graduated with Distinction from the Universidad Santo Tomás in
                2014.
              </p>
              <p className='text-sm'>
                Design contest finalist Ideas Jóvenes Con-Suma Responsabilidad
                in 2013.
              </p>
              <p className='text-sm'>
                During the period of 2011/2012 I was Vice President of the UST
                Student Federation at the national level.
              </p>
              <p className='text-sm'>
                In 2011 I was invited and became part of the First School of
                Leaders of the Universidad Santo Tomás at the national level.
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
              Hi there! I&apos;m Niko, a Software Developer working remotely
              from Chile.
            </p>
            <p>
              I like to create content and I&apos;m sharing about the
              technologies that I currently use, experiences and daily life
              while developing, through my blog and creating community.
            </p>
            <p>
              I work at Stefanini Latam how Senior Full Stack Developer in a big
              project of Digital Transformation, raising MVPs and taking them to
              production for real clients throughout Chile and Latin America.
            </p>
            <p className='mb-2'>
              I have more than 12 years experience working in the digital world.
            </p>
            <p className='mb-2'>I currently work with:</p>
            <p className='mb-2'>
              JavaScript, TypeScript, React, Nextjs, Tailwindcss, E2E,
              Integration and Unit Testing, Jest, React, Testing Library,
              Cypress, Express / Nest.js, Java Spring Boot, GraphQL / API Rest,
              MongoDB, Microservices, Github Actions, Docker, Kubernetes y AWS.
            </p>
            <p>
              I love creating new products with friendly user interfaces, with
              modern architectures, developing with the latest technologies and
              working in a team.
            </p>
            <p>
              My favorite stack is: Nextjs + Express + GraphQL + Neo4j + Vercel.
            </p>
            <p>
              I&apos;m restless about learning more and I like facing new
              challenges.
            </p>
            <p>I&apos;m not afraid of the new.</p>
            <p>
              I&apos;m nerd. I like video games, series, reading books and
              comics and talking a lot.
            </p>
          </div>
          <div className='w-full mb-8'>
            <h3 className='uppercase font-extrabold mb-4'>Experience</h3>
            <p>
              <strong>Stefanini Latam</strong>, October 2020
            </p>
            <p>
              Digital Transformation Project, raising MVPs and taking them to
              production for real clients throughout Chile and Latin America.
            </p>
            <p className='mb-3'>
              Development of the main app, development of microservices,
              modernization of the legacy, administration of libraries, among
              other things.
            </p>
            <p>
              <strong>4P</strong>, February 2020 / September 2020
            </p>
            <p className='mb-3'>
              Architect and software developer: web development, mobile
              applications, database modeling, microservices development, REST
              APIs, Graphql and frontend development with React and Nextjs.
              Deployment and maintenance of code.
            </p>
            <p>
              <strong>OQO Design and Advertising</strong>, November 2017 /
              February 2020
            </p>
            <p className='mb-3'>
              Digital Intelligence: leader of technological innovation.
              Development of REST APIs and Graphql services. Development and
              optimization of websites, applications and CRM systems. Database
              modeling. Evangelizer of digital transformation and agility.
            </p>
            <p>
              <strong>WebClass</strong>, October 2017 / November 2017
            </p>
            <p className='mb-3'>
              Frontend Developer and Digital Marketing Manager: development and
              web design for the Marketing area. Promotion through various
              strategies, actions and means, the services of the business unit
              for positioning and sales purposes.
            </p>
            <p>
              <strong>PasajeBus.com</strong>, July 2017 / October 2017
            </p>
            <p className='mb-3'>
              Digital Manager: leader of the digital team for the creation of
              digital strategies for optimization and positioning of the
              ecommerce channel for the sale of online tickets for bus tickets.
            </p>
            <p>
              <strong>OQO Design and Advertising</strong>, March 2015 / July
              2017
            </p>
            <p className='mb-3'>
              Digital Specialist: lead the creation and development of websites
              and mobile applications. Maintenance, optimization and
              positioning. Backend and Frontend Developer.
            </p>
            <p>
              <strong>Agencia Brootal</strong>, December 2014 / March 2015
            </p>
            <p className='mb-3'>
              Digital Specialist: in charge of web development. Lead the content
              management for social networks and the implementation of digital
              and web positioning campaigns.
            </p>
            <p>
              <strong>Agencia Digital Giga</strong>, October 2014 / December
              2014
            </p>
            <p className='mb-3'>
              Frontend Developer and Digital Content Specialist: Web site design
              direction development. Design of digital strategies for social
              media campaigns and digital content.
            </p>
            <p>
              <strong>Agencia Digital Socialweb</strong>, October 2013 / October
              2014
            </p>
            <p className='mb-3'>
              Web Developer: frontend website development. Website optimization
              strategies design.
            </p>
            <p>
              <strong>Galileo Libros</strong>, December 2012 / June 2013
            </p>
            <p className='mb-3'>
              Diagrammer, Designer and Editor: School Books and Texts for the
              Ministry of Education of Chile.
            </p>
            <p>
              <strong>Samtecno</strong>, March 2010 / December 2011
            </p>
            <p>Developer: Website Design and Development</p>
          </div>
          <div className='w-full mb-8'>
            <h3 className='uppercase font-extrabold mb-4'>Competences</h3>
            <p>
              Leadership, teamwork, good command of communication and expression
              skills, focus on innovation, mentoring, coaching, rapid and
              autonomous learning, self-management, active listening, empathy,
              solutionist mindset, responsibility, vocation for technology,
              among other competences in which I have been specializing.
            </p>
          </div>
          <div className='w-full mb-8'>
            <h3 className='uppercase font-extrabold mb-4'>I Hope</h3>
            <p>Work 100% remote.</p>
            <p>
              Working with modern technologies in a company that has a focus on
              people as well as customers.
            </p>
            <p>
              I want to develop innovative products and take advantage of both
              the potential and what has been learned.
            </p>
            <p>
              I want to continue learning and continue cultivating my career.
            </p>
            <p>
              Be part of a team that in its values, there is no discrimination,
              and that promotes diversity and gender equality.
            </p>
            <p>
              I want to make software that is user-friendly in its experience
              and interface.
            </p>
            <p>
              I want my work to be a good experience, stimulating, energetic,
              collaborative, challenging and meaningful to me.
            </p>
          </div>
          <div className='w-full mb-8'>
            <h3 className='uppercase font-extrabold mb-4'>Why me?</h3>
            <p>I like to do my work with excellence.</p>
            <p>Because teamwork is essential for me.</p>
            <p>I always focus on positive feedback.</p>
            <p>I love promoting collective learning.</p>
            <p>Because I can be a Padawan as well as a Jedi Master.</p>
            <p>I love taking on new challenges.</p>
            <p>I have a lot of motivation.</p>
            <p>I never want to stop learning.</p>
            <p>I am a good partner and also a good leader.</p>
            <p>I&apos;ve been preparing for a long time.</p>
            <p>I am responsible with my work.</p>
            <p>Let&apos;s leave the rest for you to know me.</p>
          </div>
          <div className='w-full'>
            <h3 className='uppercase font-extrabold mb-4'>
              Certifications and Courses
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
              Inbound Marketing in HubSpot Academy, Digital Marketing iab Spain
              Google Actívate, Web Analytic in EOI Escuela de Organización
              Industria Google Actívate, E-Commerce EOI Escuela de Organización
              Industria Google Actívate, Search, Video, Mobile y Shopping Google
              Ads in Google Skillshop Certification, Analytics en Google
              Skillshop Certification.
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
