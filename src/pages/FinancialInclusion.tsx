import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Wallet, CreditCard, Users, TrendingUp } from "lucide-react";

const scoreBreakdown = [
  { factor: "Yield Stability", score: 82, weight: "25%" },
  { factor: "Risk Score", score: 68, weight: "20%" },
  { factor: "Income Prediction", score: 75, weight: "25%" },
  { factor: "Crop Diversification", score: 90, weight: "15%" },
  { factor: "Repayment History", score: 85, weight: "15%" },
];

const overallCredit = 742;

const loans = [
  { name: "Kisan Credit Card", rate: "4%", amount: "₹3,00,000", status: "Eligible" },
  { name: "NABARD Micro Loan", rate: "6%", amount: "₹50,000", status: "Eligible" },
  { name: "SHG Emergency Fund", rate: "2%", amount: "₹10,000", status: "Pre-approved" },
];

const shgs = [
  { name: "Shakti Women's SHG", members: 12, location: "Mandya District", savings: "₹2,40,000" },
  { name: "Krishi Mahila Sangha", members: 15, location: "Mysuru District", savings: "₹3,60,000" },
];

const FinancialInclusion = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-6">

      {/* HEADER */}

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold font-display bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
          {t("finance.title")}
        </h1>

        <p className="text-muted-foreground mt-2 text-lg">
          ML-powered credit assessment for financial inclusion
        </p>
      </motion.div>

      {/* CREDIT SCORE */}

      <div className="grid md:grid-cols-3 gap-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-xl">

            <CardContent className="p-6 text-center">

              <div className="relative w-40 h-40 mx-auto">

                <svg className="w-full h-full rotate-[-90deg]">

                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="10"
                    fill="transparent"
                  />

                  <motion.circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="white"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray="440"
                    initial={{ strokeDashoffset: 440 }}
                    animate={{
                      strokeDashoffset: 440 - (440 * overallCredit) / 900,
                    }}
                    transition={{ duration: 1.5 }}
                  />

                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">

                  <span className="text-4xl font-bold">{overallCredit}</span>
                  <p className="text-xs opacity-80">/900</p>

                </div>

              </div>

              <Badge className="mt-4 bg-white text-green-700">
                Good Standing
              </Badge>

              <p className="text-sm mt-2 opacity-90">
                You're eligible for micro-loans
              </p>

            </CardContent>
          </Card>
        </motion.div>

        {/* SCORE BREAKDOWN */}

        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="shadow-xl border-none bg-white/60 backdrop-blur-lg">

            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="text-green-600" />
                Score Breakdown
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">

              {scoreBreakdown.map((s, i) => (
                <motion.div
                  key={s.factor}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-1"
                >

                  <div className="flex justify-between text-sm">

                    <span>
                      {s.factor}
                      <span className="text-muted-foreground ml-1">
                        ({s.weight})
                      </span>
                    </span>

                    <span className="font-semibold">{s.score}/100</span>

                  </div>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1 }}
                  >
                    <Progress value={s.score} className="h-3" />
                  </motion.div>

                </motion.div>
              ))}

            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* LOANS + SHG */}

      <div className="grid md:grid-cols-2 gap-6">

        {/* LOANS */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="shadow-xl border-none bg-gradient-to-br from-blue-500 to-indigo-600 text-white">

            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard />
                Loan Recommendations
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">

              {loans.map((loan, i) => (
                <motion.div
                  key={loan.name}
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/10 backdrop-blur"
                >

                  <div>

                    <p className="font-semibold">{loan.name}</p>

                    <p className="text-xs opacity-80">
                      Up to {loan.amount} @ {loan.rate}
                    </p>

                  </div>

                  <Badge
                    className={
                      loan.status === "Pre-approved"
                        ? "bg-green-400 text-black"
                        : "bg-white text-black"
                    }
                  >
                    {loan.status}
                  </Badge>

                </motion.div>
              ))}

            </CardContent>
          </Card>
        </motion.div>

        {/* SHG */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="shadow-xl border-none bg-gradient-to-br from-purple-500 to-pink-500 text-white">

            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users />
                Self Help Groups (SHG)
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">

              {shgs.map((shg, i) => (
                <motion.div
                  key={shg.name}
                  whileHover={{ scale: 1.04 }}
                  className="p-4 rounded-xl bg-white/10 backdrop-blur"
                >

                  <p className="font-semibold">{shg.name}</p>

                  <p className="text-xs opacity-80">
                    {shg.location} · {shg.members} members
                  </p>

                  <p className="text-sm font-semibold mt-1">
                    Total Savings: {shg.savings}
                  </p>

                </motion.div>
              ))}

            </CardContent>
          </Card>
        </motion.div>

      </div>

    </div>
  );
};

export default FinancialInclusion;


