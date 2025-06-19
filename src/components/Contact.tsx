import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Let's discuss your next project or collaboration opportunity
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Contact Form */}
        <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
              Send Message
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>
              <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-6">
          <Card className="p-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
            <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
            <p className="text-emerald-100 mb-4">
              I'm always interested in hearing about new opportunities and
              exciting projects.
            </p>
            <div className="space-y-3">
              {/* <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>email@example.com</span>
              </div> */}
              {/* <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>+1 (555) 123-4567</span>
              </div> */}
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                <span>Mangalore, India</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Social Links
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <Button
                asChild
                className="justify-start border border-emerald-200 dark:border-emerald-800 bg-transparent hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300"
              >
                <a
                  href="https://www.linkedin.com/in/prathambhandari/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
              <Button
                asChild
                className="justify-start border border-emerald-200 dark:border-emerald-800 bg-transparent hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300"
              >
                <a
                  href="https://github.com/prathambhandari"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button
                asChild
                className="justify-start border border-emerald-200 dark:border-emerald-800 bg-transparent hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300"
              >
                <a
                  href="https://x.com/zewstaz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X (Twitter)
                </a>
              </Button>
              <Button
                asChild
                className="justify-start border border-emerald-200 dark:border-emerald-800 bg-transparent hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300"
              >
                <a
                  href="https://www.instagram.com/bhandariprath/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
