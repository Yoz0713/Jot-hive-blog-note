import { useDispatch,useSelector } from 'react-redux'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Home() {
    const router =useRouter()
  return (
    <>
      <p onClick={()=>{
        router.push("/post")
      }} style={{color:"#fff",fontSize:"6vw",padding:"4vw 4vw"}}>to post page</p>
    </>
  )
}
