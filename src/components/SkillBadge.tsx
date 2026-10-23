import type { Skill } from "../types";

type SkillBadgeProps = {
  skill: Skill;
};

function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-block rounded-full bg-sky-100 text-sky-700 text-sm px-3 py-1 mr-2 mb-2">
      {skill.name}
    </span>
  );
}

export default SkillBadge;
