convert original/image.jpg -resize '1366x598^' -gravity center -crop '1366x598+0+0' jpg/image_q99.jpg
convert jpg/image_q99.jpg -quality 90 jpg/image_q90.jpg
convert jpg/image_q99.jpg -quality 80 jpg/image_q80.jpg
convert jpg/image_q99.jpg -quality 70 jpg/image_q70.jpg