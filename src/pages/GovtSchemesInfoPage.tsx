import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, IndianRupee, Calendar, Users, FileText, CheckCircle } from "lucide-react";

const schemes = [
  {
    name: { en: "PM-KISAN Samman Nidhi", hi: "पीएम-किसान सम्मान निधि", kn: "ಪಿಎಂ-ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ" },
    ministry: { en: "Ministry of Agriculture", hi: "कृषि मंत्रालय", kn: "ಕೃಷಿ ಸಚಿವಾಲಯ" },
    benefit: { en: "Direct income support of ₹6,000/year in 3 installments to all eligible farmer families", hi: "सभी पात्र किसान परिवारों को 3 किस्तों में ₹6,000/वर्ष प्रत्यक्ष आय सहायता", kn: "ಎಲ್ಲಾ ಅರ್ಹ ರೈತ ಕುಟುಂಬಗಳಿಗೆ 3 ಕಂತುಗಳಲ್ಲಿ ₹6,000/ವರ್ಷ ನೇರ ಆದಾಯ ಬೆಂಬಲ" },
    amount: "₹6,000/year",
    deadline: { en: "Ongoing", hi: "चालू", kn: "ನಡೆಯುತ್ತಿದೆ" },
    eligibility: { en: "All small & marginal farmers with cultivable land", hi: "खेती योग्य भूमि वाले सभी छोटे और सीमांत किसान", kn: "ಕೃಷಿ ಯೋಗ್ಯ ಭೂಮಿ ಹೊಂದಿರುವ ಎಲ್ಲಾ ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತರು" },
    howToApply: { en: "Visit nearest CSC center or apply online at pmkisan.gov.in", hi: "निकटतम CSC केंद्र पर जाएं या pmkisan.gov.in पर ऑनलाइन आवेदन करें", kn: "ಹತ್ತಿರದ CSC ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ pmkisan.gov.in ನಲ್ಲಿ ಆನ್‌ಲೈನ್ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ" },
    link: "https://pmkisan.gov.in/",
    documents: ["Aadhaar Card", "Land Records", "Bank Account Details"],
  },
  {
    name: { en: "Mahila Kisan Sashaktikaran Pariyojana (MKSP)", hi: "महिला किसान सशक्तिकरण परियोजना (MKSP)", kn: "ಮಹಿಳಾ ಕಿಸಾನ್ ಸಶಕ್ತೀಕರಣ ಪರಿಯೋಜನಾ (MKSP)" },
    ministry: { en: "Ministry of Rural Development", hi: "ग्रामीण विकास मंत्रालय", kn: "ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿ ಸಚಿವಾಲಯ" },
    benefit: { en: "Training, capacity building, livelihood support and empowerment for women farmers through SHGs", hi: "SHG के माध्यम से महिला किसानों के लिए प्रशिक्षण, क्षमता निर्माण और आजीविका सहायता", kn: "SHG ಮೂಲಕ ಮಹಿಳಾ ರೈತರಿಗೆ ತರಬೇತಿ, ಸಾಮರ್ಥ್ಯ ನಿರ್ಮಾಣ ಮತ್ತು ಜೀವನೋಪಾಯ ಬೆಂಬಲ" },
    amount: "Varies by state",
    deadline: { en: "Open Year-round", hi: "वर्ष भर खुला", kn: "ವರ್ಷಪೂರ್ತಿ ತೆರೆದಿರುತ್ತದೆ" },
    eligibility: { en: "Women farmers, SHG members, rural women", hi: "महिला किसान, SHG सदस्य, ग्रामीण महिलाएँ", kn: "ಮಹಿಳಾ ರೈತರು, SHG ಸದಸ್ಯರು, ಗ್ರಾಮೀಣ ಮಹಿಳೆಯರು" },
    howToApply: { en: "Contact local DRDA office or nearest SHG federation", hi: "स्थानीय DRDA कार्यालय या निकटतम SHG संघ से संपर्क करें", kn: "ಸ್ಥಳೀಯ DRDA ಕಚೇರಿ ಅಥವಾ ಹತ್ತಿರದ SHG ಒಕ್ಕೂಟವನ್ನು ಸಂಪರ್ಕಿಸಿ" },
    link: "https://rural.gov.in/en/deen-dayal-antyodaya-yojana-nrlm",
    documents: ["Aadhaar Card", "SHG Membership", "BPL Certificate"],
  },
  {
    name: { en: "Pradhan Mantri Fasal Bima Yojana (PMFBY)", hi: "प्रधानमंत्री फसल बीमा योजना (PMFBY)", kn: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಫಸಲ್ ಬೀಮಾ ಯೋಜನಾ (PMFBY)" },
    benefit: { en: "Comprehensive crop insurance against natural calamities, pests and diseases at very low premium rates (1.5-5%)", hi: "प्राकृतिक आपदाओं, कीटों और रोगों के खिलाफ बहुत कम प्रीमियम (1.5-5%) पर व्यापक फसल बीमा", kn: "ನೈಸರ್ಗಿಕ ವಿಕೋಪಗಳು, ಕೀಟಗಳು ಮತ್ತು ರೋಗಗಳ ವಿರುದ್ಧ ಅತ್ಯಂತ ಕಡಿಮೆ ಪ್ರೀಮಿಯಂನಲ್ಲಿ ಸಮಗ್ರ ಬೆಳೆ ವಿಮೆ" },
    ministry: { en: "Ministry of Agriculture", hi: "कृषि मंत्रालय", kn: "ಕೃಷಿ ಸಚಿವಾಲಯ" },
    amount: "Up to full sum insured",
    deadline: { en: "Before sowing season", hi: "बुवाई मौसम से पहले", kn: "ಬಿತ್ತನೆ ಋತುವಿನ ಮೊದಲು" },
    eligibility: { en: "All farmers including sharecroppers and tenant farmers", hi: "बटाईदार और किरायेदार किसानों सहित सभी किसान", kn: "ಪಾಲುದಾರ ಮತ್ತು ಗೇಣಿ ರೈತರು ಸೇರಿದಂತೆ ಎಲ್ಲಾ ರೈತರು" },
    howToApply: { en: "Apply through nearest bank, CSC, or pmfby.gov.in portal", hi: "निकटतम बैंक, CSC, या pmfby.gov.in पोर्टल के माध्यम से आवेदन करें", kn: "ಹತ್ತಿರದ ಬ್ಯಾಂಕ್, CSC, ಅಥವಾ pmfby.gov.in ಪೋರ್ಟಲ್ ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ" },
    link: "https://pmfby.gov.in/",
    documents: ["Aadhaar Card", "Land Records", "Bank Account", "Sowing Certificate"],
  },
  {
    name: { en: "Kisan Credit Card (KCC)", hi: "किसान क्रेडिट कार्ड (KCC)", kn: "ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ (KCC)" },
    ministry: { en: "Ministry of Finance", hi: "वित्त मंत्रालय", kn: "ಹಣಕಾಸು ಸಚಿವಾಲಯ" },
    benefit: { en: "Short-term credit for crop production, post-harvest expenses and maintenance at subsidized 4% interest rate", hi: "फसल उत्पादन, कटाई उपरांत खर्चों के लिए सब्सिडी दर पर 4% ब्याज पर अल्पकालिक ऋण", kn: "ಬೆಳೆ ಉತ್ಪಾದನೆ, ಕೊಯ್ಲಿನ ನಂತರದ ವೆಚ್ಚಗಳಿಗೆ ಸಬ್ಸಿಡಿ 4% ಬಡ್ಡಿ ದರದಲ್ಲಿ ಅಲ್ಪಾವಧಿ ಸಾಲ" },
    amount: "Up to ₹3,00,000",
    deadline: { en: "Ongoing", hi: "चालू", kn: "ನಡೆಯುತ್ತಿದೆ" },
    eligibility: { en: "All farmers, fishers, animal husbandry practitioners", hi: "सभी किसान, मछुआरे, पशुपालक", kn: "ಎಲ್ಲಾ ರೈತರು, ಮೀನುಗಾರರು, ಪಶುಸಂಗೋಪನೆ" },
    howToApply: { en: "Apply at nearest commercial bank, cooperative bank, or regional rural bank", hi: "निकटतम वाणिज्यिक बैंक, सहकारी बैंक, या ग्रामीण बैंक में आवेदन करें", kn: "ಹತ್ತಿರದ ವಾಣಿಜ್ಯ ಬ್ಯಾಂಕ್, ಸಹಕಾರ ಬ್ಯಾಂಕ್ ಅಥವಾ ಗ್ರಾಮೀಣ ಬ್ಯಾಂಕ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ" },
    link: "https://www.pmjdy.gov.in/",
    documents: ["Aadhaar Card", "Land Records", "Passport Photo", "Application Form"],
  },
  {
    name: { en: "National Mission for Sustainable Agriculture (NMSA)", hi: "राष्ट्रीय सतत कृषि मिशन (NMSA)", kn: "ಸುಸ್ಥಿರ ಕೃಷಿಗಾಗಿ ರಾಷ್ಟ್ರೀಯ ಮಿಷನ್ (NMSA)" },
    ministry: { en: "Ministry of Agriculture", hi: "कृषि मंत्रालय", kn: "ಕೃಷಿ ಸಚಿವಾಲಯ" },
    benefit: { en: "Support for organic farming, water management, soil health cards, and climate-resilient agriculture practices", hi: "जैविक खेती, जल प्रबंधन, मृदा स्वास्थ्य कार्ड और जलवायु-लचीली कृषि के लिए सहायता", kn: "ಸಾವಯವ ಕೃಷಿ, ನೀರು ನಿರ್ವಹಣೆ, ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಕಾರ್ಡ್ ಮತ್ತು ಹವಾಮಾನ-ನಿರೋಧಕ ಕೃಷಿಗೆ ಬೆಂಬಲ" },
    amount: "Varies by component",
    deadline: { en: "State-level deadlines", hi: "राज्य-स्तरीय समय-सीमा", kn: "ರಾಜ್ಯ ಮಟ್ಟದ ಗಡುವು" },
    eligibility: { en: "All farmers, priority given to women and small holders", hi: "सभी किसान, महिलाओं और छोटे किसानों को प्राथमिकता", kn: "ಎಲ್ಲಾ ರೈತರು, ಮಹಿಳೆಯರು ಮತ್ತು ಸಣ್ಣ ರೈತರಿಗೆ ಆದ್ಯತೆ" },
    howToApply: { en: "Contact District Agriculture Office or apply through state agriculture portal", hi: "जिला कृषि कार्यालय से संपर्क करें या राज्य कृषि पोर्टल के माध्यम से आवेदन करें", kn: "ಜಿಲ್ಲಾ ಕೃಷಿ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ ಅಥವಾ ರಾಜ್ಯ ಕೃಷಿ ಪೋರ್ಟಲ್ ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ" },
    link: "https://nmsa.dac.gov.in/",
    documents: ["Aadhaar Card", "Land Records", "Bank Account"],
  },
  {
    name: { en: "Rashtriya Mahila Kosh (RMK)", hi: "राष्ट्रीय महिला कोष (RMK)", kn: "ರಾಷ್ಟ್ರೀಯ ಮಹಿಳಾ ಕೋಶ (RMK)" },
    ministry: { en: "Ministry of Women & Child Development", hi: "महिला और बाल विकास मंत्रालय", kn: "ಮಹಿಳಾ ಮತ್ತು ಮಕ್ಕಳ ಅಭಿವೃದ್ಧಿ ಸಚಿವಾಲಯ" },
    benefit: { en: "Micro-credit up to ₹25,000 to women through NGOs and SHGs for livelihood activities", hi: "आजीविका गतिविधियों के लिए NGO और SHG के माध्यम से महिलाओं को ₹25,000 तक का सूक्ष्म-ऋण", kn: "ಜೀವನೋಪಾಯ ಚಟುವಟಿಕೆಗಳಿಗಾಗಿ NGO ಮತ್ತು SHG ಮೂಲಕ ಮಹಿಳೆಯರಿಗೆ ₹25,000 ವರೆಗೆ ಸೂಕ್ಷ್ಮ-ಸಾಲ" },
    amount: "Up to ₹25,000",
    deadline: { en: "Ongoing", hi: "चालू", kn: "ನಡೆಯುತ್ತಿದೆ" },
    eligibility: { en: "Women in SHGs, below poverty line, rural areas", hi: "SHG में महिलाएँ, गरीबी रेखा से नीचे, ग्रामीण क्षेत्र", kn: "SHG ಮಹಿಳೆಯರು, ಬಡತನ ರೇಖೆಗಿಂತ ಕೆಳಗೆ, ಗ್ರಾಮೀಣ ಪ್ರದೇಶ" },
    howToApply: { en: "Apply through registered NGO partner or SHG federation in your district", hi: "अपने जिले में पंजीकृत NGO या SHG संघ के माध्यम से आवेदन करें", kn: "ನಿಮ್ಮ ಜಿಲ್ಲೆಯ ನೋಂದಾಯಿತ NGO ಅಥವಾ SHG ಒಕ್ಕೂಟದ ಮೂಲಕ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ" },
    link: "https://rmk.nic.in/",
    documents: ["Aadhaar Card", "SHG Membership", "BPL Certificate", "Bank Account"],
  },
];

const GovtSchemesInfoPage = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/landing" className="flex items-center gap-2"><span className="text-2xl">🌸</span><span className="font-display font-bold text-lg">AgriRise Shakti</span></Link>
          <Link to="/landing"><Button variant="ghost" size="sm" className="gap-1"><ArrowLeft className="w-4 h-4" /> Back</Button></Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {language === "hi" ? "महिला किसानों के लिए सरकारी योजनाएँ" : language === "kn" ? "ಮಹಿಳಾ ರೈತರಿಗೆ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು" : "Government Schemes for Women Farmers"}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === "hi" ? "सभी प्रमुख सरकारी योजनाओं की विस्तृत जानकारी और सीधे आवेदन लिंक" : language === "kn" ? "ಎಲ್ಲಾ ಪ್ರಮುಖ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ವಿವರ ಮಾಹಿತಿ ಮತ್ತು ನೇರ ಅರ್ಜಿ ಲಿಂಕ್‌ಗಳು" : "Complete details of all major government schemes with direct application links"}
          </p>
        </motion.div>

        <div className="space-y-8">
          {schemes.map((scheme, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <CardTitle className="font-display text-xl flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary shrink-0" />
                        {scheme.name[language]}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{scheme.ministry[language]}</p>
                    </div>
                    <Badge className="bg-accent text-accent-foreground text-sm px-3">{scheme.amount}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{scheme.benefit[language]}</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <div><p className="text-xs text-muted-foreground font-semibold">{language === "hi" ? "समय-सीमा" : language === "kn" ? "ಗಡುವು" : "Deadline"}</p><p className="text-sm">{scheme.deadline[language]}</p></div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <div><p className="text-xs text-muted-foreground font-semibold">{language === "hi" ? "पात्रता" : language === "kn" ? "ಅರ್ಹತೆ" : "Eligibility"}</p><p className="text-sm">{scheme.eligibility[language]}</p></div>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-xl p-4">
                    <p className="text-sm font-semibold mb-1">{language === "hi" ? "आवेदन कैसे करें" : language === "kn" ? "ಅರ್ಜಿ ಹೇಗೆ ಸಲ್ಲಿಸುವುದು" : "How to Apply"}</p>
                    <p className="text-sm text-muted-foreground">{scheme.howToApply[language]}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">{language === "hi" ? "आवश्यक दस्तावेज" : language === "kn" ? "ಅಗತ್ಯ ದಾಖಲೆಗಳು" : "Required Documents"}</p>
                    <div className="flex flex-wrap gap-2">
                      {scheme.documents.map((doc, j) => (
                        <Badge key={j} variant="secondary" className="text-xs flex items-center gap-1"><CheckCircle className="w-3 h-3" /> {doc}</Badge>
                      ))}
                    </div>
                  </div>

                  <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full rounded-xl gap-2">
                      <ExternalLink className="w-4 h-4" />
                      {language === "hi" ? "अभी आवेदन करें" : language === "kn" ? "ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ" : "Apply Now"}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovtSchemesInfoPage;
