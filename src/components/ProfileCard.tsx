import type { ProfileCardProps } from "../types";
import Card from "./ui/Card";
import SkillBadge from "./SkillBadge";
import LikeButton from "./LikeButton";

function ProfileCard({ name, role, bio, avatarUrl, skills, links }: ProfileCardProps) {
  return (
    <Card className="max-w-md mx-auto w-full">
      <div className="flex items-center gap-4">
        {avatarUrl ? (
          <img src={avatarUrl} alt={`${name}'s avatar`} className="avatar" />
        ) : (
          <div className="avatar flex items-center justify-center font-semibold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h2 className="card-title">{name}</h2>
          <p className="text-muted">{role}</p>
        </div>
      </div>

      <p className="text-body leading-relaxed">{bio}</p>

      <div className="tag-list">
        {skills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className="text-link"
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>

      <LikeButton />
    </Card>
  );
}

export default ProfileCard;
