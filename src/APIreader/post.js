import React from 'react';
import ReactDOM from 'react-dom/client';

class ContentFeed extends React.Component{
    componentDidMount(){
    this.getItems();
    }
    getItems(){
    fetch('https://vaulted-epigram-349713.de.r.appspot.com/api/user')
        .then(results=>results.json())
        .then(results=>console.log(results));
    }
    render(){
    return null;
    }
}
export default ContentFeed;