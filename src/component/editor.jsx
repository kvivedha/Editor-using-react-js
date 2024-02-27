import React, { Component, useState, useRef, useEffect } from 'react';
import '../Css/modal.css';
import linkedin from '../image/linkedin.png';
import facebook from '../image/facebook.jpeg';
import twitter from '../image/twitter.png';
import insta from '../image/instagram.jpeg';
import google from '../image/google.png';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import illiustrate from '../image/illustrate.jpg';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import artcle from '../image/application.png';
import Loader from './loader';
import EmojiPicker from 'emoji-picker-react';
import { hot } from 'react-hot-loader/root';
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

const sty = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 744,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: 220
}

const EdiorPage = ({initialImage , open , authentication, handleButtonClick, CloseBox, userId}) => {
    console.log('initialImage',initialImage)
    console.log('authentication',authentication)

    const [profile, setProfile] = useState();
    const [text, setText] = useState('');
    const [video, setVideo] = useState();
    const [image, setImage] = useState([]);
    const [imageLength, setImageLength] = useState(0);
    const imageInputRef = useRef(null);
    const [view, setView] = useState(false);
    const [selectedFile, setSelectedFile] = useState([]);
    const [fileUpload, setFileUpload] = useState(null);
    const [finalFileUpload, setFinalFileUpload] = useState(null);

    const [article, setArticle] = useState(false);

    const videoInputRef = useRef(null);
    const [videoFile, setVideoFile] = useState(null);

    const fileInputRef = useRef(null);

    const [selectedFileArray, setSelectedFileArray] = useState([]);
    const Content = useLocation();

    const [titleValue, setTitleValue] = useState('');
    const [urlValue, setUrlValue] = useState('');
    // const [userIdVal, setUserIdVal] = useState(localStorage.getItem('userIdVal'));
    // console.log('userIdVal',userIdVal);

    console.log('content',Content);

    const [disable, setDisable] = useState(false);
    const [disableOpt, setDisableOpt] = useState(true);
    const [loader, setLoader] = useState(false);
    const [showEmoji, setShowEmoji] = useState(false);
    const [chosenEmoji, setChosenEmoji] = useState(null);

    localStorage.setItem('Auth','AQUjqGsEd1MBHSwdgdl3QMyhZNJQmIJAfxrP05sToyJPI-TdeB_-Ie2rsPjzwVxUlQcoYRDxPgiBeXgkRwCzgkyh0Dxqq-BrPa5IHFvVsj0ZV-I8F5nXszE6pwSc6iKshT5-nfaqz8zY9pZ8ZkwgqjqgA8EFUfK_Q62qTXa-h3w6nhr50H5NOor5uPsr7j8gRiEhnPsKl47csHUW2P7rPKKXwXmeVbI3-TEL0tZZNf0yPf9WrGojJB2KE9cj_puN_N0KZylsApONeqS3lAIDbvEHQywks0nMnyYMyTp3YQn52T1uuzL4jAJhQlTjZBtucXih9j-zzhRiPwHbntbHCzHL7OEEsQ');

    useEffect (() => {
        localStorage.removeItem('userIdVal');
        // setUserIdVal('');
    },[]);

    const handleImageChange = (e) => {
        console.log('handleImageChange',e.target.value);
        setSelectedFile(e.target.files);

        setView(true);
        setDisable(true);
        console.log('disable',disable);
    };

    useEffect(() => {
        setSelectedFileArray(Array.from(selectedFile));
    },[selectedFile]);

    useEffect(() => {
        if(setSelectedFileArray.length > 0) {
           const imagesArray = selectedFileArray.map((file) => {
               return URL.createObjectURL(file);
           })
           setImage(imagesArray);
           setImageLength(selectedFile.length);
       }
   },[selectedFileArray])

   const handleVideoChange = (e) => {
    console.log('handleImageChange',e.target.files);
    setVideoFile(e.target.files[0]);
    setDisable(true);
}

useEffect(() => {
    if(videoFile) {
        const url = URL.createObjectURL(videoFile);
        setVideo(url);
    }
},[videoFile])

const handleFileChange = (event) => {
    // setFileUpload(event.target.files[0]);
    setDisable(true);
    const file = event.target.files[0];
    setFileUpload(file);
    // const reader = new FileReader();

    // reader.onload = () => {
    //     setFileUpload(reader.result);
    // }

    // reader.readAsDataURL(file);
    console.log(fileUpload,"file")
}

useEffect(() => {
    if(fileUpload) {
        const reader = new FileReader();
        reader.onload = () => {
            setFinalFileUpload(reader.result);
        }
        reader.readAsDataURL(fileUpload);
    }
},[fileUpload]);

const inputTagChange = (event,from) => {
    console.log("inputTagChange event",event);
    console.log("inputTagChange val",from);
    if(from == 'title') {
        setTitleValue(event.target.value);
    } else if (from == 'userid') {
        // setUserIdVal(event.target.value);
    } else {
        setUrlValue(event.target.value)
    }
}
// console.log("userIdVal val",userIdVal);


    const handleClick = (type) => {
        console.log('setVideo',video);
        console.log('image',image);
        console.log('videoFile',videoFile);
        console.log('videoInputRef',videoInputRef.current.disabled);
        const val =type;

        setArticle(false);
        if(type == 'img') {
            imageInputRef.current.click();
        console.log('vi',selectedFileArray);

            // setVideo('');
            // setFileUpload();
        } else if(type == 'video') {
            videoInputRef.current.click();
            // setImage([]);
            // setArticle(false);
        } else if(type == 'file'){
            fileInputRef.current.click();
            // setImage([])
            // setArticle(false);
        } else {
            setArticle(true);
            setDisable(true);
            // setFileUpload();
            // setVideo();
            // setImage([]);
        }
        console.log("handleClick",type);
    };

    const handleClose = () => {
        handleButtonClick();
        setText('');
        setImage([]);
        setView(false);
        setVideo();
        setFileUpload();
        setArticle(false);
        setTitleValue('');
        setUrlValue('');
        setDisable(false);
        setShowEmoji(false);
        // setUserIdVal('');
        setChosenEmoji(null);
    };

    const handlePost = (type) => {

        setLoader(true);
        const formdata = new FormData();

        if((type == 'img' || type == 'video' || type == 'file')) {

            var appendType = (initialImage == 'linkedin' ? 'files' : 'sourceFile')

            if(type == 'img') {
                if(initialImage != 'instagram') {
                    selectedFileArray.map((files) => {
                        formdata.append(appendType,files);
                    })
                } else {
                    console.log(image,'vivi');
                }
                
            } else if(type == 'video'){
                formdata.append(appendType,videoFile);
            } else if(type == 'file'){
                formdata.append(appendType,fileUpload);
            }

            if(initialImage == 'linkedin') {
                var data = {
                    // o_auth : localStorage.getItem('Auth'),
                    userID : localStorage.getItem('userIdVal'),
                    message_text: text,
                    // title : titleValue
                }
                formdata.append('json',JSON.stringify(data));
            }
            else if(initialImage == 'facebook') {
                formdata.append('message', text);
                formdata.append('platformCode', 'ms');
                formdata.append('platformBranchCode', 'mscom1');
                formdata.append('socialMediaType', 'f');
            } else {
                formdata.append('platformCode', 'ms');
                formdata.append('platformBranchCode', 'mscom1');
                formdata.append('message', text);
                formdata.append('socialMediaType', 'i');
            }
        } else {

            if(((initialImage != 'instagram') && titleValue == '' || urlValue == '') || (urlValue == '')) {
                if(titleValue == '' && urlValue == ''){
                    toast.error('Please enter the title & url', {style : {background : '#f44336', color: 'white', fontWeight: 'bold'}});
                } else if(titleValue == '') {
                    toast.error('Please enter the title', {style : {background : '#f44336', color: 'white', fontWeight: 'bold'}});
                } else if (urlValue == '') {
                    toast.error('Please enter the url', {style : {background : '#f44336', color: 'white', fontWeight: 'bold'}});
                }
                setLoader(false);
            } else {
                console.log('i m in else case')
                var data1 = {
                    ...data,
                    article_title : titleValue,
                    article_url : urlValue
                }
            if(initialImage == 'linkedin') {
                formdata.append('json',JSON.stringify(data1));
            } 
            // else
             if(initialImage == 'instagram') {

                formdata.append('platformCode', 'ms');
                formdata.append('platformBranchCode', 'mscom1');
                formdata.append('message', text);
                formdata.append('socialMediaType', 'i');
                formdata.append('mediaFiles', urlValue);

            }
            // else {
            //     formdata.append(data1);
            // }
            }

            
        }
       

       
        
        console.log("text",text)

        console.log("vvvvv",formdata)
        if(initialImage == 'linkedin' && ((type == 'article' && (titleValue != '' && urlValue != '')) || ((type == 'img' || type == 'video' || type == 'file') && type != 'article'))){
        
            axios.post('http://192.168.1.27:8090/linkedinAPI/PostMediaData', formdata, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            }).then((response) => {
                if(response.data.status == 'Success'){
                    toast.success(response.data.message, {style : {background : '#4caf50', color: 'white', fontWeight: 'bold'}});
                } else {
                    toast.error(response.data.message, {style : {background : '#f44336', color: 'white', fontWeight: 'bold'}});
                }
                closeAll();
                setLoader(false);
            })
            .catch((err) => {
                closeAll();
                toast.error(err, {style : {background : '#f44336', color: 'white', fontWeight: 'bold'}});
                setLoader(false);
            });
            console.log('formdata', formdata);
        } else if (initialImage != 'linkedin' && (((initialImage == 'facebook' && (type == 'article' && (titleValue != '' && urlValue != ''))) || (initialImage == 'instagram' && (type == 'article' && (urlValue != '')))) || ((type == 'img' || type == 'video' || type == 'file') && type != 'article'))) {
            axios.post('http://192.168.1.156:8080/addPost', formdata, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                },
            }).then((response) => {
                if(response.data.status == true) {
                    toast.success(response.data.message, {style : {background : '#4caf50', color: 'white', fontWeight: 'bold'}});
                } else {
                    toast.error(response.data.error, {style : {background : '#f44336', color: 'white', fontWeight: 'bold'}});
                }
                closeAll();
                setLoader(false);
            }).catch((err) => {
                closeAll();
                toast.error(err, {style : {background : '#f44336', color: 'white', fontWeight: 'bold'}});
                setLoader(false);
            });
        }
    }

    const closeAll = () => {
        handleButtonClick();
        setVideo();
        setImage();
        setFileUpload();
        setArticle(false);
        setText('');
        setTitleValue('');
        setUrlValue('');
        setDisable(false);
        setShowEmoji(false);
        // setUserIdVal('');
        setChosenEmoji(null);
    }
    const saveAuth = () => {
        // localStorage.setItem('userIdVal', userIdVal);
        CloseBox();

        // if(userIdVal != '') {
        //     toast.success('User Id is saved successfully...', {style : {background : '#4caf50', color: 'white', fontWeight: 'bold'}});
        // } else {
        //     toast.error('Enter the user id', {style : {background : '#f44336', color: 'white', fontWeight: 'bold'}});
        // }
        // localStorage.setItem('userIdVal', '');
        // setUserIdVal('');
        // console.log('userIdVal',userIdVal);
    }
    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject.target.src);
        setShowEmoji(false);
    };

    // const handleInput = (e) => {
    //     setText(e.target.textContent);
    //   };

    return(
        <div id='Editor_main_div'>
            
            <div className='loader'>
             <Modal open = {loader} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Loader />
             </Modal>
            </div>

        {(!initialImage || !open) && (<div id='illustrate'>
            <img src={illiustrate} />
        </div>)}

        {(initialImage && authentication) && (
             <Modal open={authentication} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
             <Box sx={sty}>
                 <div id='auth_popup'>
                     <div className='modal_header'>
                         <button className='close_btn font-weight-bold' onClick={CloseBox}>X</button>
                     </div>
                     <div style={{margin: '10px'}}>
                         <span style={{margin: '10px', fontFamily: 'inherit', fontWeight: 'bold'}}>Enter the user id here : </span>
                         <div className='modal_body auth' style={{width : '95%'}}>
                             <input type='number' name='title' placeholder='' className='border-0' value={userId} onChange={(e) => inputTagChange(e, 'userid')} required></input>
                         </div>
                     </div>
                     <div style={{textAlign: 'center'}}>
                         <button className='btn' style={{width: '20%', marginTop: '25px', background : '#6675df', color: 'white'}} onClick={() => saveAuth()}>
                             <span>Save</span>
                         </button>
                     </div>
                 </div>
                 
             </Box> 
          </Modal>
        )}

        {(initialImage && !authentication) && (
            <div>
                <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <div className='modal_header'>
                                <img src= {profile} className='profile'/>
                                <img src={(initialImage == 'linkedin') ? linkedin : (initialImage == 'facebook') ? facebook :(initialImage == 'instagram') ? insta : google} alt='' style={{height: '30px'}}/>
                                <button className='close_btn font-weight-bold' onClick={handleClose}>X</button>
                            </div>
                            <div className='modal_body'>
                                {/* <div> */}
                                    <div style={{height : '100%',maxHeight: '100px'}} className='mt-2'>
                                        {/* <p contenteditable="true" onChange={e => setText(e.target.value)} value={text}>edit</p> */}
                                        {/* <p contentEditable="true" onInput={handleInput} style={{ border: '1px solid black', padding: '5px' }}> {text}</p> */}
                                        <textarea id='' value={text} onChange={e => setText(e.target.value)} placeholder='What do you want to talk about?'>
                                        </textarea>
                                        <img style={{width: '25px'}} src={chosenEmoji}/>


                                    </div>

                                    {/* IMAGE SECTION */}
                                     { (!video && !article) && <div className='images'>
                                        {image && image.map((images, index) => {
                                            return(
                                                <div key={images} className='image position-relative'>
                                                    <img src={images} height="250" width="300" className={imageLength > 1 ? "" : "editor_image"} alt='image'/>
                                                    <button onClick={() => setImage(image.filter((e) => e != images))} className='position-absolute cutom-delete-img close_btn'>X</button>
                                                </div>
                                            );
                                        })}
                                    </div>} 

                                    {/* VIDEO SECTION */}
                                     {video && <div>
                                        <video
                                        className="VideoInput_video"
                                        controls
                                        src={video}
                                        />
                                    </div>} 

                                    {fileUpload && <div>
                                        <div className='header_child fileUpload'>
                                            {/* <p>Title : </p>
                                            <div>
                                                <input type='text' name='title' placeholder='Please enter the title here...' value={titleValue} onChange={(e) => inputTagChange(e, 'title')} className='border-0' required></input>
                                            </div> */}
                                            <embed src={finalFileUpload} width="100%" height="250px" />
                                        </div>
                                        {/* <div className=''>{finalFileUpload}</div> */}
                                    </div>}

                                    {(article)&& <div id='article_main_div'>
                                        {initialImage != 'instagram' && (<div className='header_child'>
                                            <p>Title : </p>
                                            <div>
                                                <input type='text' name='title' placeholder='Please enter the title here...' value={titleValue} onChange={(e) => inputTagChange(e, 'title')} required></input>
                                            </div>
                                        </div>)}
                                       
                                        <div className='header_child'>
                                            <p>URL : </p>
                                            <div>
                                                <input type='url' name='website' placeholder='Please enter the Url here...'  value={urlValue} onChange={(e) => inputTagChange(e, 'url')} required></input>
                                            </div>
                                        </div>
                                    </div>}

                                    
                                    {showEmoji && <div>
                                        <EmojiPicker onEmojiClick={onEmojiClick}/>
                                    </div>}
                                    
                                    
                                {/* </div> */}
                             </div>
                            <hr></hr>
                            <div className='modal_footer'>
                                {/* IMAGE UPLOAD START */}
                                {/* {video && ( */}
                                <div>
                                    <i className={`fa fa-image footer_image ${((!image && fileUpload) && disable) ? 'disabled' : ''}`} onClick={() => handleClick('img')}></i> 
                                    <input type='file' id='img_input' name='file'style={{ display: 'none' }} ref={imageInputRef} accept=".png, .jpg, .jpeg, .gif" onChange={handleImageChange} multiple/>
                                </div>
                                 {/* )} */}
                                     
                                {/* IMAGE UPLOAD END */}

                                {/* VIDE UPLOAD START */}
                                <div>
                                    <i className={`fa fa-video-camera ${(!video && disable) ? 'disabled' : ''}`} onClick={() => handleClick('video')} ></i>
                                    <input type='file' id='video_input' style={{ display: 'none' }} ref={videoInputRef} accept='.mov, .mp4' onChange={handleVideoChange}/>
                                </div>
                                    
                                    
                                {/* VIDEO UPLOAD END */}

 

                                <div >
                                    <i className={`fa fa-smile-o ${disable ? 'disabled' : ''}`} onClick={() => setShowEmoji(true)}></i>
                                </div>

                                <div>
                                    <i className={`fa fa-file-text-o ${(!fileUpload && disable) ? 'disabled' : ''}`} onClick={() => handleClick('file')}></i>
                                    <input type='file' id='video_input' style={{ display: 'none' }} ref={fileInputRef} accept='.pdf, .doc, .docx' onChange={handleFileChange}/>
                                </div>

                                <div>
                                    <img src={artcle} alt='article' className={`article ${(!article && disable) ? 'disabled' : ''}`}  onClick={() => handleClick('article')}/>
                                </div>
                                
                                <button className='btn' onClick={() => handlePost(video ? 'video' : fileUpload ? 'file' : article ? 'article': 'img')} style={{background: '#6675df', color: 'white'}}>
                                    <span>Post</span>
                                </button>
                            </div>
                        </Box> 
                </Modal>
            </div>
                 
        )}
     
<Toaster  position="bottom-center" reverseOrder={false}/>

        </div>
    );
}

export default hot(EdiorPage);