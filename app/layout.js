import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartContextProvider } from "./context";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "Online Store",
  description: "Online Shopping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <CartContextProvider>
          <Header />
          {children}
          <Footer />
        </CartContextProvider>
      </body>
    </html>
  );
}
