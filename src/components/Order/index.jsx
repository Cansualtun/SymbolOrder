import { useState } from "react";
import { motion } from "framer-motion";

const FastOrder = () => {
  const items = [
    { name: "Mango Tango Salad", price: 16 },
    { name: "Zesty Bliss Burger", price: 12 },
    { name: "SizzleMelt Sandwich", price: 20 },
  ];

  const [quantities, setQuantities] = useState(items.map(() => 2));

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const total = quantities.reduce(
    (sum, qty, index) => sum + qty * items[index].price,
    0
  );

  return (
    <motion.div
      className="max-w-sm mx-auto bg-gray-200 shadow-lg rounded-3xl p-8 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ border: "1px solid #E0E0E0" }}
    >
      <div className="bg-white rounded-3xl p-4 shadow-md">
        <div
          className="text-center py-3 shadow-md rounded-t-3xl"
          style={{
            background: "linear-gradient(to right, #333, #111)",
            color: "white",
            backgroundSize: "10px 10px",
          }}
        >
          <h2 className="text-xl font-semibold">Fast Order</h2>
        </div>
        <div className="space-y-4 border-solid p-2 border rounded-lg !bg-gray-100">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-1 rounded-md">
              <div className="flex flex-col space-y-2 p-4 rounded-lg shadow-sm border border-dashed border-gray-400 !bg-gray-100">
                <div>
                  <p className="font-semibold text-gray-700">{item.name}</p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total items</p>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg bg-white shadow-sm p-1">
                    <button
                      className="bg-black rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold text-white"
                      onClick={() => handleDecrement(index)}
                    >
                      -
                    </button>
                    <span className="text-sm">{quantities[index]}</span>
                    <button
                      className="bg-black rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold text-white"
                      onClick={() => handleIncrement(index)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500">Payment</p>
                  <div className="border w-[75px] p-1 bg-white rounded-lg">
                    <div className="bg-gray-100 rounded-lg">
                      <p className="font-semibold text-sm text-center text-gray-700 rounded-lg">
                        ${(quantities[index] * item.price).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center text-lg">
              <p className="font-semibold text-gray-600">Totals</p>
              <p className="font-bold text-green-600">${total.toFixed(2)}</p>
            </div>
            <motion.button
              className="w-full mt-4 py-2 bg-black text-white font-normal text-lg rounded-md hover:bg-gray-800 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Payment now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FastOrder;
