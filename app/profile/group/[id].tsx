import { useLocalSearchParams } from "expo-router";

import { groupChats } from "@/mocks/groupChats";
import ProfileScreen from "@/screens/ProfileScreen";

export default function GroupProfilePage() {
  const { id } = useLocalSearchParams();

  const group = groupChats.find(
    (g) => g.id === id
  );

  if (!group) {
    return null;
  }

  return (
    <ProfileScreen
      title={group.name}
      subtitle={group.description || ""}
    />
  );
}