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

function Code ({ children, syntax }) {
  return (
    <pre className={syntax ? ` ${syntax}` : ''}>
      <code>{children}</code>
      <style jsx>
        {`
          pre {
            background: #1d1f21;
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
  code: Code,
  p: P,
  hr: Hr
}
