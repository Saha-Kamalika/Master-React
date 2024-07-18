import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "Lena H. Sun",
      "title": "Six Colorado workers contracted bird flu, the most human cases in a state - The Washington Post",
      "description": "Excessive heat made it hard for poultry workers to wear goggles and masks while culling chickens on a farm experiencing an H5N1 outbreak.",
      "url": "https://www.washingtonpost.com/health/2024/07/16/bird-flu-colorado-poultry-cow/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PWCA7DUYUYWIZZZXYIVREPHFKA.JPG&w=1440",
      "publishedAt": "2024-07-17T02:33:01Z",
      "content": "Bird flu has infected six farmworkers in Colorado this month the most in any state as health officials stressed the importance of preparedness to contain the H5N1 virus spreading in dairy herds and p… [+6810 chars]"
    },
    {
      "source": { "id": null, "name": "Yahoo Entertainment" },
      "author": "Carrie McCabe",
      "title": "Amazon Prime Day deals — shop our editors' top picks for up to 70% off - Yahoo Life",
      "description": "We found all-time low pricing ahead of Prime Day on some of our favorite products from Apple, Vitamix, Weber and more.",
      "url": "https://www.yahoo.com/lifestyle/live/amazon-prime-day-deals-shop-our-editors-top-picks-for-up-to-70-off-185944306.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/eQe1QppUILkusbAUEAu27g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-07/b0512860-4378-11ef-bff3-dd84aaea1cb6",
      "publishedAt": "2024-07-17T02:30:00Z",
      "content": "Amazon Prime Day is turning into Amazon Prime night is your cart filled to the brim yet? Well, we hope you have a little more room. We've been perusing the retailer all day (3 a.m. wakeup calls and a… [+1236 chars]"
    },
    {
      "source": { "id": "associated-press", "name": "Associated Press" },
      "author": "WAFAA SHURAFA",
      "title": "Israeli strikes in southern, central Gaza kill more than 60 Palestinians, including in 'safe zone' - The Associated Press",
      "description": "Israeli airstrikes have killed more than 60 Palestinians in southern and central Gaza, including a blast that hit an Israeli-declared “safe zone” crowded with thousands of displaced people. The day’s deadliest strike came Tuesday afternoon, hitting near a gas…",
      "url": "https://apnews.com/article/israel-palestinians-hamas-war-news-07-16-2024-0cff821823185af16fb2ec5ee8e5c986",
      "urlToImage": "https://dims.apnews.com/dims4/default/8a9d8ba/2147483647/strip/true/crop/6957x3913+0+362/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F%5B7%2F5%2C%2F%2025%2C%20121%2C%20114%2C%20-54%2C%20-51%2C%20-11%2C%2073%2C%2070%2C%20-126%2C%20-64%2C%20107%2C%2085%2C%20-74%2C%20-79%2C%207%2C%20-41%2C%20-121%2C%20-53%2C%20-91%2C%2034%2C%20-93%2C%2050%2C%20-52%2C%20-117%2C%20106%2C%2023%2C%20105%5D%2F1c4c2d0ac0894471a1c0b803f7dd1f19",
      "publishedAt": "2024-07-17T02:22:00Z",
      "content": "DEIR AL-BALAH, Gaza Strip (AP) Israeli airstrikes killed more than 60 Palestinians in southern and central Gaza overnight and into Tuesday, including one that struck an Israeli-declared safe zone cro… [+5591 chars]"
    },
    {
      "source": { "id": "abc-news", "name": "ABC News" },
      "author": "Meredith Deliso, Ivan Pereira, Tal Axelrod, Chris Boccia, Alexandra Hutzler",
      "title": "RNC 2024 Day 2 updates: Haley officially endorses Trump at RNC - ABC News",
      "description": "The theme of Tuesday's session is \"Make America Safe Again.\"",
      "url": "https://abcnews.go.com/Politics/live-updates/republican-national-convention-2024-day-2/?id=111987245",
      "urlToImage": "https://i.abcnewsfe.com/a/47e1e726-12e5-4487-bf39-c86ec9c8aee2/rnc-42-gty-gmh-240716_1721180087793_hpMain_16x9.jpg?w=1600",
      "publishedAt": "2024-07-17T01:49:00Z",
      "content": "Madeline Brame, one of the people billed by the RNC as an \"everyday American,\" spoke about the murder of her son in an impassioned speech.\r\nHer son, Hason Correa, was stabbed to death in New York Cit… [+742 chars]"
    },
    {
      "source": { "id": null, "name": "Page Six" },
      "author": "Bernie Zilio",
      "title": "Christina Hall and estranged husband Josh ‘had issues in the marriage’ before filing for divorce: report - Page Six",
      "description": "Christina and Josh reportedly experienced their fair share of marital problems “for quite some time” before heading to court.",
      "url": "https://pagesix.com/2024/07/16/entertainment/christina-and-josh-hall-had-issues-in-the-marriage-before-filing-for-divorce-report/",
      "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2024/07/85559355.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2024-07-17T01:01:00Z",
      "content": "Josh and Christina Hall reportedly experienced their fair share of marital problems long before filing for divorce. Instagram / @unbrokenjosh\r\nChristina Hall and her estranged husband, Josh Hall, rep… [+3831 chars]"
    },
    {
      "source": { "id": null, "name": "NBCSports.com" },
      "author": "Myles Simmons",
      "title": "Quinn Meinerz agrees to four-year extension with Broncos - NBC Sports",
      "description": "A third-round pick out of Wisconsin-Whitewater in 2021, Meinerz will now become one of the league's highest-paid guards.",
      "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/quinn-meinerz-agrees-to-four-year-extension-with-broncos",
      "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/67c83b5/2147483647/strip/true/crop/5687x3199+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fa4%2F81%2F960cd2854f61a52ee22bc2ab5723%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1964195568",
      "publishedAt": "2024-07-17T00:54:09Z",
      "content": "With training camp beginning soon, Broncos offensive lineman Quinn Meinerz has plenty of reason to celebrate. \r\nAccording to multiple reports, Meinerz has agreed to terms with the club on a four-year… [+440 chars]"
    },
    {
      "source": { "id": "cbs-news", "name": "CBS News" },
      "author": "Daniel Klaidman",
      "title": "The billionaire who fueled JD Vance's rapid rise to the Trump VP spot — analysis - CBS News",
      "description": "Vance's most prominent benefactor over the years has been iconoclastic tech investor Peter Thiel, who in recent months said he's not giving money to any politician in 2024.",
      "url": "https://www.cbsnews.com/news/jd-vance-trump-vp-peter-thiel-billionaire/",
      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/07/16/ac7aa4d8-2a3f-4e49-87af-6e4ac4ebf617/thumbnail/1200x630g2/1ab1ca8b31edda9073df08af0c65899f/gettyimages-2161593833.jpg?v=5710b2ed1cee1bdfd30cb9c02455b43d",
      "publishedAt": "2024-07-17T00:31:40Z",
      "content": "Former President Donald Trump's selection of Ohio GOP Sen. JD Vance to be his running mate shows one thing remains constant, even in a presidential race upended by an attempt to assassinate one candi… [+6741 chars]"
    },
    {
      "source": { "id": null, "name": "BBC News" },
      "author": null,
      "title": "Biden considers major Supreme Court reform: report - BBC.com",
      "description": "President considering removal of life-time terms and revamping the court's ethics code, US media reports",
      "url": "https://www.bbc.com/news/articles/c6p25e0pej3o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d070/live/5dbc2f80-43cf-11ef-94fa-2d00890fb88d.jpg",
      "publishedAt": "2024-07-17T00:25:15Z",
      "content": "By Christal Hayes and Anthony Zurcher, BBC News\r\nJoe Biden is considering backing a host of reforms to the US Supreme Court including ending lifetime appointments, according to US media.\r\nBacking suc… [+3094 chars]"
    },
    {
      "source": { "id": null, "name": "Nbcsportsbayarea.com" },
      "author": "Jennifer Lee Chan",
      "title": "Aiyuk's reported 49ers trade request has two likely outcomes - NBC Sports Bay Area",
      "description": "While Brandon Aiyuk reportedly requested a trade from the 49ers on Tuesday, the most likeliest scenarios for the upcoming season don't involve him playing…",
      "url": "https://www.nbcsportsbayarea.com/nfl/san-francisco-49ers/brandon-aiyuk-trade-request-contract/1756744/",
      "urlToImage": "https://media.nbcsportsbayarea.com/2024/07/Brandon-Aiyuk-GETTY.jpg?quality=85&strip=all&resize=1200%2C675",
      "publishedAt": "2024-07-16T23:58:12Z",
      "content": "Brandon Aiyuk reportedly formally requested a trade from the 49ers after contract negotiations stalled in recent weeks, but the future of the All-Pro receiver still is likely to go down one of two pa… [+2870 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": "Reuters UK",
      "title": "Russia's Medvedev says Ukraine joining NATO would mean war - Reuters UK",
      "description": null,
      "url": "https://www.reuters.com/world/uk/russias-medvedev-says-ukraine-joining-nato-would-mean-war-2024-07-16/",
      "urlToImage": null,
      "publishedAt": "2024-07-16T23:42:00Z",
      "content": null
    },
    {
      "source": { "id": "nbc-news", "name": "NBC News" },
      "author": "Maura Barrett, Halle Lukasiewicz",
      "title": "At least eight tornadoes touched down across the Midwest — one in downtown Chicago - NBC News",
      "description": "CHICAGO — The National Weather Service confirmed at least eight tornados touched down across the Midwest in the last two days — with at least one EF-1 tornado touching down in downtown Chicago.",
      "url": "https://www.nbcnews.com/news/weather/dam-fails-rain-wind-tornadoes-pound-midwest-rcna162228",
      "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-07/240716-dam-illinois-mn-1715-91ccf7.jpg",
      "publishedAt": "2024-07-16T23:03:52Z",
      "content": "CHICAGO The National Weather Service confirmed at least eight tornados touched down across the Midwest in the last two days with at least one EF-1 tornado touching down in downtown Chicago. \r\nBack-to… [+2513 chars]"
    },
    {
      "source": { "id": "newsweek", "name": "Newsweek" },
      "author": "Erin Keller",
      "title": "LIVE UPDATES: Trump Expected to Show Up at RNC as Nikki Haley Takes Stage - Newsweek",
      "description": "The second day kicked off of the RNC after Donald Trump's first public appearance since the rally shooting. Following Newsweek's live blog for updates.",
      "url": "https://www.newsweek.com/rnc-2024-live-updates-convention-donald-trump-1925990",
      "urlToImage": "https://d.newsweek.com/en/full/2429945/rnc.jpg",
      "publishedAt": "2024-07-16T22:57:11Z",
      "content": "The second day of the Republican National Convention kicked off on Tuesday after a wild first night that included an emotional Donald Trump making his first public appearance since the Pennsylvania r… [+47017 chars]"
    },
    {
      "source": { "id": "nbc-news", "name": "NBC News" },
      "author": "Evan Bush",
      "title": "Melting ice is slowing Earth's spin and shifting its axis, research shows - NBC News",
      "description": "Melting ice is slowing Earth's spin and causing changes to its axis, new studies find. The shifts are causing feedback beneath the surface, impacting the planet's molten core.",
      "url": "https://www.nbcnews.com/science/environment/melting-ice-shifting-earth-spin-axis-core-rcna162089",
      "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-07/240716-antartica-ice-melted-ch-0947-96828d.jpg",
      "publishedAt": "2024-07-16T22:48:28Z",
      "content": "Climate change is altering the Earth to its literal core, new research suggests. \r\nAs polar and glacial ice melts because of global warming, water that was once concentrated at the top and the bottom… [+5524 chars]"
    },
    {
      "source": { "id": "abc-news", "name": "ABC News" },
      "author": "Leah Sarnoff",
      "title": "Daylight fireball meteor may have rattled parts of New York City and New Jersey, NASA says - ABC News",
      "description": "No meteorites were produced by this event, according to the agency.",
      "url": "https://abcnews.go.com/US/daylight-fireball-meteor-rattled-parts-new-york-city/story?id=112006023",
      "urlToImage": "https://i.abcnewsfe.com/a/28b1b2e5-2ba8-4e10-b8c4-895f2fa9fee3/new-york-skyline-gty-jt-240716_1721166212140_hpMain_16x9.jpg?w=1600",
      "publishedAt": "2024-07-16T22:35:31Z",
      "content": "Residents in parts of New York City and New Jersey were shaken by a loud boom Tuesday morning, with NASA officials saying it was likely due to a daylight fireball meteor.\r\nA daylight fireball is a me… [+1657 chars]"
    },
    {
      "source": { "id": "cbs-news", "name": "CBS News" },
      "author": "David Martin, Eleanor Watson",
      "title": "U.S. military recommends permanently dismantling pier that's helping deliver aid into Gaza, sources say - CBS News",
      "description": "Two U.S. officials say U.S. Central Command has recommended the military permanently dismantle the pier run by the U.S. military to get aid into Gaza amidst the Israel-Hamas war.",
      "url": "https://www.cbsnews.com/news/u-s-military-recommends-permanently-dismantling-gaza-aid-pier/",
      "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/07/16/f546c050-87ab-4d85-90c2-ead9439450b1/thumbnail/1200x630/c1d71cdfa04040c94a9d07d041eea4b4/gettyimages-2160934430.jpg?v=5710b2ed1cee1bdfd30cb9c02455b43d",
      "publishedAt": "2024-07-16T21:39:55Z",
      "content": "U.S. Central Command has recommended permanently dismantling the Gaza pier, according to two U.S. officials. \r\nThe pier, bedeviled by bad weather and mechanical malfunctions, has been in operation fo… [+2703 chars]"
    },
    {
      "source": { "id": null, "name": "[Removed]" },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
    },
    {
      "source": { "id": "ars-technica", "name": "Ars Technica" },
      "author": "Samuel Axon",
      "title": "YouTube creators surprised to find Apple and others trained AI on their videos - Ars Technica",
      "description": "Once again, EleutherAI's data frustrates professional content creators.",
      "url": "https://arstechnica.com/ai/2024/07/apple-was-among-the-companies-that-trained-its-ai-on-youtube-videos/",
      "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/07/Screenshot-2024-07-16-153158-760x380.png",
      "publishedAt": "2024-07-16T21:23:19Z",
      "content": "Enlarge/ YouTuber Marques Brownlee discusses iOS 18 in a new video. This specific video wasn't part of the large dataset that was used to train AI models, but many of his others were.\r\n69\r\nAI models … [+5454 chars]"
    },
    {
      "source": { "id": null, "name": "CNBC" },
      "author": "Leslie Josephs",
      "title": "Spirit Airlines forecasts wider quarterly loss as revenue falls short of expectations - CNBC",
      "description": "Spirit Airlines said Tuesday it would post a wider-than-expected loss for the last quarter because of revenue that came in short of its expectations.",
      "url": "https://www.cnbc.com/2024/07/16/spirit-airlines-second-quarter-loss-warning.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107409734-1714681228947-gettyimages-2006559720-01-b0005020-_hya9z9q0.jpeg?v=1721163035&w=1920&h=1080",
      "publishedAt": "2024-07-16T20:59:37Z",
      "content": "Spirit Airlines said Tuesday it would post a wider-than-expected loss for the last quarter because of revenue that came in short of its expectations.\r\nSpirit expects to report an adjusted loss of bet… [+1289 chars]"
    },
    {
      "source": { "id": null, "name": "Space.com" },
      "author": "Josh Dinner",
      "title": "NASA rolls giant Artemis 2 moon rocket core off the factory floor for astronaut mission (video) - Space.com",
      "description": "\"That is an awesome sight.\"",
      "url": "https://www.space.com/nasa-artemis-2-sls-booster-stage-michoud-rollout-july-16",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/T2wTQjibpLkTecERtiYe5o-1200-80.jpg",
      "publishedAt": "2024-07-16T20:58:37Z",
      "content": "NEW ORLEANS — The core stage of the first rocket to launch astronauts to the moon in over 50 years has left its manufacturing facility, and is bound for vehicle integration and assembly ahead of its … [+8779 chars]"
    },
    {
      "source": { "id": null, "name": "[Removed]" },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
    }
  ]
  constructor(){
    super();
    console.log("Constructor called");
    this.state={
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className='container my-3'>
      <h2>NewsMonkey - Top Headlines</h2>
      <div className="row">
        <div className="col-md-4"><NewsItem title='myTitle' description='myDesc' imageUrl="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PWCA7DUYUYWIZZZXYIVREPHFKA.JPG&w=1440"/></div>
        <div className="col-md-4"><NewsItem/></div>
        <div className="col-md-4"><NewsItem/></div>
      </div>
      
      <div className="row">
        <div className="col-md-4"><NewsItem/></div>
        <div className="col-md-4"><NewsItem/></div>
        <div className="col-md-4"><NewsItem/></div>
      </div>

      <div className="row">
        <div className="col-md-4"><NewsItem/></div>
        <div className="col-md-4"><NewsItem/></div>
        <div className="col-md-4"><NewsItem/></div>
      </div>  
      </div>
    )
  }
}

export default News
