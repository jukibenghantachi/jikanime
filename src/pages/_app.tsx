import { Provider } from 'react-redux';
import { Footer, Navbar } from '../components';
import store from '../redux/store';
import '../assets/css/tailwind.css';

function Components({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <div className="font-montserrat">
                <Navbar />
                <div className="my-20 mx-12">
                    <Component {...pageProps} />
                </div>
                <Footer />
            </div>
        </Provider>
    );
}

export default function Lunacle({ Component, pageProps }) {
    return <Components Component={Component} pageProps={pageProps} />;
}
