import React from 'react';

interface IProp {
	children: React.ReactNode;
}

const ServicesLayout = ({ children }: IProp) => {
	return <>{children}</>;
};

export default ServicesLayout;
