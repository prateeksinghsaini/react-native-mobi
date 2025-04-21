import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const MovieCard = ({ id, poster_path, title, vote_average, release_date }) => {
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className='w-[31%]'>
                <Image
                    className='w-full h-48 rounded-lg'
                    source={{
                        uri: poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : 'https://placeholder.co/600x400/1a1a1a/ffffff.png'
                    }}
                    resizeMode='cover'
                />
                <Text className='text-sm font-bold text-white' numberOfLines={1}>{title}</Text>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard;