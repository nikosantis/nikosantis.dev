export default function Main ({ children }) {
  return (
    <main>
      {children}
      <style jsx>
        {`
          main {
            width: 100vw;
            min-height: calc(100vh - (var(--ns-header) + var(--ns-footer)));
          }
        `}
      </style>
    </main>
  )
}
