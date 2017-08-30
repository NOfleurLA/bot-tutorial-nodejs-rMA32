var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexYL = /^\/league/i;botRegexSalt = /^\/salt/;botRegexDoIt = /^\/do it/
      botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexSS = /^\/settings/;
      botRegexSiege = /^\/siege/; botRegexOW = /^\/ratings/; 
      botRegexDO = /^\/draft order/; botRegexStop = /^\/stop/;
      botRegexPDR = /^\/predraft/;botRegexDB = /^\/draft board/; botRegexSlam = /^\/slam/; botRegexGLD = /^\/glados/;
      botRegexRP = /^\/roster/; botRegexNFLS = /^\/NFL sdl/; botRegexDD = /^\/dd/;
      botRegexCom = /^\/commands/; botRegexBC = /^\/buddy/; botRegexBRZ = /^\/Breezus/; 
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["EDR","BRZ","BGC","BCE","DAT","DD","DS","SB","NR","RR"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexDO.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1LNyxjptjIMwqInRyohOSeOXX5DYoNCicprlMFHqqZ2w/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botRegexStop.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Stop appropriating black culture");
    this.res.end();
  } 
  else if(request.text && botRegexPDR.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1sihVXUXCkyQtWAcCp6fo6813bJlYaedi_VPlYNPEa2M/edit?usp=sharing");
    this.res.end();
  }
  else if(request.text && botRegexDB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1ayrpAYzI8KuadjyuCltoIvV4EIWdZfV0nXL5kTTCpC8/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botRegexSlam.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://pbs.twimg.com/profile_images/587294731471757313/ZpI5PfKq.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexCom.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/183QA8bQmNSHPiNZ_H4IybNHbmYf1PLXGuSpDZ_Q30aw/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botRegexGLD.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i0.kym-cdn.com/photos/images/original/000/966/907/343.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexRP.test(request.text)) {
    this.res.writeHead(200);
    postMessage("1 QB, 2 WR, 2 RB, 1 TE, 1 W/R/T FLEX, 1 K, 1 D/ST, 8 Bench, 1 IR");
    this.res.end();
  } 
  else if(request.text && botRegexNFLS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.nfl.com/schedules");
    this.res.end();
  } 
  else if(request.text && botRegexDD.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.rooftopcrawl.com/media/cache/4a/79/4a796656f158476825b06f8fadd1c4ce.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexYL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://football.fantasysports.yahoo.com/f1/551727");
    this.res.end();
  } 
  
  else if(request.text && botRegexOW.test(request.text)) {
    this.res.writeHead(200);
    postMessage("www.daddyleagues.com/maddenrating/");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexDoIt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/320x240.gif.d8add54d1246404b990040cc8a95b779.large");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    
    postMessage("https://football.fantasysports.yahoo.com/f1/551727/matchup?week=1&mid1=1&mid2=2");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/mcf/players?name="+rep+"&position=all&team=all");
    
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/maddenall32");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1zRLaUZ12vUOORFdNQbPCzJW5T0zFBrkth_osH9b7d34/edit?usp=drivesdk");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexSS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://football.fantasysports.yahoo.com/f1/551727/settings");
    this.res.end();
  }
  else if(request.text && botRegexBC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://1.bp.blogspot.com/-z41by2ijm_Y/VJn6aa0Yo1I/AAAAAAAAEsA/MhqhBGCyLSg/s1600/buddy%2Bchrist.jpg");
    this.res.end();
  }
  else if(request.text && botRegexBRZ.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://2.bp.blogspot.com/-uUQMWciir98/UhFCgJyEGfI/AAAAAAAACg4/PEURmYVZWgc/s1600/Bressus.jpg");
    this.res.end();
  }
  
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
