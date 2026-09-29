import type {Metadata} from 'next';
import { Inter, Barlow_Condensed } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Powerplex Fitness | Gym in Seawoods, Nerul, Navi Mumbai',
  description: 'Powerplex Fitness in Seawoods West, Navi Mumbai. Premium strength training, cardio, personal training, and functional fitness. Mon–Sat 6 AM–11 PM, Sun 9 AM–2 PM.',
  openGraph: {
    title: 'Powerplex Fitness | Gym in Seawoods, Nerul, Navi Mumbai',
    description: 'Transform your body at Powerplex Fitness. Premium gym equipment, certified trainers, and motivational atmosphere in Seawoods West.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Powerplex Fitness | Gym in Seawoods, Nerul, Navi Mumbai',
    description: 'Transform your body at Powerplex Fitness. 4.6★ Rated on Google (105+ reviews). Mon–Sat 6 AM–11 PM, Sun 9 AM–2 PM.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable} dark scroll-smooth`}>
      <body className="bg-[#0b0c10] text-[#f3f4f6] antialiased selection:bg-[#FFE500] selection:text-black font-sans min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
