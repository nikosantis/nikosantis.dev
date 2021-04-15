import Router from 'next/router'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function ProgressLoading() {
  return (
    <style global jsx>
      {`
        #nprogress {
          pointer-events: none;
        }
        #nprogress .bar {
          background: var(--ns-fg);
          position: fixed;
          z-index: 2000;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
        }
        #nprogress .peg {
          box-shadow: 0 0 10px var(--ns-fg), 0 0 5px var(--ns-fg);
        }
      `}
    </style>
  )
}
