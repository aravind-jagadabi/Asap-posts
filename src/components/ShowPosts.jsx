import { Button, Container } from "@mui/material";
import EachPost from "./EachPost";

const ShowPosts = ({newsArray, newsResults, setSeeMore, seeMore}) => {

  return(
    <Container maxWidth = "md">
      <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {
          newsArray.map((singleNews) => {
            return <EachPost singleNews = {singleNews} key = {singleNews.title} />
          })
        }

        {
          seeMore <= newsResults && <div>
            <Button variant = 'contained' color = 'inherit' sx = {{
                marginBottom: '20px',
                marginTop: '20px',
                paddingLeft: '20px', 
                paddingRight: '20px'
                }} onClick = {() => setSeeMore(seeMore+20)}>See More</Button>
            </div>
        }
        
      </div>
    </Container>
  );
}

export default ShowPosts;