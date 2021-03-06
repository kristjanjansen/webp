## WebP fallback test

There are huge bandwith wins while using WebP format but the backward compatibility can be tricky. This is the experiment to try out different strategies.


### File sizes

See the graphs here: https://docs.google.com/spreadsheets/d/1w9VlLTgPpfhrRIzKuLCtWtrSeV5kUm4rXLD5DyKrKEg/edit#gid=0

|                 |JPG quality 99 |JPG quality 90 |JPG quality 80 |JPG quality 70 |
|-----------------|---------------|---------------|---------------|---------------|
|Nonoptimized JPG |387KB          |116KB          |74KB           |57KB           |
|Optimized JPG    |368KB          |115KB          |74KB           |57KB           |
|WebP             |28KB           |29KB           |28KB           |28KB           |

Summary:
- JPG non-lossy optimization only gives effect on high quality JPGs    
- WebP is almost indifferent on source JPG quality
- JPG quality/size sweet spot is around 75

### WebP to JPG Fallback


Three fallback methods are analyzed

#### Using img HTML tag

The fallback uses [onerror](https://css-tricks.com/webp-with-fallback) hack to fall back to JPG if browser does not support WebP. The image centering and scaling approach is based on [Perfect Full Page Background Image](https://css-tricks.com/perfect-full-page-background-image) article.

#### Using background-image CSS property

The fallback uses Modernizr test to detect the WebP support and switches the ```background-image``` property url to either WebP or JPG. The image cropping, centering and scaling uses ```background-size: cover``` property.

#### Using picture tag with mimetype

Using the ```picture``` and ```source``` tags with ```scrset``` and ```type``` attributes combined with http://scottjehl.github.io/picturefill polyfill.

#### Browser behaviour

|Browser|```img``` load|```img``` display|```background-image``` load|```background-image``` display|```picture``` load|```picture``` display|
|-------------|----------|-----|-----|-----|-----|-----|
|Chrome       |WebP      |WebP |WebP |WebP |WebP |WebP |
|FF           |WebP      |WebP |WebP |WebP |WebP |WebP |
|Safari       |WebP+JPG  |JPG  |JPG  |JPG  |JPG  |JPG  |
|Safari mobile|WebP+JPG  |JPG  |JPG  |JPG  |JPG  |JPG  |
|Opera Mini   |WebP      |WebP |WebP |WebP |WebP |WebP |
|IE9          |WebP+JPG  |JPG  |JPG  |JPG  |JPG  |JPG  |
|IE8          |WebP?+JPG |JPG  |JPG  |JPG  |-    |-    |

Summary:
* Although Opera Mini Modernizr tests can not be trusted, it supports WebP with no problems. Image scaling / centering needs extra work.
* img fallback works but causes browsers to load **both** WebP and JPG that renders the method pretty useless.
* background-image fallback works best but making it work with content / CMS integration can be troublesome.

### Using custom image

Install NodeJS, global Gulp and Imagemagick, replace ```/original/image.jpg``` with your custom image and run
  
    npm install
    ./convert.sh
    gulp

### Links

http://davidwalsh.name/webp-images-performance

