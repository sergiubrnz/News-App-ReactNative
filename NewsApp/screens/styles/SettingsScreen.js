import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#d3d3d3'
    },
    components: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        margin: 15
    },
    selected: {
        borderWidth: 2.5,
        borderColor: 'black'
    }
});

export default Styles;