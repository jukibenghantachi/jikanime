import { useEffect, useState } from 'react';
import { Card, CardLoading } from '../components';
import { fetch } from '../utils/fetch';
import axios from 'axios';

function Home() {
    let [newAnime, setNewAnime] = useState({ data: [] });
    let [latestUpdated, setLatestUpdated] = useState({ data: [] });

    const fetchNewAnime = async () => {
        let res = await fetch('https://api.jikan.moe/v4/seasons/2022/winter');
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

export default Home;
