import React from "react";
import { Oval } from 'react-loader-spinner'

const Loader = () => {
    return(
        <div>
            <Oval height="100" width="100" radius="9" color="#7cf5f7" ariaLabel="loading" />
        </div>
    );
}

export default Loader;