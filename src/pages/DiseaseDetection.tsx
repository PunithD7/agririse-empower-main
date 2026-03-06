import { useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ScanEye,
  Upload,
  AlertTriangle,
  CheckCircle2,
  Leaf,
  Sparkles
} from "lucide-react";

type Detection = {
  disease: string;
  severity: "Low" | "Medium" | "High";
  confidence: number;
  treatment: string[];
};

const mockDetections: Detection[] = [
  {
    disease: "Early Blight",
    severity: "Medium",
    confidence: 87,
    treatment: [
      "Apply Mancozeb fungicide (2g/L)",
      "Remove affected leaves",
      "Improve air circulation"
    ]
  },
  {
    disease: "Leaf Curl Virus",
    severity: "High",
    confidence: 92,
    treatment: [
      "Remove and destroy infected plants",
      "Control whitefly vectors",
      "Use resistant varieties next season"
    ]
  },
  {
    disease: "Powdery Mildew",
    severity: "Low",
    confidence: 78,
    treatment: [
      "Apply sulfur-based fungicide",
      "Avoid overhead watering",
      "Increase plant spacing"
    ]
  }
];

const DiseaseDetection = () => {
  const { t } = useLanguage();
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<Detection | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      setImage(ev.target?.result as string);
      setResult(null);
    };

    reader.readAsDataURL(file);
  };

  const handleAnalyze = () => {
    setAnalyzing(true);

    setTimeout(() => {
      setResult(
        mockDetections[Math.floor(Math.random() * mockDetections.length)]
      );
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">

      {/* HEADER */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-display font-bold flex justify-center items-center gap-3">
          <Leaf className="text-green-600" />
          {t("disease.title")}
        </h1>

        <p className="text-muted-foreground mt-3 text-lg">
          Upload a crop image and let AI detect diseases instantly
        </p>
      </motion.div>

      {/* MAIN GRID */}

      <div className="grid lg:grid-cols-2 gap-10">

        {/* IMAGE UPLOAD */}

        <Card className="shadow-xl border-none bg-white/60 backdrop-blur-xl">

          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Upload className="text-primary" />
              Upload Crop Image
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">

            <input
              type="file"
              accept="image/*"
              ref={fileRef}
              onChange={handleUpload}
              className="hidden"
            />

            {/* BIG IMAGE AREA */}

            <motion.div
              whileHover={{ scale: 1.01 }}
              onClick={() => fileRef.current?.click()}
              className="border-2 border-dashed border-primary/40 rounded-2xl h-[420px] flex items-center justify-center cursor-pointer hover:border-primary transition-all overflow-hidden bg-muted/30"
            >

              {image ? (
                <img
                  src={image}
                  alt="Uploaded crop"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center text-muted-foreground">

                  <ScanEye className="h-16 w-16 mx-auto mb-3 opacity-40" />

                  <p className="text-lg font-medium">
                    Click or Drag Crop Image
                  </p>

                  <p className="text-sm mt-1">
                    JPG • PNG • JPEG
                  </p>

                </div>
              )}

            </motion.div>

            {/* ANALYZE BUTTON */}

            <Button
              onClick={handleAnalyze}
              disabled={!image || analyzing}
              className="w-full h-12 text-lg font-semibold"
            >
              {analyzing ? (
                <span className="flex items-center gap-2">
                  <Sparkles className="animate-spin h-5 w-5" />
                  AI Analyzing Crop...
                </span>
              ) : (
                t("common.analyze")
              )}
            </Button>

          </CardContent>
        </Card>

        {/* RESULT PANEL */}

        <Card className="shadow-xl border-none bg-white/60 backdrop-blur-xl">

          <CardHeader>
            <CardTitle className="text-xl">
              Detection Result
            </CardTitle>
          </CardHeader>

          <CardContent>

            {result ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >

                {/* DISEASE */}

                <div className="p-6 rounded-xl bg-muted/50 text-center">

                  <h3 className="text-2xl font-bold">
                    {result.disease}
                  </h3>

                  <Badge
                    className={`mt-3 text-sm ${
                      result.severity === "Low"
                        ? "risk-badge-low"
                        : result.severity === "Medium"
                        ? "risk-badge-medium"
                        : "risk-badge-high"
                    }`}
                  >
                    {result.severity} Severity
                  </Badge>

                </div>

                {/* CONFIDENCE */}

                <div className="space-y-2">

                  <div className="flex justify-between text-sm font-medium">
                    <span>AI Confidence</span>
                    <span>{result.confidence}%</span>
                  </div>

                  <div className="h-3 rounded-full bg-muted overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${result.confidence}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-primary rounded-full"
                    />

                  </div>

                </div>

                {/* TREATMENT */}

                <div>

                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="text-green-600 h-4 w-4" />
                    Recommended Treatment
                  </h4>

                  <ul className="space-y-3">

                    {result.treatment.map((step, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                      >

                        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
                          {i + 1}
                        </span>

                        {step}

                      </li>
                    ))}

                  </ul>

                </div>

              </motion.div>
            ) : (

              <div className="text-center py-20 text-muted-foreground">

                <AlertTriangle className="h-16 w-16 mx-auto mb-4 opacity-20" />

                <p className="text-lg">
                  Upload crop image and click analyze
                </p>

              </div>

            )}

          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DiseaseDetection;
