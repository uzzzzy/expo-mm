import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Markdown from 'react-native-markdown-display';

import http from '@/app/utils/http';
import { PostDetail } from '@/app/types/post';
import { ApiResponse } from '@/app/types/api-response';

export default function PostDetailScreen(props: any) {
  const slug = props.route.params.slug;
  const [data, setData] = React.useState<PostDetail>();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await http.get('/strapi/posts/' + slug);

    const post = response.data as ApiResponse<PostDetail>;

    setData(post.result);
  };

  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 24,
          paddingBottom: 32,
          paddingHorizontal: 24,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 16,
          }}
        >
          {data?.title.trim() || ''}
        </Text>
        <Markdown>{data?.content || ''}</Markdown>
      </ScrollView>
    </View>
  );
}
