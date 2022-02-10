import { configureStore } from '@reduxjs/toolkit';
import { AnimeDetailsSlice } from './features/anime/AnimeDetails';
import { LatestSlice } from './features/anime/Latest';
import { NewSlice } from './features/anime/New';
import { MangaDetailsSlice } from './features/manga/MangaDetails';
import { MangaSlice } from './features/manga/Top';

const store = configureStore({
    reducer: {
        animeDetails: AnimeDetailsSlice,
        new: NewSlice,
        latest: LatestSlice,
        mangaDetails: MangaDetailsSlice,
        manga: MangaSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
