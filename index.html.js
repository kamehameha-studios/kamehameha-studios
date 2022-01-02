function WriteCookie() {
        cookievalue = "kamehameha-studios";
        
        document.cookie = "domain=" + "goku.github.io";
        document.cookie = "path=" + "/;";
        document.cookie = cookievalue + "=" + "none";
var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      /*** Licenes***/
    print("Copyright (c) 2021 by Bosco (https://www.khanacademy.org/computer-programming/goku-vs-frieza-the-ultamate-dragonscript-battle/4934390863937536) Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.");
/*** varibles  ***/
    var O1 = 0;
    var O2 = 0;
    var O3 = 0;
    var w = 15;
    var w1 = 13;
    var h = 11;
    var h1 = 23;
    var y = 278;
    var x1 = 73;
    var x2 = 127;
    var x3 = 80;
    var h1w1 = 10;
    var h1w2 = 10;
    var rectw = 38;
    var ellipseX = 156;
    var ellipseY = 113;
    var sound1 = getSound("rpg/hit-whack");
/*** sounds ***/
    playSound(sound1);
/*** draw functions ***/
    draw = function() {
        /** Draw! **/
            /* the sky of piccolo's home-planet(exploding) */
            background(41, 21, 21);
            strokeWeight(1);
            /* grass */
                fill(18, 59, 26);
                rect(0, 300, 400, 145);
            /* the exploding volcano */
                fill(66, 8, 8);
                triangle(250, 300, 27, 300, 120, 100);
            /* Steam */
                fill(0, 0, 0);
                ellipse(ellipseX, ellipseY, 75, 19);
                ellipse(ellipseX + 15, ellipseY - 15, 78, 19);
                ellipse(ellipseX + 30, ellipseY - 30, 78, 19);
                ellipse(ellipseX + 15, ellipseY - 45, 78, 19);

            /* lava */
                //lava (volcano)
                    fill(255, 0, 0);
                    ellipse(122, 53, 13, 112);
                    ellipse(114, 68, 6, 114);
                // lava (from the ground)
                    ellipse(354, 299, 4, 30);
                    ellipse(358, 299, 4, 30);
                    ellipse(363, 299, 4, 30);
            /* rocks */
                fill(128, 53, 53);
                rect(350, 301, 18, 15);
            /* volcano cracks */
                fill(0, 0, 0);
                strokeWeight(3);
                line(100, 200, 120, 100);
                line(143, 200, 120, 100);
                line(115, 200, 120, 100);
                strokeWeight(1);
            /* Goku */
                //Saiyan ki power
                    fill(255, 242, 120);
                    triangle(137, 360, 77, 153, 25, 360);
                    triangle(173, 360, 132, 156, 34, 360);
                    triangle(173, 360, 102, 156, 22, 360);
                //hands
                    fill(209, 90, 90);
                    ellipse(x2, y, w, h);
                    ellipse(x1, y, w, h);
                // feet
                    rect(85, 340, 5, 20);
                    ellipse(90, 364, 15, 10);
                    rect(110, 340, 5, 20);
                    ellipse(117, 364, 15, 10);
                    rect(93, 235, 15, 25);
                //head
                    ellipse(101, 225, 50, 55);
                //shirt
                    fill(255, 115, 0);
                    rect(x3, 259, rectw, 60);
                    rect(x3, 319, rectw, 11);
                // pants
                    rect(x3, 330, w1, h1);
                    rect(106, 330, w1, h1);
                //shirt words
                    fill(255, 255, 255);
                    ellipse(101, 286, 20, 20);
                    fill(3, 3, 3);
                    text("孫", 95, 290);
                //eyes
                    strokeWeight(6);
                    point(90, 219);
                    point(108, 219);
                //eyebrows
                    strokeWeight(3);
                    line(115, 200, 99, 214);
                    line(81, 200, 99, 214);
                //saiyan hair
                    fill(255, 255, 0);
                    arc(99, 200, 60, 30, 138, 397);
                //mouth
                    line(90, 234, 112, 234);
                //kamehameha
                    fill(0, 118, 252);
                    strokeWeight(1);
                    ellipse(139, 279, h1w1, h1w2);
                //saiyan 2 electricity
                    ellipse(73, 316, 5, 29);
                    ellipse(73, 247, 5, 29);
                    ellipse(129, 316, 5, 29);
                    ellipse(132, 249, 5, 29);
                /* Freiza */
                    fill(115, 0, 255);
                    ellipse(300, 296, 63, 88);
                /* Button */
                    
                /* lava (timer) */
                    fill(255, 0, 0);
                    ellipse(O1, O2, O3, O3);
                /* Mouse Tracker*/
                    fill(0, 89, 255);
                    ellipse(mouseX, mouseY, 12, 12); 
                    var label = "  " + mouseX + "," + mouseY;
                    text(label, mouseX - 25, mouseY + -8);
        /** Animate! **/
            h1w1 += 0;
            h1w2 += 0;
            O3 += 1;
            if (O3 === 0) {
                println("Did you forget to turn on the animation?");
            }
            if (O3 === 400) {
                println("Watch out!!!");
            }
            if (O3 === 800) {
                println("Goku Died!!!");
                println("Freiza wins...");
            }
    };
