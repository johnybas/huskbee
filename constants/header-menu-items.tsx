import {
  BookmarkIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  Bars3Icon,
  PhoneIcon,
  PlayIcon,
  SparklesIcon,
  ShieldCheckIcon,
  LifebuoyIcon,
  ReceiptPercentIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "About", href: "#" },
  { name: "Portfolio", href: "#" },
];

export const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ReceiptPercentIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: SparklesIcon,
  },
];
export const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
export const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
];

export const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  { id: 2, name: "Improve your customer experience", href: "#" },
];
