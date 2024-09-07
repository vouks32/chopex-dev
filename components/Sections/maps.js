import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    container: {
        height: 300,
        width: 300,
        backgroundColor: "tomato"
    },
    map: {
        flex: 1
    }
});

export const MiniMap = () => {

    let mapLayer = {
        name: 'OpenStreetMap',
        type: 'TileLayer',
        url: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
        attribution: '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
    }
    let latitude = "3.797491", longitude = "11.479769";
    let latitude2 = "3.801945", longitude2 = "11.495047";

    return (
        <View style={styles.page}>
            <View style={styles.container}>
            
            </View>
        </View>
    );
}