import React ,{Component} from 'react';
import Artist from './Artist';
import Track from './Track';
const API_ADDRESS ='https://spotify-api-wrapper.appspot.com';

class Search extends Component {
    state={artistQuery:'',artist:null,tracks:[]};
    onchangeHnadle =(event) =>{
        this.setState({artistQuery:event.target.value});
     }

    handleKeyPress =(event) =>{
       if(event.key ==='Enter'){
           this.SearchList();

       }
    }

    SearchList =() =>{
        fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
        .then(response => response.json())
        .then(json=>{
            console.log('json', json);
            if(json.artists.total >0){
                const artist = json.artists.items[0];
                this.setState({artist});
                fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                .then(response => response.json())
                .then(json =>this.setState({tracks:json.tracks}))
                .catch(error=>alert(error.message));
            }
        });
    }
    render(){
        return(
<div>
        <div className='bg_img'>
             <div className="left_side"> 
             <h3>Music for everyone.</h3>
             <input type="text" className="search"
             placeholder='Enter Artist Name'
             onChange={this.onchangeHnadle}
             onKeyPress={this.handleKeyPress}/>
             <button onClick={this.SearchList} className='search-button'>search</button>
             <Artist artist={this.state.artist}/>
             </div>
        </div>
        <div>      
        <Track tracks={this.state.tracks}/>
       </div>
</div>
               
       );
    }
}
export default Search;