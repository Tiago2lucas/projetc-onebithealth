import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style/";


export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessange, setErroMessange]=useState(null);

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

function verificationImc(){
if(imc == null){
setErroMessange("campo obrigatório*")

}
}

// Função para validar os campos de preenchimento do form, e também para auto calcular novamente ao precionar
// o botão apos termina de calcular.
  function validationImc() {
    if (weight !== null && height !== null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual:");
      setTextButton("Calcular Novamente");
      
      setErroMessange(null)

      return;
    } else {
      verificationImc()
      setImc(null);
      setTextButton("Calcular")
      setMessageImc("Preencha o peso e altura")

    }
  }

  return (
    <View style={styles.formContext} >
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessange}>{errorMessange}</Text>
        <TextInput style={styles.formInput}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessange}>{errorMessange}</Text>
        <TextInput style={styles.formInput}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 79.859"
          keyboardType="numeric"
        />
     <TouchableOpacity  style={styles.ButtonCalculator}  onPress={()=>{validationImc()}} >

      <Text style={styles.textButtonCalculator} >{textButton}</Text>
     </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
  }