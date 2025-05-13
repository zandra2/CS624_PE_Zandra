import React from 'react';
import PropTypes from 'prop-types';
import { Platform, Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;

  let containerStyles = [styles.cardContainer];
  if (showThumbnail) {
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={containerStyles}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <Text style={styles.cardName}>{name}</Text>

        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation} numberOfLines={1} ellipsizeMode="tail">
            {occupation}
          </Text>
        </View>

        <View style={styles.cardDescriptionContainer}>
          <Text style={styles.cardDescription} numberOfLines={showThumbnail ? 2 : 5} ellipsizeMode="tail">
            {description}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ProfileCard;

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 200,
    height: 260,
    margin: 10,
    padding: 10,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 10 },
        shadowOpacity: 1
      },
      android: {
        elevation: 10
      }
    })
  },
  cardThumbnail: {
    transform: [{ scale: 0.8 }],
    height: 220,
    width: 160,
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 40,
    height: 40,
    borderRadius: 40,
    marginTop: 10,
    paddingTop: 2,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 5 },
        shadowOpacity: 1
      },
      android: {
        elevation: 10
      }
    })
  },
  cardImage: {
    width: 30,
    height: 30,
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center'
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 1,
    marginTop: 5,
    paddingHorizontal: 5
  },
  cardOccupation: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center'
  },
  cardDescriptionContainer: {
    marginTop: 5,
    paddingHorizontal: 5
  },
  cardDescription: {
    fontStyle: 'italic',
    fontSize: 12,
    textAlign: 'center',
    overflowY: 'visible',  // To display the entire card description
  }
});



// // Listing 5.3 Scaling ProfileCard from full size to thumbnail
// /*
//     If you press the thumbnail, the component will return to full size. 
//     If you press the full-size component, it will collapse back down into a thumbnail view.
//     By reorganizing the structure of the component, you can better handle adding more ProfileCard components to the application. 
    
//     In section 5.3, you’ll add more ProfileCards and see how to organize them into a gallery layout.
// */
// import React, { Component } from 'react';
// // PropTypes lets you specify what properties the ProfileCard component can accept.
// import PropTypes from 'prop-types'; 

// // The immutability helper function update lets you update a specific piece of the component’s state.
// // npm install immutability-helper --save
// import update from 'immutability-helper'; 

// /*
//   Imports the Platform utility component to programmatically select styles based on the platform.
// */
// import { Platform, Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native'; 

// const userImage = require('./../assets/images/user.png');

// const data = [{
//     image: userImage,
//     name: 'John Doe',
//     occupation: 'React Native Developer',
//     description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
//     showThumbnail: true
//   }
// ];

// const ProfileCard = (props) => {
//   const { image, name, occupation, description, onPress, showThumbnail } = props;
//   let containerStyles = [styles.cardContainer];

//   if (showThumbnail) {  
//     containerStyles.push(styles.cardThumbnail);
//   }

//   return (
//     <TouchableHighlight onPress={onPress}> 
//       <View style={[containerStyles]}>
//         <View style={styles.cardImageContainer}>
//           <Image style={styles.cardImage} source={image}/>
//         </View>
//         <View>
//           <Text style={styles.cardName}>
//             {name}
//           </Text>
//         </View>
//         <View style={styles.cardOccupationContainer}>
//           <Text style={styles.cardOccupation}>
//             {occupation}
//           </Text>
//         </View>
//         <View>
//           <Text style={styles.cardDescription}>
//             {description}
//           </Text>
//         </View>
//       </View>
//     </TouchableHighlight>
//   )
// };

// ProfileCard.propTypes = {
//   image: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   occupation: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   showThumbnail: PropTypes.bool.isRequired,
//   onPress: PropTypes.func.isRequired
// };

// export default class App extends Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = { 
//       data: data
//     }
//   }

//   handleProfileCardPress = (index) => {
//     const showThumbnail = !this.state.data[index].showThumbnail;
//     this.setState({
//       data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}})
//     });
//   };
  
//   render() {
//     const list = this.state.data.map(function(item, index) { 
//       const { image, name, occupation, description, showThumbnail } = item;
//       return <ProfileCard key={'card-' + index}
//                    image={image}
//                    name={name}
//                    occupation={occupation}
//                    description={description}
//                    onPress={this.handleProfileCardPress.bind(this, index)}
//                    showThumbnail={showThumbnail}/>
//     }, this);

//     return (
//       <View style={styles.container}>
//         {list} 
//       </View>
//     );
//   }
// }

// const profileCardColor = 'dodgerblue';

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     /*
//       Adds a drop shadow to the card container based on the platform
//     */
//     cardContainer: {
//         alignItems: 'center',
//         borderColor: 'black',
//         borderWidth: 3,
//         borderStyle: 'solid',
//         borderRadius: 20,
//         backgroundColor: profileCardColor,
//         width: 300,
//         height: 400,
//         ...Platform.select({ 
//           ios: {
//             shadowColor: 'black',
//             shadowOffset: {
//               height: 10
//             },
//             shadowOpacity: 1
//           },
//           android: {
//             elevation: 15
//           }
//         })
//     },
//     /*
//       Adds a drop shadow to the circular image container
//     */
//     cardImageContainer: {
//         alignItems: 'center',
//         backgroundColor: 'white',
//         borderWidth: 3,
//         borderColor: 'black',
//         width: 120,
//         height: 120,
//         borderRadius: 60,
//         marginTop: 30,
//         paddingTop: 15,
//         ...Platform.select({ 
//           ios: {
//             shadowColor: 'black',
//             shadowOffset: {
//               height: 10,
//             },
//             shadowOpacity: 1
//           },
//           android: {
//             borderWidth: 3,
//             borderColor: 'black',
//             elevation: 15
//           }
//         })
//     },
//     cardImage: {
//         width: 80,
//         height: 80
//     },
//     /*
//         You can use the textShadowColor, textShadowOffset, and textShadowRadius properties to add a shadow to a Text element. 
//         To create a shadow, you need to specify three things:
//             The color
//             The offset
//             The radius

//         The offset specifies the position of the shadow relative to the component casting the shadow. 
//         The radius basically defines how blurry the shadow appears.
//     */
//     cardName: {
//         color: 'white',
//         fontWeight: 'bold',
//         fontSize: 24,
//         marginTop: 30,
//         textShadowColor: 'black',
//         textShadowOffset: {
//             height: 5,
//             width: 5
//         },
//         textShadowRadius: 3 
//     },
//     cardOccupationContainer: {
//         borderColor: 'black',
//         borderBottomWidth: 3
//     },
//     cardOccupation: {
//         fontWeight: 'bold', 
//         marginTop: 10,
//         marginBottom: 10,
//     },
//     cardDescription: {
//         fontStyle: 'italic', 
//         marginTop: 10,
//         marginRight: 40,
//         marginLeft: 40,
//         marginBottom: 10
//     },
//     /*
//         The cardThumbnail style reduces the component’s size by 80%.
//     */
//         cardThumbnail: {
//           transform: [{scale: 0.2}]
//       },
// });


