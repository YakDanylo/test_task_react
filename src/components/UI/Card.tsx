import classes from '../../styles/Card.module.scss'
import { FaRegHeart  } from "@react-icons/all-files/fa/FaRegHeart";
import { useRecoilState } from 'recoil'
import { favouriteItemsState } from '../../states/atoms'
import { AiOutlineDelete } from "@react-icons/all-files/ai/AiOutlineDelete";

const Card = (props:any) => {
  const [favouriteItems, setFavouriteItems] = useRecoilState(favouriteItemsState)
  function addToFavourite()
  {
    if(favouriteItems.length===0)
    {
      const rocket = {...props.rocket,img:props.img}
      setFavouriteItems([rocket])
      return
    }
    else 
    {
      const rocket = {...props.rocket,img:props.img}
      setFavouriteItems([...favouriteItems,rocket])
    }
    console.log(favouriteItems)
    
  }

  function deleteFromFavourite()
  {
    const newFavouriteItems = favouriteItems.filter((rocket:any)=>rocket.id!==props.rocket.id)
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