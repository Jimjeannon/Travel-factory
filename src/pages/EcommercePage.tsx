import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { SkiResortCard } from "@/components/SkiResortCard";
import { FilterSection } from "@/components/FilterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Mountain, Snowflake } from "lucide-react";
import skiResortHero from "@/assets/ski-resort-hero.jpg";
import chaletLuxury from "@/assets/chalet-luxury.jpg";
import resortModern from "@/assets/resort-modern.jpg";

export default function EcommercePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [100, 400] as [number, number],
    location: "",
    amenities: [] as string[],
    rating: 0,
  });

  const resorts = [
    {
      id: "1",
      name: "Chalet Premium Chamonix",
      location: "Chamonix-Mont-Blanc",
      image: chaletLuxury,
      price: 350,
      rating: 4.8,
      reviews: 127,
      capacity: 8,
      amenities: ["WiFi", "Parking", "Restaurant", "Spa"],
      description: "Chalet luxueux avec vue sur le Mont-Blanc, accès direct aux pistes et spa privé. Une expérience inoubliable au cœur des Alpes."
    },
    {
      id: "2", 
      name: "Resort Moderne Val d'Isère",
      location: "Val d'Isère",
      image: resortModern,
      price: 280,
      rating: 4.6,
      reviews: 89,
      capacity: 12,
      amenities: ["WiFi", "Parking", "Restaurant", "Piscine"],
      description: "Resort contemporain alliant design moderne et confort alpin. Piscine chauffée et restaurant gastronomique inclus."
    },
    {
      id: "3",
      name: "Refuge Authentique Courchevel",
      location: "Courchevel",
      image: chaletLuxury,
      price: 420,
      rating: 4.9,
      reviews: 203,
      capacity: 6,
      amenities: ["WiFi", "Restaurant", "Spa", "Sauna"],
      description: "Refuge de montagne authentique rénové avec goût. Ambiance chaleureuse et services haut de gamme au cœur des 3 Vallées."
    }
  ];

  const filteredResorts = resorts.filter(resort => {
    const matchesSearch = resort.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resort.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = resort.price >= filters.priceRange[0] && resort.price <= filters.priceRange[1];
    const matchesLocation = !filters.location || resort.location.includes(filters.location);
    const matchesAmenities = filters.amenities.length === 0 || 
                            filters.amenities.every(amenity => resort.amenities.includes(amenity));
    const matchesRating = resort.rating >= filters.rating;

    return matchesSearch && matchesPrice && matchesLocation && matchesAmenities && matchesRating;
  });

  const clearFilters = () => {
    setFilters({
      priceRange: [100, 400],
      location: "",
      amenities: [],
      rating: 0,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={skiResortHero}
          alt="Station de ski alpine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 max-w-4xl px-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Snowflake className="h-8 w-8 animate-pulse" />
              <Mountain className="h-10 w-10" />
              <Snowflake className="h-8 w-8 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Séjours au Ski
              <span className="block text-accent">d'Exception</span>
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
              Découvrez nos hébergements premium dans les plus belles stations des Alpes
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg">
              Explorer nos offres
            </Button>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <FilterSection
              filters={filters}
              onFiltersChange={setFilters}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 mb-8 border">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Rechercher par destination ou nom..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center space-x-2"
                >
                  <Filter className="h-4 w-4" />
                  <span>Filtres</span>
                </Button>
              </div>
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {filteredResorts.length} hébergement{filteredResorts.length > 1 ? 's' : ''} trouvé{filteredResorts.length > 1 ? 's' : ''}
                </h2>
                <p className="text-muted-foreground">
                  Réservation instantanée • Annulation gratuite
                </p>
              </div>
              
              {/* Active filters count */}
              {(filters.location || filters.amenities.length > 0 || filters.rating > 0) && (
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {[
                    filters.location ? 1 : 0,
                    filters.amenities.length,
                    filters.rating > 0 ? 1 : 0
                  ].reduce((a, b) => a + b, 0)} filtre{[filters.location ? 1 : 0, filters.amenities.length, filters.rating > 0 ? 1 : 0].reduce((a, b) => a + b, 0) > 1 ? 's' : ''} actif{[filters.location ? 1 : 0, filters.amenities.length, filters.rating > 0 ? 1 : 0].reduce((a, b) => a + b, 0) > 1 ? 's' : ''}
                </Badge>
              )}
            </div>

            {/* Resort Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredResorts.map((resort) => (
                <SkiResortCard key={resort.id} resort={resort} />
              ))}
            </div>

            {/* No results */}
            {filteredResorts.length === 0 && (
              <div className="text-center py-12">
                <Mountain className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Aucun hébergement trouvé
                </h3>
                <p className="text-muted-foreground mb-6">
                  Essayez de modifier vos critères de recherche
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Effacer tous les filtres
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}