import { useState, useEffect } from "react";
// import getOneProduct from "../services/getOneProduct";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    console.log("item", item);
    const { id } = useParams();
    console.log(id);

    // const id = 1;
    const getOneProduct = (id) => {
        fetch("../JSON/DataList.json")
            .then((response) => response.json())
            .then((data) =>
                setItem(data.filter((item) => item.id === parseInt(id))[0])
            );
    };

    useEffect(() => {
        getOneProduct(id);
    }, [id]);

    // useEffect(() => {
    //     getOneProduct
    //         .then((res) => setItem(res))
    //         .catch((err) => alert("Ha ocurrido un error", err));
    // }, []);

    return (
        <div>
            <h1>ACA VA EL ITEMDETAILCONTAINER</h1>
            {item.length !== 0 ? (
                <ItemDetail item={item} />
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};
export default ItemDetailContainer;
