import React from 'react';
import { FcShipped } from "react-icons/fc";
import { HiOutlineShoppingBag, HiOutlineRefresh } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
const Section = () => {
    return (
		<section className=" m-7 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-12 ">
			<div className="relative">
				<div className="relative">
					<div className=" rounded-full text-white">
						<FcShipped className="text-4xl"></FcShipped>
					</div>
					<h6 className="mb-2 text-amber-500  font-semibold leading-5">
						Free Shipping
					</h6>
					<p className="text-sm text-gray-900">
						order over $100
					</p>
				</div>
			</div>

			<div className="relative">
				<div className="relative">
					<div className=" rounded-full text-white">
						<HiOutlineShoppingBag className="text-green-500 text-4xl"></HiOutlineShoppingBag>
					</div>
					<h6 className="mb-2 text-amber-500  font-semibold leading-5">
						Secure Payment
					</h6>
					<p className="text-sm text-gray-900">
						100 secure payment
					</p>
				</div>
			</div>

			<div className="relative">
				<div className="relative">
					<div className=" rounded-full text-white">
						<HiOutlineRefresh className="text-green-500 text-4xl"></HiOutlineRefresh>
					</div>
					<h6 className="mb-2 text-amber-500  font-semibold leading-5">
						Easy Returns
					</h6>
					<p className="text-sm text-gray-900">
						10 Days Returns
					</p>
				</div>
			</div>

			<div className="relative">
				<div className="relative">
					<div className=" rounded-full text-white">
						
						<BiSupport className="text-green-500 text-4xl"></BiSupport>
					</div>
					<h6 className="mb-2 text-amber-500  font-semibold leading-5">
						24/7 Support
					</h6>
					<p className="text-sm text-gray-900">
					Call Us Anytime
					</p>
				</div>
			</div>
		</section>
    );
};

export default Section;