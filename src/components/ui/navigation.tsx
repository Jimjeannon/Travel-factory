import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Mountain, User, FileText, ShoppingBag } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();

  const links = [
    { href: "/", label: "E-commerce", icon: ShoppingBag },
    { href: "/cv", label: "CV", icon: User },
    { href: "/lettre-motivation", label: "Lettre", icon: FileText },
  ];

  return (
    <nav className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Travel Factory
            </span>
          </Link>

          <div className="flex items-center space-x-1">
            {links.map(({ href, label, icon: Icon }) => (
              <Button
                key={href}
                asChild
                variant={location.pathname === href ? "default" : "ghost"}
                className="transition-all duration-300"
              >
                <Link to={href} className="flex items-center space-x-2">
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
