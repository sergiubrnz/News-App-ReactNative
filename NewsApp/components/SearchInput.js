import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-ionicons';

const SearchInput = props => {

    return (
        <View style={{ ...styles.primary, ...props.style }}>
            <View style={styles.component}>
                <Icon name="search" color='#bebebe' style={{ paddingHorizontal: 15 }} />
                <TextInput
                    style={styles.input}
                    placeholder='Search for articles'
                    placeholderTextColor='#BEBEBE'
                    onChangeText={(text) => {
                        if (text.length > 3) {
                            props.onTextChange
                        }
                    }}
                />
            </View>
        </View>
    )

};


const styles = StyleSheet.create({
    primary: {
        width: '80%',
        height: 40
    },
    component: {
        borderColor: '#BEBEBE',
        borderWidth: 1,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        padding: 5,
        width: '90%',
        height: 40,
        color: '#363636'
    }
});

export default SearchInput;
