import { start } from "repl"

// MODAL POPUP CODE SET start

      {/* <div className='container border rounded dashboard_maindiv'> */}
                    {/* <div className='m-4 dashboard_childdiv'  style={{display: 'none'}}>
                        <SocialIcon network="twitter" className='m-2' onClick={() => handleOpen('twitter')}  />
                        <SocialIcon network="facebook"  className='m-2' onClick={() => handleOpen('facebook')} />
                        <SocialIcon network="linkedin" className='m-2' onClick={() => handleOpen('linkedin')} />
                        <SocialIcon network="instagram"  className='m-2' onClick={() => handleOpen('instagram')} />
                        <SocialIcon network="google"  className='m-2' onClick={() => handleOpen('google')} />
                    </div> */}
                    {/* <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
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

                                    {/* IMAGE SECTION */}
                                    {/* { !video && <div className='images'>
                                        {image && image.map((image, index) => {
                                            return(
                                                <div key={image} className='image'>
                                                    <img src={image} height="250" width="300" className={imageLength > 1 ? "" : "editor_image"} />
                                                </div>
                                            );
                                        })}
                                    </div>} */}

                                    {/* VIDEO SECTION */}
                                    {/* {video && <div>
                                        <video
                                        className="VideoInput_video"
                                        controls
                                        src={video}
                                        />
                                    </div>} */}

                                    {/* {fileUpload && <div>
                                        <div className=''>{finalFileUpload}</div>
                                    </div>} */}
                            {/* </div>
                            <hr></hr>
                            <div className='modal_footer'>
                                {/* IMAGE UPLOAD START */}
                                    {/* <i className="fa fa-image" style={{fontSize: '25px', opacity: 0.7, cursor: 'pointer'}} onClick={() => handleClick('img')}></i> */}
                                    {/* <input type='file' id='img_input' name='file'style={{ display: 'none' }} ref={imageInputRef} accept=".png, .jpg, .jpeg, .gif" onChange={handleImageChange} multiple/> */}
                                {/* IMAGE UPLOAD END */}

                                {/* VIDE UPLOAD START */}
                                    {/* <i className="fa fa-video-camera" onClick={() => handleClick('video')}></i> */}
                                    {/* <input type='file' id='video_input' style={{ display: 'none' }} ref={videoInputRef} accept='.mov, .mp4' onChange={handleVideoChange}/> */}
                                    
                                {/* VIDEO UPLOAD END */}

                                {/* <i className="fa fa-smile-o"></i>
                                <i className="fa fa-file-text-o" onClick={() => handleClick('file')}></i>
                                <input type='file' id='video_input' style={{ display: 'none' }} ref={fileInputRef} accept='.pdf, .doc, .docx, .txt' onChange={handleFileChange}/>
                                
                                <button className='btn btn-primary' onClick={() => handlePost(video ? 'video' : image ? 'img' : 'file')}>
                                    <span>Post</span>
                                </button>
                            </div>
                        </Box> */}
                    {/* </Modal> */} 
                    {/* </div> */}
// END



// MAIN PAGE CODE SET START
                         // const [open, setOpen] = React.useState(true);
    // const [text, setText] = useState('');
    // const imageInputRef = useRef(null);
    // const [image,setImage] = useState([]);

    // const videoInputRef = useRef(null);
    // const [video,setVideo] = useState();
    // const [videoFile, setVideoFile] = useState(null);

    // const fileInputRef = useRef(null);
    // const [fileUpload, setFileUpload] = useState([]);
    // const [finalFileUpload, setFinalFileUpload] = useState([]);

    // const [view, setView] = useState(false);


    // const [imageLength, setImageLength] = useState(0);
    // // const [imageId, setImageid] = useState([]);
    // const [profile, setProfile] = useState();
    // const [selectedFile, setSelectedFile] = useState([]);
    // const [selectedFileArray, setSelectedFileArray] = useState([]);

    // var Auth = 'AQVvAA1XMMmTOC-d3dFz5rgvP9eWiKK2VK9i8vg86WlqMAKbNRtBDH_h_snBMpn3ek0IqMMp80v7zDzQR3akTP1WuP5uMvyNfRhQrlRU0t8sF1-aqYOeKHcDxFs8LLDqKTzkd5_XYV6YXMJkLB23rCz2y4lcPdZ7We1s3Y2SjlEVYvVpwnzSSQEXXz6TNZ0Qtj1cxlz7fCJgEmJBiFBCF8e0TNmQkC6TSLM8SwR6D6wA-JXp_P__q6mDBtDz5hxYsxa4FK80XSjmSao0ab-5z30ivyJuawg_VWZXc3UTWC_vCHL0FhAgnXQjstYpLbaK5EDxRXTzCAwM9uF5djtrmy-LE8LSzw';

    // const handleOpen = (type) => {
    //     axios.post('http://192.168.1.27:8080/linkedinAPI/getProfileDetails',{
    //         o_auth : Auth,
    //     }).then((response) => {
    //         setProfile(response.data.data.picture);
    //         setOpen(true);
    //         setInitialImage(type);
    //         setImage([]);
    //         setText('');
    //         setVideo();
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    //     console.log(type,'type');
    // };

    // const handleClose = () => {
    //     setOpen(false);
    //     setText('');
    //     setImage([]);
    //     setView(false);
    //     setVideo();
    // };

    // const handleClick = (type) => {
    //     console.log("typesssss",type);
    //     if(type == 'img') {
    //         imageInputRef.current.click();
    //     } else if(type == 'video') {
    //         videoInputRef.current.click();
    //     } else {
    //         fileInputRef.current.click();
    //     }
    // };
    
    // const handleImageChange = (e) => {
    //     setSelectedFile(e.target.files);
    //     setView(true);
    //   };

    // useEffect(() => {
    //     setSelectedFileArray(Array.from(selectedFile));
    // },[selectedFile]);

    // useEffect(() => {
    //      if(setSelectedFileArray.length > 0) {
    //         const imagesArray = selectedFileArray.map((file) => {
    //             return URL.createObjectURL(file);
    //         })
    //         setImage(imagesArray);
    //         setImageLength(selectedFile.length);
    //     }
    // },[selectedFileArray])


    // const handleVideoChange = (event) => {
    //     setVideoFile(event.target.files[0]);
    // }
    // useEffect(() => {
    //     if(videoFile) {
    //         const url = URL.createObjectURL(videoFile);
    //         setVideo(url);
    //     }
    // },[videoFile])

    // const handleFileChange = (event) => {
    //     setFileUpload(event.target.files[0]);
    //     console.log(fileUpload,"file")
    // }

    // const handlePost = (type) => {
    //     console.log(type)
    //     console.log('fileUpload',fileUpload)
    //     // evt.preventDefault();
    //     const formdata = new FormData();
    //     if(type == 'img') {
    //         selectedFileArray.map((files) => {
    //             formdata.append('files',files);
    //         })
    //     } else if(type == 'video'){
    //         formdata.append('files',videoFile);
    //     } else {
    //         formdata.append('files',fileUpload);
    //     }
       

    //     var data = {
    //         o_auth : Auth,
    //         message_text: text
    //     }
    //     formdata.append('json',JSON.stringify(data));
    //     console.log(formdata)
        
    //     axios.post('http://192.168.1.27:8080/linkedinAPI/PostMediaData', formdata, {
    //         headers: {
    //             "Content-Type" : "multipart/form-data"
    //         }
    //     }).then((response) => {
    //         console.log("response",response);
    //         console.log("opem",open);
    //         setOpen(false);
    //         setVideo();
    //         // setImageid(response.data.data);
    //         console.log("response1",response.data.data);
    //     })
    //     .catch(err => console.log(err));
    //     console.log('formdata', formdata);
    // }





// END