// import { GoogleMap, Marker } from "@googlemaps/react-wrapper"
import { useEffect, useMemo, useRef, useState, useContext } from "react";
import { useLoadScript, GoogleMap, MarkerF, CircleF } from '@react-google-maps/api'
import ExploreStyles from '@/styles/ExplorePage.module.css'
import { mapsContext } from "@/Context/googleMapsContext";
import LoadingSpinner from "../LoadingSpinner";

export default function ExploreMaps() {

    const {nearByHosp, error, userCoordinates} = useContext(mapsContext);
    const libraries = useMemo(() => ['places'], []);
    const mapCenter = userCoordinates.lat === '' ? {lat: 9.07636, lng: 7.397796} : userCoordinates;

    // const mapCenter = useMemo(
    //     // () => ({ lat: 6.5670809, lng: 3.3314182 }),
    //     () => ({lat: 9.07636, lng: 7.397796}),
    //     []
    // );
    const [markers, setMarkers] = useState([]);
    

    const mapOptions = useMemo (
        () => ({
          disableDefaultUI: true,
          clickableIcons: true,
          scrollwheel: false,
        }),
        []
    );
        
    const { isLoaded, loadError } = useLoadScript({
            googleMapsApiKey: 'AIzaSyARdyiVgmpt9uzYygnCgPohTvEOW1FJGnU',
            libraries: libraries
    });


    console.log(nearByHosp)
    if (loadError) {
        return (
            <div className={ExploreStyles.error_container} >
                <p style={{color: 'red', fontSize: '1.1em'}}> An Error Occured, reload page </p>
            </div>
        )
    }

    else if (!isLoaded) {
        return <LoadingSpinner />
    }    

    return (
        <div className={ExploreStyles.map_container} >
            {nearByHosp.length > 0 && <p style={{color: 'red',fontFamily: 'Trebuchet MS', fontStyle: 'italic', paddingBottom: '0.5em'}}>The Red Markers Indicate Hospitals Closet to You</p>}
            <GoogleMap
                options={mapOptions}
                zoom={13}
                center={mapCenter}
                mapTypeId={google.maps.MapTypeId.ROADMAP}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                onLoad={() => console.log('Map Component Loaded...')}
            >
                <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
                {nearByHosp.length > 0 && nearByHosp.map(item => (
                    <MarkerF position={item.geometry.location}  />
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

            </ GoogleMap>
        </div>
    );
}

// async function getHospitalsNearBy(lat, log) {
//     // const response = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=hospital&key=AIzaSyARdyiVgmpt9uzYygnCgPohTvEOW1FJGnU', {
//     //     headers: new Headers ({     
//     //         // 'Access-Control-Allow-Origin': '*', 
//     //         'method': "GET", // *GET, POST, PUT, DELETE, etc.
//     //         'Accept': '*/*'
//     //     }) 
//     // })
//     console.log('getting NearBy')
//     try {
//         const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${log}&radius=10000&type=hospital&key=AIzaSyARdyiVgmpt9uzYygnCgPohTvEOW1FJGnU`)
//         const jsonData = await response.json()
//         setNearByData(jsonData.results)
//         setGottenNearData(true)

//         let location = []
//         let mapData = jsonData.results.map(item => location.push(item.geometry.location))
//         console.log(jsonData)

//     } catch(error) {
//         console.log(error)
//     }

// }

// const getLocation = async () => {

//     if (navigator.geolocation) {
//       // navigator.geolocation.getCurrentPosition(getCoordinates, handelLocationError);
//         // console.log(navigator.geolocation)
//       await navigator.geolocation.getCurrentPosition((position) => {
//         // console.log(position)
//         setCoordinates({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
        
//         getHospitalsNearBy(position.coords.latitude, position.coords.longitude)
//       });

//     } else
//       alert("Geolocation is not supported by this browser.");
//   }

// return (
//     <div style={{  width: '100%', height: '50vh'}}>
//         <button className="button" onClick={() => getLocation()}>Locate Me</button>
//             <div ref={ref} style={{overflow: 'visible'}}/>

//     </div>
// );
