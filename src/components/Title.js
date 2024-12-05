import { Helmet } from "react-helmet-async";

const Title = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | CAMP PING</title>
    </Helmet>
  );
};

export default Title;
