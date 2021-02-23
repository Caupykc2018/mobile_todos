import React, { useState, useCallback } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Checkbox } from 'react-native-paper';
import moment from 'moment';
import { dataPickerStyles } from './utils/styles';

export const DatePicker = ({
  value,
  label,
  disabled,
  onChangeDate,
  onPressCheckbox,
}) => {
  const [editedDate, setEditedDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const handleOnPressDate = useCallback(() => {
    setShowDate(true);
  }, []);

  const handleOnChangeDate = useCallback((event, date) => {
    if (date) {
      setEditedDate(date);
      setShowDate(false);
      setShowTime(true);
    } else {
      setShowDate(false);
    }
  }, []);

  const handleOnChangeTime = useCallback(
    (event, date) => {
      if (date) {
        setShowTime(false);

        let editDateTime = editedDate;
        editDateTime.setHours(date.getHours(), date.getMinutes());

        onChangeDate(editDateTime.toISOString());
      } else {
        setShowTime(false);
      }
    },
    [editedDate, onChangeDate],
  );

  return (
    <>
      <View style={dataPickerStyles.container}>
        <TouchableOpacity onPress={handleOnPressDate} disabled={disabled}>
          <Text
            style={[
              dataPickerStyles.text,
              {
                color: disabled ? 'lightgray' : 'black',
              },
            ]}>
            <Text>{label}</Text>
            <Text>
              {value ? moment(value).format('DD.MM.YYYY HH:mm') : 'empty'}
            </Text>
          </Text>
        </TouchableOpacity>
        <Checkbox
          status={disabled ? 'unchecked' : 'checked'}
          onPress={onPressCheckbox}
        />
      </View>
      {showDate && (
        <DateTimePicker
          mode="date"
          value={!value ? new Date() : new Date(value)}
          onChange={handleOnChangeDate}
        />
      )}
      {showTime && (
        <DateTimePicker
          mode="time"
          value={!value ? new Date() : new Date(value)}
          onChange={handleOnChangeTime}
        />
      )}
    </>
  );
};
