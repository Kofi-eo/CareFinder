import { useEffect } from "react";
import { mapsContext } from "@/Context/googleMapsContext";
import { useContext, useState } from "react";

function Layout({ children }) {
  // const [userCoordinates,setUserCoordinates] = useState({lat:'', lng: ''})
  const {getHospitalsNearBy, getPharmaciesNearBy, setGeoError, setUserCoordinates, userCoordinates} = useContext(mapsContext)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log('SUCCESS')
        setUserCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        console.log(position.coords)
        
        getHospitalsNearBy(position.coords.latitude, position.coords.longitude)
        getPharmaciesNearBy(position.coords.latitude, position.coords.longitude)
      }, (err) => {
        if (err.code == 1) {
          setGeoError({status: true, message: 'User Denied Permission To Get Location'})
        } else {
          setGeoError({status: true, message: err.message})
        }
      });

    } else {
      setGeoError({status: true, message: 'Geo location is not supported by this browser'})
      alert("Geolocation is not supported by this browser.");
    }
  },[])

  return (
    <>
     
        <main>{children}</main>
     
    </>
  );
}

export default Layout;
