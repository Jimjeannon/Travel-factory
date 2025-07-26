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
  GraduationCap
} from "lucide-react";
import developerWorkspace from "@/assets/developer-workspace.jpg";

export default function CVPage() {
  const skills = {
    frontend: ["Vue.js 3", "Nuxt 3", "React", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS"],
    tools: ["Git", "Azure DevOps", "Figma", "Vitest", "Playwright", "Vite", "Webpack"],
    backend: ["Node.js", "REST APIs", "GraphQL", "PHP", "MySQL", "MongoDB"],
    other: ["Responsive Design", "Accessibility (a11y)", "SEO", "Performance Optimization", "Agile/Scrum"]
  };

  const experiences = [
    {
      title: "Développeur Frontend Senior",
      company: "Tech Solutions",
      period: "2022 - 2024",
      location: "Paris, France",
      highlights: [
        "Développement d'applications Vue.js 3 avec Composition API",
        "Optimisation des performances web (Core Web Vitals)",
        "Implémentation de design systems avec Tailwind CSS",
        "Collaboration étroite avec les équipes UX/UI et backend"
      ]
    },
    {
      title: "Développeur Frontend",
      company: "StartupTech",
      period: "2021 - 2022", 
      location: "Lyon, France",
      highlights: [
        "Migration d'applications legacy vers Vue.js 3",
        "Mise en place de tests automatisés (Vitest, Cypress)",
        "Intégration d'APIs REST et GraphQL",
        "Amélioration de l'accessibilité web (WCAG 2.1)"
      ]
    }
  ];

  const projects = [
    {
      name: "Plateforme E-commerce Ski",
      tech: ["Vue.js 3", "Nuxt 3", "Tailwind", "TypeScript"],
      description: "Application de réservation de séjours au ski avec filtres avancés et paiement en ligne"
    },
    {
      name: "Dashboard Analytics",
      tech: ["React", "TypeScript", "Chart.js", "REST API"],
      description: "Interface d'administration avec visualisations de données temps réel"
    }
  ];

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
              Alexandre Dubois
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Développeur Frontend • Vue.js / Nuxt 3 • 3 ans d'expérience
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>alexandre.dubois@email.com</span>
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
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
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
                  Développeur frontend passionné avec 3 ans d'expérience, spécialisé dans l'écosystème Vue.js. 
                  Je maîtrise Vue 3 avec la Composition API et Nuxt 3 pour créer des applications web modernes, 
                  performantes et accessibles. Mon approche privilégie la qualité du code, les bonnes pratiques 
                  et l'expérience utilisateur optimale.
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
                  <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    <div className="text-primary font-medium mb-1">{exp.company}</div>
                    <div className="text-sm text-muted-foreground mb-3 flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {exp.location}
                    </div>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Projets Récents</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="font-semibold text-lg">{project.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                ))}
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
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-primary">Outils & Tests</h4>
                  <div className="flex flex-wrap gap-1">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-primary">Backend</h4>
                  <div className="flex flex-wrap gap-1">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-primary">Autres</h4>
                  <div className="flex flex-wrap gap-1">
                    {skills.other.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
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
                    <h3 className="font-semibold">Master Informatique</h3>
                    <p className="text-sm text-muted-foreground">Université Paris Diderot</p>
                    <p className="text-xs text-muted-foreground">2019 - 2021</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Licence Informatique</h3>
                    <p className="text-sm text-muted-foreground">Université Paris Diderot</p>
                    <p className="text-xs text-muted-foreground">2016 - 2019</p>
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