import Link from "next/link";

export default function NotFound() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
			<h1 className="text-4xl font-bold">404 - Nie znaleziono strony</h1>
			<p className="mt-4">Nie mogliśmy znaleźć strony, której szukasz.</p>
			<Link href="/" className="mt-6 underline">
				Wróć na stronę główną
			</Link>
		</main>
	);
}
