import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 opacity-75  text-center text-lg-start text-muted py-5 mt-auto border p-6  pt-6">
      <div className="container mx-auto flex flex-col gap-3 text-white justify-between items-center">
        <p className="text-white">
          &copy; 2024 Labo Monétaire. Tous droits réservés.
        </p>
        <ul className="flex">
          <li className="mx-2">
            <a
              href="https://web.facebook.com/profile.php?id=61558489109024"
              className="text-white hover:text-gray-200"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="mx-2">
            <a
              href="https://wa.me/+905376395644"
              className="text-white hover:text-gray-200"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
          <li className="mx-2">
            <a
              href="https://www.instagram.com/labomonetaires/"
              className="text-white hover:text-gray-200"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="mx-2">
            <a
              href="https://www.youtube.com/@labomonetaire-el4pl/videos"
              className="text-white hover:text-gray-200"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
