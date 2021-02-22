import { StyleSheet } from 'react-native';

export const accountScreenStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  containerInfo: {
    padding: 20,
    alignItems: 'center',
  },
  textInfo: {
    fontSize: 30,
  },
  textLogin: {
    fontWeight: 'bold',
  },
  containerButton: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 20,
  },
  textButton: {
    color: 'white',
  },
});

export const loadinstyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const loadingScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const loginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTitle: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 15,
  },
  form: {
    backgroundColor: 'white',
    width: '80%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray',
    padding: 20,
    borderRadius: 5,
  },
  textField: {
    backgroundColor: 'white',
  },
  containerTextFields: {
    marginBottom: 20,
  },
  buttonSubmit: {
    width: '50%',
  },
  containerButton: {
    alignItems: 'center',
  },
  buttonRegister: {
    color: 'black',
    width: '70%',
  },
});

export const registerScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTitle: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 15,
  },
  form: {
    backgroundColor: 'white',
    width: '80%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray',
    padding: 20,
    borderRadius: 5,
  },
  textField: {
    backgroundColor: 'white',
  },
  containerTextFields: {
    marginBottom: 20,
  },
  containerButton: {
    alignItems: 'center',
  },
  buttonSubmit: {
    width: '50%',
  },
  buttonRegister: {
    marginTop: 10,
    color: 'black',
    width: '70%',
  },
});

export const todosScreenStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '83%',
  },
  app: {
    marginTop: 10,
    width: '90%',
  },
});
