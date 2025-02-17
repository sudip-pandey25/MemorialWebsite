import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import Provider from "./components/Provider.jsx";

export const metadata = {
  title: "Memorability",
  description: "A site where you share memories of your loved ones",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body>
          <Navbar />
          <main className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-blue-50  ">
            <div className="min-h-[100vh]">{children}</div>
          </main>
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
