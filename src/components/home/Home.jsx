import Card from "../layout/Card";
import Header from "./Header";
import Resume from "./Resume";
import Divider from "../layout/Divider";
import Showcase from "./Showcase";

const Home = () => {
  return (
    <Card>
      <Header />
      <Divider />
      <Resume />
      <Divider />
      <Showcase />
    </Card>
  );
};

export default Home;
