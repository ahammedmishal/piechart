import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {PieChart, ProgressCircle} from 'react-native-svg-charts';
import Svg, {Text as SvgText, ForeignObject} from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome5';

// ...

export default class CustomPieChart extends React.PureComponent {
  render() {
    const data = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 1);

    // Change to whatever your fill function looks like...
    const getFill = (index) => {
      if (index > 30) return 'purple';
      if (index > 20) return 'blue';
      if (index > 10) return 'green';
      return 'red';
    };

    const pieData = data.map((value, index) => ({
      value,
      svg: {
        fill: getFill(index),
      },
      key: `pie-${index}`,
    }));

    return (
      <PieChart innerRadius="90%" style={styles.pieChart} data={pieData}>
        <ProgressCircle
          style={styles.progressCircle}
          progress={0.7}
          backgroundColor="red"
          progressColor="green">
          <ForeignObject x={-100} y={-100}>
            <View style={styles.progressCircleContentContainer}>
              <Text style={{...styles.text, color: 'green', marginBottom: 5}}>
                Active
              </Text>
              <View
                style={{
                  ...styles.progressCircleContentView,
                  width: 110,
                }}>
                <Icon name="heartbeat" size={30} color="red" />
                <Text style={styles.text}>72 BPM</Text>
              </View>
              <View style={styles.progressCircleContentView}>
                <Icon name="shoe-prints" size={30} color="red" />
                <Text style={styles.text}>4,565</Text>
                <Icon name="bolt" size={30} color="red" />
                <Text style={styles.text}>45 min</Text>
              </View>
              <View style={styles.progressCircleContentView}>
                <Icon name="fire-alt" size={30} color="red" />
                <Text style={styles.text}>1,856</Text>
                <Icon name="glass-whiskey" size={30} color="red" />
                <Text style={styles.text}>Active</Text>
              </View>
              <View style={{...styles.progressCircleContentView, width: 150}}>
                <Icon name="moon" size={30} color="red" />
                <Text style={styles.text}>6 hr 10 min</Text>
              </View>
            </View>
          </ForeignObject>
        </ProgressCircle>
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
  },
  progressCircleContentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
  },
});