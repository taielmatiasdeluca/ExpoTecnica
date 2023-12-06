import React, { useState } from 'react';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useFetch } from './hooks/useFetch';

const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];



export default function Gallery() {
  const {data} = useFetch('https://api.tecnica3.com.ar/Expo/listImages');
  let slides = []
  if(data){
    console.log(data)
    slides = data.map((photo) => {
      const width = photo.width * 4;
      const height = photo.height * 4;
      return {
        src: photo.src,
        width,
        height,
        srcSet: breakpoints.map((breakpoint) => {
          const breakpointHeight = Math.round((height / width) * breakpoint);
          return {
            src: photo.src,
            width: breakpoint,
            height: breakpointHeight,
          };
        }),
      };
    });
  }
  console.log(slides);
  const [index, setIndex] = React.useState(-1);
  return (
    <div className="filtros">
      <h1 className="unica">| El proceso de producción en marcha</h1>
      <h4 className="unica fw200"> Tortuguitas - 17 de octubre de 2023</h4>
      { data && (
        <>
          <PhotoAlbum
          photos={slides}
          layout="rows"
          onClick={({ index: current }) => setIndex(current)} />

        <Lightbox styles={{ root: { "z-index": "999999999"}, container: { backgroundColor: "rgba(0, 0, 0, .85)" }  }}
          index={index}
          slides={slides}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
        </>
      )

      }
     

    </div>
  )
}
