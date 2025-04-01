import { NextUIProvider } from '@nextui-org/react';
import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'Ilenia e Leonardo',
  description: 'Wedding Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it-IT">

      <body >
        <Header/>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}

