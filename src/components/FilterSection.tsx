import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface FilterProps {
  filters: {
    priceRange: [number, number];
    location: string;
    amenities: string[];
    rating: number;
  };
  onFiltersChange: (filters: any) => void;
  onClearFilters: () => void;
}

export const FilterSection = ({ filters, onFiltersChange, onClearFilters }: FilterProps) => {
  const locations = [
    "Chamonix", "Val d'Isère", "Courchevel", "Méribel", "Les Gets"
  ];

  const amenities = [
    "WiFi", "Parking", "Restaurant", "Spa", "Piscine", "Sauna"
  ];

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Filtres</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClearFilters}>
            <X className="h-4 w-4 mr-1" />
            Effacer
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Price Range */}
        <div>
          <h4 className="font-medium mb-3">Prix par nuit</h4>
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => 
              onFiltersChange({ ...filters, priceRange: value as [number, number] })
            }
            max={500}
            min={50}
            step={10}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>€{filters.priceRange[0]}</span>
            <span>€{filters.priceRange[1]}</span>
          </div>
        </div>

        {/* Location */}
        <div>
          <h4 className="font-medium mb-3">Destination</h4>
          <Select
            value={filters.location}
            onValueChange={(value) => onFiltersChange({ ...filters, location: value === "all" ? "" : value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Choisir une destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les destinations</SelectItem>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Rating */}
        <div>
          <h4 className="font-medium mb-3">Note minimum</h4>
          <Select
            value={filters.rating.toString()}
            onValueChange={(value) => onFiltersChange({ ...filters, rating: value === "all" ? 0 : Number(value) })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Note minimum" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les notes</SelectItem>
              <SelectItem value="3">3+ étoiles</SelectItem>
              <SelectItem value="4">4+ étoiles</SelectItem>
              <SelectItem value="4.5">4.5+ étoiles</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Amenities */}
        <div>
          <h4 className="font-medium mb-3">Équipements</h4>
          <div className="space-y-2">
            {amenities.map((amenity) => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox
                  id={amenity}
                  checked={filters.amenities.includes(amenity)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      onFiltersChange({
                        ...filters,
                        amenities: [...filters.amenities, amenity]
                      });
                    } else {
                      onFiltersChange({
                        ...filters,
                        amenities: filters.amenities.filter(a => a !== amenity)
                      });
                    }
                  }}
                />
                <label htmlFor={amenity} className="text-sm">
                  {amenity}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Active Filters */}
        {(filters.location && filters.location !== "all" || filters.amenities.length > 0 || filters.rating > 0) && (
          <div>
            <h4 className="font-medium mb-3">Filtres actifs</h4>
            <div className="flex flex-wrap gap-2">
              {filters.location && filters.location !== "all" && (
                <Badge variant="secondary" className="flex items-center space-x-1">
                  <span>{filters.location}</span>
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => onFiltersChange({ ...filters, location: "" })}
                  />
                </Badge>
              )}
              {filters.amenities.map((amenity) => (
                <Badge key={amenity} variant="secondary" className="flex items-center space-x-1">
                  <span>{amenity}</span>
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => onFiltersChange({
                      ...filters,
                      amenities: filters.amenities.filter(a => a !== amenity)
                    })}
                  />
                </Badge>
              ))}
              {filters.rating > 0 && (
                <Badge variant="secondary" className="flex items-center space-x-1">
                  <span>{filters.rating}+ étoiles</span>
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => onFiltersChange({ ...filters, rating: 0 })}
                  />
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};