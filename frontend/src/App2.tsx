import {useEffect} from 'react'
import {useState} from 'react'


export default function App() {
  const [content, setContent] = useState("my respnse")

  useEffect(()=>{
    let result = ''
    const fetchy = async ()=>{
      const myQuery = "When%20did%20humans%20land%20on%20the%20moon"
      const cid = "QmQsySw7b44HgdEhwnmZFRioo3txF3fBnUMscEDZLhHxLf/0"
      const key = "5934dda09646b172"
      const res = await fetch(`https://agents.phala.network/ipfs/${cid}?key=${key}&chatQuery=${myQuery}`)
      console.log(res)
      if (res.ok){
        const reader = res.body?.getReader();
        if(reader){
          const decoder = new TextDecoder();
          let done = false;
          while(!done){
            const {value, done:streamDone} = await reader.read()
            done = streamDone
            if(value){
              result += decoder.decode(value, {stream: true})
              console.log(result)
            }
          }
        }
      }
setContent(result)
    }
    fetchy()
  },[])
  return (
    <>
      <div>{content}</div>
    </>
  );
}
