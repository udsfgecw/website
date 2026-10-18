/* What UDSF has delivered on campus and what is still being followed up.
   Images live in public/assets/progress/. `photo: true` marks an original event photograph;
   the rest are adapted from campaign posters. */

export interface Achievement {
  title: string;
  location: string;
  description: string;
  image: string | null;
  photo?: boolean;
  /** first of its kind at GEC Wayanad */
  first?: boolean;
  tags?: readonly string[];
}

export const ACHIEVEMENTS: readonly Achievement[] = [
  {
    title: "Started six student clubs",
    location: "Campus culture",
    description: "Initiated six new clubs, creating more ways for students to take part in campus life.",
    image: "clubs.webp",
    tags: ["Literary", "Drawing", "Dance", "Music", "Film", "Karma"],
  },
  {
    title: "Brought a new bus to college",
    location: "College transport",
    description: "Secured a new college bus, responding to students’ long-standing need for better transport.",
    image: "bus.webp",
  },
  {
    title: "Secured generators for the hostels",
    location: "Hostel facilities",
    description: "Brought generator facilities to the hostels, addressing students’ long-standing demand for backup power.",
    image: "generator.webp",
  },
  {
    title: "Secured student parking facilities",
    location: "Student parking",
    description: "Secured parking space for students on campus, meeting a long-standing student need.",
    image: "parking.webp",
  },
  {
    title: "Installed a new college nameboard",
    location: "Campus identity",
    description: "Replaced the old, damaged college nameboard with a renewed sign for Government Engineering College Wayanad.",
    image: "nameboard.webp",
  },
  {
    title: "Created the first web magazine",
    location: "Campus publications",
    description: "Launched the first web magazine at GEC Wayanad, a place for students’ writing and stories.",
    image: null,
    first: true,
  },
  {
    title: "Created the first audiobook",
    location: "Campus publications",
    description: "Produced the first audiobook at GEC Wayanad, bringing the web magazine’s writing and stories to audio.",
    image: "audiobook.webp",
    first: true,
  },
  {
    title: "Installed new lights on LH2 road",
    location: "LH2 road lighting",
    description: "New lights installed on the LH2 road following UDSF’s intervention, addressing the lack of lighting on the route.",
    image: "lighting.webp",
  },
  {
    title: "Improved the road to MH",
    location: "Hostel access",
    description: "Gravel laid along the road to the men’s hostel, improving a difficult stretch of the everyday journey.",
    image: "hostel-road.webp",
  },
  {
    title: "Added seating in department corners",
    location: "Department corners",
    description: "Seating introduced in department corners, making more room for students to meet, talk and spend time together.",
    image: "seating.webp",
  },
  {
    title: "Brought the German Consulate to campus",
    location: "German Consulate × KASE",
    description: "Brought the German Consulate team to campus for an interactive session with participation from KASE.",
    image: "exchange.webp",
    photo: true,
  },
];

export const FOLLOW_UPS = [
  {
    title: "Campus lighting",
    description: "Took the campus lighting request to the MLA and PWD. Approval received for a low-mast light; follow-up continues towards installation.",
    steps: ["Approval received", "Following up", "Installation"],
  },
  {
    title: "College cricket net",
    description: "Working towards a practice facility with the Wayanad District Cricket Association. An MoU is ready; construction remains pending.",
    steps: ["MoU ready", "Following up", "Construction"],
  },
] as const;
