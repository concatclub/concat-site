import SiteNavigation from './SiteNavigation'
import Link from 'next/link'

const PageFooter = () => (
  <footer>
    <SiteNavigation />
    <br />
    <Link href="/land-acknowledgement" />

    <style jsx>{`
      footer { margin-top: 4rem; }
    `}</style>
  </footer>
)

export default PageFooter;
