import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

function HomeSectionCorousel() {
  const responsive = {
    0: { items: 1 },
    720: { items: 4 },
    1024: { items: 5 },
  };

  const items = [1, 1, 1, 1, 1, 1, 1, 1].map((item) => <HomeSectionCard key={item}/>);

  return (
    <div className="relative px-4 lg:px-8"> 
      <div className="relative px-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
        />
      </div>
    </div>
  );
}

export default HomeSectionCorousel;
