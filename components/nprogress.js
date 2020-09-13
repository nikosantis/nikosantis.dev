import NProgress from 'nprogress'
import Router from 'next/router'

let timeout

function start () {
  timeout = setTimeout(NProgress.start, 100)
}

function done () {
  clearTimeout(timeout)
  NProgress.done()
}

Router.events.on('routeChangeStart', start)
Router.events.on('routeChangeComplete', done)
Router.events.on('routeChangeError', done)

export default function Progress () {
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
