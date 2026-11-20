// The hero shows real checkup notes on the Spring Lake Farm HOA site, a
// volunteer redesign in progress. Notes come from the findings in
// content/previews/spring-lake-farm.json on the preview/spring-lake-farm branch.
//
// Keep `approved` false until the HOA board agrees to the site being shown
// as an example. While it is false the hero keeps the generic illustration.
export const heroCheckup = {
  approved: false,
  site: "springlakefarm.org",
  // Both screenshots are 1440 × 1008 so the switch doesn't shift the layout.
  image: {
    src: "/images/work/spring-lake-farm-before.jpg",
    width: 1440,
    height: 1008,
    alt: "The Spring Lake Farm HOA homepage today: a large photo of the entrance sign, a row of menu links, and a long column of text below",
  },
  after: {
    src: "/images/work/spring-lake-farm-after.jpg",
    alt: "The redesign proposal for the Spring Lake Farm HOA homepage: a headline with a neighborhood photo, a row of four common tasks, and a news section",
  },
  caption: "A volunteer redesign of my HOA's website, in progress",
  // Each fix answers the note with the same number.
  fixes: [
    "Moves the site to a secure (https) address",
    "Clear sections in place of one long column",
    "A row of common tasks: payments, forms, home projects, contacting the board",
    "News and meeting records in one place, kept current",
  ],
  // Boxes are percentages of the screenshot. Note 1 marks the browser bar.
  notes: [
    {
      text: "Browsers mark it “Not Secure”, on a site that links to dues payments",
    },
    {
      text: "The homepage is one long column of text",
      box: { left: 52, top: 68, width: 32, height: 30 },
    },
    {
      text: "Architectural review and pavilion reservations aren't in the menu at all",
      box: { left: 22, top: 17, width: 54, height: 6.5 },
    },
    {
      text: "“Upcoming events” still points to the 2024 annual meeting",
      box: { left: 15, top: 74.6, width: 23.5, height: 11.4 },
    },
  ],
} as const;
