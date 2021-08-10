import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    content: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
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
        color: '#BEBEBE'
    }
});

export default Styles;