import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { DetailsComponentAnime, DetailsComponentAnimeLoading } from '../../../components';

import { useDispatch, useSelector } from 'react-redux';
import { animeDetailsFetch } from '../../../redux/features/anime/AnimeDetails';
import { RootState } from '../../../redux/store';

export default function Details() {
    let { query, isReady } = useRouter();

    const dispatch = useDispatch();
    const details = useSelector((state: RootState) => state.animeDetails.data.data);

    useEffect(() => {
        // Use isReady if query is undefined
        // https://github.com/vercel/next.js/discussions/11484#discussioncomment-356055
        if (!isReady) return;
        dispatch(animeDetailsFetch(query.id.toString()));
    }, [dispatch, query, isReady]);

    return (
        <div>
            {details ? <DetailsComponentAnime data={details} /> : <DetailsComponentAnimeLoading />}
        </div>
    );
}
