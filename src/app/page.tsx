import { Button } from "@/components/ui/button";
import Logo from "@/components/kankunlogo";
import LandingPage from "./Landing-Page/page";

const Home = () => {
  return (
    <div className="bg-primary rounded-md p-10">
      <Logo />
      <LandingPage />
      <p className="text-primary-foreground">Editen este código</p>
      <Button variant="secondary">Test</Button>
    </div>
  );
};

export default Home;

