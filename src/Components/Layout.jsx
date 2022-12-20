import { NavLink, Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            <header>
            <nav>
                <NavLink to={'/'}>
                    Home
                </NavLink>
                <NavLink to={'/projects'}>
                    Projects
                </NavLink>
                <NavLink to={'/about'}>
                    About
                </NavLink>
            </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                2022
            </footer></>
    )
}