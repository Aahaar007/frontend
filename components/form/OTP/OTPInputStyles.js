import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";
export default StyleSheet.create({
  root: { padding: 15, minHeight: 150 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "space-around",
  },
  cellRoot: {
    width: 45,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    // backgroundColor: theme.colors.dimGray,
  },
  cellText: {
    color: "white",
    fontSize: 36,
    textAlign: "center",
  },

  focusCell: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 2,
    // backgroundColor: "white",
  },
});
