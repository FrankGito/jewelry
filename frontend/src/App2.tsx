import { useEffect } from 'react'
import { useState } from 'react'


export default function App() {
  const [content, setContent] = useState("my respnse")

  useEffect(() => {
    let result = ''
    const fetchy = async () => {
      const cid = "Qmf42ify53cRmntkVKA6HbZQhuzHLNM7N7MM8C5sWCr4f6/0"
      const key = "99b9ff79ec4aaa7c"
      const res = await fetch(`https://agents.phala.network/ipfs/${cid}?key=${key}`)
      console.log(res)
      if (res.ok) {
        const reader = res.body?.getReader();
        if (reader) {
          const decoder = new TextDecoder();
          let done = false;
          while (!done) {
            const { value, done: streamDone } = await reader.read()
            done = streamDone
            if (value) {
              result += decoder.decode(value, { stream: true })
              console.log(result)
            }
          }
        }
      }
      setContent(result)
    }
    fetchy()
  }, [])
  return (
    <>
      <div>{content}</div>
    </>
  );
}
