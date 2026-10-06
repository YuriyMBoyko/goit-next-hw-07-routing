import type { Metadata } from "next";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import 'modern-normalize/modern-normalize.css';
import css from "./Home.module.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoteHub",
  description: "NoteHub react.js+next.js application",
};

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
            <main className={css.main}>
              {children}
            </main>
            {modal}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
