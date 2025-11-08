import { TeamMember } from "@/data/team-members";

interface Props {
  education: TeamMember["education"];
}

export default function EducationSection({ education }: Props) {
  if (!education || education.length === 0) return null;

  return (
    <div>
      <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">Formação</h3>
      <ul className="space-y-4">
        {education.map((edu, idx) => (
          <li
            key={idx}
            className="bg-[#2C2C2C] text-gray-100 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow"
          >
            <span className="text-[#C8F904] font-semibold">{edu.degree}</span> –{" "}
            <span>{edu.institution}</span> ({edu.period})
          </li>
        ))}
      </ul>
    </div>
  );
}
