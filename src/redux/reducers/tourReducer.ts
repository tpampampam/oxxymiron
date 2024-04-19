import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { request } from "../../utils/common"
import { RootState } from "../store/store"


type State = {
    items: Array<any>
    isLoading: boolean
}

const initialState: State = {
    items: [],
    isLoading: false
}



export type Venue = {
    place: string,
    date: string,
    city: string,
    soldOut: boolean,
    ticketLink: string,
    country: string,
    videoLink: string,
    sys: IdVenue
}

type IdVenue = {
    id: string
}

export const getTourItems = createAsyncThunk<Venue[], undefined, {rejectValue: string}>(
    'tourItems/getTourItems',
    async (_, {rejectWithValue}) => {
        try {
            const data = await request('touritem')
            
            return data
        } catch(e) {
            console.log(e)
            rejectWithValue('error')
            return []
        }
    }
)

const tourItemsSlice = createSlice({
    name: 'tourItems',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getTourItems.pending, state => {state.isLoading = true})
            .addCase(getTourItems.fulfilled, (state, action) => {
                state.isLoading = false
                state.items = action.payload
            })
    }
})

export const {reducer, actions} = tourItemsSlice
export default reducer

export const tourSelector = (state: RootState) => state.tourReducer