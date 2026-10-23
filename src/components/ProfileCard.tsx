import type { ProfileCardProps } from "../types";
import SkillBadge from "./SkillBadge";
import LikeButton from "./LikeButton";

function ProfileCard({ name, role, bio, avatarUrl, skills, links }: ProfileCardProps) {
  return (
    <section className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={`${name}'s avatar`}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-semibold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h2 className="text-lg font-semibold text-slate-800">{name}</h2>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>

      <p className="text-slate-600 text-sm leading-relaxed">{bio}</p>

      <div>
        {skills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className="text-sky-600 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>

      <LikeButton />
    </section>
  );
}

export default ProfileCard;
