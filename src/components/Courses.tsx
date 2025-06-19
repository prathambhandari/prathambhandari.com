import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Courses = () => {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl mt-20 md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          My Courses
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Sharing knowledge through comprehensive online courses
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-transparent hover:border-emerald-200 dark:hover:border-emerald-800">
          <div className="md:flex">
            {/* Course Image */}
            <div className="md:w-1/2 relative overflow-hidden">
              <img
                src="https://kinsta.com/dk/wp-content/uploads/sites/12/2023/02/github-pages.jpg"
                alt="Udemy Course"
                className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>

              {/* Udemy Badge */}
              <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Udemy Course
              </div>
            </div>

            {/* Course Content */}
            <div className="md:w-1/2 p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
                  Version Control with GitHub: The Complete Course
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-lg">
                  A Comprehensive Course on Code Management and Collaboration.
                  Learn how to effectively manage your code and collaborate with
                  others using Git and GitHub.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-0">
                {/* Course Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-white/80 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                      4.4
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Rating
                    </div>
                  </div>
                  <div className="text-center p-3 bg-white/80 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-xl font-bold text-teal-600 dark:text-teal-400">
                      7.1K+
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Students
                    </div>
                  </div>
                  <div className="text-center p-3 bg-white/80 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                      4h
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Content
                    </div>
                  </div>
                </div>

                {/* What You'll Learn */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    What you'll learn:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      Git and GitHub for efficient version control
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      Implement Git workflows for smoother development
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      Collaborate effectively using GitHub's project management
                      features
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      Adhere to GitHub best practices and enhance project
                      security
                    </li>
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.udemy.com/share/10a5DG/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
                      Enroll Now
                    </Button>
                  </a>

                  {/* <a
                    href="http://udemy.com/course/git-and-github-collaboration-and-version-control-unveiled"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 bg-transparent text-emerald-700 dark:text-emerald-300">
                      Course Preview
                    </Button>
                  </a> */}
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Courses;
