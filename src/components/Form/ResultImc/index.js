import React from 'react';
import { View, Text, Share, TouchableOpacity } from 'react-native';
import styles from './style/';

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu Imc Hoje foi:" + props.resultImc,
    });
  };

  return (
    <View style={styles.contextImc}>
      <View>
        {props.resultImc != null ? (
          <TouchableOpacity onPress={onShare}>
            <Text>Share</Text>
          </TouchableOpacity>
        ) : null }
        </View>
        <Text style={styles.information}>{props.messageResultImc}</Text>
        <Text style={styles.numberImc}>{props.resultImc}</Text>
      </View>

  );
}
