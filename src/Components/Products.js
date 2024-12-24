import Axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productsSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setProducts(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function add(product) {
    dispatch(addProduct(product));
    toast.success("Product added");
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="shadow-xl rounded-lg">
            <img
              src={product.image}
              alt={product.title}
              className="h-[350px] w-full"
            />
            <div className="p-4">
              <h2 className="text-lg">{product.title}</h2>
              <p className="text-xl text-right font-bold mt-2">
                ${product.price}
              </p>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={
                    // () => dispatch(addProduct(product))
                    () => add(product)
                  }
                  className="bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer limit={2} />
    </div>
  );
};

export default Products;
