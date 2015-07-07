(function(){

	var v = "2.1.1";

	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
                window.$pvjQuery = $.noConflict(true);
				initpvbggBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
        window.$pvjQuery = window.jQuery;
		initpvbggBookmarklet();
	}
	
	function initpvbggBookmarklet() {
		(window.pvbggAddCassie = function() {
            // TODO: Only run if page url is a boardgamegeek.com/article or boardgamegeek.com/thread
        
            var cassieDivStyle = 'display:none; position:absolute; text-align:left; z-index:9999; ' +
                                 'left:30px; padding:10px; ' +
                                 'background-color:#dddddd; border: 3px solid #999999;';
            var hrStyle = 'height:1px; border:0; background-color:#999999; margin:3px;';
            var yourUserName = $pvjQuery('a[href^="/user/"]:first').text();
            var gameId = $pvjQuery('a[data-itemtype="thread"]:first').attr('data-itemid');
            
            // Add our link and div block to each user post on the page
            $pvjQuery('div.username').each(function(index) {
                var userName = $pvjQuery(this).find("a").text();
                $pvjQuery(this).append('<span style="position:relative;">' +
                    '<a class="cassieUserButton"><img src="//cf.geekdo-static.com/mbs/mb_5972_0.gif" border="0"></a>' +
                    '<div style="' + cassieDivStyle + '" id="cassieUserDiv' + index + '">' +
                    '<b>Cassie Helper Links</b><br />' +
                    '<hr style="' + hrStyle + '" />' +
                    '<a style="line-height:normal;" href="http://www.thecassandraproject.org/jeremy/werewolf/">Cassie Homepage</a><br />' +
                    '<a style="line-height:normal;" href="http://www.thecassandraproject.org/jeremy/werewolf/profile/' + yourUserName + '">Your Cassie Profile</a><br />' +
                    '<a style="line-height:normal;" href="http://www.thecassandraproject.org/jeremy/werewolf/player/' + yourUserName + '">Your Cassie Stats</a><br />' +
                    '<a style="line-height:normal;" href="http://www.thecassandraproject.org/jeremy/werewolf/social/user/' + yourUserName + '">Your Other Sites</a><br />' +
                    '<hr style="' + hrStyle + '" />' +
                    '<a style="line-height:normal;" href="http://www.thecassandraproject.org/jeremy/werewolf/profile/' + userName + '">' + userName + ' Cassie Profile</a><br />' +
                    '<a style="line-height:normal;" href="http://www.thecassandraproject.org/jeremy/werewolf/player/' + userName + '">' + userName + ' Cassie Stats</a><br />' +
                    '<a style="line-height:normal;" href="http://www.thecassandraproject.org/jeremy/werewolf/social/user/' + userName + '">' + userName + ' on Other Sites</a><br />' +
                    '<a style="line-height:normal;" href="http://www.thecassandraproject.org/jeremy/werewolf/player/' + yourUserName + '/with/' + userName + '">All Games You Have Played With ' + userName + '</a><br />' +
                    '<hr style="' + hrStyle + '" />' +
                    '<a style="line-height:normal;" href="http://www.thecassandraproject.org/jeremy/werewolf/game/' + gameId + '">Game Page</a><br />' +
                    '<a style="line-height:normal;" href="http://www.thecassandraproject.org/jeremy/werewolf/game/' + gameId + '/chat">Game Chat</a><br />' +
                    '<a style="line-height:normal;" href="http://www.thecassandraproject.org/jeremy/werewolf/game/' + gameId + '/' + userName + '">All ' + userName + ' Posts This Game</a><br />' +
                    '</div>' +
                    '</span>');
                $pvjQuery(this).find(".cassieUserButton").click(function() {
                    $pvjQuery("#cassieUserDiv" + index).toggle();
                });
            });
		})();
	}

})();
