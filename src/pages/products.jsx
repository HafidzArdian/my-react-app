import Button from "../components/Elements/Button/Index";
import Cardproduct from "../components/Fragments/Cardproduct";
import React, { Fragment } from "react";

const products = [
  {
    id: 1,
    name: "Sepatu baru",
    price: "Rp 1.000.000",
    image: "/image/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        modi officiis laboriosam blanditiis laborum exercitationem non rem
        odit, nihil consequuntur a dolor quasi quidem. Aliquid non libero id
        unde laboriosam.`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp 1.500.000",
    image: "/image/shoes-1.jpg",
    description: `um dolor sit amet consectetur adipisicing elit. Praesentium
        modi officiis .`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <Fragment>
      <div className="flex justify-end bg-blue-600 text-white items-center px-10">
        {email}
        <Button className=" ml-5 bg-black" onClick={handleLogOut}>
          Log Out
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <Cardproduct key={product.id}>
            <Cardproduct.Header image={product.image} />
            <Cardproduct.Body title={product.name}>
              {product.description}
            </Cardproduct.Body>
            <Cardproduct.Footer price={product.price} />
          </Cardproduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsPage;
