function Section({ number, title, children }) {
  return (
    <div className="mb-8">
      <h2
        className="mb-3 text-xl font-semibold text-[#0A1553] sm:text-2xl"
        style={{ fontFamily: "Public Sans, sans-serif" }}
      >
        {number}. {title}
      </h2>
      <div className="space-y-3 text-[15px] leading-7 text-[#333]">{children}</div>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="list-disc space-y-1 pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

import { useEffect } from "react";

function TermsOfService({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Top bar */}
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 rounded-lg border border-[#0A1553] px-4 py-2 text-sm font-medium text-[#0A1553] transition-colors hover:bg-[#0A1553] hover:text-white"
          >
            ← Back to Home
          </button>
          <span className="text-sm text-gray-500">Terms of Service</span>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 border-b border-gray-200 pb-8">
          <h1
            className="text-3xl font-bold text-[#0A1553] sm:text-4xl"
            style={{ fontFamily: "Public Sans, sans-serif" }}
          >
            Terms of Service
          </h1>
          <p className="mt-2 text-[15px] text-gray-500">
            Safe Haven Housing Pty Ltd &mdash; ABN 65 690 664 405
          </p>
          <p className="mt-1 text-[15px] text-gray-500">
            Effective Date: 12 April 2026
          </p>
        </div>

        <Section number="1" title="Introduction">
          <p>
            Welcome to the Safe Haven Housing website (safehavenhousing.com.au). These Terms of Service govern your use
            of our website, services, and any enquiry or engagement with Safe Haven Housing Pty Ltd (ABN 65 690 664
            405). By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please
            do not use our website or services.
          </p>
          <p>
            Safe Haven Housing is not a Specialist Disability Accommodation (SDA) provider. We are an SDA property
            landlord that purchases and customises Super Robust and High Physical Support (HPS) classified homes for
            participants in the National Disability Insurance Scheme (NDIS).
          </p>
        </Section>

        <Section number="2" title="Our Services">
          <p>
            Safe Haven Housing provides customised SDA housing for NDIS participants classified under the Robust and
            High Physical Support categories. Our services include:
          </p>
          <BulletList
            items={[
              "Providing SDA-enrolled properties for lease to eligible NDIS participants.",
              "Customising homes to meet the individual needs and preferences of participants.",
              "Ongoing property management and maintenance support.",
              "Working with SIL providers, support coordinators, and families to ensure suitable housing outcomes.",
            ]}
          />
          <p>
            We do not provide Supported Independent Living (SIL) services, support coordination, or disability support
            services directly.
          </p>
        </Section>

        <Section number="3" title="Eligibility">
          <p>
            Our properties are available to NDIS participants who have SDA funding approved in their NDIS plan under
            the Robust or High Physical Support design categories. Enquiries are welcome from participants, their
            families or guardians, support coordinators, and SIL providers.
          </p>
        </Section>

        <Section number="4" title="Enquiries and Personal Information">
          <p>
            When you submit an enquiry through our website, you may be asked to provide personal information including
            your name, contact details, and details about your SDA funding status. This information is collected solely
            for the purpose of responding to your enquiry and assessing housing suitability.
          </p>
          <p>
            For full details on how we collect, use, and protect your personal information, please refer to our{" "}
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent("navigate", { detail: "privacy" }));
              }}
              className="text-[#0A1553] underline"
            >
              Privacy Policy
            </button>
            .
          </p>
        </Section>

        <Section number="5" title="Acceptable Use of Website">
          <p>
            You agree to use our website only for lawful purposes and in a manner consistent with these Terms. You must
            not:
          </p>
          <BulletList
            items={[
              "Use the website in any way that breaches any applicable Australian law or regulation.",
              "Use the website to transmit any unsolicited or unauthorised advertising or promotional material.",
              "Attempt to gain unauthorised access to any part of the website, server, or database connected to the website.",
              "Use any automated system to extract data from the website without our prior written consent.",
            ]}
          />
        </Section>

        <Section number="6" title="Intellectual Property">
          <p>
            All content on this website, including text, images, logos, graphics, videos, and design elements, is the
            property of Safe Haven Housing Pty Ltd or its licensors and is protected by Australian copyright and
            intellectual property laws. You may not reproduce, distribute, modify, or republish any content from this
            website without our prior written consent.
          </p>
        </Section>

        <Section number="7" title="Disclaimers">
          <p>
            While we make every effort to ensure the information on our website is accurate and up to date, Safe Haven
            Housing does not warrant or guarantee the completeness, reliability, or accuracy of any content on the
            website.
          </p>
          <p>
            Images and descriptions of properties on the website are indicative only and may not reflect the exact
            specifications of a particular property. All customisations are subject to feasibility, cost, and property
            constraints.
          </p>
          <p>
            Safe Haven Housing does not provide financial advice, legal advice, or NDIS planning guidance. We recommend
            consulting with a qualified professional for advice specific to your circumstances.
          </p>
        </Section>

        <Section number="8" title="Limitation of Liability">
          <p>
            To the maximum extent permitted by Australian law, Safe Haven Housing Pty Ltd, its directors, officers,
            employees, and agents will not be liable for any loss, damage, cost, or expense (whether direct, indirect,
            incidental, or consequential) arising from or in connection with:
          </p>
          <BulletList
            items={[
              "Your use of or inability to use our website.",
              "Any reliance on information provided on the website.",
              "Any interruption to or error in the website.",
            ]}
          />
          <p>
            Nothing in these Terms excludes or limits liability that cannot be excluded or limited under Australian
            Consumer Law.
          </p>
        </Section>

        <Section number="9" title="Third-Party Links">
          <p>
            Our website may contain links to third-party websites or services. These links are provided for convenience
            only and do not signify endorsement. Safe Haven Housing is not responsible for the content or practices of
            any linked third-party sites.
          </p>
        </Section>

        <Section number="10" title="Modifications to Terms">
          <p>
            We reserve the right to update or modify these Terms at any time without prior notice. Any changes will be
            effective immediately upon posting to this website. Your continued use of the website following any changes
            constitutes acceptance of the updated Terms. We recommend reviewing these Terms periodically to stay
            informed of any updates.
          </p>
        </Section>

        <Section number="11" title="Governing Law">
          <p>
            These Terms are governed by and construed in accordance with the laws of Queensland, Australia. You agree
            to submit to the exclusive jurisdiction of the courts of Queensland for the resolution of any disputes
            arising from these Terms.
          </p>
        </Section>

        <Section number="12" title="Contact Us">
          <p>
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <p className="font-semibold text-[#0A1553]">Safe Haven Housing Pty Ltd</p>
            <p>ABN: 65 690 664 405</p>
            <p>
              Phone:{" "}
              <a href="tel:1300111744" className="text-[#0A1553] underline">
                1300 111 744
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:admin@safehavenhousing.com.au"
                className="text-[#0A1553] underline"
              >
                admin@safehavenhousing.com.au
              </a>
            </p>
            <p>
              Website:{" "}
              <a
                href="https://safehavenhousing.com.au"
                className="text-[#0A1553] underline"
                target="_blank"
                rel="noreferrer"
              >
                safehavenhousing.com.au
              </a>
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default TermsOfService;
