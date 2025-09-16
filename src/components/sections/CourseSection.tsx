import {
  ExternalLink,
  Star,
  Clock,
  Users,
  Award,
  Play,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const offerings = [
  {
    type: "course",
    title: "Version Control with GitHub: The Complete Course",
    description: `A Comprehensive Course on Code Management and Collaboration.
                  Learn how to effectively manage your code and collaborate with
                  others using Git and GitHub.`,

    image:
      "https://kinsta.com/dk/wp-content/uploads/sites/12/2023/02/github-pages.jpg",
    rating: 4.5,
    students: 7145,
    duration: "4 hours",
    link: "https://www.udemy.com/share/10a5DG/",
    highlights: [
      "efficient version control",
      "Lifetime Access",
      "Certificate",
      "smoother development",
    ],
  },
  {
    type: "youtube",
    title: "Stock Market Course",
    description:
      "Learn stock market fundamentals, trading strategies, and investment principles through practical tutorials.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    subscribers: "",
    videos: "19+ videos (Scheduled)",
    duration: "3+ hours",
    link: "https://youtube.com/playlist?list=PLi8rBDq3IeyRn5GtRjDTcLr5ESRqjuwO6&si=oOhlqdNcZJXdAyQX",
    highlights: [
      "Free Content",
      "Examples",
      "Trading Strategies",
      "Market Analysis",
    ],
  },
];

export const CourseSection = () => {
  return (
    <section id="course" className="py-12 lg:py-20 px-4 lg:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Courses & <span className="text-gradient">Tutorials</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Learn from my comprehensive courses and free YouTube tutorials
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {offerings.map((offering, index) => (
            <Card
              key={index}
              className="group overflow-hidden h-full flex flex-col"
            >
              <div className="relative">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Overlay Stats */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-3 text-white text-sm">
                    {offering.type === "course" ? (
                      <>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{offering.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{offering.students.toLocaleString()}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-1">
                          <Youtube className="w-4 h-4 text-red-500" />
                          <span>{offering.subscribers}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Play className="w-4 h-4" />
                          <span>{offering.videos}</span>
                        </div>
                      </>
                    )}
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{offering.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3 flex-shrink-0">
                <CardTitle className="text-lg sm:text-xl line-clamp-2">
                  {offering.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {offering.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0 flex-1 flex flex-col">
                <div className="grid grid-cols-2 gap-2 mb-6 flex-1">
                  {offering.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Award className="w-3 h-3 text-primary flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-auto" asChild>
                  <a
                    href={offering.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {offering.type === "course"
                      ? "Enroll Now"
                      : "Watch Playlist"}
                    {offering.type === "course" ? (
                      <ExternalLink className="w-4 h-4 ml-2" />
                    ) : (
                      <Youtube className="w-4 h-4 ml-2" />
                    )}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
