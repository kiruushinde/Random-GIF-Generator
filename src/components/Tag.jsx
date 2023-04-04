import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {

    const [tag, setTag] = useState('car');

    const { gif, loading, fetchData } = useGif(tag);

    return (
        <div className='w-1/2 h-full bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] mb-12'>

            <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>Random {tag} Gif</h1>

            {
                loading ? (<Spinner />) : <img src={gif} alt="" width="450" />
            }

            <input type="text"
                className='w-10/12 text-xl text-center py-2 rounded-lg mb-[3px] font-medium'
                onChange={(event) => setTag(event.target.value)}
                value={tag}
            />

            <button onClick={() => fetchData(tag)}
                className='w-10/12 bg-yellow-400 text-xl py-2 rounded-lg mb-[20px] font-medium hover:bg-yellow-500'
            >Generate</button>
        </div>
    )
}

export default Tag