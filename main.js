/* ---------- Updates / Instagram feed config ----------

   The "From campus" section fills itself from one of two sources:

   1. Instagram (later). Set FEED.url to an endpoint on your own server that calls the
      Meta Instagram API and returns its response unchanged, for example the result of:
        GET https://graph.instagram.com/me/media
            ?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp
      i.e. { "data": [ { id, caption, media_type, media_url, thumbnail_url, permalink, timestamp }, ... ] }
      Keep the access token on that server. Never put it in this file.

   2. A manual list (now). Add entries to UPDATES, newest first. Images go in assets/updates/.
        { title: "Freshers welcome", tag: "Event", date: "2026-10-12", image: "assets/updates/freshers.webp", link: "#" }

   If neither has anything, the section shows an empty state.
*/
const FEED = {
  url: null, // e.g. "/api/instagram"
  limit: 6,
  profile: "#", // TODO: https://www.instagram.com/<handle>/
};
const UPDATES = [];

const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");

// Hairline under the nav once the page has scrolled
const topSentinel = document.createElement("div");
topSentinel.style.cssText = "position:absolute;top:0;height:1px;width:1px";
document.body.prepend(topSentinel);
new IntersectionObserver(([e]) => nav.classList.toggle("nav--scrolled", !e.isIntersecting)).observe(topSentinel);

// Mobile menu
const setMenu = (open) => {
  nav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  toggle.querySelector("i").className = open ? "ph-bold ph-x" : "ph-bold ph-list";
};
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
document.querySelectorAll("#navLinks a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

/* ---------- Updates ---------- */
const grid = document.getElementById("updatesGrid");
const fmt = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" });
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const safeUrl = (u) => (/^(https?:|\/|assets\/|#)/.test(u || "") ? u : "#");

document.querySelectorAll("[data-ig-profile]").forEach((a) => (a.href = FEED.profile));

// Instagram media object -> card
const fromInstagram = (m) => ({
  image: m.media_type === "VIDEO" ? m.thumbnail_url : m.media_url,
  title: (m.caption || "").split("\n")[0].trim() || "View on Instagram",
  tag: m.media_type === "VIDEO" ? "Reel" : "Post",
  date: m.timestamp,
  link: m.permalink,
  external: true,
});

const card = (u) => `
  <a class="update" href="${esc(safeUrl(u.link))}"${u.external ? ' target="_blank" rel="noopener"' : ""}>
    <div class="update__img"><img src="${esc(safeUrl(u.image))}" alt="" loading="lazy" width="640" height="640"></div>
    <div class="update__meta">
      ${u.tag ? `<span class="update__tag">${esc(u.tag)}</span>` : ""}
      ${u.date ? `<time datetime="${esc(u.date)}">${fmt.format(new Date(u.date))}</time>` : ""}
      ${u.external ? '<i class="ph-bold ph-instagram-logo" aria-label="Instagram"></i>' : ""}
    </div>
    <h3>${esc(u.title)}</h3>
  </a>`;

const skeletons = (n) =>
  Array.from({ length: n }, () => `
    <div class="update update--skeleton" aria-hidden="true">
      <div class="update__img"></div>
      <span class="sk sk--tag"></span><span class="sk sk--line"></span><span class="sk sk--line sk--short"></span>
    </div>`).join("");

const emptyState = (failed) => `
  <div class="updates__empty">
    <img src="assets/logo-512.png" alt="" width="56" height="56">
    <strong>${failed ? "Couldn't load posts right now" : "Nothing posted yet"}</strong>
    <p>${failed ? "Our latest posts are always on Instagram." : "Event photos and news from GEC Wayanad will show up here."}</p>
  </div>`;

async function loadUpdates() {
  let items = UPDATES;
  let failed = false;

  if (FEED.url) {
    grid.setAttribute("aria-busy", "true");
    grid.innerHTML = skeletons(FEED.limit);
    try {
      const res = await fetch(FEED.url, { headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(res.status);
      const json = await res.json();
      items = (json.data || json).filter((m) => m.media_url || m.thumbnail_url).map(fromInstagram);
    } catch (err) {
      console.warn("Instagram feed failed, using manual updates", err);
      failed = !UPDATES.length;
    }
    grid.removeAttribute("aria-busy");
  }

  grid.innerHTML = items.length ? items.slice(0, FEED.limit).map(card).join("") : emptyState(failed);
}

loadUpdates();

document.getElementById("year").textContent = new Date().getFullYear();
