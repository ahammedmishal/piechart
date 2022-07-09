
import React,{useState,useEffect} from 'react';
import {PieChart, ProgressCircle} from 'react-native-svg-charts';
import Svg, {Text as SvgText, ForeignObject} from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet,View,Text,Image} from 'react-native';

const charts = () => {
    const data = Array.apply(null, Array(61)).map(Number.prototype.valueOf, 1);
    const [values, setValues] = useState([0,0])
    // Replace with your fill method...
    const getFill = (index) => {
      if (index < values[0]) return '#FFB300';
      if (index-values[0] < values[1]) return '#026D7E';
      return '#CCCCCC';
    };

    const pieData = data.map((value, index) => ({
      value,
      svg: {
        fill: getFill(index),
      },
      arc: { cornerRadius: 0,strokeWidth:2},
      key: `pie-${index}`,
    }));
    useEffect(() => {
        setTimeout(() => {
            setValues([25,15]);
          }, 1000);
    }, [])
    

  return (
    <PieChart 
        innerRadius="89%"
        outerRadius="99%"
        style={{
          height: 280,
        }}
        data={pieData}>
          <ForeignObject x={-100} y={-100}>
            <View style={styles.progressCircleContentContainer}>
            <View style={{width:140,height:140,backgroundColor:'#fcfcfc',alignItems: 'center',borderRadius:60,justifyContent:'center'}}>
            <View style={{width:100,height:100,backgroundColor:'#FFFFFF',alignItems: 'center',borderRadius:60,justifyContent:'center'}}>
                <Image source={require('./pet.png')} style={{width:50,height:50,resizeMode:'contain'}}/>
            </View>
            </View>
              {/* <Text style={{...styles.text, color: 'green', marginBottom: 5}}>
                Active
              </Text> */}
              <View style={styles.progressCircleContentView}>
                <Text style={styles.text}>Feeling like</Text>
                <Text style={styles.text1}>Athlete!</Text>
              </View>
            </View>
          </ForeignObject>
      </PieChart>
  );
};

const styles = StyleSheet.create({
    pieChart: {
      height: 300,
    },
    progressCircle: {
      height: 250,
      marginTop: 25,
    },
    progressCircleContentContainer: {
      alignItems: 'center',
      width: 200,
      height: 180,
      transform: [],
      justifyContent: 'space-between',
    },
    progressCircleContentView: {
      justifyContent: 'center',
      alignItems:'center',
      width: 200,
    },
    text: {
      fontSize: 14,
      color:'#FFB300'
    },
    text1: {
      fontSize: 18,
      color:'#D99800',
      fontWeight:"600"
    },
  });

export default charts;