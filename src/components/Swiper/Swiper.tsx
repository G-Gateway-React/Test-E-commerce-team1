import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Img1 from "../../Assets/Rectangle 30.png";
import Img2 from "../../Assets/Rectangle 34.png";
import Img3 from "../../Assets/Rectangle 35.png";
import Img4 from "../../Assets/Rectangle 36.png";
import Img5 from "../../Assets/Rectangle 38.png";
import Img6 from "../../Assets/tops.png";
const Images = [Img1, Img2, Img3, Img4, Img5, Img6];
interface ImageProps {
  url: string;
}
export default function MySwiper({ url }: ImageProps) {
  const clone = [...Images];
  if (clone.indexOf(url) === -1) {
    clone.unshift(url);
  }
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  return (
    <>
      <Swiper
        style={{
          height: "80%",
          borderRadius: "10px",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {clone.map((item: any) => {
          return (
            <SwiperSlide>
              <img
                src={item}
                alt={""}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                }}
              ></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={4}
        slidesPerView={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        style={{
          boxSizing: "border-box",
          height: "20%",
          padding: "10px 0",
        }}
      >
        {clone.map((item) => {
          return (
            <SwiperSlide>
              <img
                src={item}
                alt={""}
                style={{
                  height: "80%",
                  width: "90%",
                  backgroundSize: "cover",
                  cursor: "pointer",
                }}
              ></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
