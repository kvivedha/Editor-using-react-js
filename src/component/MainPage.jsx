import React, { useState } from 'react';
import '../Css/modal.css';
import Navbar from './navbar';
import SideBar from './sidebar';
import EdiorPage from './editor';
import RightBar from './rightbar';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 744,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: 600
};

const MainPage = () => {
    const [initialImage, setInitialImage] = useState('');
    const [profile, setProfile] = useState();
    const [image,  setImage] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [member_id, setMemberId] = useState('');
    const [open, setOpen] = React.useState(false);
    const [authentication, setauthentication] = useState(false);
    const [userId, setUserId] = useState('');
    const [userIdVal, setUserIdVal] = useState('');
    
    function selectMediaType (val) {
        console.log("value",val);
        setInitialImage(val);
    }

    function selectedType(val) {
        console.log('val11111',val)
        console.log('initialImage1111',initialImage);
        // setInitialImage(val.state.type);
        setOpen(val.state.popupOpen)
        // if(initialImage == 'linkedin') {
            setProfile(val.state.data.picture);
            setName(val.state.data.name);
            setEmail(val.state.data.email);
            setUser(val.state.data.sub);
            setMemberId(val.state.data.member_id);
            setauthentication(val.state.oauth);
        // }
        
    }

    // Remove this function early
    function selectedOauth(val) {
        console.log('val',val)
        setauthentication(val);
    }

    function CloseBox () {
        setauthentication(false);
    }
    // Remove this function early

    function handleButtonClick  () {
        setOpen(false); // Set open to false to hide the modal
      };

    function setUserIdValfun (val) {
        setUserId(val);
    }
    
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div id='grid'>
                <div style={{position: 'relative'}}>
                    <SideBar selectMediaType = {selectMediaType}/>
                </div>
                <div>
                    <EdiorPage initialImage = {initialImage} open = {open} authentication = {authentication} handleButtonClick = {handleButtonClick} CloseBox = {CloseBox} userId = {userId} />
                </div>
                <div className='profile_nav'>
                    <RightBar profile = {profile} name = {name} email ={email} user = {user} member = {member_id} selectedOauth = {selectedOauth} initialImage = {initialImage}  selectedType = {selectedType}  setUserIdValfun ={setUserIdValfun}/>
                </div>
            </div>
        
        </div>
    );
    

}

export default MainPage;