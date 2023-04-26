import { useEffect } from "react";
import { mapsContext } from "@/Context/googleMapsContext";
import { useContext, useState } from "react";

function Layout({ children }) {
  const {getHospitalsNearBy, getPharmaciesNearBy, setGeoError, setUserCoordinates, userCoordinates} = useContext(mapsContext)

  // using the navigator.geolocation to get users current Location.
  useEffect(() => {
    if (navigator.geolocation) { // check if user browser supports navigator.geolocation
      navigator.geolocation.getCurrentPosition((position) => {
        setUserCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        console.log(position.coords)
        
        getHospitalsNearBy(position.coords.latitude, position.coords.longitude) // getting Hospital nearby with user location
        getPharmaciesNearBy(position.coords.latitude, position.coords.longitude) // getting Pharmacy nearby with user location
      }, (err) => { // error occurs while getting user location
        if (err.code == 1) {
          setGeoError({status: true, message: 'User Denied Permission To Get Location'})
        } else {
          setGeoError({status: true, message: err.message})
        }
      });

    } else { // user browser dosen't support navigator.geolocation
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
