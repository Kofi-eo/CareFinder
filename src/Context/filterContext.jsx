import { createContext, useState } from 'react';

export const filterContext = createContext();

export const FilterProvider = ({ children }) => {
	const [filter, setFilter] = useState({ area: '', department: '', state: '' });

	return (
		<filterContext.Provider value={{ filter, setFilter }}>
			{children}
		</filterContext.Provider>
	);
};
