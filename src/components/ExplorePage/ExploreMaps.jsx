import { mapsContext } from '@/Context/googleMapsContext';
import ExploreStyles from '@/styles/ExplorePage.module.css';
import {
	GoogleMap,
	MarkerF,
	useLoadScript
} from '@react-google-maps/api';
import { useContext, useMemo, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';

export default function ExploreMaps() {
	const { nearByHosp, error, userCoordinates } = useContext(mapsContext);
	const libraries = useMemo(() => ['places'], []);
	const mapCenter =
		userCoordinates.lat === ''
			? { lat: 9.07636, lng: 7.397796 }
			: userCoordinates;


	const [markers, setMarkers] = useState([]);

	const mapOptions = useMemo(
		() => ({
			disableDefaultUI: true,
			clickableIcons: true,
			scrollwheel: false,
		}),
		[]
	);

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: 'AIzaSyARdyiVgmpt9uzYygnCgPohTvEOW1FJGnU',
		libraries: libraries,
	});

	console.log(nearByHosp);
	if (loadError) {
		return (
			<div className={ExploreStyles.error_container}>
				<p style={{ color: 'red', fontSize: '1.1em' }}>
					{' '}
					An Error Occured, reload page{' '}
				</p>
			</div>
		);
	} else if (!isLoaded) {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '32vw',
				}}
			>
				<LoadingSpinner />
			</div>
		);
	}

	return (
		<div className={ExploreStyles.map_container}>
			{nearByHosp.length > 0 && (
				<p
					style={{
						color: 'black',
						fontFamily: 'Trebuchet MS',
						fontStyle: 'italic',
						paddingBottom: '0.5em',
					}}
				>
					The Green Markers Indicate Hospitals Closet to You
				</p>
			)}
			<GoogleMap
				options={mapOptions}
				zoom={13}
				center={mapCenter}
				mapTypeId={google.maps.MapTypeId.ROADMAP}
				mapContainerStyle={{ width: '100%', height: '100%' }}
				onLoad={() => console.log('Map Component Loaded...')}
			>
				<MarkerF
					position={mapCenter}
					onLoad={() => console.log('Marker Loaded')}
				/>
				{nearByHosp.length > 0 &&
					nearByHosp.map((item, index) => (
						<MarkerF
							key={index}
							icon={`http://maps.google.com/mapfiles/ms/icons/green-dot.png`}
							position={item.geometry.location}
						/>
					))}
				{/* <CircleF
                    key={'AIzaSyARdyiVgmpt9uzYygnCgPohTvEOW1FJGnU'}
                    center={mapCenter}
                    radius={10000}
                    onLoad={() => console.log('Circle Load...')}
                    options={{
                        fillColor: 'green',
                        strokeColor: 'green',
                        strokeOpacity: 0.8,
                        clickableIcons: true,
                    }}
                /> */}
			</GoogleMap>
		</div>
	);
}
