import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

// Define a more comprehensive interface for product specifications
interface ProductSpecification {
  highlights: string[];
  features: string[];
  sizingGuide: string[];
  note?: string;
  description?: string[];
  termsAndConditions?: {
    title: string;
    content: string[];
  }[];
}

interface ProductSpecificationsProps {
  productId: keyof typeof specifications;
}

// Updated specifications with full description and terms
const specifications: Record<string, ProductSpecification> = {
  "room-heater": {
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
    note: "All pictures shown are for illustration purpose. Actual product may vary.",
  },
  "window-ac": {
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
      {
        title: "Security Deposit",
        content: [
          "Security deposit Rs. 2,000/-(refundable) will be extra and it will be returned back at the time of pickup.",
        ],
      },
      {
        title: "Refund Policy",
        content: [
          "Rent amount is non refundable any time you return the rented products (Only Security amount is refundable).",
        ],
      },
      {
        title: "Delivery Policy",
        content: [
          "Customer or his/her representative has to be present at the agreed date and time for getting Items checked in good condition and it will be returned in the same condition strictly.",
          "Delivered items cannot be returned unless they have major defects & are non-functional. If the order is cancelled after the delivery of the item, Order cancellation charges Rs. 1000 have to be paid",
          "Please note that the Customer should ensure the entry of delivery vehicle inside the premises. Additionally, Customer has to arrange for the permission to use the lift. In case you do not have lift or permission to use lift at your premises, extra labor charges will be there to carry the items through stairs. If Customer himself wants to arrange the labor to carry the items through stairs he will have to bear any damage incurred during such shifting.",
        ],
      },
      {
        title: "Pick-Up Policy",
        content: [
          "Customer has to inform us minimum 1 week prior to pick-up the product.",
          "Pick-up date and time will be mutually decided by Renter and firm. Customer or his/her representative has to be present at the agreed date and time. Otherwise extra logistics cost incurred will be charged to the renter.",
        ],
      },
      {
        title: "Damage Policy",
        content: [
          "The Customer has to pay for any damage to, loss of, or any theft (disappearance) of products at its market value.",
        ],
      },
      {
        title: "Maintenance Policy",
        content: [
          "Repair and Maintenance of products will be on us/firm with free of cost (Only visit Charges Rs.100/200 are applicable as per distance during the entire season. This does not cover damages, breakdowns due to mishandling. Maintenance will be catered within 6-24 working hours.",
        ],
      },
      {
        title: "Shifting",
        content: [
          "It is not allowed to shift the rented item to another location. It is provided for the location where it will be delivered and installed. Please Note If the customer shifts it himself, the maintenance will be done by himself and the security amount will also be forfeited.",
        ],
      },
      {
        title: "General Terms",
        content: [
          "All Air items will be only on rent, not for sale.",
          "Item cannot be transferred to another person.",
          "Stabilizer rent will be extra Rs.1,500/-, If required.",
          "Sub meter charge Rs. 1000/-, if required.",
          "Power Requirement: AC 240V, 50Hz with pre installed power plug of 16 Amp near AC",
          "All the Electricity part and electrical fitting would be done at Customer's end only. Basic installation would be provided from our end. Extra wooden/other work would be at extra cost and need to take care by Customer only.",
        ],
      },
    ],
    note: "All pictures shown are for illustration purpose. Actual product may vary.",
  },
};

export const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({
  productId,
}) => {
  const productSpecs = specifications[productId];

  // Early return with null check
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
          <h3 className="text-xl font-semibold mb-4">Product Specifications</h3>

          <div className="space-y-6">
            {/* Highlights Section */}
            <div>
              <h4 className="font-medium text-primary mb-2">Highlights</h4>
              <ul className="list-disc pl-5 space-y-2">
                {productSpecs.highlights.map((highlight, index) => (
                  <li key={index} className="text-gray-600">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Features Section */}
            <div>
              <h4 className="font-medium text-primary mb-2">Key Features</h4>
              <ul className="list-disc pl-5 space-y-2">
                {productSpecs.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Guide Section */}
            <div>
              <h4 className="font-medium text-primary mb-2">Size Guide</h4>
              <ul className="list-disc pl-5 space-y-2">
                {productSpecs.sizingGuide.map((size, index) => (
                  <li key={index} className="text-gray-600">
                    {size}
                  </li>
                ))}
              </ul>
            </div>

            {/* Optional Description Section */}
            {productSpecs.description && (
              <div>
                <h4 className="font-medium text-primary mb-2">Description</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {productSpecs.description.map((desc, index) => (
                    <li key={index} className="text-gray-600">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Optional Terms & Conditions Section */}
            {productSpecs.termsAndConditions && (
              <div>
                <h4 className="font-medium text-primary mb-2">Terms & Conditions</h4>
                {productSpecs.termsAndConditions.map((term, index) => (
                  <div key={index} className="mb-4">
                    <h5 className="font-semibold text-gray-800">{term.title}</h5>
                    <ul className="list-disc pl-5 space-y-2">
                      {term.content.map((line, lineIndex) => (
                        <li key={lineIndex} className="text-gray-600">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Note Section */}
            {productSpecs.note && (
              <p className="text-sm text-gray-500 italic">{productSpecs.note}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};