import { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function ({ navigation }) {
  const [articles, setArticles] = useState([]);

  const getDataFromNewsApi = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3a02b8c644bd4df29d5e607607d4105a"
    );
    const data = await response.json();
    setArticles(data.articles);
  };

  useEffect(() => {
    getDataFromNewsApi();
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          height: "100%",
        }}
      >
        <View style={{ height: 450, backgroundColor: "white" }}>
          {articles.length === 0 ? (
            <ActivityIndicator
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              size="large"
            />
          ) : (
            <FlatList
              style={{
                padding: 10,
              }}
              horizontal={true}
              data={articles}
              renderItem={({ item }) => {
                return (
                  <Pressable
                    onPress={() =>
                      navigation.navigate("DetailNews", {
                        imageUrl: item.urlToImage,
                        title: item.title,
                        description: item.description,
                        author: item.author,
                        publishAt: item.publishedAt,
                      })
                    }
                  >
                    <View
                      style={{
                        height: "65%",
                        width: 300,
                        padding: 5,
                        marginVertical: 8,
                        marginRight: 20,
                      }}
                    >
                      <Image
                        style={{
                          height: 350,
                          width: 300,
                          borderRadius: 20,
                        }}
                        src={item.urlToImage}
                      />
                      <Text style={{ fontSize: 16 }}>{item.title}</Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop: 5,
                        }}
                      >
                        <Text style={{ color: "purple", fontSize: 18 }}>
                          {item.author}
                        </Text>
                        <Text>{item.publishedAt}</Text>
                      </View>
                    </View>
                  </Pressable>
                );
              }}
              keyExtractor={(item) => item.source.id}
            />
          )}
        </View>
        {articles.length === 0 ? (
          <ActivityIndicator
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
            }}
            size="large"
          />
        ) : (
          <FlatList
            style={{
              backgroundColor: "white",
            }}
            data={articles}
            renderItem={({ item }) => (
              <Pressable
                onPress={() =>
                  navigation.navigate("DetailNews", {
                    imageUrl: item.urlToImage,
                    title: item.title,
                    description: item.description,
                    author: item.author,
                    publishAt: item.publishedAt,
                  })
                }
                style={styles.itemContainer}
              >
                <Image source={{ uri: item.urlToImage }} style={styles.image} />
                <View style={styles.infoContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.details}>
                    {item.author} {item.publishedAt}
                  </Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.source.id}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
