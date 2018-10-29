import React, { Component } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class GeneralInfo extends Component {
  render() {
    return (
      <ScrollView style={styles.infoContainer}>
        <View style={styles.parking}>
          <View style={styles.header}>
            <Text style={styles.title}>Funcionamiento</Text>
          </View>
          <View style={styles.info}>
            <Text style={{ marginBottom: 8 }}>Exhibicion aqui soño Blanes Viales</Text>
            <Text style={{ marginBottom: 8 }}>
              Simplemente usted tiene que tocar el boton de exhibiciones, y a partir de ese momento el sistema
              reconocera en que punto del museo usted se encuentra. Con el recorrido que usted realice por el museo 
              se le van a ir mostrando las obras que estan en la zona de al rededor y podra orpimir el boton con los auriculares
              para asi poder ver la informacion de la obra que tambien cuenta con un audio explicativo de la misma.
            </Text>
            <Text style={{ marginBottom: 8 }}>Recorrido a ciegas</Text>
            <Text>Para el recorrido a ciegas simplemente se tiene que oprimir el boton de recorrido a ciegas,
                y a partir de ese momento se le iran desplegando audios de las obras del recorrido a ciegas que tenga mas cercano. 
                En ellas podra escuchar sobre las distintas obras.
            </Text>
          </View>
        </View>
        <View style={styles.admissions}>
          <View style={styles.header}>
            <Text style={styles.title}>Entrada</Text>
          </View>
          <View style={styles.info}>
            <Text>La entrada es completamente gratuita</Text>
          </View>
        </View>

        <View style={styles.hours}>
          <View style={styles.header}>
            <Text style={styles.title}>Horas de Apertura</Text>
          </View>
          <View style={styles.info}>
            <Text>Martes a domingo de 13:00 a 20:00 horas</Text>
          </View>
        </View>

        <View style={styles.map}>
          <Image
            style={styles.mapImg}
            source={{
              uri: "https://s3-sa-east-1.amazonaws.com/posifi-app/mapa.jpg"
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    display: "flex"
  },
  admissions: {
    flex: 1,
    display: "flex"
  },
  hours: {
    flex: 1,
    display: "flex"
  },
  parking: {
    flex: 1,
    display: "flex"
  },
  map: {
    flex: 1,
    display: "flex",
    borderTopWidth: 3,
    borderTopColor: "#009FB7",
    height: 300
  },
  mapImg: {
    flex: 1,
    height: null,
    width: null
  },
  header: {
    flex: 0.3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 3,
    borderBottomWidth: 2,
    borderColor: "#009FB7"
  },
  info: {
    flex: 0.7,
    padding: 10,
    display: "flex"
  },
  title: {
    fontSize: 24,
    marginLeft: 5,
    color: "#009FB7",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowColor: "black",
    textShadowRadius: 1
  },
  icon: {
    marginRight: 15
  }
});
