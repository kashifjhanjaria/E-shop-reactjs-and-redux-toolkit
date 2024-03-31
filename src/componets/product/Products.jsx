import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCartReducer } from '../../Slices/cartSlice';
import { Link } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAllProduct = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const result = await response.json();
      setProducts(result);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const addtoCart = (id) => {
    const filtered = products.filter((item) => item.id === id);
    dispatch(addToCartReducer(filtered));
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center gap-1">
          {loading ? (
            <div>Loading...</div>
          ) : (
            products &&
            products.map((item) => (
              <Link
                onClick={(e) => e.stopPropagation()}
                to={`product/${item.id}`}
                className="lg:w-1/4 md:w-1/2 p-4 w-full bg-gray-200 rounded-lg"
                key={item.id}
              >
                <div className="">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={item.images[0]}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category.name}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                    <div className="flex justify-between items-center mt-5">
                      <p className="mt-1 text-[20px] font-semibold">$ {item.price}</p>
                      <button
                        className="bg-gray-500 hover:bg-gray-700 text-white py-1 px-2 rounded-lg"
                        onClick={(e) => {
                          e.preventDefault();
                          addtoCart(item.id);
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
