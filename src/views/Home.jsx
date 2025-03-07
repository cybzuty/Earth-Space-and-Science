import "./styles/Home.css";
import react, { useRef } from 'react';
import ReactPlayer from "react-player";
import Section from "./Helping components/motionEfect";
import TextSection from "./Helping components/textEffect";
import DownSection from "./Helping components/upEffect";
import DelaySection from "./Helping components/delayEffect";
import DelayTextSection from "./Helping components/delayTextSection";
import Header from "./Helping components/Header";
import Footer from "./Helping components/Footer";

/**Pictures*/
import EarthLogo from "../assets/images/whole_earth.jpg";
import apolloEarth from "../assets/images/apollo8_earthrise.webp";
import people_one from "../assets/images/people-one.jpg";
import paleBlueDot from "../assets/images/paleBlueDot.webp";
import firstPress from "../assets/images/printing.webp";
import steamEngine from "../assets/images/steamEngine.webp";
import lightBulb from "../assets/images/firstLightBulb.jpeg";
import telephone from "../assets/images/GrahamBell_tele.jpg";
import aeroplane from "../assets/images/aeroplane.webp";
import computer from "../assets/images/personal_comp.jpg";
import internet from "../assets/images/internet.jpg";
import mobilePhone from "../assets/images/smartphone.jpg";
import ai from "../assets/images/AI.webp";
/**Videos */
import video_one from "../assets/images/video.mp4";


function HomeGen(props){


    return (<>
        <Header profileImage={props.profileImage}
                id={props.id}/>

        <div className="first">
            <img src={EarthLogo} width="100%"/>
            <p>
                Welcome to this page<br />
                that is dedicated to<br />
                Earth, Space and Science.
            </p> 
        </div>
          
        <div className="second">
            <Section className="c1">
                <h2>About Earth</h2>
            </Section>

            <TextSection className="c2">
                <p>Earth, our home planet, is a world unlike any other. 
                The third planet from the sun, Earth is the only place in the known universe confirmed to host life. 
                With a equatorial radius of 6378 km, Earth is the fifth largest planet in our solar system, 
                and it's the only one known for sure to have liquid water on its surface. 
                It is a home to countless animals, and a home for us humans. 
                </p>
            </TextSection>
            
            <TextSection className="c3">
                <p>
                The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after
                Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, 
                which simply means “the ground.” 
                </p>
            </TextSection>
                
            <Section className="c4">
                <img src={people_one} width="100%"></img>
            </Section>

            <Section className="c5">
                <h2>About Humans</h2>
            </Section>

            <TextSection className="c6">
            <p>About 200,000 years ago, a new species of human evolved in East Africa. 
            It was our species, Homo sapiens. By studying the DNA of humans living throughout the world today, scientists 
            know that these hunter-gatherers were the ancestors of every human being alive today.
            We live in an unusual time in the overall journey of human origins—we are the only remaining species of a diverse family tree 
            of earlier human species. H. sapiens, or modern humans, co-habited the Earth with other early human species, at times 
            living in the same geographic area. In fact, just 70,000 years ago, there were at least four human 
            species on earth (H. erectus, H. floresiensis, H. neanderthalensis, H. sapiens).
            Modern humans are great apes, one of the major groups on the primate family tree. We are very closely related to chimpanzees 
            in that we have shared ancestry, but are not descended from any living species of monkey or ape.
            Beginning around 60,000 years ago, as many human populations moved farther away from the equator, they evolved variations in skin tone, 
            hair texture and facial features. These variations arose fairly recently, over just the past few tens of thousands of years.
            </p>
            </TextSection>

            <Section className="c7">
                <ReactPlayer width={"100%"} loop={true} muted={true} playing={true} url={[video_one, "video/mp4"]}/>
            </Section>

            <Section className="c8">
                <h2>Now about Space</h2>
            </Section>

            <Section className="c9">
                <p>This is Earth, the place where we live, where we work, where all are the people you know and knew
                    and all the people you don't know are living. <br />
                    Living their life, working, doing hobbies, having friends, traveling, dreaming, contemplating about 
                    many things, some things that never crossed your mind.
                    Everything happened on this beautiful rocky planet, all the history that you know it, and 
                    probably all the history that will happen. Maybe in meantime we will become an interplanetary species. <br />
                    But for now, this is our "litle" blue home.
                </p>
            </Section>
            <DownSection className="c10">
                <img src={apolloEarth} width="100%" height="800px"></img>
            </DownSection>

            <Section>
                <p>Wanna see something even more mindblowing?</p>
            </Section>

            <Section>    
            <div className="paleClass">
                <img src={paleBlueDot} alt="" width="100%"/>
                <p>You see this pale blue dot?</p>
            </div>
            </Section>

            <DownSection>
                <p>Well, that's Earth! </p>
            </DownSection>
            <DownSection>
                <p>As seen from Voyager 1 on 14. February 1990 from a 
                    distance of 6 billion kilometers.
                </p>
            </DownSection>
            <DownSection>
                <p>It was Carl Sagan's idea to use the cameras on one of the two Voyager
                    spacecrafts to image the Earth. He knew the images won't show much.
                    But that was exactly what he wanted. To show the world how tiny and
                    fragile our home is in the vastness of the cosmos. <br />
                    This image inspired the title of his book in which he 
                    famously wrote: <br /> 
                    "Look again at that dot. That's here. That's home. That's us."
                </p>
            </DownSection>
        </div>

        <div className="middle">
            <div className="one" ></div>
            <div className="two" ></div>
        </div> 

        <div className="third">
          
        
            <h1>Now a little bit about Technology</h1>
            <h3>The world has been transformed by technological inventions that 
                changed the lives of our ancestors and helped us prosper and build 
                the future we live in today: from the creation of the first stone 
                tools or the wheel to machines and technologies that once paved the 
                way for a more modern planet. The list of innovations is long. Here 
                are some of the breakthroughs that drove global growth and development.
            </h3>
        
            <DelaySection>
               <img src={firstPress} alt="First printing press" /> 
            </DelaySection>
            <DelayTextSection>
                <h2>The Printing Press</h2> 
                <p>The machine devised by the German Gutenberg in the mid-15th century 
                    enabled the mass production of books. As a result, it led to the 
                    spread of ideas (especially religious ones), the spread of 
                    knowledge, literacy and the creation of libraries in Europe. 
                    A key revolution that accelerated the transition from the Middle Ages 
                    to the Renaissance. The first work printed with this machine was the 
                    Bible. The printing press introduced the idea that machines eliminate jobs, 
                    although it gave rise to a powerful industry of printers, booksellers and 
                    writers, among other trades.
                </p>
            </DelayTextSection>

            <DelayTextSection>
                <h2>The Steam Engine</h2>
                <br />
                <p>The steam engine invented by the Scottish engineer James Watt (in 1775) 
                    revolutionised transport and machinery in the 19th century and drove the 
                    First Industrial Revolution, rapidly moving from an economy based on 
                    agriculture and trade to an industrialised one with much greater production 
                    capacity. This technological invention gave rise to locomotives, steamships 
                    and even the first automobiles. And the way was paved for the emergence of 
                    various types of combustion engines and aircraft. The effect on employment 
                    was immediate, and the middle classes and urban centres were born.
                </p>
            </DelayTextSection>
            <DelaySection>
                <img src={steamEngine} alt="Steam engine" />
            </DelaySection>

            <DelaySection>
               <img src={lightBulb} alt="First printing press" /> 
            </DelaySection>
            <DelayTextSection>
                <h2>The Light Bulb</h2> 
                <p>Before Thomas Edison many others tried incandescent lamps or bulbs. 
                    He is considered the inventor (in 1880), but it was not exactly so, 
                    but he improved on the innovations of others in electric lighting, 
                    such as Humphry Davy, Matthew Evans, Warren de la Rue or Joseph Wilson 
                    Swan (with the latter Edison disputed the title of inventor). It is 
                    considered the greatest invention since the discovery of fire: light 
                    entered homes and workplaces, becoming a necessity and an engine for 
                    economic growth (working hours were extended, electricity generating 
                    plants and household appliances were developed, among other advances).
                </p>
            </DelayTextSection>

            <DelayTextSection>
                <h2>The Telephone</h2>
                <br />
                <p>The Scotsman Alexander Graham Bell worked as a speech and hearing expert 
                    (his mother and wife were both deaf) and, seeking to improve the telegraph, 
                    researched voice transmission until, in 1876, he patented the telephone. 
                    This device revolutionised communication by allowing instant speech even 
                    over long distances. In its early days, to establish a call, a person had 
                    to manually connect the wires, and this continued until the creation of 
                    the telephone network. It is one of the most significant advances of the 
                    Second Industrial Revolution, to the extent that it marks the beginning 
                    of modern society. Without it, the world would not exist as we know it 
                    today: it laid the foundations for mobile telephony. 
                </p>
            </DelayTextSection>
            <DelaySection>
                <img src={telephone} alt="Telephone" />
            </DelaySection>
            
            <DelaySection>
               <img src={aeroplane} alt="Aeroplane" /> 
            </DelaySection>
            <DelayTextSection>
                <h2>The Aeroplane</h2> 
                <p>In 1903, the Wright brothers created the first human-piloted motorised aeroplane, 
                    the Wright Flyer. The flight lasted only 12 seconds, but with this experiment, 
                    which defied gravity, they laid the foundations of aeronautical engineering. Their 
                    designs inspired others to develop commercial aviation. In 1927, Charles Lindbergh 
                    became a hero for his non-stop crossing of the Atlantic. This technological ingenuity 
                    boosted trade, culture, tourism and, today, the air transport industry is key to 
                    global economic prosperity.  
                </p>
            </DelayTextSection>

            <DelayTextSection>
                <h2>The Personal Computer</h2>
                <br />
                <p>Computers have redefined people’s lives and the way they work, simplifying tasks, storing 
                    information and processing data quickly and efficiently. The invention of the transistor 
                    or semiconductor in 1947 began the road to personal computers. This component replaced the 
                    vacuum tube and was the key to creating smaller, more reliable electronic devices. John 
                    Blankenbaker’s Kenbak-1 is considered the first personal computer. Another key innovation 
                    in the development of the PC (personal computer) was microprocessors (1971).   
                    <br />
                    The first personal computer with a microprocessor was the Micral (1973). Although it was 
                    never sold, the Xerox Alto (1973) was the forerunner of home computing: it introduced for 
                    the first time a graphical interface and a mouse. In 1975, the Altair 8800 was launched, 
                    the first computer with the Microsoft Basic programming language, developed by Bill Gates 
                    and Paul Allen, founders of Microsoft. 
                </p>
            </DelayTextSection>
            <DelaySection>
                <img src={computer} alt="Computer" />
            </DelaySection>

            <DelaySection>
               <img src={internet} alt="Internet" /> 
            </DelaySection>
            <DelayTextSection>
                <h2>Internet</h2> 
                <p>As with most technological inventions that have changed the world, the birth of the network of 
                    networks would not be understood without earlier experiments and technologies. The connection 
                    of four university computers to ARPAnet in 1969 was the seed for the birth of the Internet. In 
                    the late 1970s, Vinton Cerf developed the “transmission control protocol” or TCP for sending 
                    files between computers. This breakthrough was key to Tim Berners-Lee’s introduction of the 
                    World Wide Web in 1991, transforming society. It continues to evolve today, bringing new forms 
                    of interaction and economic, social and cultural growth. The launch of Telefónica’s Infovía 
                    service in 1995 popularised the Internet in Spain and introduced it into Spanish homes.
                </p>
            </DelayTextSection>

            <DelayTextSection>
                <h2>The Mobile Phone</h2>
                <br />
                <p>In 1983, the first mobile phone small enough to be portable was launched: Motorola DynaTac 8000X, 
                    designed by engineer Martin Cooper, with a 30-minute battery life. The first generation of mobile 
                    phones was only for talking, but as it evolved, the terminals provided new functions, such as sending 
                    SMS or email, paving the way for smartphones capable of browsing the internet, capturing photos, 
                    listening to music, guiding via GPS or updating social networks, among many other functions. Today 
                    it is one of the essential technological inventions in personal and professional life.
                </p>
            </DelayTextSection>
            <DelaySection>
                <img src={mobilePhone} alt="Mobile phone" />
            </DelaySection>

            <DelaySection>
               <img src={ai} alt="Artificial intelligence" /> 
            </DelaySection>
            <DelayTextSection>
                <h2>Artificial Intelligence</h2> 
                <p>The precursor of modern computing, Alan Turing, is also the father of artificial intelligence. However, 
                    the term was not coined until 1956, when the first artificial intelligence programme, Logic Theorist, was 
                    presented at a historic conference. Today, this technological invention has crept into our lives in the 
                    form of chatbots, voice assistants, autonomous vehicles, real-time translators, artificial vision, ChatGPT, 
                    the Internet of Things… Machines capable of reasoning will further transform the world of the future with 
                    applications and uses that we cannot even imagine today. Generative artificial intelligence is becoming 
                    increasingly important.
                </p>
            </DelayTextSection>
            
        </div>

        <Footer />
        </>)
}

export default HomeGen;