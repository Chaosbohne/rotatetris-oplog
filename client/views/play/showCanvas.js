
Template.showCanvas.destroyed = function() {
  window.onresize = null;
}

Template.showCanvas.rendered = function() {
    setContent();
  
		window.onresize = function() {
      setContent();
		}	  
    
  
		function getWindowHeight() {
			var windowHeight = 0;
			if (typeof(window.innerHeight) == 'number') {
				windowHeight = window.innerHeight;
			}
			else {
				if (document.documentElement && document.documentElement.clientHeight) {
					windowHeight = document.documentElement.clientHeight;
				}
				else {
					if (document.body && document.body.clientHeight) {
						windowHeight = document.body.clientHeight;
					}
				}
			}
			return windowHeight;
		}
  
		function setContent() {
			if (document.getElementById) {
				var windowHeight = getWindowHeight();
				if (windowHeight > 0) {
					var contentElement = document.getElementById('playSmartphone');
					var contentHeight = contentElement.offsetHeight;
					if (windowHeight - contentHeight > 0) {
						contentElement.style.position = 'relative';
						contentElement.style.top = ((windowHeight / 2) - (contentHeight / 2)) + 'px';
					}
					else {
						contentElement.style.position = 'static';
					}
				}
			}
		}  
  
   i.handle({
       "rotation": {
          //"target": window,
          "axis": "beta",
          "degree": 180,
          //"tolerance": 0.3,
          "callback": function (e) {
             //DEBUG 
             //console.log(e.detail);
             //Pe.socket.emit("cmd", {"what": e.detail});
             //document.getElementById("output").innerHTML = e.detail.sector;
             //socket.emit('propagate', {key: 'rotate'});
            if(started)          
              
              Meteor.call('insertCommand', { hash: roomId, command: e.detail.sector }, function(error) {
              });
          }
       },
       "mousedown": {
          "bTop": function (e) {
            if(!started) {
              started = true;
              Session.set('showStartText', false);
            }
             Meteor.call('insertCommand', { hash: roomId, command: 'moveUp' }, function(error) {
            });            
          },
          "bLeft": function (e) {
            if(!started) {
              started = true;
              Session.set('showStartText', false);
            }
            Meteor.call('insertCommand', { hash: roomId, command: 'moveLeft' }, function(error) {
            });            
          },
          "bRight": function (e) {
            if(!started) {
              started = true;
              Session.set('showStartText', false);
            }
            Meteor.call('insertCommand', { hash: roomId, command: 'moveRight' }, function(error) {
            });            
          },
          "bDown": function (e) {
            if(!started) {
              started = true;
              Session.set('showStartText', false);
            }
            Meteor.call('insertCommand', { hash: roomId, command: 'moveDown' }, function(error) {
            });            
          }
       }
    });   
}