export default function Code ({ children }) {
  return (
    <pre>
      <code>
        {children}
      </code>

      <style jsx>
        {`
          pre {
            overflow-x: auto;
            background: var(--ns-light-code);
            border-radius: 5px;
            line-height: 1.8;
            padding: 1rem;
            font-size: 0.875rem;
          }
        `}
      </style>
    </pre>
  )
}
