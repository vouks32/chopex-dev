/**
 import Mapbox from "@rnmapbox/maps";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

Mapbox.setAccessToken("pk.eyJ1Ijoidm91a3MiLCJhIjoiY2x6b2FjdXp0MHVzYTJrcG5vOWtpaG9vZiJ9.e9_3TH4qEosn8zGpUH913A");
Mapbox.setConnected(true);

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

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <MapView style={styles.map} />
            </View>
        </View>
    );
}
  */