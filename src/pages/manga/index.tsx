import { useEffect, useState } from 'react';
import { Card, CardLoading, SEO } from '../../components';
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
            <SEO
                title="Manga"
                url="https://jikanime.vercel.app"
                description="MyAnimeList - Minimal UI"
                image="https://jikan.moe/assets/images/logo/jikan.logo.png"
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
