import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { DetailsComponentManga, DetailsComponentMangaLoading } from '../../../components';

import { useDispatch, useSelector } from 'react-redux';
import { mangaDetailsFetch } from '../../../redux/features/manga/MangaDetails';
import { RootState } from '../../../redux/store';

export default function Details() {
    let { query, isReady } = useRouter();

    const dispatch = useDispatch();
    const details = useSelector((state: RootState) => state.mangaDetails.data.data);

    useEffect(() => {
        // Use isReady if query is undefined
        // https://github.com/vercel/next.js/discussions/11484#discussioncomment-356055
        if (!isReady) return;
        dispatch(mangaDetailsFetch(query.id.toString()));
    }, [dispatch, query, isReady]);

    return (
        <div>
            {details ? <DetailsComponentManga data={details} /> : <DetailsComponentMangaLoading />}
        </div>
    );
}
