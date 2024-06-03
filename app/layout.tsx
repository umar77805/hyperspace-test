import Background from "@/components/background";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center items-center min-h-screen box-border bg-background text-text">
        <Background />
        {children}
      </body>
    </html>
  );
}
