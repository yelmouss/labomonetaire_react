import { Container } from "@mui/material";
import React from "react";

function Services() {
  return (
    <section
      id="Services"
      className="py-16 bg-gradient-to-t from-blue-100 to-transparent p-9"
    >
      <Container>
        <h2 className="text-5xl font-bold text-blue-500 text-start mb-8">Nos Services</h2>
        <ul className="service-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <li className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Analyses Chimiques Avancées
            </h3>
            <p className="text-gray-700">
              Nous offrons une gamme complète d'analyses chimiques avancées pour
              garantir la qualité et la pureté des composants monétaires.
            </p>
          </li>
          <li className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Recherche et Développement
            </h3>
            <p className="text-gray-700">
              Notre équipe de recherche et développement travaille
              continuellement à l'innovation et à l'amélioration des techniques
              chimiques dans le domaine monétaire.
            </p>
          </li>
          <li className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Consultation Expertise
            </h3>
            <p className="text-gray-700">
              Nos experts en chimie monétaire offrent des services de
              consultation et d'expertise pour aider nos clients à résoudre des
              problèmes complexes et à prendre des décisions éclairées.
            </p>
          </li>
          <li className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Formation Professionnelle
            </h3>
            <p className="text-gray-700">
              Nous proposons des programmes de formation professionnelle pour
              former les professionnels de la monnaie aux dernières avancées
              technologiques et techniques.
            </p>
          </li>
          <li className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Contrôle Qualité
            </h3>
            <p className="text-gray-700">
              Notre laboratoire est équipé des technologies les plus avancées
              pour effectuer des contrôles qualité rigoureux afin de garantir la
              conformité aux normes mondiales.
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default Services;
