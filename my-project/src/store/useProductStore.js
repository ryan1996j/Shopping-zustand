import { create } from "zustand";
import axios from 'axios';

const useProductStore = create((set) => ({
    products: [],
    categories: [
        {
            categoryName: 'ALL',
            isActive: true
        }
    ],

    // Fetch products and categories
    fetching: async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            const data = await response.data;
            set({ products: data });

            const categoriesResponse = await axios.get("https://fakestoreapi.com/products/categories");
            const categoriesData = await categoriesResponse.data;

            // Map categoriesData (array of strings) to match the category object structure
            const mappedCategories = categoriesData.map(category => ({
                categoryName: category.toUpperCase(),
                isActive: false
            }));

            set((prevState) => ({
                categories: [
                    ...prevState.categories, // Keep existing categories
                    ...mappedCategories // Add new categories from API
                ].filter((category, index, self) =>
                    index === self.findIndex(c => c.categoryName === category.categoryName) // Remove duplicates
                )
            }));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    },

    // Toggle category activation
    categoryHandle: (categoryName) => {
        set((prevState) => ({
            categories: prevState.categories.map((cat) =>
                cat.categoryName === categoryName
                    ? { ...cat, isActive: !cat.isActive } // Toggle isActive for the selected category
                    : { ...cat, isActive: false } // Optionally, deactivate all other categories
            )
        }));
    }
}));

export default useProductStore;
