import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
} from "@mui/material";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    pays: "",
    ville: "",
    tel: "",
    email: "",
    objet: "",
    message: "",
  });

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const handleFormReset = () => {
    setFormData({
      nom: "",
      prenom: "",
      pays: "",
      ville: "",
      tel: "",
      email: "",
      objet: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://servermail-one.vercel.app/api/mailing",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setAlertSeverity("success");
        setAlertMessage(data.message);
        setAlertOpen(true);
        handleFormReset(); // Réinitialiser le formulaire
      } else {
        setAlertSeverity("error");
        setAlertMessage("Une erreur s'est produite lors de l'envoi du formulaire.");
        setAlertOpen(true);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setAlertSeverity("error");
      setAlertMessage("Une erreur s'est produite lors de l'envoi du formulaire.");
      setAlertOpen(true);
    }
  };

  return (
    <section
      id="Contact"
      className="bg-gradient-to-b from-blue-100 to-transparent p-9"
    >
      <Container>
        <h2 className="text-3xl font-bold text-start mb-8">Contact</h2>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper elevation={10}>
              <div className="text-start p-9">
                <div className="text-4xl">Coordonnées :</div>
                <br />
                <ul className="mb-4">
                  <li className="text-green-900 font-bold mb-2">
                    Direction Générale: +33 640 436 357
                  </li>
                  <li className="text-green-900 font-bold mb-2">
                    Asie Occidentale: +90 53 7639 5644
                  </li>
                  <li className="text-green-900 font-bold mb-2">
                    Afrique du Nord: +212 680 423 034 / +216 21 572 161
                  </li>
                  <li className="text-green-900 font-bold mb-2">
                    Afrique Subsaharienne: +221 78 463 10 36
                  </li>
                  <li className="text-green-900 font-bold mb-2">
                    Email: labomonetaire88@gmail.com <br />{" "}
                    labomonetaire@laposte.net
                  </li>
                </ul>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className="p-4" elevation={12}>
              <form onSubmit={handleSubmit} className="mb-8">
                <Typography variant="body1" className="mb-4 p-4">
                  Pour nous écrire, remplissez le formulaire ci-dessous :
                </Typography>
                <Grid container spacing={2}>
                  {Object.keys(formData).map((key) => (
                    <Grid item xs={12} key={key}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        id={key}
                        name={key}
                        label={key.charAt(0).toUpperCase() + key.slice(1)}
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                        value={formData[key]}
                        onChange={handleChange}
                      />
                    </Grid>
                  ))}
                </Grid>
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="mt-4"
                >
                  Envoyer
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        message={alertMessage}
        severity={alertSeverity}
      />
    </section>
  );
};

export default ContactSection;
