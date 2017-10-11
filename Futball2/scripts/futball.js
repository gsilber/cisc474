var futballGame=function(){
    var self=this;
    this.options={
        height:500,
        width:680,
        goalHeight:188,
        goalRight:50,
        goalWidth:50,
        minRange:600,
        minX:50,
        minY:100,
        mindelay:1000,
        maxdelay:5000,
        minballSpeed:70,
        maxballSpeed:150,
        errorPercent:1.25,
        goalieHeight:60
    }
    this.height=500;
    
    this.shotsTaken=0;
    this.shotsMissed=0;
    this.ball=new futball();
    this.goaltender=new goalie(this.options.goalHeight/2-this.options.goalieHeight/2,0,this.options.goalHeight-this.options.goalieHeight);
    this.initialize=function(){
        self.reset();    
    };
    this.reset=function(){
        self.shotsTaken=0;
        self.shotsMissed=0;
    };

    this.calculateShot=function(){
        //put ball in random position
        var xPos=self.options.width-self.options.minRange-self.options.minX;
        xPos=Math.floor(Math.random()*xPos+self.options.minX+1);
        var yPos=self.options.height-2*self.options.minY;
        yPos=Math.floor(Math.random()*yPos+self.options.minY+1);
        self.ball.positionBall(xPos,yPos);
        var postX=self.options.width-self.options.goalRight-self.options.goalWidth;
        var topPostY=(self.options.height-self.options.goalHeight*self.options.errorPercent)/2;
        var botPostY=topPostY+self.options.goalHeight*self.options.errorPercent;
        var angle1=Math.atan2(yPos-topPostY,postX-xPos);
        var angle2=Math.atan2(yPos-botPostY,postX-xPos);
        var minAngle=Math.min(angle1,angle2);
        var maxAngle=Math.max(angle1,angle2);
        var newAngle=Math.random()*(maxAngle-minAngle)+minAngle
        if (minAngle==angle2){
            newAngle*=-1.0;
        }
        var newSpeed=Math.floor(Math.random()*(self.options.maxballSpeed-self.options.minballSpeed)+self.options.minballSpeed+1);
        self.ball.setTrajectory(newAngle,newSpeed);
    };
    this.update=function(time){
        self.ball.updatePosition(time);
        
        if (self.ball.xPos>self.options.width-self.options.goalRight-self.options.goalWidth)
        {
            var topPostY=(self.options.height-self.options.goalHeight)/2;
            var botPostY=topPostY+self.options.goalHeight;
            self.shotsTaken++;
            if (self.ball.yPos>topPostY && self.ball.yPos<botPostY){
                if (self.ball.yPos-topPostY<self.goaltender.Position||self.ball.yPos-topPostY>self.goaltender.Position+self.options.goalieHeight)
                {
                    self.ball.xPos=self.options.width-self.options.goalRight-self.options.goalWidth/2;
                                
                    return 1;
                }
                else{
                    self.ball.xPos=self.options.width-self.options.goalRight-self.options.goalWidth;
                    self.shotsMissed++;
                    return 2;
                    
                }
            }
            else 
            {
                self.ball.xPos=self.options.width-self.options.goalRight-self.options.goalWidth/2;
                self.shotsMissed++;
                return 3;
            }
        }

        return 0;
        
    };
    
    this.initialize();

}

var goalie=function(yPos,minY,maxY){
    var self=this;
    this.Position=yPos;
    this.minY=minY;
    this.maxY=maxY;
    this.initialize=function()
    {
    };
    this.setPosition=function(yPos){
        if (yPos<self.minY)
        {
            self.Position=self.minY;
        }
        else if (yPos>self.maxY){
            self.Position=self.maxY;  
        }
        else
        {
            self.Position=yPos;
        }
    };
    this.incrementPosition=function(amount){
        self.setPosition(self.Position+amount);
        
    };
    this.initialize();
}

var futball=function(){
    var self=this;
    this.angle=0;
    this.speed=0;
    this.xPos=0;
    this.yPos=0;
    this.initialize=function(){
        self.angle=0;
        self.speed=0;
        self.xPos=0;
        self.yPos=0;
    };  
    this.positionBall=function(x,y){
        self.xPos=x;
        self.yPos=y;
    };
    this.setTrajectory=function(angle,speed)
    {
        self.angle=angle;
        self.speed=speed;
    };
    this.updatePosition=function(time){
        //speed*time gives distance.
        var distance=self.speed*time;
        //calculate new x,y from distance and angle y is sin*dist, x is cos*dist
        self.yPos=self.yPos+Math.sin(self.angle)*distance;
        self.xPos=self.xPos+Math.cos(self.angle)*distance;

    }
    this.initialize();
}