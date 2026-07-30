"use client";

import { useState } from 'react';

class GetBook {
    constructor(BookName){
        this.BookName = BookName
    }

    get BookName() {
        return `${this.BookName}`;
    }


  set BookName(value) {
        this.BookName = value;
  }



}

export default GetBook;