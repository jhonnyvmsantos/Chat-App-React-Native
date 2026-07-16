import { useLocalSearchParams } from "expo-router";

// import { groups } from "@/mocks/messages";

export default function GroupProfilePage() {
  const { id } = useLocalSearchParams();

  // const group = groups.find(
  //   (g) => g.id === id
  // );

  // if (!group) {
  //   return null;
  // }

  return (
    // <ProfileScreen
    //   title={group.name}
    //   subtitle={group.description || ""}
    // />
    <></>
  );
}