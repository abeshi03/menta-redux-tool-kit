import type { AppProps } from 'next/app'
import {Provider} from 'react-redux'
import {store} from "../store";
import {AuthInfo} from "../components/AuthInfo";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <AuthInfo />
      <Component {...pageProps} />
    </Provider>
  )

}

export default MyApp
