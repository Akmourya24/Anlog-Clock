setInterval(() => {
    const d = new Date();
    htime = d.getHours();
    mime = d.getMinutes();
    stime = d.getSeconds();

    hrotasanal = 30 * htime + mime / 2;
    mrotasanal = 6 * mime;
    srotasanal = 6 * stime;

    document.getElementById("hour").style.transform = `rotate(${hrotasanal}deg)`;

    document.getElementById("minute").style.transform = `rotate(${mrotasanal}deg)`;
    document.getElementById("second").style.transform = `rotate(${srotasanal}deg)`;

}, 1000);
