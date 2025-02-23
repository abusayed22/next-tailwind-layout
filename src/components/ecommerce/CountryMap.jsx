// 'use client'
import dynamic from "next/dynamic";
import React, { forwardRef, useRef } from "react";

const VectorMap = dynamic(
  () => import("react-jvectormap").then((m) => m.VectorMap),
  { ssr: false }
);




const CountryMap = ({ mapColor }) => {
  const mapRef = useRef(null)

  var mapData = {
    AU: 760,
    BR: 550,
    CA: 120,
    DE: 1300,
    FR: 540,
    GB: 690,
    GE: 200,
    IN: 200,
    RO: 600,
    RU: 300,
    US: 2920
  };
  
  const regionStyle = {
    initial: {
      fill: "#e4e4e4",
      "fill-opacity": 0.9,
      stroke: "none",
      "stroke-width": 0,
      "stroke-opacity": 0
    }
  };
  
  const series = {
    regions: [
      {
        values: mapData,
        scale: ["#AAAAAA", "#444444"],
        normalizeFunction: "polynomial"
      }
    ]
  }
  
  const containerStyle = {
    width: "100%",
    height: "420px"
  };

  return (
    <div ref={mapRef} style={containerStyle}>
    {/* <VectorMap
      map={"world_mill"}
      backgroundColor="transparent"
      zoomOnScroll={false}
      containerClassName="map"
      regionStyle={regionStyle}
      series={series}
    /> */}
  </div>
  );
};

export default CountryMap;
