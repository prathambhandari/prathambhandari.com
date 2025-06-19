import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Code, Cloud, Layers, GitBranch, Globe } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Content */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl mt-10 md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-800 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-300 bg-clip-text text-transparent mb-6 leading-tight">
            I'am Pratham
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            I bring ideas to life with a smile — crafting playful, polished, and
            purposeful digital experiences that delight and deliver.
          </p>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="../././assets/1.png"
                alt="Profile"
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full opacity-20 blur-xl"></div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Hey there! I’m a developer from Mangalore, India who loves
                bringing ideas to life through code. I mostly work with Flutter,
                Dart, and a bit of AWS and web development. Outside of coding,
                you’ll often find me exploring new places, listening to music,
                or out on the field playing football. I’m all about building
                things that feel good to use and are fun to create.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
                  <Code className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      Flutter
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      Mobile Dev
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20">
                  <div className="w-6 h-6 bg-gradient-to-r from-teal-600 to-cyan-600 rounded flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                      Dart
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      Language
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-cyan-50 to-emerald-50 dark:from-cyan-900/20 dark:to-emerald-900/20">
                  <Cloud className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  <div>
                    <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                      AWS
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      Cloud
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
                  <GitBranch className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      DevOps
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      CI/CD
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
              <h4 className="font-semibold mb-2">
                Let's build something amazing
              </h4>
              <p className="text-emerald-100 text-sm">
                Ready to bring your mobile app ideas to life with Flutter.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
