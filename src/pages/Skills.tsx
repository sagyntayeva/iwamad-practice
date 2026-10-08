import Card from "../components/ui/Card";
import SkillBadge from "../components/SkillBadge";
import { skills } from "../data";

function Skills() {
  return (
    <Card className="max-w-md mx-auto w-full">
      <h2 className="page-title">Skills</h2>
      <div className="tag-list">
        {skills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </Card>
  );
}

export default Skills;
