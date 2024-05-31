import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Singlebook = () => {
const {id}= useParams()
const [book,setBook]=useState({})

const fetchBook =async()=>{
  const response= await axios.get(`http://localhost:3000/book/${id}`)

  if(response.status===200){
  setBook(response.data.data)
  }
}
useEffect(()=>{
  fetchBook()
},[])
  return (
    <>
    <Navbar/>
    <img class="w-full" src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" alt='image xaina vai' width="200px" height="200px" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{book.bookName}</div>
    <p class="text-gray-700 text-base">
      {book.isbn} 
      </p>
      <p class="text-gray-700 text-base">
      {book.authorname} 
      </p>
      <button class="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Delete</button>
     <Link to ={`/editbook/${book._id}`}>
      <button class="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Edit</button>
       </Link>
           </div>
      </>
  )
}

export default Singlebook
