import React, { Component } from 'react';
import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';



class Projects extends Component {
   constructor(){
       super();
       this.state = {
           activeTab: 0
       }
   }
   toggleCategories(){
       if(this.state.activeTab === 0){
           return(
           <div className="projects-grid"> 
            { /* project #1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: 'black', height: '176px', background:
              'url(https://cdn-images-1.medium.com/max/1600/1*DVkLFr953djSo0q6cA0-kg.png) center / cover'}}>React Project #1
             </CardTitle>
              <CardText>
              In computing, React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
              </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                 <IconButton name="share" />
              </CardMenu>   
            </Card>
            
            { /* project #2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background:
             'url(https://cdn-images-1.medium.com/max/1600/1*DVkLFr953djSo0q6cA0-kg.png) center / cover'}}>React Project #2
            </CardTitle>
             <CardText>
             In computing, React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
             </CardText>
             <CardActions border>
               <Button colored>Github</Button>
               <Button colored>CodePen</Button>
               <Button colored>LiveDemo</Button>
             </CardActions>
             <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
             </CardMenu>   
           </Card>

           { /* project #3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background:
             'url(https://cdn-images-1.medium.com/max/1600/1*DVkLFr953djSo0q6cA0-kg.png) center / cover'}}>React Project #3
            </CardTitle>
             <CardText>
             In computing, React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
             </CardText>
             <CardActions border>
               <Button colored>Github</Button>
               <Button colored>CodePen</Button>
               <Button colored>LiveDemo</Button>
             </CardActions>
             <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
             </CardMenu>   
           </Card>
         </div>        
           )
       } else if(this.state.activeTab === 1){
        return(
            <div><h1>This is Angular</h1></div>
        )
       } else if(this.state.activeTab === 2){
        return(
            <div><h1>This is Nodejs</h1></div>
        )
       }else if(this.state.activeTab === 3){
        return(
            <div><h1>This is MongoDB</h1></div>
        )
       }
   }



    render() {
        return (
            <div className="category-tabs">
              <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>Node</Tab>
                <Tab>MongoDB</Tab>  
              </Tabs>
              <section>
                  {this.toggleCategories()}
              </section>   
            </div>
        );
    }
}

export default Projects;