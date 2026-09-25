// ============================================================
// PEOPLE
// To add someone: copy one { ... } block, paste it at the end,
// and change the values. Tags and filters update automatically.
// `subSector` can be "" if there isn't one.
// In `links`, only include the platforms they're on: LinkedIn, X
// ============================================================
const people = [
  {
    name: "Dan Norris",
    oneLiner: "Serial bootstrapper who sold WP Curve to GoDaddy. Now building AI software in public.",
    industry: "Tech",
    subSector: "SaaS / AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/thedannorris/",
      X: "https://x.com/thedannorris",
    },
  },
  {
    name: "Frank Greeff",
    oneLiner: "Proptech co-founder behind Realbase. Writes candidly about the realities of building a company.",
    industry: "Tech",
    subSector: "Proptech",
    links: {
      LinkedIn: "https://www.linkedin.com/in/frankgreeff/",
    },
  },
  {
    name: "Michael Sharkey",
    oneLiner: "Co-founded marketing platform Ortto. Now building AI products and podcasting about the space.",
    industry: "Tech",
    subSector: "Martech / AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/mikesharkey/",
    },
  },
  {
    name: "Chris Sharkey",
    oneLiner: "Technical co-founder of Ortto. Breaks down new AI developments from a builder's perspective.",
    industry: "Tech",
    subSector: "Martech / AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/chrissharkey2/",
    },
  },
  {
    name: "Chirag Goswami",
    oneLiner: "Founded a managed IT and cloud firm. Posts prolifically on tech, security and growth.",
    industry: "Tech",
    subSector: "IT / cyber",
    links: {
      LinkedIn: "https://www.linkedin.com/in/chiraggoswami23/",
    },
  },
  {
    name: "Dan Nolan",
    oneLiner: "Melbourne software builder experimenting with LLMs and AI apps, sharing what works openly.",
    industry: "Tech",
    subSector: "AI / dev",
    links: {
      X: "https://x.com/dannolan",
    },
  },
  {
    name: "Mick Liubinskas",
    oneLiner: "Startup veteran turned climate-tech founder, backing and mentoring Australian climate startups.",
    industry: "Tech",
    subSector: "Climatetech",
    links: {
      LinkedIn: "https://www.linkedin.com/in/mliubinskas/",
      X: "https://x.com/liubinskas",
    },
  },
  {
    name: "Geoffrey Huntley",
    oneLiner: "Engineer and influential AI coding voice. Pushes hard on how agents change software.",
    industry: "Tech",
    subSector: "AI / dev",
    links: {
      LinkedIn: "https://www.linkedin.com/in/geoffreyhuntley/",
      X: "https://x.com/GeoffreyHuntley",
    },
  },
  {
    name: "Charlie Gearside",
    oneLiner: "Co-founded Eucalyptus, then turned to advocating for building more in Australia.",
    industry: "Tech",
    subSector: "",
    links: {
      LinkedIn: "https://www.linkedin.com/in/charlie-gearside-4914a139/",
      X: "https://x.com/gearside",
    },
  },
  {
    name: "Paul Bassat",
    oneLiner: "Co-founded Seek, then Square Peg Capital. Shares blunt lessons on building enduring companies.",
    industry: "Tech",
    subSector: "Investor",
    links: {
      X: "https://x.com/PaulBassat",
    },
  },
  {
    name: "Mark Woodland",
    oneLiner: "Built Xplor, then founded a health startup. Shares hard-won lessons from scaling software.",
    industry: "Tech",
    subSector: "SaaS / AI",
    links: {
      X: "https://x.com/Markwoodland",
    },
  },
  {
    name: "Mizko",
    oneLiner: "Designer-turned-YouTuber building software tools to help creators scale their content.",
    industry: "Tech",
    subSector: "SaaS / AI",
    links: {
      X: "https://x.com/mizko",
    },
  },
  {
    name: "Mike Halligan",
    oneLiner: "Co-founded DTC pet food brand Scratch. Writes openly about building a subscription business.",
    industry: "E-commerce",
    subSector: "Pet food",
    links: {
      LinkedIn: "https://www.linkedin.com/in/michaelhalligan/",
    },
  },
  {
    name: "Dean Salakas",
    oneLiner: "Omnichannel party-supplies retailer and ecommerce advocate, sharing retail lessons from the front line.",
    industry: "E-commerce",
    subSector: "DTC",
    links: {
      LinkedIn: "https://www.linkedin.com/in/deansalakas/",
    },
  },
  {
    name: "Henry Innis",
    oneLiner: "Co-founded Mutinex. Sharp, contrarian takes on marketing measurement and what actually drives growth.",
    industry: "AI",
    subSector: "Marketing / measurement AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/henryinnis/",
    },
  },
  {
    name: "Benjamin Humphrey",
    oneLiner: "Designer who co-founded Dovetail. Writes thoughtfully about product, design and startup building.",
    industry: "AI",
    subSector: "Research / insights AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/humphreybc/",
      X: "https://x.com/humphreybc",
    },
  },
  {
    name: "Kai Van Lieshout",
    oneLiner: "Co-founded AI medical scribe Lyrebird Health, taking Australian health AI to global clinicians.",
    industry: "AI",
    subSector: "Health AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/kaivanlieshout/",
    },
  },
  {
    name: "Linus Talacko",
    oneLiner: "Co-founded Lyrebird Health. Building AI that gives doctors time back with patients.",
    industry: "AI",
    subSector: "Health AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/linustalacko/",
    },
  },
  {
    name: "Michelle Perugini",
    oneLiner: "Scientist-founder applying AI to IVF. Among Australia's pioneering women in medical AI.",
    industry: "AI",
    subSector: "Health AI (IVF)",
    links: {
      LinkedIn: "https://www.linkedin.com/in/michelleperugini/",
    },
  },
  {
    name: "Hon Weng Chong",
    oneLiner: "Doctor turned founder growing neurons on chips. Building biological computers at Cortical Labs.",
    industry: "AI",
    subSector: "Deep-tech AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/hochong/",
      X: "https://x.com/dr1337",
    },
  },
  {
    name: "Evan Wong",
    oneLiner: "Co-founded legal automation company Checkbox. Took an Australian legaltech startup to the US.",
    industry: "AI",
    subSector: "Legaltech-AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/theevanwong/",
    },
  },
  {
    name: "Tom Dreyfus",
    oneLiner: "Legaltech founder behind Josef, championing automation to make legal help more accessible.",
    industry: "AI",
    subSector: "Legaltech-AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/tom-dreyfus/",
    },
  },
  {
    name: "Sam Flynn",
    oneLiner: "Lawyer-turned-founder who co-founded Josef. Talks legal innovation and access to justice.",
    industry: "AI",
    subSector: "Legaltech-AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/samuel-flynn/",
    },
  },
  {
    name: "Dave Lemphers",
    oneLiner: "Tech veteran who co-founded Maincode, building sovereign Australian AI models from scratch.",
    industry: "AI",
    subSector: "Foundational AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/dlemphers/",
    },
  },
  {
    name: "Tim Toner",
    oneLiner: "Co-founded document AI company Affinda with his brother, scaling Melbourne-built AI globally.",
    industry: "AI",
    subSector: "Document AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/timothytoner/",
    },
  },
  {
    name: "Dr Steven Lu",
    oneLiner: "Doctor and Everlab co-founder, making preventative health and early detection mainstream.",
    industry: "AI",
    subSector: "Health AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/dr-steven-lu-82943825a/",
    },
  },
  {
    name: "Sam Kothari",
    oneLiner: "Early Airwallex operator turned Everlab co-founder, building preventative healthcare for everyday Australians.",
    industry: "AI",
    subSector: "Health AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/kotharisam/",
    },
  },
  {
    name: "Nick Nikolaiev",
    oneLiner: "Co-founded AI meeting tool Tactiq. Shares lessons on growing a product used globally.",
    industry: "AI",
    subSector: "Meeting AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/nick-nikolaiev/",
    },
  },
  {
    name: "Ksenia Svechnikova",
    oneLiner: "Co-founded Tactiq. Writes about product-led growth and building AI tools for teams.",
    industry: "AI",
    subSector: "Meeting AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/ksvechnikova/",
    },
  },
  {
    name: "Nicholas Therkelsen-Terry",
    oneLiner: "Two-time exited AI founder. Talks practical AI adoption for businesses beyond the hype.",
    industry: "AI",
    subSector: "Applied AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/ntherkelsen/",
    },
  },
  {
    name: "Ada Guan",
    oneLiner: "Co-founded Rich Data Co, using explainable AI to make lending fairer.",
    industry: "AI",
    subSector: "Fintech-AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/adaguan/",
    },
  },
  {
    name: "Chris Brycki",
    oneLiner: "Ex-fund manager who built Stockspot. Outspoken on fees, super and low-cost investing.",
    industry: "Fintech",
    subSector: "Wealthtech",
    links: {
      LinkedIn: "https://www.linkedin.com/in/brycki/",
      X: "https://x.com/chrisbrycki",
    },
  },
  {
    name: "Kurt Walkom",
    oneLiner: "Co-founded investing platform Pearler. Champions long-term, boring investing over speculation.",
    industry: "Fintech",
    subSector: "Wealthtech",
    links: {
      LinkedIn: "https://www.linkedin.com/in/kurtwalkom/",
    },
  },
  {
    name: "John Winters",
    oneLiner: "Co-founded Superhero, putting low-cost investing and super into everyday Australians' hands.",
    industry: "Fintech",
    subSector: "Wealthtech",
    links: {
      LinkedIn: "https://www.linkedin.com/in/johnwinters1/",
    },
  },
  {
    name: "Christian Westerlind Wigstrom",
    oneLiner: "Payments infrastructure leader with commentary on real-time payments and Australian fintech policy.",
    industry: "Fintech",
    subSector: "Payments",
    links: {
      LinkedIn: "https://www.linkedin.com/in/christian-westerlind-wigstrom/",
    },
  },
  {
    name: "Guy Callaghan",
    oneLiner: "Veteran SME lender championing faster finance for small businesses banks often overlook.",
    industry: "Fintech",
    subSector: "SME finance",
    links: {
      LinkedIn: "https://www.linkedin.com/in/guy-callaghan-05652a/",
    },
  },
  {
    name: "Daniel Kniaz",
    oneLiner: "Co-founded spend-management startup Weel. Writes about scaling a fintech from scratch.",
    industry: "Fintech",
    subSector: "Payments / spend",
    links: {
      LinkedIn: "https://www.linkedin.com/in/danielkniaz/",
    },
  },
  {
    name: "Ryan Edwards-Pritchard",
    oneLiner: "Fintech leader building corporate spend tools. Shares honest takes on startup growth.",
    industry: "Fintech",
    subSector: "Payments / spend",
    links: {
      LinkedIn: "https://www.linkedin.com/in/ryanedwardspritchard/",
    },
  },
  {
    name: "Luke Trickett",
    oneLiner: "Fintech founder behind Marmalade, fixing how small businesses get paid on time.",
    industry: "Fintech",
    subSector: "SME finance",
    links: {
      LinkedIn: "https://www.linkedin.com/in/lutrickett/",
    },
  },
  {
    name: "Chris Jewell",
    oneLiner: "Co-founded payments company Zepto. Advocates for faster, open, real-time payments in Australia.",
    industry: "Fintech",
    subSector: "Payments",
    links: {
      LinkedIn: "https://www.linkedin.com/in/chris-jewell-013b3065/",
    },
  },
  {
    name: "Dominic Pym",
    oneLiner: "Co-founded Up and Pin Payments. Now an investor sharing candid startup and fintech takes.",
    industry: "Fintech",
    subSector: "Neobank",
    links: {
      LinkedIn: "https://www.linkedin.com/in/dompym/",
    },
  },
  {
    name: "Skye Theodorou",
    oneLiner: "Insurtech co-founder simplifying business insurance. Writes openly about the founder journey.",
    industry: "Fintech",
    subSector: "Insurtech",
    links: {
      LinkedIn: "https://www.linkedin.com/in/skye-theodorou/",
    },
  },
  {
    name: "Richard Joffe",
    oneLiner: "Serial founder behind Honey Insurance, rethinking home insurance around preventing damage.",
    industry: "Fintech",
    subSector: "Insurtech",
    links: {
      LinkedIn: "https://www.linkedin.com/in/richardjoffe/",
    },
  },
  {
    name: "James Bowe",
    oneLiner: "Co-founded OwnHome to help Australians buy homes sooner. Talks housing and property access.",
    industry: "Fintech",
    subSector: "Proptech-fintech",
    links: {
      LinkedIn: "https://www.linkedin.com/in/jamesboweownhome/",
    },
  },
  {
    name: "Asher Tan",
    oneLiner: "Co-founded CoinJar, one of Australia's longest-running crypto exchanges. Shares crypto industry perspectives.",
    industry: "Fintech",
    subSector: "Digital assets",
    links: {
      LinkedIn: "https://www.linkedin.com/in/ashertan/",
    },
  },
  {
    name: "Michael Fox",
    oneLiner: "Serial founder of Shoes of Prey and Fable Food. Candid about startup highs and lows.",
    industry: "Food & Beverage",
    subSector: "Alt-protein",
    links: {
      LinkedIn: "https://www.linkedin.com/in/michaelfox1/",
    },
  },
  {
    name: "Drew Bilbe",
    oneLiner: "Co-founded Nexba, taking a sugar-free drinks brand from Australia into global retail.",
    industry: "Food & Beverage",
    subSector: "Non-alc beverages",
    links: {
      LinkedIn: "https://www.linkedin.com/in/drewbilbe/",
    },
  },
  {
    name: "Clinton Schultz",
    oneLiner: "Gamilaroi psychologist who founded Sobah, an Aboriginal-owned non-alcoholic craft beer.",
    industry: "Food & Beverage",
    subSector: "Non-alc beverages",
    links: {
      LinkedIn: "https://www.linkedin.com/in/dr-clinton-schultz-sobah/",
    },
  },
  {
    name: "David Andrew",
    oneLiner: "Founded Naked Life, taking Australian non-alcoholic drinks into major US retail.",
    industry: "Food & Beverage",
    subSector: "Non-alc beverages",
    links: {
      LinkedIn: "https://www.linkedin.com/in/david-andrew-862971/",
    },
  },
  {
    name: "Will Morgan",
    oneLiner: "Co-founded seltzer brand Fellr. Shares lessons from building a drinks brand from scratch.",
    industry: "Food & Beverage",
    subSector: "Alc beverages",
    links: {
      LinkedIn: "https://www.linkedin.com/in/willmorgannz/",
    },
  },
  {
    name: "Sean Baxter",
    oneLiner: "Distiller and Never Never Distilling co-founder, with deep insight into craft spirits.",
    industry: "Food & Beverage",
    subSector: "Alc beverages",
    links: {
      LinkedIn: "https://www.linkedin.com/in/sean-baxter-07647444/",
    },
  },
  {
    name: "Daniel Kitay",
    oneLiner: "Co-founded low-sugar lolly brand Funday. Shares lessons on getting snacks onto supermarket shelves.",
    industry: "Food & Beverage",
    subSector: "Snacks / confectionery",
    links: {
      LinkedIn: "https://www.linkedin.com/in/daniel-kitay/",
    },
  },
  {
    name: "George Peppou",
    oneLiner: "Co-founded cultured meat company Vow. Frank about the hard realities of food-tech.",
    industry: "Food & Beverage",
    subSector: "Food-tech",
    links: {
      LinkedIn: "https://www.linkedin.com/in/peppou/",
    },
  },
  {
    name: "Saxon Wright",
    oneLiner: "Coffee roaster who founded Pablo & Rusty's. Advocates for sustainability and B Corp business.",
    industry: "Food & Beverage",
    subSector: "Coffee",
    links: {
      LinkedIn: "https://www.linkedin.com/in/saxonwright/",
    },
  },
  {
    name: "Andy Miller",
    oneLiner: "Co-founded Heaps Normal, making non-alcoholic beer mainstream in Australia.",
    industry: "Food & Beverage",
    subSector: "Non-alc beverages",
    links: {
      LinkedIn: "https://www.linkedin.com/in/andyjamesmiller/",
    },
  },
  {
    name: "Pana Barbounis",
    oneLiner: "Founded vegan chocolate brand Pana Organic. Talks product, retail and founder-led manufacturing.",
    industry: "Food & Beverage",
    subSector: "Confectionery",
    links: {
      LinkedIn: "https://www.linkedin.com/in/pana-barbounis/",
    },
  },
  {
    name: "Alastair Blenkin",
    oneLiner: "Lawyer-turned-founder of ProcurePro. Posts candidly about building construction software globally.",
    industry: "Clean/Climate Tech",
    subSector: "Construction SaaS",
    links: {
      LinkedIn: "https://www.linkedin.com/in/alastairblenkin/",
    },
  },
  {
    name: "Andrew Mears",
    oneLiner: "Founded SwitchDin. Explains how rooftop solar and batteries are reshaping the energy grid.",
    industry: "Clean/Climate Tech",
    subSector: "Grid / DER software",
    links: {
      LinkedIn: "https://www.linkedin.com/in/andrewmears/",
    },
  },
  {
    name: "Dr Benjamin Coorey",
    oneLiner: "Architect-technologist behind Archistar, using AI to speed up planning and housing approvals.",
    industry: "Clean/Climate Tech",
    subSector: "Construction/property AI",
    links: {
      LinkedIn: "https://www.linkedin.com/in/bencoorey/",
    },
  },
  {
    name: "Andrew Coppin",
    oneLiner: "Agtech founder behind Farmbot. Champions Australian agtech and remote farm monitoring.",
    industry: "Clean/Climate Tech",
    subSector: "Agtech",
    links: {
      LinkedIn: "https://www.linkedin.com/in/coppo888/",
    },
  },
  {
    name: "Dominic Spooner",
    oneLiner: "Founded Vaulta, manufacturing batteries in Australia. Shares the grit of building hardware.",
    industry: "Clean/Climate Tech",
    subSector: "Batteries / storage",
    links: {
      LinkedIn: "https://www.linkedin.com/in/dominicspooner/",
    },
  },
  {
    name: "Jeremy McLeod",
    oneLiner: "Architect behind Nightingale Housing. Outspoken advocate for sustainable, affordable apartment living.",
    industry: "Clean/Climate Tech",
    subSector: "Green building",
    links: {
      LinkedIn: "https://www.linkedin.com/in/jeremy-mcleod-architect/",
    },
  },
  {
    name: "Jessica Richmond",
    oneLiner: "Co-founded Sumday. Makes carbon accounting practical for accountants and small businesses.",
    industry: "Clean/Climate Tech",
    subSector: "Carbon / climate software",
    links: {
      LinkedIn: "https://www.linkedin.com/in/jessica-richmond/",
    },
  },
  {
    name: "Julia Kay",
    oneLiner: "Co-founded Great Wrap, turning food waste into compostable packaging. Shares the manufacturing journey.",
    industry: "Clean/Climate Tech",
    subSector: "Materials / packaging",
    links: {
      LinkedIn: "https://www.linkedin.com/in/juliakaygw/",
    },
  },
  {
    name: "Olympia Yarger",
    oneLiner: "Insect farming pioneer who founded Goterra. Candid about building deep-tech in Australia.",
    industry: "Clean/Climate Tech",
    subSector: "Circular economy",
    links: {
      LinkedIn: "https://www.linkedin.com/in/olympiayarger/",
    },
  },
  {
    name: "Paul McArdle",
    oneLiner: "Energy-market analyst who founded WattClarity. Explains Australia's electricity market in detail.",
    industry: "Clean/Climate Tech",
    subSector: "Energy markets",
    links: {
      LinkedIn: "https://www.linkedin.com/in/paulmcardle/",
    },
  },
  {
    name: "Tim Washington",
    oneLiner: "Co-founded JET Charge. Leading voice on EV charging and fleet electrification in Australia.",
    industry: "Clean/Climate Tech",
    subSector: "EV / infrastructure",
    links: {
      LinkedIn: "https://www.linkedin.com/in/tim-washington/",
    },
  },
  {
    name: "Jordy Kay",
    oneLiner: "Co-founded Great Wrap, building compostable packaging manufacturing from the ground up in Australia.",
    industry: "Clean/Climate Tech",
    subSector: "Materials / packaging",
    links: {
      LinkedIn: "https://www.linkedin.com/in/jordy-kay-922b37105/",
    },
  },
  {
    name: "Afnan Hannan",
    oneLiner: "Co-founded Okra Solar, bringing affordable solar power to off-grid communities in Asia and Africa.",
    industry: "Clean/Climate Tech",
    subSector: "Solar / energy access",
    links: {
      LinkedIn: "https://www.linkedin.com/in/afnan-hannan-461272ba/",
    },
  },
  {
    name: "Andrew Walker",
    oneLiner: "Founded AirSeed, using drones and seed pods to restore landscapes at scale.",
    industry: "Clean/Climate Tech",
    subSector: "Nature / carbon",
    links: {
      LinkedIn: "https://www.linkedin.com/in/andrew-walker-9a1103180/",
    },
  },
  {
    name: "Graham Ross",
    oneLiner: "Co-founded BlockTexx, turning textile waste into reusable raw materials.",
    industry: "Clean/Climate Tech",
    subSector: "Circular economy",
    links: {
      LinkedIn: "https://www.linkedin.com/in/grahamross2/",
    },
  },
  {
    name: "Adrian Jones",
    oneLiner: "Co-founded BlockTexx, tackling fashion's landfill problem through textile recycling technology.",
    industry: "Clean/Climate Tech",
    subSector: "Circular economy",
    links: {
      LinkedIn: "https://www.linkedin.com/in/adrian-jones1/",
    },
  },
  {
    name: "Andrew Bate",
    oneLiner: "Farmer who co-founded SwarmFarm, building autonomous robots for broadacre agriculture.",
    industry: "Clean/Climate Tech",
    subSector: "Ag-climate",
    links: {
      LinkedIn: "https://www.linkedin.com/in/andrew-bate-16000021/",
    },
  },
  {
    name: "Adrian Merrick",
    oneLiner: "Founded Energy Locals, challenging big energy retailers with a fairer, locally focused model.",
    industry: "Clean/Climate Tech",
    subSector: "Energy retail",
    links: {
      LinkedIn: "https://www.linkedin.com/in/adrianmerrick/",
    },
  },
  {
    name: "Emma Weston",
    oneLiner: "Agtech pioneer who co-founded AgriDigital. Champions digital innovation across Australian agriculture.",
    industry: "Clean/Climate Tech",
    subSector: "Agtech",
    links: {
      LinkedIn: "https://www.linkedin.com/in/emmamweston/",
    },
  },
  {
    name: "John Fargher",
    oneLiner: "Co-founded AgriWebb, helping livestock farmers run their operations with better data.",
    industry: "Clean/Climate Tech",
    subSector: "Agtech",
    links: {
      LinkedIn: "https://www.linkedin.com/in/john-fargher-97577654/",
    },
  },
  {
    name: "Phoebe Gardner",
    oneLiner: "Co-founded Bardee, using insects to upcycle food waste into protein and fertiliser.",
    industry: "Clean/Climate Tech",
    subSector: "Circular economy",
    links: {
      LinkedIn: "https://www.linkedin.com/in/phoebe-gardner/",
    },
  },
  {
    name: "David Smith",
    oneLiner: "Founded Ceres Tag, bringing smart ear tags and data to livestock management.",
    industry: "Clean/Climate Tech",
    subSector: "Agtech",
    links: {
      LinkedIn: "https://www.linkedin.com/in/david-smith-32b48925/",
    },
  },
  {
    name: "Nusqe Spanton",
    oneLiner: "Founded Provectus Algae, using algae to make sustainable ingredients at industrial scale.",
    industry: "Clean/Climate Tech",
    subSector: "Biotech / climate",
    links: {
      LinkedIn: "https://www.linkedin.com/in/nusqe-spanton-99012a167/",
    },
  },
  {
    name: "Hartley Pike",
    oneLiner: "Co-founded construction software company Sitemate. Writes about building global SaaS from Australia.",
    industry: "Clean/Climate Tech",
    subSector: "Construction SaaS",
    links: {
      LinkedIn: "https://www.linkedin.com/in/hartleypike/",
    },
  },
  {
    name: "Sean McCreanor",
    oneLiner: "Founded Assignar to fix how construction contractors manage their crews and equipment.",
    industry: "Clean/Climate Tech",
    subSector: "Construction SaaS",
    links: {
      LinkedIn: "https://www.linkedin.com/in/smccreanor/",
    },
  },
  {
    name: "Jan Gyrn",
    oneLiner: "Co-founded Modscape, pushing modular construction as faster, more sustainable building.",
    industry: "Clean/Climate Tech",
    subSector: "Green building / modular",
    links: {
      LinkedIn: "https://www.linkedin.com/in/jangyrn/",
    },
  },
  {
    name: "Silvia Pfeiffer",
    oneLiner: "Serial health-tech founder and CSIRO alumna. Shares perspectives on telehealth and digital care.",
    industry: "Health/Med Tech",
    subSector: "Digital health / SaaS",
    links: {
      LinkedIn: "https://www.linkedin.com/in/silviapfeiffer/",
    },
  },
  {
    name: "Alison Hardacre",
    oneLiner: "Co-founded Halaxy. Advocates for better, free-to-use software for healthcare practitioners.",
    industry: "Health/Med Tech",
    subSector: "Health SaaS",
    links: {
      LinkedIn: "https://www.linkedin.com/in/alisonhardacre/",
    },
  },
  {
    name: "Kunal Kalro",
    oneLiner: "Genomics founder behind Eugene, focused on making fertility and genetic care more accessible.",
    industry: "Health/Med Tech",
    subSector: "Genomics / femtech",
    links: {
      LinkedIn: "https://www.linkedin.com/in/kckal/",
    },
  },
  {
    name: "Jordan O'Reilly",
    oneLiner: "Co-founded Hireup, inspired by his brother. Champions choice for people with disability.",
    industry: "Health/Med Tech",
    subSector: "Aged/disability care tech",
    links: {
      LinkedIn: "https://www.linkedin.com/in/jordan-o-reilly-oam/",
    },
  },
  {
    name: "Laura O'Reilly",
    oneLiner: "Co-founded Hireup, building a better support-worker platform for people with disability.",
    industry: "Health/Med Tech",
    subSector: "Aged/disability care tech",
    links: {
      LinkedIn: "https://www.linkedin.com/in/laura-o-reilly-oam-gaicd-54a11a54/",
    },
  },
  {
    name: "Scott Taylor",
    oneLiner: "Co-founded Perx Health, using behavioural science to help patients stick to treatment.",
    industry: "Health/Med Tech",
    subSector: "Digital health",
    links: {
      LinkedIn: "https://www.linkedin.com/in/scott-taylor-perx/",
    },
  },
  {
    name: "Chris Smeed",
    oneLiner: "Co-founded Cubiko, helping GP practices use data to run better clinics.",
    industry: "Health/Med Tech",
    subSector: "Health SaaS",
    links: {
      LinkedIn: "https://www.linkedin.com/in/chrissmeed/",
    },
  },
  {
    name: "Craig Cowdrey",
    oneLiner: "Co-founded Sonder, blending technology and people to keep workers safe and well.",
    industry: "Health/Med Tech",
    subSector: "Health / wellbeing",
    links: {
      LinkedIn: "https://www.linkedin.com/in/craig-cowdrey-919245b9/",
    },
  },
  {
    name: "Chris Jeffery",
    oneLiner: "Medtech founder commercialising orthopaedic devices and medical AI from Brisbane.",
    industry: "Health/Med Tech",
    subSector: "MedTech devices",
    links: {
      LinkedIn: "https://www.linkedin.com/in/chris-jeffery-convergence/",
    },
  },
  {
    name: "Nicole Liu",
    oneLiner: "Co-founded Kin Fertility, making women's health and fertility information more accessible.",
    industry: "Health/Med Tech",
    subSector: "Femtech / DTC",
    links: {
      LinkedIn: "https://www.linkedin.com/in/nicole-liu23/",
    },
  },
  {
    name: "Simon Lockyer",
    oneLiner: "Serial founder behind Five Good Friends, reimagining home care for ageing Australians.",
    industry: "Health/Med Tech",
    subSector: "Aged/disability care tech",
    links: {
      LinkedIn: "https://www.linkedin.com/in/simon-lockyer-37254552/",
    },
  },
  {
    name: "Nathan Betteridge",
    oneLiner: "Serial founder who co-founded Everyday Hero and Five Good Friends. Reimagining ageing at home.",
    industry: "Health/Med Tech",
    subSector: "Aged/disability care tech",
    links: {
      LinkedIn: "https://www.linkedin.com/in/nathan-betteridge-aa09365/",
    },
  },
  {
    name: "Jay Spence",
    oneLiner: "Psychologist who co-founded Uprise, bringing evidence-based mental health programs to workplaces.",
    industry: "Health/Med Tech",
    subSector: "Mental health",
    links: {
      LinkedIn: "https://www.linkedin.com/in/drjayspence/",
    },
  },
  {
    name: "Damien Adler",
    oneLiner: "Founder behind Zanda Health, building practice software for allied health professionals.",
    industry: "Health/Med Tech",
    subSector: "Allied-health SaaS",
    links: {
      LinkedIn: "https://www.linkedin.com/in/damien-adler/",
    },
  },
  {
    name: "Nicholas Sanderson",
    oneLiner: "Founded Splose, building practice-management software for Australia's allied health clinics.",
    industry: "Health/Med Tech",
    subSector: "Allied-health SaaS",
    links: {
      LinkedIn: "https://www.linkedin.com/in/nicholas-sanderson/",
    },
  },
];

// ============================================================
// APP (you shouldn't need to edit below here)
// ============================================================

// Platforms, in the order they appear in the filter and on cards.
// The key is what goes in `links` (e.g. links.X); `label` is what's shown.
const platforms = ["LinkedIn", "X"];
const platformLabels = { X: "X (Twitter)" };
const labelFor = (site) => platformLabels[site] || site;

// The platforms a person is on, based on which links they have
function activeOn(person) {
  return platforms.filter((site) => person.links[site]);
}

// Which boxes are ticked, e.g. { industry: ["Fintech"], activeOn: ["X"] }
const selected = { industry: [], activeOn: [] };

// All unique industries across everyone, sorted A–Z
function allIndustries() {
  return [...new Set(people.map((person) => person.industry))].sort();
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

// Industries: show people in ANY ticked industry (each person has one).
// Platforms: people must be on ALL ticked platforms.
function matches(person) {
  const industryOk = selected.industry.length === 0 || selected.industry.includes(person.industry);
  const activeOk = selected.activeOn.every((site) => activeOn(person).includes(site));
  return industryOk && activeOk;
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
          <span class="tag tag-industry">${person.industry}</span>
          ${person.subSector ? `<span class="tag">${person.subSector}</span>` : ""}
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
  selected.industry = [];
  selected.activeOn = [];
  renderCards();
});

// Start up
document.getElementById("stat-count").textContent = people.length;
renderFilterGroup("industry", allIndustries());
renderFilterGroup("activeOn", platforms);
renderCards();
