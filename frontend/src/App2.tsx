import { Button } from './components/ui/button'
import {useEffect} from 'react'
import {useState} from 'react'


function App() {
  const [content, setContent] = useState("my respnse")

  useEffect(()=>{
    let result = ''
    const fetchy = async ()=>{
      const myQuery = "When%20did%20humans%20land%20on%20the%20moon"
      const res = await fetch(`https://agents.phala.network/ipfs/Qma2WjqWqW8wYG2tEQ9YFUgyVrMDA9VzvkkdeFny7Smn3R/0?key=686df81d326fa5f2&chatQuery=${myQuery}`)
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
      <Button>I am a Shacdn button</Button>
      <div>{content}</div>
    </>
  );
}
