declare global {
  interface Window {
    gtag: any;
  }
}

export const pageview = (url: string) => {
  if (process.env.NODE_ENV === "production") {
    window?.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
  }
};

// log specific events happening.
export const event = ({ action, params }: any) => {
  if (process.env.NODE_ENV === "production") {
    window?.gtag("event", action, params);
  }
};
