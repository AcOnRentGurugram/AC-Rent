import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Split from "../assets/Product Image/Split AC.png";
import WindowAC from "../assets/Product Image/Window Ac.png";
import RoomHeater from "../assets/Product Image/Room Heater2.png";
import Fridge from "../assets/Product Image/Fridge1.png";
import WashingMachine from "../assets/Product Image/Washing Mac.png";
import Geyser from "../assets/Product Image/Geyser2.png";

const products = [
  {
    name: "Window AC",
    description: "Advanced cooling technology with smart temperature control and energy optimization",
    image: WindowAC,
  },
  {
    name: "Split AC",
    description: "Premium comfort with intelligent climate control and whisper-quiet operation",
    image: Split,
  },
  {
    name: "Room Heater",
    description: "Advanced heating solutions with precision temperature control and safety features",
    image: RoomHeater,
  },
  {
    name: "Geyser",
    description: "Smart water heating system with temperature precision and energy efficiency",
    image: Geyser,
  },
  {
    name: "Washing Machine",
    description: "Advanced laundry technology with intelligent wash programs and fabric care",
    image: WashingMachine,
  },
  {
    name: "Refrigerator",
    description: "Smart cooling technology with advanced temperature management system",
    image: Fridge,
  },
];

export const FeaturedProducts = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 mb-4 text-sm font-semibold text-primary uppercase tracking-wider bg-primary/20 rounded-full">
            Featured Products
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            Premium Appliances Collection
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover our selection of high-performance appliances designed for modern living
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-6">
                  <div className="aspect-square overflow-hidden rounded-lg mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-6 pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <Button 
                    className="w-full mt-6 py-2.5 text-sm font-medium bg-primary hover:bg-primary/90 text-white rounded-md transition-colors"
                    onClick={() => navigate(`/rent/${product.name.toLowerCase().replace(' ', '-')}`)}
                  >
                    Rent Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};