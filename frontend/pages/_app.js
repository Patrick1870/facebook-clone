import 'tailwindcss/tailwind.css'
import '../styles/tailwind.custom.css'

import { ThemeProvider } from 'next-themes'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
