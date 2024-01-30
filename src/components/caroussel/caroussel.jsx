import React,{useState} from "react";
import Data from '../../datas/data'
import '../../style/components/caroussel.css'
import left from '../../assets/left.png'
import right from '../../assets/right.png'
import { useParams } from "react-router-dom";


export default function Caroussel() {
  const { id } = useParams();
  const { pictures } = Data.find((a) => a.id === id);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => setSlide((slide + 1) % pictures.length);
  const prevSlide = () => setSlide((slide + pictures.length - 1) % pictures.length);

  const currentImage = pictures[slide];

  return (
    <section>
      <div className="slide">
        <img className="slide__left" src={left} alt="flèche gauche" onClick={prevSlide} />
        <img className="slide__right" src={right} alt="flèche droite" onClick={nextSlide} />
        <div>
          <img src={currentImage} alt="Photos du logement" className="slide__image" />
          <strong className="slide__number">{slide + 1}/{pictures.length}</strong>
        </div>
      </div>
    </section>
  );
}
