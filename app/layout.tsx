import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";
import { Metadata } from "next";
import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  readonly children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "Redux-app",
    template: "%s | Redux-app",
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en" className={inter.className}>
        <body>
          <section className={styles.container}>
            <Nav />

            <header className={styles.header}>
              <Image
                src="/logo.svg"
                className={styles.logo}
                width="300"
                height="300"
                alt="logo"
              />
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
              <span>Learn </span>
              <a
                className={styles.link}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              <span>, </span>
              <a
                className={styles.link}
                href="https://redux.js.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>
              <span>, </span>
              <a
                className={styles.link}
                href="https://redux-toolkit.js.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux Toolkit
              </a>
              <span>, </span>
              <a
                className={styles.link}
                href="https://react-redux.js.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Redux
              </a>
              ,<span> and </span>
              <a
                className={styles.link}
                href="https://reselect.js.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reselect
              </a>
            </footer>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
