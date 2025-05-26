import React from 'react'

function MadeForYou({song, key}) {
  return (
    <div key={key} className=' p-3 flex-shrink-0 flex flex-col bg-zinc-800 rounded-sm'>
      <img src={song.imageUrl} alt={song.title} className=' truncate size-50 rounded-sm' />
      <h3 className='text-white font-semibold'>{song.title}</h3>
      <span className='text-zinc-600 text-sm '>{song.artist}</span>
    </div>
  )
}

export default MadeForYou