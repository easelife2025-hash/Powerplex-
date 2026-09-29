export interface SlideData {
  id: number;
  headline: string;
  subheadline: string;
  tagline: string;
  image: string;
  alt: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  equipment: string;
  suitableFor: string;
}

export interface ReviewData {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
  highlight: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'strength' | 'cardio' | 'functional' | 'interior';
  image: string;
  caption: string;
}

export const GYM_INFO = {
  name: "Powerplex Fitness",
  tagline: "Unleash Your True Strength",
  phone: "079776 54950",
  phoneRaw: "+917977654950",
  phoneDisplay: "079776 54950",
  whatsappUrl: "https://wa.me/917977654950?text=Hi%20Powerplex%20Fitness%2C%20I%20am%20interested%20in%20joining%20and%20would%20like%20to%20claim%20my%20Free%20Trial%20Pass.",
  address: "Shop no. 8A, Shanti Vaibhav Chs Ltd, Plot no. 11A, W Residential Road, Seawoods West, Sector 42A, Nerul, Seawoods, Navi Mumbai, Maharashtra 400706",
  googleRating: 4.6,
  totalReviews: 105,
  locationArea: "Seawoods West, Nerul, Navi Mumbai",
  nearbyLandmark: "Close to Seawoods Railway Station West & Grand Central Mall",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Powerplex+fitness+Seawoods+Navi+Mumbai",
  openingHours: {
    weekday: "6:00 AM – 11:00 PM",
    weekdayDays: "Monday – Saturday",
    sunday: "9:00 AM – 2:00 PM",
    sundayDay: "Sunday",
  },
};

export const HERO_SLIDES: SlideData[] = [
  {
    id: 1,
    headline: "NO EXCUSES. JUST RESULTS.",
    subheadline: "Navi Mumbai’s high-octane powerhouse gym engineered for raw transformation, heavy iron, and zero compromise.",
    tagline: "POWERPLEX STRENGTH ARENA",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop",
    alt: "Powerplex Fitness heavy weightlifting and power rack zone",
  },
  {
    id: 2,
    headline: "PUSH YOUR LIMITS.",
    subheadline: "Break mental barriers with commercial-grade biomechanic machines, dedicated turf tracks, and elite conditioning.",
    tagline: "ENDURANCE & CONDITIONING",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop",
    alt: "Athlete pushing limits on functional turf training track",
  },
  {
    id: 3,
    headline: "TRAIN HARD. STAY STRONG.",
    subheadline: "17 hours of daily access from 6:00 AM to 11:00 PM. Built for dedicated lifters, busy professionals, and athletes.",
    tagline: "PRECISION RESISTANCE TRAINING",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1920&auto=format&fit=crop",
    alt: "Dedicated weight training dumbbells and power benches",
  },
  {
    id: 4,
    headline: "BECOME YOUR STRONGEST SELF.",
    subheadline: "Expert certified coaches, customized transformation protocols, and an electric community that fuels your drive every rep.",
    tagline: "1-ON-1 COACHING & HYPERTROPHY",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop",
    alt: "Athletic body transformation workout at Powerplex Fitness",
  },
];

export const SERVICES_LIST: ServiceData[] = [
  {
    id: "strength-training",
    title: "Strength & Resistance Training",
    description: "Equipped with heavy-duty power cages, Olympic barbells, calibrated plates, and premium dual-cable and plate-loaded isolation machines. Engineered with precise biomechanical resistance curves for maximum muscle activation and safety.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Power racks, Olympic bench presses, and deadlift platforms",
      "Ergonomic plate-loaded leg presses, hack squats, and lat towers",
      "Precision dumbbells ranging from 2.5 kg up to 45+ kg",
      "Reinforced heavy shock-absorbent rubber flooring",
    ],
    equipment: "Heavy-duty lime green & matte black commercial series",
    suitableFor: "Muscle hypertrophy, progressive overload, powerlifting, athletic tone",
  },
  {
    id: "cardio-conditioning",
    title: "Cardio & Endurance Arena",
    description: "Accelerate fat loss, build athletic stamina, and strengthen cardiovascular health on our premium fleet of smart commercial treadmills, cross-trainers, and spin cycles with live biometric monitoring.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000&auto=format&fit=crop",
    features: [
      "High-speed shock-absorbing commercial treadmills",
      "Low-impact elliptical cross-trainers & recumbent bikes",
      "HIIT heart-rate zone intervals and fat oxidation routines",
      "Well-ventilated, high-oxygen environment with panoramic street views",
    ],
    equipment: "Commercial shock-cushioned cardio deck",
    suitableFor: "Fat loss, cardiovascular health, marathon endurance, active recovery",
  },
  {
    id: "personal-training",
    title: "Personal Coaching & Transformation",
    description: "Direct 1-on-1 mentorship with certified personal coaches who analyze your body mechanics, craft progressive workout regimens, correct lifting posture, and provide pragmatic daily nutrition guidelines.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Initial full body assessment, mobility check & goal blueprint",
      "Targeted weekly progressive overload tracking",
      "Personalized macronutrient & balanced diet coaching",
      "Continuous form correction and injury-preventive techniques",
    ],
    equipment: "Custom 1-on-1 coach programming & bio-metrics",
    suitableFor: "Beginners, rapid fat loss, targeted muscle gain, sports conditioning",
  },
  {
    id: "functional-fitness",
    title: "Functional Fitness & Turf Conditioning",
    description: "Build real-world functional athleticism, core stability, and agility on our dedicated green artificial turf lane. Utilize battle ropes, kettlebells, plyometric boxes, and resistance bands to sculpt lean muscle.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Dedicated high-density green artificial turf track",
      "Heavy battle ropes, slam balls, and Russian kettlebells",
      "Plyometric jump boxes, agility ladders & resistance bands",
      "Dynamic core stabilization and rotational power workouts",
    ],
    equipment: "Functional turf lane + conditioning arsenal",
    suitableFor: "Athletic agility, explosive power, full-body metabolic burn, core stamina",
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 1,
    title: "4.6★ Top Rated in Seawoods",
    description: "Backed by 105+ genuine reviews from Seawoods and Nerul residents who swear by our results, atmosphere, and supportive fitness community.",
    icon: "award",
  },
  {
    id: 2,
    title: "17-Hour Daily Access",
    description: "Open early from 6:00 AM to 11:00 PM (Mon–Sat). Fit your workout seamlessly before office hours, during lunch, or late at night without rushing.",
    icon: "clock",
  },
  {
    id: 3,
    title: "Elite Biomechanical Equipment",
    description: "Heavy-duty matte black & lime green precision machines designed for ergonomic joint safety and optimal muscle tension.",
    icon: "dumbbell",
  },
  {
    id: 4,
    title: "Dedicated Sprint & Turf Lane",
    description: "Specially installed turf track for functional agility, weighted sled drills, kettlebell complexes, and high-intensity conditioning.",
    icon: "flame",
  },
  {
    id: 5,
    title: "Certified Coaches on Floor",
    description: "Knowledgeable, friendly trainers always present to correct form, spot your heavy lifts, and ensure you make consistent progress safely.",
    icon: "shield-check",
  },
  {
    id: 6,
    title: "Hygienic & Air-Conditioned",
    description: "Thoroughly sanitized multiple times daily with climate control, fresh ventilation, and high-energy music to keep your motivation peaking.",
    icon: "sparkles",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Main Strength & Cable Floor",
    category: "strength",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop",
    caption: "Heavy-duty power racks and plate-loaded gear with modern yellow accent lines.",
  },
  {
    id: 2,
    title: "Functional Turf Track & Sled Lane",
    category: "functional",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
    caption: "High-density green turf strip for battle ropes, sled pushes, and core circuits.",
  },
  {
    id: 4,
    title: "Free Weights & Dumbbell Arena",
    category: "strength",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop",
    caption: "Full rack of high-grade calibrated dumbbells, incline, flat and decline benches.",
  },
  {
    id: 5,
    title: "Machine Hypertrophy Zone",
    category: "strength",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    caption: "Lime green & black plate-loaded leg presses and hack squats for quad development.",
  },
];

export const REVIEWS_LIST: ReviewData[] = [
  {
    id: 1,
    name: "Rohan Sawant",
    role: "Member for 10 months",
    location: "Seawoods West, Navi Mumbai",
    rating: 5,
    date: "2 weeks ago",
    highlight: "Best gym vibe in Seawoods!",
    comment: "Powerplex Fitness is hands down the best gym around Seawoods and Nerul. The yellow and black theme gives intense workout energy, and the equipment quality is top-notch. Love the lime green leg press and the turf lane for functional training!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Pooja Deshmukh",
    role: "Personal Training Client",
    location: "Sector 42A, Nerul",
    rating: 5,
    date: "1 month ago",
    highlight: "Lost 8 kg in 3 months safely",
    comment: "The personal training here made all the difference. My trainer carefully corrected my posture and gave me realistic diet suggestions that fit my workday. Plus, staying open till 11 PM means I never miss my evening sessions!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Aditya Verma",
    role: "Strength Lifter",
    location: "Seawoods, Navi Mumbai",
    rating: 5,
    date: "1 month ago",
    highlight: "Heavy dumbbells and solid power racks",
    comment: "Finding a gym that has genuine heavy iron, good barbells, and enough weight plates without crowding was tough until I joined Powerplex. The community here is serious about fitness and the trainers are super supportive.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Sneha Nair",
    role: "Member for 6 months",
    location: "Nerul West",
    rating: 5,
    date: "2 months ago",
    highlight: "Very clean and energetic vibe",
    comment: "Cleanliness is a 10/10. The machines are sanitized regularly, AC works great, and the lighting and music motivate you the second you step through the door. 4.6 stars on Google is well deserved!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
  },
];

export const SCHEDULE_DAYS = [
  { day: "Monday", hours: "6:00 AM – 11:00 PM", isOpen: true, type: "Full Day" },
  { day: "Tuesday", hours: "6:00 AM – 11:00 PM", isOpen: true, type: "Full Day" },
  { day: "Wednesday", hours: "6:00 AM – 11:00 PM", isOpen: true, type: "Full Day" },
  { day: "Thursday", hours: "6:00 AM – 11:00 PM", isOpen: true, type: "Full Day" },
  { day: "Friday", hours: "6:00 AM – 11:00 PM", isOpen: true, type: "Full Day" },
  { day: "Saturday", hours: "6:00 AM – 11:00 PM", isOpen: true, type: "Full Day" },
  { day: "Sunday", hours: "9:00 AM – 2:00 PM", isOpen: true, type: "Morning Special" },
];
