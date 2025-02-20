import { Button } from "@/components/ui/button";
import Logo from "@/components/kankunlogo";

const Home = () => {
  return (
    <div className="bg-primary rounded-md p-10">
      <p className="text-primary-foreground">Editen este codigo</p>
      <Button variant="secondary">Test</Button>
      <Logo />
    </div>
  );
};
export default Home;
