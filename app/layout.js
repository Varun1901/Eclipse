import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/header.jsx";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";



const inter = Inter({
  subsets: ["latin"]});

export const metadata = {
  title: "Eclipse - An AI Career Coach",
  description: "Predict your career with this web application",
};

export default function RootLayout({ children }) {
  return (
    
    <ClerkProvider appearance={{
      baseTheme:dark,
    }}>
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {/* header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          {/* footer */}
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
            <p>Made with ❤️ by Varun S</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
    </ClerkProvider>
  );
}