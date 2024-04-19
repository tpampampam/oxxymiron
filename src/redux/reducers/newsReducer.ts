import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store/store";
import { request } from "../../utils/common";


type NewsType = {
    id: string
    title: string
    date: string
    cover: {
        url: string
      }
    description: any
    sys: {
        id: string
    }
}

type State = {
    items: NewsType[]
    item: NewsType | null
    isLoading: boolean
    isError: boolean
}


export const getNewsItems = createAsyncThunk<NewsType[], undefined, {rejectValue: string}>(
    'newsSlice/getNewsItems',
    async(_, {rejectWithValue}) => {
        try {
            const data = await request('newsitem')

            return data;
        }catch(e){
            console.log(e)
            rejectWithValue('error')
            return []
        }
    }
)

export const getNewsItem = createAsyncThunk<NewsType, string, {rejectValue: string}>(
    'newsSlice/getNewsItem',
    async(id, {rejectWithValue}) => {
        try {
            const data = await request(`newsitem/${id}`)

            return data;
        }catch(e){
            console.log(e)
            rejectWithValue('error')
        }
    }
)

const initialState: State = {
    items: [],
    item: null,
    isLoading: false,
    isError: false
}

const newsSlice = createSlice({
    name: 'newsSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getNewsItems.pending, state => {state.isLoading = true})
            .addCase(getNewsItems.fulfilled, (state, action) => {
                state.isLoading = false
                state.items = action.payload
            })
            .addCase(getNewsItems.rejected, state => {state.isError = true})
            .addCase(getNewsItem.pending, state => {state.isLoading = true})
            .addCase(getNewsItem.fulfilled, (state,action) => {
                state.isLoading = false
                state.item = action.payload
            })
            .addCase(getNewsItem.rejected, state => {state.isError = true})
    }
})

const {reducer} = newsSlice;

export default reducer
export const newsSelector = (state: RootState) => state.newsReducer

