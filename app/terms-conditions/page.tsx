import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "Terms of Use | Chambers Consulting",
  description: "The terms for using the Chambers Consulting website.",
};

const heading = "mt-10 mb-3 font-heading text-2xl font-semibold text-foreground";
const link =
  "font-medium text-primary underline underline-offset-4 hover:text-foreground";

export default function TermsOfUse() {
  return (
    <PageLayout className="pt-28">
      <article className="mx-auto max-w-[70ch] text-lg leading-relaxed">
        <h1 className="font-heading text-4xl font-semibold md:text-5xl">
          Terms of Use
        </h1>
        <p className="mt-3 text-muted-foreground">
          Last updated: November 5, 2026
        </p>

        <p className="mt-8">
          These terms apply to your use of this website, which is run by David
          Chambers in Northern Virginia as Chambers Consulting. By using the
          site, you agree to these terms. If you don&apos;t agree, please don&apos;t use
          it. In these terms, &quot;I&quot; and &quot;me&quot; refer to Chambers Consulting.
        </p>

        <h2 className={heading}>Website information</h2>
        <p>
          The content on this site is general information about my services.
          It isn&apos;t a quote, a guarantee of results, or professional advice for
          your specific situation. I try to keep it accurate, but it may not
          always be complete or up to date.
        </p>

        <h2 className={heading}>Project work</h2>
        <p>
          These terms don&apos;t create a client relationship. Sending me a message
          doesn&apos;t commit either of us to a project. Any work I do for you will
          be covered by a separate written agreement, and that agreement will
          control the work.
        </p>

        <h2 className={heading}>Using this site</h2>
        <p>
          You&apos;re welcome to view and share pages from this site. Please don&apos;t
          misuse it, including by trying to disrupt it, gain unauthorized
          access, send spam through the contact form, or use it to break the
          law.
        </p>

        <h2 className={heading}>Ownership</h2>
        <p>
          The site&apos;s text, design, and logo belong to Chambers Consulting or
          its licensors. Please don&apos;t copy or reuse them commercially without
          my written permission.
        </p>

        <h2 className={heading}>What you send me</h2>
        <p>
          You keep ownership of anything you send me. You allow me to use it to
          respond to you and to discuss the work you&apos;ve asked about. The{" "}
          <a href="/privacy-policy" className={link}>
            Privacy Policy
          </a>{" "}
          explains how I handle that information.
        </p>

        <h2 className={heading}>Links to other sites</h2>
        <p>
          This site may link to other websites, such as LinkedIn. I don&apos;t
          control those sites and am not responsible for their content or
          practices.
        </p>

        <h2 className={heading}>No warranties</h2>
        <p>
          This site is provided &quot;as is&quot; and &quot;as available.&quot; To the extent the
          law allows, I disclaim all warranties about the site, including any
          implied warranties of merchantability, fitness for a particular
          purpose, and non-infringement.
        </p>

        <h2 className={heading}>Limitation of liability</h2>
        <p>
          To the extent the law allows, Chambers Consulting isn&apos;t liable for
          indirect, incidental, special, or consequential damages arising from
          your use of this site.
        </p>

        <h2 className={heading}>Governing law</h2>
        <p>
          These terms are governed by the laws of the Commonwealth of Virginia,
          without regard to its conflict of law rules.
        </p>

        <h2 className={heading}>Changes to these terms</h2>
        <p>
          If I change these terms, I&apos;ll post the new version here and update
          the date at the top. The changes apply from that date.
        </p>

        <h2 className={heading}>Contact</h2>
        <p>
          Questions can go to{" "}
          <a href="mailto:david@chambers-consulting.dev" className={link}>
            david@chambers-consulting.dev
          </a>
          .
        </p>
      </article>
    </PageLayout>
  );
}
