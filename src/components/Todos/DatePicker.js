import React, { useState, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, Checkbox, Text } from 'react-native-paper';
import moment from 'moment';

export const DatePicker = ({ value }) => {
  const [editedDate, setEditedDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const handleOnPressDate = useCallback(() => {
    setShowDate(true);
  }, []);

  const handleOnChangeDate = useCallback((event, date) => {
    setEditedDate(date);
    setShowDate(false);
    setShowTime(true);
  }, []);

  const handleOnChangeTime = useCallback((event, date) => {
    setEditedDate(
      Date(editedDate.setHours(date.getHours(), date.getMinutes())),
    );
    setShowTime(false);
  }, []);

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={handleOnPressDate}>
          <Text style={{ fontSize: 15 }}>
            <Text>Date start: </Text>
            <Text>{moment(value).format('DD.MM.YYYY hh:mm')}</Text>
          </Text>
        </TouchableOpacity>
        <Checkbox />
      </View>
      {showDate && (
        <DateTimePicker
          mode="date"
          value={value}
          onChange={handleOnChangeDate}
        />
      )}
      {showTime && (
        <DateTimePicker
          mode="time"
          value={value}
          onChange={handleOnChangeTime}
        />
      )}
    </>
  );
};
