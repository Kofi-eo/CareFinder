import Head from "next/head"
import NavBar from "@/Components/HomePage/NavBar"
import Footer from "@/Components/HomePage/Footer"
import Filter from "@/Components/ExplorePage/Filter"
import ExploreStyles from '@/styles/ExplorePage.module.css'
import ExploreMaps from "@/Components/ExplorePage/ExploreMaps"
import ExploreHospital from "@/Components/ExplorePage/ExploreHospitals"
// import { Wrapper, Status } from "@googlemaps/react-wrapper"

// const render = (status) => {
//     if (status === Status.FAILURE) return <h3 style={{color: 'red'}}>An Error Occured</h3>;
//     return <h1>Loading...</h1>;
//   };
  
export default function Explore() {
    return (
        <>
            <Head>
            <title>Care Finder Explore</title>
            <meta
                name="description"
                content="Easily schedule appointments with expert medical specialists near you, at a time and place that suits you best."
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar returnBack={true}/>
            <div className={ExploreStyles.explorepage}>
                <Filter />
                <div className={ExploreStyles.hospitalmap_container}>
                    <ExploreHospital />
                    {/* <Wrapper apiKey={'AIzaSyARdyiVgmpt9uzYygnCgPohTvEOW1FJGnU'} render={render}> */}
                        <ExploreMaps />
                    {/* </Wrapper> */}
                </div>
            </div>
            <Footer />
        </>
    )
}