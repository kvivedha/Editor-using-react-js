import React, { Component } from 'react';

function YourComponent(event) {
    const popupWindowURL = new URL(window.location.href);
    return popupWindowURL.searchParams.get("code");
}
export default YourComponent;
