import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import DataTag from './src/components/DataTag';

import weatherData from "./data.json"
import { getRandomIndexFrom, getWeathertConditionFromDailySummary } from './src/utils';

type WeatherInfo = { 
  state: string;
  city: string;
  date: string;
  temperature: string;
  daily_summary: string;
  wind: string;
  humidity: string;
  visibility: string;
}

export default function App() {

  const [waether, setWeather] = useState<Array<WeatherInfo>>(weatherData);

  const { 
    state, city, date, 
    temperature, daily_summary, 
    wind, humidity, visibility 
  } = waether[getRandomIndexFrom(waether)];

  const waetherCondition = getWeathertConditionFromDailySummary(daily_summary);

  return (
    <View style={styles.container}>
      <Text style={styles.location}>
        {`${city} - ${state}`}
      </Text>
      <Text style={styles.date}>
        {date}
      </Text>
      <Text style={styles.stantardFont}>
        {waetherCondition}
      </Text>
      <Text style={styles.temperature}>
        {temperature}
      </Text>
      <View style={{ gap: 16}}>
        <Text style={styles.stantardFont}>Resumo diário</Text>
        <Text style={styles.stantardFont}>{daily_summary}</Text>
      </View>
      <View style={styles.infosContainer}>
        <DataTag
          icon={<FontAwesome5 name="wind" size={50} color="#F9F93B" />}
          label="Vento"
          value={wind}
        />
        <DataTag
          icon={<MaterialIcons name="waves" size={50} color="#F9F93B" />}
          label="Umidade"
          value={humidity}
        />
        <DataTag
          icon={<FontAwesome5 name="eye" size={50} color="#F9F93B" />}
          label="Visibilidade"
          value={visibility}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f93b',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  location: {
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 25
  },
  date: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 18,
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: '#030006',
    color: '#FCFDFD',
    borderRadius: 40
  },
  stantardFont: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 18,
  },
  temperature: {
    fontWeight: "700",
    fontSize: 144,
    lineHeight: 170,
  },
  infosContainer: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#030006",
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
