import { Navbar } from '../components';
import '../assets/css/tailwind.css';

function Components({ Component, pageProps }) {
    return (
        <div className="font-montserrat">
            <Navbar />
            <div className="my-20 mx-12">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default function Lunacle({ Component, pageProps }) {
    return <Components Component={Component} pageProps={pageProps} />;
}
