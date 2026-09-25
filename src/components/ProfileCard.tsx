import { useState } from "react";
import type { ProfileCardProps } from "../types";
import SkillBadge from "./SkillBadge";

function ProfileCard({ name, role, bio, avatarUrl, skills, links }: ProfileCardProps) {
  // useState gives us the current value and the only function allowed to change it.
  const [likes, setLikes] = useState(0);

  return (
    <main className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
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

      {/* Never change state directly — always hand the setter a new value. */}
      <button
        onClick={() => setLikes(likes + 1)}
        className="self-start mt-2 rounded-lg bg-sky-600 text-white px-4 py-2 text-sm hover:bg-sky-700 transition-colors"
      >
        ♥ {likes}
      </button>
    </main>
  );
}

export default ProfileCard;
