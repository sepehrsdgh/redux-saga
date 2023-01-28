import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const data = useSelector((state) => state.data.items);
  const error = useSelector((state) => state.data.error);
  console.log(error);
  console.log(data);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
      <div>{data}</div>
      <div>{error}</div>
    </Layout>
  );
}

export default App;
