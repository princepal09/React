import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const{gif,loading,fetchData} = useGif();

  // const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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

  const btnHandler = () => {
    fetchData();
  };

  return (
    <div className="w-1/2 min-h-112.5 p-4 rounded-lg border flex flex-col items-center gap-y-5 mt-2.5 border-black bg-green-500">
      <h2 className="text-2xl underline uppercase font-bold ">A Random Gif</h2>

      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} width="300" loading="lazy" />
      )}

      <button
        onClick={btnHandler}
        className="px-5 cursor-pointer py-3 rounded-lg w-10/12 bg-yellow-500 text-lg text-black"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
