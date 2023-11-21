import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartContextProvider } from "./context";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Online Store",
  description: "Online Shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartContextProvider>
          <Header />
          {children}
          <Footer />
        </CartContextProvider>
      </body>
    </html>
  );
}
