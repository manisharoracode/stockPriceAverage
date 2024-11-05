import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                 
                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=G-4NM73RFR54"
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4NM73RFR54');
        `}
                    </Script>
                    {/* <meta name="msvalidate.01" content="FEEE8E028B9405F5D1D604AAA9C18B1C" /> */}
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;
