import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import { Images } from "./assets/index";

const Info = {
  name: "Thandar Lin",
  stack: ["Frontend Web Developer", "UI/UX Designer", "Full Stack Developer"],
  bio: "A skilled web developer specializing in React, TypeScript, and frontend development. I craft scalable, high-quality web applications and deliver exceptional UI/UX designs that exceed client expectations. Let’s collaborate and build something remarkable together!",
};

const ProjectInfo = [
  {
    title: "DailyFairDeal Website",
    desc: (
      <>
        <p>
          <span className="text-red-600 font-semibold">DailyFairDeal</span> is a
          modern, fully responsive web application designed to simplify daily
          tasks with fast food delivery, convenient taxi booking, and seamless
          online shopping—all in one place. Built with React, Redux, Node.js,
          Socket.IO, Laravel, and TailwindCSS, it delivers a smooth user
          experience across all devices.
        </p>
        <p className="text-primaryColor pt-2">Key features include:</p>
        <ul className="mx-3 pb-2">
          <li>
            <strong className="text-gray-300">
              Secure user authentication:
            </strong>{" "}
            login, registration, and logout functionalities.
          </li>
          <li>
            <strong className="text-gray-300">Customer experience:</strong>{" "}
            browse products, book rides, and order food. View detailed product
            information, restaurant menus, ride options, and delivery statuses.
          </li>
          <li>
            <strong className="text-gray-300">Search and filtering:</strong>{" "}
            find shops, restaurants, or taxis by location or service type, and
            filter results by price, rating, or availability.
          </li>
          <li>
            <strong className="text-gray-300">
              Order and booking history:
            </strong>{" "}
            easily reorder or manage past purchases.
          </li>
          <li>
            <strong className="text-gray-300">Real-time tracking:</strong>{" "}
            monitor food deliveries and rides using GPS.
          </li>
          <li>
            <strong className="text-gray-300">Shop management:</strong> store
            owners can manage inventory, product listings, and sales.
          </li>
          <li>
            <strong className="text-gray-300">Driver functionality:</strong>{" "}
            drivers can track delivery and ride requests in real-time.
          </li>
          <li>
            <strong className="text-gray-300">Streamlined checkout:</strong>{" "}
            includes form validation for secure address and payment information.
          </li>
        </ul>
        <p>
          With its intuitive design and robust functionality, DailyFairDeal
          makes online food ordering, taxi booking, and shopping effortless and
          enjoyable. The platform enhances user convenience while ensuring
          security and efficiency, offering a seamless experience for both
          customers and service providers.
        </p>
      </>
    ),
    image: Images.dailyFairDeal,
    live: true,
    technologies: [
      "React",
      "Node.js",
      "Laravel",
      "Redux",
      "Socket.IO",
      "Tailwind",
    ],
    link: "https://dailyfairdeal.com/",
    github: "https://github.com/ITVHBaseCode/Food-Delivery",
  },

  {
    title: "Redux-Movie-Website",
    desc: (
      <>
        <p>
          The
          <span className="text-red-600 font-semibold">
            {" "}
            Redux Movie Website
          </span>{" "}
          is a dynamic, fully responsive front-end application designed to
          provide users with an engaging movie browsing experience. All data is
          fetched from a backend database using APIs, ensuring real-time updates
          and seamless performance. Built using React, Redux, and SCSS, the
          platform delivers a smooth, modern user experience.
        </p>
        <p className="text-primaryColor pt-2">Key features include:</p>
        <ul className="mx-3 pb-2">
          <li>
            <strong className="text-gray-300">Movie Browsing:</strong> Customers
            can easily view all available movies, along with detailed
            information such as trailers, ratings, and cast lists.
          </li>
          <li>
            <strong className="text-gray-300">Search Functionality:</strong>{" "}
            Users can quickly search for movies by title or keywords.
          </li>
          <li>
            <strong className="text-gray-300">Movie Updates:</strong> Stay
            informed with the latest updates and releases in the movie industry.
          </li>
          <li>
            <strong className="text-gray-300">Filtering Options:</strong> Filter
            movies by genre, release date, and rating to find exactly what
            you’re looking for.
          </li>
          <li>
            <strong className="text-gray-300">Sorting Capabilities:</strong>{" "}
            Sort movies by popularity, release date, or rating for a customized
            browsing experience.
          </li>
        </ul>
        <p>
          With its clean design, intuitive interface, and efficient state
          management powered by Redux, the Redux Movie Website offers a seamless
          and enjoyable experience for movie enthusiasts.
        </p>
      </>
    ),
    image: Images.movieApp,
    live: false,
    technologies: ["React", "Redux", "Scss"],
    link: "https://redux-movie-website.vercel.app/",
    github: "https://github.com/Thandar-Lin11/Redux-Movie-Website",
  },
  {
    title: "Real Estate Website",
    desc: (
      <>
        <p>
          This
          <span className="text-red-600 font-semibold">
            {" "}
            Real Estate Website
          </span>{" "}
          is a full-stack web application designed to replicate the key features
          of a modern real estate platform. Built using React, Node.js, MongoDB,
          and CSS, it offers a seamless and intuitive user experience with a
          clean, modern design. The platform efficiently handles both front-end
          and back-end processes, with all data fetched via APIs and managed in
          a MongoDB database using Prisma.
        </p>
        <p className="text-primaryColor pt-2">Key features include:</p>
        <ul className="mx-3 pb-2">
          <li>
            <strong className="text-gray-300">User Authentication:</strong>{" "}
            Customers can register and log in using their verified email
            addresses.
          </li>
          <li>
            <strong className="text-gray-300">Property Browsing:</strong>{" "}
            Customers can explore all available properties, with detailed
            information, wishlist functionality, and booking options.
          </li>
          <li>
            <strong className="text-gray-300">Interactive Maps:</strong> Users
            can view specific property locations directly on a map for easy
            navigation.
          </li>
          <li>
            <strong className="text-gray-300">Payment Integration:</strong>{" "}
            Secure payment processing is integrated with Stripe for seamless
            transactions.
          </li>
          <li>
            <strong className="text-gray-300">Blogs Module:</strong> A blogs
            section provides additional real estate content for users.
          </li>
          <li>
            <strong className="text-gray-300">Admin Features:</strong>{" "}
            Administrators can manage properties by adding or deleting listings
            through a dedicated dashboard.
          </li>
        </ul>
        <p>
          With its robust functionality and user-friendly interface, this real
          estate platform provides an effortless browsing experience for
          property seekers while maintaining powerful management tools for
          administrators.
        </p>
      </>
    ),
    image: Images.realEstate,
    live: false,
    technologies: ["React", "Node.js", "CSS", "MongoDB", "Prisma"],
    link: "https://react-real-estate-website-delta.vercel.app/",
    github: "https://github.com/Thandar-Lin11/Full_Real_Estate",
  },
  {
    title: "CoralCart eCommerce",
    desc: (
      <>
        <p>
          This
          <span className="text-red-600 font-semibold">
            {" "}
            CoralCart eCommerce Website
          </span>{" "}
          specializes in commodity products, offering a seamless and
          user-friendly shopping experience. Built with Redux Toolkit,
          TypeScript, and Tailwind CSS, it ensures efficient state management,
          type safety, and a responsive design.
        </p>
        <p className="text-primaryColor pt-2">Key features include:</p>
        <ul className="mx-3 pb-2">
          <li>
            <strong className="text-gray-300">Product Browsing:</strong>{" "}
            Customers can explore a wide range of products and view detailed
            information for each item.
          </li>
          <li>
            <strong className="text-gray-300">User Authentication:</strong>{" "}
            Customers can securely log in, register, and manage their accounts.
          </li>
          <li>
            <strong className="text-gray-300">Cart Management:</strong> Users
            can add items to their cart, adjust quantities, remove products, and
            view the total order amount for easy checkout.
          </li>
          <li>
            <strong className="text-gray-300">Wishlist:</strong> Customers can
            save items to their wishlist and review them at any time.
          </li>
          <li>
            <strong className="text-gray-300">
              Category Navigation & Best Sellers:
            </strong>{" "}
            Shoppers can browse items by category and check out the best-selling
            products each month.
          </li>
          <li>
            <strong className="text-gray-300">Blogs:</strong> A dedicated blog
            section provides content on beauty and related topics.
          </li>
          <li>
            <strong className="text-gray-300">Search & Contact:</strong>{" "}
            Customers can easily search for products using the search page and
            contact the company via the "Contact Us" page.
          </li>
        </ul>
        <p>
          This platform combines a clean, modern design with robust
          functionality, creating a streamlined and enjoyable shopping
          experience for all users.
        </p>
      </>
    ),
    image: Images.coralCart,
    live: false,
    technologies: ["React", "Redux", "TypeScript", "TailwindCSS"],
    link: "https://redux-type-script-ecommerence.vercel.app/",
    github: "https://github.com/Thandar-Lin11/Redux_TypeScript_Ecommerence",
  },
  {
    title: "Coral Bank App",
    desc: (
      <>
        <p>
          The
          <span className="text-red-600 font-semibold">
            {" "}
            Coral Bank Website
          </span>{" "}
          is a modern, fully responsive web application built with React JS,
          showcasing sleek design and cutting-edge development practices. This
          project features a captivating hero section, high-quality assets, and
          visually appealing gradients, delivering an exceptional user
          experience.
        </p>
        <p className="text-primaryColor pt-2">Key features include:</p>
        <ul className="mx-3 pb-2">
          <li>
            <strong className="text-gray-300">Stunning Hero Section: </strong> A
            visually impressive landing section designed to grab attention with
            smooth animations and eye-catching visuals.
          </li>
          <li>
            <strong className="text-gray-300">Business Stats:</strong> Display
            of essential business statistics in an engaging format.
          </li>
          <li>
            <strong className="text-gray-300">Testimonials:</strong> Integrated
            customer feedback section to build trust and authenticity.
          </li>
          <li>
            <strong className="text-gray-300">High-Quality Design:</strong> Use
            of premium assets, gradients, and modern styling techniques.
          </li>
        </ul>
        <p>
          This project exemplifies mastery in modern web development by
          combining a responsive design with high-quality functionality, perfect
          for showcasing your skills in building business-oriented web
          applications.
        </p>
      </>
    ),
    image: Images.coralBank,
    live: false,
    technologies: ["React", "TailwindCSS"],
    link: "https://react-bank-app-ruddy.vercel.app/",
    github: "https://github.com/Thandar-Lin11/React_Bank_App",
  },
  {
    title: "Sushi Restaurant Website",
    desc: (
      <>
        <p>
          The
          <span className="text-red-600 font-semibold">
            {" "}
            Sushi Restaurant Website
          </span>{" "}
          is a modern, fully responsive site built using HTML and CSS, featuring
          smooth animations for a dynamic user experience. The website is
          designed to be visually appealing across all devices, ensuring
          seamless accessibility and a clean, modern interface.
        </p>
        <p className="text-primaryColor pt-2">Key features include:</p>
        <ul className="mx-3 pb-2">
          <li>
            <strong className="text-gray-300">Responsive Design:</strong>{" "}
            Optimized for all screen sizes, providing a perfect user experience
            on desktops, tablets, and smartphones.
          </li>
          <li>
            <strong className="text-gray-300">Engaging Animations:</strong>{" "}
            Subtle animations enhance interactivity and make the browsing
            experience more lively.
          </li>
          <li>
            <strong className="text-gray-300">Clean Layout:</strong>{" "}
            Minimalistic design with an intuitive navigation system that allows
            users to explore menus and restaurant information effortlessly.
          </li>
          <li>
            <strong className="text-gray-300">Modern Aesthetic:</strong> The
            site incorporates modern web design practices to offer a polished
            and attractive look.
          </li>
        </ul>
        <p>
          This project demonstrates proficiency in crafting elegant, responsive
          websites with animation effects, ideal for businesses looking to make
          a strong online presence.
        </p>
      </>
    ),
    image: Images.sushi,
    live: false,
    technologies: ["Html", "CSS"],
    link: "https://github.com/Thandar-Lin11/Sushi-website",
    github: "https://sushi-website-omega.vercel.app/",
  },
];
// const Slugs = [
//   "HTML",
//   "CSS",
//   "SASS",
//   "JavaScript",
//   "TypeScript",
//   "React JS",
//   "React Query",
//   "Redux",
//   "Tailwind CSS",
//   "Material UI",
//   "Bootstrap",
//   "Node JS",
//   "Express JS",
//   "MongoDB",
//   "Prisma",
//   "Firebase",
//   "Cloudinary",
//   "PostgreSQL",
//   "RestfulAPI",
//   "Figma",
//   "Git",
//   "GitHub",
//   "Vercel",
//   "Docker",
//   "Digital Ocean",
//   "VS Code",
//   "Postman",
//   "MongoDB",
//   "Jest",
// ];

// const Slugs = [
//   "HTML",
//   { icon: Images.css, text: "CSS" },
//   { icon: Images.sass, text: "SASS" },
//   { icon: Images.javascript, text: "JavaScript" },
//   { icon: Images.typescript, text: "TypeScript" },
//   { icon: Images.reactJs, text: "React JS" },
//   { icon: Images.reactQuery, text: "React Query" },
//   { icon: Images.redux, text: "Redux" },
//   { icon: Images.tailwindCss, text: "Tailwind CSS" },
//   { icon: Images.materialUI, text: "Material UI" },
//   { icon: Images.bootstrap, text: "Bootstrap" },
//   { icon: Images.nodeJs, text: "Node JS" },
//   { icon: Images.expressJs, text: "Express JS" },
//   { icon: Images.mongoDB, text: "MongoDB" },
//   { icon: Images.prisma, text: "Prisma" },
//   { icon: Images.firebase, text: "Firebase" },
//   { icon: Images.cloudinary, text: "Cloudinary" },
//   { icon: Images.postgresSQL, text: "PostgreSQL" },
//   { icon: Images.restApi, text: "RestfulAPI" },
//   { icon: Images.figma, text: "Figma" },
//   { icon: Images.git, text: "Git" },
//   { icon: Images.github, text: "GitHub" },
//   { icon: Images.vercel, text: "Vercel" },
//   { icon: Images.docker, text: "Docker" },
//   { icon: Images.digitalOcean, text: "Digital Ocean" },
//   { icon: Images.vscode, text: "VS Code" },
//   { icon: Images.postman, text: "Postman" },
//   { icon: Images.mongoDB, text: "MongoDB" },
//   { icon: Images.jest, text: "Jest" },
// ];
const Slugs = [
  "typescript",
  "spring",
  "javascript",
  "dart",
  "java",
  "react",
  "angular",
  "flutter",
  "android",
  "html5",
  "css3",
  "springboot",
  "mongodb",
  "selenium",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mysql",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      { icon: Images.html, text: "HTML" },
      { icon: Images.css, text: "CSS" },
      { icon: Images.sass, text: "SASS" },
      { icon: Images.javascript, text: "JavaScript" },
      { icon: Images.typescript, text: "TypeScript" },
      { icon: Images.reactJs, text: "React JS" },
      { icon: Images.reactQuery, text: "React Query" },
      { icon: Images.redux, text: "Redux" },
      { icon: Images.tailwindCss, text: "Tailwind CSS" },
      { icon: Images.materialUI, text: "Material UI" },
      { icon: Images.bootstrap, text: "Bootstrap" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: Images.nodeJs, text: "Node JS" },
      { icon: Images.expressJs, text: "Express JS" },
      { icon: Images.mongoDB, text: "MongoDB" },
      { icon: Images.prisma, text: "Prisma" },
      { icon: Images.firebase, text: "Firebase" },
      { icon: Images.cloudinary, text: "Cloudinary" },
      { icon: Images.postgresSQL, text: "PostgreSQL" },
      { icon: Images.restApi, text: "RestfulAPI" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { icon: Images.javascript, text: "JavaScript" },
      { icon: Images.typescript, text: "TypeScript" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { icon: Images.figma, text: "Figma" },
      { icon: Images.git, text: "Git" },
      { icon: Images.github, text: "GitHub" },
      { icon: Images.vercel, text: "Vercel" },
      { icon: Images.docker, text: "Docker" },
      { icon: Images.digitalOcean, text: "Digital Ocean" },
      { icon: Images.vscode, text: "VS Code" },
      { icon: Images.postman, text: "Postman" },
      { icon: Images.mongoDB, text: "MongoDB" },
      { icon: Images.jest, text: "Jest" },
    ],
  },
];

const socialLinks = [
  { link: "https://github.com/Thandar-Lin11", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/thandar-lin-a89b45233/",
    icon: IconBrandLinkedin,
  },
  {
    link: "https://wa.me/+959263302749",
    icon: IconBrandWhatsapp,
  },
  {
    link: "https://thandarlinttu@gmail.com",
    icon: IconMail,
  },
  {
    link: "https://www.facebook.com/thandar.lin.378537",
    icon: IconBrandFacebook,
  },
];

const ExperienceInfo = [
  {
    role: "Full Stack Developer ",
    company: "ITVisionHub",
    date: "July 2022 - Present",
    desc: "As a Junior Full Stack Developer, I have expanded my expertise to backend technologies, including Node.js, Express.js, Prisma, and PostgreSQL, while continuing to develop frontend interfaces using React and TypeScript. I played a key role in developing full-stack web applications by designing RESTful APIs and integrating frontend and backend functionality. I collaborated in agile teams to deliver scalable and high-performance solutions. My responsibilities include creating and maintaining databases, conducting real-time data operations, and ensuring secure and efficient user experiences across web platforms. Additionally, I conducted project management for existing websites, provided customer training, and developed user manuals. My ability to quickly adapt to new technologies and my strong troubleshooting skills have been instrumental in delivering top-quality software solutions.",
    skills: [
      "Figma",
      "TailwindCSS",
      "React JS",
      "Node JS",
      "TypeScript",
      "MongoDB",
      "Testing",
      "Docker",
      "CI/CD",
    ],
  },
  {
    role: "Frontend Developer",
    company: "ITVisionHub",
    date: "July 2019 - July 2022",
    desc: "During my tenure as a Frontend Developer, I specialized in building user-friendly, responsive web applications using modern frontend technologies such as React, JavaScript, TypeScript, Tailwind CSS, and Redux. I collaborated closely with design and backend teams to ensure seamless integration between UI/UX and the backend. I gathered user requirements, created mockups, and developed detailed UI designs using Figma. I also optimized website performance and ensured fast loading times using tools like Google Page Speed Insights. In addition to writing clean, maintainable code, I conducted vulnerability assessments to ensure the security of the web applications. My role involved managing existing websites, troubleshooting issues, and meeting project deadlines, all while continuously improving the user experience.",
    skills: [
      "React JS",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
];

export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };
