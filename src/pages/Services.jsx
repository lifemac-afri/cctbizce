import SEO from "../components/seo/SEO";
import ServicesPage from "../components/services/ServicesPage";

const Services = () => {
  return (
    <div>
      <SEO
        title="Our Services | Business Consultancy, Events, Digital Media"
        description="Explore a wide range of services including business registration, document processing, corporate training, and digital media management."
        name="CCT Business Consult & Events"
        type="website"
      />

      <ServicesPage />
    </div>
  );
};

export default Services;
