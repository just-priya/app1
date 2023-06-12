import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

export default function Page() {

    const router = useRouter()
    const ref = useRef(null)

    useEffect(() => {
        if (!!ref.current) {
            // router.push("/app1/")
        }
    },[])

    return (
        <div ref={ref}>
404
        </div>
    )
}

export async function getServerSideProps(context: any) {
   
      return {
        redirect: {
          destination: '/app1/',
          permanent: false,
          // statusCode: 301
        },
      }
   
  }