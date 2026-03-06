import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { ShieldAlert, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

const riskFactors = [
  { factor: "Climate", score: 72, level: "medium" },
  { factor: "Pest Risk", score: 35, level: "low" },
  { factor: "Soil Health", score: 85, level: "low" },
  { factor: "Market Volatility", score: 58, level: "medium" },
  { factor: "Water Availability", score: 42, level: "medium" },
  { factor: "Yield Stability", score: 78, level: "low" },
];

const radarData = riskFactors.map((r) => ({ subject: r.factor, score: r.score, fullMark: 100 }));

const mitigations = [
  { risk: "Climate Volatility", action: "Install drip irrigation to reduce water dependency", priority: "High" },
  { risk: "Market Price Drops", action: "Diversify with 2-3 crop varieties per season", priority: "Medium" },
  { risk: "Pest Outbreak", action: "Apply neem-based organic pesticide preventively", priority: "Low" },
  { risk: "Soil Degradation", action: "Rotate legumes every 3rd season for nitrogen fixing", priority: "Medium" },
];

const overallScore = Math.round(riskFactors.reduce((a, b) => a + b.score, 0) / riskFactors.length);
const overallLevel = overallScore > 70 ? "Low" : overallScore > 45 ? "Medium" : "High";

const RiskAssessment = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-display font-bold">{t("risk.title")}</h1>
        <p className="text-muted-foreground mt-1">Hybrid AI risk scoring for your farm</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className={`w-28 h-28 mx-auto rounded-full flex items-center justify-center mb-4 ${overallLevel === "Low" ? "bg-success/20" : overallLevel === "Medium" ? "bg-warning/20" : "bg-destructive/20"}`}>
                <span className={`text-4xl font-display font-bold ${overallLevel === "Low" ? "text-success" : overallLevel === "Medium" ? "text-warning" : "text-destructive"}`}>{overallScore}</span>
              </div>
              <p className="text-lg font-semibold">Overall Risk Score</p>
              <p className={`text-sm font-semibold ${overallLevel === "Low" ? "text-success" : overallLevel === "Medium" ? "text-warning" : "text-destructive"}`}>{overallLevel} Risk</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div className="md:col-span-2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader><CardTitle className="font-display">Risk Radar</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
                  <Radar name="Risk" dataKey="score" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.25} strokeWidth={2} />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader><CardTitle className="font-display">Factor Breakdown</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {riskFactors.map((r) => (
                <div key={r.factor} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{r.factor}</span>
                    <span className={r.level === "low" ? "text-success" : r.level === "medium" ? "text-warning" : "text-destructive"}>{r.score}/100</span>
                  </div>
                  <Progress value={r.score} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card>
            <CardHeader><CardTitle className="font-display flex items-center gap-2"><ShieldAlert className="h-5 w-5 text-accent" /> Mitigation Steps</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {mitigations.map((m, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  {m.priority === "High" ? <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" /> : m.priority === "Medium" ? <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" /> : <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />}
                  <div>
                    <p className="text-sm font-semibold">{m.risk}</p>
                    <p className="text-xs text-muted-foreground">{m.action}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default RiskAssessment;
