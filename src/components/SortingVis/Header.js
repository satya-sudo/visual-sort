import  React  from 'react';

import './Header.css';

const Header  = (props) =>{
    
    return (
        <div className="ui inverted menu">
            <div className="blue active item" onClick={()=>props.setArray()}>Reset Array</div>
            <div className="red item " onClick={()=>props.mergeSort()}>Merge Sort</div>
            <div className="red item" onClick={()=>props.SelectionSort()}>Selection Sort</div>
            <div className="red item" onClick={()=>props.BubbleSort()}>Bubble Sort</div>
            <div className="red item" onClick={()=>props.insertionSort()}>Insertion Sort</div>
            <div className="red item" onClick={()=>props.quickSort()}>Quick Sort</div>
            <div className="red item" onClick={()=>props.heapSort()}>HeapSort</div>
            <a href={"https://github.com/satya-sudo"} className="red item"><i className="github icon"></i>Made by Satyam Shree</a>
        </div>
    );
}

export default Header;