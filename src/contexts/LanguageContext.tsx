import React, { createContext, useContext, useState, ReactNode } from "react";
import { landingTranslations } from "@/data/landingTranslations";

export type Language = "en" | "hi" | "kn";

const coreTranslations: Record<string, Record<Language, string>> = {
  "app.title": { en: "AgriRise Shakti", hi: "एग्रीराइज शक्ति", kn: "ಅಗ್ರಿರೈಸ್ ಶಕ್ತಿ" },
  "app.subtitle": { en: "Rural Intelligence Platform", hi: "ग्रामीण बुद्धिमत्ता मंच", kn: "ಗ್ರಾಮೀಣ ಬುದ್ಧಿಮತ್ತೆ ವೇದಿಕೆ" },
  "nav.dashboard": { en: "Dashboard", hi: "डैशबोर्ड", kn: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್" },
  "nav.crop": { en: "Crop Intelligence", hi: "फसल बुद्धिमत्ता", kn: "ಬೆಳೆ ಬುದ್ಧಿಮತ್ತೆ" },
  "nav.market": { en: "Market Insights", hi: "बाज़ार अंतर्दृष्टि", kn: "ಮಾರುಕಟ್ಟೆ ಒಳನೋಟ" },
  "nav.risk": { en: "Risk Assessment", hi: "जोखिम मूल्यांकन", kn: "ಅಪಾಯ ಮೌಲ್ಯಮಾಪನ" },
  "nav.assistant": { en: "AI Assistant", hi: "AI सहायक", kn: "AI ಸಹಾಯಕ" },
  "nav.disease": { en: "Disease Detection", hi: "रोग पहचान", kn: "ರೋಗ ಪತ್ತೆ" },
  "nav.finance": { en: "Financial Inclusion", hi: "वित्तीय समावेशन", kn: "ಆರ್ಥಿಕ ಸೇರ್ಪಡೆ" },
  "nav.schemes": { en: "Govt Schemes", hi: "सरकारी योजनाएँ", kn: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು" },
  "dashboard.welcome": { en: "Welcome back, Farmer!", hi: "वापस स्वागत है, किसान!", kn: "ಮರಳಿ ಸ್ವಾಗತ, ರೈತ!" },
  "dashboard.overview": { en: "Your Farm at a Glance", hi: "आपका खेत एक नज़र में", kn: "ನಿಮ್ಮ ಕೃಷಿ ಒಂದೇ ನೋಟದಲ್ಲಿ" },
  "crop.title": { en: "Crop Yield Prediction", hi: "फसल उपज पूर्वानुमान", kn: "ಬೆಳೆ ಇಳುವರಿ ಮುನ್ಸೂಚನೆ" },
  "market.title": { en: "Market Price Forecast", hi: "बाज़ार मूल्य पूर्वानुमान", kn: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಮುನ್ಸೂಚನೆ" },
  "risk.title": { en: "Risk Score Analysis", hi: "जोखिम स्कोर विश्लेषण", kn: "ಅಪಾಯ ಅಂಕ ವಿಶ್ಲೇಷಣೆ" },
  "assistant.title": { en: "Ask Your AI Assistant", hi: "अपने AI सहायक से पूछें", kn: "ನಿಮ್ಮ AI ಸಹಾಯಕರನ್ನು ಕೇಳಿ" },
  "disease.title": { en: "Crop Disease Detection", hi: "फसल रोग पहचान", kn: "ಬೆಳೆ ರೋಗ ಪತ್ತೆ" },
  "finance.title": { en: "Financial Inclusion Score", hi: "वित्तीय समावेशन स्कोर", kn: "ಆರ್ಥಿಕ ಸೇರ್ಪಡೆ ಅಂಕ" },
  "schemes.title": { en: "Government Schemes for Women", hi: "महिलाओं के लिए सरकारी योजनाएँ", kn: "ಮಹಿಳೆಯರಿಗೆ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು" },
  "voice.speak": { en: "Speak", hi: "बोलें", kn: "ಮಾತನಾಡಿ" },
  "voice.listening": { en: "Listening...", hi: "सुन रहे हैं...", kn: "ಕೇಳುತ್ತಿದೆ..." },
  "common.predict": { en: "Predict", hi: "पूर्वानुमान", kn: "ಮುನ್ಸೂಚನೆ" },
  "common.upload": { en: "Upload Image", hi: "छवि अपलोड करें", kn: "ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ" },
  "common.analyze": { en: "Analyze", hi: "विश्लेषण", kn: "ವಿಶ್ಲೇಷಿಸಿ" },
  "common.send": { en: "Send", hi: "भेजें", kn: "ಕಳುಹಿಸಿ" },
};

const translations: Record<string, Record<Language, string>> = {
  ...coreTranslations,
  ...landingTranslations,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
