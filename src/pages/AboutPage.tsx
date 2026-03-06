import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  ArrowLeft,
  Leaf,
  Globe,
  Shield,
  Brain,
  Mic,
  BarChart3
} from "lucide-react";

import heroImage from "@/assets/farmer-bg.jpg"; // ADD YOUR IMAGE HERE

const AboutPage = () => {
  const { language } = useLanguage();

  const values = [
    {
      icon: Leaf,
      title: "Smart Farming",
      desc: "AI driven recommendations help farmers grow crops with higher yield and sustainability.",
    },
    {
      icon: Globe,
      title: "Rural Intelligence",
      desc: "Real-time weather, soil and crop insights delivered in local languages.",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      desc: "Farmer data is protected with secure and privacy-first infrastructure.",
    },
    {
      icon: Brain,
      title: "AI Decision Engine",
      desc: "Advanced machine learning models analyze crop health and farming risks.",
    },
    {
      icon: Mic,
      title: "Voice Assistant",
      desc: "Farmers can interact using voice in Kannada, Hindi and English.",
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      desc: "Real-time crop price predictions help farmers maximize profits.",
    },
  ];

  const stats = [
    { number: "15+", label: "States Supported" },
    { number: "50+", label: "Crop Intelligence Models" },
    { number: "3", label: "Languages Supported" },
    { number: "24/7", label: "AI Farming Assistant" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100">

      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

          <Link to="/landing" className="flex items-center gap-2 font-bold text-lg">
            🌸 AgriRise Shakti
          </Link>

          <Link to="/landing">
            <Button variant="ghost">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>

        </div>
      </nav>

      {/* HERO SECTION WITH BACKGROUND IMAGE */}

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">

        {/* BACKGROUND IMAGE */}

        <img
          src={heroImage}
          className="absolute w-full h-full object-cover"
        />

        {/* DARK GRADIENT OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-800/60 to-emerald-900/70"></div>

        {/* CONTENT */}

        <div className="relative max-w-6xl mx-auto text-center text-white px-4">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Transforming Agriculture with AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-xl md:text-2xl opacity-90"
          >
            Empowering rural women farmers with intelligent crop insights,
            market predictions and voice based AI technology.
          </motion.p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/landing">
              <Button size="lg" className="text-lg px-8 py-6 rounded-xl">
                Explore Platform
              </Button>
            </Link>
          </motion.div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-6xl mx-auto py-20 px-4">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((s, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-2xl p-8 text-center"
            >

              <h3 className="text-4xl font-bold text-green-600">
                {s.number}
              </h3>

              <p className="text-muted-foreground mt-2">
                {s.label}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* FEATURES */}

      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">

        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-16">
            Platform Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {values.map((v, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >

                <Card className="rounded-2xl h-full shadow-lg hover:shadow-2xl transition">

                  <CardContent className="p-8">

                    <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                      <v.icon className="w-7 h-7 text-green-600" />
                    </div>

                    <h3 className="text-xl font-bold mb-3">
                      {v.title}
                    </h3>

                    <p className="text-muted-foreground">
                      {v.desc}
                    </p>

                  </CardContent>

                </Card>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* VIDEO DEMO */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-10">
            Platform Demo
          </h2>

          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              allowFullScreen
            />

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white">

        <h2 className="text-4xl font-bold mb-6">
          Join the Smart Farming Revolution
        </h2>

        <p className="text-xl opacity-90 mb-10">
          AI powered agriculture for rural India
        </p>

        <Link to="/landing">
          <Button size="lg" className="px-10 py-6 text-lg rounded-xl">
            Start Using AgriRise
          </Button>
        </Link>

      </section>

    </div>
  );
};

export default AboutPage;
