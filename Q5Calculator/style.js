import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'flex-end',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 24,
  },
  displayText: {
    fontSize: 64,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#fff',
    flex: 1,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 30,
  },
  operatorButton: {
    backgroundColor: '#f0f0f0',
  },
  equalButton: {
    backgroundColor: '#ff8c00',
  },
  zeroButton: {
    flex: 2,
    aspectRatio: 2.1,
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: '#e0e0e0',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 28,
    color: '#333',
  },
  operatorText: {
    color: '#ff8c00',
  },
  equalButtonText: {
    color: '#fff',
  }
});