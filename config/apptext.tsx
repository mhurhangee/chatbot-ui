// Define the structure of your text data
interface AppText {
  common: {
    brandName: string;
    welcomeMessage: string;
    appDescription: string;
  };
  landingPage: {
    button: string;
  };

}

// Create an object with your app's text
export const appText: AppText = {
  common: {
    brandName: "patflo",
    welcomeMessage: "Welcome to patflo!",
    appDescription:
      "patflo is a platform that combines the latest in AI, machine-learning and patent.",
  },
  landingPage: {
    button: "Start innovating with patflo",
  },
};