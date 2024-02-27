import React, { useState, useEffect } from 'react';

const GetCodeFromWindowURL = (url) => {
    console.log('getCodeFromWindowURL');
    const popupWindowURL = new URL(url);
    return popupWindowURL.searchParams.get("code");
};

export default GetCodeFromWindowURL;