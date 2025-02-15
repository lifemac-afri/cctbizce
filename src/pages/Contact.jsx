import ContactPageComponent from "../components/contact/ContactPageComponent";
import SEO from "../components/seo/SEO";

const Contact = () => {
  return (
    <div>
      <SEO
        title="Contact Us | CCT Business Consult & Events"
        description="Reach out to CCTBizCE for inquiries, consultations, and service requests. Your success starts here!"
        name="CCT Business Consult & Events"
        type="website"
      />

      <ContactPageComponent />
    </div>
  );
};

export default Contact;
