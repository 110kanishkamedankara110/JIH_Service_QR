import React, { useRef, useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { WebView } from "react-native-webview";

const MyWebScreen = () => {
  const webViewRef = useRef<WebView>(null);
  const [canGoBack, setCanGoBack] = useState(false);

  return (
    <>
      <View style={styles.container}>
        {/* Back Button - Only Shows When User Can Go Back */}
        
          <View style={styles.buttonContainer}>
            <Button title="Back" onPress={() =>webViewRef.current?webViewRef.current.goBack():null} />
          </View>
        

        {/* WebView */}
        <WebView
          ref={webViewRef}
          source={{ uri: "https://join.ananda.college/form/gc0uy0" }}
          onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures WebView takes full screen
  },
  buttonContainer: {
    position: "absolute",
    top: 40, // Adjust for visibility
    left: 10,
    zIndex: 1,
  },
});

export default MyWebScreen;
