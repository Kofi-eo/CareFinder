import React, { createContext, useState } from 'react';
import { MedicalCentreData } from '@/data/medicalCentres';

export const filterContext = createContext();

export const FilterProvider = ({ children }) => {
	const [filter, setFilter] = useState({ area: '', department: '', state: '' });

	return (
		<filterContext.Provider value={{ filter, setFilter }}>
			{children}
		</filterContext.Provider>
	);
};
