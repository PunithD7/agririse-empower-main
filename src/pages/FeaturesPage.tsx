import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sprout, CloudRain, TrendingUp, MessageCircle, Microscope, ScanEye, Wallet, FileText, ArrowLeft, ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Sprout,
    titleKey: "solution.crop",
    desc: {
      en: "Our AI-powered crop intelligence engine analyzes soil type, rainfall patterns, temperature, and historical data to predict optimal crop yields. Get personalized recommendations for your specific farm conditions, including expected yield per acre, confidence scores, and seasonal planting advice. The system uses advanced Random Forest and XGBoost models trained on decades of Indian agricultural data.",
      hi: "हमारा AI-संचालित फसल बुद्धिमत्ता इंजन मिट्टी के प्रकार, वर्षा पैटर्न, तापमान और ऐतिहासिक डेटा का विश्लेषण करके इष्टतम फसल उपज की भविष्यवाणी करता है। अपनी विशिष्ट खेत की स्थितियों के लिए व्यक्तिगत सिफारिशें प्राप्त करें।",
      kn: "ನಮ್ಮ AI-ಚಾಲಿತ ಬೆಳೆ ಬುದ್ಧಿಮತ್ತೆ ಎಂಜಿನ್ ಮಣ್ಣಿನ ಪ್ರಕಾರ, ಮಳೆ ಮಾದರಿಗಳು, ತಾಪಮಾನ ಮತ್ತು ಐತಿಹಾಸಿಕ ಡೇಟಾವನ್ನು ವಿಶ್ಲೇಷಿಸಿ ಅತ್ಯುತ್ತಮ ಬೆಳೆ ಇಳುವರಿಯನ್ನು ಊಹಿಸುತ್ತದೆ.",
    },
    link: "/crop-intelligence",
  },
  {
    icon: CloudRain,
    titleKey: "solution.climate",
    desc: {
      en: "Stay ahead of weather uncertainties with our climate risk prediction system. We analyze monsoon patterns, drought probability, flood risks, and pest outbreak likelihood to generate a comprehensive risk score. Receive early warnings and mitigation strategies to protect your crops before disaster strikes.",
      hi: "हमारी जलवायु जोखिम भविष्यवाणी प्रणाली से मौसम की अनिश्चितताओं से आगे रहें। हम मानसून पैटर्न, सूखे की संभावना, बाढ़ के जोखिम और कीट प्रकोप की संभावना का विश्लेषण करते हैं।",
      kn: "ನಮ್ಮ ಹವಾಮಾನ ಅಪಾಯ ಮುನ್ಸೂಚನೆ ವ್ಯವಸ್ಥೆಯೊಂದಿಗೆ ಹವಾಮಾನ ಅನಿಶ್ಚಿತತೆಗಳಿಗಿಂತ ಮುಂದಿರಿ.",
    },
    link: "/risk-assessment",
  },
  {
    icon: TrendingUp,
    titleKey: "solution.market",
    desc: {
      en: "Never sell at the wrong price again. Our Prophet and LSTM-based time-series models analyze historical crop prices across mandis to forecast 30-day price trends. Get buy/sell recommendations, best mandi suggestions, and optimal selling windows to maximize your income.",
      hi: "फिर कभी गलत कीमत पर न बेचें। हमारे समय-श्रृंखला मॉडल 30-दिन की कीमत प्रवृत्तियों का पूर्वानुमान लगाते हैं।",
      kn: "ಮತ್ತೆ ತಪ್ಪು ಬೆಲೆಗೆ ಮಾರಾಟ ಮಾಡಬೇಡಿ. ನಮ್ಮ ಸಮಯ-ಶ್ರೇಣಿ ಮಾದರಿಗಳು 30-ದಿನಗಳ ಬೆಲೆ ಪ್ರವೃತ್ತಿಗಳನ್ನು ಊಹಿಸುತ್ತವೆ.",
    },
    link: "/market-insights",
  },
  {
    icon: MessageCircle,
    titleKey: "solution.assistant",
    desc: {
      en: "Your personal AI farming assistant speaks your language — English, Hindi, or Kannada. Ask questions about crop diseases, government schemes, best farming practices, and more. Powered by advanced RAG (Retrieval-Augmented Generation) technology that references real agricultural documents, government PDFs, and expert knowledge.",
      hi: "आपका व्यक्तिगत AI कृषि सहायक आपकी भाषा बोलता है — हिंदी, अंग्रेजी, या कन्नड़। फसल रोगों, सरकारी योजनाओं के बारे में प्रश्न पूछें।",
      kn: "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ AI ಕೃಷಿ ಸಹಾಯಕ ನಿಮ್ಮ ಭಾಷೆ ಮಾತನಾಡುತ್ತಾನೆ — ಕನ್ನಡ, ಹಿಂದಿ, ಅಥವಾ ಇಂಗ್ಲಿಷ್.",
    },
    link: "/ai-assistant",
  },
  {
    icon: Microscope,
    titleKey: "solution.soil",
    desc: {
      en: "Upload a photo of your soil and our AI instantly classifies it — Red Soil, Black Soil, Sandy, or Clay. Based on the analysis, combined with your location and climate zone, receive tailored crop recommendations with expected yields, risk levels, and seasonal planting advice.",
      hi: "अपनी मिट्टी की तस्वीर अपलोड करें और हमारा AI तुरंत इसे वर्गीकृत करता है। विश्लेषण के आधार पर अनुकूलित फसल सिफारिशें प्राप्त करें।",
      kn: "ನಿಮ್ಮ ಮಣ್ಣಿನ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ನಮ್ಮ AI ತಕ್ಷಣವೇ ಅದನ್ನು ವರ್ಗೀಕರಿಸುತ್ತದೆ.",
    },
    link: "/signup",
  },
  {
    icon: ScanEye,
    titleKey: "solution.disease",
    desc: {
      en: "Take a photo of an affected leaf and our CNN model, trained on the PlantVillage dataset with 50,000+ images, identifies the disease with high accuracy. Get disease name, severity level, confidence score, and recommended treatment steps — all in seconds, even offline.",
      hi: "प्रभावित पत्ती की तस्वीर लें और हमारा CNN मॉडल रोग की पहचान करता है। रोग का नाम, गंभीरता, और उपचार के कदम प्राप्त करें।",
      kn: "ಪ್ರಭಾವಿತ ಎಲೆಯ ಫೋಟೋ ತೆಗೆದುಕೊಳ್ಳಿ ಮತ್ತು ನಮ್ಮ CNN ಮಾದರಿ ರೋಗವನ್ನು ಗುರುತಿಸುತ್ತದೆ.",
    },
    link: "/disease-detection",
  },
  {
    icon: Wallet,
    titleKey: "solution.finance",
    desc: {
      en: "Our ML-based credit scoring system evaluates farm yield stability, risk scores, income predictions, and crop diversification to generate a Financial Inclusion Score. Get micro-loan eligibility assessment, SHG group recommendations, and direct links to apply for schemes like KCC and PMJDY.",
      hi: "हमारी ML-आधारित क्रेडिट स्कोरिंग प्रणाली वित्तीय समावेशन स्कोर उत्पन्न करती है। माइक्रो-लोन पात्रता और SHG समूह सिफारिशें प्राप्त करें।",
      kn: "ನಮ್ಮ ML-ಆಧಾರಿತ ಕ್ರೆಡಿಟ್ ಸ್ಕೋರಿಂಗ್ ವ್ಯವಸ್ಥೆ ಆರ್ಥಿಕ ಸೇರ್ಪಡೆ ಅಂಕವನ್ನು ರಚಿಸುತ್ತದೆ.",
    },
    link: "/financial-inclusion",
  },
  {
    icon: FileText,
    titleKey: "solution.schemes",
    desc: {
      en: "Access all government schemes designed for women farmers in one place. From PM-KISAN's ₹6,000 annual support to MKSP's capacity building programs, KCC's low-interest credit, and PMFBY's crop insurance — with direct application links and eligibility checks.",
      hi: "एक ही स्थान पर महिला किसानों के लिए बनी सभी सरकारी योजनाओं तक पहुँचें। सीधे आवेदन लिंक और पात्रता जांच के साथ।",
      kn: "ಮಹಿಳಾ ರೈತರಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ಪ್ರವೇಶಿಸಿ.",
    },
    link: "/government-schemes-info",
  },
];

const FeaturesPage = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/landing" className="flex items-center gap-2">
            <span className="text-2xl">🌸</span>
            <span className="font-display font-bold text-lg">AgriRise Shakti</span>
          </Link>
          <Link to="/landing"><Button variant="ghost" size="sm" className="gap-1"><ArrowLeft className="w-4 h-4" /> Back</Button></Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{t("solution.heading")}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("solution.desc")}</p>
        </motion.div>

        <div className="space-y-8">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-xl font-bold mb-3">{t(f.titleKey)}</h2>
                    <p className="text-muted-foreground leading-relaxed">{f.desc[language]}</p>
                  </div>
                  <Link to={f.link} className="shrink-0">
                    <Button variant="outline" className="rounded-xl gap-2">
                      Explore <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
