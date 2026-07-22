import { useLocalSearchParams } from "expo-router";


export default function UserProfilePage() {
  const { id } = useLocalSearchParams();

  return (
    // <ProfileScreen
    //   title={user.name}
    //   subtitle={
    //     user.isOnline
    //       ? "Online"
    //       : user.lastSeen ?? "Offline"
    //   }
    // />
    <></>
  );
}