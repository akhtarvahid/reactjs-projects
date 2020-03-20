import React from 'react'

const withCounter = (WrappedComponent)=> {
    class withCounter extends React.Component {
        constructor(props){
            super(props)
            this.state={
                count:0
            }
        }
        incrementCount=()=>{
            this.setState(prev=> {
                return { count: prev.count+1 }
            })
        }
        render(){
            return <WrappedComponent 
            count={this.state.count} 
            incrementCount={this.incrementCount}/>
        }
    }
    return withCounter;
}

export default withCounter
