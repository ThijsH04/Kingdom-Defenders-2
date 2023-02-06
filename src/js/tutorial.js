class Tutorial {
    constructor() {
        this.tutorialItems = []
        this.setupTutorials()
    }
    setupTutorials() {
        // tutorial for adding tutorials:
        // add tutorialItem objects to this.tutorialItems here
        // this.tutorialItems.push(new TutorialItem("help text", boxWidth, boxHeight,triggerFunction,untriggerFunction))
        // triggerFunction should return a list [x,y] if the tutorial will be triggered and false if it wont be triggered
        // untriggerFunction should return true if the tutorial will be hidden again and false if it wont
        // leave untriggerFunction empty for manual close button
        this.tutorialItems.push(new TutorialItem("helpful tutorial text", 4, 2, ()=>{return [10,10]}))
    }
    update(tileSize) {
        for(let t=0;t<this.tutorialItems.length;t++) {
            this.tutorialItems[t].update(tileSize)
        }
    }
}