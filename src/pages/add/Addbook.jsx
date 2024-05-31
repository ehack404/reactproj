import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

const Addbook = () => {
const [bookName,setbookName]=useState("")
const [bookPrice,setbookPrice]=useState("")
const [isbn,setisbn]=useState("")
const [authorname,setauthorname]=useState("")
const [publishedata,setpublishedata]=useState("")
const [publication,setpublication]=useState("")
const [image,setImage]=useState("null")

const handleSubmit= async(e)=>{
    e.preventDefault()
    const response = await axios.post('http://localhost:3000/book',{
        bookName,
        bookPrice,
        isbn,
        authorname,
        publishedata,
        publication,
        image
    }, {
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    })
}


  return (
   <>
   <Navbar/>
   <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
         Add Book   
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Add Book Credentials
              </h1>
              <form onSubmit={handleSubmit}  >
                  <div>
                      <label htmlFor="bookName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Name</label>
                      <input type="text" name="bookName" id="bookName"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>setbookName(e.target.value)} placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="bookPrice" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Price</label>
                      <input type="number" name="bookPrice" id="bookPrice" onChange={(e)=>setbookPrice(e.target.value)} placeholder="Rs." class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label htmlFor="isbn" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Isbn Number</label>
                      <input type="number" name="isbn" id="isbn" placeholder=""onChange={(e)=>setisbn(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label htmlFor="authorname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author name</label>
                      <input type="text" name="authorname" id="authorname" placeholder="" onChange={(e)=>setauthorname(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label htmlFor="publishedata" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Publish Date</label>
                      <input type="date" name="publishedata" id="publishedata" placeholder="" onChange={(e)=>setpublishedata(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label htmlFor="publication" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Publication</label>
                      <input type="publication" name="publication" id="publication" placeholder="" onChange={(e)=>setpublication(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label htmlFor="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo of Book</label>
                      <input type="file" name="image" id="image" placeholder="" onChange={(e)=>setImage(e.target.files[0])} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                   
                  <button type="submit " class="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add Book </button>
                  </form>
          </div>
      </div>
  </div>
</section>

   </>
  )
}

export default Addbook
