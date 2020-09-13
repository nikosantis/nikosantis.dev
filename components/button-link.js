import Link from 'next/link'

export default function ButtonLink ({ href, children }) {
  return (
    <Link href={href}>
      <a>
        {children}
        <style jsx>
          {`
            a {
              position: relative;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              text-decoration: none;
              transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;
              outline: none;
              padding: 0 3.5rem;
              height: 2.81rem;
              line-height: 2.8rem;
              border-radius: 7px;
              background: var(--ns-button-link);
              color: var(--ns-bg);
              border: 1px solid var(--ns-button-link);
              text-align: center;
              font-size: 0.875rem;

              &:hover {
                color: var(--ns-fg);
                background: var(--ns-bg);
                border-color: var(--ns-button-link);
              }
            }
          `}
        </style>
      </a>
    </Link>
  )
}
