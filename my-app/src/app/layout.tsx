export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/battle">battle</a>
          </li>
          <li>
            <a href="/victory">victory</a>
          </li>
          <li>
            <a href="/defeat">defeat</a>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
