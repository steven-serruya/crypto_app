import React, { useState } from 'react';
import { Select, Typography, Row, Col, Card } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import moment from 'moment';
// import Loader from './Loader';

const { Title, Text } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const [searchTerm, setSearchTerm] = useState(''); // State for the search term
  const { data: cryptoData } = useGetCryptosQuery(100);

  // Fetching news articles based on the selected category and simplified view
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 18 });
  
  const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

  if (!cryptoNews?.data) return 'Loading...'

  return (
    <div>
      {/* Input for searching news articles */}
      {!simplified && (
        <input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
        />
      )}
      <Row gutter={[24, 24]}>
        {cryptoNews.data
          .filter(news => news.title.toLowerCase().includes(searchTerm.toLowerCase())) // Filter based on title
          .slice(0, simplified ? 6 : 18)
          .map((news, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className="news-card">
                <a href={news.url} target="_blank" rel="noreferrer">
                  <div className="news-image-container" style={{ padding: '10px' }}>
                    <img src={news.thumbnail || demoImage} alt={news.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                    <Title className="news-title" level={4}>{news.title}</Title>
                  </div>
                  <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                  <Text>{moment(news.createdAt).fromNow()}</Text>
                </a>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default News;
