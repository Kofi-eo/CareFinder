import Layout from '@/components/Layout';
import '@/styles/globals.css';
import '@/styles/style.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import AuthContext from "../Context/AuthContext";
import { MapsContextProvider } from '@/Context/googleMapsContext';
import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import { FilterProvider } from '@/Context/filterContext';

const Auth = createContext();

export default function App({ Component, pageProps }) {
	const [signedIn, setSignedIn] = useState(false);
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [appointmentHistory, setAppointmentHistory] = useState([]);

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
				<FilterProvider>
					<MapsContextProvider>
						<Layout>
							<Component
								{...pageProps}
								setAppointment={setAppointmentHistory}
								appointmentHistory={appointmentHistory}
							/>
						</Layout>
					</MapsContextProvider>
				</FilterProvider>
			</LocalizationProvider>
		</Auth.Provider>
	);
}

export const useAuth = () => {
	return useContext(Auth);
};
