import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MapPin, 
  Calendar, 
  Mountain, 
  Heart, 
  Target, 
  Lightbulb,
  Users,
  Code2,
  Download
} from "lucide-react";

export default function LettreMotivation() {
  const motivations = [
    {
      icon: Mountain,
      title: "Passion pour l'innovation",
      description: "Travel Factory réinvente l'expérience e-commerce du ski, un défi technique passionnant qui correspond à ma vision du développement moderne."
    },
    {
      icon: Code2,
      title: "Expertise Vue.js / Nuxt 3",
      description: "Ma maîtrise complète de Vue 3 et Nuxt 3 avec la Composition API me permet de contribuer immédiatement à vos projets."
    },
    {
      icon: Users,
      title: "Travail collaboratif",
      description: "J'apprécie particulièrement travailler en équipe pluridisciplinaire (PO, design, backend, QA) pour créer des expériences utilisateur exceptionnelles."
    },
    {
      icon: Target,
      title: "Performance & qualité",
      description: "Mon attention aux Core Web Vitals, à l'accessibilité et aux tests automatisés garantit des applications robustes et performantes."
    }
  ];

  const competences = [
    "Vue.js 3 & Composition API",
    "Nuxt 3 & SSR",
    "Tailwind CSS & Design Systems",
    "Performance Optimization",
    "Tests (Vitest, Playwright)",
    "Azure DevOps & CI/CD",
    "APIs REST & GraphQL",
    "Accessibilité Web"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Lettre de Motivation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Candidature pour le poste de Développeur Frontend • Travel Factory
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>alexandre.dubois@email.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Paris, France</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date().toLocaleDateString('fr-FR')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-primary" />
                <span>Pourquoi Travel Factory ?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed">
                Madame, Monsieur,
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Passionné par le développement frontend et amateur de sports d'hiver, je suis particulièrement 
                enthousiasmé par l'opportunité de rejoindre Travel Factory. Votre mission de réinventer l'expérience 
                e-commerce pour les séjours au ski résonne parfaitement avec ma vision du développement web moderne : 
                allier performance technique et expérience utilisateur exceptionnelle.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Avec 3 ans d'expérience en développement frontend, dont une expertise approfondie en Vue.js 3 et Nuxt 3, 
                je suis convaincu de pouvoir contribuer significativement à la croissance de votre plateforme.
              </p>
            </CardContent>
          </Card>

          {/* Motivations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {motivations.map((motivation, index) => (
              <Card key={index} className="group hover:shadow-[var(--shadow-card)] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <motivation.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{motivation.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {motivation.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Compétences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                <span>Adéquation avec vos besoins techniques</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-muted-foreground">
                Mon parcours professionnel m'a permis d'acquérir une expertise solide sur l'ensemble 
                de votre stack technique :
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {competences.map((competence) => (
                  <Badge key={competence} variant="secondary" className="justify-center">
                    {competence}
                  </Badge>
                ))}
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Développement Vue.js 3 :</strong> Maîtrise complète de la Composition API, 
                  création de composants réutilisables et optimisation des performances.
                </p>
                <p>
                  <strong className="text-foreground">Expérience Nuxt 3 :</strong> Implémentation SSR, optimisation SEO, 
                  et gestion avancée du routing pour des applications e-commerce.
                </p>
                <p>
                  <strong className="text-foreground">Design Systems :</strong> Collaboration étroite avec les équipes design, 
                  implémentation Figma vers code avec Tailwind CSS.
                </p>
                <p>
                  <strong className="text-foreground">Qualité & Tests :</strong> Mise en place de pipelines CI/CD, 
                  tests automatisés (Vitest, Playwright) et bonnes pratiques de développement.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Apport */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <span>Ce que je peux apporter à Travel Factory</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Impact immédiat</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Développement des pages e-commerce critiques</li>
                    <li>• Optimisation des performances existantes</li>
                    <li>• Intégration APIs backend PHP</li>
                    <li>• Amélioration de l'accessibilité</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Vision long terme</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Évolution du design system</li>
                    <li>• Mentoring des futurs développeurs</li>
                    <li>• Veille technologique continue</li>
                    <li>• Amélioration des processus qualité</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card>
            <CardContent className="p-8">
              <p className="leading-relaxed text-muted-foreground mb-6">
                Convaincu que mon profil technique et ma passion pour l'innovation correspondent parfaitement 
                à vos attentes, je serais ravi de pouvoir échanger plus en détail sur cette opportunité. 
                Je suis disponible pour un entretien à votre convenance et enthousiaste à l'idée de contribuer 
                au succès de Travel Factory.
              </p>
              <p className="leading-relaxed text-muted-foreground mb-8">
                En vous remerciant pour l'attention que vous porterez à ma candidature, je vous prie d'agréer, 
                Madame, Monsieur, l'expression de mes salutations distinguées.
              </p>
              <div className="text-right">
                <p className="font-semibold">Alexandre Dubois</p>
                <p className="text-sm text-muted-foreground">Développeur Frontend</p>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-center space-x-4 pt-8">
            <Button className="bg-primary hover:bg-primary/90">
              <Mail className="h-4 w-4 mr-2" />
              Envoyer un message
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Télécharger en PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}