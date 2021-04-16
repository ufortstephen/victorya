function playVideo() {
    var videoTag = document.getElementById('video-frame');
    // videoTag.innerHTML = `<iframe width="80%" height="300"
    //  style="border-radius:1rem" src="https://www.youtube.com/embed/T4NOt727wqI?autoplay=1" 
    //  title="YouTube video player" 
    // frameborder="0" allow="autoplay;
    // clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    videoTag.style.backgroundImage = "none"
    videoTag.style.padding = "0px"
    videoTag.style.backgroundColor = "#fff"
    if (document.body.style.maxWidth < "700px") {
        videoTag.innerHTML = `<iframe width="100%" height="300"
        style="border-radius:1rem" src="https://www.youtube.com/embed/T4NOt727wqI?autoplay=1" 
        title="YouTube video player" 
       frameborder="0" allow="autoplay;
       clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    } else {
        videoTag.innerHTML = `<iframe width="100%" height="300"
        style="border-radius:1rem" src="https://www.youtube.com/embed/T4NOt727wqI?autoplay=1" 
        title="YouTube video player" 
       frameborder="0" allow="autoplay;
       clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }

}