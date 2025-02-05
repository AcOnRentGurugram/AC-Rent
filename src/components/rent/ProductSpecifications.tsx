import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { CheckCircle, Ruler, Zap, Shield, Info, AlertCircle } from "lucide-react";

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
          price: "Rs. 8,318",
        },
    
        {
          type: "Window AC",
          capacity: "1.5 Ton",
          rating: "3 Star",
          price: "Rs. 8,414",
        },
     
        {
          type: "Window AC",
          capacity: "2.0 Ton",
          rating: "3 Star",
          price: "Rs. 8,509",
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
          "Prices start from Rs. 8318 per season for 1.0 Ton 3-Star Window AC.",
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
          price: "Rs. 8,318",
        },
        {
          type: "Window AC",
          capacity: "1.5 Ton",
          rating: "3 Star",
          price: "Rs. 8,414",
        },
        {
          type: "Window AC",
          capacity: "2.0 Ton",
          rating: "3 Star",
          price: "Rs. 8,509",
        },
      ],
      split: [
        {
          type: "Split AC",
          capacity: "1.0 Ton",
          rating: "3 Star",
          price: "Rs. 10,211",
        },
     
        {
          type: "Split AC",
          capacity: "1.5 Ton",
          rating: "3 Star",
          price: "Rs. 10,922",
        },
   
        {
          type: "Split AC",
          capacity: "2.0 Ton",
          rating: "3 Star",
          price: "Rs. 11,737",
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

  if (!productId || !productSpecs) return null;

  const SectionIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
    <Icon className={`w-5 h-5 mr-2 ${className}`} />
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8"
    >
      <Card className="shadow-lg">
        <CardContent className="p-8">
          {/* Header Section */}
          <div className="mb-10">
            {productSpecs.title && (
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {productSpecs.title}
              </h1>
            )}
            {productSpecs.subtitle && (
              <p className="text-lg text-gray-600 leading-relaxed">
                {productSpecs.subtitle}
              </p>
            )}
          </div>

          <div className="space-y-10">
            {/* Key Information Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Highlights */}
              {productSpecs.highlights && (
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <SectionIcon icon={Zap} className="text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Key Highlights</h3>
                  </div>
                  <ul className="space-y-3">
                    {productSpecs.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-600" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Features */}
              {productSpecs.features && (
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <SectionIcon icon={CheckCircle} className="text-green-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Main Features</h3>
                  </div>
                  <ul className="space-y-3">
                    {productSpecs.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sizing Guide */}
              {productSpecs.sizingGuide && (
                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <SectionIcon icon={Ruler} className="text-purple-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Size Recommendations</h3>
                  </div>
                  <ul className="space-y-3">
                    {productSpecs.sizingGuide.map((size, index) => (
                      <li key={index} className="text-gray-700">
                        <span className="font-medium text-purple-600">•</span> {size}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Pricing Section */}
            {productSpecs.pricing && (
              <div className="bg-white border rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-8">
                  <SectionIcon icon={Zap} className="text-red-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Pricing Details</h3>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {Object.entries(productSpecs.pricing).map(([category, prices]) => (
                    <div key={category} className="border p-6 rounded-lg">
                      <h4 className="text-lg font-semibold mb-4 capitalize border-b pb-2">
                        {category.replace(/([A-Z])/g, ' $1')}
                      </h4>
                      <div className="space-y-4">
                        {prices.map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <div>
                              <p className="font-medium text-gray-800">{item.capacity}</p>
                              <p className="text-sm text-gray-500">{item.rating}</p>
                            </div>
                            <span className="font-semibold text-red-600">
                              {item.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits Section */}
            {productSpecs.benefitsOfRenting && (
              <div className="bg-yellow-50 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <SectionIcon icon={Shield} className="text-yellow-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Rental Benefits</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {productSpecs.benefitsOfRenting.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-yellow-100 p-2 rounded-full mr-4">
                        <CheckCircle className="w-5 h-5 text-yellow-600" />
                      </div>
                      <p className="text-gray-700 flex-1">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Service Areas */}
            {productSpecs.serviceAreas && (
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <SectionIcon icon={Info} className="text-gray-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Service Coverage</h3>
                </div>
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
                  {productSpecs.serviceAreas.map((area, index) => (
                    <div key={index} className="text-gray-700 mb-2">
                      • {area}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Section */}
            {productSpecs.faqs && (
              <div className="border rounded-xl overflow-hidden">
                <div className="bg-gray-100 p-6">
                  <div className="flex items-center">
                    <SectionIcon icon={AlertCircle} className="text-gray-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Common Questions</h3>
                  </div>
                </div>
                <div className="p-6">
                  {productSpecs.faqs.map((faq, index) => (
                    <div key={index} className="py-4 border-b last:border-0">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Terms & Conditions */}
            {productSpecs.termsAndConditions && (
              <div className="border rounded-xl overflow-hidden">
                <div className="bg-gray-100 p-6">
                  <div className="flex items-center">
                    <SectionIcon icon={AlertCircle} className="text-gray-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Terms & Conditions</h3>
                  </div>
                </div>
                <div className="p-6 space-y-8">
                  {productSpecs.termsAndConditions.map((term, index) => (
                    <div key={index} className="border-b pb-6 last:border-0">
                      <h4 className="font-semibold text-lg text-gray-900 mb-3">
                        {term.title}
                      </h4>
                      <ul className="space-y-2">
                        {term.content.map((item, idx) => (
                          <li key={idx} className="text-gray-600 flex items-start">
                            <span className="mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Disclaimer */}
            {productSpecs.note && (
              <div className="bg-red-50 p-4 rounded-lg flex items-start">
                <Info className="w-5 h-5 mr-3 text-red-600 flex-shrink-0" />
                <p className="text-sm text-red-700">{productSpecs.note}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
