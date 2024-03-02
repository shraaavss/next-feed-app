import Head from "next/head";
import Header from "@/components/Header";
import { LinkPreview } from '@dhaiwat10/react-link-preview';

export default function Search() {

  const links = [
    {
      'link': "https://open.spotify.com/track/0vq7fkHZl2khMonn5G7d9l?si=5dfb754d21c04a83",
      'platform': 'Spotify'
    },

    {
      'link': "https://open.spotify.com/track/45OX2jjEw1l7lOFJfDP9fv?si=7e7583fd81f34f96",
      'platform': 'Spotify'
    },

    {
      'link': "https://open.spotify.com/track/7JJmb5XwzOO8jgpou264Ml?si=56452422e0cd4e85",
      'platform': 'Spotify'
    },

    {
      'link': "https://open.spotify.com/track/46nvQpUDsxpS08UTFOeKTA?si=58c69f9a968140f6",
      'platform': 'Spotify'
    },


  ]

    const customFetcher = async (url) => {
      const response = await fetch(`https://corsproxy.io/?${url}`);
      const json = await response.json();
      return json.metadata;
    }

  return (
    <>
      <Head>
        <title>Search</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="grid-layout">

        <LinkPreview
          url='https://en.wikipedia.org/wiki/Duck'
          width='400px'
          fetcher={customFetcher}
        />


      </div>

    </>
  );
}
