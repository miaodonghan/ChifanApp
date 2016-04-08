# ChifanApp
Codebase for GoldenClub mobile app written in [React Native](http://facebook.github.io/react-native/).

## Setting things up
- Mac OS and XCode are required for iOS development; Android SDK is required for Android development.
- Development of Android App is well supported on Windows and Linux.
- Package dependencies are managed by `npm`, native UI component usually require more steps for compilation. But usually we only need to :
```bash
npm install
```
### Compile and deploy your application
#### iOS
   ```bash
   react_native run-ios
   ```
#### Android
   - Set Android SDK path first (put in your `.bashrc` in Linux or `bash_profile` in Mac)
   
   ```  
   export ANDROID_HOME=/Users/donghan/Library/Android/sdk
   ```
   - then
   
   ```bash
   react_native run-android
   ```
   - Lastly, run following command if you are running on a real android device.
   
   ```
   $ANDROID_SDK/platform-tools/adb reverse tcp:8081 tcp:8081
   ```
## How to Debug
  - Modified source code can be reloaded without fresh deployment
#### iOS
   `Cmd + R` will reload your updated code.
#### Android
  use `adb` tool to trigger debug menu. ``` $ANDROID_SDK/platform-tools/adb shell input keyevent 82```
  
  However, If new source files are created, reloading page won't work. you will have to redeploy your application.
  - Debug through Chrome development tools
  [http://localhost:8081/debugger-ui](http://localhost:8081/debugger-ui)
  
