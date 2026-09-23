export type Skill = {
  id: string;
  name: string;
};

export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string; // the ? means optional, per the lecture
  skills: Skill[];
  links: LinkItem[];
};
