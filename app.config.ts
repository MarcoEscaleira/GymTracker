import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Gym Tracker",
  privacy: "public",
  slug: "gym-tracker",
});
