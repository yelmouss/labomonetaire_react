import React from "react";
import { Container, Grid, Typography } from "@mui/material";

const VideoCard = ({ src, description, color }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <div
        className={`max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center`}
      >
        <div className="video-container">
          <video autoPlay loop muted className="rounded-lg border">
            <source src={src} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
        <div className="px-6 py-4">
          <h3 className={` text-xs  text-${color} line-clamp-6`}>
            {description}
          </h3>
        </div>
      </div>
    </Grid>
  );
};

const VideoSection = () => {
  const videos = [
    {
      src: "./video-filmage.mp4",
      description:
        "Nous sommes heureux de vous présenter une démonstration vidéo d'un de nos techniciens en action. La multiplication des billets de banque est une procédure hautement réglementée et exécutée avec le plus grand soin. Notre équipe dévouée travaille en conformité avec les normes légales et réglementaires établies par les autorités monétaires compétentes. Dans cette vidéo, vous verrez le processus précis de création de nouveaux billets de banque, depuis la conception initiale jusqu'à la production finale. Chaque étape est méticuleusement surveillée pour garantir que les billets produits respectent les spécifications de sécurité et les caractéristiques requises",
      color: "blue-500",
    },
    {
      src: "./video-dolar1.mp4",
      description:
        "Une équipe de technicien dévoué pour vous rendre entière satisfaction. Avec plusieurs années d’expérience, nous vous offrons un travail efficace dans le domaine de la chimie-Monétaire, des billets de banque masquer et crypter malgré leur durée de vie et de réduire considérablement les coûts de remplacement. Notre capacité à développer des solutions personnalisées pour nos clients est inégalée. Nous fournissons à diverses organisations, des solutions intégrées complètes de transactions sécurisées grâce à nos équipes de recherche et développement",
      color: "red-500",
    },
    {
      src: "./video-dolartext.mp4",
      description:
        "Nous mettons à votre disposition un personnel qualifié, dévouée et discret. Pour garantir des résultats précis, nous procédons premièrement par une collecte d’informations basées sur votre requête et sur les billets de banques sécurisés dont il est question (référence des billets de banque). Ces informations constituent des éléments fondamentaux et essentiels afin d’assurer un résultat optimal",
      color: "blue-500",
    },
    {
      src: "./machine-auto.mp4",
      description:
        "MACHINE DE NETTOYAGE AMÉRICAINE produits chimiques universelles, poudres d’activations, poudre de chauffage et la poudre de conservation, nous sommes aussi plus spécialisés dans le nettoyage de tous les types de notes défigurés, nous mettons aussi à la disposition de nos clients des machines de 4G pour des nettoyage rapides et selon la qualité des billets. Nous régénérons les produits surgelés, congelés et produits chimiques, nous offrons 100% Nettoyage pour vos billets dollar, l’euro, live sterling et autres monnaies. Produits disponibles: SSD SOLUTION UNIVERSELLE, SSD Solution, D6 SSD Solution universelle D7 SSD SOLUTION PK 58 CONSERVATION, l’activation et la réactivation, PARAIENT POUDRE Vectrol PATE ZUTA S4, CASTROX OXYDE LES ESSAIS DOSES Machines automatisées ARGENT DÉVELOPPER Figent ÉQUIPEMENTS DE FUSION CHIMIQUE Régulateurs de température",
      color: "red-500",
    },
    {
      src: "./video-teste.mp4",
      description:
        "Nous vous proposons des machines automatiques avec nos techniciens pour faire les gros travaux de conservation dans le pays du client et le nettoyage des billets noirs. Préparatifs et liquides de dégIvrage prépares, ssd solution anti-gel. Veetrol pâte, solution tebi-manetic, nettoyage chimique billet sombre, billet noir, pâte de banque anti-brise, billet noir manqué, billet noir enrobés et autre couleur, activation poudre nettoyage sur les billets. Nous utilisons la nano technologie chimiques pour préserver d'énorme quantité des billets sous forme défigurer. Nous avons des techniciens qualifiés qui vous aideront dans le processus. Nous offrons des Services de quantité a nos clients et nous nous assurons qu'ils sont satisfaits. SSD solution suprême Solution SSD topix Solution d'oxyde SSD castrox Solution SSD tourmaline",
      color: "blue-500",
    },
  ];

  return (
    <div className=" bg-gradient-to-t from-blue-100 to-transparent">
      <Container>
   

        <h2 className="text-5xl font-bold text-blue-500 text-start mb-8">
        Vidéos
        </h2>
        <hr />
        <Grid container spacing={4} justifyContent="center">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              src={video.src}
              description={video.description}
              color={video.color}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default VideoSection;
