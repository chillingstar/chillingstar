import type { Metadata } from "next";
import Providers from './providers';
import "./globals.css";
import { GitHubAvatar } from "./page";

export const metadata: Metadata = {
  title: "Luckless",
  description: "Luckless, aka ChStar!",
};

/**
 * RootLayout component that wraps the application with necessary providers and sets up the HTML structure.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The rendered RootLayout component.
 */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={GitHubAvatar} type="image/x-icon" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}