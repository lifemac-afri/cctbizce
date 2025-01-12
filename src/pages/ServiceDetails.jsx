import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  return <div>ServiceDetails {serviceId}</div>;
};

export default ServiceDetails;
