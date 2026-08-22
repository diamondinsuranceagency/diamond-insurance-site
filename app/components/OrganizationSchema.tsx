export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Diamond Insurance Agency",
    url: "https://YOURDOMAIN.com",
    logo: "https://YOURDOMAIN.com/logo.png",
    image: "https://YOURDOMAIN.com/logo.png",

    telephone: "+1-210-560-9823",

    email: "agent@diamondconsultingadvisory.com",

    areaServed: [
      "Florida",
      "Texas",
      "Virginia",
      "Maryland",
      "North Carolina",
      "Ohio",
    ],

    serviceType: [
      "Whole Life Insurance",
      "Term Life Insurance",
      "Living Benefits",
      "Supplemental Insurance",
    ],

    founder: {
      "@type": "Person",
      name: "John Williams",
    },

    sameAs: [],

    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}