import { ParamListBase } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";

export interface RouteNavigation {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}
