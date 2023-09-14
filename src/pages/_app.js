import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Khi.Provider><Component {...pageProps} /></Khi.Provider>
}
