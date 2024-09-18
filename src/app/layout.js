import Topo from "@/components/Topo";
import Rodape from "@/components/Rodape";

import "./globals.css";

export const metadata = {
  title: "Gelateria",
  description: "Venha conhecer nossos sabores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
