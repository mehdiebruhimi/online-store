import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`antialiased`}
      >
        <header>

        </header>
        
        <main className="mx-24">
          {children}
        </main>

        <footer>

        </footer>
      </body>
    </html>
  );
}
