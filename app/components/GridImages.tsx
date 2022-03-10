import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export const GridImages = () => {
  return (
    <ImageList
      style={{
        height: "100vh",
        width: "100vw",
      }}
      cols={3}
      //   rowHeight="auto"
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            style={{ height: "33.33vh" }}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const itemData = [
  {
    img: "https://t3.ftcdn.net/jpg/02/72/42/98/240_F_272429807_SJ4fVk3rCE6w0t16Y99lYbONuuqAih10.jpg",
    title: "Breakfast",
  },
  {
    img: "https://t3.ftcdn.net/jpg/02/70/25/48/240_F_270254841_otSDX3fPBgcbCiUdir82QjgyF8XSQwD5.jpg",
    title: "Burger",
  },
  {
    img: "https://t4.ftcdn.net/jpg/03/21/90/47/240_F_321904727_6Xe21aryx4iHdVHJN9gIsIKvSp5iaObX.jpg",
    title: "Camera",
  },
  {
    img: "https://t4.ftcdn.net/jpg/02/22/01/09/240_F_222010968_A3zewbBipGyfEaRB8qOCkokq0Mpj3z04.jpg",
    title: "Coffee",
  },
  {
    img: "https://t4.ftcdn.net/jpg/03/12/93/33/240_F_312933371_vMqXBtR0s84b7WHGbUWpgIzVmhrgp8za.jpg",
    title: "Hats",
  },
  {
    img: "https://t3.ftcdn.net/jpg/02/23/97/78/240_F_223977869_cLUHpzKaRP9ulA94EWyhmYa7u2LhXg3z.jpg",
    title: "Honey",
  },
  {
    img: "https://t4.ftcdn.net/jpg/02/97/84/93/240_F_297849300_58Y8NFOC6tXSGz3LBHUEgvhkLuefKQWF.jpg",
    title: "Basketball",
  },
  {
    img: "https://t4.ftcdn.net/jpg/01/26/11/53/240_F_126115391_mdagxNLiec8KWtrYAvycaFjwaAMT4Nlh.jpg",
    title: "Fern",
  },
  {
    img: "https://t4.ftcdn.net/jpg/00/56/22/43/240_F_56224324_gaWead1DdEORltkT9EORKF3IxPGekMeG.jpg",
    title: "Mushrooms",
  },
];
