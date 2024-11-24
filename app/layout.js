import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Create from "@/components/Create";
import Menu from "@/components/Menu";
import AppLayout from "@/components/AppLayout";

export const metadata = {
  title: "Debatables | Free speech while fostering civil discussions",
  description: "Free speech while fostering civil discussions",
};


export default function RootLayout({ children }) {
  console.log('Provider: ', AppProvider)
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {process.env.NODE_ENV === "development" && (
          <script
            src="https://unpkg.com/react-scan/dist/auto.global.js"
            async
          />
        )}
      </head>
      <body suppressHydrationWarning={true}>
        <main className='main'>
          <AppProvider>
            <AppLayout>
              <Header />
              <Menu />
              {children}
              <Create />
              <Footer />
            </AppLayout>
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
