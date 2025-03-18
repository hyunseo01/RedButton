import ImageSlider from "@/components/slider/slider";
import SubImageSlider from "@/components/subslider/subslider";

import NS from "@/components/notice/NS";
import Pick from "@/components/pick/Pick";
import StoreSearch from "@/components/store/StoreSearch";

export default function Home() {
  //이거 홈
  return (
    <>
      <ImageSlider />
      <NS />
      <Pick />
      <SubImageSlider />
      <StoreSearch />
    </>
  );
}
