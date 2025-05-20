
import axios from 'axios'
import React , {useEffect, useState} from 'react'
import { BACKEND_URL } from '../config'

const UseContent = () => {
 
    const [contents, setContents] = useState([])


    const refresh=()=>{

         axios.get(`${BACKEND_URL}/api/v1/content`,{
            headers : {
                "Authorization" :localStorage.getItem("token")
            }
            })
        .then((res)=>{
            console.log(res)
            setContents(res.data.data)
        })
    }

    useEffect(()=>{
        refresh()
       let Interval =  setInterval(()=>{
            refresh()
        }, 10 * 6000)

        return ()=>{
            clearInterval(Interval)
        }
    })

  return [contents , refresh];
   
}

export default UseContent
