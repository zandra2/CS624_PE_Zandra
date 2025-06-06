//First Attempt PE06
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Countries from '../Countries/Countries';
import Country from '../Countries/Country';

const Stack = createStackNavigator();

const CountriesNav = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        justifyItems: 'end',     
        headerStyle: { backgroundColor: '#1976D2' },
        headerTintColor: 'white',
        headerTitleStyle: { fontSize: 20 },
      }}
    >
      <Stack.Screen name="Countries">
        {(screenProps) => <Countries {...props} {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="Country">
        {(screenProps) => <Country {...props} {...screenProps} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default CountriesNav;

// Something to consider PE06
// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import Countries from '../Countries/Countries';
// import Country from '../Countries/Country';

// const Stack = createStackNavigator();

// const CountriesNav = (props) => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: '#1976D2' },
//         headerTintColor: 'white',
//         headerTitleStyle: { fontSize: 20 },
//       }}
//     >
//       <Stack.Screen
//         name="Countries"
//         options={{ title: 'Countries' }}
//       >
//         {(screenProps) => <Countries {...props} {...screenProps} />}
//       </Stack.Screen>

//       <Stack.Screen
//         name="Country"
//         options={{ title: 'Country' }} // ensures top nav says “Country” with back arrow
//       >
//         {(screenProps) => <Country {...props} {...screenProps} />}
//       </Stack.Screen>
//     </Stack.Navigator>
//   );
// };

// export default CountriesNav;