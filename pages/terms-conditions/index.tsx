import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { MainWrapper } from "../../styles/styledComponents/terms.style";

const TermsConditions = () => {
  return (
    <div>
      <Head>
        <title>Terms & Conditions</title>
      </Head>
      <Header />
      <MainWrapper>
        <div className="container-fluid">
          <h2 className="text-left fw-bold">Terms Conditions</h2>
          <h4 className="text-left m-0 fw-semibold">
            Accepting this Agreement
          </h4>
          <p>
            By using the Website, you agree to: comply with and be bound by the
            terms and conditions of this Agreement.Pay the amounts in relation
            to the transactions you perform on this site. If you do not agree to
            these terms, you have no right to obtain information, make purchases
            or otherwise continue using the Website.These terms are binding on
            any use of the Website and apply from the time you first access the
            Website.t is your obligation to ensure that you have read,
            understood and agree to the most recent terms available on the
            Website. Any terms of this Agreement at the time you conclude the
            purchase of the barcodes is the version which will apply to that
            transaction.
          </p>
          <h4 className="text-left m-0 fw-semibold">Contacting Us</h4>
          <p>
            Please email us at{" "}
            <a
              href="mailto:info@Bdata.ca"
              target="_self"
              title="info@Bdata.ca"
              className="email-link"
            >
              <span>info@Bdata.ca</span>
            </a>{" "}
            if you have any questions relating to these terms and conditions.
          </p>

          <h4 className="text-left m-0 fw-semibold">Definitions</h4>
          <p>
            Sunless the terms and conditions of the Agreement explicitly state
            otherwise, expressions used in the Agreement have the following
            meanings: Agreement means this document and any additional policies
            available on the Website.
          </p>
          <h4 className="text-left m-0 fw-semibold">
            Intellectual Property Right{" "}
          </h4>
          <p>
            Means all present and future rights conferred by statute, common law
            or equity (and all moral rights) in or in relation to business
            names, circuit layouts, computer software, confidential information,
            copyright, designs, domain names, formulas, inventions, knowhow,
            patents, plant varieties, recipes, trade marks, and other results of
            intellectual activity in the industrial, commercial, scientific,
            literary or artistic field, the benefit of any application to
            register such a right and the benefit of any renewal or extension of
            such a right.
          </p>
          <h4 className="text-left m-0 fw-semibold">Privacy Law</h4>
          <p className="m-0">Means:</p>
          <p className="m-0">(1.a) the Privacy Act 1988 (Cth);</p>
          <p className="m-0">
            (1.b) the European Union General Data Protection Regulation (GDPR);
            and
          </p>
          <p className="m-0">
            (1.a) any code registered under the Privacy Act, the GDPR or the Act
            on the Protection of Personal Information (APPI).
          </p>
          <h2 className="text-left fw-bold">Use of the Website</h2>
          <h4 className="text-left m-0 fw-semibold">
            Information Purposes Only
          </h4>
          <p className="m-0">
            (1.a) The information contained on the Website is based on the most
            up to date information available to us and is to be used or relied
            on at your own risk. We make no warranty or representations as to
            the accuracy of the information.
          </p>
          <p className="m-0">
            You should make further enquiries before determining which barcodes
            are suitable for your purposes.
          </p>
          <p className="m-0">
            We reserve the right to make changes to the information contained on
            the Website without prior notice.
          </p>
          <h4 className="text-left m-0 fw-semibold">Third party links</h4>
          <p>
            The Website may contain hyperlinks and other pointers to websites
            operated by third parties. We do not control these third party
            websites and are therefore not responsible for the content of any
            third party website or any hyperlink contained in a third party
            website. We provide the hyperlinks for your convenience only and do
            not indicate, expressly or implicitly, any endorsement, sponsorship
            or approval by us of a third party website or the products or
            services offered at a third party website. Your visit to a third
            party website is entirely at your own risk.
          </p>
          <h4 className="text-left m-0 fw-semibold">
            Website not locally available{" "}
          </h4>
          <p>
            You acknowledge and agree that the Website will only be accessible
            using the Internet (or other connection to our third party servers),
            and will not be available “locally” from your own servers.
          </p>
          <h4 className="text-left m-0 fw-semibold">
            Parts of the Website controlled by third parties
          </h4>
          <p>
            You acknowledge and agree that the Website is operated from servers
            owned and controlled by a third party. As such, you acknowledge that
            certain functions are out of our control, including data storage and
            backup.
          </p>
          <h4 className="text-left m-0 fw-semibold">
            We can Change the Website at Discretion
          </h4>
          <p>
            We reserve the right to upgrade, maintain, tune, backup, amend, add
            to or remove items from, redesign, improve or otherwise alter the
            Website at our sole and absolute discretion.
          </p>
          <h4 className="text-left m-0 fw-semibold">
            Unintentional inaccessibility
          </h4>
          <p>
            From time to time, without notice, access to all or part of the
            Website may be disrupted or limited. During such an interruption, we
            will use reasonable endeavours to restore access to the Website as
            soon as practicable.
          </p>
          <h4 className="text-left m-0 fw-semibold">
            Intentional inaccessibility
          </h4>
          <p>
            We reserve the right to make some, or all, of the Website
            inaccessible from time to time as is required for upgrades,
            maintenance and updates.
          </p>
          <h4 className="text-left m-0 fw-semibold">Errors</h4>
          <p className="m-0">
            (1.a) You acknowledge and agree that there may be technical or
            administrative errors in the information on the Website, including
            but not limited to errors with respect to product description,
            pricing and availability.
          </p>
          <p className="m-0">
            We reserve the right to do any of the following, at our absolute
            discretion, without notice.
          </p>
          <p className="m-0">correct any errors in the Website; or</p>
          <p className="m-0">update the Website.</p>
          <h4 className="text-left mb-0 fw-semibold">
            Security Responsibilities
          </h4>
          <p className="m-0">
            We will take reasonable steps to ensure that the Website is secure
            from unauthorised access consistent with generally accepted industry
            standards in our industry including SSL encryption in passing
            payment details to the payment gateway provider.
          </p>
        </div>
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default TermsConditions;
