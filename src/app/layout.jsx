import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Memorability",
  description: "A site where you share memories of your loved ones",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-blue-50 ">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
