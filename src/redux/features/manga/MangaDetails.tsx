import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const mangaDetailsFetch = createAsyncThunk<any, string>(
    'anime/mangaDetails',
    async (args) => {
        return await fetch(`https://api.jikan.moe/v4/manga/${args}`).then((res) => res.json());
    }
);

const slice = createSlice({
    name: 'mangaDetails',
    initialState: { data: { data: '' }, status: false },
    reducers: {},
    extraReducers: {
        [mangaDetailsFetch.pending as any]: (state) => {
            state.status = false;
            state.data = { data: '' };
        },
        [mangaDetailsFetch.fulfilled as any]: (state, { payload }) => {
            state.status = true;
            state.data = payload;
        },
        [mangaDetailsFetch.rejected as any]: (state) => {
            state.status = false;
            state.data = { data: '' };
        },
    },
});

export const MangaDetailsSlice = slice.reducer;
