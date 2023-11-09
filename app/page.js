import AboutUs from "./components/aboutUs";
import Banner from "./components/banner";
import Header from "./components/header";
import Services from "./components/services";
import TopHeader from "./components/topheader";

export default function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      <Banner />
      <AboutUs />
      <Services />
    </div>
  );
}
