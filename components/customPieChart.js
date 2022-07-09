import React from 'react';
import {PieChart, ProgressCircle} from 'react-native-svg-charts';
import Svg, {Text as SvgText, ForeignObject} from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet,View,Text } from 'react-native';
// ...

class CustomPieChart extends React.PureComponent {
  render() {
    const data = Array.apply(null, Array(61)).map(Number.prototype.valueOf, 1);
    const value1 = 25
    // Replace with your fill method...
    const getFill = (index) => {
      if (index < value1) return '#FFB300';
      if (index-value1 < 10) return '#026D7E';
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
              <Text style={{...styles.text, color: 'green', marginBottom: 5}}>
                Active
              </Text>
              <View style={styles.progressCircleContentView}>
                <Text style={styles.text}>Feeling like</Text>
                <Text style={styles.text}>Athlete!</Text>
              </View>
            </View>
          </ForeignObject>
      </PieChart>
    );
  }
}
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
      height: 200,
      transform: [],
      justifyContent: 'space-between',
    },
    progressCircleContentView: {
      justifyContent: 'center',
      alignItems:'center',
      width: 200,
    },
    text: {
      fontSize: 20,
    },
  });

export default CustomPieChart;