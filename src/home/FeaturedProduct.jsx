import React from 'react'
import { cases } from '../data/cases'
import { watches } from '../data/watches'
import { phones } from '../data/phones'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const FeaturedProduct = () => {
    return (
        <section className="text-gray-600 body-font bg-[#F3F4F6]">
            <div className="container px-5 py-10 mx-auto text-center">

                {/* Section Heading */}
                <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 md:text-5xl lg:text-6xl py-10">
                    Featured Products
                </h1>
                {/* Product 1 Phones */}
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-10 mx-auto">

                        <div className="flex flex-wrap -m-4">
                            {phones.slice(0, 4).map((x) => (
                                <ProductCard key={x._id} product={x} />
                            ))}
                        </div>
                        <div className="mt-10 text-center">
                            <Link
                                to="/phones"
                                className="inline-flex items-center text-indigo-500 font-medium"
                            >
                                View All Phones
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
                {/* Product 2 Phones Cases */}
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-10 mx-auto">

                        <div className="flex flex-wrap -m-4">
                            {cases.slice(0, 4).map((x) => (
                                <ProductCard key={x.id} product={x} />
                            ))}

                        </div>
                        <div className="mt-10 text-center">
                            <Link
                                to="/cases"
                                className="inline-flex items-center text-indigo-500 font-medium"
                            >
                                View All Cases
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </section>
                {/* Product 3 Watches */}
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-10 mx-auto">

                        <div className="flex flex-wrap -m-4">
                            {watches.slice(0, 4).map((x) => (
                                <ProductCard key={x.id} product={x} />
                            ))}

                        </div>
                        <div className="mt-10 text-center">
                            <Link
                                to="/watches"
                                className="inline-flex items-center text-indigo-500 font-medium"
                            >
                                View All Watches
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </section>


            </div>
        </section>
    )
}

export default FeaturedProduct
