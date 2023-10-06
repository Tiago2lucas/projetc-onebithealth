import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //estilização do contexto do Form
  formContext: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    marginTop: 30,
  },

  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },
  formLabel: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20,
  },
  formInput: {
    width: "85%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 10,
    paddingLeft: 10,
  },
  ButtonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#ff0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },

  textButtonCalculator: {
    fontSize: 20,
    color: "#ffffff",
  },

  errorMessange:{
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft:20,

  }
});

export default styles;
