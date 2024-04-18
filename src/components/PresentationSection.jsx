import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import image1 from "./images/photo-lab.jpg";
import image2 from "./images/photo-job.jpg";
import image3 from "./images/photo-accueil.jpg";

const PresentationSection = () => {
  return (
    <section
      id="Présentation"
      className="py-16 bg-gradient-to-b from-blue-100 to-transparent"
    >
      <Container maxWidth="lg" className="px-4 text-start">
      <h2 className="text-3xl font-bold text-start mb-8">Présentation</h2>
       <br />
        <hr />
        <Grid container spacing={8}>
          <Grid item xs={12} lg={6}>
            <Paper
              elevation={3}
              className="p-9 bg-white rounded-lg shadow-md border"
            >
              <div className="text-4xl"> Qui sommes-nous ?</div>
              <br />
              <Typography
                variant="body1"
                className="text-lg leading-relaxed text-start"
              >
                Le Laboratoire Monétaire, numéro un international dans le
                domaine de la chimie monétaire depuis plusieurs décennies, est
                reconnu pour ses résultats exceptionnels et ses nombreux
                témoignages élogieux. Doté d'une équipe de techniciens hautement
                qualifiés, le laboratoire déploie ses services à travers le
                monde, notamment en Afrique du Nord et dans le reste du
                continent, pour répondre aux besoins de sa clientèle. Sous la
                direction éclairée du Dr Tony et de ses collaborateurs, le
                laboratoire est fier de son siège social situé au 2 Avenue
                Gabriel, 75010 Paris, France.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Paper
              elevation={3}
              className="p-9 bg-white rounded-lg shadow-md border"
            >
              <div className="text-4xl"> Notre emplacement </div>
              <br />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.0906895780345!2d2.3509873156742975!3d48.85666768272974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1649990706695!5m2!1sen!2sfr&q=2%20Avenue%20Gabriel%2C%2075010%20Paris%2C%20France"
                width="600"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg shadow-md mx-auto w-full"
              ></iframe>
            </Paper>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={8}>
          <Grid item xs={12} lg={4}>
            <Paper elevation={3} className="rounded-lg shadow">
              <img
                src={image1}
                alt="Description de l'image"
                className="w-full h-full object-cover"
                style={{ height: "250px", objectFit: "cover" }}
              />
            </Paper>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Paper elevation={3} className="rounded-lg shadow-md">
              <img
                src={image2}
                alt="Description de l'image"
                className="w-full h-full object-cover"
                style={{ height: "250px", objectFit: "cover" }}
              />
            </Paper>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Paper elevation={3} className="rounded-lg shadow-md">
              <img
                src={image3}
                alt="Description de l'image"
                className="w-full h-full object-cover"
                style={{ height: "250px", objectFit: "cover" }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default PresentationSection;
