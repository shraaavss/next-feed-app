import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Card from "@/components/Card"
import Search from "./search";
import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {

  // state variables
  const [showSearch, setShowSearch] = useState(true)

  const { data: session, status } = useSession()
  const userEmail = session?.user?.email
  console.log(userEmail)

  const [testArray, setTestArray] = useState([]);
  useEffect(() => {
    fetch("https://api.capy.lol/v1/capybaras?take=25&random=true")
      .then(res => res.json())
      .then(data => setTestArray(data.data))
    console.log("Fetched")
  }, [])

  const cardsList = testArray.map(capy => {
    return (<Card img={capy.url} key={capy.index} />)
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
      {status === "authenticated" ?
        <main >
          <p>Signed in as {userEmail}</p>

          {showSearch && <Search/>}

          {cardsList}
        </main>
        :
        <>
          <p>Not signed in.</p>
          <button onClick={() => signIn("google")}>Sign in</button>
        </>
      }

    </>


  )
}
