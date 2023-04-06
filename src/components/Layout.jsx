import HomePageHeader from "./HomePage/HomePageHeader";

function Layout({ children }) {
  return (
    <>
      <HomePageHeader />
      <main>{children}</main>
    </>
  );
}

export default Layout;
