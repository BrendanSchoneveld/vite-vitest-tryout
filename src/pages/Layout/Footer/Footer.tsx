import {FC} from "react";
import classes from "./Footer.module.scss";

interface IProps {}

const Footer: FC<IProps> = () => {
    return (
        <footer className={classes['c-footer']}>
            Footer
        </footer>
    )
}

export default Footer