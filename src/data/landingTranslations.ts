import { Language } from "@/contexts/LanguageContext";

export const landingTranslations: Record<string, Record<Language, string>> = {
  // Navbar
  "landing.home": { en: "Home", hi: "होम", kn: "ಮುಖಪುಟ" },
  "landing.about": { en: "About", hi: "हमारे बारे में", kn: "ನಮ್ಮ ಬಗ್ಗೆ" },
  "landing.features": { en: "Features", hi: "विशेषताएँ", kn: "ವೈಶಿಷ್ಟ್ಯಗಳು" },
  "landing.impact": { en: "Impact", hi: "प्रभाव", kn: "ಪ್ರಭಾವ" },
  "landing.govtSchemes": { en: "Govt Schemes", hi: "सरकारी योजनाएँ", kn: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು" },
  "landing.contact": { en: "Contact", hi: "संपर्क", kn: "ಸಂಪರ್ಕ" },
  "landing.login": { en: "Login", hi: "लॉगिन", kn: "ಲಾಗಿನ್" },
  "landing.signup": { en: "Sign Up", hi: "साइन अप", kn: "ಸೈನ್ ಅಪ್" },

  // Hero
  "hero.heading": {
    en: "Empowering India's Women Farmers with AI Intelligence",
    hi: "AI बुद्धिमत्ता से भारत की महिला किसानों को सशक्त बनाना",
    kn: "AI ಬುದ್ಧಿಮತ್ತೆಯಿಂದ ಭಾರತದ ಮಹಿಳಾ ರೈತರನ್ನು ಸಶಕ್ತಗೊಳಿಸುವುದು",
  },
  "hero.subheading": {
    en: "Predict. Protect. Prosper.",
    hi: "पूर्वानुमान। सुरक्षा। समृद्धि।",
    kn: "ಮುನ್ಸೂಚನೆ. ರಕ್ಷಣೆ. ಸಮೃದ್ಧಿ.",
  },
  "hero.getStarted": { en: "Get Started", hi: "शुरू करें", kn: "ಪ್ರಾರಂಭಿಸಿ" },
  "hero.trust": {
    en: "Built for Rural India 🇮🇳 | Supporting 30M+ Women Farmers",
    hi: "ग्रामीण भारत के लिए बनाया गया 🇮🇳 | 3 करोड़+ महिला किसानों का समर्थन",
    kn: "ಗ್ರಾಮೀಣ ಭಾರತಕ್ಕಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ 🇮🇳 | 3 ಕೋಟಿ+ ಮಹಿಳಾ ರೈತರ ಬೆಂಬಲ",
  },

  // Problem
  "problem.heading": {
    en: "The Reality of Rural Women Farmers",
    hi: "ग्रामीण महिला किसानों की वास्तविकता",
    kn: "ಗ್ರಾಮೀಣ ಮಹಿಳಾ ರೈತರ ವಾಸ್ತವ",
  },
  "problem.income": { en: "Income Instability", hi: "आय अस्थिरता", kn: "ಆದಾಯ ಅಸ್ಥಿರತೆ" },
  "problem.incomeDesc": {
    en: "Unpredictable crop yields and fluctuating market prices make it nearly impossible to plan finances.",
    hi: "अनिश्चित फसल उपज और बाज़ार मूल्य में उतार-चढ़ाव वित्तीय योजना को लगभग असंभव बनाते हैं।",
    kn: "ಅನಿಶ್ಚಿತ ಬೆಳೆ ಇಳುವರಿ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಬೆಲೆಯ ಏರಿಳಿತವು ಹಣಕಾಸು ಯೋಜನೆಯನ್ನು ಅಸಾಧ್ಯವಾಗಿಸುತ್ತದೆ.",
  },
  "problem.climate": { en: "Climate Uncertainty", hi: "जलवायु अनिश्चितता", kn: "ಹವಾಮಾನ ಅನಿಶ್ಚಿತತೆ" },
  "problem.climateDesc": {
    en: "Erratic monsoons, droughts, and floods devastate crops, with no early warning systems available.",
    hi: "अनियमित मानसून, सूखा और बाढ़ फसलों को नष्ट करते हैं, कोई पूर्व चेतावनी प्रणाली उपलब्ध नहीं।",
    kn: "ಅನಿಯಮಿತ ಮಳೆ, ಬರ ಮತ್ತು ಪ್ರವಾಹಗಳು ಬೆಳೆಗಳನ್ನು ನಾಶಮಾಡುತ್ತವೆ, ಯಾವುದೇ ಮುನ್ನೆಚ್ಚರಿಕೆ ವ್ಯವಸ್ಥೆಯಿಲ್ಲ.",
  },
  "problem.price": { en: "Price Volatility", hi: "मूल्य अस्थिरता", kn: "ಬೆಲೆ ಅಸ್ಥಿರತೆ" },
  "problem.priceDesc": {
    en: "Women farmers often sell at the lowest price due to lack of real-time market intelligence.",
    hi: "रियल-टाइम बाज़ार जानकारी की कमी से महिला किसान अक्सर सबसे कम कीमत पर बेचती हैं।",
    kn: "ನೈಜ-ಸಮಯದ ಮಾರುಕಟ್ಟೆ ಮಾಹಿತಿಯ ಕೊರತೆಯಿಂದ ಮಹಿಳಾ ರೈತರು ಕಡಿಮೆ ಬೆಲೆಗೆ ಮಾರಾಟ ಮಾಡುತ್ತಾರೆ.",
  },
  "problem.data": { en: "Limited Data Access", hi: "सीमित डेटा पहुँच", kn: "ಸೀಮಿತ ಮಾಹಿತಿ ಪ್ರವೇಶ" },
  "problem.dataDesc": {
    en: "Complex government portals and language barriers keep valuable agricultural data out of reach.",
    hi: "जटिल सरकारी पोर्टल और भाषा बाधाएँ मूल्यवान कृषि डेटा को पहुँच से दूर रखती हैं।",
    kn: "ಸಂಕೀರ್ಣ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್‌ಗಳು ಮತ್ತು ಭಾಷಾ ತಡೆಗಳು ಮೌಲ್ಯಯುತ ಕೃಷಿ ಮಾಹಿತಿಯನ್ನು ತಲುಪಲಾಗದಂತೆ ಮಾಡುತ್ತವೆ.",
  },
  "problem.paragraph": {
    en: "Women constitute over 80% of India's agricultural workforce, yet they remain the most underserved. They lack access to technology, finance, and advisory support that could transform their livelihoods.",
    hi: "महिलाएँ भारत के कृषि कार्यबल का 80% से अधिक हैं, फिर भी वे सबसे कम सेवित हैं। उनके पास प्रौद्योगिकी, वित्त और सलाह तक पहुँच नहीं है।",
    kn: "ಮಹಿಳೆಯರು ಭಾರತದ ಕೃಷಿ ಕಾರ್ಯಪಡೆಯ 80% ಕ್ಕಿಂತ ಹೆಚ್ಚು, ಆದರೂ ಅವರು ಅತ್ಯಂತ ಕಡಿಮೆ ಸೇವೆ ಪಡೆಯುತ್ತಾರೆ. ತಂತ್ರಜ್ಞಾನ, ಹಣಕಾಸು ಮತ್ತು ಸಲಹಾ ಬೆಂಬಲಕ್ಕೆ ಪ್ರವೇಶವಿಲ್ಲ.",
  },

  // Solution
  "solution.heading": {
    en: "Introducing AgriRise Shakti",
    hi: "पेश है एग्रीराइज शक्ति",
    kn: "ಅಗ್ರಿರೈಸ್ ಶಕ್ತಿ ಪರಿಚಯ",
  },
  "solution.desc": {
    en: "This platform uses Artificial Intelligence to guide women farmers in crop decisions, climate risk protection, soil analysis, and financial growth.",
    hi: "यह प्लेटफ़ॉर्म महिला किसानों को फसल निर्णय, जलवायु जोखिम सुरक्षा, मिट्टी विश्लेषण और वित्तीय वृद्धि में मार्गदर्शन करने के लिए कृत्रिम बुद्धिमत्ता का उपयोग करता है।",
    kn: "ಈ ವೇದಿಕೆ ಬೆಳೆ ನಿರ್ಧಾರಗಳು, ಹವಾಮಾನ ಅಪಾಯ ರಕ್ಷಣೆ, ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಆರ್ಥಿಕ ಬೆಳವಣಿಗೆಯಲ್ಲಿ ಮಹಿಳಾ ರೈತರಿಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡಲು AI ಬಳಸುತ್ತದೆ.",
  },
  "solution.crop": { en: "Crop Intelligence", hi: "फसल बुद्धिमत्ता", kn: "ಬೆಳೆ ಬುದ್ಧಿಮತ್ತೆ" },
  "solution.climate": { en: "Climate Risk Prediction", hi: "जलवायु जोखिम पूर्वानुमान", kn: "ಹವಾಮಾನ ಅಪಾಯ ಮುನ್ಸೂಚನೆ" },
  "solution.market": { en: "Market Forecasting", hi: "बाज़ार पूर्वानुमान", kn: "ಮಾರುಕಟ್ಟೆ ಮುನ್ಸೂಚನೆ" },
  "solution.assistant": { en: "AI Assistant", hi: "AI सहायक", kn: "AI ಸಹಾಯಕ" },
  "solution.soil": { en: "Soil-Based Crop Recommendation", hi: "मिट्टी आधारित फसल सिफ़ारिश", kn: "ಮಣ್ಣಿನ ಆಧಾರಿತ ಬೆಳೆ ಶಿಫಾರಸು" },
  "solution.disease": { en: "Crop Disease Detection", hi: "फसल रोग पहचान", kn: "ಬೆಳೆ ರೋಗ ಪತ್ತೆ" },
  "solution.finance": { en: "Financial Inclusion", hi: "वित्तीय समावेशन", kn: "ಆರ್ಥಿಕ ಸೇರ್ಪಡೆ" },
  "solution.schemes": { en: "Govt Schemes Support", hi: "सरकारी योजना समर्थन", kn: "ಸರ್ಕಾರಿ ಯೋಜನೆ ಬೆಂಬಲ" },

  // Impact
  "impact.heading": { en: "Our Impact", hi: "हमारा प्रभाव", kn: "ನಮ್ಮ ಪ್ರಭಾವ" },
  "impact.farmers": { en: "Women Farmers", hi: "महिला किसान", kn: "ಮಹಿಳಾ ರೈತರು" },
  "impact.income": { en: "Potential Income Increase", hi: "संभावित आय वृद्धि", kn: "ಸಂಭಾವ್ಯ ಆದಾಯ ಹೆಚ್ಚಳ" },
  "impact.cropLoss": { en: "Crop Loss Reduction", hi: "फसल हानि में कमी", kn: "ಬೆಳೆ ನಷ್ಟ ಕಡಿತ" },
  "impact.accuracy": { en: "Decision Accuracy", hi: "निर्णय सटीकता", kn: "ನಿರ್ಧಾರ ನಿಖರತೆ" },

  // Govt Trust
  "govt.heading": {
    en: "Aligned with India's Rural Development Vision",
    hi: "भारत के ग्रामीण विकास दृष्टिकोण के साथ संरेखित",
    kn: "ಭಾರತದ ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿ ದೃಷ್ಟಿಕೋನದೊಂದಿಗೆ ಹೊಂದಾಣಿಕೆ",
  },

  // Testimonials
  "testimonial.heading": { en: "Voices from the Field", hi: "खेत से आवाज़ें", kn: "ಕ್ಷೇತ್ರದಿಂದ ಧ್ವನಿಗಳು" },
  "testimonial.1": {
    en: "AgriRise helped me choose the right crop based on my soil. My yield increased by 30% this season!",
    hi: "AgriRise ने मेरी मिट्टी के आधार पर सही फसल चुनने में मदद की। इस मौसम में मेरी उपज 30% बढ़ गई!",
    kn: "AgriRise ನನ್ನ ಮಣ್ಣಿನ ಆಧಾರದ ಮೇಲೆ ಸರಿಯಾದ ಬೆಳೆ ಆಯ್ಕೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡಿತು. ಈ ಋತುವಿನಲ್ಲಿ ನನ್ನ ಇಳುವರಿ 30% ಹೆಚ್ಚಾಯಿತು!",
  },
  "testimonial.2": {
    en: "The market price forecast saved me from selling at the wrong time. I earned ₹15,000 more this harvest.",
    hi: "बाज़ार मूल्य पूर्वानुमान ने मुझे गलत समय पर बेचने से बचाया। इस फसल में मैंने ₹15,000 अधिक कमाए।",
    kn: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಮುನ್ಸೂಚನೆ ತಪ್ಪು ಸಮಯದಲ್ಲಿ ಮಾರಾಟ ಮಾಡುವುದರಿಂದ ನನ್ನನ್ನು ರಕ್ಷಿಸಿತು. ₹15,000 ಹೆಚ್ಚು ಗಳಿಸಿದೆ.",
  },
  "testimonial.3": {
    en: "I can now speak in Kannada and get crop advice. Technology finally feels accessible to us.",
    hi: "अब मैं कन्नड़ में बोलकर फसल सलाह पा सकती हूँ। तकनीक अब हमारे लिए सुलभ लगती है।",
    kn: "ನಾನು ಈಗ ಕನ್ನಡದಲ್ಲಿ ಮಾತನಾಡಿ ಬೆಳೆ ಸಲಹೆ ಪಡೆಯಬಹುದು. ತಂತ್ರಜ್ಞಾನ ಈಗ ನಮಗೆ ಸುಲಭವೆನಿಸುತ್ತದೆ.",
  },

  // CTA
  "cta.heading": {
    en: "Join the AI Revolution for Rural Women Farmers",
    hi: "ग्रामीण महिला किसानों के लिए AI क्रांति में शामिल हों",
    kn: "ಗ್ರಾಮೀಣ ಮಹಿಳಾ ರೈತರಿಗಾಗಿ AI ಕ್ರಾಂತಿಯಲ್ಲಿ ಸೇರಿ",
  },
  "cta.signupNow": { en: "Sign Up Now", hi: "अभी साइन अप करें", kn: "ಈಗ ಸೈನ್ ಅಪ್ ಮಾಡಿ" },
  "cta.loginDashboard": { en: "Login to Dashboard", hi: "डैशबोर्ड में लॉगिन", kn: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಲಾಗಿನ್" },

  // Signup
  "signup.step1": { en: "Basic Info", hi: "मूल जानकारी", kn: "ಮೂಲ ಮಾಹಿತಿ" },
  "signup.step2": { en: "Location", hi: "स्थान", kn: "ಸ್ಥಳ" },
  "signup.step3": { en: "Soil Analysis", hi: "मिट्टी विश्लेषण", kn: "ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ" },
  "signup.name": { en: "Full Name", hi: "पूरा नाम", kn: "ಪೂರ್ಣ ಹೆಸರು" },
  "signup.phone": { en: "Phone Number", hi: "फ़ोन नंबर", kn: "ದೂರವಾಣಿ ಸಂಖ್ಯೆ" },
  "signup.password": { en: "Password", hi: "पासवर्ड", kn: "ಪಾಸ್‌ವರ್ಡ್" },
  "signup.next": { en: "Next", hi: "आगे", kn: "ಮುಂದೆ" },
  "signup.back": { en: "Back", hi: "पीछे", kn: "ಹಿಂದೆ" },
  "signup.detectLocation": { en: "Detect My Location", hi: "मेरा स्थान पता लगाएँ", kn: "ನನ್ನ ಸ್ಥಳ ಪತ್ತೆ ಮಾಡಿ" },
  "signup.state": { en: "State", hi: "राज्य", kn: "ರಾಜ್ಯ" },
  "signup.district": { en: "District", hi: "ज़िला", kn: "ಜಿಲ್ಲೆ" },
  "signup.village": { en: "Village", hi: "गाँव", kn: "ಹಳ್ಳಿ" },
  "signup.uploadSoil": { en: "Upload Soil Image", hi: "मिट्टी की छवि अपलोड करें", kn: "ಮಣ್ಣಿನ ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ" },
  "signup.analyzeSoil": { en: "Analyze Soil", hi: "मिट्टी का विश्लेषण करें", kn: "ಮಣ್ಣನ್ನು ವಿಶ್ಲೇಷಿಸಿ" },
  "signup.analyzing": { en: "Analyzing...", hi: "विश्लेषण हो रहा है...", kn: "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ..." },
  "signup.complete": { en: "Complete Sign Up", hi: "साइन अप पूरा करें", kn: "ಸೈನ್ ಅಪ್ ಪೂರ್ಣಗೊಳಿಸಿ" },
  "signup.soilType": { en: "Soil Type", hi: "मिट्टी का प्रकार", kn: "ಮಣ್ಣಿನ ಪ್ರಕಾರ" },
  "signup.moisture": { en: "Moisture Level", hi: "नमी स्तर", kn: "ತೇವಾಂಶ ಮಟ್ಟ" },
  "signup.recommended": { en: "Best Crops for Your Soil", hi: "आपकी मिट्टी के लिए सर्वोत्तम फसलें", kn: "ನಿಮ್ಮ ಮಣ್ಣಿಗೆ ಉತ್ತಮ ಬೆಳೆಗಳು" },
  "signup.whySuitable": { en: "Why Suitable", hi: "क्यों उपयुक्त", kn: "ಏಕೆ ಸೂಕ್ತ" },
  "signup.yieldPotential": { en: "Yield Potential", hi: "उपज क्षमता", kn: "ಇಳುವರಿ ಸಾಮರ್ಥ್ಯ" },
  "signup.riskLevel": { en: "Risk Level", hi: "जोखिम स्तर", kn: "ಅಪಾಯ ಮಟ್ಟ" },
  "signup.season": { en: "Seasonal Advice", hi: "मौसमी सलाह", kn: "ಋತು ಸಲಹೆ" },
  "signup.listenIn": { en: "Listen in", hi: "सुनें", kn: "ಕೇಳಿ" },

  // Login
  "login.heading": { en: "Welcome Back", hi: "वापसी पर स्वागत", kn: "ಮರಳಿ ಸ್ವಾಗತ" },
  "login.subtitle": { en: "Login to your AgriRise Shakti dashboard", hi: "अपने AgriRise शक्ति डैशबोर्ड में लॉगिन करें", kn: "ನಿಮ್ಮ AgriRise ಶಕ್ತಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಲಾಗಿನ್ ಮಾಡಿ" },
  "login.noAccount": { en: "Don't have an account?", hi: "खाता नहीं है?", kn: "ಖಾತೆ ಇಲ್ಲವೇ?" },

  // Soil types
  "soil.red": { en: "Red Soil", hi: "लाल मिट्टी", kn: "ಕೆಂಪು ಮಣ್ಣು" },
  "soil.black": { en: "Black Soil", hi: "काली मिट्टी", kn: "ಕಪ್ಪು ಮಣ್ಣು" },
  "soil.sandy": { en: "Sandy Soil", hi: "रेतीली मिट्टी", kn: "ಮರಳು ಮಣ್ಣು" },
  "soil.clay": { en: "Clay Soil", hi: "चिकनी मिट्टी", kn: "ಜೇಡಿ ಮಣ್ಣು" },

  // Risk levels
  "risk.low": { en: "Low", hi: "कम", kn: "ಕಡಿಮೆ" },
  "risk.medium": { en: "Medium", hi: "मध्यम", kn: "ಮಧ್ಯಮ" },
  "risk.high": { en: "High", hi: "उच्च", kn: "ಹೆಚ್ಚು" },

  // Footer
  "footer.rights": { en: "All rights reserved.", hi: "सर्वाधिकार सुरक्षित।", kn: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ." },
};
