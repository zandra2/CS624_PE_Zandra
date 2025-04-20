import { Text, View, ScrollView, Image, TextInput, StyleSheet } from "react-native";
import React, { useState } from 'react'

export default App = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    <ScrollView style={styles.container}>
        <Image source={require('../assets/images/icon.png')} style={styles.image} />
        <Text style={styles.question}>Which MSCS courses do you like the most?</Text>
        <TextInput
        style={styles.input}
        placeholder="course name, e.g. CS624"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />
      <View style={styles.section}>
        <Text style={styles.header}>Core Requirements (24 Credits)</Text>
        <Text style={styles.course}>CS 504 Software Engineering (3)</Text>
        <Text style={styles.course}>CS 506 Programming for Computing (3)</Text>
        <Text style={styles.course}>CS 519 Cloud Computing Overview (3)</Text>
        <Text style={styles.course}>CS 533 Computer Architecture (3)</Text>
        <Text style={styles.course}>CS 547 Secure Systems and Programs (3)</Text>
        <Text style={styles.course}>CS 622 Discrete Math and Algorithms for Computing (3)</Text>
        <Text style={styles.course}>DS 510 Artificial Intelligence for Data Science (3)</Text>
        <Text style={styles.course}>DS 620 Machine Learning & Deep Learning (3)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Depth of Study (6 Credits)</Text>
        <Text style={styles.course}>CS 624 Full-Stack Development - Mobile App (3)</Text>
        <Text style={styles.course}>CS 628 Full-Stack Development - Web App (3)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Capstone (3 Credits)</Text>
        <Text style={styles.course}>CS 687 Computer Science Capstone (3)</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: '#fff',
    },
    image: {
      width: 150,
      height: 150,
      alignSelf: 'center',
      marginBottom: 20,
    },
    question: {
      fontSize: 16,
      marginBottom: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: 'blue',
      padding: 10,
      marginBottom: 20,
    },
    section: {
      padding: 10,
    },
    header: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
      backgroundColor: '#ffff00',
      marginLeft: -10

    },
    course: {
      fontSize: 16,
      marginBottom: 5,
    },
  });
  