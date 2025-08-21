export interface Gym {
  id: string;
  name: string;
  location: string;
  price: number;
  description: string;
  imageUrl: string;
  rating: number;
  amenities: string[];
  hours: string;
}

export const gymsData: Gym[] = [
  {
    id: "1",
    name: "FitZone Elite",
    location: "Downtown, 123 Main St",
    price: 49.99,
    description: "Premium fitness center with state-of-the-art equipment, personal trainers, and luxury amenities including sauna and pool.",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop&crop=center",
    rating: 4.8,
    amenities: ["Pool", "Sauna", "Personal Training", "Group Classes", "Parking"],
    hours: "5:00 AM - 11:00 PM"
  },
  {
    id: "2", 
    name: "PowerHouse Gym",
    location: "Midtown, 456 Oak Ave",
    price: 39.99,
    description: "Hardcore training facility focused on strength training and powerlifting with experienced coaches and competition-grade equipment.",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&crop=center",
    rating: 4.6,
    amenities: ["Free Weights", "Powerlifting", "Coaching", "24/7 Access", "Supplements"],
    hours: "24/7"
  },
  {
    id: "3",
    name: "Yoga Zen Studio", 
    location: "Westside, 789 Pine Rd",
    price: 29.99,
    description: "Peaceful yoga and meditation studio offering various styles from beginner to advanced levels in a calming environment.",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop&crop=center",
    rating: 4.9,
    amenities: ["Yoga Classes", "Meditation", "Wellness Programs", "Workshops", "Retail"],
    hours: "6:00 AM - 10:00 PM"
  },
  {
    id: "4",
    name: "CrossFit Thunder",
    location: "Northside, 321 Elm St", 
    price: 59.99,
    description: "High-intensity CrossFit box with certified trainers, Olympic lifting platforms, and a strong community atmosphere.",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&crop=center",
    rating: 4.7,
    amenities: ["CrossFit", "Olympic Lifting", "Coaching", "Community Events", "Nutrition"],
    hours: "5:30 AM - 9:00 PM"
  },
  {
    id: "5",
    name: "Aqua Fitness Center",
    location: "Southside, 654 Maple Dr",
    price: 44.99,
    description: "Full-service aquatic center featuring multiple pools, water aerobics, swimming lessons, and aquatic therapy programs.",
    imageUrl: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=400&fit=crop&crop=center",
    rating: 4.5,
    amenities: ["Pool", "Water Aerobics", "Swimming Lessons", "Aquatic Therapy", "Locker Rooms"],
    hours: "6:00 AM - 10:00 PM"
  },
  {
    id: "6",
    name: "FlexFit 24/7",
    location: "Eastside, 987 Cedar Blvd",
    price: 34.99,
    description: "24-hour access gym with modern cardio and strength equipment, flexible membership options and no long-term contracts.",
    imageUrl: "https://images.unsplash.com/photo-1594736797933-d0a3ca3c3db5?w=800&h=400&fit=crop&crop=center",
    rating: 4.4,
    amenities: ["24/7 Access", "Modern Equipment", "Flexible Membership", "Security", "App Integration"],
    hours: "24/7"
  },
  {
    id: "7",
    name: "Iron Temple",
    location: "Industrial District, 147 Steel Ave",
    price: 42.99,
    description: "Old-school bodybuilding gym with heavy iron, classic equipment, and a no-nonsense training environment for serious lifters.",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop&crop=center",
    rating: 4.6,
    amenities: ["Heavy Weights", "Bodybuilding Focus", "Experienced Members", "Supplements", "Posing Room"],
    hours: "5:00 AM - 11:00 PM"
  },
  {
    id: "8",
    name: "Dance & Fitness Studio",
    location: "Arts Quarter, 258 Rhythm St",
    price: 37.99,
    description: "Creative fitness studio offering dance classes, Zumba, barre, and movement-based workouts in an inspiring atmosphere.",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=400&fit=crop&crop=center",
    rating: 4.8,
    amenities: ["Dance Classes", "Zumba", "Barre", "Mirrors", "Sound System"],
    hours: "7:00 AM - 9:00 PM"
  },
  {
    id: "9",
    name: "Climbing Peak Gym",
    location: "Adventure Park, 369 Summit Trail",
    price: 52.99,
    description: "Indoor rock climbing gym with varied wall heights, bouldering areas, and climbing courses for all skill levels.",
    imageUrl: "https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?w=800&h=400&fit=crop&crop=center",
    rating: 4.7,
    amenities: ["Rock Climbing", "Bouldering", "Equipment Rental", "Instruction", "Safety Training"],
    hours: "10:00 AM - 10:00 PM"
  },
  {
    id: "10",
    name: "Recovery & Wellness Hub",
    location: "Wellness District, 741 Healing Way", 
    price: 47.99,
    description: "Holistic wellness center combining fitness with recovery services including massage, cryotherapy, and infrared sauna.",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&crop=center",
    rating: 4.9,
    amenities: ["Recovery Services", "Massage", "Cryotherapy", "Infrared Sauna", "Wellness Coaching"],
    hours: "8:00 AM - 8:00 PM"
  }
];