import {atom} from 'recoil';

interface Rocket {
    id:string,
    name:string,
    description:string,
    img: string,
}
export const favouriteItemsState = atom({
    key:'favouriteItemsState',
    default: [] as Rocket[]
})