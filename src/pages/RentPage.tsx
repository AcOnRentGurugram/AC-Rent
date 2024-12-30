import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductDisplay } from "@/components/rent/ProductDisplay";
import { PricingSection } from "@/components/rent/PricingSection";
import { RentalForm } from "@/components/rent/RentalForm";
import { ProductSpecifications } from "@/components/rent/ProductSpecifications";
import { SimilarProducts } from "@/components/rent/SimilarProducts";
import { getProductImage } from "@/utils/productImages";
import { getAvailableMonths, getPricing } from "@/utils/pricing";

const productVariants = {
  "window-ac": ["0.75 TON", "1.0 TON", "1.5 TON", "2.0 TON"],
  "split-ac": ["1.0 TON", "1.5 TON", "2.0 TON"],
  "room-heater": ["9Fin", "11Fin", "12Fin", "13Fin"],
  geyser: ["15L - 20L"],
  refrigerator: ["150-220L", "220-400L"],
  "washing-machine": ["semi-automatic", "fully-automatic"],
};

const RentPage = () => {
  const { productId } = useParams();
  const { toast } = useToast();
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    duration: "monthly",
    variant:
      productVariants[productId as keyof typeof productVariants]?.[0] || "",
    months: "",
  });

  const availableMonths = getAvailableMonths(productId || "", formData.variant);
  const currentPrice = getPricing(
    productId || "",
    formData.duration,
    formData.variant,
    parseInt(formData.months) || availableMonths[0]
  );
  const productImage = getProductImage(productId || "");

  const handleDurationChange = (value) => setFormData({ ...formData, duration: value });
  const handleVariantChange = (value) => setFormData({ ...formData, variant: value });
  const handleMonthsChange = (value) => setFormData({ ...formData, months: value });

  const handleFormSubmit = async (customerData) => {
    const TELEGRAM_BOT_TOKEN = "7283866982:AAGtPqHG44IUYF_adh7OedrQ6qw98VSC0x8";
    const TELEGRAM_CHAT_ID = "1684000886";

    const message = `
Rental Request:
Product: ${productId}
Variant: ${formData.variant}
Duration: ${formData.duration}
Months: ${formData.months}
Price: ₹${currentPrice}
Name: ${customerData.name}
Email: ${customerData.email}
Phone: ${customerData.phone}
Address: ${customerData.address}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to send message to Telegram");

      toast({
        title: "Request Submitted Successfully!",
        description: "We'll contact you shortly to confirm your rental.",
      });
      setFormDialogOpen(false);
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
      toast({
        title: "Submission Failed",
        description: "Unable to send your request. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const title = `Rent ${productId?.split("-").join(" ")} | Ac On Rent Gurugram`;
  const description = `Rent a premium ${productId
    ?.split("-")
    .join(" ")} with flexible rental periods. Available in ${
    formData.variant
  } variant. Starting from ₹${currentPrice} per ${formData.duration}.`;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={productImage} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={productImage} />
        
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11524510391"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11524510391');
          `}
        </script>
      </Helmet>

      <Navbar />

      <main className="flex-grow py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="lg:sticky lg:top-24">
              <ProductDisplay
                productId={productId || ""}
                productImage={productImage}
                variant={formData.variant}
              />
            </div>

            <div>
              <PricingSection
                duration={formData.duration}
                variant={formData.variant}
                currentPrice={currentPrice}
                productVariants={productVariants[productId as keyof typeof productVariants] || []}
                availableMonths={availableMonths}
                onDurationChange={handleDurationChange}
                onVariantChange={handleVariantChange}
                onMonthsChange={handleMonthsChange}
                selectedMonths={formData.months}
                onSubmitClick={() => setFormDialogOpen(true)}
              />
            </div>
          </div>

          <ProductSpecifications productId={productId || ""} />
          
          <SimilarProducts 
            currentProductId={productId || ""} 
            productVariants={productVariants}
          />
        </div>
      </main>

      <Dialog open={formDialogOpen} onOpenChange={setFormDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Complete Your Rental Request</DialogTitle>
          </DialogHeader>
          <RentalForm onSubmit={handleFormSubmit} />
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default RentPage;
