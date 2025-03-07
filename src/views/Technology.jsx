import react from 'react';
import Header from "./Helping components/Header";
import Footer from "./Helping components/Footer";


function something(props){
    return (
    <>
    <Header profileImage={props.profileImage}
            id={props.id}/>

        <div>
            <h1>Hello Technology</h1>
        </div>
    <Footer />
    </>    
    )
}

export default something;