import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Code,
  Globe,
  Github,
  Linkedin,
  Download,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import developerWorkspace from "@/assets/developer-workspace.jpg";

export default function CVPage() {
  const skills = {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Angular",
      "JavaScript",
      "WebFlow",
      "Spline",
    ],
    tools: ["GitLab", "Slack", "Figma", "Photoshop", "Google Analytics", "SEO"],
    backend: [],
    other: [
      "Agile",
      "Scrum",
      "Collaboration",
      "Adaptabilité",
      "Orientation solutions",
      "Passion pour le ski",
    ],
  };

  const experiences = [
    {
      title: "Développeur Front-End",
      company: "Le Bonbon (Média urbain)",
      period: "1 an",
      location: "Paris",
      highlights: [
        "Développement d'interfaces collaboratives avec React, Next.js et TypeScript, en utilisant GitLab et Slack.",
        "Coordination avec l'équipe marketing pour répondre aux besoins techniques et fonctionnels.",
      ],
    },
    {
      title: "Développeur Front-End",
      company: "Insiders (Studio NFT)",
      period: "1 an",
      location: "Paris",
      highlights: [
        "Création d'interfaces responsives avec Angular, React et JavaScript dans un cadre Agile.",
        "Intégration de maquettes issues de Figma et Photoshop, en collaboration avec la direction artistique et le chef de projet.",
        "Échanges avec les clients pour assurer le suivi et la satisfaction des projets.",
      ],
    },
    {
      title: "Développeur Front-End",
      company: "Mira (VR 3D)",
      period: "4 mois",
      location: "Paris",
      highlights: [
        "Développement d'interfaces enrichies en 3D avec Spline et outils d'IA conversationnelle.",
        "Collaboration avec les équipes de développement 3D et la direction artistique pour intégrer des designs complexes.",
      ],
    },
    {
      title: "Développeur Front-End & Intégration eCommerce",
      company: "Polimair (eCommerce 3D)",
      period: "1 mois",
      location: "Paris",
      highlights: [
        "Intégration d'un configurateur 3D sur une boutique WebFlow avec JavaScript.",
        "Automatisation des flux d'informations de vente pour optimiser l'efficacité.",
      ],
    },
    {
      title: "Développeur Front-End (Freelance)",
      company: "Particulier",
      period: "6 mois",
      location: "Paris",
      highlights: [
        "Conception et développement de sites vitrines sur mesure avec WebFlow et JavaScript.",
        "Intégration d'API et d'animations, optimisation SEO et suivi des performances avec Google Analytics.",
      ],
    },
    {
      title: "Chef d'équipe paysagiste",
      company: "Divers employeurs",
      period: "6 ans",
      location: "Paris",
      highlights: [
        "Supervision d'équipes pour la création et l'entretien de paysages, démontrant leadership et gestion de projets.",
      ],
    },
  ];

  // Pas de section projets personnalisée pour ce CV
  const projects: any[] = [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={developerWorkspace}
            alt="Workspace développeur"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Jim Jeannon
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Développeur Front-End
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>jim.jeannon@example.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+33 6 12 34 56 78</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Paris, France</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://linkedin.com/in/jimjeannon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button className="bg-accent hover:bg-accent/90">
                <Download className="h-4 w-4 mr-2" />
                Télécharger CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span>À propos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Développeur Front-End motivé, avec une expertise en React,
                  TypeScript et méthodologies agiles. Pragmatique et orienté
                  solutions, je suis passionné par les hautes technologies et le
                  développement d'interfaces utilisateur performantes. Habitué à
                  collaborer avec des équipes internationales grâce à mes
                  expériences à l'étranger, je suis également un fervent skieur,
                  ce qui reflète mon goût pour les défis dynamiques et la
                  précision.
                </p>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span>Expérience Professionnelle</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-primary/20 pl-6 relative"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      {exp.period && (
                        <span className="ml-2 text-xs text-muted-foreground font-medium border border-primary/30 rounded px-2 py-0.5">
                          {exp.period}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-primary font-medium">{exp.company}</span>
                      <span className="text-xs text-muted-foreground flex items-center"><MapPin className="h-3 w-3 mr-1" />{exp.location}</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Expériences internationales */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Expériences internationales</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>
                    Visa Vacances-Travail, Canada, Australie, Nouvelle-Zélande
                    (2014, 2018, 2020) : Développement de compétences
                    d'adaptabilité et de collaboration interculturelle dans des
                    environnements internationaux.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Compétences</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-primary">Frontend</h4>
                  <div className="flex flex-wrap gap-1">
                    {skills.frontend.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-primary">
                    Outils & Tests
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {skills.tools.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-primary">Backend</h4>
                  <div className="flex flex-wrap gap-1">
                    {skills.backend.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-primary">Autres</h4>
                  <div className="flex flex-wrap gap-1">
                    {skills.other.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Formation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span>Formation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">
                      Autodidacte & Formation continue
                    </h3>
                    <p className="text-sm text-muted-foreground">En cours</p>
                    <p className="text-xs text-muted-foreground">
                      Spécialisation en développement Front-End via plateformes
                      en ligne et projets pratiques.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle>Langues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Français</span>
                    <Badge>Natif</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Anglais</span>
                    <Badge variant="secondary">Courant</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
