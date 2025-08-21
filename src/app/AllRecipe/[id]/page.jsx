'use client'
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import axiosSecure from '@/app/Components/Hooks/useAxios';
import Loading from '@/app/Components/SharedElement/Loading';


const AllRecipeDetails = ({params}) => {

    const  recipeId  = params.id ;

    const { data: recipeData, isLoading } = useQuery({
        queryKey: ['recipeDetails', recipeId],
        queryFn: async () => {
            const { data } = await axiosSecure(`/recipes/${recipeId}`);
            return data;
        },
        enabled: !!recipeId
    })

   
    if (isLoading) return <Loading />

    return (
        <div>
            <div>
                <div>
                    <div className='w-[85.94vw] mx-auto sora-font my-12'>

                        {/* ..............Title Bar.............. */}

                        <div className='bg-gray-100 text-center py-16 rounded-xl px-4 lg:px-16 dark:bg-gray-700'>
                            <p className='text-3xl md:text-4xl my-3 poppins font-bold'>Recipe Details</p>
                            <p className='text-gray-800 my-2 text-xs md:text-sm dark:text-gray-200'>Explore everything you need to know about this exciting Recipe! Get the full details on dates, venue, featured performers, and schedules. You can like a recipe multiple times as your wish which is count as a rating of a recipe.</p>
                        </div>

                        {/* ..............Recipe Bar.............. */}

                        <div className='my-10 p-5 md:p-7 border-2 border-gray-200 rounded-xl flex flex-col md:flex-row md:items-center gap-8 font-medium'>
                            <div className='bg-gray-200 md:p-6 rounded-xl lg:w-[29.13vw] h-auto'><img className='rounded-xl h-60 w-full' src={recipeData?.photoURL} alt="" /></div>

                            <div className='text text-gray-700 dark:text-gray-200'>

                                <div className='flex items-center gap-3'>
                                    {
                                        recipeData.categories.map((category,index) => <p key={index} className='text-[#176AE5] text-xs px-3 py-2 bg-[#1769e51c] rounded-2xl w-fit my-2 dark:text-gray-200'># {category} </p>)
                                    }
                                </div>

                                <p className='poppins my-2 text-2xl lg:text-3xl font-bold'>{recipeData.title}</p>
                                <p className='flex flex-col gap-2 my-2 lg:text-lg'>
                                    <span>Ingredients : {recipeData.ingredients}</span>
                                    <span>Preparation Time : {recipeData.prepTime
                                    }</span>
                                </p>

                                <p className='font-medium my-2'>Cuisine Type : <span className='text-[#23BE0A] font-bold'>{recipeData.cuisineType}</span></p>
                                <p className='font-medium my-2'>Instructions : <span className='text-[#23BE0A] font-bold'>{recipeData.instructions}</span></p>

                               


                            </div>
                        </div>

                        {/* ..............Event Details Bar.............. */}
                        {/* 
                    <div className='border-2 border-gray-200 rounded-xl p-7 text-center my-20 mb-40'>
                        <p className='poppins text-2xl my-3 font-bold'>Details</p>
                        <div className='border-t-2 border-dashed border-gray-200 my-4'></div>
                        <div className='text-start'>
                            <p className='font-medium'>{recipeData.details}</p>

                        </div>
                        <div className='border-t-2  border-gray-100 my-4'></div>


                    </div>
                     */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllRecipeDetails;