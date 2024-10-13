import CardSection from "../components/CardSection"
import Categories from "../components/Categories"
// import Header from "../components/Header"
// import useProductStore from "../store/useProductStore"
import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        // Scroll to the top of the page when this component is rendered
        window.scrollTo(0, 0);
    }, []);



    return (
        < div className="mt-20" >
            <Categories />
            <CardSection />

            {/* <button  >click</button>
            <p>{products.length}</p>


            <div>
                {categories.map((item) => (
                    <p key={item.id}>{item}</p>
                ))}

                {products.map((item) => (
                    <p key={item.id}>{item.title}</p>
                ))}
            </div> */}

        </div >


    )
}

export default Home
