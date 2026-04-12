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

function PrivacyPolicy({ onBack }) {
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
          <span className="text-sm text-gray-500">Privacy Policy</span>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 border-b border-gray-200 pb-8">
          <h1
            className="text-3xl font-bold text-[#0A1553] sm:text-4xl"
            style={{ fontFamily: "Public Sans, sans-serif" }}
          >
            Privacy Policy
          </h1>
          <p className="mt-2 text-[15px] text-gray-500">
            Safe Haven Housing Pty Ltd &mdash; ABN 65 690 664 405
          </p>
          <p className="mt-1 text-[15px] text-gray-500">
            Effective Date: 12 April 2026
          </p>
        </div>

        <Section number="1" title="Overview">
          <p>
            Safe Haven Housing Pty Ltd (ABN 65 690 664 405) is committed to protecting the privacy of your personal
            information. This Privacy Policy sets out how we collect, use, store, disclose, and protect personal
            information in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles
            (APPs).
          </p>
          <p>
            Safe Haven Housing is an SDA property landlord that customises Super Robust and High Physical Support homes
            for NDIS participants. We are not an SDA provider and do not deliver disability support services directly.
          </p>
        </Section>

        <Section number="2" title="Personal Information We Collect">
          <p>We may collect the following types of personal information:</p>
          <BulletList
            items={[
              "Full name",
              "Phone number and mobile number",
              "Email address",
              "Residential location or preferred location",
              "Your role in relation to the enquiry (participant, support coordinator, family member or guardian, SIL provider)",
              "Whether you have SDA funding approved in your NDIS plan",
              "Details about your disability support needs relevant to housing customisation",
              "Any other information you voluntarily provide through our enquiry form, email, phone, or in-person communication",
            ]}
          />
          <p>
            We do not intentionally collect sensitive information (such as health information or disability details)
            unless it is directly relevant to assessing your housing needs and you have provided consent.
          </p>
        </Section>

        <Section number="3" title="How We Collect Personal Information">
          <p>We collect personal information through:</p>
          <BulletList
            items={[
              "The enquiry form on our website (safehavenhousing.com.au)",
              "Email correspondence to admin@safehavenhousing.com.au",
              "Phone calls to 1300 111 744",
              "In-person meetings or property inspections",
              "Communication via support coordinators, SIL providers, or family members acting on your behalf",
            ]}
          />
          <p>
            We will only collect personal information by lawful and fair means. Where reasonably practicable, we will
            collect information directly from you.
          </p>
        </Section>

        <Section number="4" title="Purpose of Collection">
          <p>We collect and use your personal information for the following purposes:</p>
          <BulletList
            items={[
              "Responding to your enquiry about SDA housing",
              "Assessing your suitability and eligibility for our properties",
              "Customising a property to meet your specific needs and preferences",
              "Communicating with you, your support coordinator, SIL provider, or family members about housing options",
              "Managing tenancy arrangements and ongoing property management",
              "Complying with our obligations under the NDIS framework and relevant legislation",
              "Improving our services and website",
            ]}
          />
          <p>
            We will not use your personal information for purposes unrelated to our services without your consent.
          </p>
        </Section>

        <Section number="5" title="Disclosure of Personal Information">
          <p>We may disclose your personal information to:</p>
          <BulletList
            items={[
              "SIL providers involved in your support arrangements",
              "Support coordinators or plan managers acting on your behalf",
              "Property management companies engaged to maintain our properties",
              "Tradespeople or contractors performing customisation work on a property",
              "Government agencies or the NDIS Quality and Safeguards Commission where required by law",
              "Professional advisors such as accountants or lawyers, where necessary",
            ]}
          />
          <p>
            We will not sell, rent, or trade your personal information to any third party for marketing purposes. We do
            not disclose personal information to overseas recipients unless required and with your consent.
          </p>
        </Section>

        <Section number="6" title="Storage and Security">
          <p>
            We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorised
            access, modification, or disclosure. Security measures include:
          </p>
          <BulletList
            items={[
              "Storing electronic records in secure, password-protected systems",
              "Restricting access to personal information to authorised personnel only",
              "Using encrypted connections (SSL/TLS) on our website for data transmission",
              "Disposing of personal information securely when it is no longer required",
            ]}
          />
          <p>
            While we take all reasonable precautions, no data transmission over the internet or electronic storage
            method is completely secure. We cannot guarantee the absolute security of your information.
          </p>
        </Section>

        <Section number="7" title="Website, Cookies, and Analytics">
          <p>
            Our website may use cookies and analytics tools (such as Google Analytics) to collect non-personally
            identifiable information including:
          </p>
          <BulletList
            items={[
              "Your IP address",
              "Browser type and operating system",
              "Pages visited and time spent on the website",
              "Referring website or source",
            ]}
          />
          <p>
            This information is used to improve our website experience and understand how visitors interact with our
            content. You can disable cookies through your browser settings, though this may affect website
            functionality.
          </p>
        </Section>

        <Section number="8" title="Access and Correction">
          <p>
            You have the right to request access to the personal information we hold about you. You also have the right
            to request correction of any information that is inaccurate, incomplete, or out of date.
          </p>
          <p>
            To make a request, please contact us using the details in Section 12. We will respond to your request
            within 30 days. In certain circumstances permitted under the Privacy Act, we may refuse access and will
            provide you with written reasons if this occurs.
          </p>
        </Section>

        <Section number="9" title="Complaints">
          <p>
            If you believe we have breached the Australian Privacy Principles or mishandled your personal information,
            you may lodge a complaint with us. Please put your complaint in writing and send it to{" "}
            <a
              href="mailto:admin@safehavenhousing.com.au"
              className="text-[#0A1553] underline"
            >
              admin@safehavenhousing.com.au
            </a>
            .
          </p>
          <p>
            We will acknowledge your complaint within 7 business days and aim to resolve it within 30 business days. If
            you are not satisfied with our response, you may escalate your complaint to the Office of the Australian
            Information Commissioner (OAIC) at{" "}
            <a
              href="https://www.oaic.gov.au"
              className="text-[#0A1553] underline"
              target="_blank"
              rel="noreferrer"
            >
              oaic.gov.au
            </a>
            .
          </p>
        </Section>

        <Section number="10" title="NDIS-Specific Obligations">
          <p>
            As a business operating within the NDIS ecosystem, we are mindful of the additional privacy obligations that
            apply when handling information related to NDIS participants. We comply with:
          </p>
          <BulletList
            items={[
              "The National Disability Insurance Scheme Act 2013 (Cth)",
              "The NDIS (Provider Registration and Practice Standards) Rules",
              "The NDIS Code of Conduct",
            ]}
          />
          <p>
            We handle all participant information with the care and sensitivity it requires, and we support the rights
            of participants to make decisions about their personal information.
          </p>
        </Section>

        <Section number="11" title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal
            obligations. Any updates will be posted on our website with a revised effective date. We encourage you to
            review this policy periodically.
          </p>
        </Section>

        <Section number="12" title="Contact Us">
          <p>
            If you have any questions about this Privacy Policy or wish to make a request regarding your personal
            information, please contact us:
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

export default PrivacyPolicy;
