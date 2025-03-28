import React from 'react'

function Username({username, setUsername}) {
  return (
    <div><label class="input validator">
    <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>

    <input value={username} type="input" required   className="px-4 bg-white placeholder:text-gray-400 text-black border border-gray-100"
    onChange={(e)=> setUsername(e.target.value)}
    placeholder="Username"/>
  </label>
 </div>
  )
}

export default Username