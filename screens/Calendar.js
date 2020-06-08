import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Modal, FlatList, Text, TouchableHighlight} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Item from '../components/listItem';

const CalendarScreen = props => {
    const [selectedDay, setDay] = useState();
    const [dayHistory, setDayHistory] = useState();
    const [modalVisible, setModalVisible] = useState(false);


    useEffect(() => {
        if (selectedDay)
            fetch("http://history.muffinlabs.com/date/" + selectedDay.month + "/" + selectedDay.day)
                .then(response => response.json())
                    .then((responseJson)=> {
                        setDayHistory(responseJson.data);
                    })
                .catch(error=>console.log(error)) //to catch the errors if any
    }, [selectedDay]);

    useEffect(() => {
        //console.log(dayHistory.Events);
        if(dayHistory && dayHistory.Events && dayHistory.Events.length)
            setModalVisible(true);
        else
            setModalVisible(false);
    }, [dayHistory]);

    return (
        <View style={styles.screen}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(false) }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Events</Text>
                        <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                            setModalVisible(false);
                        }}
                        >
                            <Text style={styles.textStyle}>Close Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <FlatList
                    data={dayHistory && dayHistory.Events ? dayHistory.Events : null}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.text}
                />
            </Modal>
            <Calendar
                disabledDaysIndexes={[0, 2, 6]}
                disabledWeekDays={[0, 2, 6]}
                disableAllTouchEventsForDisabledDays={true}
                onDayPress={(day)=>{setDay(day)}}/>
        </View>
    );
};

CalendarScreen.navigationOptions = {
    headerTitle: 'Select a date'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    centeredView: {
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        width: '20%',
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      modalText: {
        fontSize: 20,
        textAlign: "center"
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      }
});

export default CalendarScreen;
