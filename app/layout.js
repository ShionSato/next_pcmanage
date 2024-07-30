import { Inter } from "next/font/google";
import { useContext } from "react"; 
import Detail from "./components/Detail/detail";
import { ContextProvider } from "./contexts/MyContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PC貸出管理システム",
  description: "pc",
};

export default function RootLayout({ children }) {

  return (
    <ContextProvider>
    <html lang="ja">
      <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />

        <link href="https://use.fontawesome.com/releases/v6.5.2/css/all.css" rel="stylesheet" />

        <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.2.1/font-awesome-animation.min.css"
          type="text/css" media="all" />
      <body className={inter.className}>{children}</body>
    </html>
    </ContextProvider>
  );
}
