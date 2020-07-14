import React from 'react';
import './index.css';

function CircleComponent() {


    const menuClick = (e: any) => {
        var items: any = document.querySelectorAll('.circle a');

        for (var i = 0, l = items.length; i < l; i++) {
            items[i].style.left = (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";

            items[i].style.top = (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
        }
        console.log(e)
        document.querySelector('.circle')!.classList.toggle('open');
    }
    return (

        <nav className="circular-menu">

            <div className="circle open">
                <a href="" className="fa fa-home fa-2x"></a>
                <a href="" className="fa fa-facebook fa-2x"></a>
                <a href="" className="fa fa-twitter fa-2x"></a>
                <a href="" className="fa fa-linkedin fa-2x"></a>
                <a href="" className="fa fa-github fa-2x"></a>
                <a href="" className="fa fa-rss fa-2x"></a>
                <a href="" className="fa fa-pinterest fa-2x"></a>
                <a href="" className="fa fa-asterisk fa-2x"></a>
            </div>

            <a href="#" className="menu-button fa fa-bars fa-2x" onClick={menuClick}></a>

        </nav>
    );
}

export default CircleComponent;