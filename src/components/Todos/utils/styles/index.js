import { StyleSheet } from 'react-native';

export const buttonFiltersStyles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
  },
});

export const buttonSortsStyles = StyleSheet.create({
  button: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
});

export const buttonTabsStyles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
  },
});

export const editBarStyles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
  },
});

export const formOptionStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const inputBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    height: 58,
    width: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
  },
});

export const searchBarStyles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
  },
});

export const todoStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  containerCheckbox: {
    justifyContent: 'center',
  },
  containerButtonDelete: {
    justifyContent: 'center',
  },
  buttonAction: {
    marginTop: 10,
  },
});

export const todoDynamicStyle = (isCompleted) =>
  StyleSheet.create({
    title: {
      textDecorationLine: isCompleted ? 'line-through' : 'none',
      color: isCompleted ? 'gray' : 'black',
    },
  });
