import Cart from "./components/Cart";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route
                    path="/category/:category"
                    element={<ItemListContainer />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="*" element={<ItemListContainer />} />
            </Routes>
        </div>
    );
}

export default App;
