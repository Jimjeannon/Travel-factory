import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users, Wifi, Car, UtensilsCrossed } from "lucide-react";

interface SkiResortProps {
  id: string;
  name: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  capacity: number;
  amenities: string[];
  description: string;
}

export const SkiResortCard = ({ resort }: { resort: SkiResortProps }) => {
  const amenityIcons = {
    'WiFi': Wifi,
    'Parking': Car,
    'Restaurant': UtensilsCrossed,
  };

  return (
    <Card className="group overflow-hidden hover:shadow-[var(--shadow-mountain)] transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <img
          src={resort.image}
          alt={resort.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-accent text-accent-foreground font-semibold">
            €{resort.price}/nuit
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {resort.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-medium">{resort.rating}</span>
            <span className="text-sm text-muted-foreground">({resort.reviews})</span>
          </div>
        </div>

        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{resort.location}</span>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {resort.description}
        </p>

        <div className="flex items-center mb-4">
          <Users className="h-4 w-4 mr-2 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Jusqu'à {resort.capacity} personnes
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {resort.amenities.map((amenity) => {
            const Icon = amenityIcons[amenity as keyof typeof amenityIcons];
            return (
              <div key={amenity} className="flex items-center space-x-1">
                {Icon && <Icon className="h-3 w-3 text-muted-foreground" />}
                <span className="text-xs text-muted-foreground">{amenity}</span>
              </div>
            );
          })}
        </div>

        <Button 
          className="w-full bg-gradient-to-r from-primary to-primary-light hover:shadow-[var(--shadow-mountain)] transition-all duration-300"
        >
          Réserver maintenant
        </Button>
      </CardContent>
    </Card>
  );
};