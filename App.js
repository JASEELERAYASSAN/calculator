import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const App = () => {
  const [resultTexts, setResultText] = useState('')
  const [calcText, setCalcText] = useState('')

  const onClickButton = (text) => {
    console.log(text)
    if (text == '=') {
      return calculation()
    }
    setResultText(resultTexts + text)
  }

  const calculation = () => {
    setCalcText(eval(resultTexts))
  }

  const onClickOperation = (text) => {

    let operations = ['DEL', 'C', '+', '-', '*', '/']

    if (text == 'C') {
      setResultText('')
      setCalcText('')
      return;
    }
    if (text == 'DEL') {
      return setResultText(resultTexts.toString().substring(0, resultTexts.length - 1))
    }
    console.log(text)

    if (operations.includes(resultTexts.toString().split('').pop())) return;

    setResultText(resultTexts + text)
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./src/assets/background.jpg')}
        resizeMode='center'
        style={styles.image}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{calcText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{resultTexts}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => { onClickOperation('C') }} >
                <Text style={styles.number2}>C</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { onClickOperation('DEL') }}>
                <Text style={styles.number2}>DEL</Text>
              </TouchableOpacity>
              <View style={{ justifyContent: 'center', }}>
                <TouchableOpacity
                  onPress={() => { onClickOperation('%') }}>
                  <Text style={styles.number3}>%</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => { onClickOperation('/') }}>
                <Text style={styles.number4}>/</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => { onClickButton(7) }}>
                <Text style={styles.number}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { onClickButton(8) }}>
                <Text style={styles.number}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { onClickButton(9) }}>
                <Text style={styles.number}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { onClickOperation('*') }}>
                <Text style={styles.number5}>x</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => { onClickButton(4) }}>
                <Text style={styles.number}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { onClickButton(5) }}>
                <Text style={styles.number}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { onClickButton(6) }}>
                <Text style={styles.number}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { onClickOperation('-') }}>
                <Text style={styles.number5}>–</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => { onClickButton(1) }}>
                <Text style={styles.number}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { onClickButton(2) }}>
                <Text style={styles.number}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { onClickButton(3) }}>
                <Text style={styles.number}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { onClickOperation('+') }}>
                <Text style={styles.number5}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => { onClickButton('0') }}>
                <Text style={styles.number}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { onClickButton('00') }}>
                <Text style={styles.number}>00</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { onClickButton('.') }}>
                <Text style={styles.number}>.</Text>
              </TouchableOpacity>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={() => { onClickButton('=') }}>
                  <Text style={styles.number1}>=</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  result: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 40,
    marginBottom: 40
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
    marginBottom: 15,
    position: 'relative'
  },
  numbers: {
    flex: 3
  },
  resultText: {
    fontSize: 45,
    fontWeight: '300',
    color: 'white',
    marginRight: 40
  },
  calculationText: {
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
    fontWeight: '300'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  number: {
    fontSize: 30,
    color: 'white',
    marginBottom: -17,
    textAlign: 'center',
    fontWeight: '900'
  },
  number2: {
    fontSize: 25,
    color: 'green',
    marginBottom: -17,
    textAlign: 'center',
    fontWeight: '300'
  },
  number3: {
    fontSize: 25,
    color: 'green',
    marginBottom: -17,
    textAlign: 'center',
    marginRight: 10,
    fontWeight: '300'
  },
  number4: {
    fontSize: 25,
    color: 'green',
    marginBottom: -17,
    textAlign: 'center',
    marginRight: 7,
    fontWeight: '300'
  },
  number5: {
    fontSize: 30,
    color: 'green',
    marginBottom: -17,
    textAlign: 'center',
    fontWeight: '300'
  },
  number1: {
    fontSize: 30,
    color: 'white',
    marginBottom: -17,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: '3%',
    marginVertical: '5%',
    marginRight: -11,
    fontWeight: '900',
    backgroundColor: 'green'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
})

export default App

