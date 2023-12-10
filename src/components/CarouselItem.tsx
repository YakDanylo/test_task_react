import {useRef } from 'react'
import "react-multi-carousel/lib/styles.css";
import {useQuery} from "@apollo/client"
import { GET_ROCKETS } from '../apollo/rockets';
import Card from './UI/Card';
import Carousel from "react-multi-carousel";
import picture1 from '../assets/images//pexels-spacex-586056 1.png'
import picture3 from "../assets/images/image 2.png"
import picture2 from "../assets/images/pexels-mikhail-nilov-7672013 1.png"
import classes from "../styles/CarouselItem.module.scss"
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { IoIosArrowBack  } from "@react-icons/all-files/io/IoIosArrowBack";
import { Rocket } from '../Interfaces/Interfaces';
const pictures: string[] = [picture1,picture2,picture3,picture1,picture2,picture3]
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
}
const CarouselItem = () => {

  const {loading,data} = useQuery(GET_ROCKETS);
  const carouselRef = useRef<Carousel | null>(null);

  const handleNextClick = () => {
    if (carouselRef.current) {
      (carouselRef.current as Carousel).next(1);
    }
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      (carouselRef.current as Carousel).previous(1);
    }
  };
    return (
    <div className={classes.carousel}>
            <div className={classes.carouselHeader}>
                <p className={classes.carouselTitle}>POPULAR TOURS</p>
                <div className={classes.carouselButtons}>
                    <div className={classes.button}  onClick={handlePrevClick}> <IoIosArrowBack/></div>
                    <div className={classes.button}  onClick={handleNextClick}> <IoIosArrowForward/></div>
                </div>
            </div>
            <div>
              <Carousel 
              responsive={responsive}
              renderButtonGroupOutside={true}
              arrows={false}
              infinite={true}
              showDots={true}
              ref = {carouselRef}
              >
                {loading?<p>Loading...</p>
                :
                data?.rockets.map((rocket:Rocket) => {
                  return (
                    <Card rocket={rocket} img = {pictures[data.rockets.indexOf(rocket)]} key={rocket.id}/>
                  )
                })
                }
              </Carousel>
            </div>
    </div>
  )
}

export default CarouselItem