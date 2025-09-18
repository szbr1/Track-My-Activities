import { useParams } from 'react-router-dom'

function Chat() {
    const {id} = useParams()
    console.log(id)
  return (
    <div>
        <div className='h-[calc(100vh-20px)] bg-200 px-4 py-2 relative'>
            <div onClick={()=> window.history.back()}>Back</div>

            {/* chat container  */}
            <div className='h-full overflow-y-auto w-full bg-green-200'>

      
                
            </div>
            
             
            <div className='fixed bottom-0 right-0 p-2 bg-black  h-14 w-full flex justify-center items-center gap-2'>
                <input type="text" className='h-full w-full focus:bg-gray-900 border border-gray-700 rounded-md text-white py-2 px-4 outline-none'  />

                <button className='bg-white rounded-md text-black py-1 px-3'>send</button>
            </div>
        </div>
    </div>
  )
}

export default Chat