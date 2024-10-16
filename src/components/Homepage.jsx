import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';
// import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return "Loading...";

  return (
    <>
      {/* Global Crypto Stats section */}
      <Title level={2} className="heading" style={{ marginLeft: '20px' }}>Global Crypto Stats</Title>
      <Row style={{ marginLeft: '20px' }}>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value={globalStats?.total} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Exchanges' value={millify(globalStats?.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic 
            title='Total Market Cap' 
            value={`${millify(globalStats?.totalMarketCap)}T`} // Assuming trillions
          />
        </Col>
        <Col span={12}>
          <Statistic 
            title='Total 24h Volume' 
            value={`${millify(globalStats?.total24hVolume)}B`} // Assuming billions
          />
        </Col>
        <Col span={12}>
          <Statistic title='Total Markets' value={millify(globalStats?.totalMarkets)} />
        </Col>
      </Row>
      
      {/* Top 10 Cryptos in the World section */}
      <div className="home-heading-container" style={{ marginLeft: '20px' }}>
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />

      {/* Latest Crypto News section */}
      <div className="home-heading-container" style={{ marginLeft: '20px' }}>
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}>
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
