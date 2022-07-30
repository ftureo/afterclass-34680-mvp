import ItemCount from "./ItemCount";
const ItemDetail = ({ item }) => {
    console.log("El item", item);
    return (
        <div className="flex bg-danger">
            <h3>ItemDetail</h3>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <img src={`${item.image}`} alt={`${item.image}`}></img>

            <ItemCount stock={5} initial={1} />
        </div>
    );
};
export default ItemDetail;
