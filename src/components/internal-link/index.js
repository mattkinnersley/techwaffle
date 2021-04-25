import Link from "next/link";

const InternalLink = ({ href, children }) => (
  <Link href={href}>
    <a className="underline" target="_blank" rel="noreferrer">
      {children}
    </a>
  </Link>
);

export default InternalLink;
