import {
  ScrollView,
  StyleSheet,
} from "react-native";

import ProfileActionButton from "@/components/profile/ProfileActionButton";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileInfo from "@/components/profile/ProfileInfo";

interface Props {
  title: string;
  subtitle: string;
}

export default function ProfileScreen({
  title,
  subtitle,
}: Props) {
  return (
    <ScrollView
      style={styles.container}
    >
      <ProfileHeader
        name={title}
      />

      <ProfileInfo
        title="Descrição"
        value={subtitle}
      />

      <ProfileActionButton
        title="Enviar mensagem"
        onPress={() => {}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },
});