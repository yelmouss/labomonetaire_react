import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import { Container } from "@mui/material";
import image1 from "./images/photo-couverture.jpg";
import image2 from "./images/photo-dianostic.jpg";
import image3 from "./images/photo-trav.png";

function FirstSection() {
  return (
    <div className="bg-gradient-to-t from-blue-100 to-transparent p-5">
<Container>
      <h2 className="text-3xl font-bold text-start mb-8">Labo Monétaire</h2>
      <Stack
        direction="row"
        spacing={2}
        className="flex items-center justify-center mt-auto text-start"
      >
        <Paper className={"p-5"}>
          Nous sommes un laboratoire spécialisé dans la chimie monétaire de
          billets de banque sécurisés, Nous faisons également des PRODUITS
          CHIMIQUES DE FUSION ET DE RECIRCULATION DE TOUT TYPE D’argent en noir
          vert ou en rouge (STAINS ARGENT). Si vous avez des biens familiaux,
          fortunes ou coffre détourné et que votre argent contenu est MASQUE ou
          SÉCURISÉ, nous pouvons vous aider à nettoyer votre ARGENT sans
          problème grâce au produit ssd pk58 Nous fournissons les dernières
          produits chimiques de la solutions SSD
          <div className="flex items-center justify-between">
            <div className="lg-w-1/3">
              <img src={image1} alt="" className=" image-container" />
            </div>
            <div className="lg-w-1/3">
              <img src={image2} alt="" className=" image-container" />
            </div>
            <div className="lg-w-1/3">
              <img src={image3} alt="" className=" image-container" />
            </div>
          </div>
          <br />
          Réalisation des analyses chimiques, microbiologiques et moléculaires
          Utilisation des micro-organismes et des cellules chimiques Mise en
          place du traitement statistique des billets. Réalisation des analyses
          en utilisant des produits testés sur spectrophotométrie Utilisation
          des techniques liées à la chimie moléculaire. Mise en place des tests
          de toxicité et d’écotoxicité Mise en œuvre des tests de contrôle de
          qualité et d’authenticité. <br />
          Produits disponibles : SSD SOLUTION UNIVERSELLE: SSD Solution: D6 SSD
          Solution universelle: D7 SSD SOLUTION PK 58 CONSERVATION: L'Activation
          et la Réactivation: POUDRE Vectrol PATE ZUTA S4: CASTROX OXYDE: LES
          ESSAIS DOSES: Machines Automatisées: ARGENT DÉVELOPPER: Figent:
          ÉQUIPEMENTS DE FUSION CHIMIQUE: Régulateurs de température
        </Paper>
      </Stack>
    </Container>
    </div>
    
  );
}

export default FirstSection;
