import React, { createContext, useState } from 'react'
import axios from 'axios';
import { baseUrl } from '../../url';

// Create Context
export const AppContext = createContext();


const AppContextProvider = ({children}) => {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page,setPage] = useState(1);
  const [totalPages,setTotalPages] = useState(null);


  
  const fetchApi = async(page = 1) =>{
    setLoading(true);

    let url = `${baseUrl}?page=${page}`
    try {
      // const data = await response.json();
      // const response = await fetch(url);
      const {data}= await axios.get(url);
      console.log("data is coming");
      // console.log(data);
      setPage(data.page)
      setPosts(data.posts)
      setTotalPages(data.totalPages)

      
    } catch (error) {
      console.log("Error in fetching data",error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);  
  }

  function handlePageChange(){
    setPage(page);
    fetchApi(page);
  }

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchApi,
    handlePageChange
  }

  // step 2
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
