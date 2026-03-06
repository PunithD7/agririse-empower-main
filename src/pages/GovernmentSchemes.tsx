import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, IndianRupee, Calendar, Users } from "lucide-react";

const schemes = [
  {
    name: "Mahila Kisan Sashaktikaran Pariyojana (MKSP)",
    ministry: "Ministry of Rural Development",
    benefit: "Training, capacity building & livelihood support for women farmers",
    amount: "Varies by state",
    deadline: "Open Year-round",
    eligibility: "Women farmers, SHG members",
    link: "#",
  },
  {
    name: "PM-KISAN Samman Nidhi",
    ministry: "Ministry of Agriculture",
    benefit: "Direct income support of ₹6,000/year in 3 installments",
    amount: "₹6,000/year",
    deadline: "Ongoing",
    eligibility: "All small & marginal farmers",
    link: "#",
  },
  {
    name: "Pradhan Mantri Fasal Bima Yojana",
    ministry: "Ministry of Agriculture",
    benefit: "Crop insurance against natural calamities with low premium",
    amount: "Up to full sum insured",
    deadline: "Before sowing season",
    eligibility: "All farmers with crop loans",
    link: "#",
  },
  {
    name: "Kisan Credit Card (KCC)",
    ministry: "Ministry of Finance",
    benefit: "Short-term credit for crop production at 4% interest",
    amount: "Up to ₹3,00,000",
    deadline: "Ongoing",
    eligibility: "All farmers, fishers, animal husbandry",
    link: "#",
  },
  {
    name: "National Mission for Sustainable Agriculture",
    ministry: "Ministry of Agriculture",
    benefit: "Support for organic farming, water management & soil health",
    amount: "Varies by component",
    deadline: "State-level deadlines",
    eligibility: "All farmers, priority to women",
    link: "#",
  },
  {
    name: "Rashtriya Mahila Kosh (RMK)",
    ministry: "Ministry of Women & Child Development",
    benefit: "Micro-credit to women through NGOs and SHGs",
    amount: "Up to ₹25,000",
    deadline: "Ongoing",
    eligibility: "Women in SHGs, below poverty line",
    link: "#",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const GovernmentSchemes = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-6">

      {/* HEADER */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >

        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
          {t("schemes.title")}
        </h1>

        <p className="text-muted-foreground mt-2 text-lg">
          Discover schemes and subsidies designed for women in agriculture
        </p>

      </motion.div>

      {/* SCHEME GRID */}

      <motion.div
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >

        {schemes.map((scheme, index) => (

          <motion.div
            key={scheme.name}
            variants={item}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
          >

            <Card className="h-full border-none shadow-xl bg-white/60 backdrop-blur-lg hover:shadow-2xl transition-all duration-300">

              <CardHeader className="pb-3">

                <CardTitle className="text-base flex items-start gap-2 font-semibold">

                  <FileText className="h-5 w-5 text-green-600 shrink-0 mt-1" />

                  <span>{scheme.name}</span>

                </CardTitle>

                <p className="text-xs text-muted-foreground">
                  {scheme.ministry}
                </p>

              </CardHeader>

              <CardContent className="space-y-4">

                <p className="text-sm text-muted-foreground">
                  {scheme.benefit}
                </p>

                {/* BADGES */}

                <div className="flex flex-wrap gap-2">

                  <Badge className="bg-green-100 text-green-700 text-xs flex items-center gap-1">

                    <IndianRupee className="h-3 w-3" />
                    {scheme.amount}

                  </Badge>

                  <Badge className="bg-blue-100 text-blue-700 text-xs flex items-center gap-1">

                    <Calendar className="h-3 w-3" />
                    {scheme.deadline}

                  </Badge>

                  <Badge className="bg-purple-100 text-purple-700 text-xs flex items-center gap-1">

                    <Users className="h-3 w-3" />
                    {scheme.eligibility}

                  </Badge>

                </div>

                {/* APPLY BUTTON */}

                <Button
                  variant="outline"
                  className="w-full mt-2 group hover:bg-green-600 hover:text-white transition-all"
                >

                  <ExternalLink className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />

                  Learn More & Apply

                </Button>

              </CardContent>

            </Card>

          </motion.div>

        ))}

      </motion.div>

    </div>
  );
};

export default GovernmentSchemes;
