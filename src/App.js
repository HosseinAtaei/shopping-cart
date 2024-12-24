import NotFound from "./Components/NotFound";
import Payment from "./Components/Payment";
import Products from "./Components/Products";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <div className="bg-zinc-300 flex items-center justify-evenly gap-20 text-xl h-10">
        <Link to="/">Products</Link>
        <Link to="/Payment">Payment</Link>
      </div>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
