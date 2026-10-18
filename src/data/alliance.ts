export interface Organisation {
  short: string;
  name: string;
  text: string;
  /** background class: a deeper shade of the organisation's colour that keeps white text readable */
  background: string;
}

export const ORGANISATIONS: readonly Organisation[] = [
  {
    short: "KSU",
    name: "Kerala Students Union",
    text: "The student organisation of the Congress movement in Kerala, active on campuses across the state for generations.",
    background: "bg-blue-deep",
  },
  {
    short: "MSF",
    name: "Muslim Students Federation",
    text: "The student wing of the Indian Union Muslim League, with a strong presence in colleges throughout Kerala.",
    background: "bg-green-deep",
  },
];
