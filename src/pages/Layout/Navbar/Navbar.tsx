import {FC} from "react";
import classes from "./Navbar.module.scss";

interface IProps {}

const Navbar: FC<IProps> = () => {
    return (
        <nav className={classes['c-navbar']}>
            Navbar
        </nav>
    )
}

export default Navbar