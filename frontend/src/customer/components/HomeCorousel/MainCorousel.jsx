import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCorouselData';

function MainCorousel() {
    const items = mainCarouselData.map( (item, index) => 
        <img key={index} className="cursor-pointer" src= {item.image} role="presentation" alt="" />
    );

  return (
    <div>
        <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
    </div>
  )
}

export default MainCorousel;