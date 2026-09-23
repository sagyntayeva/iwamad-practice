import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import type { Skill, LinkItem } from "./types";
import avatarImg from "./assets/pi.jpeg";

const skills: Skill[] = [
  { id: "s1", name: "Statistics" },
  { id: "s2", name: "Data mining" },
  { id: "s3", name: "Data / Python" },
  { id: "s4", name: "React" },
];

const links: LinkItem[] = [
  { id: "l1", label: "GitHub", url: "https://github.com/sagyntayeva/iwamad-practice" },
  { id: "l2", label: "Email", url: "mailto:ranidaasagyntaeva.com" },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Header />
      <ProfileCard
        name="Ranida"
        role="Student — IS, Accounting & Applied Data"
        avatarUrl={avatarImg}
        bio="KBTU student working across information systems, management and applied data tasks. Currently learning React and TypeScript for IWaMAD."
        skills={skills}
        links={links}
      />
      <Footer />
    </div>
  );
}

export default App;