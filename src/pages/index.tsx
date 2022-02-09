import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import { Card, CardLoading } from '../components';
import { fetch } from '../utils/fetch';

export default function Home() {
    let [newAnime, setNewAnime]: any = useState();
    let [latestUpdated, setLatestUpdated]: any = useState();

    let date = new Date();
    let season: string;
    let year: string = date.getFullYear().toString();
    let month: number = date.getMonth();

    const fetchNewAnime = async () => {
        /**
         * Anime Season Date:
         * Winter — January to March
         * Spring — April to June
         * Summer — July to September
         * Fall   — October to December
         */
        switch (month) {
            case 0 || 1 || 2:
                season = 'winter';
                break;
            case 3 || 4 || 5:
                season = 'spring';
                break;
            case 6 || 7 || 8:
                season = 'summer';
                break;
            case 9 || 10 || 11:
                season = 'fall';
                break;
            default:
                season = 'winter';
                break;
        }
        let res = await fetch(`https://api.jikan.moe/v4/seasons/${year}/${season}`);
        setNewAnime(res);
    };

    const fetchLatestUpdated = async () => {
        let res = await fetch('https://api.jikan.moe/v4/watch/episodes');
        setLatestUpdated(res);
    };

    useEffect(() => {
        fetchNewAnime();
        fetchLatestUpdated();
    }, []);

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
                {newAnime
                    ? newAnime.data.map((items, id) => (
                          <Card type="New Anime" data={items} key={id} />
                      ))
                    : new Array(8).fill(0).map((_, id) => <CardLoading key={id} />)}
            </div>
            <h1 className="my-5 text-2xl font-medium text-gray-800">Latest Updated</h1>
            <div className="my-3 flex flex-wrap justify-between gap-5">
                {latestUpdated
                    ? latestUpdated.data.map((items, id) => (
                          <Card type="Latest Updated" data={items} key={id} />
                      ))
                    : new Array(8).fill(0).map((_, id) => <CardLoading key={id} />)}
            </div>
        </div>
    );
}
