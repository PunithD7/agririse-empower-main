import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Sprout, TrendingUp, Sun, CloudRain } from "lucide-react";

const mockPredictions = [
  { crop: "Rice", yield: 4.8 },
  { crop: "Wheat", yield: 3.6 },
  { crop: "Pulses", yield: 2.1 },
  { crop: "Millets", yield: 3.2 },
];

const CropIntelligence = () => {
  const { t } = useLanguage();

  const [prediction, setPrediction] = useState<{
    yield: number;
    confidence: number;
  } | null>(null);

  const [formData, setFormData] = useState({
    rainfall: "800",
    soilType: "loamy",
    fertilizer: "120",
    temperature: "28",
    farmSize: "2.5",
  });

  const handlePredict = () => {
    const baseYield = 3.5;

    const rainfallFactor = parseFloat(formData.rainfall) / 1000;

    const tempFactor =
      parseFloat(formData.temperature) < 35 ? 1.1 : 0.85;

    const fertFactor = parseFloat(formData.fertilizer) / 100;

    const predicted =
      baseYield *
      rainfallFactor *
      tempFactor *
      fertFactor *
      (1 + Math.random() * 0.3);

    setPrediction({
      yield: Math.round(predicted * 10) / 10,
      confidence: Math.round(80 + Math.random() * 15),
    });
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto p-4 bg-gradient-to-b from-green-50 to-yellow-50 rounded-xl">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-600 to-lime-500 text-white p-6 rounded-2xl shadow-lg"
      >
        <h1 className="text-3xl font-bold flex items-center gap-2">
          🌾 Crop Yield Intelligence
        </h1>

        <p className="opacity-90 mt-1">
          Enter farm conditions and predict crop production
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* INPUT FORM */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card className="shadow-lg border-green-200">

            <CardHeader className="bg-green-100">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Sprout className="h-5 w-5" />
                Farm Parameters
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">

              <div className="grid grid-cols-2 gap-4">

                <div>
                  <Label>🌧 Rainfall (mm)</Label>
                  <Input
                    type="number"
                    value={formData.rainfall}
                    onChange={(e) =>
                      setFormData({ ...formData, rainfall: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label>☀ Temperature (°C)</Label>
                  <Input
                    type="number"
                    value={formData.temperature}
                    onChange={(e) =>
                      setFormData({ ...formData, temperature: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label>🌱 Fertilizer (kg/acre)</Label>
                  <Input
                    type="number"
                    value={formData.fertilizer}
                    onChange={(e) =>
                      setFormData({ ...formData, fertilizer: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label>🚜 Farm Size (acres)</Label>
                  <Input
                    type="number"
                    value={formData.farmSize}
                    onChange={(e) =>
                      setFormData({ ...formData, farmSize: e.target.value })
                    }
                  />
                </div>

              </div>

              <div>
                <Label>🌍 Soil Type</Label>

                <Select
                  value={formData.soilType}
                  onValueChange={(v) =>
                    setFormData({ ...formData, soilType: v })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="loamy">Loamy</SelectItem>
                    <SelectItem value="clay">Clay</SelectItem>
                    <SelectItem value="sandy">Sandy</SelectItem>
                    <SelectItem value="silt">Silt</SelectItem>
                    <SelectItem value="red">Red Soil</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={handlePredict}
              >
                🌾 Predict Crop Yield
              </Button>

            </CardContent>
          </Card>
        </motion.div>

        {/* RESULT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >

          <Card className="shadow-lg border-yellow-200">

            <CardHeader className="bg-yellow-100">
              <CardTitle className="flex items-center gap-2 text-yellow-800">
                <TrendingUp className="h-5 w-5" />
                Prediction Result
              </CardTitle>
            </CardHeader>

            <CardContent>

              {prediction ? (
                <div className="text-center space-y-4">

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="p-6 rounded-xl bg-green-100"
                  >
                    <p className="text-5xl font-bold text-green-700">
                      {prediction.yield}
                    </p>

                    <p className="text-gray-600">
                      tons / acre
                    </p>
                  </motion.div>

                  <div className="flex items-center gap-2">

                    <div className="h-3 flex-1 bg-gray-200 rounded-full overflow-hidden">

                      <div
                        className="h-full bg-green-600 transition-all duration-1000"
                        style={{
                          width: `${prediction.confidence}%`,
                        }}
                      />

                    </div>

                    <span className="text-sm font-semibold text-green-700">
                      {prediction.confidence}% confidence
                    </span>

                  </div>

                </div>
              ) : (
                <div className="text-center py-12 text-gray-400">

                  <Sprout className="h-16 w-16 mx-auto mb-4 opacity-40" />

                  <p>Enter farm parameters and click Predict</p>

                </div>
              )}

            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* CHART */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <Card className="shadow-lg border-green-200">

          <CardHeader className="bg-green-100">
            <CardTitle className="text-green-800">
              🌾 Crop Yield Comparison
            </CardTitle>
          </CardHeader>

          <CardContent>

            <ResponsiveContainer width="100%" height={260}>

              <BarChart data={mockPredictions}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="crop" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="yield"
                  fill="#16a34a"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </CardContent>

        </Card>

      </motion.div>

    </div>
  );
};

export default CropIntelligence;