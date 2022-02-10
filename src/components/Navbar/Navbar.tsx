import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/img/logo.png';

export default function Navbar() {
    const routerList = [
        {
            name: 'Home',
            route: '/',
        },
        {
            name: 'Anime',
            route: '/',
        },
        {
            name: 'Manga',
            route: '/manga',
        },
    ];

    return (
        <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b-[1px] bg-white py-2 px-12">
            <div className="flex items-center space-x-3">
                <Image src={Logo} alt="Jikan Logo" width={40} height={40} />
                <p className="text-sm font-medium">Jikanime</p>
            </div>
            <div>
                <ul className="flex space-x-5">
                    {routerList.map((items, id) => (
                        <Link href={items.route} key={id} passHref>
                            <li className="cursor-pointer text-xs font-medium hover:text-[#2c54a4]">
                                {items.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
