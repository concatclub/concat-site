import Image from 'next/image'
import SiteNavigation from './SiteNavigation'

const PageHeader = () => (
  <header>
    <Image src="/logo-long.svg" width={250} height={100} alt="concat.club logo" />
    
    <SiteNavigation />

    <style jsx>{`
      header {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 5rem;
      }

    `}</style>
  </header>
);

export default PageHeader;
