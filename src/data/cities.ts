import { City } from "./types";

// Starter content written from personal experience. Every tip should be
// re-checked before launch: prices, rules and providers change often.

const gurgaon: City = {
  slug: "gurgaon",
  name: "Gurgaon",
  tagline: "Your first 30 days in Gurugram, step by step.",
  status: "live",
  phases: [
    {
      id: "before",
      title: "Before you move",
      when: "2–4 weeks out",
      steps: [
        {
          id: "pick-area",
          title: "Pick your area around your office",
          summary:
            "Gurgaon is big and traffic is real. Shortlist 2–3 sectors within a short commute of your office before you look at a single flat.",
          tips: [
            { id: "t1", text: "Do a test commute at peak hour (9–10am) before you commit. A 6 km drive can take 45 minutes.", author: "Samyak", upvotes: 12 },
            { id: "t2", text: "If you'll use the metro, check walking distance to the nearest station, not just the sector name.", author: "Samyak", upvotes: 7 },
          ],
        },
        {
          id: "find-flat",
          title: "Shortlist flats",
          summary:
            "Use listing apps and local groups to shortlist, then do video tours so your one visit day is efficient.",
          tips: [
            { id: "t3", text: "Ask for a video call walkthrough first. Filters out half the listings in a day.", author: "Samyak", upvotes: 9 },
            { id: "t4", text: "Check water supply and power backup before anything else. Ask neighbours, not the broker.", author: "Samyak", upvotes: 15 },
          ],
        },
        {
          id: "budget",
          title: "Budget for the upfront cost",
          summary:
            "Plan for security deposit, brokerage (if any), first month's rent, and basic furniture all landing in the same month.",
          tips: [
            { id: "t5", text: "Negotiate the deposit down. Landlords often agree if you pay on time and sign for 11 months+.", author: "Samyak", upvotes: 6 },
          ],
        },
      ],
    },
    {
      id: "week-1",
      title: "First week",
      when: "Days 1–7",
      steps: [
        {
          id: "agreement",
          title: "Rental agreement and tenant verification",
          summary:
            "Get the rent agreement signed and finish tenant police verification. Many societies ask for it before giving you entry passes.",
          tips: [
            { id: "t6", text: "Take photos and a video of every room on move-in day and email them to the landlord. Saves your deposit later.", author: "Samyak", upvotes: 18 },
          ],
        },
        {
          id: "gas",
          title: "Cooking gas",
          summary:
            "Check whether your society has piped gas. If not, apply for an LPG connection with your address proof.",
          tips: [
            { id: "t7", text: "Ask the society office first. Piped gas means no cylinder chasing at all.", author: "Samyak", upvotes: 8 },
          ],
        },
        {
          id: "wifi",
          title: "Wi-Fi",
          summary:
            "Ask the society or neighbours which providers actually have lines in your building, then book installation on day 1.",
          tips: [
            { id: "t8", text: "Use mobile hotspot for the first few days. Installation can take longer than promised.", author: "Samyak", upvotes: 5 },
          ],
        },
        {
          id: "house-help",
          title: "House help and cook",
          summary:
            "Find help through the society guard or neighbours. Agree on timings, tasks and pay upfront.",
          tips: [
            { id: "t9", text: "The guard at the gate usually knows who is trusted and has free slots.", author: "Samyak", upvotes: 11 },
          ],
        },
      ],
    },
    {
      id: "month-1",
      title: "First month",
      when: "Days 8–30",
      steps: [
        {
          id: "address",
          title: "Update your address proof",
          summary:
            "Use your rent agreement to update your address where you need it, so bank, delivery and documents stop bouncing.",
          tips: [],
        },
        {
          id: "daily-life",
          title: "Set up daily life",
          summary:
            "Laundry, groceries, a nearby doctor and a pharmacy. Find them before you need them.",
          tips: [
            { id: "t10", text: "Save the nearest 24-hour pharmacy and hospital on your phone in week one.", author: "Samyak", upvotes: 10 },
          ],
        },
      ],
    },
  ],
};

const bangalore: City = {
  slug: "bangalore",
  name: "Bangalore",
  tagline: "Coming next.",
  status: "coming-soon",
  phases: [],
};

export const cities: City[] = [gurgaon, bangalore];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
