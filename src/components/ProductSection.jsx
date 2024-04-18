import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";

import image1 from "./images/photp-ssd.jpg";
import image2 from "./images/photo-prodult.jpg";
import image3 from "./images/clichet dev.jpg";

const ImageWithDescription = ({ src, alt, description }) => {
  return (
    <Paper>
      <div className="p-5">
        <div className="image-container">
          <img
            src={src}
            alt={alt}
            className="rounded-lg border"
            style={{ width: "100%", height: "220px", objectFit: "cover" }}
          />
          <Typography variant="body2" className="text-xs line-clamp-2">
            {description}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

const ProductSection = () => {
  return (
    <>
      <section className="flex  gap-5 flex-wrap justify-center items-center italic font-blod bg-gradient-to-b from-blue-100 to-transparent p-4">
        <ImageWithDescription
          src={image1}
          alt="Description de l'image 10"
          description="Solution SSD PLUS: On la trouve sous trois formes différentes : SSD Solution: SSD Supreme Solution: SSD Ultimate Solution"
        />
        <ImageWithDescription
          src={image2}
          alt="Description de l'image 10"
          description="SSD Universel est un produit de nettoyage spécialisé pour différents types de billets de banque. Conçu pour éliminer les taches et les dégâts causés par les billets de banque, y compris ceux qui sont décolorés ou endommagés. Disponible en plusieurs formules, chacune adaptée à un type spécifique de billet de banque."
        />
        <ImageWithDescription
          src={image3}
          alt="Description de l'image 10"
          description="CLICHÉS DE DÉVELOPPEMENT DES BILLETS EN DOLLARS USD"
        />
      </section>
    </>
  );
};

export default ProductSection;
