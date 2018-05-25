import React, { Component } from 'react';

class AuthorRef extends Component {

    constructor() {
        super();
        this.state = {
            isLoadingAuthor: true,
            isError: false,
            authorName: ''            
        };
    }

    componentDidMount() {
        fetch('/author')
        .then(response => response.json())
        .then(jSONObject => {
            this.setState({
                isLoadingAuthor: false,
                authorName: jSONObject.authorName
            })
        })
        .catch(() => {
            this.setState({
                isLoadingAuthor: false,
                isError: true                  
            })
        })
    }

    render() {
        if (this.state.isLoadingAuthor) {
            return (<p>Loading author info....</p>)
        } else if (this.state.isError) {
            return (<p>Error loading author info.</p>)
        } else {
            return (<p>Written by {this.state.authorName}.</p>)
        }
    }

}

export default AuthorRef;