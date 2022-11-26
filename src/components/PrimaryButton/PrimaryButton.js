import React from 'react';

const PrimaryButton = ({children}) => {
    return (
		<button className="px-8 py-3 text-lg font-semibold rounded btn btn-primary bg-gradient-to-r from-primary to-info text-gray-900">
			{children}
		</button>
    );
};

export default PrimaryButton;