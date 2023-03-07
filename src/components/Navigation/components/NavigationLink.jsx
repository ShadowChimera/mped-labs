import { Link, NavLink } from 'react-router-dom'

const GENERAL_STYLE = `block px-4 py-2 rounded-md`
const HOVER_STYLE = `hover:bg-sky-400 hover:bg-opacity-10`
const PENDING_STYLE = `bg-sky-500 bg-opacity-10`
const ACTIVE_STYLE = `bg-sky-500 bg-opacity-10 text-sky-700 font-medium`

function NavigationLink({ to, active = false, children }) {
  let className = `${GENERAL_STYLE} ${
    active ? ACTIVE_STYLE : HOVER_STYLE
  }`

  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isActive
          ? `${GENERAL_STYLE} ${ACTIVE_STYLE}`
          : isPending
          ? `${GENERAL_STYLE} ${PENDING_STYLE}`
          : `${GENERAL_STYLE} ${HOVER_STYLE}`
      }
    >
      {children}
    </NavLink>
  )
}

export default NavigationLink
