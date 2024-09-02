"use client";
import React, { useState } from "react";
import "../../styles.css";

export default function GridCSS() {
  return (
    <div className="grid-container">
    
    <div className="grid-row">
      <div className="grid-col-6">Колонка 1</div>
      <div className="grid-col-6">Колонка 2</div>
    </div>
    
   
    <div className="grid-row">
      <div className="grid-col-4">Колонка 1</div>
      <div className="grid-col-4">Колонка 2</div>
      <div className="grid-col-4">Колонка 3</div>
      
    </div>
    
    
    <div className="grid-row">
      <div className="grid-col-6">Колонка 1</div>
      <div className="grid-col-6">Колонка 2</div>
    </div>
  </div>

    
  );
}
