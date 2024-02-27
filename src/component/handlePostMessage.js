import React, { useState, useEffect } from 'react';

const HandlePostMessage = (event) => {
    console.log("tet")
    if (event.data.type === 'code') {
      const { code } = event.data;
      console.log(code)
      this.getUserCredentials(code);
    }
    console.log("hello")
};

export default HandlePostMessage;