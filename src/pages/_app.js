import "@/styles/globals.css";
import '../styles/Header.css'
import '../styles/Profile.css'
import "../styles/Card.css"
// import '../styles/Collections.css'
import { SessionProvider } from "next-auth/react"


export default function App({ Component, pageProps: { session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>

  );
}
