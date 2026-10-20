# Progress and activity ranking

`activity-ranking.json` records the Gemini 3.5 Flash Lite review of the 200 image posts already categorized as progress or activities. Events and programs are outside this ranking. The review reads each caption and its exported image.

Each dimension is scored from 0 to 5:

- Campus/student impact: 30%.
- Delivery and completed outcomes: 40%.
- Clear UDSF GECW or student union involvement: 20%.
- Specific supporting source content: 10%.

The score is `impact * 6 + outcome * 8 + attribution * 4 + evidence * 2`, out of 100. This is an editorial ordering of the export's claims, not independent verification. Requests and promises must not be described as completed work; congratulations do not establish UDSF involvement in the achievement.

The combined `/activities` page defaults to this ranking and offers newest-first browsing. The homepage shows the first eight posts from the same combined ranking. User-selected priorities put the college bus first, campus SBI ATM inauguration second, napkin vending machine third and hostel generators fourth, ahead of model scores. Dates break score ties. Original captions remain available in the viewer. Source-review corrections in `activity-ranking-overrides.json` are applied after model scoring; these currently correct a uniform-policy commitment that the model overstated as completed.

To regenerate, run `node scripts/rank-activities.mjs`. It uses the authorized Vertex AI configuration and SDK from `UDSF_AI_RUNTIME` (default `/home/adhil/projects/notebook-agent`) without copying credentials into this repository. Existing reviewed IDs are reused so interrupted runs can resume. To request an entirely fresh review, move the report elsewhere before running. The script generates `src/data/activity-ranking.ts` for the site.

Reels/videos are not included in this image-post ranking.
