"use client";

import { useParams } from "next/navigation";
import { TeamMember, teamMembers } from "@/data/team-members";
import HeaderProfile from "@/components/landing-page/team/header";
import ExperienceSection from "@/components/landing-page/team/experience";
import EducationSection from "@/components/landing-page/team/education";
import TechsSection from "@/components/landing-page/team/techs";

export default function TeamProfilePage() {
  const params = useParams();
  const name = params?.name;

  if (!name)
    return (
      <p className="text-center mt-20 text-xl text-gray-300">
        Membro não encontrado.
      </p>
    );

  const nameParam = Array.isArray(name) ? name[0] : name;

  const member: TeamMember | undefined = teamMembers.find((m) =>
    m.route.includes(nameParam)
  );

  if (!member)
    return (
      <p className="text-center mt-20 text-xl text-gray-300">
        Membro não encontrado.
      </p>
    );

  return (
    <section className="bg-[#EDEDED] min-h-screen pt-40 py-16 px-6 md:px-16 space-y-16 text-gray-200">
      <HeaderProfile member={member} />
      <ExperienceSection experience={member.experience} />
      <EducationSection education={member.education} />
      <TechsSection member={member} />
    </section>
  );
}
