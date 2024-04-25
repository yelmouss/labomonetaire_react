import React from "react";
import Slider from "react-slick";
import image1 from "./images/photo-analyse.jpg";
import image2 from "./images/photo-equip.jpg";
import image3 from "./images/photo-roulo.jpg";
import image4 from "./images/photo-devise.jpg";
import image5 from "./images/photo-produit.jpeg";
import image6 from "./images/photo-col.jpg";

import { Container, Typography } from "@mui/material";

function SecondSection() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className="bg-gradient-to-t from-blue-100 to-transparent">
      <Container className="text-blue-900 font-bold italic">
        <Slider {...settings} className="text-center">
          <Container maxWidth="lg" className="py-8 px-4 md:px-16">
            <div className="flex items-center justify-center ">
              <div className="w-1/2 md:w-auto mr-4 md:mr-8">
                <img
                  src={image1}
                  alt=""
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="w-1/2 md:w-auto ml-4 md:ml-8">
                <img
                  src={image2}
                  alt=""
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <br />
            <Typography variant="i" className="mt-8 md:mt-0">
              Laboratoire Monétaire vous propose un service professionnel de
              qualité, avec des techniciens qualifiés pour vous servir.
            </Typography>
          </Container>
          <Container maxWidth="lg" className="py-8 px-4 md:px-16">
            <div className="flex items-center justify-center">
              <div className="w-1/2 md:w-auto mr-4 md:mr-8">
                <img
                  src={image3}
                  alt=""
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="w-1/2 md:w-auto ml-4 md:ml-8">
                <img
                  src={image4}
                  alt=""
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <br />
            <Typography variant="i" className="mt-8 md:mt-0">
              <i className="text-gray-500"> Billets de banque :</i>
              Solution chimique pour nettoyer les billets de banque contenant
              tout type de couleur de sécurité
            </Typography>
          </Container>

          <Container maxWidth="lg" className="py-8 px-4 md:px-16">
            <div className="flex items-center justify-center">
              <div className="w-1/2 md:w-auto mr-4 md:mr-8">
                <img
                  src={image5}
                  alt=""
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="w-1/2 md:w-auto ml-4 md:ml-8">
                <img
                  src={image6}
                  alt=""
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <br />
            <Typography variant="i" className="mt-8 md:mt-0">
              Il s’agit d’un produit chimique anti-blanchiment pour billets de
              banque conçu pour éliminer l’excès de substance qui les enrobe. La
              solution universelle SSD fonctionne mieux lorsqu’elle est combinée
              à la poudre d’activation
            </Typography>
          </Container>
        </Slider>
      </Container>
    </div>
  );
}

export default SecondSection;
