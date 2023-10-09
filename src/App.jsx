import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SingleProduct from "./Components/SingleProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    axios(
      `https://dummyjson.com/products?limit=10&skip=${(pageNo - 1) * 10}`
    ).then((res) => {
      setProducts(res.data.products);
      setTotal(res.data.total);
    });
  }, [pageNo]);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Meena Bazar</h1>
      <div className="prdcts">
        {products.map((prod, ind) => {
          return (
            <SingleProduct
              key={`${ind}${prod.title}`}
              img={prod.images[0]}
              title={prod.title}
              description={prod.description}
              price={prod.price}
            />
          );
        })}
      </div>
      <div className="pages">
        <span
          className="kk"
          style={{ fontSize: "25px" }}
          onClick={() => {
            if (pageNo > 1) {
              setPageNo((prev) => prev - 1);
            }
          }}
        >
          ⬅️
        </span>
        {[...Array(total / 10)].map((_, i) => {
          return (
            <span
              className="kk"
              style={{ fontSize: "25px" }}
              key={i + 1000}
              onClick={() => {
                setPageNo(i + 1);
              }}
            >
              {i + 1}
            </span>
          );
        })}
        <span
          className="kk"
          style={{ fontSize: "25px" }}
          onClick={() => {
            if (pageNo < 10) {
              setPageNo((prev) => prev - 1);
            }
          }}
        >
          ➡️
        </span>
      </div>
    </>
  );
}

export default App;
