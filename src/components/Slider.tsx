import CardImage from './card/CardImage'
import {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faArrowAltCircleRight,
  faArrowAltCircleLeft
 } from '@fortawesome/free-regular-svg-icons'

import oslo from '../assets/img/oslo.png'
import bergen from '../assets/img/bergen.jpg'
import trondheim from '../assets/img/trondheim.jpg'
import tromso from '../assets/img/tromso.jpg'
import geirangerfjord from '../assets/img/geirangerfjord.jpg'

interface Slide {
  img: string,
  title: string
}

const Slider: React.FC = props => {
  const [sliders, setSliders] = useState([{img: oslo, title: "Oslo"}, 
                                          {img: bergen, title: "Bergen"}, 
                                          {img: trondheim, title: "Trondheim"}, 
                                          {img: tromso, title: "Tromso"}, 
                                          {img: geirangerfjord, title: "Geirangerfjord"}])
  let counter = 0;

  const handleSlide = (isForward: boolean) => {
    const sliders: any = document.querySelectorAll(".card-slider");

    if(isForward  && counter < sliders.length - 3) {
      counter++;
      sliders.forEach((slider: any) => slider.style.transform = `translateX(${counter * (-slider.clientWidth - 30)}px)`);
    }
    else if(!isForward && counter > 0) {
      counter--;
      sliders.forEach((slider: any) => slider.style.transform = `translateX(${counter * (-slider.clientWidth - 30)}px)`);
    }

  }

  return (
  <section id="slider">
    <button className="btn-slide" onClick={() => handleSlide(false)}><FontAwesomeIcon icon={faArrowAltCircleLeft} width={'24px'} height={'24px'}/></button>
    <div className="container-slider">
        {sliders.map((slide: Slide, index: number) => {
            return (
                <CardImage 
                key={index}
                data={slide}/>
            )
          })}
    </div>
    <button className="btn-slide" onClick={() => handleSlide(true)}><FontAwesomeIcon icon={faArrowAltCircleRight} width={'24px'} height={'24px'}/></button>
  </section>
  )
}

export default Slider;