import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Sugar Cube Studio.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader subtitle="Legal" title="Privacy Policy" />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <p className="text-muted leading-relaxed">
                Sugar Cube Studio LLC built the Nowruz app as an Ad Supported app.
                This SERVICE is provided by Sugar Cube Studio LLC at no cost and is
                intended for use as is.
              </p>

              <p className="text-muted leading-relaxed">
                This page is used to inform visitors regarding our policies with the
                collection, use, and disclosure of Personal Information if anyone
                decided to use our Service.
              </p>

              <p className="text-muted leading-relaxed">
                If you choose to use our Service, then you agree to the collection
                and use of information in relation to this policy. The Personal
                Information that we collect is used for providing and improving the
                Service. We will not use or share your information with anyone
                except as described in this Privacy Policy.
              </p>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Information Collection and Use
                </h2>
                <p className="text-muted leading-relaxed">
                  For a better experience, while using our Service, we may require you
                  to provide us with certain personally identifiable information. The 
                  information that we request will be retained by us and used as 
                  described in this privacy policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Log Data
                </h2>
                <p className="text-muted leading-relaxed">
                  We want to inform you that whenever you use our Service, in a case
                  of an error in the app we collect data and information (through
                  third-party products) on your phone called Log Data. This Log Data
                  may include information such as your device Internet Protocol (&quot;IP&quot;)
                  address, device name, operating system version, the configuration of
                  the app when utilizing our Service, the time and date of your use of
                  the Service, and other statistics.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Cookies
                </h2>
                <p className="text-muted leading-relaxed">
                  This Service does not use cookies explicitly. However, the
                  app may use third-party code and libraries that use cookies to
                  collect information and improve their services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Service Providers
                </h2>
                <p className="text-muted leading-relaxed">
                  We may employ third-party companies and individuals to facilitate 
                  our Service, provide the Service on our behalf, perform 
                  Service-related services, or assist us in analyzing how our 
                  Service is used.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Security
                </h2>
                <p className="text-muted leading-relaxed">
                  We value your trust in providing us your Personal Information, thus
                  we are striving to use commercially acceptable means of protecting
                  it. But remember that no method of transmission over the internet,
                  or method of electronic storage is 100% secure and reliable.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Children&apos;s Privacy
                </h2>
                <p className="text-muted leading-relaxed">
                  These Services do not address anyone under the age of 13. We do not
                  knowingly collect personally identifiable information from children
                  under 13 years of age.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  We may update our Privacy Policy from time to time. Thus, you are
                  advised to review this page periodically for any changes.
                </p>
                <p className="text-muted leading-relaxed">
                  This policy is effective as of 2022-03-08
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted leading-relaxed">
                  If you have any questions or suggestions about our Privacy Policy,
                  do not hesitate to contact us at{" "}
                  <a
                    href="mailto:info@sugarcubestudio.com"
                    className="text-primary hover:underline font-medium"
                  >
                    info@sugarcubestudio.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
