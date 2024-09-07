import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground, Modal, Pressable, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native';
import { screenWidth, screenHeight } from '../Style';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { getProfilLocal } from '../firestore/profil';
import { verifyNumber } from '../functions';



const SmallModal = ({ enable, text, yesButton, noButton, yesAction, noAction }) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={enable}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!enable);
            }}>
            <View style={_styles.centeredView}>
                <View style={_styles.modalView}>
                    <Text style={_styles.modalText}>{text}</Text>
                    <Pressable
                        style={[_styles.button, _styles.buttonNo]}
                        onPress={() => { noAction() }}>
                        <Text style={_styles.textStyle}>{noButton}</Text>
                    </Pressable>
                    <Pressable
                        style={[_styles.button, _styles.buttonClose]}
                        onPress={() => { yesAction() }}>
                        <Text style={_styles.textStyle}>{yesButton}</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}
const _styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: '#E0E0E080',
        marginTop: -100
    },
    modalView: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
        width: "90%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",

    },
    button: {
        borderRadius: 10,
        paddingHorizontal: 45,
        paddingVertical: 15,
    },
    buttonClose: {
        backgroundColor: '#7AEC67',
    },
    buttonNo: {
        backgroundColor: '#D2D2D2',
    },
    textStyle: {
        color: '#07450D',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 25,
        textAlign: 'center',
        width: "100%",
        fontSize: 18,
        color: '#222',
    },
});


const OrderModal = ({ modalVisible = null, modalInfo, onModalClosed }) => {

    let TotalPrice = 0;
    let Nombre_de_plat = 0;
    modalInfo.orders.forEach(_order => {
        TotalPrice += _order.order_price.total_price;
        Nombre_de_plat++;
    });

    const [numberToContact, setNumberToContact] = useState(null);
    const [numberToPay, setNumberToPay] = useState(null);
    const [errorText, setErrorText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [profil, setProfil] = useState(false);
    const [paimentNumIsContact, setPaimentNumIsContact] = useState(true);
    const data = [];

    if (!profil) {
        getProfilLocal().then((prof) => {
            setProfil(prof)

        })
    }
    /*/ const renderLabel = () => {
         if (value || isFocus) {
             return (
                 <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                     Dropdown label
                 </Text>
             );
         }
         return null;
     };*/
    return (
        <Modal
            animationType="fade"
            visible={modalVisible}
            transparent
            onRequestClose={() => {
                onModalClosed();
            }}
        >

            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTextTitle}>Résumé de la Commande</Text>
                    <Text style={styles.modalText}>Restaurant:</Text>
                    <Text style={[styles.modalText, { fontWeight: 'bold', marginTop: 0 }]}>{modalInfo.restaurant.name}</Text>
                    <Text style={styles.modalText}>Nombre de plats:</Text>
                    <Text style={[styles.modalText, { fontWeight: 'bold', marginTop: 0 }]}>{Nombre_de_plat} Plat(s)</Text>
                    <Text style={styles.modalText}>Total:</Text>
                    <Text style={[styles.primaryButtonText, { fontWeight: 'bold', marginTop: 0 }]}>{TotalPrice + 1000} frs</Text>
                    {
                        /**
                         * <Text style={styles.modalTextTitle}>Point de Livraison</Text>
                                        <View style={styles.container}>
                                            {renderLabel()}
                                            <Dropdown
                                                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                                placeholderStyle={styles.placeholderStyle}
                                                selectedTextStyle={styles.selectedTextStyle}
                                                inputSearchStyle={styles.inputSearchStyle}
                                                search={false}
                                                iconStyle={styles.iconStyle}
                                                data={pdlData}
                                                maxHeight={300}
                                                labelField="name"
                                                valueField="id"
                                                placeholder={!isFocus ? 'Choisissez un point de livraison' : '...'}
                                                searchPlaceholder="Search..."
                                                value={value}
                                                onFocus={() => setIsFocus(true)}
                                                onBlur={() => setIsFocus(false)}
                                                onChange={item => {
                                                    setValue(item.value);
                                                    setIsFocus(false);
                                                }}
                                                renderLeftIcon={() => (
                                                    <AntDesign
                                                        style={styles.icon}
                                                        color={isFocus ? 'blue' : 'black'}
                                                        name="Safety"
                                                        size={20}
                                                    />
                                                )}
                                                renderItem={item => {
                                                    return (
                                                        <View style={{padding: 10}}>
                                                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: "#20202080"}}>{item.quater+" ("+item.localisation+")"}</Text>
                    
                                                        </View>
                                                    );
                                                }}
                                            />
                                        </View> 
                         */
                    }
                    <Text style={[styles.modalTextTitle, { marginTop: 20 }]}><Text style={{ fontSize: 18 }}>📞</Text> Numéro à contacter</Text>
                    <TextInput style={styles.textInput} placeholder='691...' onChangeText={newText => setNumberToContact(newText)}></TextInput>
                    <View onTouchEnd={() => { setPaimentNumIsContact(!paimentNumIsContact) }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, marginTop: -10, marginBottom: 10 }}>
                        <Image
                            source={{ uri: paimentNumIsContact ? "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/800px-Eo_circle_green_checkmark.svg.png" : "https://docs.blender.org/manual/sl/3.6/_images/grease-pencil_modes_draw_tools_circle_example-02.png" }}
                            resizeMode={"stretch"}
                            style={{
                                width: 25,
                                height: 25,

                            }}
                        />
                        <Text style={[{ marginTop: 0, marginHorizontal: 10 }]}>Le numéro à contacter est le numéro de paiement</Text>
                    </View>

                    {!paimentNumIsContact ?
                        <View>
                            <Text style={styles.modalTextTitle}><Text style={{ fontSize: 18 }}>💰</Text> Numéro de paiement</Text>
                            <TextInput style={styles.textInput} placeholder='691...' onChangeText={newText => setNumberToPay(newText)}></TextInput>
                        </View>
                        :
                        <></>
                    }

                    {errorText ?
                        <Text style={[styles.errorText, { marginTop: 0, marginHorizontal: 10 }]}>{errorText}</Text>

                        :
                        <></>}


                    <Pressable
                        disabled={isLoading}
                        style={[styles.primaryButton, { marginTop: 20, paddingVertical: 15, marginHorizontal: 5 }]}
                        onPress={() => {
                            console.log(numberToContact, numberToPay)
                            if (!verifyNumber(numberToContact).isGood) {
                                setErrorText("numéro à contacter :" + verifyNumber(numberToContact).error+", "+ verifyNumber(numberToContact).explanation)
                                return
                            }
                            if (!paimentNumIsContact && !verifyNumber(numberToPay).isGood) {
                                setErrorText("numéro de paiement :" + verifyNumber(numberToPay).error+", "+ verifyNumber(numberToPay).explanation)
                                return
                            }
                            setIsLoading(true)
                            onModalClosed(profil, numberToContact, paimentNumIsContact? numberToContact : numberToPay )
                        }}>
                        {isLoading ?
                            <ActivityIndicator size={'small'} />
                            :
                            <Text style={styles.primaryButtonText}>Passer Commande</Text>
                        }
                    </Pressable>
                </View>
                <Pressable
                    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                    onPress={() => {
                        onModalClosed()
                    }}>
                </Pressable>
            </View>
        </Modal>
    );


}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E2E2E2AA'
    },
    textInput: {
        height: 50,
        backgroundColor: "#7AEC6733",
        borderColor: "#07450D",
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 13,
        marginHorizontal: 14,
        paddingHorizontal: 10,
    },
    backModalCloser: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: screenWidth * 0.9,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 10
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        marginTop: 10,
        backgroundColor: '#2196F3',
    },
    primaryButton: {
        alignItems: 'center',
        backgroundColor: '#7AEC67',
        borderRadius: 10,
        paddingVertical: 21,
        marginHorizontal: 37,
    },
    primaryButtonText: {
        color: '#07450D',
        fontSize: 24,
        fontWeight: 'bold',
    },
    secondaryButton: {
        alignItems: "center",
        backgroundColor: "#D0D0D0",
        borderRadius: 10,
        paddingVertical: 20,
        marginBottom: 20,
        marginHorizontal: 34,
    },
    secondaryButtonText: {
        color: "#1E1E1E",
        fontSize: 20,
        fontWeight: "bold",
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginTop: 5,
        fontSize: 18,

    },
    modalTextTitle: {
        marginVertical: 5,
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    container: {
        backgroundColor: 'white',
        paddingVertical: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    errorText: {
        textAlign: 'center',
        color: 'red'
    }
});

const WalletModal = ({ setVisible = false, onModalClosed }) => {
    const [modalVisible, setModalVisible] = useState(setVisible);

    return (
        <Modal
            animationType="fade"
            visible={modalVisible}
            transparent
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView} >
                <View style={styles.backModalCloser} onTouchEnd={() => { setModalVisible(!modalVisible); onModalClosed() }}></View>
                <View style={styles.modalView}>
                    <Text style={styles.modalTextTitle}>Ajouter des Fonds</Text>

                    <TextInput style={styles.textInput} placeholder='Numéro Mobile Money' onChangeText={newText => setName(newText)}></TextInput>
                    <TextInput style={styles.textInput} placeholder='Montant en FCFA' onChangeText={newText => setName(newText)}></TextInput>

                    <View style={{ paddingHorizontal: 5, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Pressable
                            style={[styles.primaryButton, { paddingVertical: 5, paddingHorizontal: 15, marginHorizontal: 1 }]}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                onModalClosed()
                            }}>
                            <Text style={[styles.primaryButtonText, { fontSize: 14 }]}>1,000Frs</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.primaryButton, { paddingVertical: 5, paddingHorizontal: 15, marginHorizontal: 1 }]}
                            onPress={() => {

                            }}>
                            <Text style={[styles.primaryButtonText, { fontSize: 14 }]}>5,000Frs</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.primaryButton, { paddingVertical: 5, paddingHorizontal: 15, marginHorizontal: 1 }]}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                onModalClosed()
                            }}>
                            <Text style={[styles.primaryButtonText, { fontSize: 14 }]}>20,000Frs</Text>
                        </Pressable>
                    </View>

                    <Pressable
                        style={[styles.primaryButton, { marginTop: 10, paddingVertical: 15, marginHorizontal: 5 }]}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                            onModalClosed()
                        }}>
                        <Text style={styles.primaryButtonText}>Ajouter Les Fonds</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

export { SmallModal, OrderModal, WalletModal }