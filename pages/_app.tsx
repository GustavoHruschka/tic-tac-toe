import type { AppProps /*, AppContext */ } from 'next/app'
import './styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp