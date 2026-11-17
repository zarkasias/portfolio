export type Concept = {
  /** Stable id, also used for image file names. */
  slug: string;
  business: string;
  type: string;
  town: string;
  /** One or two sentences on what changed and why. */
  summary: string;
  /** Screenshots in /public/images/concepts/, 1600x1000 recommended. */
  before: string;
  after: string;
  /** Only list a concept once the owner has agreed, or with name and logo removed. */
  ownerApproved: boolean;
};

// Concept redesigns of real local sites. The section stays hidden until at
// least one approved entry exists.
export const concepts: Concept[] = [];
