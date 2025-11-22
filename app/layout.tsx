export const metadata = {
  title: 'Zertteu MATH Lab',
  description: 'Қазақша виртуалды зертхана',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kk">
      <body>{children}</body>
    </html>
  );
}
