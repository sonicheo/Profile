import React, { useEffect } from 'react'
import style from '../styles/home.module.css'

const Home = () => {

    //Gets Scroll offset
    var scrolled = 0;

    //Parallax Effect
    window.addEventListener('scroll', (e) =>{
        const target = document.querySelectorAll('.scrollHome');
        scrolled = window.pageYOffset;
        
        if(scrolled >= 0 && scrolled < 648){
            for(var i=0; i < target.length; i++){
            
                var rateX = (scrolled) * target[i].dataset.ratex;
                var rateY = (scrolled) * target[i].dataset.ratey;
    
                target[i].style.transform = 'translate3d('+rateX+'px, '+rateY+'px, 0px)';
            }
        }
    })

    //To fix canvas blur
    //Go to https://medium.com/@doomgoober/understanding-html-canvas-scaling-and-sizing-c04925d9a830
    //For details
    function getObjectFitSize(
        contains /* true = contain, false = cover */,
        containerWidth,
        containerHeight,
        width,
        height
    ) {
        var doRatio = width / height;
        var cRatio = containerWidth / containerHeight;
        var targetWidth = 0;
        var targetHeight = 0;
        var test = contains ? doRatio > cRatio : doRatio < cRatio;

        if (test) {
        targetWidth = containerWidth;
        targetHeight = targetWidth / doRatio;
        } else {
        targetHeight = containerHeight;
        targetWidth = targetHeight * doRatio;
        }

        return {
        width: targetWidth,
        height: targetHeight,
        x: (containerWidth - targetWidth) / 2,
        y: (containerHeight - targetHeight) / 2
        };
    }


    
    useEffect(() => {
        //Starter for 2d canvases
        var canvas = document.querySelector('#canvasHome')
        var c = canvas.getContext('2d');
        
        
        //sets up size of canvas
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        //To fix drawing blur
        const dimensions = getObjectFitSize(
            true,
            canvas.clientWidth,
            canvas.clientHeight,
            canvas.width,
            canvas.height
        )
        
        //Sets the width and height of canvas to fix blur
        canvas.width = dimensions.width;
        canvas.height = dimensions.height;
        

        //Stores Mouse Coordinates
        var mouse = {
            x: 0,
            y: 0
        }

        //Stores possible colors for circles
        var colors = [
            '#158044',
            '#42CCA3',
            '#98FF98',
            '#329532',
            '#2BC384'
        ]
        
        //Gets mouse Coordinates
        
        window.addEventListener('mousemove', (e) =>{
                mouse.x = e.x;
                mouse.y = e.y;
        })

        //Circle method for drawing and animating
        function Circle(x,y,dx,dy, radius) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.size = radius;
            this.color = colors[Math.floor(Math.random() * colors.length)];

            //Creates a circle
            this.draw = () =>{
                c.beginPath();
                c.arc(x, y, radius, 0, Math.PI *2, false);
                c.strokeStyle = this.color;
                // c.fillStyle = 'blue'
                // c.fill();
                c.stroke();
                
            }

            //Animates circle
            this.update = () =>{
                this.draw()
                if(
                    x + radius > canvas.width ||
                    x - radius < 0
                ){
                    dx = -dx;
                }
    
                if(
                    y + radius > canvas.height ||
                    y - radius < 0
                ){
                    dy = -dy;
                }
                x += dx;
                y += dy;

                //Mouse interaction

                if(
                    mouse.x - x < 50 &&
                    mouse.x - x > -50 &&
                    mouse.y - y < 50 &&
                    mouse.y -y > -50 &&
                    radius < 30
                ) {
                    radius += 1
                }
                else if(radius > this.size){
                    radius -= 1
                }
            }
        }


        //To store all of the circles
        var circleArray = [];

        //Creates and randomnizes circle values
        for(var i=0; i < 1000; i++){
            var radius = 2;

            circleArray.push(
                //Values: x,y,dx,dy,radius
                new Circle(
                    // - radius * 2) + radius prevents spawn at outer edge
                    Math.random() * (canvas.width - radius * 2) + radius,
                    Math.random() * (canvas.height - radius * 2) + radius,
                    (Math.random() - 0.5) * 2,
                    (Math.random() - 0.5) * 2,
                    radius
                )
            )
        }
        
        //Where the animation takes place
        function animate(){
            requestAnimationFrame(animate);
            //Removes everyhting on canvas as it animates
            c.clearRect(0, 0, canvas.width, canvas.height);


            for(var i=0; i < circleArray.length; i++){
                circleArray[i].update();
            }
        }
        
        animate();

        

    },[])

    
    //data-rate is the rate of the left right animation
    return (
        <div className={style.container} id="home" >
                <div>
                    <div className={style.homeText} >
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='.7'>
                            Hi,
                        </h1>
                    </div>
                    
                    <div className={style.homeText} >
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='-.2'>
                            I
                        </h1>
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='-.1'>
                           '
                        </h1>
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='.5'>
                           m Ju
                        </h1>
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='-.2'>
                            a
                        </h1>
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='.4'>
                            n
                        </h1>
                    </div>
                   
                    <div className={style.homeText} >
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='-.7'>
                            A F
                        </h1>
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='-.6'>
                            u
                        </h1>
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='-.5'>
                            l
                        </h1>
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='-.4'>
                            l
                        </h1>
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='-.3'>
                            s
                        </h1>
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='-.2'>
                            t
                        </h1>
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='.3'>
                            ack D
                        </h1>
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='.2'>
                            ev
                        </h1>
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='-.2'>
                            e
                        </h1>
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='-.3'>
                            l
                        </h1>
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='-.4'>
                            o
                        </h1>
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='-.5'>
                            p
                        </h1>
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='-.6'>
                           e
                        </h1>
                        <h1 className={style.scroll} className="scrollHome" data-rateX='0' data-rateY='-.7'>
                            r
                        </h1>
                        
                    </div>
                    
                </div>

            <canvas id="canvasHome" className="scrollHome" data-rateX='0' data-rateY='1.2' >
                
            </canvas>
            
        </div>
    )
}

export default Home
