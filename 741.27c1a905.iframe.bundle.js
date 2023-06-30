/*! For license information please see 741.27c1a905.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_content_generators_ui_components=self.webpackChunk_content_generators_ui_components||[]).push([[741],{"./src/components/HandWriting/HandWriting.component.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>HandWriting_component});var react=__webpack_require__("./node_modules/react/index.js");const vara=class Vara{constructor(elem,fontSource,text,properties){var _this=this;this.elementName=elem,this.textsInit=[],"string"==typeof text?this.textsInit.push({text}):"object"==typeof text&&(this.textsInit=text),this.texts=this.textsInit,this.properties=properties||{},this.properties.textAlign=this.properties.textAlign||"left",this.letterSpacing=0,this.element=document.querySelector(this.elementName),this.fontSource=fontSource,this.characters={},this.drawnCharacters={},this.totalPathLength=0,this.fontSize=24,this.frameRate=1e3/30,this.prevDuration=0,this.completed=!1,this.ready=function(f){_this.readyF=f},this.animationEnd=function(f){_this.animationEndF=f},this.svg=this.createNode("svg",{width:"100%"}),this.element.hasChildNodes()?this.element.replaceChild(this.svg,this.element.childNodes[0]):this.element.appendChild(this.svg),this.font=document.createElement("object"),this.getSVGData()}createNode(n,v){for(var p in n=document.createElementNS("http://www.w3.org/2000/svg",n),v)n.setAttributeNS(null,p.replace(/[A-Z]/g,(function(m,p,o,s){return"-"+m.toLowerCase()})),v[p]);return n}getSVGData(){var _this=this,xmlhttp=new XMLHttpRequest;xmlhttp.open("GET",this.fontSource,!0),xmlhttp.onreadystatechange=function(){4==xmlhttp.readyState&&200==xmlhttp.status&&(_this.contents=JSON.parse(xmlhttp.responseText),_this.characters=JSON.parse(xmlhttp.responseText).c,_this.preCreate(),_this.createText())},xmlhttp.send(null)}preCreate(){!function(){if("function"==typeof NodeList.prototype.forEach)return!1;NodeList.prototype.forEach=Array.prototype.forEach}(),this.questionMark=null==this.characters[63]?{paths:[{w:8.643798828125,h:14.231731414794922,my:22.666500004827977,mx:0,pw:28.2464542388916,d:"m 0,0 c -2,-6.01,5,-8.64,8,-3.98,2,4.09,-7,8.57,-7,11.85"},{w:1.103759765625,h:1.549820899963379,my:8.881500004827977,mx:1,pw:4.466640472412109,d:"m 0,0 a 0.7592,0.7357,0,0,1,0,0.735,0.7592,0.7357,0,0,1,-1,-0.735,0.7592,0.7357,0,0,1,1,-0.738,0.7592,0.7357,0,0,1,0,0.738 z"}],w:8.643798828125}:this.characters[63],this.space={paths:[{d:"M0,0 l"+this.contents.p.space+" 0",mx:0,my:0,w:this.contents.p.space,h:0}],w:this.contents.p.space};for(var widthAnalysis=this.analyseWidth(),k=0;k<this.texts.length;k++){for(var alteredText=[],textArray=("string"==typeof this.texts[k]?{text:this.texts[k]}:this.texts[k]).text,x=0;x<textArray.length;x++){var text=textArray[x];if(widthAnalysis.breakPoints[k][x].length>0)for(var newText,len=widthAnalysis.breakPoints[k][x].length,j=0;j<=len;j++){var pos=widthAnalysis.breakPoints[k][x][j];widthAnalysis.breakPoints[k][x][len-1]!=text.length&&widthAnalysis.breakPoints[k][x].push(text.length);var prev=null==widthAnalysis.breakPoints[k][x][j-1]?0:widthAnalysis.breakPoints[k][x][j-1];newText=text.slice(prev,pos).replace(/^\s+/g,""),alteredText.push(newText)}else alteredText.push(textArray[x])}this.texts[k].text=alteredText}}createText(){var fontSize,_this=this,containerGroup=this.svg,correction=0,lho=0,lineHeight=null==this.properties.lineHeight?this.contents.p.lh:this.properties.lineHeight;this.properties.autoAnimation=null==this.properties.autoAnimation||this.properties.autoAnimation;for(var prevOuterHeight=0,incrementOuterHeight=!0,j=0;j<this.texts.length;j++){var drawnPart=[],lhi=0;fontSize=this.texts[j].fontSize;var bsw=this.texts[j].strokeWidth,color=null==this.texts[j].color?null==this.properties.color?"black":this.properties.color:this.texts[j].color,duration=null==this.texts[j].duration?null==this.properties.duration?2e3:this.properties.duration:this.texts[j].duration;this.texts[j].duration=duration;var id=null==this.texts[j].id?j:this.texts[j].id;this.texts[j].delay=null==this.texts[j].delay?0:this.texts[j].delay,this.prevDuration+=this.texts[j].delay,null==this.texts[j].fromCurrentPosition&&(this.texts[j].fromCurrentPosition={x:!0,y:!0}),incrementOuterHeight=null==this.texts[j].y||!(null!=this.texts[j].fromCurrentPosition.y&&!this.texts[j].fromCurrentPosition.y);var tc=color,textAlign=null==this.texts[j].textAlign?this.properties.textAlign:this.texts[j].textAlign;lineHeight=null==this.texts[j].lineHeight?lineHeight:this.texts[j].lineHeight/fontSize;var outerLayer=this.createNode("g",{class:"outer",transform:"translate(0,0)","data-text":this.texts[j].text});containerGroup.appendChild(outerLayer),lho=prevOuterHeight;for(var ph=0,x=0;x<this.texts[j].text.length;x++){var cWidth=0,fg=this.createNode("g");outerLayer.appendChild(fg);for(var largestHeight=0,lFH=0,i=0;i<this.texts[j].text[x].length;i++){var text=this.texts[j].text[x][i],cGroup=this.createNode("g");fg.appendChild(cGroup);correction=0;var paths=null!=this.characters[text.charCodeAt(0)]||" "==text?" "==text?this.space.paths:this.characters[text.charCodeAt(0)].paths:this.questionMark.paths;color=" "==text?"transparent":tc,paths.forEach((function(e,ei){var path=_this.createNode("path",{d:e.d,"stroke-width":bsw,stroke:color,fill:"none","stroke-linecap":_this.contents.p.slc,"stroke-linejoin":_this.contents.p.slj});cGroup.appendChild(path),path.setAttribute("transform","translate("+e.mx+","+-e.my+")"),largestHeight=largestHeight>e.my-path.getBBox().y?largestHeight:e.my-path.getBBox().y,0==ei&&(lFH=largestHeight),path.style.opacity=0,path.style.strokeDasharray=path.getTotalLength()+" "+(path.getTotalLength()+2),path.style.strokeDashoffset=path.getTotalLength()+1})),drawnPart.push(cGroup);correction=cGroup.getBBox().x*fontSize;var letterSpacing=this.texts[j].letterSpacing;"object"==typeof letterSpacing&&(letterSpacing=void 0===letterSpacing[text]?void 0===letterSpacing.global?0:letterSpacing.global:letterSpacing[text]),cGroup.getBBox().width<this.texts[j].minWidth&&(correction-=(this.texts[j].minWidth-cGroup.getBBox().width)/2),cGroup.setAttribute("transform","translate("+(cWidth-correction+letterSpacing)+",0)  scale("+fontSize+")"),cWidth+=cGroup.getBBox().width*fontSize+letterSpacing,cGroup.getBBox().width<this.texts[j].minWidth&&(cWidth+=this.texts[j].minWidth-cGroup.getBBox().width)}var fgBox=fg.getBBox();fg.setAttribute("transform","translate("+bsw*fontSize+","+(-fgBox.y+bsw*fontSize)+")");var alignX=0;"center"==textAlign?alignX=(this.svg.getBoundingClientRect().width-fgBox.width)/2:"right"==textAlign&&(alignX=this.svg.getBoundingClientRect().width-fgBox.width),this.setPosition(fg,{x:alignX,y:lhi+this.contents.p.tf*fontSize-largestHeight}),lhi+=lineHeight*fontSize,ph+=this.contents.p.tf*fontSize+(this.contents.p.tf*fontSize-lFH)}null!=this.texts[j].y&&1!=this.texts[j].fromCurrentPosition.y||this.setPosition(outerLayer,{y:lho}),null!=this.texts[j].fromCurrentPosition&&this.texts[j].fromCurrentPosition.y&&(prevOuterHeight+=null==this.texts[j].y?0:this.texts[j].y),this.setPosition(outerLayer,{x:this.texts[j].x,y:this.texts[j].y},this.texts[j].fromCurrentPosition),incrementOuterHeight&&(prevOuterHeight+=ph),null!=this.drawnCharacters[id]&&(id=j),this.drawnCharacters[id]={characters:drawnPart,queued:this.texts[j].queued,container:outerLayer,index:j},(null==this.texts[j].autoAnimation||this.texts[j].autoAnimation)&&this.properties.autoAnimation&&(_this.draw(id,duration),(null==this.texts[j].queued||this.texts[j].queued)&&(_this.prevDuration+=duration))}this.completed=!0,this.svg.setAttribute("height",this.svg.getBBox().height+this.svg.getBBox().y+10),this.readyF&&this.readyF()}playAll(){this.prevDuration=0;for(var j=0;j<this.texts.length;j++){var duration=this.texts[j].duration,id=null==this.texts[j].id?j:this.texts[j].id;this.prevDuration+=this.texts[j].delay,this.draw(id,duration),(null==this.texts[j].queued||this.texts[j].queued)&&(this.prevDuration+=duration)}}draw(id,dur){var _this=this;if(null==this.drawnCharacters[id])return console.warn("ID:`"+id+"` not found. Animation skipped"),void console.trace();var duration=void 0===dur?this.texts[this.drawnCharacters[id].index].duration:dur,pathLength=this.getSectionPathLength(id),delay=0,timeOut=null==this.drawnCharacters[id].queued||this.drawnCharacters[id].queued?this.prevDuration:1;setTimeout((function(){_this.drawnCharacters[id].characters.forEach((function(i){i.querySelectorAll("path").forEach((function(j){var currentDuration=parseFloat(j.style.strokeDashoffset)/pathLength*duration;j.style.opacity=1,_this.animate(j,currentDuration,delay,0),delay+=currentDuration}))})),setTimeout((function(){_this.animationEndF&&_this.animationEndF(id,_this.drawnCharacters[id])}),delay)}),timeOut)}get(id){return null==this.drawnCharacters[id]?(console.warn("ID:`"+id+"` not found."),console.trace(),!1):this.drawnCharacters[id]}animate(elem,duration,delay,final){var _this=this;final=Number(final)||0,setTimeout((function(){var start=(new Date).getTime(),initial=parseFloat(elem.style.strokeDashoffset),timer=setInterval((function(){var step=Math.min(1,((new Date).getTime()-start)/duration);elem.style.strokeDashoffset=initial+step*(final-initial),1==step&&clearInterval(timer)}),_this.frameRate)}),delay)}getSectionPathLength(id){var _this=this;return this.totalPathLength=0,this.drawnCharacters[id].characters.forEach((function(i){i.querySelectorAll("path").forEach((function(j){_this.totalPathLength+=j.getTotalLength()}))})),this.totalPathLength}analyseWidth(){var width=0,canvasOriginalWidth=this.svg.getBoundingClientRect().width,breakPoints=[],baseLetter=null==this.characters[97]?Object.keys(this.characters)[Math.round(Math.random()*Object.keys(this.characters).length-1)]:"97",baseFont=document.createElement("span");this.element.appendChild(baseFont),baseFont.style.opacity=0,baseFont.style.position="absolute",baseFont.innerHTML=String.fromCharCode(baseLetter);var dot=document.createElement("span");this.element.appendChild(dot),dot.style.opacity=0,dot.style.position="absolute",dot.innerHTML=" . ";for(var j=0;j<this.texts.length;j++){var textArray,textObj=this.texts[j];textArray="string"==typeof textObj.text?[textObj.text]:textObj.text,this.texts[j].text=textArray,this.texts[j].letterSpacing=null==this.texts[j].letterSpacing?null==this.properties.letterSpacing?0:this.properties.letterSpacing:this.texts[j].letterSpacing,this.texts[j].strokeWidth=null==this.texts[j].strokeWidth?null==this.properties.strokeWidth?this.contents.p.bsw:this.properties.strokeWidth:this.texts[j].strokeWidth;var breakWord=null==this.texts[j].breakWord?null!=this.properties.breakWord&&this.properties.breakWord:this.texts[j].breakWord,fontSize=null==textObj.fontSize?null==this.properties.fontSize?this.fontSize:this.properties.fontSize:textObj.fontSize;baseFont.style.fontSize=fontSize+"px",dot.style.fontSize=fontSize+"px";var scale=baseFont.getBoundingClientRect().width/this.characters[baseLetter].w;this.texts[j].minWidth=dot.getBoundingClientRect().width;var increment,canvasWidth=null==this.texts[j].width?canvasOriginalWidth:this.texts[j].width,bp1=[],inx=null==this.texts[j].x?0:this.texts[j].x;this.trueFontSize=fontSize,this.texts[j].fontSize=scale;for(var letterSpacing=this.texts[j].letterSpacing,x=0;x<textArray.length;x++){for(var lWidth=inx,bp2=[],text=textArray[x],lastSpace=0,i=0;i<text.length;i++)if("object"==typeof letterSpacing&&"object"==typeof letterSpacing&&(letterSpacing=void 0===letterSpacing[text]?void 0===letterSpacing.global?0:letterSpacing.global:letterSpacing[text]),null!=this.characters[text[i].charCodeAt(0)]?((increment=this.characters[text[i].charCodeAt(0)].w*scale)<this.texts[j].minWidth&&(increment+=scale*(this.texts[j].minWidth-this.characters[text[i].charCodeAt(0)].w)/2),increment+=letterSpacing):" "==text[i]?(increment=this.space.w*scale,lastSpace=lWidth):increment=this.questionMark.w*scale+letterSpacing,lWidth+(increment+=this.texts[j].strokeWidth*scale)>=canvasWidth){0==lastSpace&&(breakWord=!0);var pos=i;" "==text[i]||breakWord||(pos=text.slice(0,pos+1).search(/\S+$/)),bp2.push(pos),lWidth=inx+lWidth-lastSpace}else width+=increment,lWidth+=increment;bp1.push(bp2)}breakPoints.push(bp1)}return baseFont.parentNode.removeChild(baseFont),dot.parentNode.removeChild(dot),{width,breakPoints}}setPosition(e,obj,relative){(relative=null==relative?{x:!1,y:!1}:relative).x=null!=relative.x&&relative.x,relative.y=null!=relative.y&&relative.y;var p=e.transform.baseVal.consolidate().matrix,x=p.e,y=p.f;null!=obj.x&&(relative.x?x+=obj.x:x=obj.x),null!=obj.y&&(relative.y?y+=obj.y:y=obj.y-e.getBBox().y);var translate=this.svg.createSVGTransform();translate.setTranslate(x,y),e.transform.baseVal.replaceItem(translate,0)}},UiComponentContext=(0,react.createContext)({staticFilePath:"public"});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const fonts=["PacificoSLO.json","Parisienne.json","SatisfySL.json","shadows-into-light.json"],HandWriting=({word,id,fontNum=0,options={fontSize:30,letterSpacing:12,color:"black"}})=>{const{staticFilePath}=(0,react.useContext)(UiComponentContext);return(0,react.useEffect)((()=>{new vara(`#${id}`,`${staticFilePath}/vara-fonts/${fonts[fontNum]}`,[{text:word}],options)}),[word,id,fontNum,options]),(0,jsx_runtime.jsx)("span",{id})};HandWriting.displayName="HandWriting";const HandWriting_component=HandWriting},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);