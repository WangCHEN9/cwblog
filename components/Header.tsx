import React, { useEffect, useState }from 'react'
import Link from 'next/link'

import {
    getCategories
} from '../services'


const Header = () => {
    const [categories, setCategoies] = useState([])

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategoies(newCategories))
    ,[]})

    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block board-blue-400 py-8'>
                <div className='md:float-left block'>
                    <Link href='/' passHref>
                        <span className='cursor-pointer font-bold text-3xl text-white'>
                            CHEN Wang
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={'/category/${category.slug}'} passHref>
                            <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer transition duration-200 hover:text-pink-600'>{category.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Header
