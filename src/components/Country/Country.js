import React from 'react';

const Country = (props) => {
    const{name,alpha3Code,population,region,flag} = props.country;
    const flagStyle = {height: '50px'};
    const countryStyle = {border: '1px solid black', margin: '20px', padding: '20px' };
    const handleAddCountry = () =>{console.log('added');}
    return (
        <div style = {countryStyle}>
            <img style = {flagStyle} src={flag} alt=""/>
            <h3>Country Name : {name}</h3>
            <p>Country Name Code:&nbsp;&nbsp;{alpha3Code}</p>
            <p>Population:&nbsp;&nbsp;{population}</p>
            <p><small>Region:&nbsp;{region}</small></p>
            <button onClick = {handleAddCountry}>Add Country</button>
        </div>
    );
};

export default Country;