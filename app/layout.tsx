import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Header from '@/components/shared/header'
import './globals.css'

const nunitoFont = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Next Pizza | Main',
	description: 'Next Pizza ',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${nunitoFont.variable} antialiased`}>
				<main className="min-h-screen">
					<Header />
					{children}
				</main>
			</body>
		</html>
	)
}
