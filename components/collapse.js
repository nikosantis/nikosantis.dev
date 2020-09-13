import { useState, memo } from 'react'
import { Transition } from 'react-transition-group'
import cx from 'classnames'

const duration = 350

const collapseStyles = {
  entering: 'collapsing',
  entered: 'collapse show',
  exiting: 'collapsing',
  exited: 'collapse'
}

function getTransitionClass (status) {
  return collapseStyles[status] || 'collapse'
}

function getHeight (node) {
  return node.scrollHeight
}

function Collapse ({ isOpen, navbar, children }) {
  const [height, setHeight] = useState(null)

  function onEntering (node) {
    setHeight(getHeight(node))
  }

  function onEntered (node) {
    setHeight(getHeight(node))
  }

  function onExit (node) {
    setHeight(getHeight(node))
  }

  function onExiting () {
    setHeight(0)
  }

  function onExited () {
    setHeight(null)
  }

  return (
    <Transition
      in={isOpen}
      timeout={duration}
      onEntering={onEntering}
      onEntered={onEntered}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
    >
      {status => {
        const collapseClass = getTransitionClass(status)
        const classes = cx(collapseClass, navbar && 'navbar-collapse')

        return (
          <div
            style={{ height: height === null ? null : height }}
            className={classes}
          >
            {children}
            <style jsx>
              {`
                .navbar-collapse {
                  flex-basis: 100%;
                  flex-grow: 1;
                  align-items: center;
                  order: 3;
                  @media (min-width: 992px) {
                    display: flex!important;
                    flex-basis: auto;
                    order: 1;
                  }
                }
                .collapse:not(.show) {
                  display: none;
                }

                .collapsing {
                  height: 0;
                  overflow: hidden;
                  transition: height 350ms ease;
                }
              `}
            </style>
          </div>
        )
      }}
    </Transition>
  )
}

export default memo(Collapse)
