import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import "./LanguageSwitcher.css"; // Add this CSS file for styling

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = lng === "ar" ? "rtl" : "ltr";
  };

  const isArabic = i18n.language === "ar"; // Detect the current language

  return (
    <div className="switch-direction">
      <Button
        variant={isArabic ? "outline-success" : "success"}
        onClick={() => changeLanguage(isArabic ? "en" : "ar")}
      >
        {isArabic ? "English" : "Arabic"}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
