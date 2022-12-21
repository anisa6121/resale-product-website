import React from 'react';
import { Link } from 'react-router-dom';


import hero from '../../../assets/hero.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
		<div className="bg-white-800 text-black-100 mb-5">
			<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
				<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
					<h1 className="text-4xl font-bold leading-none sm:text-4xl">
						The Fastest Product Delivery
						<span className="m-2  text-sky-400">
							in Your City
						</span>
					</h1>

					<p className="mt-6 mb-8 text-2xl sm:mb-12">
						Buy our Products for Good quality And
						fast delivery. It
					</p>

					<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
						
						<PrimaryButton>
							Get Started
						</PrimaryButton>
					</div>
				</div>

				<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
					<img
						src={hero}
						alt=""
						className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
					/>
				</div>
			</div>
		</div>
    );
};

export default Banner;