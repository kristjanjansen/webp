## WebP fallback test

There are huge bandwith wins while using WebP format but the backward compatibility can be tricky. This is the experiment to try out different strategies.


### File sizes

See the pretty graphs here: https://docs.google.com/a/africainternetgroup.com/spreadsheets/d/1Iei30caChc91mrKBGZrNs32Ermq8JzkFS23JacPJbQs/edit?usp=sharing

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


Two fallback methods are analyzed

#### Using <img> HTML tag

Demo: http://188.166.28.228/webp/index_image.html

The fallback uses [https://css-tricks.com/webp-with-fallback](onerror) hack to fall back to JPG if browser does not support WebP. The image centering and scaling approach is based on [https://css-tricks.com/perfect-full-page-background-image](Perfect Full Page Background Image) article.

#### Using background-image CSS property

The fallback uses Modernizr test to detect the WebP support and switches the ```background-image``` property url to either WebP or JPG. The image centering and scaling uses ```background-position: center``` and ```background-size: cover``` properties.

http://188.166.28.228/webp/index_background.html

|Browser|```img``` load|```img``` display|```background-image``` load|```background-image``` display|
|-------------|----------|--------------|---------------|------------------|
|Chrome       |WebP      |WebP          |WebP           |WebP              |
|FF           |WebP      |WebP          |WebP           |WebP              |
|Safari       |WebP+JPG  |JPG           |JPG            |JPG               |
|Safari mobile|WebP+JPG  |JPG           |JPG            |JPG               |
|Opera Mini   |WebP      |WebP          |WebP           |WebP unscaled     |
|IE9          |WebP+JPG  |JPG           |JPG            |JPG               |
|IE8          |WebP?+JPG |JPG           |JPG            |JPG               |

### Using custom image

Install NodeJS, global Gulp and Imagemagick, replace ```/original/image.jpg``` with your custom image and run
  
    npm install
    ./convert.sh
    gulp

