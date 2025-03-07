import "./styles/Profile.css";
import { useEffect, useState } from 'react';
import axios from "axios";

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Header from "./Helping components/Header";
import Footer from "./Helping components/Footer";

//Images
import avatar from "../assets/images/avatar.png";
import newBackground from "../assets/images/newBackground.jpg";

//Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import XIcon from '@mui/icons-material/X';
import LocationIcon from '@mui/icons-material/LocationOnTwoTone';
import EducationIcon from '@mui/icons-material/SchoolTwoTone';
import EditIcon from '@mui/icons-material/EditNoteTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import closeIcon from "../assets/icons/close.png";
import imageShare from "../assets/icons/imageShare.png";
import share from "../assets/icons/share.png";


function Profile(props){

    const[name, setName] = useState("");
    const[lastName, setLastName] = useState("");
    const[certificate, setCertificate] = useState("");
    const[place, setPlace] = useState("");
    const[school, setSchool] = useState("");
    const[about, setAbout] = useState("");

    const[mail, setMail] = useState("");
    const[facebook, setFacebook] = useState("");
    const[insta, setInsta] = useState("");
    const[linkedIn, setLinkedIn] = useState("");
    const[twitter, setTwitter] = useState("");

    const[file, setFile] = useState();                          //CHOOSE FILE FOR IMAGE
    const[post, setPost] = useState("");                        //USER INPUT TEXT

    
{/**Publish button and Edit part------------------------------------------*/}
    const [btnPublish, setbtnPublish] = useState("publicationOpen");
    const [btnSize, setBtnSize] = useState("buttonOpen");
    const [open, setOpen] = useState("editClosed");
    const [visible, setVisible] = useState("none");

    const openEdit = () => {
        setOpen("editOpen");
        setbtnPublish("publicationClosed");
        setVisible("");
        setBtnSize("buttonClosed")
    }
    const closeEdit = () => {
        setOpen("editClosed");
        setbtnPublish("publicationOpen");
        setVisible("none");
        setBtnSize("buttonOpen")
        setFile();
        setPost("");
    }
    
    //Setting visibility for Edit page
    const [editvisibility, setEditvisibility] = useState(false);

    function setVisibleEdit(){
        setEditvisibility(true);
    }
    function setUnVisibleEdit(){
        setEditvisibility(false);
    }
    

//---------------------------------------------------------------------------------------------------
//Gets all the data from the client------------------------------------------------------------------
    const[profileData, setProfileData] = useState([]);          //PROFILE DATA
    const[posts, setPosts] = useState([]);                      //PROFILE POSTS
    const[userImgs, setUserImgs] = useState([]);                //PROFILE IMAGES
      
    useEffect(() => {
        
        axios.get("http://localhost:3000/data/" + props.id,
        )
        .then(response => {
            setProfileData(response.data);
        })
        .catch((err) => {
            console.error(err);
        })

        axios.get("http://localhost:3000/posts/"+ props.id,
        )
        .then(response => {
            setPosts(response.data);
        })
        .catch((err) => {
            console.error(err);
        })

        axios.get("http://localhost:3000/images/"+ props.id,
        )
        .then(res => {
            setUserImgs(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

   
//---------------------------------
   
//IMAGE/TEXT UPLOAD---------------------
    

    function chooseFile(e){
        setFile(e.target.files[0]); 
    }

    function uploadImage(name){

        const formdata = new FormData();
        formdata.append("id", props.id);
        formdata.append("image", file); //upload.single("image")

        if(file !== undefined){
            if(name === "profile_pic"){

                formdata.append("oldName", profileData.profile_pic); //appending the old profile image name

                axios.post("http://localhost:3000/upload-profile",
                    formdata
                )
                .then(response => {
                    setFile(undefined);
                    if(response.data.message !== "Error"){
                        setProfileData((prev) => ({ ...prev, profile_pic: response.data.message})); //Setting/Updating the new image name  
                        
                        props.imageName(response.data.message);
                    }
                    else{
                        console.log("Failed to upload");
                    }
                })
                .catch(err => {
                    console.error(err);
                }) 

                
            }
            else{
                formdata.append("oldName", profileData.profile_background); //appending the old background image name

                axios.post("http://localhost:3000/upload-background",
                    formdata
                )
                .then(response => {
                    if(response.data.message !== "Error"){
                        
                        setProfileData((prev) => ({ ...prev, profile_background: response.data.message})); //Setting/Updating the new image name  
                    }
                    else{
                        console.log("Failed to upload");
                    }
                })
                .catch(err => {
                    console.error(err);
                }) 
            }
        }
        setFile();
        setPost("");
    }

    function updateData(){
        
        axios.post("http://localhost:3000/update-data", 
        {
            "first_name": name === "" ? profileData.first_name : name,
            "last_name": lastName === "" ? profileData.last_name : lastName,
            "certificate": certificate === "" ? profileData.certificate : certificate,
            "place": place === "" ? profileData.place : place,
            "school": school === "" ? profileData.school : school,
            "about": about === "" ? profileData.about_me : about,
            "linkedIn": linkedIn === "" ? profileData.links : linkedIn,
            "id": props.id,
        }
        ).then(res => {
            if(res.data.message !== "Error"){ 
                setProfileData((prev) => ({...prev, first_name: res.data.message.newName,
                                                    last_name: res.data.message.newLastName,
                                                    certificate: res.data.message.newCert,
                                                    place: res.data.message.newPlace,
                                                    school: res.data.message.newSchool,
                                                    about_me: res.data.message.newAbout,
                                                    links: res.data.message.newLink 
                                         })
                );
            }
            else{
                console.log("Failed to upload");
                alert("Failed to upload");
            }
            setUnVisibleEdit();
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    function postData(){

        const formdata = new FormData();
        formdata.append("data", post);
        formdata.append("id", props.id);  
        formdata.append("image", file);             //THE CHOOSE FILE FOR IMAGE
                      //THE USER INPUT TEXT
        
        if(post !== ""){
            
            if(file !== undefined){                                             //POSTING WITH TEXT AND IMG
                axios.post("http://localhost:3000/post",
                    formdata                                                    
                )
                .then(res => {
                    
                    if(res.data.message !== "Error"){                           //UPDATING THE DATA 
                        setPosts( (prev) => ([ {id: res.data.message.id, 
                                                post: res.data.message.post, 
                                                pics: res.data.message.pics, 
                                                date: res.data.message.date,
                                                posts_id: res.data.message.postid }, ...prev ]) );
                    }                           //putting the new data at the first place and all the prev data after it
                    else{
                        console.log("Failed to upload");
                        alert("Failed to upload");
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            }
            else{                                                               //POSTING TEXT ONLY
                axios.post("http://localhost:3000/post_textonly",
                    {
                        "txt": post,
                        "id": props.id
                    }
                )
                .then(res => {
                    
                    if(res.data.message !== "Error"){                          
                        setPosts( (prev) => ([ {id: res.data.message.id, 
                                                post: res.data.message.post, 
                                                pics: res.data.message.pics, 
                                                date: res.data.message.date, 
                                                posts_id: res.data.message.postid }, ...prev ]) );
                    }
                    else{
                        console.log("Failed to upload");
                        alert("Failed to upload");
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            }

        }
        else{
            if(file !== undefined){                                             //POSTING IMAGE ONLY
                axios.post("http://localhost:3000/post_imgonly", 
                    formdata
                )
                .then(res => {
                    setUserImgs( (prev) => ([ {id: res.data.message.id, 
                                               image: res.data.message.post, 
                                               date: res.data.message.date, 
                                               images_id: res.data.message.imgID} , ...prev ]));
                    console.log("Success");
                })
                .catch(err => {
                    console.log(err);
                })
            }
            else{
                alert("You need to write some text or choose an image!");
            }
        }

        setFile();
        setPost("");
    }

    function deleteImg(info){
        
        axios.post("http://localhost:3000/delete-img",
            {
                "id": props.id,
                "what": info,        //info = "profile_pic" or "profile_background"
                "name" : info === "profile_pic" ? profileData.profile_pic : profileData.profile_background
            }
        )
        .then(res => {
            if(info === "profile_background"){
                setProfileData((prev) => ({...prev, profile_background: null}));
            }
            else{
                setProfileData((prev) => ({...prev, profile_pic: null}));
                props.imageName(null);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    function deletePostImg(data_id, img_name){
        
        axios.post("http://localhost:3000/delete_imgpost", 
            {
                "profileID": props.id,
                "id": data_id,
                "name": img_name
            }
        )
        .then(res => {
            setUserImgs(prev => prev.filter(item => item.images_id !== res.data.message));
        })
        .catch(err => {
            console.log(err);
        })
    }

    function deletePost(data_id, img_name){
        
        axios.post("http://localhost:3000/delete-post", 
            {
                "profileID": props.id,
                "id": data_id,
                "name": img_name
            }
        )
        .then(res => {
                            //Removing the item/post from the state array
            setPosts(prev => prev.filter(item => item.posts_id !== res.data.message) );
        })
        .catch( err => {
            console.log(err);
        })
    }

    function logout(){
        props.confirmationLogout(false);
        props.setId();
    }

    function deleteAccount(){
        axios.delete("http://localhost:3000/delete/" + profileData.id  
        )
        .then(res => {
            alert(res.data.message);
            
            props.confirmationLogout(false);
            props.setId();
        })
        .catch( err => {
            console.log(err);
        })
    }

    
    return(
        <>
        <Header profileImage={profileData.profile_pic}
                id={profileData.id}/>
{/**EDIT PART-------------------------------------------------------------- */}
        <div className="edit-page" style={{display: editvisibility ? "" : "none"}}>

            <div className="avatarEditPic">                       {/**For showing the pics, we must provide the port of the server */}
                <div className="avatar-edit-pic">
                  <img src={profileData.profile_pic !== null ? 
                            "http://localhost:3000/images/"+ profileData.id + "/" + profileData.profile_pic : 
                            avatar} alt="" />  
                </div>
                <div className="avatar-edit-upload">
                    <input id="inp" type="file" onChange={chooseFile} placeholder="Choose photo"/>
                    <div className="avatar-edit-button">
                        <button onClick={() => uploadImage("profile_pic")}>Upload</button>
                        <button onClick={() => deleteImg("profile_pic")}>Delete</button>  
                    </div>
                </div>
                <div className="popi">
                    <Popup trigger={<button>Delete the Account</button>} modal nested>
                    {
                        close => (
                            <div className="modal">
                                <div className="content">
                                    You want to delete your Account?
                                </div>
                                <div>
                                    <button onClick={deleteAccount}>Yes</button>
                                    <button onClick={() => close()}>No</button>
                                </div>
                            </div>
                        )
                    }
                    </Popup>
                </div>
            </div>

            <div className="avatarEditPic">
                <div className="backEditPic">
                    <img src={  profileData.profile_background !== null ? 
                            "http://localhost:3000/images/"+ profileData.id + "/" + profileData.profile_background : 
                            newBackground } alt="" />
                </div>
                <div className="avatar-edit-upload">
                    <input type="file" onChange={chooseFile} placeholder="Choose a photo" />
                    <div className="avatar-edit-button">
                        <button onClick={() => uploadImage("profile_background")}>Upload</button>
                        <button onClick={() => deleteImg("profile_background")}>Delete</button> 
                    </div>
                </div>
            </div>

            <div className="editInput">
                <input id="waw" type="text" onChange={e => setName(e.target.value)} placeholder={profileData.first_name !== null ? profileData.first_name : "Your first name"}/>
                <input type="text" onChange={e => setLastName(e.target.value)} placeholder={profileData.last_name !== null ? profileData.last_name : "You last name"} />
                <input type="text" onChange={e => setCertificate(e.target.value)} placeholder={profileData.certificate !== null ? profileData.certificate : "Your certificate"} />
                <input type="text" onChange={e => setPlace(e.target.value)} placeholder={profileData.place !== null ? profileData.place : "Where do you live"} />
                <input type="text" onChange={e => setSchool(e.target.value)} placeholder={profileData.school !== null ? profileData.school : "Which school did you go or you still attending"} />
                <input type="text" onChange={e => setAbout(e.target.value)} placeholder={profileData.about_me !== null ? profileData.about_me : "Something about yourself"} />
            </div>

            <div className="editUpdate">
                <button onClick={updateData}>Upload</button>
                <button onClick={setUnVisibleEdit}>Close</button>  
            </div>
        </div>

{/**PROFILE PART----------------------------------------------------------- */}
        <div className="profile" style={{display: editvisibility ? "none" : ""}}>

            <div className="backImg">
                <img src={profileData.profile_background !== null ? "http://localhost:3000/images/" + profileData.id + "/" + profileData.profile_background : newBackground} alt="" />
            </div>
            <div className="avatarPic">
               <img src={profileData.profile_pic !== null ? "http://localhost:3000/images/" + profileData.id + "/"  + profileData.profile_pic : avatar} alt="" /> 
            </div>
            <div className="profile-edit">
               <button onClick={setVisibleEdit}><EditIcon fontSize="large"/></button>
               <button onClick={logout}>Logout</button> 
            </div>
            <div className="profileName">
                <h2>{profileData.first_name !== null ? profileData.first_name + " " + profileData.last_name : "My name"}</h2>
            </div>
            <div className="profDegree">
                <p>{profileData.certificate !== null ? profileData.certificate : "My certification"}</p>
            </div>

            <div className="place">
                <LocationIcon />
                <p>{profileData.place !== null ? profileData.place : "My place"}</p> 
            </div>
            <div className="school">
                <EducationIcon />
                <p>{profileData.school !== null ? profileData.school : "My School"}</p>
            </div>
            <div className="aboutMe">
                <p>{profileData.about_me !== null ? profileData.about_me : "Something interesting about me."}</p>
            </div>
            
            <div className="iconsProfile">
                <a href={profileData.links}><MailOutlineIcon color="action" fontSize="large"/></a>
                <a href={profileData.links}><FacebookIcon color="action" fontSize="large"/></a> 
                <a href={profileData.links}><InstagramIcon color="action"  fontSize="large"/></a> 
                <a href={profileData.links}><LinkedInIcon  color="action" fontSize="large"/></a> 
                <a href={profileData.links}><XIcon color="action" fontSize="large"/></a> 
            </div>
        </div>

{/*Beggining of the second part---------------------------------------------*/}

        <div className="profileDetails">
            <div className="myPosts">

{/**PUBLISH PART------------------------------------------------------------*/}
                <div className="publish">
                    <div className="PublishButton" id={btnPublish}>
                        
                        <button className={btnSize} onClick={openEdit}>Publish</button>
                    </div>

                    <div id="edit" className={open}>
                        <div className="closeBtn">
                            <button style={{display:visible}} onClick={closeEdit}><img src={closeIcon} alt="close" /></button>
                        </div>

                        <div className="avatarText">
                            <div className="miniAvatar" style={{display:visible }}>
                                <img src={  profileData.profile_pic !== null ? 
                                            "http://localhost:3000/images/"+ profileData.id + "/" + profileData.profile_pic : 
                                            avatar} alt="" 
                                />
                            </div>
                            <div className="inputText" style={{display:visible }}>
                                <textarea type="text" maxLength={200} onChange={e => setPost(e.target.value)} placeholder="What's on your mind..."/>
                            </div>
                        </div>

                        <div className="iconsAndShare" style={{display:visible}}>
                            <div className="sharingIcons">
                                <input type="file" onChange={chooseFile} src={imageShare} required={true}/>
                                <button><img src={share} alt="" /></button>
                            </div>
                            <div className="shareBtn">
                                <button onClick={postData}>Share</button>
                            </div>
                        </div>
                    </div>

                </div>

{/**POSTS PART--------------------------------------------------------------*/}
                <div className="posts">

                    {posts.map( data => (
                        <div className="post">
                            
                            <div className="postFirst">
                                
                                <div className="postAvatar">
                                    <img src={profileData.profile_pic !== null ? 
                                            "http://localhost:3000/images/"+ profileData.id + "/" + profileData.profile_pic : 
                                            avatar} alt="" />
                                </div> 
                                
                                <div className="postsIcons">
                                    <button onClick={() => deletePost(data.posts_id, data.pics)}><DeleteIcon/></button>
                                </div>   
                            </div>
                            
                            <div className="postText">
                                <p> {data.post}  </p>
                            </div>
                            <PhotoProvider>
                                <div className="postImg" style={ data.pics !== "" ? {visibility: "visible"} : {visibility:"collapse"}}>
                                    { data.pics !== ""   ?   <PhotoView src={"http://localhost:3000/images/" + profileData.id + "/" + data.pics}> 
                                                                <img src={"http://localhost:3000/images/" + profileData.id + "/" + data.pics} alt=""/>
                                                            </PhotoView> 
                                                        : <div></div> }  
                                </div>
                            </PhotoProvider>
                        </div>
                    ))}
                </div>
            </div>

{/**USER PICTURES PART------------------------------------------------------*/}
            <div className="myPics">

                {userImgs.map(data => (
                    <PhotoProvider>
                        <div className="gallery">
                               { data.image !== "" ? <PhotoView src={"http://localhost:3000/images/" + profileData.id + "/" + data.image}>
                                                        <img src={"http://localhost:3000/images/" + profileData.id + "/" + data.image } />
                                                     </PhotoView>    
                                                    : <div></div> }
                                
                            <button onClick={() => deletePostImg(data.images_id, data.image)}><DeleteOutlineIcon fontSize="small"/></button>
                        </div>
                    </PhotoProvider>
                ))}

            </div>
        </div> 
        {/**profileDetails end */}
       
       <Footer />
        </>
    )


        
}


export default Profile;