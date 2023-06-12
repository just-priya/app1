import Image from 'next/image'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import { TokenStuff } from '@/components/token-stuff'
import { useRouter } from 'next/router'
import { useEffect } from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(res => res.json())
    // .then((res) => {
    //   console.log(res);
    // }).catch((er) => console.error(er))
  }, [])

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>App 1 home page {!!router.query.id ? `id: (${router.query.id})` : ""} </h1>
    </main>
  )
}
