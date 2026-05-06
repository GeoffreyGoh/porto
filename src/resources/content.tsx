import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Geoffrey",
  lastName: "Gohtama",
  name: `Geoffrey Gohtama`,
  role: "Student",
  avatar: "/images/projects/project-01/avatar.jpeg",
  email: "geoffreygo03@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Indonesian", "English", "Mandarin"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My thoughts on AI, web development, and tech innovation</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/GeoffreyGoh",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/geoffrey-gohtama",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:geoffreygo03@gmail.com",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Exploring AI, research, and full-stack development</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Research Methodology</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/RM",
  },
  subline: (
    <>
    I'm Geoffrey, a computer science student at <Text as="span" size="xl" weight="strong">Binus University</Text> passionate about AI and research. I build projects exploring machine learning, <br /> and full-stack web development.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a computer science student at Binus University in Jakarta, passionate about artificial intelligence
        and its applications in solving real-world problems. With expertise in full-stack development, I'm dedicated to
        exploring how machine learning and emerging technologies can drive innovation and enhance user experiences.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "HIMTI (Indonesian Computer Science Student Association)",
        timeframe: "2023-2025",
        role: "President (Regional Coordinator)",
        achievements: [
          <>
            Led HIMTI Alam Sutera's strategic and operational initiatives, coordinating with the regional team
            and university leadership to strengthen organizational impact.
          </>,
          <>
            Fostered greater student engagement through innovative event planning and collaboration with other
            divisions and organizations.
          </>,
        ],
        images: [],
      },
      {
        company: "ITB Comparative Study Program",
        timeframe: "2024",
        role: "Events Division Coordinator",
        achievements: [
          <>
            Led the event division in organizing large-scale programs and managing comprehensive logistics
            and team coordination.
          </>,
          <>
            Ensured successful execution and positive participant experiences through effective real-time
            communication and stakeholder coordination.
          </>,
        ],
        images: [],
      },
      {
        company: "SESVENT 2024",
        timeframe: "2024",
        role: "Technical Division Coordinator",
        achievements: [
          <>
            Oversaw technical operations of the event, managing system setup and resolving technical
            issues to ensure reliable performance.
          </>,
          <>
            Coordinated with multimedia and logistics teams to maintain smooth execution throughout
            the program.
          </>,
        ],
        images: [],
      },
      {
        company: "HIMTI INTERNSHIP 2025",
        timeframe: "2025",
        role: "Event Chairman",
        achievements: [
          <>
            Directed HIMTI Internship 2025, guiding participants through the organization's divisions
            while managing cross-department coordination.
          </>,
          <>
            Managed event logistics and leadership alignment to enhance member understanding and engagement
            across the organization.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Binus University",
        timeframe: "2023 - Now",
        description: <>Computer Science Global Class Major with focus on AI and software development.</>,
      },
      {
        name: "BPK Penabur Gading Serpong",
        timeframe: "2020 - 2023",
        description: <>High School education with strong foundation in STEM subjects.</>,
      },
      {
        name: "Yuan Ze University",
        timeframe: "2026",
        description: <>Student exchange program for international exposure and cross-cultural learning for 1 semester.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: (
          <>Proficient in Java, Python, C, JavaScript, and HTML/CSS for diverse development needs.</>
        ),
        tags: [
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Web & Database Development",
        description: (
          <>Experienced with MySQL databases, frontend design in Figma, and version control with GitHub.</>
        ),
        tags: [
          {
            name: "MySQL",
            icon: "database",
          },
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "GitHub",
            icon: "github",
          },
        ],
        images: [],
      },
      {
        title: "Productivity & Design Tools",
        description: (
          <>Skilled with Microsoft Office suite for documentation, presentations, and data analysis. Proficient with Jira for project management and issue tracking.</>
        ),
        tags: [
          {
            name: "MS Office",
            icon: "microsoft",
          },
          {
            name: "Jira",
            icon: "jira",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
