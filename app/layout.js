import "./globals.css";

export const metadata = {
  title: "Uni Cards: Next-gen Credit Cards &amp; Rewards",
  description:
    "Elevate your credit experience with the next-gen 🌊NX Wave Credit Card | Uni Paychek: receive a salary before your salary | Uni PowerUp: Earn consistent 9% returns on your money",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
