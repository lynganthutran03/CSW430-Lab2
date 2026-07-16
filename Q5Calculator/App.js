import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './style';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');
  const [waitingForNext, setWaitingForNext] = useState(false);
  const [history, setHistory] = useState('');

  const handleNumberInput = (num) => {
    if (displayValue === '0' || waitingForNext) {
      setDisplayValue(num.toString());
      setWaitingForNext(false);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (op) => {
    setOperator(op);
    setFirstValue(displayValue);
    setWaitingForNext(true);
    setHistory(`${displayValue} ${op}`);
  };

  const handleEqual = () => {
    if (!operator || !firstValue) return;

    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    let result = 0;

    if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '*') {
      result = num1 * num2;
    } else if (operator === '/') {
      result = num1 / num2;
    }

    setHistory(`${firstValue} ${operator} ${displayValue} =`);

    setDisplayValue(result.toString());
    setOperator(null);
    setFirstValue('');
    setWaitingForNext(true);
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
    setWaitingForNext(false);
    setHistory('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text
          style={{
            fontSize: 24,
            color: '#888',
            marginBottom: 10
          }}
        >
          {history}
        </Text>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>

      <View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(7)}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(8)}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(9)}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput('/')}
          >
            <Text style={[styles.buttonText, styles.operatorText]}>÷</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(4)}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(5)}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(6)}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput('*')}>
            <Text style={[styles.buttonText, styles.operatorText]}>x</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(1)}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(2)}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(3)}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput('-')}
          >
            <Text style={[styles.buttonText, styles.operatorText]}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.zeroButton]}
            onPress={() => handleNumberInput(0)}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput('+')}
          >
            <Text style={[styles.buttonText, styles.operatorText]}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.equalButton]}
            onPress={handleEqual}
          >
            <Text style={[styles.buttonText, styles.equalButtonText]}>=</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.clearButton}
          onPress={handleClear}
        >
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}