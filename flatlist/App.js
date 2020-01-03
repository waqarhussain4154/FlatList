import React from 'react';
import { StyleSheet, ScrollView, FlatList,Alert ,ImageBackground, View, Text, TouchableOpacity, Image } from 'react-native';


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'Name Fetching Waite..',
            text1: "City Fetching Waite..",
            text2: "Number Fetching Waite..",
        }
    }
    renderSeparator = () => {
        return (
            <View style={{ height: 1,width: "100%", backgroundColor: "black" }}/>
        );
    };

    getListViewItem = (item) => {
        // Alert.alert(item.key+'  '+item.Value);
        Alert.alert(
            item.key,
            item.Value+'  Persons',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
    }
   
    render() {
        return (
           
                <ScrollView>
                    <View>
                        <Text style={styles.title}>Stock Information</Text>
                    </View>
                    <View style={{ paddingLeft: 40 }}>
                        
                    </View>
                    <FlatList
                        data={[
                            { key: 'Rice', Value: 50 }, { key: 'Biryani', Value: 15 }, { key: 'Chicken', Value: 38 }, { key: 'Mutton', Value: 9 },
                            { key: 'Tea', Value: 7 }, { key: 'Minral Water', Value: 500 }, { key: 'Roti', Value: 38 }, { key: 'Juice', Value: 17 },
                        ]}
                            renderItem={({ item }) =>
                             <Text style={styles.item}  onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>
                            //<Text style={styles.text}>{this.state.text}</Text>
                        }
                        ItemSeparatorComponent={this.renderSeparator} />
                    <View>
                        
                    </View>
                    <View style={{paddingTop: 30 }}>
                        </View>
                </ScrollView>
       
        );
    };
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20,
        fontStyle: 'italic',
        marginTop: 5,
        paddingLeft: 35
        //alignSelf: 'center'
    },

    title: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
        paddingLeft: 10,
        paddingTop: 10
    },
    stockimg: {
        width: 120,
        height: 120,
    },
    stocktxt: {
        color: 'white',
        fontSize: 14,
        paddingLeft: 40
    },
    donationfoodimg: {
        width: 130,
        height: 120,
    },
    donationfoodtxt: {
        color: 'white',
        fontSize: 14,
        paddingLeft: 20
    },
    txtstock1: {
        color: 'white',
        fontSize: 14,
        paddingLeft: 35
    },
    doneefoodrequestimg: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    doneefoodequesttxt: {
        color: 'white',
        fontSize: 14,
        paddingLeft: 5
    },
    imagesize: {
        width: 300,
        height: 180,
    },
    txt: {
        fontSize: 25,
        paddingLeft: 20,
        color: 'white',
    },
    txt1: {
        color: 'white',
        fontSize: 25,
        paddingRight: 20,
    },
    txt2: {
        fontSize: 15,
        paddingLeft: 30,
        fontSize: 20,
    },
    txt3: {
        fontSize: 15,
        paddingRight: 40,
        fontSize: 20,
    },
    inputtxt: {
        width: 300,
        height: 50,
        borderRadius: 30,
        fontSize: 20,
        alignSelf: 'center',
        paddingLeft: 45,
        backgroundColor: 'rgba(192,192,192,0.4)',
        marginHorizontal: 25
    },
    btnLogin: {
        width: 300,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#0078d4',
        alignSelf: 'center',
        marginTop: 20
    },
    loginbtntext: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 10
    },
    textforgotten: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10
    },
    textinfo: {
        color: 'white',
        fontSize: 16,
        paddingLeft: 35,
        paddingTop: 25
    },
    textsignup: {
        color: "black",
        fontSize: 20,
        textDecorationLine: 'underline',
        paddingTop: 20,
        paddingLeft: 10,
    },
    inputIcon: {
        position: 'absolute',
        paddingTop: 10,
        paddingLeft: 50,
        color: 'black',
    },
    inputIcon1: {
        position: 'absolute',
        paddingTop: 22,
        paddingLeft: 50,
        color: 'black',
    },
    btnEye: {
        position: 'absolute',
        paddingTop: 22,
        right: 48
    },
    logoutbtn: {
        width: 300,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#0078d4',
        alignSelf: 'center',
        marginTop: 10
    },

    logouttxt: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 10,
    },
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 20,
        height: 50,
        paddingLeft: 30
        //color: 'white',
    },

});