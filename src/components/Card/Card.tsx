import Image from 'next/image';

function Card({ type, data }) {
    switch (type) {
        case 'New Anime':
            return (
                <div className="group w-32 cursor-pointer">
                    <Image
                        src={data.images.webp.large_image_url}
                        alt={data.title}
                        className="duration-50 h-48 w-32 rounded-md object-cover transition group-active:scale-95"
                    />
                    <div className="mt-2 group-hover:text-[#2c54a4]">
                        <p className="font-medium line-clamp-2">{data.title}</p>
                        <p className="text-sm text-gray-500">{data.genres[0].name}</p>
                    </div>
                </div>
            );
        case 'Latest Updated':
            return (
                <>
                    <div className="group w-32 cursor-pointer">
                        <Image
                            src={data.entry.images.webp.large_image_url}
                            alt={data.entry.title}
                            className="duration-50 h-48 w-32 rounded-md object-cover transition group-active:scale-95"
                        />
                        <div className="mt-2 group-hover:text-[#2c54a4]">
                            <p className="font-medium line-clamp-2">{data.entry.title}</p>
                            <p className="text-sm text-gray-500">{data.episodes[0].title}</p>
                        </div>
                    </div>
                </>
            );
        default:
            break;
    }
}

export default Card;