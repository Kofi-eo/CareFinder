import { createContext, useState } from "react";

const mapsContext = createContext()

function MapsContextProvider({children}) {
    const [coordinates,setCoordinates] = useState({lat:'', lng: ''})
    const [errorPharm, setErrorPharm] = useState(false)
    const [errorHosp, setErrorHosp] = useState(false)
    const [nearByHosp, setNearByHosp] = useState([]) // state to store nearbyHospital data
    const [geoError, setGeoError]  = useState({status: false, message: ''})
    const [userCoordinates,setUserCoordinates] = useState({lat:'', lng: ''})
    const [nearByPharm, setNearByPharm] = useState([]) // state to store nearbyHospital data
    
    // function to get Nearby Hospitals based on user location
    async function getHospitalsNearBy(lat, log) {
        console.log('getting Hospitals')
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${log}&radius=10000&type=hospital&key=AIzaSyARdyiVgmpt9uzYygnCgPohTvEOW1FJGnU`)
            const jsonData = await response.json()

            setNearByHosp(jsonData.results)
            console.log(jsonData)
    
        } catch(error) {
            console.log(error)
            setErrorHosp(true)
        }
    
      }
    // function to get Nearby Pharmacies based on user location
      async function getPharmaciesNearBy(lat, log) {
        console.log('getting Pharmacies')
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${log}&radius=10000&type=pharmacy&key=AIzaSyARdyiVgmpt9uzYygnCgPohTvEOW1FJGnU`)
            const jsonData = await response.json()

            setNearByPharm(jsonData.results)
            console.log(jsonData)
    
        } catch(error) {
            console.log(error)
            setErrorPharm(true)
        }    
      }

      return (
        <mapsContext.Provider value={{nearByHosp, nearByPharm, errorHosp, errorPharm, getHospitalsNearBy, getPharmaciesNearBy, geoError, setGeoError, userCoordinates, setUserCoordinates}}>
            {children}
        </mapsContext.Provider>
      )
}

export {MapsContextProvider, mapsContext}