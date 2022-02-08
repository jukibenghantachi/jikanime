import Image from 'next/image';
import Link from 'next/link';

function Card({ type, data }) {
    switch (type) {
        case 'New Anime':
            return (
                <Link href={'details/' + data.mal_id} passHref>
                    <div className="group w-32 cursor-pointer">
                        <Image
                            src={data.images.webp.large_image_url}
                            alt={data.title}
                            width={128}
                            height={192}
                            className="duration-50 rounded-md object-cover transition group-active:scale-95"
                        />
                        <div className="group-hover:text-[#2c54a4]">
                            <p className="font-medium line-clamp-2">{data.title}</p>
                            <p className="text-sm text-gray-500">{data.genres[0].name}</p>
                        </div>
                    </div>
                </Link>
            );
        case 'Latest Updated':
            return (
                <Link href={'details/' + data.entry.mal_id} passHref>
                    <div className="group w-32 cursor-pointer">
                        <Image
                            src={data.entry.images.webp.large_image_url}
                            alt={data.entry.title}
                            width={128}
                            height={192}
                            className="duration-50 rounded-md object-cover transition group-active:scale-95"
                        />
                        <div className="group-hover:text-[#2c54a4]">
                            <p className="font-medium line-clamp-2">{data.entry.title}</p>
                            <p className="text-sm text-gray-500">{data.episodes[0].title}</p>
                        </div>
                    </div>
                </Link>
            );
        default:
            break;
    }
}

export default Card;
