import React, { useState, useEffect } from 'react';
import '../Css/modal.css';
import name_icon from '../image/user.png';
import email_icon from '../image/email.png'
import user_icon from '../image/id-card.png';
import member_icon from '../image/idCard.png';
import skeleton_img from '../image/skele.webp';
import linkedin from '../image/linkedin_one.png';
import facebook from '../image/facebook.png';
import insta from '../image/instagram_one.png';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const RightBar = ({profile, name, email, user, member, selectedOauth, initialImage, selectedType, setUserIdValfun}) => {

    const [connectsso, setConnectSso] = useState(false);
    const navigate = useNavigate();
    const [codeValue, setCodeValue] = useState(false);
    const [userId, setUserId] = useState('');

    const getUserId = () => {
        selectedOauth(true);
        setUserIdValfun(localStorage.getItem('userIdVal'))
    }

    useEffect(() => {
        if (window.opener && window.opener !== window) {
                const code = getCodeFromWindowURL(window.location.href);
                window.opener.postMessage({'type': 'code', 'code': code}, '*')
                window.close();
          }
        window.addEventListener('message', handlePostMessage);
    },[]);


   function handlePostMessage (event) {
        if (event.data.type === 'code') {
            const { code } = event.data;
                if(!codeValue) {
                    console.log("before");
                    setTimeout(() => {
                        console.log("aftrer_before");
                        getUserCredentials(code);
                    },3000);
                    setCodeValue(true);
                }
        }
   }

   const getUserCredentials  =(code)=> {
    axios.post('http://192.168.1.27:8090/linkedinAPI/getAccesstoken',{
           access_code : code
       }).then((response) => {
           localStorage.setItem('userIdVal', response.data.data.member_id);
       }).catch((error) => {
           toast.error(error, {style : {background : '#f44336', color: 'white', fontWeight: 'bold'}});
       })
  }

   function getCodeFromWindowURL (url) {
        const popupWindowURL = new URL(url);
        return popupWindowURL.searchParams.get("code");
   }

   function ConnectSSO() {
        setConnectSso(true);
        if(initialImage == 'linkedin') {
            axios.post('http://192.168.1.27:8090/linkedinAPI/connect', {
            }).then((response) => {
                setConnectSso(response.data);
                window.open(response.data, "", "width=500,height=700,top=200, left= 600");
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    const connectSocialMedia = () => {
        if(initialImage == 'linkedin') {
            axios.post('http://192.168.1.27:8090/linkedinAPI/getProfileDetails',{
                userID : localStorage.getItem('userIdVal')

            }).then((response) => {
                if(response.data.status == 'Success') {
                    var data = response.data.data;
                    var popupOpen = true;
                    var oauth = false;
                    selectedType({state : {initialImage, data, popupOpen,oauth}});
                } else {
                    toast.error(response.data.message, {style : {background : '#f44336', color: 'white', fontWeight: 'bold'}});
                }
            }).catch((error) => {
                console.log('error',error);
            })
        } else {
            var data = {};
            var popupOpen = true;
            var oauth = false;
            selectedType({state : {initialImage, data, popupOpen,oauth}});
        }
       
    }

    return(
        (profile && initialImage == 'linkedin') ? (
            <div className='rightbar card rightbar_img'>
                    <div id='profile_div'>
                        <img src={profile} alt='' className='profile' />
                    </div>
                    <div className='detail'>
                        <img src={name_icon} alt='' />
                        <span>{name}</span>
                    </div>
                    <div className='detail'>
                        <img src={email_icon} alt='' />
                        <span>{email}</span>
                    </div>
                    <div className='detail'>
                        <img src={user_icon} alt='' />
                        <span>{user}</span>
                    </div>
                    <div className='detail'>
                        <img src={member_icon} alt='' />
                        <span>{member}</span>
                    </div>
                
                <div className='footer_bar'>
                    <button id='connect_btn' className='btn btn-info' style={{background : '#49bb09'}} onClick={getUserId}>User id</button>
                    <button id='connect_btn' className='btn' onClick={connectSocialMedia}>Editor</button>
                    <button id='connect_btn' className='btn' style={{background : '#49bb09'}} onClick={ConnectSSO}>Connect</button>
                </div>
            </div>
        ) : initialImage ? (
            <div className='rightbar card rightbar_img empty_div'>
                <div id='profile_div'>
                    <img src={initialImage == 'linkedin' ? linkedin : initialImage == 'facebook' ? facebook : insta} alt='' className='logo' />
                </div>
                <div className='footer_bar'>
                    <button id='connect_btn' className='btn btn-info' style={{background : '#49bb09'}} onClick={getUserId}>User id</button>
                    <button id='connect_btn' className='btn'  onClick={connectSocialMedia}>Editor</button>
                    <button id='connect_btn' className='btn' style={{background : '#49bb09'}} onClick={ConnectSSO}  >Connect</button>
                </div>
            </div>
        ): (
            <div className='rightbar card'>
                <img src={skeleton_img} alt='skeleton_img' />
            </div>
        )
        )
}

export default RightBar;
