import { FiMenu } from 'react-icons/fi'
import cx from 'classnames'

export default function NavbarToggle ({ isOpen, handleClick }) {
  return (
    <div className={cx('navbar-toggle', {
      active: isOpen
    })}
    >
      <button onClick={handleClick}>
        <span>
          <FiMenu />
        </span>
      </button>

      <style jsx>
        {`
          .navbar-toggle {
            order: 2;
            margin-left: 5px;
            @media (min-width: 992px) {
              display: none;
            }
          }
          .active {
            & button {
              background-color: var(--ns-light);
              border-color: var(--ns-light);
            }
          }
          button {
            width: 50px;
            height: 50px;
            background-color: transparent;
            color: var(--ns-navbar-link);
            border: 1px solid var(--ns-light);
            cursor: pointer;
            border-radius: 8px;
          }
          span {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  )
}
