import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-ionicons';
import Styles from './styles/SearchInputStyles';

const SearchInput = props => {

    return (
        <View style={{ ...Styles.primary, ...props.style }}>
            <View style={Styles.component}>
                <Icon name="search" color='#bebebe' style={{ paddingHorizontal: 15 }} />
                <TextInput
                    style={Styles.input}
                    placeholder='Search for articles'
                    placeholderTextColor='#BEBEBE'
                    onChangeText={(text) => {
                        if (text.length > 3) {
                            props.onChangeText(text)
                        }
                        else {
                            props.onChangeText('Motorcycle')
                        }
                    }}
                />
            </View>
        </View>
    )
};

export default SearchInput;
