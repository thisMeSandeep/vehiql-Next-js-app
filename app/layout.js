import { Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import Header from "../components/Header.jsx";
import { Toaster } from "../components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI car marketplace",
  description: "Find your Dream Car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />

          <main className="min-h-screen">{children}</main>

          {/* toast */}
          <Toaster richColors />

          <footer className="bg-blue-50 py-12 ">
            <div className="container mx-auto px-3 text-center text-gray-600">
              <p>Made with 💗 by Sandeep Singh</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
