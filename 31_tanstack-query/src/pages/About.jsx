import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchPosts } from '../services/operations/postApi'

const About = () => {

  const getPostData = async()  =>{
    try{
        const res = await fetchPosts();
       if(res){
        return res;
       }
    }catch(err){
      console.log(err);
      throw err;
    }
  } 

  
  const{data, isPending, isError} = useQuery({

    queryKey : ['posts'],
    queryFn : getPostData
  })

if(isPending){
    return <p>Loading....</p>
  }

  console.log(data);


  return (
    <div>
      About
    </div>
  )
}

export default About
