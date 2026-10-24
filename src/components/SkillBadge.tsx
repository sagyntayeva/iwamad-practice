import type { Skill } from "../types";
import Tag from "./ui/Tag";

type SkillBadgeProps = {
  skill: Skill;
};

function SkillBadge({ skill }: SkillBadgeProps) {
  return <Tag>{skill.name}</Tag>;
}

export default SkillBadge;
