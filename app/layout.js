import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mesh UI",
  description: "Building Better Interfaces, Together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div className="min-h-screen  w-full bg-bgLight dark:bg-bgDark ">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
