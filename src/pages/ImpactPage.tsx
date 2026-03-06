import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Target, TrendingUp, Shield, Users, Leaf, Award } from "lucide-react";

const AnimatedStat = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let s = 0;
    const step = Math.ceil(value / 40);
    const t = setInterval(() => { s += step; if (s >= value) { setCount(value); clearInterval(t); } else setCount(s); }, 30);
    return () => clearInterval(t);
  }, [inView, value]);
  return (
    <div ref={ref} className="text-center p-8 bg-card rounded-2xl shadow-sm border border-border">
      <p className="text-5xl md:text-6xl font-display font-bold text-primary">{count}{suffix}</p>
      <p className="text-muted-foreground mt-2">{label}</p>
    </div>
  );
};

const ImpactPage = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Our Impact",
      subtitle: "Transforming lives of rural women farmers across India through AI-powered agricultural intelligence",
      stats: [
        { value: 30, suffix: "M+", label: "Women Farmers Targeted" },
        { value: 25, suffix: "%", label: "Potential Income Increase" },
        { value: 30, suffix: "%", label: "Crop Loss Reduction" },
        { value: 70, suffix: "%", label: "Decision Accuracy" },
        { value: 15, suffix: "+", label: "States Covered" },
        { value: 50, suffix: "+", label: "Crop Varieties Supported" },
      ],
      sdgs: "Aligned with UN Sustainable Development Goals",
      sdgList: [
        { num: "SDG 1", title: "No Poverty", desc: "Increasing farmer incomes through better crop decisions and market access", color: "bg-destructive" },
        { num: "SDG 2", title: "Zero Hunger", desc: "Improving crop yields and reducing food waste with AI predictions", color: "bg-warning" },
        { num: "SDG 5", title: "Gender Equality", desc: "Empowering women farmers with equal access to technology and information", color: "bg-accent" },
        { num: "SDG 8", title: "Decent Work", desc: "Creating sustainable agricultural livelihoods and financial inclusion", color: "bg-primary" },
      ],
      stories: "Impact Stories",
      storyList: [
        { icon: TrendingUp, title: "Income Boost", text: "Average income increase of ₹15,000–₹25,000 per season for farmers using our market price forecasting." },
        { icon: Shield, title: "Risk Mitigation", text: "Early warnings have helped farmers avoid crop losses worth ₹50,000+ during unseasonal rains." },
        { icon: Users, title: "Community Growth", text: "Over 500 SHGs connected through the platform, enabling collective bargaining and shared resources." },
        { icon: Leaf, title: "Sustainable Practices", text: "40% of platform users adopted organic farming practices after AI-guided soil analysis." },
      ],
    },
    hi: {
      title: "हमारा प्रभाव",
      subtitle: "AI-संचालित कृषि बुद्धिमत्ता के माध्यम से भारत भर की ग्रामीण महिला किसानों का जीवन बदलना",
      stats: [
        { value: 30, suffix: "M+", label: "लक्षित महिला किसान" },
        { value: 25, suffix: "%", label: "संभावित आय वृद्धि" },
        { value: 30, suffix: "%", label: "फसल हानि में कमी" },
        { value: 70, suffix: "%", label: "निर्णय सटीकता" },
        { value: 15, suffix: "+", label: "राज्य" },
        { value: 50, suffix: "+", label: "फसल किस्में" },
      ],
      sdgs: "संयुक्त राष्ट्र सतत विकास लक्ष्यों के साथ संरेखित",
      sdgList: [
        { num: "SDG 1", title: "गरीबी उन्मूलन", desc: "बेहतर फसल निर्णयों से किसानों की आय बढ़ाना", color: "bg-destructive" },
        { num: "SDG 2", title: "शून्य भूख", desc: "AI भविष्यवाणी से फसल उपज सुधारना", color: "bg-warning" },
        { num: "SDG 5", title: "लैंगिक समानता", desc: "महिला किसानों को तकनीक तक समान पहुंच", color: "bg-accent" },
        { num: "SDG 8", title: "सभ्य कार्य", desc: "टिकाऊ कृषि आजीविका बनाना", color: "bg-primary" },
      ],
      stories: "प्रभाव कहानियां",
      storyList: [
        { icon: TrendingUp, title: "आय वृद्धि", text: "बाज़ार मूल्य पूर्वानुमान का उपयोग करने वाले किसानों की औसत आय ₹15,000-₹25,000 बढ़ी।" },
        { icon: Shield, title: "जोखिम शमन", text: "अनियमित बारिश में ₹50,000+ की फसल हानि से बचाव।" },
        { icon: Users, title: "समुदाय विकास", text: "500+ SHG प्लेटफॉर्म से जुड़े।" },
        { icon: Leaf, title: "टिकाऊ खेती", text: "40% उपयोगकर्ताओं ने जैविक खेती अपनाई।" },
      ],
    },
    kn: {
      title: "ನಮ್ಮ ಪ್ರಭಾವ",
      subtitle: "AI-ಚಾಲಿತ ಕೃಷಿ ಬುದ್ಧಿಮತ್ತೆಯ ಮೂಲಕ ಗ್ರಾಮೀಣ ಮಹಿಳಾ ರೈತರ ಜೀವನ ಬದಲಿಸುವುದು",
      stats: [
        { value: 30, suffix: "M+", label: "ಗುರಿ ಮಹಿಳಾ ರೈತರು" },
        { value: 25, suffix: "%", label: "ಸಂಭಾವ್ಯ ಆದಾಯ ಹೆಚ್ಚಳ" },
        { value: 30, suffix: "%", label: "ಬೆಳೆ ನಷ್ಟ ಕಡಿತ" },
        { value: 70, suffix: "%", label: "ನಿರ್ಧಾರ ನಿಖರತೆ" },
        { value: 15, suffix: "+", label: "ರಾಜ್ಯಗಳು" },
        { value: 50, suffix: "+", label: "ಬೆಳೆ ತಳಿಗಳು" },
      ],
      sdgs: "UN ಸುಸ್ಥಿರ ಅಭಿವೃದ್ಧಿ ಗುರಿಗಳೊಂದಿಗೆ ಹೊಂದಾಣಿಕೆ",
      sdgList: [
        { num: "SDG 1", title: "ಬಡತನ ನಿರ್ಮೂಲನೆ", desc: "ಉತ್ತಮ ಬೆಳೆ ನಿರ್ಧಾರಗಳಿಂದ ರೈತರ ಆದಾಯ ಹೆಚ್ಚಿಸುವುದು", color: "bg-destructive" },
        { num: "SDG 2", title: "ಶೂನ್ಯ ಹಸಿವು", desc: "AI ಮುನ್ಸೂಚನೆಯಿಂದ ಬೆಳೆ ಇಳುವರಿ ಸುಧಾರಿಸುವುದು", color: "bg-warning" },
        { num: "SDG 5", title: "ಲಿಂಗ ಸಮಾನತೆ", desc: "ಮಹಿಳಾ ರೈತರಿಗೆ ತಂತ್ರಜ್ಞಾನಕ್ಕೆ ಸಮಾನ ಪ್ರವೇಶ", color: "bg-accent" },
        { num: "SDG 8", title: "ಉತ್ತಮ ಕೆಲಸ", desc: "ಸುಸ್ಥಿರ ಕೃಷಿ ಜೀವನೋಪಾಯ", color: "bg-primary" },
      ],
      stories: "ಪ್ರಭಾವ ಕಥೆಗಳು",
      storyList: [
        { icon: TrendingUp, title: "ಆದಾಯ ಹೆಚ್ಚಳ", text: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಮುನ್ಸೂಚನೆ ಬಳಸುವ ರೈತರ ಸರಾಸರಿ ಆದಾಯ ₹15,000-₹25,000 ಹೆಚ್ಚಾಯಿತು." },
        { icon: Shield, title: "ಅಪಾಯ ಶಮನ", text: "ಅಕಾಲಿಕ ಮಳೆಯಲ್ಲಿ ₹50,000+ ಬೆಳೆ ನಷ್ಟದಿಂದ ರಕ್ಷಣೆ." },
        { icon: Users, title: "ಸಮುದಾಯ ಬೆಳವಣಿಗೆ", text: "500+ SHG ಗಳು ವೇದಿಕೆಯ ಮೂಲಕ ಸಂಪರ್ಕ." },
        { icon: Leaf, title: "ಸುಸ್ಥಿರ ಅಭ್ಯಾಸ", text: "40% ಬಳಕೆದಾರರು ಸಾವಯವ ಕೃಷಿ ಅಳವಡಿಸಿಕೊಂಡರು." },
      ],
    },
  };

  const c = content[language];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/landing" className="flex items-center gap-2"><span className="text-2xl">🌸</span><span className="font-display font-bold text-lg">AgriRise Shakti</span></Link>
          <Link to="/landing"><Button variant="ghost" size="sm" className="gap-1"><ArrowLeft className="w-4 h-4" /> Back</Button></Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{c.title}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{c.subtitle}</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {c.stats.map((s, i) => (
            <AnimatedStat key={i} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>

        {/* SDGs */}
        <div>
          <h2 className="font-display text-3xl font-bold text-center mb-8">{c.sdgs}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {c.sdgList.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Card className="rounded-2xl overflow-hidden h-full">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <Badge className={`${s.color} text-white shrink-0 px-3 py-1`}>{s.num}</Badge>
                    <div><h3 className="font-display font-bold mb-1">{s.title}</h3><p className="text-sm text-muted-foreground">{s.desc}</p></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stories */}
        <div>
          <h2 className="font-display text-3xl font-bold text-center mb-8">{c.stories}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {c.storyList.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="rounded-2xl h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><s.icon className="w-6 h-6 text-primary" /></div>
                    <h3 className="font-display font-bold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactPage;
