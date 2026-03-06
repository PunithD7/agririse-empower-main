import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence, type Easing } from "framer-motion";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe, Sprout, CloudRain, TrendingUp, MessageCircle, Microscope, ScanEye, Wallet, FileText,
  AlertTriangle, DollarSign, BarChart3, Database, Quote, Menu, X, ArrowRight, Star, Phone, Mail, MapPin,
  Heart, Shield, Users, CheckCircle, Zap, ExternalLink, Play, ChevronDown, Leaf, Sun, Droplets,
} from "lucide-react";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/* ── animation variants ── */
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as Easing } } };
const fadeLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const fadeRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } };
const float = { animate: { y: [0, -10, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as Easing } } };

const Section = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.section ref={ref} id={id} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.section>
  );
};

const AnimatedStat = ({ value, suffix, label, icon: Icon }: { value: number; suffix: string; label: string; icon: any }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(value / 40);
    const timer = setInterval(() => { start += step; if (start >= value) { setCount(value); clearInterval(timer); } else setCount(start); }, 30);
    return () => clearInterval(timer);
  }, [inView, value]);
  return (
    <motion.div ref={ref} variants={scaleIn} className="text-center group">
      <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <p className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{count}{suffix}</p>
      <p className="text-sm text-muted-foreground mt-1 font-medium">{label}</p>
    </motion.div>
  );
};

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "kn", label: "ಕನ್ನಡ" },
];

/* ── Particle background component ── */
const ParticleField = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-primary/20"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 2 }}
      />
    ))}
  </div>
);

const LandingPage = () => {
  const { t, language, setLanguage } = useLanguage();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: t("landing.home"), href: "#home" },
    { label: t("landing.about"), href: "/about" },
    { label: t("landing.features"), href: "/features" },
    { label: t("landing.impact"), href: "/impact" },
    { label: t("landing.govtSchemes"), href: "/government-schemes-info" },
    { label: t("landing.contact"), href: "#cta" },
  ];

  const features = [
    { icon: Sprout, label: t("solution.crop"), desc: language === "hi" ? "AI फसल उपज भविष्यवाणी" : language === "kn" ? "AI ಬೆಳೆ ಇಳುವರಿ ಮುನ್ಸೂಚನೆ" : "AI-powered crop yield prediction", link: "/crop-intelligence", color: "from-emerald-500 to-green-600" },
    { icon: CloudRain, label: t("solution.climate"), desc: language === "hi" ? "मौसम जोखिम विश्लेषण" : language === "kn" ? "ಹವಾಮಾನ ಅಪಾಯ ವಿಶ್ಲೇಷಣೆ" : "Weather risk analysis", link: "/risk-assessment", color: "from-blue-500 to-cyan-600" },
    { icon: TrendingUp, label: t("solution.market"), desc: language === "hi" ? "30-दिन मूल्य पूर्वानुमान" : language === "kn" ? "30-ದಿನ ಬೆಲೆ ಮುನ್ಸೂಚನೆ" : "30-day price forecasting", link: "/market-insights", color: "from-orange-500 to-amber-600" },
    { icon: MessageCircle, label: t("solution.assistant"), desc: language === "hi" ? "बहुभाषी AI सहायक" : language === "kn" ? "ಬಹುಭಾಷಾ AI ಸಹಾಯಕ" : "Multilingual AI chatbot", link: "/ai-assistant", color: "from-purple-500 to-violet-600" },
    { icon: Microscope, label: t("solution.soil"), desc: language === "hi" ? "मिट्टी विश्लेषण और सिफारिश" : language === "kn" ? "ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಶಿಫಾರಸು" : "Soil analysis & recommendation", link: "/signup", color: "from-yellow-500 to-orange-600" },
    { icon: ScanEye, label: t("solution.disease"), desc: language === "hi" ? "छवि से रोग पहचान" : language === "kn" ? "ಚಿತ್ರದಿಂದ ರೋಗ ಪತ್ತೆ" : "Image-based disease detection", link: "/disease-detection", color: "from-red-500 to-pink-600" },
    { icon: Wallet, label: t("solution.finance"), desc: language === "hi" ? "क्रेडिट स्कोर और माइक्रो-लोन" : language === "kn" ? "ಕ್ರೆಡಿಟ್ ಸ್ಕೋರ್ ಮತ್ತು ಸೂಕ್ಷ್ಮ-ಸಾಲ" : "Credit scoring & micro-loans", link: "/financial-inclusion", color: "from-teal-500 to-emerald-600" },
    { icon: FileText, label: t("solution.schemes"), desc: language === "hi" ? "योजनाओं की जानकारी और आवेदन" : language === "kn" ? "ಯೋಜನೆಗಳ ಮಾಹಿತಿ ಮತ್ತು ಅರ್ಜಿ" : "Scheme info & direct apply links", link: "/government-schemes-info", color: "from-indigo-500 to-blue-600" },
  ];

  const problems = [
    { icon: DollarSign, title: t("problem.income"), desc: t("problem.incomeDesc") },
    { icon: CloudRain, title: t("problem.climate"), desc: t("problem.climateDesc") },
    { icon: BarChart3, title: t("problem.price"), desc: t("problem.priceDesc") },
    { icon: Database, title: t("problem.data"), desc: t("problem.dataDesc") },
  ];

  const testimonials = [
    { name: "Lakshmi Devi", loc: "Karnataka", text: t("testimonial.1"), rating: 5 },
    { name: "Savitri Bai", loc: "Maharashtra", text: t("testimonial.2"), rating: 5 },
    { name: "Kavitha R.", loc: "Karnataka", text: t("testimonial.3"), rating: 4 },
  ];

  const govtSchemes = [
    { name: "PM-KISAN", desc: language === "hi" ? "₹6000 वार्षिक सहायता" : language === "kn" ? "₹6000 ವಾರ್ಷಿಕ ನೆರವು" : "₹6000 annual income support", link: "https://pmkisan.gov.in/" },
    { name: "NABARD", desc: language === "hi" ? "ग्रामीण विकास वित्तपोषण" : language === "kn" ? "ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿ ಹಣಕಾಸು" : "Rural development financing", link: "https://www.nabard.org/" },
    { name: "PMFBY", desc: language === "hi" ? "फसल बीमा योजना" : language === "kn" ? "ಬೆಳೆ ವಿಮೆ ಯೋಜನೆ" : "Crop insurance scheme", link: "https://pmfby.gov.in/" },
    { name: "KCC", desc: language === "hi" ? "किसान क्रेडिट कार्ड" : language === "kn" ? "ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್" : "Kisan Credit Card @ 4%", link: "https://www.pmjdy.gov.in/" },
  ];

  const whyChoose = [
    { icon: Heart, title: language === "hi" ? "महिला-केंद्रित" : language === "kn" ? "ಮಹಿಳಾ-ಕೇಂದ್ರಿತ" : "Women-Centric", desc: language === "hi" ? "हर सुविधा महिला किसानों के लिए" : language === "kn" ? "ಪ್ರತಿ ವೈಶಿಷ್ಟ್ಯ ಮಹಿಳಾ ರೈತರಿಗಾಗಿ" : "Every feature designed for women farmers" },
    { icon: Globe, title: language === "hi" ? "बहुभाषी" : language === "kn" ? "ಬಹುಭಾಷಾ" : "Multilingual", desc: language === "hi" ? "हिंदी, कन्नड़, अंग्रेजी में" : language === "kn" ? "ಹಿಂದಿ, ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್" : "Hindi, Kannada & English support" },
    { icon: Shield, title: language === "hi" ? "विश्वसनीय" : language === "kn" ? "ವಿಶ್ವಾಸಾರ್ಹ" : "Trusted", desc: language === "hi" ? "सरकारी योजनाओं से जुड़ा" : language === "kn" ? "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳಿಗೆ ಸಂಪರ್ಕ" : "Aligned with govt initiatives" },
    { icon: Zap, title: language === "hi" ? "AI शक्ति" : language === "kn" ? "AI ಶಕ್ತಿ" : "AI Powered", desc: language === "hi" ? "उन्नत AI तकनीक" : language === "kn" ? "ಮುಂದುವರಿದ AI ತಂತ್ರಜ್ಞಾನ" : "Advanced AI technology" },
  ];

  const videoGuides = [
    { title: language === "hi" ? "जैविक खेती की तकनीक" : language === "kn" ? "ಸಾವಯವ ಕೃಷಿ ತಂತ್ರಗಳು" : "Organic Farming Techniques", embedId: "mZXetb1TPEg", desc: language === "hi" ? "प्राकृतिक तरीकों से बेहतर उपज" : language === "kn" ? "ನೈಸರ್ಗಿಕ ವಿಧಾನಗಳಿಂದ ಉತ್ತಮ ಇಳುವರಿ" : "Better yields with natural methods" },
    { title: language === "hi" ? "ड्रिप सिंचाई गाइड" : language === "kn" ? "ಹನಿ ನೀರಾವರಿ ಮಾರ್ಗದರ್ಶಿ" : "Drip Irrigation Guide", embedId: "0rSWeRYhMfU?", desc: language === "hi" ? "पानी बचाएं, उपज बढ़ाएं" : language === "kn" ? "ನೀರು ಉಳಿಸಿ, ಇಳುವರಿ ಹೆಚ್ಚಿಸಿ" : "Save water, increase yield" },
    { title: language === "hi" ? "मिट्टी परीक्षण कैसे करें" : language === "kn" ? "ಮಣ್ಣಿನ ಪರೀಕ್ಷೆ ಹೇಗೆ" : "How to Test Your Soil", embedId: "1AbU9QHMUMA", desc: language === "hi" ? "सही मिट्टी जानकारी से सही फसल" : language === "kn" ? "ಸರಿಯಾದ ಮಣ್ಣಿನ ಮಾಹಿತಿಯಿಂದ ಸರಿಯಾದ ಬೆಳೆ" : "Right soil info for right crops" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* ===== NAVBAR ===== */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          <Link to="/landing" className="flex items-center gap-2 group">
            <motion.span className="text-2xl" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>🌸</motion.span>
            <span className={`font-display font-bold text-lg ${scrolled ? "text-foreground" : "text-white"} transition-colors`}>AgriRise Shakti</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) =>
              l.href.startsWith("#") ? (
                <a key={l.href} href={l.href} className={`text-sm font-medium ${scrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"} transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full`}>{l.label}</a>
              ) : (
                <Link key={l.href} to={l.href} className={`text-sm font-medium ${scrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"} transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full`}>{l.label}</Link>
              )
            )}
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className={`gap-1 ${scrolled ? "" : "text-white hover:bg-white/10"}`}><Globe className="w-4 h-4" /><span className="hidden sm:inline">{languages.find(l => l.code === language)?.label}</span></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((l) => (<DropdownMenuItem key={l.code} onClick={() => setLanguage(l.code)}>{l.label}</DropdownMenuItem>))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/login"><Button variant={scrolled ? "outline" : "ghost"} size="sm" className={`rounded-full hidden sm:flex ${!scrolled && "text-white border-white/30 hover:bg-white/10"}`}>{t("landing.login")}</Button></Link>
            <Link to="/signup"><Button size="sm" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">{t("landing.signup")}</Button></Link>
            <Button variant="ghost" size="icon" className={`md:hidden ${!scrolled && "text-white"}`} onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenu && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border overflow-hidden">
              <div className="p-4 space-y-2">
                {navLinks.map((l) =>
                  l.href.startsWith("#") ? (
                    <a key={l.href} href={l.href} onClick={() => setMobileMenu(false)} className="block py-2 text-sm text-muted-foreground">{l.label}</a>
                  ) : (
                    <Link key={l.href} to={l.href} onClick={() => setMobileMenu(false)} className="block py-2 text-sm text-muted-foreground">{l.label}</Link>
                  )
                )}
                <Link to="/login" className="block"><Button variant="outline" className="w-full rounded-full">{t("landing.login")}</Button></Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ===== HERO WITH VIDEO BACKGROUND ===== */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80"
          >
            <source src="/farm.mp4" type="video/mp4" />
            
          </video>
          {/* Multi-layer gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        </div>

        {/* Animated grain texture overlay */}
        <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '128px' }} />

        {/* Floating decorative elements */}
        <motion.div {...float} className="absolute top-32 right-20 hidden lg:block z-10">
          <div className="w-24 h-24 rounded-full bg-accent/15 backdrop-blur-md border border-accent/20 flex items-center justify-center shadow-2xl">
            <Leaf className="w-12 h-12 text-accent drop-shadow-lg" />
          </div>
        </motion.div>
        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as Easing }} className="absolute bottom-40 right-40 hidden lg:block z-10">
          <div className="w-20 h-20 rounded-full bg-warning/15 backdrop-blur-md border border-warning/20 flex items-center justify-center shadow-2xl">
            <Sun className="w-10 h-10 text-warning drop-shadow-lg" />
          </div>
        </motion.div>
        <motion.div animate={{ y: [0, -20, 0], x: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as Easing }} className="absolute top-1/2 right-16 hidden xl:block z-10">
          <div className="w-14 h-14 rounded-full bg-info/15 backdrop-blur-md border border-info/20 flex items-center justify-center shadow-2xl">
            <Droplets className="w-7 h-7 text-info drop-shadow-lg" />
          </div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 md:py-0 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }}>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}>
                <Badge className="bg-accent/90 text-accent-foreground mb-6 text-sm px-4 py-2 rounded-full shadow-lg">
                  🌾 {language === "hi" ? "AI-संचालित कृषि क्रांति" : language === "kn" ? "AI-ಚಾಲಿತ ಕೃಷಿ ಕ್ರಾಂತಿ" : "AI-Powered Agriculture Revolution"}
                </Badge>
              </motion.div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="block"
                >
                  {t("hero.heading")}
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-lg md:text-2xl text-white/80 mt-6 font-body leading-relaxed drop-shadow-md"
              >
                {t("hero.subheading")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="flex flex-wrap gap-4 mt-10"
              >
                <Link to="/signup">
                  <Button size="lg" className="rounded-full text-base px-10 h-14 bg-accent text-accent-foreground hover:bg-accent/90 shadow-2xl gap-2 text-lg font-semibold glow-pulse">
                    {t("hero.getStarted")} <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href="#video-guides">
                  <Button variant="outline" size="lg" className="rounded-full text-base px-10 h-14 border-white/40 text-white hover:bg-white/10 gap-2 text-lg backdrop-blur-sm">
                    <Play className="w-5 h-5" /> {language === "hi" ? "वीडियो देखें" : language === "kn" ? "ವೀಡಿಯೊ ನೋಡಿ" : "Watch Videos"}
                  </Button>
                </a>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="text-white/50 text-sm mt-8"
              >{t("hero.trust")}</motion.p>
            </motion.div>

            {/* Stats overlay */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "30M+", label: language === "hi" ? "किसान जुड़े" : language === "kn" ? "ರೈತರು ಸೇರಿದ್ದಾರೆ" : "Farmers Reached", icon: Users },
                  { val: "25%", label: language === "hi" ? "आय में वृद्धि" : language === "kn" ? "ಆದಾಯ ಹೆಚ್ಚಳ" : "Income Growth", icon: TrendingUp },
                  { val: "8", label: language === "hi" ? "AI मॉड्यूल" : language === "kn" ? "AI ಮಾಡ್ಯೂಲ್‌ಗಳು" : "AI Modules", icon: Zap },
                  { val: "3", label: language === "hi" ? "भाषाएँ" : language === "kn" ? "ಭಾಷೆಗಳು" : "Languages", icon: Globe },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.15 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300"
                  >
                    <s.icon className="w-6 h-6 text-accent mb-2" />
                    <p className="text-3xl font-display font-bold text-white">{s.val}</p>
                    <p className="text-sm text-white/60">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* ===== MARQUEE TRUST BAR ===== */}
      <div className="bg-primary py-4 overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(2)].map((_, rep) => (
            <div key={rep} className="flex gap-12 items-center">
              {["🌾 PM-KISAN Aligned", "🛡️ PMFBY Integrated", "💳 KCC Supported", "🏦 NABARD Partnered", "🤖 AI-Powered Insights", "🌍 3 Languages", "👩‍🌾 Women-First Design", "📊 Real-time Data"].map((item, i) => (
                <span key={i} className="text-primary-foreground/80 font-medium text-sm px-4">{item}</span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ===== WHY CHOOSE US - Glass Cards ===== */}
      <Section className="py-20 px-4 relative">
        <ParticleField />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
            {language === "hi" ? "क्यों चुनें " : language === "kn" ? "ಏಕೆ ಆಯ್ಕೆ ಮಾಡಿ " : "Why Choose "}
            <span className="gradient-text-animated">AgriRise Shakti</span>?
          </motion.h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14 text-lg">
            {language === "hi" ? "हर महिला किसान के लिए AI की शक्ति" : language === "kn" ? "ಪ್ರತಿ ಮಹಿಳಾ ರೈತರಿಗೆ AI ಶಕ್ತಿ" : "The power of AI for every woman farmer"}
          </p>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyChoose.map((w, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                className="text-center p-6 rounded-3xl bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <w.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-base mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== PROBLEMS ===== */}
      <Section className="py-20 px-4 bg-destructive/5">
        <div id="problem" className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">{t("problem.heading")}</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-14 text-lg">{t("problem.paragraph")}</p>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((p, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="rounded-3xl border-destructive/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6 text-center relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive to-warning" />
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                      <p.icon className="w-7 h-7 text-destructive" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== SOLUTION / FEATURES - Vibrant Cards ===== */}
      <Section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
        <div id="features" className="max-w-6xl mx-auto relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">{t("solution.heading")}</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-4 text-lg">{t("solution.desc")}</p>
          <div className="text-center mb-14">
            <Link to="/features"><Button variant="link" className="gap-2 text-primary text-base font-semibold">{language === "hi" ? "सभी सुविधाएँ देखें" : language === "kn" ? "ಎಲ್ಲಾ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ನೋಡಿ" : "View All Features"} <ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} variants={scaleIn}>
                <Link to={f.link}>
                  <Card className="rounded-3xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer h-full overflow-hidden group border-0 shadow-md shimmer">
                    <CardContent className="p-0">
                      <div className={`h-2 bg-gradient-to-r ${f.color}`} />
                      <div className="p-6 text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${f.color} bg-opacity-10 flex items-center justify-center shadow-sm`}>
                          <f.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-display font-semibold text-sm mb-2 group-hover:text-primary transition-colors">{f.label}</h3>
                        <p className="text-xs text-muted-foreground">{f.desc}</p>
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-xs text-primary font-medium flex items-center justify-center gap-1">
                            {language === "hi" ? "अन्वेषण करें" : language === "kn" ? "ಅನ್ವೇಷಿಸಿ" : "Explore"} <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== VIDEO GUIDES SECTION ===== */}
      <Section className="py-24 px-4 bg-foreground" id="video-guides">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4 text-primary-foreground">
            🎬 {language === "hi" ? "किसान वीडियो गाइड" : language === "kn" ? "ರೈತ ವೀಡಿಯೊ ಮಾರ್ಗದರ್ಶಿ" : "Farmer Video Guides"}
          </h2>
          <p className="text-center text-primary-foreground/60 max-w-2xl mx-auto mb-14 text-lg">
            {language === "hi" ? "विशेषज्ञों से खेती की नई तकनीकें सीखें" : language === "kn" ? "ತಜ್ಞರಿಂದ ಕೃಷಿಯ ಹೊಸ ತಂತ್ರಗಳನ್ನು ಕಲಿಯಿರಿ" : "Learn modern farming techniques from experts"}
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {videoGuides.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.embedId}?rel=0`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-5 bg-card">
                    <h3 className="font-display font-bold text-base mb-1 text-foreground">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== IMPACT ===== */}
      <Section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div id="impact" className="max-w-5xl mx-auto relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">{t("impact.heading")}</h2>
          <div className="text-center mb-14">
            <Link to="/impact"><Button variant="link" className="gap-2 text-primary text-base font-semibold">{language === "hi" ? "विस्तार से देखें" : language === "kn" ? "ವಿವರವಾಗಿ ನೋಡಿ" : "See Full Impact Report"} <ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedStat value={30} suffix="M+" label={t("impact.farmers")} icon={Users} />
            <AnimatedStat value={25} suffix="%" label={t("impact.income")} icon={TrendingUp} />
            <AnimatedStat value={30} suffix="%" label={t("impact.cropLoss")} icon={Shield} />
            <AnimatedStat value={70} suffix="%" label={t("impact.accuracy")} icon={CheckCircle} />
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center gap-4 mt-14 flex-wrap">
            {["SDG 1: No Poverty", "SDG 2: Zero Hunger", "SDG 5: Gender Equality", "SDG 8: Decent Work"].map((s) => (
              <motion.div key={s} variants={scaleIn}>
                <Badge variant="secondary" className="text-sm px-5 py-2.5 rounded-full shadow-sm font-medium">{s}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== GOVT TRUST ===== */}
      <Section className="py-24 px-4 bg-accent/5">
        <div id="govt" className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">{t("govt.heading")}</h2>
          <div className="text-center mb-14">
            <Link to="/government-schemes-info"><Button variant="link" className="gap-2 text-primary text-base font-semibold">{language === "hi" ? "सभी योजनाएँ देखें" : language === "kn" ? "ಎಲ್ಲಾ ಯೋಜನೆಗಳನ್ನು ನೋಡಿ" : "View All Schemes & Apply"} <ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {govtSchemes.map((s, i) => (
              <motion.div key={i} variants={scaleIn}>
                <Card className="rounded-3xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                      <FileText className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-display font-semibold text-base mb-1">{s.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                    <a href={s.link} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="rounded-full text-xs gap-1 bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm">
                        <ExternalLink className="w-3 h-3" /> {language === "hi" ? "अभी आवेदन करें" : language === "kn" ? "ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ" : "Apply Now"}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== TESTIMONIALS ===== */}
      <Section className="py-24 px-4 relative">
        <ParticleField />
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-14">{t("testimonial.heading")}</h2>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
            {testimonials.map((tm, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="rounded-3xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">{Array.from({ length: tm.rating }).map((_, j) => <Star key={j} className="w-5 h-5 fill-warning text-warning" />)}</div>
                    <Quote className="w-10 h-10 text-primary/20 mb-3" />
                    <p className="text-sm text-muted-foreground italic mb-6 leading-relaxed">"{tm.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">{tm.name[0]}</div>
                      <div><p className="font-semibold text-sm">{tm.name}</p><p className="text-xs text-muted-foreground">{tm.loc}</p></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== HOW IT WORKS ===== */}
      <Section className="py-24 px-4 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-14">
            {language === "hi" ? "कैसे काम करता है" : language === "kn" ? "ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ" : "How It Works"}
          </h2>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />
            {[
              { step: "1", title: language === "hi" ? "साइन अप करें" : language === "kn" ? "ಸೈನ್ ಅಪ್ ಮಾಡಿ" : "Sign Up", desc: language === "hi" ? "अपनी जानकारी और मिट्टी की छवि अपलोड करें" : language === "kn" ? "ನಿಮ್ಮ ಮಾಹಿತಿ ಮತ್ತು ಮಣ್ಣಿನ ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ" : "Enter your details & upload soil image", icon: Users },
              { step: "2", title: language === "hi" ? "AI विश्लेषण" : language === "kn" ? "AI ವಿಶ್ಲೇಷಣೆ" : "AI Analysis", desc: language === "hi" ? "AI आपकी मिट्टी, जलवायु और बाज़ार का विश्लेषण करता है" : language === "kn" ? "AI ನಿಮ್ಮ ಮಣ್ಣು, ಹವಾಮಾನ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ವಿಶ್ಲೇಷಿಸುತ್ತದೆ" : "AI analyzes your soil, climate & market", icon: Zap },
              { step: "3", title: language === "hi" ? "समृद्ध हों" : language === "kn" ? "ಸಮೃದ್ಧಿ ಹೊಂದಿ" : "Prosper", desc: language === "hi" ? "AI सिफारिशों से बेहतर निर्णय लें" : language === "kn" ? "AI ಶಿಫಾರಸುಗಳಿಂದ ಉತ್ತಮ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ" : "Make smarter decisions with AI insights", icon: TrendingUp },
            ].map((s, i) => (
              <motion.div key={i} variants={scaleIn} className="text-center relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
                  <s.icon className="w-10 h-10 text-white" />
                </div>
                <Badge className="mb-3 bg-accent/10 text-accent border-accent/20 text-xs">{language === "hi" ? `चरण ${s.step}` : language === "kn" ? `ಹಂತ ${s.step}` : `Step ${s.step}`}</Badge>
                <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ===== CTA - Vibrant ===== */}
      <section id="cta" className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{ width: 100 + i * 50, height: 100 + i * 50, left: `${i * 18}%`, top: `${20 + i * 10}%` }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">{t("cta.heading")}</h2>
            <p className="text-white/80 mb-10 text-lg">
              {language === "hi" ? "आज ही शुरू करें और अपनी खेती को AI की शक्ति से बदलें" : language === "kn" ? "ಇಂದೇ ಪ್ರಾರಂಭಿಸಿ ಮತ್ತು AI ಶಕ್ತಿಯಿಂದ ನಿಮ್ಮ ಕೃಷಿಯನ್ನು ಬದಲಿಸಿ" : "Start today and transform your farming with the power of AI"}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="rounded-full text-lg px-10 h-16 bg-white text-primary hover:bg-white/90 shadow-2xl gap-2 font-bold">
                  {t("cta.signupNow")} <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="rounded-full text-lg px-10 h-16 border-white/40 text-white hover:bg-white/10 font-bold">
                  {t("cta.loginDashboard")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-foreground text-primary-foreground/70 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4"><span className="text-2xl">🌸</span><span className="font-display font-bold text-lg text-primary-foreground">AgriRise Shakti</span></div>
              <p className="text-sm leading-relaxed">{language === "hi" ? "ग्रामीण महिला किसानों के लिए AI-संचालित बुद्धिमत्ता मंच" : language === "kn" ? "ಗ್ರಾಮೀಣ ಮಹಿಳಾ ರೈತರಿಗಾಗಿ AI-ಚಾಲಿತ ಬುದ್ಧಿಮತ್ತೆ ವೇದಿಕೆ" : "AI-powered intelligence platform for rural women farmers"}</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground text-sm mb-4">{language === "hi" ? "त्वरित लिंक" : language === "kn" ? "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು" : "Quick Links"}</h4>
              <div className="space-y-3 text-sm">
                <Link to="/about" className="block hover:text-primary-foreground transition-colors">{t("landing.about")}</Link>
                <Link to="/features" className="block hover:text-primary-foreground transition-colors">{t("landing.features")}</Link>
                <Link to="/impact" className="block hover:text-primary-foreground transition-colors">{t("landing.impact")}</Link>
                <Link to="/government-schemes-info" className="block hover:text-primary-foreground transition-colors">{t("landing.govtSchemes")}</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground text-sm mb-4">{language === "hi" ? "संपर्क" : language === "kn" ? "ಸಂಪರ್ಕ" : "Contact"}</h4>
              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@agririse.in</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> 1800-XXX-XXXX</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Bengaluru, India</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground text-sm mb-4">{language === "hi" ? "कानूनी" : language === "kn" ? "ಕಾನೂನು" : "Legal"}</h4>
              <div className="space-y-3 text-sm">
                <a href="#" className="block hover:text-primary-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="block hover:text-primary-foreground transition-colors">Terms of Service</a>
                <a href="#" className="block hover:text-primary-foreground transition-colors">Data Protection</a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-sm">© 2026 AgriRise Shakti. {t("footer.rights")} | {language === "hi" ? "भारत में ❤️ से बनाया" : language === "kn" ? "ಭಾರತದಲ್ಲಿ ❤️ ಯಿಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ" : "Made with ❤️ in India"}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

