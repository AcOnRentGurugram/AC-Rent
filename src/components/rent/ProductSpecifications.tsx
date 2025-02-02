import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export interface PricingInfo {
  type: string;
  capacity: string;
  rating: string;
  price: string;
}

export interface ProductSpecification {
  title?: string;
  subtitle?: string;
  highlights: string[];
  features: string[];
  sizingGuide: string[];
  pricing?: {
    window?: PricingInfo[];
    split?: PricingInfo[];
    tower?: PricingInfo[];
    standard?: PricingInfo[];
  };
  note?: string;
  description?: string[];
  termsAndConditions?: {
    title: string;
    content: string[];
  }[];
  typesOfAcAvailable?: string[];
  benefitsOfRenting?: string[];
  serviceAreas?: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

interface ProductSpecificationsProps {
  productId: keyof typeof specifications;
}

const specifications: Record<string, ProductSpecification> = {
  "room-heater": {
    title: "Premium Room Heaters for Rent in Gurgaon",
    subtitle:
      "Experience comfort with our high-quality room heaters featuring advanced safety features and efficient heating technology.",
    highlights: [
      "Extra safety with tilt switch, Over heat protection & Thermostatic heat control",
      "Ease to use 2-3 power settings 1500 to 2500 Watt",
      "230 V. Frequency (hertz) : AC 50 Hz, 16Amper input Wire/Power Plug",
      "Castor wheels for easy mobility",
    ],
    features: [
      "No Oxygen Burning: Fresh and breathable air, ideal for closed spaces",
      "Maintains Humidity: Keeps natural moisture intact for added comfort",
      "Health-Friendly: Safe for kids, elderly, and respiratory health",
      "Energy-Efficient: Long-lasting warmth with low power consumption",
      "Silent & Safe: Noise-free and perfect for overnight use",
    ],
    sizingGuide: [
      "9 Fin: Best for standard bedroom (100-140 sq ft)",
      "11 Fin: Ideal for 140-180 sq ft",
      "12 Fin: Perfect for 180-200 sq ft",
      "13 Fin: Suitable for 200-220 sq ft",
    ],
    pricing: {
      standard: [
        {
          type: "Room Heater",
          capacity: "9 Fin",
          rating: "Standard",
          price: "Rs. 2,500/month",
        },
        {
          type: "Room Heater",
          capacity: "11 Fin",
          rating: "Standard",
          price: "Rs. 3,000/month",
        },
        {
          type: "Room Heater",
          capacity: "13 Fin",
          rating: "Standard",
          price: "Rs. 3,500/month",
        },
      ],
    },
    benefitsOfRenting: [
      "Instant Heating: Quick and efficient room warming",
      "Safety First: Multiple safety features for worry-free operation",
      "Professional Support: Expert installation and maintenance",
      "Flexible Terms: Convenient rental periods to suit your needs",
    ],
    serviceAreas: [
      "Sector 1",
      "Sector 5",
      "Sector 10",
      "Sector 15",
      "Sector 20",
      "Sector 30",
      "Sector 40",
      "Sector 50",
      "South City",
      "DLF City",
      "Sohna Road",
    ],
    note: "All pictures shown are for illustration purpose. Actual product may vary.",
  },

  "window-ac": {
    title: "Window AC Rental Services in Gurgaon",
    subtitle:
      "Professional window AC rental solutions with comprehensive installation and maintenance support.",
    highlights: [
      "Energy-efficient cooling performance",
      "Easy installation and maintenance",
      "Robust build quality for long-term use",
      "Multiple fan speed settings",
    ],
    features: [
      "Anti-bacterial filter for clean air",
      "Auto restart function after power cuts",
      "Sleep mode for comfortable nights",
      "Self-diagnosis feature for easy maintenance",
      "Rotary compressor for efficient cooling",
    ],
    sizingGuide: [
      "0.75 Ton: Suitable for up to 80 sq ft",
      "1.0 Ton: Suitable for up to 100 sq ft",
      "1.5 Ton: Suitable for up to 160 sq ft",
      "2.0 Ton: Suitable for up to 200 sq ft",
    ],
    pricing: {
      window: [
        {
          type: "Window AC",
          capacity: "1.0 Ton",
          rating: "3 Star",
          price: "Rs. 7,000",
        },
        {
          type: "Window AC",
          capacity: "1.0 Ton",
          rating: "5 Star",
          price: "Rs. 10,000",
        },
        {
          type: "Window AC",
          capacity: "1.5 Ton",
          rating: "3 Star",
          price: "Rs. 7,000",
        },
        {
          type: "Window AC",
          capacity: "1.5 Ton",
          rating: "5 Star",
          price: "Rs. 10,000",
        },
        {
          type: "Window AC",
          capacity: "2.0 Ton",
          rating: "3 Star",
          price: "Rs. 9,000",
        },
        {
          type: "Window AC",
          capacity: "2.0 Ton",
          rating: "5 Star",
          price: "Rs. 11,000",
        },
      ],
    },
    description: [
      "3 Star, 4 Star (+₹1,000), and 5 Star (+₹2,000) as per stock availability.",
      "AC Condition: Used and not be new, But it will be in Excellent working condition with remote",
      "Brand & Color: All ACs will be branded. Brand and Color may vary as per stock availability",
    ],
    benefitsOfRenting: [
      "Maintenance-Free: The service provider handles all maintenance, repair, and servicing at no extra cost.",
      "Cost-Effective: Renting an AC is more affordable than buying one outright.",
      "Free Delivery & Installation: Enjoy free delivery and installation services.",
      "Stress-Free Returns: If you no longer need the AC, return it and get your deposit back.",
    ],
    serviceAreas: [
      "Sector 1",
      "Sector 5",
      "Sector 10",
      "Sector 15",
      "Sector 20",
      "Sector 30",
      "Sector 40",
      "Sector 50",
      "South City",
      "DLF City",
      "Sohna Road",
    ],
    faqs: [
      {
        question: "What is the cost of Window AC rental in Gurgaon?",
        answer:
          "Prices start from Rs. 7,000 per season for 1.0 Ton 3-Star Window AC.",
      },
      {
        question: "Is installation included?",
        answer:
          "Yes, professional installation is included in the rental package.",
      },
      {
        question: "What about maintenance?",
        answer:
          "We provide complete maintenance support with only nominal visit charges applicable.",
      },
    ],
    termsAndConditions: [
      {
        title: "Payment Policy",
        content: [
          "The Rent, Security deposit and other charges (if any) has to be paid in full (one time) at the time of delivery or installation of AC.",
          "Mode of Payment: Google Pay, Phonepe, Paytm, UPI, IMPS, Net banking, Instant Bank transfer and Cash.",
        ],
      },
    ],
    note: "All pictures shown are for illustration purpose. Actual product may vary.",
  },

  "split-ac": {
    title: "AC on Rent in Gurgaon – Affordable & Reliable Options",
    subtitle:
      "Looking for a reliable and affordable AC on rent in Gurgaon? Dialwala connects you with trusted AC rental providers in the city, offering a variety of options to meet your needs.",
    highlights: [
      "Energy-efficient cooling performance",
      "Easy installation and maintenance",
      "Robust build quality for long-term use",
      "Multiple fan speed settings",
    ],
    features: [
      "Anti-bacterial filter for clean air",
      "Auto restart function after power cuts",
      "Sleep mode for comfortable nights",
      "Self-diagnosis feature for easy maintenance",
      "Rotary compressor for efficient cooling",
    ],
    sizingGuide: [
      "0.75 Ton: Suitable for up to 80 sq ft",
      "1.0 Ton: Suitable for up to 100 sq ft",
      "1.5 Ton: Suitable for up to 160 sq ft",
      "2.0 Ton: Suitable for up to 200 sq ft",
    ],
    pricing: {
      window: [
        {
          type: "Window AC",
          capacity: "1.0 Ton",
          rating: "3 Star",
          price: "Rs. 7,000",
        },
        {
          type: "Window AC",
          capacity: "1.0 Ton",
          rating: "5 Star",
          price: "Rs. 10,000",
        },
        {
          type: "Window AC",
          capacity: "1.5 Ton",
          rating: "3 Star",
          price: "Rs. 7,000",
        },
        {
          type: "Window AC",
          capacity: "1.5 Ton",
          rating: "5 Star",
          price: "Rs. 10,000",
        },
        {
          type: "Window AC",
          capacity: "2.0 Ton",
          rating: "3 Star",
          price: "Rs. 9,000",
        },
        {
          type: "Window AC",
          capacity: "2.0 Ton",
          rating: "5 Star",
          price: "Rs. 11,000",
        },
      ],
      split: [
        {
          type: "Split AC",
          capacity: "1.0 Ton",
          rating: "3 Star",
          price: "Rs. 12,000",
        },
        {
          type: "Split AC",
          capacity: "1.0 Ton",
          rating: "5 Star",
          price: "Rs. 14,000",
        },
        {
          type: "Split AC",
          capacity: "1.5 Ton",
          rating: "3 Star",
          price: "Rs. 12,000",
        },
        {
          type: "Split AC",
          capacity: "1.5 Ton",
          rating: "5 Star",
          price: "Rs. 14,000",
        },
        {
          type: "Split AC",
          capacity: "2.0 Ton",
          rating: "3 Star",
          price: "Rs. 14,000",
        },
        {
          type: "Split AC",
          capacity: "2.0 Ton",
          rating: "5 Star",
          price: "Rs. 15,000",
        },
      ],
    },
    typesOfAcAvailable: ["Window AC", "Split AC", "Portable AC", "Tower AC"],
    benefitsOfRenting: [
      "Maintenance-Free: The service provider handles all maintenance, repair, and servicing at no extra cost.",
      "Cost-Effective: Renting an AC is more affordable than buying one outright.",
      "Free Delivery & Installation: Enjoy free delivery and installation services.",
      "Stress-Free Returns: If you no longer need the AC, return it and get your deposit back.",
    ],
    serviceAreas: [
      "Sector 1",
      "Sector 5",
      "Sector 10",
      "Sector 15",
      "Sector 20",
      "Sector 30",
      "Sector 40",
      "Sector 50",
      "South City",
      "DLF City",
      "Sohna Road",
    ],
    faqs: [
      {
        question: "What is the cost of AC rental in Gurgaon?",
        answer:
          "The price ranges from Rs. 6,500 to Rs. 15,000 per season, depending on the type of AC.",
      },
      {
        question: "Is installation included?",
        answer: "Yes, installation services are included free of charge.",
      },
      {
        question: "What if the AC stops working?",
        answer:
          "Contact the rental company for a technician to fix or replace the AC at no extra cost.",
      },
      {
        question: "Is there a minimum rental period?",
        answer:
          "Rental periods vary by company. Contact your provider for specific details.",
      },
    ],
    description: [
      "3 Star, 4 Star (+₹1,000), and 5 Star (+₹2,000) as per stock availability.",
      "AC Condition: Used and not be new, But it will be in Excellent working condition with remote",
      "Brand & Color: All ACs will be branded. Brand and Color may vary as per stock availability",
    ],
    termsAndConditions: [
      {
        title: "Payment Policy",
        content: [
          "The Rent, Security deposit and other charges (if any) has to be paid in full (one time) at the time of delivery or installation of AC.",
          "Mode of Payment: Google Pay, Phonepe, Paytm, UPI, IMPS, Net banking, Instant Bank transfer and Cash.",
        ],
      },
    ],
    note: "All pictures shown are for illustration purpose. Actual product may vary.",
  },
};
interface ProductSpecificationsProps {
  productId: keyof typeof specifications;
}

export const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({
  productId,
}) => {
  const productSpecs = specifications[productId];

  if (!productSpecs) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8"
    >
      <Card>
        <CardContent className="p-6">
          {/* Title and Subtitle */}
          {productSpecs.title && (
            <h2 className="text-2xl font-bold mb-4">{productSpecs.title}</h2>
          )}
          {productSpecs.subtitle && (
            <p className="text-gray-600 mb-6">{productSpecs.subtitle}</p>
          )}

          <div className="space-y-6">
            {/* Highlights Section */}
            {productSpecs.highlights && (
              <div className="mb-6">
                <h4 className="font-medium text-primary mb-2">Highlights</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {productSpecs.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-600">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Features Section */}
            {productSpecs.features && (
              <div className="mb-6">
                <h4 className="font-medium text-primary mb-2">Features</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {productSpecs.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Sizing Guide Section */}
            {productSpecs.sizingGuide && (
              <div className="mb-6">
                <h4 className="font-medium text-primary mb-2">Sizing Guide</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {productSpecs.sizingGuide.map((size, index) => (
                    <li key={index} className="text-gray-600">
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Types of AC Available */}
            {productSpecs.typesOfAcAvailable && (
              <div>
                <h4 className="font-medium text-primary mb-2">
                  Available AC Types
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  {productSpecs.typesOfAcAvailable.map((type, index) => (
                    <li key={index} className="text-gray-600">
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Pricing Section */}
            {productSpecs.pricing && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Pricing (Upto Dec 2024)
                </h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {Object.entries(productSpecs.pricing).map(([key, prices]) => (
                    <div key={key} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-lg font-medium mb-3 capitalize">
                        {key} Pricing
                      </h4>
                      <div className="space-y-2">
                        {prices.map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between text-sm"
                          >
                            <span>
                              {item.capacity} {item.rating}
                            </span>
                            <span className="font-medium">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Benefits of Renting */}
            {productSpecs.benefitsOfRenting && (
              <div>
                <h4 className="font-medium text-primary mb-2">
                  Benefits of Renting
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  {productSpecs.benefitsOfRenting.map((benefit, index) => (
                    <li key={index} className="text-gray-600">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Service Areas */}
            {productSpecs.serviceAreas && (
              <div>
                <h4 className="font-medium text-primary mb-2">Service Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {productSpecs.serviceAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {/* FAQs */}
            {productSpecs.faqs && (
              <div>
                <h4 className="font-medium text-primary mb-2">
                  Frequently Asked Questions
                </h4>
                <div className="space-y-4">
                  {productSpecs.faqs.map((item, index) => (
                    <div key={index} className="border-b pb-4">
                      <h5 className="font-medium text-gray-800 mb-2">
                        {item.question}
                      </h5>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Note */}
            {productSpecs.note && (
              <p className="text-sm text-gray-500 italic">
                {productSpecs.note}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
