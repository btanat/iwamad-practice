import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'
import logo from '../assets/logo.svg'

type HeaderProps = {
  name: string
  role: string
}

function Header({ name, role }: HeaderProps) {
  const { likes } = useLikes()

  return (
    <header className="site-header">
      <div className="brand">
        <img src={logo} alt="" width={32} height={32} />
        <div>
          <h1>{name}</h1>
          <p>{role}</p>
        </div>
      </div>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <span>♥ {likes}</span>
      </nav>
    </header>
  )
}

export default Header