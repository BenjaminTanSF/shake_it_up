import React from 'react';
import loaderCSS from '../../styles/loader/loader.scss';

class CocktailLoader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: 0,
            lemonOpacity: 1,
            strawOpacity: 1,
            glassOpacity: 1,
            drinkOpacity: .4,
            cubesOpacity: 1,
            cube1Opacity: 1,
            cube2Opacity: 1,
            cube3Opacity: 1,
            drinkTop: 100
        }

        // Binding methods 
        this.loading = this.loading.bind(this);

        // Refs
        this.lemon = React.createRef();
        this.straw = React.createRef();
        this.drink = React.createRef();
        this.glass = React.createRef();
        this.cubes = React.createRef();
        this.cube1 = React.createRef();
        this.cube2 = React.createRef();
        this.cube3 = React.createRef();
    }

    componentDidMount() {
        this.loading();
    }

    loading() {
        // debugger;
        var worker = null;
        let that = this;

        function increment() {
            // debugger;
            // this.drink.current.style.top = `${(100 - this.state.loaded * .9)}%`;
            let loaded = that.state.loaded;
            that.setState (() => {
                // debugger;
                return {drinkTop: (100 - loaded * .9)}
            })
            if (that.state.loaded === 25) {
                that.setState({
                    cube1Opacity: 1
                })
            }

            if (that.state.loaded === 50) {
                that.setState({
                    cube2Opacity: 1
                })
            }

            if (that.state.loaded === 75) {
                that.setState({
                    cube3Opacity: 1
                })
            }

            if (that.state.loaded == 100) {
                that.setState({
                    lemonOpacity: 1,
                    strawOpacity: 1,
                    loaded: 0
                })
                stopLoading();
            } else {
                that.setState(prevState => {
                    // debugger;
                   return {loaded: prevState.loaded + 1}
                });
            }     
        }

        function startLoading() {
            // that.setState({
            //     lemonOpacity: 0,
            //     strawOpacity: 0,
            //     cubesOpacity: 0
            // })
            worker = setInterval(increment, 15);
        }

        function stopLoading() {
            // debugger;
            clearInterval(worker);
        }
        
        startLoading();
    }

    render() {

        return(
            <div className="loader-body">
                {/* { this.loading() } */}
                <div id="loader">
                    <div id="lemon" ref={ this.lemon } style={{ opacity: this.state.lemonOpacity }}></div>
                    <div id="straw" ref={ this.straw } style={{ opacity: this.state.strawOpacity }}></div>
                    <div id="glass" ref={ this.glass } style={{ opacity: this.state.glassOpacity }}>
                        <div id="cubes" ref={ this.cubes } style={{ opacity: this.state.cubesOpacity }}>
                            <div className="cube" id="cube1" ref={ this.cube1 } style={{ opacity: this.state.cube1Opacity }}></div>
                            <div className="cube" id="cube2" ref={ this.cube2 } style={{ opacity: this.state.cube2Opacity }}></div>
                            <div className="cube" id="cube3" ref={ this.cube3 } style={{ opacity: this.state.cube3Opacity }}></div>
                        </div>
                        <div id="drink" ref={ this.drink } style={{ opacity: this.state.drinkOpacity, top: `${this.state.drinkTop}%` }}></div>
                        {/* <span id="counter"></span> */}
                    </div>
                    {/* <div id="coaster"></div> */}
                </div>
            </div>
        );
    }
}

export default CocktailLoader