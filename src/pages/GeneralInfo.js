import React, { Component } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

export default class GeneralInfo extends Component {
  render() {
    return (
      <ScrollView style={styles.infoContainer}>
        <View style={styles.parking}>
          <View style={styles.header}>
            <Text style={styles.title}>Aquí soñó Blanes Viale</Text>
          </View>
          <View style={styles.info}>
            <Text style={{ marginBottom: 2, fontSize: 16 }}>
              En Aquí soñó Blanes Viale, Pablo Uribe revisa y reformula a
              través del montaje más de un centenar de obras del acervo del
              Museo Nacional de Artes Visuales, buscando intervenir y comentar
              los mecanismos y los dispositivos que se ponen en juego en el
              museo: el espacio arquitectónico, la curaduría, el acervo, la
              museografía y la restauración.
            </Text>
            <Text style={{ marginBottom: 2, fontSize: 16 }}>
              La exposición propicia un diálogo con la historia de la pintura
              uruguaya, interpelando los límites entre la cita y la apropiación,
              el original y la copia, la autoría y la representación. Uribe
              modifica con toda libertad las pautas museográficas en la búsqueda
              de una nueva convergencia entre las obras (propias y ajenas) y el
              espacio que las contiene.
            </Text>
            <Text style={{ marginBottom: 2, fontSize: 16 }}>
              Cada una de las cuarenta y seis obras que componen esta exposición
              está referenciada con un número que encuentra su correspondiente
              en la instalación Citas citables, ubicada al ingreso de la Sala 2.
            </Text>
          </View>
          <View style={styles.parking}>
            <View style={styles.header}>
              <Text style={styles.title}>
                Funcionamiento del recorrido de la exhibición
              </Text>
            </View>
            <View style={styles.info}>
              <Text style={{ marginBottom: 8 }} style={styles.text}>
                Luego de entrar a la pantalla de exhibición el sistema comenzara
                a reconocer en que punto del museo usted se encuentra. Acorde al
                recorrido que usted realice se le iran mostrando las obras que
                están en la zona cicundante. Oprimiendo el botón con los
                auriculares podrá acceder a la información de la obra, contando
                con un audio explicativo de la misma.
              </Text>
            </View>
          </View>
          <View style={styles.parking}>
            <View style={styles.header}>
              <Text style={styles.title}>Recorrido a ciegas </Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.text}>
                Luego de oprimir el botón de recorrido a ciegas, se comienza a
                reproducir un audio introductorio sobre la muestra. Una vez
                finalizado este primer audio, se comenzará a localizar al
                usuario. A medida que se aproxime a alguna de ocho obras
                distribuidas en el MNAV, la app reproducirá el audio relevante a
                esta obra.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.admissions}>
          <View style={styles.header}>
            <Text style={styles.title}>Compatibilidad de dispositivos</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.text}>
              La aplicación se encuentra solo disponible para dispositivos
              Android. Para tablets o móviles que no cuenten con Wi-Fi de doble
              banda, la localización se verá negativamente afectada.
            </Text>
          </View>
        </View>

        <View style={styles.admissions}>
          <View style={styles.header}>
            <Text style={styles.title}>Entrada</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.text}>
              La entrada es completamente gratuita
            </Text>
          </View>
        </View>

        <View style={styles.hours}>
          <View style={styles.header}>
            <Text style={styles.title}>Horas de Apertura</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.text}>
              Martes a domingo de 13:00 a 20:00 horas
            </Text>
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
  text: {
    fontSize: 16
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
    borderColor: "#1d1d1d"
  },
  info: {
    flex: 0.7,
    padding: 10,
    display: "flex"
  },
  title: {
    fontSize: 24,
    marginLeft: 5,
    color: "#1d1d1d",
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowColor: "black",
    textShadowRadius: 1
  },
  icon: {
    marginRight: 15
  }
});
