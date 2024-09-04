"use client";

import { useOrganizationList } from "@clerk/nextjs";

export const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!userMemberships.data?.length) {
    console.log("No organizations found.");
    return null;
  }

  console.log("Organizations found:", userMemberships.data);

  return (
    <ul className="space-y-4 ">
      {userMemberships.data?.map((membership) => (
        <p key={membership.organization.id} className="text-white">
          {membership.organization.name}
        </p>
      ))}
    </ul>
  );
};
