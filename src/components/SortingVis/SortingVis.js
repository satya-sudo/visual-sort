import React  from 'react';
import Header from './Header';
import './SortingVis.css';

import {mergeSort} from '../sortingAlgo/MergeSort';
import {InsertionSort} from '../sortingAlgo/InsertionSort';
import {BubbleSort} from '../sortingAlgo/BubbleSort';
import {SelectionSort} from '../sortingAlgo/selectionSort';



const SECONDARY_COLOR = '#db3a34';
const PRIMARY_COLOR = '#43bccd';
const END_COLOR = '#ea7317';
const COMPARE_COLOR = 'black'
const ANIMATION_SPEED_MS = 5;
const NO_BARS =  150;



export default class  SortingVis extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            array:[],inSortingPorcess:true
        };
        this.setArray = this.setArray.bind(this);
        this.mergeSortStart = this.mergeSortStart.bind(this);
        this.insertionSortStart =  this.insertionSortStart.bind(this);
        this.bubbleSortStart =  this.bubbleSortStart.bind(this);
        this.selectionSortStart =  this.selectionSortStart.bind(this);


    }
    componentDidMount() { 
        this.setArray();
    }

    setArray() {
        let arr = [];
        for (let i =0 ;i<NO_BARS;i++){
            arr.push(Math.floor(Math.random() * (700 - 10) ) + 10);
        }
        this.setState({array:arr});
    }


    renderArray = ()=>{
        const array = this.state.array.map((value,index)=>{
            return  (
                <div
                className="array-bar"
                key={index}
                style={{
                    height:`${value}px`,
                    background:PRIMARY_COLOR,
                }}
            >{console.log(PRIMARY_COLOR)}</div>
            )
           
        })
        this.endArrayColorChange(PRIMARY_COLOR);
        return array
    }

    endArrayColorChange = (colorChange = END_COLOR) => {
        const arryBrs = document.getElementsByClassName('array-bar');
        for(let i = 0; i <  arryBrs.length ; i++){
            arryBrs[i].style.backgroundColor =  colorChange;
        }
    }


    mergeSortStart() {
        const animations  = mergeSort(this.state.array);
        for(let i= 0;i < animations.length;i++){
            const arryBrs = document.getElementsByClassName('array-bar');
            const colorChangeReq = i%3 !== 2;
            if (colorChangeReq){
                const [barOneId,barTwoId] =  animations[i];
                const barOneStyle = arryBrs[barOneId].style;
                const barTwoStyle = arryBrs[barTwoId].style;
                const color  = i  % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i*ANIMATION_SPEED_MS);    
            } else {
                setTimeout(()=>{
                    const [barOneId,newHeight] =  animations[i];
                    const barOneStyle =  arryBrs[barOneId].style;
                    barOneStyle.height =  `${newHeight}px`;
                },i*ANIMATION_SPEED_MS);
            }
        }
        setTimeout(()=>{
            this.endArrayColorChange();
        },animations.length*ANIMATION_SPEED_MS);
    }

  
    bubbleSortStart = () => {
        const ANIMATION_SPEED_MS_Bub = ANIMATION_SPEED_MS
        const animations =  BubbleSort(this.state.array);
        for(let i = 0 ;i < animations.length;i++){
            const arryBrs = document.getElementsByClassName('array-bar');
            const [x,y,c] =  animations[i];
            if(c === 0){
                setTimeout(()=>{arryBrs[x].style.backgroundColor = SECONDARY_COLOR;},i*ANIMATION_SPEED_MS_Bub);
            } else if (c === 1) {
                setTimeout(()=>{arryBrs[x].style.backgroundColor = PRIMARY_COLOR;},i*ANIMATION_SPEED_MS_Bub);
            } else {
                setTimeout(()=>{arryBrs[x].style.height = `${y}px`;},i*ANIMATION_SPEED_MS_Bub);

            }
        }
        setTimeout(()=>{
            this.endArrayColorChange();
        },animations.length*ANIMATION_SPEED_MS);
    }


    insertionSortStart = () =>{
       
        
        const animetions  = InsertionSort(this.state.array);


        for(let i = 0; i < animetions.length;i++){
            const arryBrs =  document.getElementsByClassName('array-bar');
            const [x,y,c] =  animetions[i];
            if (c === 0 ){
                setTimeout(()=>{
                    arryBrs[x].style.backgroundColor = SECONDARY_COLOR;
                },i*ANIMATION_SPEED_MS);
            } else if (c === 3){
                setTimeout(()=>{
                    arryBrs[x].style.backgroundColor = END_COLOR;
                },i*ANIMATION_SPEED_MS);
            } else  if(c === 1){
                setTimeout(()=>{
                    arryBrs[x].style.height = `${y}px`;
                },i*ANIMATION_SPEED_MS);
            }
        }
    }
    selectionSortStart = () => {

        const animations =  SelectionSort(this.state.array);
        for(let i = 0 ;i < animations.length;i++){
            const arryBrs = document.getElementsByClassName('array-bar');
            const [x,y,c] =  animations[i];
            if(c === 0){
                setTimeout(()=>{arryBrs[x].style.backgroundColor = SECONDARY_COLOR;},i*ANIMATION_SPEED_MS);
            } else if (c === 1) {
                setTimeout(()=>{arryBrs[x].style.backgroundColor = COMPARE_COLOR;},i*ANIMATION_SPEED_MS);
            } else if (c ===  2 ) {
                setTimeout(()=>{arryBrs[x].style.backgroundColor = PRIMARY_COLOR;},i*ANIMATION_SPEED_MS);
                
            } else {
                setTimeout(()=>{arryBrs[x].style.height = `${y}px`;},i*ANIMATION_SPEED_MS);
            }
        }
        setTimeout(()=>{
            this.endArrayColorChange();
        },animations.length*ANIMATION_SPEED_MS);

    }

    countingSortStart = () =>{}

    quickSortStart = () => {}

    shellSortStart = () => {
    }
    render() {
        return (
            <div>
                <Header style={{padding:"4px"}}setArray={this.setArray} mergeSort={this.mergeSortStart} insertionSort={this.insertionSortStart} BubbleSort={this.bubbleSortStart} SelectionSort={this.selectionSortStart}/>
                <div className="ui container">
                <div className="array-bars-container">
                    {this.renderArray()}
                </div>
                </div>
                {/* <button onClick={this.selectionSortStart}></button> */}
            </div>
            
        )
    }
}
