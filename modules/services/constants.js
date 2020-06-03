export class Constants {
	constructor () {
		this.MESSAGE = {
			error: 'All pages must have a title'
		}

		this.text = `Vous savez, moi, je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres. Des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez-moi. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée… Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois, on ne trouve pas l’interlocuteur en face, je dirais, le miroir qui vous aide à avancer. 
		Alors ça n’est pas mon cas, comme je disais là, puisque moi au contraire, j’ai pu : et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie… Je ne suis qu’amour ! Et finalement, quand beaucoup de gens, aujourd’hui, me disent « Mais comment fais-tu pour avoir cette humanité ? » , et bien je leur réponds très simplement, je leur dis que c’est ce goût de l’amour ce goût donc qui m’a poussé aujourd’hui à entreprendre une construction mécanique, mais demain qui sait ? Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi… `;

		this.cssColors = [
			'AliceBlue',
			'AntiqueWhite',
			'Aqua',
			'Aquamarine',
			'Azure',
			'Beige',
			'Bisque',
			'Black',
			'BlanchedAlmond',
			'Blue',
			'BlueViolet',
			'Brown',
			'BurlyWood',
			'CadetBlue',
			'Chartreuse',
			'Chocolate',
			'Coral',
			'CornflowerBlue',
			'Cornsilk',
			'Crimson',
			'Cyan',
			'DarkBlue',
			'DarkCyan',
			'DarkGoldenRod',
			'DarkGray',
			'DarkGrey',
			'DarkGreen',
			'DarkKhaki',
			'DarkMagenta',
			'DarkOliveGreen',
			'DarkOrange',
			'DarkOrchid',
			'DarkRed',
			'DarkSalmon',
			'DarkSeaGreen',
			'DarkSlateBlue',
			'DarkSlateGray',
			'DarkSlateGrey',
			'DarkTurquoise',
			'DarkViolet',
			'DeepPink',
			'DeepSkyBlue',
			'DimGray',
			'DimGrey',
			'DodgerBlue',
			'FireBrick',
			'FloralWhite',
			'ForestGreen',
			'Fuchsia',
			'Gainsboro',
			'GhostWhite',
			'Gold',
			'GoldenRod',
			'Gray',
			'Grey',
			'Green',
			'GreenYellow',
			'HoneyDew',
			'HotPink',
			'IndianRed',
			'Indigo',
			'Ivory',
			'Khaki',
			'Lavender',
			'LavenderBlush',
			'LawnGreen',
			'LemonChiffon',
			'LightBlue',
			'LightCoral',
			'LightCyan',
			'LightGoldenRodYellow',
			'LightGray',
			'LightGrey',
			'LightGreen',
			'LightPink',
			'LightSalmon',
			'LightSeaGreen',
			'LightSkyBlue',
			'LightSlateGray',
			'LightSlateGrey',
			'LightSteelBlue',
			'LightYellow',
			'Lime',
			'LimeGreen',
			'Linen',
			'Magenta',
			'Maroon',
			'MediumAquaMarine',
			'MediumBlue',
			'MediumOrchid',
			'MediumPurple',
			'MediumSeaGreen',
			'MediumSlateBlue',
			'MediumSpringGreen',
			'MediumTurquoise',
			'MediumVioletRed',
			'MidnightBlue',
			'MintCream',
			'MistyRose',
			'Moccasin',
			'NavajoWhite',
			'Navy',
			'OldLace',
			'Olive',
			'OliveDrab',
			'Orange',
			'OrangeRed',
			'Orchid',
			'PaleGoldenRod',
			'PaleGreen',
			'PaleTurquoise',
			'PaleVioletRed',
			'PapayaWhip',
			'PeachPuff',
			'Peru',
			'Pink',
			'Plum',
			'PowderBlue',
			'Purple',
			'RebeccaPurple',
			'Red',
			'RosyBrown',
			'RoyalBlue',
			'SaddleBrown',
			'Salmon',
			'SandyBrown',
			'SeaGreen',
			'SeaShell',
			'Sienna',
			'Silver',
			'SkyBlue',
			'SlateBlue',
			'SlateGray',
			'SlateGrey',
			'Snow',
			'SpringGreen',
			'SteelBlue',
			'Tan',
			'Teal',
			'Thistle',
			'Tomato',
			'Turquoise',
			'Violet',
			'Wheat',
			'White',
			'WhiteSmoke',
			'Yellow',
			'YellowGreen'
		];

		this.transitions = {

			from: {
				moveFromLeft: {
					value: 'Move from left',
					enter: `.moveFromLeft {
						-webkit-animation: moveFromLeft .6s ease both;
						animation: moveFromLeft .6s ease both;
					}
					@-webkit-keyframes moveFromLeft {
						from { -webkit-transform: translateX(-100%); }
					}
					@keyframes moveFromLeft {
						from { -webkit-transform: translateX(-100%); transform: translateX(-100%); }
					}`,
					exitName: 'moveToLeft'
				},
				moveFromRight: {
					value: 'Move from right',
					enter: `.moveFromRight {
						-webkit-animation: moveFromRight .6s ease both;
						animation: moveFromRight .6s ease both;
					}
					@-webkit-keyframes moveFromRight {
						from { -webkit-transform: translateX(100%); }
					}
					@keyframes moveFromRight {
						from { -webkit-transform: translateX(100%); transform: translateX(100%); }
					}`,
					exitName: 'moveToRight'
				},

				moveFromTop: {
					value: 'Move from Top',
					enter: `.moveFromTop {
						-webkit-animation: moveFromTop .6s ease both;
						animation: moveFromTop .6s ease both;
					}
					@-webkit-keyframes moveFromTop {
						from { -webkit-transform: translateY(-130%); }
					}
					@keyframes moveFromTop {
						from { -webkit-transform: translateY(-130%); transform: translateY(-130%); }
					}`,
					exitName: 'moveToTop'
				},
				moveFromBottom: {
					value: 'Move from bottom',
					enter: `.moveFromBottom {
						-webkit-animation: moveFromBottom .6s ease both;
						animation: moveFromBottom .6s ease both;
					}
					@-webkit-keyframes moveFromBottom {
						from { -webkit-transform: translateY(100%); }
					}
					@keyframes moveFromBottom {
						from { -webkit-transform: translateY(100%); transform: translateY(100%); }
					}`,
					exitName: 'moveToBottom'
				},
				moveFromLeftFade: {
					value: 'Move from left fade',
					enter: `.moveFromLeftFade {
						-webkit-animation: moveFromLeftFade .7s ease both;
						animation: moveFromLeftFade .7s ease both;
					}
					@-webkit-keyframes moveFromLeftFade {
						from { opacity: 0.3; -webkit-transform: translateX(-100%); }
					}
					@keyframes moveFromLeftFade {
						from { opacity: 0.3; -webkit-transform: translateX(-100%); transform: translateX(-100%); }
					}`,
					exitName: 'moveToLeftFade'
				},
				moveFromRightFade: {
					value: 'Move from right fade',
					enter: `.moveFromRightFade {
						-webkit-animation: moveFromRightFade .7s ease both;
						animation: moveFromRightFade .7s ease both;
					}
					@-webkit-keyframes moveFromRightFade {
						from { opacity: 0.3; -webkit-transform: translateX(100%); }
					}
					@keyframes moveFromRightFade {
						from { opacity: 0.3; -webkit-transform: translateX(100%); transform: translateX(100%); }
					}`,
					exitName: 'moveToRightFade'
				},
				moveFromTopFade: {
					value: 'Move from top fade',
					enter: `.moveFromTopFade {
						-webkit-animation: moveFromTopFade .7s ease both;
						animation: moveFromTopFade .7s ease both;
					}
					@-webkit-keyframes moveFromTopFade {
						from { opacity: 0.3; -webkit-transform: translateY(-100%); }
					}
					@keyframes moveFromTopFade {
						from { opacity: 0.3; -webkit-transform: translateY(-100%); transform: translateY(-100%); }
					}`,
					exitName: 'moveToTopFade'
				},
				moveFromBottomFade: {
					value: 'Move from bottom fade',
					enter: `.moveFromBottomFade {
						-webkit-animation: moveFromBottomFade .7s ease both;
						animation: moveFromBottomFade .7s ease both;
					}
					@-webkit-keyframes moveFromBottomFade {
						from { opacity: 0.3; -webkit-transform: translateY(100%); }
					}
					@keyframes moveFromBottomFade {
						from { opacity: 0.3; -webkit-transform: translateY(100%); transform: translateY(100%); }
					}`,
					exitName: 'moveToBottomFade'
				},
				scaleUp: {
					value: 'Scale up',
					enter: `.scaleUp {
						-webkit-animation: scaleUp .7s ease both;
						animation: scaleUp .7s ease both;
					}
					@-webkit-keyframes scaleUp {
						from { opacity: 0; -webkit-transform: scale(.8); }
					}
					@keyframes scaleUp {
						from { opacity: 0; -webkit-transform: scale(.8); transform: scale(.8); }
					}`,
					exitName: 'scaleDown'
				},
				scaleUpDown: {
					value: 'Scale up down',
					enter: `.scaleUpDown {
						-webkit-animation: scaleUpDown .5s ease both;
						animation: scaleUpDown .5s ease both;
					}
					@-webkit-keyframes scaleUpDown {
						from { opacity: 0; -webkit-transform: scale(1.2); }
					}
					@keyframes scaleUpDown {
						from { opacity: 0; -webkit-transform: scale(1.2); transform: scale(1.2); }
					}`,
					exitName: 'scaleDownUp'
				},
				scaleUpCenter: {
					value: 'Scale up center',
					enter: `.scaleUpCenter {
						-webkit-animation: scaleUpCenter .4s ease-out both;
						animation: scaleUpCenter .4s ease-out both;
					}
					@-webkit-keyframes scaleUpCenter {
						from { opacity: 0; -webkit-transform: scale(.7); }
					}
					@keyframes scaleUpCenter {
						from { opacity: 0; -webkit-transform: scale(.7); transform: scale(.7); }
					}`,
					exitName: 'scaleDownCenter'
				},
				rotateFromCenterLeftSideFirst: {
					value: 'Rotate left side first',
					enter: this.setDefaultEntrance('rotateFromCenterLeftSideFirst'),
					exitName: 'rotateLeftSideFirst'
				},
				rotateFromCenterRightSideFirst: {
					value: 'Rotate right side first',
					enter: this.setDefaultEntrance('rotateFromCenterRightSideFirst'),
					exitName: 'rotateRightSideFirst'
				},
				rotateFromCenterTopSideFirst: {
					value: 'Rotate top side first',
					enter: this.setDefaultEntrance('rotateFromCenterTopSideFirst'),
					exitName: 'rotateTopSideFirst'
				},
				rotateFromCenterBottomSideFirst: {
					value: 'Rotate bottom side first',
					enter: this.setDefaultEntrance('rotateFromCenterBottomSideFirst'),
					exitName: 'rotateBottomSideFirst'
				},
				flipInLeft: {
					value: 'Flip in left',
					enter: `.flipInLeft {
						-webkit-transform-origin: 50% 50%;
						transform-origin: 50% 50%;
						-webkit-animation: flipInLeft .5s both ease-out;
						animation: flipInLeft .5s both ease-out;
					}
					@-webkit-keyframes flipInLeft {
						from { -webkit-transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
					}
					@keyframes flipInLeft {
						from { -webkit-transform: translateZ(-1000px) rotateY(-90deg); transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
					}`,
					exitName: 'flipOutRight'
				},
				flipInRight: {
					value: 'Flip in right',
					enter: `.flipInRight {
						-webkit-transform-origin: 50% 50%;
						transform-origin: 50% 50%;
						-webkit-animation: flipInRight .5s both ease-out;
						animation: flipInRight .5s both ease-out;
					}
					@-webkit-keyframes flipInRight {
						from { -webkit-transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
					}
					@keyframes flipInRight {
						from { -webkit-transform: translateZ(-1000px) rotateY(90deg); transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
					}`,
					exitName: 'flipOutLeft'
				},
				flipInTop: {
					value: 'Flip in top',
					enter: `.flipInTop {
						-webkit-transform-origin: 50% 50%;
						transform-origin: 50% 50%;
						-webkit-animation: flipInTop .5s both ease-out;
						animation: flipInTop .5s both ease-out;
					}
					@-webkit-keyframes flipInTop {
						from { -webkit-transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }
					}
					@keyframes flipInTop {
						from { -webkit-transform: translateZ(-1000px) rotateX(90deg); transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }
					}`,
					exitName: 'flipOutBottom'
				},
				flipInBottom: {
					value: 'Flip in bottom',
					enter: `.flipInBottom {
						-webkit-transform-origin: 50% 50%;
						transform-origin: 50% 50%;
						-webkit-animation: flipInBottom .5s both ease-out;
						animation: flipInBottom .5s both ease-out;
					}
					@-webkit-keyframes flipInBottom {
						from { -webkit-transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }
					}
					@keyframes flipInBottom {
						from { -webkit-transform: translateZ(-1000px) rotateX(-90deg); transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }
					}`,
					exitName: 'flipOutTop'
				},
				rotateFromCenterFall: {
					value: 'Rotate and fall',
					enter: `.rotateFromCenterFall {
					-webkit-animation: rotateFromCenterFall .4s ease-out both;
						animation: rotateFromCenterFall .4s ease-out both;
					}
					@-webkit-keyframes rotateFromCenterFall {
						from { opacity: 0; -webkit-transform: scale(.7); }
					}
					@keyframes rotateFromCenterFall {
						from { opacity: 0; -webkit-transform: scale(.7); transform: scale(.7); }
					}`,
					exitName: 'rotateFall'
				},
				rotateInNewspaper: {
					value: 'Rotate in newspaper',
					enter: `.rotateInNewspaper {
						-webkit-transform-origin: 50% 50%;
						transform-origin: 50% 50%;
						-webkit-animation: rotateInNewspaper .5s both ease-out;
						animation: rotateInNewspaper .5s both ease-out;
					}
					@-webkit-keyframes rotateInNewspaper {
						from { -webkit-transform: translateZ(-3000px) rotateZ(-360deg); opacity: 0; }
					}
					@keyframes rotateInNewspaper {
						from { -webkit-transform: translateZ(-3000px) rotateZ(-360deg); transform: translateZ(-3000px) rotateZ(-360deg); opacity: 0; }
					}`,
					exitName: 'rotateOutNewspaper'
				},
				rotatePullLeft: {
					value: 'Rotate pull left',
					enter: `.rotatePullLeft {
						-webkit-transform-origin: 0% 50%;
						transform-origin: 0% 50%;
						-webkit-animation: rotatePullLeft .5s both ease;
						animation: rotatePullLeft .5s both ease;
					}
					@-webkit-keyframes rotatePullLeft {
						from { opacity: 0; -webkit-transform: rotateY(90deg); }
					}
					@keyframes rotatePullLeft {
						from { opacity: 0; -webkit-transform: rotateY(90deg); transform: rotateY(90deg); }
					}`,
					exitName: 'rotatePushRight'
				},
				rotatePullRight: {
					value: 'Rotate pull right',
					enter: `.rotatePullRight {
						-webkit-transform-origin: 100% 50%;
						transform-origin: 100% 50%;
						-webkit-animation: rotatePullRight .5s both ease;
						animation: rotatePullRight .5s both ease;
					}
					@-webkit-keyframes rotatePullRight {
						from { opacity: 0; -webkit-transform: rotateY(-90deg); }
					}
					@keyframes rotatePullRight {
						from { opacity: 0; -webkit-transform: rotateY(-90deg); transform: rotateY(-90deg); }
					}`,
					exitName: 'rotatePushLeft'
				},
				rotatePullTop: {
					value: 'Rotate pull Top',
					enter: `.rotatePullTop {
						-webkit-transform-origin: 50% 0%;
						transform-origin: 50% 0%;
						-webkit-animation: rotatePullTop .5s both ease;
						animation: rotatePullTop .5s both ease;
					}
					@-webkit-keyframes rotatePullTop {
						from { opacity: 0; -webkit-transform: rotateX(-90deg); }
					}
					@keyframes rotatePullTop {
						from { opacity: 0; -webkit-transform: rotateX(-90deg); transform: rotateX(-90deg); }
					}`,
					exitName: 'rotatePushBottom'
				},
				rotatePullBottom: {
					value: 'Rotate pull Bottom',
					enter: `.rotatePullBottom {
						-webkit-transform-origin: 50% 100%;
						transform-origin: 50% 100%;
						-webkit-animation: rotatePullBottom .5s both ease;
						animation: rotatePullBottom .5s both ease;
					}
					@-webkit-keyframes rotatePullBottom {
						from { opacity: 0; -webkit-transform: rotateX(90deg); }
					}
					@keyframes rotatePullBottom {
						from { opacity: 0; -webkit-transform: rotateX(90deg); transform: rotateX(90deg); }
					}`,
					exitName: 'rotatePushTop'
				},
				rotateUnfoldLeft: {
					value: 'Rotate unfold left',
					enter:`.rotateUnfoldLeft {
						-webkit-transform-origin: 100% 50%;
						transform-origin: 100% 50%;
						-webkit-animation: rotateUnfoldLeft .7s both ease;
						animation: rotateUnfoldLeft .7s both ease;
					}
					@-webkit-keyframes rotateUnfoldLeft {
						from { opacity: 0; -webkit-transform: translateX(-100%) rotateY(-90deg); }
					}
					@keyframes rotateUnfoldLeft {
						from { opacity: 0; -webkit-transform: translateX(-100%) rotateY(-90deg); transform: translateX(-100%) rotateY(-90deg); }
					}`,
					exitName: 'rotateFoldRight'
				},
				rotateUnfoldRight: {
					value: 'Rotate unfold right',
					enter:`.rotateUnfoldRight {
						-webkit-transform-origin: 0% 50%;
						transform-origin: 0% 50%;
						-webkit-animation: rotateUnfoldRight .7s both ease;
						animation: rotateUnfoldRight .7s both ease;
					}
					@-webkit-keyframes rotateUnfoldRight {
						from { opacity: 0; -webkit-transform: translateX(100%) rotateY(90deg); }
					}
					@keyframes rotateUnfoldRight {
						from { opacity: 0; -webkit-transform: translateX(100%) rotateY(90deg); transform: translateX(100%) rotateY(90deg); }
					}`,
					exitName: 'rotateFoldleft'
				},
				rotateUnfoldTop: {
					value: 'Rotate unfold top',
					enter:`.rotateUnfoldTop {
						-webkit-transform-origin: 50% 100%;
						transform-origin: 50% 100%;
						-webkit-animation: rotateUnfoldTop .7s both ease;
						animation: rotateUnfoldTop .7s both ease;
					}
					@-webkit-keyframes rotateUnfoldTop {
						from { opacity: 0; -webkit-transform: translateY(-100%) rotateX(90deg); }
					}
					@keyframes rotateUnfoldTop {
						from { opacity: 0; -webkit-transform: translateY(-100%) rotateX(90deg); transform: translateY(-100%) rotateX(90deg); }
					}`,
					exitName: 'rotateFoldBottom'
				},
				rotateUnfoldBottom: {
					value: 'Rotate unfold bottom',
					enter:`.rotateUnfoldBottom {
						-webkit-transform-origin: 50% 0%;
						transform-origin: 50% 0%;
						-webkit-animation: rotateUnfoldBottom .7s both ease;
						animation: rotateUnfoldBottom .7s both ease;
					}
					@-webkit-keyframes rotateUnfoldBottom {
						from { opacity: 0; -webkit-transform: translateY(100%) rotateX(-90deg); }
					}
					@keyframes rotateUnfoldBottom {
						from { opacity: 0; -webkit-transform: translateY(100%) rotateX(-90deg); transform: translateY(100%) rotateX(-90deg); }
					}`,
					exitName: 'rotateFoldTop'
				},
				rotateRoomLeftIn: {
					value: 'Rotate room left in',
					enter: `.rotateRoomLeftIn {
						-webkit-transform-origin: 0% 50%;
						transform-origin: 0% 50%;
						-webkit-animation: rotateRoomLeftIn .8s both ease;
						animation: rotateRoomLeftIn .8s both ease;
					}
					@-webkit-keyframes rotateRoomLeftIn {
						from { opacity: .3; -webkit-transform: translateX(100%) rotateY(-90deg); }
					}
					@keyframes rotateRoomLeftIn {
						from { opacity: .3; -webkit-transform: translateX(100%) rotateY(-90deg); transform: translateX(100%) rotateY(-90deg); }
					}`,
					exitName: 'rotateRoomLeftOut'
				},
				rotateRoomRightIn: {
					value: 'Rotate room right in',
					enter: `.rotateRoomRightIn {
						-webkit-transform-origin: 100% 50%;
						transform-origin: 100% 50%;
						-webkit-animation: rotateRoomRightIn .8s both ease;
						animation: rotateRoomRightIn .8s both ease;
					}
					@-webkit-keyframes rotateRoomRightIn {
						from { opacity: .3; -webkit-transform: translateX(-100%) rotateY(90deg); }
					}
					@keyframes rotateRoomRightIn {
						from { opacity: .3; -webkit-transform: translateX(-100%) rotateY(90deg); transform: translateX(-100%) rotateY(90deg); }
					}`,
					exitName: 'rotateRoomRightOut'
				},
				rotateRoomTopIn: {
					value: 'Rotate room top in',
					enter: `.rotateRoomTopIn {
						-webkit-transform-origin: 50% 0%;
						transform-origin: 50% 0%;
						-webkit-animation: rotateRoomTopIn .8s both ease;
						animation: rotateRoomTopIn .8s both ease;
					}
					@-webkit-keyframes rotateRoomTopIn {
						from { opacity: .3; -webkit-transform: translateY(100%) rotateX(90deg); }
					}
					@keyframes rotateRoomTopIn {
						from { opacity: .3; -webkit-transform: translateY(100%) rotateX(90deg); transform: translateY(100%) rotateX(90deg); }
					}`,
					exitName: 'rotateRoomTopOut'
				},
				rotateRoomBottomIn: {
					value: 'Rotate room bottom in',
					enter: `.rotateRoomBottomIn {
						-webkit-transform-origin: 50% 100%;
						transform-origin: 50% 100%;
						-webkit-animation: rotateRoomBottomIn .8s both ease;
						animation: rotateRoomBottomIn .8s both ease;
					}
					@-webkit-keyframes rotateRoomBottomIn {
						from { opacity: .3; -webkit-transform: translateY(-100%) rotateX(-90deg); }
					}
					@keyframes rotateRoomBottomIn {
						from { opacity: .3; -webkit-transform: translateY(-100%) rotateX(-90deg); transform: translateY(-100%) rotateX(-90deg); }
					}`,
					exitName: 'rotateRoomBottomOut'
				},
				rotateCubeLeftIn: {
					value: 'Rotate cube left in',
					enter: `.rotateCubeLeftIn {
						-webkit-transform-origin: 0% 50%;
						transform-origin: 0% 50%;
						-webkit-animation: rotateCubeLeftIn .6s both ease-in;
						animation: rotateCubeLeftIn .6s both ease-in;
					}
					@-webkit-keyframes rotateCubeLeftIn {
						0% { opacity: .3; -webkit-transform: translateX(100%) rotateY(90deg); }
						50% { -webkit-animation-timing-function: ease-out;  -webkit-transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
					}
					@keyframes rotateCubeLeftIn {
						0% { opacity: .3; -webkit-transform: translateX(100%) rotateY(90deg); transform: translateX(100%) rotateY(90deg); }
						50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out;  -webkit-transform: translateX(50%) translateZ(-200px) rotateY(45deg);  transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
					}`,
					exitName: 'rotateCubeLeftOut'
				},
				rotateCubeRightIn: {
					value: 'Rotate cube tight in',
					enter: `.rotateCubeRightIn {
						-webkit-transform-origin: 100% 50%;
						transform-origin: 100% 50%;
						-webkit-animation: rotateCubeRightIn .6s both ease-in;
						animation: rotateCubeRightIn .6s both ease-in;
					}
					@-webkit-keyframes rotateCubeRightIn {
						0% { opacity: .3; -webkit-transform: translateX(-100%) rotateY(-90deg); }
						50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
					}
					@keyframes rotateCubeRightIn {
						0% { opacity: .3; -webkit-transform: translateX(-100%) rotateY(-90deg); transform: translateX(-100%) rotateY(-90deg); }
						50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
					}`,
					exitName: 'rotateCubeRightOut'
				},
				rotateCubeTopIn: {
					value: 'Rotate cube top in',
					enter: `.rotateCubeTopIn {
						-webkit-transform-origin: 50% 0%;
						transform-origin: 50% 0%;
						-webkit-animation: rotateCubeTopIn .6s both ease-in;
						animation: rotateCubeTopIn .6s both ease-in;
					}
					@-webkit-keyframes rotateCubeTopIn {
						0% { opacity: .3; -webkit-transform: translateY(100%) rotateX(-90deg); }
						50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }
					}
					@keyframes rotateCubeTopIn {
						0% { opacity: .3; -webkit-transform: translateY(100%) rotateX(-90deg); transform: translateY(100%) rotateX(-90deg); }
						50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateY(50%) translateZ(-200px) rotateX(-45deg); transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }
					}`,
					exitName: 'rotateCubeTopOut'
				},
				rotateCubeBottomIn: {
					value: 'Rotate cube bottom in',
					enter: `.rotateCubeBottomIn {
						-webkit-transform-origin: 50% 100%;
						transform-origin: 50% 100%;
						-webkit-animation: rotateCubeBottomIn .6s both ease-in;
						animation: rotateCubeBottomIn .6s both ease-in;
					}
					@-webkit-keyframes rotateCubeBottomIn {
						0% { opacity: .3; -webkit-transform: translateY(-100%) rotateX(90deg); }
						50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }
					}
					@keyframes rotateCubeBottomIn {
						0% { opacity: .3; -webkit-transform: translateY(-100%) rotateX(90deg); transform: translateY(-100%) rotateX(90deg); }
						50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateY(-50%) translateZ(-200px) rotateX(45deg); transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }
					}`,
					exitName: 'rotateCubeBottomOut'
				},
				rotateCarouselLeftIn: {
					value: 'Rotate carousel left in',
					enter: `.rotateCarouselLeftIn {
						-webkit-transform-origin: 0% 50%;
						transform-origin: 0% 50%;
						-webkit-animation: rotateCarouselLeftIn .8s both ease;
						animation: rotateCarouselLeftIn .8s both ease;
					}
					@-webkit-keyframes rotateCarouselLeftIn {
						from { opacity: .3; -webkit-transform: translateX(200%) scale(.4) rotateY(65deg); }
					}
					@keyframes rotateCarouselLeftIn {
						from { opacity: .3; -webkit-transform: translateX(200%) scale(.4) rotateY(65deg); transform: translateX(200%) scale(.4) rotateY(65deg); }
					}`,
					exitName: 'rotateCarouselLeftOut'
				},
				rotateCarouselRightIn: {
					value: 'Rotate carousel right in',
					enter: `.rotateCarouselRightIn {
						-webkit-transform-origin: 100% 50%;
						transform-origin: 100% 50%;
						-webkit-animation: rotateCarouselRightIn .8s both ease;
						animation: rotateCarouselRightIn .8s both ease;
					}
					@-webkit-keyframes rotateCarouselRightIn {
						from { opacity: .3; -webkit-transform: translateX(-200%) scale(.4) rotateY(-65deg); }
					}
					@keyframes rotateCarouselRightIn {
						from { opacity: .3; -webkit-transform: translateX(-200%) scale(.4) rotateY(-65deg); transform: translateX(-200%) scale(.4) rotateY(-65deg); }
					}`,
					exitName: 'rotateCarouselRightOut'
				},
				rotateCarouselTopIn: {
					value: 'Rotate carousel top in',
					enter: `.rotateCarouselTopIn {
						-webkit-transform-origin: 50% 0%;
						transform-origin: 50% 0%;
						-webkit-animation: rotateCarouselTopIn .8s both ease;
						animation: rotateCarouselTopIn .8s both ease;
					}
					@-webkit-keyframes rotateCarouselTopIn {
						from { opacity: .3; -webkit-transform: translateY(200%) scale(.4) rotateX(-65deg); }
					}
					@keyframes rotateCarouselTopIn {
						from { opacity: .3; -webkit-transform: translateY(200%) scale(.4) rotateX(-65deg); transform: translateY(200%) scale(.4) rotateX(-65deg); }
					}`,
					exitName: 'rotateCarouselTopOut'
				},
				rotateCarouselBottomIn: {
					value: 'Rotate carousel bottom in',
					enter: `.rotateCarouselBottomIn {
						-webkit-transform-origin: 50% 100%;
						transform-origin: 50% 100%;
						-webkit-animation: rotateCarouselBottomIn .8s both ease;
						animation: rotateCarouselBottomIn .8s both ease;
					}
					@-webkit-keyframes rotateCarouselBottomIn {
						from { opacity: .3; -webkit-transform: translateY(-200%) scale(.4) rotateX(65deg); }
					}
					@keyframes rotateCarouselBottomIn {
						from { opacity: .3; -webkit-transform: translateY(-200%) scale(.4) rotateX(65deg); transform: translateY(-200%) scale(.4) rotateX(65deg); }
					}`,
					exitName: 'rotateCarouselBottomOut'
				},
				rotateSidesIn: {
					value: 'Rotate sides in',
					enter: `.rotateSidesIn {
						-webkit-transform-origin: 150% 50%;
						transform-origin: 150% 50%;
						-webkit-animation: rotateSidesIn .5s both ease-out;
						animation: rotateSidesIn .5s both ease-out;
					}
					@-webkit-keyframes rotateSidesIn {
						from { opacity: 0; -webkit-transform: translateZ(-500px) rotateY(-90deg); }
					}
					@keyframes rotateSidesIn {
						from { opacity: 0; -webkit-transform: translateZ(-500px) rotateY(-90deg); transform: translateZ(-500px) rotateY(-90deg); }
					}`,
					exitName: 'rotateSidesOut'
				},
				rotateSlideIn: {
					value: 'Rotate slide in',
					enter: `.rotateSlideIn {
						-webkit-animation: rotateSlideIn 1s both ease;
						animation: rotateSlideIn 1s both ease;
					}
					@-webkit-keyframes rotateSlideIn {
						0%, 25% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(200%); }
						75% { opacity: .5; -webkit-transform: translateZ(-500px); }
						100% { opacity: 1; -webkit-transform: translateZ(0) translateX(0); }
					}
					@keyframes rotateSlideIn {
						0%, 25% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(200%); transform: translateZ(-500px) translateX(200%); }
						75% { opacity: .5; -webkit-transform: translateZ(-500px); transform: translateZ(-500px); }
						100% { opacity: 1; -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); }
					}`,
					exitName: 'rotateSlideOut'
				}
			},








			to: {
				moveToLeft: {
					value: 'Move to left',
					enter: `.moveToLeft {
						-webkit-animation: moveToLeft .6s ease both;
						animation: moveToLeft .6s ease both;
					}
					@-webkit-keyframes moveToLeft {
						from { }
						to { -webkit-transform: translateX(-100%); }
					}
					@keyframes moveToLeft {
						from { }
						to { -webkit-transform: translateX(-100%); transform: translateX(-100%); }
					}`,
					exitName: 'moveFromLeft'
				},
				moveToRight: {
					value: 'Move to right',
					enter: `.moveToRight {
						-webkit-animation: moveToRight .6s ease both;
						animation: moveToRight .6s ease both;
					}
					@-webkit-keyframes moveToRight {
						from { }
						to { -webkit-transform: translateX(100%); }
					}
					@keyframes moveToRight {
						from { }
						to { -webkit-transform: translateX(100%); transform: translateX(100%); }
					}`,
					exitName: 'moveFromRight'			
				},
				moveToTop: {
					value: 'Move to top',
					enter: `.moveToTop {
						-webkit-animation: moveToTop .6s ease both;
						animation: moveToTop .6s ease both;
					}
					@-webkit-keyframes moveToTop {
						from { }
						to { -webkit-transform: translateY(-130%); }
					}
					@keyframes moveToTop {
						from { }
						to { -webkit-transform: translateY(-130%); transform: translateY(-130%); }
					}`,
					exitName: 'moveFromTop'
				},
				moveToBottom: {
					value: 'Move to bottom',
					enter: `.moveToBottom {
						-webkit-animation: moveToBottom .6s ease both;
						animation: moveToBottom .6s ease both;
					}
					@-webkit-keyframes moveToBottom {
						from { }
						to { -webkit-transform: translateY(100%); }
					}
					@keyframes moveToBottom {
						from { }
						to { -webkit-transform: translateY(100%); transform: translateY(100%); }
					}`,
					exitName: 'moveFromBottom'
				},
				moveToLeftFade: {
					value: 'Move to left fade',
					enter: `.moveToLeftFade {
						-webkit-animation: moveToLeftFade .7s ease both;
						animation: moveToLeftFade .7s ease both;
					}
					@-webkit-keyframes moveToLeftFade {
						from { }
						to { opacity: 0.3; -webkit-transform: translateX(-100%); }
					}
					@keyframes moveToLeftFade {
						from { }
						to { opacity: 0.3; -webkit-transform: translateX(-100%); transform: translateX(-100%); }
					}`,
					exitName: 'moveFromLeftFade'
				},
				moveToRightFade: {
					value: 'Move to right fade',
					enter: `.moveToRightFade {
						-webkit-animation: moveToRightFade .7s ease both;
						animation: moveToRightFade .7s ease both;
					}
					@-webkit-keyframes moveToRightFade {
						from { }
						to { opacity: 0.3; -webkit-transform: translateX(100%); }
					}
					@keyframes moveToRightFade {
						from { }
						to { opacity: 0.3; -webkit-transform: translateX(100%); transform: translateX(100%); }
					}`,
					exitName: 'moveFromRightFade'
				},
				moveToTopFade: {
					value: 'Move to top fade',
					enter: `.moveToTopFade {
						-webkit-animation: moveToTopFade .7s ease both;
						animation: moveToTopFade .7s ease both;
					}
					@-webkit-keyframes moveToTopFade {
						from { }
						to { opacity: 0.3; -webkit-transform: translateY(-100%); }
					}
					@keyframes moveToTopFade {
						from { }
						to { opacity: 0.3; -webkit-transform: translateY(-100%); transform: translateY(-100%); }
					}`,
					exitName: 'moveFromTopFade'
				},
				moveToBottomFade: {
					value: 'Move to bottom fade',
					enter: `.moveToBottomFade {
						-webkit-animation: moveToBottomFade .7s ease both;
						animation: moveToBottomFade .7s ease both;
					}
					@-webkit-keyframes moveToBottomFade {
						from { }
						to { opacity: 0.3; -webkit-transform: translateY(100%); }
					}
					@keyframes moveToBottomFade {
						from { }
						to { opacity: 0.3; -webkit-transform: translateY(100%); transform: translateY(100%); }
					}`,
					exitName: 'moveFromBottomFade'
				},
				scaleDown: {
					value: 'Scale down',
					enter: `.scaleDown {
						-webkit-animation: scaleDown .7s ease both;
						animation: scaleDown .7s ease both;
					}
					@-webkit-keyframes scaleDown {
						from { }
						to { opacity: 0; -webkit-transform: scale(.8); }
					}
					@keyframes scaleDown {
						from { }
						to { opacity: 0; -webkit-transform: scale(.8); transform: scale(.8); }
					}`,
					exitName: 'Scale up'
				},
				scaleDownUp: {
					value: 'Scale down up',
					enter: `.scaleDownUp {
						-webkit-animation: scaleDownUp .5s ease both;
						animation: scaleDownUp .5s ease both;
					}
					@-webkit-keyframes scaleDownUp {
						from { }
						to { opacity: 0; -webkit-transform: scale(1.2); }
					}
					@keyframes scaleDownUp {
						from { }
						to { opacity: 0; -webkit-transform: scale(1.2); transform: scale(1.2); }
					}`,
					exitName: 'scaleUpDown'
				},
				scaleDownCenter: {
					value: 'Scale down center',
					enter: `.scaleDownCenter {
						-webkit-animation: scaleDownCenter .4s ease-in both;
						animation: scaleDownCenter .4s ease-in both;
					}
					@-webkit-keyframes scaleDownCenter {
						from { }
						to { opacity: 0; -webkit-transform: scale(.7); }
					}
					@keyframes scaleDownCenter {
						from { }
						to { opacity: 0; -webkit-transform: scale(.7); transform: scale(.7); }
					}`,
					exitName: 'scaleUpCenter'
				},
				rotateLeftSideFirst: {
					value: 'Rotate left side first',
					enter: `.rotateLeftSideFirst {
						-webkit-transform-origin: 100% 50%;
						transform-origin: 100% 50%;
						-webkit-animation: rotateLeftSideFirst .8s both ease-in;
						animation: rotateLeftSideFirst .8s both ease-in;
					}
					@-webkit-keyframes rotateLeftSideFirst {
						0% { }
						40% { -webkit-transform: rotateY(-15deg); opacity: .8; -webkit-animation-timing-function: ease-out; }
						100% { -webkit-transform: scale(0.8) translateZ(-200px); opacity:0; }
					}
					@keyframes rotateLeftSideFirst {
						0% { }
						40% { -webkit-transform: rotateY(-15deg); transform: rotateY(-15deg); opacity: .8; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }
						100% { -webkit-transform: scale(0.8) translateZ(-200px); transform: scale(0.8) translateZ(-200px); opacity:0; }
					}`,
					exitName: 'rotateFromCenterLeftSideFirst'
				},
				rotateRightSideFirst: {
					value: 'Rotate right side first',
					enter: `.rotateRightSideFirst {
						-webkit-transform-origin: 0% 50%;
						transform-origin: 0% 50%;
						-webkit-animation: rotateRightSideFirst .8s both ease-in;
						animation: rotateRightSideFirst .8s both ease-in;
					}
					@-webkit-keyframes rotateRightSideFirst {
						0% { }
						40% { -webkit-transform: rotateY(15deg); opacity: .8; -webkit-animation-timing-function: ease-out; }
						100% { -webkit-transform: scale(0.8) translateZ(-200px); opacity:0; }
					}
					@keyframes rotateRightSideFirst {
						0% { }
						40% { -webkit-transform: rotateY(15deg); transform: rotateY(15deg); opacity: .8; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }
						100% { -webkit-transform: scale(0.8) translateZ(-200px); transform: scale(0.8) translateZ(-200px); opacity:0; }
					}`,
					exitName: 'rotateFromCenterRightSideFirst'
				},
				rotateTopSideFirst: {
					value: 'Rotate top side first',
					enter: `.rotateTopSideFirst {
						-webkit-transform-origin: 50% 100%;
						transform-origin: 50% 100%;
						-webkit-animation: rotateTopSideFirst .8s both ease-in;
						animation: rotateTopSideFirst .8s both ease-in;
					}
					@-webkit-keyframes rotateTopSideFirst {
						0% { }
						40% { -webkit-transform: rotateX(15deg); opacity: .8; -webkit-animation-timing-function: ease-out; }
						100% { -webkit-transform: scale(0.8) translateZ(-200px); opacity:0; }
					}
					@keyframes rotateTopSideFirst {
						0% { }
						40% { -webkit-transform: rotateX(15deg); transform: rotateX(15deg); opacity: .8; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }
						100% { -webkit-transform: scale(0.8) translateZ(-200px); transform: scale(0.8) translateZ(-200px); opacity:0; }
					}`,
					exitName: 'rotateFromCenterTopSideFirst'
				},
				rotateBottomSideFirst: {
					value: 'Rotate bottom side first',
					enter: `.rotateBottomSideFirst {
						-webkit-transform-origin: 50% 0%;
						transform-origin: 50% 0%;
						-webkit-animation: rotateBottomSideFirst .8s both ease-in;
						animation: rotateBottomSideFirst .8s both ease-in;
					}
					@-webkit-keyframes rotateBottomSideFirst {
						0% { }
						40% { -webkit-transform: rotateX(-15deg); opacity: .8; -webkit-animation-timing-function: ease-out; }
						100% { -webkit-transform: scale(0.8) translateZ(-200px); opacity:0; }
					}
					@keyframes rotateBottomSideFirst {
						0% { }
						40% { -webkit-transform: rotateX(-15deg); transform: rotateX(-15deg); opacity: .8; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }
						100% { -webkit-transform: scale(0.8) translateZ(-200px); transform: scale(0.8) translateZ(-200px); opacity:0; }
					}`,
					exitName: 'rotateFromCenterBottomSideFirst'
				},
				flipOutLeft: {
					value: 'Flip out left',
					enter: `.flipOutLeft {
						-webkit-transform-origin: 50% 50%;
						transform-origin: 50% 50%;
						-webkit-animation: flipOutLeft .5s both ease-in;
						animation: flipOutLeft .5s both ease-in;
					}
					@-webkit-keyframes flipOutLeft {
						from { }
						to { -webkit-transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
					}
					@keyframes flipOutLeft {
						from { }
						to { -webkit-transform: translateZ(-1000px) rotateY(-90deg); transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
					}`,
					exitName: 'flipInLeft'
				},
				flipOutRight: {
					value: 'Flip out right',
					enter: `.flipOutRight {
						-webkit-transform-origin: 50% 50%;
						transform-origin: 50% 50%;
						-webkit-animation: flipOutRight .5s both ease-in;
						animation: flipOutRight .5s both ease-in;
					}
					@-webkit-keyframes flipOutRight {
						from { }
						to { -webkit-transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
					}
					@keyframes flipOutRight {
						from { }
						to { -webkit-transform: translateZ(-1000px) rotateY(90deg); transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
					}`,
					exitName: 'flipInRight'
				},
				flipOutTop: {
					value: 'Flip out Top',
					enter: `.flipOutTop {
						-webkit-transform-origin: 50% 50%;
						transform-origin: 50% 50%;
						-webkit-animation: flipOutTop .5s both ease-in;
						animation: flipOutTop .5s both ease-in;
					}
					@-webkit-keyframes flipOutTop {
						from { }
						to { -webkit-transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }
					}
					@keyframes flipOutTop {
						from { }
						to { -webkit-transform: translateZ(-1000px) rotateX(90deg); transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }
					}`,
					exitName: 'flipInTop'
				},
				flipOutBottom: {
					value: 'Flip out Bottom',
					enter: `.flipOutBottom {
						-webkit-transform-origin: 50% 50%;
						transform-origin: 50% 50%;
						-webkit-animation: flipOutBottom .5s both ease-in;
						animation: flipOutBottom .5s both ease-in;
					}
					@-webkit-keyframes flipOutBottom {
						from { }
						to { -webkit-transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }
					}
					@keyframes flipOutBottom {
						from { }
						to { -webkit-transform: translateZ(-1000px) rotateX(-90deg); transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }
					}`,
					exitName: 'flipInBottom'
				},
				rotateFall: {
					value: 'Rotate and fall',
					enter: `.rotateFall {
						-webkit-transform-origin: 0% 0%;
						transform-origin: 0% 0%;
						-webkit-animation: rotateFall 1s both ease-in;
						animation: rotateFall 1s both ease-in;
					}
					@-webkit-keyframes rotateFall {
						0% { -webkit-transform: rotateZ(0deg); }
						20% { -webkit-transform: rotateZ(10deg); -webkit-animation-timing-function: ease-out; }
						40% { -webkit-transform: rotateZ(17deg); }
						60% { -webkit-transform: rotateZ(16deg); }
						100% { -webkit-transform: translateY(100%) rotateZ(17deg); }
					}
					@keyframes rotateFall {
						0% { -webkit-transform: rotateZ(0deg); transform: rotateZ(0deg); }
						20% { -webkit-transform: rotateZ(10deg); transform: rotateZ(10deg); -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }
						40% { -webkit-transform: rotateZ(17deg); transform: rotateZ(17deg); }
						60% { -webkit-transform: rotateZ(16deg); transform: rotateZ(16deg); }
						100% { -webkit-transform: translateY(100%) rotateZ(17deg); transform: translateY(100%) rotateZ(17deg); }
					}`,
					exitName: 'rotateFromCenterFall'
				},
				rotateOutNewspaper: {
					value: 'Rotate in newspaper',
					enter: `.rotateOutNewspaper {
						-webkit-transform-origin: 50% 50%;
						transform-origin: 50% 50%;
						-webkit-animation: rotateOutNewspaper .5s both ease-in;
						animation: rotateOutNewspaper .5s both ease-in;
					}
					@-webkit-keyframes rotateOutNewspaper {
						from { }
						to { -webkit-transform: translateZ(-3000px) rotateZ(360deg); opacity: 0; }
					}
					@keyframes rotateOutNewspaper {
						from { }
						to { -webkit-transform: translateZ(-3000px) rotateZ(360deg); transform: translateZ(-3000px) rotateZ(360deg); opacity: 0; }
					}`,
					exitName: 'rotateInNewspaper'
				},
				rotatePushLeft: {
					value: 'Rotate push left',
					enter: `.rotatePushLeft {
						-webkit-transform-origin: 0% 50%;
						transform-origin: 0% 50%;
						-webkit-animation: rotatePushLeft .8s both ease;
						animation: rotatePushLeft .8s both ease;
					}
					@-webkit-keyframes rotatePushLeft {
						from { }
						to { opacity: 0; -webkit-transform: rotateY(90deg); }
					}
					@keyframes rotatePushLeft {
						from { }
						to { opacity: 0; -webkit-transform: rotateY(90deg); transform: rotateY(90deg); }
					}`,
					exitName: 'rotateFromCenterPushLeft'
				},
				rotatePushRight: {
					value: 'Rotate push right',
					enter: `.rotatePushRight {
						-webkit-transform-origin: 100% 50%;
						transform-origin: 100% 50%;
						-webkit-animation: rotatePushRight .8s both ease;
						animation: rotatePushRight .8s both ease;
					}
					@-webkit-keyframes rotatePushRight {
						from { }
						to { opacity: 0; -webkit-transform: rotateY(-90deg); }
					}
					@keyframes rotatePushRight {
						from { }
						to { opacity: 0; -webkit-transform: rotateY(-90deg); transform: rotateY(-90deg); }
					}`,
					exitName: 'rotateFromCenterPushRight'
				},
				rotatePushTop: {
					value: 'Rotate push top',
					enter: `.rotatePushTop {
						-webkit-transform-origin: 50% 0%;
						transform-origin: 50% 0%;
						-webkit-animation: rotatePushTop .8s both ease;
						animation: rotatePushTop .8s both ease;
					}
					@-webkit-keyframes rotatePushTop {
						from { }
						to { opacity: 0; -webkit-transform: rotateX(-90deg); }
					}
					@keyframes rotatePushTop {
						from { }
						to { opacity: 0; -webkit-transform: rotateX(-90deg); transform: rotateX(-90deg); }
					}`,
					exitName: 'rotateFromCenterPushTop'
				},
				rotatePushBottom: {
					value: 'Rotate push bottom',
					enter: `.rotatePushBottom {
						-webkit-transform-origin: 50% 100%;
						transform-origin: 50% 100%;
						-webkit-animation: rotatePushBottom .8s both ease;
						animation: rotatePushBottom .8s both ease;
					}
					@-webkit-keyframes rotatePushBottom {
						from { }
						to { opacity: 0; -webkit-transform: rotateX(90deg); }
					}
					@keyframes rotatePushBottom {
						from { }
						to { opacity: 0; -webkit-transform: rotateX(90deg); transform: rotateX(90deg); }
					}`,
					exitName: 'rotateFromCenterPushBottom'
				},
				rotateFoldLeft: {
					value: 'Rotate fold left',
					enter: `.rotateFoldLeft {
						-webkit-transform-origin: 100% 50%;
						transform-origin: 100% 50%;
						-webkit-animation: rotateFoldLeft .7s both ease;
						animation: rotateFoldLeft .7s both ease;
					}
					@-webkit-keyframes rotateFoldLeft {
						from { }
						to { opacity: 0; -webkit-transform: translateX(-100%) rotateY(-90deg); }
					}
					@keyframes rotateFoldLeft {
						from { }
						to { opacity: 0; -webkit-transform: translateX(-100%) rotateY(-90deg); transform: translateX(-100%) rotateY(-90deg); }
					}`,
					exitName: 'rotateUnfoldLeft'
				},
				rotateFoldRight: {
					value: 'Rotate fold Right',
					enter: `.rotateFoldRight {
						-webkit-transform-origin: 0% 50%;
						transform-origin: 0% 50%;
						-webkit-animation: rotateFoldRight .7s both ease;
						animation: rotateFoldRight .7s both ease;
					}
					@-webkit-keyframes rotateFoldRight {
						from { }
						to { opacity: 0; -webkit-transform: translateX(100%) rotateY(90deg); }
					}
					@keyframes rotateFoldRight {
						from { }
						to { opacity: 0; -webkit-transform: translateX(100%) rotateY(90deg); transform: translateX(100%) rotateY(90deg); }
					}`,
					exitName: 'rotateUnfoldRight'
				},
				rotateFoldTop: {
					value: 'Rotate fold top',
					enter: `.rotateFoldTop {
						-webkit-transform-origin: 50% 100%;
						transform-origin: 50% 100%;
						-webkit-animation: rotateFoldTop .7s both ease;
						animation: rotateFoldTop .7s both ease;
					}
					@-webkit-keyframes rotateFoldTop {
						from { }
						to { opacity: 0; -webkit-transform: translateY(-100%) rotateX(90deg); }
					}
					@keyframes rotateFoldTop {
						from { }
						to { opacity: 0; -webkit-transform: translateY(-100%) rotateX(90deg); transform: translateY(-100%) rotateX(90deg); }
					}`,
					exitName: 'rotateUnfoldTop'
				},
				rotateFoldBottom: {
					value: 'Rotate fold bottom',
					enter: `.rotateFoldBottom {
						-webkit-transform-origin: 50% 0%;
						transform-origin: 50% 0%;
						-webkit-animation: rotateFoldBottom .7s both ease;
						animation: rotateFoldBottom .7s both ease;
					}
					@-webkit-keyframes rotateFoldBottom {
						from { }
						to { opacity: 0; -webkit-transform: translateY(100%) rotateX(-90deg); }
					}
					@keyframes rotateFoldBottom {
						from { }
						to { opacity: 0; -webkit-transform: translateY(100%) rotateX(-90deg); transform: translateY(100%) rotateX(-90deg); }
					}`,
					exitName: 'rotateUnfoldBottom'
				},
				rotateRoomLeftOut: {
					value: 'Rotate room left out',
					enter: `.rotateRoomLeftOut {
						-webkit-transform-origin: 100% 50%;
						transform-origin: 100% 50%;
						-webkit-animation: rotateRoomLeftOut .8s both ease;
						animation: rotateRoomLeftOut .8s both ease;
					}
					@-webkit-keyframes rotateRoomLeftOut {
						from { }
						to { opacity: .3; -webkit-transform: translateX(-100%) rotateY(90deg); }
					}
					@keyframes rotateRoomLeftOut {
						from { }
						to { opacity: .3; -webkit-transform: translateX(-100%) rotateY(90deg); transform: translateX(-100%) rotateY(90deg); }
					}`,
					exitName: 'rotateRoomLeftIn'
				},
				rotateRoomRightOut: {
					value: 'Rotate room right out',
					enter: `.rotateRoomRightOut {
						-webkit-transform-origin: 0% 50%;
						transform-origin: 0% 50%;
						-webkit-animation: rotateRoomRightOut .8s both ease;
						animation: rotateRoomRightOut .8s both ease;
					}
					@-webkit-keyframes rotateRoomRightOut {
						from { }
						to { opacity: .3; -webkit-transform: translateX(100%) rotateY(-90deg); }
					}
					@keyframes rotateRoomRightOut {
						from { }
						to { opacity: .3; -webkit-transform: translateX(100%) rotateY(-90deg); transform: translateX(100%) rotateY(-90deg); }
					}`,
					exitName: 'rotateRoomRightIn'
				},
				rotateRoomTopOut: {
					value: 'Rotate room top out',
					enter: `.rotateRoomTopOut {
						-webkit-transform-origin: 50% 100%;
						transform-origin: 50% 100%;
						-webkit-animation: rotateRoomTopOut .8s both ease;
						animation: rotateRoomTopOut .8s both ease;
					}
					@-webkit-keyframes rotateRoomTopOut {
						from { }
						to { opacity: .3; -webkit-transform: translateY(-100%) rotateX(-90deg); }
					}
					@keyframes rotateRoomTopOut {
						from { }
						to { opacity: .3; -webkit-transform: translateY(-100%) rotateX(-90deg); transform: translateY(-100%) rotateX(-90deg); }
					}`,
					exitName: 'rotateRoomTopIn'
				},
				rotateRoomBottomOut: {
					value: 'Rotate room bottom out',
					enter: `.rotateRoomBottomOut {
						-webkit-transform-origin: 50% 0%;
						transform-origin: 50% 0%;
						-webkit-animation: rotateRoomBottomOut .8s both ease;
						animation: rotateRoomBottomOut .8s both ease;
					}
					@-webkit-keyframes rotateRoomBottomOut {
						from { }
						to { opacity: .3; -webkit-transform: translateY(100%) rotateX(90deg); }
					}
					@keyframes rotateRoomBottomOut {
						from { }
						to { opacity: .3; -webkit-transform: translateY(100%) rotateX(90deg); transform: translateY(100%) rotateX(90deg); }
					}`,
					exitName: 'rotateRoomBottomIn'
				},
				rotateCubeLeftOut: {
					value: 'Rotate cube left out',
					enter: `.rotateCubeLeftOut {
						-webkit-transform-origin: 100% 50%;
						transform-origin: 100% 50%;
						-webkit-animation: rotateCubeLeftOut .6s both ease-in;
						animation: rotateCubeLeftOut .6s both ease-in;
					}
					@-webkit-keyframes rotateCubeLeftOut {
						0% { }
						50% { -webkit-animation-timing-function: ease-out;  -webkit-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
						100% { opacity: .3; -webkit-transform: translateX(-100%) rotateY(-90deg); }
					}
					@keyframes rotateCubeLeftOut {
						0% { }
						50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out;  -webkit-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);  transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
						100% { opacity: .3; -webkit-transform: translateX(-100%) rotateY(-90deg); transform: translateX(-100%) rotateY(-90deg); }
					}`,
					exitName: 'rotateCubeLeftIn'
				},
				rotateCubeRightOut: {
					value: 'Rotate cube right out',
					enter: `.rotateCubeRightOut {
						-webkit-transform-origin: 0% 50%;
						transform-origin: 0% 50%;
						-webkit-animation: rotateCubeRightOut .6s both ease-in;
						animation: rotateCubeRightOut .6s both ease-in;
					}
					@-webkit-keyframes rotateCubeRightOut {
						0% { }
						50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
						100% { opacity: .3; -webkit-transform: translateX(100%) rotateY(90deg); }
					}
					@keyframes rotateCubeRightOut {
						0% { }
						50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateX(50%) translateZ(-200px) rotateY(45deg); transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
						100% { opacity: .3; -webkit-transform: translateX(100%) rotateY(90deg); transform: translateX(100%) rotateY(90deg); }
					}`,
					exitName: 'rotateCubeRightIn'
				},
				rotateCubeTopOut: {
					value: 'Rotate cube top out',
					enter: `.rotateCubeTopOut {
						-webkit-transform-origin: 50% 100%;
						transform-origin: 50% 100%;
						-webkit-animation: rotateCubeTopOut .6s both ease-in;
						animation: rotateCubeTopOut .6s both ease-in;
					}
					@-webkit-keyframes rotateCubeTopOut {
						0% { }
						50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }
						100% { opacity: .3; -webkit-transform: translateY(-100%) rotateX(90deg); }
					}
					@keyframes rotateCubeTopOut {
						0% {}
						50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateY(-50%) translateZ(-200px) rotateX(45deg); transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }
						100% { opacity: .3; -webkit-transform: translateY(-100%) rotateX(90deg); transform: translateY(-100%) rotateX(90deg); }
					}`,
					exitName: 'rotateCubeTopIn'
				},
				rotateCubeBottomOut: {
					value: 'Rotate cube bottom out',
					enter: `.rotateCubeBottomOut {
						-webkit-transform-origin: 50% 0%;
						transform-origin: 50% 0%;
						-webkit-animation: rotateCubeBottomOut .6s both ease-in;
						animation: rotateCubeBottomOut .6s both ease-in;
					}
					@-webkit-keyframes rotateCubeBottomOut {
						0% { }
						50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }
						100% { opacity: .3; -webkit-transform: translateY(100%) rotateX(-90deg); }
					}
					@keyframes rotateCubeBottomOut {
						0% { }
						50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateY(50%) translateZ(-200px) rotateX(-45deg); transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }
						100% { opacity: .3; -webkit-transform: translateY(100%) rotateX(-90deg); transform: translateY(100%) rotateX(-90deg); }
					}`,
					exitName: 'rotateCubeBottomIn'
				},
				rotateCarouselLeftOut: {
					value: 'Rotate carousel left out',
					enter: `.rotateCarouselLeftOut {
						-webkit-transform-origin: 100% 50%;
						transform-origin: 100% 50%;
						-webkit-animation: rotateCarouselLeftOut .8s both ease;
						animation: rotateCarouselLeftOut .8s both ease;
					}
					@-webkit-keyframes rotateCarouselLeftOut {
						from { }
						to { opacity: .3; -webkit-transform: translateX(-150%) scale(.4) rotateY(-65deg); }
					}
					@keyframes rotateCarouselLeftOut {
						from { }
						to { opacity: .3; -webkit-transform: translateX(-150%) scale(.4) rotateY(-65deg); transform: translateX(-150%) scale(.4) rotateY(-65deg); }
					}`,
					exitName: 'rotateCarouselLeftIn'
				},
				rotateCarouselRightOut: {
					value: 'Rotate carousel right out',
					enter: `.rotateCarouselRightOut {
						-webkit-transform-origin: 100% 50%;
						transform-origin: 100% 50%;
						-webkit-animation: rotateCarouselRightOut .8s both ease;
						animation: rotateCarouselRightOut .8s both ease;
					}
					@-webkit-keyframes rotateCarouselRightOut {
						from { }
						to { opacity: .3; -webkit-transform: translateX(200%) scale(.4) rotateY(65deg); }
					}
					@keyframes rotateCarouselRightOut {
						from { }
						to { opacity: .3; -webkit-transform: translateX(200%) scale(.4) rotateY(65deg); transform: translateX(200%) scale(.4) rotateY(65deg); }
					}`,
					exitName: 'rotateCarouselRightIn'
				},
				rotateCarouselTopOut: {
					value: 'Rotate carousel top out',
					enter: `.rotateCarouselTopOut {
						-webkit-transform-origin: 50% 100%;
						transform-origin: 50% 100%;
						-webkit-animation: rotateCarouselTopOut .8s both ease;
						animation: rotateCarouselTopOut .8s both ease;
					}
					@-webkit-keyframes rotateCarouselTopOut {
						from { }
						to { opacity: .3; -webkit-transform: translateY(-200%) scale(.4) rotateX(65deg); }
					}
					@keyframes rotateCarouselTopOut {
						from { }
						to { opacity: .3; -webkit-transform: translateY(-200%) scale(.4) rotateX(65deg); transform: translateY(-200%) scale(.4) rotateX(65deg); }
					}`,
					exitName: 'rotateCarouselTopIn'
				},
				rotateCarouselBottomOut: {
					value: 'Rotate carousel bottom out',
					enter: `.rotateCarouselBottomOut {
						-webkit-transform-origin: 50% 0%;
						transform-origin: 50% 0%;
						-webkit-animation: rotateCarouselBottomOut .8s both ease;
						animation: rotateCarouselBottomOut .8s both ease;
					}
					@-webkit-keyframes rotateCarouselBottomOut {
						from { }
						to { opacity: .3; -webkit-transform: translateY(200%) scale(.4) rotateX(-65deg); }
					}
					@keyframes rotateCarouselBottomOut {
						from { }
						to { opacity: .3; -webkit-transform: translateY(200%) scale(.4) rotateX(-65deg); transform: translateY(200%) scale(.4) rotateX(-65deg); }
					}`,
					exitName: 'rotateCarouselBottomIn'
				},
				rotateSidesOut: {
					value: 'Rotate sides out',
					enter: `.rotateSidesOut {
						-webkit-transform-origin: -50% 50%;
						transform-origin: -50% 50%;
						-webkit-animation: rotateSidesOut .5s both ease-in;
						animation: rotateSidesOut .5s both ease-in;
					}
					@-webkit-keyframes rotateSidesOut {
						from { }
						to { opacity: 0; -webkit-transform: translateZ(-500px) rotateY(90deg); }
					}
					@keyframes rotateSidesOut {
						from { }
						to { opacity: 0; -webkit-transform: translateZ(-500px) rotateY(90deg); transform: translateZ(-500px) rotateY(90deg); }
					}`,
					exitName: 'rotateSidesIn'
				},
				rotateSlideOut: {
					value: 'Rotate slide Out',
					enter: `.rotateSlideOut {
						-webkit-animation: rotateSlideOut 1s both ease;
						animation: rotateSlideOut 1s both ease;
					}
					@-webkit-keyframes rotateSlideOut {
						0% { }
						25% { opacity: .5; -webkit-transform: translateZ(-500px); }
						75% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(-200%); }
						100% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(-200%); }
					}
					@keyframes rotateSlideOut {
						0% { }
						25% { opacity: .5; -webkit-transform: translateZ(-500px); transform: translateZ(-500px); }
						75% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(-200%); transform: translateZ(-500px) translateX(-200%); }
						100% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(-200%); transform: translateZ(-500px) translateX(-200%); }
					}`,
					exitName: 'rotateSlideIn'
				}
			}
		}
	}

	get transitions () { return this._transitions }

	set transitions (newValue) { this._transitions = newValue }

	get cssColors () { return this._cssColors[ Math.floor( Math.random() * this._cssColors.length ) ] }

	set cssColors (newValue) { this._cssColors = newValue.map( cssColor => cssColor.toLowerCase() ) } 

	getCssTransition (transition) {
		const transitionData = this.transitions.from[ transition ];
		return transitionData.enter + this.transitions.to[ transitionData.exitName ].enter;
	}

	setDefaultEntrance (className) {
		return `.${className} {
		-webkit-animation: ${className} .4s ease-out both;
			animation: ${className} .4s ease-out both;
		}
		@-webkit-keyframes ${className} {
			from { opacity: 0; -webkit-transform: scale(.7); }
		}
		@keyframes ${className} {
			from { opacity: 0; -webkit-transform: scale(.7); transform: scale(.7); }
		}`;
	}
}