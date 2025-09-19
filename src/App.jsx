import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Blogs from './Components/Blogs/Blogs'

function App() {
  // state declair kori 
  const [bookmarked, setBookmarked] = useState([]);
  // state for time 
  const [readingCount, setReadingCount] = useState(0);

    const handleBookMark = (blog) => {
      setBookmarked([...bookmarked,blog])
    }

    const handleMarkAsRead = (time,id) => {
      const newTime = readingCount + time;
      setReadingCount(newTime);
      handleRemoveFromBookmark(id)
    }

    const handleRemoveFromBookmark = (id) => {
      const remainingBookMark = bookmarked.filter((mark) => mark.id !== id);
      console.log(remainingBookMark)
    }

  return (
    <>
       <Navbar></Navbar>
        

        <div className='main-container flex text-center'>
          <div className='left-container w-[70%]'>
           
            <Blogs handleBookMark={handleBookMark}  handleMarkAsRead={handleMarkAsRead}></Blogs>
          </div>
          <div className='right-container w-[30%] '>
             <h1>Reading time: {readingCount}</h1>
             <h1>bookmarked count: {bookmarked.length}</h1>
             {
              bookmarked.map((marked)=> <p key={marked.id} className='bg-red-600 p-2 shadow m-2 text-white'>{marked.title}</p>)
             }
          </div>
        </div>
    </>
  )
}

export default App
