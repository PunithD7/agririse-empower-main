import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, TrendingUp, ShieldAlert, Wallet, CloudRain, Sun } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const yieldData = [
  { month: "Jan", yield: 2.1 }, { month: "Feb", yield: 2.4 }, { month: "Mar", yield: 3.1 },
  { month: "Apr", yield: 3.8 }, { month: "May", yield: 4.2 }, { month: "Jun", yield: 3.9 },
  { month: "Jul", yield: 4.5 }, { month: "Aug", yield: 4.8 }, { month: "Sep", yield: 5.1 },
  { month: "Oct", yield: 4.6 }, { month: "Nov", yield: 3.8 }, { month: "Dec", yield: 3.2 },
];

const cropDistribution = [
  { crop: "Rice", area: 35 }, { crop: "Wheat", area: 25 }, { crop: "Pulses", area: 15 },
  { crop: "Vegetables", area: 15 }, { crop: "Millets", area: 10 },
];

const stats = [
  { icon: Sprout, label: "Predicted Yield", value: "4.8 tons/acre", color: "text-primary" },
  { icon: TrendingUp, label: "Market Price", value: "₹2,450/quintal", color: "text-accent" },
  { icon: ShieldAlert, label: "Risk Level", value: "Low", color: "text-success" },
  { icon: Wallet, label: "Credit Score", value: "742/900", color: "text-info" },
  { icon: CloudRain, label: "Rainfall", value: "820mm", color: "text-info" },
  { icon: Sun, label: "Temperature", value: "28°C", color: "text-warning" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const Dashboard = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-display font-bold text-foreground">{t("dashboard.welcome")}</h1>
        <p className="text-muted-foreground mt-1">{t("dashboard.overview")}</p>
      </motion.div>

      <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" variants={container} initial="hidden" animate="show">
        {stats.map((s) => (
          <motion.div key={s.label} variants={item}>
            <Card className="card-gradient border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <s.icon className={`h-6 w-6 mx-auto mb-2 ${s.color}`} />
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="text-lg font-bold font-display">{s.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader><CardTitle className="font-display">Yield Trend (tons/acre)</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={yieldData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip />
                  <Area type="monotone" dataKey="yield" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.2)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <Card>
            <CardHeader><CardTitle className="font-display">Crop Distribution (acres)</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={cropDistribution}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="crop" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="area" fill="hsl(var(--accent))" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick actions */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <Card className="hero-gradient">
          <CardContent className="p-6">
            <h2 className="text-xl font-display font-bold text-primary-foreground mb-2">💡 Today's Tip</h2>
            <p className="text-primary-foreground/90">
              Based on current weather patterns, consider irrigating your rice paddy fields this week.
              Rainfall is expected to decrease by 15% over the next 10 days.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Dashboard;
