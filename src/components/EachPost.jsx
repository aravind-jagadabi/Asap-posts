import '../styles/EachPost.css';

const EachPost = ({singleNews}) => {
  
  const fulldate = new Date(singleNews.publishedAt); 
  var date = fulldate.toString().split(" "); 
  const hour = parseInt(date[4].substring(0, 2)); 
  const time = hour > 12 ? true : false;

  return(
    <div className="newsCard">
      <img
        alt={singleNews.title}
        src={
          singleNews.urlToImage
            ? singleNews.urlToImage
            : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"
        }
        className="newsImage"
      />
      <div className="newsText">
        <div>
          <span className="title">{singleNews.title}</span>
          <br />
          <span className="author">
            <a href={singleNews.url} target="__blank" style={{color:'black', textDecoration: 'none'}}>
              <b>short </b>
            </a>{" "}
            <span className="muted">
              {" "}
              by {singleNews.author ? singleNews.author : "unknown"} /{" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description">{singleNews.description}</div>
          <span className="readmore">
            read more at{" "}
            <a href={singleNews.url} target="__blank" className="source">
              <b>{singleNews.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default EachPost;