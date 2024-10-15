import useProductStore from "../store/useProductStore"
import { useEffect } from "react";
import Card from "./Card";

const CardSection = () => {
    const { fetching, products, categories } = useProductStore();
    const currentCategory = categories.find((el) => el.isActive === true);





    useEffect(() => {
        fetching()
    }, [])
    return (
        <div className="flex justify-center grid grid-cols-1 lg:grid-cols-3  gap-3 w-full">
            {
                products.filter((el) => {

                    return currentCategory &&
                        (currentCategory.categoryName === "ALL" || el.category.toUpperCase() === currentCategory.categoryName);

                }





                )

                    .map((product) => (<Card key={product.id} product={product} />))

            }

        </div>
    )
}

export default CardSection
