export interface Event {
  id: string;
  title: string;
  date: string;
  dateObject: Date; // For reliable sorting
  location: string;
  description: string;
  image: string;
  type: "upcoming" | "past";
  fullDescription: string;
  registrationLink?: string;
  gallery?: string[];
}

export const allEvents: Event[] = [
  {
    id: "bpjs",
    title: "BPJS Online Tournament",
    date: "September 9-10, 2025 Pukul 19:00-Selesai",
    dateObject: new Date(2025, 8, 9), // September 9, 2025
    location: "Online Lichess",
    description: "BPJS Cross-University Online Tournament",
    image: "/events/bpjsonline.jpg",
    type: "upcoming",
    fullDescription:
      "Di Bulan September 2025 ini, BPJS Kesehatan Chess Club hadir dengan Turnamen Silaturahmi & Kolaborasi Online bareng 12 kampus Top Indonesia yakni UI, UGM, UNAIR, UNDIP, USK, UM, BINUS, UNEJ, UNDIKSHA, UNESA, UPI, & POLBAN",
    registrationLink: "https://forms.office.com/r/G38YWnQzHV",
  },
  {
    id: "weekly-meeting",
    title: "Blitz Krieg",
    date: "Time: TBA in WhatsApp group",
    dateObject: new Date(2025, 11, 31), // Future placeholder date
    location: "BINUS Anggrek Campus, Student Corner 4th floor",
    description:
      "Join us for casual play, puzzles and discussions. All skill levels welcome!",
    image: "/events/dailyblitzkrieg.jpeg",
    type: "upcoming",
    fullDescription:
      "Our Blitz Krieg events are the heart of our chess community. We gather at the Student Corner on the 4th floor of BINUS Anggrek Campus for fast-paced chess action. Whether you're a complete beginner or an experienced player, you'll find a welcoming environment to improve your game through rapid-fire games. Time and date will be announced in our WhatsApp group, so make sure to join us there for updates!",
  },
  {
    id: "grand-launching",
    title: "Grand Launching BCC",
    date: "March 13, 2025",
    dateObject: new Date(2025, 2, 13), // March 13, 2025
    location: "BINUS Auditorium",
    description: "Our grand launching as official BINUS club.",
    image: "/events/bcclaunch.jpeg",
    type: "past",
    fullDescription:
      "The grand launching of BINUS Chess Club was a momentous occasion that marked our official recognition as a student organization. The event took place in the main auditorium with over 200 attendees, including faculty members, students, and chess enthusiasts. The ceremony featured opening remarks from university officials, a chess exhibition match, and the unveiling of our club charter. This event established our commitment to promoting chess culture within the BINUS community.",
    gallery: [
      "/events/bcclaunch.jpeg",
      "/together.jpeg",
      "/together2.jpeg",
      "/simul.jpeg"
    ]
  },
  {
    id: "simulchess",
    title: "Simultaneous Exhibition",
    date: "March 13, 2025",
    dateObject: new Date(2025, 2, 13), // March 13, 2025
    location: "BINUS Anggrek, Food Court",
    description:
      "Indonesian IM played against 20 club members simultaneously.",
    image: "/events/SimulChess.jpg",
    type: "past",
    fullDescription:
      "Indonesian IM played against 20 club members simultaneously.",
  },
];

export const getUpcomingEvents = (): Event[] => {
  return allEvents.filter(event => event.type === "upcoming");
};

export const getPastEvents = (sortOrder: "asc" | "desc" = "desc"): Event[] => {
  const pastEvents = allEvents.filter(event => event.type === "past");
  return pastEvents.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.dateObject.getTime() - b.dateObject.getTime();
    } else {
      return b.dateObject.getTime() - a.dateObject.getTime();
    }
  });
};

export const getEventById = (id: string): Event | undefined => {
  return allEvents.find(event => event.id === id);
};