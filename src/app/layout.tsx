import type { Metadata } from 'next';
import { Lilita_One } from 'next/font/google';
import './globals.css';
import Toast from '../components/Toast/Toast';
import Footer from '../components/layout/Footer';

// Import Lilita One instead of Poppins
const lilitaOne = Lilita_One({
  variable: '--font-lilita-one',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'MakEnd',
  description: 'My Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/png' href='/logo.png' />
      </head>
      <body
        className={`${lilitaOne.variable} bg-darkmode text-white antialiased`}
      >
        <Toast />
        {children}
        <Footer />
      </body>
    </html>
  );
}
