export interface NavLink {
  readonly label: string;
  readonly href: string;
  readonly fragment: string;
}

export interface BenefitItem {
  readonly id: string;
  readonly title: string;
  readonly icon: 'shield' | 'lightbulb' | 'people';
  readonly colorBg: string;
  readonly colorIcon: string;
}

export interface ActivityItem {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly image: string;
  readonly imageAvif: string;
  readonly imagePng: string;
  readonly alt: string;
  readonly theme: 'mint' | 'lilac' | 'peach';
  readonly ctaLabel: string;
  readonly enquirySubject: string;
}

export interface SiteConfig {
  readonly brandName: string;
  readonly tagline: string;
  readonly location: string;
  readonly phoneDisplay: string;
  readonly phoneLink: string;
  readonly email: string;
  readonly emailLink: string;
  readonly year: number;
  readonly navLinks: readonly NavLink[];
  readonly hero: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly primaryCta: string;
    readonly secondaryCta: string;
    readonly imageWebp: string;
    readonly imageAvif: string;
    readonly imagePng: string;
    readonly alt: string;
  };
  readonly benefits: readonly BenefitItem[];
  readonly activitiesHeading: string;
  readonly activities: readonly ActivityItem[];
  readonly about: {
    readonly heading: string;
    readonly body: string;
  };
  readonly contact: {
    readonly heading: string;
    readonly subheading: string;
    readonly callToAction: string;
    readonly emailToAction: string;
    readonly formHeading: string;
    readonly formNotice: string;
  };
}

export const SITE_DATA: SiteConfig = {
  brandName: "Ohemaa’s Time With Kids",
  tagline: "Safe, engaging, and nurturing after-school childcare in Accra.",
  location: "Accra, Ghana",
  phoneDisplay: "0550794321",
  phoneLink: "tel:+233550794321",
  email: "ohemaastimewithkids@gmail.com",
  emailLink: "mailto:ohemaastimewithkids@gmail.com",
  year: new Date().getFullYear(),
  navLinks: [
    { label: "Home", href: "#home", fragment: "home" },
    { label: "About", href: "#about", fragment: "about" },
    { label: "Activities", href: "#activities", fragment: "activities" },
    { label: "Contact", href: "#contact", fragment: "contact" }
  ],
  hero: {
    eyebrow: "AFTER-SCHOOL CARE IN ACCRA",
    title: "A happy place to learn, play & grow.",
    description: "Safe, caring after-school support for your child. Peace of mind for you.",
    primaryCta: "Enquire Now",
    secondaryCta: "Explore Activities",
    imageWebp: "/images/hero-garden.webp",
    imageAvif: "/images/hero-garden.avif",
    imagePng: "/images/hero-garden.png",
    alt: "Caregiver reading with smiling children outdoors in a vibrant garden"
  },
  benefits: [
    {
      id: "safe-nurturing",
      title: "Safe & nurturing",
      icon: "shield",
      colorBg: "rgba(255, 255, 255, 0.9)",
      colorIcon: "#063D2A"
    },
    {
      id: "creative-learning",
      title: "Creative learning",
      icon: "lightbulb",
      colorBg: "rgba(255, 235, 179, 0.95)",
      colorIcon: "#D97706"
    },
    {
      id: "positive-friendships",
      title: "Positive friendships",
      icon: "people",
      colorBg: "rgba(235, 215, 255, 0.95)",
      colorIcon: "#7C2FC1"
    }
  ],
  activitiesHeading: "Little moments. Big discoveries.",
  activities: [
    {
      id: "learn-discover",
      title: "Learn & Discover",
      subtitle: "Engaging learning activities",
      image: "/images/activity-learn.webp",
      imageAvif: "/images/activity-learn.avif",
      imagePng: "/images/activity-learn.png",
      alt: "Young boy happily stacking colourful geometric blocks",
      theme: "mint",
      ctaLabel: "Enquire about learning activities",
      enquirySubject: "Enquiry: Learn & Discover Activities"
    },
    {
      id: "create-imagine",
      title: "Create & Imagine",
      subtitle: "Art, stories and creativity",
      image: "/images/activity-create.webp",
      imageAvif: "/images/activity-create.avif",
      imagePng: "/images/activity-create.png",
      alt: "Young girl painting a vibrant colourful flower at an easel",
      theme: "lilac",
      ctaLabel: "Enquire about creative activities",
      enquirySubject: "Enquiry: Create & Imagine Activities"
    },
    {
      id: "play-connect",
      title: "Play & Connect",
      subtitle: "Friendship and positive social skills",
      image: "/images/activity-play.webp",
      imageAvif: "/images/activity-play.avif",
      imagePng: "/images/activity-play.png",
      alt: "Children laughing and playing together with building blocks",
      theme: "peach",
      ctaLabel: "Enquire about play and social activities",
      enquirySubject: "Enquiry: Play & Connect Activities"
    }
  ],
  about: {
    heading: "Care for your child. Support for your day.",
    body: "Ohemaa’s Time With Kids provides safe, engaging, and nurturing after-school childcare support for children while helping parents manage their daily responsibilities. Our activities encourage learning, creativity, good character, and positive social development in a caring environment."
  },
  contact: {
    heading: "Let’s talk about your child’s after-school care.",
    subheading: "Connect with us to ask questions or discuss after-school childcare options in Accra, Ghana.",
    callToAction: "Call Us",
    emailToAction: "Email Us",
    formHeading: "Send an Enquiry",
    formNotice: "This composer creates an email draft and opens your default email client. No data is stored or processed on a server."
  }
};
