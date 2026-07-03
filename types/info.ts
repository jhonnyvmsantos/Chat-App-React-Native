export interface Info {
  id: string;
  type: "private" | "group";
  name: string;
  avatar?: string;
  members?: number;
}
