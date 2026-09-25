// ============================================================
// PEOPLE
// To add someone: copy one { ... } block, paste it at the end,
// and change the values. Tags and filters update automatically.
// In `links`, only include the platforms they're active on:
//   LinkedIn, X, Instagram
// ============================================================
const people = [
  {
    name: "Frank Greeff",
    oneLiner: "Bootstrapping tech startups in Australia and posting his build progress openly.",
    postsAbout: ["build-in-public", "bootstrapping"],
    links: {
      LinkedIn: "https://www.linkedin.com/in/frankgreeff/",
    },
  },

  // ---- PLACEHOLDERS: fake entries, replace with real people ----
  {
    name: "Placeholder: Mia Hartley",
    oneLiner: "Shares the real numbers behind her seed round, including the parts that went wrong.",
    postsAbout: ["raising", "build-in-public"],
    links: {
      LinkedIn: "https://example.com",
      X: "https://example.com",
      Instagram: "https://example.com",
    },
  },
  {
    name: "Placeholder: Tom Nguyen",
    oneLiner: "Solo dev shipping small SaaS tools from Brisbane. Short, honest weekly updates.",
    postsAbout: ["build-in-public", "indie-hacking"],
    links: {
      X: "https://example.com",
    },
  },
  {
    name: "Placeholder: Priya Raman",
    oneLiner: "Good threads on hiring your first five engineers without a big-tech budget.",
    postsAbout: ["hiring", "leadership"],
    links: {
      LinkedIn: "https://example.com",
    },
  },
  {
    name: "Placeholder: Jack O'Brien",
    oneLiner: "Climate hardware founder. Explains the hard parts of manufacturing in plain English.",
    postsAbout: ["climate", "hardware"],
    links: {
      LinkedIn: "https://example.com",
      X: "https://example.com",
    },
  },
  {
    name: "Placeholder: Sophie Chen",
    oneLiner: "Grew a B2B product to $1M ARR with no paid ads. Shares her distribution experiments.",
    postsAbout: ["growth", "bootstrapping"],
    links: {
      X: "https://example.com",
    },
  },
  {
    name: "Placeholder: Liam Walker",
    oneLiner: "Former VC turned operator. Blunt, useful takes on what investors actually look for.",
    postsAbout: ["raising", "leadership"],
    links: {
      LinkedIn: "https://example.com",
    },
  },
  {
    name: "Placeholder: Aisha Karim",
    oneLiner: "Building AI tools for tradies in public, including screenshots of every release.",
    postsAbout: ["ai", "build-in-public"],
    links: {
      X: "https://example.com",
      LinkedIn: "https://example.com",
      Instagram: "https://example.com",
    },
  },
  {
    name: "Placeholder: Ben Kowalski",
    oneLiner: "Runs a two-person studio launching one product a month. Writes up every launch.",
    postsAbout: ["indie-hacking", "growth"],
    links: {
      X: "https://example.com",
      Instagram: "https://example.com",
    },
  },
  {
    name: "Placeholder: Grace Tupou",
    oneLiner: "Fintech founder writing about regulation, banking partners and staying bootstrapped.",
    postsAbout: ["fintech", "bootstrapping"],
    links: {
      LinkedIn: "https://example.com",
      Instagram: "https://example.com",
    },
  },
];

// ============================================================
// APP (you shouldn't need to edit below here)
// ============================================================

// Platforms, in the order they appear in the filter and on cards.
// The key is what goes in `links` (e.g. links.X); `label` is what's shown.
const platforms = ["LinkedIn", "X", "Instagram"];
const platformLabels = { X: "X (Twitter)" };
const labelFor = (site) => platformLabels[site] || site;

// The platforms a person is on, based on which links they have
function activeOn(person) {
  return platforms.filter((site) => person.links[site]);
}

// Which boxes are ticked, e.g. { postsAbout: ["raising"], activeOn: ["X"] }
const selected = { postsAbout: [], activeOn: [] };

// All unique values of a field across everyone, sorted A–Z
function uniqueValues(field) {
  const all = people.flatMap((person) => person[field]);
  return [...new Set(all)].sort();
}

// Build one checkbox per value
function renderFilterGroup(field, values) {
  const container = document.getElementById("filter-" + field);
  container.innerHTML = values
    .map(
      (value) => `
      <label class="chip">
        <input type="checkbox" data-field="${field}" value="${value}">
        <span>${labelFor(value)}</span>
      </label>`
    )
    .join("");
}

// AND logic: a person must have every ticked value
function matches(person) {
  const postsOk = selected.postsAbout.every((tag) => person.postsAbout.includes(tag));
  const activeOk = selected.activeOn.every((site) => activeOn(person).includes(site));
  return postsOk && activeOk;
}

function renderCards() {
  const visible = people.filter(matches);
  const list = document.getElementById("cards");

  list.innerHTML = visible
    .map(
      (person, i) => `
      <li class="card">
        <span class="card-index">${String(i + 1).padStart(2, "0")}</span>
        <h3 class="card-name">${person.name}</h3>
        <p class="card-line">${person.oneLiner}</p>
        <div class="card-tags">
          ${person.postsAbout.map((tag) => `<span class="tag">#${tag}</span>`).join("")}
        </div>
        <div class="card-foot">
          ${activeOn(person)
            .map(
              (site) => `
            <a class="box-btn small" href="${person.links[site]}" target="_blank" rel="noopener noreferrer">
              ${labelFor(site)} <span aria-hidden="true">↗</span>
              <span class="visually-hidden">: ${person.name} (opens in new tab)</span>
            </a>`
            )
            .join("")}
        </div>
      </li>`
    )
    .join("");

  document.getElementById("empty").hidden = visible.length > 0;
  document.getElementById("result-count").textContent =
    `Showing ${visible.length} of ${people.length}`;
}

// When any checkbox changes, rebuild the selected lists and re-render
document.addEventListener("change", (event) => {
  const box = event.target;
  if (!box.matches("input[type=checkbox][data-field]")) return;

  const field = box.dataset.field;
  if (box.checked) {
    selected[field].push(box.value);
  } else {
    selected[field] = selected[field].filter((v) => v !== box.value);
  }
  renderCards();
});

document.getElementById("clear-filters").addEventListener("click", () => {
  document.querySelectorAll("input[type=checkbox][data-field]").forEach((box) => (box.checked = false));
  selected.postsAbout = [];
  selected.activeOn = [];
  renderCards();
});

// Start up
document.getElementById("stat-count").textContent = people.length;
renderFilterGroup("postsAbout", uniqueValues("postsAbout"));
renderFilterGroup("activeOn", platforms);
renderCards();
