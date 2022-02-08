import { Navbar } from '../components';
import { Provider } from 'react-redux';
import store from '../redux/store';
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

function Lunacle({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Components Component={Component} pageProps={pageProps} />
        </Provider>
    );
}

export default Lunacle;
