import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import Dashboard from "./Dashboard";

const ricePrice = Array.from({ length: 60 }, (_, i) => ({
  day: i + 1,
  price: 2200 + Math.sin(i / 5) * 200 + i * 5 + (Math.random() - 0.5) * 80,
  predicted: i >= 30 ? 2400 + Math.sin(i / 5) * 150 + (i - 30) * 8 : undefined,
}));

const crops = [
  { name: "Rice", currentPrice: 2450, predicted: 2680, trend: "up", recommendation: "Hold & Sell in 15 days" },
  { name: "Wheat", currentPrice: 2100, predicted: 1950, trend: "down", recommendation: "Sell Now" },
  { name: "Pulses", currentPrice: 5800, predicted: 6200, trend: "up", recommendation: "Hold for 20 days" },
  { name: "Tomato", currentPrice: 1800, predicted: 2400, trend: "up", recommendation: "Strong Buy Signal" },
];

const MarketInsights = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-display font-bold">{t("market.title")}</h1>
        <p className="text-muted-foreground mt-1">30-day price predictions powered by time-series forecasting</p>
      </motion.div>

      <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
        {crops.map((crop) => (
          <Card key={crop.name} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display font-semibold">{crop.name}</h3>
                {crop.trend === "up" ? <TrendingUp className="h-4 w-4 text-success" /> : <TrendingDown className="h-4 w-4 text-destructive" />}
              </div>
              <p className="text-2xl font-bold">₹{crop.currentPrice}</p>
              <div className="flex items-center gap-1 mt-1 text-sm">
                <ArrowRight className="h-3 w-3" />
                <span className={crop.trend === "up" ? "text-success" : "text-destructive"}>₹{crop.predicted}</span>
              </div>
              <Badge variant={crop.trend === "up" ? "default" : "destructive"} className="mt-2 text-xs">
                {crop.recommendation}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Card>
          <CardHeader><CardTitle className="font-display">Rice Price Forecast (₹/quintal)</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={ricePrice}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} label={{ value: "Days", position: "insideBottom", offset: -5 }} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip />
                <ReferenceLine x={30} stroke="hsl(var(--muted-foreground))" strokeDasharray="3 3" label="Today" />
                <Line type="monotone" dataKey="price" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} name="Actual" />
                <Line type="monotone" dataKey="predicted" stroke="hsl(var(--accent))" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Predicted" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default MarketInsights;

