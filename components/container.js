import cx from 'classnames'

export default function Container ({ children, className }) {
  const classNames = cx('container', className)
  return (
    <div className={classNames}>
      {children}

      <style jsx>
        {`
          .container {
            width: 100%;
            padding-right: 1rem;
            padding-left: 1rem;
            margin-right: auto;
            margin-left: auto;

            @media (min-width: 576px) {
              max-width: 540px;
            }

            @media (min-width: 768px) {
              max-width: 720px;
            }

            @media (min-width: 992px) {
              max-width: 880px;
            }
          }
        `}
      </style>
    </div>
  )
}
