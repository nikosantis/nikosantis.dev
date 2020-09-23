import NativeLink from 'next/link'

function H1 ({ children, id }) {
  return (
    <h1 id={id}>
      {children}
      <style jsx>
        {`
          h1 {
            margin-top: 0;
            font-size: 2rem;
          }
        `}
      </style>
    </h1>
  )
}

function H2 ({ children, id }) {
  return (
    <h2 id={id}>
      {children}
      <style jsx>
        {`
          h2 {
            margin-top: 2rem;
            font-size: 1.875rem;
          }
        `}
      </style>
    </h2>
  )
}

function H3 ({ children, id }) {
  return (
    <h3 id={id}>
      {children}
      <style jsx>
        {`
          h3 {
            margin-top: 2rem;
            font-size: 1.5rem;
          }
        `}
      </style>
    </h3>
  )
}

function Ul ({ children }) {
  return (
    <ul>
      {children}
      <style jsx>
        {`
          ul {
            list-style: none;
            margin-bottom: 2rem;
          }
        `}
      </style>
    </ul>
  )
}

function Li ({ children }) {
  return (
    <li>
      {children}
      <style jsx>{`
        li {
          margin-bottom: 0.35rem;
          font-size: 1.125rem;
          font-weight: 300;
          :before {
            content: '-';
            display: inline-block;
            color: #6d6d6d;
            position: absolute;
            margin-left: -25px;
          }
        }
    `}
      </style>
    </li>
  )
}

function P ({ children }) {
  return (
    <p>
      {children}
      <style jsx>
        {`
          p {
            font-size: 1.125rem;
            font-weight: 300;
            line-height: 1.8;
            margin-bottom: 1.5rem;

            & :global(a) {
              color: var(--ns-blue-link);
              &:hover {
                color: #68b5fb;
              }
            }
          }
        `}
      </style>
    </p>
  )
}

function GenericLink (props) {
  if (props.href.startsWith('/') && !props.href.startsWith('/blog')) {
    return <InternalLink {...props} />
  }

  if (props.href.includes('@') || props.href.startsWith('#')) {
    return <AnchorLink {...props} />
  }

  return <ExternalLink {...props} />
}

function InternalLink ({ href, children, error = false }) {
  return (
    <NativeLink href={href}>
      <a>
        {children}

        <style jsx>
          {`
            a {
              text-decoration: ${error ? 'underline' : 'none'};
              font-size: inherit;
              overflow-wrap: break-word;
              word-wrap: break-word;
              word-break: break-all;
              hyphens: auto;
            }
            a:hover {
              text-decoration: none;
            }
          `}
        </style>
      </a>
    </NativeLink>
  )
}

function AnchorLink ({ href, onClick, children }) {
  return (
    <a href={href} onClick={onClick}>
      {children}

      <style jsx>
        {`
          a {
            color: inherit;
            font-size: inherit;
            border-bottom: 1px dotted;
            overflow-wrap: break-word;
            word-wrap: break-word;
            word-break: break-all;
            hyphens: auto;
          }
          a:hover {
            color: gray;
            text-decoration: none;
          }
        `}
      </style>
    </a>
  )
}

function ExternalLink ({ href, children }) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {children}

      <style jsx>
        {`
          a {
            text-decoration: none;
            font-size: inherit;
            overflow-wrap: break-word;
            word-wrap: break-word;
            word-break: break-all;
            hyphens: auto;
          }
        `}
      </style>
    </a>
  )
}

function Code ({ children, syntax }) {
  return (
    <pre className={syntax ? ` ${syntax}` : ''}>
      <code>{children}</code>
      <style jsx>
        {`
          pre {
            background: var(--ns-code);
            color: #f8f8f2;
            white-space: pre;
            overflow: auto;
            padding: 1.5rem;
            margin: 40px 0;
            border-radius: 3px;
            -webkit-overflow-scrolling: touch;
          }
          code {
            font-size: 14px;
            line-height: 20px;
          }
        `}
      </style>
      <style global jsx>
        {`
          .token.comment,
          .token.prolog,
          .token.doctype,
          .token.cdata {
            color: #999;
          }
          .token.punctuation {
            color: #c5c8c6;
          }
          .namespace {
            opacity: 0.7;
          }
          .token.property,
          .token.keyword,
          .token.tag {
            color: #96cbfe;
          }
          .token.class-name {
            color: #ffffb6;
          }
          .token.boolean,
          .token.constant {
            color: #99cc99;
          }
          .token.symbol,
          .token.deleted {
            color: #f92672;
          }
          .token.number {
            color: #ff73fd;
          }
          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #a8ff60;
          }
          .token.variable {
            color: #c6c5fe;
          }
          .token.operator {
            color: #ededed;
          }
          .token.entity {
            color: #ffffb6;
            cursor: help;
          }
          .token.url {
            color: #96cbfe;
          }
          .language-css .token.string,
          .style .token.string {
            color: #87c38a;
          }
          .token.atrule,
          .token.attr-value {
            color: #f9ee98;
          }
          .token.function {
            color: #dad085;
          }
          .token.regex {
            color: #e9c062;
          }
          .token.important {
            color: #fd971f;
          }
          .token.important,
          .token.bold {
            font-weight: bold;
          }
          .token.italic {
            font-style: italic;
          }
        `}
      </style>
    </pre>
  )
}

function Blockquote ({ children }) {
  return (
    <blockquote>
      {children}
      <style jsx>
        {`
          blockquote {
            font-style: italic;
            margin: 0;
            padding-left: 1rem;
            border-left: 3px solid var(--ns-light-gray);
            transition: border-color .1s ease-in-out ;
          }
        `}
      </style>
    </blockquote>
  )
}

function Hr () {
  return (
    <div>
      <hr />
      <style jsx>
        {`
          hr {
            margin: 2rem 0;
            border: none;
            border-bottom: 1px solid #eee;
          }
        `}
      </style>
    </div>
  )
}

export const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  ul: Ul,
  li: Li,
  code: Code,
  p: P,
  a: GenericLink,
  blockquote: Blockquote,
  hr: Hr
}
