import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { request } from "../../utils/common";


export type Track = {
    date: string
    title: string
    link: {
        url: string
    }
    cover: {
        url: string
    }
    description: string
    sys: TrackId
}

type TrackId = {id: string}

type State = {
    items: Track[],
    isLoading: boolean,
    isError: boolean
}

const initialState: State = {
    items: [],
    isLoading: false,
    isError: false
}

export const getTrackItems = createAsyncThunk<Track[], undefined, {rejectValue: string}>(
    'trackSlice/getTrackItems',
    async(_, {rejectWithValue}) => {
        try{
            const data = await request('track')
            
            return data
        }catch(e){
            console.log(e)
            rejectWithValue('error')
            return [];
        }
    }
)


const trackSlice = createSlice({
    name: 'trackSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTrackItems.pending, state => {state.isLoading = true})
            .addCase(getTrackItems.fulfilled, (state, action) => {
                state.isLoading = false
                state.items = action.payload
            })
            .addCase(getTrackItems.rejected, state => {state.isError = true})
    }
})

const {reducer } = trackSlice;

export default reducer;

export const trackSelector = (state: RootState) => state.trackReducer;