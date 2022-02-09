import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DetailsComponentManga, DetailsComponentMangaLoading } from '../../../components';
import axios from 'axios';

export default function Details() {
    let { query, isReady } = useRouter();
    let [details, setDetails] = useState();

    const fetch = async (url: string) => {
        const res = await axios.get(url);
        setDetails(res.data.data);
    };

    useEffect(() => {
        // Use isReady if query is undefined
        // https://github.com/vercel/next.js/discussions/11484#discussioncomment-356055
        if (!isReady) return;
        fetch(`https://api.jikan.moe/v4/manga/${query.id}`);
    }, [query, isReady]);

    return (
        <div>
            {details ? <DetailsComponentManga data={details} /> : <DetailsComponentMangaLoading />}
        </div>
    );
}
