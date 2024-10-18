import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../common/ProductList";
import Pagination from "../common/Pagination";
import ApiService from "../../service/ApiService";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../../style/home.css';

const Home = () => {
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState(null);
    const itemsPerPage = 10;

    useEffect(()=> {
        const fetchProducts = async () => {
            try {
                let allProducts = [];
                const queryparams = new URLSearchParams(location.search);
                const searchItem = queryparams.get('search');

                if (searchItem) {
                    const response = await ApiService.searchProducts(searchItem);
                    allProducts = response.productList || [];
                } else {
                    const response = await ApiService.getAllProducts();
                    allProducts = response.productList || [];
                }

                setTotalPages(Math.ceil(allProducts.length/itemsPerPage));
                setProducts(allProducts.slice((currentPage -1) * itemsPerPage, currentPage * itemsPerPage));
            } catch(error) {
                setError(error.response?.data?.message || error.message || 'Unable to fetch products');
            }
        }

        fetchProducts();
    }, [location.search, currentPage]);

    return (
        <div className="home">
            <Carousel className="mb-4">
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="./slide1.jpg"
                        alt="First slide"
                    />
                   
                    <Carousel.Caption>
                    <b> 
                        </b>  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="./slide2.jpeg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                       <b> </b>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="./slide3.jpg"
                        alt="Third slide"
                    />
                   
                </Carousel.Item>
            </Carousel>

            {error ? (
                <p className="error-message">{error}</p>
            ) : (
                <div className="my-background">
                <ProductList products={products} />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
            
            )}
        </div>
    );
};

export default Home;
