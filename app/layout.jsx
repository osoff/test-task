import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-standart text-[#071435]`}>
        <Nav />
        <main className=" max-w-[1680px] mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
