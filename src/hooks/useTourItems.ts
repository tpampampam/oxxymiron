import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../redux/store/store"
import { getTourItems, tourSelector } from "../redux/reducers/tourReducer"



export const useTourItems = () => {
    const dispatch = useAppDispatch()

    const {items = [], isLoading} = useAppSelector(tourSelector)

    useEffect(() => {
        !items.length && dispatch(getTourItems())
    },[items])

    return {
        items,
        isLoading
    }
}

