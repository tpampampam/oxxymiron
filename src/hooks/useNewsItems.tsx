import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../redux/store/store"
import { getNewsItems, newsSelector } from "../redux/reducers/newsReducer"

export const useNewsItems = () => {
    const dispatch = useAppDispatch()

    const {items = [], isLoading} = useAppSelector(newsSelector)

    useEffect(() => {
        !items.length && dispatch(getNewsItems())
    },[items])

    return {
        items,
        isLoading
    }
}