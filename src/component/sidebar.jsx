import React, { Component,useState,useRef } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { SocialIcon } from 'react-social-icons';
import linkedIn from '../image/lin.png'
import facebook from '../image/fac.png'
import instagram from '../image/instagram-logo.png'
import axios from 'axios';

import '../Css/modal.css'
import { useNavigate } from 'react-router-dom';

const SideBar = ({selectMediaType}) => {

    const [image,setImage] = useState([]);
    const [text, setText] = useState('');
    const [video,setVideo] = useState();
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);

    // var Auth = 'AQUjqGsEd1MBHSwdgdl3QMyhZNJQmIJAfxrP05sToyJPI-TdeB_-Ie2rsPjzwVxUlQcoYRDxPgiBeXgkRwCzgkyh0Dxqq-BrPa5IHFvVsj0ZV-I8F5nXszE6pwSc6iKshT5-nfaqz8zY9pZ8ZkwgqjqgA8EFUfK_Q62qTXa-h3w6nhr50H5NOor5uPsr7j8gRiEhnPsKl47csHUW2P7rPKKXwXmeVbI3-TEL0tZZNf0yPf9WrGojJB2KE9cj_puN_N0KZylsApONeqS3lAIDbvEHQywks0nMnyYMyTp3YQn52T1uuzL4jAJhQlTjZBtucXih9j-zzhRiPwHbntbHCzHL7OEEsQ';

    // const handleOpen = (type) => {
    //     console.log(type,'handleOpen');
    //     selectMediaType(type);

        // if(type == 'linkedin') {
            // axios.post('http://192.168.1.27:8090/linkedinAPI/getProfileDetails',{
            //     o_auth : localStorage.getItem('Auth'),
            // }).then((response) => {
            //     var data = response.data.data;
                // var popupOpen = true;
                // var popupOpen = false;
                // var oauth = false;
                // var data = {};
                // selectedType({state : {type, data, popupOpen,oauth}});

                // selectedType({state : {type, data, popupOpen,oauth}});
                // setImage([]);
                // setText('');
                // setVideo();
            // }).catch((error) => {
            //     console.log(error);
            // })
        // } else {
        // console.log('in','type');

        //         var data = {};
        //         var popupOpen = true;
        //         // selectedType({state : {type, data, popupOpen}});
        //         setImage([]);
        //         setText('');
        //         setVideo();
        // }
       
    // };

    return(
       <SideNav defaultExpanded={true} onSelect={(selected,eventKey) => {
        // if(selected != 'linkedin') {
            // handleOpen(selected);
        // }
            selectMediaType(selected);
            setSelected(selected);
            navigate('/' + selected);
            if(selected == 'facebook' || selected == 'instagram') {
                localStorage.removeItem('userIdVal');
            }
            
       }}>
         <SideNav.Toggle  />
         <SideNav.Nav  defaultSelected={selected}>
         {/* <SideNav.Nav className={`side-nav-item ${selected}`}> */}
        <NavItem eventKey="linkedin" className={selected === 'linkedin' ? 'activeMenuItem' : ''}>
            <NavIcon>
               <img src={linkedIn} alt='linkedin' className='sidNavImage' />
            </NavIcon>
            <NavText>Linked IN</NavText>
        </NavItem>

        <NavItem eventKey="facebook" className={selected === 'facebook' ? 'activeMenuItem' : ''}>
            <NavIcon>
               <img src={facebook} alt='facebook' className='sidNavImage'/>
            </NavIcon>
            <NavText>Facebook</NavText>
        </NavItem>

        <NavItem eventKey="instagram" className={selected === 'instagram' ? 'activeMenuItem' : ''}> 
            <NavIcon>
               <img src={instagram} alt='instagram' className='sidNavImage'/>
            </NavIcon>
            <NavText>Instagram</NavText>
        </NavItem>

    </SideNav.Nav>

       </SideNav>
    )
}
export default SideBar;