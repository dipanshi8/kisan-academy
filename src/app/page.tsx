import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Faculty from "@/components/Faculty";
import Results from "@/components/Results";
import FreeResources from "@/components/FreeResources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Kisan Academy",
    description:
      "Coaching institute for TGT Geography, PGT Geography, and competitive exam preparation.",
    url: "https://www.kisanacademy.in",
    telephone: "+91-95699-54032",
    email: "iicsallahabaad@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Clock Tower, Rajpur Road",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Courses />
        <WhyChooseUs />
        <Faculty />
        <Results />
        <FreeResources />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
