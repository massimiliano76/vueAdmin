webpackJsonp([5,8],{164:function(t,e,a){a(669);var n=a(16)(a(554),a(775),null,null);t.exports=n.exports},554:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(721),r=a.n(n),o=a(722),s=a.n(o),i=a(723),c=a.n(i);e.default={components:{scatter1:r.a,scatter2:s.a,scatter3:c.a}}},555:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(34),r=a.n(n);e.default={name:"scatter-1",data:function t(){var t=[[[28604,77,17096869,"Australia",1990],[31163,77.4,27662440,"Canada",1990],[1516,68,1154605773,"China",1990],[13670,74.7,10582082,"Cuba",1990],[28599,75,4986705,"Finland",1990],[29476,77.1,56943299,"France",1990],[31476,75.4,78958237,"Germany",1990],[28666,78.1,254830,"Iceland",1990],[1777,57.7,870601776,"India",1990],[29550,79.1,122249285,"Japan",1990],[2076,67.9,20194354,"North Korea",1990],[12087,72,42972254,"South Korea",1990],[24021,75.4,3397534,"New Zealand",1990],[43296,76.8,4240375,"Norway",1990],[10088,70.8,38195258,"Poland",1990],[19349,69.6,147568552,"Russia",1990],[10670,67.3,53994605,"Turkey",1990],[26424,75.7,57110117,"United Kingdom",1990],[37062,75.4,252847810,"United States",1990]],[[44056,81.8,23968973,"Australia",2015],[43294,81.7,35939927,"Canada",2015],[13334,76.9,1376048943,"China",2015],[21291,78.5,11389562,"Cuba",2015],[38923,80.8,5503457,"Finland",2015],[37599,81.9,64395345,"France",2015],[44053,81.1,80688545,"Germany",2015],[42182,82.8,329425,"Iceland",2015],[5903,66.8,1311050527,"India",2015],[36162,83.5,126573481,"Japan",2015],[1390,71.4,25155317,"North Korea",2015],[34644,80.7,50293439,"South Korea",2015],[34186,80.6,4528526,"New Zealand",2015],[64304,81.6,5210967,"Norway",2015],[24787,77.3,38611794,"Poland",2015],[23038,73.13,143456918,"Russia",2015],[19360,76.5,78665830,"Turkey",2015],[38225,81.4,64715810,"United Kingdom",2015],[53354,79.1,321773631,"United States",2015]]];return{scatter:{backgroundColor:new r.a.graphic.RadialGradient(.3,.3,.8,[{offset:0,color:"#f7f8fa"},{offset:1,color:"#cdd0d5"}]),legend:{right:10,data:["1990","2015"]},xAxis:{splitLine:{lineStyle:{type:"dashed"}}},yAxis:{splitLine:{lineStyle:{type:"dashed"}},scale:!0},series:[{name:"1990",data:t[0],type:"scatter",symbolSize:function(t){return Math.sqrt(t[2])/500},label:{emphasis:{show:!0,formatter:function(t){return t.data[3]},position:"top"}},itemStyle:{normal:{shadowBlur:10,shadowColor:"rgba(120, 36, 50, 0.5)",shadowOffsetY:5,color:new r.a.graphic.RadialGradient(.4,.3,1,[{offset:0,color:"rgb(251, 118, 123)"},{offset:1,color:"rgb(204, 46, 72)"}])}}},{name:"2015",data:t[1],type:"scatter",symbolSize:function(t){return Math.sqrt(t[2])/500},label:{emphasis:{show:!0,formatter:function(t){return t.data[3]},position:"top"}},itemStyle:{normal:{shadowBlur:10,shadowColor:"rgba(25, 100, 150, 0.5)",shadowOffsetY:5,color:new r.a.graphic.RadialGradient(.4,.3,1,[{offset:0,color:"rgb(129, 227, 238)"},{offset:1,color:"rgb(25, 183, 207)"}])}}}]}}}}},556:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(34);a.n(n);e.default={name:"scatter-2",data:function(){var t=[[1,55,9,56,.46,18,6,"良"],[2,25,11,21,.65,34,9,"优"],[3,56,7,63,.3,14,5,"良"],[4,33,7,29,.33,16,6,"优"],[5,42,24,44,.76,40,16,"优"],[6,82,58,90,1.77,68,33,"良"],[7,74,49,77,1.46,48,27,"良"],[8,78,55,80,1.29,59,29,"良"],[9,267,216,280,4.8,108,64,"重度污染"],[10,185,127,216,2.52,61,27,"中度污染"],[11,39,19,38,.57,31,15,"优"],[12,41,11,40,.43,21,7,"优"],[13,64,38,74,1.04,46,22,"良"],[14,108,79,120,1.7,75,41,"轻度污染"],[15,108,63,116,1.48,44,26,"轻度污染"],[16,33,6,29,.34,13,5,"优"],[17,94,66,110,1.54,62,31,"良"],[18,186,142,192,3.88,93,79,"中度污染"],[19,57,31,54,.96,32,14,"良"],[20,22,8,17,.48,23,10,"优"],[21,39,15,36,.61,29,13,"优"],[22,94,69,114,2.08,73,39,"良"],[23,99,73,110,2.43,76,48,"良"],[24,31,12,30,.5,32,16,"优"],[25,42,27,43,1,53,22,"优"],[26,154,117,157,3.05,92,58,"中度污染"],[27,234,185,230,4.09,123,69,"重度污染"],[28,160,120,186,2.77,91,50,"中度污染"],[29,134,96,165,2.76,83,41,"轻度污染"],[30,52,24,60,1.03,50,21,"良"],[31,46,5,49,.28,10,6,"优"]],e=[[1,26,37,27,1.163,27,13,"优"],[2,85,62,71,1.195,60,8,"良"],[3,78,38,74,1.363,37,7,"良"],[4,21,21,36,.634,40,9,"优"],[5,41,42,46,.915,81,13,"优"],[6,56,52,69,1.067,92,16,"良"],[7,64,30,28,.924,51,2,"良"],[8,55,48,74,1.236,75,26,"良"],[9,76,85,113,1.237,114,27,"良"],[10,91,81,104,1.041,56,40,"良"],[11,84,39,60,.964,25,11,"良"],[12,64,51,101,.862,58,23,"良"],[13,70,69,120,1.198,65,36,"良"],[14,77,105,178,2.549,64,16,"良"],[15,109,68,87,.996,74,29,"轻度污染"],[16,73,68,97,.905,51,34,"良"],[17,54,27,47,.592,53,12,"良"],[18,51,61,97,.811,65,19,"良"],[19,91,71,121,1.374,43,18,"良"],[20,73,102,182,2.787,44,19,"良"],[21,73,50,76,.717,31,20,"良"],[22,84,94,140,2.238,68,18,"良"],[23,93,77,104,1.165,53,7,"良"],[24,99,130,227,3.97,55,15,"良"],[25,146,84,139,1.094,40,17,"轻度污染"],[26,113,108,137,1.481,48,15,"轻度污染"],[27,81,48,62,1.619,26,3,"良"],[28,56,48,68,1.336,37,9,"良"],[29,82,92,174,3.29,0,13,"良"],[30,106,116,188,3.628,101,16,"轻度污染"],[31,118,50,0,1.383,76,11,"轻度污染"]],a=[[1,91,45,125,.82,34,23,"良"],[2,65,27,78,.86,45,29,"良"],[3,83,60,84,1.09,73,27,"良"],[4,109,81,121,1.28,68,51,"轻度污染"],[5,106,77,114,1.07,55,51,"轻度污染"],[6,109,81,121,1.28,68,51,"轻度污染"],[7,106,77,114,1.07,55,51,"轻度污染"],[8,89,65,78,.86,51,26,"良"],[9,53,33,47,.64,50,17,"良"],[10,80,55,80,1.01,75,24,"良"],[11,117,81,124,1.03,45,24,"轻度污染"],[12,99,71,142,1.1,62,42,"良"],[13,95,69,130,1.28,74,50,"良"],[14,116,87,131,1.47,84,40,"轻度污染"],[15,108,80,121,1.3,85,37,"轻度污染"],[16,134,83,167,1.16,57,43,"轻度污染"],[17,79,43,107,1.05,59,37,"良"],[18,71,46,89,.86,64,25,"良"],[19,97,71,113,1.17,88,31,"良"],[20,84,57,91,.85,55,31,"良"],[21,87,63,101,.9,56,41,"良"],[22,104,77,119,1.09,73,48,"轻度污染"],[23,87,62,100,1,72,28,"良"],[24,168,128,172,1.49,97,56,"中度污染"],[25,65,45,51,.74,39,17,"良"],[26,39,24,38,.61,47,17,"优"],[27,39,24,39,.59,50,19,"优"],[28,93,68,96,1.05,79,29,"良"],[29,188,143,197,1.66,99,51,"中度污染"],[30,174,131,174,1.55,108,50,"中度污染"],[31,187,143,201,1.39,89,53,"中度污染"]],n=[{name:"date",index:0,text:"日"},{name:"AQIindex",index:1,text:"AQI指数"},{name:"PM25",index:2,text:"PM2.5"},{name:"PM10",index:3,text:"PM10"},{name:"CO",index:4,text:"一氧化碳（CO）"},{name:"NO2",index:5,text:"二氧化氮（NO2）"},{name:"SO2",index:6,text:"二氧化硫（SO2）"}],r={normal:{opacity:.8,shadowBlur:10,shadowOffsetX:0,shadowOffsetY:0,shadowColor:"rgba(0, 0, 0, 0.5)"}};return{scatter:{backgroundColor:"#404a59",color:["#dd4444","#fec42c","#80F1BE"],legend:{y:"top",data:["北京","上海","广州"],textStyle:{color:"#fff",fontSize:16}},grid:{x:"10%",x2:150,y:"18%",y2:"10%"},tooltip:{padding:10,backgroundColor:"#222",borderColor:"#777",borderWidth:1,formatter:function(t){var e=t.value;return'<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'+t.seriesName+" "+e[0]+"日："+e[7]+"</div>"+n[1].text+"："+e[1]+"<br>"+n[2].text+"："+e[2]+"<br>"+n[3].text+"："+e[3]+"<br>"+n[4].text+"："+e[4]+"<br>"+n[5].text+"："+e[5]+"<br>"+n[6].text+"："+e[6]+"<br>"}},xAxis:{type:"value",name:"日期",nameGap:16,nameTextStyle:{color:"#fff",fontSize:14},max:31,splitLine:{show:!1},axisLine:{lineStyle:{color:"#eee"}}},yAxis:{type:"value",name:"AQI指数",nameLocation:"end",nameGap:20,nameTextStyle:{color:"#fff",fontSize:16},axisLine:{lineStyle:{color:"#eee"}},splitLine:{show:!1}},visualMap:[{left:"right",top:"10%",dimension:2,min:0,max:250,itemWidth:30,itemHeight:120,calculable:!0,precision:.1,text:["圆形大小：PM2.5"],textGap:30,textStyle:{color:"#fff"},inRange:{symbolSize:[10,70]},outOfRange:{symbolSize:[10,70],color:["rgba(255,255,255,.2)"]},controller:{inRange:{color:["#c23531"]},outOfRange:{color:["#444"]}}},{left:"right",bottom:"5%",dimension:6,min:0,max:50,itemHeight:120,calculable:!0,precision:.1,text:["明暗：二氧化硫"],textGap:30,textStyle:{color:"#fff"},inRange:{colorLightness:[1,.5]},outOfRange:{color:["rgba(255,255,255,.2)"]},controller:{inRange:{color:["#c23531"]},outOfRange:{color:["#444"]}}}],series:[{name:"北京",type:"scatter",itemStyle:r,data:t},{name:"上海",type:"scatter",itemStyle:r,data:a},{name:"广州",type:"scatter",itemStyle:r,data:e}]}}}}},557:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(34);a.n(n);e.default={name:"scatter-3",data:function(){var t=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]],e={animation:!1,label:{normal:{formatter:"y = 0.5 * x + 3",textStyle:{align:"right"}}},lineStyle:{normal:{type:"solid"}},tooltip:{formatter:"y = 0.5 * x + 3"},data:[[{coord:[0,3],symbol:"none"},{coord:[20,13],symbol:"none"}]]};return{scatter:{grid:[{x:"7%",y:"7%",width:"38%",height:"38%"},{x2:"7%",y:"7%",width:"38%",height:"38%"},{x:"7%",y2:"7%",width:"38%",height:"38%"},{x2:"7%",y2:"7%",width:"38%",height:"38%"}],tooltip:{formatter:"Group {a}: ({c})"},xAxis:[{gridIndex:0,min:0,max:20},{gridIndex:1,min:0,max:20},{gridIndex:2,min:0,max:20},{gridIndex:3,min:0,max:20}],yAxis:[{gridIndex:0,min:0,max:15},{gridIndex:1,min:0,max:15},{gridIndex:2,min:0,max:15},{gridIndex:3,min:0,max:15}],series:[{name:"I",type:"scatter",xAxisIndex:0,yAxisIndex:0,data:t[0],markLine:e},{name:"II",type:"scatter",xAxisIndex:1,yAxisIndex:1,data:t[1],markLine:e},{name:"III",type:"scatter",xAxisIndex:2,yAxisIndex:2,data:t[2],markLine:e},{name:"IV",type:"scatter",xAxisIndex:3,yAxisIndex:3,data:t[3],markLine:e}]}}}}},613:function(t,e,a){e=t.exports=a(535)(),e.push([t.i,"\n.echarts {\n  width: 100% !important;\n  height: 100% !important;\n}\n.scatterGrid {\n  color: #fff;\n  height: 540px;\n  background-color: rgba(255, 255, 255, 0.1);\n  border: 0;\n  border-radius: 7px;\n  position: relative;\n  margin-bottom: 24px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n}\n.scatterGrid:hover {\n    box-shadow: 0px 0px 10px #00abff;\n}\n.scatterGrid .scatterHeader {\n    font-size: 16px;\n    background-color: transparent;\n    padding: 14px 22px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n    height: 44px;\n    color: #fff;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.scatterGrid h4.scatterTitle {\n    margin: 0;\n    text-transform: uppercase;\n    font-weight: 400;\n    opacity: 0.9;\n    color: #fff;\n    text-align: left;\n}\n.scatterGrid .scatterContent {\n    height: calc(100% - 44px);\n}\n","",{version:3,sources:["/./src/views/charts/scatter.vue"],names:[],mappings:";AACA;EACE,uBAAuB;EACvB,wBAAwB;CACzB;AACD;EACE,YAAY;EACZ,cAAc;EACd,2CAA2C;EAC3C,UAAU;EACV,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;EACpB,4CAA4C;CAC7C;AACD;IACI,iCAAiC;CACpC;AACD;IACI,gBAAgB;IAChB,8BAA8B;IAC9B,mBAAmB;IACnB,kDAAkD;IAClD,aAAa;IACb,YAAY;IACZ,6BAA6B;IAC7B,8BAA8B;CACjC;AACD;IACI,UAAU;IACV,0BAA0B;IAC1B,iBAAiB;IACjB,aAAa;IACb,YAAY;IACZ,iBAAiB;CACpB;AACD;IACI,0BAA0B;CAC7B",file:"scatter.vue",sourcesContent:["\n.echarts {\n  width: 100% !important;\n  height: 100% !important;\n}\n.scatterGrid {\n  color: #fff;\n  height: 540px;\n  background-color: rgba(255, 255, 255, 0.1);\n  border: 0;\n  border-radius: 7px;\n  position: relative;\n  margin-bottom: 24px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n}\n.scatterGrid:hover {\n    box-shadow: 0px 0px 10px #00abff;\n}\n.scatterGrid .scatterHeader {\n    font-size: 16px;\n    background-color: transparent;\n    padding: 14px 22px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n    height: 44px;\n    color: #fff;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.scatterGrid h4.scatterTitle {\n    margin: 0;\n    text-transform: uppercase;\n    font-weight: 400;\n    opacity: 0.9;\n    color: #fff;\n    text-align: left;\n}\n.scatterGrid .scatterContent {\n    height: calc(100% - 44px);\n}\n"],sourceRoot:"webpack://"}])},622:function(t,e,a){e=t.exports=a(535)(),e.push([t.i,"\n.scatter-3 {\n  width: 100%;\n  height: 100%;\n}\n","",{version:3,sources:["/./src/views/charts/scatter/scatter-3.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,aAAa;CACd",file:"scatter-3.vue",sourcesContent:["\n.scatter-3 {\n  width: 100%;\n  height: 100%;\n}\n"],sourceRoot:"webpack://"}])},623:function(t,e,a){e=t.exports=a(535)(),e.push([t.i,"\n.scatter-2 {\n  width: 100%;\n  height: 100%;\n}\n","",{version:3,sources:["/./src/views/charts/scatter/scatter-2.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,aAAa;CACd",file:"scatter-2.vue",sourcesContent:["\n.scatter-2 {\n  width: 100%;\n  height: 100%;\n}\n"],sourceRoot:"webpack://"}])},624:function(t,e,a){e=t.exports=a(535)(),e.push([t.i,"\n.scatter-1 {\n  width: 100%;\n  height: 100%;\n}\n","",{version:3,sources:["/./src/views/charts/scatter/scatter-1.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,aAAa;CACd",file:"scatter-1.vue",sourcesContent:["\n.scatter-1 {\n  width: 100%;\n  height: 100%;\n}\n"],sourceRoot:"webpack://"}])},669:function(t,e,a){var n=a(613);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(536)("0d99aea2",n,!0)},678:function(t,e,a){var n=a(622);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(536)("454b3068",n,!0)},679:function(t,e,a){var n=a(623);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(536)("b58ca476",n,!0)},680:function(t,e,a){var n=a(624);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(536)("41ce573d",n,!0)},721:function(t,e,a){a(680);var n=a(16)(a(555),a(786),null,null);t.exports=n.exports},722:function(t,e,a){a(679);var n=a(16)(a(556),a(785),null,null);t.exports=n.exports},723:function(t,e,a){a(678);var n=a(16)(a(557),a(784),null,null);t.exports=n.exports},775:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"scatterPanel"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{lg:12}},[a("div",{staticClass:"scatterGrid"},[a("div",{staticClass:"scatterHeader"},[a("h4",{staticClass:"scatterTitle"},[t._v("\n            1990 与 2015 年各国家人均寿命与 GDP\n          ")])]),t._v(" "),a("div",{staticClass:"scatterContent"},[a("scatter1")],1)])]),t._v(" "),a("el-col",{attrs:{lg:12}},[a("div",{staticClass:"scatterGrid"},[a("div",{staticClass:"scatterHeader"},[a("h4",{staticClass:"scatterTitle"},[t._v("\n            空气质量指数\n          ")])]),t._v(" "),a("div",{staticClass:"scatterContent"},[a("scatter2")],1)])]),t._v(" "),a("el-col",{attrs:{lg:12}},[a("div",{staticClass:"scatterGrid"},[a("div",{staticClass:"scatterHeader"},[a("h4",{staticClass:"scatterTitle"},[t._v("\n            Anscombe's quartet\n          ")])]),t._v(" "),a("div",{staticClass:"scatterContent"},[a("scatter3")],1)])])],1)],1)},staticRenderFns:[]}},784:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"scatter-3"},[a("chart",{attrs:{options:t.scatter}})],1)},staticRenderFns:[]}},785:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"scatter-2"},[a("chart",{attrs:{options:t.scatter}})],1)},staticRenderFns:[]}},786:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"scatter-1"},[a("chart",{attrs:{options:t.scatter}})],1)},staticRenderFns:[]}}});