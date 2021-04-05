import { useState, memo, useRef, ReactNode, useCallback } from 'react'
import { Transition } from 'react-transition-group'
import cs from 'classnames'

export type StatusTypes = 'entering' | 'entered' | 'exiting' | 'exited'

const duration = 350

const collapseStyles = {
  entering: 'collapsing',
  entered: 'collapse show',
  exiting: 'collapsing',
  exited: 'collapse'
}

const getTransitionClass = (status: StatusTypes) => {
  return collapseStyles[status] || 'collapse'
}

type Props = {
  isOpen: boolean
  navbar: boolean
  children: ReactNode
}

function Collapse({ isOpen, navbar, children }: Props) {
  const _nodeRef = useRef<HTMLDivElement | null>(null)
  const [heightSize, setHeightSize] = useState<{ height: number | undefined }>({
    height: undefined
  })

  const onEntering = useCallback(() => {
    if (_nodeRef.current) {
      setHeightSize({ height: _nodeRef.current?.scrollHeight })
    }
  }, [])

  const onEntered = useCallback(() => {
    setHeightSize({ height: undefined })
  }, [])

  const onExit = useCallback(() => {
    if (_nodeRef.current) {
      setHeightSize({ height: _nodeRef.current?.scrollHeight })
    }
  }, [])

  const onExiting = useCallback(() => {
    setHeightSize({ height: 0 })
  }, [])

  const onExited = useCallback(() => {
    setHeightSize({ height: undefined })
  }, [])

  const heightRef = _nodeRef.current && _nodeRef.current.scrollHeight

  return (
    <Transition
      in={isOpen}
      timeout={duration}
      onEntered={onEntered}
      onEntering={onEntering}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
      nodeRef={_nodeRef}
    >
      {(status: StatusTypes) => {
        const collapseClass = getTransitionClass(status)
        const classes = cs(
          collapseClass,
          {
            'navbar-collapse': navbar
          },
          { heightRef }
        )
        const style = heightSize.height === null ? undefined : heightSize

        return (
          <div style={style} className={classes} ref={_nodeRef}>
            {children}
            <style jsx>
              {`
                .navbar-collapse {
                  flex-basis: 100%;
                  flex-grow: 1;
                  align-items: center;
                  order: 3;
                  @media (min-width: 992px) {
                    display: flex !important;
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
