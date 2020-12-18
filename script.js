function createSnowFlake(){
    console.log("hi")
    const snow_flake = document.createElement('i');
    snow_flake.classList.add("fas");
    snow_flake.classList.add("fa-snowflake");
    document.body.appendChild(snow_flake);
    snow_flake.style.left = Math.random() * window.innerWidth + 'px';
    snow_flake.style.animationDuration = Math.random() * 3 + 10 + 's';
    snow_flake.style.opacity = Math.random();
    snow_flake.style.fontSize = Math.random() * 3 + 13 + 'px';
    setTimeout(() => {
        snow_flake.remove()
    }, 9000);
}



setInterval(createSnowFlake, 100);