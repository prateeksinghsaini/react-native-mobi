import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import MovieCard from '@/components/MovieCard'
import useFetch from '@/services/useFetch'
import { fetchMovies } from '@/services/api'
import { useRouter } from 'expo-router'
import SearchBar from '@/components/SearchBar'

interface movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const search = () => {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError
  } = useFetch(() => fetchMovies({
    query: ""
  }))

  return (
    <View className='flex-1 bg-primary'>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <MovieCard {...item} />}
        className='px-3'
        numColumns={3}
        columnWrapperClassName='flex-center gap-3 mb-4'
        contentContainerClassName='pb-96'
        ListHeaderComponent={
          <>
            <Image source={require("../../assets/images/logo.png")} className="w-12 h-10 mt-20 mb-5 mx-auto" />
            <View className='mb-5'>
              <SearchBar placeholder='Search movies ...'  />
            </View>
            {moviesLoading && <ActivityIndicator size="large" />}
          </>
        }
      />
    </View>
  )
}

export default search