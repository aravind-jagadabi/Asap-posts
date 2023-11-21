import NavigationBar from "./components/NavigationBar";
import { Box} from "@mui/material";
import { useEffect, useState } from "react";
import ShowPosts from "./components/ShowPosts";
import apikey from "./remotedata/config";
import axios from 'axios';
import NavigationFooter from "./components/NavigationFooter";
import NationShorts from "./components/NationShorts";

function App() {
  const [domain, setDomain] = useState("general");
  const [seeMore, setSeeMore] = useState(20);
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [selectedCountry, setSelectedCountry] = useState('India');


  const newsApi = async () => {
    try{
      const countryName = NationShorts[selectedCountry];
      console.log(countryName);
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryName}&apiKey=${apikey}&category=${domain}&pageSize=${seeMore}`);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch(error){
      console.log('Error while fetching the news aravind...',error);
    }
  }

  useEffect(()=> {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, domain, seeMore, selectedCountry]);
  
  return (
    <Box>
      <NavigationBar setDomain = {setDomain} selectedCountry = {selectedCountry} setSelectedCountry = {setSelectedCountry} />
      <ShowPosts newsArray = {newsArray} newsResults = {newsResults} setSeeMore = {setSeeMore} seeMore = {seeMore} />
      <NavigationFooter />
    </Box>
  );
}

export default App;
