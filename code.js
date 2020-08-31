var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["169e46df-fa8d-49fc-8531-6cc69f596713","f9be9714-533e-49e9-b986-4e7b011d0015","9339445d-0e6f-4ef4-a48e-dc7b60f85675","49e9e534-9746-4276-aaaf-9501fdc71c83","accf69e8-2770-4915-8cf2-3cfaea181f4a","c73948e6-7669-4c93-804e-444df2f31b53","a19d3193-b189-4f9b-86e1-170c528ffc63","25cb85d2-f983-489d-9221-389ad324f191","4607a8d6-4597-412c-b834-bce6cb8d3f56","563b37b6-1cab-49b7-9249-5bdd2e414179"],"propsByKey":{"169e46df-fa8d-49fc-8531-6cc69f596713":{"name":"city_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":2,"looping":true,"frameDelay":12,"version":"PVCLrA0xMo7OvBGQt422gU9ZFksuMFRc","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":800},"rootRelativePath":"assets/169e46df-fa8d-49fc-8531-6cc69f596713.png"},"f9be9714-533e-49e9-b986-4e7b011d0015":{"name":"city_1_copy_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":2,"looping":true,"frameDelay":12,"version":"GBQk.89xV5Fl1RtN3O5iNRuYGFC.e2aX","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":800},"rootRelativePath":"assets/f9be9714-533e-49e9-b986-4e7b011d0015.png"},"9339445d-0e6f-4ef4-a48e-dc7b60f85675":{"name":"pacman","sourceUrl":null,"frameSize":{"x":222,"y":227},"frameCount":1,"looping":true,"frameDelay":12,"version":"8kLwN5yEg1Dt8OGI1OSuFZFL2MHmRJTS","loadedFromSource":true,"saved":true,"sourceSize":{"x":222,"y":227},"rootRelativePath":"assets/9339445d-0e6f-4ef4-a48e-dc7b60f85675.png"},"49e9e534-9746-4276-aaaf-9501fdc71c83":{"name":"wing_bot","sourceUrl":"assets/api/v1/animation-library/x3HT06Rck2p6sv89qW5VbjE2Vr8R0eDk/category_characters/wing_bot.png","frameSize":{"x":218,"y":128},"frameCount":8,"looping":true,"frameDelay":2,"version":"x3HT06Rck2p6sv89qW5VbjE2Vr8R0eDk","loadedFromSource":true,"saved":true,"sourceSize":{"x":1744,"y":128},"rootRelativePath":"assets/api/v1/animation-library/x3HT06Rck2p6sv89qW5VbjE2Vr8R0eDk/category_characters/wing_bot.png"},"accf69e8-2770-4915-8cf2-3cfaea181f4a":{"name":"sun","sourceUrl":"assets/api/v1/animation-library/FFMQ_58I8xzOk6wyz55AgS_FfjGWeI2h/category_characters/sun.png","frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":2,"version":"FFMQ_58I8xzOk6wyz55AgS_FfjGWeI2h","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":150},"rootRelativePath":"assets/api/v1/animation-library/FFMQ_58I8xzOk6wyz55AgS_FfjGWeI2h/category_characters/sun.png"},"c73948e6-7669-4c93-804e-444df2f31b53":{"name":"spike_bot_walk","sourceUrl":"assets/api/v1/animation-library/0485vr0zX6xCtoRkX3nRQ9Xyk.Zl54Fu/category_characters/spike_bot_walk.png","frameSize":{"x":122,"y":161},"frameCount":2,"looping":true,"frameDelay":2,"version":"0485vr0zX6xCtoRkX3nRQ9Xyk.Zl54Fu","loadedFromSource":true,"saved":true,"sourceSize":{"x":122,"y":322},"rootRelativePath":"assets/api/v1/animation-library/0485vr0zX6xCtoRkX3nRQ9Xyk.Zl54Fu/category_characters/spike_bot_walk.png"},"a19d3193-b189-4f9b-86e1-170c528ffc63":{"name":"car2","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"lOrdDFHZnu528FdKE5XyKSt0DnMXdwkO","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/a19d3193-b189-4f9b-86e1-170c528ffc63.png"},"25cb85d2-f983-489d-9221-389ad324f191":{"name":"car1","sourceUrl":null,"frameSize":{"x":308,"y":163},"frameCount":1,"looping":true,"frameDelay":12,"version":"6.EWnMuRBZilsFu63JB4iKy23XI9IHOF","loadedFromSource":true,"saved":true,"sourceSize":{"x":308,"y":163},"rootRelativePath":"assets/25cb85d2-f983-489d-9221-389ad324f191.png"},"4607a8d6-4597-412c-b834-bce6cb8d3f56":{"name":"car1_copy_1","sourceUrl":null,"frameSize":{"x":308,"y":163},"frameCount":1,"looping":true,"frameDelay":12,"version":"DE.NRrEb9lWwK9bZ6Fw5EaytYmqLi47b","loadedFromSource":true,"saved":true,"sourceSize":{"x":308,"y":163},"rootRelativePath":"assets/4607a8d6-4597-412c-b834-bce6cb8d3f56.png"},"563b37b6-1cab-49b7-9249-5bdd2e414179":{"name":"road.png_1","sourceUrl":null,"frameSize":{"x":400,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"q0oC4KNuR9QVRK2Uguh_kFfIb9TE3__x","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":10},"rootRelativePath":"assets/563b37b6-1cab-49b7-9249-5bdd2e414179.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

        
      var city = createSprite(200,200,400,400);
      city.setAnimation("city_1");
      city.x = city.width/2;
      city.scale = 2.5;
      city.velocityX = -3;
      
      var sun = createSprite(300,65);
      sun.setAnimation("sun");
      sun.scale = 0.5;
        
      var cargroup = createGroup();
      var spikegroup = createGroup();
      var  wingbotgroup = createGroup();
        
       
      var pacman = createSprite(200,300);
      pacman.setAnimation("pacman");
      pacman.scale = 0.3;
      pacman.x = 40;
        
      var road = createSprite(200,395,450,50);
      road.setAnimation("road.png_1");
      road.x = road.width/2;
      road.velocityX = -3;
      road.scale=2.5;
       
      var score;
        
        function draw() {
          background("white");
         
          pacman.x=World.mouseX;
          pacman.y=World.mouseY;
         
         pacman.depth= road.depth;
         
         if( road.x < 0){
            road.x = road.width/2;
          }
          if (city.x < 0){
            city.x = city.width/2;
          }
           if (cargroup.isTouching(pacman)){
             cargroup.destroyEach();
           }  
         if (spikegroup.isTouching(pacman)){
             playSound("assets/category_hits/vibrant_crate_break_4.mp3");
             spikegroup.destroyEach();
         }
           if (wingbotgroup.isTouching(pacman)){
             playSound("assets/category_hits/vibrant_crate_break_4.mp3");
             wingbotgroup.destroyEach();
           } 
          
          spawnCar();
          spawnSpikebot();
          spawnWingbot();
          pacman.collide(road);
          drawSprites();
         
          textSize(25);    
          fill("red");
          score =  Math.round(World.frameCount/30);
          text("score:-" + score,180,40);
            
        }
         
         function spawnCar(){
           if (World.frameCount % 80 ===0){
             var car = createSprite(400,375,40,10);
             var rand = randomNumber(1,2);
             playSound("assets/default.mp3", false); 
             car.setAnimation("car" + rand);
          
             car.scale=0.5;
             car.velocityX=- 25;
             
             cargroup.add(car);
             car.depth = pacman.depth ;
            pacman.depth = pacman.depth+1;
           }
         }
         
         function spawnSpikebot(){
         if (World.frameCount % 100 ===0){
             var spikebot = createSprite(400,10);
             
               spikebot.setAnimation("spike_bot_walk");
               spikebot.x = randomNumber(20,320);
               spikebot.scale = 0.5;
               
               spikegroup.add(spikebot);
               spikebot.velocityY= 4;
               spikebot.depth = pacman.depth ;
              pacman.depth = pacman.depth+1;
           }
         }
         function spawnWingbot(){
         if (World.frameCount % 120 ===0){
             var wingbot = createSprite(10,70);
              wingbot .velocityX= 4;
              wingbot .setAnimation("wing_bot");
              wingbot.scale=0.5;
              wingbot .x = randomNumber(0,300);
              wingbotgroup.add(wingbot);
              wingbot .depth =  pacman.depth ;
              pacman.depth =  pacman.depth+ 1;
           }
         }

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
