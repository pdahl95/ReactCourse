import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends React.Component {
    // static contextType = LanguageContext; 

    render(){
        // const text = this.context === 'english' ? 'Submit' : 'Send';
        return (
            <button className="ui button primary">
                <LanguageContext.Consumer>{(value)=> value === 'english' ? 'Submit' : 'Send'}</LanguageContext.Consumer>
            </button>
        );
    }
}

export default Button; 