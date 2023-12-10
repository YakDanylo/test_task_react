import classes from '../styles/Header.module.scss';
import logo from '../assets/images/logo-removebg-preview.png';
import { FaRegHeart  } from "@react-icons/all-files/fa/FaRegHeart";
import { Link } from 'react-router-dom';
const Header = (props:any) => {
    return <>
    <header className={classes.header}>
        <div className={classes.logoContainer}>
            <Link to="/">
                <img src={logo} className={classes.logo} ></img>
            </Link>
        </div>
        <nav className={classes.navigatorContainer}>
            <ul className={classes.navigator}>
                <li>
                    <a href="/" className={classes.link}>
                        Home
                    </a>
                </li>
                <li>
                    <Link to={props.path} className={classes.link}>
                        Tours
                    </Link>  
                </li>
                <li>
                    <Link to={props.path} className={classes.link}>
                        About
                    </Link >
                </li>
                <li>
                    <Link  to={props.path} className={classes.link}>
                        Help   
                    </Link>
                </li>
            </ul>
        </nav>
        <div className={classes.userInfoContainer}>
        <Link to={props.path=='/'?'favourite':''} className={classes.favouriteLink}>
            <div className={classes.favouriteContainer} style={props.path==="/"?{}:{backgroundColor:'#DD377D'}}>
                <FaRegHeart color={props.path==="/"?"black":"white"}/>
            </div>
            </Link>
            <div className={classes.signInContainer}>
                SIGN IN
            </div>
        </div>
    </header>
    </>
}

export default Header