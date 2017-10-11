var futballUI=function()
{
    var self=this;
    this.game=undefined;
    this.running=false;
    this.initialize=function()
    {
        self.game=new futballGame()
     
           $('#GameStopped').show();
            $('#GameRunning').hide();
     
      $('body').keypress(function(event){
            if (event.which==97)
            {
                self.game.goaltender.incrementPosition(-10);   
            }
            else if (event.which=122)
            {
                self.game.goaltender.incrementPosition(10);
            }
            $('#goalie').css("top",self.game.goaltender.Position+'px');
        });
        $('#StartBtn').on('click',function(){
            $('#GameStopped').hide();
            $('#GameRunning').show();
            $('#Status').text('Get Ready...');
            self.running=true;
            self.takeShot();
        });
        $('#StopBtn').on('click',function(){
            $('#GameStopped').show();
            $('#GameRunning').hide();
            self.running=false;
            self.game.reset();
            self.refreshView();
        });
    };
    this.refreshView=function(){
        $('#futball').css("left",self.game.ball.xPos-7);
        $('#futball').css("top",self.game.ball.yPos-7);
        $('#goalie').css("top",self.game.goaltender.Position+'px');
        $('#AttemptCount').text(self.game.shotsTaken);
        $('#MissCount').text(self.game.shotsMissed);
    };
    this.takeShot=function()
    {
            //wait some amount of time
            var delay=Math.floor(Math.random()*1000+1001);
            //calculate shot
            self.game.calculateShot();
            setTimeout(function(){
                $('#Status').text('Get Ready...');
                self.refreshView();
                setTimeout(function(){ 
                    self.updateUI();},3000);        
            },delay);
        
    };
    this.updateUI=function()
    {
        if (self.running==false)
        {
            return;
        }
            var result=self.game.update(.1);
            self.refreshView();

            if (result==0){
                setTimeout(function(){self.updateUI();},10);
                return;
            }
            else if (result==1)
            {
                $('#Status').text('GOOOOOOAAAAAALLLLLL!!!!!')
            }
            else if (result==2)
            {   
                $('#Status').text('Great Block');
            }
            else
            {
                $('#Status').text('Miss')        ;
            }
            if (self.running==true)
            {
                self.takeShot();
            }

    }
    this.initialize();
}