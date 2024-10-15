import { useState } from "react";
import useProductStore from "../store/useProductStore";

const Categories = () => {
    const { categories, categoryHandle } = useProductStore();


    if (!categories || categories.length === 0) {
        return <p>No categories available</p>;
    }
    const categoryHandler = (category) => {

        categoryHandle(category.categoryName)
    }
    return (
        <div >
            <div className="flex justify-center flex-wrap  lg:flex-nowrap ">
                {
                    categories.map((category) => (
                        <button key={Math.random()} // use category name as the key if unique
                            onClick={() => {
                                categoryHandler(category)



                            }}
                            className={`border border-black mx-3 uppercase w-48 text-center text-sm py-2 mb-2 
                                   lg:py-2 rounded-lg lg:font-semibold transition duration-300 ease-in-out
                                    ${category.isActive === true ? 'bg-black text-white' : 'text-gray-600'}`}
                        >
                            {category.categoryName}
                        </button>


                    ))


                }
            </div>

        </div>
    );
};

export default Categories;
