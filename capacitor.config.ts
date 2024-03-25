import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.presentation.project',
  appName: 'GOT Characters',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1000,
      launchAutoHide: true,
      launchFadeOutDuration: 1000,
      //backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      //androidScaleType: "CENTER_CROP",
      showSpinner: false,
      //androidSpinnerStyle: "large",
      //iosSpinnerStyle: "small",
      //spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  },
};

export default config;
