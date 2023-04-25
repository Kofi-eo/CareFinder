import Layout from '@/components/Layout';
import '@/styles/globals.css';
import '@/styles/style.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MapsContextProvider } from '@/Context/googleMapsContext';
import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';

const Auth = createContext();

export default function App({ Component, pageProps }) {
	const [signedIn, setSignedIn] = useState(false);
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		onAuthStateChanged(auth, async (user) => {
			if (user) {
				setUser(user);
			}
			setLoading(false);
			setSignedIn(!!user);
		});
	}, []);

	return (
		<Auth.Provider
			value={{ user, signedIn, loading, setSignedIn, setUser, setLoading }}
		>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<MapsContextProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</MapsContextProvider>
			</LocalizationProvider>
		</Auth.Provider>
	);
}

export const useAuth = () => {
	return useContext(Auth);
};
