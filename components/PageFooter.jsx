import SiteNavigation from './SiteNavigation'
import Link from 'next/link'

const PageFooter = () => (
  <footer>
    <SiteNavigation />
    <br />
    <Link href="/land-acknowledgement">Land Acknowledgement</Link>

    <style jsx>{`
      footer { margin-top: 4rem; text-align: right; }
    `}</style>
  </footer>
)

export default PageFooter;
