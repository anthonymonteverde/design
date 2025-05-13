import Contacts from "@/components/general/Contacts";
import Hero from "@/components/general/Hero";
import Map from "@/components/general/Map";
import Partners from "@/components/general/Partners";
import PhotoGallery from "@/components/general/PhotoGallery";
import Promotion from "@/components/general/Promotion";
import SearchListing from "@/components/general/SearchListing";
import Services from "@/components/general/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Promotion />
      <SearchListing />
      <Services />
      <Partners />
      <PhotoGallery />
      <Contacts />
      <Map />
    </>
  );
}
