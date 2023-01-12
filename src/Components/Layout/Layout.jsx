import { NavLink, Outlet } from "react-router-dom"
import { Footer } from "../Footer/Footer"
import styles from './Layout.module.css'

export const Layout = () => {
    return (
        <div className={styles.layoutContainer}>
            <header>
                <div className={styles.headerLogo}>
                    <NavLink to={'/'}>
                        Project—d
                    </NavLink>
                </div>
                <nav>
                <NavLink to={'/about'}>
                        About
                    </NavLink>
                    <NavLink to={'/projects'}>
                        Works
                    </NavLink>
                </nav>
                {/* <nav>
                    <NavLink to={'/'}>
                        Home
                    </NavLink>
                    <NavLink to={'/projects'}>
                        Projects
                    </NavLink>
                    <NavLink to={'/about'}>
                        About
                    </NavLink>
                </nav> */}

            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}