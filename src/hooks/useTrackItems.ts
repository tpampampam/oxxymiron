import { useEffect } from "react"
import { getTrackItems, trackSelector } from "../redux/reducers/tracksReducer"
import { useAppDispatch, useAppSelector } from "../redux/store/store"



export const useTrackItems = () => {
    const dispatch = useAppDispatch()

    const {items = [], isLoading} = useAppSelector(trackSelector)

    useEffect(() => {
        !items.length && dispatch(getTrackItems())
    },[items])

    return {
        items,
        isLoading
    }
}
