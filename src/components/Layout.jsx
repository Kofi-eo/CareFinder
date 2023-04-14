import { useEffect } from "react";
import { mapsContext } from "@/Context/googleMapsContext";
import { useContext, useState } from "react";

function Layout({ children }) {
  const [coordinates,setCoordinates] = useState({lat:'', lng: ''})
  const {getHospitalsNearBy, getPharmaciesNearBy} = useContext(mapsContext)

  useEffect(() => {
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        console.log(position.coords)
        
        getHospitalsNearBy(position.coords.latitude, position.coords.longitude)
        getPharmaciesNearBy(position.coords.latitude, position.coords.longitude)
      });

    } else
      alert("Geolocation is not supported by this browser.");
  },[])

  return (
    <>
     
        <main>{children}</main>
     
    </>
  );
}

export default Layout;
