export const GA_TRACKING_ID = 'UA-165645844-1';

export const pageview = url => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
}
