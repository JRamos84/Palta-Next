import type { AppProps } from 'next/app'
import Layout from '@components/Layout/Layout'
import '../global.css'
import 'semantic-ui-css/semantic.min.css'
import CounterContextProvider from 'context/CounterContextProvider'


export default function MyApp({ Component, pageProps }: AppProps) {

    return (
        <CounterContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </CounterContextProvider>
        )


}