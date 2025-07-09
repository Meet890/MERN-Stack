import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Movie() {
    let [shows, setShows] = useState([])
    useEffect(() => {
        axios.get(" https://api.tvmaze.com/search/shows?q=girls")
            .then((response) => {
                setShows(response.data)
            }).catch((error) => {
                console.log(error)
            })

        return () => {
            console.log("cleanup running")
        }
    }, [])
    return (
        <>
            <div className='min-h screen bg-gray-100 py-10 px-4'>
                <h2 className='text-3xl font-bold text-center text-blue-700 mb-8'>
                    tv shows: Girls
                </h2>
                <div className='grid grid-cols-6 gap-2 max-w-7xl mx-auto'>
                    {
                        shows.map(item => (
                            <div
                                key={item.show.id}
                                className='bg-white rounded-md transition duration-300 w-full'>
                                {
                                    item.show.image && (
                                        <img
                                            src={item.show.image.medium}
                                            className='w-full h-82 object-cover'
                                        />
                                    )
                                }
                                <div className='p-3'>
                                    <h3 className='text-base font-semibold text-gray-800'>
                                        {item.show.name}
                                    </h3>
                                    {item.show.language && (
                                        <p className='text-sm text-gray-600'>
                                            language: {item.show.language}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Movie