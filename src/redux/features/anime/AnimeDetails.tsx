import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const animeDetailsFetch = createAsyncThunk('anime/animeDetails', async (args) => {
    return await fetch(`https://api.jikan.moe/v4/anime/${args}`).then((res) => res.json());
});

const slice = createSlice({
    name: 'animeDetails',
    initialState: { data: { data: '' }, status: false },
    reducers: {},
    extraReducers: {
        [animeDetailsFetch.pending as any]: (state) => {
            state.status = false;
        },
        [animeDetailsFetch.fulfilled as any]: (state, { payload }) => {
            state.status = true;
            state.data = payload;
        },
        [animeDetailsFetch.rejected as any]: (state) => {
            state.status = false;
        },
    },
});

export const AnimeDetailsSlice = slice.reducer;
