import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Declare global interface for window.dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Dynamically load gtag.js script
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-11524510391";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize dataLayer and gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }

      // Trigger conversion event
      gtag("event", "conversion", {
        send_to: "AW-11524510391/-DkSCP-Vyf4ZELelqPcq",
        value: 2.0,
        currency: "INR",
      });
    };

    // Redirect after 3 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.head.removeChild(script); // Clean up the script to avoid duplicates
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 pt-10">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 max-w-lg mx-auto"
        >
          <div className="flex justify-center">
            <CheckCircle2 className="w-24 h-24 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Thank You!</h1>
          <p className="text-xl text-gray-600">
            Your rental request has been successfully submitted. We will contact you
            shortly to confirm your order.
          </p>
          <p className="text-sm text-gray-500">
            Redirecting to homepage in a few seconds...
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
