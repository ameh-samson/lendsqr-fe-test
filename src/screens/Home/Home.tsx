import { useDashboardContext } from "@/context/DashboardContext";

const Home = () => {
  const { test, setTest } = useDashboardContext();

  return (
    <div>
      <h1 className="avenir-regular">Hello {test}</h1>
    </div>
  );
};

export default Home;
