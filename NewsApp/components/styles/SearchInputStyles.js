import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';

const Styles = StyleSheet.create({
    primary: {
        width: '80%',
        height: 40
    },
    component: {
        borderColor: Colors.searchField,
        borderWidth: 1,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        padding: 5,
        width: '80%',
        height: 40,
        color: Colors.inputText
    }
});

export default Styles;