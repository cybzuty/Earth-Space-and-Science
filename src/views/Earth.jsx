import { useEffect, useState } from 'react';
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';



import "./styles/Earth.css";
import Header from "./Helping components/Header";
import Footer from "./Helping components/Footer";

//Images
import earthPic from "../assets/images/earthMoon.avif";
import earthStructure from "../assets/images/Earth_Internal_Structure.svg";
import subduction from "../assets/images/Subduction.svg";
import magneticField from "../assets/images/magnetic_field.svg";
import atmosphere from "../assets/images/atmosphere.png";
import evolvingEarth from "../assets/images/evolvingearth800.webp";
import solarSystemComp from "../assets/images/solar_system_comparison.png";
import moon from "../assets/images/FullMoon2010.jpg";
import news from "../assets/images/news.webp";
import earthRotation from "../assets/images/earth_rotation.jpg";
import Antartica from "../assets/images/antartica.jpg";
import wholeEarth from "../assets/images/whole_earth.jpg";
import earthAtmo from "../assets/images/earth_atmosphere.jpg";


const whatToSearchAndLanguage = "&language=en&category=environment&category=world"

const factsAboutEarth = [
    {"img": earthPic,      "title": "Measuring Up",   "fact": "#fact1", "text": "If the Sun were as tall as a typical front door, Earth would be the size of a nickel."},
    {"img": earthRotation, "title": "Rotation",       "fact": "#fact2", "text": "Earth's Rotation Is Gradually Slowing. This deceleration is happening at approximately 17 milliseconds per hundred years."},    
    {"img": Antartica,     "title": "Antartica",      "fact": "#fact3", "text": "Speaking of dry spots, did you know Antarctica is actually considered a desert?"},
    {"img": wholeEarth,    "title": "Squashed Earth", "fact": "#fact4", "text": "Earth is squashed. Earth is not a perfect sphere, but rather a geoid, which means it bulges at the equator."},
    {"img": earthAtmo,     "title": "Atmosphere",     "fact": "#fact5", "text": "Earth's atmosphere is made of gases. The mixture of gases, what we often refer to as 'air', are nitrogen, oxygen, argon, and carbon dioxide."}            
];

function Earth(props){
    
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
                <img src={earthPic} alt=""/>
            </div>
            <div className="earthPicText">
                <h1>Earth</h1> 
                <p>Earth – our home planet – is the third planet from the Sun, and the fifth largest planet. <br /> 
                    It's the only place we know of inhabited by living things.</p>
            </div>
        </div>

        <div id="secondEarth">
            <div className="textPart">
                <h1>Namesake</h1>
                <p>Earth is the only planet in the solar system whose English name does not come from Greek or Roman mythology. The name was taken from Old English and Germanic. It simply means "the ground." There are, of course, many names for our planet in the thousands of languages spoken by the people of the third planet from the Sun.</p> 
            </div>
            <div className="textPart">
            <h1>Size and Distance</h1>
                <p>With an equatorial radius of 6.371 kilometers, Earth is the biggest of the terrestrial planets and the fifth largest planet in our solar system.  The Earth is almost, but not quite, a perfect sphere. Its equatorial radius is 6378 km, but its polar radius is 6357 km - in other words, the Earth is slightly flattened. <br/>
                    From an average distance of 93 million miles (150 million kilometers), Earth is exactly one astronomical unit away from the Sun because one astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. This unit provides an easy way to quickly compare planets' distances from the Sun.
                    It takes about eight minutes for light from the Sun to reach our planet.
                </p> 
                <img src={solarSystemComp} alt="" />
            </div>
            <div className="textPart">
                <h1>Moons</h1>
                <p>Earth is the only planet that has a single moon. Our Moon is the brightest and most familiar object in the night sky. In many ways, the Moon is responsible for making Earth such a great home. It stabilizes our planet's wobble, which has made the climate less variable over thousands of years.
                    Earth sometimes temporarily hosts orbiting asteroids or large rocks. They are typically trapped by Earth's gravity for a few months or years before returning to an orbit around the Sun. Some asteroids will be in a long “dance” with Earth as both orbit the Sun.
                    Some moons are bits of rock that were captured by a planet's gravity, but our Moon is likely the result of a collision billions of years ago. When Earth was a young planet, a large chunk of rock smashed into it, displacing a portion of Earth's interior. The resulting chunks clumped together and formed our Moon. With a radius of 1,080 miles (1,738 kilometers), the Moon is the fifth largest moon in our solar system (after Ganymede, Titan, Callisto, and Io).
                    The Moon is an average of 384,400 kilometers away from Earth. That means 30 Earth-sized planets could fit in between Earth and its Moon.
                </p>
                <img src={moon} alt="" />
            </div>
            <div className="textPart">
                <h1>Formation</h1>
                <p>The Earth formed over 4.6 billion years ago out of a mixture of dust and gas around the young sun. It grew larger thanks to countless collisions between dust particles, asteroids, and other growing planets, including one last giant impact that threw enough rock, gas, and dust into space to form the moon.
                    <br/> The Earth, like all the other planets in the solar system, started out its life as a disc of dust and gas orbiting the young sun. The dust particles were brought together by the forces of drag to form clumps of rock that grew into what scientists call “planetesimals,” which are tens to hundreds of miles across, and then to Mars-sized “protoplanets” by colliding with each other. 
                    <br/> Earth grew to its final size through one last major collision with another Mars-sized object. This last collision, also known as the “moon-forming impact,” was so large that—in addition to adding lots of material to the Earth—there was enough energy to vaporize some of the rock and metal from both the proto-Earth and the impacting object. This vapor formed a disc around the Earth that eventually cooled and clumped together to become the moon. 
                </p>
                <img src={evolvingEarth} alt="" />
                <iframe height="600px" src="https://www.youtube.com/embed/0tocaAe33v8" frameborder="0"></iframe>
            </div>
            <div className="textPart">
                <h1>Structure</h1>
                <p>Earth is composed of four main layers, starting with an inner core at the planet's center, enveloped by the outer core, mantle, and crust.
                    <br />The inner core is a solid sphere made of iron and nickel metals about 1,221 kilometers in radius. There the temperature is as high as 5,400 degrees Celsius. Surrounding the inner core is the outer core. This layer is about 2,300 kilometers thick, made of iron and nickel fluids.
                    <br />In between the outer core and crust is the mantle, the thickest layer. This hot, viscous mixture of molten rock is about 2,900 kilometers thick and has the consistency of caramel. The outermost layer, Earth's crust, goes about 30 kilometers deep on average on land. At the bottom of the ocean, the crust is thinner and extends about 5 kilometers from the seafloor to the top of the mantle.
                </p>
                <img src={earthStructure} alt="" />
            </div>
            <div className="textPart">
                <h1>Surface</h1>
                <p>Like Mars and Venus, Earth has volcanoes, mountains, and valleys. Earth's lithosphere, which includes the crust (both continental and oceanic) and the upper mantle, is divided into huge plates that are constantly moving. For example, the North American plate moves west over the Pacific Ocean basin, roughly at a rate equal to the growth of our fingernails. Earthquakes result when plates grind past one another, ride up over one another, collide to make mountains, or split and separate.
                    <br/>Earth's global ocean, which covers nearly 70% of the planet's surface, has an average depth of about 2.5 miles (4 kilometers) and contains 97% of Earth's water. Almost all of Earth's volcanoes are hidden under these oceans. Hawaii's Mauna Kea volcano is taller from base to summit than Mount Everest, but most of it is underwater. Earth's longest mountain range is also underwater, at the bottom of the Arctic and Atlantic oceans. It is four times longer than the Andes, Rockies and Himalayas combined.
                </p>
                <img src={subduction} alt="" />
            </div>
            <div className="textPart">
                <h1>Magnetosphere</h1>
                <p>Our planet's rapid rotation and molten nickel-iron core give rise to a magnetic field, which the solar wind distorts into a teardrop shape in space. (The solar wind is a stream of charged particles continuously ejected from the Sun.) When charged particles from the solar wind become trapped in Earth's magnetic field, they collide with air molecules above our planet's magnetic poles. These air molecules then begin to glow and cause aurorae, or the northern and southern lights.
                    <br />The magnetic field is what causes compass needles to point to the North Pole regardless of which way you turn. But the magnetic polarity of Earth can change, flipping the direction of the magnetic field. The geologic record tells scientists that a magnetic reversal takes place about every 400,000 years on average, but the timing is very irregular. As far as we know, such a magnetic reversal doesn't cause any harm to life on Earth, and a reversal is very unlikely to happen for at least another thousand years. But when it does happen, compass needles are likely to point in many different directions for a few centuries while the switch is being made. And after the switch is completed, they will all point south instead of north.
                </p>
                <img src={magneticField} alt="" />
            </div>
            <div className="textPart">
                <h1>Atmosphere</h1>
                <p>Look up. Way up. The clouds you see in the sky, the wind that is moving the trees or the flag in your school yard, even the sunshine you feel on your face—these are all a result of Earth’s atmosphere.
                <br/><br/>Earth’s atmosphere stretches from the surface of the planet up to as far as 10,000 kilometers above. After that, the atmosphere blends into space. Not all scientists agree where the actual upper boundary of the atmosphere is, but they can agree that the bulk of the atmosphere is located close to Earth’s surface—up to a distance of around eight to 15 kilometers.
                <br/><br/>While oxygen is necessary for most life on Earth, the majority of Earth’s atmosphere is not oxygen. Earth’s atmosphere is composed of about 78 percent nitrogen, 21 percent oxygen, 0.9 percent argon, and 0.1 percent other gases. Trace amounts of carbon dioxide, methane, water vapor, and neon are some of the other gases that make up the remaining 0.1 percent.
                <br/><br/>The atmosphere is divided into five different layers, based on temperature. The layer closest to Earth’s surface is the troposphere, reaching from about seven and 15 kilometers from the surface. The troposphere is thickest at the equator, and much thinner at the North and South Poles. The majority of the mass of the entire atmosphere is contained in the troposphere—between approximately 75 and 80 percent. Most of the water vapor in the atmosphere, along with dust and ash particles, are found in the troposphere—explaining why most of Earth’s clouds are located in this layer. Temperatures in the troposphere decrease with altitude.
                </p>
                <img src={atmosphere} alt="" />
                <p>The stratosphere is the next layer up from Earth’s surface. It reaches from the top of the troposphere, which is called the tropopause, to an altitude of approximately 50 kilometers. Temperatures in the stratosphere increase with altitude. A high concentration of ozone, a molecule composed of three atoms of oxygen, makes up the ozone layer of the stratosphere. This ozone absorbs some of the incoming solar radiation, shielding life on Earth from potentially harmful ultraviolet (UV) light, and is responsible for the temperature increase in altitude.
                <br/><br/>The top of the stratosphere is called the stratopause. Above that is the mesosphere, which reaches as far as about 85 kilometers above Earth’s surface. Temperatures decrease in the mesosphere with altitude. In fact, the coldest temperatures in the atmosphere are near the top of the mesosphere—about -90°C. The atmosphere is thin here, but still thick enough so that meteors will burn up as they pass through the mesosphere—creating what we see as “shooting stars.” The upper boundary of the mesosphere is called the mesopause.
                <br/><br/>The thermosphere is located above the mesopause and reaches out to around 600 kilometers. Not much is known about the thermosphere except that temperatures increase with altitude. Solar radiation makes the upper regions of the thermosphere very hot, reaching temperatures as high as 2,000°C.
                <br/><br/>The uppermost layer, that blends with what is considered to be outer space, is the exosphere. The pull of Earth’s gravity is so small here that molecules of gas escape into outer space.
                </p>
            </div>
            
        </div>

        <div id="factsTitle">
            <h1>Some facts about Earth</h1> 
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


export default Earth;