import classes from '../../styles/Card.module.scss'
import { FaRegHeart  } from "@react-icons/all-files/fa/FaRegHeart";
import { useRecoilState } from 'recoil'
import { favouriteItemsState } from '../../states/atoms'
import { AiOutlineDelete } from "@react-icons/all-files/ai/AiOutlineDelete";
import { Rocket } from '../../Interfaces/Interfaces';

const Card = (props:{rocket:Rocket,img:string,type?:string}) => {
  const [favouriteItems, setFavouriteItems] = useRecoilState(favouriteItemsState)
  function addToFavourite()
  {
    if(favouriteItems.length===0)
    {
      const tempRocket:Rocket = {...props.rocket, img:props.img}
      setFavouriteItems([tempRocket])
      return
    }
    else 
    {
      const tempRocket:Rocket = {...props.rocket,img:props.img}
      setFavouriteItems([...favouriteItems,tempRocket])
    }
    console.log(favouriteItems)
    
  }

  function deleteFromFavourite()
  {
    const newFavouriteItems = favouriteItems.filter((rocket:Rocket)=>rocket.id!==props.rocket.id)
    setFavouriteItems(newFavouriteItems)
  }
  return (
    <div className={classes.wrapper} key={props.rocket.id}>
        <img src={props.img} alt="" />
        <div className={classes.content}>
            <h2 className={classes.h2}>{props.rocket.name}</h2>
            <p className={classes.p}>{props.rocket.description.slice(0,150)}</p>
        </div>
        <div className={classes.buttons}>
            <button className={classes.buyButton}>Buy</button>
            <button className={classes.favButton} onClick={props.type==="delete"?deleteFromFavourite:addToFavourite}>{props.type==="delete"?<AiOutlineDelete/>:<FaRegHeart/>}</button>
        </div>
    </div>
  )
}

export default Card