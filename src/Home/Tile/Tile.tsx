import React from "react";
import './Tile.scss';

type Props = {
  backgroundColor: string;
  gridAreaClassname: string;
  tileText?: string;
}

const Tile = ({
  backgroundColor,
  gridAreaClassname,
  tileText
} : Props) => {
  return (
    <div className={`tile ${gridAreaClassname}`} style={{backgroundColor: backgroundColor}}>
      <span>{tileText}</span>
    </div>
  ) 
}

export default Tile;