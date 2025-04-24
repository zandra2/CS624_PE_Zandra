# PE03
Create a React Native mobile app using core components to build a ToDos Mobile App based on the [_React Native Action by Dabit, N. and Buckner, N._](https://learning.oreilly.com/library/view/react-native-in/9781617294051/c03.xhtml#h1-294051c03-0005). 

1. **User Requirements:**
There are four components created in this project, the Button, ToDoList, and ToDoTask. 
- App - manages the state and provides the core logic of adding and deleting tasks. 
- ToDo - Input componenet to add tasks onto the ToDoList.
- ToDoList - a child component of the ToDo that focuses solely on displaying a single task and handling its deletion and completed task(s).
- Button - for reusability that encapsulates the behavior and styling of buttons used across the app.
- TabBar - contain three tabs, All, Active and Complete
2. **System Requirements:**
- Performing class components.
- You must use the core components at least once – View, Text, ScrollView, Image, TextInput, and StyleSheet.
- By using an internal style, the screen shows some styles.

## input-process-output model:
1. A requirement from the environment (input)
2. A computation based on the requirement (process)
3. A provision for the environment (output)

### 1. Input
Runs the app in the development mode after creating a Mobile app

Open [http://localhost:8081](http://localhost:8081) to view it in your browser.

### 2. Process
1. Create a Github repo
2. Select the _"code"_ button from the tab and from the dropdown menu select Codespaces to create codespace on main.

3. In the terminal run to create the mobile app:
```
npx create-expo-app YourMobileAppName
```
4. CD into the newly created UourMobileAppName directory from the terminal.
5. Connect your Expo credentials run:
```
npx expo login
```
Note: enter your username and password

#### Optional
To reset project script to start from scratch run:

```
npm run reset-project
```

6. Add your code. Once satisfied. To start up your app, run:
```
npm run web
```
OR
```
npx expo start --tunnel
```

Note: Uses a **_tunnel_** connection (via Expo servers), allowing your mobile device to connect even if it’s on a different Wi-Fi or cellular network.

If it asks to install @expo/ngrok@^4.1.0, type **_"y"_** for yes.

6. Open [http://localhost:8081](http://localhost:8081) to view it in your browser, scan the QR code or manually type the https://qm-6uao-zandra2-8081.exp.direct/ url onto your mobile device.

<img src="./assets/images/QR_Code.png" alt="resume" width="350" height="400">


Note: 
- To view the mobile app on your device you need to install **_Expo Go_** onto your phone first to be able to use the following feature. 

- To view the app on the browser type **_"w"_** on your terminal. 

- To view the app on a mobile device scan the QR code or manually type the given exp link.

- To refresh the app, type **_"r"_** in the terminal. 

7. To exit the application run,
```
control + c
```

### 3. Output

***1. Testing Input Value***

<img src="./assets/images/input.png" alt="resume" width="350" height="250">


***2. Input and Submit Button***

<img src="./assets/images/todo_input&btn.png" alt="resume"  width="350" height="400">

***3. Complete Task List***

<img src="./assets/images/complete_task.png" alt="resume"  width="350" height="400">

***4. Result***

<img src="./assets/images/result.png" alt="resume" width="252" height="400">



### 4. Additional Resources

[Expo's Doc](https://docs.expo.dev/tutorial/create-your-first-app/)

[File-based routing](https://docs.expo.dev/develop/file-based-routing/)

[Create your first mobile app](https://docs.expo.dev/tutorial/create-your-first-app/)

************************

# Additional Information


# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
