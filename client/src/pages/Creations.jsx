import { useLoaderData } from "react-router-dom";

import ProductsLists from "../components/ProductsList";
import "../styles/Creations.css";


export default function Creations() {

  const products = useLoaderData();

    return (
      <main>
         <ProductsLists products={products} />
      </main>
    );
  }
  