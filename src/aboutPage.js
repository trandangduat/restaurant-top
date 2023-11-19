const aboutPage = function () {
    let Frame = document.createElement('div');
    Frame.setAttribute('id', 'frame');
    Frame.innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1298.0132932555755!2d105.49076190750966!3d21.003186355194405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345db359a0c7f5%3A0x4648557de38d109b!2zS8O9IHTDumMgeMOhIHNpbmggdmnDqm4gxJBIUUcgbsSDbSAyMDIz!5e0!3m2!1svi!2s!4v1700403756101!5m2!1svi!2s" width="" height="450" style="" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div id = "contact-us">
            <p>Please consider contacting us at:</p>
            <div id = "socials">
                <a href = "#" id = "fb" class = "btn"><i class="fa-brands fa-facebook-f fa-fw"></i></a>
                <a href = "#" id = "zalo" class = "btn"><i class="fa-solid fa-z fa-fw"></i></a>
                <a href = "#" id = "phone" class = "btn"><i class="fa-solid fa-phone fa-fw"></i></a>
            </div>
        </div> 
    `;
    return [Frame];
};

export { aboutPage };