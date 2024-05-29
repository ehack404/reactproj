import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
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
      </div>
      </>
  )
}

export default Singlebook
