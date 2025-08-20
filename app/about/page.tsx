import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	alternates: {
		canonical: "/about",
	},
	title: "Sobre Nikolas Santis | Desarrollador Fullstack",
	description:
		"Soy Nikolas Santis, un desarrollador fullstack con más de 14 años de experiencia, especializado en React, Next.js, y Node.js. Descubre su enfoque en el desarrollo de soluciones web escalables, la optimización de la experiencia de usuario y su vida como padre trabajando remotamente desde Villa Alemana, Chile.",
};

export default function Page() {
	return (
		<main>
			<h1 className="mb-12 text-2xl font-medium tracking-tighter">
				¡Hola! Soy <strong>Nikolas Santis</strong> 👋
			</h1>
			<div className="prose prose-neutral dark:prose-invert">
				<p>
					Soy un desarrollador de software fullstack con más de 14 años de
					experiencia. Mi práctica abarca desde el frontend, donde me
					especializo en <strong>React</strong> y <strong>Next.js</strong>,
					hasta el backend con tecnologías como <strong>Node.js</strong>,{" "}
					<strong>Express</strong>, y <strong>NestJS</strong>, junto con el uso
					de <strong>frameworks ORM</strong> para la gestión eficiente de bases
					de datos.
				</p>
				<p>
					Trabajo desde{" "}
					<Link
						href="https://maps.app.goo.gl/k9FnEM5in6pUKoze9"
						target="_blank"
						title="Villa Alemana, Chile"
					>
						Villa Alemana, Chile 🇨🇱
					</Link>{" "}
					y he tenido la suerte de colaborar con equipos alrededor del mundo de
					manera remota. Esto me ha permitido desarrollar una gran
					adaptabilidad, gestionando tanto proyectos como mi tiempo con
					eficacia.
				</p>
				<p>
					He trabajado en una amplia gama de proyectos, desde la transformación
					digital de empresas hasta el lanzamiento de{" "}
					<strong>MVPs innovadores</strong> y el desarrollo de aplicaciones a
					gran escala. Un enfoque clave de mi trabajo es la{" "}
					<strong>optimización de la performance</strong> y la mejora de la
					experiencia de usuario, donde implemento los{" "}
					<strong>Core Web Vitals</strong> como elementos esenciales para una UX
					de alto nivel. La <strong>calidad del software</strong> y la
					experiencia intuitiva del usuario final son pilares fundamentales en
					mi desarrollo, y siempre aplico prácticas rigurosas de testing y{" "}
					<strong>metodologías ágiles</strong> para asegurar productos sólidos y
					eficientes.
				</p>
				<p>
					Mi compromiso con la <strong>innovación</strong> y la{" "}
					<strong>colaboración</strong> me ha llevado a crear soluciones
					tecnológicas que marcan una diferencia, y mi enfoque en el{" "}
					<strong>aprendizaje continuo</strong> me ha permitido mantenerme
					actualizado con las últimas tendencias del sector.
				</p>
				<h2>Mi Familia y el Equilibrio</h2>
				<p>
					En lo personal, soy <strong>esposo</strong> y <strong>padre</strong>{" "}
					de un increíble niño de un año. Criarlo ha sido una de las mayores
					bendiciones y desafíos en mi vida. El equilibrio entre ser padre,
					colaborar en proyectos remotos y continuar creciendo profesionalmente
					ha requerido mucho esfuerzo, pero me siento increíblemente agradecido
					de poder estar presente en cada momento importante. Mi esposa ha sido
					un apoyo fundamental en todo este proceso, y juntos hemos construido
					una vida que valoro profundamente.
				</p>
				<h2>Filosofía Profesional</h2>
				<p>
					Con más de 14 años en el desarrollo de software, he aprendido que el
					éxito no solo depende de las habilidades técnicas, sino también de una{" "}
					<strong>comunicación clara</strong> y una{" "}
					<strong>colaboración efectiva</strong> con los equipos. Me enorgullece
					haber liderado proyectos que han tenido un impacto positivo, como el
					desarrollo de aplicaciones de alto rendimiento, y haber ayudado a
					startups a lanzar productos exitosos al mercado.
				</p>
				<p>
					Una lección importante que aprendí a lo largo de mi carrera es la
					importancia del{" "}
					<strong>
						equilibrio entre la eficiencia y la atención al detalle
					</strong>
					. Siempre procuro mantener una mentalidad de crecimiento, enfocándome
					en crear productos que no solo funcionen bien, sino que también
					aporten valor real a los usuarios.
				</p>

				<h2>Reflexión sobre el Burnout</h2>

				<p>
					Hace aproximadamente dos años, pasé por un episodio de burnout. Fue un
					momento difícil en mi carrera, que me enseñó la importancia del
					autocuidado y de reconocer los límites. Desde entonces, he aprendido a
					establecer un equilibrio más saludable entre el trabajo y la vida
					personal, lo que me ha permitido ser más productivo y estar más
					presente tanto en mis proyectos como con mi familia.
				</p>

				<h2>Más Allá del Código</h2>
				<p>
					Además de ser un apasionado por la tecnología, mi vida personal juega
					un papel fundamental en mi día a día. La flexibilidad de trabajar
					remotamente me ha permitido encontrar un equilibrio entre mis
					responsabilidades como padre, esposo, y profesional, algo que valoro
					profundamente. Cuando no estoy programando, disfruto pasar tiempo con
					mi familia, quienes son mi principal fuente de inspiración.
				</p>
				<p>
					También disfruto sumergiéndome en videojuegos, libros y series, lo que
					me ayuda a mantener una perspectiva balanceada entre lo profesional y
					lo personal. Mi familia y estos momentos me permiten recargar energías
					y seguir inspirado para enfrentar nuevos desafíos.
				</p>

				<p>
					Si estás buscando a alguien con experiencia para crear o escalar tu
					producto web, me encantaría saber más sobre tu proyecto. No dudes en{" "}
					<Link
						href="https://www.linkedin.com/in/nikosantis/"
						target="_blank"
						title="Mi perfil en LinkedIn"
					>
						contactarme
					</Link>
					.
				</p>
			</div>
		</main>
	);
}
