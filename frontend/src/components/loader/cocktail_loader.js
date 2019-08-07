import React from 'react';

class CocktailLoader extends React.Component {

    constructor(props) {
        super(props);
        this.loading = this.loading.bind(this);
    }

    loading() {
        var worker = null;
        var loaded = 0;
        var lemon = document.getElementById('lemon');
        var straw = document.getElementById('straw');
        var cubes = document.getElementById('cubes');
        var drink = document.getElementById('drink');

        function increment() {
            // $('#counter').html(loaded + '%');
            drink.style.top = `${100 - loaded * .9}%`;
            if (loaded === 25) document.getElementById('cube1').style.opacity = 1
            if (loaded === 50) document.getElementById('cube2').style.opacity = 1
            if (loaded === 75) document.getElementById('cube3').style.opacity = 1
            if (loaded == 100) {
                lemon.style.opacity = 1;
                straw.style.opacity = 1;
                loaded = 0;
                stopLoading();
                setTimeout(startLoading, 1000);
            } else loaded++;
        }

        function startLoading() {
            lemon.style.opacity = 0;
            straw.style.opacity = 0;
            cubes.style.opacity = 0;
            worker = setInterval(increment, 30);
        }

        function stopLoading() {
            clearInterval(worker);
        }

        startLoading();
    }

    render() {

        return(
            <div className="loader-body">
                <div id="loader">
                    <div id="lemon"></div>
                    <div id="straw"></div>
                    <div id="glass">
                        <div id="cubes">
                            <div className="cube" id="cube1"></div>
                            <div className="cube" id="cube2"></div>
                            <div className="cube" id="cube3"></div>
                        </div>
                        <div id="drink"></div>
                        <span id="counter"></span>
                    </div>
                    {/* <div id="coaster"></div> */}
                </div>
            </div>
        );
    }
}

export default CocktailLoader