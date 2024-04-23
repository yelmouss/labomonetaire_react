import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Tooltip,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import image1 from "./images/noir.jpeg";
import image2 from "./images/photo-s123.jpg";
import image3 from "./images/photo-resul.jpg";
import image4 from "./images/photo-s12.jpg";
import image5 from "./images/photo-ceit.jpg";
import image6 from "./images/photo-billeto.jpg";
import image7 from "./images/vert.jpeg";
import image8 from "./images/vert2.jpeg";
import image9 from "./images/3.jpeg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    transition: "0.3s",
    borderRadius: "8px",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
    },
  },
  media: {
    height: 200,
    objectFit: "cover",
    borderRadius: "8px 8px 0 0",
  },
  content: {
    padding: "1rem",
  },
});

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9 ];

const texts = [
  "Billet avec sécurité noire",
  "SSD durabilité et endurance élevée au système financier sophistiqué",
  "Diagnostic légal visant à déterminer l'authenticité des billets et à identifier tout problème potentiel de contrefaçon ou de falsification après le nettoyage complet",
  "SSD UNIVERSELLE ",
  "Diagnostic  visant à déterminer l'authenticité des Produits",
  "Billets de Banque Masqués constituent une avancée significative dans le domaine de la sécurité financière. Conçus pour dissimuler des éléments de sécurité essentiels, ces billets présentent des caractéristiques invisibles à l'œil nu.",
  "billet avec sécurité verte",
  "billet avec sécurité verte",
  "Poudre à encres spéciales et des dispositifs de sécurité pour éviter la contrefaçon",
];

const DummyComponent = () => {
  const classes = useStyles();

  return (
    <div className="flex flex-wrap justify-center items-center bg-gradient-to-b from-blue-100 to-transparent p-9">
      {images.map((image, index) => (
        <div className="p-3 w-full lg:w-1/3" key={index}>
          <Card className={classes.root}>
            <CardMedia className={classes.media} image={image} title="Image" />
            <CardContent className={classes.content}>
              <Tooltip title={texts[index]} placement="top">
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className="truncate"
                >
                  {texts[index]}
                </Typography>
              </Tooltip>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default DummyComponent;
