'use client'
import React, { useState, useEffect } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader/Loader"; 
import { Plus_Jakarta_Sans } from "next/font/google";
const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 


    return () => clearTimeout(timer);
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      <body className={plus_Jakarta_Sans.className} suppressHydrationWarning={true}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
