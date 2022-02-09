import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import { Card, CardLoading } from '../../components';
import { fetch } from '../../utils/fetch';

export default function Home() {
    let [topManga, setTopManga]: any = useState();

    const fetchTopManga = async () => {
        let res = await fetch('https://api.jikan.moe/v4/top/manga');
        setTopManga(res);
    };

    useEffect(() => {
        fetchTopManga();
    }, []);

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
                {topManga
                    ? topManga.data.map((items, id) => <Card type="Manga" data={items} key={id} />)
                    : new Array(8).fill(0).map((_, id) => <CardLoading key={id} />)}
            </div>
        </div>
    );
}
