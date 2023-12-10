import { useRecoilState } from 'recoil'
import { favouriteItemsState } from '../states/atoms'
import Header from '../components/Header'
import classes from '../styles/FavouritePage.module.scss'
import Card from '../components/UI/Card'
interface Rocket {
  id:string,
  name:string,
  description:string,
  img: string,
}
const FavouritePage = () => {
  const [favouriteItems, setFavouriteItems] = useRecoilState(favouriteItemsState)
  function clearAll()
  {
    setFavouriteItems([])
  }
  return (
    <>
    <div className={classes.banner}>
        <Header path = {"/favourite"}/>
        <div className={classes.title}>
            <div className={classes.titleContent}>
                <h1>FAVOURITES</h1>
            </div>
        </div>
        
    </div>
    <div className={classes.clearAll} onClick={clearAll}>Clear all</div>
    <div className={classes.favouriteContainer}>
      {favouriteItems.length === 0 ?
      <div className={classes.empty}>
        <h1>THERE IS NO FAVOURITE FLIGHTS</h1>
      </div>
      :
      favouriteItems.map((rocket:Rocket)=>
      {
        return(
          <Card rocket={rocket} img = {rocket.img} type={"delete"} key={rocket.id}/>
        )
      })}
    </div>
    </>
  )
}

export default FavouritePage