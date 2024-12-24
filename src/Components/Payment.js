import React from "react";
import { useDispatch, useSelector } from "react-redux"; // بررسی کنید که این خط به درستی نوشته شده باشد
import Counter from "../Components/Counter";
import { deleteProduct } from "../redux/productsSlice";

const Payment = () => {
  const selectedProducts = useSelector((state) => state.payment.items);
  const dispatch = useDispatch();

  const totalAmount = selectedProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className="flex py-4 bg-gray-50 min-h-screen">
      <div className="w-64 bg-slate-200 shadow-lg mx-6 p-6 rounded-lg sticky top-4 h-44">
        <h2 className="text-2xl font-bold text-center">Total Amount</h2>
        <p className="text-xl font-semibold text-center text-green-500 mt-4">
          ${totalAmount.toFixed(2)}
        </p>
        <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg">
          Pay
        </button>
      </div>

      <div className="flex-col w-full px-6">
        {selectedProducts.length === 0 ? (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No products selected.
          </p>
        ) : (
          selectedProducts.map((product) => (
            <div
              key={product.id}
              className="flex my-6 p-4 bg-white shadow-lg rounded-lg"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-[200px] w-[200px] object-cover rounded-lg"
              />
              <div className="flex-col justify-between p-4 w-full">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-xl text-right font-bold mt-2 text-gray-700">
                  ${product.price}
                </p>
                <div className="flex gap-24 pt-10 pl-9">
                  <Counter />
                  <button
                    onClick={() => dispatch(deleteProduct(product))}
                    className="bg-red-500 hover:bg-red-400 rounded-lg px-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Payment;
