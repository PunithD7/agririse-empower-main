import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { speak } from "@/hooks/useVoiceInput";
import { analyzeSoil } from "@/lib/soilAnalysis";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Upload, Sprout, Volume2, ArrowLeft, ArrowRight, Check, Loader2, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type SoilResult = ReturnType<typeof analyzeSoil> | null;

const SignupPage = () => {
  const { t, language } = useLanguage();
  const { signUp, updateProfile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [village, setVillage] = useState("");
  const [detecting, setDetecting] = useState(false);
  const [soilImage, setSoilImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [soilResult, setSoilResult] = useState<SoilResult>(null);
  const [submitting, setSubmitting] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const detectLocation = () => {
    setDetecting(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => { setState("Karnataka"); setDistrict("Mandya"); setVillage("Srirangapatna"); setDetecting(false); },
        () => { setDetecting(false); toast({ title: "Location detection failed", description: "Please enter manually.", variant: "destructive" }); }
      );
    } else { setDetecting(false); }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setSoilImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => { setSoilResult(analyzeSoil()); setAnalyzing(false); }, 2500);
  };

  const handleComplete = async () => {
    setSubmitting(true);
    const { error } = await signUp(email, password, name);
    if (error) {
      toast({ title: "Signup failed", description: error.message, variant: "destructive" });
      setSubmitting(false);
      return;
    }
    // Update profile with location data
    setTimeout(async () => {
      try {
        await updateProfile({ state, district, village, soil_type: soilResult?.soilTypeKey || "" });
      } catch {}
      toast({ title: "Welcome to AgriRise Shakti! 🌸", description: "Your account has been created." });
      navigate("/");
    }, 1000);
  };

  const speakRecommendation = () => {
    if (!soilResult) return;
    const text = soilResult.crops.map((c) => `${c.name[language]}. ${c.reason[language]}`).join(". ");
    speak(text, language);
  };

  const riskColor = (r: string) =>
    r === "low" ? "bg-success text-success-foreground" : r === "medium" ? "bg-warning text-warning-foreground" : "bg-destructive text-destructive-foreground";

  const steps = [t("signup.step1"), t("signup.step2"), t("signup.step3")];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step > i + 1 ? "bg-primary text-primary-foreground" : step === i + 1 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
                {step > i + 1 ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <span className={`text-xs hidden sm:block ${step === i + 1 ? "text-foreground font-semibold" : "text-muted-foreground"}`}>{s}</span>
              {i < 2 && <div className="w-8 h-px bg-border" />}
            </div>
          ))}
        </div>

        <Card className="rounded-2xl shadow-lg">
          <CardHeader className="text-center">
            <Link to="/landing" className="text-2xl mb-2 block">🌸</Link>
            <CardTitle className="font-display text-xl">{steps[step - 1]}</CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <Input placeholder={t("signup.name")} value={name} onChange={(e) => setName(e.target.value)} className="h-12 rounded-xl text-base" />
                  <Input placeholder="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="h-12 rounded-xl text-base" />
                  <Input type="password" placeholder={t("signup.password")} value={password} onChange={(e) => setPassword(e.target.value)} className="h-12 rounded-xl text-base" />
                  <Button onClick={() => setStep(2)} disabled={!name || !email || !password} className="w-full h-12 rounded-xl text-base gap-2">
                    {t("signup.next")} <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <Button variant="outline" onClick={detectLocation} disabled={detecting} className="w-full h-12 rounded-xl gap-2">
                    {detecting ? <Loader2 className="w-4 h-4 animate-spin" /> : <MapPin className="w-4 h-4" />}
                    {t("signup.detectLocation")}
                  </Button>
                  <div className="relative flex items-center"><div className="flex-grow border-t border-border" /><span className="px-3 text-xs text-muted-foreground">OR</span><div className="flex-grow border-t border-border" /></div>
                  <Input placeholder={t("signup.state")} value={state} onChange={(e) => setState(e.target.value)} className="h-12 rounded-xl text-base" />
                  <Input placeholder={t("signup.district")} value={district} onChange={(e) => setDistrict(e.target.value)} className="h-12 rounded-xl text-base" />
                  <Input placeholder={t("signup.village")} value={village} onChange={(e) => setVillage(e.target.value)} className="h-12 rounded-xl text-base" />
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(1)} className="flex-1 h-12 rounded-xl gap-2"><ArrowLeft className="w-4 h-4" /> {t("signup.back")}</Button>
                    <Button onClick={() => setStep(3)} disabled={!state} className="flex-1 h-12 rounded-xl gap-2">{t("signup.next")} <ArrowRight className="w-4 h-4" /></Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                  <input type="file" accept="image/*" ref={fileRef} className="hidden" onChange={handleImageUpload} />
                  {!soilImage ? (
                    <button onClick={() => fileRef.current?.click()} className="w-full h-40 border-2 border-dashed border-primary/30 rounded-2xl flex flex-col items-center justify-center gap-2 text-muted-foreground hover:border-primary/60 hover:bg-primary/5 transition-colors">
                      <Upload className="w-8 h-8" /><span className="text-sm font-medium">{t("signup.uploadSoil")}</span>
                    </button>
                  ) : (
                    <div className="relative rounded-2xl overflow-hidden">
                      <img src={soilImage} alt="Soil" className="w-full h-40 object-cover" />
                      <button onClick={() => fileRef.current?.click()} className="absolute top-2 right-2 bg-background/80 rounded-full p-2"><Eye className="w-4 h-4" /></button>
                    </div>
                  )}

                  {soilImage && !soilResult && (
                    <Button onClick={handleAnalyze} disabled={analyzing} className="w-full h-12 rounded-xl gap-2">
                      {analyzing ? <><Loader2 className="w-4 h-4 animate-spin" /> {t("signup.analyzing")}</> : <><Sprout className="w-4 h-4" /> {t("signup.analyzeSoil")}</>}
                    </Button>
                  )}

                  {soilResult && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-1 bg-primary/10 rounded-xl p-3 text-center">
                          <p className="text-xs text-muted-foreground">{t("signup.soilType")}</p>
                          <p className="font-bold text-primary">{t(soilResult.soilTypeKey)}</p>
                        </div>
                        <div className="flex-1 bg-accent/10 rounded-xl p-3 text-center">
                          <p className="text-xs text-muted-foreground">{t("signup.moisture")}</p>
                          <p className="font-bold text-accent">{soilResult.moisture}</p>
                        </div>
                      </div>
                      <h3 className="font-display font-semibold text-sm">{t("signup.recommended")}</h3>
                      {soilResult.crops.map((crop, i) => (
                        <Card key={i} className="rounded-xl">
                          <CardContent className="p-3 space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-sm">{crop.name[language]}</span>
                              <Badge className={`${riskColor(crop.risk)} text-xs`}>{t(`risk.${crop.risk}`)}</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">{crop.reason[language]}</p>
                            <div className="flex justify-between text-xs"><span>📊 {crop.yieldPotential[language]}</span><span>🌾 {crop.season[language]}</span></div>
                          </CardContent>
                        </Card>
                      ))}
                      <Button variant="outline" onClick={speakRecommendation} className="w-full h-10 rounded-xl gap-2 text-sm">
                        <Volume2 className="w-4 h-4" /> {t("signup.listenIn")} {language === "kn" ? "ಕನ್ನಡ" : language === "hi" ? "हिंदी" : "English"}
                      </Button>
                    </motion.div>
                  )}

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" onClick={() => setStep(2)} className="flex-1 h-12 rounded-xl gap-2"><ArrowLeft className="w-4 h-4" /> {t("signup.back")}</Button>
                    <Button onClick={handleComplete} disabled={submitting} className="flex-1 h-12 rounded-xl gap-2">
                      {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />} {t("signup.complete")}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-4">
          {t("login.heading")}? <Link to="/login" className="text-primary font-semibold hover:underline">{t("landing.login")}</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
