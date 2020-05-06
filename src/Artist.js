import React from 'react';

const Artist =({artist})=>{
if(!artist){return null};
    const {images,followers,genres,name}=artist;
    return(
        <div className='artist'>         
            <img src={images[0].url} alt='profile'
            style={{height:200,width:200,borderRadius:100,objectFit:'cover' ,marginLeft:-236,marginTop:27}}/>
            <div style={{margin: -213,paddingLeft: 236}}>
            <p>{name}</p>
            <p>{followers.total} followers</p>
            <p>{genres.join(',')}</p>
          </div>
       </div>
    );
}
export default Artist;