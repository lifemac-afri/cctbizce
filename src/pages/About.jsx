import AboutUs from "../components/about/AboutUs";
import SEO from "../components/seo/SEO";

const About = () => {
  return (
    <div>
      <SEO
        title="About Us | CCT Business Consult & Events"
        description="Learn about CCTBizCE, our mission, vision, and commitment to delivering professional and ethical consultancy solutions."
        name="CCT Business Consult & Events"
        type="website"
      />

      <AboutUs />
    </div>
  );
};

export default About;
