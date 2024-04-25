import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@material-ui/core";
// import FavoriteIcon from '@material-ui/icons/Favorite';
import { FaHeart } from "react-icons/fa";

// Import your images and slick carousel styles
import ahmedBenSalahImage from "./images/ahmed ben salah.jpg";
import leilaMansouriImage from "./images/Leila Mansouri.jpeg";
import karimAmiriImage from "./images/Karim Amiri.jpeg";
import fatmaAbdelNasserImage from "./images/Fatma Abdel Nasser.jpg";
import abdullahAlMansourImage from "./images/Abdullah Al-Mansour.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";

function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const testimonials = [
    {
      name: "Ahmed Ben Salah",
      country: "Maroc",
      text: "Je suis extrêmement satisfait des services du Laboratoire Monétaire. Leur expertise et leur professionnalisme ont été cruciaux pour garantir la qualité de nos billets ayant dépensé plus de 5 ans derrière des incapables. Ils ont été un partenaire essentiel dans notre réussite. Que le bonheur vous accompagne pour toujours.",
      image: ahmedBenSalahImage,
      description: ".",
      likes: 100,
      likeStatus: true,
    },
    {
      name: "Leila Mansouri",
      country: "Tunisie",
      text: "Le Laboratoire Monétaire a dépassé toutes mes attentes. Leur équipe dévouée a travaillé sans relâche pour répondre à nos besoins spécifiques. Leurs résultats ont été impeccables, et je recommande vivement leurs services à toute entreprise.",
      image: leilaMansouriImage,
      description: ".",
      likes: 63,
      likeStatus: true,
    },
    {
      name: "Karim Amiri",
      country: "Algérie",
      text: "Le professionnalisme du Laboratoire Monétaire est incomparable. Leur approche scientifique et leur engagement envers l'excellence ont été remarquables. Nous sommes reconnaissants pour leur contribution à notre succès. Nous souhaitons une collaboration fraternelle si Dieu le veut.",
      image: karimAmiriImage,
      description: ".",
      likes: 98,
      likeStatus: true,
    },
    {
      name: "Fatma Abdel Nasser",
      country: "Égypte",
      text: "Je suis pleinement satisfaite des services du Laboratoire Monétaire. Leur expertise technique et leur réactivité ont été impressionnantes. Leurs recommandations ont été précieuses pour notre entreprise, soyez bénis.",
      image: fatmaAbdelNasserImage,
      description: ".",
      likes: 204,
      likeStatus: true,
    },
    {
      name: "Abdullah Al-Mansour",
      country: "Arabie saoudite",
      text: "Le Laboratoire Monétaire a joué un rôle crucial dans notre processus de nettoyage de nos billets après des longues recherches et dépenses inutiles. Leur professionnalisme et leur expertise ont enfin assuré la conformité de nos billets avec les normes internationales. Nous sommes extrêmement reconnaissants pour leur assistance.",
      image: abdullahAlMansourImage,
      description: ".",
      likes: 166,
      likeStatus: true,
    },
  ];

  return (
    <div className="bg-blue-100 py-8 px-4" id="Témoignages">
      <Container>
        <h2 className="text-5xl font-bold text-blue-500 text-start mb-8">
          Témoignages
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Container key={index}>
              <Card className="mx-4 flex flex-col justify-center items-center p-5">
                <img
                  className="rounded-image"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {testimonial.name} - {testimonial.country}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.text}
                  </Typography>
                  <div className="flex items-center justify-between mt-4">
                    <IconButton
                      aria-label="add to favorites"
                      color={testimonial.likeStatus ? "secondary" : "default"}
                    >
                      <FaHeart />
                    </IconButton>
                    <span className="text-gray-600">
                      {testimonial.likes} likes
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Container>
          ))}
        </Slider>
      </Container>
    </div>
  );
}

export default Testimonials;
