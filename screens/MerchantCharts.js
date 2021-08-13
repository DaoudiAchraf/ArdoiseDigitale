import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
  } from 'react-native-chart-kit'
import Myappbar from '../components/componentsClient/Myappbar'
import { color } from '../constants/Colors'
import Divider from "react-native-divider";
import { RFValue } from 'react-native-responsive-fontsize'
import { w } from '../utils/Size'

const MerchantCharts = ({navigation}) => {

    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,

        backgroundColor: color.Primary,
        backgroundGradientFrom: color.Primary,
        backgroundGradientTo: '#ffa726',

        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      }

    const data = [0.4, 0.6, 0.8]

    const dataBar = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          data: [ 20, 45, 28, 80, 99, 43 ]
        }]
      }

    return (
        <View  style={{ backgroundColor: "#324B3E" ,flex:1,paddingBottom:'13%'}}>
          <Myappbar
            title="Mes courbes"
            navigation={navigation}
          />
            <ScrollView>
            <Divider borderColor="#fff" color="#fff" orientation="center">
                    <Text style={{ fontSize: RFValue(17),fontWeight:'bold' }}>Mes ardoises</Text>
                </Divider>
                <LineChart
                    data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    datasets: [{
                        data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                        ]
                    }]
                    }}
                    width={w(94)}
                    height={220}
                    chartConfig={{
                    backgroundColor: color.Primary,
                    backgroundGradientFrom: '#1E2923',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    }
                    }}
                    bezier
                    style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    alignSelf:'center'
                    }}
                />


    
                <Divider borderColor="#fff" color="#fff" orientation="center">
                    <Text style={{ fontSize: RFValue(17),fontWeight:'bold' }}>Mes produits</Text>
                </Divider>
                
                <ProgressChart
                    data={data}
                    width={w(94)}
                    height={220}
                    chartConfig={chartConfig}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        alignSelf:'center'
                        
                        }}
                />


                <Divider borderColor="#fff" color="#fff" orientation="center">
                    <Text style={{ fontSize: RFValue(17),marginTop:'10%',fontWeight:'bold' }}>Mes Commandes</Text>
                </Divider>

                <BarChart
          
                data={dataBar}
                chartConfig={{
                    backgroundColor: color.Primary,
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: color.Secondary,
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    }
                    }}
                width={w(94)}
                height={220}
               

                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    alignSelf:'center'
                    }}
                />
            </ScrollView>
        </View>
    )
}

export default MerchantCharts

const styles = StyleSheet.create({})
