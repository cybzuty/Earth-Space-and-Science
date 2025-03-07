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
import scienceBackground from "../assets/images/science-background-2.jpg";
import news from "../assets/images/news.webp";
import biology from "../assets/images/biology.jpg";
import chemisty from "../assets/images/chemistry.webp";
import medicine from "../assets/images/medicine.jpg";
import social from "../assets/images/SocialScience.jpg";
import past from "../assets/images/Past-1.png";
import diamondRain from "../assets/images/diamond-rain.webp";
import lightningToast from "../assets/images/lightning-toast-1.png";
import math from "../assets/images/math.jpg";
import nose from "../assets/images/nose-1.png";


const whatToSearchAndLanguage = "&language=en&category=science&category=world"

const factsAboutEarth = [
    {"img": past,           "title": "We only see the past",    "fact": "#fact1",   "text": "It takes approximately 50 milliseconds for visual information to process in your brain, by the time you actually see something, it already happened."},
    {"img": lightningToast, "title": "Bolt",                    "fact": "#fact2",   "text": "A single bolt of lightning could contain enough energy to cook 20,000 pieces of toast."},    
    {"img": nose,           "title": "Your nose",               "fact": "#fact3",   "text": "You are always looking at your nose, your brain just chooses to ignore it."},
    {"img": math,           "title": "Math is a universal lang.", "fact": "#fact4", "text": "2+2 is always 4 no matter what symbols you use to communicate it. "},
    {"img": diamondRain,    "title": "Diamond Rain",              "fact": "#fact5", "text": "On Saturn and Jupiter, atmospheric pressure is so high it could crush carbon atoms into diamonds in their atmosphere."}            
];


function Science(props){

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
{/**FIRST PART--------------------------------------------------------------------------------------------------- */}
        <div className="firstPart">
            <div className="firstEarthImg">
                <img src={scienceBackground} alt=""/>
            </div>

            <div className="earthPicText">
                <h1>Science</h1> 
                <p>
                    Science is the pursuit and application of knowledge and understanding of the natural and 
                    social world following a systematic methodology based on evidence.
                </p>
            </div>
        </div>

{/**SECOND PART------------------------------------------------------------------------------------------------- */}
        <div id="secondEarth">
            <div className="textPart">
                <h1></h1>
                <p>
                In general, a science involves a pursuit of knowledge covering general truths or the operations of fundamental laws.
                <br /><br />
                Science can be divided into different branches based on the subject of study. <br />
                The physical sciences study the inorganic world and 
                comprise the fields of astronomy, physics, chemistry, and the Earth sciences.
                </p>
                
                <iframe height="600px" src="https://www.youtube.com/embed/Q10_srZ-pbs" frameborder="0"></iframe>

                <p>
                The biological sciences such as biology and 
                medicine study the organic world of life and its processes. Social sciences like anthropology and economics study the 
                social and cultural aspects of human behaviour.
                </p>

                <iframe height="600px" src="https://www.youtube.com/embed/pnKXuVV5C18" frameborder="0"></iframe>
            </div>
            
            <div className="textPart">
                <h1>Physics</h1>
                <p>
                <b>Physics</b>, science that deals with the structure of matter and the interactions between the fundamental constituents 
                of the observable universe. In the broadest sense, physics (from the Greek physikos) is concerned with all aspects 
                of nature on both the macroscopic and submicroscopic levels. <br /><br /> 
                Its scope of study encompasses not only the behaviour 
                of objects under the action of given forces but also the nature and origin of gravitational, electromagnetic, and 
                nuclear force fields. Its ultimate objective is the formulation of a few comprehensive principles that bring together 
                and explain all such disparate phenomena.
                <br /><br />
                Both experiment, the observation of phenomena under conditions that are controlled as precisely as possible, and 
                theory, the formulation of a unified conceptual framework, play essential and complementary roles in the advancement 
                of physics. Physical experiments result in measurements, which are compared with the outcome predicted by theory. 
                A theory that reliably predicts the results of experiments to which it is applicable is said to embody a law of physics. 
                <br /><br />
                However, a law is always subject to modification, replacement, or restriction to a more limited domain, if a later 
                experiment makes it necessary.
                <br /><br />
                The ultimate aim of physics is to find a unified set of laws governing matter, motion, and energy at small (microscopic) 
                subatomic distances, at the human (macroscopic) scale of everyday life, and out to the largest distances (e.g., those on 
                the extragalactic scale). This ambitious goal has been realized to a notable extent. Although a completely unified theory 
                of physical phenomena has not yet been achieved (and possibly never will be), a remarkably small set of fundamental physical 
                laws appears able to account for all known phenomena. 
                <br /><br />
                The body of physics developed up to about the turn of the 20th century, known as classical physics, can largely account for 
                the motions of macroscopic objects that move slowly with respect to the speed of light and for such phenomena as heat, 
                sound, electricity, magnetism, and light. The modern developments of relativity and quantum mechanics modify these laws 
                insofar as they apply to higher speeds, very massive objects, and to the tiny elementary constituents of matter, such as 
                electrons, protons, and neutrons.
                </p>

                <p>
                    <b>Influence of physics on related disciplines</b>
                    <br /><br />
                    Because physics elucidates the simplest fundamental questions in nature on which there can be a consensus, it is 
                    hardly surprising that it has had a profound impact on other fields of science, on philosophy, on the worldview 
                    of the developed world, and, of course, on technology.
                    <br /><br />
                    Indeed, whenever a branch of physics has reached such a degree of maturity that its basic elements are comprehended 
                    in general principles, it has moved from basic to applied physics and thence to technology. Thus almost all current 
                    activity in classical physics consists of applied physics, and its contents form the core of many branches of engineering. 
                    <br /><br />
                    Discoveries in modern physics are converted with increasing rapidity into technical innovations and analytical tools for 
                    associated disciplines. There are, for example, such nascent fields as nuclear and biomedical engineering, quantum chemistry 
                    and quantum optics, and radio, X-ray, and gamma-ray astronomy, as well as such analytic tools as radioisotopes, spectroscopy, 
                    and lasers, which all stem directly from basic physics.
                </p>
            </div>

            <div className="textPart">
                <h1>The scope of physics</h1>
                <p>
                    <h3><u>Mechanics</u></h3>
                    <br />
                    is generally taken to mean the study of the motion of objects (or their lack of motion) under the 
                    action of given forces. Classical mechanics is sometimes considered a branch of applied mathematics. <br /> It consists of kinematics, 
                    the description of motion, and dynamics, the study of the action of forces in producing either motion or static equilibrium 
                    (the latter constituting the science of statics). <br /> The 20th-century subjects of quantum mechanics, crucial to treating the 
                    structure of matter, subatomic particles, superfluidity, superconductivity, neutron stars, and other major phenomena, and 
                    relativistic mechanics, important when speeds approach that of light.
                    <br /><br />

                    <h3><u>Gravitation</u></h3>
                    <br />
                    this field of inquiry has in the past been placed within classical mechanics for historical reasons, because 
                    both fields were brought to a high state of perfection by Newton and also because of its universal character. <br /> Newton’s 
                    gravitational law states that every material particle in the universe attracts every other one with a force that acts 
                    along the line joining them and whose strength is directly proportional to the product of their masses and inversely 
                    proportional to the square of their separation. 
                    <br /><br />
                    Newton’s detailed accounting for the orbits of the planets and the 
                    Moon, as well as for such subtle gravitational effects as the tides and the precession of the equinoxes (a slow cyclical 
                    change in direction of Earth’s axis of rotation), through this fundamental force was the first triumph of classical 
                    mechanics. No further principles are required to understand the principal aspects of rocketry and space flight (although, 
                    of course, a formidable technology is needed to carry them out).
                    <br /><br />
                    <u>The modern theory of gravitation</u> was formulated by Albert Einstein and is called the general theory of relativity. From 
                    the long-known equality of the quantity “mass” in Newton’s second law of motion and that in his gravitational law, Einstein 
                    was struck by the fact that acceleration can locally annul a gravitational force (as occurs in the so-called weightlessness 
                    of astronauts in an Earth-orbiting spacecraft) and was led thereby to the concept of curved space-time. 
                    <br /><br /> 
                    Completed in 1915, the theory was valued for many years mainly for its mathematical beauty and for correctly predicting a small number of 
                    phenomena, such as the gravitational bending of light around a massive object. Only in recent years, however, has it 
                    become a vital subject for both theoretical and experimental research. (Relativistic mechanics refers to Einstein’s special 
                    theory of relativity, which is not a theory of gravitation.)
                    <br /><br />

                    <h3><u>The study of heat, thermodynamics, and statistical mechanics</u></h3>
                    <br /><br />
                    Heat is a form of internal energy associated with the random motion of the molecular constituents of matter or with radiation. 
                    Temperature is an average of a part of the internal energy present in a body (it does not include the energy of molecular 
                    binding or of molecular rotation). 
                    <br /><br /> 
                    The lowest possible energy state of a substance is defined as the absolute zero 
                    (−273.15 °C, or −459.67 °F) of temperature. An isolated body eventually reaches uniform temperature, a state known as 
                    thermal equilibrium, as do two or more bodies placed in contact. <br /> The formal study of states of matter at (or near) 
                    thermal equilibrium is called thermodynamics; it is capable of analyzing a large variety of thermal systems without 
                    considering their detailed microstructures.
                    <br /><br />

                    <b>First law</b>
                    <br /><br />
                    <u>The first law of thermodynamics</u> is the energy conservation principle of mechanics (i.e., for all changes in an 
                    isolated system, the energy remains constant) generalized to include heat.
                    <br /><br />
                </p>
                <iframe height="400px" src="https://www.youtube.com/embed/1OFlW8OXN64" frameborder="0"></iframe>
                    
                <p>
                    <b>Second law</b><br /><br />
                        <u>The second law of thermodynamics</u>  asserts that heat will not flow from a place of lower temperature to one where it is 
                        higher without the intervention of an external device (e.g., a refrigerator). The concept of entropy involves the 
                        measurement of the state of disorder of the particles making up a system. For example, if tossing a coin many times 
                        results in a random-appearing sequence of heads and tails, the result has a higher entropy than if heads and tails 
                        tend to appear in clusters. Another formulation of the second law is that the entropy of an isolated system never 
                        decreases with time.
                    <br /><br />
                </p>  
                <iframe height="400px" src="https://www.youtube.com/embed/mGDJO2M7RBg" frameborder="0"></iframe>  

                <p>
                    <b>Third law</b>
                    <br /><br />
                    <u>The third law of thermodynamics</u> states that the entropy at the absolute zero of temperature is zero, corresponding 
                    to the most ordered possible state.
                </p>
                <iframe height="400px" src="https://www.youtube.com/embed/kswiDQ2aAKA" frameborder="0"></iframe>

            </div>

            <div className="textPart">
                <h3><u>Statistical mechanics</u></h3>
                <p>
                    The science of statistical mechanics derives bulk properties of systems from the mechanical properties of their 
                    molecular constituents, assuming molecular chaos and applying the laws of probability. Regarding each possible 
                    configuration of the particles as equally likely, the chaotic state (the state of maximum entropy) is so enormously 
                    more likely than ordered states that an isolated system will evolve to it, as stated in the second law of 
                    thermodynamics. 
                    <br /><br />
                    Such reasoning, placed in mathematically precise form, is typical of statistical mechanics, which 
                    is capable of deriving the laws of thermodynamics but goes beyond them in describing fluctuations (i.e., 
                    temporary departures) from the thermodynamic laws that describe only average behaviour. An example of a fluctuation 
                    phenomenon is the random motion of small particles suspended in a fluid, known as Brownian motion.    
                </p>
                <iframe height="500px" src="https://www.youtube.com/embed/5jBVYvHeG2c?rel=0&start=121" frameborder="0"></iframe>

                <p>
                Quantum statistical mechanics plays a major role in many other modern fields of science, as, for example, 
                in plasma physics (the study of fully ionized gases), in solid-state physics, and in the study of stellar 
                structure. 
                <br /><br /> 
                From a microscopic point of view the laws of thermodynamics imply that, whereas the total quantity 
                of energy of any isolated system is constant, what might be called the quality of this energy is degraded as 
                the system moves inexorably, through the operation of the laws of chance, to states of increasing disorder until 
                it finally reaches the state of maximum disorder (maximum entropy), in which all parts of the system are at the 
                same temperature, and none of the state’s energy may be usefully employed. When applied to the universe as a whole, 
                considered as an isolated system, this ultimate chaotic condition has been called the “heat death.”
                </p>
            </div>

            <div className="textPart">
                <h3><u>The study of electricity and magnetism</u></h3>
                <p>
                    Although conceived of as distinct phenomena until the 19th century, electricity and magnetism are now known 
                    to be components of the unified field of electromagnetism. Particles with electric charge interact by an electric 
                    force, while charged particles in motion produce and respond to magnetic forces as well. 
                    <br />
                    Many subatomic particles, including the electrically charged electron and proton and the electrically neutral neutron, behave like elementary
                    magnets. On the other hand, in spite of systematic searches undertaken, no magnetic monopoles, which would be the 
                    magnetic analogues of electric charges, have ever been found.
                    <br /><br />
                    The field concept plays a central role in the classical formulation of electromagnetism, as well as in many other 
                    areas of classical and contemporary physics. Einstein’s gravitational field, for example, replaces Newton’s concept 
                    of gravitational action at a distance. 
                    <br />
                    The field describing the electric force between a pair of charged particles 
                    works in the following manner: each particle creates an electric field in the space surrounding it, and so also at 
                    the position occupied by the other particle; each particle responds to the force exerted upon it by the electric 
                    field at its own position.
                </p>

                <h3><u>Optics</u></h3>
                <p>
                    Because light consists of electromagnetic waves, the propagation of light can be regarded as merely a branch of electromagnetism. 
                    However, it is usually dealt with as a separate subject called optics: the part that deals with the tracing of light rays 
                    is known as geometrical optics, while the part that treats the distinctive wave phenomena of light is called physical optics.
                    <br /> 
                    More recently, there has developed a new and vital branch, quantum optics, which is concerned with the theory and application
                     of the laser, a device that produces an intense coherent beam of unidirectional radiation useful for many applications.
                    <br /><br />
                    The formation of images by lenses, microscopes, telescopes, and other optical devices is described by ray optics, which assumes 
                    that the passage of light can be represented by straight lines, that is, rays. The subtler effects attributable to the wave 
                    property of visible light, however, require the explanations of physical optics. <br /><br /> 
                    One basic wave effect is interference, whereby two waves present in a region of space combine at certain points to yield an 
                    enhanced resultant effect (e.g., the crests of the component waves adding together); at the other extreme, the two waves 
                    can annul each other, the crests of one wave filling in the troughs of the other. <br /><br /> 
                    Another wave effect is diffraction, which causes light to spread into regions of the geometric shadow and causes the image 
                    produced by any optical device to be fuzzy to a degree dependent on the wavelength of the light. Optical instruments such 
                    as the interferometer and the diffraction grating can be used for measuring the wavelength of light precisely 
                    (about 500 micrometres) and for measuring distances to a small fraction of that length.
                </p>

                <p>There are many more fields of physics like: <b>Atomic and chemical physics</b>, <b>Condensed-matter physics</b>, <b>Nuclear physics</b>, 
                 <b> Particle physics</b>.
                </p>
            </div>

            <div className="textPart">
                <h1>Fundamental forces and fields</h1>
                <p>
                The four basic forces of nature, in order of increasing strength, are thought to be: <br /><br /> 
                (1) <b>The gravitational force</b> between particles with mass; <br /><br /> 
                (2) <b>The electromagnetic force</b> between particles with charge or magnetism or both; <br /><br />
                (3) <b>The strong force</b>, between quarks; <br /><br />
                (4) <b>The weak force</b> by which, for example, quarks can change their type, so that a neutron decays into a proton, an electron, and an antineutrino. <br /><br /> 
                The strong force that binds protons and neutrons into nuclei and is responsible for fission, fusion, and other nuclear reactions is in 
                principle derived from the colour force. Nuclear physics is thus related to QCD as chemistry is to atomic physics.
                </p>
                <iframe height="600px" src="https://www.youtube.com/embed/669QUJrF4u0" frameborder="0"></iframe>
            </div>
            
        </div>
            
{/**FACT CARDS-------------------------------------------------------------------------------------------- */}
        <div id="factsTitle">
            <h1>Some science facts</h1> 
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
            {/**FIRST TOPIC */}
            <div className="topic">
                <div className="topicImage">
                   <img src={chemisty} alt="" ></img>
                </div>
                
                <a target="_blank" href="https://www.chemistryworld.com/research">
                  <h1>Chemistry <KeyboardTabIcon style={{width: "30px", color: "blue"}}/></h1>   
                </a>
            </div>
            {/**SECOND TOPIC */}
            <div className="topic">
                <div className="topicImage">
                   <img src={biology} alt="" ></img>
                </div>
                
                <a target="_blank" href="https://www.biologyonline.com/">
                  <h1>Biology <KeyboardTabIcon style={{width: "30px", color: "blue"}}/></h1>   
                </a>
            </div>
            {/**THIRD TOPIC */}
            <div className="topic">
                <div className="topicImage">
                   <img src={medicine} alt="" ></img>
                </div>
                
                <a target="_blank" href="https://www.nature.com/nm/">
                  <h1>Medicine <KeyboardTabIcon style={{width: "30px", color: "blue"}}/></h1>   
                </a>
            </div>
            {/**FOURTH TOPIC */}
            <div className="topic topic-social">
                <div className="topicImage">
                   <img src={social} alt="" ></img>
                </div>
                
                <a target="_blank" href="https://www.investopedia.com/terms/s/social-science.asp">
                  <h1>Social Science <KeyboardTabIcon style={{width: "30px", color: "blue"}}/></h1>   
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

export default Science;