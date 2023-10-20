import React from "react";
import { View, Text, Share, TouchableOpacity } from "react-native";
import styles from "./style/";

export default function ResultImc(props) {
  
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu Imc Hoje foi: " + props.resultImc,
    });
  };

  return (
    <View style={styles.contextImc}>
      <View style={styles.box}>
      <Text style={styles.information}>{props.messageResultImc}</Text>
      <Text style={styles.numberImc}>{props.resultImc}</Text>
        <TouchableOpacity onPress={onShare} style={styles.shared}>
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
