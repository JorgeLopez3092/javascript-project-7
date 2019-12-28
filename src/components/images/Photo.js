import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App'

const Photo = ({ farm, server, id, secret }) => {
    return (
        <li>
            <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt="picture" />
        </li>
        
    );
};

export default Photo;