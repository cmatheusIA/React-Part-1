import React, { Component, Fragment} from 'react';
import Header from './Header';
class Sobre extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <div className="card-panel teal lighten-2">
                    <h1>Página para estudo</h1>
                    <p>
                        Página feita apenas para estudo da FrameWork ReactJS.
                    </p>
                </div>
            
            </Fragment>
        );
    }
}

export default Sobre;