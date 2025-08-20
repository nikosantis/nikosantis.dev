import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<main>
			<h1 className="mb-4 text-6xl font-bold">404</h1>
			<h2 className="mb-8 text-2xl">Página no encontrada</h2>
			<p className="mb-8 max-w-md text-xl">
				Lo siento, la página que estás buscando no existe o ha sido movida.
			</p>
			<Link
				href="/"
				className="inline-flex items-center rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-stone-900 dark:bg-white dark:text-black dark:hover:bg-gray-200"
			>
				<HomeIcon className="mr-2 size-5" />
				Volver al inicio
			</Link>
		</main>
	);
}
