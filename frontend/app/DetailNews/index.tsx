import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";

const { height } = Dimensions.get("window");

export default function ({ route, navigation }) {
  const { imageUrl, description, title, publishAt, author } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
            marginBottom: 10
          }}
        >
          <Text style={{ color: "purple", fontSize: 18 }}>{author}</Text>
          <Text>{publishAt}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: height * 0.5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
  },
});
