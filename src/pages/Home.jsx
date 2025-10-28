import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Bienvenido a CineApp</h1>
        <p>Descubre las películas y series más populares</p>
      </div>
      <Outlet />
    </div>)
}
