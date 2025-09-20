import { useParams } from 'react-router-dom'
import { useChatManager } from '../store/useChatManager'
import { useEffect, useState } from 'react'

function Chat() {
    const [formData, setFormData] = useState({message: ""})
    const {id} = useParams()
    const {sendMessages,getMessages,messages} = useChatManager()

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
       setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSendMessage = ()=>{
      try {
        sendMessages(formData, id!)
      } catch (error) {
        console.error(error)
      }
    }
    useEffect(()=>{
      getMessages(id!)
    },[id])
  return (
    <div>
        <div className='h-[calc(100vh-20px)] bg-200 px-4 py-2 relative'>
            <div onClick={()=> window.history.back()}>Back</div>

            {/* chat container  */}
            <div className='h-full overflow-y-auto w-full mt-8'>
             
             <div>
              {messages.message?.length && messages.message?.map((msg)=>{
                console.log(msg)
                return (
                  <div  className='py-2 px-4 bg-gray-400 my-1 text-black text-sm'>
                       {msg.message}
                  </div>
                )
              })}
             </div>
      
                
            </div>
            
             
            <form onSubmit={handleSendMessage} className='fixed bottom-0 right-0 p-2 bg-black  h-14 w-full flex justify-center items-center gap-2'>
                <input type="text" onChange={handleChange} name="message" className='h-full w-full focus:bg-gray-900 border border-gray-700 rounded-md text-white py-2 px-4 outline-none'  />

                <button type='submit' className='bg-white rounded-md text-black py-1 px-3'>send</button>
            </form>
        </div>
    </div>
  )
}

export default Chat