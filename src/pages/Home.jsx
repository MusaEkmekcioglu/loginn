import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
let counter = 0
const Home = () => {
  const [newsData, setNewsData] = useState([])
  // const [moreDetails, setMoreDetails] = useState(true)

  // const getDescription = () => {
  //   moreDetails ? setMoreDetails(false) : setMoreDetails(true)
  // }

  useEffect(() => {
    const getNewsData = async () => {
      await fetch(
        'https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw',
        {
          method: 'GET',
          headers: {
            'x-bingapis-sdk': 'true',
            'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
            'x-rapidapi-key':
              '6ca7dfafc2msh93f655fa94295f5p141e25jsn1a0f6b6c34c2',
          },
        }
      )
        .then((response) => response.json())
        .then((res) => setNewsData(res.value))

        .catch((err) => {
          console.error(err)
        })
    }
    getNewsData()
  }, [])

  console.log(newsData)
  return (
    <div className="container my-2 mt-4">
      <div className="row">
        {newsData
          ? newsData.map((data) => {
              return <Card data={data} key={counter++} />
            })
          : null}
      </div>
    </div>
  )
}

export default Home
