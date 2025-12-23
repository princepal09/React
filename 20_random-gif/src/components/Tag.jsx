import React, {  useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {

  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState('')

  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //     const { data } = await axios.get(url);
  //     const imageSource = data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //   } catch (err) {
  //     console.log("Error Shows", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const{gif,fetchData,loading} = useGif(tag);
 
  const btnHandler = () => {
    fetchData(tag);
  };

  const changeHandler = (e)=>{
      setTag(e.target.value)
  }

  return (
    <div className="w-1/2 p-5 min-h-70 mb-4 rounded-lg border flex flex-col items-center gap-y-5 mt-2.5 border-black bg-blue-500">
      <h2 className="text-2xl underline uppercase font-bold ">A Random {tag} Gif</h2>

      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} width="300" loading="lazy" />
      )}

      <input onChange={changeHandler} className="w-10/12  py-3 rounded-lg  bg-white text-center text-lg text-black " value  = {tag} />

      <button
        onClick={btnHandler}
        className="px-5 cursor-pointer py-3 rounded-lg w-10/12 bg-yellow-500 text-lg text-black"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
