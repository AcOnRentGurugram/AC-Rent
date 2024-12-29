import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RentalFormProps {
  onSubmit: (formData: any) => void;
  initialData?: {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    quantity?: number;
  };
}

export const RentalForm = ({ onSubmit, initialData = {} }: RentalFormProps) => {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    address: initialData.address || "",
    quantity: initialData.quantity || "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 shadow rounded-lg">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your full name"
          className="mt-1.5"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          className="mt-1.5"
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter your phone number"
          className="mt-1.5"
        />
      </div>
      <div>
        <Label htmlFor="quantity">Quantity</Label>
        <Input
          id="quantity"
          name="quantity"
          type="number"
          required
          min="1"
          value={formData.quantity}
          onChange={handleInputChange}
          placeholder="Enter quantity"
          className="mt-1.5"
        />
      </div>
      <div>
        <Label htmlFor="address">Delivery Address</Label>
        <Input
          id="address"
          name="address"
          required
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Enter your delivery address"
          className="mt-1.5"
        />
      </div>
      <Button type="submit" className="w-full">
        Confirm Rental Request
      </Button>
    </form>
  );
};
