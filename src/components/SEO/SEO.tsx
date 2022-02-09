import { Head } from 'next/document';

export default function SEO({ title, url, description, image }) {
    return (
        <Head>
            <title>{title} - Jikanime</title>
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content="Jikanime" />
            <meta property="og:url" content={url} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={image} />
        </Head>
    );
}
