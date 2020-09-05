				function outPush() {
					var showLabel = document.getElementById("1").checked;
					var showCredit = document.getElementById("2").checked;
					var showAnimate = document.getElementById("3").checked;
					var showResponsive = document.getElementById("4").checked;
					var startPosition = document.getElementById("starting-position").value;
					var URL1 = document.getElementById("url1").value;
					var URL2 = document.getElementById("url2").value;
					var label1 = document.getElementById("label1").value;
					var label2 = document.getElementById("label2").value;
					var credit1 = document.getElementById("credit1").value;
					var credit2 = document.getElementById("credit2").value;
					var elemold = document.getElementById("preview");

					elemold.innerHTML = elemold.innerHTML + "<div id=\"foo1\"></div>";
					document.getElementById("left").setAttribute("src", URL1);
					document.getElementById("right").setAttribute("src", URL2);
					slider = new juxtapose.JXSlider('#foo1',
						[{
								src: URL1,
								label: label1,
								credit: credit1
							},
							{
								src: URL2,
								label: label2,
								credit: credit2
							}
						], {
							animate: showAnimate,
							showLabels: showLabel,
							showCredits: showCredit,
							startingPosition: startPosition + "%",
							makeResponsive: showResponsive
						});
				}