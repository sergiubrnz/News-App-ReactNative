import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';

const Styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white'
    },
    title: {
        fontWeight: 'bold',
        color: Colors.title,
        fontSize: 18
    },
    author: {
        color: Colors.author,
        fontSize: 16
    },
    content: {
        color: Colors.title,
        fontSize: 14,
        paddingTop: 10
    },
    image: {
        width: 90,
        height: 90,

    },
    imageContainer: {
        top: -60,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textContainer: {
        top: -40,
        textAlign: 'right',
        alignSelf: 'flex-start',
        width: '100%'
    },
    line: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.searchField,
        paddingVertical: 5,
        width: '30%',
        alignSelf: 'center'
    }
});

export default Styles;