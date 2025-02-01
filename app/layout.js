import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import ThemeProvider from "@/components/Theme/ThemeProvider";
import Settings from "@/components/Settings/Settings";
import TopBar from "@/components/shared/TopBar";
import { AuthProvider } from "./context/AuthContext";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const openSans = Open_Sans({
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="select-none">
        <AuthProvider>
          <ThemeProvider>
            <TopBar />
            <Navbar />
            <Settings />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
