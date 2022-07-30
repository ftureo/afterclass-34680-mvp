import { useState, useEffect } from "react";
// import axios from "axios";
import ItemList from "./ItemList";
import getProducts from "../services/handMadePromise";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    console.log(products);
    const { category } = useParams();
    console.log(category);

    // Fetch - Then

    // const getProductsFetch = () => {
    //   fetch("../JSON/DataList.json")
    //     .then((response) => response.json())
    //     .then((data) => console.log("Respuesta Fetch: ", data));
    // };

    // Async - Await
    // const getProductsAA = async () => {
    //   const getData = await fetch("../JSON/DataList.json");
    //   const dataResponse = await getData.json();
    //   console.log("Respuesta de async/await", dataResponse);
    // };

    // Axios - Async / Await
    // const getProductsAxios = async () => {
    //   const getAxios = await axios.get("../JSON/DataList.json");
    //   const responseAxios = getAxios.data;
    //   console.log("Respuesta Axios: ", responseAxios);
    //   setProducts(responseAxios);
    // };

    // const getProductsAxios = async () => {
    //   const getAxios = await axios.get(
    //     "https://jsonplaceholder.typicode.com/users"
    //   );
    //   const responseAxios = getAxios.data;
    //   console.log(responseAxios);
    // };
    // useEffect(() => {
    //   setTimeout(() => getProductsFetch(), 3000);
    // }, []);

    // useEffect(() => {
    //   setTimeout(() => getProductsAA(), 2000);
    // }, []);

    // useEffect(() => {
    //   setTimeout(() => getProductsAxios(), 1000);
    // }, []);

    useEffect(() => {
        getProducts
            .then((res) => {
                if (category) {
                    setProducts(
                        res.filter((product) => product.categoria === category)
                    );
                } else {
                    setProducts(res);
                }
            })
            .catch((err) => alert("Ha ocurrido un error", err));
    }, [category]);

    return (
        <div className="container col-12 bg-warning">
            <h3>{greeting}</h3>
            {products.length !== 0 ? (
                <ItemList products={products} />
            ) : (
                <h1>Loading products...</h1>
            )}
        </div>
    );
};
export default ItemListContainer;
