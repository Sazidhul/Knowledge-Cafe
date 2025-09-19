import React from 'react';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, handleBookMark, handleMarkAsRead}) => {
    // console.log(handleBookMark);
   // const {blog} = props;
  //  console.log(blog)
   return (
      <div>
       
      {/* card */}
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="Shoes" />
  </figure>

  <div className="card-body">
        <div className="author flex justify-around items-center">
          
          <img className='w-12 rounded-full' src={blog.author_img} alt="" />
          <h3>{blog.author}</h3>
          <button onClick={() =>handleBookMark(blog)}> <FaBookmark  size={22}/></button>
         
        </div>
    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
     <div className="flex">
       {blog.hashtags.map((has) => <p key={has}> {has}</p>)}
     </div>
    <div className="card-actions justify-end">
      <button onClick={()=>handleMarkAsRead(blog.reading_time,blog.id)} className="btn btn-primary">Mark as read</button>
    </div>
  </div>
</div>

      </div>
   );
};

export default Blog;