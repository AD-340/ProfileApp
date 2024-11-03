import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";

export default function HomeScreen() {
  const Container =
    Platform.OS === "ios" || Platform.OS === "android" ? SafeAreaView : View;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Personal Profile</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg",
          }}
          style={styles.image}
        />
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {/* Information Section */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>First Name</Text>
          <Text style={styles.infoText}>Last Name</Text>
          <Text style={styles.infoText}>City</Text>
          <Text style={styles.infoText}>State</Text>
          <Text style={styles.infoText}>Phone Number</Text>
          <Text style={styles.infoText}>Email Address</Text>
          <Text style={styles.infoText}>Occupation</Text>
          <Text style={styles.infoText}>Company</Text>
          <Text style={styles.infoText}>Education</Text>
          <Text style={styles.infoText}>Skills</Text>
          <Text style={styles.infoText}>Interests</Text>
          <Text style={styles.infoText}>Hobbies</Text>
          <Text style={styles.infoText}>Languages</Text>
          <Text style={styles.infoText}>Certifications</Text>
          <Text style={styles.infoText}>Awards</Text>
        </View>
      </ScrollView>
      {/* Input Form Section */}
      <View style={styles.formContainer}>
        <TextInput style={styles.textInput} placeholder="Enter your name" />
        <TextInput style={styles.textInput} placeholder="Enter your comment" />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            /* Submit action to be added */
          }}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#808080",
  },
  scrollViewContent: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  headerContainer: {
    alignItems: "center",
    backgroundColor: "#c30010",
    marginBottom: 20,
    paddingTop: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1.67,
    resizeMode: "cover",
    borderRadius: 10,
  },
  infoContainer: {
    width: "100%",
    marginBottom: 20,
    alignItems: "flex-start",
  },
  infoText: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 5,
  },
  formContainer: {
    width: "100%",
    marginTop: 20,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "#ffffff",
  },
  submitButton: {
    backgroundColor: "#007bff",
    width: "100%",
    padding: 15,
    borderRadius: 10,
  },
  submitButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
