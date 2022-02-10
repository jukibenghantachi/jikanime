import { NextSeo } from 'next-seo';
import Image from 'next/image';

export default function DetailsComponentManga({ data }) {
    const loopValue = (name) => {
        return data[name].map((x) => x.name);
    };

    let tableDetails = [
        {
            name: 'Title',
            value: data.title,
        },
        {
            name: 'Japan',
            value: data.title_japanese,
        },
        {
            name: 'Score',
            value: data.scored,
        },
        {
            name: 'Type',
            value: data.type,
        },
        {
            name: 'Status',
            value: data.status,
        },
        {
            name: 'Chapters',
            value: data.chapters,
        },
        {
            name: 'Volumes',
            value: data.volumnes,
        },
        {
            name: 'Aired',
            value: data.published.string,
        },
        {
            name: 'Authors',
            value: loopValue('authors').toString(),
        },
        {
            name: 'Genre',
            value: loopValue('genres').toString(),
        },
    ];

    return (
        <div>
            <NextSeo
                title={data.title + ' - Jikanime'}
                description={data.synopsis}
                openGraph={{
                    url: `https://jikanime.vercel.app/details/manga/${data.mal_id}`,
                    title: `${data.title} - Jikanime`,
                    description: data.synopsis,
                    images: [{ url: data.images.webp.large_image_url }],
                    site_name: 'Jikanime',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
            <div className="flex justify-center">
                <Image
                    src={data.images.webp.large_image_url}
                    alt={data.title}
                    width={224}
                    height={224}
                    objectFit="contain"
                />
            </div>
            <div className="my-5 text-center">
                <h1 className="font-medium">{data.title}</h1>
                <p className="text-sm font-medium text-gray-500/50">{data.title_japanese}</p>
            </div>
            <table className="my-5">
                <tbody>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        {tableDetails.map((items, id) => (
                            <tr key={id}>
                                <td className="pr-5 pb-2 align-text-top text-sm font-medium">
                                    {items.name}
                                </td>
                                <td className="pb-2 text-sm font-medium text-gray-500">
                                    {items.value}
                                </td>
                            </tr>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
