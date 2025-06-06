//PE06
// src/Countries/Countries.js
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default class Countries extends React.Component {
  render() {
    const { countries } = this.props;

    return (
      <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
        <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
          {!countries.length && <CenterMessage message="No saved countries!" />}
          {countries.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                this.props.navigation.navigate('Country', {
                  country: item,
                  // addCurrency: this.props.addCurrency, // Optional if needed
                })
              }
            >
              <View style={styles.countryContainer}>
                <Text style={styles.country}>{item.country}</Text>
                <Text style={styles.currency}>{item.currency}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  country: {
    fontSize: 20,
  },
  currency: {
    color: 'rgba(0, 0, 0, .5)',
  },
});


// //PE05
// import React from 'react';
// import { View, Text, ScrollView, StyleSheet } from 'react-native';
// import CenterMessage from '../components/CenterMessage';
// import { colors } from '../theme';

// export default class Countries extends React.Component {
//   render() {
//     const { countries } = this.props;

//     return (
//       <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
//         <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
//           {!countries.length && <CenterMessage message="No saved countries!" />}
//           {countries.map((item, index) => (
//             <View key={index} style={styles.countryContainer}>
//               <Text style={styles.country}>{item.country}</Text>
//               <Text style={styles.currency}>{item.currency}</Text>
//             </View>
//           ))}
//         </View>
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   countryContainer: {
//     padding: 10,
//     borderBottomWidth: 2,
//     borderBottomColor: colors.primary,
//   },
//   country: {
//     fontSize: 20,
//   },
//   currency: {
//     color: 'rgba(0, 0, 0, .5)',
//   },
// });