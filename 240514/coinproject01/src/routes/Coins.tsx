import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";
import { isDarkAtom } from "../atoms";
import { useSetRecoilState } from "recoil";

const Container = styled.div`
  padding: 20px;
  max-width: 1080px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 16px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: all 0.3s;
  }
  &:hover {
    color: ${(props) => props.theme.bgColor};
  }
`;

const Title = styled.h1`
  font-size: 30px;
  margin: 30px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 10px;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

/* const coins = [
  {
    id: "btc - bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth - ethereum",
    name: "Ethereum",
    symbol: "Eth",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "hex - hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
  },
]; */

interface IcoinProps {
  toggleDark: () => void;
}

const Coins = () => {
  const setterFn = useSetRecoilState(isDarkAtom);
  const { isLoading, data } = useQuery<CoinInterface[]>("allCoins", fetchCoins);

  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       "https://my-json-server.typicode.com/Divjason/coinlist/coins"
  //     );
  //     const json = await response.json();
  //     setCoins(json);
  //     setLoading(false);
  //   })();
  // }, []);

  // const data = async () => {
  //   const response = await fetch(
  //     "https://my-json-server.typicode.com/Divjason/coinlist/coins"
  //   );
  //   const json = await response.json();
  //   console.log(json);
  // };
  // data(); 이렇게 쓰는 것을 고차함수를 이용해서 굳이 data라는 함수를 한번 더 지정해주지 않아도 되도록
  return (
    <Container>
      <Helmet>
        <title>Coin</title>
      </Helmet>
      <Header>
        <Title>Coins Information</Title>
        <button onClick={() => setterFn((prev) => !prev)}>Toggle Mode</button>
      </Header>
      {isLoading ? (
        <Loader>"Loading..."</Loader>
      ) : (
        <CoinList>
          {data?.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                // Now Rank : {coin.rank}
                <Img
                  src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLocaleLowerCase()}`}
                />
                {coin.name} ({coin.symbol}) &rarr; {coin.name} 상세정보 보러
                가기;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
