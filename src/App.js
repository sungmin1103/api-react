
import './App.css';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import List from './pages/List';

export const stateContext = React.createContext();

const serviceKey="9bd628172007ec6004775ad78add84b28405597ff013237898bf9c2c38c24a55";

const busanUrl = `http://apis.data.go.kr/6260000/RecommendedService/getRecommendedKr?serviceKey=${serviceKey}&pageNo=8&numOfRows=10&resultType=json`;

const gyeongnamUrl = `http://apis.data.go.kr/6480000/gyeongnamtourculture/gyeongnamtourculturelist?serviceKey=${serviceKey}&pageNo=5&numOfRows=8&resultType=json`;
const App = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [result, setResult] = useState([]);

  const [isRowsLoaded, setIsRowsLoaded] = useState(false);
  const [rows, setRows] = useState([]);

  const location = useLocation();

  useEffect(() => {     
    fetch(busanUrl)
    .then(response => response.json())
    .then(data => {
      //console.log(data.getRecommendedKr.item.map((it) => it.MAIN_TITLE));
      setResult(data.getRecommendedKr.item);
      setIsDataLoaded(true);
    })
    .catch(error => console.log(error));

    fetch(gyeongnamUrl)
    .then(response => response.json())
    .then(data => {
      //console.log(data.gyeongnamtourculturelist.body.items.item.map((it) => it.data_title));
      setRows(data.gyeongnamtourculturelist.body.items.item);
      setIsRowsLoaded(true);
    })
    .catch(error => console.log(error)); 
  },[]);
  const value=location.pathname==="/list"?rows:result;

  if(!isDataLoaded && !isRowsLoaded){
    return <div>데이터를 불러오는 중입니다...</div>
  }
  else{
  return (
    <>
        <stateContext.Provider value={value}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:UC_SEQ' element={<Detail />} />
            <Route path='/list' element={<List />} />
          </Routes>
          </stateContext.Provider>
      </>
  );
  };
};
export default App;