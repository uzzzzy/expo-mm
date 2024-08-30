import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import http from './utils/http';

import { Post } from './types/post';
import { ApiResponse, Pagination } from './types/api-response';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await http.get('/strapi/posts');

    const data = response.data as ApiResponse<Pagination<Post>>;

    setPosts(data.result.data);
  };

  return (
    <View style={{ flex: 1, paddingTop: insets.top, paddingHorizontal: 24 }}>
      <Text>Home</Text>

      <View style={{ gap: 10 }}>
        {posts.map((post, index) => (
          <TouchableOpacity key={index} onPress={() => {}}>
            <View
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderWidth: 1,
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 8,
                  color: '#69afbe',
                  marginBottom: 8,
                }}
              >
                {new Date(post.published_at).toLocaleString('id-ID', {
                  dateStyle: 'long',
                  timeStyle: 'long',
                })}
              </Text>
              <Text>{post.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 32,
  },
  button: {
    backgroundColor: '#69afbe',
    paddingHorizontal: 48,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 16,
  },
});
