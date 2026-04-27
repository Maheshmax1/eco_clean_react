import React from 'react'

function ContactFormCard({ name, email, message }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-2 w-[40%] rounded-2xl">
      <div className="text-center">
       
      </div>
      <div className="mt-4">
        <p>{name}</p>
        <p>{email}</p>
        <p>{message}</p>
      </div>
      <button className='bg-red-500 text-white p-2 rounded-xl mt-2 hover:bg-red-600 hover:font-bold '>Solved</button>
    </div>
  )
}

export default ContactFormCard
