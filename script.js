document.addEventListener("DOMContentLoaded", function () {
  fetch("/data.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const sliderList = document.querySelector(".splide__list");
    //   const textArea = document.querySelector(".text__area");

      let splide = new Splide(".splide", {
        type: "loop",
        perPage: 1,
        arrows: true,
        cover: false,
        pagination: false,
      });

      data.sliderData.forEach((slide, index) => {
        const listItem = document.createElement("li");
        listItem.classList = "splide__slide";
        listItem.innerHTML = `
          <img class="splide__img" src="${slide.desktop_img_src}" alt="Slide ${index}">`;
        sliderList.appendChild(listItem);
      });

      splide.on("moved", (index) => {
        const currentSlideData = data.sliderData[index];
        updateTextContent(currentSlideData);
        changeBackgroundColor(data.sliderData, index);
      });

      splide.mount();
        updateTextContent(data.sliderData[0]);
         changeBackgroundColor(data.sliderData, index);
    });

  function updateTextContent(slideData) {
    const textContentContainer = document.querySelector(".text__area");
    textContentContainer.innerHTML = `
    <h1 style="color: ${slideData.styles.heading1.text_color}; font-size: ${slideData.styles.heading1.font_size}; font-family: ${slideData.styles.heading1.font_family};margin:${slideData.styles.heading1.margin}">${slideData.heading1}</h1>
    <h2 style="color: ${slideData.styles.heading2.text_color1}; font-size: ${slideData.styles.heading2.font_size}; font-family: ${slideData.styles.heading2.font_family};">${slideData.heading2}</h2>
    <p style="color: ${slideData.styles.caption.font_color}; font-size: ${slideData.styles.caption.font_size}; font-weight: ${slideData.styles.caption.font_weight}; font-family: ${slideData.styles.caption.font_family}; margin-bottom: ${slideData.styles.caption.margin_bottom};">${slideData.description}</p>
    <p class='price' style="color: ${slideData.styles.price.font_color}; font-size: ${slideData.styles.price.font_size}; font-family: ${slideData.styles.price.font_family}; font-weight: ${slideData.styles.price.font_weight}; margin-bottom: ${slideData.styles.price.margin_bottom};">${slideData.price}</p>
   <svg xmlns="http://www.w3.org/2000/svg" width="240" height="60" viewBox="0 0 240 60" fill="none">
  <circle cx="30" cy="30" r="29" stroke="white" stroke-width="2"/>
  <circle cx="120" cy="30" r="29" stroke="white" stroke-width="2"/>
  <circle cx="210" cy="30" r="29" stroke="white" stroke-width="2"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M197 28.6299V30.5403C197 34.4489 197 36.4033 198.222 37.6607C199.445 38.9182 201.369 38.9726 205.218 39.0816L205.218 39.0816C207.042 39.1331 208.905 39.1701 210.5 39.1701C212.095 39.1701 213.958 39.1331 215.782 39.0816L215.782 39.0816C219.631 38.9726 221.555 38.9182 222.778 37.6607C224 36.4033 224 34.4489 224 30.5403V28.6299C224 24.7212 224 22.7668 222.778 21.5093C221.555 20.2518 219.631 20.1974 215.782 20.0885L215.782 20.0885C213.958 20.037 212.095 20 210.5 20C208.905 20 207.042 20.037 205.218 20.0885C201.369 20.1974 199.445 20.2518 198.222 21.5093C197 22.7668 197 24.7212 197 28.6299ZM208 33L214 29.5L208 26V33Z" fill="white"/>
  <path d="M133 19.0119C133 19.0119 130.615 20.4207 129.289 20.8201C128.577 20.0017 127.631 19.4216 126.579 19.1583C125.527 18.8951 124.419 18.9613 123.406 19.3481C122.393 19.7348 121.523 20.4235 120.914 21.3208C120.304 22.2182 119.985 23.281 120 24.3655V25.5473C117.923 25.6012 115.865 25.1406 114.009 24.2065C112.154 23.2724 110.558 21.8939 109.364 20.1937C109.364 20.1937 104.636 30.8301 115.273 35.5574C112.839 37.2095 109.939 38.0379 107 37.921C117.636 43.8301 130.636 37.921 130.636 24.3301C130.635 24.0009 130.604 23.6725 130.542 23.3492C131.748 22.1596 133 19.0119 133 19.0119Z" fill="white"/>
  <path d="M37.85 16H33.8C32.0098 16 30.2928 16.7112 29.0271 17.977C27.7612 19.2429 27.05 20.9598 27.05 22.75V26.8H23V32.2H27.05V43H32.45V32.2H36.5L37.85 26.8H32.45V22.75C32.45 22.392 32.5923 22.0486 32.8454 21.7954C33.0985 21.5422 33.442 21.4 33.8 21.4H37.85V16Z" fill="white"/>
</svg>
  `;
  }

  function changeBackgroundColor(slideData, index) {
    const body = document.querySelector("body");
    body.style.background =
      slideData[index].bg_color ||
      "linear-gradient(106deg, #F4A764 -2.93%, #FFDEC2 72.14%)";
  }

});
