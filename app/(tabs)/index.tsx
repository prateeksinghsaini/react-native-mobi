import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";

interface movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError
  } = useFetch(() => fetchMovies({
    query: ""
  }))

  return (
    <View className="flex-1 bg-primary">
      {/* <Image source={require("../../assets/images/bg.jpg")} className="w-full h-full absolute z-0" /> */}
      <ScrollView className="flex-1 px-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}
      >
        <Image source={require("../../assets/images/logo.png")} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        {
          moviesLoading
            ? <ActivityIndicator
              size="large"
              color="black"
              className="mt-10 self-center"
            />
            : moviesError
              ? <Text>Error: {moviesError?.message}</Text>
              : <View className="flex-1">
                <SearchBar
                  onPress={() => router.push('/search')}
                  placeholder="Search for a movie"
                />
                <Text className="my-5 text-white text-xl font-bold">Latest Movies</Text>
                <FlatList
                  keyExtractor={(item) => item.id.toString()}
                  data={movies}
                  numColumns={3}
                  columnWrapperClassName="flex-start gap-3 mb-4"
                  renderItem={({ item }: { item: movie }) => (
                    <MovieCard {...item} />
                  )}
                  scrollEnabled={false}
                />

              </View>
        }
      </ScrollView>
    </View>
  );
}