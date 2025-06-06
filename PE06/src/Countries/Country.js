// First attempt PE06
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../theme';

export default class Country extends React.Component {
  state = {
    name: '',
    info: '',
    currencies: [],
  };

  componentDidMount() {
    const { country } = this.props.route.params;
    const used = { name: country.currency, info: `${country.country} ${country.currency}` };
    const unused = { name: 'Won', info: 'Korean Won. Not used.' };
    this.setState({ currencies: [used, unused] });
  }

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  addCurrency = () => {
    const { name, info, currencies } = this.state;
    if (name === '' || info === '') return;

    const newCurrency = { name, info };
    this.setState({
      currencies: [...currencies, newCurrency],
      name: '',
      info: '',
    });
  };

  render() {
    const { name, info, currencies } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {currencies.map((curr, idx) => (
            <View key={idx} style={styles.currencyContainer}>
              <Text style={styles.name}>{curr.name}</Text>
              <Text style={styles.info}>{curr.info}</Text>
            </View>
          ))}
        </ScrollView>

        <TextInput
          style={styles.input}
          placeholder="Currency name"
          placeholderTextColor="white"
          value={name}
          onChangeText={(val) => this.onChangeText('name', val)}
        />
        <TextInput
          style={[styles.input, styles.input2]}
          placeholder="Currency info"
          placeholderTextColor="white"
          value={info}
          onChangeText={(val) => this.onChangeText('info', val)}
        />
        <TouchableOpacity onPress={this.addCurrency}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Currency</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  currencyContainer: {
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
  name: {
    fontSize: 20,
  },
  info: {
    color: 'rgba(0,0,0,0.5)',
  },
  input: {
    height: 50,
    backgroundColor: colors.primary,
    color: 'white',
    paddingHorizontal: 8,
    position: 'absolute',
    width: '100%',
    bottom: 104,
    left: 0,
  },
  input2: {
    bottom: 52,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: '100%',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});



// // Something to consider PE06
// import React from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import { colors } from '../theme';

// export default class Country extends React.Component {
//   state = {
//     name: '',
//     info: '',
//     currencies: [],
//   };

//   componentDidMount() {
//     const { country } = this.props.route.params;

//     const usedCurrency = {
//       name: country.currency,
//       info: `${country.country} ${country.currency}. Used`,
//     };

//     this.setState({ currencies: [usedCurrency] });
//   }

//   onChangeText = (key, value) => {
//     this.setState({ [key]: value });
//   };

//   addCurrency = () => {
//     const { name, info, currencies } = this.state;
//     const { country } = this.props.route.params;

//     if (name.trim() === '' || info.trim() === '') return;

//     // Check if the currency matches the country's official currency
//     const isUsed =
//       name.trim().toLowerCase() === country.currency.trim().toLowerCase();

//     const newCurrency = {
//       name: name.trim(),
//       info: isUsed
//         ? `${country.country} ${name.trim()}. Used`
//         : `${name.trim()}. Not used.`,
//     };

//     // Avoid adding duplicate "Used" entry
//     const alreadyExists = currencies.some(
//       (c) =>
//         c.name.toLowerCase() === newCurrency.name.toLowerCase() &&
//         c.info.toLowerCase() === newCurrency.info.toLowerCase()
//     );

//     if (!alreadyExists) {
//       this.setState({
//         currencies: [...currencies, newCurrency],
//         name: '',
//         info: '',
//       });
//     }
//   };

//   render() {
//     const { name, info, currencies } = this.state;

//     return (
//       <View style={{ flex: 1 }}>
//         <ScrollView style={{ flex: 1 }}>
//           {currencies.map((curr, idx) => (
//             <View key={idx} style={styles.currencyContainer}>
//               <Text style={styles.name}>{curr.name}</Text>
//               <Text style={styles.info}>{curr.info}</Text>
//             </View>
//           ))}
//         </ScrollView>

//         <TextInput
//           style={styles.input}
//           placeholder="Currency name"
//           placeholderTextColor="white"
//           value={name}
//           onChangeText={(val) => this.onChangeText('name', val)}
//         />
//         <TextInput
//           style={[styles.input, styles.input2]}
//           placeholder="Currency info"
//           placeholderTextColor="white"
//           value={info}
//           onChangeText={(val) => this.onChangeText('info', val)}
//         />
//         <TouchableOpacity onPress={this.addCurrency}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Add Currency</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   currencyContainer: {
//     padding: 10,
//     borderBottomColor: colors.primary,
//     borderBottomWidth: 2,
//   },
//   name: {
//     fontSize: 20,
//   },
//   info: {
//     color: 'rgba(0,0,0,0.5)',
//   },
//   input: {
//     height: 50,
//     backgroundColor: colors.primary,
//     color: 'white',
//     paddingHorizontal: 8,
//     position: 'absolute',
//     width: '100%',
//     bottom: 104,
//     left: 0,
//   },
//   input2: {
//     bottom: 52,
//   },
//   button: {
//     position: 'absolute',
//     bottom: 0,
//     height: 50,
//     width: '100%',
//     backgroundColor: colors.primary,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//   },
// });


