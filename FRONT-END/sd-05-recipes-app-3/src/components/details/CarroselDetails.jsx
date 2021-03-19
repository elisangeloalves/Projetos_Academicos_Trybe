import React, { useEffect, useState } from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
// import '../../css/details.css';
import { allDrinksList } from '../../service/apis';

function CarroselDetails() {
  const [recomendado, setRecomendado] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(recomendado.length);
  /* const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }; */
  useEffect(() => {
    setIsLoading(true);
    allDrinksList()
      .then((resp) => setRecomendado(resp.drinks.slice(0, 6)))
      .catch((error) => alert('Algo inesperado aconteceu:', error));
    if (recomendado) setIsLoading(false);
  }, [isLoading]);
  //
  return (
    <div className="recomendadas">
      <h3>Recommended</h3>
      <div className="carroussel">
        {/* <Slider {...settings}> */}
        {!isLoading &&
          recomendado.map((recomendations, index) => (
            <div
              key={recomendations.idDrink}
              data-testid={`${index}-recomendation-card`}
              className={'carroussel-card'}
            >
              <h3 data-testid={`${index}-recomendation-title`}>{recomendations.strDrink}</h3>
              <img
                data-testid={`${index}-card-img`}
                alt="drink"
                src={recomendations.strDrinkThumb}
              />
            </div>
          ))}
        {/* </Slider> */}
      </div>
    </div>
  );
}

export default CarroselDetails;
