# react-simple-pagination-component
This component is a simple React Pagination.  

## Demo
[https://naoki85.github.io/react-simple-pagination-component/](https://naoki85.github.io/react-simple-pagination-component/)

## Install

```
$ npm i @naoki85/react-simple-pagination-component
# or
$ yarn add @naoki85/react-simple-pagination-component
```

## Usage

```js
import React from 'react';
import { render } from 'react-dom';
import ReactSimplePaginationComponent from '@naoki85/react-simple-pagination-component';

const App: FC<{}> = () => {
  return (
    <ReactSimplePagination 
      page={1}
      maxPage={5}
      onClickAction={(page: number) => console.log(page)}
    />
  );
}
```

## Props

| Name | Type | Requirement | Description |
----|---- |---- |---- 
| page | number | ◯ | Current page number.
| maxPage | number | ◯ | Max number of pages.
| onClickAction | (number) => void | ◯ | Action when button is clicked.
