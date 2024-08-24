import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Checkout Best food Places To Eat | NP-Foods</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body>  
        <div className="min-h-screen bg-chalk-background">
          <>
            {/* <Navbar /> */}
            {children}
          </>
        </div>
      </body>
    </html>
  );
}
