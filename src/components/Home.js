import React, { useEffect, useState } from 'react'
import axios from 'axios'
import VideoCard from './videoCard'

const Home = () => {
  const [feedData, setFeedData] = useState([])
  useEffect(() => {
    axios
      .get(
        'https://youtube-v31.p.rapidapi.com/search?part=snippet&q=New&maxResults=50',
        {
          headers: {
            'X-RapidAPI-Key':
              '0cc8f6ccd6msh2254712f5005324p1b2dc0jsnd1bb35c13667',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
          },
        }
      )
      .then((res) => {
        console.log(res.data.items)
        setFeedData(res.data.items)
      })
  }, [])
  return (
    <div className="home">
      {feedData?.map((item) => (
        <VideoCard
          key={item.id.videoId}
          data={{
            title: item.snippet.title,
            channelTitle: item.snippet.channelTitle,
            thumbnail: item.snippet.thumbnails.high.url,
            publishedAt: item.snippet.publishedAt,
          }}
        />
      ))}
    </div>
  )
}

export default Home
