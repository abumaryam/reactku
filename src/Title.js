import React from 'react';

class Title extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Aplikasi React Pertamaku",
            subTitle: "Dibuat dengan semangat!"
        }
    }

    render() {
        var myStyle = {
            fontSize: 100,
            color: '#FF0000'
        }
        return (
            <div>
                <h1 style={myStyle}>{this.state.title}</h1>
                <p>{this.state.subTitle}</p>
            </div>
        );
    }
}

export default Title;