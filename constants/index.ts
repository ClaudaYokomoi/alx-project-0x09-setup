import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  // Ensure the id is available
  if (!id) return "Loading...";  // Return a plain string message instead of JSX

  // Ensure the id is parsed to an integer and matches a property
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === parseInt(id as string));

  // Handle the case where no property is found for the given ID
  if (!property) return "Property not found";  // Return a plain string message instead of JSX

  return (
    <div className="container mx-auto p-6">
      {/* Property Detail */}
      <PropertyDetail property={property} />

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Review Section */}
        <div className="flex-1">
          <ReviewSection reviews={property.reviews || []} />
        </div>

        {/* Booking Section */}
        <div className="w-full md:w-1/3">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
}
