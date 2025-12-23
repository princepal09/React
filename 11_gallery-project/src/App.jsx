import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import { LoaderCircle } from "lucide-react";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    console.log("data is coming ");
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    console.log("data finally arrived");
    console.log(response.data);
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printData =
    userData.length <= 0 ? (
      <div className="relative flex  justify-center mx-auto items-center text-white text-4xl">
        <h1 className="pr-16 ">Loading</h1>

        <LoaderCircle
          className="animate-spin absolute right-0 top-1/2 -translate-y-1/2"
          size={50}
        />
      </div>
    ) : (
      userData.map((elem, idx) => {
        console.log(elem.download_url);
        console.log(elem.author);
        return (
            <div key={idx}>
          <Card elem = {elem}/>
            </div>
        );
      })
    );

  return (
    <div className="h-screen overflow-auto w-full p-6 bg-black">
      <h1 className="text-white font-bold text-5xl bg-red-400 flex justify-center items-center w-12 h-14 rounded-full ">
        {index}
      </h1>

      <div className="flex p-10 gap-4 flex-wrap ">{printData}</div>

      <div className="flex text-black items-center justify-center p-2 gap-6">
        <button
          style={{opacity:index == 1 ? 0.5 : 1}}
          className="bg-yellow-500 active:scale-95  cursor-pointer px-5 rounded-md font-bold text-2xl py-3"
          onClick={() => {
            console.log("prev clicked");
            if (index <= 1) return;
            setIndex(index - 1);
          }}
          
        >
          Prev
        </button>
        <p className="text-white text-2xl">Page {index}</p>
        <button
          className="bg-yellow-500   cursor-pointer active:scale-95 px-5 rounded-md font-bold text-2xl py-3"
          onClick={() => {
            console.log("next clicked");
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
