import React from "react";
import TelegramIcon from "../icons/telegram.svg"; // Путь к иконке Telegram
import EmailIcon from "../icons/email.svg"; // Путь к иконке Email
import PhoneIcon from "../icons/phone.svg"; // Путь к иконке Телефон

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-center p-6 rounded-t-lg w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Contacts</h2>
      <div className="flex flex-col md:flex-row justify-center items-center mb-2">
        <img src={EmailIcon} alt="Email" className="w-6 h-6 mr-2" />
        <p className="text-base md:text-lg text-white">email@example.com</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mb-2">
        <img src={PhoneIcon} alt="Телефон" className="w-6 h-6 mr-2" />
        <p className="text-base md:text-lg text-white">+1234567890</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mb-2">
        <img src={TelegramIcon} alt="Telegram" className="w-6 h-6 mr-2" />
        <p className="text-base md:text-lg text-white">@example_telegram</p>
      </div>
    </footer>
  );
};

export default Footer;