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
  Download,
} from "lucide-react";

export default function LettreMotivation() {
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
              Candidature pour le poste de Développeur Front-End • Travel
              Factory
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>jim.jeannon@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Paris, France</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date().toLocaleDateString("fr-FR")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <p className="leading-relaxed text-muted-foreground mb-4">
                Monsieur,
              </p>
              <p className="leading-relaxed text-muted-foreground mb-4">
                Passionné par les hautes technologies et fervent skieur, je suis
                enthousiaste à l’idée de rejoindre Travel Factory pour
                contribuer à la création d’une plateforme de réservation de
                séjours au ski innovante et fluide. Votre ambition de réinventer
                l’expérience e-commerce pour les passionnés de montagne résonne
                profondément avec mon parcours professionnel et mes aspirations
                personnelles. Fort de deux années d’expérience en développement
                front-end, notamment avec React, Angular, et WebFlow, ainsi
                qu’une appétence pour les environnements agiles et les défis
                techniques, je suis convaincu de pouvoir apporter une réelle
                valeur ajoutée à votre équipe tech.
              </p>
              <p className="leading-relaxed text-muted-foreground mb-4">
                Au cours de mes expériences chez Le Bonbon et Insiders, j’ai
                développé des interfaces utilisateur dynamiques et performantes
                en utilisant React, Next.js, TypeScript et Angular. Ces projets
                m’ont permis de maîtriser la collaboration avec des équipes
                pluridisciplinaires (marketing, direction artistique, back-end)
                et de m’adapter à des environnements techniques variés, tout en
                respectant les standards d’accessibilité et de performance. Par
                exemple, chez Insiders, j’ai intégré des maquettes complexes
                issues de Photoshop et participé à des échanges clients pour
                garantir la qualité des livrables. Chez Polimair, j’ai
                implémenté un configurateur 3D sur une boutique e-commerce
                WebFlow, renforçant ma capacité à optimiser des parcours
                utilisateur et à automatiser des flux d’information.
              </p>
              <p className="leading-relaxed text-muted-foreground mb-4">
                Bien que mon expérience directe avec Vue.js et Nuxt soit
                limitée, ma maîtrise de frameworks modernes comme React et
                Angular, combinée à ma curiosité et ma capacité d’apprentissage
                rapide, me permettra de m’adapter rapidement à votre stack
                technique (Vue3, Nuxt3, Composition API, SSR). J’ai d’ailleurs
                commencé à explorer Vue.js dans des projets personnels,
                notamment pour des interfaces interactives, ce qui m’a permis
                d’apprécier sa simplicité et sa puissance. Mon expérience en
                optimisation SEO (via Google Analytics) et en intégration d’API
                REST, ainsi que ma familiarité avec des outils comme GitLab et
                Slack, me positionnent comme un candidat prêt à relever vos
                défis, notamment en termes de performances (lazy-loading, Core
                Web Vitals) et de qualité (tests, CI/CD).
              </p>
              <p className="leading-relaxed text-muted-foreground mb-4">
                En tant que skieur passionné, je comprends l’importance d’une
                expérience utilisateur fluide et mémorable pour les amoureux de
                la montagne. L’idée de contribuer à une plateforme qui facilite
                la réservation de séjours au ski et crée des souvenirs
                inoubliables me motive particulièrement. Mon passé de chef
                d’équipe paysagiste et mes expériences internationales (Canada,
                Australie, Nouvelle-Zélande) m’ont appris à travailler avec
                flexibilité et adaptabilité, des qualités que je mets
                aujourd’hui au service de projets techniques ambitieux. J’ai
                également contribué à des projets personnels, comme la création
                de sites vitrines avec animations JavaScript, qui témoignent de
                mon engagement à produire un code propre et innovant.
              </p>
              <p className="leading-relaxed text-muted-foreground mb-4">
                Rejoindre Travel Factory représente une opportunité unique de
                combiner ma passion pour le développement front-end et mon amour
                du ski au sein d’une équipe ambitieuse et bienveillante. Je
                serais ravi de mettre mes compétences techniques, mon goût pour
                l’innovation et mon esprit d’équipe au service de votre projet,
                tout en continuant à apprendre et à progresser.
              </p>
              <p className="leading-relaxed text-muted-foreground mb-4">
                Je reste à votre disposition pour un entretien afin de discuter
                de ma candidature et de mes idées pour votre plateforme. Dans
                l’attente de votre retour, je vous prie d’agréer, Madame,
                Monsieur, l’expression de mes salutations distinguées.
              </p>
              <div className="text-right mt-8">
                <p className="font-semibold">Jim Jeannon</p>
                <p className="text-sm text-muted-foreground">
                  Développeur Front-End
                </p>
              </div>
            </CardContent>
          </Card>
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
