import {FunctionComponent, PropsWithChildren} from "react";
import Navbar from "./Navbar/Navbar.tsx";
import Footer from "./Footer/Footer.tsx";
import classes from "./Layout.module.scss";

interface IProps {}
const Layout: FunctionComponent<PropsWithChildren<IProps>> = ({ children }) => {
    return (
        <div className={classes['c-layout']}>
            <Navbar />

            <main>
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout