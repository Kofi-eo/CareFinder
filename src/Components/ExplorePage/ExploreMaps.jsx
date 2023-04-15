// import { GoogleMap, Marker } from "@googlemaps/react-wrapper"
import { useEffect, useMemo, useRef, useState } from "react";
import { useLoadScript, GoogleMap, MarkerF, CircleF } from '@react-google-maps/api'
import ExploreStyles from '@/styles/ExplorePage.module.css'
import axios from "axios";

export default function ExploreMaps() {
    // const [coordinates,setCoordinates] = useState({latitude: '', longitude: ''})
    // const [map, setMap] = useState(null);
    // const [nearByData, setNearByData] = useState([])
    // const [gottenNearData, setGottenNearData] = useState(false)
    // const [markers, setMarkers] = useState([]);

    // const zoom = 10;
    
    // const ref = useRef();

    const libraries = useMemo(() => ['places'], []);
    const mapCenter = useMemo(
        () => ({ lat: 6.5670809, lng: 3.3314182 }),
        []
    );
    
    const mapOptions = useMemo (
        () => ({
          disableDefaultUI: true,
          clickableIcons: true,
          scrollwheel: false,
        }),
        []
    );
    

    const { isLoaded } = useLoadScript({
            googleMapsApiKey: 'AIzaSyARdyiVgmpt9uzYygnCgPohTvEOW1FJGnU',
            libraries: libraries
    });

    if (!isLoaded) {
        return <p>Loading...</p>;
    }
    
    // useEffect(() => {
    //     console.log(ref.current)
    //     new window.google.maps.Map(ref.current, {
    //         center,
    //         zoom,
    //     });

    //     new google.maps.Marker({
    //         position: {
    //           lat: -33.86882,
    //           lng: 151.20929,
    //         },
    //         map,
    //       });
    // });

    // useEffect(() => {
    //     if (window.google) {
    //       const mapOptions = {
    //         center: { lat: 37.7749, lng: -122.4194 },
    //         zoom: 12,
    //       };
    //       const map = new window.google.maps.Map(
    //         document.getElementById("map"),
    //         mapOptions
    //       );
    //       setMap(map);
    //     }
    //   }, []);
    




    return (
        <div className={ExploreStyles.map_container} >
             {/* <div >Map Script Loaded...</div> */}
            <GoogleMap
                options={mapOptions}
                zoom={12}
                center={mapCenter}
                mapTypeId={google.maps.MapTypeId.ROADMAP}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                onLoad={() => console.log('Map Component Loaded...')}
            >
                <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
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
