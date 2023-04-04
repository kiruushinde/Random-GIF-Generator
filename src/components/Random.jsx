
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Random = () => {

    // al the below code we have written in useGif hooks, so call it
    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false);

    // // we access gif using api call

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    //     const { data } = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     console.log(imageSource);
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])


    const { gif, loading, fetchData } = useGif();

    return (
        <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

            <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>A Random Gif</h1>

            {
                loading ? (<Spinner />) : <img src={gif} alt="" width="450" />
            }


            <button onClick={() => fetchData()}
                className='w-10/12 bg-yellow-400 text-xl py-2 rounded-lg mb-[20px] font-medium hover:bg-yellow-500'
            >Generate</button>
        </div>
    )
}

export default Random