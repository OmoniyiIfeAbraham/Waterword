            //javascript
            //Variables
            //Div


            var start = document.querySelector(".start");

            var backPauseBtn = document.querySelector(".backPause"),
                homePauseBtn = document.querySelector(".HomePause"),
                ExitPauseBtn = document.querySelector(".ExitPause");


            var loseDiv = document.querySelector(".lose"),
                UpperDiv = document.querySelector(".upper"),
                bubbleDiv = document.querySelector(".bubble"),
                charInputDiv = document.querySelector(".mainGameInput"),
                inputerDiv = document.querySelector(".inputer");


            // start.style.display= "none";
            loseDiv.style.filter = "blur(10px)"

            UpperDiv.style.filter = "blur(10px)"
            bubbleDiv.style.filter = "blur(10px)"
            charInputDiv.style.filter = "blur(10px)"
            inputerDiv.style.filter = "blur(10px)"

            setTimeout(function() {
                var loseDiv = document.querySelector(".lose");

                var UpperDiv = document.querySelector(".upper"),
                    bubbleDiv = document.querySelector(".bubble"),
                    charInputDiv = document.querySelector(".mainGameInput"),
                    inputerDiv = document.querySelector(".inputer");

                start.style.display = "none";
                loseDiv.style.filter = "blur(0px)";

                UpperDiv.style.filter = "blur(0px)"
                bubbleDiv.style.filter = "blur(0px)"
                charInputDiv.style.filter = "blur(0px)"
                inputerDiv.style.filter = "blur(0px)"

                var winDiv = document.querySelector(".winDiv");
                var loseDiv = document.querySelector(".lose"),
                    UpperDiv = document.querySelector(".upper"),
                    bubbleDiv = document.querySelector(".bubble"),
                    charInputDiv = document.querySelector(".mainGameInput"),
                    inputerDiv = document.querySelector(".inputer");
                //Win
                backwin = document.querySelector(".backwin"),
                    replay = document.querySelector(".replaywin"),
                    homeWin = document.querySelector(".HomeWin"),
                    nextWin = document.querySelector(".NextWin");

                //Button
                var homeBtn = document.querySelector(".home"),
                    pauseBtnm = document.querySelector(".pause"),
                    backLoseBtn = document.querySelector(".backlose"),
                    replayLoseBtn = document.querySelector(".replaylose"),
                    homelose = document.querySelector(".homelose"),
                    //Outputer
                    // TrialsOututer= document.querySelector(".bubble"),

                    trialBubble1 = document.querySelector(".trial1"),
                    trialBubble2 = document.querySelector(".trial2"),
                    trialBubble3 = document.querySelector(".trial3"),

                    //Main word outputer
                    characterone = document.querySelector(".charOne"),
                    characterTwo = document.querySelector(".charTwo"),
                    characterthree = document.querySelector(".charThree"),
                    characterFour = document.querySelector(".charFour"),
                    characterFive = document.querySelector(".charFive"),
                    characterSix = document.querySelector(".charSix"),

                    //Inputer
                    inputerOneBtn = document.querySelector(".inputOne"),
                    inputerTwoBtn = document.querySelector(".inputTwo"),
                    inputerThreeBtn = document.querySelector(".inputThree"),
                    inputerFourBtn = document.querySelector(".inputFour"),
                    inputerFiveBtn = document.querySelector(".inputFive"),
                    inputerSixBtn = document.querySelector(".inputSix"),

                    //working var
                    theWord = "LUCENT",
                    loseDeterminer = 0,
                    Word1 = "",
                    Word2 = "",
                    Word3 = "",
                    Word4 = "",
                    Word5 = "",
                    Word6 = "",
                    InputTimes = 0,
                    Trials = 3,
                    //Input holder var
                    inputerOne = "U",
                    inputerTwo = "E",
                    inputerThree = "L",
                    inputerFour = "C",
                    inputerFive = "T",
                    inputerSix = "N";

                //Work Tarts Here
                buttonWork(inputerOneBtn, inputerOne);
                buttonWork(inputerTwoBtn, inputerTwo);
                buttonWork(inputerThreeBtn, inputerThree);
                buttonWork(inputerFourBtn, inputerFour);
                buttonWork(inputerFiveBtn, inputerFive);
                buttonWork(inputerSixBtn, inputerSix);


                // buttonLinking
                pauseBtnm.addEventListener("click", function() {
                    window.location.href = "#"
                });

                pagelinking(backLoseBtn, "game14.html");
                pagelinking(replayLoseBtn, "game15.html");
                pagelinking(homelose, "../play.html")


                // characterone.innerHTML

                pagelinking(homeBtn, "../play.html")





                //Pause
                // variables
                var PauseDiv = document.querySelector(".pauseDiv");

                pauseBtnm.addEventListener("click", function() {

                    if (PauseDiv.style.display === "none") {
                        pauseBtnm.disabled = true;
                        homeBtn.disabled = true;
                        inputerOneBtn.disabled = true;
                        inputerTwoBtn.disabled = true;
                        inputerThreeBtn.disabled = true;
                        inputerFourBtn.disabled = true;
                        inputerFiveBtn.disabled = true;
                        inputerSixBtn.disabled = true;

                        loseDiv.style.filter = "blur(10px)"

                        UpperDiv.style.filter = "blur(10px)"
                        bubbleDiv.style.filter = "blur(10px)"
                        charInputDiv.style.filter = "blur(10px)"
                        inputerDiv.style.filter = "blur(10px)"


                        PauseDiv.style.display = "flex";
                    } else {
                        pauseBtnm.disabled = false;
                        homeBtn.disabled = false;
                        inputerOneBtn.disabled = false;
                        inputerTwoBtn.disabled = false;
                        inputerThreeBtn.disabled = false;
                        inputerFourBtn.disabled = false;
                        inputerFiveBtn.disabled = false;
                        inputerSixBtn.disabled = false;
                        loseDiv.style.filter = "blur(0px)"

                        UpperDiv.style.filter = "blur(0px)"
                        bubbleDiv.style.filter = "blur(0px)"
                        charInputDiv.style.filter = "blur(0px)"
                        inputerDiv.style.filter = "blur(0px)"

                        PauseDiv.style.display = "none"
                    }

                });
                //backpause
                backPauseBtn.addEventListener("click", function() {
                    if (PauseDiv.style.display === "flex") {
                        pauseBtnm.disabled = false;
                        homeBtn.disabled = false;
                        inputerOneBtn.disabled = false;
                        inputerTwoBtn.disabled = false;
                        inputerThreeBtn.disabled = false;
                        inputerFourBtn.disabled = false;
                        inputerFiveBtn.disabled = false;
                        inputerSixBtn.disabled = false;
                        loseDiv.style.filter = "blur(0px)"

                        UpperDiv.style.filter = "blur(0px)"
                        bubbleDiv.style.filter = "blur(0px)"
                        charInputDiv.style.filter = "blur(0px)"
                        inputerDiv.style.filter = "blur(0px)"

                        PauseDiv.style.display = "none"

                    }

                })

                pagelinking(homePauseBtn, "../play.html")
                pagelinking(ExitPauseBtn, "../exit.html")



                // Win Scripts 
                pagelinking(backwin, "../level.html");
                // pagelinking(replay, "play.html");
                pagelinking(homeWin, "../play.html");
                pagelinking(nextWin, "game16.html")
                replay.addEventListener("click", function() {
                    window.location.reload()
                })


                // ListeningStateChangedEvent
                var replayPause = document.querySelector(".replayPause");
                replayPause.addEventListener("click", function() {
                    window.location.reload()
                })



                // functions are Here
                function pagelinking(button, link) {

                    button.addEventListener("click", function() {
                        window.location.href = link;
                    });
                    // windows.location.href= link;

                };

                function buttonWork(inputerBtn, inputholder) {
                    var audio = new Audio('salamisound-5143696-heavy-stone-falls-into.mp3');
                    inputerBtn.addEventListener("click", function() {
                        if (InputTimes === 0 & Trials != 0) {
                            characterone.innerHTML = inputholder;
                            InputTimes++
                            // console.log(InputTimes);

                            Word1 = inputholder;
                        } else if (InputTimes === 1 & Trials != 0) {
                            characterTwo.innerHTML = inputholder;
                            InputTimes++
                            // console.log(InputTimes);
                            Word2 = inputholder;
                        } else if (InputTimes === 2 & Trials != 0) {
                            characterthree.innerHTML = inputholder;
                            InputTimes++
                            // console.log(InputTimes);

                            Word3 = inputholder;
                        } else if (InputTimes === 3 & Trials != 0) {
                            characterFour.innerHTML = inputholder;
                            InputTimes++
                            // console.log(InputTmes)

                            Word4 = inputholder;
                        } else if (InputTimes === 4 & Trials != 0) {
                            characterFive.innerHTML = inputholder;
                            InputTimes++
                            // console.log(InputTimes)

                            Word5 = inputholder;
                        } else if (InputTimes === 5 & Trials != 0) {
                            Word6 = inputholder;
                            // console.log(InputTimes);

                            characterSix.innerHTML = inputholder;
                            InputTimes = 0
                            wordmatch = Word1 + Word2 + Word3 + Word4 + Word5 + Word6;

                            if (wordmatch === theWord) {
                                if (parseInt(localStorage.getItem("waterLevel")) < 16) {
                                    localStorage.setItem("waterLevel", "16")
                                }
                                winDiv.style.display = "flex";

                                pauseBtnm.disabled = true;
                                homeBtn.disabled = true;
                                inputerOneBtn.disabled = true;
                                inputerTwoBtn.disabled = true;
                                inputerThreeBtn.disabled = true;
                                inputerFourBtn.disabled = true;
                                inputerFiveBtn.disabled = true;
                                inputerSixBtn.disabled = true;

                                loseDiv.style.filter = "blur(10px)"

                                UpperDiv.style.filter = "blur(10px)"
                                bubbleDiv.style.filter = "blur(10px)"
                                charInputDiv.style.filter = "blur(10px)"
                                inputerDiv.style.filter = "blur(10px)"

                            }
                            if (wordmatch != theWord) {

                                Trials = Trials - 1
                                if (Trials === 2) {
                                    audio.play();
                                    trialBubble3.style.display = "none";
                                } else if (Trials === 1) {
                                    audio.play();
                                    trialBubble2.style.display = "none";
                                } else if (Trials == 0) {
                                    audio.play();
                                    trialBubble1.style.display = "none;"
                                };
                                // alert("Wrong Answer, you have " + String(Trials) +" Trials left");
                                //empty all
                                characterone.innerHTML = ""
                                characterTwo.innerHTML = ""
                                characterthree.innerHTML = ""
                                characterFour.innerHTML = ""
                                characterFive.innerHTML = ""
                                characterSix.innerHTML = ""
                                Word1 = ""
                                Word2 = ""
                                Word3 = ""
                                Word4 = ""
                                Word5 = ""
                                Word6 = ""

                                // TrialsOututer.innerHTML= String(Trials)+ "Trials"
                            }
                            if (Trials === 0) {

                                loseDiv.style.display = "flex";
                                homeBtn.disabled = true;
                                pauseBtnm.disabled = true;
                                inputerOneBtn.disabled = true;
                                inputerTwoBtn.disabled = true;
                                inputerThreeBtn.disabled = true;
                                inputerFourBtn.disabled = true;
                                inputerFiveBtn.disabled = true;
                                inputerSixBtn.disabled = true;

                                UpperDiv.style.filter = "blur(20px)";
                                bubbleDiv.style.filter = "blur(20px)";
                                inputerDiv.style.filter = "blur(20px)";
                                charInputDiv.style.filter = "blur(20px)";
                                pagelinking(backLoseBtn, "../level.html")
                                pagelinking(ExitPauseBtn, "../exit.html")
                                    // alert("You have No Trails, Click Ok to reload")
                                    // location.reload()
                            }

                        };

                    })
                }





            }, 400);








            // Onclick Sound
            function play() {
                var audio = new Audio('water-droplet-1.mp3');
                audio.play();
            }


            // letters burst function
            window.setTimeout("burst();", 10000);
            window.setTimeout("burst1();", 11000);
            window.setTimeout("burst2();", 12000);
            window.setTimeout("burst3();", 13000);
            window.setTimeout("burst4();", 14000);
            window.setTimeout("burst5();", 15000);

            function burst() {
                document.querySelector(".inputOne").style.display = "none";
            }

            function burst1() {
                document.querySelector(".inputTwo").style.display = "none";
            }

            function burst2() {
                document.querySelector(".inputThree").style.display = "none";
            }

            function burst3() {
                document.querySelector(".inputFour").style.display = "none";
            }

            function burst4() {
                document.querySelector(".inputFive").style.display = "none";
            }

            function burst5() {
                document.querySelector(".inputSix").style.display = "none";
            }


            // Movement of letters
            // Movement of letters
            $(".inputOne").css({
                "top": "-1600px",
                "left": "3.5%"
            }).animate({
                "top": "320px"
            }, 13000);

            $(".inputTwo").css({
                "top": "-1800px",
                "left": "31%"
            }).animate({
                "top": "320px"
            }, 14000);

            $(".inputThree").css({
                "top": "-2000px",
                "left": "62%"
            }).animate({
                "top": "320px"
            }, 15000);

            $(".inputFour").css({
                "top": "-2200px",
                "left": "3.5%"
            }).animate({
                "top": "320px"
            }, 16000);

            $(".inputFive").css({
                "top": "-2400px",
                "left": "31%"
            }).animate({
                "top": "320px"
            }, 17000);

            $(".inputSix").css({
                "top": "-2600px",
                "left": "62%"
            }).animate({
                "top": "320px"
            }, 18000);