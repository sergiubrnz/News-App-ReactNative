import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';

const Styles = StyleSheet.create({
    content: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.backgroundColor,
        flex: 1,
        width: '100%'
    },
    input: {
        height: '20%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        fontSize: 14,
        color: Colors.searchField
    }
});

export default Styles;