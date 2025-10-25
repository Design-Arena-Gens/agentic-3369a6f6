export const metadata = {
  title: 'Agentic App',
  description: 'Deployed to Vercel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer style={{
          position: 'fixed',
          bottom: 8,
          left: 0,
          right: 0,
          textAlign: 'center',
          color: '#666',
          fontSize: 12
        }}>
          agentic-3369a6f6
        </footer>
      </body>
    </html>
  );
}
