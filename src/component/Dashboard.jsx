import React, { Component, useState, useRef } from 'react';
import { SocialIcon } from 'react-social-icons';
import ModalPopup from './ModalPopup';
import '../Css/modal.css';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import linkedin from '../image/linkedin.png';
import facebook from '../image/facebook.jpeg';
import twitter from '../image/twitter.png';
import insta from '../image/instagram.jpeg';
import google from '../image/google.png';
import EmojiPicker from 'emoji-picker-react';
import Navbar from './navbar';

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

const Dashboard = (params) =>  {   
    
    const [open, setOpen] = React.useState(false);
    const [text, setText] = useState('');
    const imageInputRef = useRef(null);
    const [image,setImage] = useState([]);

    const videoInputRef = useRef(null);
    const [video,setVideo] = useState();

    const [view, setView] = useState(false);
    const [initialImage, setInitialImage] = useState('');
    const [imageLength, setImageLength] = useState(0);
    // const [imageId, setImageid] = useState([]);
    const [profile, setProfile] = useState();

    var Auth = 'AQVAGlv-tne0KuS3xKMM3Ka8fTZKedyFvAByTMRIRqkgKch0ykTqrF0Z-9DUZuNErpbPkvZ-xIw_nc0fLV39H38o3FlxEuT--MoSRJBtjO3XisyqVz9vEcs32jJwBLGhym-JpoXqRQ3ZehGTeVmIxaM22u6f8QPgBARRsuEbsU8trESJ6jiKbwtBVuu5CaJZnkN1NbdN5-jXedzkgFCQV6a-fnrEJ4N7UsfYjsM6_4T6wkwemOfwQSSgt410FI2v3MsY8QMfB-QZaHrZ8R4UBu-QE-MW_9ZCXpnmMTZB85--ip7FxxD2vCQrpihTsfsOB8JStqWV5WygPjITDpfxFccUUTyzOA';

    const handleOpen = (type) => {
        axios.post('http://192.168.1.27:8080/linkedinAPI/getProfileDetails',{
            o_auth : Auth,
        }).then((response) => {
            setProfile(response.data.data.picture);
            setOpen(true);
            setInitialImage(type);
            setImage([]);
            setText('');
        }).catch((error) => {
            console.log(error);
        })

       
        console.log(type,'type');
    }
    const handleClose = () => {
        setOpen(false);
        setText('');
        setImage([]);
        setView(false)
    }
    

    const handlePost = (evt) => {
        evt.preventDefault();
        console.log(text);
        console.log("img",image);
        // console.log("response.data.data",imageId);
        if(imageLength == 0) {
            axios.post('http://192.168.1.27:8080/linkedinAPI/sendTextMessage',{
                o_auth : Auth,
                message_text: text
            }).then((response) => {
                setOpen(false);
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        }
         else {
            axios.post('http://192.168.1.27:8080/linkedinAPI/PostImageFeed',{
                o_auth : Auth,
                message_text: text,
                // img_id_list : imageId
            }).then((response) => {
                setOpen(false);
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        }
       
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files;
        const selectedFileArray = Array.from(selectedFile);
        const imagesArray = selectedFileArray.map((file) => {
            return URL.createObjectURL(file);
        })
        setImage(imagesArray);
        setImageLength(selectedFile.length);

        const formdata = new FormData();
        selectedFileArray.map((files) => {
            formdata.append('files',files);
        })

        var data = {
            o_auth : Auth,
            message_text: text
        }
        formdata.append('json',JSON.stringify(data));
        
        console.log('image',image)
        setView(true);

        axios.post('http://192.168.1.27:8080/linkedinAPI/RegisterMediaData', formdata, {
            headers: {
                "Content-Type" : "multipart/form-data"
            }
        }).then((response) => {
            console.log("response",response);
            // setImageid(response.data.data);
            console.log("response1",response.data.data);
        })
        .catch(err => console.log(err));
        console.log('formdata', formdata);

        console.log('Selected File:', selectedFile);
      };

      const handleVideoChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setVideo(url);
      }

      const handleClick = (type) => {
        console.log("type",type);
        if(type == 'img') {
            imageInputRef.current.click();
        } else {
            videoInputRef.current.click();
        }
      };
    return(
        <div>
        <Navbar />
        <div className='container border rounded dashboard_maindiv'>
             <div className='m-4 dashboard_childdiv'>
                <SocialIcon network="twitter" className='m-2' onClick={() => handleOpen('twitter')}  />
                <SocialIcon network="facebook"  className='m-2' onClick={() => handleOpen('facebook')} />
                <SocialIcon network="linkedin" className='m-2' onClick={() => handleOpen('linkedin')} />
                <SocialIcon network="instagram"  className='m-2' onClick={() => handleOpen('instagram')} />
                <SocialIcon network="google"  className='m-2' onClick={() => handleOpen('google')} />
            </div>
            <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <div className='modal_header'>
                        <img src= {profile} className='profile'/>
                        <img src={(initialImage == 'linkedin') ? linkedin : (initialImage == 'facebook') ? facebook: (initialImage == 'twitter') ? twitter :(initialImage == 'instagram') ? insta : google} alt='' style={{height: '30px',marginLeft: '15px'}}/>
                        <button className='close_btn font-weight-bold' onClick={handleClose}>X</button>
                    </div>
                    <div className='modal_body'>
                        <div style={{height : '100%',maxHeight: '100px'}} className='mt-2'>
                            <textarea id='' value={text} onChange={e => setText(e.target.value)} placeholder='What do you want to talk about?'></textarea>
                        </div>
                        <div className='images'>
                            {image && image.map((image, index) => {
                                return(
                                    <div key={image} className='image'>
                                        <img src={image} height="250" width="300" className={imageLength > 1 ? "" : "editor_image"} />
                                    </div>
                                );
                            })}
                        </div>
                        
                    </div><hr></hr>
                    <div className='modal_footer'>
                        {/* IMAGE UPLOAD START */}
                            <i className="fa fa-image" style={{fontSize: '25px', opacity: 0.7, cursor: 'pointer'}} onClick={() => handleClick('img')}></i>
                            <input type='file' id='img_input' name='file'style={{ display: 'none' }} ref={imageInputRef} accept=".png, .jpg, .jpeg, .gif" onChange={handleFileChange} multiple/>
                        {/* IMAGE UPLOAD END */}

                        {/* VIDE UPLOAD START */}
                            <i className="fa fa-video-camera" onClick={handleClick}></i>
                            <input type='file' id='video_input' style={{ display: 'none' }} ref={videoInputRef} accept='.mov, .mp4' onChange={handleVideoChange}/>


                            {video && (
                                <video
                                className="VideoInput_video"
                                width="100%"
                                controls
                                src={video}
                                />
                            )}
                                                {/* VIDEO UPLOAD END */}

                        <i className="fa fa-smile-o"></i>
                        <i className="fa fa-file-text-o" ></i>
                        

                        {/* <div>
                            <EmojiPicker />
                        </div> */}

                        <button className='btn btn-primary' onClick={handlePost}>
                            <span>Post</span>
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
        </div>
    );
}

export default Dashboard