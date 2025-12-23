import React, { useState } from 'react'
import Card from './Card';

const Cards = ({courses,category}) => {

    const [likedCourses, setLikedCourses] = useState([])


    let arr = [];
    const getCourses = ()=>{
      if(category === "All"){
        Object.values(courses).forEach( (courseCategory)=>{
            courseCategory.forEach( (course) =>{
                arr.push(course);

            } )
        } )
        return arr

      }else{
            //  sirf specific category ka data array krunga 
            return courses[category]
      }
    }
   const allCourses = getCourses()
                
return (
  <div className="flex flex-wrap justify-center mb-4 gap-6">
    {courses && allCourses && allCourses.length > 0 ? (
      allCourses.map((elem) => (
        <Card
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
          course={elem}
          key={elem.id}
        />
      ))
    ) : (
      <p>Not Found</p>
    )}
  </div>
);
}

export default Cards
