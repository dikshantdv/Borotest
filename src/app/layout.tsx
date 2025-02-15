import ManagedModal from '@components/common/modal/managed-modal';
import { ManagedUIContext } from '@contexts/ui.context';
import { Inter, Manrope } from 'next/font/google';

import ManagedDrawer from '@components/common/drawer/managed-drawer';
import { Metadata } from 'next';
import ToasterProvider from 'src/app/provider/toaster-provider';
import Providers from 'src/app/provider/provider';

// external
import 'react-toastify/dist/ReactToastify.css';

// base css file
import '@assets/css/scrollbar.css';
import '@assets/css/swiper-carousel.css';
import '@assets/css/custom-plugins.css';
import './globals.css';
import '@assets/css/rc-drawer.css';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: {
    template: 'BoroBazar | %s',
    default: 'BoroBazar',
  },
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Providers>
          <ManagedUIContext>
            {children}
            <ManagedModal lang={lang} />
            <ManagedDrawer lang={lang} />
            <ToasterProvider />
          </ManagedUIContext>
        </Providers>
      </body>
    </html>
  );
}
