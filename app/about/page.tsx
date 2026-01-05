import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	alternates: { canonical: "/about" },
	title:
		"Sobre Nikolas Santis | Senior Software Engineer (React, Next.js, Node.js)",
	description:
		"Soy Nikolas Santis, Senior Software Engineer con más de 15 años de experiencia. Especializado en React, Next.js y TypeScript, con backend en Node.js (Express, NestJS, Hono). Enfocado en performance, escalabilidad, calidad del software y Core Web Vitals. Trabajo remoto desde Chile.",
};

export default function Page() {
	return (
		<main>
			<h1 className="mb-12 text-2xl font-medium tracking-tighter">
				¡Hola! Soy <strong>Nikolas Santis</strong> 👋
			</h1>

			<div className="prose prose-neutral dark:prose-invert">
				<p>
					Soy <strong>Senior Software Engineer</strong> con más de{" "}
					<strong>15 años</strong> de experiencia construyendo sistemas web de
					alto impacto, desde MVPs hasta aplicaciones de gran escala.
				</p>

				<p>
					Mi especialización está en <strong>frontend moderno</strong> con{" "}
					<strong>React</strong>, <strong>Next.js</strong> y{" "}
					<strong>TypeScript</strong>, junto con un sólido background en{" "}
					<strong>backend con Node.js</strong> (Express, NestJS, Hono). También
					trabajo de cerca con la capa de datos, diseñando modelos y cuidando
					performance de consultas cuando el producto lo requiere.
				</p>

				<p>
					Trabajo de forma remota desde{" "}
					<Link
						href="https://maps.app.goo.gl/k9FnEM5in6pUKoze9"
						target="_blank"
						title="Villa Alemana, Chile"
					>
						Villa Alemana, Chile 🇨🇱
					</Link>
					, colaborando con equipos en distintos contextos técnicos y de
					negocio. Me siento cómodo operando en ambientes de alto tráfico, con
					foco en estándares de calidad, comunicación clara y entregas
					consistentes.
				</p>

				<h2>En qué aporto</h2>
				<ul>
					<li>
						<strong>Performance y UX</strong>: optimización de tiempos de carga
						y responsividad, con énfasis en <strong>Core Web Vitals</strong>.
					</li>
					<li>
						<strong>Arquitectura frontend</strong>: diseño y evolución de
						componentes y flujos complejos, cuidando mantenibilidad y
						escalabilidad.
					</li>
					<li>
						<strong>Calidad y confiabilidad</strong>: testing, buenas prácticas
						y automatización para reducir regresiones y mejorar la velocidad de
						iteración.
					</li>
					<li>
						<strong>Colaboración técnica</strong>: trabajo cercano con producto,
						diseño y backend para alinear decisiones técnicas con impacto real.
					</li>
				</ul>

				<h2>Otros ecosistemas</h2>
				<p>
					A lo largo de mi carrera también he colaborado con otros stacks
					(Java/Spring Boot, Python, Go y .NET). No los presento como mi foco
					principal, pero sí como experiencia que me permite{" "}
					<strong>adaptarme rápidamente</strong> cuando el proyecto lo requiere.
				</p>

				<h2>Más allá del código</h2>
				<p>
					Fuera del trabajo, mi familia es mi principal fuente de equilibrio.
					También disfruto videojuegos, libros y series, lo que me ayuda a
					mantener energía y perspectiva para enfrentar nuevos desafíos.
				</p>

				<p>
					Si estás buscando a alguien para <strong>crear o escalar</strong> un
					producto web con foco en performance y calidad, me encantaría conocer
					más sobre tu proyecto. Puedes{" "}
					<Link
						href="https://www.linkedin.com/in/nikosantis/"
						target="_blank"
						title="Mi perfil en LinkedIn"
					>
						contactarme por LinkedIn
					</Link>
					.
				</p>
			</div>
		</main>
	);
}
