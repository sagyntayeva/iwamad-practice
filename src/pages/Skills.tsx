import SkillBadge from "../components/SkillBadge";
import { skills } from "../data";

function Skills() {
  return (
    <section className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-slate-800">Skills</h2>
      <div>
        {skills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
