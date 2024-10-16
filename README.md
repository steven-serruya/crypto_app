# Crypto Tracker Application

This project is a **Crypto Tracker Application** built with **React**, using **Redux Toolkit** to fetch cryptocurrency data and news via APIs. It provides real-time information on the top cryptocurrencies, detailed stats on each currency, and the latest news in the crypto world. The app also includes filtering functionality for both news and cryptocurrencies, allowing users to stay updated and informed.

## Features

- **Global Crypto Stats**: Displays stats such as total cryptocurrencies, exchanges, market cap, 24-hour volume, and markets.
- **Top Cryptocurrencies**: Lists the top 10 cryptocurrencies in the world with real-time data.
- **Crypto Details**: Shows detailed information about each cryptocurrency, including price, market cap, history, and more.
- **Latest Crypto News**: Fetches and displays the latest news articles related to cryptocurrencies.
- **Filtering**: Users can filter cryptocurrencies and news to quickly find the information they need.

## Technologies Used

- **React**: Frontend framework used for building the UI.
- **Redux Toolkit**: For state management and API calls.
- **Ant Design**: UI component library for layout and design.
- **RapidAPI**: Used for fetching data from cryptocurrency and news APIs.

## Project Setup

To get started with the project, follow these steps:

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine.

### Installation

1. Clone the repository:

    
    git clone https://github.com/your-username/crypto-tracker-app.git
    

2. Navigate to the project directory:

    
    cd crypto-tracker-app
  

3. Install the dependencies:

    
    npm install
  

### Environment Variables

To run the project, you'll need to configure the following environment variables in a `.env` file located at the root of your project

### To start the development server:

npm start 

## API Usage

This app uses two main APIs from **RapidAPI**:

- **CoinRanking API**: Used to fetch cryptocurrency data such as global stats, individual coin details, and market history.
- **Crypto News API**: Used to fetch the latest news about cryptocurrencies.

### Crypto API Endpoints

- **Global Stats**: `/stats`
- **Top Cryptocurrencies**: `/coins?limit=10`
- **Coin Details**: `/coin/{coinId}`
- **Coin History**: `/coin/{coinId}/history?timePeriod={timeperiod}`
- **Exchanges**: `/coin/{coinId}/exchanges`

### News API Endpoint

- **Crypto Daily News**: `/v1/cryptodaily`

## Pages and Components

### Homepage

- **Global Crypto Stats**: Displays global stats for cryptocurrencies.
- **Top 10 Cryptos In The World**: Lists the top 10 cryptocurrencies with stats like price, market cap, and volume.
- **Latest Crypto News**: Fetches and displays news articles related to cryptocurrencies.

### Crypto Details

- **CryptoDetails**: Provides detailed stats and charts about a specific cryptocurrency.

### News

- **News**: Fetches and displays the latest crypto-related news with filters.

## Filtering

The app includes filtering capabilities for both cryptocurrencies and news:

- **Cryptocurrencies**: You can filter by currency type and sorting options.
- **News**: You can filter news articles based on topics and relevance.
