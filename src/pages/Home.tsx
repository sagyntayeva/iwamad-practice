import ProfileCard from "../components/ProfileCard";
import { skills, links } from "../data";
import avatarImg from "../assets/pi.jpeg";

function Home() {
  return (
    <ProfileCard
      name="Ranida"
      role="Student — IS, Accounting & Applied Data"
      avatarUrl={avatarImg}
      bio="KBTU student working across information systems, management and applied data tasks. Currently learning React and TypeScript for IWaMAD."
      skills={skills}
      links={links}
    />
  );
}

export default Home;
