import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ReduxProvider } from "@/redux/providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});
export const metadata: Metadata = {
  title: "salon de la relation client WIDIC",
  description: "salon de la relation client WIDIC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <ReduxProvider>
          <AntdRegistry>
            <Toaster />
            {children}
          </AntdRegistry>
        </ReduxProvider>


      </body>
    </html>
  );
}
