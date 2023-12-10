import classes from "../styles/HomePage.module.scss"
import { IoIosArrowRoundDown } from "@react-icons/all-files/io/IoIosArrowRoundDown";
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';
import {useRef} from 'react'

const HomePage = () => {
    const handleExploreRef = useRef<HTMLDivElement>(null)
    function handleExploreClick()
    {
        (handleExploreRef.current as HTMLDivElement).scrollIntoView({behavior: "smooth", block: "start"})
    }
    
  return (
    <>
    <div className={classes.banner}>
        <Header path = {"/"}/>
        <div className={classes.title}>
            <div className={classes.titleContent}>
                <h3>THE SPACE IS WAITING FOR</h3>
                <h1>YOU</h1>
            </div>
        </div>
        <div className={classes.exploreContainer}>
            <div className={classes.exploreText} ref={handleExploreRef} onClick={handleExploreClick}>
                Explore tours
            </div>
            <div className={classes.exploreIcon}>
                <IoIosArrowRoundDown/>
            </div>
        </div>
    </div>
    <main className={classes.main}>
                <CarouselItem/>
    </main>
    </>
  )
}

export default HomePage