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
    id: "clashofbatches",
    title: "Clash of Batches",
    date: "13 September 2025",
    dateObject: new Date(2025, 8, 13), // Future placeholder date
    location: "Online Lichess",
    description:
      "Get ready for the Clash of Batches, an exciting arena-style tournament on Lichess! The batch scoring the most points declared the ultimate winner. Join the chess frenzy!",
    image: "/events/clashofbatches.jpg",
    type: "upcoming",
    fullDescription:
      "Welcome to the Clash of Batches, an exciting arena-style chess tournament on Lichess, pitting our community’s batches against each other in a fast-paced showdown. Participants compete in rated games, earning points for wins, draws, and strategic moves like berserk, with the batch scoring the highest total declared the champion.",
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
  {
    id: "pomprovpreparation",
    title: "POMPROV Preparation",
    date: "May 11, 2025",
    dateObject: new Date(2025, 4, 11),
    location: "BINUS Kemanggisan",
    description:
      "We honed our skills with intensive preparation and training sessions for Pomprov DKI Jakarta! Our efforts sharpened our abilities and strategized for the provincial chess championship.",
    image: "/events/pomprovprepare/pomprovprepare.jpg",
    type: "past",
    fullDescription:
    "Through a series of focused training sessions, we covered advanced tactics, opening theories, endgame techniques, and match practice, tailored to enhance individual and team performance. Led by experienced coaches and top-rated players, these sessions included simulated matches and personalized feedback to address specific weaknesses. Held in the lead-up to the event, this program fostered teamwork and determination, ensuring our club was well-prepared to represent BINUS with pride at Pomprov DKI Jakarta!",
    gallery: [
      "/events/pomprovprepare/1.jpg",
      "/events/pomprovprepare/2.jpg",
      "/events/pomprovprepare/zoom.jpg"

    ]
  },
  {
  id: "superchessseries",
  title: "SUPER CHESS Series III",
  date: "July 19, 2025",
  dateObject: new Date(2025, 6, 19), // July 19, 2025
  location: "PISET Square, Kota Bandung",
  description: "We showcased our skills at the prestigious SUPER CHESS Series III, an offline tournament hosted by ITB! Our team competed fiercely in this national championship.",
  image: "/events/superchess/poster.jpg",
  type: "past",
  fullDescription: "The SUPER CHESS Series III, hosted by Institut Teknologi Bandung (ITB), was a prestigious offline national tournament held on July 19–20, 2025, at PISET Square in Bandung. Our BINUS Chess Club team participated in this exciting event, competing in a Swiss system format with a 10-minute + 5-second increment time control across four categories: Open Class, 18+ Class, Veteran Class, and College Group Class. With a total prize pool of Rp150 million, the tournament tested our strategic abilities and teamwork. Guided by experienced coaches, we prepared through intensive training, focusing on tactics and match simulations, ensuring we represented BINUS with pride. This event highlighted our growth and competitive spirit on a national stage!",
  gallery: [
    "/events/superchess/superchess.JPG",
    "/events/superchess/1.JPG",
    "/events/superchess/2.JPG",
  ]
  },
  {
  id: "pknstan",
  title: "PKN STAN x BCC Sparring",
  date: "May 13, 2025",
  dateObject: new Date(2025, 4, 31), // May 31, 2025 (corrected from July 19)
  location: "BINUS Kemanggisan",
  description: "We honed our skills in an exciting sparring session with PKN STAN! This friendly match boosted our teamwork and readiness for future competitions.",
  image: "/events/pknstan/pknstan.jpg",
  type: "past",
  fullDescription: "The PKN STAN x BCC Sparring, held on May 31, 2025, at BINUS Kemanggisan, was a dynamic friendly match that brought together members of the BINUS Chess Club and PKN STAN for an enriching chess experience. This event featured a series of casual yet competitive games, allowing both teams to test their strategies, improve their gameplay, and build camaraderie. Guided by our coaches, we focused on tactical drills and real-time feedback during the session, which helped strengthen our team coordination and individual skills. This sparring session was a valuable opportunity to prepare for upcoming tournaments and foster a spirit of collaboration with PKN STAN, leaving us better equipped for future challenges!",
  gallery: [
    "/events/pknstan/1.jpg",
    "/events/pknstan/2.jpg",
  ]
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