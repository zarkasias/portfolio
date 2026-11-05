import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Chambers Consulting",
  description:
    "How Chambers Consulting handles contact form messages, cookies, and analytics data.",
};

const heading = "mt-10 mb-3 font-heading text-2xl font-semibold text-foreground";
const list = "mt-3 list-disc space-y-2 pl-5";
const link =
  "font-medium text-primary underline underline-offset-4 hover:text-foreground";

export default function PrivacyPolicy() {
  return (
    <PageLayout className="pt-28">
      <article className="mx-auto max-w-[70ch] text-lg leading-relaxed">
        <h1 className="font-heading text-4xl font-semibold md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-muted-foreground">
          Last updated: November 5, 2026
        </p>

        <p className="mt-8">
          Chambers Consulting is run by David Chambers in Northern Virginia.
          This policy explains what information this website collects, how it's
          used, and the choices you have. In this policy, "I" and "me" refer to
          Chambers Consulting.
        </p>

        <h2 className={heading}>Information you send me</h2>
        <p>
          If you use the contact form, it sends me your name, email address, the
          website address if you provide one, and your message. If you email me
          directly, I receive your email address and whatever you include.
        </p>
        <p className="mt-3">
          I use this information to reply to you and to discuss any work you've
          asked about. I keep messages for as long as I need them for that
          purpose and for my business records. Please don't send passwords or
          other sensitive information through the form.
        </p>

        <h2 className={heading}>Information collected automatically</h2>
        <p>
          When you visit this site, your browser shares technical information
          such as your IP address, browser type, device type, and the pages you
          request. My hosting provider may record this in server logs to run and
          protect the site.
        </p>

        <h2 className={heading}>Cookies and analytics</h2>
        <p>
          This site uses Google Analytics to show me how visitors use the site.
          When you first visit, a banner lets you choose which optional cookies
          to allow.
        </p>
        <ul className={list}>
          <li>
            <strong>Your cookie choice:</strong> a cookie named{" "}
            <code>cookie_consent</code> remembers your choice for one year. It
            doesn't identify you.
          </li>
          <li>
            <strong>Analytics cookies:</strong> Google Analytics cookies, such
            as <code>_ga</code>, are set only if you accept them.
          </li>
          <li>
            <strong>Preference cookies:</strong> this site doesn't currently
            use these for any feature of its own. The banner's preference
            setting is passed to Google as part of your consent choice.
          </li>
        </ul>
        <p className="mt-3">
          If you don't accept analytics cookies, Google Analytics may still
          receive limited visit data without cookies, such as the page visited
          and general browser and device information.
        </p>
        <p className="mt-3">
          This site doesn't use advertising cookies. To change your choice,
          clear this site's cookies in your browser, and the banner will appear
          again on your next visit.
        </p>

        <h2 className={heading}>Who else handles this information</h2>
        <p>
          I don't sell your personal information. I use these service providers
          to run the site:
        </p>
        <ul className={list}>
          <li>
            <strong>Vercel</strong> hosts the website.
          </li>
          <li>
            <strong>Resend</strong> delivers contact form messages to my email.
          </li>
          <li>
            <strong>Google</strong> provides Google Analytics.
          </li>
        </ul>
        <p className="mt-3">
          These providers may process information in the United States or other
          countries. I may also share information if the law requires it, or to
          protect my rights or the security of this site.
        </p>

        <h2 className={heading}>Your choices</h2>
        <p>
          You can ask me what information I hold about you from your messages,
          or ask me to correct or delete it, by emailing me. Depending on where
          you live, the law may give you additional privacy rights. I'll respond
          to requests as the applicable law requires.
        </p>

        <h2 className={heading}>Security</h2>
        <p>
          The site uses encrypted HTTPS connections, and I take reasonable steps
          to protect the information I receive. No website or email service can
          guarantee complete security.
        </p>

        <h2 className={heading}>Children</h2>
        <p>
          This site is intended for businesses and isn't directed at children
          under 13. If you believe a child has sent me personal information,
          please contact me and I'll delete it.
        </p>

        <h2 className={heading}>Changes to this policy</h2>
        <p>
          If I change this policy, I'll post the new version here and update the
          date at the top.
        </p>

        <h2 className={heading}>Contact</h2>
        <p>
          Questions or requests can go to{" "}
          <a href="mailto:david@chambers-consulting.dev" className={link}>
            david@chambers-consulting.dev
          </a>
          .
        </p>
      </article>
    </PageLayout>
  );
}
