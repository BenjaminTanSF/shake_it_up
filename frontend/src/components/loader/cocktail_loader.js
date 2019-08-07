import React from 'react';

class CocktailLoader extends React.Component {

    render() {

        return(
            <div className="loader-body">
                <div id="loader">
                    <div id="lemon"></div>
                    <div id="straw"></div>
                    <div id="glass">
                        <div id="cubes">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div id="drink"></div>
                        {/* <span id="counter"></span> */}
                    </div>
                    {/* <div id="coaster"></div> */}
                </div>
            </div>
        );
    }
}

export default CocktailLoader