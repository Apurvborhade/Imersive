import { storyblokEditable } from "@storyblok/react";
 
const Teaser = ({ blok }) => {
    console.log(blok.headline)
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};
 
export default Teaser;