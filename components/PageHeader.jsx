import Link from "next/link";

const PageHeader = () => (
  <header>
    Logo
    <nav>
      <Link href="/code-of-conduct">CoC</Link>
      <Link href="/about">About</Link>
    </nav>
    <style jsx>{`
      header, nav {
        display: flex;
        flex-direction: row;
      }
      nav {
        flex: 1 0 auto;
        justify-content: end;
      }
      nav > :global(a:not(:last-child)) {
        margin-right: 1rem;
      }
      
    `}</style>
  </header>
);

export default PageHeader;
