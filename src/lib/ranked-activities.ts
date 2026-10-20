import { OUR_PROGRESS, OTHER_ACTIVITIES, type Activity } from "@/data/activities";
import { ACTIVITY_RANKING } from "@/data/activity-ranking";

// User-selected priorities take precedence over the model's scores.
const PRIORITY_IDS = ["040cf25b4018", "de4cc40e066c", "8e2d5014cb08", "825c34983452"];
const priority = (id: string) => {
  const index = PRIORITY_IDS.indexOf(id);
  return index < 0 ? 0 : PRIORITY_IDS.length - index;
};

export function compareActivityRank(a: Activity, b: Activity) {
  return priority(b.id) - priority(a.id)
    || (ACTIVITY_RANKING[b.id]?.score ?? 0) - (ACTIVITY_RANKING[a.id]?.score ?? 0)
    || b.date.localeCompare(a.date)
    || a.id.localeCompare(b.id);
}

// Posts the user removed from the site: "College ATM Facility Realized" repeats the SBI ATM inauguration.
const HIDDEN_IDS = new Set(["9b21b7406fef"]);

export const RANKED_ACTIVITIES = [...OUR_PROGRESS, ...OTHER_ACTIVITIES]
  .filter((post) => !HIDDEN_IDS.has(post.id))
  .sort(compareActivityRank);

// Keep the homepage preview in the same order as the combined archive.
export const PROGRESS_HIGHLIGHTS = RANKED_ACTIVITIES.slice(0, 8)
  .map((post) => ({ post, ...ACTIVITY_RANKING[post.id] }));
