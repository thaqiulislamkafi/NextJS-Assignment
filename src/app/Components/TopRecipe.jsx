'use client'
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axiosSecure from './Hooks/useAxios';
import Link from 'next/link';
import Loading from './SharedElement/Loading';

// Author : Thaqi Ul Islam Kafi
// Description : Loading top recipes of RecipeHut
// Date : 2025 - 08 - 22

const TopRecipe = () => {

    const { data: topRecipes = [], isLoading } = useQuery({
        queryKey: ['toprecipes'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/topRecipes');
            return data;
        }
    })

    if (!topRecipes || isLoading) return <Loading />

    return (
        <div className='w-[85.94vw] mx-auto my-30'>

            <p className='text-3xl lg:text-4xl text-gray-800 my-2 text-center font-extrabold'>Top Recipe</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 dark:bg-gray-800 bg-white'>
                {
                    topRecipes.map(recipe => (
                        <div key={recipe._id}>
                            <div className=" bg-base-100 shadow-sm p-4 gap-4  flex flex-col dark:bg-gray-700 dark:text-gray-200 rounded-xl">
                                <div className='w-full h-50 md:h-56 '>
                                    <img className='rounded-xl w-full h-50 md:h-50 ' src={recipe.photoURL} />
                                </div>
                                <div className="flex flex-col gap-5 ">
                                    <div className='sora-font space-y-2 text-xs md:text-sm'>

                                        <div className='flex gap-2 items-center'>
                                            {
                                                recipe.categories.map((category, index) => <p key={index} className='text-[#176AE5] text-[10px] px-2 py-1 bg-[#1769e51c] rounded-2xl dark:text-white'># {category}</p>)
                                            }
                                        </div>

                                        <p className='text-lg text-gray-800 dark:text-gray-200 font-bold'> Name : {recipe.title}</p>
                                        <p> Ingredients : {recipe.ingredients}</p>
                                        <p> Cuisine Type : {recipe.cuisineType}</p>
                                        <p> Total Likes : {recipe.likes}</p>
                                    </div>
                                    <div>
                                        <Link href={`/AllRecipe/${recipe._id}`}>

                                            <button className='btn btn-sm text-xs rounded-xl '>View more</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    );
};

export default TopRecipe;