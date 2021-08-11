import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';


const Styles = StyleSheet.create({
    news: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 15,
        borderRadius: 10,
        alignItems: 'center',
        paddingLeft: 15,
        paddingVertical: 10
    },
    image: {
        width: '25%',
        aspectRatio:1
    },
    textSet: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '70%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
        color: Colors.title
    },
    author: {
        fontSize: 15,
        color: Colors.author
    }
});

export default Styles;