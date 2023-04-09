import Auth from "./Authentication/Auth";
import HomePageHeader from "./HomePage/HomePageHeader";

function Layout({ children }) {
  return (
    <>
      <Auth />
      <HomePageHeader />
      <main>{children}</main>
    </>
  );
}

export default Layout;
