import { memo } from "react";

const About = memo(() => {
  const socials = [
    {
      name: "github",
      url: "https://github.com/prathambhandari",
      isSkillIcon: true,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/prathambhandari/",
      isSkillIcon: true,
    },
    {
      name: "twitter",
      url: "https://x.com/zewstaz",
      isSkillIcon: true,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/bhandariprath/",
      isSkillIcon: true,
    },
    {
      name: "youtube",
      url: "https://www.youtube.com/@prathambhandari",
      isSkillIcon: false,
      customIcon: (
        <svg
          viewBox="0 0 24 24"
          fill="#FF0000"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-red-200 p-1.5"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="px-6 pt-25 pb-6 sm:px-8 sm:py-8 md:p-12 lg:p-14 xl:p-16 2xl:p-20 flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-lg sm:max-w-xl md:max-w-2xl 2xl:max-w-3xl mx-auto lg:mx-0">
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 2xl:w-32 2xl:h-32 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 border border-neutral-300 mb-4 sm:mb-6 overflow-hidden">
        <img
          src="/profile.png"
          className="w-full h-full object-cover"
          alt="Pratham Bhandari"
          loading="eager"
          decoding="async"
        />
      </div>
      <p className="text-neutral-500 text-sm sm:text-base md:text-lg 2xl:text-xl mb-1">
        Hi, I am
      </p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-medium mb-1 sm:mb-2 text-neutral-900">
        Pratham Bhandari
      </h1>
      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-medium mb-3 sm:mb-4 2xl:mb-6 text-neutral-600">
        FullStack Web Developer
      </h2>

      <p className="text-neutral-600 text-xs sm:text-sm md:text-base 2xl:text-lg leading-relaxed mb-4 sm:mb-6">
        Hey there! I'm a developer from Mangalore, India who loves bringing
        ideas to life through code. I mostly work with web development. Outside
        of coding, you'll often find me exploring new places, listening to
        music, or out on the field playing football. I'm all about building
        things that feel good to use and are fun to create.
      </p>

      <div className="flex gap-3 sm:gap-4 md:gap-5">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            aria-label={social.name}
          >
            {social.isSkillIcon ? (
              <img
                src={`https://skillicons.dev/icons?i=${social.name}`}
                alt={social.name}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
            ) : (
              social.customIcon
            )}
          </a>
        ))}
      </div>
    </div>
  );
});

About.displayName = "About";

export default About;
