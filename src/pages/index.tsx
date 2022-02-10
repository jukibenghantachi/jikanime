import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { Card, CardLoading } from '../components';

import { useDispatch, useSelector } from 'react-redux';
import { fetchNew } from '../redux/features/anime/New';
import { fetchLatest } from '../redux/features/anime/Latest';
import { RootState } from '../redux/store';

export default function Home() {
    const dispatch = useDispatch();
    const newAnime = useSelector((state: RootState) => state.new.data.data);
    const latestAnime = useSelector((state: RootState) => state.latest.data.data);
    const status = useSelector((state: RootState) => state);

    useEffect(() => {
        if (status.new.status && status.latest.status) return;
        dispatch(fetchLatest());
        dispatch(fetchNew());
    }, [status.new.status, status.latest.status, dispatch]);

    return (
        <div>
            <NextSeo
                title="Home - Jikanime"
                description="MyAnimeList - Minimal UI"
                openGraph={{
                    url: 'https://jikanime.vercel.app',
                    title: 'Home - Jikanime',
                    description: 'MyAnimeList - Minimal UI',
                    images: [{ url: 'https://jikan.moe/assets/images/logo/jikan.logo.png' }],
                    site_name: 'Jikanime',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
            <h1 className="my-5 text-2xl font-medium text-gray-800">New Anime</h1>
            <div className="my-3 flex flex-wrap justify-between gap-5">
                {newAnime.length
                    ? newAnime.map((items, id) => <Card type="New Anime" data={items} key={id} />)
                    : new Array(8).fill(0).map((_, id) => <CardLoading key={id} />)}
            </div>
            <h1 className="my-5 text-2xl font-medium text-gray-800">Latest Updated</h1>
            <div className="my-3 flex flex-wrap justify-between gap-5">
                {latestAnime.length
                    ? latestAnime.map((items, id) => <Card type="Latest" data={items} key={id} />)
                    : new Array(8).fill(0).map((_, id) => <CardLoading key={id} />)}
            </div>
        </div>
    );
}
