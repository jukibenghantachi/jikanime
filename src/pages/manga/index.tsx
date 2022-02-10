import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { Card, CardLoading } from '../../components';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTop } from '../../redux/features/manga/Top';
import { RootState } from '../../redux/store';

export default function Home() {
    const dispatch = useDispatch();
    const manga = useSelector((state: RootState) => state.manga.data.data);

    useEffect(() => {
        dispatch(fetchTop());
    }, [dispatch]);

    return (
        <div>
            <NextSeo
                title="Manga - Jikanime"
                description="MyAnimeList - Minimal UI"
                openGraph={{
                    url: 'https://jikanime.vercel.app',
                    title: 'Manga - Jikanime',
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
            <h1 className="my-5 text-2xl font-medium text-gray-800">Top Manga</h1>
            <div className="my-3 flex flex-wrap justify-between gap-5">
                {manga.length
                    ? manga.map((items, id) => <Card type="Manga" data={items} key={id} />)
                    : new Array(8).fill(0).map((_, id) => <CardLoading key={id} />)}
            </div>
        </div>
    );
}
