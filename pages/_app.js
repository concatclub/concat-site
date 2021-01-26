import PageWrapper from 'components/PageWrapper/index'
import PageHeader from 'components/PageHeader'
import PageFooter from 'components/PageFooter'

function MyApp({ Component, pageProps }) {
  return <PageWrapper>
      <PageHeader />
      <Component {...pageProps} />
      <PageFooter />
    </PageWrapper>
    
}

export default MyApp
