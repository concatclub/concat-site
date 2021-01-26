import Link from "next/link";

const SiteNavigation = () => (
  <nav>
    <Link href="/code-of-conduct">CoC</Link>
    <Link href="/about">About</Link>
    <style jsx>{`
      nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex: 1 0 auto;
        justify-content: end;
      }
      nav > :global(a:not(:last-child)) {
        margin-right: 1rem;
      }
    `}</style>
  </nav>
);

export default SiteNavigation