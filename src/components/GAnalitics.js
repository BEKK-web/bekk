import Script from "next/script";
export default function GAnalitics() {

    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WM19X1LPMY"></Script>
            <Script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());

                gtag('config', 'G-WM19X1LPMY');
            </Script>
        </>
    );

}