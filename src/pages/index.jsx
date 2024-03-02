import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Card from "@/components/Card"

export default function Home() {
  
  const [testArray, setTestArray] = useState([]);
  useEffect(()=>{
    fetch("https://api.capy.lol/v1/capybaras?take=25&random=true")
      .then(res => res.json())
      .then(data=> setTestArray(data.data))
    print("Fetched")
  }, [])

  const cardsList = testArray.map(capy => {
    return(<Card img={capy.url} key={capy.index} />)
  })

  console.log(testArray)
  console.log(cardsList)

  return (


    <>
      <Head>
        <title>Feed App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main >
        {cardsList}
      </main>
      
    </>
  );
}
