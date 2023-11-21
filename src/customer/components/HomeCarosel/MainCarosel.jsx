import React from 'react'
import { mainCarouselData } from './MainCaroselData'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarosel = () => {

    const items = mainCarouselData.map((item) => <img className='cursor-pointer'
    role='presentation' src={item.image} alt='' class="rounded-md" />)
  return (
    <div className='md:container md:mx-auto'>
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
    />
    </div>

  )
}

export default MainCarosel
