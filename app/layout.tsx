import "./global.sass";

import { Kanit } from "next/font/google";

const font = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "400", "600"],
});

export const metadata = {
  title: "Forza Horizon 5 Cars",
  description:
    "View all Forza Horizon 5 cars, including DLC cars and cars from the Forza Horizon 5 Car Pass.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
