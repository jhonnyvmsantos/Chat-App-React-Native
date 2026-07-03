import { useLocalSearchParams } from "expo-router";

import { users } from "@/mocks/users";
import ProfileScreen from "@/screens/ProfileScreen";

export default function UserProfilePage() {
  const { id } = useLocalSearchParams();

  const user = users.find(
    (u) => u.id === id
  );

  if (!user) {
    return null;
  }

  return (
    <ProfileScreen
      title={user.name}
      subtitle={
        user.isOnline
          ? "Online"
          : user.lastSeen ?? "Offline"
      }
    />
  );
}