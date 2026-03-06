import { Language } from "@/contexts/LanguageContext";

interface CropRecommendation {
  name: Record<Language, string>;
  reason: Record<Language, string>;
  yieldPotential: Record<Language, string>;
  risk: "low" | "medium" | "high";
  season: Record<Language, string>;
}

interface SoilResult {
  soilType: string;
  soilTypeKey: string;
  moisture: string;
  crops: CropRecommendation[];
}

const cropDatabase: Record<string, CropRecommendation[]> = {
  red: [
    {
      name: { en: "Ragi (Finger Millet)", hi: "रागी (फिंगर मिलेट)", kn: "ರಾಗಿ" },
      reason: { en: "Thrives in red soil with low water needs", hi: "कम पानी की आवश्यकता के साथ लाल मिट्टी में पनपती है", kn: "ಕಡಿಮೆ ನೀರಿನ ಅಗತ್ಯದೊಂದಿಗೆ ಕೆಂಪು ಮಣ್ಣಿನಲ್ಲಿ ಬೆಳೆಯುತ್ತದೆ" },
      yieldPotential: { en: "15-20 quintals/hectare", hi: "15-20 क्विंटल/हेक्टेयर", kn: "15-20 ಕ್ವಿಂಟಲ್/ಹೆಕ್ಟೇರ್" },
      risk: "low",
      season: { en: "Kharif (June-October)", hi: "खरीफ (जून-अक्टूबर)", kn: "ಖಾರಿಫ್ (ಜೂನ್-ಅಕ್ಟೋಬರ್)" },
    },
    {
      name: { en: "Groundnut", hi: "मूंगफली", kn: "ಕಡಲೆಕಾಯಿ" },
      reason: { en: "Red soil provides ideal drainage for groundnut roots", hi: "लाल मिट्टी मूंगफली की जड़ों के लिए आदर्श जल निकासी प्रदान करती है", kn: "ಕೆಂಪು ಮಣ್ಣು ಕಡಲೆಕಾಯಿ ಬೇರುಗಳಿಗೆ ಆದರ್ಶ ನೀರು ಹರಿವು ನೀಡುತ್ತದೆ" },
      yieldPotential: { en: "20-25 quintals/hectare", hi: "20-25 क्विंटल/हेक्टेयर", kn: "20-25 ಕ್ವಿಂಟಲ್/ಹೆಕ್ಟೇರ್" },
      risk: "low",
      season: { en: "Kharif & Rabi", hi: "खरीफ और रबी", kn: "ಖಾರಿಫ್ ಮತ್ತು ರಾಬಿ" },
    },
    {
      name: { en: "Jowar (Sorghum)", hi: "ज्वार", kn: "ಜೋಳ" },
      reason: { en: "Drought resistant, perfect for red soil regions", hi: "सूखा प्रतिरोधी, लाल मिट्टी क्षेत्रों के लिए उत्तम", kn: "ಬರ ನಿರೋಧಕ, ಕೆಂಪು ಮಣ್ಣಿನ ಪ್ರದೇಶಗಳಿಗೆ ಪರಿಪೂರ್ಣ" },
      yieldPotential: { en: "12-18 quintals/hectare", hi: "12-18 क्विंटल/हेक्टेयर", kn: "12-18 ಕ್ವಿಂಟಲ್/ಹೆಕ್ಟೇರ್" },
      risk: "low",
      season: { en: "Kharif (July-October)", hi: "खरीफ (जुलाई-अक्टूबर)", kn: "ಖಾರಿಫ್ (ಜುಲೈ-ಅಕ್ಟೋಬರ್)" },
    },
  ],
  black: [
    {
      name: { en: "Cotton", hi: "कपास", kn: "ಹತ್ತಿ" },
      reason: { en: "Black soil retains moisture ideal for cotton", hi: "काली मिट्टी कपास के लिए आदर्श नमी बनाए रखती है", kn: "ಕಪ್ಪು ಮಣ್ಣು ಹತ್ತಿಗೆ ಆದರ್ಶ ತೇವಾಂಶವನ್ನು ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ" },
      yieldPotential: { en: "18-22 quintals/hectare", hi: "18-22 क्विंटल/हेक्टेयर", kn: "18-22 ಕ್ವಿಂಟಲ್/ಹೆಕ್ಟೇರ್" },
      risk: "medium",
      season: { en: "Kharif (June-November)", hi: "खरीफ (जून-नवंबर)", kn: "ಖಾರಿಫ್ (ಜೂನ್-ನವೆಂಬರ್)" },
    },
    {
      name: { en: "Soybean", hi: "सोयाबीन", kn: "ಸೋಯಾಬೀನ್" },
      reason: { en: "High clay content supports soybean growth well", hi: "उच्च मिट्टी सामग्री सोयाबीन वृद्धि का अच्छी तरह समर्थन करती है", kn: "ಹೆಚ್ಚಿನ ಜೇಡಿ ಅಂಶ ಸೋಯಾಬೀನ್ ಬೆಳವಣಿಗೆಯನ್ನು ಚೆನ್ನಾಗಿ ಬೆಂಬಲಿಸುತ್ತದೆ" },
      yieldPotential: { en: "15-20 quintals/hectare", hi: "15-20 क्विंटल/हेक्टेयर", kn: "15-20 ಕ್ವಿಂಟಲ್/ಹೆಕ್ಟೇರ್" },
      risk: "low",
      season: { en: "Kharif (June-September)", hi: "खरीफ (जून-सितंबर)", kn: "ಖಾರಿಫ್ (ಜೂನ್-ಸೆಪ್ಟೆಂಬರ್)" },
    },
    {
      name: { en: "Sunflower", hi: "सूरजमुखी", kn: "ಸೂರ್ಯಕಾಂತಿ" },
      reason: { en: "Deep roots utilize black soil's moisture holding capacity", hi: "गहरी जड़ें काली मिट्टी की नमी रोकने की क्षमता का उपयोग करती हैं", kn: "ಆಳವಾದ ಬೇರುಗಳು ಕಪ್ಪು ಮಣ್ಣಿನ ತೇವಾಂಶ ಸಾಮರ್ಥ್ಯವನ್ನು ಬಳಸುತ್ತವೆ" },
      yieldPotential: { en: "10-15 quintals/hectare", hi: "10-15 क्विंटल/हेक्टेयर", kn: "10-15 ಕ್ವಿಂಟಲ್/ಹೆಕ್ಟೇರ್" },
      risk: "medium",
      season: { en: "Rabi (October-February)", hi: "रबी (अक्टूबर-फरवरी)", kn: "ರಾಬಿ (ಅಕ್ಟೋಬರ್-ಫೆಬ್ರವರಿ)" },
    },
  ],
  sandy: [
    {
      name: { en: "Bajra (Pearl Millet)", hi: "बाजरा", kn: "ಸಜ್ಜೆ" },
      reason: { en: "Extremely drought tolerant, perfect for sandy soil", hi: "अत्यंत सूखा सहनशील, रेतीली मिट्टी के लिए उत्तम", kn: "ಅತ್ಯಂತ ಬರ ಸಹಿಷ್ಣು, ಮರಳು ಮಣ್ಣಿಗೆ ಪರಿಪೂರ್ಣ" },
      yieldPotential: { en: "12-16 quintals/hectare", hi: "12-16 क्विंटल/हेक्टेयर", kn: "12-16 ಕ್ವಿಂಟಲ್/ಹೆಕ್ಟೇರ್" },
      risk: "low",
      season: { en: "Kharif (July-September)", hi: "खरीफ (जुलाई-सितंबर)", kn: "ಖಾರಿಫ್ (ಜುಲೈ-ಸೆಪ್ಟೆಂಬರ್)" },
    },
    {
      name: { en: "Watermelon", hi: "तरबूज", kn: "ಕಲ್ಲಂಗಡಿ" },
      reason: { en: "Sandy soil's drainage prevents root rot in melons", hi: "रेतीली मिट्टी का जल निकासी तरबूज में जड़ सड़न रोकती है", kn: "ಮರಳು ಮಣ್ಣಿನ ನೀರು ಹರಿವು ಕಲ್ಲಂಗಡಿಯಲ್ಲಿ ಬೇರು ಕೊಳೆತ ತಡೆಯುತ್ತದೆ" },
      yieldPotential: { en: "200-300 quintals/hectare", hi: "200-300 क्विंटल/हेक्टेयर", kn: "200-300 ಕ್ವಿಂಟಲ್/ಹೆಕ್ಟೇರ್" },
      risk: "medium",
      season: { en: "Summer (February-May)", hi: "गर्मी (फरवरी-मई)", kn: "ಬೇಸಿಗೆ (ಫೆಬ್ರವರಿ-ಮೇ)" },
    },
    {
      name: { en: "Moong (Green Gram)", hi: "मूंग", kn: "ಹೆಸರು" },
      reason: { en: "Short duration crop well suited for sandy conditions", hi: "कम अवधि की फसल रेतीली परिस्थितियों के लिए उपयुक्त", kn: "ಕಡಿಮೆ ಅವಧಿಯ ಬೆಳೆ ಮರಳು ಪರಿಸ್ಥಿತಿಗಳಿಗೆ ಸೂಕ್ತ" },
      yieldPotential: { en: "8-12 quintals/hectare", hi: "8-12 क्विंटल/हेक्टेयर", kn: "8-12 ಕ್ವಿಂಟಲ್/ಹೆಕ್ಟೇರ್" },
      risk: "low",
      season: { en: "Kharif & Summer", hi: "खरीफ और गर्मी", kn: "ಖಾರಿಫ್ ಮತ್ತು ಬೇಸಿಗೆ" },
    },
  ],
  clay: [
    {
      name: { en: "Paddy (Rice)", hi: "धान (चावल)", kn: "ಭತ್ತ (ಅಕ್ಕಿ)" },
      reason: { en: "Clay soil retains water perfectly for paddy cultivation", hi: "चिकनी मिट्टी धान की खेती के लिए पानी बनाए रखती है", kn: "ಜೇಡಿ ಮಣ್ಣು ಭತ್ತ ಕೃಷಿಗೆ ನೀರನ್ನು ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ" },
      yieldPotential: { en: "40-55 quintals/hectare", hi: "40-55 क्विंटल/हेक्टेयर", kn: "40-55 ಕ್ವಿಂಟಲ್/ಹೆಕ್ಟೇರ್" },
      risk: "medium",
      season: { en: "Kharif (June-November)", hi: "खरीफ (जून-नवंबर)", kn: "ಖಾರಿಫ್ (ಜೂನ್-ನವೆಂಬರ್)" },
    },
    {
      name: { en: "Wheat", hi: "गेहूँ", kn: "ಗೋಧಿ" },
      reason: { en: "Heavy clay soil provides nutrients for wheat growth", hi: "भारी चिकनी मिट्टी गेहूँ की वृद्धि के लिए पोषक तत्व प्रदान करती है", kn: "ಭಾರೀ ಜೇಡಿ ಮಣ್ಣು ಗೋಧಿ ಬೆಳವಣಿಗೆಗೆ ಪೋಷಕಾಂಶಗಳನ್ನು ನೀಡುತ್ತದೆ" },
      yieldPotential: { en: "35-45 quintals/hectare", hi: "35-45 क्विंटल/हेक्टेयर", kn: "35-45 ಕ್ವಿಂಟಲ್/ಹೆಕ್ಟೇರ್" },
      risk: "low",
      season: { en: "Rabi (November-March)", hi: "रबी (नवंबर-मार्च)", kn: "ರಾಬಿ (ನವೆಂಬರ್-ಮಾರ್ಚ್)" },
    },
    {
      name: { en: "Sugarcane", hi: "गन्ना", kn: "ಕಬ್ಬು" },
      reason: { en: "Deep clay retains moisture needed for sugarcane", hi: "गहरी चिकनी मिट्टी गन्ने के लिए आवश्यक नमी बनाए रखती है", kn: "ಆಳವಾದ ಜೇಡಿ ಕಬ್ಬಿಗೆ ಅಗತ್ಯ ತೇವಾಂಶವನ್ನು ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ" },
      yieldPotential: { en: "700-800 quintals/hectare", hi: "700-800 क्विंटल/हेक्टेयर", kn: "700-800 ಕ್ವಿಂಟಲ್/ಹೆಕ್ಟೇರ್" },
      risk: "medium",
      season: { en: "Annual (January-December)", hi: "वार्षिक (जनवरी-दिसंबर)", kn: "ವಾರ್ಷಿಕ (ಜನವರಿ-ಡಿಸೆಂಬರ್)" },
    },
  ],
};

export const analyzeSoil = (): SoilResult => {
  const soilTypes = ["red", "black", "sandy", "clay"] as const;
  const soilTypeKeys = {
    red: "soil.red",
    black: "soil.black",
    sandy: "soil.sandy",
    clay: "soil.clay",
  };
  const moistureLevels = ["25-35%", "40-55%", "60-75%", "30-45%"];
  
  const randomIndex = Math.floor(Math.random() * soilTypes.length);
  const soilType = soilTypes[randomIndex];
  
  return {
    soilType,
    soilTypeKey: soilTypeKeys[soilType],
    moisture: moistureLevels[randomIndex],
    crops: cropDatabase[soilType],
  };
};
