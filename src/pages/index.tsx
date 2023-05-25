import { useDispatch,useSelector } from 'react-redux'
import Image from 'next/image'
import List from '@/component/home'

export default function Home() {
      // const result = async()=>{
      //     let response = await fetch("http://localhost:3030",{
      //       method:"GET"
      //     })
      //     let data  =await response.text()
      //     console.log(data)
      // }
      // result()
  return (
    <>
      <List/>
    </>
  )
}
