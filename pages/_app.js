import PageWrapper from 'components/PageWrapper/index'
import PageHeader from 'components/PageHeader'

function MyApp({ Component, pageProps }) {
  return <PageWrapper>
      <PageHeader />
      <Component {...pageProps} />
    </PageWrapper>
    
}

export default MyApp
