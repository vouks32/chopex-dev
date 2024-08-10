import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { Image, View, Text, ScrollView, TouchableOpacity, TextInput, ImageBackground, Modal, Pressable, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import { screenWidth, screenHeight } from '../Style';


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


const OrderModal = ({ setVisible = false, onModalClosed }) => {
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
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTextTitle}>Résumé de la Commande</Text>

                    <View style={{ flexDirection: 'row', width: "100%", justifyContent: 'space-between', marginTop: 20 }}>
                        <View style={{ width: "50%", paddingTop: 10 }}>
                            <View style={{ backgroundColor: "#D2D2D2", width: "80%", aspectRatio: 1, borderRadius: 20 }}></View>
                            <Text style={[styles.modalTextTitle, { textAlign: 'center', width: "80%" }]}>Prix Totale</Text>
                        </View>
                        <View style={{ width: "50%" }}>
                            <Text style={styles.modalText}>Nom du plat</Text>
                            <Text style={styles.modalText}>Compléments</Text>
                            <FlatList
                                data={[
                                    { key: 'Complément-1' },
                                    { key: 'Complément-2' },
                                    { key: 'Complément-3' },
                                ]}
                                style={{ margin: 0, padding: 0 }}
                                renderItem={({ item }) => <Text>{"  ● " + item.key}</Text>}
                            />
                        </View>
                    </View>
                    <Text style={[styles.modalText, { textAlign: 'center' }]}>Quantité</Text>

                    <Pressable
                        style={[styles.primaryButton, { marginTop: 20, paddingVertical: 15, marginHorizontal: 5 }]}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                            onModalClosed()
                        }}>
                        <Text style={styles.primaryButtonText}>Ajouter au panier</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.secondaryButton, { marginTop: 10, marginBottom: 0, paddingVertical: 10, marginHorizontal: 45 }]}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                            onModalClosed()
                        }}>
                        <Text style={styles.secondaryButtonText}>Annuler</Text>
                    </Pressable>
                </View>
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
        marginBottom: 10,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold'
    },
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