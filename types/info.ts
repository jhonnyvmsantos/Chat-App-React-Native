export interface Info {
  id: string;
  type: "private" | "group";
  name: string;
  description?: string;
  avatar?: string;
  members?: number;
}
