export interface CommitteeMember {
  name: string;
  role: string;
  portrait: string;
  /** E.164 phone number, also used for WhatsApp */
  phone?: string;
}

const portrait = (name: string) => `/committee/2026-27/${name}.webp`;

// Names and roles transcribed from the GEC Wayanad unit committee poster.
export const COMMITTEE = [
  {
    id: "udsf",
    name: "Execom",
    detail: "United Democratic Students Front",
    members: [
      { name: "Anshid OP", role: "Chairman", portrait: portrait("anshid-op"), phone: "+918848431913" },
      { name: "Eldho", role: "Convenor", portrait: portrait("eldho"), phone: "+919961982673" },
      { name: "Nadeem", role: "Treasurer", portrait: portrait("nadeem"), phone: "+917736337729" },
    ],
  },
  {
    id: "ksu",
    name: "KSU",
    detail: "Kerala Students Union",
    members: [
      { name: "Vignesh", role: "President", portrait: portrait("vignesh") },
      { name: "Siddharth", role: "Secretary", portrait: portrait("siddharth") },
      { name: "Sreesanth", role: "Vice President", portrait: portrait("sreesanth") },
      { name: "Aflah", role: "Joint Secretary", portrait: portrait("aflah") },
    ],
  },
  {
    id: "msf",
    name: "MSF",
    detail: "Muslim Students Federation",
    members: [
      { name: "Adhin", role: "President", portrait: portrait("adhin") },
      { name: "Anas", role: "Secretary", portrait: portrait("anas") },
      { name: "Aneesha", role: "Vice President", portrait: portrait("aneesha") },
      { name: "Hisham", role: "Joint Secretary", portrait: portrait("hisham") },
    ],
  },
] as const;
