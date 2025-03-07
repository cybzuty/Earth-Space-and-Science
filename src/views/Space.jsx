import react from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';

import Header from "./Helping components/Header";
import Footer from "./Helping components/Footer";

//Images
import spacegalaxy from "../assets/images/space-galaxy.jpg";
import galaxyOne from "../assets/images/galaxy-one.jpg";
import news from "../assets/images/news.webp";
import blackHole from "../assets/images/black-hole.webp";
import blackHole2 from "../assets/images/black-hole-2.jpg";
import searchLife from "../assets/images/search-life.jpg";
import universeTemp from "../assets/images/universe-temp.webp";
import emptyUniverse from "../assets/images/empty-universe.jpg";
import neptune from "../assets/images/neptune.webp";
import theSun from "../assets/images/The-Sun.webp";
import bigBang from "../assets/images/bb-timeline.jpg";
import universeChart from "../assets/images/Universe_Pie_Chart.jpeg";
import fourGasGiants from "../assets/images/the-four-gas-giants.webp";
import astrounatOrbit from "../assets/images/astrounaut-earthOrbit.jpg";
import jwebb1 from "../assets/images/James Webb 1.jpg";
import jwebb2 from "../assets/images/James Webb 2.jpg";
import jwebb3 from "../assets/images/James Webb 3.jpg";
import jwebb4 from "../assets/images/James Webb 4.jpg";
import jwebb5 from "../assets/images/James Webb 5.jpg";
import jwebb6 from "../assets/images/James Webb 6.jpg";
import jwebb7 from "../assets/images/James Webb 7.jpg";
import jwebb8 from "../assets/images/James Webb 8.jpg";


const whatToSearchAndLanguage = "&language=en&category=science&category=world"

const factsAboutEarth = [
    {"img": blackHole,    "title": "Black Hole",   "fact": "#fact1", "text": "There's a supermassive black hole at the heart of every galaxy"},
    {"img": universeTemp, "title": "Temperature",       "fact": "#fact2", "text": "The Universe has the same temperature everywhere"},    
    {"img": emptyUniverse,"title": "Invisible Universe",      "fact": "#fact3", "text": "95% of the Universe is invisible"},
    {"img": neptune,      "title": "Neptune", "fact": "#fact4", "text": "Neptune has only completed one orbit around the Sun since its discovery"},
    {"img": theSun,       "title": "Our Sun",     "fact": "#fact5", "text": "The Sun loses a billion kilos per second"}            
];

const jamesWebbTelescope = [jwebb1, jwebb2, jwebb3, jwebb4, jwebb5, jwebb6, jwebb7, jwebb8];

function Space(props){

    const[post, setPost] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:3000/news", {
            "what": whatToSearchAndLanguage
        })
        .then(response => {
            setPost(response.data);
        })
        .catch(error => {
            console.log(error);
        })

    }, []);


    return (
    <>  
    <Header profileImage={props.profileImage}
            id={props.id}/>

    <div className="firstPart">
            <div className="firstEarthImg">
                <img src={galaxyOne} alt=""/>
            </div>
            <div className="earthPicText">
                <h1>Universe</h1> 
                <p>The universe is everything. It includes all of space, and all the matter and energy that space contains. It even includes time itself and, of course, it includes you.</p>
            </div>
        </div>

        <div id="secondEarth">
            <div className="textPart">
                <h1></h1>
                <p>Earth and the Moon are part of the universe, as are the other planets and their many dozens of moons. Along with asteroids and comets, the 
                    planets orbit the Sun. The Sun is one among hundreds of billions of stars in the Milky Way galaxy, and most of those stars have their own 
                    planets, known as exoplanets. 
                    <br/><br/>The Milky Way is but one of billions of galaxies in the observable universe — all of them, including our 
                    own, are thought to have supermassive black holes at their centers. All the stars in all the galaxies and all the other stuff that astronomers 
                    can’t even observe are all part of the universe. It is, simply, everything.
                </p>
                
                <iframe height="600px" src="https://www.youtube.com/embed/yfWYXY85mBk" frameborder="0"></iframe>

                <p>Here is a footage of stars orbiting around Milky Way's supermassive blackhole Sagittarius A*.
                    The orbit is on the time scale of 18 years.
                    <br/><br />
                    Sagittarius A* is more than 25,000 light years from Earth – our nearest supermassive black hole, with an 
                    estimated mass millions of times that of our Sun.
                    </p>

                <iframe height="600px" src="https://www.youtube.com/embed/ChJU3pWRcrA" frameborder="0"></iframe>
            </div>
            
            <div className="textPart">
                <h1>How old is Earth?</h1>
                <p>Our planet, Earth, is an oasis not only in space, but in time. It may feel permanent, but the entire planet is a fleeting thing 
                    in the lifespan of the universe. For nearly two-thirds of the time since the universe began, Earth did not even exist. Nor will 
                    it last forever in its current state. Several billion years from now, the Sun will expand, swallowing Mercury and Venus, and filling 
                    Earth’s sky. It might even expand large enough to swallow Earth itself. It’s difficult to be certain. After all, humans have only 
                    just begun deciphering the cosmos.
                    <br /><br />
                    While the distant future is difficult to accurately predict, the distant past is slightly less so. By studying the radioactive decay of 
                    isotopes on Earth and in asteroids, scientists have learned that our planet and the solar system formed around 4.6 billion years ago.
                </p>
            </div>

            <div className="textPart">
                <h1>How old is the universe?</h1>
                <p>The universe, on the other hand, appears to be about 13.8 billion years old. Scientists arrived at that number by measuring the ages of the 
                    oldest stars and the rate at which the universe expands. They also measured the expansion by observing the Doppler shift in light from 
                    galaxies, almost all of which are traveling away from us and from each other. The farther the galaxies are, the faster they’re traveling 
                    away. One might expect gravity to slow the galaxies’ motion from one another, but instead they’re speeding up and scientists don’t know why. 
                    In the distant future, the galaxies will be so far away that their light will not be visible from Earth.
                    <br /><br />
                    Put another way, the matter, energy and everything in the universe (including space itself) was more compact last Saturday than it is today. 
                    The same can be said about any time in the past — last year, a million years ago, a billion years ago. But the past doesn’t go on forever.
                    <br /><br />
                    By measuring the speed of galaxies and their distances from us, scientists have found that if we could go back far enough, before galaxies 
                    formed or stars began fusing hydrogen into helium, things were so close together and hot that atoms couldn’t form and photons had nowhere 
                    to go. A bit farther back in time, everything was in the same spot. Or really the entire universe (not just the matter in it) was one spot.
                    <br /><br />
                    It’s not that the universe was a dark, empty space and an explosion happened in it from which all matter sprang forth. The universe didn’t 
                    exist. Space didn’t exist. Time is part of the universe and so it didn’t exist. Time, too, began with the big bang. Space itself expanded 
                    from a single point to the enormous cosmos as the universe expanded over time.
                    <br /><br />
                    Now you're asking yourself - "But, what's the universe expanding into?" 
                    <br /><br />
                    Well, no one knows.
                </p>
                <img src={bigBang} alt="" />
            </div>

            <div className="textPart">
                <h1>What is the universe made of?</h1>
                <p>The universe contains all the energy and matter there is. Much of the observable matter in the universe takes the form of individual atoms of 
                    hydrogen, which is the simplest atomic element, made of only a proton and an electron (if the atom also contains a neutron, it is instead 
                    called deuterium). Two or more atoms sharing electrons is a molecule. Many trillions of atoms together is a dust particle. Smoosh a few tons 
                    of carbon, silica, oxygen, ice, and some metals together, and you have an asteroid. Or collect 333,000 Earth masses of hydrogen and helium 
                    together, and you have a Sun-like star.
                    <br /><br />
                    For the sake of practicality, humans categorize clumps of matter based on their attributes. Galaxies, star clusters, planets, dwarf planets, 
                    rogue planets, moons, rings, ringlets, comets, meteorites, raccoons — they’re all collections of matter exhibiting characteristics different 
                    from one another but obeying the same natural laws.
                    <br /><br />
                    Scientists have begun tallying those clumps of matter and the resulting numbers are pretty wild. Our home galaxy, the Milky Way, contains at 
                    least 100 billion stars, and the observable universe contains at least 100 billion galaxies. If galaxies were all the same size, that would 
                    give us 10 thousand billion billion (or 10 sextillion) stars in the observable universe.
                    <br /><br />
                    But the universe also seems to contain a bunch of matter and energy that we can’t see or directly observe. All the stars, planets, comets, 
                    sea otters, black holes and dung beetles together represent less than 5 percent of the stuff in the universe. About 27 percent of the remainder 
                    is dark matter, and 68 percent is dark energy, neither of which are even remotely understood. The universe as we understand it wouldn’t 
                    work if dark matter and dark energy didn’t exist, and they’re labeled “dark” because scientists can’t seem to directly observe them. At 
                    least not yet.
                </p>
                <img src={universeChart} alt="" />
                <p>
                Like ordinary matter, dark matter takes up space and holds mass. But it doesn’t reflect, absorb, or radiate light – at least not enough for us to 
                detect yet.
                <br /><br />
                While scientists have measured that dark matter makes up about 27% of the cosmos, they’re not sure what it is. Theories include several kinds of 
                as-yet unidentified types of particles that rarely interact with normal matter.
                <br /><br />
                Astronomers didn’t even know dark matter existed until the 20th century. In the 1930s, Swiss astronomer Fritz Zwicky coined the term while studying 
                the Coma galaxy cluster, which contains more than 1,000 galaxies. The speed at which galaxies within a galaxy cluster move depends on the cluster’s 
                total mass and size. Zwicky noticed that galaxies in the Coma cluster were moving faster than could be explained by the amount of matter astronomers 
                could see there.
                <br /><br />
                It wasn’t until the 1970s that U.S. astronomer Vera Rubin confirmed the existence of dark matter by studying how individual galaxies rotated. She 
                and her colleagues found that individual galaxies may contain invisible mass made of dark matter.
                <br /><br />
                Scientists today think dark matter exists in a vast, web-like structure that winds through the whole universe – a gravitational scaffold that 
                attracts most of the cosmos’ normal matter. They’ve determined that dark matter isn’t composed of known particles of matter because the universe 
                would look very different if it were. The search for what makes up dark matter continues.
                </p>
            </div>
           
            <div className="textPart">
                <h1>How has our view of the universe changed over time?</h1>
                <p>
                Human understanding of what the universe is, how it works and how vast it is has changed over the ages. For countless lifetimes, humans had little 
                or no means of understanding the universe. Our distant ancestors instead relied upon myth to explain the origins of everything. Because our ancestors 
                themselves invented them, the myths reflect human concerns, hopes, aspirations or fears rather than the nature of reality.
                <br /><br />
                Several centuries ago, however, humans began to apply mathematics, writing and new investigative principles to the search for knowledge. Those 
                principles were refined over time, as were scientific tools, eventually revealing hints about the nature of the universe. Only a few hundred years 
                ago, when people began systematically investigating the nature of things, the word “scientist” didn’t even exist (researchers were instead called 
                “natural philosophers” for a time). Since then, our knowledge of the universe has repeatedly leapt forward. It was only about a century ago that 
                astronomers first observed galaxies beyond our own, and only a half-century has passed since humans first began sending spacecraft to other worlds.
                <br /><br />
                In the span of a single human lifetime, space probes have voyaged to the outer solar system and sent back the first up-close images of the four 
                giant outermost planets and their countless moons.
                </p>

                <img src={fourGasGiants} alt="" />

                <p>
                Humans constructed a permanently crewed, Earth-orbiting space station.
                </p>

                <img src={astrounatOrbit} alt="" />

                <p>
                And the first large space telescopes delivered jaw-dropping views of more distant parts of the cosmos than ever before.
                </p>

                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    slidesPerView={1}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper2"
                >
                    {jamesWebbTelescope.map(imgs => (
                        <SwiperSlide >
                            <img src={imgs} alt="" />  
                        </SwiperSlide> 
                    ))}
                </Swiper>

                <p>
                    You can even see where is the James Webb Space Telescope currently looking at, all the targets
                    and why are they so interesting.
                    <br />
                    You can see that on this <a target='_blank' style={{color: "red"}}  href="https://webbtelescope.org/science/the-observatory/what-is-webb-observing-now" >page.</a>
                </p>
                
            </div>

            
        </div>
            
{/**FACT CARDS-------------------------------------------------------------------------------------------- */}
        <div id="factsTitle">
            <h1>Some facts about the Universe</h1> 
        </div>

        <Swiper
            cssMode={true}
            navigation={true}
            pagination={false}
            mousewheel={true}
            keyboard={true}
            slidesPerView={4}
            breakpoints={{
                1250: {
                    slidesPerView: 4,
                },
                945: {
                    slidesPerView: 3,
                },
                635: {
                    slidesPerView: 2,
                },
                1: {
                    slidesPerView: 1
                }
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
            {factsAboutEarth.map( (data) => (
               <SwiperSlide>
                    <div className="cards">
                        <div className="cardsImg">
                            <img src={data.img} alt="" />
                        </div>
                        <div className="cardsTitle">
                            <h1>{data.title}</h1>
                        </div>
                        <div className="cardsText">
                            <h3>{data.text}</h3>
                        </div> 
                        <div className="cardsBottom">
                            <p>{data.fact}</p>
                        </div>
                    </div>
                </SwiperSlide> 
            ))
            }
            
            
        </Swiper>

        <div className="spaceBetween"></div>
        
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={false}
            mousewheel={true}
            keyboard={true}
            slidesPerView={4}
            breakpoints={{
                1250: {
                    slidesPerView: 4,
                },
                945: {
                    slidesPerView: 3,
                },
                635: {
                    slidesPerView: 2,
                },
                1: {
                    slidesPerView: 1
                }
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
            {factsAboutEarth.map((data) => (
                <SwiperSlide>
                    <div className="cardsSecond">
                        <div className="cardsImgSecond">
                            <img src={data.img} alt="" />
                        </div>
                        <div className="cardsTitleSecond">
                            <h1>{data.title}</h1>
                        </div>
                        <div className="cardsTextSecond">
                            <h3>{data.text}</h3>
                        </div> 
                        <div className="cardsBottomSecond"></div>
                    </div>
                </SwiperSlide>  
            ))
            }
            
            
        </Swiper>

        <div id=""></div>

{/*TOPICS--------------------------------------------------------------------------------------------------*/}
        <div id="discoverHeadline">
            <h1>Discover More Topics</h1>
        </div>

        <div className="topics">
            <div className="topic">
                <div className="topicImage">
                   <img src={searchLife} alt="" ></img>
                </div>
                
                <a target="_blank" href="https://www.astronomy.com/science/why-we-arent-alone-in-the-universe-but-might-as-well-be/">
                  <h1>Search for Life <KeyboardTabIcon style={{width: "30px", color: "blue"}}/></h1>   
                </a>
            </div>

            <div className="topic">
                <div className="topicImage">
                   <img src={theSun} alt="" ></img>
                </div>
                
                <a target="_blank" href="https://science.nasa.gov/universe/stars/">
                  <h1>Stars <KeyboardTabIcon style={{width: "30px", color: "blue"}}/></h1>   
                </a>
            </div>

            <div className="topic">
                <div className="topicImage">
                   <img src={blackHole2} alt="" ></img>
                </div>
                
                <a target="_blank" href="https://www.space.com/15421-black-holes-facts-formation-discovery-sdcmp.html">
                  <h1>Black Holes <KeyboardTabIcon style={{width: "30px", color: "blue"}}/></h1>   
                </a>
            </div>

            <div className="topic">
                <div className="topicImage">
                   <img src={spacegalaxy} alt="" ></img>
                </div>
                
                <a target="_blank" href="https://hubblesite.org/science/galaxies">
                  <h1>Galaxies <KeyboardTabIcon style={{width: "30px", color: "blue"}}/></h1>   
                </a>
            </div>
        </div>

{/**NEWS PART------------------------------------------------------------------------------------------------ */}
        <div id="newsPart">

            <div className="news">
                <h1>News</h1>
            </div>

            <div className="spaceBetween2"></div>

        {post.length > 0 &&                     //This checks if the array is empty, so that the Page loads even if it is empty.
            <div className="newsSingle">
                
                <div className="newsText">
                    <div className="newsHeader">
                        <h2>{post[0].title}</h2>
                    </div>
                    <div className="newsSubHeading">
                        <p>#{post[0].category}</p>
                    </div>
                    <div className="timeAndWhat">
                        <p>{post[0].source_name} | {post[0].pubDate.slice(0,11)}</p>
                    </div>
                    <div className="clickButton">
                        <a target="_blank" href={post[0].link}>Click Me</a>
                    </div>
                </div>

                <div className="newsImg">
                    <img src={post[0].image_url != null ? post[0].image_url : news} alt="" />
                </div>
                
            </div>
        }

            <div className="newsMany">

                {post.map((singleData) => (
                    <a target="_blank" href={singleData.link}>
                        <div className="newsTextLongs">
                            <div className="longsTextPart">
                                <div className="longsHeader">
                                    <h3>{singleData.title}</h3>
                                </div>
                                <div className="longsSubHeader">
                                    <p>{singleData.description != null ? singleData.description.slice(0,50) + "..." : "#" + singleData.category}</p>
                                </div>
                                <div className="longsTimeAndWhat">
                                    <p>{singleData.pubDate.slice(0,10)}</p>
                                </div>
                            </div>
                            
                            <div className="longsImgPart">
                                <img src={singleData.image_url != null ? singleData.image_url : news} alt="" />
                            </div>
                        </div>
                    </a>  
                ))}
            
            </div>

        </div>
    <Footer />
    </>   
    )
}

export default Space;