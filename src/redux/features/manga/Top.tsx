import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTop = createAsyncThunk('top', async () => {
    return await fetch('https://api.jikan.moe/v4/top/manga').then((res) => res.json());
});

const slice = createSlice({
    name: 'top',
    initialState: { data: { data: [] }, status: false },
    reducers: {},
    extraReducers: {
        [fetchTop.pending as any]: (state) => {
            state.status = false;
        },
        [fetchTop.fulfilled as any]: (state, { payload }) => {
            state.status = true;
            state.data = payload;
        },
        [fetchTop.rejected as any]: (state) => {
            state.status = false;
        },
    },
});

export const MangaSlice = slice.reducer;
