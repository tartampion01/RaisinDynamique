//----------------------------------------------------------
// Copyright (C) Microsoft Corporation. All rights reserved.
//----------------------------------------------------------
// MicrosoftAjax.js
Function.__typeName="Function";Function.__class=true;Function.createCallback=function(b,a){return function(){var e=arguments.length;if(e>0){var d=[];for(var c=0;c<e;c++)d[c]=arguments[c];d[e]=a;return b.apply(this,d)}return b.call(this,a)}};Function.createDelegate=function(a,b){return function(){return b.apply(a,arguments)}};Function.emptyFunction=Function.emptyMethod=function(){};Function.validateParameters=function(c,b,a){return Function._validateParams(c,b,a)};Function._validateParams=function(g,e,c){var a,d=e.length;c=c||typeof c==="undefined";a=Function._validateParameterCount(g,e,c);if(a){a.popStackFrame();return a}for(var b=0,i=g.length;b<i;b++){var f=e[Math.min(b,d-1)],h=f.name;if(f.parameterArray)h+="["+(b-d+1)+"]";else if(!c&&b>=d)break;a=Function._validateParameter(g[b],f,h);if(a){a.popStackFrame();return a}}return null};Function._validateParameterCount=function(j,d,i){var a,c,b=d.length,e=j.length;if(e<b){var f=b;for(a=0;a<b;a++){var g=d[a];if(g.optional||g.parameterArray)f--}if(e<f)c=true}else if(i&&e>b){c=true;for(a=0;a<b;a++)if(d[a].parameterArray){c=false;break}}if(c){var h=Error.parameterCount();h.popStackFrame();return h}return null};Function._validateParameter=function(c,a,h){var b,g=a.type,l=!!a.integer,k=!!a.domElement,m=!!a.mayBeNull;b=Function._validateParameterType(c,g,l,k,m,h);if(b){b.popStackFrame();return b}var e=a.elementType,f=!!a.elementMayBeNull;if(g===Array&&typeof c!=="undefined"&&c!==null&&(e||!f)){var j=!!a.elementInteger,i=!!a.elementDomElement;for(var d=0;d<c.length;d++){var n=c[d];b=Function._validateParameterType(n,e,j,i,f,h+"["+d+"]");if(b){b.popStackFrame();return b}}}return null};Function._validateParameterType=function(b,c,k,j,h,d){var a,g;if(typeof b==="undefined")if(h)return null;else{a=Error.argumentUndefined(d);a.popStackFrame();return a}if(b===null)if(h)return null;else{a=Error.argumentNull(d);a.popStackFrame();return a}if(c&&c.__enum){if(typeof b!=="number"){a=Error.argumentType(d,Object.getType(b),c);a.popStackFrame();return a}if(b%1===0){var e=c.prototype;if(!c.__flags||b===0){for(g in e)if(e[g]===b)return null}else{var i=b;for(g in e){var f=e[g];if(f===0)continue;if((f&b)===f)i-=f;if(i===0)return null}}}a=Error.argumentOutOfRange(d,b,String.format(Sys.Res.enumInvalidValue,b,c.getName()));a.popStackFrame();return a}if(j&&(!Sys._isDomElement(b)||b.nodeType===3)){a=Error.argument(d,Sys.Res.argumentDomElement);a.popStackFrame();return a}if(c&&!Sys._isInstanceOfType(c,b)){a=Error.argumentType(d,Object.getType(b),c);a.popStackFrame();return a}if(c===Number&&k)if(b%1!==0){a=Error.argumentOutOfRange(d,b,Sys.Res.argumentInteger);a.popStackFrame();return a}return null};Error.__typeName="Error";Error.__class=true;Error.create=function(d,b){var a=new Error(d);a.message=d;if(b)for(var c in b)a[c]=b[c];a.popStackFrame();return a};Error.argument=function(a,c){var b="Sys.ArgumentException: "+(c?c:Sys.Res.argument);if(a)b+="\n"+String.format(Sys.Res.paramName,a);var d=Error.create(b,{name:"Sys.ArgumentException",paramName:a});d.popStackFrame();return d};Error.argumentNull=function(a,c){var b="Sys.ArgumentNullException: "+(c?c:Sys.Res.argumentNull);if(a)b+="\n"+String.format(Sys.Res.paramName,a);var d=Error.create(b,{name:"Sys.ArgumentNullException",paramName:a});d.popStackFrame();return d};Error.argumentOutOfRange=function(c,a,d){var b="Sys.ArgumentOutOfRangeException: "+(d?d:Sys.Res.argumentOutOfRange);if(c)b+="\n"+String.format(Sys.Res.paramName,c);if(typeof a!=="undefined"&&a!==null)b+="\n"+String.format(Sys.Res.actualValue,a);var e=Error.create(b,{name:"Sys.ArgumentOutOfRangeException",paramName:c,actualValue:a});e.popStackFrame();return e};Error.argumentType=function(d,c,b,e){var a="Sys.ArgumentTypeException: ";if(e)a+=e;else if(c&&b)a+=String.format(Sys.Res.argumentTypeWithTypes,c.getName(),b.getName());else a+=Sys.Res.argumentType;if(d)a+="\n"+String.format(Sys.Res.paramName,d);var f=Error.create(a,{name:"Sys.ArgumentTypeException",paramName:d,actualType:c,expectedType:b});f.popStackFrame();return f};Error.argumentUndefined=function(a,c){var b="Sys.ArgumentUndefinedException: "+(c?c:Sys.Res.argumentUndefined);if(a)b+="\n"+String.format(Sys.Res.paramName,a);var d=Error.create(b,{name:"Sys.ArgumentUndefinedException",paramName:a});d.popStackFrame();return d};Error.format=function(a){var c="Sys.FormatException: "+(a?a:Sys.Res.format),b=Error.create(c,{name:"Sys.FormatException"});b.popStackFrame();return b};Error.invalidOperation=function(a){var c="Sys.InvalidOperationException: "+(a?a:Sys.Res.invalidOperation),b=Error.create(c,{name:"Sys.InvalidOperationException"});b.popStackFrame();return b};Error.notImplemented=function(a){var c="Sys.NotImplementedException: "+(a?a:Sys.Res.notImplemented),b=Error.create(c,{name:"Sys.NotImplementedException"});b.popStackFrame();return b};Error.parameterCount=function(a){var c="Sys.ParameterCountException: "+(a?a:Sys.Res.parameterCount),b=Error.create(c,{name:"Sys.ParameterCountException"});b.popStackFrame();return b};Error.prototype.popStackFrame=function(){if(typeof this.stack==="undefined"||this.stack===null||typeof this.fileName==="undefined"||this.fileName===null||typeof this.lineNumber==="undefined"||this.lineNumber===null)return;var a=this.stack.split("\n"),c=a[0],e=this.fileName+":"+this.lineNumber;while(typeof c!=="undefined"&&c!==null&&c.indexOf(e)===-1){a.shift();c=a[0]}var d=a[1];if(typeof d==="undefined"||d===null)return;var b=d.match(/@(.*):(\d+)$/);if(typeof b==="undefined"||b===null)return;this.fileName=b[1];this.lineNumber=parseInt(b[2]);a.shift();this.stack=a.join("\n")};Object.__typeName="Object";Object.__class=true;Object.getType=function(b){var a=b.constructor;if(!a||typeof a!=="function"||!a.__typeName||a.__typeName==="Object")return Object;return a};Object.getTypeName=function(a){return Object.getType(a).getName()};String.__typeName="String";String.__class=true;String.prototype.endsWith=function(a){return this.substr(this.length-a.length)===a};String.prototype.startsWith=function(a){return this.substr(0,a.length)===a};String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};String.prototype.trimEnd=function(){return this.replace(/\s+$/,"")};String.prototype.trimStart=function(){return this.replace(/^\s+/,"")};String.format=function(){return String._toFormattedString(false,arguments)};String._toFormattedString=function(l,j){var c="",e=j[0];for(var a=0;true;){var f=e.indexOf("{",a),d=e.indexOf("}",a);if(f<0&&d<0){c+=e.slice(a);break}if(d>0&&(d<f||f<0)){c+=e.slice(a,d+1);a=d+2;continue}c+=e.slice(a,f);a=f+1;if(e.charAt(a)==="{"){c+="{";a++;continue}if(d<0)break;var h=e.substring(a,d),g=h.indexOf(":"),k=parseInt(g<0?h:h.substring(0,g),10)+1,i=g<0?"":h.substring(g+1),b=j[k];if(typeof b==="undefined"||b===null)b="";if(b.toFormattedString)c+=b.toFormattedString(i);else if(l&&b.localeFormat)c+=b.localeFormat(i);else if(b.format)c+=b.format(i);else c+=b.toString();a=d+1}return c};Boolean.__typeName="Boolean";Boolean.__class=true;Boolean.parse=function(b){var a=b.trim().toLowerCase();if(a==="false")return false;if(a==="true")return true};Date.__typeName="Date";Date.__class=true;Number.__typeName="Number";Number.__class=true;RegExp.__typeName="RegExp";RegExp.__class=true;if(!window)this.window=this;window.Type=Function;Type.prototype.callBaseMethod=function(a,d,b){var c=Sys._getBaseMethod(this,a,d);if(!b)return c.apply(a);else return c.apply(a,b)};Type.prototype.getBaseMethod=function(a,b){return Sys._getBaseMethod(this,a,b)};Type.prototype.getBaseType=function(){return typeof this.__baseType==="undefined"?null:this.__baseType};Type.prototype.getInterfaces=function(){var a=[],b=this;while(b){var c=b.__interfaces;if(c)for(var d=0,f=c.length;d<f;d++){var e=c[d];if(!Array.contains(a,e))a[a.length]=e}b=b.__baseType}return a};Type.prototype.getName=function(){return typeof this.__typeName==="undefined"?"":this.__typeName};Type.prototype.implementsInterface=function(d){this.resolveInheritance();var c=d.getName(),a=this.__interfaceCache;if(a){var e=a[c];if(typeof e!=="undefined")return e}else a=this.__interfaceCache={};var b=this;while(b){var f=b.__interfaces;if(f)if(Array.indexOf(f,d)!==-1)return a[c]=true;b=b.__baseType}return a[c]=false};Type.prototype.inheritsFrom=function(b){this.resolveInheritance();var a=this.__baseType;while(a){if(a===b)return true;a=a.__baseType}return false};Type.prototype.initializeBase=function(a,b){this.resolveInheritance();if(this.__baseType)if(!b)this.__baseType.apply(a);else this.__baseType.apply(a,b);return a};Type.prototype.isImplementedBy=function(a){if(typeof a==="undefined"||a===null)return false;var b=Object.getType(a);return !!(b.implementsInterface&&b.implementsInterface(this))};Type.prototype.isInstanceOfType=function(a){return Sys._isInstanceOfType(this,a)};Type.prototype.registerClass=function(c,b,d){this.prototype.constructor=this;this.__typeName=c;this.__class=true;if(b){this.__baseType=b;this.__basePrototypePending=true}Sys.__upperCaseTypes[c.toUpperCase()]=this;if(d){this.__interfaces=[];for(var a=2,f=arguments.length;a<f;a++){var e=arguments[a];this.__interfaces.push(e)}}return this};Type.prototype.registerInterface=function(a){Sys.__upperCaseTypes[a.toUpperCase()]=this;this.prototype.constructor=this;this.__typeName=a;this.__interface=true;return this};Type.prototype.resolveInheritance=function(){if(this.__basePrototypePending){var b=this.__baseType;b.resolveInheritance();for(var a in b.prototype){var c=b.prototype[a];if(!this.prototype[a])this.prototype[a]=c}delete this.__basePrototypePending}};Type.getRootNamespaces=function(){return Array.clone(Sys.__rootNamespaces)};Type.isClass=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__class};Type.isInterface=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__interface};Type.isNamespace=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__namespace};Type.parse=function(typeName,ns){var fn;if(ns){fn=Sys.__upperCaseTypes[ns.getName().toUpperCase()+"."+typeName.toUpperCase()];return fn||null}if(!typeName)return null;if(!Type.__htClasses)Type.__htClasses={};fn=Type.__htClasses[typeName];if(!fn){fn=eval(typeName);Type.__htClasses[typeName]=fn}return fn};Type.registerNamespace=function(e){var d=window,c=e.split(".");for(var b=0;b<c.length;b++){var f=c[b],a=d[f];if(!a)a=d[f]={};if(!a.__namespace){if(b===0&&e!=="Sys")Sys.__rootNamespaces[Sys.__rootNamespaces.length]=a;a.__namespace=true;a.__typeName=c.slice(0,b+1).join(".");a.getName=function(){return this.__typeName}}d=a}};Type._checkDependency=function(c,a){var d=Type._registerScript._scripts,b=d?!!d[c]:false;if(typeof a!=="undefined"&&!b)throw Error.invalidOperation(String.format(Sys.Res.requiredScriptReferenceNotIncluded,a,c));return b};Type._registerScript=function(a,c){var b=Type._registerScript._scripts;if(!b)Type._registerScript._scripts=b={};if(b[a])throw Error.invalidOperation(String.format(Sys.Res.scriptAlreadyLoaded,a));b[a]=true;if(c)for(var d=0,f=c.length;d<f;d++){var e=c[d];if(!Type._checkDependency(e))throw Error.invalidOperation(String.format(Sys.Res.scriptDependencyNotFound,a,e))}};Type.registerNamespace("Sys");Sys.__upperCaseTypes={};Sys.__rootNamespaces=[Sys];Sys._isInstanceOfType=function(c,b){if(typeof b==="undefined"||b===null)return false;if(b instanceof c)return true;var a=Object.getType(b);return !!(a===c)||a.inheritsFrom&&a.inheritsFrom(c)||a.implementsInterface&&a.implementsInterface(c)};Sys._getBaseMethod=function(d,e,c){var b=d.getBaseType();if(b){var a=b.prototype[c];return a instanceof Function?a:null}return null};Sys._isDomElement=function(a){var c=false;if(typeof a.nodeType!=="number"){var b=a.ownerDocument||a.document||a;if(b!=a){var d=b.defaultView||b.parentWindow;c=d!=a}else c=typeof b.body==="undefined"}return !c};Array.__typeName="Array";Array.__class=true;Array.add=Array.enqueue=function(a,b){a[a.length]=b};Array.addRange=function(a,b){a.push.apply(a,b)};Array.clear=function(a){a.length=0};Array.clone=function(a){if(a.length===1)return [a[0]];else return Array.apply(null,a)};Array.contains=function(a,b){return Sys._indexOf(a,b)>=0};Array.dequeue=function(a){return a.shift()};Array.forEach=function(b,e,d){for(var a=0,f=b.length;a<f;a++){var c=b[a];if(typeof c!=="undefined")e.call(d,c,a,b)}};Array.indexOf=function(a,c,b){return Sys._indexOf(a,c,b)};Array.insert=function(a,b,c){a.splice(b,0,c)};Array.parse=function(value){if(!value)return [];return eval(value)};Array.remove=function(b,c){var a=Sys._indexOf(b,c);if(a>=0)b.splice(a,1);return a>=0};Array.removeAt=function(a,b){a.splice(b,1)};Sys._indexOf=function(d,e,a){if(typeof e==="undefined")return -1;var c=d.length;if(c!==0){a=a-0;if(isNaN(a))a=0;else{if(isFinite(a))a=a-a%1;if(a<0)a=Math.max(0,c+a)}for(var b=a;b<c;b++)if(typeof d[b]!=="undefined"&&d[b]===e)return b}return -1};Type._registerScript._scripts={"MicrosoftAjaxCore.js":true,"MicrosoftAjaxGlobalization.js":true,"MicrosoftAjaxSerialization.js":true,"MicrosoftAjaxComponentModel.js":true,"MicrosoftAjaxHistory.js":true,"MicrosoftAjaxNetwork.js":true,"MicrosoftAjaxWebServices.js":true};Sys.IDisposable=function(){};Sys.IDisposable.prototype={};Sys.IDisposable.registerInterface("Sys.IDisposable");Sys.StringBuilder=function(a){this._parts=typeof a!=="undefined"&&a!==null&&a!==""?[a.toString()]:[];this._value={};this._len=0};Sys.StringBuilder.prototype={append:function(a){this._parts[this._parts.length]=a},appendLine:function(a){this._parts[this._parts.length]=typeof a==="undefined"||a===null||a===""?"\r\n":a+"\r\n"},clear:function(){this._parts=[];this._value={};this._len=0},isEmpty:function(){if(this._parts.length===0)return true;return this.toString()===""},toString:function(a){a=a||"";var b=this._parts;if(this._len!==b.length){this._value={};this._len=b.length}var d=this._value;if(typeof d[a]==="undefined"){if(a!=="")for(var c=0;c<b.length;)if(typeof b[c]==="undefined"||b[c]===""||b[c]===null)b.splice(c,1);else c++;d[a]=this._parts.join(a)}return d[a]}};Sys.StringBuilder.registerClass("Sys.StringBuilder");Sys.Browser={};Sys.Browser.InternetExplorer={};Sys.Browser.Firefox={};Sys.Browser.Safari={};Sys.Browser.Opera={};Sys.Browser.agent=null;Sys.Browser.hasDebuggerStatement=false;Sys.Browser.name=navigator.appName;Sys.Browser.version=parseFloat(navigator.appVersion);Sys.Browser.documentMode=0;if(navigator.userAgent.indexOf(" MSIE ")>-1){Sys.Browser.agent=Sys.Browser.InternetExplorer;Sys.Browser.version=parseFloat(navigator.userAgent.match(/MSIE (\d+\.\d+)/)[1]);if(Sys.Browser.version>=8)if(document.documentMode>=7)Sys.Browser.documentMode=document.documentMode;Sys.Browser.hasDebuggerStatement=true}else if(navigator.userAgent.indexOf(" Firefox/")>-1){Sys.Browser.agent=Sys.Browser.Firefox;Sys.Browser.version=parseFloat(navigator.userAgent.match(/Firefox\/(\d+\.\d+)/)[1]);Sys.Browser.name="Firefox";Sys.Browser.hasDebuggerStatement=true}else if(navigator.userAgent.indexOf(" AppleWebKit/")>-1){Sys.Browser.agent=Sys.Browser.Safari;Sys.Browser.version=parseFloat(navigator.userAgent.match(/AppleWebKit\/(\d+(\.\d+)?)/)[1]);Sys.Browser.name="Safari"}else if(navigator.userAgent.indexOf("Opera/")>-1)Sys.Browser.agent=Sys.Browser.Opera;Sys.EventArgs=function(){};Sys.EventArgs.registerClass("Sys.EventArgs");Sys.EventArgs.Empty=new Sys.EventArgs;Sys.CancelEventArgs=function(){Sys.CancelEventArgs.initializeBase(this);this._cancel=false};Sys.CancelEventArgs.prototype={get_cancel:function(){return this._cancel},set_cancel:function(a){this._cancel=a}};Sys.CancelEventArgs.registerClass("Sys.CancelEventArgs",Sys.EventArgs);Type.registerNamespace("Sys.UI");Sys._Debug=function(){};Sys._Debug.prototype={_appendConsole:function(a){if(typeof Debug!=="undefined"&&Debug.writeln)Debug.writeln(a);if(window.console&&window.console.log)window.console.log(a);if(window.opera)window.opera.postError(a);if(window.debugService)window.debugService.trace(a)},_appendTrace:function(b){var a=document.getElementById("TraceConsole");if(a&&a.tagName.toUpperCase()==="TEXTAREA")a.value+=b+"\n"},assert:function(c,a,b){if(!c){a=b&&this.assert.caller?String.format(Sys.Res.assertFailedCaller,a,this.assert.caller):String.format(Sys.Res.assertFailed,a);if(confirm(String.format(Sys.Res.breakIntoDebugger,a)))this.fail(a)}},clearTrace:function(){var a=document.getElementById("TraceConsole");if(a&&a.tagName.toUpperCase()==="TEXTAREA")a.value=""},fail:function(message){this._appendConsole(message);if(Sys.Browser.hasDebuggerStatement)eval("debugger")},trace:function(a){this._appendConsole(a);this._appendTrace(a)},traceDump:function(a,b){var c=this._traceDump(a,b,true)},_traceDump:function(a,c,f,b,d){c=c?c:"traceDump";b=b?b:"";if(a===null){this.trace(b+c+": null");return}switch(typeof a){case "undefined":this.trace(b+c+": Undefined");break;case "number":case "string":case "boolean":this.trace(b+c+": "+a);break;default:if(Date.isInstanceOfType(a)||RegExp.isInstanceOfType(a)){this.trace(b+c+": "+a.toString());break}if(!d)d=[];else if(Array.contains(d,a)){this.trace(b+c+": ...");return}Array.add(d,a);if(a==window||a===document||window.HTMLElement&&a instanceof HTMLElement||typeof a.nodeName==="string"){var k=a.tagName?a.tagName:"DomElement";if(a.id)k+=" - "+a.id;this.trace(b+c+" {"+k+"}")}else{var i=Object.getTypeName(a);this.trace(b+c+(typeof i==="string"?" {"+i+"}":""));if(b===""||f){b+="    ";var e,j,l,g,h;if(Array.isInstanceOfType(a)){j=a.length;for(e=0;e<j;e++)this._traceDump(a[e],"["+e+"]",f,b,d)}else for(g in a){h=a[g];if(!Function.isInstanceOfType(h))this._traceDump(h,g,f,b,d)}}}Array.remove(d,a)}}};Sys._Debug.registerClass("Sys._Debug");Sys.Debug=new Sys._Debug;Sys.Debug.isDebug=false;function Sys$Enum$parse(c,e){var a,b,i;if(e){a=this.__lowerCaseValues;if(!a){this.__lowerCaseValues=a={};var g=this.prototype;for(var f in g)a[f.toLowerCase()]=g[f]}}else a=this.prototype;if(!this.__flags){i=e?c.toLowerCase():c;b=a[i.trim()];if(typeof b!=="number")throw Error.argument("value",String.format(Sys.Res.enumInvalidValue,c,this.__typeName));return b}else{var h=(e?c.toLowerCase():c).split(","),j=0;for(var d=h.length-1;d>=0;d--){var k=h[d].trim();b=a[k];if(typeof b!=="number")throw Error.argument("value",String.format(Sys.Res.enumInvalidValue,c.split(",")[d].trim(),this.__typeName));j|=b}return j}}function Sys$Enum$toString(c){if(typeof c==="undefined"||c===null)return this.__string;var d=this.prototype,a;if(!this.__flags||c===0){for(a in d)if(d[a]===c)return a}else{var b=this.__sortedValues;if(!b){b=[];for(a in d)b[b.length]={key:a,value:d[a]};b.sort(function(a,b){return a.value-b.value});this.__sortedValues=b}var e=[],g=c;for(a=b.length-1;a>=0;a--){var h=b[a],f=h.value;if(f===0)continue;if((f&c)===f){e[e.length]=h.key;g-=f;if(g===0)break}}if(e.length&&g===0)return e.reverse().join(", ")}return ""}Type.prototype.registerEnum=function(b,c){Sys.__upperCaseTypes[b.toUpperCase()]=this;for(var a in this.prototype)this[a]=this.prototype[a];this.__typeName=b;this.parse=Sys$Enum$parse;this.__string=this.toString();this.toString=Sys$Enum$toString;this.__flags=c;this.__enum=true};Type.isEnum=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__enum};Type.isFlags=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__flags};Sys.CollectionChange=function(e,a,c,b,d){this.action=e;if(a)if(!(a instanceof Array))a=[a];this.newItems=a||null;if(typeof c!=="number")c=-1;this.newStartingIndex=c;if(b)if(!(b instanceof Array))b=[b];this.oldItems=b||null;if(typeof d!=="number")d=-1;this.oldStartingIndex=d};Sys.CollectionChange.registerClass("Sys.CollectionChange");Sys.NotifyCollectionChangedAction=function(){throw Error.notImplemented()};Sys.NotifyCollectionChangedAction.prototype={add:0,remove:1,reset:2};Sys.NotifyCollectionChangedAction.registerEnum("Sys.NotifyCollectionChangedAction");Sys.NotifyCollectionChangedEventArgs=function(a){this._changes=a;Sys.NotifyCollectionChangedEventArgs.initializeBase(this)};Sys.NotifyCollectionChangedEventArgs.prototype={get_changes:function(){return this._changes||[]}};Sys.NotifyCollectionChangedEventArgs.registerClass("Sys.NotifyCollectionChangedEventArgs",Sys.EventArgs);Sys.Observer=function(){};Sys.Observer.registerClass("Sys.Observer");Sys.Observer.makeObservable=function(a){var c=a instanceof Array,b=Sys.Observer;if(a.setValue===b._observeMethods.setValue)return a;b._addMethods(a,b._observeMethods);if(c)b._addMethods(a,b._arrayMethods);return a};Sys.Observer._addMethods=function(c,b){for(var a in b)c[a]=b[a]};Sys.Observer._addEventHandler=function(c,a,b){Sys.Observer._getContext(c,true).events._addHandler(a,b)};Sys.Observer.addEventHandler=function(c,a,b){Sys.Observer._addEventHandler(c,a,b)};Sys.Observer._removeEventHandler=function(c,a,b){Sys.Observer._getContext(c,true).events._removeHandler(a,b)};Sys.Observer.removeEventHandler=function(c,a,b){Sys.Observer._removeEventHandler(c,a,b)};Sys.Observer.raiseEvent=function(b,e,d){var c=Sys.Observer._getContext(b);if(!c)return;var a=c.events.getHandler(e);if(a)a(b,d)};Sys.Observer.addPropertyChanged=function(b,a){Sys.Observer._addEventHandler(b,"propertyChanged",a)};Sys.Observer.removePropertyChanged=function(b,a){Sys.Observer._removeEventHandler(b,"propertyChanged",a)};Sys.Observer.beginUpdate=function(a){Sys.Observer._getContext(a,true).updating=true};Sys.Observer.endUpdate=function(b){var a=Sys.Observer._getContext(b);if(!a||!a.updating)return;a.updating=false;var d=a.dirty;a.dirty=false;if(d){if(b instanceof Array){var c=a.changes;a.changes=null;Sys.Observer.raiseCollectionChanged(b,c)}Sys.Observer.raisePropertyChanged(b,"")}};Sys.Observer.isUpdating=function(b){var a=Sys.Observer._getContext(b);return a?a.updating:false};Sys.Observer._setValue=function(a,j,g){var b,f,k=a,d=j.split(".");for(var i=0,m=d.length-1;i<m;i++){var l=d[i];b=a["get_"+l];if(typeof b==="function")a=b.call(a);else a=a[l];var n=typeof a;if(a===null||n==="undefined")throw Error.invalidOperation(String.format(Sys.Res.nullReferenceInPath,j))}var e,c=d[m];b=a["get_"+c];f=a["set_"+c];if(typeof b==="function")e=b.call(a);else e=a[c];if(typeof f==="function")f.call(a,g);else a[c]=g;if(e!==g){var h=Sys.Observer._getContext(k);if(h&&h.updating){h.dirty=true;return}Sys.Observer.raisePropertyChanged(k,d[0])}};Sys.Observer.setValue=function(b,a,c){Sys.Observer._setValue(b,a,c)};Sys.Observer.raisePropertyChanged=function(b,a){Sys.Observer.raiseEvent(b,"propertyChanged",new Sys.PropertyChangedEventArgs(a))};Sys.Observer.addCollectionChanged=function(b,a){Sys.Observer._addEventHandler(b,"collectionChanged",a)};Sys.Observer.removeCollectionChanged=function(b,a){Sys.Observer._removeEventHandler(b,"collectionChanged",a)};Sys.Observer._collectionChange=function(d,c){var a=Sys.Observer._getContext(d);if(a&&a.updating){a.dirty=true;var b=a.changes;if(!b)a.changes=b=[c];else b.push(c)}else{Sys.Observer.raiseCollectionChanged(d,[c]);Sys.Observer.raisePropertyChanged(d,"length")}};Sys.Observer.add=function(a,b){var c=new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.add,[b],a.length);Array.add(a,b);Sys.Observer._collectionChange(a,c)};Sys.Observer.addRange=function(a,b){var c=new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.add,b,a.length);Array.addRange(a,b);Sys.Observer._collectionChange(a,c)};Sys.Observer.clear=function(a){var b=Array.clone(a);Array.clear(a);Sys.Observer._collectionChange(a,new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.reset,null,-1,b,0))};Sys.Observer.insert=function(a,b,c){Array.insert(a,b,c);Sys.Observer._collectionChange(a,new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.add,[c],b))};Sys.Observer.remove=function(a,b){var c=Array.indexOf(a,b);if(c!==-1){Array.remove(a,b);Sys.Observer._collectionChange(a,new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.remove,null,-1,[b],c));return true}return false};Sys.Observer.removeAt=function(b,a){if(a>-1&&a<b.length){var c=b[a];Array.removeAt(b,a);Sys.Observer._collectionChange(b,new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.remove,null,-1,[c],a))}};Sys.Observer.raiseCollectionChanged=function(b,a){Sys.Observer.raiseEvent(b,"collectionChanged",new Sys.NotifyCollectionChangedEventArgs(a))};Sys.Observer._observeMethods={add_propertyChanged:function(a){Sys.Observer._addEventHandler(this,"propertyChanged",a)},remove_propertyChanged:function(a){Sys.Observer._removeEventHandler(this,"propertyChanged",a)},addEventHandler:function(a,b){Sys.Observer._addEventHandler(this,a,b)},removeEventHandler:function(a,b){Sys.Observer._removeEventHandler(this,a,b)},get_isUpdating:function(){return Sys.Observer.isUpdating(this)},beginUpdate:function(){Sys.Observer.beginUpdate(this)},endUpdate:function(){Sys.Observer.endUpdate(this)},setValue:function(b,a){Sys.Observer._setValue(this,b,a)},raiseEvent:function(b,a){Sys.Observer.raiseEvent(this,b,a)},raisePropertyChanged:function(a){Sys.Observer.raiseEvent(this,"propertyChanged",new Sys.PropertyChangedEventArgs(a))}};Sys.Observer._arrayMethods={add_collectionChanged:function(a){Sys.Observer._addEventHandler(this,"collectionChanged",a)},remove_collectionChanged:function(a){Sys.Observer._removeEventHandler(this,"collectionChanged",a)},add:function(a){Sys.Observer.add(this,a)},addRange:function(a){Sys.Observer.addRange(this,a)},clear:function(){Sys.Observer.clear(this)},insert:function(a,b){Sys.Observer.insert(this,a,b)},remove:function(a){return Sys.Observer.remove(this,a)},removeAt:function(a){Sys.Observer.removeAt(this,a)},raiseCollectionChanged:function(a){Sys.Observer.raiseEvent(this,"collectionChanged",new Sys.NotifyCollectionChangedEventArgs(a))}};Sys.Observer._getContext=function(b,c){var a=b._observerContext;if(a)return a();if(c)return (b._observerContext=Sys.Observer._createContext())();return null};Sys.Observer._createContext=function(){var a={events:new Sys.EventHandlerList};return function(){return a}};Date._appendPreOrPostMatch=function(e,b){var d=0,a=false;for(var c=0,g=e.length;c<g;c++){var f=e.charAt(c);switch(f){case "'":if(a)b.append("'");else d++;a=false;break;case "\\":if(a)b.append("\\");a=!a;break;default:b.append(f);a=false}}return d};Date._expandFormat=function(a,b){if(!b)b="F";var c=b.length;if(c===1)switch(b){case "d":return a.ShortDatePattern;case "D":return a.LongDatePattern;case "t":return a.ShortTimePattern;case "T":return a.LongTimePattern;case "f":return a.LongDatePattern+" "+a.ShortTimePattern;case "F":return a.FullDateTimePattern;case "M":case "m":return a.MonthDayPattern;case "s":return a.SortableDateTimePattern;case "Y":case "y":return a.YearMonthPattern;default:throw Error.format(Sys.Res.formatInvalidString)}else if(c===2&&b.charAt(0)==="%")b=b.charAt(1);return b};Date._expandYear=function(c,a){var d=new Date,e=Date._getEra(d);if(a<100){var b=Date._getEraYear(d,c,e);a+=b-b%100;if(a>c.Calendar.TwoDigitYearMax)a-=100}return a};Date._getEra=function(e,c){if(!c)return 0;var b,d=e.getTime();for(var a=0,f=c.length;a<f;a+=4){b=c[a+2];if(b===null||d>=b)return a}return 0};Date._getEraYear=function(d,b,e,c){var a=d.getFullYear();if(!c&&b.eras)a-=b.eras[e+3];return a};Date._getParseRegExp=function(b,e){if(!b._parseRegExp)b._parseRegExp={};else if(b._parseRegExp[e])return b._parseRegExp[e];var c=Date._expandFormat(b,e);c=c.replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1");var a=new Sys.StringBuilder("^"),j=[],f=0,i=0,h=Date._getTokenRegExp(),d;while((d=h.exec(c))!==null){var l=c.slice(f,d.index);f=h.lastIndex;i+=Date._appendPreOrPostMatch(l,a);if(i%2===1){a.append(d[0]);continue}switch(d[0]){case "dddd":case "ddd":case "MMMM":case "MMM":case "gg":case "g":a.append("(\\D+)");break;case "tt":case "t":a.append("(\\D*)");break;case "yyyy":a.append("(\\d{4})");break;case "fff":a.append("(\\d{3})");break;case "ff":a.append("(\\d{2})");break;case "f":a.append("(\\d)");break;case "dd":case "d":case "MM":case "M":case "yy":case "y":case "HH":case "H":case "hh":case "h":case "mm":case "m":case "ss":case "s":a.append("(\\d\\d?)");break;case "zzz":a.append("([+-]?\\d\\d?:\\d{2})");break;case "zz":case "z":a.append("([+-]?\\d\\d?)");break;case "/":a.append("(\\"+b.DateSeparator+")")}Array.add(j,d[0])}Date._appendPreOrPostMatch(c.slice(f),a);a.append("$");var k=a.toString().replace(/\s+/g,"\\s+"),g={"regExp":k,"groups":j};b._parseRegExp[e]=g;return g};Date._getTokenRegExp=function(){return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g};Date.parseLocale=function(a){return Date._parse(a,Sys.CultureInfo.CurrentCulture,arguments)};Date.parseInvariant=function(a){return Date._parse(a,Sys.CultureInfo.InvariantCulture,arguments)};Date._parse=function(h,d,i){var a,c,b,f,e,g=false;for(a=1,c=i.length;a<c;a++){f=i[a];if(f){g=true;b=Date._parseExact(h,f,d);if(b)return b}}if(!g){e=d._getDateTimeFormats();for(a=0,c=e.length;a<c;a++){b=Date._parseExact(h,e[a],d);if(b)return b}}return null};Date._parseExact=function(w,D,k){w=w.trim();var g=k.dateTimeFormat,A=Date._getParseRegExp(g,D),C=(new RegExp(A.regExp)).exec(w);if(C===null)return null;var B=A.groups,x=null,e=null,c=null,j=null,i=null,d=0,h,p=0,q=0,f=0,l=null,v=false;for(var s=0,E=B.length;s<E;s++){var a=C[s+1];if(a)switch(B[s]){case "dd":case "d":j=parseInt(a,10);if(j<1||j>31)return null;break;case "MMMM":c=k._getMonthIndex(a);if(c<0||c>11)return null;break;case "MMM":c=k._getAbbrMonthIndex(a);if(c<0||c>11)return null;break;case "M":case "MM":c=parseInt(a,10)-1;if(c<0||c>11)return null;break;case "y":case "yy":e=Date._expandYear(g,parseInt(a,10));if(e<0||e>9999)return null;break;case "yyyy":e=parseInt(a,10);if(e<0||e>9999)return null;break;case "h":case "hh":d=parseInt(a,10);if(d===12)d=0;if(d<0||d>11)return null;break;case "H":case "HH":d=parseInt(a,10);if(d<0||d>23)return null;break;case "m":case "mm":p=parseInt(a,10);if(p<0||p>59)return null;break;case "s":case "ss":q=parseInt(a,10);if(q<0||q>59)return null;break;case "tt":case "t":var z=a.toUpperCase();v=z===g.PMDesignator.toUpperCase();if(!v&&z!==g.AMDesignator.toUpperCase())return null;break;case "f":f=parseInt(a,10)*100;if(f<0||f>999)return null;break;case "ff":f=parseInt(a,10)*10;if(f<0||f>999)return null;break;case "fff":f=parseInt(a,10);if(f<0||f>999)return null;break;case "dddd":i=k._getDayIndex(a);if(i<0||i>6)return null;break;case "ddd":i=k._getAbbrDayIndex(a);if(i<0||i>6)return null;break;case "zzz":var u=a.split(/:/);if(u.length!==2)return null;h=parseInt(u[0],10);if(h<-12||h>13)return null;var m=parseInt(u[1],10);if(m<0||m>59)return null;l=h*60+(a.startsWith("-")?-m:m);break;case "z":case "zz":h=parseInt(a,10);if(h<-12||h>13)return null;l=h*60;break;case "g":case "gg":var o=a;if(!o||!g.eras)return null;o=o.toLowerCase().trim();for(var r=0,F=g.eras.length;r<F;r+=4)if(o===g.eras[r+1].toLowerCase()){x=r;break}if(x===null)return null}}var b=new Date,t,n=g.Calendar.convert;if(n)t=n.fromGregorian(b)[0];else t=b.getFullYear();if(e===null)e=t;else if(g.eras)e+=g.eras[(x||0)+3];if(c===null)c=0;if(j===null)j=1;if(n){b=n.toGregorian(e,c,j);if(b===null)return null}else{b.setFullYear(e,c,j);if(b.getDate()!==j)return null;if(i!==null&&b.getDay()!==i)return null}if(v&&d<12)d+=12;b.setHours(d,p,q,f);if(l!==null){var y=b.getMinutes()-(l+b.getTimezoneOffset());b.setHours(b.getHours()+parseInt(y/60,10),y%60)}return b};Date.prototype.format=function(a){return this._toFormattedString(a,Sys.CultureInfo.InvariantCulture)};Date.prototype.localeFormat=function(a){return this._toFormattedString(a,Sys.CultureInfo.CurrentCulture)};Date.prototype._toFormattedString=function(e,j){var b=j.dateTimeFormat,n=b.Calendar.convert;if(!e||!e.length||e==="i")if(j&&j.name.length)if(n)return this._toFormattedString(b.FullDateTimePattern,j);else{var r=new Date(this.getTime()),x=Date._getEra(this,b.eras);r.setFullYear(Date._getEraYear(this,b,x));return r.toLocaleString()}else return this.toString();var l=b.eras,k=e==="s";e=Date._expandFormat(b,e);var a=new Sys.StringBuilder,c;function d(a){if(a<10)return "0"+a;return a.toString()}function m(a){if(a<10)return "00"+a;if(a<100)return "0"+a;return a.toString()}function v(a){if(a<10)return "000"+a;else if(a<100)return "00"+a;else if(a<1000)return "0"+a;return a.toString()}var h,p,t=/([^d]|^)(d|dd)([^d]|$)/g;function s(){if(h||p)return h;h=t.test(e);p=true;return h}var q=0,o=Date._getTokenRegExp(),f;if(!k&&n)f=n.fromGregorian(this);for(;true;){var w=o.lastIndex,i=o.exec(e),u=e.slice(w,i?i.index:e.length);q+=Date._appendPreOrPostMatch(u,a);if(!i)break;if(q%2===1){a.append(i[0]);continue}function g(a,b){if(f)return f[b];switch(b){case 0:return a.getFullYear();case 1:return a.getMonth();case 2:return a.getDate()}}switch(i[0]){case "dddd":a.append(b.DayNames[this.getDay()]);break;case "ddd":a.append(b.AbbreviatedDayNames[this.getDay()]);break;case "dd":h=true;a.append(d(g(this,2)));break;case "d":h=true;a.append(g(this,2));break;case "MMMM":a.append(b.MonthGenitiveNames&&s()?b.MonthGenitiveNames[g(this,1)]:b.MonthNames[g(this,1)]);break;case "MMM":a.append(b.AbbreviatedMonthGenitiveNames&&s()?b.AbbreviatedMonthGenitiveNames[g(this,1)]:b.AbbreviatedMonthNames[g(this,1)]);break;case "MM":a.append(d(g(this,1)+1));break;case "M":a.append(g(this,1)+1);break;case "yyyy":a.append(v(f?f[0]:Date._getEraYear(this,b,Date._getEra(this,l),k)));break;case "yy":a.append(d((f?f[0]:Date._getEraYear(this,b,Date._getEra(this,l),k))%100));break;case "y":a.append((f?f[0]:Date._getEraYear(this,b,Date._getEra(this,l),k))%100);break;case "hh":c=this.getHours()%12;if(c===0)c=12;a.append(d(c));break;case "h":c=this.getHours()%12;if(c===0)c=12;a.append(c);break;case "HH":a.append(d(this.getHours()));break;case "H":a.append(this.getHours());break;case "mm":a.append(d(this.getMinutes()));break;case "m":a.append(this.getMinutes());break;case "ss":a.append(d(this.getSeconds()));break;case "s":a.append(this.getSeconds());break;case "tt":a.append(this.getHours()<12?b.AMDesignator:b.PMDesignator);break;case "t":a.append((this.getHours()<12?b.AMDesignator:b.PMDesignator).charAt(0));break;case "f":a.append(m(this.getMilliseconds()).charAt(0));break;case "ff":a.append(m(this.getMilliseconds()).substr(0,2));break;case "fff":a.append(m(this.getMilliseconds()));break;case "z":c=this.getTimezoneOffset()/60;a.append((c<=0?"+":"-")+Math.floor(Math.abs(c)));break;case "zz":c=this.getTimezoneOffset()/60;a.append((c<=0?"+":"-")+d(Math.floor(Math.abs(c))));break;case "zzz":c=this.getTimezoneOffset()/60;a.append((c<=0?"+":"-")+d(Math.floor(Math.abs(c)))+":"+d(Math.abs(this.getTimezoneOffset()%60)));break;case "g":case "gg":if(b.eras)a.append(b.eras[Date._getEra(this,l)+1]);break;case "/":a.append(b.DateSeparator)}}return a.toString()};String.localeFormat=function(){return String._toFormattedString(true,arguments)};Number.parseLocale=function(a){return Number._parse(a,Sys.CultureInfo.CurrentCulture)};Number.parseInvariant=function(a){return Number._parse(a,Sys.CultureInfo.InvariantCulture)};Number._parse=function(b,o){b=b.trim();if(b.match(/^[+-]?infinity$/i))return parseFloat(b);if(b.match(/^0x[a-f0-9]+$/i))return parseInt(b);var a=o.numberFormat,g=Number._parseNumberNegativePattern(b,a,a.NumberNegativePattern),h=g[0],e=g[1];if(h===""&&a.NumberNegativePattern!==1){g=Number._parseNumberNegativePattern(b,a,1);h=g[0];e=g[1]}if(h==="")h="+";var j,d,f=e.indexOf("e");if(f<0)f=e.indexOf("E");if(f<0){d=e;j=null}else{d=e.substr(0,f);j=e.substr(f+1)}var c,k,m=d.indexOf(a.NumberDecimalSeparator);if(m<0){c=d;k=null}else{c=d.substr(0,m);k=d.substr(m+a.NumberDecimalSeparator.length)}c=c.split(a.NumberGroupSeparator).join("");var n=a.NumberGroupSeparator.replace(/\u00A0/g," ");if(a.NumberGroupSeparator!==n)c=c.split(n).join("");var l=h+c;if(k!==null)l+="."+k;if(j!==null){var i=Number._parseNumberNegativePattern(j,a,1);if(i[0]==="")i[0]="+";l+="e"+i[0]+i[1]}if(l.match(/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/))return parseFloat(l);return Number.NaN};Number._parseNumberNegativePattern=function(a,d,e){var b=d.NegativeSign,c=d.PositiveSign;switch(e){case 4:b=" "+b;c=" "+c;case 3:if(a.endsWith(b))return ["-",a.substr(0,a.length-b.length)];else if(a.endsWith(c))return ["+",a.substr(0,a.length-c.length)];break;case 2:b+=" ";c+=" ";case 1:if(a.startsWith(b))return ["-",a.substr(b.length)];else if(a.startsWith(c))return ["+",a.substr(c.length)];break;case 0:if(a.startsWith("(")&&a.endsWith(")"))return ["-",a.substr(1,a.length-2)]}return ["",a]};Number.prototype.format=function(a){return this._toFormattedString(a,Sys.CultureInfo.InvariantCulture)};Number.prototype.localeFormat=function(a){return this._toFormattedString(a,Sys.CultureInfo.CurrentCulture)};Number.prototype._toFormattedString=function(e,j){if(!e||e.length===0||e==="i")if(j&&j.name.length>0)return this.toLocaleString();else return this.toString();var o=["n %","n%","%n"],n=["-n %","-n%","-%n"],p=["(n)","-n","- n","n-","n -"],m=["$n","n$","$ n","n $"],l=["($n)","-$n","$-n","$n-","(n$)","-n$","n-$","n$-","-n $","-$ n","n $-","$ n-","$ -n","n- $","($ n)","(n $)"];function g(a,c,d){for(var b=a.length;b<c;b++)a=d?"0"+a:a+"0";return a}function i(j,i,l,n,p){var h=l[0],k=1,o=Math.pow(10,i),m=Math.round(j*o)/o;if(!isFinite(m))m=j;j=m;var b=j.toString(),a="",c,e=b.split(/e/i);b=e[0];c=e.length>1?parseInt(e[1]):0;e=b.split(".");b=e[0];a=e.length>1?e[1]:"";var q;if(c>0){a=g(a,c,false);b+=a.slice(0,c);a=a.substr(c)}else if(c<0){c=-c;b=g(b,c+1,true);a=b.slice(-c,b.length)+a;b=b.slice(0,-c)}if(i>0){if(a.length>i)a=a.slice(0,i);else a=g(a,i,false);a=p+a}else a="";var d=b.length-1,f="";while(d>=0){if(h===0||h>d)if(f.length>0)return b.slice(0,d+1)+n+f+a;else return b.slice(0,d+1)+a;if(f.length>0)f=b.slice(d-h+1,d+1)+n+f;else f=b.slice(d-h+1,d+1);d-=h;if(k<l.length){h=l[k];k++}}return b.slice(0,d+1)+n+f+a}var a=j.numberFormat,d=Math.abs(this);if(!e)e="D";var b=-1;if(e.length>1)b=parseInt(e.slice(1),10);var c;switch(e.charAt(0)){case "d":case "D":c="n";if(b!==-1)d=g(""+d,b,true);if(this<0)d=-d;break;case "c":case "C":if(this<0)c=l[a.CurrencyNegativePattern];else c=m[a.CurrencyPositivePattern];if(b===-1)b=a.CurrencyDecimalDigits;d=i(Math.abs(this),b,a.CurrencyGroupSizes,a.CurrencyGroupSeparator,a.CurrencyDecimalSeparator);break;case "n":case "N":if(this<0)c=p[a.NumberNegativePattern];else c="n";if(b===-1)b=a.NumberDecimalDigits;d=i(Math.abs(this),b,a.NumberGroupSizes,a.NumberGroupSeparator,a.NumberDecimalSeparator);break;case "p":case "P":if(this<0)c=n[a.PercentNegativePattern];else c=o[a.PercentPositivePattern];if(b===-1)b=a.PercentDecimalDigits;d=i(Math.abs(this)*100,b,a.PercentGroupSizes,a.PercentGroupSeparator,a.PercentDecimalSeparator);break;default:throw Error.format(Sys.Res.formatBadFormatSpecifier)}var k=/n|\$|-|%/g,f="";for(;true;){var q=k.lastIndex,h=k.exec(c);f+=c.slice(q,h?h.index:c.length);if(!h)break;switch(h[0]){case "n":f+=d;break;case "$":f+=a.CurrencySymbol;break;case "-":if(/[1-9]/.test(d))f+=a.NegativeSign;break;case "%":f+=a.PercentSymbol}}return f};Sys.CultureInfo=function(c,b,a){this.name=c;this.numberFormat=b;this.dateTimeFormat=a};Sys.CultureInfo.prototype={_getDateTimeFormats:function(){if(!this._dateTimeFormats){var a=this.dateTimeFormat;this._dateTimeFormats=[a.MonthDayPattern,a.YearMonthPattern,a.ShortDatePattern,a.ShortTimePattern,a.LongDatePattern,a.LongTimePattern,a.FullDateTimePattern,a.RFC1123Pattern,a.SortableDateTimePattern,a.UniversalSortableDateTimePattern]}return this._dateTimeFormats},_getIndex:function(c,d,e){var b=this._toUpper(c),a=Array.indexOf(d,b);if(a===-1)a=Array.indexOf(e,b);return a},_getMonthIndex:function(a){if(!this._upperMonths){this._upperMonths=this._toUpperArray(this.dateTimeFormat.MonthNames);this._upperMonthsGenitive=this._toUpperArray(this.dateTimeFormat.MonthGenitiveNames)}return this._getIndex(a,this._upperMonths,this._upperMonthsGenitive)},_getAbbrMonthIndex:function(a){if(!this._upperAbbrMonths){this._upperAbbrMonths=this._toUpperArray(this.dateTimeFormat.AbbreviatedMonthNames);this._upperAbbrMonthsGenitive=this._toUpperArray(this.dateTimeFormat.AbbreviatedMonthGenitiveNames)}return this._getIndex(a,this._upperAbbrMonths,this._upperAbbrMonthsGenitive)},_getDayIndex:function(a){if(!this._upperDays)this._upperDays=this._toUpperArray(this.dateTimeFormat.DayNames);return Array.indexOf(this._upperDays,this._toUpper(a))},_getAbbrDayIndex:function(a){if(!this._upperAbbrDays)this._upperAbbrDays=this._toUpperArray(this.dateTimeFormat.AbbreviatedDayNames);return Array.indexOf(this._upperAbbrDays,this._toUpper(a))},_toUpperArray:function(c){var b=[];for(var a=0,d=c.length;a<d;a++)b[a]=this._toUpper(c[a]);return b},_toUpper:function(a){return a.split("\u00a0").join(" ").toUpperCase()}};Sys.CultureInfo.registerClass("Sys.CultureInfo");Sys.CultureInfo._parse=function(a){var b=a.dateTimeFormat;if(b&&!b.eras)b.eras=a.eras;return new Sys.CultureInfo(a.name,a.numberFormat,b)};Sys.CultureInfo.InvariantCulture=Sys.CultureInfo._parse({"name":"","numberFormat":{"CurrencyDecimalDigits":2,"CurrencyDecimalSeparator":".","IsReadOnly":true,"CurrencyGroupSizes":[3],"NumberGroupSizes":[3],"PercentGroupSizes":[3],"CurrencyGroupSeparator":",","CurrencySymbol":"\u00a4","NaNSymbol":"NaN","CurrencyNegativePattern":0,"NumberNegativePattern":1,"PercentPositivePattern":0,"PercentNegativePattern":0,"NegativeInfinitySymbol":"-Infinity","NegativeSign":"-","NumberDecimalDigits":2,"NumberDecimalSeparator":".","NumberGroupSeparator":",","CurrencyPositivePattern":0,"PositiveInfinitySymbol":"Infinity","PositiveSign":"+","PercentDecimalDigits":2,"PercentDecimalSeparator":".","PercentGroupSeparator":",","PercentSymbol":"%","PerMilleSymbol":"\u2030","NativeDigits":["0","1","2","3","4","5","6","7","8","9"],"DigitSubstitution":1},"dateTimeFormat":{"AMDesignator":"AM","Calendar":{"MinSupportedDateTime":"@-62135568000000@","MaxSupportedDateTime":"@253402300799999@","AlgorithmType":1,"CalendarType":1,"Eras":[1],"TwoDigitYearMax":2029,"IsReadOnly":true},"DateSeparator":"/","FirstDayOfWeek":0,"CalendarWeekRule":0,"FullDateTimePattern":"dddd, dd MMMM yyyy HH:mm:ss","LongDatePattern":"dddd, dd MMMM yyyy","LongTimePattern":"HH:mm:ss","MonthDayPattern":"MMMM dd","PMDesignator":"PM","RFC1123Pattern":"ddd, dd MMM yyyy HH':'mm':'ss 'GMT'","ShortDatePattern":"MM/dd/yyyy","ShortTimePattern":"HH:mm","SortableDateTimePattern":"yyyy'-'MM'-'dd'T'HH':'mm':'ss","TimeSeparator":":","UniversalSortableDateTimePattern":"yyyy'-'MM'-'dd HH':'mm':'ss'Z'","YearMonthPattern":"yyyy MMMM","AbbreviatedDayNames":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"ShortestDayNames":["Su","Mo","Tu","We","Th","Fr","Sa"],"DayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"AbbreviatedMonthNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthNames":["January","February","March","April","May","June","July","August","September","October","November","December",""],"IsReadOnly":true,"NativeCalendarName":"Gregorian Calendar","AbbreviatedMonthGenitiveNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthGenitiveNames":["January","February","March","April","May","June","July","August","September","October","November","December",""]},"eras":[1,"A.D.",null,0]});if(typeof __cultureInfo==="object"){Sys.CultureInfo.CurrentCulture=Sys.CultureInfo._parse(__cultureInfo);delete __cultureInfo}else Sys.CultureInfo.CurrentCulture=Sys.CultureInfo._parse({"name":"en-US","numberFormat":{"CurrencyDecimalDigits":2,"CurrencyDecimalSeparator":".","IsReadOnly":false,"CurrencyGroupSizes":[3],"NumberGroupSizes":[3],"PercentGroupSizes":[3],"CurrencyGroupSeparator":",","CurrencySymbol":"$","NaNSymbol":"NaN","CurrencyNegativePattern":0,"NumberNegativePattern":1,"PercentPositivePattern":0,"PercentNegativePattern":0,"NegativeInfinitySymbol":"-Infinity","NegativeSign":"-","NumberDecimalDigits":2,"NumberDecimalSeparator":".","NumberGroupSeparator":",","CurrencyPositivePattern":0,"PositiveInfinitySymbol":"Infinity","PositiveSign":"+","PercentDecimalDigits":2,"PercentDecimalSeparator":".","PercentGroupSeparator":",","PercentSymbol":"%","PerMilleSymbol":"\u2030","NativeDigits":["0","1","2","3","4","5","6","7","8","9"],"DigitSubstitution":1},"dateTimeFormat":{"AMDesignator":"AM","Calendar":{"MinSupportedDateTime":"@-62135568000000@","MaxSupportedDateTime":"@253402300799999@","AlgorithmType":1,"CalendarType":1,"Eras":[1],"TwoDigitYearMax":2029,"IsReadOnly":false},"DateSeparator":"/","FirstDayOfWeek":0,"CalendarWeekRule":0,"FullDateTimePattern":"dddd, MMMM dd, yyyy h:mm:ss tt","LongDatePattern":"dddd, MMMM dd, yyyy","LongTimePattern":"h:mm:ss tt","MonthDayPattern":"MMMM dd","PMDesignator":"PM","RFC1123Pattern":"ddd, dd MMM yyyy HH':'mm':'ss 'GMT'","ShortDatePattern":"M/d/yyyy","ShortTimePattern":"h:mm tt","SortableDateTimePattern":"yyyy'-'MM'-'dd'T'HH':'mm':'ss","TimeSeparator":":","UniversalSortableDateTimePattern":"yyyy'-'MM'-'dd HH':'mm':'ss'Z'","YearMonthPattern":"MMMM, yyyy","AbbreviatedDayNames":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"ShortestDayNames":["Su","Mo","Tu","We","Th","Fr","Sa"],"DayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"AbbreviatedMonthNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthNames":["January","February","March","April","May","June","July","August","September","October","November","December",""],"IsReadOnly":false,"NativeCalendarName":"Gregorian Calendar","AbbreviatedMonthGenitiveNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthGenitiveNames":["January","February","March","April","May","June","July","August","September","October","November","December",""]},"eras":[1,"A.D.",null,0]});Type.registerNamespace("Sys.Serialization");Sys.Serialization.JavaScriptSerializer=function(){};Sys.Serialization.JavaScriptSerializer.registerClass("Sys.Serialization.JavaScriptSerializer");Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs=[];Sys.Serialization.JavaScriptSerializer._charsToEscape=[];Sys.Serialization.JavaScriptSerializer._dateRegEx=new RegExp('(^|[^\\\\])\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})?\\)\\\\/\\"',"g");Sys.Serialization.JavaScriptSerializer._escapeChars={};Sys.Serialization.JavaScriptSerializer._escapeRegEx=new RegExp('["\\\\\\x00-\\x1F]',"i");Sys.Serialization.JavaScriptSerializer._escapeRegExGlobal=new RegExp('["\\\\\\x00-\\x1F]',"g");Sys.Serialization.JavaScriptSerializer._jsonRegEx=new RegExp("[^,:{}\\[\\]0-9.\\-+Eaeflnr-u \\n\\r\\t]","g");Sys.Serialization.JavaScriptSerializer._jsonStringRegEx=new RegExp('"(\\\\.|[^"\\\\])*"',"g");Sys.Serialization.JavaScriptSerializer._serverTypeFieldName="__type";Sys.Serialization.JavaScriptSerializer._init=function(){var c=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000b","\\f","\\r","\\u000e","\\u000f","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001a","\\u001b","\\u001c","\\u001d","\\u001e","\\u001f"];Sys.Serialization.JavaScriptSerializer._charsToEscape[0]="\\";Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs["\\"]=new RegExp("\\\\","g");Sys.Serialization.JavaScriptSerializer._escapeChars["\\"]="\\\\";Sys.Serialization.JavaScriptSerializer._charsToEscape[1]='"';Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs['"']=new RegExp('"',"g");Sys.Serialization.JavaScriptSerializer._escapeChars['"']='\\"';for(var a=0;a<32;a++){var b=String.fromCharCode(a);Sys.Serialization.JavaScriptSerializer._charsToEscape[a+2]=b;Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[b]=new RegExp(b,"g");Sys.Serialization.JavaScriptSerializer._escapeChars[b]=c[a]}};Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder=function(b,a){a.append(b.toString())};Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder=function(a,b){if(isFinite(a))b.append(String(a));else throw Error.invalidOperation(Sys.Res.cannotSerializeNonFiniteNumbers)};Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder=function(a,c){c.append('"');if(Sys.Serialization.JavaScriptSerializer._escapeRegEx.test(a)){if(Sys.Serialization.JavaScriptSerializer._charsToEscape.length===0)Sys.Serialization.JavaScriptSerializer._init();if(a.length<128)a=a.replace(Sys.Serialization.JavaScriptSerializer._escapeRegExGlobal,function(a){return Sys.Serialization.JavaScriptSerializer._escapeChars[a]});else for(var d=0;d<34;d++){var b=Sys.Serialization.JavaScriptSerializer._charsToEscape[d];if(a.indexOf(b)!==-1)if(Sys.Browser.agent===Sys.Browser.Opera||Sys.Browser.agent===Sys.Browser.FireFox)a=a.split(b).join(Sys.Serialization.JavaScriptSerializer._escapeChars[b]);else a=a.replace(Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[b],Sys.Serialization.JavaScriptSerializer._escapeChars[b])}}c.append(a);c.append('"')};Sys.Serialization.JavaScriptSerializer._serializeWithBuilder=function(b,a,i,g){var c;switch(typeof b){case "object":if(b)if(Number.isInstanceOfType(b))Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder(b,a);else if(Boolean.isInstanceOfType(b))Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder(b,a);else if(String.isInstanceOfType(b))Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder(b,a);else if(Array.isInstanceOfType(b)){a.append("[");for(c=0;c<b.length;++c){if(c>0)a.append(",");Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(b[c],a,false,g)}a.append("]")}else{if(Date.isInstanceOfType(b)){a.append('"\\/Date(');a.append(b.getTime());a.append(')\\/"');break}var d=[],f=0;for(var e in b){if(e.startsWith("$"))continue;if(e===Sys.Serialization.JavaScriptSerializer._serverTypeFieldName&&f!==0){d[f++]=d[0];d[0]=e}else d[f++]=e}if(i)d.sort();a.append("{");var j=false;for(c=0;c<f;c++){var h=b[d[c]];if(typeof h!=="undefined"&&typeof h!=="function"){if(j)a.append(",");else j=true;Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(d[c],a,i,g);a.append(":");Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(h,a,i,g)}}a.append("}")}else a.append("null");break;case "number":Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder(b,a);break;case "string":Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder(b,a);break;case "boolean":Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder(b,a);break;default:a.append("null")}};Sys.Serialization.JavaScriptSerializer.serialize=function(b){var a=new Sys.StringBuilder;Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(b,a,false);return a.toString()};Sys.Serialization.JavaScriptSerializer.deserialize=function(data,secure){if(data.length===0)throw Error.argument("data",Sys.Res.cannotDeserializeEmptyString);try{var exp=data.replace(Sys.Serialization.JavaScriptSerializer._dateRegEx,"$1new Date($2)");if(secure&&Sys.Serialization.JavaScriptSerializer._jsonRegEx.test(exp.replace(Sys.Serialization.JavaScriptSerializer._jsonStringRegEx,"")))throw null;return eval("("+exp+")")}catch(a){throw Error.argument("data",Sys.Res.cannotDeserializeInvalidJson)}};Type.registerNamespace("Sys.UI");Sys.EventHandlerList=function(){this._list={}};Sys.EventHandlerList.prototype={_addHandler:function(b,a){Array.add(this._getEvent(b,true),a)},addHandler:function(b,a){this._addHandler(b,a)},_removeHandler:function(c,b){var a=this._getEvent(c);if(!a)return;Array.remove(a,b)},removeHandler:function(b,a){this._removeHandler(b,a)},getHandler:function(b){var a=this._getEvent(b);if(!a||a.length===0)return null;a=Array.clone(a);return function(c,d){for(var b=0,e=a.length;b<e;b++)a[b](c,d)}},_getEvent:function(a,b){if(!this._list[a]){if(!b)return null;this._list[a]=[]}return this._list[a]}};Sys.EventHandlerList.registerClass("Sys.EventHandlerList");Sys.CommandEventArgs=function(c,a,b){Sys.CommandEventArgs.initializeBase(this);this._commandName=c;this._commandArgument=a;this._commandSource=b};Sys.CommandEventArgs.prototype={_commandName:null,_commandArgument:null,_commandSource:null,get_commandName:function(){return this._commandName},get_commandArgument:function(){return this._commandArgument},get_commandSource:function(){return this._commandSource}};Sys.CommandEventArgs.registerClass("Sys.CommandEventArgs",Sys.CancelEventArgs);Sys.INotifyPropertyChange=function(){};Sys.INotifyPropertyChange.prototype={};Sys.INotifyPropertyChange.registerInterface("Sys.INotifyPropertyChange");Sys.PropertyChangedEventArgs=function(a){Sys.PropertyChangedEventArgs.initializeBase(this);this._propertyName=a};Sys.PropertyChangedEventArgs.prototype={get_propertyName:function(){return this._propertyName}};Sys.PropertyChangedEventArgs.registerClass("Sys.PropertyChangedEventArgs",Sys.EventArgs);Sys.INotifyDisposing=function(){};Sys.INotifyDisposing.prototype={};Sys.INotifyDisposing.registerInterface("Sys.INotifyDisposing");Sys.Component=function(){if(Sys.Application)Sys.Application.registerDisposableObject(this)};Sys.Component.prototype={_id:null,_initialized:false,_updating:false,get_events:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_id:function(){return this._id},set_id:function(a){this._id=a},get_isInitialized:function(){return this._initialized},get_isUpdating:function(){return this._updating},add_disposing:function(a){this.get_events().addHandler("disposing",a)},remove_disposing:function(a){this.get_events().removeHandler("disposing",a)},add_propertyChanged:function(a){this.get_events().addHandler("propertyChanged",a)},remove_propertyChanged:function(a){this.get_events().removeHandler("propertyChanged",a)},beginUpdate:function(){this._updating=true},dispose:function(){if(this._events){var a=this._events.getHandler("disposing");if(a)a(this,Sys.EventArgs.Empty)}delete this._events;Sys.Application.unregisterDisposableObject(this);Sys.Application.removeComponent(this)},endUpdate:function(){this._updating=false;if(!this._initialized)this.initialize();this.updated()},initialize:function(){this._initialized=true},raisePropertyChanged:function(b){if(!this._events)return;var a=this._events.getHandler("propertyChanged");if(a)a(this,new Sys.PropertyChangedEventArgs(b))},updated:function(){}};Sys.Component.registerClass("Sys.Component",null,Sys.IDisposable,Sys.INotifyPropertyChange,Sys.INotifyDisposing);function Sys$Component$_setProperties(a,i){var d,j=Object.getType(a),e=j===Object||j===Sys.UI.DomElement,h=Sys.Component.isInstanceOfType(a)&&!a.get_isUpdating();if(h)a.beginUpdate();for(var c in i){var b=i[c],f=e?null:a["get_"+c];if(e||typeof f!=="function"){var k=a[c];if(!b||typeof b!=="object"||e&&!k)a[c]=b;else Sys$Component$_setProperties(k,b)}else{var l=a["set_"+c];if(typeof l==="function")l.apply(a,[b]);else if(b instanceof Array){d=f.apply(a);for(var g=0,m=d.length,n=b.length;g<n;g++,m++)d[m]=b[g]}else if(typeof b==="object"&&Object.getType(b)===Object){d=f.apply(a);Sys$Component$_setProperties(d,b)}}}if(h)a.endUpdate()}function Sys$Component$_setReferences(c,b){for(var a in b){var e=c["set_"+a],d=$find(b[a]);e.apply(c,[d])}}var $create=Sys.Component.create=function(h,f,d,c,g){var a=g?new h(g):new h,b=Sys.Application,i=b.get_isCreatingComponents();a.beginUpdate();if(f)Sys$Component$_setProperties(a,f);if(d)for(var e in d)a["add_"+e](d[e]);if(a.get_id())b.addComponent(a);if(i){b._createdComponents[b._createdComponents.length]=a;if(c)b._addComponentToSecondPass(a,c);else a.endUpdate()}else{if(c)Sys$Component$_setReferences(a,c);a.endUpdate()}return a};Sys.UI.MouseButton=function(){throw Error.notImplemented()};Sys.UI.MouseButton.prototype={leftButton:0,middleButton:1,rightButton:2};Sys.UI.MouseButton.registerEnum("Sys.UI.MouseButton");Sys.UI.Key=function(){throw Error.notImplemented()};Sys.UI.Key.prototype={backspace:8,tab:9,enter:13,esc:27,space:32,pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40,del:127};Sys.UI.Key.registerEnum("Sys.UI.Key");Sys.UI.Point=function(a,b){this.rawX=a;this.rawY=b;this.x=Math.round(a);this.y=Math.round(b)};Sys.UI.Point.registerClass("Sys.UI.Point");Sys.UI.Bounds=function(c,d,b,a){this.x=c;this.y=d;this.height=a;this.width=b};Sys.UI.Bounds.registerClass("Sys.UI.Bounds");Sys.UI.DomEvent=function(e){var a=e,b=this.type=a.type.toLowerCase();this.rawEvent=a;this.altKey=a.altKey;if(typeof a.button!=="undefined")this.button=typeof a.which!=="undefined"?a.button:a.button===4?Sys.UI.MouseButton.middleButton:a.button===2?Sys.UI.MouseButton.rightButton:Sys.UI.MouseButton.leftButton;if(b==="keypress")this.charCode=a.charCode||a.keyCode;else if(a.keyCode&&a.keyCode===46)this.keyCode=127;else this.keyCode=a.keyCode;this.clientX=a.clientX;this.clientY=a.clientY;this.ctrlKey=a.ctrlKey;this.target=a.target?a.target:a.srcElement;if(!b.startsWith("key"))if(typeof a.offsetX!=="undefined"&&typeof a.offsetY!=="undefined"){this.offsetX=a.offsetX;this.offsetY=a.offsetY}else if(this.target&&this.target.nodeType!==3&&typeof a.clientX==="number"){var c=Sys.UI.DomElement.getLocation(this.target),d=Sys.UI.DomElement._getWindow(this.target);this.offsetX=(d.pageXOffset||0)+a.clientX-c.x;this.offsetY=(d.pageYOffset||0)+a.clientY-c.y}this.screenX=a.screenX;this.screenY=a.screenY;this.shiftKey=a.shiftKey};Sys.UI.DomEvent.prototype={preventDefault:function(){if(this.rawEvent.preventDefault)this.rawEvent.preventDefault();else if(window.event)this.rawEvent.returnValue=false},stopPropagation:function(){if(this.rawEvent.stopPropagation)this.rawEvent.stopPropagation();else if(window.event)this.rawEvent.cancelBubble=true}};Sys.UI.DomEvent.registerClass("Sys.UI.DomEvent");var $addHandler=Sys.UI.DomEvent.addHandler=function(a,d,e,g){if(!a._events)a._events={};var c=a._events[d];if(!c)a._events[d]=c=[];var b;if(a.addEventListener){b=function(b){return e.call(a,new Sys.UI.DomEvent(b))};a.addEventListener(d,b,false)}else if(a.attachEvent){b=function(){var b={};try{b=Sys.UI.DomElement._getWindow(a).event}catch(c){}return e.call(a,new Sys.UI.DomEvent(b))};a.attachEvent("on"+d,b)}c[c.length]={handler:e,browserHandler:b,autoRemove:g};if(g){var f=a.dispose;if(f!==Sys.UI.DomEvent._disposeHandlers){a.dispose=Sys.UI.DomEvent._disposeHandlers;if(typeof f!=="undefined")a._chainDispose=f}}},$addHandlers=Sys.UI.DomEvent.addHandlers=function(f,d,c,e){for(var b in d){var a=d[b];if(c)a=Function.createDelegate(c,a);$addHandler(f,b,a,e||false)}},$clearHandlers=Sys.UI.DomEvent.clearHandlers=function(a){Sys.UI.DomEvent._clearHandlers(a,false)};Sys.UI.DomEvent._clearHandlers=function(a,g){if(a._events){var e=a._events;for(var b in e){var d=e[b];for(var c=d.length-1;c>=0;c--){var f=d[c];if(!g||f.autoRemove)$removeHandler(a,b,f.handler)}}a._events=null}};Sys.UI.DomEvent._disposeHandlers=function(){Sys.UI.DomEvent._clearHandlers(this,true);var b=this._chainDispose,a=typeof b;if(a!=="undefined"){this.dispose=b;this._chainDispose=null;if(a==="function")this.dispose()}};var $removeHandler=Sys.UI.DomEvent.removeHandler=function(b,a,c){Sys.UI.DomEvent._removeHandler(b,a,c)};Sys.UI.DomEvent._removeHandler=function(a,e,f){var d=null,c=a._events[e];for(var b=0,g=c.length;b<g;b++)if(c[b].handler===f){d=c[b].browserHandler;break}if(a.removeEventListener)a.removeEventListener(e,d,false);else if(a.detachEvent)a.detachEvent("on"+e,d);c.splice(b,1)};Sys.UI.DomElement=function(){};Sys.UI.DomElement.registerClass("Sys.UI.DomElement");Sys.UI.DomElement.addCssClass=function(a,b){if(!Sys.UI.DomElement.containsCssClass(a,b))if(a.className==="")a.className=b;else a.className+=" "+b};Sys.UI.DomElement.containsCssClass=function(b,a){return Array.contains(b.className.split(" "),a)};Sys.UI.DomElement.getBounds=function(a){var b=Sys.UI.DomElement.getLocation(a);return new Sys.UI.Bounds(b.x,b.y,a.offsetWidth||0,a.offsetHeight||0)};var $get=Sys.UI.DomElement.getElementById=function(f,e){if(!e)return document.getElementById(f);if(e.getElementById)return e.getElementById(f);var c=[],d=e.childNodes;for(var b=0;b<d.length;b++){var a=d[b];if(a.nodeType==1)c[c.length]=a}while(c.length){a=c.shift();if(a.id==f)return a;d=a.childNodes;for(b=0;b<d.length;b++){a=d[b];if(a.nodeType==1)c[c.length]=a}}return null};if(document.documentElement.getBoundingClientRect)Sys.UI.DomElement.getLocation=function(a){if(a.self||a.nodeType===9||a===document.documentElement||a.parentNode===a.ownerDocument.documentElement)return new Sys.UI.Point(0,0);var f=a.getBoundingClientRect();if(!f)return new Sys.UI.Point(0,0);var e=a.ownerDocument.documentElement,h=a.ownerDocument.body,l,c=Math.round(f.left)+(e.scrollLeft||h.scrollLeft),d=Math.round(f.top)+(e.scrollTop||h.scrollTop);if(Sys.Browser.agent===Sys.Browser.InternetExplorer){try{var g=a.ownerDocument.parentWindow.frameElement||null;if(g){var i=g.frameBorder==="0"||g.frameBorder==="no"?2:0;c+=i;d+=i}}catch(m){}if(Sys.Browser.version===7&&!document.documentMode){var j=document.body,k=j.getBoundingClientRect(),b=(k.right-k.left)/j.clientWidth;b=Math.round(b*100);b=(b-b%5)/100;if(!isNaN(b)&&b!==1){c=Math.round(c/b);d=Math.round(d/b)}}if((document.documentMode||0)<8){c-=e.clientLeft;d-=e.clientTop}}return new Sys.UI.Point(c,d)};else if(Sys.Browser.agent===Sys.Browser.Safari)Sys.UI.DomElement.getLocation=function(c){if(c.window&&c.window===c||c.nodeType===9)return new Sys.UI.Point(0,0);var d=0,e=0,a,j=null,g=null,b;for(a=c;a;j=a,(g=b,a=a.offsetParent)){b=Sys.UI.DomElement._getCurrentStyle(a);var f=a.tagName?a.tagName.toUpperCase():null;if((a.offsetLeft||a.offsetTop)&&(f!=="BODY"||(!g||g.position!=="absolute"))){d+=a.offsetLeft;e+=a.offsetTop}if(j&&Sys.Browser.version>=3){d+=parseInt(b.borderLeftWidth);e+=parseInt(b.borderTopWidth)}}b=Sys.UI.DomElement._getCurrentStyle(c);var h=b?b.position:null;if(!h||h!=="absolute")for(a=c.parentNode;a;a=a.parentNode){f=a.tagName?a.tagName.toUpperCase():null;if(f!=="BODY"&&f!=="HTML"&&(a.scrollLeft||a.scrollTop)){d-=a.scrollLeft||0;e-=a.scrollTop||0}b=Sys.UI.DomElement._getCurrentStyle(a);var i=b?b.position:null;if(i&&i==="absolute")break}return new Sys.UI.Point(d,e)};else Sys.UI.DomElement.getLocation=function(d){if(d.window&&d.window===d||d.nodeType===9)return new Sys.UI.Point(0,0);var e=0,f=0,a,i=null,g=null,b=null;for(a=d;a;i=a,(g=b,a=a.offsetParent)){var c=a.tagName?a.tagName.toUpperCase():null;b=Sys.UI.DomElement._getCurrentStyle(a);if((a.offsetLeft||a.offsetTop)&&!(c==="BODY"&&(!g||g.position!=="absolute"))){e+=a.offsetLeft;f+=a.offsetTop}if(i!==null&&b){if(c!=="TABLE"&&c!=="TD"&&c!=="HTML"){e+=parseInt(b.borderLeftWidth)||0;f+=parseInt(b.borderTopWidth)||0}if(c==="TABLE"&&(b.position==="relative"||b.position==="absolute")){e+=parseInt(b.marginLeft)||0;f+=parseInt(b.marginTop)||0}}}b=Sys.UI.DomElement._getCurrentStyle(d);var h=b?b.position:null;if(!h||h!=="absolute")for(a=d.parentNode;a;a=a.parentNode){c=a.tagName?a.tagName.toUpperCase():null;if(c!=="BODY"&&c!=="HTML"&&(a.scrollLeft||a.scrollTop)){e-=a.scrollLeft||0;f-=a.scrollTop||0;b=Sys.UI.DomElement._getCurrentStyle(a);if(b){e+=parseInt(b.borderLeftWidth)||0;f+=parseInt(b.borderTopWidth)||0}}}return new Sys.UI.Point(e,f)};Sys.UI.DomElement.isDomElement=function(a){return Sys._isDomElement(a)};Sys.UI.DomElement.removeCssClass=function(d,c){var a=" "+d.className+" ",b=a.indexOf(" "+c+" ");if(b>=0)d.className=(a.substr(0,b)+" "+a.substring(b+c.length+1,a.length)).trim()};Sys.UI.DomElement.resolveElement=function(b,c){var a=b;if(!a)return null;if(typeof a==="string")a=Sys.UI.DomElement.getElementById(a,c);return a};Sys.UI.DomElement.raiseBubbleEvent=function(c,d){var b=c;while(b){var a=b.control;if(a&&a.onBubbleEvent&&a.raiseBubbleEvent){Sys.UI.DomElement._raiseBubbleEventFromControl(a,c,d);return}b=b.parentNode}};Sys.UI.DomElement._raiseBubbleEventFromControl=function(a,b,c){if(!a.onBubbleEvent(b,c))a._raiseBubbleEvent(b,c)};Sys.UI.DomElement.setLocation=function(b,c,d){var a=b.style;a.position="absolute";a.left=c+"px";a.top=d+"px"};Sys.UI.DomElement.toggleCssClass=function(b,a){if(Sys.UI.DomElement.containsCssClass(b,a))Sys.UI.DomElement.removeCssClass(b,a);else Sys.UI.DomElement.addCssClass(b,a)};Sys.UI.DomElement.getVisibilityMode=function(a){return a._visibilityMode===Sys.UI.VisibilityMode.hide?Sys.UI.VisibilityMode.hide:Sys.UI.VisibilityMode.collapse};Sys.UI.DomElement.setVisibilityMode=function(a,b){Sys.UI.DomElement._ensureOldDisplayMode(a);if(a._visibilityMode!==b){a._visibilityMode=b;if(Sys.UI.DomElement.getVisible(a)===false)if(a._visibilityMode===Sys.UI.VisibilityMode.hide)a.style.display=a._oldDisplayMode;else a.style.display="none";a._visibilityMode=b}};Sys.UI.DomElement.getVisible=function(b){var a=b.currentStyle||Sys.UI.DomElement._getCurrentStyle(b);if(!a)return true;return a.visibility!=="hidden"&&a.display!=="none"};Sys.UI.DomElement.setVisible=function(a,b){if(b!==Sys.UI.DomElement.getVisible(a)){Sys.UI.DomElement._ensureOldDisplayMode(a);a.style.visibility=b?"visible":"hidden";if(b||a._visibilityMode===Sys.UI.VisibilityMode.hide)a.style.display=a._oldDisplayMode;else a.style.display="none"}};Sys.UI.DomElement._ensureOldDisplayMode=function(a){if(!a._oldDisplayMode){var b=a.currentStyle||Sys.UI.DomElement._getCurrentStyle(a);a._oldDisplayMode=b?b.display:null;if(!a._oldDisplayMode||a._oldDisplayMode==="none")switch(a.tagName.toUpperCase()){case "DIV":case "P":case "ADDRESS":case "BLOCKQUOTE":case "BODY":case "COL":case "COLGROUP":case "DD":case "DL":case "DT":case "FIELDSET":case "FORM":case "H1":case "H2":case "H3":case "H4":case "H5":case "H6":case "HR":case "IFRAME":case "LEGEND":case "OL":case "PRE":case "TABLE":case "TD":case "TH":case "TR":case "UL":a._oldDisplayMode="block";break;case "LI":a._oldDisplayMode="list-item";break;default:a._oldDisplayMode="inline"}}};Sys.UI.DomElement._getWindow=function(a){var b=a.ownerDocument||a.document||a;return b.defaultView||b.parentWindow};Sys.UI.DomElement._getCurrentStyle=function(a){if(a.nodeType===3)return null;var c=Sys.UI.DomElement._getWindow(a);if(a.documentElement)a=a.documentElement;var b=c&&a!==c&&c.getComputedStyle?c.getComputedStyle(a,null):a.currentStyle||a.style;if(!b&&Sys.Browser.agent===Sys.Browser.Safari&&a.style){var g=a.style.display,f=a.style.position;a.style.position="absolute";a.style.display="block";var e=c.getComputedStyle(a,null);a.style.display=g;a.style.position=f;b={};for(var d in e)b[d]=e[d];b.display="none"}return b};Sys.IContainer=function(){};Sys.IContainer.prototype={};Sys.IContainer.registerInterface("Sys.IContainer");Sys.ApplicationLoadEventArgs=function(b,a){Sys.ApplicationLoadEventArgs.initializeBase(this);this._components=b;this._isPartialLoad=a};Sys.ApplicationLoadEventArgs.prototype={get_components:function(){return this._components},get_isPartialLoad:function(){return this._isPartialLoad}};Sys.ApplicationLoadEventArgs.registerClass("Sys.ApplicationLoadEventArgs",Sys.EventArgs);Sys._Application=function(){Sys._Application.initializeBase(this);this._disposableObjects=[];this._components={};this._createdComponents=[];this._secondPassComponents=[];this._unloadHandlerDelegate=Function.createDelegate(this,this._unloadHandler);Sys.UI.DomEvent.addHandler(window,"unload",this._unloadHandlerDelegate);this._domReady()};Sys._Application.prototype={_creatingComponents:false,_disposing:false,_deleteCount:0,get_isCreatingComponents:function(){return this._creatingComponents},get_isDisposing:function(){return this._disposing},add_init:function(a){if(this._initialized)a(this,Sys.EventArgs.Empty);else this.get_events().addHandler("init",a)},remove_init:function(a){this.get_events().removeHandler("init",a)},add_load:function(a){this.get_events().addHandler("load",a)},remove_load:function(a){this.get_events().removeHandler("load",a)},add_unload:function(a){this.get_events().addHandler("unload",a)},remove_unload:function(a){this.get_events().removeHandler("unload",a)},addComponent:function(a){this._components[a.get_id()]=a},beginCreateComponents:function(){this._creatingComponents=true},dispose:function(){if(!this._disposing){this._disposing=true;if(this._timerCookie){window.clearTimeout(this._timerCookie);delete this._timerCookie}if(this._endRequestHandler){Sys.WebForms.PageRequestManager.getInstance().remove_endRequest(this._endRequestHandler);delete this._endRequestHandler}if(this._beginRequestHandler){Sys.WebForms.PageRequestManager.getInstance().remove_beginRequest(this._beginRequestHandler);delete this._beginRequestHandler}if(window.pageUnload)window.pageUnload(this,Sys.EventArgs.Empty);var c=this.get_events().getHandler("unload");if(c)c(this,Sys.EventArgs.Empty);var b=Array.clone(this._disposableObjects);for(var a=0,f=b.length;a<f;a++){var d=b[a];if(typeof d!=="undefined")d.dispose()}Array.clear(this._disposableObjects);Sys.UI.DomEvent.removeHandler(window,"unload",this._unloadHandlerDelegate);if(Sys._ScriptLoader){var e=Sys._ScriptLoader.getInstance();if(e)e.dispose()}Sys._Application.callBaseMethod(this,"dispose")}},disposeElement:function(c,j){if(c.nodeType===1){var b,h=c.getElementsByTagName("*"),g=h.length,i=new Array(g);for(b=0;b<g;b++)i[b]=h[b];for(b=g-1;b>=0;b--){var d=i[b],f=d.dispose;if(f&&typeof f==="function")d.dispose();else{var e=d.control;if(e&&typeof e.dispose==="function")e.dispose()}var a=d._behaviors;if(a)this._disposeComponents(a);a=d._components;if(a){this._disposeComponents(a);d._components=null}}if(!j){var f=c.dispose;if(f&&typeof f==="function")c.dispose();else{var e=c.control;if(e&&typeof e.dispose==="function")e.dispose()}var a=c._behaviors;if(a)this._disposeComponents(a);a=c._components;if(a){this._disposeComponents(a);c._components=null}}}},endCreateComponents:function(){var b=this._secondPassComponents;for(var a=0,d=b.length;a<d;a++){var c=b[a].component;Sys$Component$_setReferences(c,b[a].references);c.endUpdate()}this._secondPassComponents=[];this._creatingComponents=false},findComponent:function(b,a){return a?Sys.IContainer.isInstanceOfType(a)?a.findComponent(b):a[b]||null:Sys.Application._components[b]||null},getComponents:function(){var a=[],b=this._components;for(var c in b)a[a.length]=b[c];return a},initialize:function(){if(!this.get_isInitialized()&&!this._disposing){Sys._Application.callBaseMethod(this,"initialize");this._raiseInit();if(this.get_stateString){if(Sys.WebForms&&Sys.WebForms.PageRequestManager){this._beginRequestHandler=Function.createDelegate(this,this._onPageRequestManagerBeginRequest);Sys.WebForms.PageRequestManager.getInstance().add_beginRequest(this._beginRequestHandler);this._endRequestHandler=Function.createDelegate(this,this._onPageRequestManagerEndRequest);Sys.WebForms.PageRequestManager.getInstance().add_endRequest(this._endRequestHandler)}var a=this.get_stateString();if(a!==this._currentEntry)this._navigate(a);else this._ensureHistory()}this.raiseLoad()}},notifyScriptLoaded:function(){},registerDisposableObject:function(b){if(!this._disposing){var a=this._disposableObjects,c=a.length;a[c]=b;b.__msdisposeindex=c}},raiseLoad:function(){var b=this.get_events().getHandler("load"),a=new Sys.ApplicationLoadEventArgs(Array.clone(this._createdComponents),!!this._loaded);this._loaded=true;if(b)b(this,a);if(window.pageLoad)window.pageLoad(this,a);this._createdComponents=[]},removeComponent:function(b){var a=b.get_id();if(a)delete this._components[a]},unregisterDisposableObject:function(a){if(!this._disposing){var e=a.__msdisposeindex;if(typeof e==="number"){var b=this._disposableObjects;delete b[e];delete a.__msdisposeindex;if(++this._deleteCount>1000){var c=[];for(var d=0,f=b.length;d<f;d++){a=b[d];if(typeof a!=="undefined"){a.__msdisposeindex=c.length;c.push(a)}}this._disposableObjects=c;this._deleteCount=0}}}},_addComponentToSecondPass:function(b,a){this._secondPassComponents[this._secondPassComponents.length]={component:b,references:a}},_disposeComponents:function(a){if(a)for(var b=a.length-1;b>=0;b--){var c=a[b];if(typeof c.dispose==="function")c.dispose()}},_domReady:function(){var a,g,f=this;function b(){f.initialize()}var c=function(){Sys.UI.DomEvent.removeHandler(window,"load",c);b()};Sys.UI.DomEvent.addHandler(window,"load",c);if(document.addEventListener)try{document.addEventListener("DOMContentLoaded",a=function(){document.removeEventListener("DOMContentLoaded",a,false);b()},false)}catch(h){}else if(document.attachEvent)if(window==window.top&&document.documentElement.doScroll){var e,d=document.createElement("div");a=function(){try{d.doScroll("left")}catch(c){e=window.setTimeout(a,0);return}d=null;b()};a()}else document.attachEvent("onreadystatechange",a=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",a);b()}})},_raiseInit:function(){var a=this.get_events().getHandler("init");if(a){this.beginCreateComponents();a(this,Sys.EventArgs.Empty);this.endCreateComponents()}},_unloadHandler:function(){this.dispose()}};Sys._Application.registerClass("Sys._Application",Sys.Component,Sys.IContainer);Sys.Application=new Sys._Application;var $find=Sys.Application.findComponent;Sys.UI.Behavior=function(b){Sys.UI.Behavior.initializeBase(this);this._element=b;var a=b._behaviors;if(!a)b._behaviors=[this];else a[a.length]=this};Sys.UI.Behavior.prototype={_name:null,get_element:function(){return this._element},get_id:function(){var a=Sys.UI.Behavior.callBaseMethod(this,"get_id");if(a)return a;if(!this._element||!this._element.id)return "";return this._element.id+"$"+this.get_name()},get_name:function(){if(this._name)return this._name;var a=Object.getTypeName(this),b=a.lastIndexOf(".");if(b!==-1)a=a.substr(b+1);if(!this.get_isInitialized())this._name=a;return a},set_name:function(a){this._name=a},initialize:function(){Sys.UI.Behavior.callBaseMethod(this,"initialize");var a=this.get_name();if(a)this._element[a]=this},dispose:function(){Sys.UI.Behavior.callBaseMethod(this,"dispose");var a=this._element;if(a){var c=this.get_name();if(c)a[c]=null;var b=a._behaviors;Array.remove(b,this);if(b.length===0)a._behaviors=null;delete this._element}}};Sys.UI.Behavior.registerClass("Sys.UI.Behavior",Sys.Component);Sys.UI.Behavior.getBehaviorByName=function(b,c){var a=b[c];return a&&Sys.UI.Behavior.isInstanceOfType(a)?a:null};Sys.UI.Behavior.getBehaviors=function(a){if(!a._behaviors)return [];return Array.clone(a._behaviors)};Sys.UI.Behavior.getBehaviorsByType=function(d,e){var a=d._behaviors,c=[];if(a)for(var b=0,f=a.length;b<f;b++)if(e.isInstanceOfType(a[b]))c[c.length]=a[b];return c};Sys.UI.VisibilityMode=function(){throw Error.notImplemented()};Sys.UI.VisibilityMode.prototype={hide:0,collapse:1};Sys.UI.VisibilityMode.registerEnum("Sys.UI.VisibilityMode");Sys.UI.Control=function(a){Sys.UI.Control.initializeBase(this);this._element=a;a.control=this;var b=this.get_role();if(b)a.setAttribute("role",b)};Sys.UI.Control.prototype={_parent:null,_visibilityMode:Sys.UI.VisibilityMode.hide,get_element:function(){return this._element},get_id:function(){if(!this._element)return "";return this._element.id},set_id:function(){throw Error.invalidOperation(Sys.Res.cantSetId)},get_parent:function(){if(this._parent)return this._parent;if(!this._element)return null;var a=this._element.parentNode;while(a){if(a.control)return a.control;a=a.parentNode}return null},set_parent:function(a){this._parent=a},get_role:function(){return null},get_visibilityMode:function(){return Sys.UI.DomElement.getVisibilityMode(this._element)},set_visibilityMode:function(a){Sys.UI.DomElement.setVisibilityMode(this._element,a)},get_visible:function(){return Sys.UI.DomElement.getVisible(this._element)},set_visible:function(a){Sys.UI.DomElement.setVisible(this._element,a)},addCssClass:function(a){Sys.UI.DomElement.addCssClass(this._element,a)},dispose:function(){Sys.UI.Control.callBaseMethod(this,"dispose");if(this._element){this._element.control=null;delete this._element}if(this._parent)delete this._parent},onBubbleEvent:function(){return false},raiseBubbleEvent:function(a,b){this._raiseBubbleEvent(a,b)},_raiseBubbleEvent:function(b,c){var a=this.get_parent();while(a){if(a.onBubbleEvent(b,c))return;a=a.get_parent()}},removeCssClass:function(a){Sys.UI.DomElement.removeCssClass(this._element,a)},toggleCssClass:function(a){Sys.UI.DomElement.toggleCssClass(this._element,a)}};Sys.UI.Control.registerClass("Sys.UI.Control",Sys.Component);Sys.HistoryEventArgs=function(a){Sys.HistoryEventArgs.initializeBase(this);this._state=a};Sys.HistoryEventArgs.prototype={get_state:function(){return this._state}};Sys.HistoryEventArgs.registerClass("Sys.HistoryEventArgs",Sys.EventArgs);Sys.Application._appLoadHandler=null;Sys.Application._beginRequestHandler=null;Sys.Application._clientId=null;Sys.Application._currentEntry="";Sys.Application._endRequestHandler=null;Sys.Application._history=null;Sys.Application._enableHistory=false;Sys.Application._historyFrame=null;Sys.Application._historyInitialized=false;Sys.Application._historyPointIsNew=false;Sys.Application._ignoreTimer=false;Sys.Application._initialState=null;Sys.Application._state={};Sys.Application._timerCookie=0;Sys.Application._timerHandler=null;Sys.Application._uniqueId=null;Sys._Application.prototype.get_stateString=function(){var a=null;if(Sys.Browser.agent===Sys.Browser.Firefox){var c=window.location.href,b=c.indexOf("#");if(b!==-1)a=c.substring(b+1);else a="";return a}else a=window.location.hash;if(a.length>0&&a.charAt(0)==="#")a=a.substring(1);return a};Sys._Application.prototype.get_enableHistory=function(){return this._enableHistory};Sys._Application.prototype.set_enableHistory=function(a){this._enableHistory=a};Sys._Application.prototype.add_navigate=function(a){this.get_events().addHandler("navigate",a)};Sys._Application.prototype.remove_navigate=function(a){this.get_events().removeHandler("navigate",a)};Sys._Application.prototype.addHistoryPoint=function(c,f){this._ensureHistory();var b=this._state;for(var a in c){var d=c[a];if(d===null){if(typeof b[a]!=="undefined")delete b[a]}else b[a]=d}var e=this._serializeState(b);this._historyPointIsNew=true;this._setState(e,f);this._raiseNavigate()};Sys._Application.prototype.setServerId=function(a,b){this._clientId=a;this._uniqueId=b};Sys._Application.prototype.setServerState=function(a){this._ensureHistory();this._state.__s=a;this._updateHiddenField(a)};Sys._Application.prototype._deserializeState=function(a){var e={};a=a||"";var b=a.indexOf("&&");if(b!==-1&&b+2<a.length){e.__s=a.substr(b+2);a=a.substr(0,b)}var g=a.split("&");for(var f=0,j=g.length;f<j;f++){var d=g[f],c=d.indexOf("=");if(c!==-1&&c+1<d.length){var i=d.substr(0,c),h=d.substr(c+1);e[i]=decodeURIComponent(h)}}return e};Sys._Application.prototype._enableHistoryInScriptManager=function(){this._enableHistory=true};Sys._Application.prototype._ensureHistory=function(){if(!this._historyInitialized&&this._enableHistory){if(Sys.Browser.agent===Sys.Browser.InternetExplorer&&Sys.Browser.documentMode<8){this._historyFrame=document.getElementById("__historyFrame");this._ignoreIFrame=true}this._timerHandler=Function.createDelegate(this,this._onIdle);this._timerCookie=window.setTimeout(this._timerHandler,100);try{this._initialState=this._deserializeState(this.get_stateString())}catch(a){}this._historyInitialized=true}};Sys._Application.prototype._navigate=function(c){this._ensureHistory();var b=this._deserializeState(c);if(this._uniqueId){var d=this._state.__s||"",a=b.__s||"";if(a!==d){this._updateHiddenField(a);__doPostBack(this._uniqueId,a);this._state=b;return}}this._setState(c);this._state=b;this._raiseNavigate()};Sys._Application.prototype._onIdle=function(){delete this._timerCookie;var a=this.get_stateString();if(a!==this._currentEntry){if(!this._ignoreTimer){this._historyPointIsNew=false;this._navigate(a)}}else this._ignoreTimer=false;this._timerCookie=window.setTimeout(this._timerHandler,100)};Sys._Application.prototype._onIFrameLoad=function(a){this._ensureHistory();if(!this._ignoreIFrame){this._historyPointIsNew=false;this._navigate(a)}this._ignoreIFrame=false};Sys._Application.prototype._onPageRequestManagerBeginRequest=function(){this._ignoreTimer=true;this._originalTitle=document.title};Sys._Application.prototype._onPageRequestManagerEndRequest=function(g,f){var d=f.get_dataItems()[this._clientId],c=this._originalTitle;this._originalTitle=null;var b=document.getElementById("__EVENTTARGET");if(b&&b.value===this._uniqueId)b.value="";if(typeof d!=="undefined"){this.setServerState(d);this._historyPointIsNew=true}else this._ignoreTimer=false;var a=this._serializeState(this._state);if(a!==this._currentEntry){this._ignoreTimer=true;if(typeof c==="string"){if(Sys.Browser.agent!==Sys.Browser.InternetExplorer||Sys.Browser.version>7){var e=document.title;document.title=c;this._setState(a);document.title=e}else this._setState(a);this._raiseNavigate()}else{this._setState(a);this._raiseNavigate()}}};Sys._Application.prototype._raiseNavigate=function(){var d=this._historyPointIsNew,c=this.get_events().getHandler("navigate"),b={};for(var a in this._state)if(a!=="__s")b[a]=this._state[a];var e=new Sys.HistoryEventArgs(b);if(c)c(this,e);if(!d){var f;try{if(Sys.Browser.agent===Sys.Browser.Firefox&&window.location.hash&&(!window.frameElement||window.top.location.hash))Sys.Browser.version<3.5?window.history.go(0):(location.hash=this.get_stateString())}catch(g){}}};Sys._Application.prototype._serializeState=function(d){var b=[];for(var a in d){var e=d[a];if(a==="__s")var c=e;else b[b.length]=a+"="+encodeURIComponent(e)}return b.join("&")+(c?"&&"+c:"")};Sys._Application.prototype._setState=function(a,b){if(this._enableHistory){a=a||"";if(a!==this._currentEntry){if(window.theForm){var d=window.theForm.action,e=d.indexOf("#");window.theForm.action=(e!==-1?d.substring(0,e):d)+"#"+a}if(this._historyFrame&&this._historyPointIsNew){var f=document.createElement("div");f.appendChild(document.createTextNode(b||document.title));var g=f.innerHTML;this._ignoreIFrame=true;var c=this._historyFrame.contentWindow.document;c.open("javascript:'<html></html>'");c.write("<html><head><title>"+g+"</title><scri"+'pt type="text/javascript">parent.Sys.Application._onIFrameLoad('+Sys.Serialization.JavaScriptSerializer.serialize(a)+");</scri"+"pt></head><body></body></html>");c.close()}this._ignoreTimer=false;this._currentEntry=a;if(this._historyFrame||this._historyPointIsNew){var h=this.get_stateString();if(a!==h){window.location.hash=a;this._currentEntry=this.get_stateString();if(typeof b!=="undefined"&&b!==null)document.title=b}}this._historyPointIsNew=false}}};Sys._Application.prototype._updateHiddenField=function(b){if(this._clientId){var a=document.getElementById(this._clientId);if(a)a.value=b}};if(!window.XMLHttpRequest)window.XMLHttpRequest=function(){var b=["Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP"];for(var a=0,c=b.length;a<c;a++)try{return new ActiveXObject(b[a])}catch(d){}return null};Type.registerNamespace("Sys.Net");Sys.Net.WebRequestExecutor=function(){this._webRequest=null;this._resultObject=null};Sys.Net.WebRequestExecutor.prototype={get_webRequest:function(){return this._webRequest},_set_webRequest:function(a){this._webRequest=a},get_started:function(){throw Error.notImplemented()},get_responseAvailable:function(){throw Error.notImplemented()},get_timedOut:function(){throw Error.notImplemented()},get_aborted:function(){throw Error.notImplemented()},get_responseData:function(){throw Error.notImplemented()},get_statusCode:function(){throw Error.notImplemented()},get_statusText:function(){throw Error.notImplemented()},get_xml:function(){throw Error.notImplemented()},get_object:function(){if(!this._resultObject)this._resultObject=Sys.Serialization.JavaScriptSerializer.deserialize(this.get_responseData());return this._resultObject},executeRequest:function(){throw Error.notImplemented()},abort:function(){throw Error.notImplemented()},getResponseHeader:function(){throw Error.notImplemented()},getAllResponseHeaders:function(){throw Error.notImplemented()}};Sys.Net.WebRequestExecutor.registerClass("Sys.Net.WebRequestExecutor");Sys.Net.XMLDOM=function(d){if(!window.DOMParser){var c=["Msxml2.DOMDocument.3.0","Msxml2.DOMDocument"];for(var b=0,f=c.length;b<f;b++)try{var a=new ActiveXObject(c[b]);a.async=false;a.loadXML(d);a.setProperty("SelectionLanguage","XPath");return a}catch(g){}}else try{var e=new window.DOMParser;return e.parseFromString(d,"text/xml")}catch(g){}return null};Sys.Net.XMLHttpExecutor=function(){Sys.Net.XMLHttpExecutor.initializeBase(this);var a=this;this._xmlHttpRequest=null;this._webRequest=null;this._responseAvailable=false;this._timedOut=false;this._timer=null;this._aborted=false;this._started=false;this._onReadyStateChange=function(){if(a._xmlHttpRequest.readyState===4){try{if(typeof a._xmlHttpRequest.status==="undefined")return}catch(b){return}a._clearTimer();a._responseAvailable=true;try{a._webRequest.completed(Sys.EventArgs.Empty)}finally{if(a._xmlHttpRequest!=null){a._xmlHttpRequest.onreadystatechange=Function.emptyMethod;a._xmlHttpRequest=null}}}};this._clearTimer=function(){if(a._timer!=null){window.clearTimeout(a._timer);a._timer=null}};this._onTimeout=function(){if(!a._responseAvailable){a._clearTimer();a._timedOut=true;a._xmlHttpRequest.onreadystatechange=Function.emptyMethod;a._xmlHttpRequest.abort();a._webRequest.completed(Sys.EventArgs.Empty);a._xmlHttpRequest=null}}};Sys.Net.XMLHttpExecutor.prototype={get_timedOut:function(){return this._timedOut},get_started:function(){return this._started},get_responseAvailable:function(){return this._responseAvailable},get_aborted:function(){return this._aborted},executeRequest:function(){this._webRequest=this.get_webRequest();var c=this._webRequest.get_body(),a=this._webRequest.get_headers();this._xmlHttpRequest=new XMLHttpRequest;this._xmlHttpRequest.onreadystatechange=this._onReadyStateChange;var e=this._webRequest.get_httpVerb();this._xmlHttpRequest.open(e,this._webRequest.getResolvedUrl(),true);this._xmlHttpRequest.setRequestHeader("X-Requested-With","XMLHttpRequest");if(a)for(var b in a){var f=a[b];if(typeof f!=="function")this._xmlHttpRequest.setRequestHeader(b,f)}if(e.toLowerCase()==="post"){if(a===null||!a["Content-Type"])this._xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");if(!c)c=""}var d=this._webRequest.get_timeout();if(d>0)this._timer=window.setTimeout(Function.createDelegate(this,this._onTimeout),d);this._xmlHttpRequest.send(c);this._started=true},getResponseHeader:function(b){var a;try{a=this._xmlHttpRequest.getResponseHeader(b)}catch(c){}if(!a)a="";return a},getAllResponseHeaders:function(){return this._xmlHttpRequest.getAllResponseHeaders()},get_responseData:function(){return this._xmlHttpRequest.responseText},get_statusCode:function(){var a=0;try{a=this._xmlHttpRequest.status}catch(b){}return a},get_statusText:function(){return this._xmlHttpRequest.statusText},get_xml:function(){var a=this._xmlHttpRequest.responseXML;if(!a||!a.documentElement){a=Sys.Net.XMLDOM(this._xmlHttpRequest.responseText);if(!a||!a.documentElement)return null}else if(navigator.userAgent.indexOf("MSIE")!==-1&&typeof a.setProperty!="undefined")a.setProperty("SelectionLanguage","XPath");if(a.documentElement.namespaceURI==="http://www.mozilla.org/newlayout/xml/parsererror.xml"&&a.documentElement.tagName==="parsererror")return null;if(a.documentElement.firstChild&&a.documentElement.firstChild.tagName==="parsererror")return null;return a},abort:function(){if(this._aborted||this._responseAvailable||this._timedOut)return;this._aborted=true;this._clearTimer();if(this._xmlHttpRequest&&!this._responseAvailable){this._xmlHttpRequest.onreadystatechange=Function.emptyMethod;this._xmlHttpRequest.abort();this._xmlHttpRequest=null;this._webRequest.completed(Sys.EventArgs.Empty)}}};Sys.Net.XMLHttpExecutor.registerClass("Sys.Net.XMLHttpExecutor",Sys.Net.WebRequestExecutor);Sys.Net._WebRequestManager=function(){this._defaultTimeout=0;this._defaultExecutorType="Sys.Net.XMLHttpExecutor"};Sys.Net._WebRequestManager.prototype={add_invokingRequest:function(a){this._get_eventHandlerList().addHandler("invokingRequest",a)},remove_invokingRequest:function(a){this._get_eventHandlerList().removeHandler("invokingRequest",a)},add_completedRequest:function(a){this._get_eventHandlerList().addHandler("completedRequest",a)},remove_completedRequest:function(a){this._get_eventHandlerList().removeHandler("completedRequest",a)},_get_eventHandlerList:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_defaultTimeout:function(){return this._defaultTimeout},set_defaultTimeout:function(a){this._defaultTimeout=a},get_defaultExecutorType:function(){return this._defaultExecutorType},set_defaultExecutorType:function(a){this._defaultExecutorType=a},executeRequest:function(webRequest){var executor=webRequest.get_executor();if(!executor){var failed=false;try{var executorType=eval(this._defaultExecutorType);executor=new executorType}catch(a){failed=true}webRequest.set_executor(executor)}if(executor.get_aborted())return;var evArgs=new Sys.Net.NetworkRequestEventArgs(webRequest),handler=this._get_eventHandlerList().getHandler("invokingRequest");if(handler)handler(this,evArgs);if(!evArgs.get_cancel())executor.executeRequest()}};Sys.Net._WebRequestManager.registerClass("Sys.Net._WebRequestManager");Sys.Net.WebRequestManager=new Sys.Net._WebRequestManager;Sys.Net.NetworkRequestEventArgs=function(a){Sys.Net.NetworkRequestEventArgs.initializeBase(this);this._webRequest=a};Sys.Net.NetworkRequestEventArgs.prototype={get_webRequest:function(){return this._webRequest}};Sys.Net.NetworkRequestEventArgs.registerClass("Sys.Net.NetworkRequestEventArgs",Sys.CancelEventArgs);Sys.Net.WebRequest=function(){this._url="";this._headers={};this._body=null;this._userContext=null;this._httpVerb=null;this._executor=null;this._invokeCalled=false;this._timeout=0};Sys.Net.WebRequest.prototype={add_completed:function(a){this._get_eventHandlerList().addHandler("completed",a)},remove_completed:function(a){this._get_eventHandlerList().removeHandler("completed",a)},completed:function(b){var a=Sys.Net.WebRequestManager._get_eventHandlerList().getHandler("completedRequest");if(a)a(this._executor,b);a=this._get_eventHandlerList().getHandler("completed");if(a)a(this._executor,b)},_get_eventHandlerList:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_url:function(){return this._url},set_url:function(a){this._url=a},get_headers:function(){return this._headers},get_httpVerb:function(){if(this._httpVerb===null){if(this._body===null)return "GET";return "POST"}return this._httpVerb},set_httpVerb:function(a){this._httpVerb=a},get_body:function(){return this._body},set_body:function(a){this._body=a},get_userContext:function(){return this._userContext},set_userContext:function(a){this._userContext=a},get_executor:function(){return this._executor},set_executor:function(a){this._executor=a;this._executor._set_webRequest(this)},get_timeout:function(){if(this._timeout===0)return Sys.Net.WebRequestManager.get_defaultTimeout();return this._timeout},set_timeout:function(a){this._timeout=a},getResolvedUrl:function(){return Sys.Net.WebRequest._resolveUrl(this._url)},invoke:function(){Sys.Net.WebRequestManager.executeRequest(this);this._invokeCalled=true}};Sys.Net.WebRequest._resolveUrl=function(b,a){if(b&&b.indexOf("://")!==-1)return b;if(!a||a.length===0){var d=document.getElementsByTagName("base")[0];if(d&&d.href&&d.href.length>0)a=d.href;else a=document.URL}var c=a.indexOf("?");if(c!==-1)a=a.substr(0,c);c=a.indexOf("#");if(c!==-1)a=a.substr(0,c);a=a.substr(0,a.lastIndexOf("/")+1);if(!b||b.length===0)return a;if(b.charAt(0)==="/"){var e=a.indexOf("://"),g=a.indexOf("/",e+3);return a.substr(0,g)+b}else{var f=a.lastIndexOf("/");return a.substr(0,f+1)+b}};Sys.Net.WebRequest._createQueryString=function(c,b,f){b=b||encodeURIComponent;var h=0,e,g,d,a=new Sys.StringBuilder;if(c)for(d in c){e=c[d];if(typeof e==="function")continue;g=Sys.Serialization.JavaScriptSerializer.serialize(e);if(h++)a.append("&");a.append(d);a.append("=");a.append(b(g))}if(f){if(h)a.append("&");a.append(f)}return a.toString()};Sys.Net.WebRequest._createUrl=function(a,b,c){if(!b&&!c)return a;var d=Sys.Net.WebRequest._createQueryString(b,null,c);return d.length?a+(a&&a.indexOf("?")>=0?"&":"?")+d:a};Sys.Net.WebRequest.registerClass("Sys.Net.WebRequest");Sys._ScriptLoaderTask=function(b,a){this._scriptElement=b;this._completedCallback=a};Sys._ScriptLoaderTask.prototype={get_scriptElement:function(){return this._scriptElement},dispose:function(){if(this._disposed)return;this._disposed=true;this._removeScriptElementHandlers();Sys._ScriptLoaderTask._clearScript(this._scriptElement);this._scriptElement=null},execute:function(){if(this._ensureReadyStateLoaded())this._executeInternal()},_executeInternal:function(){this._addScriptElementHandlers();document.getElementsByTagName("head")[0].appendChild(this._scriptElement)},_ensureReadyStateLoaded:function(){if(this._useReadyState()&&this._scriptElement.readyState!=="loaded"&&this._scriptElement.readyState!=="complete"){this._scriptDownloadDelegate=Function.createDelegate(this,this._executeInternal);$addHandler(this._scriptElement,"readystatechange",this._scriptDownloadDelegate);return false}return true},_addScriptElementHandlers:function(){if(this._scriptDownloadDelegate){$removeHandler(this._scriptElement,"readystatechange",this._scriptDownloadDelegate);this._scriptDownloadDelegate=null}this._scriptLoadDelegate=Function.createDelegate(this,this._scriptLoadHandler);if(this._useReadyState())$addHandler(this._scriptElement,"readystatechange",this._scriptLoadDelegate);else $addHandler(this._scriptElement,"load",this._scriptLoadDelegate);if(this._scriptElement.addEventListener){this._scriptErrorDelegate=Function.createDelegate(this,this._scriptErrorHandler);this._scriptElement.addEventListener("error",this._scriptErrorDelegate,false)}},_removeScriptElementHandlers:function(){if(this._scriptLoadDelegate){var a=this.get_scriptElement();if(this._scriptDownloadDelegate){$removeHandler(this._scriptElement,"readystatechange",this._scriptDownloadDelegate);this._scriptDownloadDelegate=null}if(this._useReadyState()&&this._scriptLoadDelegate)$removeHandler(a,"readystatechange",this._scriptLoadDelegate);else $removeHandler(a,"load",this._scriptLoadDelegate);if(this._scriptErrorDelegate){this._scriptElement.removeEventListener("error",this._scriptErrorDelegate,false);this._scriptErrorDelegate=null}this._scriptLoadDelegate=null}},_scriptErrorHandler:function(){if(this._disposed)return;this._completedCallback(this.get_scriptElement(),false)},_scriptLoadHandler:function(){if(this._disposed)return;var a=this.get_scriptElement();if(this._useReadyState()&&a.readyState!=="complete")return;this._completedCallback(a,true)},_useReadyState:function(){return Sys.Browser.agent===Sys.Browser.InternetExplorer&&(Sys.Browser.version<9||(document.documentMode||0)<9)}};Sys._ScriptLoaderTask.registerClass("Sys._ScriptLoaderTask",null,Sys.IDisposable);Sys._ScriptLoaderTask._clearScript=function(a){if(!Sys.Debug.isDebug&&a.parentNode)a.parentNode.removeChild(a)};Type.registerNamespace("Sys.Net");Sys.Net.WebServiceProxy=function(){};Sys.Net.WebServiceProxy.prototype={get_timeout:function(){return this._timeout||0},set_timeout:function(a){if(a<0)throw Error.argumentOutOfRange("value",a,Sys.Res.invalidTimeout);this._timeout=a},get_defaultUserContext:function(){return typeof this._userContext==="undefined"?null:this._userContext},set_defaultUserContext:function(a){this._userContext=a},get_defaultSucceededCallback:function(){return this._succeeded||null},set_defaultSucceededCallback:function(a){this._succeeded=a},get_defaultFailedCallback:function(){return this._failed||null},set_defaultFailedCallback:function(a){this._failed=a},get_enableJsonp:function(){return !!this._jsonp},set_enableJsonp:function(a){this._jsonp=a},get_path:function(){return this._path||null},set_path:function(a){this._path=a},get_jsonpCallbackParameter:function(){return this._callbackParameter||"callback"},set_jsonpCallbackParameter:function(a){this._callbackParameter=a},_invoke:function(d,e,g,f,c,b,a){c=c||this.get_defaultSucceededCallback();b=b||this.get_defaultFailedCallback();if(a===null||typeof a==="undefined")a=this.get_defaultUserContext();return Sys.Net.WebServiceProxy.invoke(d,e,g,f,c,b,a,this.get_timeout(),this.get_enableJsonp(),this.get_jsonpCallbackParameter())}};Sys.Net.WebServiceProxy.registerClass("Sys.Net.WebServiceProxy");Sys.Net.WebServiceProxy.invoke=function(q,a,m,l,j,b,g,e,w,p){var i=w!==false?Sys.Net.WebServiceProxy._xdomain.exec(q):null,c,n=i&&i.length===3&&(i[1]!==location.protocol||i[2]!==location.host);m=n||m;if(n){p=p||"callback";c="_jsonp"+Sys._jsonp++}if(!l)l={};var r=l;if(!m||!r)r={};var s,h,f=null,k,o=null,u=Sys.Net.WebRequest._createUrl(a?q+"/"+encodeURIComponent(a):q,r,n?p+"=Sys."+c:null);if(n){s=document.createElement("script");s.src=u;k=new Sys._ScriptLoaderTask(s,function(d,b){if(!b||c)t({Message:String.format(Sys.Res.webServiceFailedNoMsg,a)},-1)});function v(){if(f===null)return;f=null;h=new Sys.Net.WebServiceError(true,String.format(Sys.Res.webServiceTimedOut,a));k.dispose();delete Sys[c];if(b)b(h,g,a)}function t(d,e){if(f!==null){window.clearTimeout(f);f=null}k.dispose();delete Sys[c];c=null;if(typeof e!=="undefined"&&e!==200){if(b){h=new Sys.Net.WebServiceError(false,d.Message||String.format(Sys.Res.webServiceFailedNoMsg,a),d.StackTrace||null,d.ExceptionType||null,d);h._statusCode=e;b(h,g,a)}}else if(j)j(d,g,a)}Sys[c]=t;e=e||Sys.Net.WebRequestManager.get_defaultTimeout();if(e>0)f=window.setTimeout(v,e);k.execute();return null}var d=new Sys.Net.WebRequest;d.set_url(u);d.get_headers()["Content-Type"]="application/json; charset=utf-8";if(!m){o=Sys.Serialization.JavaScriptSerializer.serialize(l);if(o==="{}")o=""}d.set_body(o);d.add_completed(x);if(e&&e>0)d.set_timeout(e);d.invoke();function x(d){if(d.get_responseAvailable()){var f=d.get_statusCode(),c=null;try{var e=d.getResponseHeader("Content-Type");if(e.startsWith("application/json"))c=d.get_object();else if(e.startsWith("text/xml"))c=d.get_xml();else c=d.get_responseData()}catch(m){}var k=d.getResponseHeader("jsonerror"),h=k==="true";if(h){if(c)c=new Sys.Net.WebServiceError(false,c.Message,c.StackTrace,c.ExceptionType,c)}else if(e.startsWith("application/json"))c=!c||typeof c.d==="undefined"?c:c.d;if(f<200||f>=300||h){if(b){if(!c||!h)c=new Sys.Net.WebServiceError(false,String.format(Sys.Res.webServiceFailedNoMsg,a));c._statusCode=f;b(c,g,a)}}else if(j)j(c,g,a)}else{var i;if(d.get_timedOut())i=String.format(Sys.Res.webServiceTimedOut,a);else i=String.format(Sys.Res.webServiceFailedNoMsg,a);if(b)b(new Sys.Net.WebServiceError(d.get_timedOut(),i,"",""),g,a)}}return d};Sys.Net.WebServiceProxy._generateTypedConstructor=function(a){return function(b){if(b)for(var c in b)this[c]=b[c];this.__type=a}};Sys._jsonp=0;Sys.Net.WebServiceProxy._xdomain=/^\s*([a-zA-Z0-9\+\-\.]+\:)\/\/([^?#\/]+)/;Sys.Net.WebServiceError=function(d,e,c,a,b){this._timedOut=d;this._message=e;this._stackTrace=c;this._exceptionType=a;this._errorObject=b;this._statusCode=-1};Sys.Net.WebServiceError.prototype={get_timedOut:function(){return this._timedOut},get_statusCode:function(){return this._statusCode},get_message:function(){return this._message},get_stackTrace:function(){return this._stackTrace||""},get_exceptionType:function(){return this._exceptionType||""},get_errorObject:function(){return this._errorObject||null}};Sys.Net.WebServiceError.registerClass("Sys.Net.WebServiceError");;
//----------------------------------------------------------
// Copyright (C) Microsoft Corporation. All rights reserved.
//----------------------------------------------------------
// MicrosoftAjaxWebForms.js
Type._registerScript("MicrosoftAjaxWebForms.js",["MicrosoftAjaxCore.js","MicrosoftAjaxSerialization.js","MicrosoftAjaxNetwork.js","MicrosoftAjaxComponentModel.js"]);Type.registerNamespace("Sys.WebForms");Sys.WebForms.BeginRequestEventArgs=function(c,b,a){Sys.WebForms.BeginRequestEventArgs.initializeBase(this);this._request=c;this._postBackElement=b;this._updatePanelsToUpdate=a};Sys.WebForms.BeginRequestEventArgs.prototype={get_postBackElement:function(){return this._postBackElement},get_request:function(){return this._request},get_updatePanelsToUpdate:function(){return this._updatePanelsToUpdate?Array.clone(this._updatePanelsToUpdate):[]}};Sys.WebForms.BeginRequestEventArgs.registerClass("Sys.WebForms.BeginRequestEventArgs",Sys.EventArgs);Sys.WebForms.EndRequestEventArgs=function(c,a,b){Sys.WebForms.EndRequestEventArgs.initializeBase(this);this._errorHandled=false;this._error=c;this._dataItems=a||{};this._response=b};Sys.WebForms.EndRequestEventArgs.prototype={get_dataItems:function(){return this._dataItems},get_error:function(){return this._error},get_errorHandled:function(){return this._errorHandled},set_errorHandled:function(a){this._errorHandled=a},get_response:function(){return this._response}};Sys.WebForms.EndRequestEventArgs.registerClass("Sys.WebForms.EndRequestEventArgs",Sys.EventArgs);Sys.WebForms.InitializeRequestEventArgs=function(c,b,a){Sys.WebForms.InitializeRequestEventArgs.initializeBase(this);this._request=c;this._postBackElement=b;this._updatePanelsToUpdate=a};Sys.WebForms.InitializeRequestEventArgs.prototype={get_postBackElement:function(){return this._postBackElement},get_request:function(){return this._request},get_updatePanelsToUpdate:function(){return this._updatePanelsToUpdate?Array.clone(this._updatePanelsToUpdate):[]},set_updatePanelsToUpdate:function(a){this._updated=true;this._updatePanelsToUpdate=a}};Sys.WebForms.InitializeRequestEventArgs.registerClass("Sys.WebForms.InitializeRequestEventArgs",Sys.CancelEventArgs);Sys.WebForms.PageLoadedEventArgs=function(b,a,c){Sys.WebForms.PageLoadedEventArgs.initializeBase(this);this._panelsUpdated=b;this._panelsCreated=a;this._dataItems=c||{}};Sys.WebForms.PageLoadedEventArgs.prototype={get_dataItems:function(){return this._dataItems},get_panelsCreated:function(){return this._panelsCreated},get_panelsUpdated:function(){return this._panelsUpdated}};Sys.WebForms.PageLoadedEventArgs.registerClass("Sys.WebForms.PageLoadedEventArgs",Sys.EventArgs);Sys.WebForms.PageLoadingEventArgs=function(b,a,c){Sys.WebForms.PageLoadingEventArgs.initializeBase(this);this._panelsUpdating=b;this._panelsDeleting=a;this._dataItems=c||{}};Sys.WebForms.PageLoadingEventArgs.prototype={get_dataItems:function(){return this._dataItems},get_panelsDeleting:function(){return this._panelsDeleting},get_panelsUpdating:function(){return this._panelsUpdating}};Sys.WebForms.PageLoadingEventArgs.registerClass("Sys.WebForms.PageLoadingEventArgs",Sys.EventArgs);Sys._ScriptLoader=function(){this._scriptsToLoad=null;this._sessions=[];this._scriptLoadedDelegate=Function.createDelegate(this,this._scriptLoadedHandler)};Sys._ScriptLoader.prototype={dispose:function(){this._stopSession();this._loading=false;if(this._events)delete this._events;this._sessions=null;this._currentSession=null;this._scriptLoadedDelegate=null},loadScripts:function(d,b,c,a){var e={allScriptsLoadedCallback:b,scriptLoadFailedCallback:c,scriptLoadTimeoutCallback:a,scriptsToLoad:this._scriptsToLoad,scriptTimeout:d};this._scriptsToLoad=null;this._sessions[this._sessions.length]=e;if(!this._loading)this._nextSession()},queueCustomScriptTag:function(a){if(!this._scriptsToLoad)this._scriptsToLoad=[];Array.add(this._scriptsToLoad,a)},queueScriptBlock:function(a){if(!this._scriptsToLoad)this._scriptsToLoad=[];Array.add(this._scriptsToLoad,{text:a})},queueScriptReference:function(a,b){if(!this._scriptsToLoad)this._scriptsToLoad=[];Array.add(this._scriptsToLoad,{src:a,fallback:b})},_createScriptElement:function(c){var a=document.createElement("script");a.type="text/javascript";for(var b in c)a[b]=c[b];return a},_loadScriptsInternal:function(){var c=this._currentSession;if(c.scriptsToLoad&&c.scriptsToLoad.length>0){var b=Array.dequeue(c.scriptsToLoad),f=this._scriptLoadedDelegate;if(b.fallback){var g=b.fallback;delete b.fallback;var d=this;f=function(b,a){a||function(){var a=d._createScriptElement({src:g});d._currentTask=new Sys._ScriptLoaderTask(a,d._scriptLoadedDelegate);d._currentTask.execute()}()}}var a=this._createScriptElement(b);if(a.text&&Sys.Browser.agent===Sys.Browser.Safari){a.innerHTML=a.text;delete a.text}if(typeof b.src==="string"){this._currentTask=new Sys._ScriptLoaderTask(a,f);this._currentTask.execute()}else{document.getElementsByTagName("head")[0].appendChild(a);Sys._ScriptLoaderTask._clearScript(a);this._loadScriptsInternal()}}else{this._stopSession();var e=c.allScriptsLoadedCallback;if(e)e(this);this._nextSession()}},_nextSession:function(){if(this._sessions.length===0){this._loading=false;this._currentSession=null;return}this._loading=true;var a=Array.dequeue(this._sessions);this._currentSession=a;if(a.scriptTimeout>0)this._timeoutCookie=window.setTimeout(Function.createDelegate(this,this._scriptLoadTimeoutHandler),a.scriptTimeout*1000);this._loadScriptsInternal()},_raiseError:function(){var b=this._currentSession.scriptLoadFailedCallback,a=this._currentTask.get_scriptElement();this._stopSession();if(b){b(this,a);this._nextSession()}else{this._loading=false;throw Sys._ScriptLoader._errorScriptLoadFailed(a.src)}},_scriptLoadedHandler:function(a,b){if(b){Array.add(Sys._ScriptLoader._getLoadedScripts(),a.src);this._currentTask.dispose();this._currentTask=null;this._loadScriptsInternal()}else this._raiseError()},_scriptLoadTimeoutHandler:function(){var a=this._currentSession.scriptLoadTimeoutCallback;this._stopSession();if(a)a(this);this._nextSession()},_stopSession:function(){if(this._timeoutCookie){window.clearTimeout(this._timeoutCookie);this._timeoutCookie=null}if(this._currentTask){this._currentTask.dispose();this._currentTask=null}}};Sys._ScriptLoader.registerClass("Sys._ScriptLoader",null,Sys.IDisposable);Sys._ScriptLoader.getInstance=function(){var a=Sys._ScriptLoader._activeInstance;if(!a)a=Sys._ScriptLoader._activeInstance=new Sys._ScriptLoader;return a};Sys._ScriptLoader.isScriptLoaded=function(b){var a=document.createElement("script");a.src=b;return Array.contains(Sys._ScriptLoader._getLoadedScripts(),a.src)};Sys._ScriptLoader.readLoadedScripts=function(){if(!Sys._ScriptLoader._referencedScripts){var c=Sys._ScriptLoader._referencedScripts=[],d=document.getElementsByTagName("script");for(var b=d.length-1;b>=0;b--){var e=d[b],a=e.src;if(a.length)if(!Array.contains(c,a))Array.add(c,a)}}};Sys._ScriptLoader._errorScriptLoadFailed=function(b){var a;a=Sys.Res.scriptLoadFailed;var d="Sys.ScriptLoadFailedException: "+String.format(a,b),c=Error.create(d,{name:"Sys.ScriptLoadFailedException","scriptUrl":b});c.popStackFrame();return c};Sys._ScriptLoader._getLoadedScripts=function(){if(!Sys._ScriptLoader._referencedScripts){Sys._ScriptLoader._referencedScripts=[];Sys._ScriptLoader.readLoadedScripts()}return Sys._ScriptLoader._referencedScripts};Sys.WebForms.PageRequestManager=function(){this._form=null;this._activeDefaultButton=null;this._activeDefaultButtonClicked=false;this._updatePanelIDs=null;this._updatePanelClientIDs=null;this._updatePanelHasChildrenAsTriggers=null;this._asyncPostBackControlIDs=null;this._asyncPostBackControlClientIDs=null;this._postBackControlIDs=null;this._postBackControlClientIDs=null;this._scriptManagerID=null;this._pageLoadedHandler=null;this._additionalInput=null;this._onsubmit=null;this._onSubmitStatements=[];this._originalDoPostBack=null;this._originalDoPostBackWithOptions=null;this._originalFireDefaultButton=null;this._originalDoCallback=null;this._isCrossPost=false;this._postBackSettings=null;this._request=null;this._onFormSubmitHandler=null;this._onFormElementClickHandler=null;this._onWindowUnloadHandler=null;this._asyncPostBackTimeout=null;this._controlIDToFocus=null;this._scrollPosition=null;this._processingRequest=false;this._scriptDisposes={};this._transientFields=["__VIEWSTATEENCRYPTED","__VIEWSTATEFIELDCOUNT"];this._textTypes=/^(text|password|hidden|search|tel|url|email|number|range|color|datetime|date|month|week|time|datetime-local)$/i};Sys.WebForms.PageRequestManager.prototype={_get_eventHandlerList:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_isInAsyncPostBack:function(){return this._request!==null},add_beginRequest:function(a){this._get_eventHandlerList().addHandler("beginRequest",a)},remove_beginRequest:function(a){this._get_eventHandlerList().removeHandler("beginRequest",a)},add_endRequest:function(a){this._get_eventHandlerList().addHandler("endRequest",a)},remove_endRequest:function(a){this._get_eventHandlerList().removeHandler("endRequest",a)},add_initializeRequest:function(a){this._get_eventHandlerList().addHandler("initializeRequest",a)},remove_initializeRequest:function(a){this._get_eventHandlerList().removeHandler("initializeRequest",a)},add_pageLoaded:function(a){this._get_eventHandlerList().addHandler("pageLoaded",a)},remove_pageLoaded:function(a){this._get_eventHandlerList().removeHandler("pageLoaded",a)},add_pageLoading:function(a){this._get_eventHandlerList().addHandler("pageLoading",a)},remove_pageLoading:function(a){this._get_eventHandlerList().removeHandler("pageLoading",a)},abortPostBack:function(){if(!this._processingRequest&&this._request){this._request.get_executor().abort();this._request=null}},beginAsyncPostBack:function(c,a,f,d,e){if(d&&typeof Page_ClientValidate==="function"&&!Page_ClientValidate(e||null))return;this._postBackSettings=this._createPostBackSettings(true,c,a);var b=this._form;b.__EVENTTARGET.value=a||"";b.__EVENTARGUMENT.value=f||"";this._isCrossPost=false;this._additionalInput=null;this._onFormSubmit()},_cancelPendingCallbacks:function(){for(var a=0,e=window.__pendingCallbacks.length;a<e;a++){var c=window.__pendingCallbacks[a];if(c){if(!c.async)window.__synchronousCallBackIndex=-1;window.__pendingCallbacks[a]=null;var d="__CALLBACKFRAME"+a,b=document.getElementById(d);if(b)b.parentNode.removeChild(b)}}},_commitControls:function(a,b){if(a){this._updatePanelIDs=a.updatePanelIDs;this._updatePanelClientIDs=a.updatePanelClientIDs;this._updatePanelHasChildrenAsTriggers=a.updatePanelHasChildrenAsTriggers;this._asyncPostBackControlIDs=a.asyncPostBackControlIDs;this._asyncPostBackControlClientIDs=a.asyncPostBackControlClientIDs;this._postBackControlIDs=a.postBackControlIDs;this._postBackControlClientIDs=a.postBackControlClientIDs}if(typeof b!=="undefined"&&b!==null)this._asyncPostBackTimeout=b*1000},_createHiddenField:function(c,d){var b,a=document.getElementById(c);if(a)if(!a._isContained)a.parentNode.removeChild(a);else b=a.parentNode;if(!b){b=document.createElement("span");b.style.cssText="display:none !important";this._form.appendChild(b)}b.innerHTML="<input type='hidden' />";a=b.childNodes[0];a._isContained=true;a.id=a.name=c;a.value=d},_createPageRequestManagerTimeoutError:function(){var b="Sys.WebForms.PageRequestManagerTimeoutException: "+Sys.WebForms.Res.PRM_TimeoutError,a=Error.create(b,{name:"Sys.WebForms.PageRequestManagerTimeoutException"});a.popStackFrame();return a},_createPageRequestManagerServerError:function(a,d){var c="Sys.WebForms.PageRequestManagerServerErrorException: "+(d||String.format(Sys.WebForms.Res.PRM_ServerError,a)),b=Error.create(c,{name:"Sys.WebForms.PageRequestManagerServerErrorException",httpStatusCode:a});b.popStackFrame();return b},_createPageRequestManagerParserError:function(b){var c="Sys.WebForms.PageRequestManagerParserErrorException: "+String.format(Sys.WebForms.Res.PRM_ParserError,b),a=Error.create(c,{name:"Sys.WebForms.PageRequestManagerParserErrorException"});a.popStackFrame();return a},_createPanelID:function(e,b){var c=b.asyncTarget,a=this._ensureUniqueIds(e||b.panelsToUpdate),d=a instanceof Array?a.join(","):a||this._scriptManagerID;if(c)d+="|"+c;return encodeURIComponent(this._scriptManagerID)+"="+encodeURIComponent(d)+"&"},_createPostBackSettings:function(d,a,c,b){return {async:d,asyncTarget:c,panelsToUpdate:a,sourceElement:b}},_convertToClientIDs:function(a,f,e,d){if(a)for(var b=0,h=a.length;b<h;b+=d?2:1){var c=a[b],g=(d?a[b+1]:"")||this._uniqueIDToClientID(c);Array.add(f,c);Array.add(e,g)}},dispose:function(){if(this._form){Sys.UI.DomEvent.removeHandler(this._form,"submit",this._onFormSubmitHandler);Sys.UI.DomEvent.removeHandler(this._form,"click",this._onFormElementClickHandler);Sys.UI.DomEvent.removeHandler(window,"unload",this._onWindowUnloadHandler);Sys.UI.DomEvent.removeHandler(window,"load",this._pageLoadedHandler)}if(this._originalDoPostBack){window.__doPostBack=this._originalDoPostBack;this._originalDoPostBack=null}if(this._originalDoPostBackWithOptions){window.WebForm_DoPostBackWithOptions=this._originalDoPostBackWithOptions;this._originalDoPostBackWithOptions=null}if(this._originalFireDefaultButton){window.WebForm_FireDefaultButton=this._originalFireDefaultButton;this._originalFireDefaultButton=null}if(this._originalDoCallback){window.WebForm_DoCallback=this._originalDoCallback;this._originalDoCallback=null}this._form=null;this._updatePanelIDs=null;this._updatePanelClientIDs=null;this._asyncPostBackControlIDs=null;this._asyncPostBackControlClientIDs=null;this._postBackControlIDs=null;this._postBackControlClientIDs=null;this._asyncPostBackTimeout=null;this._scrollPosition=null;this._activeElement=null},_doCallback:function(d,b,c,f,a,e){if(!this.get_isInAsyncPostBack())this._originalDoCallback(d,b,c,f,a,e)},_doPostBack:function(a,k){var f=window.event;if(!f){var d=arguments.callee?arguments.callee.caller:null;if(d){var j=30;while(d.arguments.callee.caller&&--j)d=d.arguments.callee.caller;f=j&&d.arguments.length?d.arguments[0]:null}}this._additionalInput=null;var h=this._form;if(a===null||typeof a==="undefined"||this._isCrossPost){this._postBackSettings=this._createPostBackSettings(false);this._isCrossPost=false}else{var c=this._masterPageUniqueID,l=this._uniqueIDToClientID(a),g=document.getElementById(l);if(!g&&c)if(a.indexOf(c+"$")===0)g=document.getElementById(l.substr(c.length+1));if(!g)if(Array.contains(this._asyncPostBackControlIDs,a))this._postBackSettings=this._createPostBackSettings(true,null,a);else if(Array.contains(this._postBackControlIDs,a))this._postBackSettings=this._createPostBackSettings(false);else{var e=this._findNearestElement(a);if(e)this._postBackSettings=this._getPostBackSettings(e,a);else{if(c){c+="$";if(a.indexOf(c)===0)e=this._findNearestElement(a.substr(c.length))}if(e)this._postBackSettings=this._getPostBackSettings(e,a);else{var b;try{b=f?f.target||f.srcElement:null}catch(n){}b=b||this._activeElement;var m=/__doPostBack\(|WebForm_DoPostBackWithOptions\(/;function i(b){b=b?b.toString():"";return m.test(b)&&b.indexOf("'"+a+"'")!==-1||b.indexOf('"'+a+'"')!==-1}if(b&&(b.name===a||i(b.href)||i(b.onclick)||i(b.onchange)))this._postBackSettings=this._getPostBackSettings(b,a);else this._postBackSettings=this._createPostBackSettings(false)}}}else this._postBackSettings=this._getPostBackSettings(g,a)}if(!this._postBackSettings.async){h.onsubmit=this._onsubmit;this._originalDoPostBack(a,k);h.onsubmit=null;return}h.__EVENTTARGET.value=a;h.__EVENTARGUMENT.value=k;this._onFormSubmit()},_doPostBackWithOptions:function(a){this._isCrossPost=a&&a.actionUrl;var d=true;if(a.validation)if(typeof Page_ClientValidate=="function")d=Page_ClientValidate(a.validationGroup);if(d){if(typeof a.actionUrl!="undefined"&&a.actionUrl!=null&&a.actionUrl.length>0)theForm.action=a.actionUrl;if(a.trackFocus){var c=theForm.elements["__LASTFOCUS"];if(typeof c!="undefined"&&c!=null)if(typeof document.activeElement=="undefined")c.value=a.eventTarget;else{var b=document.activeElement;if(typeof b!="undefined"&&b!=null)if(typeof b.id!="undefined"&&b.id!=null&&b.id.length>0)c.value=b.id;else if(typeof b.name!="undefined")c.value=b.name}}}if(a.clientSubmit)this._doPostBack(a.eventTarget,a.eventArgument)},_elementContains:function(b,a){while(a){if(a===b)return true;a=a.parentNode}return false},_endPostBack:function(a,d,f){if(this._request===d.get_webRequest()){this._processingRequest=false;this._additionalInput=null;this._request=null}var e=this._get_eventHandlerList().getHandler("endRequest"),b=false;if(e){var c=new Sys.WebForms.EndRequestEventArgs(a,f?f.dataItems:{},d);e(this,c);b=c.get_errorHandled()}if(a&&!b)throw a},_ensureUniqueIds:function(a){if(!a)return a;a=a instanceof Array?a:[a];var c=[];for(var b=0,f=a.length;b<f;b++){var e=a[b],d=Array.indexOf(this._updatePanelClientIDs,e);c.push(d>-1?this._updatePanelIDs[d]:e)}return c},_findNearestElement:function(a){while(a.length>0){var d=this._uniqueIDToClientID(a),c=document.getElementById(d);if(c)return c;var b=a.lastIndexOf("$");if(b===-1)return null;a=a.substring(0,b)}return null},_findText:function(b,a){var c=Math.max(0,a-20),d=Math.min(b.length,a+20);return b.substring(c,d)},_fireDefaultButton:function(a,d){if(a.keyCode===13){var c=a.srcElement||a.target;if(!c||c.tagName.toLowerCase()!=="textarea"){var b=document.getElementById(d);if(b&&typeof b.click!=="undefined"){this._activeDefaultButton=b;this._activeDefaultButtonClicked=false;try{b.click()}finally{this._activeDefaultButton=null}a.cancelBubble=true;if(typeof a.stopPropagation==="function")a.stopPropagation();return false}}}return true},_getPageLoadedEventArgs:function(n,c){var m=[],l=[],k=c?c.version4:false,d=c?c.updatePanelData:null,e,g,h,b;if(!d){e=this._updatePanelIDs;g=this._updatePanelClientIDs;h=null;b=null}else{e=d.updatePanelIDs;g=d.updatePanelClientIDs;h=d.childUpdatePanelIDs;b=d.panelsToRefreshIDs}var a,f,j,i;if(b)for(a=0,f=b.length;a<f;a+=k?2:1){j=b[a];i=(k?b[a+1]:"")||this._uniqueIDToClientID(j);Array.add(m,document.getElementById(i))}for(a=0,f=e.length;a<f;a++)if(n||Array.indexOf(h,e[a])!==-1)Array.add(l,document.getElementById(g[a]));return new Sys.WebForms.PageLoadedEventArgs(m,l,c?c.dataItems:{})},_getPageLoadingEventArgs:function(f){var j=[],i=[],c=f.updatePanelData,k=c.oldUpdatePanelIDs,l=c.oldUpdatePanelClientIDs,n=c.updatePanelIDs,m=c.childUpdatePanelIDs,d=c.panelsToRefreshIDs,a,e,b,g,h=f.version4;for(a=0,e=d.length;a<e;a+=h?2:1){b=d[a];g=(h?d[a+1]:"")||this._uniqueIDToClientID(b);Array.add(j,document.getElementById(g))}for(a=0,e=k.length;a<e;a++){b=k[a];if(Array.indexOf(d,b)===-1&&(Array.indexOf(n,b)===-1||Array.indexOf(m,b)>-1))Array.add(i,document.getElementById(l[a]))}return new Sys.WebForms.PageLoadingEventArgs(j,i,f.dataItems)},_getPostBackSettings:function(a,c){var d=a,b=null;while(a){if(a.id){if(!b&&Array.contains(this._asyncPostBackControlClientIDs,a.id))b=this._createPostBackSettings(true,null,c,d);else if(!b&&Array.contains(this._postBackControlClientIDs,a.id))return this._createPostBackSettings(false);else{var e=Array.indexOf(this._updatePanelClientIDs,a.id);if(e!==-1)if(this._updatePanelHasChildrenAsTriggers[e])return this._createPostBackSettings(true,[this._updatePanelIDs[e]],c,d);else return this._createPostBackSettings(true,null,c,d)}if(!b&&this._matchesParentIDInList(a.id,this._asyncPostBackControlClientIDs))b=this._createPostBackSettings(true,null,c,d);else if(!b&&this._matchesParentIDInList(a.id,this._postBackControlClientIDs))return this._createPostBackSettings(false)}a=a.parentNode}if(!b)return this._createPostBackSettings(false);else return b},_getScrollPosition:function(){var a=document.documentElement;if(a&&(this._validPosition(a.scrollLeft)||this._validPosition(a.scrollTop)))return {x:a.scrollLeft,y:a.scrollTop};else{a=document.body;if(a&&(this._validPosition(a.scrollLeft)||this._validPosition(a.scrollTop)))return {x:a.scrollLeft,y:a.scrollTop};else if(this._validPosition(window.pageXOffset)||this._validPosition(window.pageYOffset))return {x:window.pageXOffset,y:window.pageYOffset};else return {x:0,y:0}}},_initializeInternal:function(f,g,a,b,e,c,d){if(this._prmInitialized)throw Error.invalidOperation(Sys.WebForms.Res.PRM_CannotRegisterTwice);this._prmInitialized=true;this._masterPageUniqueID=d;this._scriptManagerID=f;this._form=Sys.UI.DomElement.resolveElement(g);this._onsubmit=this._form.onsubmit;this._form.onsubmit=null;this._onFormSubmitHandler=Function.createDelegate(this,this._onFormSubmit);this._onFormElementClickHandler=Function.createDelegate(this,this._onFormElementClick);this._onWindowUnloadHandler=Function.createDelegate(this,this._onWindowUnload);Sys.UI.DomEvent.addHandler(this._form,"submit",this._onFormSubmitHandler);Sys.UI.DomEvent.addHandler(this._form,"click",this._onFormElementClickHandler);Sys.UI.DomEvent.addHandler(window,"unload",this._onWindowUnloadHandler);this._originalDoPostBack=window.__doPostBack;if(this._originalDoPostBack)window.__doPostBack=Function.createDelegate(this,this._doPostBack);this._originalDoPostBackWithOptions=window.WebForm_DoPostBackWithOptions;if(this._originalDoPostBackWithOptions)window.WebForm_DoPostBackWithOptions=Function.createDelegate(this,this._doPostBackWithOptions);this._originalFireDefaultButton=window.WebForm_FireDefaultButton;if(this._originalFireDefaultButton)window.WebForm_FireDefaultButton=Function.createDelegate(this,this._fireDefaultButton);this._originalDoCallback=window.WebForm_DoCallback;if(this._originalDoCallback)window.WebForm_DoCallback=Function.createDelegate(this,this._doCallback);this._pageLoadedHandler=Function.createDelegate(this,this._pageLoadedInitialLoad);Sys.UI.DomEvent.addHandler(window,"load",this._pageLoadedHandler);if(a)this._updateControls(a,b,e,c,true)},_matchesParentIDInList:function(c,b){for(var a=0,d=b.length;a<d;a++)if(c.startsWith(b[a]+"_"))return true;return false},_onFormElementActive:function(a,d,e){if(a.disabled)return;this._activeElement=a;this._postBackSettings=this._getPostBackSettings(a,a.name);if(a.name){var b=a.tagName.toUpperCase();if(b==="INPUT"){var c=a.type;if(c==="submit")this._additionalInput=encodeURIComponent(a.name)+"="+encodeURIComponent(a.value);else if(c==="image")this._additionalInput=encodeURIComponent(a.name)+".x="+d+"&"+encodeURIComponent(a.name)+".y="+e}else if(b==="BUTTON"&&a.name.length!==0&&a.type==="submit")this._additionalInput=encodeURIComponent(a.name)+"="+encodeURIComponent(a.value)}},_onFormElementClick:function(a){this._activeDefaultButtonClicked=a.target===this._activeDefaultButton;this._onFormElementActive(a.target,a.offsetX,a.offsetY)},_onFormSubmit:function(i){var f,x,h=true,z=this._isCrossPost;this._isCrossPost=false;if(this._onsubmit)h=this._onsubmit();if(h)for(f=0,x=this._onSubmitStatements.length;f<x;f++)if(!this._onSubmitStatements[f]()){h=false;break}if(!h){if(i)i.preventDefault();return}var w=this._form;if(z)return;if(this._activeDefaultButton&&!this._activeDefaultButtonClicked)this._onFormElementActive(this._activeDefaultButton,0,0);if(!this._postBackSettings||!this._postBackSettings.async)return;var b=new Sys.StringBuilder,s=w.elements,B=s.length,t=this._createPanelID(null,this._postBackSettings);b.append(t);for(f=0;f<B;f++){var e=s[f],g=e.name;if(typeof g==="undefined"||g===null||g.length===0||g===this._scriptManagerID)continue;var n=e.tagName.toUpperCase();if(n==="INPUT"){var p=e.type;if(this._textTypes.test(p)||(p==="checkbox"||p==="radio")&&e.checked){b.append(encodeURIComponent(g));b.append("=");b.append(encodeURIComponent(e.value));b.append("&")}}else if(n==="SELECT"){var A=e.options.length;for(var q=0;q<A;q++){var u=e.options[q];if(u.selected){b.append(encodeURIComponent(g));b.append("=");b.append(encodeURIComponent(u.value));b.append("&")}}}else if(n==="TEXTAREA"){b.append(encodeURIComponent(g));b.append("=");b.append(encodeURIComponent(e.value));b.append("&")}}b.append("__ASYNCPOST=true&");if(this._additionalInput){b.append(this._additionalInput);this._additionalInput=null}var c=new Sys.Net.WebRequest,a=w.action;if(Sys.Browser.agent===Sys.Browser.InternetExplorer){var r=a.indexOf("#");if(r!==-1)a=a.substr(0,r);var o="",v="",m=a.indexOf("?");if(m!==-1){v=a.substr(m);a=a.substr(0,m)}if(/^https?\:\/\/.*$/gi.test(a)){var y=a.indexOf("//")+2,l=a.indexOf("/",y);if(l===-1){o=a;a=""}else{o=a.substr(0,l);a=a.substr(l)}}a=o+encodeURI(decodeURI(a))+v}c.set_url(a);c.get_headers()["X-MicrosoftAjax"]="Delta=true";c.get_headers()["Cache-Control"]="no-cache";c.set_timeout(this._asyncPostBackTimeout);c.add_completed(Function.createDelegate(this,this._onFormSubmitCompleted));c.set_body(b.toString());var j,d,k=this._get_eventHandlerList().getHandler("initializeRequest");if(k){j=this._postBackSettings.panelsToUpdate;d=new Sys.WebForms.InitializeRequestEventArgs(c,this._postBackSettings.sourceElement,j);k(this,d);h=!d.get_cancel()}if(!h){if(i)i.preventDefault();return}if(d&&d._updated){j=d.get_updatePanelsToUpdate();c.set_body(c.get_body().replace(t,this._createPanelID(j,this._postBackSettings)))}this._scrollPosition=this._getScrollPosition();this.abortPostBack();k=this._get_eventHandlerList().getHandler("beginRequest");if(k){d=new Sys.WebForms.BeginRequestEventArgs(c,this._postBackSettings.sourceElement,j||this._postBackSettings.panelsToUpdate);k(this,d)}if(this._originalDoCallback)this._cancelPendingCallbacks();this._request=c;this._processingRequest=false;c.invoke();if(i)i.preventDefault()},_onFormSubmitCompleted:function(c){this._processingRequest=true;if(c.get_timedOut()){this._endPostBack(this._createPageRequestManagerTimeoutError(),c,null);return}if(c.get_aborted()){this._endPostBack(null,c,null);return}if(!this._request||c.get_webRequest()!==this._request)return;if(c.get_statusCode()!==200){this._endPostBack(this._createPageRequestManagerServerError(c.get_statusCode()),c,null);return}var a=this._parseDelta(c);if(!a)return;var b,e;if(a.asyncPostBackControlIDsNode&&a.postBackControlIDsNode&&a.updatePanelIDsNode&&a.panelsToRefreshNode&&a.childUpdatePanelIDsNode){var r=this._updatePanelIDs,n=this._updatePanelClientIDs,i=a.childUpdatePanelIDsNode.content,p=i.length?i.split(","):[],m=this._splitNodeIntoArray(a.asyncPostBackControlIDsNode),o=this._splitNodeIntoArray(a.postBackControlIDsNode),q=this._splitNodeIntoArray(a.updatePanelIDsNode),g=this._splitNodeIntoArray(a.panelsToRefreshNode),h=a.version4;for(b=0,e=g.length;b<e;b+=h?2:1){var j=(h?g[b+1]:"")||this._uniqueIDToClientID(g[b]);if(!document.getElementById(j)){this._endPostBack(Error.invalidOperation(String.format(Sys.WebForms.Res.PRM_MissingPanel,j)),c,a);return}}var f=this._processUpdatePanelArrays(q,m,o,h);f.oldUpdatePanelIDs=r;f.oldUpdatePanelClientIDs=n;f.childUpdatePanelIDs=p;f.panelsToRefreshIDs=g;a.updatePanelData=f}a.dataItems={};var d;for(b=0,e=a.dataItemNodes.length;b<e;b++){d=a.dataItemNodes[b];a.dataItems[d.id]=d.content}for(b=0,e=a.dataItemJsonNodes.length;b<e;b++){d=a.dataItemJsonNodes[b];a.dataItems[d.id]=Sys.Serialization.JavaScriptSerializer.deserialize(d.content)}var l=this._get_eventHandlerList().getHandler("pageLoading");if(l)l(this,this._getPageLoadingEventArgs(a));Sys._ScriptLoader.readLoadedScripts();Sys.Application.beginCreateComponents();var k=Sys._ScriptLoader.getInstance();this._queueScripts(k,a.scriptBlockNodes,true,false);this._processingRequest=true;k.loadScripts(0,Function.createDelegate(this,Function.createCallback(this._scriptIncludesLoadComplete,a)),Function.createDelegate(this,Function.createCallback(this._scriptIncludesLoadFailed,a)),null)},_onWindowUnload:function(){this.dispose()},_pageLoaded:function(a,c){var b=this._get_eventHandlerList().getHandler("pageLoaded");if(b)b(this,this._getPageLoadedEventArgs(a,c));if(!a)Sys.Application.raiseLoad()},_pageLoadedInitialLoad:function(){this._pageLoaded(true,null)},_parseDelta:function(h){var c=h.get_responseData(),d,i,E,F,D,b=0,e=null,k=[];while(b<c.length){d=c.indexOf("|",b);if(d===-1){e=this._findText(c,b);break}i=parseInt(c.substring(b,d),10);if(i%1!==0){e=this._findText(c,b);break}b=d+1;d=c.indexOf("|",b);if(d===-1){e=this._findText(c,b);break}E=c.substring(b,d);b=d+1;d=c.indexOf("|",b);if(d===-1){e=this._findText(c,b);break}F=c.substring(b,d);b=d+1;if(b+i>=c.length){e=this._findText(c,c.length);break}D=c.substr(b,i);b+=i;if(c.charAt(b)!=="|"){e=this._findText(c,b);break}b++;Array.add(k,{type:E,id:F,content:D})}if(e){this._endPostBack(this._createPageRequestManagerParserError(String.format(Sys.WebForms.Res.PRM_ParserErrorDetails,e)),h,null);return null}var x=[],w=[],q=[],j=[],t=[],C=[],A=[],z=[],v=[],s=[],m,p,u,n,o,r,y,g;for(var l=0,G=k.length;l<G;l++){var a=k[l];switch(a.type){case "#":g=a;break;case "updatePanel":Array.add(x,a);break;case "hiddenField":Array.add(w,a);break;case "arrayDeclaration":Array.add(q,a);break;case "scriptBlock":Array.add(j,a);break;case "fallbackScript":j[j.length-1].fallback=a.id;case "scriptStartupBlock":Array.add(t,a);break;case "expando":Array.add(C,a);break;case "onSubmit":Array.add(A,a);break;case "asyncPostBackControlIDs":m=a;break;case "postBackControlIDs":p=a;break;case "updatePanelIDs":u=a;break;case "asyncPostBackTimeout":n=a;break;case "childUpdatePanelIDs":o=a;break;case "panelsToRefreshIDs":r=a;break;case "formAction":y=a;break;case "dataItem":Array.add(z,a);break;case "dataItemJson":Array.add(v,a);break;case "scriptDispose":Array.add(s,a);break;case "pageRedirect":if(g&&parseFloat(g.content)>=4)a.content=unescape(a.content);if(Sys.Browser.agent===Sys.Browser.InternetExplorer){var f=document.createElement("a");f.style.display="none";f.attachEvent("onclick",B);f.href=a.content;this._form.parentNode.insertBefore(f,this._form);f.click();f.detachEvent("onclick",B);this._form.parentNode.removeChild(f);function B(a){a.cancelBubble=true}}else window.location.href=a.content;return null;case "error":this._endPostBack(this._createPageRequestManagerServerError(Number.parseInvariant(a.id),a.content),h,null);return null;case "pageTitle":document.title=a.content;break;case "focus":this._controlIDToFocus=a.content;break;default:this._endPostBack(this._createPageRequestManagerParserError(String.format(Sys.WebForms.Res.PRM_UnknownToken,a.type)),h,null);return null}}return {version4:g?parseFloat(g.content)>=4:false,executor:h,updatePanelNodes:x,hiddenFieldNodes:w,arrayDeclarationNodes:q,scriptBlockNodes:j,scriptStartupNodes:t,expandoNodes:C,onSubmitNodes:A,dataItemNodes:z,dataItemJsonNodes:v,scriptDisposeNodes:s,asyncPostBackControlIDsNode:m,postBackControlIDsNode:p,updatePanelIDsNode:u,asyncPostBackTimeoutNode:n,childUpdatePanelIDsNode:o,panelsToRefreshNode:r,formActionNode:y}},_processUpdatePanelArrays:function(e,q,r,f){var d,c,b;if(e){var i=e.length,j=f?2:1;d=new Array(i/j);c=new Array(i/j);b=new Array(i/j);for(var g=0,h=0;g<i;g+=j,h++){var p,a=e[g],k=f?e[g+1]:"";p=a.charAt(0)==="t";a=a.substr(1);if(!k)k=this._uniqueIDToClientID(a);b[h]=p;d[h]=a;c[h]=k}}else{d=[];c=[];b=[]}var n=[],l=[];this._convertToClientIDs(q,n,l,f);var o=[],m=[];this._convertToClientIDs(r,o,m,f);return {updatePanelIDs:d,updatePanelClientIDs:c,updatePanelHasChildrenAsTriggers:b,asyncPostBackControlIDs:n,asyncPostBackControlClientIDs:l,postBackControlIDs:o,postBackControlClientIDs:m}},_queueScripts:function(scriptLoader,scriptBlockNodes,queueIncludes,queueBlocks){for(var i=0,l=scriptBlockNodes.length;i<l;i++){var scriptBlockType=scriptBlockNodes[i].id;switch(scriptBlockType){case "ScriptContentNoTags":if(!queueBlocks)continue;scriptLoader.queueScriptBlock(scriptBlockNodes[i].content);break;case "ScriptContentWithTags":var scriptTagAttributes;eval("scriptTagAttributes = "+scriptBlockNodes[i].content);if(scriptTagAttributes.src){if(!queueIncludes||Sys._ScriptLoader.isScriptLoaded(scriptTagAttributes.src))continue}else if(!queueBlocks)continue;scriptLoader.queueCustomScriptTag(scriptTagAttributes);break;case "ScriptPath":var script=scriptBlockNodes[i];if(!queueIncludes||Sys._ScriptLoader.isScriptLoaded(script.content))continue;scriptLoader.queueScriptReference(script.content,script.fallback)}}},_registerDisposeScript:function(a,b){if(!this._scriptDisposes[a])this._scriptDisposes[a]=[b];else Array.add(this._scriptDisposes[a],b)},_scriptIncludesLoadComplete:function(e,b){if(b.executor.get_webRequest()!==this._request)return;this._commitControls(b.updatePanelData,b.asyncPostBackTimeoutNode?b.asyncPostBackTimeoutNode.content:null);if(b.formActionNode)this._form.action=b.formActionNode.content;var a,d,c;for(a=0,d=b.updatePanelNodes.length;a<d;a++){c=b.updatePanelNodes[a];var j=document.getElementById(c.id);if(!j){this._endPostBack(Error.invalidOperation(String.format(Sys.WebForms.Res.PRM_MissingPanel,c.id)),b.executor,b);return}this._updatePanel(j,c.content)}for(a=0,d=b.scriptDisposeNodes.length;a<d;a++){c=b.scriptDisposeNodes[a];this._registerDisposeScript(c.id,c.content)}for(a=0,d=this._transientFields.length;a<d;a++){var g=document.getElementById(this._transientFields[a]);if(g){var k=g._isContained?g.parentNode:g;k.parentNode.removeChild(k)}}for(a=0,d=b.hiddenFieldNodes.length;a<d;a++){c=b.hiddenFieldNodes[a];this._createHiddenField(c.id,c.content)}if(b.scriptsFailed)throw Sys._ScriptLoader._errorScriptLoadFailed(b.scriptsFailed.src,b.scriptsFailed.multipleCallbacks);this._queueScripts(e,b.scriptBlockNodes,false,true);var i="";for(a=0,d=b.arrayDeclarationNodes.length;a<d;a++){c=b.arrayDeclarationNodes[a];i+="Sys.WebForms.PageRequestManager._addArrayElement('"+c.id+"', "+c.content+");\r\n"}var h="";for(a=0,d=b.expandoNodes.length;a<d;a++){c=b.expandoNodes[a];h+=c.id+" = "+c.content+"\r\n"}if(i.length)e.queueScriptBlock(i);if(h.length)e.queueScriptBlock(h);this._queueScripts(e,b.scriptStartupNodes,true,true);var f="";for(a=0,d=b.onSubmitNodes.length;a<d;a++){if(a===0)f="Array.add(Sys.WebForms.PageRequestManager.getInstance()._onSubmitStatements, function() {\r\n";f+=b.onSubmitNodes[a].content+"\r\n"}if(f.length){f+="\r\nreturn true;\r\n});\r\n";e.queueScriptBlock(f)}e.loadScripts(0,Function.createDelegate(this,Function.createCallback(this._scriptsLoadComplete,b)),null,null)},_scriptIncludesLoadFailed:function(d,c,b,a){a.scriptsFailed={src:c.src,multipleCallbacks:b};this._scriptIncludesLoadComplete(d,a)},_scriptsLoadComplete:function(f,c){var e=c.executor;if(window.__theFormPostData)window.__theFormPostData="";if(window.__theFormPostCollection)window.__theFormPostCollection=[];if(window.WebForm_InitCallback)window.WebForm_InitCallback();if(this._scrollPosition){if(window.scrollTo)window.scrollTo(this._scrollPosition.x,this._scrollPosition.y);this._scrollPosition=null}Sys.Application.endCreateComponents();this._pageLoaded(false,c);this._endPostBack(null,e,c);if(this._controlIDToFocus){var a,d;if(Sys.Browser.agent===Sys.Browser.InternetExplorer){var b=$get(this._controlIDToFocus);a=b;if(b&&!WebForm_CanFocus(b))a=WebForm_FindFirstFocusableChild(b);if(a&&typeof a.contentEditable!=="undefined"){d=a.contentEditable;a.contentEditable=false}else a=null}WebForm_AutoFocus(this._controlIDToFocus);if(a)a.contentEditable=d;this._controlIDToFocus=null}},_splitNodeIntoArray:function(b){var a=b.content,c=a.length?a.split(","):[];return c},_uniqueIDToClientID:function(a){return a.replace(/\$/g,"_")},_updateControls:function(d,a,c,b,e){this._commitControls(this._processUpdatePanelArrays(d,a,c,e),b)},_updatePanel:function(updatePanelElement,rendering){for(var updatePanelID in this._scriptDisposes)if(this._elementContains(updatePanelElement,document.getElementById(updatePanelID))){var disposeScripts=this._scriptDisposes[updatePanelID];for(var i=0,l=disposeScripts.length;i<l;i++)eval(disposeScripts[i]);delete this._scriptDisposes[updatePanelID]}Sys.Application.disposeElement(updatePanelElement,true);updatePanelElement.innerHTML=rendering},_validPosition:function(a){return typeof a!=="undefined"&&a!==null&&a!==0}};Sys.WebForms.PageRequestManager.getInstance=function(){var a=Sys.WebForms.PageRequestManager._instance;if(!a)a=Sys.WebForms.PageRequestManager._instance=new Sys.WebForms.PageRequestManager;return a};Sys.WebForms.PageRequestManager._addArrayElement=function(a){if(!window[a])window[a]=[];for(var b=1,c=arguments.length;b<c;b++)Array.add(window[a],arguments[b])};Sys.WebForms.PageRequestManager._initialize=function(){var a=Sys.WebForms.PageRequestManager.getInstance();a._initializeInternal.apply(a,arguments)};Sys.WebForms.PageRequestManager.registerClass("Sys.WebForms.PageRequestManager");Sys.UI._UpdateProgress=function(a){Sys.UI._UpdateProgress.initializeBase(this,[a]);this._displayAfter=500;this._dynamicLayout=true;this._associatedUpdatePanelId=null;this._beginRequestHandlerDelegate=null;this._startDelegate=null;this._endRequestHandlerDelegate=null;this._pageRequestManager=null;this._timerCookie=null};Sys.UI._UpdateProgress.prototype={get_displayAfter:function(){return this._displayAfter},set_displayAfter:function(a){this._displayAfter=a},get_dynamicLayout:function(){return this._dynamicLayout},set_dynamicLayout:function(a){this._dynamicLayout=a},get_associatedUpdatePanelId:function(){return this._associatedUpdatePanelId},set_associatedUpdatePanelId:function(a){this._associatedUpdatePanelId=a},get_role:function(){return "status"},_clearTimeout:function(){if(this._timerCookie){window.clearTimeout(this._timerCookie);this._timerCookie=null}},_getUniqueID:function(b){var a=Array.indexOf(this._pageRequestManager._updatePanelClientIDs,b);return a===-1?null:this._pageRequestManager._updatePanelIDs[a]},_handleBeginRequest:function(f,e){var b=e.get_postBackElement(),a=true,d=this._associatedUpdatePanelId;if(this._associatedUpdatePanelId){var c=e.get_updatePanelsToUpdate();if(c&&c.length)a=Array.contains(c,d)||Array.contains(c,this._getUniqueID(d));else a=false}while(!a&&b){if(b.id&&this._associatedUpdatePanelId===b.id)a=true;b=b.parentNode}if(a)this._timerCookie=window.setTimeout(this._startDelegate,this._displayAfter)},_startRequest:function(){if(this._pageRequestManager.get_isInAsyncPostBack()){var a=this.get_element();if(this._dynamicLayout)a.style.display="block";else a.style.visibility="visible";if(this.get_role()==="status")a.setAttribute("aria-hidden","false")}this._timerCookie=null},_handleEndRequest:function(){var a=this.get_element();if(this._dynamicLayout)a.style.display="none";else a.style.visibility="hidden";if(this.get_role()==="status")a.setAttribute("aria-hidden","true");this._clearTimeout()},dispose:function(){if(this._beginRequestHandlerDelegate!==null){this._pageRequestManager.remove_beginRequest(this._beginRequestHandlerDelegate);this._pageRequestManager.remove_endRequest(this._endRequestHandlerDelegate);this._beginRequestHandlerDelegate=null;this._endRequestHandlerDelegate=null}this._clearTimeout();Sys.UI._UpdateProgress.callBaseMethod(this,"dispose")},initialize:function(){Sys.UI._UpdateProgress.callBaseMethod(this,"initialize");if(this.get_role()==="status")this.get_element().setAttribute("aria-hidden","true");this._beginRequestHandlerDelegate=Function.createDelegate(this,this._handleBeginRequest);this._endRequestHandlerDelegate=Function.createDelegate(this,this._handleEndRequest);this._startDelegate=Function.createDelegate(this,this._startRequest);if(Sys.WebForms&&Sys.WebForms.PageRequestManager)this._pageRequestManager=Sys.WebForms.PageRequestManager.getInstance();if(this._pageRequestManager!==null){this._pageRequestManager.add_beginRequest(this._beginRequestHandlerDelegate);this._pageRequestManager.add_endRequest(this._endRequestHandlerDelegate)}}};Sys.UI._UpdateProgress.registerClass("Sys.UI._UpdateProgress",Sys.UI.Control);;
/*
* jQuery ifixpng plugin
* (previously known as pngfix)
* Version 2.1  (23/04/2008)
* @requires jQuery v1.1.3 or above
*
* Examples at: http://jquery.khurshid.com
* Copyright (c) 2007 Kush M.
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*/

/**
*
* @example
*
* optional if location of pixel.gif if different to default which is images/pixel.gif
* $.ifixpng('media/pixel.gif');
*
* $('img[@src$=.png], #panel').ifixpng();
*
* @apply hack to all png images and #panel which icluded png img in its css
*
* @name ifixpng
* @type jQuery
* @cat Plugins/Image
* @return jQuery
* @author jQuery Community
*/

(function () {
  var matched, browser;

  // Use of jQuery.browser is frowned upon.
  // More details: http://api.jquery.com/jQuery.browser
  // jQuery.uaMatch maintained for back-compat
  jQuery.uaMatch = function (ua) {
    ua = ua.toLowerCase();

    var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
        /(webkit)[ \/]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
        /(msie) ([\w.]+)/.exec(ua) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
        [];

    return {
      browser: match[1] || "",
      version: match[2] || "0"
    };
  };

  matched = jQuery.uaMatch(navigator.userAgent);
  browser = {};

  if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
  }

  // Chrome is Webkit, but Webkit is also Safari.
  if (browser.chrome) {
    browser.webkit = true;
  } else if (browser.webkit) {
    browser.safari = true;
  }

  jQuery.browser = browser;
})();

(function($) {

  /**
  * helper variables and function
  */
  $.ifixpng = function(customPixel) {
    $.ifixpng.pixel = customPixel;
  };

  $.ifixpng.getPixel = function() {
    return $.ifixpng.pixel || '/_media/image/pixel.gif';
  };

  var hack = {
    ltie7: $.browser.msie && $.browser.version < 7,
    filter: function(src) {
      return "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=crop,src='" + src + "')";
    }
  };

  /**
  * Applies ie png hack to selected dom elements
  *
  * $('img[@src$=.png]').ifixpng();
  * @desc apply hack to all images with png extensions
  *
  * $('#panel, img[@src$=.png]').ifixpng();
  * @desc apply hack to element #panel and all images with png extensions
  *
  * @name ifixpng
  */

  $.fn.ifixpng = hack.ltie7 ? function() {
    return this.each(function() {
      var $$ = $(this);
      // in case rewriting urls
      var base = $('base').attr('href');
      if (base) {
        // remove anything after the last '/'
        base = base.replace(/\/[^\/]+$/, '/');
      }
      if ($$.is('img') || $$.is('input')) { // hack image tags present in dom
        if ($$.attr('src') && $$.height() > 0) {
          if ($$.attr('src').match(/.*\.png([?].*)?$/i)) { // make sure it is png image
            // use source tag value if set 
            var source = (base && $$.attr('src').search(/^(\/|http:)/i)) ? base + $$.attr('src') : $$.attr('src');
            // apply filter
            $$.css({ filter: hack.filter(source), width: $$.width(), height: $$.height() })
						  .attr({ src: $.ifixpng.getPixel() })
						  .positionFix();
          }
        }
      } else { // hack png css properties present inside css
        var image = $$.css('backgroundImage');
        if (image != undefined) {
          if (image.match(/^url\(["']?(.*\.png([?].*)?)["']?\)$/i)) {
            image = RegExp.$1;
            image = (base && image.substring(0, 1) != '/') ? base + image : image;
            $$.css({ backgroundImage: 'none', filter: hack.filter(image) })
					  .children().children().positionFix();
          }
        }
      }
    });
  } : function() { return this; };

  /**
  * Removes any png hack that may have been applied previously
  *
  * $('img[@src$=.png]').iunfixpng();
  * @desc revert hack on all images with png extensions
  *
  * $('#panel, img[@src$=.png]').iunfixpng();
  * @desc revert hack on element #panel and all images with png extensions
  *
  * @name iunfixpng
  */

  $.fn.iunfixpng = hack.ltie7 ? function() {
    return this.each(function() {
      var $$ = $(this);
      var src = $$.css('filter');
      if (src.match(/src=["']?(.*\.png([?].*)?)["']?/i)) { // get img source from filter
        src = RegExp.$1;
        if ($$.is('img') || $$.is('input')) {
          $$.attr({ src: src }).css({ filter: '' });
        } else {
          $$.css({ filter: '', background: 'url(' + src + ')' });
        }
      }
    });
  } : function() { return this; };

  /**
  * positions selected item relatively
  */

  $.fn.positionFix = function() {
    return this.each(function() {
      var $$ = $(this);
      var position = $$.css('position');
      if (position != 'absolute' && position != 'relative') {
        $$.css({ position: 'relative' });
      }
    });
  };

})(jQuery);

;
/*
http://www.JSON.org/json2.js
2011-10-19

Public Domain.

NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

See http://www.JSON.org/js.html


This code should be minified before deployment.
See http://javascript.crockford.com/jsmin.html

USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
NOT CONTROL.


This file creates a global JSON object containing two methods: stringify
and parse.

JSON.stringify(value, replacer, space)
value       any JavaScript value, usually an object or array.

replacer    an optional parameter that determines how object
values are stringified for objects. It can be a
function or an array of strings.

space       an optional parameter that specifies the indentation
of nested structures. If it is omitted, the text will
be packed without extra whitespace. If it is a number,
it will specify the number of spaces to indent at each
level. If it is a string (such as '\t' or '&nbsp;'),
it contains the characters used to indent at each level.

This method produces a JSON text from a JavaScript value.

When an object value is found, if the object contains a toJSON
method, its toJSON method will be called and the result will be
stringified. A toJSON method does not serialize: it returns the
value represented by the name/value pair that should be serialized,
or undefined if nothing should be serialized. The toJSON method
will be passed the key associated with the value, and this will be
bound to the value

For example, this would serialize Dates as ISO strings.

Date.prototype.toJSON = function (key) {
function f(n) {
// Format integers to have at least two digits.
return n < 10 ? '0' + n : n;
}

return this.getUTCFullYear()   + '-' +
f(this.getUTCMonth() + 1) + '-' +
f(this.getUTCDate())      + 'T' +
f(this.getUTCHours())     + ':' +
f(this.getUTCMinutes())   + ':' +
f(this.getUTCSeconds())   + 'Z';
};

You can provide an optional replacer method. It will be passed the
key and value of each member, with this bound to the containing
object. The value that is returned from your method will be
serialized. If your method returns undefined, then the member will
be excluded from the serialization.

If the replacer parameter is an array of strings, then it will be
used to select the members to be serialized. It filters the results
such that only members with keys listed in the replacer array are
stringified.

Values that do not have JSON representations, such as undefined or
functions, will not be serialized. Such values in objects will be
dropped; in arrays they will be replaced with null. You can use
a replacer function to replace those with JSON values.
JSON.stringify(undefined) returns undefined.

The optional space parameter produces a stringification of the
value that is filled with line breaks and indentation to make it
easier to read.

If the space parameter is a non-empty string, then that string will
be used for indentation. If the space parameter is a number, then
the indentation will be that many spaces.

Example:

text = JSON.stringify(['e', {pluribus: 'unum'}]);
// text is '["e",{"pluribus":"unum"}]'


text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
// text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

text = JSON.stringify([new Date()], function (key, value) {
return this[key] instanceof Date ?
'Date(' + this[key] + ')' : value;
});
// text is '["Date(---current time---)"]'


JSON.parse(text, reviver)
This method parses a JSON text to produce an object or array.
It can throw a SyntaxError exception.

The optional reviver parameter is a function that can filter and
transform the results. It receives each of the keys and values,
and its return value is used instead of the original value.
If it returns what it received, then the structure is not modified.
If it returns undefined then the member is deleted.

Example:

// Parse the text. Values that look like ISO date strings will
// be converted to Date objects.

myData = JSON.parse(text, function (key, value) {
var a;
if (typeof value === 'string') {
a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
if (a) {
return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
+a[5], +a[6]));
}
}
return value;
});

myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
var d;
if (typeof value === 'string' &&
value.slice(0, 5) === 'Date(' &&
value.slice(-1) === ')') {
d = new Date(value.slice(5, -1));
if (d) {
return d;
}
}
return value;
});


This is a reference implementation. You are free to copy, modify, or
redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
lastIndex, length, parse, prototype, push, replace, slice, stringify,
test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
  JSON = {};
}

(function () {
  'use strict';

  function f(n) {
    // Format integers to have at least two digits.
    return n < 10 ? '0' + n : n;
  }

  if (typeof Date.prototype.toJSON !== 'function') {

    Date.prototype.toJSON = function (key) {

      return isFinite(this.valueOf())
                ? this.getUTCFullYear() + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate()) + 'T' +
                    f(this.getUTCHours()) + ':' +
                    f(this.getUTCMinutes()) + ':' +
                    f(this.getUTCSeconds()) + 'Z'
                : null;
    };

    String.prototype.toJSON =
            Number.prototype.toJSON =
            Boolean.prototype.toJSON = function (key) {
              return this.valueOf();
            };
  }

  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
          '\b': '\\b',
          '\t': '\\t',
          '\n': '\\n',
          '\f': '\\f',
          '\r': '\\r',
          '"': '\\"',
          '\\': '\\\\'
        },
        rep;


  function quote(string) {

    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.

    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
      var c = meta[a];
      return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
  }


  function str(key, holder) {

    // Produce a string from holder[key].

    var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

    // If the value has a toJSON method, call it to obtain a replacement value.

    if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
      value = value.toJSON(key);
    }

    // If we were called with a replacer function, then call the replacer to
    // obtain a replacement value.

    if (typeof rep === 'function') {
      value = rep.call(holder, key, value);
    }

    // What happens next depends on the value's type.

    switch (typeof value) {
      case 'string':
        return quote(value);

      case 'number':

        // JSON numbers must be finite. Encode non-finite numbers as null.

        return isFinite(value) ? String(value) : 'null';

      case 'boolean':
      case 'null':

        // If the value is a boolean or null, convert it to a string. Note:
        // typeof null does not produce 'null'. The case is included here in
        // the remote chance that this gets fixed someday.

        return String(value);

        // If the type is 'object', we might be dealing with an object or an array or
        // null.

      case 'object':

        // Due to a specification blunder in ECMAScript, typeof null is 'object',
        // so watch out for that case.

        if (!value) {
          return 'null';
        }

        // Make an array to hold the partial results of stringifying this object value.

        gap += indent;
        partial = [];

        // Is the value an array?

        if (Object.prototype.toString.apply(value) === '[object Array]') {

          // The value is an array. Stringify every element. Use null as a placeholder
          // for non-JSON values.

          length = value.length;
          for (i = 0; i < length; i += 1) {
            partial[i] = str(i, value) || 'null';
          }

          // Join all of the elements together, separated with commas, and wrap them in
          // brackets.

          v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
          gap = mind;
          return v;
        }

        // If the replacer is an array, use it to select the members to be stringified.

        if (rep && typeof rep === 'object') {
          length = rep.length;
          for (i = 0; i < length; i += 1) {
            if (typeof rep[i] === 'string') {
              k = rep[i];
              v = str(k, value);
              if (v) {
                partial.push(quote(k) + (gap ? ': ' : ':') + v);
              }
            }
          }
        } else {

          // Otherwise, iterate through all of the keys in the object.

          for (k in value) {
            if (Object.prototype.hasOwnProperty.call(value, k)) {
              v = str(k, value);
              if (v) {
                partial.push(quote(k) + (gap ? ': ' : ':') + v);
              }
            }
          }
        }

        // Join all of the member texts together, separated with commas,
        // and wrap them in braces.

        v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
  }

  // If the JSON object does not yet have a stringify method, give it one.

  if (typeof JSON.stringify !== 'function') {
    JSON.stringify = function (value, replacer, space) {

      // The stringify method takes a value and an optional replacer, and an optional
      // space parameter, and returns a JSON text. The replacer can be a function
      // that can replace values, or an array of strings that will select the keys.
      // A default replacer method can be provided. Use of the space parameter can
      // produce text that is more easily readable.

      var i;
      gap = '';
      indent = '';

      // If the space parameter is a number, make an indent string containing that
      // many spaces.

      if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
          indent += ' ';
        }

        // If the space parameter is a string, it will be used as the indent string.

      } else if (typeof space === 'string') {
        indent = space;
      }

      // If there is a replacer, it must be a function or an array.
      // Otherwise, throw an error.

      rep = replacer;
      if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
      }

      // Make a fake root object containing our value under the key of ''.
      // Return the result of stringifying the value.

      return str('', { '': value });
    };
  }


  // If the JSON object does not yet have a parse method, give it one.

  if (typeof JSON.parse !== 'function') {
    JSON.parse = function (text, reviver) {

      // The parse method takes a text and an optional reviver function, and returns
      // a JavaScript value if the text is a valid JSON text.

      var j;

      function walk(holder, key) {

        // The walk method is used to recursively walk the resulting structure so
        // that modifications can be made.

        var k, v, value = holder[key];
        if (value && typeof value === 'object') {
          for (k in value) {
            if (Object.prototype.hasOwnProperty.call(value, k)) {
              v = walk(value, k);
              if (v !== undefined) {
                value[k] = v;
              } else {
                delete value[k];
              }
            }
          }
        }
        return reviver.call(holder, key, value);
      }


      // Parsing happens in four stages. In the first stage, we replace certain
      // Unicode characters with escape sequences. JavaScript handles many characters
      // incorrectly, either silently deleting them, or treating them as line endings.

      text = String(text);
      cx.lastIndex = 0;
      if (cx.test(text)) {
        text = text.replace(cx, function (a) {
          return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        });
      }

      // In the second stage, we run the text against regular expressions that look
      // for non-JSON patterns. We are especially concerned with '()' and 'new'
      // because they can cause invocation, and '=' because it can cause mutation.
      // But just to be safe, we want to reject all unexpected forms.

      // We split the second stage into 4 regexp operations in order to work around
      // crippling inefficiencies in IE's and Safari's regexp engines. First we
      // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
      // replace all simple value tokens with ']' characters. Third, we delete all
      // open brackets that follow a colon or comma or that begin the text. Finally,
      // we look to see that the remaining characters are only whitespace or ']' or
      // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

      if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

        // In the third stage we use the eval function to compile the text into a
        // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
        // in JavaScript: it can begin a block or an object literal. We wrap the text
        // in parens to eliminate the ambiguity.

        j = eval('(' + text + ')');

        // In the optional fourth stage, we recursively walk the new structure, passing
        // each name/value pair to a reviver function for possible transformation.

        return typeof reviver === 'function'
                    ? walk({ '': j }, '')
                    : j;
      }

      // If the text is not JSON parseable, then a SyntaxError is thrown.

      throw new SyntaxError('JSON.parse');
    };
  }
} ());
;
// manager de plugins jquery, 
// présentement utilisé pour faire le refresh des images dans la gpc, pourrait servir ailleur.
namespace('nms.altitude.pluginsManager', function () {
  var self = this;

  /// enregistre un lightbox pour rafraichir.
  self.register = function (args) {
    if (assert(args, 'pluginType') && assert(args, 'selector')) {
      if (!self.hasOwnProperty(args.pluginType)) {
        self[args.pluginType] = {
          refresh: function () {
            pluginRefresh.apply(null, [args.pluginType].concat(Array.prototype.slice.call(arguments)));
          },
          refreshAll: function () {
            pluginRefreshAll.apply(null, [args.pluginType].concat(Array.prototype.slice.call(arguments)));
          },
          controls: {}
        };
      }
      self[args.pluginType].controls[args.selector] = args;
    }
  };

  // assure la présence de la propriété sur l'objet.
  function assert(args, propertyName, isSilent) {
    if (!args.hasOwnProperty(propertyName)) {
      if (!isSilent) {
        if (console && console.log) {
          console.log("nms.altitude.pluginsManager : argument " + propertyName + " non définit.");
        }
        else {
          alert("nms.altitude.pluginsManager : argument " + propertyName + " non définit.");
        }
      }
      return false;
    }
    return true;
  }

  // réexécute chacun des plugins enregistrés.
  function pluginRefreshAll(pluginsType) {
    for (var control in self[pluginsType].controls) {
      pluginRefresh.apply(null, [pluginsType, control].concat(Array.prototype.slice.call(arguments)));
    }
  }


  /// rafraichit le plugin
  function pluginRefresh(pluginType, selector) {
    var args = [];
    if (assert(self, pluginType, true) && assert(self[pluginType].controls, selector, true)) {
      args.push(self[pluginType].controls[selector]);
      if (arguments.length > 2) {
        for (var i = 2; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
      }
      self[pluginType].controls[selector].refresh.apply(null, args);
    }
  };
});
;
(function ($) {
  $.fn.HighlightSelector = function (settings) {
    // settings du plugin.
    settings = $.extend({
      QueryHashKeyName: "qa",
      HighlightClass: "highlight"
    }, settings);

    var instance = this;

    // Détection du changement d'url
    $(window).bind('hashchange', QAHighlight);

    // Détection du chargement de la page
    $(document).ready(QAHighlight);

    function QAHighlight() {
      // Expression de QA
      var qaExpression = new RegExp("#" + settings.QueryHashKeyName + "+=[^&=]+");

      // Obtient le QA
      var qaMatch = qaExpression.exec(document.location.href);

      // Valide si le QA match existe
      if (qaMatch != null && qaMatch.length > 0) {
        // Récupère la valeur du QA
        var qaValue = qaMatch[0].split('=')[1];

        // Récupère les sélector
        var qaSelector = qaValue.split(';');

        $("." + settings.HighlightClass).removeClass(settings.HighlightClass);

        // Valide si les selector va etre présent
        if (qaSelector != null && qaSelector.length > 0) {
          // Parcours les sélector
          $(qaSelector).each(function () {
            $(this.toString()).addClass(settings.HighlightClass);          
          });
        }
      }
    }
  }
})(jQuery);
;
function NmsLoadingManagerClass() {
  // Field contenant le loadingZone
  this.__loadingZone = null;
  this.loadingRegistered = {};
  this.isLoading = false;
}

NmsLoadingManagerClass.prototype = {

  // Initialize le contrôle de chargement
  Initialize: function () {
    // Création du contrôle
    this.__loadingZone = $("<div class=\"nmsLoadingContainer\"><img src='/_images/loading.gif'/ class=\"NmsLoadingManager\"></div>");

    // Définit le css par défault
    $(this.__loadingZone).css({ background: "white", position: "fixed", top: "50%", left: "50%" })

    // Cache la zone de chargement
    $(this.__loadingZone).hide();

    // Ajoute la zone au body
    $('body').append(this.__loadingZone);
  },

  // Affiche le loading
  Start: function (id) {
    var registerName = this.GetLoadingId(id);

    if (this.isRegisterEmpty()) {
      // Initialize le contrôle
      this.Initialize();
    }

    if (!this.loadingRegistered.hasOwnProperty(registerName)) {
      this.loadingRegistered[registerName] = true;
    }

    $(this.__loadingZone).show();
    this.isLoading = true;
    $(document.body).addClass("nms_isLoading");
  },

  // Cache le loading
  Stop: function (id) {
    var registerName = this.GetLoadingId(id);

    if (this.loadingRegistered.hasOwnProperty(registerName)) {
      delete this.loadingRegistered[registerName];
    }

    if (this.isRegisterEmpty() && this.isLoading) {
      $(this.__loadingZone).hide();
      this.isLoading = false;
      $(document.body).removeClass("nms_isLoading");
    }
  },

  //Fallback du id si nécessaire
  GetLoadingId: function (id)
  {
    return (id || 'default');
  },

  //Si le dictionnaire est vide
  isRegisterEmpty : function () {
      for (var i in this.loadingRegistered) {
        return false;
    }
    return true;
  },

  //Arrête tout les loading
  StopAll: function ()
  {
    this.loadingRegistered = {};
    this.Stop();
  }
  
};

// Instancie le manager de loading
window.NmsLoadingManager = new NmsLoadingManagerClass();
;
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', {expires: 7, path: '/', domain: 'jquery.com', secure: true});
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '; path=/'; // NOTE (APR) : on a ajouter le path '/' par d�faut
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', options.raw ? value : encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};;
//Required the .keys extension to know if the function added to namespace is used.
if (!Object.keys) {
  Object.keys = function (obj) {
    var keys = [],
        k;
    for (k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k)) {
        keys.push(k);
      }
    }
    return keys;
  };
}



//If content is function, it pushes the namespace inside the "this".  So every property or 
//function added to "this." will be added to the namespace.
function namespace(namespace, content, isClass) {
  var splitedNamespaces = namespace.split(".");
  var lastStage = null;

  for (var namespaceIndex = 0; namespaceIndex < splitedNamespaces.length; namespaceIndex++) {
    var ns = splitedNamespaces[namespaceIndex];

    if (lastStage == null) {
      //First pass, put the stage to the registered
      lastStage = getNamespaceByRef(window, ns);
    }
    else {
      //next pass, drill down the objects.
      if (isClass && (namespaceIndex == splitedNamespaces.length - 1)) {
        lastStage = lastStage[ns] = content;

      }
      else {
        lastStage = getNamespaceByRef(lastStage, ns);
      }

    }
  }

  //Add all content in the namespace stage
  if (isFunction(content)) {
    var initialContentCount = Object.keys(lastStage).length;
    //Extent current namespace with content marked by "this.xxx" in the function.
    if (!isClass) {
      content.call(lastStage);
      if (initialContentCount == Object.keys(lastStage).length) {
        if (typeof console !== "undefined" && console.warn) {
          console.warn("A registered function into the namespace " + namespace + " doesn't add any public function or property.");
        }
      }
    }

  }
  else {
    //Extent namespace with object content
    for (var prop in content) {
      lastStage[prop] = content[prop];
    }
  }

  function getNamespaceByRef(namespaceObject, subNamespaceString, isClassToSet, content) {
    var subNameSpace = namespaceObject[subNamespaceString];
    if (subNameSpace == null) {
      namespaceObject[subNamespaceString] = {};
    }
    return namespaceObject[subNamespaceString];
  }

  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }
}
// �tend la fonction namespace.
(function (namespace) {
  /// retourne un objet a partir du namespace.
  namespace.getExisting = function (n) {
    var split = n.split(".");

    function down(obj) {
      var level = obj[split[0]];
      split.splice(0, 1);
      return (level) ? (!split.length) ? level : down(level) : null;
    }
    return down(window);
  };


})(namespace);


function namespaceCtor(_namespace, content) {
  namespace(_namespace, content, true);
}
;
(function () {
  namespace('nms.altitude.ContactSessionHelper', function (undefined) {
    var self = this,
        sessionGuidCookieName = "sessionGuid"; // NOTE (slaflamme) : Attention, si on modifie le nom, il doit aussi être modifié dans le SessionControl

    /// Retourne le session guid s'il existe déjà ou en crée un nouveau et le retourne
    self.getSessionGuid = function () {
      // Valide le cookie qui indique si c'est la première fois que l'on fait l'analytique
      if (!$.cookie(sessionGuidCookieName)) {

        var sessionGuid = newGuid();

        // Initialise le cookie
        $.cookie(sessionGuidCookieName, sessionGuid, { expires: 999 });
      }

      return $.cookie(sessionGuidCookieName);
    };

    // Génère aléatoirement quatre caractères d'un guid
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };

    // Retourne un nouveau guid
    function newGuid () {
      return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    };

    /// Sauvegarde l'association entre un contact et une session
    self.saveContactSession = function (contactGuid) {
      AltitudeServices.ContactSessionService.SaveContactSession({ contactGuid: contactGuid, sessionGuid: self.getSessionGuid() }, function (result) {
      }, function (response, status, error) {
        throw "erreur de sauvegarde de la session";
      });
    }

  });

})();;
/*	
Watermark plugin for jQuery
Version: 3.0.6
http://jquery-watermark.googlecode.com/

Copyright (c) 2009-2010 Todd Northrop
http://www.speednet.biz/
	
June 21, 2010

Requires:  jQuery 1.2.3+
	
Dual licensed under the MIT or GPL Version 2 licenses.
See mit-license.txt and gpl2-license.txt in the project root for details.
------------------------------------------------------*/

(function($) {

  var 
  // Will speed up references to undefined
	undefined,

  // String constants for data names
	dataFlag = "watermark",
	dataClass = "watermarkClass",
	dataFocus = "watermarkFocus",
	dataFormSubmit = "watermarkSubmit",
	dataMaxLen = "watermarkMaxLength",
	dataPassword = "watermarkPassword",
	dataText = "watermarkText",

  // Includes only elements with watermark defined
	selWatermarkDefined = ":data(" + dataFlag + ")",

  // Includes only elements capable of having watermark
  selWatermarkAble = "input:text,input:password,input:search,textarea,input[type='color'],input[type='date'],input[type='datetime'],input[type='datetime-local'],input[type='email'],input[type='month'],input[type='number'],input[type='tel'],input[type='time'],input[type='url'],input[type='week']",

  // triggerFns:
  // Array of function names to look for in the global namespace.
  // Any such functions found will be hijacked to trigger a call to
  // hideAll() any time they are called.  The default value is the
  // ASP.NET function that validates the controls on the page
  // prior to a postback.
  // 
  // Am I missing other important trigger function(s) to look for?
  // Please leave me feedback:
  // http://code.google.com/p/jquery-watermark/issues/list
	triggerFns = [
		"Page_ClientValidate"
	],

  // Holds a value of true if a watermark was displayed since the last
  // hideAll() was executed. Avoids repeatedly calling hideAll().
	pageDirty = false;

  // Extends jQuery with a custom selector - ":data(...)"
  // :data(<name>)  Includes elements that have a specific name defined in the jQuery data collection. (Only the existence of the name is checked; the value is ignored.)
  // :data(<name>=<value>)  Includes elements that have a specific jQuery data name defined, with a specific value associated with it.
  // :data(<name>!=<value>)  Includes elements that have a specific jQuery data name defined, with a value that is not equal to the value specified.
  // :data(<name>^=<value>)  Includes elements that have a specific jQuery data name defined, with a value that starts with the value specified.
  // :data(<name>$=<value>)  Includes elements that have a specific jQuery data name defined, with a value that ends with the value specified.
  // :data(<name>*=<value>)  Includes elements that have a specific jQuery data name defined, with a value that contains the value specified.
  $.extend($.expr[":"], {
    "search": function(elem) {
      return "search" === (elem.type || "");
    },

    "data": function(element, index, matches, set) {
      var data, parts = /^((?:[^=!^$*]|[!^$*](?!=))+)(?:([!^$*]?=)(.*))?$/.exec(matches[3]);

      if (parts) {
        data = $(element).data(parts[1]);

        if (data !== undefined) {

          if (parts[2]) {
            data = "" + data;

            switch (parts[2]) {
              case "=":
                return (data == parts[3]);
              case "!=":
                return (data != parts[3]);
              case "^=":
                return (data.slice(0, parts[3].length) == parts[3]);
              case "$=":
                return (data.slice(-parts[3].length) == parts[3]);
              case "*=":
                return (data.indexOf(parts[3]) !== -1);
            }
          }

          return true;
        }
      }

      return false;
    }
  });

  $.watermark = {

    // Current version number of the plugin
    version: "3.0.6",

    // Default options used when watermarks are instantiated.
    // Can be changed to affect the default behavior for all
    // new or updated watermarks.
    // BREAKING CHANGE:  The $.watermark.className
    // property that was present prior to version 3.0.2 must
    // be changed to $.watermark.options.className
    options: {

      // Default class name for all watermarks
      className: "watermark",

      // If true, plugin will detect and use native browser support for
      // watermarks, if available. (e.g., WebKit's placeholder attribute.)
      useNative: true
    },

    // Hide one or more watermarks by specifying any selector type
    // i.e., DOM element, string selector, jQuery matched set, etc.
    hide: function(selector) {
      $(selector).filter(selWatermarkDefined).each(
			function() {
			  $.watermark._hide($(this));
			}
		);
    },

    // Internal use only.
    _hide: function($input, focus) {
      var inputVal = $input.val() || "",
			inputWm = $input.data(dataText) || "",
			maxLen = $input.data(dataMaxLen) || 0,
			className = $input.data(dataClass);

      if ((inputWm.length) && (inputVal == inputWm)) {
        $input.val("");

        // Password type?
        if ($input.data(dataPassword)) {

          if (($input.attr("type") || "") === "text") {
            var $pwd = $input.data(dataPassword) || [],
						$wrap = $input.parent() || [];

            if (($pwd.length) && ($wrap.length)) {
              $wrap[0].removeChild($input[0]); // Can't use jQuery methods, because they destroy data
              $wrap[0].appendChild($pwd[0]);
              $input = $pwd;
            }
          }
        }

        if (maxLen) {
          $input.attr("maxLength", maxLen);
          $input.removeData(dataMaxLen);
        }

        if (focus) {
          $input.attr("autocomplete", "off");  // Avoid NS_ERROR_XPC_JS_THREW_STRING error in Firefox

          window.setTimeout(
					function() {
					  $input.select();  // Fix missing cursor in IE
					}
				, 1);
        }
      }

      className && $input.removeClass(className);
    },

    // Display one or more watermarks by specifying any selector type
    // i.e., DOM element, string selector, jQuery matched set, etc.
    // If conditions are not right for displaying a watermark, ensures that watermark is not shown.
    show: function(selector) {
      $(selector).filter(selWatermarkDefined).each(
			function() {
			  $.watermark._show($(this));
			}
		);
    },

    // Internal use only.
    _show: function($input) {
      var val = $input.val() || "",
			text = $input.data(dataText) || "",
			type = $input.attr("type") || "",
			className = $input.data(dataClass);

      if (((val.length == 0) || (val == text)) && (!$input.data(dataFocus))) {
        pageDirty = true;

        // Password type?
        if ($input.data(dataPassword)) {

          if (type === "password") {
            var $pwd = $input.data(dataPassword) || [],
						$wrap = $input.parent() || [];

            if (($pwd.length) && ($wrap.length)) {
              $wrap[0].removeChild($input[0]); // Can't use jQuery methods, because they destroy data
              $wrap[0].appendChild($pwd[0]);
              $input = $pwd;
              $input.attr("maxLength", text.length);
            }
          }
        }

        // Ensure maxLength big enough to hold watermark (input of type="text" or type="search" only)
        if ((type === "text") || (type === "search")) {
          var maxLen = $input.attr("maxLength") || 0;

          if ((maxLen > 0) && (text.length > maxLen)) {
            $input.data(dataMaxLen, maxLen);
            $input.attr("maxLength", text.length);
          }
        }

        className && $input.addClass(className);
        $input.val(text);
      }
      else {
        $.watermark._hide($input);
      }
    },

    // Hides all watermarks on the current page.
    hideAll: function() {
      if (pageDirty) {
        $.watermark.hide(selWatermarkAble);
        pageDirty = false;
      }
    },

    // Displays all watermarks on the current page.
    showAll: function() {
      $.watermark.show(selWatermarkAble);
    }
  };

  $.fn.watermark = function(text, options) {
    ///	<summary>
    ///		Set watermark text and class name on all input elements of type="text/password/search" and
    /// 	textareas within the matched set. If className is not specified in options, the default is
    /// 	"watermark". Within the matched set, only input elements with type="text/password/search"
    /// 	and textareas are affected; all other elements are ignored.
    ///	</summary>
    ///	<returns type="jQuery">
    ///		Returns the original jQuery matched set (not just the input and texarea elements).
    /// </returns>
    ///	<param name="text" type="String">
    ///		Text to display as a watermark when the input or textarea element has an empty value and does not
    /// 	have focus. The first time watermark() is called on an element, if this argument is empty (or not
    /// 	a String type), then the watermark will have the net effect of only changing the class name when
    /// 	the input or textarea element's value is empty and it does not have focus.
    ///	</param>
    ///	<param name="options" type="Object" optional="true">
    ///		Provides the ability to override the default watermark options ($.watermark.options). For backward
    /// 	compatibility, if a string value is supplied, it is used as the class name that overrides the class
    /// 	name in $.watermark.options.className. Properties include:
    /// 		className: When the watermark is visible, the element will be styled using this class name.
    /// 		useNative (Boolean or Function): Specifies if native browser support for watermarks will supersede
    /// 			plugin functionality. If useNative is a function, the return value from the function will
    /// 			determine if native support is used. The function is passed one argument -- a jQuery object
    /// 			containing the element being tested as the only element in its matched set -- and the DOM
    /// 			element being tested is the object on which the function is invoked (the value of "this").
    ///	</param>
    /// <remarks>
    ///		The effect of changing the text and class name on an input element is called a watermark because
    ///		typically light gray text is used to provide a hint as to what type of input is required. However,
    ///		the appearance of the watermark can be something completely different: simply change the CSS style
    ///		pertaining to the supplied class name.
    ///		
    ///		The first time watermark() is called on an element, the watermark text and class name are initialized,
    ///		and the focus and blur events are hooked in order to control the display of the watermark.  Also, as
    /// 	of version 3.0, drag and drop events are hooked to guard against dropped text being appended to the
    /// 	watermark.  If native watermark support is provided by the browser, it is detected and used, unless
    /// 	the useNative option is set to false.
    ///		
    ///		Subsequently, watermark() can be called again on an element in order to change the watermark text
    ///		and/or class name, and it can also be called without any arguments in order to refresh the display.
    ///		
    ///		For example, after changing the value of the input or textarea element programmatically, watermark()
    /// 	should be called without any arguments to refresh the display, because the change event is only
    /// 	triggered by user actions, not by programmatic changes to an input or textarea element's value.
    /// 	
    /// 	The one exception to programmatic updates is for password input elements:  you are strongly cautioned
    /// 	against changing the value of a password input element programmatically (after the page loads).
    /// 	The reason is that some fairly hairy code is required behind the scenes to make the watermarks bypass
    /// 	IE security and switch back and forth between clear text (for watermarks) and obscured text (for
    /// 	passwords).  It is *possible* to make programmatic changes, but it must be done in a certain way, and
    /// 	overall it is not recommended.
    /// </remarks>

    if (!this.length) {
      return this;
    }

    var hasClass = false,
		hasText = (typeof (text) === "string");

    if (typeof (options) === "object") {
      hasClass = (typeof (options.className) === "string");
      options = $.extend({}, $.watermark.options, options);
    }
    else if (typeof (options) === "string") {
      hasClass = true;
      options = $.extend({}, $.watermark.options, { className: options });
    }
    else {
      options = $.watermark.options;
    }

    if (typeof (options.useNative) !== "function") {
      options.useNative = options.useNative ? function() { return true; } : function() { return false; };
    }

    return this.each(
		function() {
		  var $input = $(this);

		  if (!$input.is(selWatermarkAble)) {
		    return;
		  }

		  // Watermark already initialized?
		  if ($input.data(dataFlag)) {

		    // If re-defining text or class, first remove existing watermark, then make changes
		    if (hasText || hasClass) {
		      $.watermark._hide($input);

		      if (hasText) {
		        $input.data(dataText, text);
		      }

		      if (hasClass) {
		        $input.data(dataClass, options.className);
		      }
		    }
		  }
		  else {

		    // Detect and use native browser support, if enabled in options
		    if (typeof $input[0].placeholder != 'undefined') {
		      $input.attr("placeholder", text);
		      return;
		    }

		    $input.data(dataText, hasText ? text : "");
		    $input.data(dataClass, options.className);
		    $input.data(dataFlag, 1); // Flag indicates watermark was initialized

		    // Special processing for password type
		    if (($input.attr("type") || "") === "password") {
		      var $wrap = $input.wrap("<span>").parent(),
						$wm = $($wrap.html().replace(/type=["']?password["']?/i, 'type="text"'));

		      $wm.data(dataText, $input.data(dataText));
		      $wm.data(dataClass, $input.data(dataClass));
		      $wm.data(dataFlag, 1);
		      $wm.attr("maxLength", text.length);

		      $wm.focus(
						function() {
						  $.watermark._hide($wm, true);
						}
					).bind("dragenter",
						function() {
						  $.watermark._hide($wm);
						}
					).bind("dragend",
						function() {
						  window.setTimeout(function() { $wm.blur(); }, 1);
						}
					);
		      $input.blur(
						function() {
						  $.watermark._show($input);
						}
					).bind("dragleave",
						function() {
						  $.watermark._show($input);
						}
					);

		      $wm.data(dataPassword, $input);
		      $input.data(dataPassword, $wm);
		    }
		    else {

		      $input.focus(
						function() {
						  $input.data(dataFocus, 1);
						  $.watermark._hide($input, true);
						}
					).blur(
						function() {
						  $input.data(dataFocus, 0);
						  $.watermark._show($input);
						}
					).bind("dragenter",
						function() {
						  $.watermark._hide($input);
						}
					).bind("dragleave",
						function() {
						  $.watermark._show($input);
						}
					).bind("dragend",
						function() {
						  window.setTimeout(function() { $.watermark._show($input); }, 1);
						}
					).bind("drop",
		      // Firefox makes this lovely function necessary because the dropped text
		      // is merged with the watermark before the drop event is called.
						function(evt) {
						  var dropText = evt.originalEvent.dataTransfer.getData("Text");

						  if ($input.val().replace(dropText, "") === $input.data(dataText)) {
						    $input.val(dropText);
						  }

						  $input.focus();
						}
					);
		    }

		    // In order to reliably clear all watermarks before form submission,
		    // we need to replace the form's submit function with our own
		    // function.  Otherwise watermarks won't be cleared when the form
		    // is submitted programmatically.
		    /*if (this.form) {
		    var form = this.form,
		    $form = $(form);

		      if (!$form.data(dataFormSubmit)) {
		    $form.submit($.watermark.hideAll);

		        // form.submit exists for all browsers except Google Chrome
		    // (see "else" below for explanation)
		    if (form.submit) {
		    $form.data(dataFormSubmit, form.submit);

		          form.submit = (function(f, $f) {
		    return function() {
		    var nativeSubmit = $f.data(dataFormSubmit);

		              $.watermark.hideAll();

		              if (nativeSubmit.apply) {
		    nativeSubmit.apply(f, Array.prototype.slice.call(arguments));
		    }
		    else {
		    nativeSubmit();
		    }
		    };
		    })(form, $form);
		    }
		    else {
		    $form.data(dataFormSubmit, 1);

		          // This strangeness is due to the fact that Google Chrome's
		    // form.submit function is not visible to JavaScript (identifies
		    // as "undefined").  I had to invent a solution here because hours
		    // of Googling (ironically) for an answer did not turn up anything
		    // useful.  Within my own form.submit function I delete the form's
		    // submit function, and then call the non-existent function --
		    // which, in the world of Google Chrome, still exists.
		    form.submit = (function(f) {
		    return function() {
		    $.watermark.hideAll();
		    delete f.submit;
		    f.submit();
		    };
		    })(form);
		    }
		    }
		    }*/
		  }

		  $.watermark._show($input);
		}
	);
  };

  // Hijack any functions found in the triggerFns list
  if (triggerFns.length) {

    // Wait until DOM is ready before searching
    $(function() {
      var i, name, fn;

      for (i = triggerFns.length - 1; i >= 0; i--) {
        name = triggerFns[i];
        fn = window[name];

        if (typeof (fn) === "function") {
          window[name] = (function(origFn) {
            return function() {
              $.watermark.hideAll();
              return origFn.apply(null, Array.prototype.slice.call(arguments));
            };
          })(fn);
        }
      }
    });
  }

})(jQuery);
;
/*!
 * jQuery Form Plugin
 * version: 3.27.0-2013.02.06
 * @requires jQuery v1.5 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses:
 *    http://malsup.github.com/mit-license.txt
 *    http://malsup.github.com/gpl-license-v2.txt
 */
/*global ActiveXObject alert */
; (function ($) {
  "use strict";

  /*
      Usage Note:
      -----------
      Do not use both ajaxSubmit and ajaxForm on the same form.  These
      functions are mutually exclusive.  Use ajaxSubmit if you want
      to bind your own submit handler to the form.  For example,
  
      $(document).ready(function() {
          $('#myForm').on('submit', function(e) {
              e.preventDefault(); // <-- important
              $(this).ajaxSubmit({
                  target: '#output'
              });
          });
      });
  
      Use ajaxForm when you want the plugin to manage all the event binding
      for you.  For example,
  
      $(document).ready(function() {
          $('#myForm').ajaxForm({
              target: '#output'
          });
      });
  
      You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
      form does not have to exist when you invoke ajaxForm:
  
      $('#myForm').ajaxForm({
          delegation: true,
          target: '#output'
      });
  
      When using ajaxForm, the ajaxSubmit function will be invoked for you
      at the appropriate time.
  */

  /**
   * Feature detection
   */
  var feature = {};
  feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
  feature.formdata = window.FormData !== undefined;

  /**
   * ajaxSubmit() provides a mechanism for immediately submitting
   * an HTML form using AJAX.
   */
  $.fn.ajaxSubmit = function (options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
      log('ajaxSubmit: skipping submit process - no element selected');
      return this;
    }

    var method, action, url, $form = this;

    if (typeof options == 'function') {
      options = { success: options };
    }

    method = this.attr('method');
    action = this.attr('action');
    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
      // clean url (don't include hash vaue)
      url = (url.match(/^([^#]+)/) || [])[1];
    }

    options = $.extend(true, {
      url: url,
      success: $.ajaxSettings.success,
      type: method || 'GET',
      iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
      log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
      return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
      log('ajaxSubmit: submit aborted via beforeSerialize callback');
      return this;
    }

    var traditional = options.traditional;
    if (traditional === undefined) {
      traditional = $.ajaxSettings.traditional;
    }

    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
      options.extraData = options.data;
      qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
      log('ajaxSubmit: submit aborted via beforeSubmit callback');
      return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
      log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
      return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
      q = (q ? (q + '&' + qx) : qx);
    }
    if (options.type.toUpperCase() == 'GET') {
      options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
      options.data = null;  // data is null for 'get'
    }
    else {
      options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
      callbacks.push(function () { $form.resetForm(); });
    }
    if (options.clearForm) {
      callbacks.push(function () { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
      var oldSuccess = options.success || function () { };
      callbacks.push(function (data) {
        var fn = options.replaceTarget ? 'replaceWith' : 'html';
        $(options.target)[fn](data).each(oldSuccess, arguments);
      });
    }
    else if (options.success) {
      callbacks.push(options.success);
    }

    options.success = function (data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
      var context = options.context || this;    // jQuery 1.4+ supports scope context
      for (var i = 0, max = callbacks.length; i < max; i++) {
        callbacks[i].apply(context, [data, status, xhr || $form, $form]);
      }
    };

    // are there files to upload?

    // [value] (issue #113), also see comment:
    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
    var fileInputs = $('input[type=file]:enabled[value!=""]', this);

    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
      // hack to fix Safari hang (thanks to Tim Molendijk for this)
      // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
      if (options.closeKeepAlive) {
        $.get(options.closeKeepAlive, function () {
          jqxhr = fileUploadIframe(a);
        });
      }
      else {
        jqxhr = fileUploadIframe(a);
      }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
      jqxhr = fileUploadXhr(a);
    }
    else {
      jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k = 0; k < elements.length; k++)
      elements[k] = null;

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData) {
      var serialized = $.param(extraData).split('&');
      var len = serialized.length;
      var result = [];
      var i, part;
      for (i = 0; i < len; i++) {
        // #252; undo param space replacement
        serialized[i] = serialized[i].replace(/\+/g, ' ');
        part = serialized[i].split('=');
        // #278; use array instead of object storage, favoring array serializations
        result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
      }
      return result;
    }

    // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
      var formdata = new FormData();

      for (var i = 0; i < a.length; i++) {
        formdata.append(a[i].name, a[i].value);
      }

      if (options.extraData) {
        var serializedData = deepSerialize(options.extraData);
        for (i = 0; i < serializedData.length; i++)
          if (serializedData[i])
            formdata.append(serializedData[i][0], serializedData[i][1]);
      }

      options.data = null;

      var s = $.extend(true, {}, $.ajaxSettings, options, {
        contentType: false,
        processData: false,
        cache: false,
        type: method || 'POST'
      });

      if (options.uploadProgress) {
        // workaround because jqXHR does not expose upload property
        s.xhr = function () {
          var xhr = jQuery.ajaxSettings.xhr();
          if (xhr.upload) {
            xhr.upload.addEventListener('progress', function (event) {
              var percent = 0;
              var position = event.loaded || event.position; /*event.position is deprecated*/
              var total = event.total;
              if (event.lengthComputable) {
                percent = Math.ceil(position / total * 100);
              }
              options.uploadProgress(event, position, total, percent);
            }, false);
          }
          return xhr;
        };
      }

      s.data = null;
      var beforeSend = s.beforeSend;
      s.beforeSend = function (xhr, o) {
        o.data = formdata;
        if (beforeSend)
          beforeSend.call(this, xhr, o);
      };
      return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
      var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
      var useProp = !!$.fn.prop;
      var deferred = $.Deferred();

      if (a) {
        // ensure that every serialized input is still enabled
        for (i = 0; i < elements.length; i++) {
          el = $(elements[i]);
          if (useProp)
            el.prop('disabled', false);
          else
            el.removeAttr('disabled');
        }
      }

      s = $.extend(true, {}, $.ajaxSettings, options);
      s.context = s.context || s;
      id = 'jqFormIO' + (new Date().getTime());
      if (s.iframeTarget) {
        $io = $(s.iframeTarget);
        n = $io.attr('name');
        if (!n)
          $io.attr('name', id);
        else
          id = n;
      }
      else {
        $io = $('<iframe name="' + id + '" src="' + s.iframeSrc + '" />');
        $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
      }
      io = $io[0];


      xhr = { // mock object
        aborted: 0,
        responseText: null,
        responseXML: null,
        status: 0,
        statusText: 'n/a',
        getAllResponseHeaders: function () { },
        getResponseHeader: function () { },
        setRequestHeader: function () { },
        abort: function (status) {
          var e = (status === 'timeout' ? 'timeout' : 'aborted');
          log('aborting upload... ' + e);
          this.aborted = 1;

          try { // #214, #257
            if (io.contentWindow.document.execCommand) {
              io.contentWindow.document.execCommand('Stop');
            }
          }
          catch (ignore) { }

          $io.attr('src', s.iframeSrc); // abort op in progress
          xhr.error = e;
          if (s.error)
            s.error.call(s.context, xhr, e, status);
          if (g)
            $.event.trigger("ajaxError", [xhr, s, e]);
          if (s.complete)
            s.complete.call(s.context, xhr, e);
        }
      };

      g = s.global;
      // trigger ajax global events so that activity/block indicators work like normal
      if (g && 0 === $.active++) {
        $.event.trigger("ajaxStart");
      }
      if (g) {
        $.event.trigger("ajaxSend", [xhr, s]);
      }

      if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
        if (s.global) {
          $.active--;
        }
        deferred.reject();
        return deferred;
      }
      if (xhr.aborted) {
        deferred.reject();
        return deferred;
      }

      // add submitting element to data if we know it
      sub = form.clk;
      if (sub) {
        n = sub.name;
        if (n && !sub.disabled) {
          s.extraData = s.extraData || {};
          s.extraData[n] = sub.value;
          if (sub.type == "image") {
            s.extraData[n + '.x'] = form.clk_x;
            s.extraData[n + '.y'] = form.clk_y;
          }
        }
      }

      var CLIENT_TIMEOUT_ABORT = 1;
      var SERVER_ABORT = 2;

      function getDoc(frame) {
        var doc = frame.contentWindow ? frame.contentWindow.document : frame.contentDocument ? frame.contentDocument : frame.document;
        return doc;
      }

      // Rails CSRF hack (thanks to Yvan Barthelemy)
      var csrf_token = $('meta[name=csrf-token]').attr('content');
      var csrf_param = $('meta[name=csrf-param]').attr('content');
      if (csrf_param && csrf_token) {
        s.extraData = s.extraData || {};
        s.extraData[csrf_param] = csrf_token;
      }

      // take a breath so that pending repaints get some cpu time before the upload starts
      function doSubmit() {
        // make sure form attrs are set
        var t = $form.attr('target'), a = $form.attr('action');

        // update form attrs in IE friendly way
        form.setAttribute('target', id);
        if (!method) {
          form.setAttribute('method', 'POST');
        }
        if (a != s.url) {
          form.setAttribute('action', s.url);
        }

        // ie borks in some cases when setting encoding
        if (!s.skipEncodingOverride && (!method || /post/i.test(method))) {
          $form.attr({
            encoding: 'multipart/form-data',
            enctype: 'multipart/form-data'
          });
        }

        // support timout
        if (s.timeout) {
          timeoutHandle = setTimeout(function () { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
        }

        // look for server aborts
        function checkState() {
          try {
            var state = getDoc(io).readyState;
            log('state = ' + state);
            if (state && state.toLowerCase() == 'uninitialized')
              setTimeout(checkState, 50);
          }
          catch (e) {
            log('Server abort: ', e, ' (', e.name, ')');
            cb(SERVER_ABORT);
            if (timeoutHandle)
              clearTimeout(timeoutHandle);
            timeoutHandle = undefined;
          }
        }

        // add "extra" data to form if provided in options
        var extraInputs = [];
        try {
          if (s.extraData) {
            for (var n in s.extraData) {
              if (s.extraData.hasOwnProperty(n)) {
                // if using the $.param format that allows for multiple values with the same name
                if ($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                  extraInputs.push(
                  $('<input type="hidden" name="' + s.extraData[n].name + '">').val(s.extraData[n].value)
                      .appendTo(form)[0]);
                } else {
                  extraInputs.push(
                  $('<input type="hidden" name="' + n + '">').val(s.extraData[n])
                      .appendTo(form)[0]);
                }
              }
            }
          }

          if (!s.iframeTarget) {
            // add iframe to doc and submit the form
            $io.appendTo('body');
            if (io.attachEvent)
              io.attachEvent('onload', cb);
            else
              io.addEventListener('load', cb, false);
          }
          setTimeout(checkState, 15);
          // just in case form has element with name/id of 'submit'
          var submitFn = document.createElement('form').submit;
          submitFn.apply(form);
        }
        finally {
          // reset attrs and remove "extra" input elements
          form.setAttribute('action', a);
          if (t) {
            form.setAttribute('target', t);
          } else {
            $form.removeAttr('target');
          }
          $(extraInputs).remove();
        }
      }

      if (s.forceSync) {
        doSubmit();
      }
      else {
        setTimeout(doSubmit, 10); // this lets dom updates render
      }

      var data, doc, domCheckCount = 50, callbackProcessed;

      function cb(e) {
        if (xhr.aborted || callbackProcessed) {
          return;
        }
        try {
          doc = getDoc(io);
        }
        catch (ex) {
          log('cannot access response document: ', ex);
          e = SERVER_ABORT;
        }
        if (e === CLIENT_TIMEOUT_ABORT && xhr) {
          xhr.abort('timeout');
          deferred.reject(xhr, 'timeout');
          return;
        }
        else if (e == SERVER_ABORT && xhr) {
          xhr.abort('server abort');
          deferred.reject(xhr, 'error', 'server abort');
          return;
        }

        if (!doc || doc.location.href == s.iframeSrc) {
          // response not received yet
          if (!timedOut)
            return;
        }
        if (io.detachEvent)
          io.detachEvent('onload', cb);
        else
          io.removeEventListener('load', cb, false);

        var status = 'success', errMsg;
        try {
          if (timedOut) {
            throw 'timeout';
          }

          var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
          log('isXml=' + isXml);
          if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
            if (--domCheckCount) {
              // in some browsers (Opera) the iframe DOM is not always traversable when
              // the onload callback fires, so we loop a bit to accommodate
              log('requeing onLoad callback, DOM not available');
              setTimeout(cb, 250);
              return;
            }
            // let this fall through because server response could be an empty document
            //log('Could not access iframe DOM after mutiple tries.');
            //throw 'DOMException: not available';
          }

          //log('response detected');
          var docRoot = doc.body ? doc.body : doc.documentElement;
          xhr.responseText = docRoot ? docRoot.innerHTML : null;
          xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
          if (isXml)
            s.dataType = 'xml';
          xhr.getResponseHeader = function (header) {
            var headers = { 'content-type': s.dataType };
            return headers[header];
          };
          // support for XHR 'status' & 'statusText' emulation :
          if (docRoot) {
            xhr.status = Number(docRoot.getAttribute('status')) || xhr.status;
            xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
          }

          var dt = (s.dataType || '').toLowerCase();
          var scr = /(json|script|text)/.test(dt);
          if (scr || s.textarea) {
            // see if user embedded response in textarea
            var ta = doc.getElementsByTagName('textarea')[0];
            if (ta) {
              xhr.responseText = ta.value;
              // support for XHR 'status' & 'statusText' emulation :
              xhr.status = Number(ta.getAttribute('status')) || xhr.status;
              xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
            }
            else if (scr) {
              // account for browsers injecting pre around json response
              var pre = doc.getElementsByTagName('pre')[0];
              var b = doc.getElementsByTagName('body')[0];
              if (pre) {
                xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
              }
              else if (b) {
                xhr.responseText = b.textContent ? b.textContent : b.innerText;
              }
            }
          }
          else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
            xhr.responseXML = toXml(xhr.responseText);
          }

          try {
            data = httpData(xhr, dt, s);
          }
          catch (e) {
            status = 'parsererror';
            xhr.error = errMsg = (e || status);
          }
        }
        catch (e) {
          log('error caught: ', e);
          status = 'error';
          xhr.error = errMsg = (e || status);
        }

        if (xhr.aborted) {
          log('upload aborted');
          status = null;
        }

        if (xhr.status) { // we've set xhr.status
          status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
        }

        // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
        if (status === 'success') {
          if (s.success)
            s.success.call(s.context, data, 'success', xhr);
          deferred.resolve(xhr.responseText, 'success', xhr);
          if (g)
            $.event.trigger("ajaxSuccess", [xhr, s]);
        }
        else if (status) {
          if (errMsg === undefined)
            errMsg = xhr.statusText;
          if (s.error)
            s.error.call(s.context, xhr, status, errMsg);
          deferred.reject(xhr, 'error', errMsg);
          if (g)
            $.event.trigger("ajaxError", [xhr, s, errMsg]);
        }

        if (g)
          $.event.trigger("ajaxComplete", [xhr, s]);

        if (g && ! --$.active) {
          $.event.trigger("ajaxStop");
        }

        if (s.complete)
          s.complete.call(s.context, xhr, status);

        callbackProcessed = true;
        if (s.timeout)
          clearTimeout(timeoutHandle);

        // clean up
        setTimeout(function () {
          if (!s.iframeTarget)
            $io.remove();
          xhr.responseXML = null;
        }, 100);
      }

      var toXml = $.parseXML || function (s, doc) { // use parseXML if available (jQuery 1.5+)
        if (window.ActiveXObject) {
          doc = new ActiveXObject('Microsoft.XMLDOM');
          doc.async = 'false';
          doc.loadXML(s);
        }
        else {
          doc = (new DOMParser()).parseFromString(s, 'text/xml');
        }
        return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
      };
      var parseJSON = $.parseJSON || function (s) {
        /*jslint evil:true */
        return window['eval']('(' + s + ')');
      };

      var httpData = function (xhr, type, s) { // mostly lifted from jq1.4.4

        var ct = xhr.getResponseHeader('content-type') || '',
            xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
            data = xml ? xhr.responseXML : xhr.responseText;

        if (xml && data.documentElement.nodeName === 'parsererror') {
          if ($.error)
            $.error('parsererror');
        }
        if (s && s.dataFilter) {
          data = s.dataFilter(data, type);
        }
        if (typeof data === 'string') {
          if (type === 'json' || !type && ct.indexOf('json') >= 0) {
            data = parseJSON(data);
          } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
            $.globalEval(data);
          }
        }
        return data;
      };

      return deferred;
    }
  };

  /**
   * ajaxForm() provides a mechanism for fully automating form submission.
   *
   * The advantages of using this method instead of ajaxSubmit() are:
   *
   * 1: This method will include coordinates for <input type="image" /> elements (if the element
   *    is used to submit the form).
   * 2. This method will include the submit element's name/value data (for the element that was
   *    used to submit the form).
   * 3. This method binds the submit() method to the form for you.
   *
   * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
   * passes the options argument along after properly binding events for submit elements and
   * the form itself.
   */
  $.fn.ajaxForm = function (options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
      var o = { s: this.selector, c: this.context };
      if (!$.isReady && o.s) {
        log('DOM not ready, queuing ajaxForm');
        $(function () {
          $(o.s, o.c).ajaxForm(options);
        });
        return this;
      }
      // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
      log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
      return this;
    }

    if (options.delegation) {
      $(document)
          .off('submit.form-plugin', this.selector, doAjaxSubmit)
          .off('click.form-plugin', this.selector, captureSubmittingElement)
          .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
          .on('click.form-plugin', this.selector, options, captureSubmittingElement);
      return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
  };

  // private event handlers
  function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
      e.preventDefault();
      $(this).ajaxSubmit(options);
    }
  }

  function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is("[type=submit],[type=image]"))) {
      // is this a child element of the submit el?  (ex: a span within a button)
      var t = $el.closest('[type=submit]');
      if (t.length === 0) {
        return;
      }
      target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
      if (e.offsetX !== undefined) {
        form.clk_x = e.offsetX;
        form.clk_y = e.offsetY;
      } else if (typeof $.fn.offset == 'function') {
        var offset = $el.offset();
        form.clk_x = e.pageX - offset.left;
        form.clk_y = e.pageY - offset.top;
      } else {
        form.clk_x = e.pageX - target.offsetLeft;
        form.clk_y = e.pageY - target.offsetTop;
      }
    }
    // clear form vars
    setTimeout(function () { form.clk = form.clk_x = form.clk_y = null; }, 100);
  }


  // ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
  $.fn.ajaxFormUnbind = function () {
    return this.unbind('submit.form-plugin click.form-plugin');
  };

  /**
   * formToArray() gathers form element data into an array of objects that can
   * be passed to any of the following ajax functions: $.get, $.post, or load.
   * Each object in the array has both a 'name' and 'value' property.  An example of
   * an array for a simple login form might be:
   *
   * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
   *
   * It is this array that is passed to pre-submit callback functions provided to the
   * ajaxSubmit() and ajaxForm() methods.
   */
  $.fn.formToArray = function (semantic, elements) {
    var a = [];
    if (this.length === 0) {
      return a;
    }

    var form = this[0];
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    if (!els) {
      return a;
    }

    var i, j, n, v, el, max, jmax;
    for (i = 0, max = els.length; i < max; i++) {
      el = els[i];
      n = el.name;
      if (!n) {
        continue;
      }

      if (semantic && form.clk && el.type == "image") {
        // handle image inputs on the fly when semantic == true
        if (!el.disabled && form.clk == el) {
          a.push({ name: n, value: $(el).val(), type: el.type });
          a.push({ name: n + '.x', value: form.clk_x }, { name: n + '.y', value: form.clk_y });
        }
        continue;
      }

      v = $.fieldValue(el, true);
      if (v && v.constructor == Array) {
        if (elements)
          elements.push(el);
        for (j = 0, jmax = v.length; j < jmax; j++) {
          a.push({ name: n, value: v[j] });
        }
      }
      else if (feature.fileapi && el.type == 'file' && !el.disabled) {
        if (elements)
          elements.push(el);
        var files = el.files;
        if (files.length) {
          for (j = 0; j < files.length; j++) {
            a.push({ name: n, value: files[j], type: el.type });
          }
        }
        else {
          // #180
          a.push({ name: n, value: '', type: el.type });
        }
      }
      else if (v !== null && typeof v != 'undefined') {
        if (elements)
          elements.push(el);
        a.push({ name: n, value: v, type: el.type, required: el.required });
      }
    }

    if (!semantic && form.clk) {
      // input type=='image' are not found in elements array! handle it here
      var $input = $(form.clk), input = $input[0];
      n = input.name;
      if (n && !input.disabled && input.type == 'image') {
        a.push({ name: n, value: $input.val() });
        a.push({ name: n + '.x', value: form.clk_x }, { name: n + '.y', value: form.clk_y });
      }
    }
    return a;
  };

  /**
   * Serializes form data into a 'submittable' string. This method will return a string
   * in the format: name1=value1&amp;name2=value2
   */
  $.fn.formSerialize = function (semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
  };

  /**
   * Serializes all field elements in the jQuery object into a query string.
   * This method will return a string in the format: name1=value1&amp;name2=value2
   */
  $.fn.fieldSerialize = function (successful) {
    var a = [];
    this.each(function () {
      var n = this.name;
      if (!n) {
        return;
      }
      var v = $.fieldValue(this, successful);
      if (v && v.constructor == Array) {
        for (var i = 0, max = v.length; i < max; i++) {
          a.push({ name: n, value: v[i] });
        }
      }
      else if (v !== null && typeof v != 'undefined') {
        a.push({ name: this.name, value: v });
      }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
  };

  /**
   * Returns the value(s) of the element in the matched set.  For example, consider the following form:
   *
   *  <form><fieldset>
   *      <input name="A" type="text" />
   *      <input name="A" type="text" />
   *      <input name="B" type="checkbox" value="B1" />
   *      <input name="B" type="checkbox" value="B2"/>
   *      <input name="C" type="radio" value="C1" />
   *      <input name="C" type="radio" value="C2" />
   *  </fieldset></form>
   *
   *  var v = $('input[type=text]').fieldValue();
   *  // if no values are entered into the text inputs
   *  v == ['','']
   *  // if values entered into the text inputs are 'foo' and 'bar'
   *  v == ['foo','bar']
   *
   *  var v = $('input[type=checkbox]').fieldValue();
   *  // if neither checkbox is checked
   *  v === undefined
   *  // if both checkboxes are checked
   *  v == ['B1', 'B2']
   *
   *  var v = $('input[type=radio]').fieldValue();
   *  // if neither radio is checked
   *  v === undefined
   *  // if first radio is checked
   *  v == ['C1']
   *
   * The successful argument controls whether or not the field element must be 'successful'
   * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
   * The default value of the successful argument is true.  If this value is false the value(s)
   * for each element is returned.
   *
   * Note: This method *always* returns an array.  If no valid value can be determined the
   *    array will be empty, otherwise it will contain one or more values.
   */
  $.fn.fieldValue = function (successful) {
    for (var val = [], i = 0, max = this.length; i < max; i++) {
      var el = this[i];
      var v = $.fieldValue(el, successful);
      if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
        continue;
      }
      if (v.constructor == Array)
        $.merge(val, v);
      else
        val.push(v);
    }
    return val;
  };

  /**
   * Returns the value of the field element.
   */
  $.fieldValue = function (el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
      successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
      return null;
    }

    if (tag == 'select') {
      var index = el.selectedIndex;
      if (index < 0) {
        return null;
      }
      var a = [], ops = el.options;
      var one = (t == 'select-one');
      var max = (one ? index + 1 : ops.length);
      for (var i = (one ? index : 0) ; i < max; i++) {
        var op = ops[i];
        if (op.selected) {
          var v = op.value;
          if (!v) { // extra pain for IE...
            v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
          }
          if (one) {
            return v;
          }
          a.push(v);
        }
      }
      return a;
    }
    return $(el).val();
  };

  /**
   * Clears the form data.  Takes the following actions on the form's input fields:
   *  - input text fields will have their 'value' property set to the empty string
   *  - select elements will have their 'selectedIndex' property set to -1
   *  - checkbox and radio inputs will have their 'checked' property set to false
   *  - inputs of type submit, button, reset, and hidden will *not* be effected
   *  - button elements will *not* be effected
   */
  $.fn.clearForm = function (includeHidden) {
    return this.each(function () {
      $('input,select,textarea', this).clearFields(includeHidden);
    });
  };

  /**
   * Clears the selected form elements.
   */
  $.fn.clearFields = $.fn.clearInputs = function (includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function () {
      var t = this.type, tag = this.tagName.toLowerCase();
      if (re.test(t) || tag == 'textarea') {
        this.value = '';
      }
      else if (t == 'checkbox' || t == 'radio') {
        this.checked = false;
      }
      else if (tag == 'select') {
        this.selectedIndex = -1;
      }
      else if (t == "file") {
        if (/MSIE/.test(navigator.userAgent)) {
          $(this).replaceWith($(this).clone());
        } else {
          $(this).val('');
        }
      }
      else if (includeHidden) {
        // includeHidden can be the value true, or it can be a selector string
        // indicating a special test; for example:
        //  $('#myForm').clearForm('.special:hidden')
        // the above would clean hidden inputs that have the class of 'special'
        if ((includeHidden === true && /hidden/.test(t)) ||
             (typeof includeHidden == 'string' && $(this).is(includeHidden)))
          this.value = '';
      }
    });
  };

  /**
   * Resets the form data.  Causes all form elements to be reset to their original value.
   */
  $.fn.resetForm = function () {
    return this.each(function () {
      // guard against an input with the name of 'reset'
      // note that IE reports the reset function as an 'object'
      if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
        this.reset();
      }
    });
  };

  /**
   * Enables or disables any matching elements.
   */
  $.fn.enable = function (b) {
    if (b === undefined) {
      b = true;
    }
    return this.each(function () {
      this.disabled = !b;
    });
  };

  /**
   * Checks/unchecks any matching checkboxes or radio buttons and
   * selects/deselects and matching option elements.
   */
  $.fn.selected = function (select) {
    if (select === undefined) {
      select = true;
    }
    return this.each(function () {
      var t = this.type;
      if (t == 'checkbox' || t == 'radio') {
        this.checked = select;
      }
      else if (this.tagName.toLowerCase() == 'option') {
        var $sel = $(this).parent('select');
        if (select && $sel[0] && $sel[0].type == 'select-one') {
          // deselect all other options
          $sel.find('option').selected(false);
        }
        this.selected = select;
      }
    });
  };

  // expose debug var
  $.fn.ajaxSubmit.debug = false;

  // helper fn for console logging
  function log() {
    if (!$.fn.ajaxSubmit.debug)
      return;
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments, '');
    if (window.console && window.console.log) {
      window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
      window.opera.postError(msg);
    }
  }

})(jQuery);;
// Expression de recherche
var __searchWordExpression = new RegExp("(#|&|_)keyword=[^&=]*($|&|=)");
var __searchForProductWordExpression = new RegExp("(#|&|_)Search=[^&=]*($|&|=)");

// Constructeur d'un nouveau BrokerManager
BrokerManagerClass = function () {
  // Instancie un nouveau vecteur de Brokers
  this.Brokers = new Array();
  this.BrokersToUpdateBeforeSubmit = new Array();
  // Exemple de chose à ajouter dans le brokers to update before submit : 
  /*
  {
    BrokerName : "NomDuBroker",
    ID : "12589658463175616"
  }
  */
}

BrokerManagerClass.prototype = {
  /// indique si l'élément est une date.
  isDate: function (date) {
    return ((date instanceof Date && !isNaN(date.valueOf()))
            || (!/^\d+$/.test(date) && !isNaN(new Date(date))));
  },

  // Définit un broker
  SetBroker: function (brokerName, brokerValue) {

    // Valide le nom
    if (brokerName != null) {
      var brokerList = $("[brokeridentifier='" + brokerName + "']");
      this.ChangeBrokerText(brokerList, brokerValue);
    }

    for (i = 0; i < this.Brokers.length; i++) {
      if (this.Brokers[i].BrokerName == brokerName) {
        // Définit la valeur
        this.Brokers[i].BrokerValue = brokerValue;
        return;
      }
    }

    // Définit un nouveau broker
    this.Brokers.push(new Broker(brokerName, brokerValue));
  },

  SetBrokerToUpdate: function (brokerName, brokerId) {
    var brokerToAdd = {
      BrokerName: brokerName,
      ID: brokerId
    }

    this.BrokersToUpdateBeforeSubmit.push(brokerToAdd);
  },

  UpdateBrokers: function () {
    var self = this;
    $.each(this.BrokersToUpdateBeforeSubmit, function (index, item) {
      self.SetBroker(item.BrokerName, $('#' + item.ID).val());
    });
  },
  // Obtient un broker
  GetBroker: function (brokerName) {
    for (i = 0; i < this.Brokers.length; i++) {
      if (this.Brokers[i].BrokerName == brokerName) {
        // Obtient la valeur
        return this.Brokers[i].BrokerValue;
      }
    }
    // Retourne chaine vide
    return "";
  },

  ChangeBrokerText: function (brokerList, brokerValue) {
    try {
      var format,
        formattedValue = "",
        brokerTextChildClass = null;

      for (var i = 0; i < brokerList.length; i++) {
        format = $(brokerList[i]).attr("data-format");
        if (format) {
          // format de date
          if (this.isDate(brokerValue)) {
            formattedValue = new Date(brokerValue).toString(format);
          }
        }

        // On vérifie si on a la propriété indiquant que c'est un enfant que l'on doit modifier
        brokerTextChildClass = $(brokerList[i]).attr("data-brokerTextChildClass");

        if (brokerTextChildClass) {
          // on modifie la classe enfant demandée
          $(brokerList[i]).find('.' + brokerTextChildClass).text(formattedValue == "" ? brokerValue : formattedValue);
        } else {
          if (brokerList[i].tagName === 'INPUT') {
            $(brokerList[i]).val(formattedValue == "" ? brokerValue : formattedValue);
          } else {
            // Met à jour le broker
            $(brokerList[i]).text(formattedValue == "" ? brokerValue : formattedValue);
          }
        }

        formattedValue = "";
      }
    }
    catch (e) {
    }
  },

  // Obtient la date en cours
  GetDateTimeNow: function (format, cultureID, resultDelegate) {
    $.ajax({
      type: "post",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: '/Service/DateTimeService.asmx/GetDateTimeNow',
      data: "{'format': '" + format + "', 'cultureID': '" + cultureID + "'}",
      success: function (result) {
        resultDelegate(result.d);
      },
      error: function (exception) {

      }
    });
  }
}

// Constructeur d'un nouveau broker
Broker = function (brokerName, brokerValue) {
  this.BrokerName = brokerName;
  this.BrokerValue = brokerValue;
}

// Instancie un BrokerManager
var BrokerManager = new BrokerManagerClass();

(function () {
  // Todo(Slepine) : Dès que les Namespace seront supporté, mettre le code ci-dessous dans le Namespace
  function GetWordFromHash() {
    // Obtient la recherche
    var qaMatch = __searchWordExpression.exec(document.location.href);

    // Si on obtient pas de résultats avec la regex de 'keyword' on regarde avec la regex de 'Search'
    if (qaMatch == null) {
      qaMatch = __searchForProductWordExpression.exec(document.location.href);
    }

    // Valide si la recherche match existe
    if (qaMatch != null && qaMatch.length > 0) {
      // Récupère la valeur du QA
      var qaValue = qaMatch[0].split('=')[1];
      // On valide que le dernier charactère n'est pas "&" car il va le chercher dans le cas d'un keyword provenant d'une conversion Urlon
      var lastChar = qaValue.substr(qaValue.length - 1);
      if (lastChar == '&') {
        qaValue = qaValue.substr(0, qaValue.length - 1);
      }
      return decodeURIComponent(qaValue);
    }

    return "";
  };

  $(document).ready(function () {
    // Ajoute le HostName
    BrokerManager.SetBroker("SiteUri", window.location.hostname);

    // Ajoute l'url complet
    BrokerManager.SetBroker("FullUri", window.location.href);

    // Ajoute le titre
    BrokerManager.SetBroker("PageTitle", window.document.title);

    var Brokers = BrokerManager.Brokers;

    for (i = 0; i < Brokers.length; i++) {
      var brokerElement = $("[brokeridentifier='" + Brokers[i].BrokerName + "']");

      if (brokerElement && !brokerElement.text() && Brokers[i].BrokerValue) {
        BrokerManager.ChangeBrokerText(brokerElement, Brokers[i].BrokerValue);
      }
    }

    // Définit le broker de recherche
    BrokerManager.SetBroker("nms_sysbroker_researchwords", GetWordFromHash());
  });

  // Détection du changement d'url
  $(window).bind('hashchange', function () {
    // Obtient la recherche
    var searchWord = GetWordFromHash(),
        previousSearchWord = BrokerManager.GetBroker("nms_sysbroker_researchwords");

    // On effectue le reload seulement sur le chargement de recherche
    if (searchWord != null && searchWord !== previousSearchWord) {
      window.location.reload();
    }
  });

})();;
$(document).ready(function () {
  (function () {
    var _origParse = JSON.parse;
    var dateRegex = /\/Date\([-0-9]{10,}\)/i;

    JSON.parse = function (text) {
      var maxTryNb = 5;
      var nbTry = 0;
      var result = null;

      while (nbTry < maxTryNb && result == null) {
        // Note(mlampron) : À son dernier essai, on tente de stringify text.
        //                  Le script de FacebookComment (all.js) est en cause, c'est pourquoi il est nécessaire de faire ça ici.                    
        if (nbTry == 4) {
          text = JSON.stringify(text);
        }
        result = _tryParse(text);
        nbTry++;
      }

      if (result == null) {
        // Valide si le navigateur est IE8
        if (IsIE8Browser()) {
          // Note(Slepine) : Dans le cas de IE8 WinXP Non Patché, le reviver n'est pas supporté
          //                 KB:976662 - Problème de parser JSON natif sous IE8
          alert('La version du navigateur que vous utilisez doit être mise à jour afin de fonctionner correctement. Il est nécessaire que vous procédiez à une "mise à jour Windows" pour accéder à certaines fonctionnalités de ce site.\r\nThe version of the browser you are currently using requires an update in order to work correctly. You must complete a "Windows Update" in order to properly access certain features on this site.');
        }
      }

      function _tryParse(textToParse) {
        try {
          return _origParse(textToParse, function (key, value) {
            if (typeof value === 'string' && value.length > 8 && value[0] === '/' && dateRegex.test(value)) {
              return eval(value);
            }
            return value;
          });
        }
        catch (ex) {
          return null;
        }
      }

      return result;
    }
  })();
});

// Constructeur du client permettant de manager les formulaires
FormManagerClient = function (nmsSubmitButton, siteGuid, associatedFormGuid, clientRedirectionUrl, associatedItemIdentifierGuid, associatedItemIdentifierType, isUpdate, needApproval, submittingHandler, sendCompleteHandler, errorHandler, cultureID, creditCardPlaceholder, expirationPlaceholder, cvvPlaceholder) {

  var self = this, submitCheckoutConfiguration;

  // Définit les inputsControl enregistrer pour le formulaire
  this.InputControls = new Array();

  // Définit les paramètres du Formulaire
  this.AssociatedFormGuid = associatedFormGuid;
  this.AssociatedItemIdentifierGuid = associatedItemIdentifierGuid;
  this.AssociatedItemIdentifierType = associatedItemIdentifierType;
  this.IsUpdate = isUpdate;
  this.NeedApproval = needApproval;
  this.CultureID = cultureID;

  // Définit les actions
  this.SubmittingHandler = submittingHandler;
  this.SendCompleteHandler = sendCompleteHandler;
  this.ErrorHandler = errorHandler;

  // Définit le bouton de soumission
  this.SubmitButton = nmsSubmitButton;

  // Définit si le formulaire est activé
  this.__enable = true;

  // Définit l'instance du captcha
  this.CaptchaInstance = null;

  // Définit l'entité de SubmitForm
  this.SubmitFormEntity = null;

  this.ValidationConfig = null;

  // Définit les adresses courriel supplémentaires.
  this.EmailTo = [];

  // Définit l'url de redirection
  this.ClientRedirectionUrl = clientRedirectionUrl;

  // Définit l'instance du token
  this.Token = null;

  // Définit l'identifiant du site
  this.SiteGuid = siteGuid;

  // Définit l'ID des données. Si l'ID est 0, on est en mode ajout, sinon, on est en mode modification
  this.FormDataID = 0;

  submitCheckoutConfiguration = $(this.SubmitButton).attr("data-NmsSubmitCheckoutButtonClientConfiguration");
  submitCheckoutConfiguration = typeof (submitCheckoutConfiguration) != 'undefined' ? JSON.parse(submitCheckoutConfiguration) : null;

  this.paymentManager = null;
  if (submitCheckoutConfiguration) {
    // todo : plusieurs provider?
    this.paymentManager = nms.altitude.paymentManager.getPaymentManager(submitCheckoutConfiguration.PaymentProviderType, submitCheckoutConfiguration.PaymentConfigurations[submitCheckoutConfiguration.PaymentProviderType], creditCardPlaceholder, expirationPlaceholder, cvvPlaceholder)
  }

  // Désactive les validation sur la soumission
  $("form").validate({
    onsubmit: false,
    errorPlacement: function (error, element) {
      if (element.is("input[type='file']")) {
        var replacement = element.parent(".ReplacementButton");
        if (replacement.length) {
          replacement.addClass("error");
          error.insertAfter(replacement);
        } else {
          error.insertAfter(element); // <- the default
        }
      } else {
        error.insertAfter(element); // <- the default
      }
    }
  });

  // Obtient les information d'authentification
  this.GetFormAuthentification();

  // Obtient les donnees de formulaire si un hash est present
  if (window.location.hash != '' && typeof SecurityManager != 'undefined' && SecurityManager.User != null && typeof SecurityManager.User.ContactGuid != 'undefined') {
    var hash = window.location.hash;
    hash = hash.substring(hash.indexOf('#') + 1);
    hash = hash.substring(hash.indexOf('=') + 1);
    this.GetFormData(SecurityManager.User.ContactGuid, hash);
  }


  //Prendre en compte le back sur safari sur iOS qui rend le formulaire disabled
  if (/iphone|ipod|ipad.*os 5/gi.test(navigator.userAgent)) {
    window.addEventListener('pagehide', function (e) {
      var $body = $(document.body);
      $body.children().remove();

      //on ajoute le reload qui sera fait si on fait back sur la page
      setTimeout(function () {
        $body.append("<script type='text/javascript'>window.location.reload();<\/script>");
      });
    });
  }

}

// Définit les méthode du FormManager
FormManagerClient.prototype = {
  // Enregistre un contrôle Input
  RegisterInputControl: function (fieldIdentifierGuid, inputControlClient, isCaptcha) {

    // Valide si le contrôle est de type captcha
    if (isCaptcha) {
      // Définit l'instance du captcha
      this.CaptchaInstance = inputControlClient;
    } else {
      // Instancie un mappage
      var formMapping = new FormFieldMapping(fieldIdentifierGuid, inputControlClient);

      // Ajoute le contrôle input dans le vecteur
      this.InputControls.push(formMapping);
    }
  },

  // Initialize les InputControls
  InitializeInputControls: function (tokenData) {
    for (var i = 0; i < this.InputControls.length; i++) {
      // Initialize le champs
      var fieldValid = this.InputControls[i].InputControlClient.Initialize(tokenData);
    }
  },

  // Évènement sur le changement d'état d'un upload
  NmsFileUploadChanged: function (uploadManager) {
    // Valide s'il y a un upload
    if (uploadManager.IsUploading()) {
      // Désactive le formulaire
      this.Disable();
    } else {
      // Réactive le formulaire
      this.Enable();
    }
  },

  SetSubmitFormData: function (data, validationConfig) {
    // Définit les données du formulaire
    this.SubmitFormEntity = eval(data);
    this.ValidationConfig = validationConfig;
  },

  AddEmailTo: function (idGuid) {
    this.EmailTo.push(idGuid);
  },

  GetFormAuthentification: function () {
    // Contient l'instance actuel
    var instance = this;

    AltitudeServices.Form.GetAuthorizationToken({
      siteGuid: instance.SiteGuid
    },
      function (result) {
        instance.Token = result;
        instance.InitializeInputControls(instance.Token);
      },
      function (exception) {
        instance.OnError(exception);
      });
  },

  // Obtient les donnees du webservice selon un contactguid et du hash dans l'url
  GetFormData: function (contactGuid, hash) {
    var self = this;

    $.ajax({
      url: '/Service/FormManagerService.asmx/GetFormDataEntityByContactGuid',
      type: "post",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: JSON.stringify({ contactGuid: contactGuid, formDataID: hash }),
      success: function (result) {
        if (result.d == null) {
          return;
        }
        $.each(self.InputControls, function (controlIndex, control) {
          $.each(result.d.DataFieldValues, function (valueIndex, value) {
            if (value.DataFieldIdentifierGuid == control.FieldIdentifierGuid) {
              switch (value.DataType) {
                // Si c'est un fichier           
                case 5:
                  $.each(value.FormBinaryData, function (index, value) {
                    $(control.InputControlClient.InputControlElement).val(value.IdentifierGuid + ';' + value.FileName);
                  });
                  break;
                default:
                  $(control.InputControlClient.InputControlElement).val(value.Value);
                  break;
              }
            }
          });
        });
        self.IsUpdate = true;
        self.FormDataID = result.d.FormDataID;
      }
    });
  },

  Submit: function () {
    var self = this,
      submitCheckoutConfiguration = $(this.SubmitButton).attr("data-NmsSubmitCheckoutButtonClientConfiguration"),
      submitFail = false;
    submitCheckoutConfiguration = typeof (submitCheckoutConfiguration) != 'undefined' ? JSON.parse(submitCheckoutConfiguration) : null;

    window.BrokerManager.UpdateBrokers();

    // Valide si le formulaire est activé
    if (this.__enable) {
      // Vecteur de données du formulaire
      var lstField = new Array();

      // Détermine si le formulaire est valide
      var invalidCount = 0;
      var isValid = true;

      // Lance la validation du Captcha
      if (this.CaptchaInstance != null && this.CaptchaInstance != "undefined" && (!this.CaptchaInstance.InputControlClient.Valid())) {
        // Indique que le formulaire n'est pas valid
        isValid = false;
        invalidCount++;
      }

      //Enlève les watermark pour que la validation se fasse correctement sur IE et firefox sinon le watermark est considéré comme la valeur
      //NOTE(mablain): Si aucun champ texte présent dans le formulaire, le watermark n'est pas présent
      if (typeof $.watermark != "undefined") {
        $.watermark.hideAll();
      }

      // Parcours les inputControls enregistrer au niveau du formulaire
      for (var i = 0; i < this.InputControls.length; i++) {

        // Valide le champs
        var fieldValid = this.InputControls[i].InputControlClient.Valid();

        // Si invalide
        if (!fieldValid) {
          // Définit que la validation n'a pas fonctionné
          isValid = false;
          invalidCount++;
        }

        // Instancie le wrapper permettant d'envoyé les données au WebService
        var newField = new FormDataField(this.InputControls[i].FieldIdentifierGuid, this.InputControls[i].InputControlClient.GetValue());

        // Ajoute la données dans le vecteur d'informations
        lstField.push(newField);
      }

      //Remet les watermark après avoir fait la validation
      //NOTE(mablain): Si aucun champ texte présent dans le formulaire, le watermark n'est pas présent
      if (typeof $.watermark != "undefined") {
        $.watermark.showAll();
      }

      // Récupère l'instance en cours
      var instance = this;
      if (this.loadingImgDiv == null || this.loadingImgDiv == "undefined") {
        this.loadingImgDiv = $("#" + this.SubmitButton.id + "LoadingImgDiv");
      }

      // Définit le texte du catpcha
      var captchaWord = "";

      // Valide si l'instance du catpcha est présente
      if (this.CaptchaInstance != null) {
        // Obtient la valeur du catpcha
        captchaWord = this.CaptchaInstance.InputControlClient.GetValue();
      }

      // Valide si le formulaire est prêt pour l'envoie
      if (isValid) {
        $("[ItemID='" + this.ValidationConfig.ValidationErrorZoneItemID + "']").hide();
        // Valide si le token est instancié
        if (this.Token != null) {

          // Convertit correctement les dates dans le bon format
          this.SubmitFormEntity = JSON.parse(JSON.stringify(this.SubmitFormEntity));

          // Valide s'il y a une instance du captcha
          if (this.CaptchaInstance != null && this.CaptchaInstance != "undefined") {
            // Obtient le token du Captcha
            this.Token.CaptchaInformation = this.CaptchaInstance.GetToken();
            this.Token.CaptchaInformation.InsertDate = eval(this.Token.CaptchaInformation.InsertDate);
          }

          // S'assure que la date est du bon format
          this.Token.InsertDate = eval(this.Token.InsertDate);

          // Lance la soumission
          var submitFormInDataBaseArgs = {
            token: this.Token,
            associatedFormGuid: this.AssociatedFormGuid,
            associatedItemIdentifierGuid: this.AssociatedItemIdentifierGuid,
            associatedItemIdentifierType: this.AssociatedItemIdentifierType,
            isUpdate: this.IsUpdate,
            needApproval: this.NeedApproval,
            formData: lstField,
            submitEntity: this.SubmitFormEntity,
            captchaWord: captchaWord,
            brokers: BrokerManager.Brokers,
            formDataID: this.FormDataID,
            emailTo: this.EmailTo,
            cultureID: this.CultureID

          };

          if (typeof SecurityManager != 'undefined' && SecurityManager.User != null && typeof SecurityManager.User.ContactGuid != 'undefined') {
            submitFormInDataBaseArgs.contactGuid = SecurityManager.User.ContactGuid;
          } else {
            submitFormInDataBaseArgs.contactGuid = null;
          }

          if (submitCheckoutConfiguration && submitCheckoutConfiguration.ConfirmationZoneHierarchyUrl) {
            var confirmationUrl = window.location.protocol + '//' + window.location.host + submitCheckoutConfiguration.ConfirmationZoneHierarchyUrl;

            var paymentProviderCheckoutArgs = {
              PaymentProvider: submitCheckoutConfiguration.PaymentProviderType
            };

            if (nms.altitude.PaymentInformations) {
              if (nms.altitude.PaymentInformations.validatePaymentInformations()) {
                nms.altitude.PaymentInformations.FillCheckoutArgs(paymentProviderCheckoutArgs);
              } else {
                throw new Error('[InputControlClient.Submit] invalid payment informations')
              }
            }

            SubmitFormInDataBaseAndCheckout(submitFormInDataBaseArgs, submitCheckoutConfiguration, confirmationUrl, this, paymentProviderCheckoutArgs, true);

            // Indique que l'on soumet le formulaire
            instance.OnSubmitting();
            // Désactive les contrôle dans le formulaire
            instance.Disable();
            //Affiche le chargement
            instance.loadingImgDiv.show();

            if (submitFail) {
              return false;
            }
          } else {
            $.ajax({
              type: "post",
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              url: '/Service/FormManagerService.asmx/SubmitFormInDataBase',
              data: JSON.stringify(submitFormInDataBaseArgs),
              success: function (result) {
                instance.loadingImgDiv.hide();
                instance.OnResult(result.d);
              },
              error: function (exception) {
                instance.loadingImgDiv.hide();
                instance.OnError(exception);
              }
            });

            // Indique que l'on soumet le formulaire
            this.OnSubmitting();
            // Désactive les contrôle dans le formulaire
            this.Disable();
            //Affiche le chargement
            this.loadingImgDiv.show();
          }
        }
      } else {
        //Obtenir le input en erreur parmi les input a valider
        var errorInput = this.InputControls.filter(function (e) { return $(e.InputControlClient.InputControlElement).hasClass('error'); })[0];
        if (errorInput) {
          $(errorInput.InputControlClient.InputControlElement).focus();
        }

        $("[ItemID='" + this.ValidationConfig.ValidationErrorZoneItemID + "']").html(this.ValidationConfig.ValidationErrorMessage.replace("{0}", invalidCount)).show();
      }
    }

    function SubmitFormInDataBaseAndCheckout(submitFormInDataBaseArgs, submitCheckoutConfiguration, confirmationUrl, instance, paymentProviderCheckoutArgs, removeFromCartOnSuccess) {
      // On vérifie que le panier n'est pas vide
      if (!nms.altitude.nmsAltitudeCartManager.isInstanceEmpty() && (!submitCheckoutConfiguration.IsShippingRequired || (nms.altitude.ShippingSelector && nms.altitude.ShippingSelector.selectedShipping))) {
        nms.altitude.currencyManager.getCurrentCurrency().done(function (currency) {
          $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: '/Service/FormManagerService.asmx/SubmitFormInDataBaseAndCheckout',
            data: JSON.stringify({
              args: {
                SubmitFormInDataBaseArgs: submitFormInDataBaseArgs,
                ProceedToCheckoutArgs: {
                  OrderGuid: nms.altitude.PaymentInformations ? nms.altitude.PaymentInformations.getOrderGuid() : nms.guidHelper.empty(),
                  ProductQuantities: nms.altitude.nmsAltitudeCartManager.getCartInstance(),
                  IsoCode: (currency ? currency.IsoCode : null),
                  ShippingRuleGuid: nms.altitude.ShippingSelector && nms.altitude.ShippingSelector.selectedShipping ? nms.altitude.ShippingSelector.selectedShipping : nms.guidHelper.empty(),
                  LocationString: nms.altitude.ShippingSelector && nms.altitude.ShippingSelector.lastSearch ? nms.altitude.ShippingSelector.lastSearch : '',
                  CultureID: Altitude3_LongCultureID,
                  CancelUrl: window.location.protocol + '//' + window.location.host + submitCheckoutConfiguration.CancelZoneHierarchyUrl,
                  ConfirmationUrl: confirmationUrl,
                  TransactionDescription: submitCheckoutConfiguration.TransactionDescription,
                  PromoCode: nms.altitude.PromoCodeSelector && nms.altitude.PromoCodeSelector.selectedPromoCode ? nms.altitude.PromoCodeSelector.selectedPromoCode : null,
                  PaymentProviderCheckoutArgs: $.isEmptyObject(paymentProviderCheckoutArgs) ? null : paymentProviderCheckoutArgs
                }
              }
            }),
            success: function (result) {
              instance.loadingImgDiv.hide();

              // Note(sjoyal) : Comportement par défaut du bouton de formulaire en commentaire pour faire actuellement uniquement le processus de retour du checkout. A changer au besoin.
              //instance.OnResult(result.d.SubmitFormInDataBaseResponse);

              if (result.d.ProceedToCheckoutResponse != null) {
                if (removeFromCartOnSuccess) {
                  nms.altitude.nmsAltitudeCartManager.clearCart();
                }
                // Enregistre les cookies et redirige vers l'url de paiement
                $.cookie(result.d.ProceedToCheckoutResponse.PaymentId + '_OrderGuid', result.d.ProceedToCheckoutResponse.OrderGuid, { expires: 1 });

                if (typeof (window.CheckoutSuccess) != "undefined") {
                  window.CheckoutSuccess(result.d.ProceedToCheckoutResponse.OrderGuid).done(function () {
                    window.location.href = result.d.ProceedToCheckoutResponse.PaymentUrl;
                  });
                } else {
                  window.location.href = result.d.ProceedToCheckoutResponse.PaymentUrl;
                }
              }
            },
            error: function (exception) {
              instance.Enable();
              instance.loadingImgDiv.hide();

              // Note(sjoyal) : Comportement par défaut du bouton de formulaire en commentaire pour faire actuellement uniquement le processus de retour du checkout. A changer au besoin.
              //instance.OnError(exception);

              var errorContent = JSON.parse(exception.responseText)
              $(document).trigger(jQuery.Event("onProceedCheckoutError", {
                errorType: errorContent.ExceptionType,
                message: errorContent.Message
              }));
            }
          });
        });
      } else {
        instance.loadingImgDiv.hide();
        submitFail = true;
      }
    }
  },

  // Évènement lorsque le résultat arrive
  OnResult: function (result) {
    // Valide si le formulaire a été envoyé avec Succes
    if (result.Success) {

      // On trigger la success de soumission du formulaire
      $(document).trigger(jQuery.Event("onSubmitSuccess", {
        'result': result
      }));

      // Valide s'il y a un handler pour l'envoie avec succès
      if (this.SendCompleteHandler != null) {
        // Fait appelle à la méthode
        this.SendCompleteHandler();
      }

      // Valide s'il y a du balisage personnalisé
      if (result.CustomHtml != null && result.CustomHtml != "undefined" && result.CustomHtml != "") {
        // Ajoute le balisage HTML personnalisé
        $(document).append(result.CustomHtml);
      }

      // Valide s'il y a une redirection
      if (this.ClientRedirectionUrl != null && this.ClientRedirectionUrl != "undefined" && this.ClientRedirectionUrl != "") {
        // Définit la redirection
        window.location.href = this.ClientRedirectionUrl;
      }
    } else {
      // Valide si le captcha est valide
      if (!result.IsCaptchaValid && this.CaptchaInstance != null) {
        // Indique que la validation a échoué
        this.CaptchaInstance.InputControlClient.ValidationFail(this.CaptchaInstance);
      }

      // Appelle la méthode d'erreur    
      this.OnError();

      // Réactive le formulaire
      this.Enable();
    }
  },

  // Évènement lorsque le formulaire est sousmis
  OnSubmitting: function () {
    // Valide s'il y a un handler pour l'envoie en cours
    if (this.SubmittingHandler != null) {
      // Fait appelle à la méthode
      this.SubmittingHandler();
    }
  },

  // Évènement lorsque le formulaire est en error
  OnError: function (result) {
    // Valide s'il y a un handler pour l'envoie en erreur
    if (this.ErrorHandler != null) {
      // Fait appelle à la méthode
      this.ErrorHandler();
    }
  },

  // Désactive le formulaire
  Disable: function () {
    // Parcours les inputControls enregistrer au niveau du formulaire
    //for (var inputControl in this.InputControls) {
    for (var i = 0; i < this.InputControls.length; i++) {
      // Désactive le contrôle
      this.InputControls[i].InputControlClient.Disable();
    }

    // Désactive le contrôle
    this.SubmitButton.disabled = true;
    this.__enable = false;
  },

  // Active le formulaire
  Enable: function () {
    // Parcours les inputControls enregistrer au niveau du formulaire
    // for (var inputControl in this.InputControls) {
    for (var i = 0; i < this.InputControls.length; i++) {
      // Active le contrôle
      this.InputControls[i].InputControlClient.Enable();
    }

    // Active le contrôle
    this.SubmitButton.disabled = false;
    this.__enable = true;
  }
}

// Représente un objet d'informations de champs dans un formulaire
FormDataField = function (fieldIdentifierGuid, dataFieldValue) {
  this.FieldIdentifierGuid = fieldIdentifierGuid;
  this.DataFieldValue = dataFieldValue;
}

// Représente un objet d'information de mappage entre le SubmitButton et le contrôle client
FormFieldMapping = function (fieldIdentifierGuid, inputControlClient) {
  this.FieldIdentifierGuid = fieldIdentifierGuid;
  this.InputControlClient = inputControlClient;
}

// Constructeur du proxy client pour l'input contrôle
InputControlClient = function (inputControlElement, getValueHandler, disableHandler, enableHandler, validationFailHandler, initializationHandler, validationHandler) {


  // Définit l'instance du contrôle HTML
  this.InputControlElement = inputControlElement;


  $(inputControlElement).data("AssociatedForms", new Array());


  // Définit l'handler permettant d'obtenir la valeur
  this.__getValueHandler = getValueHandler;

  // Définit les évènements d'activation/désactivation du contrôle
  this.__disableHandler = disableHandler;
  this.__enableHandler = enableHandler;
  this.__validationFail = validationFailHandler;
  this.__initializationHandler = initializationHandler;
  this.__validationHandler = validationHandler;
}

InputControlClient.prototype = {

  Initialize: function (tokenData) {
    // Valide si l'évènement d'initialization est définit
    if (this.__initializationHandler != null) {

      // Récupère l'instance de la classe
      var instance = this;

      // Lance l'évènementc juste a
      this.__initializationHandler(tokenData, instance);
    }
  },

  // Obtient la valeur
  GetValue: function () {
    // Fait appel au handler permettant d'obtenir la valeur
    return this.__getValueHandler(this);
  },

  // Désactive le contrôle
  Disable: function () {
    // Valide s'il y a une méthode pour désactiver le contrôle
    if (this.__disableHandler != null && this.__disableHandler != "undefined") {
      // Appel la méthode
      this.__disableHandler(this);
    }
  },

  // Active le contrôle
  Enable: function () {
    // Valide s'il y a une méthode pour activer le contrôle
    if (this.__enableHandler != null && this.__enableHandler != "undefined") {
      // Appel la méthode
      this.__enableHandler(this);
    }
  },

  // Désactive le contrôle
  ValidationFail: function (message) {
    // Valide s'il y a une méthode pour désactiver le contrôle
    if (this.__validationFail != null && this.__validationFail != "undefined") {
      // Appel la méthode
      this.__validationFail(this, message);
    }
  },

  Valid: function () {
    // Valide s'il y a une méthode pour valider le contrôle
    if (this.__validationHandler != null && this.__validationHandler != "undefined") {
      // Appel la méthode
      return this.__validationHandler(this);
    }

    // Indique qu'il n'y aucune validatiobn
    return true;
  }

}

// Constructeur du NmsCaptchaClientInput
NmsCaptchaClientInput = function (inputControlElement, getValueHandler, disableHandler, enableHandler, validationFailHandler, initializationHandler, validationHandler) {

  // Instancie le contrôle Client
  this.InputControlClient = new InputControlClient(inputControlElement, getValueHandler, disableHandler, enableHandler, validationFailHandler, initializationHandler, validationHandler);

  // Définit une référence à la logique du Catpcha
  this.InputControlClient.CatpchaClient = this;

  // Instancie la liste des NmsSubmit Associée
  this.LinkedSubmitButton = new Array();

  // Instancie un token null
  this.Token = null;

  this.SiteGuid = null;
  this.CultureID = null;
  this.FormData = "";
}

NmsCaptchaClientInput.prototype = {

  // Initialization par le NmsSubmit
  Initialization: function (validationMessage) {
    // Remplace le doPostBack par le #
    $(this.InputControlClient.InputControlElement).find('a').attr('href', '#');

    // Définit l'instance du Captcha
    var instance = this;

    // Attache l'évènement de validation
    $(this.InputControlClient.InputControlElement).find('a').click(function (eventHandler) {
      instance.InitializeAuthorizationToken(false);
    })

    // S'assure que le champ est remplit
    $(this.InputControlClient.InputControlElement).find(':text:first').rules("add",
      {
        required: true,
        messages: {
          required: validationMessage
        }
      });
  },

  // Obtient les données du formulaire
  GetToken: function () {
    // Retourne les informations du formulaire
    var token = $(this.InputControlClient.InputControlElement).data("captchaData");
    if (token) {
      return token;
    }

    return this.Token;
  },

  // Enregistre le NmsSubmit sur le captcha
  RegisterNmsSubmit: function (nmsSubmitButtonFormManager) {
    // Ajoute le formulaire
    this.LinkedSubmitButton.push(nmsSubmitButtonFormManager);
  },

  // Intialize le contexte du captcha
  InitializeCaptchaContext: function (siteGuid, cultureID) {
    // Définit les paramètres nécessaire au context
    this.SiteGuid = siteGuid;
    this.CultureID = cultureID;

    // Parcours les SubmitButtons
    for (var i = 0; i < this.LinkedSubmitButton.length; i++) {
      // Ajoute l'identifiant du formulaire
      this.FormData += this.LinkedSubmitButton[i].AssociatedFormGuid + "|";

      if (this.InputControlClient != null && this.InputControlClient.InputControlElement != null) {
        $(this.InputControlClient.InputControlElement).data("AssociatedForms")[$(this.InputControlClient.InputControlElement).data("AssociatedForms").length] = this.LinkedSubmitButton[i].AssociatedFormGuid;
      }
    }



    // Initialize le token
    this.InitializeAuthorizationToken(true);
  },

  // Initialize le token d'authorization
  InitializeAuthorizationToken: function (initializeSubmitButton) {
    var inst = this;
    // Valide si nous avons les information du FormData
    if (this.FormData != null && this.FormData != "undefined" && this.FormData != "") {
      // Variable d'instance pour le delegate
      var instance = this;
      function LoadCaptcha() {
        AltitudeServices.Form.GetCaptchaInfo({
          cultureID: instance.CultureID,
          siteGuid: instance.SiteGuid,
          formIdentification: instance.FormData
        },
          function (data) {
            // Obtient le Token
            instance.Token = data;
            $(instance.InputControlClient.InputControlElement).data("captchaData", instance.Token);
            // Définit l'url de l'image
            $(instance.InputControlClient.InputControlElement).find("img").attr("src", instance.Token.CaptchaUrl);
            //$(instance.InputControlClient.InputControlElement).find("a").unbind("click");

            // Valide si on initialize les enfants
            if (initializeSubmitButton) {
              // Initialize le contrôle
              instance.InputControlClient.Initialize(instance.Token);

              // Parcours les bouton de formulaire
              /*for (var i = 0; i < instance.LinkedSubmitButton.length; i++) {
              // Initialize les contrôles du formulaires
              instance.LinkedSubmitButton[i].InitializeInputControls(instance.Token);
              }*/
            }
          });
      }
      LoadCaptcha();
      $(instance.InputControlClient.InputControlElement).find("a").click(LoadCaptcha);
    } else {
      alert("NmsCaptchaClientInput_InitializeAuthorizationToken : Impossible d'initializer le contexte du Captcha");
    }
  },

  // Méthode de validation
  Validate: function () {
    // S'assure que le champ est valide
    return $(this.InputControlClient.InputControlElement).find(':text:first').valid();
  }
}



// Méthode d'initialization
NmsTextBoxInput_Initialization = function (inputControlClient, isRequired, validationRegEx, validationMessage) {
  // Définit que c'est un champ requis et courriel selon les paramètres
  /*  $(inputControlClient.InputControlElement).rules("add",
  {
  required: isRequired,
  regex: validationRegEx,
  messages: {
  required: validationMessage,
  email: validationMessage,
  regex: validationMessage
  }
  });*/
}

// Méthode de validation
NmsTextBoxInput_ValidateMethod = function (inputControlClient) {
  // Il semble y avoir une erreur avec la validation lorsque le textbox n'est pas requis.
  // Par exemple, si on a la validation "email" seulement, mais que le textbox est vide, il sera vu comme invalide.
  // Possiblement une erreur connue : https://github.com/jzaefferer/jquery-validation/issues/14
  if ((!$(inputControlClient.InputControlElement).hasClass("required")
    && (typeof ($(inputControlClient.InputControlElement).rules()) == "undefined" || !$(inputControlClient.InputControlElement).rules().required))
    && $(inputControlClient.InputControlElement).val() == "") {
    return true;
  }
  return $(inputControlClient.InputControlElement).valid();
}

// Méthode de validation
NmsCheckbox_ValidateMethod = function (inputControlClient) {
  if ($(inputControlClient.InputControlElement).valid) {
    return $(inputControlClient.InputControlElement).valid();
  }

  return true;
}


// Méthode d'initialization
NmsSelect_Initialization = function (inputControlClient, isRequired, validationMessage) {
  /*     // Définit que c'est un champ requis et courriel selon les paramètres
    $(inputControlClient.InputControlElement).rules("add",
    {
    required: isRequired,
    messages: {
    required: validationMessage
    }
    });*/
}

// Méthode de validation
NmsSelect_ValidateMethod = function (inputControlClient) {
  return $(inputControlClient.InputControlElement).valid();
}


NmsUserGroupPicker_Initialization = function (inputControlClient, isRequired) {
  // Définit si le champs est requis
  inputControlClient.IsRequired = isRequired;
}

NmsUserGroupPicker_ValidateMethod = function (inputControlClient, errorMessage) {
  // Valide s'il y a un élément sélectionné
  if (inputControlClient.IsRequired) {
    // Valide s'il y a un élément sélectionné
    var result = $(inputControlClient.InputControlElement).find("input:checked").length > 0;
    if (!result) {
      NmsUserGroupPicker_ValidationFailed(inputControlClient, errorMessage);
    } else {
      // Va chercher le label d'erreur pour le supprimer
      var errorLabelID = $(inputControlClient.InputControlElement)[0].className + "_ErrorLabel";
      $('[errorTag="' + errorLabelID + '"]').remove();
    }
    return result;
  }

  // Retourne que le contrôle est valide
  return true;
}

NmsUserGroupPicker_ValidationFailed = function (inputControlClient, errorMessage) {

  // Obtient le nom du label
  var errorLabelID = $(inputControlClient.InputControlElement)[0].className + "_ErrorLabel";

  // Tente de récupèré le label
  var errorLabel = $('[errorTag="' + errorLabelID + '"]');

  // Création d'un label d'erreur
  if (errorLabel.length == 0) {
    // Création du label d'erreur
    errorLabel = document.createElement("span");
    errorLabel.innerHTML = errorMessage;
    errorLabel.setAttribute("errorTag", errorLabelID);

    // Ajoute l'erreur
    $(inputControlClient.InputControlElement).after(errorLabel);
  }
}

NmsRating_Initialization = function (inputControlClient, isRequired) {
  // Définit si le champs est requis
  inputControlClient.IsRequired = isRequired;
}

NmsRating_ValidateMethod = function (inputControlClient, errorMessage) {
  // Valide s'il y a un élément sélectionné
  if (inputControlClient.IsRequired) {
    // Valide s'il y a un élément sélectionné
    var result = $(inputControlClient.InputControlElement).find("input:checked").length > 0;
    if (!result) {
      NmsRating_ValidationFailed(inputControlClient, errorMessage);
    } else {
      // Va chercher le label d'erreur pour le supprimer
      var errorLabelID = $(inputControlClient.InputControlElement)[0].className + "_ErrorLabel";
      $('[errorTag="' + errorLabelID + '"]').remove();
    }
    return result;
  }

  // Retourne que le contrôle est valide
  return true;
}

NmsRating_ValidationFailed = function (inputControlClient, errorMessage) {

  // Obtient le nom du label
  var errorLabelID = $(inputControlClient.InputControlElement)[0].className + "_ErrorLabel";

  // Tente de récupèré le label
  var errorLabel = $('[errorTag="' + errorLabelID + '"]');

  // Création d'un label d'erreur
  if (errorLabel.length == 0) {
    // Création du label d'erreur
    errorLabel = document.createElement("span");
    errorLabel.innerHTML = errorMessage;
    errorLabel.setAttribute("errorTag", errorLabelID);

    // Ajoute l'erreur
    $("span[class='" + $(inputControlClient.InputControlElement)[0].className + "']:last").after(errorLabel);
  }
}

// Méthode d'initialization
NmsRadio_Initialization = function (inputControlClient, isRequired) {
  // Définit si le champs est requis
  inputControlClient.IsRequired = isRequired;
}

// Méthode de validation du NmsRadio
NmsRadio_ValidateMethod = function (inputControlClient, errorMessage) {
  // Valide si le contrôle a besoin d'être requis
  if (inputControlClient.IsRequired) {
    // Valide s'il y a un élément sélectionné
    var result = $("input[name='" + inputControlClient.InputControlElement.name + "']:checked").length > 0;

    if (!result) {
      NmsRadio_ValidationFailed(inputControlClient, errorMessage);
    } else {
      // Va chercher le label d'erreur pour le supprimer
      var errorLabelID = inputControlClient.InputControlElement.name + "_ErrorLabel";
      $('[errorTag="' + errorLabelID + '"]').remove();
      $("input[name='" + inputControlClient.InputControlElement.name + "']").removeClass("error");
      $("input[name='" + inputControlClient.InputControlElement.name + "']").addClass("valid");
    }

    return result;
  }

  // Retourne que le contrôle est valide
  return true;
}

NmsRadio_ValidationFailed = function (inputControlClient, errorMessage) {

  // Obtient le nom du label
  var errorLabelID = inputControlClient.InputControlElement.name + "_ErrorLabel";

  // Tente de récupèré le label
  var errorLabel = $('[errorTag="' + errorLabelID + '"]');

  // Création d'un label d'erreur
  if (errorLabel.length == 0) {
    // Création du label d'erreur
    errorLabel = document.createElement("span");
    errorLabel.innerHTML = errorMessage;
    errorLabel.setAttribute("errorTag", errorLabelID);
    $(errorLabel).addClass("error");
    // Ajoute l'erreur
    $("input[name='" + inputControlClient.InputControlElement.name + "']:last").after(errorLabel);
  }

  $("input[name='" + inputControlClient.InputControlElement.name + "']").addClass("error");
  $("input[name='" + inputControlClient.InputControlElement.name + "']").removeClass("valid");
}

// Méthode d'initialization
NmsTextAreaInput_Initialization = function (inputControlClient, isRequired, validationMessage) {
  //  $(inputControlClient.InputControlElement).rules("add",
  //  {
  //    required: isRequired,
  //    messages: {
  //      required: validationMessage
  //    }
  //  });
}

// Méthode de validation du NmsTextAreaInput
NmsTextAreaInput_ValidateMethod = function (inputControlClient) {
  // Valide si le contrôle a besoin d'être requis
  if ((!$(inputControlClient.InputControlElement).hasClass("required")
    && (typeof ($(inputControlClient.InputControlElement).rules()) == "undefined" || !$(inputControlClient.InputControlElement).rules().required))
    && $(inputControlClient.InputControlElement).val() == "") {
    return true;
  }

  return $(inputControlClient.InputControlElement).valid();
}

function base64_encode(input) {
  var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var output = "";
  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  var i = 0;

  input = utf8_encode(input);

  while (i < input.length) {

    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);

    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;

    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }

    output = output +
      _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
      _keyStr.charAt(enc3) + _keyStr.charAt(enc4);

  }

  return output;
}

function base64_decode(data) {
  // Decodes string using MIME base64 algorithm  
  // 
  // version: 1109.2015
  // discuss at: http://phpjs.org/functions/base64_decode
  // +   original by: Tyler Akins (http://rumkin.com)
  // +   improved by: Thunder.m
  // +      input by: Aman Gupta
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   bugfixed by: Onno Marsman
  // +   bugfixed by: Pellentesque Malesuada
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +      input by: Brett Zamir (http://brett-zamir.me)
  // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // -    depends on: utf8_decode
  // *     example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
  // *     returns 1: 'Kevin van Zonneveld'
  // mozilla has this native
  // - but breaks in 2.0.0.12!
  //if (typeof this.window['btoa'] == 'function') {
  //    return btoa(data);
  //}
  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
    ac = 0,
    dec = "",
    tmp_arr = [];

  if (!data) {
    return data;
  }

  data += '';

  do { // unpack four hexets into three octets using index points in b64
    h1 = b64.indexOf(data.charAt(i++));
    h2 = b64.indexOf(data.charAt(i++));
    h3 = b64.indexOf(data.charAt(i++));
    h4 = b64.indexOf(data.charAt(i++));

    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

    o1 = bits >> 16 & 0xff;
    o2 = bits >> 8 & 0xff;
    o3 = bits & 0xff;

    if (h3 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1);
    } else if (h4 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1, o2);
    } else {
      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
    }
  } while (i < data.length);

  dec = tmp_arr.join('');
  dec = utf8_decode(dec);

  return dec;
}

function utf8_encode(string) {
  string = string.replace(/\r\n/g, "\n");
  var utftext = "";

  for (var n = 0; n < string.length; n++) {

    var c = string.charCodeAt(n);

    if (c < 128) {
      utftext += String.fromCharCode(c);
    } else if ((c > 127) && (c < 2048)) {
      utftext += String.fromCharCode((c >> 6) | 192);
      utftext += String.fromCharCode((c & 63) | 128);
    } else {
      utftext += String.fromCharCode((c >> 12) | 224);
      utftext += String.fromCharCode(((c >> 6) & 63) | 128);
      utftext += String.fromCharCode((c & 63) | 128);
    }

  }

  return utftext;
}

// private method for UTF-8 decoding 
function utf8_decode(utftext) {
  var string = "";
  var i = 0;
  var c = 0, c1 = 0, c2 = 0;

  while (i < utftext.length) {

    c = utftext.charCodeAt(i);

    if (c < 128) {
      string += String.fromCharCode(c);
      i++;
    } else if ((c > 191) && (c < 224)) {
      c1 = utftext.charCodeAt(i + 1);
      string += String.fromCharCode(((c & 31) << 6) | (c1 & 63));
      i += 2;
    } else {
      c1 = utftext.charCodeAt(i + 1);
      c2 = utftext.charCodeAt(i + 2);
      string += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63));
      i += 3;
    }

  }
  return string;
}

/// Fonction permettant de détecter si nous somme en IE8
function IsIE8Browser() {
  var rv = -1;
  var ua = navigator.userAgent;
  var re = new RegExp("Trident\/([0-9]{1,}[\.0-9]{0,})");
  if (re.exec(ua) != null) {
    rv = parseFloat(RegExp.$1);
  }
  return (rv == 4);
}



$(function () {
  if ($.validator && $.validator.methods) {
    var original = $.validator.methods.required;
    $.validator.methods.required =
      function (value, element, param) {
        // check if dependency is met
        if (!this.depend(param, element))
          return "dependency-mismatch";
        if (element.nodeName.toLowerCase() == 'select' && $(element).val() == 'NotSet') {
          return false;
        }
        return original.apply(this, arguments);
      }
  }
});
;
// Gestion des devises du site
(function () {
  namespace('nms.altitude.currencyManager', function (undefined) {
    var self = this,
        getSupportedCurrenciesDeferred = null,
        currencyCookie = function (value) {
          if (value == undefined) {
            return $.cookie("nmsCurrency");
          } else {
            $.cookie('nmsCurrency', value, { expires: 365 });
          }
        };

    self.supportedCurrencies = null; // Liste des devises supportées dans la culture en cours
    self.referenceCurrency = null; // Devise de référence du site

    // Obtient les devises disponibles
    self.getSupportedCurrencies = function () {
      if (getSupportedCurrenciesDeferred == null) {
        getSupportedCurrenciesDeferred = $.Deferred();

        if (self.supportedCurrencies) {
          getSupportedCurrenciesDeferred.resolve(self.supportedCurrencies);
        } else if(AltitudeServices.Inventory) {
          AltitudeServices.Inventory.GetSupportedCurrencies({
            args: {
              CultureId: Altitude3_LongCultureID
            }
          },
          function (result) {
            self.supportedCurrencies = result.Currencies;
            self.referenceCurrency = result.ReferenceCurrency;
            getSupportedCurrenciesDeferred.resolve(self.supportedCurrencies);
          });
        }
      }

      return getSupportedCurrenciesDeferred;
    };

    // Obtient la devise courante
    self.getCurrentCurrency = function () {
      var deferred = $.Deferred(), result = null;

      // obtient les devises disponibles
      self.getSupportedCurrencies().done(function (supportedCurrencies) {
        // Si on a une devise en cookie (sélectionnée), alors on s'ssure qu'elle est disponible et on l'utilise
        var savedCurrency = currencyCookie();
        if (savedCurrency) {
          for (var i = 0; i < supportedCurrencies.length; i++) {
            if (supportedCurrencies[i].IsoCode === savedCurrency) {
              result = supportedCurrencies[i];
              break;
            }
          }
        }

        // Si la devise du cookie est abasente ou invalide, on prend la devise de référence si possible sinon la première devise valide de la liste,
        // Si la devise de référence est dans la liste elle sera au début donc c'est elle qui est prit par défaut.
        if (!result && supportedCurrencies.length > 0) {
          result = supportedCurrencies[0];
        }

        // Si aucune devise n'est valide pour la culture actuelle on retourne la devise de référence du site
        if (!result && self.referenceCurrency != null) {
          result = self.referenceCurrency;
        }

        deferred.resolve(result);
      });

      return deferred
    };

    self.setCurrency = function (currencyIsoCode, onSuccess, onError) {
      self.getSupportedCurrencies().done(function (supportedCurrencies) {
        var currency = null;
        for (var i = 0; i < supportedCurrencies.length; i++) {
          if (supportedCurrencies[i].IsoCode === currencyIsoCode) {
            currency = supportedCurrencies[i];
            break;
          }
        }

        if (currency) {
          currencyCookie(currencyIsoCode);
          if (onSuccess) {
            onSuccess(currency);
          }

          // On trigger le changement de devise
          $(document).trigger(jQuery.Event("onCurrencyChange", {
            'currency': {
              iso: currency.IsoCode,
              id: currency.CurrencyId
            }
          }));

          if (nms.altitude.ProductBrokerHelper) {
            nms.altitude.ProductBrokerHelper.onCurrencyChange(currency.IsoCode, currency.CurrencyId, false);
          }
        } else {
          onError("currencyNotSupported");
        }
      });
    };
  });
})();;
/* SpryMenuBar.js - Revision: Spry Preview Release 1.4 */

// Copyright (c) 2006. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

/*******************************************************************************

SpryMenuBar.js
This file handles the JavaScript for Spry Menu Bar.  You should have no need
to edit this file.  Some highlights of the MenuBar object is that timers are
used to keep submenus from showing up until the user has hovered over the parent
menu item for some time, as well as a timer for when they leave a submenu to keep
showing that submenu until the timer fires.

*******************************************************************************/

Menu = function (element, opts) {
  this.init(element, opts);
};

Menu.prototype.init = function (element, opts) {
  var self = this;
  this.element = this.getElement(element);
  this.currMenu = null;

  var isie = (typeof document.all != 'undefined' && typeof window.opera == 'undefined' && navigator.vendor != 'KDE');
  if (typeof document.getElementById == 'undefined' || (navigator.vendor == 'Apple Computer, Inc.' && typeof window.XMLHttpRequest == 'undefined') || (isie && typeof document.uniqueID == 'undefined')) {
    return;
  }

  if (opts) {
    for (var k in opts) {
      var rollover = new Image;
      rollover.src = opts[k];
    }
  }

  if (this.element) {
    this.currMenu = this.element;
    var items = this.element.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
      this.initialize(items[i], element, isie);
    }
  }
};

Menu.prototype.getElement = function (ele) {
  if (ele && typeof ele == "string")
    return document.getElementById(ele);
  return ele;
};

Menu.prototype.hasClassName = function (ele, className) {
  if (!ele || !className || !ele.className || ele.className.search(new RegExp("\\b" + className + "\\b")) == -1) {
    return false;
  }
  return true;
};

Menu.prototype.addClassName = function (ele, className) {
  if (!ele || !className || this.hasClassName(ele, className))
    return;
  ele.className += (ele.className ? " " : "") + className;
};

Menu.prototype.removeClassName = function (ele, className) {
  if (!ele || !className || !this.hasClassName(ele, className))
    return;
  ele.className = ele.className.replace(new RegExp("\\s*\\b" + className + "\\b", "g"), "");
};

Menu.prototype.addEventListener = function (element, eventType, handler, capture) {
  try {
    if (element.addEventListener) {
      element.addEventListener(eventType, handler, capture);
    }
    else if (element.attachEvent) {
      element.attachEvent('on' + eventType, handler);
    }
  }
  catch (e) { }
};

Menu.prototype.createIframeLayer = function (menu) {/*
    var layer = document.createElement('iframe');
    layer.tabIndex = '-1';
    layer.src = 'javascript:false;';
    menu.parentNode.appendChild(layer);

    layer.style.left = menu.offsetLeft + 'px';
    layer.style.top = menu.offsetTop + 'px';
    layer.style.width = menu.offsetWidth + 'px';
    layer.style.height = menu.offsetHeight + 'px';*/
};

Menu.prototype.removeIframeLayer = function (menu) {
  /*  var layers = menu.parentNode.getElementsByTagName('iframe');
    while (layers.length > 0) {
      layers[0].parentNode.removeChild(layers[0]);
    } */
};

Menu.prototype.clearMenus = function (root) {
  var menus = root.getElementsByTagName('div');
  for (var i = 0; i < menus.length; i++) {
    this.hideSubmenu(menus[i]);
  }
  this.removeClassName(this.element, "MenuBarActive");
};

Menu.prototype.bubbledTextEvent = function () {
  return (navigator.vendor == 'Apple Computer, Inc.' && (event.target == event.relatedTarget.parentNode || (event.eventPhase == 3 && event.target.parentNode == event.relatedTarget)));
};

Menu.prototype.showSubmenu = function (menu) {

  if (this.currMenu) {
    this.clearMenus(this.currMenu);
    this.currMenu = null;
  }

  if (menu) {
    this.addClassName(menu, "MenuBarSubmenuVisible");
    if (typeof document.uniqueID != "undefined") {
      this.createIframeLayer(menu);
    }
  }
  this.addClassName(this.element, "MenuBarActive");
};

Menu.prototype.hideSubmenu = function (menu) {
  if (menu) {
    this.removeClassName(menu, "MenuBarSubmenuVisible");
    if (typeof document.all != 'undefined' && typeof window.opera == 'undefined' && navigator.vendor != 'KDE') {
      menu.style.top = '';
      menu.style.left = '';
    }
    this.removeIframeLayer(menu);
  }
};

Menu.prototype.initialize = function (listitem, element, isie) {

  var opentime, closetime;
  var link = listitem.getElementsByTagName('a')[0];
  var submenus = listitem.getElementsByTagName('div');
  var menu = (submenus.length > 0 ? submenus[0] : null);

  var hasSubMenu = false;
  if (menu) {
    this.addClassName(link, "MenuBarItemSubmenu");
    hasSubMenu = true;
  }

  if (!isie) {
    // define a simple function that comes standard in IE to determine
    // if a node is within another node
    listitem.contains = function (testNode) {
      // this refers to the list item
      if (testNode == null) {
        return false;
      }
      if (testNode == this) {
        return true;
      }
      else {
        return this.contains(testNode.parentNode);
      }
    };
  }

  // need to save this for scope further down
  var self = this;
  if ((listitem.getAttribute("expansionmode") == "HoverExpansion") || (listitem.getAttribute("expansionmode") == "ClickDisabled")) {
    this.addEventListener(listitem, 'mouseover', function (e) {
      if (self.bubbledTextEvent()) {
        // ignore bubbled text events
        return;
      }
      clearTimeout(closetime);
      if (self.currMenu == listitem) {
        self.currMenu = null;
      }
      // show menu highlighting

      self.addClassName(link, hasSubMenu ? "MenuBarItemSubmenuHover" : "MenuBarItemHover");
      if (menu && !self.hasClassName(menu, "MenuBarSubmenuVisible")) {
        opentime = window.setTimeout(function () { self.showSubmenu(menu); }, 250);
      }
    }, false);
  }
  else if (listitem.getAttribute("expansionmode") == "ClickExpansion") {

    $($(listitem).children("a")[0]).click(function () {
      this.href = "javascript:return false;";
      var isSelected = self.hasClassName(this, "selected");
      var isSiblingSelected = self.hasClassName($(this).siblings("div")[0], "selected");



      $(this).parent().siblings().removeClass("nmsMenuExpanded").find(".nmsMenuExpanded").removeClass("nmsMenuExpanded");
      $(this).siblings().toggleClass("nmsMenuExpanded")

      if (isSelected) {

        $(this).removeClass("selected");

        var parent = $(this).parent()[0];

        if (self.hasClassName(parent, "MenuBar")) {
          parent == null;
        }
        while (parent != null) {
          $(parent).removeClass("selected");
          parent = $(parent).parent()[0];
          if (parent.tagName.toLowerCase() != "div") {
            parent = null;
          }

        }


        $(this).siblings("div").removeClass("selected");
        $(this).siblings("div").find(".selected").removeClass("selected");

      }
      else {

        $(self.element).find(".selected").removeClass("selected");

        $(this).addClass("selected");
        var parent = $(this).parent()[0];
        if (self.hasClassName(parent, "MenuBar")) {
          parent == null;
        }
        while (parent != null) {
          $(parent).addClass("selected");
          $(parent).siblings("a").addClass("selected");
          parent = $(parent).parent()[0];
          if (self.hasClassName(parent, "MenuBar")) {
            parent = null;
          }

        }

      }
      return false;
    });


  }

  if (listitem.getAttribute("expansionmode") != "ClickExpansion") {
    this.addEventListener(listitem, 'mouseout', function (e) {
      if (self.bubbledTextEvent()) {
        // ignore bubbled text events
        return;
      }

      var related = (typeof e.relatedTarget != 'undefined' ? e.relatedTarget : e.toElement);
      if (!listitem.contains(related)) {
        clearTimeout(opentime);
        self.currMenu = listitem;

        // remove menu highlighting
        self.removeClassName(link, hasSubMenu ? "MenuBarItemSubmenuHover" : "MenuBarItemHover");
        if (menu) {
          closetime = window.setTimeout(function () { self.hideSubmenu(menu); }, 600);
        }
      }
    }, false);
  }
};;
function RegisterClick(item) {
    var guid = $(item).data("IdentifierGuid");
    var type = $(item).data("GuidType");

    if (typeof (guid) != "undefined" && typeof (type) != "undefined" && guid != "00000000-0000-0000-0000-000000000000" && type != null && guid != null) {
      $.ajax({
          type: "post",
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          url: '/Service/FormManagerService.asmx/RegisterClick',
          data: "{'identifierGuid': '" + guid + "', 'guidType': '" + type + "'}"
      });
    }
};
/**
* Version: 1.0 Alpha-1 
* Build Date: 13-Nov-2007
* Copyright (c) 2006-2007, Coolite Inc. (http://www.coolite.com/). All rights reserved.
* License: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
* Website: http://www.datejs.com/ or http://www.coolite.com/datejs/
*/
Date.CultureInfo = { name: "fr-CA", englishName: "French (Canada)", nativeName: "français (Canada)", dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], abbreviatedDayNames: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], shortestDayNames: ["di", "lu", "ma", "me", "je", "ve", "sa"], firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"], monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"], abbreviatedMonthNames: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], amDesignator: "", pmDesignator: "", firstDayOfWeek: 0, twoDigitYearMax: 2029, dateElementOrder: "ymd", formatPatterns: { shortDate: "yyyy-MM-dd", longDate: "d MMMM yyyy", shortTime: "HH:mm", longTime: "HH:mm:ss", fullDateTime: "d MMMM yyyy HH:mm:ss", sortableDateTime: "yyyy-MM-ddTHH:mm:ss", universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ", rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT", monthDay: "d MMMM", yearMonth: "MMMM, yyyy" }, regexPatterns: { jan: /^janv(.(ier)?)?/i, feb: /^févr(.(ier)?)?/i, mar: /^mars/i, apr: /^avr(.(il)?)?/i, may: /^mai/i, jun: /^juin/i, jul: /^juil(.(let)?)?/i, aug: /^août/i, sep: /^sept(.(embre)?)?/i, oct: /^oct(.(obre)?)?/i, nov: /^nov(.(embre)?)?/i, dec: /^déc(.(embre)?)?/i, sun: /^di(m(.(anche)?)?)?/i, mon: /^lu(n(.(di)?)?)?/i, tue: /^ma(r(.(di)?)?)?/i, wed: /^me(r(.(credi)?)?)?/i, thu: /^je(u(.(di)?)?)?/i, fri: /^ve(n(.(dredi)?)?)?/i, sat: /^sa(m(.(edi)?)?)?/i, future: /^next/i, past: /^last|past|prev(ious)?/i, add: /^(\+|after|from)/i, subtract: /^(\-|before|ago)/i, yesterday: /^yesterday/i, today: /^t(oday)?/i, tomorrow: /^tomorrow/i, now: /^n(ow)?/i, millisecond: /^ms|milli(second)?s?/i, second: /^sec(ond)?s?/i, minute: /^min(ute)?s?/i, hour: /^h(ou)?rs?/i, week: /^w(ee)?k/i, month: /^m(o(nth)?s?)?/i, day: /^d(ays?)?/i, year: /^y((ea)?rs?)?/i, shortMeridian: /^(a|p)/i, longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i, timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i, ordinalSuffix: /^\s*(st|nd|rd|th)/i, timeContext: /^\s*(\:|a|p)/i }, abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" }, abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800"} };

$(document).ready(function () {
  if (typeof (Altitude3_ShortCultureID) != "undefined" && Altitude3_ShortCultureID == 'en') {
    Date.CultureInfo = { name: "en-CA", englishName: "English (Canada)", nativeName: "English (Canada)", dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"], monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], amDesignator: "AM", pmDesignator: "PM", firstDayOfWeek: 0, twoDigitYearMax: 2029, dateElementOrder: "dmy", formatPatterns: { shortDate: "dd/MM/yyyy", longDate: "MMMM d, yyyy", shortTime: "h:mm tt", longTime: "h:mm:ss tt", fullDateTime: "MMMM d, yyyy h:mm:ss tt", sortableDateTime: "yyyy-MM-ddTHH:mm:ss", universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ", rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT", monthDay: "MMMM dd", yearMonth: "MMMM, yyyy" }, regexPatterns: { jan: /^jan(uary)?/i, feb: /^feb(ruary)?/i, mar: /^mar(ch)?/i, apr: /^apr(il)?/i, may: /^may/i, jun: /^jun(e)?/i, jul: /^jul(y)?/i, aug: /^aug(ust)?/i, sep: /^sep(t(ember)?)?/i, oct: /^oct(ober)?/i, nov: /^nov(ember)?/i, dec: /^dec(ember)?/i, sun: /^su(n(day)?)?/i, mon: /^mo(n(day)?)?/i, tue: /^tu(e(s(day)?)?)?/i, wed: /^we(d(nesday)?)?/i, thu: /^th(u(r(s(day)?)?)?)?/i, fri: /^fr(i(day)?)?/i, sat: /^sa(t(urday)?)?/i, future: /^next/i, past: /^last|past|prev(ious)?/i, add: /^(\+|after|from)/i, subtract: /^(\-|before|ago)/i, yesterday: /^yesterday/i, today: /^t(oday)?/i, tomorrow: /^tomorrow/i, now: /^n(ow)?/i, millisecond: /^ms|milli(second)?s?/i, second: /^sec(ond)?s?/i, minute: /^min(ute)?s?/i, hour: /^h(ou)?rs?/i, week: /^w(ee)?k/i, month: /^m(o(nth)?s?)?/i, day: /^d(ays?)?/i, year: /^y((ea)?rs?)?/i, shortMeridian: /^(a|p)/i, longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i, timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i, ordinalSuffix: /^\s*(st|nd|rd|th)/i, timeContext: /^\s*(\:|a|p)/i }, abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" }, abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800"} };
  }
});

Date.getMonthNumberFromName = function (name) {
  var n = Date.CultureInfo.monthNames, m = Date.CultureInfo.abbreviatedMonthNames, s = name.toLowerCase(); for (var i = 0; i < n.length; i++) { if (n[i].toLowerCase() == s || m[i].toLowerCase() == s) { return i; } }
  return -1;
}; Date.getDayNumberFromName = function (name) {
  var n = Date.CultureInfo.dayNames, m = Date.CultureInfo.abbreviatedDayNames, o = Date.CultureInfo.shortestDayNames, s = name.toLowerCase(); for (var i = 0; i < n.length; i++) { if (n[i].toLowerCase() == s || m[i].toLowerCase() == s) { return i; } }
  return -1;
}; Date.isLeapYear = function (year) { return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)); }; Date.getDaysInMonth = function (year, month) { return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]; }; Date.getTimezoneOffset = function (s, dst) { return (dst || false) ? Date.CultureInfo.abbreviatedTimeZoneDST[s.toUpperCase()] : Date.CultureInfo.abbreviatedTimeZoneStandard[s.toUpperCase()]; }; Date.getTimezoneAbbreviation = function (offset, dst) {
  var n = (dst || false) ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard, p; for (p in n) { if (n[p] === offset) { return p; } }
  return null;
}; Date.prototype.clone = function () { return new Date(this.getTime()); }; Date.prototype.compareTo = function (date) {
  if (isNaN(this)) { throw new Error(this); }
  if (date instanceof Date && !isNaN(date)) { return (this > date) ? 1 : (this < date) ? -1 : 0; } else { throw new TypeError(date); }
}; Date.prototype.equals = function (date) { return (this.compareTo(date) === 0); }; Date.prototype.between = function (start, end) { var t = this.getTime(); return t >= start.getTime() && t <= end.getTime(); }; Date.prototype.addMilliseconds = function (value) { this.setMilliseconds(this.getMilliseconds() + value); return this; }; Date.prototype.addSeconds = function (value) { return this.addMilliseconds(value * 1000); }; Date.prototype.addMinutes = function (value) { return this.addMilliseconds(value * 60000); }; Date.prototype.addHours = function (value) { return this.addMilliseconds(value * 3600000); }; Date.prototype.addDays = function (value) { return this.addMilliseconds(value * 86400000); }; Date.prototype.addWeeks = function (value) { return this.addMilliseconds(value * 604800000); }; Date.prototype.addMonths = function (value) { var n = this.getDate(); this.setDate(1); this.setMonth(this.getMonth() + value); this.setDate(Math.min(n, this.getDaysInMonth())); return this; }; Date.prototype.addYears = function (value) { return this.addMonths(value * 12); }; Date.prototype.add = function (config) {
  if (typeof config == "number") { this._orient = config; return this; }
  var x = config; if (x.millisecond || x.milliseconds) { this.addMilliseconds(x.millisecond || x.milliseconds); }
  if (x.second || x.seconds) { this.addSeconds(x.second || x.seconds); }
  if (x.minute || x.minutes) { this.addMinutes(x.minute || x.minutes); }
  if (x.hour || x.hours) { this.addHours(x.hour || x.hours); }
  if (x.month || x.months) { this.addMonths(x.month || x.months); }
  if (x.year || x.years) { this.addYears(x.year || x.years); }
  if (x.day || x.days) { this.addDays(x.day || x.days); }
  return this;
}; Date._validate = function (value, min, max, name) {
  if (typeof value != "number") { throw new TypeError(value + " is not a Number."); } else if (value < min || value > max) { throw new RangeError(value + " is not a valid value for " + name + "."); }
  return true;
}; Date.validateMillisecond = function (n) { return Date._validate(n, 0, 999, "milliseconds"); }; Date.validateSecond = function (n) { return Date._validate(n, 0, 59, "seconds"); }; Date.validateMinute = function (n) { return Date._validate(n, 0, 59, "minutes"); }; Date.validateHour = function (n) { return Date._validate(n, 0, 23, "hours"); }; Date.validateDay = function (n, year, month) { return Date._validate(n, 1, Date.getDaysInMonth(year, month), "days"); }; Date.validateMonth = function (n) { return Date._validate(n, 0, 11, "months"); }; Date.validateYear = function (n) { return Date._validate(n, 1, 9999, "seconds"); }; Date.prototype.set = function (config) {
  var x = config; if (!x.millisecond && x.millisecond !== 0) { x.millisecond = -1; }
  if (!x.second && x.second !== 0) { x.second = -1; }
  if (!x.minute && x.minute !== 0) { x.minute = -1; }
  if (!x.hour && x.hour !== 0) { x.hour = -1; }
  if (!x.day && x.day !== 0) { x.day = -1; }
  if (!x.month && x.month !== 0) { x.month = -1; }
  if (!x.year && x.year !== 0) { x.year = -1; }
  if (x.millisecond != -1 && Date.validateMillisecond(x.millisecond)) { this.addMilliseconds(x.millisecond - this.getMilliseconds()); }
  if (x.second != -1 && Date.validateSecond(x.second)) { this.addSeconds(x.second - this.getSeconds()); }
  if (x.minute != -1 && Date.validateMinute(x.minute)) { this.addMinutes(x.minute - this.getMinutes()); }
  if (x.hour != -1 && Date.validateHour(x.hour)) { this.addHours(x.hour - this.getHours()); }
  if (x.month !== -1 && Date.validateMonth(x.month)) { this.addMonths(x.month - this.getMonth()); }
  if (x.year != -1 && Date.validateYear(x.year)) { this.addYears(x.year - this.getFullYear()); }
  if (x.day != -1 && Date.validateDay(x.day, this.getFullYear(), this.getMonth())) { this.addDays(x.day - this.getDate()); }
  if (x.timezone) { this.setTimezone(x.timezone); }
  if (x.timezoneOffset) { this.setTimezoneOffset(x.timezoneOffset); }
  return this;
}; Date.prototype.clearTime = function () { this.setHours(0); this.setMinutes(0); this.setSeconds(0); this.setMilliseconds(0); return this; }; Date.prototype.isLeapYear = function () { var y = this.getFullYear(); return (((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0)); }; Date.prototype.isWeekday = function () { return !(this.is().sat() || this.is().sun()); }; Date.prototype.getDaysInMonth = function () { return Date.getDaysInMonth(this.getFullYear(), this.getMonth()); }; Date.prototype.moveToFirstDayOfMonth = function () { return this.set({ day: 1 }); }; Date.prototype.moveToLastDayOfMonth = function () { return this.set({ day: this.getDaysInMonth() }); }; Date.prototype.moveToDayOfWeek = function (day, orient) { var diff = (day - this.getDay() + 7 * (orient || +1)) % 7; return this.addDays((diff === 0) ? diff += 7 * (orient || +1) : diff); }; Date.prototype.moveToMonth = function (month, orient) { var diff = (month - this.getMonth() + 12 * (orient || +1)) % 12; return this.addMonths((diff === 0) ? diff += 12 * (orient || +1) : diff); }; Date.prototype.getDayOfYear = function () { return Math.floor((this - new Date(this.getFullYear(), 0, 1)) / 86400000); }; Date.prototype.getWeekOfYear = function (firstDayOfWeek) {
  var y = this.getFullYear(), m = this.getMonth(), d = this.getDate(); var dow = firstDayOfWeek || Date.CultureInfo.firstDayOfWeek; var offset = 7 + 1 - new Date(y, 0, 1).getDay(); if (offset == 8) { offset = 1; }
  var daynum = ((Date.UTC(y, m, d, 0, 0, 0) - Date.UTC(y, 0, 1, 0, 0, 0)) / 86400000) + 1; var w = Math.floor((daynum - offset + 7) / 7); if (w === dow) { y--; var prevOffset = 7 + 1 - new Date(y, 0, 1).getDay(); if (prevOffset == 2 || prevOffset == 8) { w = 53; } else { w = 52; } }
  return w;
}; Date.prototype.isDST = function () { console.log('isDST'); return this.toString().match(/(E|C|M|P)(S|D)T/)[2] == "D"; }; Date.prototype.getTimezone = function () { return Date.getTimezoneAbbreviation(this.getUTCOffset, this.isDST()); }; Date.prototype.setTimezoneOffset = function (s) { var here = this.getTimezoneOffset(), there = Number(s) * -6 / 10; this.addMinutes(there - here); return this; }; Date.prototype.setTimezone = function (s) { return this.setTimezoneOffset(Date.getTimezoneOffset(s)); }; Date.prototype.getUTCOffset = function () { var n = this.getTimezoneOffset() * -10 / 6, r; if (n < 0) { r = (n - 10000).toString(); return r[0] + r.substr(2); } else { r = (n + 10000).toString(); return "+" + r.substr(1); } }; Date.prototype.getDayName = function (abbrev) { return abbrev ? Date.CultureInfo.abbreviatedDayNames[this.getDay()] : Date.CultureInfo.dayNames[this.getDay()]; }; Date.prototype.getMonthName = function (abbrev) { return abbrev ? Date.CultureInfo.abbreviatedMonthNames[this.getMonth()] : Date.CultureInfo.monthNames[this.getMonth()]; }; Date.prototype._toString = Date.prototype.toString;
Date.prototype.toString = function (format) {
  var self = this;
  var p = function p(s) {
    return (s.toString().length == 1) ? "0" + s : s;
  };
  return format ? format.replace(/\\h|\\H|\\m|\\s|\\y|\\d|\\M|\\t|\\z|\\|dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?|\\/g, function (format) {
    switch (format) {
      case "hh": return p(self.getHours() < 13 ? self.getHours() : (self.getHours() - 12));
      case "h": return self.getHours() < 13 ? self.getHours() : (self.getHours() - 12);
      case "HH": return p(self.getHours());
      case "H": return self.getHours();
      case "mm": return p(self.getMinutes());
      case "m": return self.getMinutes();
      case "ss": return p(self.getSeconds());
      case "s": return self.getSeconds();
      case "yyyy": return self.getFullYear();
      case "yy": return self.getFullYear().toString().substring(2, 4);
      case "dddd": return self.getDayName();
      case "ddd": return self.getDayName(true);
      case "dd": return p(self.getDate());
      case "d": return self.getDate().toString();
      case "MMMM": return self.getMonthName();
      case "MMM": return self.getMonthName(true);
      case "MM": return p((self.getMonth() + 1));
      case "M": return self.getMonth() + 1;
      case "t": return self.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1);
      case "tt": return self.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
      case "zzz":
      case "zz":
      case "z": return "";
      case "\\h": return "h";
      case "\\H": return "H";
      case "\\m": return "m";
      case "\\s": return "s";
      case "\\y": return "y";
      case "\\d": return "d";
      case "\\M": return "M";
      case "\\t": return "t";
      case "\\z": return "z";
      case "\\": return "";
    }
  }) : this._toString();
};
Date.now = function () { return new Date(); }; Date.today = function () { return Date.now().clearTime(); }; Date.prototype._orient = +1; Date.prototype.next = function () { this._orient = +1; return this; }; Date.prototype.last = Date.prototype.prev = Date.prototype.previous = function () { this._orient = -1; return this; }; Date.prototype._is = false; Date.prototype.is = function () { this._is = true; return this; }; Number.prototype._dateElement = "day"; Number.prototype.fromNow = function () { var c = {}; c[this._dateElement] = this; return Date.now().add(c); }; Number.prototype.ago = function () { var c = {}; c[this._dateElement] = this * -1; return Date.now().add(c); }; (function () {
  var $D = Date.prototype, $N = Number.prototype; var dx = ("sunday monday tuesday wednesday thursday friday saturday").split(/\s/), mx = ("january february march april may june july august september october november december").split(/\s/), px = ("Millisecond Second Minute Hour Day Week Month Year").split(/\s/), de; var df = function (n) {
    return function () {
      if (this._is) { this._is = false; return this.getDay() == n; }
      return this.moveToDayOfWeek(n, this._orient);
    };
  }; for (var i = 0; i < dx.length; i++) { $D[dx[i]] = $D[dx[i].substring(0, 3)] = df(i); }
  var mf = function (n) {
    return function () {
      if (this._is) { this._is = false; return this.getMonth() === n; }
      return this.moveToMonth(n, this._orient);
    };
  }; for (var j = 0; j < mx.length; j++) { $D[mx[j]] = $D[mx[j].substring(0, 3)] = mf(j); }
  var ef = function (j) {
    return function () {
      if (j.substring(j.length - 1) != "s") { j += "s"; }
      return this["add" + j](this._orient);
    };
  }; var nf = function (n) { return function () { this._dateElement = n; return this; }; }; for (var k = 0; k < px.length; k++) { de = px[k].toLowerCase(); $D[de] = $D[de + "s"] = ef(px[k]); $N[de] = $N[de + "s"] = nf(de); }
} ()); Date.prototype.toJSONString = function () { return this.toString("yyyy-MM-ddThh:mm:ssZ"); }; Date.prototype.toShortDateString = function () { return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern); }; Date.prototype.toLongDateString = function () { return this.toString(Date.CultureInfo.formatPatterns.longDatePattern); }; Date.prototype.toShortTimeString = function () { return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern); }; Date.prototype.toLongTimeString = function () { return this.toString(Date.CultureInfo.formatPatterns.longTimePattern); }; Date.prototype.getOrdinal = function () { switch (this.getDate()) { case 1: case 21: case 31: return "st"; case 2: case 22: return "nd"; case 3: case 23: return "rd"; default: return "th"; } };
(function () {
  Date.Parsing = { Exception: function (s) { this.message = "Parse error at '" + s.substring(0, 10) + " ...'"; } }; var $P = Date.Parsing; var _ = $P.Operators = { rtoken: function (r) { return function (s) { var mx = s.match(r); if (mx) { return ([mx[0], s.substring(mx[0].length)]); } else { throw new $P.Exception(s); } }; }, token: function (s) { return function (s) { return _.rtoken(new RegExp("^\s*" + s + "\s*"))(s); }; }, stoken: function (s) { return _.rtoken(new RegExp("^" + s)); }, until: function (p) {
    return function (s) {
      var qx = [], rx = null; while (s.length) {
        try { rx = p.call(this, s); } catch (e) { qx.push(rx[0]); s = rx[1]; continue; }
        break;
      }
      return [qx, s];
    };
  }, many: function (p) {
    return function (s) {
      var rx = [], r = null; while (s.length) {
        try { r = p.call(this, s); } catch (e) { return [rx, s]; }
        rx.push(r[0]); s = r[1];
      }
      return [rx, s];
    };
  }, optional: function (p) {
    return function (s) {
      var r = null; try { r = p.call(this, s); } catch (e) { return [null, s]; }
      return [r[0], r[1]];
    };
  }, not: function (p) {
    return function (s) {
      try { p.call(this, s); } catch (e) { return [null, s]; }
      throw new $P.Exception(s);
    };
  }, ignore: function (p) { return p ? function (s) { var r = null; r = p.call(this, s); return [null, r[1]]; } : null; }, product: function () {
    var px = arguments[0], qx = Array.prototype.slice.call(arguments, 1), rx = []; for (var i = 0; i < px.length; i++) { rx.push(_.each(px[i], qx)); }
    return rx;
  }, cache: function (rule) {
    var cache = {}, r = null; return function (s) {
      try { r = cache[s] = (cache[s] || rule.call(this, s)); } catch (e) { r = cache[s] = e; }
      if (r instanceof $P.Exception) { throw r; } else { return r; }
    };
  }, any: function () {
    var px = arguments; return function (s) {
      var r = null; for (var i = 0; i < px.length; i++) {
        if (px[i] == null) { continue; }
        try { r = (px[i].call(this, s)); } catch (e) { r = null; }
        if (r) { return r; }
      }
      throw new $P.Exception(s);
    };
  }, each: function () {
    var px = arguments; return function (s) {
      var rx = [], r = null; for (var i = 0; i < px.length; i++) {
        if (px[i] == null) { continue; }
        try { r = (px[i].call(this, s)); } catch (e) { throw new $P.Exception(s); }
        rx.push(r[0]); s = r[1];
      }
      return [rx, s];
    };
  }, all: function () { var px = arguments, _ = _; return _.each(_.optional(px)); }, sequence: function (px, d, c) {
    d = d || _.rtoken(/^\s*/); c = c || null; if (px.length == 1) { return px[0]; }
    return function (s) {
      var r = null, q = null; var rx = []; for (var i = 0; i < px.length; i++) {
        try { r = px[i].call(this, s); } catch (e) { break; }
        rx.push(r[0]); try { q = d.call(this, r[1]); } catch (ex) { q = null; break; }
        s = q[1];
      }
      if (!r) { throw new $P.Exception(s); }
      if (q) { throw new $P.Exception(q[1]); }
      if (c) { try { r = c.call(this, r[1]); } catch (ey) { throw new $P.Exception(r[1]); } }
      return [rx, (r ? r[1] : s)];
    };
  }, between: function (d1, p, d2) { d2 = d2 || d1; var _fn = _.each(_.ignore(d1), p, _.ignore(d2)); return function (s) { var rx = _fn.call(this, s); return [[rx[0][0], r[0][2]], rx[1]]; }; }, list: function (p, d, c) { d = d || _.rtoken(/^\s*/); c = c || null; return (p instanceof Array ? _.each(_.product(p.slice(0, -1), _.ignore(d)), p.slice(-1), _.ignore(c)) : _.each(_.many(_.each(p, _.ignore(d))), px, _.ignore(c))); }, set: function (px, d, c) {
    d = d || _.rtoken(/^\s*/); c = c || null; return function (s) {
      var r = null, p = null, q = null, rx = null, best = [[], s], last = false; for (var i = 0; i < px.length; i++) {
        q = null; p = null; r = null; last = (px.length == 1); try { r = px[i].call(this, s); } catch (e) { continue; }
        rx = [[r[0]], r[1]]; if (r[1].length > 0 && !last) { try { q = d.call(this, r[1]); } catch (ex) { last = true; } } else { last = true; }
        if (!last && q[1].length === 0) { last = true; }
        if (!last) {
          var qx = []; for (var j = 0; j < px.length; j++) { if (i != j) { qx.push(px[j]); } }
          p = _.set(qx, d).call(this, q[1]); if (p[0].length > 0) { rx[0] = rx[0].concat(p[0]); rx[1] = p[1]; }
        }
        if (rx[1].length < best[1].length) { best = rx; }
        if (best[1].length === 0) { break; }
      }
      if (best[0].length === 0) { return best; }
      if (c) {
        try { q = c.call(this, best[1]); } catch (ey) { throw new $P.Exception(best[1]); }
        best[1] = q[1];
      }
      return best;
    };
  }, forward: function (gr, fname) { return function (s) { return gr[fname].call(this, s); }; }, replace: function (rule, repl) { return function (s) { var r = rule.call(this, s); return [repl, r[1]]; }; }, process: function (rule, fn) { return function (s) { var r = rule.call(this, s); return [fn.call(this, r[0]), r[1]]; }; }, min: function (min, rule) {
    return function (s) {
      var rx = rule.call(this, s); if (rx[0].length < min) { throw new $P.Exception(s); }
      return rx;
    };
  }
  }; var _generator = function (op) {
    return function () {
      var args = null, rx = []; if (arguments.length > 1) { args = Array.prototype.slice.call(arguments); } else if (arguments[0] instanceof Array) { args = arguments[0]; }
      if (args) { for (var i = 0, px = args.shift(); i < px.length; i++) { args.unshift(px[i]); rx.push(op.apply(null, args)); args.shift(); return rx; } } else { return op.apply(null, arguments); }
    };
  }; var gx = "optional not ignore cache".split(/\s/); for (var i = 0; i < gx.length; i++) { _[gx[i]] = _generator(_[gx[i]]); }
  var _vector = function (op) { return function () { if (arguments[0] instanceof Array) { return op.apply(null, arguments[0]); } else { return op.apply(null, arguments); } }; }; var vx = "each any all".split(/\s/); for (var j = 0; j < vx.length; j++) { _[vx[j]] = _vector(_[vx[j]]); }
} ()); (function () {
  var flattenAndCompact = function (ax) {
    var rx = []; for (var i = 0; i < ax.length; i++) { if (ax[i] instanceof Array) { rx = rx.concat(flattenAndCompact(ax[i])); } else { if (ax[i]) { rx.push(ax[i]); } } }
    return rx;
  }; Date.Grammar = {}; Date.Translator = { hour: function (s) { return function () { this.hour = Number(s); }; }, minute: function (s) { return function () { this.minute = Number(s); }; }, second: function (s) { return function () { this.second = Number(s); }; }, meridian: function (s) { return function () { this.meridian = s.slice(0, 1).toLowerCase(); }; }, timezone: function (s) { return function () { var n = s.replace(/[^\d\+\-]/g, ""); if (n.length) { this.timezoneOffset = Number(n); } else { this.timezone = s.toLowerCase(); } }; }, day: function (x) { var s = x[0]; return function () { this.day = Number(s.match(/\d+/)[0]); }; }, month: function (s) { return function () { this.month = ((s.length == 3) ? Date.getMonthNumberFromName(s) : (Number(s) - 1)); }; }, year: function (s) { return function () { var n = Number(s); this.year = ((s.length > 2) ? n : (n + (((n + 2000) < Date.CultureInfo.twoDigitYearMax) ? 2000 : 1900))); }; }, rday: function (s) { return function () { switch (s) { case "yesterday": this.days = -1; break; case "tomorrow": this.days = 1; break; case "today": this.days = 0; break; case "now": this.days = 0; this.now = true; break; } }; }, finishExact: function (x) {
    x = (x instanceof Array) ? x : [x]; var now = new Date(); this.year = now.getFullYear(); this.month = now.getMonth(); this.day = 1; this.hour = 0; this.minute = 0; this.second = 0; for (var i = 0; i < x.length; i++) { if (x[i]) { x[i].call(this); } }
    this.hour = (this.meridian == "p" && this.hour < 13) ? this.hour + 12 : this.hour; if (this.day > Date.getDaysInMonth(this.year, this.month)) { throw new RangeError(this.day + " is not a valid value for days."); }
    var r = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second); if (this.timezone) { r.set({ timezone: this.timezone }); } else if (this.timezoneOffset) { r.set({ timezoneOffset: this.timezoneOffset }); }
    return r;
  }, finish: function (x) {
    x = (x instanceof Array) ? flattenAndCompact(x) : [x]; if (x.length === 0) { return null; }
    for (var i = 0; i < x.length; i++) { if (typeof x[i] == "function") { x[i].call(this); } }
    if (this.now) { return new Date(); }
    var today = Date.today(); var method = null; var expression = !!(this.days != null || this.orient || this.operator); if (expression) {
      var gap, mod, orient; orient = ((this.orient == "past" || this.operator == "subtract") ? -1 : 1); if (this.weekday) { this.unit = "day"; gap = (Date.getDayNumberFromName(this.weekday) - today.getDay()); mod = 7; this.days = gap ? ((gap + (orient * mod)) % mod) : (orient * mod); }
      if (this.month) { this.unit = "month"; gap = (this.month - today.getMonth()); mod = 12; this.months = gap ? ((gap + (orient * mod)) % mod) : (orient * mod); this.month = null; }
      if (!this.unit) { this.unit = "day"; }
      if (this[this.unit + "s"] == null || this.operator != null) {
        if (!this.value) { this.value = 1; }
        if (this.unit == "week") { this.unit = "day"; this.value = this.value * 7; }
        this[this.unit + "s"] = this.value * orient;
      }
      return today.add(this);
    } else {
      if (this.meridian && this.hour) { this.hour = (this.hour < 13 && this.meridian == "p") ? this.hour + 12 : this.hour; }
      if (this.weekday && !this.day) { this.day = (today.addDays((Date.getDayNumberFromName(this.weekday) - today.getDay()))).getDate(); }
      if (this.month && !this.day) { this.day = 1; }
      return today.set(this);
    }
  }
  }; var _ = Date.Parsing.Operators, g = Date.Grammar, t = Date.Translator, _fn; g.datePartDelimiter = _.rtoken(/^([\s\-\.\,\/\x27]+)/); g.timePartDelimiter = _.stoken(":"); g.whiteSpace = _.rtoken(/^\s*/); g.generalDelimiter = _.rtoken(/^(([\s\,]|at|on)+)/); var _C = {}; g.ctoken = function (keys) {
    var fn = _C[keys]; if (!fn) {
      var c = Date.CultureInfo.regexPatterns; var kx = keys.split(/\s+/), px = []; for (var i = 0; i < kx.length; i++) { px.push(_.replace(_.rtoken(c[kx[i]]), kx[i])); }
      fn = _C[keys] = _.any.apply(null, px);
    }
    return fn;
  }; g.ctoken2 = function (key) { return _.rtoken(Date.CultureInfo.regexPatterns[key]); }; g.h = _.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), t.hour)); g.hh = _.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/), t.hour)); g.H = _.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), t.hour)); g.HH = _.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/), t.hour)); g.m = _.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/), t.minute)); g.mm = _.cache(_.process(_.rtoken(/^[0-5][0-9]/), t.minute)); g.s = _.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/), t.second)); g.ss = _.cache(_.process(_.rtoken(/^[0-5][0-9]/), t.second)); g.hms = _.cache(_.sequence([g.H, g.mm, g.ss], g.timePartDelimiter)); g.t = _.cache(_.process(g.ctoken2("shortMeridian"), t.meridian)); g.tt = _.cache(_.process(g.ctoken2("longMeridian"), t.meridian)); g.z = _.cache(_.process(_.rtoken(/^(\+|\-)?\s*\d\d\d\d?/), t.timezone)); g.zz = _.cache(_.process(_.rtoken(/^(\+|\-)\s*\d\d\d\d/), t.timezone)); g.zzz = _.cache(_.process(g.ctoken2("timezone"), t.timezone)); g.timeSuffix = _.each(_.ignore(g.whiteSpace), _.set([g.tt, g.zzz])); g.time = _.each(_.optional(_.ignore(_.stoken("T"))), g.hms, g.timeSuffix); g.d = _.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/), _.optional(g.ctoken2("ordinalSuffix"))), t.day)); g.dd = _.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/), _.optional(g.ctoken2("ordinalSuffix"))), t.day)); g.ddd = g.dddd = _.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"), function (s) { return function () { this.weekday = s; }; })); g.M = _.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/), t.month)); g.MM = _.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/), t.month)); g.MMM = g.MMMM = _.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), t.month)); g.y = _.cache(_.process(_.rtoken(/^(\d\d?)/), t.year)); g.yy = _.cache(_.process(_.rtoken(/^(\d\d)/), t.year)); g.yyy = _.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/), t.year)); g.yyyy = _.cache(_.process(_.rtoken(/^(\d\d\d\d)/), t.year)); _fn = function () { return _.each(_.any.apply(null, arguments), _.not(g.ctoken2("timeContext"))); }; g.day = _fn(g.d, g.dd); g.month = _fn(g.M, g.MMM); g.year = _fn(g.yyyy, g.yy); g.orientation = _.process(g.ctoken("past future"), function (s) { return function () { this.orient = s; }; }); g.operator = _.process(g.ctoken("add subtract"), function (s) { return function () { this.operator = s; }; }); g.rday = _.process(g.ctoken("yesterday tomorrow today now"), t.rday); g.unit = _.process(g.ctoken("minute hour day week month year"), function (s) { return function () { this.unit = s; }; }); g.value = _.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/), function (s) { return function () { this.value = s.replace(/\D/g, ""); }; }); g.expression = _.set([g.rday, g.operator, g.value, g.unit, g.orientation, g.ddd, g.MMM]); _fn = function () { return _.set(arguments, g.datePartDelimiter); }; g.mdy = _fn(g.ddd, g.month, g.day, g.year); g.ymd = _fn(g.ddd, g.year, g.month, g.day); g.dmy = _fn(g.ddd, g.day, g.month, g.year); g.date = function (s) { return ((g[Date.CultureInfo.dateElementOrder] || g.mdy).call(this, s)); }; g.format = _.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function (fmt) { if (g[fmt]) { return g[fmt]; } else { throw Date.Parsing.Exception(fmt); } }), _.process(_.rtoken(/^[^dMyhHmstz]+/), function (s) { return _.ignore(_.stoken(s)); }))), function (rules) { return _.process(_.each.apply(null, rules), t.finishExact); }); var _F = {}; var _get = function (f) { return _F[f] = (_F[f] || g.format(f)[0]); }; g.formats = function (fx) {
    if (fx instanceof Array) {
      var rx = []; for (var i = 0; i < fx.length; i++) { rx.push(_get(fx[i])); }
      return _.any.apply(null, rx);
    } else { return _get(fx); }
  }; g._formats = g.formats(["yyyy-MM-ddTHH:mm:ss", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "d"]); g._start = _.process(_.set([g.date, g.time, g.expression], g.generalDelimiter, g.whiteSpace), t.finish); g.start = function (s) {
    try { var r = g._formats.call({}, s); if (r[1].length === 0) { return r; } } catch (e) { }
    return g._start.call({}, s);
  };
} ()); Date._parse = Date.parse; Date.parse = function (s) {
  var r = null; if (!s) { return null; }
  try { r = Date.Grammar.start.call({}, s); } catch (e) { return null; }
  return ((r[1].length === 0) ? r[0] : null);
}; Date.getParseFunction = function (fx) {
  var fn = Date.Grammar.formats(fx); return function (s) {
    var r = null; try { r = fn.call({}, s); } catch (e) { return null; }
    return ((r[1].length === 0) ? r[0] : null);
  };
}; Date.parseExact = function (s, fx) { return Date.getParseFunction(fx)(s); };;
function InitializeToggleZone(toggleZoneId, toggleGroup, multiZoneId, multiZoneInnerId, enableToggleOff, hideIfTargetIsEmpty) {

  // Valide si le target d'un toogle zone est vide et si oui fait disparaitre le toogle
  var isToogleHide = false;
  if (hideIfTargetIsEmpty) {
    var multiZone = $("div[ItemID='" + multiZoneId + "']");
    var innerZone = multiZone.children("div[ItemID='" + multiZoneInnerId + "']");

    if (!IsEmpty(innerZone)) {
      $("." + toggleZoneId).show();
    } else {
      isToogleHide = true;
    }
  }

  if (!isToogleHide) {
    $("." + toggleZoneId).attr("MultiZoneId", multiZoneId);
    $("." + toggleZoneId).attr("MultiZoneInnerId", multiZoneInnerId);
    $("." + toggleZoneId).attr("ToggleGroup", toggleGroup);
    $("." + toggleZoneId).attr("EnableToggleOff", enableToggleOff);
    $("." + toggleZoneId).hover(
  function () {
    var currentToggleZone = this; if (!toggleIteratorBreak) {
      toggleIteratorBreak = true;
      $("div[Replicated='" + toggleZoneId + "']").each(function () {
        if (this != currentToggleZone) {
          $(this).trigger("mouseover");
        }
      }); toggleIteratorBreak = false;
    }
    if ($(this).children("[ZoneDescriptor='Selected']").is("#" + this.getAttribute("DisplayedZoneID"))) {
      if (!IsEmpty($(this).children("[ZoneDescriptor='SelectedHover']")[0])) {
        SwapVisibleNmsZone($("." + toggleZoneId)[0].id, $(this).children("[ZoneDescriptor='SelectedHover']")[0].id);
      }
    }
    else {
      if (!IsEmpty($(this).children("[ZoneDescriptor='DefaultHover']")[0])) {
        SwapVisibleNmsZone($("." + toggleZoneId)[0].id, $(this).children("[ZoneDescriptor='DefaultHover']")[0].id);
      }
    }
  },
  function () {
    var currentToggleZone = this;
    if (!toggleIteratorBreak) {
      toggleIteratorBreak = true;
      $("div[Replicated='" + toggleZoneId + "']").each(function () {
        if (this != currentToggleZone) {
          $(this).trigger("mouseout");
        }
      }); toggleIteratorBreak = false;
    }
    if (($(this).children("[ZoneDescriptor='SelectedHover']").is("#" + this.getAttribute("DisplayedZoneID"))) || ($(this).children("[ZoneDescriptor='Selected']").is("#" + this.getAttribute("DisplayedZoneID")))) {
      if (!IsEmpty($(this).children("[ZoneDescriptor='Selected']")[0])) {
        SwapVisibleNmsZone($("." + toggleZoneId)[0].id, $(this).children("[ZoneDescriptor='Selected']")[0].id);
      }
    }
    else {
      SwapVisibleNmsZone($("." + toggleZoneId)[0].id, $(this).children("[ZoneDescriptor='Default']")[0].id);
    }
  });

    $("." + toggleZoneId).bind("click", function () {
      var currentToggleZone = this;
      if (!toggleIteratorBreak) {
        toggleIteratorBreak = true;
        $("div[Replicated='" + toggleZoneId + "']").each(function () {
          if (this != currentToggleZone) {
            $(this).trigger("click");
          }
        });
        toggleIteratorBreak = false;
      }

      if (this.getAttribute("ToggleGroup") != "") {
        $("div[ToggleGroup='" + this.getAttribute("ToggleGroup") + "']").each(function () {
          if (this != currentToggleZone) {
            SwapVisibleNmsZone(this.id, $(this).children("[ZoneDescriptor='Default']")[0].id);
          }
        });
      }

      if (multiZoneId != "") {
        var multiZone = $("div[ItemID='" + multiZoneId + "']");
        if (multiZone.length > 0) {
          subZone = multiZone.children("div[ItemID='" + multiZoneInnerId + "'], div[ItemID$='" + multiZoneInnerId + "']");
          if (subZone.length > 0) {
            SwapVisibleNmsZone(multiZone[0].id, subZone[0].id);
          }
          /*  SwapVisibleNmsZone(multiZone[0].id, multiZone.children().filter(function () {
          // Obtient l'identifiant du ItemID
          var itemID = $(this).attr("ItemID") != null && $(this).attr("ItemID") != "undefined" ? $(this).attr("ItemID") : $(this).attr("id");

          // Valide le ItemID
          if (itemID.indexOf(multiZoneInnerId) >= 0) {
          return true;
          }
          else {
          return false;
          }
          })[0].id);*/
        }
      }


      if ($(this).children("[ZoneDescriptor='Selected']").is("#" + $(this).attr("DisplayedZoneID")) && (enableToggleOff)) {
        if (!IsEmpty($(this).children("[ZoneDescriptor='Default']")[0])) {
          SwapVisibleNmsZone($("." + toggleZoneId)[0].id, $(this).children("[ZoneDescriptor='Default']")[0].id);
        }
      }
      else {

        if (!IsEmpty($(this).children("[ZoneDescriptor='Selected']")[0])) {
          SwapVisibleNmsZone($("." + toggleZoneId)[0].id, $(this).children("[ZoneDescriptor='Selected']")[0].id);
        }
      }

    });
  }


  jQuery.data($("." + toggleZoneId)[0], "SwapFunction", function () {
    var $this = $("." + toggleZoneId)[0];
    if ($this.getAttribute("ToggleGroup") != "") {
      $("div[ToggleGroup='" + $this.getAttribute("ToggleGroup") + "']").each(function () {
        if (this != $this) {
          SwapVisibleNmsZone(this.id, $(this).children("[ZoneDescriptor='Default']")[0].id);
        }
      });
    }

    if ($(this).children("[ZoneDescriptor='Selected']").is("#" + $(this).attr("DisplayedZoneID")) && (enableToggleOff)) {
      if (!IsEmpty($($this).children("[ZoneDescriptor='Default']")[0])) {
        SwapVisibleNmsZone($("." + toggleZoneId)[0].id, $($this).children("[ZoneDescriptor='Default']")[0].id);
      }
    }
    else {
      if (!IsEmpty($($this).children("[ZoneDescriptor='Selected']")[0])) {
        SwapVisibleNmsZone($("." + toggleZoneId)[0].id, $($this).children("[ZoneDescriptor='Selected']")[0].id);
      }
    }
  });

  ExtendToggleZone(toggleZoneId, toggleGroup, multiZoneId, multiZoneInnerId, enableToggleOff, hideIfTargetIsEmpty);
}

function ExtendToggleZone(toggleZoneId, toggleGroup, multiZoneId, multiZoneInnerId, enableToggleOff, hideIfTargetIsEmpty) {
  var toggleZone = $("." + toggleZoneId)[0];
  toggleZone.Replicate = function () {
    var div = $(this).clone()[0];
    if (toggleZone.getAttribute("Replicated") == null) {
      toggleZone.setAttribute("Replicated", toggleZoneId);
    }
    div.setAttribute("Replicated", toggleZone.getAttribute("Replicated"));
    div.id += new Date().getTime();
    $(div).find("[id]").each(function () {
      this.id += new Date().getTime();
    });
    var temp = document.createElement("div");
    temp.appendChild(div);
    document.body.appendChild(temp);
    InitializeToggleZone(toggleZoneId, toggleGroup, multiZoneId, multiZoneInnerId, enableToggleOff, hideIfTargetIsEmpty);
    temp.removeChild(div);
    temp.parentNode.removeChild(temp);
    return div;
  };
}

var toggleIteratorBreak = false;





;
function SwapVisibleNmsZone(zoneContainerId, visibleZoneId) {
  $("#" + zoneContainerId).children().each(function () {
    this.parentNode.setAttribute("DisplayedZoneID", visibleZoneId);
    if (this.id == visibleZoneId) {
      $(this).show();
      if ($(this).attr("NmsMultiZoneContentScript") != null) {
        eval($(this).attr("NmsMultiZoneContentScript"));
        $(this).removeAttr("NmsMultiZoneContentScript");
      }
    }
    else {
      $(this).hide();
    }
  });
}

// Initialize la Multizone
function InitializeMultiZone(multiZone, selectedItemID) {
  // Note(Slepine) : J'utilise le sélecteur JQuery "contents" parce qu'il peut juste avoir du texte comme ToggleZone

  // Valide si la multiZone existe
  if (multiZone != null) {
    // Méthode permettant de trouvé la prochaine zone à afficher
    multiZone.FindNextVisibleZone = function (clientID) {
      // Valide si la zone est la zone affiché présentement
      if (clientID == selectedItemID) {
        // Parcours les enfants
        $(multiZone).contents().each(function (index) {
          // Valide si l'ItemID n'est pas le même que la zone sélectionné et qu'il possède des enfants
          if ($(this).attr("id") != selectedItemID && $(this).contents().length > 0) {
            // Affiche la zone
            $(this).css("display", "block");

            // Quitte la boucle
            return false;
          }
        });
      }
    };
  }
}

// Retourne vrai si la multizone est vide, sinon retourne faux. 
// La zone est considéré vide si elle ne contient pas de textes ni d'objet tels des images et des liens
// Si la zone ne contient que des "containers" tels des div et des span, elle est considéré vide
function IsEmpty(multiZone) {
  if ((Trim($(multiZone).text().trim()) != "") || ($(multiZone).find('img').length > 0)
    || ($(multiZone).find('a').length > 0) || ($(multiZone).find('OBJECT').length > 0)) {
    return false;
  }
  else {
    return true;
  }  
}

//Fonction pour trimmer les espaces textes et html
function Trim(myString) {
  var returnString = myString.replace(/^\s+|\s+$/g, '').replace(/^(\&nbsp\;)+|(\&nbsp\;)+$/g, '').split(" ").join('');
  return returnString;
} 
;

function GoogleTrackEvent(mediaType, eventName, fileName, elapsedTime) {
  if (typeof (_trackEvent) != "undefined") {
    if (elapsedTime != null) {
      _trackEvent(mediaType, eventName, fileName, elapsedTime);
    }
    else {
      _trackEvent(mediaType, eventName, fileName);
    }
  }
};
//v4.0.50401.0
if(!window.Silverlight)window.Silverlight={};Silverlight._silverlightCount=0;Silverlight.__onSilverlightInstalledCalled=false;Silverlight.fwlinkRoot="http://go2.microsoft.com/fwlink/?LinkID=";Silverlight.__installationEventFired=false;Silverlight.onGetSilverlight=null;Silverlight.onSilverlightInstalled=function(){window.location.reload(false)};Silverlight.isInstalled=function(b){if(b==undefined)b=null;var a=false,m=null;try{var i=null,j=false;if(window.ActiveXObject)try{i=new ActiveXObject("AgControl.AgControl");if(b===null)a=true;else if(i.IsVersionSupported(b))a=true;i=null}catch(l){j=true}else j=true;if(j){var k=navigator.plugins["Silverlight Plug-In"];if(k)if(b===null)a=true;else{var h=k.description;if(h==="1.0.30226.2")h="2.0.30226.2";var c=h.split(".");while(c.length>3)c.pop();while(c.length<4)c.push(0);var e=b.split(".");while(e.length>4)e.pop();var d,g,f=0;do{d=parseInt(e[f]);g=parseInt(c[f]);f++}while(f<e.length&&d===g);if(d<=g&&!isNaN(d))a=true}}}catch(l){a=false}return a};Silverlight.WaitForInstallCompletion=function(){if(!Silverlight.isBrowserRestartRequired&&Silverlight.onSilverlightInstalled){try{navigator.plugins.refresh()}catch(a){}if(Silverlight.isInstalled(null)&&!Silverlight.__onSilverlightInstalledCalled){Silverlight.onSilverlightInstalled();Silverlight.__onSilverlightInstalledCalled=true}else setTimeout(Silverlight.WaitForInstallCompletion,3e3)}};Silverlight.__startup=function(){navigator.plugins.refresh();Silverlight.isBrowserRestartRequired=Silverlight.isInstalled(null);if(!Silverlight.isBrowserRestartRequired){Silverlight.WaitForInstallCompletion();if(!Silverlight.__installationEventFired){Silverlight.onInstallRequired();Silverlight.__installationEventFired=true}}else if(window.navigator.mimeTypes){var b=navigator.mimeTypes["application/x-silverlight-2"],c=navigator.mimeTypes["application/x-silverlight-2-b2"],d=navigator.mimeTypes["application/x-silverlight-2-b1"],a=d;if(c)a=c;if(!b&&(d||c)){if(!Silverlight.__installationEventFired){Silverlight.onUpgradeRequired();Silverlight.__installationEventFired=true}}else if(b&&a)if(b.enabledPlugin&&a.enabledPlugin)if(b.enabledPlugin.description!=a.enabledPlugin.description)if(!Silverlight.__installationEventFired){Silverlight.onRestartRequired();Silverlight.__installationEventFired=true}}if(!Silverlight.disableAutoStartup)if(window.removeEventListener)window.removeEventListener("load",Silverlight.__startup,false);else window.detachEvent("onload",Silverlight.__startup)};if(!Silverlight.disableAutoStartup)if(window.addEventListener)window.addEventListener("load",Silverlight.__startup,false);else window.attachEvent("onload",Silverlight.__startup);Silverlight.createObject=function(m,f,e,k,l,h,j){var d={},a=k,c=l;d.version=a.version;a.source=m;d.alt=a.alt;if(h)a.initParams=h;if(a.isWindowless&&!a.windowless)a.windowless=a.isWindowless;if(a.framerate&&!a.maxFramerate)a.maxFramerate=a.framerate;if(e&&!a.id)a.id=e;delete a.ignoreBrowserVer;delete a.inplaceInstallPrompt;delete a.version;delete a.isWindowless;delete a.framerate;delete a.data;delete a.src;delete a.alt;if(Silverlight.isInstalled(d.version)){for(var b in c)if(c[b]){if(b=="onLoad"&&typeof c[b]=="function"&&c[b].length!=1){var i=c[b];c[b]=function(a){return i(document.getElementById(e),j,a)}}var g=Silverlight.__getHandlerName(c[b]);if(g!=null){a[b]=g;c[b]=null}else throw"typeof events."+b+" must be 'function' or 'string'";}slPluginHTML=Silverlight.buildHTML(a)}else slPluginHTML=Silverlight.buildPromptHTML(d);if(f)f.innerHTML=slPluginHTML;else return slPluginHTML};Silverlight.buildHTML=function(a){var b=[];b.push('<object type="application/x-silverlight" data="data:application/x-silverlight,"');if(a.id!=null)b.push(' id="'+Silverlight.HtmlAttributeEncode(a.id)+'"');if(a.width!=null)b.push(' width="'+a.width+'"');if(a.height!=null)b.push(' height="'+a.height+'"');b.push(" >");delete a.id;delete a.width;delete a.height;for(var c in a)if(a[c])b.push('<param name="'+Silverlight.HtmlAttributeEncode(c)+'" value="'+Silverlight.HtmlAttributeEncode(a[c])+'" />');b.push("</object>");return b.join("")};Silverlight.createObjectEx=function(b){var a=b,c=Silverlight.createObject(a.source,a.parentElement,a.id,a.properties,a.events,a.initParams,a.context);if(a.parentElement==null)return c};Silverlight.buildPromptHTML=function(b){var a="",d=Silverlight.fwlinkRoot,c=b.version;if(b.alt)a=b.alt;else{if(!c)c="";a="<a href='javascript:Silverlight.getSilverlight(\"{1}\");' style='text-decoration: none;'><img src='{2}' alt='Get Microsoft Silverlight' style='border-style: none'/></a>";a=a.replace("{1}",c);a=a.replace("{2}",d+"108181")}return a};Silverlight.getSilverlight=function(e){if(Silverlight.onGetSilverlight)Silverlight.onGetSilverlight();var b="",a=String(e).split(".");if(a.length>1){var c=parseInt(a[0]);if(isNaN(c)||c<2)b="1.0";else b=a[0]+"."+a[1]}var d="";if(b.match(/^\d+\056\d+$/))d="&v="+b;Silverlight.followFWLink("149156"+d)};Silverlight.followFWLink=function(a){top.location=Silverlight.fwlinkRoot+String(a)};Silverlight.HtmlAttributeEncode=function(c){var a,b="";if(c==null)return null;for(var d=0;d<c.length;d++){a=c.charCodeAt(d);if(a>96&&a<123||a>64&&a<91||a>43&&a<58&&a!=47||a==95)b=b+String.fromCharCode(a);else b=b+"&#"+a+";"}return b};Silverlight.default_error_handler=function(e,b){var d,c=b.ErrorType;d=b.ErrorCode;var a="\nSilverlight error message     \n";a+="ErrorCode: "+d+"\n";a+="ErrorType: "+c+"       \n";a+="Message: "+b.ErrorMessage+"     \n";if(c=="ParserError"){a+="XamlFile: "+b.xamlFile+"     \n";a+="Line: "+b.lineNumber+"     \n";a+="Position: "+b.charPosition+"     \n"}else if(c=="RuntimeError"){if(b.lineNumber!=0){a+="Line: "+b.lineNumber+"     \n";a+="Position: "+b.charPosition+"     \n"}a+="MethodName: "+b.methodName+"     \n"}alert(a)};Silverlight.__cleanup=function(){for(var a=Silverlight._silverlightCount-1;a>=0;a--)window["__slEvent"+a]=null;Silverlight._silverlightCount=0;if(window.removeEventListener)window.removeEventListener("unload",Silverlight.__cleanup,false);else window.detachEvent("onunload",Silverlight.__cleanup)};Silverlight.__getHandlerName=function(b){var a="";if(typeof b=="string")a=b;else if(typeof b=="function"){if(Silverlight._silverlightCount==0)if(window.addEventListener)window.addEventListener("unload",Silverlight.__cleanup,false);else window.attachEvent("onunload",Silverlight.__cleanup);var c=Silverlight._silverlightCount++;a="__slEvent"+c;window[a]=b}else a=null;return a};Silverlight.onRequiredVersionAvailable=function(){};Silverlight.onRestartRequired=function(){};Silverlight.onUpgradeRequired=function(){};Silverlight.onInstallRequired=function(){};Silverlight.IsVersionAvailableOnError=function(d,a){var b=false;try{if(a.ErrorCode==8001&&!Silverlight.__installationEventFired){Silverlight.onUpgradeRequired();Silverlight.__installationEventFired=true}else if(a.ErrorCode==8002&&!Silverlight.__installationEventFired){Silverlight.onRestartRequired();Silverlight.__installationEventFired=true}else if(a.ErrorCode==5014||a.ErrorCode==2106){if(Silverlight.__verifySilverlight2UpgradeSuccess(a.getHost()))b=true}else b=true}catch(c){}return b};Silverlight.IsVersionAvailableOnLoad=function(b){var a=false;try{if(Silverlight.__verifySilverlight2UpgradeSuccess(b.getHost()))a=true}catch(c){}return a};Silverlight.__verifySilverlight2UpgradeSuccess=function(d){var c=false,b="4.0.50401",a=null;try{if(d.IsVersionSupported(b+".99")){a=Silverlight.onRequiredVersionAvailable;c=true}else if(d.IsVersionSupported(b+".0"))a=Silverlight.onRestartRequired;else a=Silverlight.onUpgradeRequired;if(a&&!Silverlight.__installationEventFired){a();Silverlight.__installationEventFired=true}}catch(e){}return c};
/*!
* MediaElement.js
* HTML5 <video> and <audio> shim and player
* http://mediaelementjs.com/
*
* Creates a JavaScript object that mimics HTML5 MediaElement API
* for browsers that don't understand HTML5 or can't play the provided codec
* Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
*
* Copyright 2010-2012, John Dyer (http://j.hn)
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/
// Namespace
var mejs = mejs || {};

// version number
mejs.version = '2.6.5';

// player number (for missing, same id attr)
mejs.meIndex = 0;

// media types accepted by plugins
mejs.plugins = {
  silverlight: [
		{ version: [3, 0], types: ['video/mp4', 'video/m4v', 'video/mov', 'video/wmv', 'audio/wma', 'audio/m4a', 'audio/mp3', 'audio/wav', 'audio/mpeg'] }
  ],
  flash: [
		{ version: [9, 0, 124], types: ['video/mp4', 'video/m4v', 'video/mov', 'video/flv', 'video/x-flv', 'audio/flv', 'audio/x-flv', 'audio/mp3', 'audio/m4a', 'audio/mpeg'] }
  //,{version: [12,0], types: ['video/webm']} // for future reference (hopefully!)
  ],
  youtube: [
		{ version: null, types: ['video/youtube'] }
  ],
  vimeo: [
		{ version: null, types: ['video/vimeo'] }
  ]
};

/*
Utility methods
*/
mejs.Utility = {
  encodeUrl: function (url) {
    return encodeURIComponent(url); //.replace(/\?/gi,'%3F').replace(/=/gi,'%3D').replace(/&/gi,'%26');
  },
  escapeHTML: function (s) {
    return s.toString().split('&').join('&amp;').split('<').join('&lt;').split('"').join('&quot;');
  },
  absolutizeUrl: function (url) {
    var el = document.createElement('div');
    el.innerHTML = '<a href="' + this.escapeHTML(url) + '">x</a>';
    return el.firstChild.href;
  },
  getScriptPath: function (scriptNames) {
    var
			i = 0,
			j,
			path = '',
			name = '',
			script,
			scripts = document.getElementsByTagName('script'),
			il = scripts.length,
			jl = scriptNames.length;

    for (; i < il; i++) {
      script = scripts[i].src;
      for (j = 0; j < jl; j++) {
        name = scriptNames[j];
        if (script.indexOf(name) > -1) {
          path = script.substring(0, script.indexOf(name));
          break;
        }
      }
      if (path !== '') {
        break;
      }
    }
    return path;
  },
  secondsToTimeCode: function (time, forceHours, showFrameCount, fps) {
    //add framecount
    if (typeof showFrameCount == 'undefined') {
      showFrameCount = false;
    } else if (typeof fps == 'undefined') {
      fps = 25;
    }

    var hours = Math.floor(time / 3600) % 24,
			minutes = Math.floor(time / 60) % 60,
			seconds = Math.floor(time % 60),
			frames = Math.floor(((time % 1) * fps).toFixed(3)),
			result =
					((forceHours || hours > 0) ? (hours < 10 ? '0' + hours : hours) + ':' : '')
						+ (minutes < 10 ? '0' + minutes : minutes) + ':'
						+ (seconds < 10 ? '0' + seconds : seconds)
						+ ((showFrameCount) ? ':' + (frames < 10 ? '0' + frames : frames) : '');

    return result;
  },

  timeCodeToSeconds: function (hh_mm_ss_ff, forceHours, showFrameCount, fps) {
    if (typeof showFrameCount == 'undefined') {
      showFrameCount = false;
    } else if (typeof fps == 'undefined') {
      fps = 25;
    }

    var tc_array = hh_mm_ss_ff.split(":"),
			tc_hh = parseInt(tc_array[0], 10),
			tc_mm = parseInt(tc_array[1], 10),
			tc_ss = parseInt(tc_array[2], 10),
			tc_ff = 0,
			tc_in_seconds = 0;

    if (showFrameCount) {
      tc_ff = parseInt(tc_array[3]) / fps;
    }

    tc_in_seconds = (tc_hh * 3600) + (tc_mm * 60) + tc_ss + tc_ff;

    return tc_in_seconds;
  },

  /* borrowed from SWFObject: http://code.google.com/p/swfobject/source/browse/trunk/swfobject/src/swfobject.js#474 */
  removeSwf: function (id) {
    var obj = document.getElementById(id);
    if (obj && obj.nodeName == "OBJECT") {
      if (mejs.MediaFeatures.isIE) {
        obj.style.display = "none";
        (function () {
          if (obj.readyState == 4) {
            mejs.Utility.removeObjectInIE(id);
          } else {
            setTimeout(arguments.callee, 10);
          }
        })();
      } else {
        obj.parentNode.removeChild(obj);
      }
    }
  },
  removeObjectInIE: function (id) {
    var obj = document.getElementById(id);
    if (obj) {
      for (var i in obj) {
        if (typeof obj[i] == "function") {
          obj[i] = null;
        }
      }
      obj.parentNode.removeChild(obj);
    }
  }
};


// Core detector, plugins are added below
mejs.PluginDetector = {

  // main public function to test a plug version number PluginDetector.hasPluginVersion('flash',[9,0,125]);
  hasPluginVersion: function (plugin, v) {
    var pv = this.plugins[plugin];
    v[1] = v[1] || 0;
    v[2] = v[2] || 0;
    return (pv[0] > v[0] || (pv[0] == v[0] && pv[1] > v[1]) || (pv[0] == v[0] && pv[1] == v[1] && pv[2] >= v[2])) ? true : false;
  },

  // cached values
  nav: window.navigator,
  ua: window.navigator.userAgent.toLowerCase(),

  // stored version numbers
  plugins: [],

  // runs detectPlugin() and stores the version number
  addPlugin: function (p, pluginName, mimeType, activeX, axDetect) {
    this.plugins[p] = this.detectPlugin(pluginName, mimeType, activeX, axDetect);
  },

  // get the version number from the mimetype (all but IE) or ActiveX (IE)
  detectPlugin: function (pluginName, mimeType, activeX, axDetect) {

    var version = [0, 0, 0],
			description,
			i,
			ax;

    // Firefox, Webkit, Opera
    if (typeof (this.nav.plugins) != 'undefined' && typeof this.nav.plugins[pluginName] == 'object') {
      description = this.nav.plugins[pluginName].description;
      if (description && !(typeof this.nav.mimeTypes != 'undefined' && this.nav.mimeTypes[mimeType] && !this.nav.mimeTypes[mimeType].enabledPlugin)) {
        version = description.replace(pluginName, '').replace(/^\s+/, '').replace(/\sr/gi, '.').split('.');
        for (i = 0; i < version.length; i++) {
          version[i] = parseInt(version[i].match(/\d+/), 10);
        }
      }
      // Internet Explorer / ActiveX
    } else if (typeof (window.ActiveXObject) != 'undefined') {
      try {
        ax = new ActiveXObject(activeX);
        if (ax) {
          version = axDetect(ax);
        }
      }
      catch (e) { }
    }
    return version;
  }
};

// Add Flash detection
mejs.PluginDetector.addPlugin('flash', 'Shockwave Flash', 'application/x-shockwave-flash', 'ShockwaveFlash.ShockwaveFlash', function (ax) {
  // adapted from SWFObject
  var version = [],
		d = ax.GetVariable("$version");
  if (d) {
    d = d.split(" ")[1].split(",");
    version = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
  }
  return version;
});

// Add Silverlight detection
mejs.PluginDetector.addPlugin('silverlight', 'Silverlight Plug-In', 'application/x-silverlight-2', 'AgControl.AgControl', function (ax) {
  // Silverlight cannot report its version number to IE
  // but it does have a isVersionSupported function, so we have to loop through it to get a version number.
  // adapted from http://www.silverlightversion.com/
  var v = [0, 0, 0, 0],
		loopMatch = function (ax, v, i, n) {
		  while (ax.isVersionSupported(v[0] + "." + v[1] + "." + v[2] + "." + v[3])) {
		    v[i] += n;
		  }
		  v[i] -= n;
		};
  loopMatch(ax, v, 0, 1);
  loopMatch(ax, v, 1, 1);
  loopMatch(ax, v, 2, 10000); // the third place in the version number is usually 5 digits (4.0.xxxxx)
  loopMatch(ax, v, 2, 1000);
  loopMatch(ax, v, 2, 100);
  loopMatch(ax, v, 2, 10);
  loopMatch(ax, v, 2, 1);
  loopMatch(ax, v, 3, 1);

  return v;
});
// add adobe acrobat
/*
PluginDetector.addPlugin('acrobat','Adobe Acrobat','application/pdf','AcroPDF.PDF', function (ax) {
var version = [],
d = ax.GetVersions().split(',')[0].split('=')[1].split('.');

if (d) {
version = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
}
return version;
});
*/
// necessary detection (fixes for <IE9)
mejs.MediaFeatures = {
  init: function () {
    var
			t = this,
			d = document,
			nav = mejs.PluginDetector.nav,
			ua = mejs.PluginDetector.ua.toLowerCase(),
			i,
			v,
			html5Elements = ['source', 'track', 'audio', 'video'];

    // detect browsers (only the ones that have some kind of quirk we need to work around)
    t.isiPad = (ua.match(/ipad/i) !== null);
    t.isiPhone = (ua.match(/iphone/i) !== null);
    t.isiOS = t.isiPhone || t.isiPad;
    t.isAndroid = (ua.match(/android/i) !== null);
    t.isBustedAndroid = (ua.match(/android 2\.[12]/) !== null);
    t.isIE = (nav.appName.toLowerCase().indexOf("microsoft") != -1);
    t.isChrome = (ua.match(/chrome/gi) !== null);
    t.isFirefox = (ua.match(/firefox/gi) !== null);
    t.isWebkit = (ua.match(/webkit/gi) !== null);
    t.isGecko = (ua.match(/gecko/gi) !== null) && !t.isWebkit;
    t.isOpera = (ua.match(/opera/gi) !== null);
    t.hasTouch = ('ontouchstart' in window);

    // create HTML5 media elements for IE before 9, get a <video> element for fullscreen detection
    for (i = 0; i < html5Elements.length; i++) {
      v = document.createElement(html5Elements[i]);
    }

    t.supportsMediaTag = (typeof v.canPlayType !== 'undefined' || t.isBustedAndroid);

    // detect native JavaScript fullscreen (Safari/Firefox only, Chrome still fails)

    // iOS
    t.hasSemiNativeFullScreen = (typeof v.webkitEnterFullscreen !== 'undefined');

    // Webkit/firefox
    t.hasWebkitNativeFullScreen = (typeof v.webkitRequestFullScreen !== 'undefined');
    t.hasMozNativeFullScreen = (typeof v.mozRequestFullScreen !== 'undefined');

    t.hasTrueNativeFullScreen = (t.hasWebkitNativeFullScreen || t.hasMozNativeFullScreen);
    t.nativeFullScreenEnabled = t.hasTrueNativeFullScreen;
    if (t.hasMozNativeFullScreen) {
      t.nativeFullScreenEnabled = v.mozFullScreenEnabled;
    }


    if (this.isChrome) {
      t.hasSemiNativeFullScreen = false;
    }

    if (t.hasTrueNativeFullScreen) {
      t.fullScreenEventName = (t.hasWebkitNativeFullScreen) ? 'webkitfullscreenchange' : 'mozfullscreenchange';


      t.isFullScreen = function () {
        if (v.mozRequestFullScreen) {
          return d.mozFullScreen;
        } else if (v.webkitRequestFullScreen) {
          return d.webkitIsFullScreen;
        }
      }

      t.requestFullScreen = function (el) {

        if (t.hasWebkitNativeFullScreen) {
          el.webkitRequestFullScreen();
        } else if (t.hasMozNativeFullScreen) {
          el.mozRequestFullScreen();
        }
      }

      t.cancelFullScreen = function () {
        if (t.hasWebkitNativeFullScreen) {
          document.webkitCancelFullScreen();
        } else if (t.hasMozNativeFullScreen) {
          document.mozCancelFullScreen();
        }
      }

    }


    // OS X 10.5 can't do this even if it says it can :(
    if (t.hasSemiNativeFullScreen && ua.match(/mac os x 10_5/i)) {
      t.hasNativeFullScreen = false;
      t.hasSemiNativeFullScreen = false;
    }

  }
};
mejs.MediaFeatures.init();


/*
extension methods to <video> or <audio> object to bring it into parity with PluginMediaElement (see below)
*/
mejs.HtmlMediaElement = {
  pluginType: 'native',
  isFullScreen: false,

  setCurrentTime: function (time) {
    this.currentTime = time;
  },

  setMuted: function (muted) {
    this.muted = muted;
  },

  setVolume: function (volume) {
    this.volume = volume;
  },

  // for parity with the plugin versions
  stop: function () {
    this.pause();
  },

  // This can be a url string
  // or an array [{src:'file.mp4',type:'video/mp4'},{src:'file.webm',type:'video/webm'}]
  setSrc: function (url) {

    // Fix for IE9 which can't set .src when there are <source> elements. Awesome, right?
    var
			existingSources = this.getElementsByTagName('source');
    while (existingSources.length > 0) {
      this.removeChild(existingSources[0]);
    }

    if (typeof url == 'string') {
      this.src = url;
    } else {
      var i, media;

      for (i = 0; i < url.length; i++) {
        media = url[i];
        if (this.canPlayType(media.type)) {
          this.src = media.src;
        }
      }
    }
  },

  setVideoSize: function (width, height)
  {
    this.width = width;
    this.height = height;
  }
};

/*
Mimics the <video/audio> element by calling Flash's External Interface or Silverlights [ScriptableMember]
*/
mejs.PluginMediaElement = function (pluginid, pluginType, mediaUrl) {
  this.id = pluginid;
  this.pluginType = pluginType;
  this.src = mediaUrl;
  this.events = {};
};

// JavaScript values and ExternalInterface methods that match HTML5 video properties methods
// http://www.adobe.com/livedocs/flash/9.0/ActionScriptLangRefV3/fl/video/FLVPlayback.html
// http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html
mejs.PluginMediaElement.prototype = {

  // special
  pluginElement: null,
  pluginType: '',
  isFullScreen: false,

  // not implemented :(
  playbackRate: -1,
  defaultPlaybackRate: -1,
  seekable: [],
  played: [],

  // HTML5 read-only properties
  paused: true,
  ended: false,
  seeking: false,
  duration: 0,
  error: null,

  // HTML5 get/set properties, but only set (updated by event handlers)
  muted: false,
  volume: 1,
  currentTime: 0,

  // HTML5 methods
  play: function () {
    if (this.pluginApi != null) {
      if (this.pluginType == 'youtube') {
        this.pluginApi.playVideo();
      } else {
        this.pluginApi.playMedia();
      }
      this.paused = false;
    }
  },
  load: function () {
    if (this.pluginApi != null) {
      if (this.pluginType == 'youtube') {
      } else {
        this.pluginApi.loadMedia();
      }

      this.paused = false;
    }
  },
  pause: function () {
    if (this.pluginApi != null) {
      if (this.pluginType == 'youtube') {
        this.pluginApi.pauseVideo();
      } else {
        this.pluginApi.pauseMedia();
      }


      this.paused = true;
    }
  },
  stop: function () {
    if (this.pluginApi != null) {
      if (this.pluginType == 'youtube') {
        this.pluginApi.stopVideo();
      } else {
        this.pluginApi.stopMedia();
      }
      this.paused = true;
    }
  },
  canPlayType: function (type) {
    var i,
			j,
			pluginInfo,
			pluginVersions = mejs.plugins[this.pluginType];

    for (i = 0; i < pluginVersions.length; i++) {
      pluginInfo = pluginVersions[i];

      // test if user has the correct plugin version
      if (mejs.PluginDetector.hasPluginVersion(this.pluginType, pluginInfo.version)) {

        // test for plugin playback types
        for (j = 0; j < pluginInfo.types.length; j++) {
          // find plugin that can play the type
          if (type == pluginInfo.types[j]) {
            return true;
          }
        }
      }
    }

    return false;
  },

  positionFullscreenButton: function (x, y, visibleAndAbove) {
    if (this.pluginApi != null && this.pluginApi.positionFullscreenButton) {
      this.pluginApi.positionFullscreenButton(x, y, visibleAndAbove);
    }
  },

  hideFullscreenButton: function () {
    if (this.pluginApi != null && this.pluginApi.hideFullscreenButton) {
      this.pluginApi.hideFullscreenButton();
    }
  },


  // custom methods since not all JavaScript implementations support get/set

  // This can be a url string
  // or an array [{src:'file.mp4',type:'video/mp4'},{src:'file.webm',type:'video/webm'}]
  setSrc: function (url) {
    if (typeof url == 'string') {
      this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(url));
      this.src = mejs.Utility.absolutizeUrl(url);
    } else {
      var i, media;

      for (i = 0; i < url.length; i++) {
        media = url[i];
        if (this.canPlayType(media.type)) {
          this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(media.src));
          this.src = mejs.Utility.absolutizeUrl(url);
        }
      }
    }

  },
  setCurrentTime: function (time) {
    if (this.pluginApi != null) {
      if (this.pluginType == 'youtube') {
        this.pluginApi.seekTo(time);
      } else {
        this.pluginApi.setCurrentTime(time);
      }



      this.currentTime = time;
    }
  },
  setVolume: function (volume) {
    if (this.pluginApi != null) {
      // same on YouTube and MEjs
      if (this.pluginType == 'youtube') {
        this.pluginApi.setVolume(volume * 100);
      } else {
        this.pluginApi.setVolume(volume);
      }
      this.volume = volume;
    }
  },
  setMuted: function (muted) {
    if (this.pluginApi != null) {
      if (this.pluginType == 'youtube') {
        if (muted) {
          this.pluginApi.mute();
        } else {
          this.pluginApi.unMute();
        }
        this.muted = muted;
        this.dispatchEvent('volumechange');
      } else {
        this.pluginApi.setMuted(muted);
      }
      this.muted = muted;
    }
  },

  // additional non-HTML5 methods
  setVideoSize: function (width, height) {
    //if (this.pluginType == 'flash' || this.pluginType == 'silverlight') {
    if (this.pluginElement.style) {
      this.pluginElement.style.width = width + 'px';
      this.pluginElement.style.height = height + 'px';
    }
    if (this.pluginApi != null && this.pluginApi.setVideoSize) {
      this.pluginApi.setVideoSize(width, height);
    }
    //}
  },

  setFullscreen: function (fullscreen) {
    if (this.pluginApi != null && this.pluginApi.setFullscreen) {
      this.pluginApi.setFullscreen(fullscreen);
    }
  },

  enterFullScreen: function () {
    if (this.pluginApi != null && this.pluginApi.setFullscreen) {
      this.setFullscreen(true);
    }

  },

  exitFullScreen: function () {
    if (this.pluginApi != null && this.pluginApi.setFullscreen) {
      this.setFullscreen(false);
    }
  },

  // start: fake events
  addEventListener: function (eventName, callback, bubble) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
  },
  removeEventListener: function (eventName, callback) {
    if (!eventName) { this.events = {}; return true; }
    var callbacks = this.events[eventName];
    if (!callbacks) return true;
    if (!callback) { this.events[eventName] = []; return true; }
    for (i = 0; i < callbacks.length; i++) {
      if (callbacks[i] === callback) {
        this.events[eventName].splice(i, 1);
        return true;
      }
    }
    return false;
  },
  dispatchEvent: function (eventName) {
    var i,
			args,
			callbacks = this.events[eventName];

    if (callbacks) {
      args = Array.prototype.slice.call(arguments, 1);
      for (i = 0; i < callbacks.length; i++) {
        callbacks[i].apply(null, args);
      }
    }
  },
  // end: fake events

  remove: function () {
    mejs.Utility.removeSwf(this.pluginElement.id);
  }
};

// Handles calls from Flash/Silverlight and reports them as native <video/audio> events and properties
mejs.MediaPluginBridge = {

  pluginMediaElements: {},
  htmlMediaElements: {},

  registerPluginElement: function (id, pluginMediaElement, htmlMediaElement) {
    this.pluginMediaElements[id] = pluginMediaElement;
    this.htmlMediaElements[id] = htmlMediaElement;
  },

  // when Flash/Silverlight is ready, it calls out to this method
  initPlugin: function (id) {

    var pluginMediaElement = this.pluginMediaElements[id],
			htmlMediaElement = this.htmlMediaElements[id];

    if (pluginMediaElement) {
      // find the javascript bridge
      switch (pluginMediaElement.pluginType) {
        case "flash":
          pluginMediaElement.pluginElement = pluginMediaElement.pluginApi = document.getElementById(id);
          break;
        case "silverlight":
          pluginMediaElement.pluginElement = document.getElementById(pluginMediaElement.id);
          pluginMediaElement.pluginApi = pluginMediaElement.pluginElement.Content.MediaElementJS;
          break;
      }

      if (pluginMediaElement.pluginApi != null && pluginMediaElement.success) {
        pluginMediaElement.success(pluginMediaElement, htmlMediaElement);
      }
    }
  },

  // receives events from Flash/Silverlight and sends them out as HTML5 media events
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html
  fireEvent: function (id, eventName, values) {

    var
			e,
			i,
			bufferedTime,
			pluginMediaElement = this.pluginMediaElements[id];

    pluginMediaElement.ended = false;
    pluginMediaElement.paused = true;

    // fake event object to mimic real HTML media event.
    e = {
      type: eventName,
      target: pluginMediaElement
    };

    // attach all values to element and event object
    for (i in values) {
      pluginMediaElement[i] = values[i];
      e[i] = values[i];
    }

    // fake the newer W3C buffered TimeRange (loaded and total have been removed)
    bufferedTime = values.bufferedTime || 0;

    e.target.buffered = e.buffered = {
      start: function (index) {
        return 0;
      },
      end: function (index) {
        return bufferedTime;
      },
      length: 1
    };

    pluginMediaElement.dispatchEvent(e.type, e);
  }
};

/*
Default options
*/
mejs.MediaElementDefaults = {
  // allows testing on HTML5, flash, silverlight
  // auto: attempts to detect what the browser can do
  // native: forces HTML5 playback
  // shim: disallows HTML5, will attempt either Flash or Silverlight
  // none: forces fallback view
  mode: 'auto',
  // remove or reorder to change plugin priority and availability
  plugins: ['flash', 'silverlight', 'youtube', 'vimeo'],
  // shows debug errors on screen
  enablePluginDebug: false,
  // overrides the type specified, useful for dynamic instantiation
  type: '',
  // path to Flash and Silverlight plugins
  pluginPath: mejs.Utility.getScriptPath(['mediaelement.js', 'mediaelement.min.js', 'mediaelement-and-player.js', 'mediaelement-and-player.min.js']),
  // name of flash file
  flashName: '/ClientBin/flashmediaelement.swf',
  // turns on the smoothing filter in Flash
  enablePluginSmoothing: false,
  // name of silverlight file
  silverlightName: '/ClientBin/silverlightmediaelement.xap',
  // default if the <video width> is not specified
  defaultVideoWidth: 480,
  // default if the <video height> is not specified
  defaultVideoHeight: 270,
  // overrides <video width>
  pluginWidth: -1,
  // overrides <video height>
  pluginHeight: -1,
  // additional plugin variables in 'key=value' form
  pluginVars: [],
  // rate in milliseconds for Flash and Silverlight to fire the timeupdate event
  // larger number is less accurate, but less strain on plugin->JavaScript bridge
  timerRate: 250,
  // initial volume for player
  startVolume: 0.8,
  success: function () { },
  error: function () { }
};

/*
Determines if a browser supports the <video> or <audio> element
and returns either the native element or a Flash/Silverlight version that
mimics HTML5 MediaElement
*/
mejs.MediaElement = function (el, o) {
  return mejs.HtmlMediaElementShim.create(el, o);
};

mejs.HtmlMediaElementShim = {

  create: function (el, o) {
    var
			options = mejs.MediaElementDefaults,
			htmlMediaElement = (typeof (el) == 'string') ? document.getElementById(el) : el,
			tagName = htmlMediaElement.tagName.toLowerCase(),
			isMediaTag = (tagName === 'audio' || tagName === 'video'),
			src = (isMediaTag) ? htmlMediaElement.getAttribute('src') : htmlMediaElement.getAttribute('href'),
			poster = htmlMediaElement.getAttribute('poster'),
			autoplay = htmlMediaElement.getAttribute('autoplay'),
			preload = htmlMediaElement.getAttribute('preload'),
			controls = htmlMediaElement.getAttribute('controls'),
			playback,
			prop;

    // extend options
    for (prop in o) {
      options[prop] = o[prop];
    }
    // clean up attributes
    src = (typeof src == 'undefined' || src === null || src == '') ? null : src;
    poster = (typeof poster == 'undefined' || poster === null) ? '' : poster;
    preload = (typeof preload == 'undefined' || preload === null || preload === 'false') ? 'none' : preload;
    autoplay = !(typeof autoplay == 'undefined' || autoplay === null || autoplay != 'autoplay');
    controls = !(typeof controls == 'undefined' || controls === null || controls === 'false');

    // test for HTML5 and plugin capabilities
    playback = this.determinePlayback(htmlMediaElement, options, mejs.MediaFeatures.supportsMediaTag, isMediaTag, src);
    playback.url = (playback.url !== null) ? mejs.Utility.absolutizeUrl(playback.url) : '';

    if (playback.method == 'native') {
      // second fix for android
      if (mejs.MediaFeatures.isBustedAndroid) {
        htmlMediaElement.src = playback.url;
        htmlMediaElement.addEventListener('click', function () {
          htmlMediaElement.play();
        }, false);
      }

      // add methods to native HTMLMediaElement
      return this.updateNative(playback, options, autoplay, preload);
    } else if (playback.method !== '') {
      // create plugin to mimic HTMLMediaElement

      return this.createPlugin(playback, options, poster, autoplay, preload, controls);
    } else {
      // boo, no HTML5, no Flash, no Silverlight.
      this.createErrorMessage(playback, options, poster);

      return this;
    }
  },

  determinePlayback: function (htmlMediaElement, options, supportsMediaTag, isMediaTag, src) {
    var
			mediaFiles = [],
			i,
			j,
			k,
			l,
			n,
			type,
			result = { method: '', url: '', htmlMediaElement: htmlMediaElement, isVideo: (htmlMediaElement.tagName.toLowerCase() != 'audio') },
			pluginName,
			pluginVersions,
			pluginInfo,
			dummy;

    // STEP 1: Get URL and type from <video src> or <source src>

    // supplied type overrides <video type> and <source type>
    if (typeof options.type != 'undefined' && options.type !== '') {

      // accept either string or array of types
      if (typeof options.type == 'string') {
        mediaFiles.push({ type: options.type, url: src });
      } else {

        for (i = 0; i < options.type.length; i++) {
          mediaFiles.push({ type: options.type[i], url: src });
        }
      }

      // test for src attribute first
    } else if (src !== null) {
      type = this.formatType(src, htmlMediaElement.getAttribute('type'));
      mediaFiles.push({ type: type, url: src });

      // then test for <source> elements
    } else {
      // test <source> types to see if they are usable
      for (i = 0; i < htmlMediaElement.childNodes.length; i++) {
        n = htmlMediaElement.childNodes[i];
        if (n.nodeType == 1 && n.tagName.toLowerCase() == 'source') {
          src = n.getAttribute('src');
          type = this.formatType(src, n.getAttribute('type'));
          mediaFiles.push({ type: type, url: src });
        }
      }
    }

    // in the case of dynamicly created players
    // check for audio types
    if (!isMediaTag && mediaFiles.length > 0 && mediaFiles[0].url !== null && this.getTypeFromFile(mediaFiles[0].url).indexOf('audio') > -1) {
      result.isVideo = false;
    }


    // STEP 2: Test for playback method

    // special case for Android which sadly doesn't implement the canPlayType function (always returns '')
    if (mejs.MediaFeatures.isBustedAndroid) {
      htmlMediaElement.canPlayType = function (type) {
        return (type.match(/video\/(mp4|m4v)/gi) !== null) ? 'maybe' : '';
      };
    }


    // test for native playback first
    if (supportsMediaTag && (options.mode === 'auto' || options.mode === 'native')) {

      if (!isMediaTag) {

        // create a real HTML5 Media Element 
        dummy = document.createElement(result.isVideo ? 'video' : 'audio');
        htmlMediaElement.parentNode.insertBefore(dummy, htmlMediaElement);
        htmlMediaElement.style.display = 'none';

        // use this one from now on
        result.htmlMediaElement = htmlMediaElement = dummy;
      }

      for (i = 0; i < mediaFiles.length; i++) {
        // normal check
        if (htmlMediaElement.canPlayType(mediaFiles[i].type).replace(/no/, '') !== ''
          // special case for Mac/Safari 5.0.3 which answers '' to canPlayType('audio/mp3') but 'maybe' to canPlayType('audio/mpeg')
					|| htmlMediaElement.canPlayType(mediaFiles[i].type.replace(/mp3/, 'mpeg')).replace(/no/, '') !== '') {
          result.method = 'native';
          result.url = mediaFiles[i].url;
          break;
        }
      }

      if (result.method === 'native') {
        if (result.url !== null) {
          htmlMediaElement.src = result.url;
        }

        return result;
      }
    }

    // if native playback didn't work, then test plugins
    if (options.mode === 'auto' || options.mode === 'shim') {
      for (i = 0; i < mediaFiles.length; i++) {
        type = mediaFiles[i].type;

        // test all plugins in order of preference [silverlight, flash]
        for (j = 0; j < options.plugins.length; j++) {

          pluginName = options.plugins[j];

          // test version of plugin (for future features)
          pluginVersions = mejs.plugins[pluginName];

          for (k = 0; k < pluginVersions.length; k++) {
            pluginInfo = pluginVersions[k];

            // test if user has the correct plugin version

            // for youtube/vimeo
            if (pluginInfo.version == null ||

							mejs.PluginDetector.hasPluginVersion(pluginName, pluginInfo.version)) {

              // test for plugin playback types
              for (l = 0; l < pluginInfo.types.length; l++) {
                // find plugin that can play the type
                if (type == pluginInfo.types[l]) {
                  result.method = pluginName;
                  result.url = mediaFiles[i].url;
                  return result;
                }
              }
            }
          }
        }
      }
    }

    // what if there's nothing to play? just grab the first available
    if (result.method === '' && mediaFiles.length > 0) {
      result.url = mediaFiles[0].url;
    }

    return result;
  },

  formatType: function (url, type) {
    var ext;

    // if no type is supplied, fake it with the extension
    if (url && !type) {
      return this.getTypeFromFile(url);
    } else {
      // only return the mime part of the type in case the attribute contains the codec
      // see http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html#the-source-element
      // `video/mp4; codecs="avc1.42E01E, mp4a.40.2"` becomes `video/mp4`

      if (type && ~type.indexOf(';')) {
        return type.substr(0, type.indexOf(';'));
      } else {
        return type;
      }
    }
  },

  getTypeFromFile: function (url) {
    var ext = url.substring(url.lastIndexOf('.') + 1);
    return (/(mp4|m4v|ogg|ogv|webm|flv|wmv|mpeg|mov)/gi.test(ext) ? 'video' : 'audio') + '/' + ext;
  },

  createErrorMessage: function (playback, options, poster) {
    var
			htmlMediaElement = playback.htmlMediaElement,
			errorContainer = document.createElement('div');

    errorContainer.className = 'me-cannotplay';

    try {
      errorContainer.style.width = htmlMediaElement.width + 'px';
      errorContainer.style.height = htmlMediaElement.height + 'px';
    } catch (e) { }

    errorContainer.innerHTML = (poster !== '') ?
			'<a href="' + playback.url + '"><img src="' + poster + '" /></a>' :
			'<a href="' + playback.url + '"><span>Download File</span></a>';

    htmlMediaElement.parentNode.insertBefore(errorContainer, htmlMediaElement);
    htmlMediaElement.style.display = 'none';

    options.error(htmlMediaElement);
  },

  createPlugin: function (playback, options, poster, autoplay, preload, controls) {
    var
			htmlMediaElement = playback.htmlMediaElement,
			width = 1,
			height = 1,
			pluginid = 'me_' + playback.method + '_' + (mejs.meIndex++),
			pluginMediaElement = new mejs.PluginMediaElement(pluginid, playback.method, playback.url),
			container = document.createElement('div'),
			specialIEContainer,
			node,
			initVars;

    // check for placement inside a <p> tag (sometimes WYSIWYG editors do this)
    node = htmlMediaElement.parentNode;
    while (node !== null && node.tagName.toLowerCase() != 'body') {
      if (node.parentNode.tagName.toLowerCase() == 'p') {
        node.parentNode.parentNode.insertBefore(node, node.parentNode);
        break;
      }
      node = node.parentNode;
    }

    if (playback.isVideo) {
      width = (options.videoWidth > 0) ? options.videoWidth : ($(htmlMediaElement).css('width') !== null) ? $(htmlMediaElement).css('width') : options.defaultVideoWidth;
      height = (options.videoHeight > 0) ? options.videoHeight : ($(htmlMediaElement).css('height') !== null) ? $(htmlMediaElement).css('height') : options.defaultVideoHeight;

      // in case of '%' make sure it's encoded
      width = mejs.Utility.encodeUrl(width);
      height = mejs.Utility.encodeUrl(height);

    } else {
      if (options.enablePluginDebug) {
        width = 320;
        height = 240;
      }
    }

    // register plugin
    pluginMediaElement.success = options.success;
    mejs.MediaPluginBridge.registerPluginElement(pluginid, pluginMediaElement, htmlMediaElement);

    // add container (must be added to DOM before inserting HTML for IE)
    container.className = 'me-plugin';
    container.id = pluginid + '_container';

    if (playback.isVideo) {
      htmlMediaElement.parentNode.insertBefore(container, htmlMediaElement);
    } else {
      document.body.insertBefore(container, document.body.childNodes[0]);
    }
    // flash/silverlight vars
    initVars = [
			'id=' + pluginid,
			'isvideo=' + ((playback.isVideo) ? "true" : "false"),
			'autoplay=' + ((autoplay) ? "true" : "false"),
			'preload=' + preload,
			'width=' + width,
			'startvolume=' + options.startVolume,
			'timerrate=' + options.timerRate,
			'height=' + height];


    if (playback.url !== null) {
      if (playback.method == 'flash') {

        initVars.push('file=' + mejs.Utility.encodeUrl(playback.url));
      } else {
        initVars.push('file=' + playback.url);
      }
    }
    if (options.enablePluginDebug) {
      initVars.push('debug=true');
    }
    if (options.enablePluginSmoothing) {
      initVars.push('smoothing=true');
    }
    if (controls) {
      initVars.push('controls=true'); // shows controls in the plugin if desired
    }
    if (options.pluginVars) {
      initVars = initVars.concat(options.pluginVars);
    }

    switch (playback.method) {
      case 'silverlight':
        container.innerHTML =
'<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + pluginid + '" name="' + pluginid + '" width="' + width + '" height="' + height + '">' +
'<param name="initParams" value="' + initVars.join(',') + '" />' +
'<param name="windowless" value="true" />' +
'<param name="background" value="black" />' +
'<param name="minRuntimeVersion" value="3.0.0.0" />' +
'<param name="autoUpgrade" value="true" />' +
'<param name="source" value="' + options.pluginPath + options.silverlightName + '" />' +
'</object>';
       
        break;

      case 'flash':

        if (mejs.MediaFeatures.isIE) {
          specialIEContainer = document.createElement('div');
          container.appendChild(specialIEContainer);
          specialIEContainer.outerHTML =
'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' +
'id="' + pluginid + '" width="' + width + '" height="' + height + '">' +
'<param name="movie" value="' + options.pluginPath + options.flashName + '?x=' + (new Date()) + '" />' +
'<param name="flashvars" value="' + initVars.join('&amp;') + '" />' +
'<param name="quality" value="high" />' +
'<param name="bgcolor" value="#000000" />' +
'<param name="wmode" value="transparent" />' +
'<param name="allowScriptAccess" value="always" />' +
'<param name="allowFullScreen" value="true" />' +
'</object>';

        } else {

          container.innerHTML =
'<embed id="' + pluginid + '" name="' + pluginid + '" ' +
'play="true" ' +
'loop="false" ' +
'quality="high" ' +
'bgcolor="#000000" ' +
'wmode="transparent" ' +
'allowScriptAccess="always" ' +
'allowFullScreen="true" ' +
'type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" ' +
'src="' + options.pluginPath + options.flashName + '" ' +
'flashvars="' + initVars.join('&') + '" ' +
'width="' + width + '" ' +
'height="' + height + '"></embed>';
        }
        break;

      case 'youtube':


        var
					videoId = playback.url.substr(playback.url.lastIndexOf('=') + 1);
        youtubeSettings = {
          container: container,
          containerId: container.id,
          pluginMediaElement: pluginMediaElement,
          pluginId: pluginid,
          videoId: videoId,
          height: height,
          width: width
        };

        if (mejs.PluginDetector.hasPluginVersion('flash', [10, 0, 0])) {
          mejs.YouTubeApi.createFlash(youtubeSettings);
        } else {
          mejs.YouTubeApi.enqueueIframe(youtubeSettings);
        }

        break;

        // DEMO Code. Does NOT work.   
      case 'vimeo':
        console.log('vimeoid');

        pluginMediaElement.vimeoid = playback.url.substr(playback.url.lastIndexOf('/') + 1);

        container.innerHTML =
					'<object width="' + width + '" height="' + height + '">' +
						'<param name="allowfullscreen" value="true" />' +
						'<param name="allowscriptaccess" value="always" />' +
						'<param name="flashvars" value="api=1" />' +
						'<param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=' + pluginMediaElement.vimeoid + '&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=00adef&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" />' +
						'<embed src="//vimeo.com/moogaloop.swf?api=1&amp;clip_id=' + pluginMediaElement.vimeoid + '&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=00adef&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="' + width + '" height="' + height + '"></embed>' +
					'</object>';

        break;
    }
    // hide original element
    htmlMediaElement.style.display = 'none';

    // FYI: options.success will be fired by the MediaPluginBridge

    return pluginMediaElement;
  },

  updateNative: function (playback, options, autoplay, preload) {

    var htmlMediaElement = playback.htmlMediaElement,
			m;


    // add methods to video object to bring it into parity with Flash Object
    for (m in mejs.HtmlMediaElement) {
      htmlMediaElement[m] = mejs.HtmlMediaElement[m];
    }

    /*
    Chrome now supports preload="none"
    if (mejs.MediaFeatures.isChrome) {
		
    // special case to enforce preload attribute (Chrome doesn't respect this)
    if (preload === 'none' && !autoplay) {
			
    // forces the browser to stop loading (note: fails in IE9)
    htmlMediaElement.src = '';
    htmlMediaElement.load();
    htmlMediaElement.canceledPreload = true;

    htmlMediaElement.addEventListener('play',function() {
    if (htmlMediaElement.canceledPreload) {
    htmlMediaElement.src = playback.url;
    htmlMediaElement.load();
    htmlMediaElement.play();
    htmlMediaElement.canceledPreload = false;
    }
    }, false);
    // for some reason Chrome forgets how to autoplay sometimes.
    } else if (autoplay) {
    htmlMediaElement.load();
    htmlMediaElement.play();
    }
    }
    */

    // fire success code
    options.success(htmlMediaElement, htmlMediaElement);

    return htmlMediaElement;
  }
};

/*
- test on IE (object vs. embed)
- determine when to use iframe (Firefox, Safari, Mobile) vs. Flash (Chrome, IE)
- fullscreen?
*/

// YouTube Flash and Iframe API
mejs.YouTubeApi = {
  isIframeStarted: false,
  isIframeLoaded: false,
  loadIframeApi: function () {
    if (!this.isIframeStarted) {
      var tag = document.createElement('script');
      tag.src = "http://www.youtube.com/player_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      this.isIframeStarted = true;
    }
  },
  iframeQueue: [],
  enqueueIframe: function (yt) {

    if (this.isLoaded) {
      this.createIframe(yt);
    } else {
      this.loadIframeApi();
      this.iframeQueue.push(yt);
    }
  },
  createIframe: function (settings) {

    var
		pluginMediaElement = settings.pluginMediaElement,
		player = new YT.Player(settings.containerId, {
		  height: settings.height,
		  width: settings.width,
		  videoId: settings.videoId,
		  playerVars: { controls: 0 },
		  events: {
		    'onReady': function () {

		      // hook up iframe object to MEjs
		      settings.pluginMediaElement.pluginApi = player;

		      // init mejs
		      mejs.MediaPluginBridge.initPlugin(settings.pluginId);

		      // create timer
		      setInterval(function () {
		        mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'timeupdate');
		      }, 250);
		    },
		    'onStateChange': function (e) {

		      mejs.YouTubeApi.handleStateChange(e.data, player, pluginMediaElement);

		    }
		  }
		});
  },

  createEvent: function (player, pluginMediaElement, eventName) {
    var obj = {
      type: eventName,
      target: pluginMediaElement
    };

    if (player && player.getDuration) {

      // time 
      pluginMediaElement.currentTime = obj.currentTime = player.getCurrentTime();
      pluginMediaElement.duration = obj.duration = player.getDuration();

      // state
      obj.paused = pluginMediaElement.paused;
      obj.ended = pluginMediaElement.ended;

      // sound
      obj.muted = player.isMuted();
      obj.volume = player.getVolume() / 100;

      // progress
      obj.bytesTotal = player.getVideoBytesTotal();
      obj.bufferedBytes = player.getVideoBytesLoaded();

      // fake the W3C buffered TimeRange
      var bufferedTime = obj.bufferedBytes / obj.bytesTotal * obj.duration;

      obj.target.buffered = obj.buffered = {
        start: function (index) {
          return 0;
        },
        end: function (index) {
          return bufferedTime;
        },
        length: 1
      };

    }

    // send event up the chain
    pluginMediaElement.dispatchEvent(obj.type, obj);
  },

  iFrameReady: function () {

    this.isIframeLoaded = true;

    while (this.iframeQueue.length > 0) {
      var settings = this.iframeQueue.pop();
      this.createIframe(settings);
    }
  },

  // FLASH!
  flashPlayers: {},
  createFlash: function (settings) {

    this.flashPlayers[settings.pluginId] = settings;

    /*
    settings.container.innerHTML =
    '<object type="application/x-shockwave-flash" id="' + settings.pluginId + '" data="//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=' + settings.pluginId  + '&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0" ' +
    'width="' + settings.width + '" height="' + settings.height + '" style="visibility: visible; ">' +
    '<param name="allowScriptAccess" value="always">' +
    '<param name="wmode" value="transparent">' +
    '</object>';
    */

    var specialIEContainer,
			youtubeUrl = 'http://www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=' + settings.pluginId + '&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0';

    if (mejs.MediaFeatures.isIE) {

      specialIEContainer = document.createElement('div');
      settings.container.appendChild(specialIEContainer);
      specialIEContainer.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' +
'id="' + settings.pluginId + '" width="' + settings.width + '" height="' + settings.height + '">' +
	'<param name="movie" value="' + youtubeUrl + '" />' +
	'<param name="wmode" value="transparent" />' +
	'<param name="allowScriptAccess" value="always" />' +
	'<param name="allowFullScreen" value="true" />' +
'</object>';
    } else {
      settings.container.innerHTML =
			'<object type="application/x-shockwave-flash" id="' + settings.pluginId + '" data="' + youtubeUrl + '" ' +
				'width="' + settings.width + '" height="' + settings.height + '" style="visibility: visible; ">' +
				'<param name="allowScriptAccess" value="always">' +
				'<param name="wmode" value="transparent">' +
			'</object>';
    }

  },

  flashReady: function (id) {
    var
			settings = this.flashPlayers[id],
			player = document.getElementById(id),
			pluginMediaElement = settings.pluginMediaElement;

    // hook up and return to MediaELementPlayer.success	
    pluginMediaElement.pluginApi =
		pluginMediaElement.pluginElement = player;
    mejs.MediaPluginBridge.initPlugin(id);

    // load the youtube video
    player.cueVideoById(settings.videoId);

    var callbackName = settings.containerId + '_callback'

    window[callbackName] = function (e) {
      mejs.YouTubeApi.handleStateChange(e, player, pluginMediaElement);
    }

    player.addEventListener('onStateChange', callbackName);

    setInterval(function () {
      mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'timeupdate');
    }, 250);
  },

  handleStateChange: function (youTubeState, player, pluginMediaElement) {
    switch (youTubeState) {
      case -1: // not started
        pluginMediaElement.paused = true;
        pluginMediaElement.ended = true;
        mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'loadedmetadata');
        //createYouTubeEvent(player, pluginMediaElement, 'loadeddata');
        break;
      case 0:
        pluginMediaElement.paused = false;
        pluginMediaElement.ended = true;
        mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'ended');
        break;
      case 1:
        pluginMediaElement.paused = false;
        pluginMediaElement.ended = false;
        mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'play');
        mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'playing');
        break;
      case 2:
        pluginMediaElement.paused = true;
        pluginMediaElement.ended = false;
        mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'pause');
        break;
      case 3: // buffering
        mejs.YouTubeApi.createEvent(player, pluginMediaElement, 'progress');
        break;
      case 5:
        // cued?
        break;

    }

  }
}
// IFRAME
function onYouTubePlayerAPIReady() {
  mejs.YouTubeApi.iFrameReady();
}
// FLASH
function onYouTubePlayerReady(id) {
  mejs.YouTubeApi.flashReady(id);
}

window.mejs = mejs;
window.MediaElement = mejs.MediaElement;

/*!
* MediaElementPlayer
* http://mediaelementjs.com/
*
* Creates a controller bar for HTML5 <video> add <audio> tags
* using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
*
* Copyright 2010-2012, John Dyer (http://j.hn/)
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/
if (typeof jQuery != 'undefined') {
  mejs.$ = jQuery;
} else if (typeof ender != 'undefined') {
  mejs.$ = ender;
}
(function ($) {

  // default player values
  mejs.MepDefaults = {
    // url to poster (to fix iOS 3.x)
    poster: '',
    // default if the <video width> is not specified
    defaultVideoWidth: 480,
    // default if the <video height> is not specified
    defaultVideoHeight: 270,
    // if set, overrides <video width>
    videoWidth: -1,
    // if set, overrides <video height>
    videoHeight: -1,
    // default if the user doesn't specify
    defaultAudioWidth: 400,
    // default if the user doesn't specify
    defaultAudioHeight: 30,
    // width of audio player
    audioWidth: -1,
    // height of audio player
    audioHeight: -1,
    // initial volume when the player starts (overrided by user cookie)
    startVolume: 0.8,
    // useful for <audio> player loops
    loop: false,
    // resize to media dimensions
    enableAutosize: true,
    // forces the hour marker (##:00:00)
    alwaysShowHours: false,

    // show framecount in timecode (##:00:00:00)
    showTimecodeFrameCount: false,
    // used when showTimecodeFrameCount is set to true
    framesPerSecond: 25,

    // automatically calculate the width of the progress bar based on the sizes of other elements
    autosizeProgress: true,
    // Hide controls when playing and mouse is not over the video
    alwaysShowControls: false,
    // force iPad's native controls
    iPadUseNativeControls: false,
    // force iPad's native controls
    iPhoneUseNativeControls: false,
    // force iPad's native controls
    AndroidUseNativeControls: false,
    // features to show
    features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'fullscreen'],
    // only for dynamic
    isVideo: true,

    // turns keyboard support on and off for this instance
    enableKeyboard: true,

    // whenthis player starts, it will pause other players
    pauseOtherPlayers: true,

    // array of keyboard actions such as play pause
    keyActions: [
				{
				  keys: [
								32, // SPACE
								179 // GOOGLE play/pause button
				  ],
				  action: function (player, media) {
				    if (media.paused || media.ended) {
				      media.play();
				    } else {
				      media.pause();
				    }
				  }
				},
				{
				  keys: [38], // UP
				  action: function (player, media) {
				    var newVolume = Math.min(media.volume + 0.1, 1);
				    media.setVolume(newVolume);
				  }
				},
				{
				  keys: [40], // DOWN
				  action: function (player, media) {
				    var newVolume = Math.max(media.volume - 0.1, 0);
				    media.setVolume(newVolume);
				  }
				},
				{
				  keys: [
								37, // LEFT
								227 // Google TV rewind
				  ],
				  action: function (player, media) {
				    if (!isNaN(media.duration) && media.duration > 0) {
				      if (player.isVideo) {
				        player.showControls();
				        player.startControlsTimer();
				      }

				      // 5%
				      var newTime = Math.min(media.currentTime - (media.duration * 0.05), media.duration);
				      media.setCurrentTime(newTime);
				    }
				  }
				},
				{
				  keys: [
								39, // RIGHT
								228 // Google TV forward
				  ],
				  action: function (player, media) {
				    if (!isNaN(media.duration) && media.duration > 0) {
				      if (player.isVideo) {
				        player.showControls();
				        player.startControlsTimer();
				      }

				      // 5%
				      var newTime = Math.max(media.currentTime + (media.duration * 0.05), 0);
				      media.setCurrentTime(newTime);
				    }
				  }
				},
				{
				  keys: [70], // f
				  action: function (player, media) {
				    if (typeof player.enterFullScreen != 'undefined') {
				      if (player.isFullScreen) {
				        player.exitFullScreen();
				      } else {
				        player.enterFullScreen();
				      }
				    }
				  }
				}
    ]
  };

  mejs.mepIndex = 0;

  mejs.players = [];

  // wraps a MediaElement object in player controls
  mejs.MediaElementPlayer = function (node, o) {
    // enforce object, even without "new" (via John Resig)
    if (!(this instanceof mejs.MediaElementPlayer)) {
      return new mejs.MediaElementPlayer(node, o);
    }

    var t = this;

    // these will be reset after the MediaElement.success fires
    t.$media = t.$node = $(node);
    t.node = t.media = t.$media[0];

    // check for existing player
    if (typeof t.node.player != 'undefined') {
      return t.node.player;
    } else {
      // attach player to DOM node for reference
      t.node.player = t;
    }


    // try to get options from data-mejsoptions
    if (typeof o == 'undefined') {
      o = t.$node.data('mejsoptions');
    }

    // extend default options
    t.options = $.extend({}, mejs.MepDefaults, o);

    // add to player array (for focus events)
    mejs.players.push(t);

    // start up
    t.init();

    return t;
  };

  // actual player
  mejs.MediaElementPlayer.prototype = {

    hasFocus: false,

    controlsAreVisible: true,

    init: function () {

      var
				t = this,
				mf = mejs.MediaFeatures,
      // options for MediaElement (shim)
				meOptions = $.extend(true, {}, t.options, {
				  success: function (media, domNode) { t.meReady(media, domNode); },
				  error: function (e) { t.handleError(e); }
				}),
				tagName = t.media.tagName.toLowerCase();

      t.isDynamic = (tagName !== 'audio' && tagName !== 'video');

      if (t.isDynamic) {
        // get video from src or href?				
        t.isVideo = t.options.isVideo;
      } else {
        t.isVideo = (tagName !== 'audio' && t.options.isVideo);
      }

      // use native controls in iPad, iPhone, and Android	
      if ((mf.isiPad && t.options.iPadUseNativeControls) || (mf.isiPhone && t.options.iPhoneUseNativeControls)) {

        // add controls and stop
        t.$media.attr('controls', 'controls');

        // attempt to fix iOS 3 bug
        //t.$media.removeAttr('poster');
        // no Issue found on iOS3 -ttroxell

        // override Apple's autoplay override for iPads
        if (mf.isiPad && t.media.getAttribute('autoplay') !== null) {
          t.media.load();
          t.media.play();
        }

      } else if (mf.isAndroid && t.AndroidUseNativeControls) {

        // leave default player

      } else {

        // DESKTOP: use MediaElementPlayer controls

        // remove native controls 			
        t.$media.removeAttr('controls');

        // unique ID
        t.id = 'mep_' + mejs.mepIndex++;

        // build container
        t.container =
					$('<div id="' + t.id + '" class="mejs-container">' +
						'<div class="mejs-inner">' +
							'<div class="mejs-mediaelement"></div>' +
							'<div class="mejs-layers"></div>' +
							'<div class="mejs-controls"></div>' +
							'<div class="mejs-clear"></div>' +
						'</div>' +
					'</div>')
					.addClass(t.$media[0].className)
					.insertBefore(t.$media);

        // add classes for user and content
        t.container.addClass(
					(mf.isAndroid ? 'mejs-android ' : '') +
					(mf.isiOS ? 'mejs-ios ' : '') +
					(mf.isiPad ? 'mejs-ipad ' : '') +
					(mf.isiPhone ? 'mejs-iphone ' : '') +
					(t.isVideo ? 'mejs-video ' : 'mejs-audio ')
				);


        // move the <video/video> tag into the right spot
        if (mf.isiOS) {

          // sadly, you can't move nodes in iOS, so we have to destroy and recreate it!
          var $newMedia = t.$media.clone();

          t.container.find('.mejs-mediaelement').append($newMedia);

          t.$media.remove();
          t.$node = t.$media = $newMedia;
          t.node = t.media = $newMedia[0]

        } else {

          // normal way of moving it into place (doesn't work on iOS)
          t.container.find('.mejs-mediaelement').append(t.$media);
        }

        // find parts
        t.controls = t.container.find('.mejs-controls');
        t.layers = t.container.find('.mejs-layers');

        // determine the size

        /* size priority:
        (1) videoWidth (forced), 
        (2) style="width;height;"
        (3) width attribute,
        (4) defaultVideoWidth (for unspecified cases)
        */

        var capsTagName = tagName.substring(0, 1).toUpperCase() + tagName.substring(1);
        if (t.options[tagName + 'Width'] > 0 || t.options[tagName + 'Width'].toString().indexOf('%') > -1) {
          t.width = t.options[tagName + 'Width'];
        } else if ($(t.media).css("width") !== '0px' && $(t.media).css("width") !== null) {
          t.width = $(t.media).css("width")
        } else if (t.media.getAttribute('width') !== null) {
          t.width = t.$media.attr('width');
        } else {
          t.width = t.options['default' + capsTagName + 'Width'];
        }

        if (t.options[tagName + 'Height'] > 0 || t.options[tagName + 'Height'].toString().indexOf('%') > -1) {
          t.height = t.options[tagName + 'Height'];
        } else if ($(t.media).css("height") !== '0px' && $(t.media).css("height") !== null) {
          t.height = $(t.media).css("height")
        } else if (t.$media[0].getAttribute('height') !== null) {
          t.height = t.$media.attr('height');
        } else {
          t.height = t.options['default' + capsTagName + 'Height'];
        }

        // set the size, while we wait for the plugins to load below
        t.setPlayerSize(t.width, t.height);

        // create MediaElementShim
        meOptions.pluginWidth = t.height;
        meOptions.pluginHeight = t.width;
      }



      // create MediaElement shim
      mejs.MediaElement(t.$media[0], meOptions);
    },

    showControls: function (doAnimation) {
      var t = this;

      doAnimation = typeof doAnimation == 'undefined' || doAnimation;

      if (t.controlsAreVisible)
        return;

      if (doAnimation) {
        t.controls
					.css('visibility', 'visible')
					.stop(true, true).fadeIn(200, function () { t.controlsAreVisible = true; });

        // any additional controls people might add and want to hide
        t.container.find('.mejs-control')
					.css('visibility', 'visible')
					.stop(true, true).fadeIn(200, function () { t.controlsAreVisible = true; });

      } else {
        t.controls
					.css('visibility', 'visible')
					.css('display', 'block');

        // any additional controls people might add and want to hide
        t.container.find('.mejs-control')
					.css('visibility', 'visible')
					.css('display', 'block');

        t.controlsAreVisible = true;
      }

      t.setControlsSize();

    },

    hideControls: function (doAnimation) {
      var t = this;

      doAnimation = typeof doAnimation == 'undefined' || doAnimation;

      if (!t.controlsAreVisible)
        return;

      if (doAnimation) {
        // fade out main controls
        t.controls.stop(true, true).fadeOut(200, function () {
          $(this)
						.css('visibility', 'hidden')
						.css('display', 'block');

          t.controlsAreVisible = false;
        });

        // any additional controls people might add and want to hide
        t.container.find('.mejs-control').stop(true, true).fadeOut(200, function () {
          $(this)
						.css('visibility', 'hidden')
						.css('display', 'block');
        });
      } else {

        // hide main controls
        t.controls
					.css('visibility', 'hidden')
					.css('display', 'block');

        // hide others
        t.container.find('.mejs-control')
					.css('visibility', 'hidden')
					.css('display', 'block');

        t.controlsAreVisible = false;
      }
    },

    controlsTimer: null,

    startControlsTimer: function (timeout) {

      var t = this;

      timeout = typeof timeout != 'undefined' ? timeout : 1500;

      t.killControlsTimer('start');

      t.controlsTimer = setTimeout(function () {
        //console.log('timer fired');
        t.hideControls();
        t.killControlsTimer('hide');
      }, timeout);
    },

    killControlsTimer: function (src) {

      var t = this;

      if (t.controlsTimer !== null) {
        clearTimeout(t.controlsTimer);
        delete t.controlsTimer;
        t.controlsTimer = null;
      }
    },

    controlsEnabled: true,

    disableControls: function () {
      var t = this;

      t.killControlsTimer();
      t.hideControls(false);
      this.controlsEnabled = false;
    },

    enableControls: function () {
      var t = this;

      t.showControls(false);

      t.controlsEnabled = true;
    },


    // Sets up all controls and events
    meReady: function (media, domNode) {


      var t = this,
				mf = mejs.MediaFeatures,
				autoplayAttr = domNode.getAttribute('autoplay'),
				autoplay = !(typeof autoplayAttr == 'undefined' || autoplayAttr === null || autoplayAttr === 'false'),
				featureIndex,
				feature;

      // make sure it can't create itself again if a plugin reloads
      if (t.created)
        return;
      else
        t.created = true;

      t.media = media;
      t.domNode = domNode;

      if (!(mf.isAndroid && t.options.AndroidUseNativeControls) && !(mf.isiPad && t.options.iPadUseNativeControls) && !(mf.isiPhone && t.options.iPhoneUseNativeControls)) {

        // two built in features
        t.buildposter(t, t.controls, t.layers, t.media);
        t.buildkeyboard(t, t.controls, t.layers, t.media);
        t.buildoverlays(t, t.controls, t.layers, t.media);

        // grab for use by features
        t.findTracks();

        // add user-defined features/controls
        for (featureIndex in t.options.features) {
          feature = t.options.features[featureIndex];
          if (t['build' + feature]) {
            try {
              t['build' + feature](t, t.controls, t.layers, t.media);
            } catch (e) {
              // TODO: report control error
              //throw e;
              //console.log('error building ' + feature);
              //console.log(e);
            }
          }
        }

        t.container.trigger('controlsready');

        // reset all layers and controls
        t.setPlayerSize(t.width, t.height);
        t.setControlsSize();


        // controls fade
        if (t.isVideo) {

          if (mejs.MediaFeatures.hasTouch) {

            // for touch devices (iOS, Android)
            // show/hide without animation on touch

            t.$media.bind('touchstart', function () {


              // toggle controls
              if (t.controlsAreVisible) {
                t.hideControls(false);
              } else {
                if (t.controlsEnabled) {
                  t.showControls(false);
                }
              }
            });

          } else {
            // click controls
            var clickElement = (t.media.pluginType == 'native') ? t.$media : $(t.media.pluginElement);

            // click to play/pause
            clickElement.click(function () {
              if (media.paused) {
                media.play();
              } else {
                media.pause();
              }
            });


            // show/hide controls
            t.container
							.bind('mouseenter mouseover', function () {
							  if (t.controlsEnabled) {
							    if (!t.options.alwaysShowControls) {
							      t.killControlsTimer('enter');
							      t.showControls();
							      t.startControlsTimer(2500);
							    }
							  }
							})
							.bind('mousemove', function () {
							  if (t.controlsEnabled) {
							    if (!t.controlsAreVisible) {
							      t.showControls();
							    }
							    //t.killControlsTimer('move');
							    if (!t.options.alwaysShowControls) {
							      t.startControlsTimer(2500);
							    }
							  }
							})
							.bind('mouseleave', function () {
							  if (t.controlsEnabled) {
							    if (!t.media.paused && !t.options.alwaysShowControls) {
							      t.startControlsTimer(1000);
							    }
							  }
							});
          }

          // check for autoplay
          if (autoplay && !t.options.alwaysShowControls) {
            t.hideControls();
          }

          // resizer
          /*
          if (t.options.enableAutosize) {
            t.media.addEventListener('loadedmetadata', function (e) {
              // if the <video height> was not set and the options.videoHeight was not set
              // then resize to the real dimensions
              if (t.options.videoHeight <= 0 && t.domNode.getAttribute('height') === null && !isNaN(e.target.videoHeight)) {
                t.setPlayerSize(e.target.videoWidth, e.target.videoHeight);
                t.setControlsSize();
                t.media.setVideoSize(e.target.videoWidth, e.target.videoHeight);
              }
            }, false);
          }
          */
        }

        // EVENTS

        // FOCUS: when a video starts playing, it takes focus from other players (possibily pausing them)
        media.addEventListener('play', function () {

          // go through all other players
          for (var i = 0, il = mejs.players.length; i < il; i++) {
            var p = mejs.players[i];
            if (p.id != t.id && t.options.pauseOtherPlayers && !p.paused && !p.ended) {
              p.pause();
            }
            p.hasFocus = false;
          }

          t.hasFocus = true;
        }, false);


        // ended for all
        t.media.addEventListener('ended', function (e) {
          try {
            t.media.setCurrentTime(0);
          } catch (exp) {

          }
          t.media.pause();

          if (t.setProgressRail)
            t.setProgressRail();
          if (t.setCurrentRail)
            t.setCurrentRail();

          if (t.options.loop) {
            t.media.play();
          } else if (!t.options.alwaysShowControls && t.controlsEnabled) {
            t.showControls();
          }
        }, false);

        // resize on the first play
        t.media.addEventListener('loadedmetadata', function (e) {
          if (t.updateDuration) {
            t.updateDuration();
          }
          if (t.updateCurrent) {
            t.updateCurrent();
          }

          if (!t.isFullScreen) {
            t.setPlayerSize(t.width, t.height);
            t.setControlsSize();
          }
        }, false);


        // webkit has trouble doing this without a delay
        setTimeout(function () {
          t.setPlayerSize(t.width, t.height);
          t.setControlsSize();
        }, 50);

        // adjust controls whenever window sizes (used to be in fullscreen only)
        $(window).resize(function () {

          // don't resize for fullscreen mode				
          if (!(t.isFullScreen || (mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen))) {
            t.setPlayerSize(t.width, t.height);
          }

          // always adjust controls
          t.setControlsSize();
        });

        // TEMP: needs to be moved somewhere else
        if (t.media.pluginType == 'youtube') {
          t.container.find('.mejs-overlay-play').hide();
        }
      }

      // force autoplay for HTML5
      if (autoplay && media.pluginType == 'native') {
        media.load();
        media.play();
      }


      if (t.options.success) {

        if (typeof t.options.success == 'string') {
          window[t.options.success](t.media, t.domNode, t);
        } else {
          t.options.success(t.media, t.domNode, t);
        }
      }
    },

    handleError: function (e) {
      var t = this;

      t.controls.hide();

      // Tell user that the file cannot be played
      if (t.options.error) {
        t.options.error(e);
      }
    },
    //Note(sjoyal) : creation d'une nouvelle fonction pour resizer le player car l'autre fonction setPlayerSize n'utilise pas ses arguments
    changePlayerSize: function (width, height) {
      var t = this;
      t.width = width + "px";
      t.height = height + "px";
      t.container.width(width).height(height);

      // set native <video>
      t.$media
        .width(width)
        .height(height);

      // set shims
      t.container.find('object, embed, iframe')
        .width(width)
        .height(height);

      // if shim is ready, send the size to the embeded plugin	
      if (t.media.setVideoSize)
        t.media.setVideoSize(width, height);

      t.layers.children('.mejs-layer').width(t.width).height(t.height);
    },


    setPlayerSize: function (width, height) {
      var t = this;

      // testing for 100% code
      if (t.height.toString().indexOf('%') > 0) {

        // do we have the native dimensions yet?
        var
					nativeWidth = (t.media.videoWidth && t.media.videoWidth > 0) ? t.media.videoWidth : t.options.defaultVideoWidth,
					nativeHeight = (t.media.videoHeight && t.media.videoHeight > 0) ? t.media.videoHeight : t.options.defaultVideoHeight,
					parentWidth = t.container.parent().width(),
					newHeight = parseInt(parentWidth * nativeHeight / nativeWidth, 10);

        if (t.container.parent()[0].tagName.toLowerCase() === 'body') { // && t.container.siblings().count == 0) {
          parentWidth = $(window).width();
          newHeight = $(window).height();
        }


        // set outer container size
        t.container
					.width(parentWidth)
					.height(newHeight);

        // set native <video>
        t.$media
					.width('100%')
					.height('100%');

        // set shims
        t.container.find('object, embed, iframe')
					.width('100%')
					.height('100%');

        // if shim is ready, send the size to the embeded plugin	
        if (t.media.setVideoSize)
          t.media.setVideoSize(parentWidth, newHeight);

        // set the layers
        t.layers.children('.mejs-layer')
					.width('100%')
					.height('100%');


      } else {

        t.container
					.width(t.width)
					.height(t.height);

        t.layers.children('.mejs-layer')
					.width(t.width)
					.height(t.height);

      }
    },

    setControlsSize: function () {
      var t = this,
				usedWidth = 0,
				railWidth = 0,
				rail = t.controls.find('.mejs-time-rail'),
				total = t.controls.find('.mejs-time-total'),
				current = t.controls.find('.mejs-time-current'),
				loaded = t.controls.find('.mejs-time-loaded');
      others = rail.siblings();


      // allow the size to come from custom CSS
      if (t.options && !t.options.autosizeProgress) {
        // Also, frontends devs can be more flexible 
        // due the opportunity of absolute positioning.
        railWidth = parseInt(rail.css('width'));
      }

      // attempt to autosize
      if (railWidth === 0 || !railWidth) {

        // find the size of all the other controls besides the rail
        others.each(function () {
          if ($(this).css('position') != 'absolute') {
            usedWidth += $(this).outerWidth(true);
          }
        });

        // fit the rail into the remaining space
        railWidth = t.controls.width() - usedWidth - (rail.outerWidth(true) - rail.outerWidth(false));
      }

      // outer area
      rail.width(railWidth);
      // dark space
      total.width(railWidth - (total.outerWidth(true) - total.width()));

      if (t.setProgressRail)
        t.setProgressRail();
      if (t.setCurrentRail)
        t.setCurrentRail();
    },


    buildposter: function (player, controls, layers, media) {
      var t = this,
				poster =
				$('<div class="mejs-poster mejs-layer">' +
				'</div>')
					.appendTo(layers),
				posterUrl = player.$media.attr('poster');

      // prioriy goes to option (this is useful if you need to support iOS 3.x (iOS completely fails with poster)
      if (player.options.poster !== '') {
        posterUrl = player.options.poster;
      }

      // second, try the real poster
      if (posterUrl !== '' && posterUrl != null) {
        t.setPoster(posterUrl);
      } else {
        poster.hide();
      }

      media.addEventListener('play', function () {
        poster.hide();
      }, false);
    },

    setPoster: function (url) {
      var t = this,
				posterDiv = t.container.find('.mejs-poster'),
				posterImg = posterDiv.find('img');

      if (posterImg.length == 0) {
        posterImg = $('<img width="100%" height="100%" />').appendTo(posterDiv);
      }

      posterImg.attr('src', url);
    },

    buildoverlays: function (player, controls, layers, media) {
      if (!player.isVideo)
        return;

      var
			loading =
				$('<div class="mejs-overlay mejs-layer">' +
					'<div class="mejs-overlay-loading"><span></span></div>' +
				'</div>')
				.hide() // start out hidden
				.appendTo(layers),
			error =
				$('<div class="mejs-overlay mejs-layer">' +
					'<div class="mejs-overlay-error"></div>' +
				'</div>')
				.hide() // start out hidden
				.appendTo(layers),

      // this needs to come last so it's on top
			bigPlay =
				$('<div class="mejs-overlay mejs-layer mejs-overlay-play">' +
					'<div class="mejs-overlay-button"></div>' +
				'</div>')
				.appendTo(layers)
				.click(function () {
				  if (media.paused) {
				    media.play();
				  } else {
				    media.pause();
				  }
				});

      /*
      if (mejs.MediaFeatures.isiOS || mejs.MediaFeatures.isAndroid) {
      bigPlay.remove();
      loading.remove();
      }
      */


      // show/hide big play button
      media.addEventListener('play', function () {
        bigPlay.hide();
        loading.hide();
        error.hide();
      }, false);

      media.addEventListener('playing', function () {
        bigPlay.hide();
        loading.hide();
        error.hide();
      }, false);

      media.addEventListener('pause', function () {
        if (!mejs.MediaFeatures.isiPhone) {
          bigPlay.show();
        }
      }, false);

      media.addEventListener('waiting', function () {
        loading.show();
      }, false);


      // show/hide loading			
      media.addEventListener('loadeddata', function () {
        // for some reason Chrome is firing this event
        //if (mejs.MediaFeatures.isChrome && media.getAttribute && media.getAttribute('preload') === 'none')
        //	return;

        loading.show();
      }, false);
      media.addEventListener('canplay', function () {
        loading.hide();
      }, false);

      // error handling
      media.addEventListener('error', function () {
        loading.hide();
        error.show();
        error.find('mejs-overlay-error').html("Error loading this resource");
      }, false);
    },

    buildkeyboard: function (player, controls, layers, media) {

      var t = this;

      // listen for key presses
      $(document).keydown(function (e) {

        if (player.hasFocus && player.options.enableKeyboard) {

          // find a matching key
          for (var i = 0, il = player.options.keyActions.length; i < il; i++) {
            var keyAction = player.options.keyActions[i];

            for (var j = 0, jl = keyAction.keys.length; j < jl; j++) {
              if (e.keyCode == keyAction.keys[j]) {
                e.preventDefault();
                keyAction.action(player, media);
                return false;
              }
            }
          }
        }

        return true;
      });

      // check if someone clicked outside a player region, then kill its focus
      $(document).click(function (event) {
        if ($(event.target).closest('.mejs-container').length == 0) {
          player.hasFocus = false;
        }
      });

    },

    findTracks: function () {
      var t = this,
				tracktags = t.$media.find('track');

      // store for use by plugins
      t.tracks = [];
      tracktags.each(function (index, track) {

        track = $(track);

        t.tracks.push({
          srclang: track.attr('srclang').toLowerCase(),
          src: track.attr('src'),
          kind: track.attr('kind'),
          label: track.attr('label') || '',
          entries: [],
          isLoaded: false
        });
      });
    },
    changeSkin: function (className) {
      this.container[0].className = 'mejs-container ' + className;
      this.setPlayerSize();
      this.setControlsSize();
    },
    play: function () {
      try {
        this.media.play();
      } catch (ex) { }
    },
    pause: function () {
      try {
        this.media.pause();
      } catch (ex) { }
    },
    load: function () {
      try {
        this.media.load();
      } catch (ex) { }
    },
    setMuted: function (muted) {
      try {
        this.media.setMuted(muted);
      } catch (ex) { }
     
    },
    setCurrentTime: function (time) {
      try {
        this.media.setCurrentTime(time);
      } catch (ex) { }
   
    },
    getCurrentTime: function () {
      try {
        return this.media.currentTime;
      } catch (ex) { }
      return 0;
    },
    setVolume: function (volume) {

      try {
        this.media.setVolume(volume);
      } catch (ex) { }
    },
    getVolume: function () {
      try {
        return this.media.volume;
      } catch (ex) { }
      return0;
    },
    setSrc: function (src) {
      try {
        this.media.setSrc(src);
      } catch (ex) { }
     
    },
    remove: function () {
      var t = this;

      if (t.media.pluginType == 'flash') {
        t.media.remove();
      } else if (t.media.pluginTyp == 'native') {
        t.media.prop('controls', true);
      }

      // grab video and put it back in place
      if (!t.isDynamic) {
        t.$node.insertBefore(t.container)
      }

      t.container.remove();
    }
  };

  // turn into jQuery plugin
  if (typeof jQuery != 'undefined') {
    jQuery.fn.mediaelementplayer = function (options) {
      return this.each(function () {
        new mejs.MediaElementPlayer(this, options);
      });
    };
  }

  $(document).ready(function () {
    // auto enable using JSON attribute
    $('.mejs-player').mediaelementplayer();
  });

  // push out to window
  window.MediaElementPlayer = mejs.MediaElementPlayer;

})(mejs.$);

(function ($) {

  $.extend(mejs.MepDefaults, {
    playpauseText: 'Play/Pause'
  });

  // PLAY/pause BUTTON
  $.extend(MediaElementPlayer.prototype, {
    buildplaypause: function (player, controls, layers, media) {
      var
				t = this,
				play =
				$('<div class="mejs-button mejs-playpause-button mejs-play" >' +
					'<button type="button" aria-controls="' + t.id + '" title="' + t.options.playpauseText + '"></button>' +
				'</div>')
				.appendTo(controls)
				.click(function (e) {
				  e.preventDefault();

				  if (media.paused) {
				    media.play();
				  } else {
				    media.pause();
				  }

				  return false;
				});

      media.addEventListener('play', function () {
        play.removeClass('mejs-play').addClass('mejs-pause');
      }, false);
      media.addEventListener('playing', function () {
        play.removeClass('mejs-play').addClass('mejs-pause');
      }, false);


      media.addEventListener('pause', function () {
        play.removeClass('mejs-pause').addClass('mejs-play');
      }, false);
      media.addEventListener('paused', function () {
        play.removeClass('mejs-pause').addClass('mejs-play');
      }, false);
    }
  });

})(mejs.$);
(function ($) {

  $.extend(mejs.MepDefaults, {
    stopText: 'Stop'
  });

  // STOP BUTTON
  $.extend(MediaElementPlayer.prototype, {
    buildstop: function (player, controls, layers, media) {
      var t = this,
				stop =
				$('<div class="mejs-button mejs-stop-button mejs-stop">' +
					'<button type="button" aria-controls="' + t.id + '" title="' + t.options.stopText + '></button>' +
				'</div>')
				.appendTo(controls)
				.click(function () {
				  if (!media.paused) {
				    media.pause();
				  }
				  if (media.currentTime > 0) {
				    media.setCurrentTime(0);
				    controls.find('.mejs-time-current').width('0px');
				    controls.find('.mejs-time-handle').css('left', '0px');
				    controls.find('.mejs-time-float-current').html(mejs.Utility.secondsToTimeCode(0));
				    controls.find('.mejs-currenttime').html(mejs.Utility.secondsToTimeCode(0));
				    layers.find('.mejs-poster').show();
				  }
				});
    }
  });

})(mejs.$);
(function ($) {
  // progress/loaded bar
  $.extend(MediaElementPlayer.prototype, {
    buildprogress: function (player, controls, layers, media) {

      $('<div class="mejs-time-rail">' +
				'<span class="mejs-time-total">' +
					'<span class="mejs-time-loaded"></span>' +
					'<span class="mejs-time-current"></span>' +
					'<span class="mejs-time-handle"></span>' +
					'<span class="mejs-time-float">' +
						'<span class="mejs-time-float-current">00:00</span>' +
						'<span class="mejs-time-float-corner"></span>' +
					'</span>' +
				'</span>' +
			'</div>')
				.appendTo(controls);

      var
				t = this,
				total = controls.find('.mejs-time-total'),
				loaded = controls.find('.mejs-time-loaded'),
				current = controls.find('.mejs-time-current'),
				handle = controls.find('.mejs-time-handle'),
				timefloat = controls.find('.mejs-time-float'),
				timefloatcurrent = controls.find('.mejs-time-float-current'),
				handleMouseMove = function (e) {
				  // mouse position relative to the object
				  var x = e.pageX,
						offset = total.offset(),
						width = total.outerWidth(),
						percentage = 0,
						newTime = 0,
						pos = x - offset.left;


				  if (x > offset.left && x <= width + offset.left && media.duration) {
				    percentage = ((x - offset.left) / width);
				    newTime = (percentage <= 0.02) ? 0 : percentage * media.duration;

				    // seek to where the mouse is
				    if (mouseIsDown) {
				      media.setCurrentTime(newTime);
				    }

				    // position floating time box
				    if (!mejs.MediaFeatures.hasTouch) {
				      timefloat.css('left', pos);
				      timefloatcurrent.html(mejs.Utility.secondsToTimeCode(newTime));
				      timefloat.show();
				    }
				  }
				},
				mouseIsDown = false,
				mouseIsOver = false;

      // handle clicks
      //controls.find('.mejs-time-rail').delegate('span', 'click', handleMouseMove);
      total
				.bind('mousedown', function (e) {
				  // only handle left clicks
				  if (e.which === 1) {
				    mouseIsDown = true;
				    handleMouseMove(e);
				    return false;
				  }
				});

      controls.find('.mejs-time-total')
				.bind('mouseenter', function (e) {
				  mouseIsOver = true;
				  if (!mejs.MediaFeatures.hasTouch) {
				    timefloat.show();
				  }
				})
				.bind('mouseleave', function (e) {
				  mouseIsOver = false;
				  timefloat.hide();
				});

      $(document)
				.bind('mouseup', function (e) {
				  mouseIsDown = false;
				  timefloat.hide();
				  //handleMouseMove(e);
				})
				.bind('mousemove', function (e) {
				  if (mouseIsDown || mouseIsOver) {
				    handleMouseMove(e);
				  }
				});

      // loading
      media.addEventListener('progress', function (e) {
        player.setProgressRail(e);
        player.setCurrentRail(e);
      }, false);

      // current time
      media.addEventListener('timeupdate', function (e) {
        player.setProgressRail(e);
        player.setCurrentRail(e);
      }, false);


      // store for later use
      t.loaded = loaded;
      t.total = total;
      t.current = current;
      t.handle = handle;
    },
    setProgressRail: function (e) {

      var
				t = this,
				target = (e != undefined) ? e.target : t.media,
				percent = null;

      // newest HTML5 spec has buffered array (FF4, Webkit)
      if (target && target.buffered && target.buffered.length > 0 && target.buffered.end && target.duration) {
        // TODO: account for a real array with multiple values (only Firefox 4 has this so far) 
        percent = target.buffered.end(0) / target.duration;
      }
        // Some browsers (e.g., FF3.6 and Safari 5) cannot calculate target.bufferered.end()
        // to be anything other than 0. If the byte count is available we use this instead.
        // Browsers that support the else if do not seem to have the bufferedBytes value and
        // should skip to there. Tested in Safari 5, Webkit head, FF3.6, Chrome 6, IE 7/8.
      else if (target && target.bytesTotal != undefined && target.bytesTotal > 0 && target.bufferedBytes != undefined) {
        percent = target.bufferedBytes / target.bytesTotal;
      }
        // Firefox 3 with an Ogg file seems to go this way
      else if (e && e.lengthComputable && e.total != 0) {
        percent = e.loaded / e.total;
      }

      // finally update the progress bar
      if (percent !== null) {
        percent = Math.min(1, Math.max(0, percent));
        // update loaded bar
        if (t.loaded && t.total) {
          t.loaded.width(t.total.width() * percent);
        }
      }
    },
    setCurrentRail: function () {

      var t = this;

      if (t.media.currentTime != undefined && t.media.duration) {

        // update bar and handle
        if (t.total && t.handle) {
          var
						newWidth = t.total.width() * t.media.currentTime / t.media.duration,
						handlePos = newWidth - (t.handle.outerWidth(true) / 2);

          t.current.width(newWidth);
          t.handle.css('left', handlePos);
        }
      }

    }
  });
})(mejs.$);
(function ($) {

  // options
  $.extend(mejs.MepDefaults, {
    duration: -1,
    timeAndDurationSeparator: ' <span> | </span> '
  });


  // current and duration 00:00 / 00:00
  $.extend(MediaElementPlayer.prototype, {
    buildcurrent: function (player, controls, layers, media) {
      var t = this;

      $('<div class="mejs-time">' +
					'<span class="mejs-currenttime">' + (player.options.alwaysShowHours ? '00:' : '')
					+ (player.options.showTimecodeFrameCount ? '00:00:00' : '00:00') + '</span>' +
					'</div>')
					.appendTo(controls);

      t.currenttime = t.controls.find('.mejs-currenttime');

      media.addEventListener('timeupdate', function () {
        player.updateCurrent();
      }, false);
    },


    buildduration: function (player, controls, layers, media) {
      var t = this;

      if (controls.children().last().find('.mejs-currenttime').length > 0) {
        $(t.options.timeAndDurationSeparator +
					'<span class="mejs-duration">' +
						(t.options.duration > 0 ?
							mejs.Utility.secondsToTimeCode(t.options.duration, t.options.alwaysShowHours || t.media.duration > 3600, t.options.showTimecodeFrameCount, t.options.framesPerSecond || 25) :
				   			((player.options.alwaysShowHours ? '00:' : '') + (player.options.showTimecodeFrameCount ? '00:00:00' : '00:00'))
				   		) +
					'</span>')
					.appendTo(controls.find('.mejs-time'));
      } else {

        // add class to current time
        controls.find('.mejs-currenttime').parent().addClass('mejs-currenttime-container');

        $('<div class="mejs-time mejs-duration-container">' +
					'<span class="mejs-duration">' +
						(t.options.duration > 0 ?
							mejs.Utility.secondsToTimeCode(t.options.duration, t.options.alwaysShowHours || t.media.duration > 3600, t.options.showTimecodeFrameCount, t.options.framesPerSecond || 25) :
				   			((player.options.alwaysShowHours ? '00:' : '') + (player.options.showTimecodeFrameCount ? '00:00:00' : '00:00'))
				   		) +
					'</span>' +
				'</div>')
				.appendTo(controls);
      }

      t.durationD = t.controls.find('.mejs-duration');

      media.addEventListener('timeupdate', function () {
        player.updateDuration();
      }, false);
    },

    updateCurrent: function () {
      var t = this;

      if (t.currenttime) {
        t.currenttime.html(mejs.Utility.secondsToTimeCode(t.media.currentTime, t.options.alwaysShowHours || t.media.duration > 3600, t.options.showTimecodeFrameCount, t.options.framesPerSecond || 25));
      }
    },

    updateDuration: function () {
      var t = this;

      if (t.media.duration && t.durationD) {
        t.durationD.html(mejs.Utility.secondsToTimeCode(t.media.duration, t.options.alwaysShowHours, t.options.showTimecodeFrameCount, t.options.framesPerSecond || 25));
      }
    }
  });

})(mejs.$);
(function ($) {

  $.extend(mejs.MepDefaults, {
    muteText: 'Mute Toggle',
    hideVolumeOnTouchDevices: true
  });

  $.extend(MediaElementPlayer.prototype, {
    buildvolume: function (player, controls, layers, media) {

      // Android and iOS don't support volume controls
      if (mejs.MediaFeatures.hasTouch && this.options.hideVolumeOnTouchDevices)
        return;

      var t = this,
				mute =
				$('<div class="mejs-button mejs-volume-button mejs-mute">' +
					'<button type="button" aria-controls="' + t.id + '" title="' + t.options.muteText + '"></button>' +
					'<div class="mejs-volume-slider">' + // outer background
						'<div class="mejs-volume-total"></div>' + // line background
						'<div class="mejs-volume-current"></div>' + // current volume
						'<div class="mejs-volume-handle"></div>' + // handle
					'</div>' +
				'</div>')
				.appendTo(controls),
			volumeSlider = mute.find('.mejs-volume-slider'),
			volumeTotal = mute.find('.mejs-volume-total'),
			volumeCurrent = mute.find('.mejs-volume-current'),
			volumeHandle = mute.find('.mejs-volume-handle'),

			positionVolumeHandle = function (volume) {

			  if (!volumeSlider.is(':visible')) {
			    volumeSlider.show();
			    positionVolumeHandle(volume);
			    volumeSlider.hide()
			    return;
			  }

			  var

			  // height of the full size volume slider background
					totalHeight = volumeTotal.height(),

			  // top/left of full size volume slider background
					totalPosition = volumeTotal.position(),

			  // the new top position based on the current volume
			  // 70% volume on 100px height == top:30px
					newTop = totalHeight - (totalHeight * volume);

			  // handle
			  volumeHandle.css('top', totalPosition.top + newTop - (volumeHandle.height() / 2));

			  // show the current visibility
			  volumeCurrent.height(totalHeight - newTop);
			  volumeCurrent.css('top', totalPosition.top + newTop);
			},
			handleVolumeMove = function (e) {
			  var
					railHeight = volumeTotal.height(),
					totalOffset = volumeTotal.offset(),
					totalTop = parseInt(volumeTotal.css('top').replace(/px/, ''), 10),
					newY = e.pageY - totalOffset.top,
					volume = (railHeight - newY) / railHeight

			  // the controls just hide themselves (usually when mouse moves too far up)
			  if (totalOffset.top == 0 || totalOffset.left == 0)
			    return;

			  // 0-1
			  volume = Math.max(0, volume);
			  volume = Math.min(volume, 1);

			  // TODO: handle vertical and horizontal CSS
			  // only allow it to move within the rail
			  if (newY < 0)
			    newY = 0;
			  else if (newY > railHeight)
			    newY = railHeight;

			  // move the handle to match the mouse
			  volumeHandle.css('top', newY - (volumeHandle.height() / 2) + totalTop);

			  // show the current visibility
			  volumeCurrent.height(railHeight - newY);
			  volumeCurrent.css('top', newY + totalTop);

			  // set mute status
			  if (volume == 0) {
			    media.setMuted(true);
			    mute.removeClass('mejs-mute').addClass('mejs-unmute');
			  } else {
			    media.setMuted(false);
			    mute.removeClass('mejs-unmute').addClass('mejs-mute');
			  }

			  volume = Math.max(0, volume);
			  volume = Math.min(volume, 1);

			  // set the volume
			  media.setVolume(volume);
			},
			mouseIsDown = false,
			mouseIsOver = false;

      // SLIDER
      mute
				.hover(function () {
				  volumeSlider.show();
				  mouseIsOver = true;
				}, function () {
				  mouseIsOver = false;

				  if (!mouseIsDown) {
				    volumeSlider.hide();
				  }
				});

      volumeSlider
				.bind('mouseover', function () {
				  mouseIsOver = true;
				})
				.bind('mousedown', function (e) {
				  handleVolumeMove(e);
				  mouseIsDown = true;

				  return false;
				});

      $(document)
				.bind('mouseup', function (e) {
				  mouseIsDown = false;

				  if (!mouseIsOver) {
				    volumeSlider.hide();
				  }
				})
				.bind('mousemove', function (e) {
				  if (mouseIsDown) {
				    handleVolumeMove(e);
				  }
				});


      // MUTE button
      mute.find('button').click(function () {

        media.setMuted(!media.muted);

      });

      // listen for volume change events from other sources
      media.addEventListener('volumechange', function (e) {
        if (!mouseIsDown) {
          if (media.muted) {
            positionVolumeHandle(0);
            mute.removeClass('mejs-mute').addClass('mejs-unmute');
          } else {
            positionVolumeHandle(media.volume);
            mute.removeClass('mejs-unmute').addClass('mejs-mute');
          }
        }
      }, false);

      if (t.container.is(':visible')) {
        // set initial volume
        positionVolumeHandle(player.options.startVolume);

        // shim gets the startvolume as a parameter, but we have to set it on the native <video> and <audio> elements
        if (media.pluginType === 'native') {
          media.setVolume(player.options.startVolume);
        }
      }
    }
  });

})(mejs.$);

(function ($) {

  $.extend(mejs.MepDefaults, {
    usePluginFullScreen: true,
    newWindowCallback: function () { return ''; },
    fullscreenText: 'Fullscreen'
  });

  $.extend(MediaElementPlayer.prototype, {

    isFullScreen: false,

    isNativeFullScreen: false,

    docStyleOverflow: null,

    isInIframe: false,

    buildfullscreen: function (player, controls, layers, media) {

      if (!player.isVideo)
        return;

      player.isInIframe = (window.location != window.parent.location);

      // native events
      if (mejs.MediaFeatures.hasTrueNativeFullScreen) {

        // chrome doesn't alays fire this in an iframe
        player.container.bind(mejs.MediaFeatures.fullScreenEventName, function (e) {
          //player.container.bind('webkitfullscreenchange', function(e) {


          if (mejs.MediaFeatures.isFullScreen()) {
            player.isNativeFullScreen = true;
            // reset the controls once we are fully in full screen
            player.setControlsSize();
          } else {
            player.isNativeFullScreen = false;
            // when a user presses ESC
            // make sure to put the player back into place								
            player.exitFullScreen();
          }
        });
      }

      var t = this,
				normalHeight = 0,
				normalWidth = 0,
				container = player.container,
				fullscreenBtn =
					$('<div class="mejs-button mejs-fullscreen-button">' +
						'<button type="button" aria-controls="' + t.id + '" title="' + t.options.fullscreenText + '"></button>' +
					'</div>')
					.appendTo(controls);

      if (t.media.pluginType === 'native' || (!t.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox)) {

        fullscreenBtn.click(function () {
          var isFullScreen = (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen()) || player.isFullScreen;

          if (isFullScreen) {
            player.exitFullScreen();
          } else {
            player.enterFullScreen();
          }
        });

      } else {

        var hideTimeout = null,
						supportsPointerEvents = (document.documentElement.style.pointerEvents === '');

        if (supportsPointerEvents && !mejs.MediaFeatures.isOpera) { // opera doesn't allow this :(

          // allows clicking through the fullscreen button and controls down directly to Flash

          /*
          When a user puts his mouse over the fullscreen button, the controls are disabled
          So we put a div over the video and another one on iether side of the fullscreen button
          that caputre mouse movement
          and restore the controls once the mouse moves outside of the fullscreen button
          */

          var fullscreenIsDisabled = false,
							restoreControls = function () {
							  if (fullscreenIsDisabled) {
							    // hide the hovers
							    videoHoverDiv.hide();
							    controlsLeftHoverDiv.hide();
							    controlsRightHoverDiv.hide();

							    // restore the control bar
							    fullscreenBtn.css('pointer-events', '');
							    t.controls.css('pointer-events', '');

							    // store for later
							    fullscreenIsDisabled = false;
							  }
							},
							videoHoverDiv = $('<div class="mejs-fullscreen-hover" />').appendTo(t.container).mouseover(restoreControls),
							controlsLeftHoverDiv = $('<div class="mejs-fullscreen-hover"  />').appendTo(t.container).mouseover(restoreControls),
							controlsRightHoverDiv = $('<div class="mejs-fullscreen-hover"  />').appendTo(t.container).mouseover(restoreControls),
							positionHoverDivs = function () {
							  var style = { position: 'absolute', top: 0, left: 0 }; //, backgroundColor: '#f00'};
							  videoHoverDiv.css(style);
							  controlsLeftHoverDiv.css(style);
							  controlsRightHoverDiv.css(style);

							  // over video, but not controls
							  videoHoverDiv
									.width(t.container.width())
									.height(t.container.height() - t.controls.height());

							  // over controls, but not the fullscreen button
							  var fullScreenBtnOffset = fullscreenBtn.offset().left - t.container.offset().left;
							  fullScreenBtnWidth = fullscreenBtn.outerWidth(true);

							  controlsLeftHoverDiv
									.width(fullScreenBtnOffset)
									.height(t.controls.height())
									.css({ top: t.container.height() - t.controls.height() });

							  // after the fullscreen button
							  controlsRightHoverDiv
									.width(t.container.width() - fullScreenBtnOffset - fullScreenBtnWidth)
									.height(t.controls.height())
									.css({
									  top: t.container.height() - t.controls.height(),
									  left: fullScreenBtnOffset + fullScreenBtnWidth
									});
							};

          $(document).resize(function () {
            positionHoverDivs();
          });

          // on hover, kill the fullscreen button's HTML handling, allowing clicks down to Flash
          fullscreenBtn
							.mouseover(function () {

							  if (!t.isFullScreen) {

							    var buttonPos = fullscreenBtn.offset(),
										containerPos = player.container.offset();

							    // move the button in Flash into place
							    try{
							      media.positionFullscreenButton(buttonPos.left - containerPos.left, buttonPos.top - containerPos.top, false);
							    }
							    catch (ex) { }
							    // allows click through
							    fullscreenBtn.css('pointer-events', 'none');
							    t.controls.css('pointer-events', 'none');

							    // show the divs that will restore things
							    videoHoverDiv.show();
							    controlsRightHoverDiv.show();
							    controlsLeftHoverDiv.show();
							    positionHoverDivs();

							    fullscreenIsDisabled = true;
							  }

							});

          // restore controls anytime the user enters or leaves fullscreen	
          media.addEventListener('fullscreenchange', function (e) {
            restoreControls();
          });


          // the mouseout event doesn't work on the fullscren button, because we already killed the pointer-events
          // so we use the document.mousemove event to restore controls when the mouse moves outside the fullscreen button 
          /*
          $(document).mousemove(function(e) {
							
          // if the mouse is anywhere but the fullsceen button, then restore it all
          if (fullscreenIsDisabled) {
								
          var fullscreenBtnPos = fullscreenBtn.offset();
								

          if (e.pageY < fullscreenBtnPos.top || e.pageY > fullscreenBtnPos.top + fullscreenBtn.outerHeight(true) ||
          e.pageX < fullscreenBtnPos.left || e.pageX > fullscreenBtnPos.left + fullscreenBtn.outerWidth(true)
          ) {
								
          fullscreenBtn.css('pointer-events', '');
          t.controls.css('pointer-events', '');
									
          fullscreenIsDisabled = false;
          }
          }
          });
          */


        } else {

          // the hover state will show the fullscreen button in Flash to hover up and click

          fullscreenBtn
							.mouseover(function () {

							  if (hideTimeout !== null) {
							    clearTimeout(hideTimeout);
							    delete hideTimeout;
							  }

							  var buttonPos = fullscreenBtn.offset(),
									containerPos = player.container.offset();

							  media.positionFullscreenButton(buttonPos.left - containerPos.left, buttonPos.top - containerPos.top, true);

							})
							.mouseout(function () {

							  if (hideTimeout !== null) {
							    clearTimeout(hideTimeout);
							    delete hideTimeout;
							  }

							  hideTimeout = setTimeout(function () {
							    media.hideFullscreenButton();
							  }, 1500);


							});
        }
      }

      player.fullscreenBtn = fullscreenBtn;

      $(document).bind('keydown', function (e) {
        if (((mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen()) || t.isFullScreen) && e.keyCode == 27) {
          player.exitFullScreen();
        }
      });

    },
    enterFullScreen: function () {

      var t = this;

      // firefox+flash can't adjust plugin sizes without resetting :(
      if (t.media.pluginType !== 'native' && (mejs.MediaFeatures.isFirefox || t.options.usePluginFullScreen)) {
        //t.media.setFullscreen(true);
        //player.isFullScreen = true;
        return;
      }

      // store overflow 
      docStyleOverflow = document.documentElement.style.overflow;
      // set it to not show scroll bars so 100% will work
      document.documentElement.style.overflow = 'hidden';

      // store sizing
      normalHeight = t.container.height();
      normalWidth = t.container.width();

      // attempt to do true fullscreen (Safari 5.1 and Firefox Nightly only for now)
      if (t.media.pluginType === 'native') {
        if (mejs.MediaFeatures.hasTrueNativeFullScreen) {

          mejs.MediaFeatures.requestFullScreen(t.container[0]);
          //return;

          if (t.isInIframe) {
            // sometimes exiting from fullscreen doesn't work
            // notably in Chrome <iframe>. Fixed in version 17
            setTimeout(function checkFullscreen() {

              if (t.isNativeFullScreen) {

                // check if the video is suddenly not really fullscreen
                if ($(window).width() !== screen.width) {
                  // manually exit
                  t.exitFullScreen();
                } else {
                  // test again
                  setTimeout(checkFullscreen, 500);
                }
              }


            }, 500);
          }

        } else if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
          t.media.webkitEnterFullscreen();
          return;
        }
      }

      // check for iframe launch
      if (t.isInIframe) {
        var url = t.options.newWindowCallback(this);


        if (url !== '') {

          // launch immediately
          if (!mejs.MediaFeatures.hasTrueNativeFullScreen) {
            t.pause();
            window.open(url, t.id, 'top=0,left=0,width=' + screen.availWidth + ',height=' + screen.availHeight + ',resizable=yes,scrollbars=no,status=no,toolbar=no');
            return;
          } else {
            setTimeout(function () {
              if (!t.isNativeFullScreen) {
                t.pause();
                window.open(url, t.id, 'top=0,left=0,width=' + screen.availWidth + ',height=' + screen.availHeight + ',resizable=yes,scrollbars=no,status=no,toolbar=no');
              }
            }, 250);
          }
        }

      }

      // full window code



      // make full size
      t.container
				.addClass('mejs-container-fullscreen')
				.width('100%')
				.height('100%');
      //.css({position: 'fixed', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', width: '100%', height: '100%', 'z-index': 1000});				

      // Only needed for safari 5.1 native full screen, can cause display issues elsewhere
      // Actually, it seems to be needed for IE8, too
      //if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
      setTimeout(function () {
        t.container.css({ width: '100%', height: '100%' });
        t.setControlsSize();
      }, 500);
      //}

      if (t.pluginType === 'native') {
        t.$media
					.width('100%')
					.height('100%');
      } else {
        t.container.find('object, embed, iframe')
					.width('100%')
					.height('100%');

        //if (!mejs.MediaFeatures.hasTrueNativeFullScreen) {
        t.media.setVideoSize($(window).width(), $(window).height());
        //}
      }

      t.layers.children('div')
				.width('100%')
				.height('100%');

      if (t.fullscreenBtn) {
        t.fullscreenBtn
					.removeClass('mejs-fullscreen')
					.addClass('mejs-unfullscreen');
      }

      t.setControlsSize();
      t.isFullScreen = true;
    },

    exitFullScreen: function () {

      var t = this;

      // firefox can't adjust plugins
      if (t.media.pluginType !== 'native' && mejs.MediaFeatures.isFirefox) {
        t.media.setFullscreen(false);
        //player.isFullScreen = false;
        return;
      }

      // come outo of native fullscreen
      if (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || t.isFullScreen)) {
        mejs.MediaFeatures.cancelFullScreen();
      }

      // restore scroll bars to document
      document.documentElement.style.overflow = docStyleOverflow;

      t.container
				.removeClass('mejs-container-fullscreen')
				.width(normalWidth)
				.height(normalHeight);
      //.css({position: '', left: '', top: '', right: '', bottom: '', overflow: 'inherit', width: normalWidth + 'px', height: normalHeight + 'px', 'z-index': 1});

      if (t.pluginType === 'native') {
        t.$media
					.width(normalWidth)
					.height(normalHeight);
      } else {
        t.container.find('object embed')
					.width(normalWidth)
					.height(normalHeight);

        t.media.setVideoSize(normalWidth, normalHeight);
      }

      t.layers.children('div')
				.width(normalWidth)
				.height(normalHeight);

      t.fullscreenBtn
				.removeClass('mejs-unfullscreen')
				.addClass('mejs-fullscreen');

      t.setControlsSize();
      t.isFullScreen = false;
    }
  });

})(mejs.$);

(function ($) {

  // add extra default options 
  $.extend(mejs.MepDefaults, {
    // this will automatically turn on a <track>
    startLanguage: '',

    tracksText: 'Captions/Subtitles'
  });

  $.extend(MediaElementPlayer.prototype, {

    hasChapters: false,

    buildtracks: function (player, controls, layers, media) {
      if (!player.isVideo)
        return;

      if (player.tracks.length == 0)
        return;

      var t = this, i, options = '';

      player.chapters =
					$('<div class="mejs-chapters mejs-layer"></div>')
						.prependTo(layers).hide();
      player.captions =
					$('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position"><span class="mejs-captions-text"></span></div></div>')
						.prependTo(layers).hide();
      player.captionsText = player.captions.find('.mejs-captions-text');
      player.captionsButton =
					$('<div class="mejs-button mejs-captions-button">' +
						'<button type="button" aria-controls="' + t.id + '" title="' + t.options.tracksText + '"></button>' +
						'<div class="mejs-captions-selector">' +
							'<ul>' +
								'<li>' +
									'<input type="radio" name="' + player.id + '_captions" id="' + player.id + '_captions_none" value="none" checked="checked" />' +
									'<label for="' + player.id + '_captions_none">None</label>' +
								'</li>' +
							'</ul>' +
						'</div>' +
					'</div>')
						.appendTo(controls)

      // hover
						.hover(function () {
						  $(this).find('.mejs-captions-selector').css('visibility', 'visible');
						}, function () {
						  $(this).find('.mejs-captions-selector').css('visibility', 'hidden');
						})

      // handle clicks to the language radio buttons
						.delegate('input[type=radio]', 'click', function () {
						  lang = this.value;

						  if (lang == 'none') {
						    player.selectedTrack = null;
						  } else {
						    for (i = 0; i < player.tracks.length; i++) {
						      if (player.tracks[i].srclang == lang) {
						        player.selectedTrack = player.tracks[i];
						        player.captions.attr('lang', player.selectedTrack.srclang);
						        player.displayCaptions();
						        break;
						      }
						    }
						  }
						});
      //.bind('mouseenter', function() {
      //	player.captionsButton.find('.mejs-captions-selector').css('visibility','visible')
      //});

      if (!player.options.alwaysShowControls) {
        // move with controls
        player.container
					.bind('mouseenter', function () {
					  // push captions above controls
					  player.container.find('.mejs-captions-position').addClass('mejs-captions-position-hover');

					})
					.bind('mouseleave', function () {
					  if (!media.paused) {
					    // move back to normal place
					    player.container.find('.mejs-captions-position').removeClass('mejs-captions-position-hover');
					  }
					});
      } else {
        player.container.find('.mejs-captions-position').addClass('mejs-captions-position-hover');
      }

      player.trackToLoad = -1;
      player.selectedTrack = null;
      player.isLoadingTrack = false;



      // add to list
      for (i = 0; i < player.tracks.length; i++) {
        if (player.tracks[i].kind == 'subtitles') {
          player.addTrackButton(player.tracks[i].srclang, player.tracks[i].label);
        }
      }

      player.loadNextTrack();


      media.addEventListener('timeupdate', function (e) {
        player.displayCaptions();
      }, false);

      media.addEventListener('loadedmetadata', function (e) {
        player.displayChapters();
      }, false);

      player.container.hover(
				function () {
				  // chapters
				  if (player.hasChapters) {
				    player.chapters.css('visibility', 'visible');
				    player.chapters.fadeIn(200);
				  }
				},
				function () {
				  if (player.hasChapters && !media.paused) {
				    player.chapters.fadeOut(200, function () {
				      $(this).css('visibility', 'hidden');
				      $(this).css('display', 'block');
				    });
				  }
				});

      // check for autoplay
      if (player.node.getAttribute('autoplay') !== null) {
        player.chapters.css('visibility', 'hidden');
      }
    },

    loadNextTrack: function () {
      var t = this;

      t.trackToLoad++;
      if (t.trackToLoad < t.tracks.length) {
        t.isLoadingTrack = true;
        t.loadTrack(t.trackToLoad);
      } else {
        // add done?
        t.isLoadingTrack = false;
      }
    },

    loadTrack: function (index) {
      var
				t = this,
				track = t.tracks[index],
				after = function () {

				  track.isLoaded = true;

				  // create button
				  //t.addTrackButton(track.srclang);
				  t.enableTrackButton(track.srclang, track.label);

				  t.loadNextTrack();

				};

      if (track.isTranslation) {

        // translate the first track
        mejs.TrackFormatParser.translateTrackText(t.tracks[0].entries, t.tracks[0].srclang, track.srclang, t.options.googleApiKey, function (newOne) {

          // store the new translation
          track.entries = newOne;

          after();
        });

      } else {
        $.ajax({
          url: track.src,
          success: function (d) {

            // parse the loaded file
            track.entries = mejs.TrackFormatParser.parse(d);
            after();

            if (track.kind == 'chapters' && t.media.duration > 0) {
              t.drawChapters(track);
            }
          },
          error: function () {
            t.loadNextTrack();
          }
        });
      }
    },

    enableTrackButton: function (lang, label) {
      var t = this;

      if (label === '') {
        label = mejs.language.codes[lang] || lang;
      }

      t.captionsButton
				.find('input[value=' + lang + ']')
					.prop('disabled', false)
				.siblings('label')
					.html(label);

      // auto select
      if (t.options.startLanguage == lang) {
        $('#' + t.id + '_captions_' + lang).click();
      }

      t.adjustLanguageBox();
    },

    addTrackButton: function (lang, label) {
      var t = this;
      if (label === '') {
        label = mejs.language.codes[lang] || lang;
      }

      t.captionsButton.find('ul').append(
				$('<li>' +
					'<input type="radio" name="' + t.id + '_captions" id="' + t.id + '_captions_' + lang + '" value="' + lang + '" disabled="disabled" />' +
					'<label for="' + t.id + '_captions_' + lang + '">' + label + ' (loading)' + '</label>' +
				'</li>')
			);

      t.adjustLanguageBox();

      // remove this from the dropdownlist (if it exists)
      t.container.find('.mejs-captions-translations option[value=' + lang + ']').remove();
    },

    adjustLanguageBox: function () {
      var t = this;
      // adjust the size of the outer box
      t.captionsButton.find('.mejs-captions-selector').height(
				t.captionsButton.find('.mejs-captions-selector ul').outerHeight(true) +
				t.captionsButton.find('.mejs-captions-translations').outerHeight(true)
			);
    },

    displayCaptions: function () {

      if (typeof this.tracks == 'undefined')
        return;

      var
				t = this,
				i,
				track = t.selectedTrack;

      if (track != null && track.isLoaded) {
        for (i = 0; i < track.entries.times.length; i++) {
          if (t.media.currentTime >= track.entries.times[i].start && t.media.currentTime <= track.entries.times[i].stop) {
            t.captionsText.html(track.entries.text[i]);
            t.captions.show();
            return; // exit out if one is visible;
          }
        }
        t.captions.hide();
      } else {
        t.captions.hide();
      }
    },

    displayChapters: function () {
      var
				t = this,
				i;

      for (i = 0; i < t.tracks.length; i++) {
        if (t.tracks[i].kind == 'chapters' && t.tracks[i].isLoaded) {
          t.drawChapters(t.tracks[i]);
          t.hasChapters = true;
          break;
        }
      }
    },

    drawChapters: function (chapters) {
      var
				t = this,
				i,
				dur,
      //width,
      //left,
				percent = 0,
				usedPercent = 0;

      t.chapters.empty();

      for (i = 0; i < chapters.entries.times.length; i++) {
        dur = chapters.entries.times[i].stop - chapters.entries.times[i].start;
        percent = Math.floor(dur / t.media.duration * 100);
        if (percent + usedPercent > 100 || // too large
					i == chapters.entries.times.length - 1 && percent + usedPercent < 100) // not going to fill it in
        {
          percent = 100 - usedPercent;
        }
        //width = Math.floor(t.width * dur / t.media.duration);
        //left = Math.floor(t.width * chapters.entries.times[i].start / t.media.duration);
        //if (left + width > t.width) {
        //	width = t.width - left;
        //}

        t.chapters.append($(
					'<div class="mejs-chapter" rel="' + chapters.entries.times[i].start + '" style="left: ' + usedPercent.toString() + '%;width: ' + percent.toString() + '%;">' +
						'<div class="mejs-chapter-block' + ((i == chapters.entries.times.length - 1) ? ' mejs-chapter-block-last' : '') + '">' +
							'<span class="ch-title">' + chapters.entries.text[i] + '</span>' +
							'<span class="ch-time">' + mejs.Utility.secondsToTimeCode(chapters.entries.times[i].start) + '&ndash;' + mejs.Utility.secondsToTimeCode(chapters.entries.times[i].stop) + '</span>' +
						'</div>' +
					'</div>'));
        usedPercent += percent;
      }

      t.chapters.find('div.mejs-chapter').click(function () {
        t.media.setCurrentTime(parseFloat($(this).attr('rel')));
        if (t.media.paused) {
          t.media.play();
        }
      });

      t.chapters.show();
    }
  });



  mejs.language = {
    codes: {
      af: 'Afrikaans',
      sq: 'Albanian',
      ar: 'Arabic',
      be: 'Belarusian',
      bg: 'Bulgarian',
      ca: 'Catalan',
      zh: 'Chinese',
      'zh-cn': 'Chinese Simplified',
      'zh-tw': 'Chinese Traditional',
      hr: 'Croatian',
      cs: 'Czech',
      da: 'Danish',
      nl: 'Dutch',
      en: 'English',
      et: 'Estonian',
      tl: 'Filipino',
      fi: 'Finnish',
      fr: 'French',
      gl: 'Galician',
      de: 'German',
      el: 'Greek',
      ht: 'Haitian Creole',
      iw: 'Hebrew',
      hi: 'Hindi',
      hu: 'Hungarian',
      is: 'Icelandic',
      id: 'Indonesian',
      ga: 'Irish',
      it: 'Italian',
      ja: 'Japanese',
      ko: 'Korean',
      lv: 'Latvian',
      lt: 'Lithuanian',
      mk: 'Macedonian',
      ms: 'Malay',
      mt: 'Maltese',
      no: 'Norwegian',
      fa: 'Persian',
      pl: 'Polish',
      pt: 'Portuguese',
      //'pt-pt':'Portuguese (Portugal)',
      ro: 'Romanian',
      ru: 'Russian',
      sr: 'Serbian',
      sk: 'Slovak',
      sl: 'Slovenian',
      es: 'Spanish',
      sw: 'Swahili',
      sv: 'Swedish',
      tl: 'Tagalog',
      th: 'Thai',
      tr: 'Turkish',
      uk: 'Ukrainian',
      vi: 'Vietnamese',
      cy: 'Welsh',
      yi: 'Yiddish'
    }
  };

  /*
  Parses WebVVT format which should be formatted as
  ================================
  WEBVTT
	
  1
  00:00:01,1 --> 00:00:05,000
  A line of text

  2
  00:01:15,1 --> 00:02:05,000
  A second line of text
	
  ===============================

  Adapted from: http://www.delphiki.com/html5/playr
  */
  mejs.TrackFormatParser = {
    // match start "chapter-" (or anythingelse)
    pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
    pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,

    split2: function (text, regex) {
      // normal version for compliant browsers
      // see below for IE fix
      return text.split(regex);
    },
    parse: function (trackText) {
      var
				i = 0,
				lines = this.split2(trackText, /\r?\n/),
				entries = { text: [], times: [] },
				timecode,
				text;

      for (; i < lines.length; i++) {
        // check for the line number
        if (this.pattern_identifier.exec(lines[i])) {
          // skip to the next line where the start --> end time code should be
          i++;
          timecode = this.pattern_timecode.exec(lines[i]);

          if (timecode && i < lines.length) {
            i++;
            // grab all the (possibly multi-line) text that follows
            text = lines[i];
            i++;
            while (lines[i] !== '' && i < lines.length) {
              text = text + '\n' + lines[i];
              i++;
            }

            // Text is in a different array so I can use .join
            entries.text.push(text);
            entries.times.push(
						{
						  start: mejs.Utility.timeCodeToSeconds(timecode[1]),
						  stop: mejs.Utility.timeCodeToSeconds(timecode[3]),
						  settings: timecode[5]
						});
          }
        }
      }

      return entries;
    }
  };

  // test for browsers with bad String.split method.
  if ('x\n\ny'.split(/\n/gi).length != 3) {
    // add super slow IE8 and below version
    mejs.TrackFormatParser.split2 = function (text, regex) {
      var
				parts = [],
				chunk = '',
				i;

      for (i = 0; i < text.length; i++) {
        chunk += text.substring(i, i + 1);
        if (regex.test(chunk)) {
          parts.push(chunk.replace(regex, ''));
          chunk = '';
        }
      }
      parts.push(chunk);
      return parts;
    }
  }

})(mejs.$);

/*
* ContextMenu Plugin
* 
*
*/

(function ($) {

  $.extend(mejs.MepDefaults,
	contextMenuItems = [
  // demo of a fullscreen option
		{
		  render: function (player) {

		    // check for fullscreen plugin
		    if (typeof player.enterFullScreen == 'undefined')
		      return null;

		    if (player.isFullScreen) {
		      return "Turn off Fullscreen";
		    } else {
		      return "Go Fullscreen";
		    }
		  },
		  click: function (player) {
		    if (player.isFullScreen) {
		      player.exitFullScreen();
		    } else {
		      player.enterFullScreen();
		    }
		  }
		}
		,
  // demo of a mute/unmute button
		{
		  render: function (player) {
		    if (player.media.muted) {
		      return "Unmute";
		    } else {
		      return "Mute";
		    }
		  },
		  click: function (player) {
		    if (player.media.muted) {
		      player.setMuted(false);
		    } else {
		      player.setMuted(true);
		    }
		  }
		},
  // separator
		{
		  isSeparator: true
		}
		,
  // demo of simple download video
		{
		  render: function (player) {
		    return "Download Video";
		  },
		  click: function (player) {
		    window.location.href = player.media.currentSrc;
		  }
		}
	]
);


  $.extend(MediaElementPlayer.prototype, {
    buildcontextmenu: function (player, controls, layers, media) {

      // create context menu
      player.contextMenu = $('<div class="mejs-contextmenu"></div>')
								.appendTo($('body'))
								.hide();

      // create events for showing context menu
      player.container.bind('contextmenu', function (e) {
        if (player.isContextMenuEnabled) {
          e.preventDefault();
          player.renderContextMenu(e.clientX - 1, e.clientY - 1);
          return false;
        }
      });
      player.container.bind('click', function () {
        player.contextMenu.hide();
      });
      player.contextMenu.bind('mouseleave', function () {

        //console.log('context hover out');
        player.startContextMenuTimer();

      });
    },

    isContextMenuEnabled: true,
    enableContextMenu: function () {
      this.isContextMenuEnabled = true;
    },
    disableContextMenu: function () {
      this.isContextMenuEnabled = false;
    },

    contextMenuTimeout: null,
    startContextMenuTimer: function () {
      //console.log('startContextMenuTimer');

      var t = this;

      t.killContextMenuTimer();

      t.contextMenuTimer = setTimeout(function () {
        t.hideContextMenu();
        t.killContextMenuTimer();
      }, 750);
    },
    killContextMenuTimer: function () {
      var timer = this.contextMenuTimer;

      //console.log('killContextMenuTimer', timer);

      if (timer != null) {
        clearTimeout(timer);
        delete timer;
        timer = null;
      }
    },

    hideContextMenu: function () {
      this.contextMenu.hide();
    },

    renderContextMenu: function (x, y) {

      // alway re-render the items so that things like "turn fullscreen on" and "turn fullscreen off" are always written correctly
      var t = this,
				html = '',
				items = t.options.contextMenuItems;

      for (var i = 0, il = items.length; i < il; i++) {

        if (items[i].isSeparator) {
          html += '<div class="mejs-contextmenu-separator"></div>';
        } else {

          var rendered = items[i].render(t);

          // render can return null if the item doesn't need to be used at the moment
          if (rendered != null) {
            html += '<div class="mejs-contextmenu-item" data-itemindex="' + i + '" id="element-' + (Math.random() * 1000000) + '">' + rendered + '</div>';
          }
        }
      }

      // position and show the context menu
      t.contextMenu
				.empty()
				.append($(html))
				.css({ top: y, left: x })
				.show();

      // bind events
      t.contextMenu.find('.mejs-contextmenu-item').each(function () {

        // which one is this?
        var $dom = $(this),
					itemIndex = parseInt($dom.data('itemindex'), 10),
					item = t.options.contextMenuItems[itemIndex];

        // bind extra functionality?
        if (typeof item.show != 'undefined')
          item.show($dom, t);

        // bind click action
        $dom.click(function () {
          // perform click action
          if (typeof item.click != 'undefined')
            item.click(t);

          // close
          t.contextMenu.hide();
        });
      });

      // stop the controls from hiding
      setTimeout(function () {
        t.killControlsTimer('rev3');
      }, 100);

    }
  });

})(mejs.$);


function GoogleTrackEvent(mediaType, eventName, fileName, elapsedTime) {
  if (typeof (_trackEvent) != "undefined") {
    if (elapsedTime != null) {
      _trackEvent(mediaType, eventName, fileName, elapsedTime);
    }
    else {
      _trackEvent(mediaType, eventName, fileName);
    }
  }
}

;
/**
* jQuery lightBox plugin
* This jQuery plugin was inspired and based on Lightbox 2 by Lokesh Dhakar (http://www.huddletogether.com/projects/lightbox2/)
* and adapted to me for use like a plugin from jQuery.
* @name jquery-lightbox-0.5.js
* @author Leandro Vieira Pinho - http://leandrovieira.com
* @version 0.5
* @date April 11, 2008
* @category jQuery plugin
* @copyright (c) 2008 Leandro Vieira Pinho (leandrovieira.com)
* @license CCAttribution-ShareAlike 2.5 Brazil - http://creativecommons.org/licenses/by-sa/2.5/br/deed.en_US
* @example Visit http://leandrovieira.com/projects/jquery/lightbox/ for more informations about this jQuery plugin
*/

// Offering a Custom Alias suport - More info: http://docs.jquery.com/Plugins/Authoring#Custom_Alias
(function ($) {
  /**
  * $ is an alias to jQuery object
  *
  */
  $.fn.lightBox = function (settings) {
    var self = this;

    // Settings to configure the jQuery lightBox plugin how you like
    settings = $.extend({
      // Configuration related to overlay
      overlayBgColor: '#000', 	// (string) Background color to overlay; inform a hexadecimal value like: #RRGGBB. Where RR, GG, and BB are the hexadecimal values for the red, green, and blue values of the color.
      overlayOpacity: 0.8, 	// (integer) Opacity value to overlay; inform: 0.X. Where X are number from 0 to 9
      // Configuration related to navigation
      fixedNavigation: true, 	// (boolean) Boolean that informs if the navigation (next and prev button) will be fixed or not in the interface.
      // Configuration related to images
      imageLoading: '/_images/NmsLightBox/lightbox-ico-loading.gif', 	// (string) Path and the name of the loading icon
      imageBtnPrev: '/_images/NmsLightBox/lightbox-btn-prev.png', 		// (string) Path and the name of the prev button image
      imageBtnNext: '/_images/NmsLightBox/lightbox-btn-next.png', 		// (string) Path and the name of the next button image
      imageBtnClose: '/_images/NmsLightBox/lightbox-btn-close.png', 	// (string) Path and the name of the close btn
      imageBlank: '/_images/NmsLightBox/lightbox-blank.gif', 		// (string) Path and the name of a blank image (one pixel)
      // Configuration related to container image box
      containerBorderSize: 10, 		// (integer) If you adjust the padding in the CSS for the container, #lightbox-container-image-box, you will need to update this value
      containerResizeSpeed: 0, 	// (integer) Specify the resize duration of container image. These number are miliseconds. 400 is default.
      // Configuration related to texts in caption. For example: Image 2 of 8. You can alter either "Image" and "of" texts.
      txtImage: 'Image', // (string) Specify text "Image"
      txtOf: 'of', 	// (string) Specify text "of"
      txtClose: 'close',
      // Configuration related to keyboard navigation
      keyToClose: 'c', 	// (string) (c = close) Letter to close the jQuery lightBox interface. Beyond this letter, the letter X and the SCAPE key is used to.
      keyToPrev: 'p', 	// (string) (p = previous) Letter to show the previous image
      keyToNext: 'n', 	// (string) (n = next) Letter to show the next image.
      // Don�t alter these variables in any way
      imageArray: [],
      activeImage: 0,
      lastActiveImageIndex: 0,
      imageBestFit: true,
      dataMode: 'None',
      showThumbs: false,
      thumbImages: false,
      // D�finit que le LightBox est boxed
      IsBoxed: false,
      BoxSelector: 'body',
      IsBoxInitialized: false,

      // Static Resize
      fixedWidth: null,
      fixedHeight: null,

      // D�finit l'identifiant unique
      itemId: "",
      cssClass: "",
      showTitle: true,
      showPagination: true,
      showNavigation: true,

      // D�finit si on affiche le loading
      showLoading: true
    }, settings);


    // Caching the jQuery object with all elements matched
    var jQueryMatchedObj = this; // This, in this context, refer to jQuery object
    /**
    * Initializing the plugin calling the start function
    *
    * @return boolean false
    */
    function _initialize() {
      _start(this, jQueryMatchedObj); // This, in this context, refer to object (link) which the user have clicked
      return false; // Avoid the browser following the link
    }
    /**
    * Start the jQuery lightBox plugin
    *
    * @param object objClicked The object (link) whick the user have clicked
    * @param object jQueryMatchedObj The jQuery object with all elements matched
    */
    function _start(objClicked, jQueryMatchedObj) {
      if (!settings.IsBoxed) {
        $(document.documentElement).css({ overflow: 'hidden' });
      }
      // S'assure de ne pas cacher les �l�ments si il est boxed
      if (!settings.IsBoxed) {
        // Hime some elements to avoid conflict with overlay in IE. These elements appear above the overlay.
        $('embed, object, select').css({ 'visibility': 'hidden' });
      }

      // Valide s'il est boxed
      if (settings.IsBoxed) {

        // Valide si l'interface est initialis�
        if (!settings.IsBoxInitialized) {

          // Call the function to create the markup structure; style some elements; assign events in some elements.
          _set_interface();

          // D�finit que l'interface est initialis�
          settings.IsBoxInitialized = true;
        }
      }
      else {
        // Call the function to create the markup structure; style some elements; assign events in some elements.
        _set_interface();
      }

      // Unset total images in imageArray
      settings.imageArray.length = 0;
      // Unset image active information
      settings.activeImage = 0;
      // We have an image set? Or just an image? Let�s see it.
      if (jQueryMatchedObj.length == 1) {
        settings.imageArray.push(new Array(objClicked.getAttribute('href'), objClicked.getAttribute('title'), objClicked, objClicked.getAttribute('contentType')));

      } else {
        // Add an Array (as many as we have), with href and title atributes, inside the Array that storage the images references		
        for (var i = 0; i < jQueryMatchedObj.length; i++) {

          var found = false;
          for (var foundIndex = 0; foundIndex < settings.imageArray.length; foundIndex++) {
            if (settings.imageArray[foundIndex][0] == jQueryMatchedObj[i].getAttribute('href')) {
              foundIndex = settings.imageArray.length;
              found = true;
            }
          }
          if (found) {
            if (jQueryMatchedObj[i].getAttribute('href').indexOf("?") > 0) {
              jQueryMatchedObj[i].setAttribute('href', jQueryMatchedObj[i].getAttribute('href') + "&add=" + i);
            }
            else {
              jQueryMatchedObj[i].setAttribute('href', jQueryMatchedObj[i].getAttribute('href') + "?add=" + i);
            }
          }
          settings.imageArray.push(new Array(jQueryMatchedObj[i].getAttribute('href'), jQueryMatchedObj[i].getAttribute('title'), jQueryMatchedObj[i], jQueryMatchedObj[i].getAttribute('contentType')));
        }
      }
      while (settings.imageArray[settings.activeImage][0] != objClicked.getAttribute('href')) {
        settings.activeImage++;
      }
      // Call the function that prepares image exibition
      _set_image_to_view();
    }

    function _set_interface() {
      // D�finit le balisage du bouton close
      var btnCloseMarkup = !settings.IsBoxed ? '<a href="#" class="lightbox-secNav-btnClose ' + settings.cssClass + '"><span class="lightbox-image-details-close ' + settings.cssClass + '">' + settings.txtClose + '</span><img src="' + settings.imageBtnClose + '"></a>' : '';

      // D�finit le style boxed
      var boxedStyle = settings.IsBoxed ? "position:static;" : "";

      if (settings.fixedWidth != null) {
        boxedStyle = boxedStyle + "width:" + settings.fixedWidth + "px;";
      }


      if (settings.fixedHeight != null) {
        boxedStyle = boxedStyle + "height:" + settings.fixedHeight + "px;";
      }

      // Apply the HTML markup into body tag

      var overlay = $('<div class="jquery-overlay  ' + settings.cssClass + '" style="display:none;"></div>');
      overlay.css({ top: document.documentElement.scrollTop });

      var lightbox = $('<div class="jquery-lightbox  ' + settings.cssClass + '" style="' + boxedStyle + '"><div class="lightbox-container-image-box ' + settings.cssClass + '"><div class="lightbox-container-image ' + settings.cssClass + '"><img class="lightbox-image ' + settings.cssClass + '"><div class="lightbox-video ' + settings.cssClass + '"></div><div style="" class="lightbox-nav ' + settings.cssClass + '"><a href="#" class="lightbox-nav-btnPrev ' + settings.cssClass + '"></a><a href="#" class="lightbox-nav-btnNext ' + settings.cssClass + '"></a></div><div class="lightbox-loading ' + settings.cssClass + '"><a href="#" class="lightbox-loading-link ' + settings.cssClass + '"><img src="' + settings.imageLoading + '"></a></div></div></div><div class="lightbox-container-image-data-box ' + settings.cssClass + '"><div class="lightbox-container-image-data ' + settings.cssClass + '"><div class="lightbox-image-details ' + settings.cssClass + '"><span class="lightbox-image-details-caption ' + settings.cssClass + '"></span><span class="lightbox-image-details-currentNumber ' + settings.cssClass + '"></span></div><div class="lightbox-secNav ' + settings.cssClass + '">' + btnCloseMarkup + '</div></div></div></div>');
      lightbox.css({ top: -10000 });
      $(settings.BoxSelector).append(overlay);
      $(settings.BoxSelector).append(lightbox); if (settings.dataMode == "Over") {
        var h = $('.lightbox-container-image-data-box.' + settings.cssClass).height();
        $('.lightbox-container-image-data-box.' + settings.cssClass).css({ bottom: 0, position: 'absolute', left: 0, width: "100%", zIndex: 10000, opacity: 0.8, paddingTop: 5 });

        $('.lightbox-image-details-caption.' + settings.cssClass + ',.lightbox-image-details-currentNumber.' + settings.cssClass).css({ paddingLeft: 10 });
        $(".lightbox-secNav-btnClose." + settings.cssClass).css({ marginTop: 8 });
      }
      if (settings.dataMode == "Under") {

        var h = $('.lightbox-container-image-data-box.' + settings.cssClass).height();
        $('.lightbox-container-image-data-box.' + settings.cssClass).css({ bottom: 0 - h, position: 'absolute', width: "100%", zIndex: 10000, left: 0 });

        $('.lightbox-image-details-caption.' + settings.cssClass + ',.lightbox-image-details-currentNumber.' + settings.cssClass).css({ paddingLeft: 10 });
        $(".lightbox-secNav-btnClose." + settings.cssClass).css({ paddingTop: 4 });
      }

      // Get page sizes
      var arrPageSizes = ___getPageSize();

      // Valide si on est boxed
      if (!settings.IsBoxed) {
        // Style overlay and show it
        // Height maintenant à 10000%, sinon il arrivait encore qu'il ne remplisse pas totalement l'écran.
        $('.jquery-overlay.' + settings.cssClass + '').css({
          backgroundColor: settings.overlayBgColor,
          opacity: settings.overlayOpacity,
          width: '100%',
          height: '10000%'
        }).fadeIn();
      }

      // Valide si on affiche le chargement
      if (!settings.showLoading) {
        $('.lightbox-loading.' + settings.cssClass + '').hide();
      }

      // Get page scroll
      var arrPageScroll = ___getPageScroll();
      // Calculate top and left offset for the jquery-lightbox div object and show it
      if (settings.fixedWidth == null) {
        $('.jquery-lightbox.' + settings.cssClass + '').css({ width: "", height: "" });
      }
      $('.jquery-lightbox.' + settings.cssClass + '').show();




      // Assigning click events in elements to close overlay
      $('.jquery-overlay.' + settings.cssClass + '').click(function () {
        if (!settings.IsBoxed) {
          _finish();
        }
      });
      // Assign the _finish function to lightbox-loading-link and lightbox-secNav-btnClose objects
      $('.lightbox-loading-link.' + settings.cssClass + ',.lightbox-secNav-btnClose.' + settings.cssClass + '').click(function () {
        if (!settings.IsBoxed) {
          _finish();
        }
        return false;
      });
      // If window was resized, calculate the new overlay dimensions
      $(window).resize(function () {
        // Get page sizes
        var arrPageSizes = ___getPageSize();
        // Style overlay and show it
        $('.jquery-overlay.' + settings.cssClass + '').css({
          width: arrPageSizes[0],
          height: arrPageSizes[1]
        });
        if (!settings.IsBoxed) {
          $('.jquery-lightbox.' + settings.cssClass + '').css("top", (($(window).height() - $('.jquery-lightbox.' + settings.cssClass + '').outerHeight()) / 2) + $(window).scrollTop() + "px");
          $('.jquery-lightbox.' + settings.cssClass + '').css("left", (($(window).width() - $('.jquery-lightbox.' + settings.cssClass + '').outerWidth()) / 2) + $(window).scrollLeft() + "px");
        }

      });
    }
    /**
    * Prepares image exibition; doing a image�s preloader to calculate it�s size
    *
    */
    function _set_image_to_view() { // show the loading
      // Valide si on affiche le chargement
      if (settings.showLoading) {
        // Show the loading
        $('.lightbox-loading.' + settings.cssClass + '').show();
      }

      if (settings.fixedNavigation) {
        $('.lightbox-image.' + settings.cssClass + ',.lightbox-container-image-data-box.' + settings.cssClass + ',.lightbox-image-details-currentNumber.' + settings.cssClass + '').hide();
      } else {
        // Hide some elements
        $('.lightbox-image,.lightbox-nav.' + settings.cssClass + ',.lightbox-nav-btnPrev.' + settings.cssClass + ',.lightbox-nav-btnNext.' + settings.cssClass + ',.lightbox-container-image-data-box.' + settings.cssClass + ',.lightbox-image-details-currentNumber.' + settings.cssClass + '').hide();
      }

      var contentType = "Image";

      //On v�rifie si l'�l�ment existe et si oui on en extrait le type de contenu
      if (settings.imageArray[settings.activeImage] != undefined && settings.imageArray[settings.activeImage] != null) {
        contentType = settings.imageArray[settings.activeImage][3];
      }

      if (contentType == "Video") {
        //On initialise les param�tres pour le player silverlight
        var parentElementObject = $('.lightbox-video.' + settings.cssClass + '');
        var idObject = ("lightbox-video-object " + settings.cssClass);
        var paramsObject = ("preload=none,MediaFiles=Video|" + settings.imageArray[settings.activeImage][0]);
        $('.lightbox-image.' + settings.cssClass + '').hide();
        $('.lightbox-video.' + settings.cssClass + '').show();

        var ie9 = (jQuery.browser.msie && parseInt(jQuery.browser.version) < 9);

        if (!ie9) {


          //On initialise les param�tres pour le player silverlight
          var lbox = $('.lightbox-video.' + settings.cssClass);
          lbox.find(".lightbox-videoElement").remove();
          lbox[0].innerHTML += "<video class='lightbox-videoElement' id='lightboxvideoobject" + settings.cssClass + "'  controls='controls' autoplay='true' preload='none'><source src='" + settings.imageArray[settings.activeImage][0] + "'/></video>"


          var videoObj = $("#lightboxvideoobject" + settings.cssClass);


          //   var idObject = ("lightbox-video-object " + settings.cssClass);
          //  var paramsObject = ("preload=none,MediaFiles=Video|" + );
          // JavaScript object for later use
          videoObj.mediaelementplayer({

            defaultVideoWidth: 480,
            // if the <video height> is not specified, this is the default
            defaultVideoHeight: 270,
            // if set, overrides <video width>
            videoWidth: $('.jquery-lightbox.' + settings.cssClass).width(),
            // if set, overrides <video height>
            videoHeight: $('.jquery-lightbox.' + settings.cssClass).height(),
            // initial volume when the player starts
            startVolume: 0.8,
            // useful for <audio> player loops
            loop: false,
            // enables Flash and Silverlight to resize to content size
            enableAutosize: false,
            // the order of controls you want on the control bar (and other plugins below)
            features: ['playpause', 'progress', 'current', 'duration', 'tracks', 'volume', 'fullscreen'],
            // automatically selects a <track> element
            startLanguage: '',
            // a list of languages to auto-translate via Google
            translations: [],
            // a dropdownlist of automatic translations
            translationSelector: false,
            alwaysShowControls: true,
            // key for tranlsations
            googleApiKey: ''
          });

          // s'assure que la dimension de la vidéo ne dépasse l'espace disponible.
          $('.jquery-lightbox.' + settings.cssClass).find("video").css({
            width: '100%',
            height: '100%'
          });

          self.video = videoObj;
        }
        else {

          //On initialise les param�tres pour le player silverlight
          var parentElementObject = $('.lightbox-video.' + settings.cssClass + '');
          var idObject = ("lightbox-video-object " + settings.cssClass);
          var paramsObject = ("MediaFiles=Video|" + settings.imageArray[settings.activeImage][0]);

          //On cr�� le player silverlight avec les param�tres voulu
          Silverlight.createObjectEx(
            {
              source: "/ClientBin/Nms.Media.Silverlight.Player.xap",
              parentElement: parentElementObject[0],
              id: idObject,
              properties: {
                width: '100%',
                height: '100%',
                background: '#CCCCCC',
                isWindowless: 'true',
                minruntimeversion: '4.0.50826.0'
              },
              events: {
                onError: null,
                onLoad: null
              },
              context: null,
              initParams: paramsObject
            }
            );
          var videoObj = parentElementObject.children(":first");
        }


        // Parcours les �l�ments
        for (imageIndex = 0; imageIndex < settings.imageArray.length; imageIndex++) {
          // S'assure d'enlever les classe non n�cessaires
          $(settings.imageArray[imageIndex][2]).removeClass("lightbox-image-selected " + settings.cssClass);
        }

        // Ajoute la classe d'item s�lectionn�
        $(settings.imageArray[settings.activeImage][2]).addClass("lightbox-image-selected " + settings.cssClass);
        //On cache le controle d'image et on affiche celui de vid�o

        var fixWidth = videoObj.width();
        var fixHeight = videoObj.height();

        if (settings.fixedWidth != null) {
          fixWidth = settings.fixedWidth;
        }
        if (settings.fixedHeight != null) {
          fixHeight = settings.fixedHeight;
        }

        self.video = videoObj;

        // Perfomance an effect in the image container resizing it

        _resize_container_image_box(fixWidth, fixHeight, 1);
        // Valide si l'index est disponible dans le vecteur d'image
        if (settings.activeImage > -1 && settings.activeImage < settings.imageArray.length) {
          // D�finit le dernier index
          settings.lastActiveImageIndex = settings.activeImage;
        }
        else {
          // D�finit le dernier index
          settings.activeImage = settings.lastActiveImageIndex;
        }
      } else {
        // Image preload process
        var objImagePreloader = new Image();
        objImagePreloader.onload = function () {


          $('.lightbox-image.' + settings.cssClass + '').attr('src', settings.imageArray[settings.activeImage][0]);

          // Parcours les �l�ments
          for (imageIndex = 0; imageIndex < settings.imageArray.length; imageIndex++) {
            // S'assure d'enlever les classe non n�cessaires
            $(settings.imageArray[imageIndex][2]).removeClass("lightbox-image-selected " + settings.cssClass);
          }

          // Ajoute la classe d'item s�lectionn�
          $(settings.imageArray[settings.activeImage][2]).addClass("lightbox-image-selected " + settings.cssClass);

          // Valide s'il y a une largeur d�finit
          if (settings.fixedWidth != null) {
            objImagePreloader.width = settings.fixedWidth;
          }

          // Valide s'il y a une hauteur de d�finit
          if (settings.fixedHeight != null) {
            objImagePreloader.height = settings.fixedHeight;
          }


          // Perfomance an effect in the image container resizing it
          _resize_container_image_box(objImagePreloader.width, objImagePreloader.height, 0);
          //	clear onLoad, IE behaves irratically with animated gifs otherwise

          //On v�rifie si un vid�o existe et si oui ou le d�mat�rialise
          var videoObject = $('.lightbox-video.' + settings.cssClass + '');
          if (videoObject.length > 0) {
            videoObject.empty();
          }


          //On cache le controle de vid�o et on affiche celui d'image
          $('.lightbox-video.' + settings.cssClass + '').hide();
          $('.lightbox-image.' + settings.cssClass + '').show();

          objImagePreloader.onload = function () { };
        };

        // Valide si l'index est disponible dans le vecteur d'image
        if (settings.activeImage > -1 && settings.activeImage < settings.imageArray.length) {
          // D�finit la nouvelle source d'image
          objImagePreloader.src = settings.imageArray[settings.activeImage][0];
          // D�finit le dernier index
          settings.lastActiveImageIndex = settings.activeImage;
        }
        else {
          // D�finit le dernier index
          settings.activeImage = settings.lastActiveImageIndex;
          // D�finit la nouvelle image
          objImagePreloader.src = settings.imageArray[settings.lastActiveImageIndex][0];
        }
      }
    };
    /**
    * Perfomance an effect in the image container resizing it
    *
    * @param integer intImageWidth The image�s width that will be showed
    * @param integer intImageHeight The image�s height that will be showed
    */
    function _resize_container_image_box(intImageWidth, intImageHeight, isVideo) {
      if (isVideo) {
        // Perfomance the effect
        $('.lightbox-container-image-box.' + settings.cssClass + '').animate({ width: "100%" }, settings.containerResizeSpeed, function () { _show_video(); });
      } else {
        // Perfomance the effect
        if (settings.containerResizeSpeed > 0) {
          $('.lightbox-container-image-box.' + settings.cssClass + '').animate({ width: "100%" }, settings.containerResizeSpeed, function () { _show_image(); });
        }
        else {
          $('.lightbox-container-image-box.' + settings.cssClass + '').css({ width: "100%" });
          // ca prend le settimeout 0 pour que le resize se fasse correctement.
          setTimeout(function () {
            _show_image();
          }, 0);
        }
      }
      // calcul des paddings
      _show_image_data();

      // Configuration de la hauteur du lightbox.
      $('.lightbox-container-image-box.' + settings.cssClass + '').height("100%");
      if (settings.fixedHeight != null && settings.fixedWidth != null) {
        $('.lightbox-container-image.' + settings.cssClass + '').height($('.lightbox-container-image-box.' + settings.cssClass + '').height() - (parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-top").replace('px', '')) + parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-bottom").replace('px', ''))));
      } else if (settings.fixedHeight != null) {
        $('.lightbox-container-image.' + settings.cssClass + '').height(intImageHeight - (parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-top").replace('px', '')) + parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-bottom").replace('px', ''))));
      } else {
        $('.jquery-lightbox.' + settings.cssClass + '').height(intImageHeight + parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-top").replace('px', '')) + parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-bottom").replace('px', '')));
        $('.lightbox-container-image.' + settings.cssClass + '').height($('.jquery-lightbox.' + settings.cssClass + '').height() - parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-top").replace('px', '')) - parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-bottom").replace('px', '')));
        $('.lightbox-nav.' + settings.cssClass + '').height($('.lightbox-container-image.' + settings.cssClass + '').height());
      }

      // Configuration de la largeur du lightbox.
      if (settings.fixedWidth != null) {
        $('.lightbox-container-image.' + settings.cssClass + '').width(intImageWidth - (parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-left").replace('px', '')) + parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-right").replace('px', ''))));
      } else {
        $('.jquery-lightbox.' + settings.cssClass + '').width(intImageWidth + parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-left").replace('px', '')) + parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-right").replace('px', '')));
        $('.lightbox-container-image.' + settings.cssClass + '').width($('.jquery-lightbox.' + settings.cssClass + '').width() - parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-left").replace('px', '')) - parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-right").replace('px', '')));
        $('.lightbox-nav.' + settings.cssClass + '').width($('.lightbox-container-image.' + settings.cssClass + '').width());
      }

      $('.lightbox-nav-btnPrev.' + settings.cssClass + ',.lightbox-nav-btnNext.' + settings.cssClass + '').css({ height: "100%" });
      $('.lightbox-nav.' + settings.cssClass + '').width($('.lightbox-container-image.' + settings.cssClass + '').width());
      if (isVideo) {
        // Si c'est un vidéo, on veut pouvoir cliquer sur les boutons sans naviguer.
        // $('.lightbox-nav.' + settings.cssClass + '').height($('.lightbox-container-image.' + settings.cssClass + '').height());

        $('.mejs-controls').css('z-Index', 1000);


        $('.lightbox-nav-btnPrev.' + settings.cssClass + ',.lightbox-nav-btnNext.' + settings.cssClass + '').css({ width: "35px" });
      } else {
        $('.lightbox-nav.' + settings.cssClass + '').height($('.lightbox-container-image.' + settings.cssClass + '').height());
      }
    };
    /**
    * Show the prepared image
    *
    */
    function _show_image() {
      $('.lightbox-loading.' + settings.cssClass + '').hide();


      $('.lightbox-image.' + settings.cssClass + '').css({
        "width": "",
        "height": ""
      }).removeAttr("width").removeAttr("height");


      $('.lightbox-image.' + settings.cssClass + '').fadeIn(function () {
        _set_navigation();
        if (settings.imageBestFit) {
          $('.lightbox-image.' + settings.cssClass + '').scaleImage();

          // On redimenssionne le contenant si la hauteur ou la largeur n'est pas prédéfinie.
          if (settings.fixedHeight == null) {
            $('.jquery-lightbox.' + settings.cssClass + '').height($('.lightbox-image.' + settings.cssClass + '').height() + parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-top").replace('px', '')) + parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-bottom").replace('px', '')));
            $('.lightbox-container-image.' + settings.cssClass + '').height($('.jquery-lightbox.' + settings.cssClass + '').height() - parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-top").replace('px', '')) - parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-bottom").replace('px', '')));
            $('.lightbox-nav.' + settings.cssClass + '').height($('.lightbox-container-image.' + settings.cssClass + '').height());
          }

          if (settings.fixedWidth == null) {
            $('.jquery-lightbox.' + settings.cssClass + '').width($('.lightbox-image.' + settings.cssClass + '').width() + parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-left").replace('px', '')) + parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-right").replace('px', '')));
            $('.lightbox-container-image.' + settings.cssClass + '').width($('.jquery-lightbox.' + settings.cssClass + '').width() - parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-left").replace('px', '')) - parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-right").replace('px', '')));
            $('.lightbox-nav.' + settings.cssClass + '').width($('.lightbox-container-image.' + settings.cssClass + '').width());
          }

        }
        if (!settings.IsBoxed) {
          $('.jquery-lightbox.' + settings.cssClass + '').css("top", (($(window).height() - $('.jquery-lightbox.' + settings.cssClass + '').outerHeight()) / 2) + $(window).scrollTop() + "px");
          $('.jquery-lightbox.' + settings.cssClass + '').css("left", (($(window).width() - $('.jquery-lightbox.' + settings.cssClass + '').outerWidth()) / 2) + $(window).scrollLeft() + "px");
        }
      });
      _preload_neighbor_images();
      $(document).trigger("lightbox:imageLoaded", [ $('.lightbox-image.' + settings.cssClass + '') ]);
    };
    /**
    * Show the prepared video
    *
    */
    function _show_video() {
      $('.lightbox-loading.' + settings.cssClass + '').hide();
      $('.lightbox-video.' + settings.cssClass + '').fadeIn(function () {
        _set_navigation();

        if (settings.imageBestFit) {
          //On garde en mémoire la hauteur et la largeur original
          var oldWidth = $('.lightbox-videoElement').width();
          var oldHeight = $('.lightbox-videoElement').height();

          // On redimensionne le video afin qu'il soit le plus grand possible tout en gardant son ratio
          $('.lightbox-video.' + settings.cssClass + '').scaleVideo($('.lightbox-videoElement').width(), $('.lightbox-videoElement').height());

          //On va chercher la nouvelle hauteur et la nouvelle largeur
          var newWidth = (settings.fixedWidth == null) ? oldWidth : $('.lightbox-container-image.' + settings.cssClass + '').width();
          var newHeight = (settings.fixedHeight == null) ? oldHeight : $('.lightbox-container-image.' + settings.cssClass + '').height();

          if (oldWidth != newWidth || oldHeight != newHeight) {
            if (self.video) {
              //Note(sjoyal) : Je fais un setTimeout afin de s'assurer que la fonction setVideoSize à été initialisé dans la fonction changePlayerSize
              setTimeout(function () {
                try {
                  // try catch pour le player silverlight qui n'aime pas ces méthodes.
                  self.video[0].player.changePlayerSize(newWidth, newHeight);
                  self.video[0].player.setControlsSize();
                } catch (ex) { }
              }, 100);
            }
          }

          // On redimenssionne le contenant si la hauteur ou la largeur n'est pas prédéfinie.
          if (settings.fixedHeight == null) {
            $('.jquery-lightbox.' + settings.cssClass + '').height($('.lightbox-video.' + settings.cssClass + '').height() + parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-top").replace('px', '')) + parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-bottom").replace('px', '')));
            $('.lightbox-container-image.' + settings.cssClass + '').height(newHeight);
            $('.lightbox-nav.' + settings.cssClass + '').height($('.lightbox-container-image.' + settings.cssClass + '').height());
          }

          if (settings.fixedWidth == null) {
            $('.jquery-lightbox.' + settings.cssClass + '').width($('.lightbox-video.' + settings.cssClass + '').width() + parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-left").replace('px', '')) + parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-right").replace('px', '')));
            $('.lightbox-container-image.' + settings.cssClass + '').width($('.jquery-lightbox.' + settings.cssClass + '').width() - parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-left").replace('px', '')) - parseInt($('.lightbox-container-image.' + settings.cssClass + '').css("padding-right").replace('px', '')));
            $('.lightbox-nav.' + settings.cssClass + '').width($('.lightbox-container-image.' + settings.cssClass + '').width());
          }
        }

        if (!settings.IsBoxed) {
          $('.jquery-lightbox.' + settings.cssClass + '').css("top", (($(window).height() - $('.jquery-lightbox.' + settings.cssClass + '').outerHeight()) / 2) + $(window).scrollTop() + "px");
          $('.jquery-lightbox.' + settings.cssClass + '').css("left", (($(window).width() - $('.jquery-lightbox.' + settings.cssClass + '').outerWidth()) / 2) + $(window).scrollLeft() + "px");
        }
      });
      _preload_neighbor_images();
      $(document).trigger("lightbox:imageLoaded", [ $('.lightbox-video.' + settings.cssClass + '') ]);
    };
    /**
    * Show the image information
    *
    */
    function _show_image_data() {

      $('.lightbox-container-image-data-box.' + settings.cssClass + '').show();
      $('.lightbox-image-details-caption.' + settings.cssClass + '').hide();

      // Valide si on affiche les détails de l'image
      if (settings.showTitle) {
        // Affiche les détails de l'image
        $('.lightbox-image-details-caption.' + settings.cssClass + '').show();
      }
      else {
        // Cache les détails de l'image
        $('.lightbox-image-details-caption.' + settings.cssClass + '').hide();
      }

      // Valide si on affiche la navigation
      if (settings.showPagination) {
        // Affiche les détails de la navigation
        $('.lightbox-image-details-currentNumber.' + settings.cssClass + '').show();
      }
      else {
        // Cache les détails de la navigation
        $('.lightbox-image-details-currentNumber.' + settings.cssClass + '').hide();
      }

      // Valide si on affiche les panneaux de navigation
      if (settings.showNavigation) {
        // Affiche le panneaux de navigation
        $('.lightbox-nav.' + settings.cssClass + '').show();
      }
      else {
        // Cache le panneaux de navigation
        $('.lightbox-nav.' + settings.cssClass + '').hide();
      }


      $('.lightbox-image-details-caption.' + settings.cssClass + '').html('');
      if (settings.imageArray[settings.activeImage][1]) {
        // Valide si on affiche le texte de l'image
        if (settings.showTitle) {
          // Affiche le texte de l'image 
          $('.lightbox-image-details-caption.' + settings.cssClass + '').html(settings.imageArray[settings.activeImage][1]).show();
        }
      }
      // If we have a image set, display 'Image X of X'
      if (settings.imageArray.length > 1) {

        if (settings.showPagination) {
          $('.lightbox-image-details-currentNumber.' + settings.cssClass + '').html(settings.txtImage + ' ' + (settings.activeImage + 1) + ' ' + settings.txtOf + ' ' + settings.imageArray.length).show();
        }
      }
      if (settings.dataMode == "None") {
        $('.lightbox-container-image.' + settings.cssClass + '').parent().height($('.lightbox-container-image.' + settings.cssClass + '').parent().height() - $('.lightbox-container-image-data-box.' + settings.cssClass + '')[0].offsetHeight);
      }
      else {
        $('.lightbox-container-image.' + settings.cssClass + '').parent().height($('.lightbox-container-image.' + settings.cssClass + '').parent().height());
      }

      // trigger un évenement custom sur lequel on peut écouter.

      var $container = $('.lightbox-container-image-box.' + settings.cssClass + '')
      $(document).trigger(jQuery.Event("lightboxRendered", {
        'lightbox': {
          group: settings.GroupName,
          $imageContainer: $container,
          $lightbox: $('.jquery-lightbox.' + settings.cssClass + '')
        }
      }));

      // ajoute les boutons de navigations thumbs
      if (settings.showThumbs) {
        // vide la liste
        $container.find(".lightbox-thumbContainer").remove();
        // crée le container
        var $thumContainer = $("<div />", {
          'class': 'lightbox-thumbContainer'
        });
        var videoControls = $('.lightbox-video.' + settings.cssClass + ' .mejs-controls');
        setTimeout(function () {
          if (videoControls.length && $('.lightbox-video.' + settings.cssClass + '').is(":visible")) {
            $thumContainer.css('margin-bottom', videoControls.height())
          }
        }, 0);

        // ajoute au parent.
        $container.append($thumContainer);
        var $imgs = $("a[rel='" + settings.GroupName + "']");
        // valide qu'on a plus d'une image.
        if ($imgs.length > 1) {
          // pour chaque lien vers une image du lightbox
          $("a[rel='" + settings.GroupName + "']").each(function (index) {
            var $img = $(this),
            // crée un div clickable.
           $thumb = $("<div />", {
             'class': 'lightbox-thumb ' + ($img.is('.lightbox-image-selected') ? 'selected ' : ' ') + ((settings.thumbImages) ? 'image' : ''),
             click: function () {
               settings.activeImage = index;
               _set_image_to_view();
               _disable_keyboard_navigation();
               $thumContainer.find(".lightbox-thumb.selected").removeClass("selected");
               $(this).addClass("selected");
             }
           }).appendTo($thumContainer);

            if (settings.thumbImages) {
              $thumb.css({
                'background-image': 'url(' + $img.find("img").attr("src") + ')'
              });
            }
          });
        }
      }

    }
    /**
    * Display the button navigations
    *
    */
    function _set_navigation() {
      //   $('.lightbox-nav.' + settings.cssClass + '').show();

      // Instead to define this configuration in CSS file, we define here. And it�s need to IE. Just.
      $('.lightbox-nav-btnPrev.' + settings.cssClass + ',.lightbox-nav-btnNext.' + settings.cssClass + '').css({ 'background': 'transparent url(' + settings.imageBlank + ') no-repeat' });

      // Show the prev button, if not the first image in set
      if (settings.activeImage != 0) {
        if (settings.fixedNavigation) {
          $('.lightbox-nav-btnPrev.' + settings.cssClass + '').show().css({ 'background': 'url(' + settings.imageBtnPrev + ') left 50% no-repeat' })
            .unbind()
            .bind('click', function () {
              if (settings.activeImage != 0) {
                settings.activeImage = settings.activeImage - 1;
                _set_image_to_view();
              }
              return false;
            });
        } else {
          // Show the images button for Next buttons
          $('.lightbox-nav-btnPrev.' + settings.cssClass + '').show().unbind().hover(function () {
            $(this).css({ 'background': 'url(' + settings.imageBtnPrev + ') left 50% no-repeat' });
          }, function () {
            $(this).css({ 'background': 'transparent url(' + settings.imageBlank + ') no-repeat' });
          }).show().bind('click', function () {
            if (settings.activeImage != 0) {
              settings.activeImage = settings.activeImage - 1;
              _set_image_to_view();
            }
            return false;
          });
        }
      }
      else {
        $('.lightbox-nav-btnPrev.' + settings.cssClass + '').hide();
      }

      // Show the next button, if not the last image in set
      if (settings.activeImage != (settings.imageArray.length - 1)) {
        if (settings.fixedNavigation) {
          $('.lightbox-nav-btnNext.' + settings.cssClass + '').show().css({ 'background': 'url(' + settings.imageBtnNext + ') right 50% no-repeat' })
            .unbind()
            .bind('click', function () {
              if (settings.activeImage != (settings.imageArray.length - 1)) {
                settings.activeImage = settings.activeImage + 1;
                _set_image_to_view();
              }
              return false;
            });
        } else {
          // Show the images button for Next buttons
          $('.lightbox-nav-btnNext.' + settings.cssClass + '').show().unbind().hover(function () {
            $(this).css({ 'background': 'url(' + settings.imageBtnNext + ') right 50% no-repeat' });
          }, function () {
            $(this).css({ 'background': 'transparent url(' + settings.imageBlank + ') no-repeat' });
          }).show().bind('click', function () {
            if (settings.activeImage != (settings.imageArray.length - 1)) {
              settings.activeImage = settings.activeImage + 1;
              _set_image_to_view();
            }
            return false;
          });
        }
      }
      else {
        $('.lightbox-nav-btnNext.' + settings.cssClass + '').hide()
      }
      // Enable keyboard navigation
      _disable_keyboard_navigation();
      _enable_keyboard_navigation();
    }
    /**
    * Enable a support to keyboard navigation
    *
    */
    function _enable_keyboard_navigation() {
      // Valide si on active la navigation par clavier
      if (settings.showNavigation) {
        _disable_keyboard_navigation();
        $(document).keydown(_keyboard_action);
      }
    }
    /**
    * Disable the support to keyboard navigation
    *
    */
    function _disable_keyboard_navigation() {

      $(document).unbind("keydown", _keyboard_action);
    }
    self.disableKeyboard = function () {
      _disable_keyboard_navigation();
    };
    /**
    * Perform the keyboard actions
    *
    */
    function _keyboard_action(objEvent) {
      // valide si on est dans un lightbox modal, si c'est le cas s'assure que c'est celui en cours pour la navigation clavier.
      var modal = $("body").children(".jquery-lightbox");
      if ((modal.length && modal[0] != $('.jquery-lightbox.' + settings.cssClass + '')[0]) || !$('.jquery-lightbox.' + settings.cssClass + '').length) {
        return;
      }

      // To ie
      if (objEvent == null) {
        keycode = event.keyCode;
        escapeKey = 27;
        // To Mozilla
      } else {
        keycode = objEvent.keyCode;
        escapeKey = objEvent.DOM_VK_ESCAPE;
      }

      if (settings.activeImage && ((settings.imageArray.length - 1) > settings.activeImage) && ((keycode == 39) || (keycode == 37))) {
        // Désactive la navigation du KeyBoard le temps que l'on change l'image pour éviter les problèmes resizing lors des navigations rapide
        _disable_keyboard_navigation();
      }

      // Get the key in lower case form
      key = String.fromCharCode(keycode).toLowerCase();
      // Verify the keys to close the ligthBox
      if ((key == settings.keyToClose) || (key == 'x') || (keycode == escapeKey)) {
        if (!settings.IsBoxed) {
          _finish();
        }
      }
      // Verify the key to show the previous image
      if ((key == settings.keyToPrev) || (keycode == 37)) {
        // If we�re not showing the first image, call the previous
        if (settings.activeImage != 0) {
          settings.activeImage = settings.activeImage - 1;
          _set_image_to_view();
          _disable_keyboard_navigation();
        }
      }
      // Verify the key to show the next image
      if ((key == settings.keyToNext) || (keycode == 39)) {
        // If we�re not showing the last image, call the next
        if (settings.activeImage != (settings.imageArray.length - 1)) {
          settings.activeImage = settings.activeImage + 1;
          _set_image_to_view();
          _disable_keyboard_navigation();
        }
      }
    }
    /**
    * Preload prev and next images being showed
    *
    */
    function _preload_neighbor_images() {
      if ((settings.imageArray.length - 1) > settings.activeImage) {
        objNext = new Image();
        objNext.src = settings.imageArray[settings.activeImage + 1][0];
      }
      if (settings.activeImage > 0) {
        objPrev = new Image();
        objPrev.src = settings.imageArray[settings.activeImage - 1][0];
      }
    }
    /**
    * Remove jQuery lightBox plugin HTML markup
    *
    */
    function _finish() {
      if (!settings.IsBoxed) {
        $(document.documentElement).css({ overflow: 'auto' });
      }
      $(".lightbox-image-selected").each(function (x) {
        $(this).removeClass("lightbox-image-selected");
      });
      $('.jquery-lightbox.' + settings.cssClass + '').remove();
      $('.jquery-overlay.' + settings.cssClass + '').fadeOut(function () { $('.jquery-overlay.' + settings.cssClass + '').remove(); });
      // Show some elements to avoid conflict with overlay in IE. These elements appear above the overlay.
      $('embed, object, select').css({ 'visibility': 'visible' });
    }
    /**
    / THIRD FUNCTION
    * getPageSize() by quirksmode.com
    *
    * @return Array Return an array with page width, height and window width, height
    */
    function ___getPageSize() {
      var xScroll, yScroll;
      if (window.innerHeight && window.scrollMaxY) {
        xScroll = window.innerWidth + window.scrollMaxX;
        yScroll = window.innerHeight + window.scrollMaxY;
      } else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
        xScroll = document.body.scrollWidth;
        yScroll = document.body.scrollHeight;
      } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
        xScroll = document.body.offsetWidth;
        yScroll = document.body.offsetHeight;
      }
      var windowWidth, windowHeight;
      if (self.innerHeight) {	// all except Explorer
        if (document.documentElement.clientWidth) {
          windowWidth = document.documentElement.clientWidth;
        } else {
          windowWidth = self.innerWidth;
        }
        windowHeight = self.innerHeight;
      } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
      } else if (document.body) { // other Explorers
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
      }
      // for small pages with total height less then height of the viewport
      if (yScroll < windowHeight) {
        pageHeight = windowHeight;
      } else {
        pageHeight = yScroll;
      }
      // for small pages with total width less then width of the viewport
      if (xScroll < windowWidth) {
        pageWidth = xScroll;
      } else {
        pageWidth = windowWidth;
      }
      arrayPageSize = new Array(pageWidth, pageHeight, windowWidth, windowHeight);
      return arrayPageSize;
    };
    /**
    / THIRD FUNCTION
    * getPageScroll() by quirksmode.com
    *
    * @return Array Return an array with x,y page scroll values.
    */
    function ___getPageScroll() {
      var xScroll, yScroll;
      if (self.pageYOffset) {
        yScroll = self.pageYOffset;
        xScroll = self.pageXOffset;
      } else if (document.documentElement && document.documentElement.scrollTop) {	 // Explorer 6 Strict
        yScroll = document.documentElement.scrollTop;
        xScroll = document.documentElement.scrollLeft;
      } else if (document.body) {// all other Explorers
        yScroll = document.body.scrollTop;
        xScroll = document.body.scrollLeft;
      }
      arrayPageScroll = new Array(xScroll, yScroll);
      return arrayPageScroll;
    };
    /**
    * Stop the code execution from a escified time in milisecond
    *
    */
    function ___pause(ms) {
      var date = new Date();
      curDate = null;
      do { var curDate = new Date(); }
      while (curDate - date < ms);
    };
    // Return the jQuery object for chaining. The unbind method is used to avoid click conflict when the plugin is called more than once
    return this.unbind('click').click(_initialize);
  };
})(jQuery);                                                                                                                                                       // Call and execute the function immediately passing the jQuery object




(function ($) {
  //Fonction qui redimensionne le video
  $.fn.scaleVideo = function (originalWidth, originalHeight) {
    var opts = { parent: false, scale: 'fit', center: true, fade: 0 };

    var $vid = $(this);
    var $parent = opts.parent ? $vid.parents(opts.parent) : $vid.parent(); // if not supplied, use default direct parent
    $parent.css({ opacity: 0, overflow: 'hidden' }); // keep the video inside boundaries

    if ($parent.length > 0) {
      $vid.removeAttr('height').removeAttr('width');

      //Scale
      var imgW = originalWidth,
          imgH = originalHeight,
          destW = $parent.width(),
          destH = $parent.height(),
          borderW = parseInt($vid.css("borderLeftWidth"), 10) + parseInt($vid.css("borderRightWidth"), 10),
          borderH = parseInt($vid.css("borderTopWidth"), 10) + parseInt($vid.css("borderBottomWidth"), 10),
          ratioX, ratioY, ratio, newWidth, newHeight;

      if (destH === 0 || destW === 0) { // parent is invisible, eg. display: none
        var parentSize = getHiddenElemSize($parent);
        destW = parentSize.width;
        destH = parentSize.height;
      }

      // check for valid border values. IE takes in account border size when calculating width/height so just set to 0
      borderW = isNaN(borderW) ? 0 : borderW;
      borderH = isNaN(borderH) ? 0 : borderH;

      // calculate scale ratios
      ratioX = destW / imgW;
      ratioY = destH / imgH;

      // Determine which algorithm to use
      if (opts.scale === "fit") {
        ratio = ratioX < ratioY ? ratioX : ratioY;
      } else if (opts.scale === "fill") {
        ratio = ratioX > ratioY ? ratioX : ratioY;
      }

      // calculate our new video dimensions
      newWidth = parseInt(imgW * ratio, 10) - borderW;
      newHeight = parseInt(imgH * ratio, 10) - borderH;

      // Set new dimensions to both css and video's attributes
      $vid.css({
        "width": newWidth,
        "height": newHeight
      }).attr({
        "width": newWidth,
        "height": newHeight
      });

      if (opts.fade > 0) { // fade-in effect
        $parent.animate({ opacity: 1 }, opts.fade);
      } else {
        $parent.css("opacity", 1);
      }
    }
  }

  $.fn.scaleImage = function (options) {
    var opts = $.extend({ parent: false, scale: 'fit', center: true, fade: 0 }, options); // merge default options with user's

    return this.each(function () {
      var $img = $(this);
      var $parent = opts.parent ? $img.parents(opts.parent) : $img.parent(); // if not supplied, use default direct parent
      $parent.css({ opacity: 0, overflow: 'hidden' }); // keep the img inside boundaries

      if ($parent.length > 0) {
        $img.removeAttr('height').removeAttr('width');
        if (this.complete) { // img already loaded/cached
          scale($img, $parent);
        } else {
          $img.bind('load',function () {
            scale($img, $parent);
          });
        }
      }
    });

    function scale($img, $parent) {



      var imgSize = getOriginalImgSize($img),
                imgW = imgSize.width,
                imgH = imgSize.height,
                destW = $parent.width(),
                destH = $parent.height(),
                borderW = parseInt($img.css("borderLeftWidth"), 10) + parseInt($img.css("borderRightWidth"), 10),
                borderH = parseInt($img.css("borderTopWidth"), 10) + parseInt($img.css("borderBottomWidth"), 10),
                ratioX, ratioY, ratio, newWidth, newHeight;

      if (destH === 0 || destW === 0) { // parent is invisible, eg. display: none
        var parentSize = getHiddenElemSize($parent);
        destW = parentSize.width;
        destH = parentSize.height;
      }

      // check for valid border values. IE takes in account border size when calculating width/height so just set to 0
      borderW = isNaN(borderW) ? 0 : borderW;
      borderH = isNaN(borderH) ? 0 : borderH;

      // calculate scale ratios
      ratioX = destW / imgW;
      ratioY = destH / imgH;

      // Determine which algorithm to use
      if (opts.scale === "fit") {
        ratio = ratioX < ratioY ? ratioX : ratioY;
      } else if (opts.scale === "fill") {
        ratio = ratioX > ratioY ? ratioX : ratioY;
      }

      // calculate our new image dimensions
      newWidth = parseInt(imgW * ratio, 10) - borderW;
      newHeight = parseInt(imgH * ratio, 10) - borderH;

      // Set new dimensions to both css and img's attributes
      $img.css({
        "width": newWidth,
        "height": newHeight
      }).attr({
        "width": newWidth,
        "height": newHeight
      });

      /*   if (opts.center) { // set offset if center is true
      $img.css("margin-left", Math.floor((destW - newWidth) / 2));
      $img.css("margin-top", Math.floor((destH - newHeight) / 2));
      }*/

      if (opts.fade > 0) { // fade-in effect
        $parent.animate({ opacity: 1 }, opts.fade);
      } else {
        $parent.css("opacity", 1);
      }
    }

    /**
    * To calculate the correct scale ratio, we need the image's original size rather than some preset values,
    * which were set either manually in code or automatically by browser.
    * Thanks FDisk for the solution:
    * http://stackoverflow.com/questions/318630/get-real-image-width-and-height-with-javascript-in-safari-chrome
    */
    function getOriginalImgSize($img) {
      var t = new Image();
      t.src = $img.attr("src");
      return { width: t.width, height: t.height };
    }

    /**
    * If the element is invisible, jQeury .height() and .width() return 0 in IE.
    * This function returns the hidden element's correct width and height.
    * Thanks elliotlarson for the solution:
    * http://stackoverflow.com/questions/2345784/jquery-get-height-of-hidden-element-in-jquery-1-4-2
    */
    function getHiddenElemSize(element) {
      var copy = element.clone().css({ visibility: 'hidden', display: 'block', position: 'absolute' });
      $("body").append(copy);
      var size = { width: copy.width(), height: copy.height() };
      copy.remove();
      return size;
    }
  };
})(jQuery);;
/************************************************
* Override des plugins de carousel
* nécéssite les fichiers js des plugins avant 
* d'exécuter ce script
* jquery.lightbox-0.5.min.js
************************************************/
(function () {
  // conserve une référence
  var old = $.fn.lightBox,
    boxClones = {};
  // override le plugin
  $.fn.lightBox = function (settings, selector) {

    // garde un clone en référence du lightbox si nécéssaire.
    if (settings.BoxSelector && settings.BoxSelector.toLowerCase() != "body") {
      boxClones[settings.BoxSelector] = $(settings.BoxSelector).clone();
      boxClones[settings.BoxSelector].empty();
    }

    // enregistre le plugin
    nms.altitude.pluginsManager.register({
      pluginType: 'lightBox',
      settings: settings,
      selector: selector,
      instance: this,
      clone: this.clone(),
      // rafraichissement du plugin
      refresh: function (args) {
        if (boxClones.hasOwnProperty(args.settings.BoxSelector)) {
          var $box = $(args.settings.BoxSelector);
          $box.replaceWith(boxClones[args.settings.BoxSelector]);
        }
        args.instance.disableKeyboard();
        $(args.selector).lightBox(args.settings, args.selector);
        if (args.settings.IsBoxed) {
          $(args.selector + ":first").click();
        }
      }
    });

    old.call(this, settings);
  };
})();
;
// shim de la méthode "on" qui vient de jquery 1.7.1 pour patcher 
(function ($) {
  $.fn.on = function (types, selector, data, fn,
/*INTERNAL*/
one) {
    var origFn, type;

    // Types can be a map of types/handlers
    if (typeof types === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") { // && selector != null
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }
      for (type in types) {
        this.on(type, selector, data, types[type], one);
      }
      return this;
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }
    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return this;
    }

    if (one === 1) {
      origFn = fn;
      fn = function (event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      };
      // Use same guid so caller can remove using origFn
      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }
    return this.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  };
})(jQuery);;
/**
 * BxSlider v4.2.5 - Fully loaded, responsive content slider
 * http://bxslider.com
 */


; (function ($) {

  var defaults = {

    // GENERAL
    mode: 'horizontal',
    slideSelector: '',
    infiniteLoop: true,
    hideControlOnEnd: false,
    speed: 500,
    easing: null,
    slideMargin: 0,
    startSlide: 0,
    randomStart: false,
    captions: false,
    ticker: false,
    tickerHover: false,
    adaptiveHeight: false,
    adaptiveHeightSpeed: 500,
    video: false,
    useCSS: true,
    preloadImages: 'visible',
    responsive: true,
    slideZIndex: 50,
    wrapperClass: 'bx-wrapper',

    // TOUCH
    touchEnabled: true,
    swipeThreshold: 50,
    oneToOneTouch: true,
    preventDefaultSwipeX: true,
    preventDefaultSwipeY: false,

    // ACCESSIBILITY
    ariaLive: true,
    ariaHidden: true,

    // KEYBOARD
    keyboardEnabled: false,

    // PAGER
    pager: true,
    pagerType: 'full',
    pagerShortSeparator: ' / ',
    pagerSelector: null,
    buildPager: null,
    pagerCustom: null,

    // CONTROLS
    controls: true,
    nextText: 'Next',
    prevText: 'Prev',
    nextSelector: null,
    prevSelector: null,
    autoControls: false,
    startText: 'Start',
    stopText: 'Stop',
    autoControlsCombine: false,
    autoControlsSelector: null,

    // AUTO
    auto: false,
    pause: 4000,
    autoStart: true,
    autoDirection: 'next',
    stopAutoOnClick: false,
    autoHover: false,
    autoDelay: 0,
    autoSlideForOnePage: false,

    // CAROUSEL
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 0,
    slideWidth: 0,
    shrinkItems: false,

    // CALLBACKS
    onSliderLoad: function () { return true; },
    onSlideBefore: function () { return true; },
    onSlideAfter: function () { return true; },
    onSlideNext: function () { return true; },
    onSlidePrev: function () { return true; },
    onSliderResize: function () { return true; }
  };

  $.fn.bxSlider = function (options) {

    if (this.length === 0) {
      return this;
    }

    // support multiple elements
    if (this.length > 1) {
      this.each(function () {
        $(this).bxSlider(options);
      });
      return this;
    }

    // create a namespace to be used throughout the plugin
    var slider = {},
    // set a reference to our slider element
    el = this,
    // get the original window dimens (thanks a lot IE)
    windowWidth = $(window).width(),
    windowHeight = $(window).height();

    // Return if slider is already initialized
    if ($(el).data('bxSlider')) { return; }

    /**
     * ===================================================================================
     * = PRIVATE FUNCTIONS
     * ===================================================================================
     */

    /**
     * Initializes namespace settings to be used throughout plugin
     */
    var init = function () {
      // Return if slider is already initialized
      if ($(el).data('bxSlider')) { return; }
      // merge user-supplied options with the defaults
      slider.settings = $.extend({}, defaults, options);
      // parse slideWidth setting
      slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
      // store the original children
      slider.children = el.children(slider.settings.slideSelector);
      // check if actual number of slides is less than minSlides / maxSlides
      if (slider.children.length < slider.settings.minSlides) { slider.settings.minSlides = slider.children.length; }
      if (slider.children.length < slider.settings.maxSlides) { slider.settings.maxSlides = slider.children.length; }
      // if random start, set the startSlide setting to random number
      if (slider.settings.randomStart) { slider.settings.startSlide = Math.floor(Math.random() * slider.children.length); }
      // store active slide information
      slider.active = { index: slider.settings.startSlide };
      // store if the slider is in carousel mode (displaying / moving multiple slides)
      slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1 ? true : false;
      // if carousel, force preloadImages = 'all'
      if (slider.carousel) { slider.settings.preloadImages = 'all'; }
      // calculate the min / max width thresholds based on min / max number of slides
      // used to setup and update carousel slides dimensions
      slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
      slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
      // store the current state of the slider (if currently animating, working is true)
      slider.working = false;
      // initialize the controls object
      slider.controls = {};
      // initialize an auto interval
      slider.interval = null;
      // determine which property to use for transitions
      slider.animProp = slider.settings.mode === 'vertical' ? 'top' : 'left';
      // determine if hardware acceleration can be used
      slider.usingCSS = slider.settings.useCSS && slider.settings.mode !== 'fade' && (function () {
        // create our test div element
        var div = document.createElement('div'),
        // css transition properties
        props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
        // test for each property
        for (var i = 0; i < props.length; i++) {
          if (div.style[props[i]] !== undefined) {
            slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
            slider.animProp = '-' + slider.cssPrefix + '-transform';
            return true;
          }
        }
        return false;
      }());
      // if vertical mode always make maxSlides and minSlides equal
      if (slider.settings.mode === 'vertical') { slider.settings.maxSlides = slider.settings.minSlides; }
      // save original style data
      el.data('origStyle', el.attr('style'));
      el.children(slider.settings.slideSelector).each(function () {
        $(this).data('origStyle', $(this).attr('style'));
      });

      // perform all DOM / CSS modifications
      setup();
    };

    /**
     * Performs all DOM and CSS modifications
     */
    var setup = function () {
      var preloadSelector = slider.children.eq(slider.settings.startSlide); // set the default preload selector (visible)

      // wrap el in a wrapper
      el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
      // store a namespace reference to .bx-viewport
      slider.viewport = el.parent();

      // add aria-live if the setting is enabled and ticker mode is disabled
      if (slider.settings.ariaLive && !slider.settings.ticker) {
        slider.viewport.attr('aria-live', 'polite');
      }
      // add a loading div to display while images are loading
      slider.loader = $('<div class="bx-loading" />');
      slider.viewport.prepend(slider.loader);
      // set el to a massive width, to hold any needed slides
      // also strip any margin and padding from el
      el.css({
        width: slider.settings.mode === 'horizontal' ? (slider.children.length * 1000 + 215) + '%' : 'auto',
        position: 'relative'
      });
      // if using CSS, add the easing property
      if (slider.usingCSS && slider.settings.easing) {
        el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
        // if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
      } else if (!slider.settings.easing) {
        slider.settings.easing = 'swing';
      }
      // make modifications to the viewport (.bx-viewport)
      slider.viewport.css({
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
      });
      slider.viewport.parent().css({
        maxWidth: getViewportMaxWidth()
      });
      // make modification to the wrapper (.bx-wrapper)
      if (!slider.settings.pager && !slider.settings.controls) {
        slider.viewport.parent().css({
          margin: '0 auto 0px'
        });
      }
      // apply css to all slider children
      slider.children.css({
        float: slider.settings.mode === 'horizontal' ? 'left' : 'none',
        listStyle: 'none',
        position: 'relative'
      });
      // apply the calculated width after the float is applied to prevent scrollbar interference
      slider.children.css('width', getSlideWidth());
      // if slideMargin is supplied, add the css
      if (slider.settings.mode === 'horizontal' && slider.settings.slideMargin > 0) { slider.children.css('marginRight', slider.settings.slideMargin); }
      if (slider.settings.mode === 'vertical' && slider.settings.slideMargin > 0) { slider.children.css('marginBottom', slider.settings.slideMargin); }
      // if "fade" mode, add positioning and z-index CSS
      if (slider.settings.mode === 'fade') {
        slider.children.css({
          position: 'absolute',
          zIndex: 0,
          display: 'none'
        });
        // prepare the z-index on the showing element
        slider.children.eq(slider.settings.startSlide).css({ zIndex: slider.settings.slideZIndex, display: 'block' });
      }
      // create an element to contain all slider controls (pager, start / stop, etc)
      slider.controls.el = $('<div class="bx-controls" />');
      // if captions are requested, add them
      if (slider.settings.captions) { appendCaptions(); }
      // check if startSlide is last slide
      slider.active.last = slider.settings.startSlide === getPagerQty() - 1;
      // if video is true, set up the fitVids plugin
      if (slider.settings.video) { el.fitVids(); }
      if (slider.settings.preloadImages === 'all' || slider.settings.ticker) { preloadSelector = slider.children; }
      // only check for control addition if not in "ticker" mode
      if (!slider.settings.ticker) {
        // if controls are requested, add them
        if (slider.settings.controls) { appendControls(); }
        // if auto is true, and auto controls are requested, add them
        if (slider.settings.auto && slider.settings.autoControls) { appendControlsAuto(); }
        // if pager is requested, add it
        if (slider.settings.pager) { appendPager(); }
        // if any control option is requested, add the controls wrapper
        if (slider.settings.controls || slider.settings.autoControls || slider.settings.pager) { slider.viewport.after(slider.controls.el); }
        // if ticker mode, do not allow a pager
      } else {
        slider.settings.pager = false;
      }
      loadElements(preloadSelector, start);
    };

    var loadElements = function (selector, callback) {
      var total = selector.find('img:not([src=""]), iframe').length,
      count = 0;
      if (total === 0) {
        callback();
        return;
      }
      selector.find('img:not([src=""]), iframe').each(function () {
        $(this).one('load error', function () {
          if (++count === total) { callback(); }
        }).each(function () {
          if (this.complete) { $(this).trigger("load"); }
        });
      });
    };

    /**
     * Start the slider
     */
    var start = function () {
      // if infinite loop, prepare additional slides
      if (slider.settings.infiniteLoop && slider.settings.mode !== 'fade' && !slider.settings.ticker) {
        var slice = slider.settings.mode === 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides,
        sliceAppend = slider.children.slice(0, slice).clone(true).addClass('bx-clone'),
        slicePrepend = slider.children.slice(-slice).clone(true).addClass('bx-clone');
        if (slider.settings.ariaHidden) {
          sliceAppend.attr('aria-hidden', true);
          slicePrepend.attr('aria-hidden', true);
        }
        el.append(sliceAppend).prepend(slicePrepend);
      }
      // remove the loading DOM element
      slider.loader.remove();
      // set the left / top position of "el"
      setSlidePosition();
      // if "vertical" mode, always use adaptiveHeight to prevent odd behavior
      if (slider.settings.mode === 'vertical') { slider.settings.adaptiveHeight = true; }
      // set the viewport height
      slider.viewport.height(getViewportHeight());
      // make sure everything is positioned just right (same as a window resize)
      el.redrawSlider();
      // onSliderLoad callback
      slider.settings.onSliderLoad.call(el, slider.active.index);
      // slider has been fully initialized
      slider.initialized = true;
      // bind the resize call to the window
      if (slider.settings.responsive) { $(window).bind('resize', resizeWindow); }
      // if auto is true and has more than 1 page, start the show
      if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) { initAuto(); }
      // if ticker is true, start the ticker
      if (slider.settings.ticker) { initTicker(); }
      // if pager is requested, make the appropriate pager link active
      if (slider.settings.pager) { updatePagerActive(slider.settings.startSlide); }
      // check for any updates to the controls (like hideControlOnEnd updates)
      if (slider.settings.controls) { updateDirectionControls(); }
      // if touchEnabled is true, setup the touch events
      if (slider.settings.touchEnabled && !slider.settings.ticker) { initTouch(); }
      // if keyboardEnabled is true, setup the keyboard events
      if (slider.settings.keyboardEnabled && !slider.settings.ticker) {
        $(document).keydown(keyPress);
      }
    };

    /**
     * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
     */
    var getViewportHeight = function () {
      var height = 0;
      // first determine which children (slides) should be used in our height calculation
      var children = $();
      // if mode is not "vertical" and adaptiveHeight is false, include all children
      if (slider.settings.mode !== 'vertical' && !slider.settings.adaptiveHeight) {
        children = slider.children;
      } else {
        // if not carousel, return the single active child
        if (!slider.carousel) {
          children = slider.children.eq(slider.active.index);
          // if carousel, return a slice of children
        } else {
          // get the individual slide index
          var currentIndex = slider.settings.moveSlides === 1 ? slider.active.index : slider.active.index * getMoveBy();
          // add the current slide to the children
          children = slider.children.eq(currentIndex);
          // cycle through the remaining "showing" slides
          for (i = 1; i <= slider.settings.maxSlides - 1; i++) {
            // if looped back to the start
            if (currentIndex + i >= slider.children.length) {
              children = children.add(slider.children.eq(i - 1));
            } else {
              children = children.add(slider.children.eq(currentIndex + i));
            }
          }
        }
      }
      // if "vertical" mode, calculate the sum of the heights of the children
      if (slider.settings.mode === 'vertical') {
        children.each(function (index) {
          height += $(this).outerHeight();
        });
        // add user-supplied margins
        if (slider.settings.slideMargin > 0) {
          height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
        }
        // if not "vertical" mode, calculate the max height of the children
      } else {
        height = Math.max.apply(Math, children.map(function () {
          return $(this).outerHeight(false);
        }).get());
      }

      if (slider.viewport.css('box-sizing') === 'border-box') {
        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
              parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
      } else if (slider.viewport.css('box-sizing') === 'padding-box') {
        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
      }

      return height;
    };

    /**
     * Returns the calculated width to be used for the outer wrapper / viewport
     */
    var getViewportMaxWidth = function () {
      var width = '100%';
      if (slider.settings.slideWidth > 0) {
        if (slider.settings.mode === 'horizontal') {
          width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
        } else {
          width = slider.settings.slideWidth;
        }
      }
      return width;
    };

    /**
     * Returns the calculated width to be applied to each slide
     */
    var getSlideWidth = function () {
      var newElWidth = slider.settings.slideWidth, // start with any user-supplied slide width
      wrapWidth = slider.viewport.width();    // get the current viewport width
      // if slide width was not supplied, or is larger than the viewport use the viewport width
      if (slider.settings.slideWidth === 0 ||
        (slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
        slider.settings.mode === 'vertical') {
        newElWidth = wrapWidth;
        // if carousel, use the thresholds to determine the width
      } else if (slider.settings.maxSlides > 1 && slider.settings.mode === 'horizontal') {
        if (wrapWidth > slider.maxThreshold) {
          return newElWidth;
        } else if (wrapWidth < slider.minThreshold) {
          newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
        } else if (slider.settings.shrinkItems) {
          newElWidth = Math.floor((wrapWidth + slider.settings.slideMargin) / (Math.ceil((wrapWidth + slider.settings.slideMargin) / (newElWidth + slider.settings.slideMargin))) - slider.settings.slideMargin);
        }
      }
      return newElWidth;
    };

    /**
     * Returns the number of slides currently visible in the viewport (includes partially visible slides)
     */
    var getNumberSlidesShowing = function () {
      var slidesShowing = 1,
      childWidth = null;
      if (slider.settings.mode === 'horizontal' && slider.settings.slideWidth > 0) {
        // if viewport is smaller than minThreshold, return minSlides
        if (slider.viewport.width() < slider.minThreshold) {
          slidesShowing = slider.settings.minSlides;
          // if viewport is larger than maxThreshold, return maxSlides
        } else if (slider.viewport.width() > slider.maxThreshold) {
          slidesShowing = slider.settings.maxSlides;
          // if viewport is between min / max thresholds, divide viewport width by first child width
        } else {
          childWidth = slider.children.first().width() + slider.settings.slideMargin;
          slidesShowing = Math.floor((slider.viewport.width() +
            slider.settings.slideMargin) / childWidth);
        }
        // if "vertical" mode, slides showing will always be minSlides
      } else if (slider.settings.mode === 'vertical') {
        slidesShowing = slider.settings.minSlides;
      }
      return slidesShowing;
    };

    /**
     * Returns the number of pages (one full viewport of slides is one "page")
     */
    var getPagerQty = function () {
      var pagerQty = 0,
      breakPoint = 0,
      counter = 0;
      // if moveSlides is specified by the user
      if (slider.settings.moveSlides > 0) {
        if (slider.settings.infiniteLoop) {
          pagerQty = Math.ceil(slider.children.length / getMoveBy());
        } else {
          // when breakpoint goes above children length, counter is the number of pages
          while (breakPoint < slider.children.length) {
            ++pagerQty;
            breakPoint = counter + getNumberSlidesShowing();
            counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
          }
        }
        // if moveSlides is 0 (auto) divide children length by sides showing, then round up
      } else {
        pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
      }
      return pagerQty;
    };

    /**
     * Returns the number of individual slides by which to shift the slider
     */
    var getMoveBy = function () {
      // if moveSlides was set by the user and moveSlides is less than number of slides showing
      if (slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()) {
        return slider.settings.moveSlides;
      }
      // if moveSlides is 0 (auto)
      return getNumberSlidesShowing();
    };

    /**
     * Sets the slider's (el) left or top position
     */
    var setSlidePosition = function () {
      var position, lastChild, lastShowingIndex;
      // if last slide, not infinite loop, and number of children is larger than specified maxSlides
      if (slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop) {
        if (slider.settings.mode === 'horizontal') {
          // get the last child's position
          lastChild = slider.children.last();
          position = lastChild.position();
          // set the left position
          setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
        } else if (slider.settings.mode === 'vertical') {
          // get the last showing index's position
          lastShowingIndex = slider.children.length - slider.settings.minSlides;
          position = slider.children.eq(lastShowingIndex).position();
          // set the top position
          setPositionProperty(-position.top, 'reset', 0);
        }
        // if not last slide
      } else {
        // get the position of the first showing slide
        position = slider.children.eq(slider.active.index * getMoveBy()).position();
        // check for last slide
        if (slider.active.index === getPagerQty() - 1) { slider.active.last = true; }
        // set the respective position
        if (position !== undefined) {
          if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
          else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
        }
      }
    };

    /**
     * Sets the el's animating property position (which in turn will sometimes animate el).
     * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
     *
     * @param value (int)
     *  - the animating property's value
     *
     * @param type (string) 'slide', 'reset', 'ticker'
     *  - the type of instance for which the function is being
     *
     * @param duration (int)
     *  - the amount of time (in ms) the transition should occupy
     *
     * @param params (array) optional
     *  - an optional parameter containing any variables that need to be passed in
     */
    var setPositionProperty = function (value, type, duration, params) {
      var animateObj, propValue;
      // use CSS transform
      if (slider.usingCSS) {
        // determine the translate3d value
        propValue = slider.settings.mode === 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
        // add the CSS transition-duration
        el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
        if (type === 'slide') {
          // set the property value
          el.css(slider.animProp, propValue);
          if (duration !== 0) {
            // bind a callback method - executes when CSS transition completes
            el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function (e) {
              //make sure it's the correct one
              if (!$(e.target).is(el)) { return; }
              // unbind the callback
              el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
              updateAfterSlideTransition();
            });
          } else { //duration = 0
            updateAfterSlideTransition();
          }
        } else if (type === 'reset') {
          el.css(slider.animProp, propValue);
        } else if (type === 'ticker') {
          // make the transition use 'linear'
          el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
          el.css(slider.animProp, propValue);
          if (duration !== 0) {
            el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function (e) {
              //make sure it's the correct one
              if (!$(e.target).is(el)) { return; }
              // unbind the callback
              el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
              // reset the position
              setPositionProperty(params.resetValue, 'reset', 0);
              // start the loop again
              tickerLoop();
            });
          } else { //duration = 0
            setPositionProperty(params.resetValue, 'reset', 0);
            tickerLoop();
          }
        }
        // use JS animate
      } else {
        animateObj = {};
        animateObj[slider.animProp] = value;
        if (type === 'slide') {
          el.animate(animateObj, duration, slider.settings.easing, function () {
            updateAfterSlideTransition();
          });
        } else if (type === 'reset') {
          el.css(slider.animProp, value);
        } else if (type === 'ticker') {
          el.animate(animateObj, duration, 'linear', function () {
            setPositionProperty(params.resetValue, 'reset', 0);
            // run the recursive loop after animation
            tickerLoop();
          });
        }
      }
    };

    /**
     * Populates the pager with proper amount of pages
     */
    var populatePager = function () {
      var pagerHtml = '',
      linkContent = '',
      pagerQty = getPagerQty();
      // loop through each pager item
      for (var i = 0; i < pagerQty; i++) {
        linkContent = '';
        // if a buildPager function is supplied, use it to get pager link value, else use index + 1
        if (slider.settings.buildPager && $.isFunction(slider.settings.buildPager) || slider.settings.pagerCustom) {
          linkContent = slider.settings.buildPager(i);
          slider.pagerEl.addClass('bx-custom-pager');
        } else {
          linkContent = i + 1;
          slider.pagerEl.addClass('bx-default-pager');
        }
        // var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
        // add the markup to the string
        pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
      }
      // populate the pager element with pager links
      slider.pagerEl.html(pagerHtml);
    };

    /**
     * Appends the pager to the controls element
     */
    var appendPager = function () {
      if (!slider.settings.pagerCustom) {
        // create the pager DOM element
        slider.pagerEl = $('<div class="bx-pager" />');
        // if a pager selector was supplied, populate it with the pager
        if (slider.settings.pagerSelector) {
          $(slider.settings.pagerSelector).html(slider.pagerEl);
          // if no pager selector was supplied, add it after the wrapper
        } else {
          slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
        }
        // populate the pager
        populatePager();
      } else {
        slider.pagerEl = $(slider.settings.pagerCustom);
      }
      // assign the pager click binding
      slider.pagerEl.on('click touchend', 'a', clickPagerBind);
    };

    /**
     * Appends prev / next controls to the controls element
     */
    var appendControls = function () {
      slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
      slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
      // bind click actions to the controls
      slider.controls.next.bind('click touchend', clickNextBind);
      slider.controls.prev.bind('click touchend', clickPrevBind);
      // if nextSelector was supplied, populate it
      if (slider.settings.nextSelector) {
        $(slider.settings.nextSelector).append(slider.controls.next);
      }
      // if prevSelector was supplied, populate it
      if (slider.settings.prevSelector) {
        $(slider.settings.prevSelector).append(slider.controls.prev);
      }
      // if no custom selectors were supplied
      if (!slider.settings.nextSelector && !slider.settings.prevSelector) {
        // add the controls to the DOM
        slider.controls.directionEl = $('<div class="bx-controls-direction" />');
        // add the control elements to the directionEl
        slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
        // slider.viewport.append(slider.controls.directionEl);
        slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
      }
    };

    /**
     * Appends start / stop auto controls to the controls element
     */
    var appendControlsAuto = function () {
      slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
      slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
      // add the controls to the DOM
      slider.controls.autoEl = $('<div class="bx-controls-auto" />');
      // bind click actions to the controls
      slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
      slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
      // if autoControlsCombine, insert only the "start" control
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.append(slider.controls.start);
        // if autoControlsCombine is false, insert both controls
      } else {
        slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
      }
      // if auto controls selector was supplied, populate it with the controls
      if (slider.settings.autoControlsSelector) {
        $(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
        // if auto controls selector was not supplied, add it after the wrapper
      } else {
        slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
      }
      // update the auto controls
      updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
    };

    /**
     * Appends image captions to the DOM
     */
    var appendCaptions = function () {
      // cycle through each child
      slider.children.each(function (index) {
        // get the image title attribute
        var title = $(this).find('img:first').attr('title');
        // append the caption
        if (title !== undefined && ('' + title).length) {
          $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
        }
      });
    };

    /**
     * Click next binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickNextBind = function (e) {
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) { return; }
      // if auto show is running, stop it
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      el.goToNextSlide();
    };

    /**
     * Click prev binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickPrevBind = function (e) {
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) { return; }
      // if auto show is running, stop it
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      el.goToPrevSlide();
    };

    /**
     * Click start binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickStartBind = function (e) {
      el.startAuto();
      e.preventDefault();
    };

    /**
     * Click stop binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickStopBind = function (e) {
      el.stopAuto();
      e.preventDefault();
    };

    /**
     * Click pager binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickPagerBind = function (e) {
      var pagerLink, pagerIndex;
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) {
        return;
      }
      // if auto show is running, stop it
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      pagerLink = $(e.currentTarget);
      if (pagerLink.attr('data-slide-index') !== undefined) {
        pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
        // if clicked pager link is not active, continue with the goToSlide call
        if (pagerIndex !== slider.active.index) { el.goToSlide(pagerIndex); }
      }
    };

    /**
     * Updates the pager links with an active class
     *
     * @param slideIndex (int)
     *  - index of slide to make active
     */
    var updatePagerActive = function (slideIndex) {
      // if "short" pager type
      var len = slider.children.length; // nb of children
      if (slider.settings.pagerType === 'short') {
        if (slider.settings.maxSlides > 1) {
          len = Math.ceil(slider.children.length / slider.settings.maxSlides);
        }
        slider.pagerEl.html((slideIndex + 1) + slider.settings.pagerShortSeparator + len);
        return;
      }
      // remove all pager active classes
      slider.pagerEl.find('a').removeClass('active');
      // apply the active class for all pagers
      slider.pagerEl.each(function (i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
    };

    /**
     * Performs needed actions after a slide transition
     */
    var updateAfterSlideTransition = function () {
      // if infinite loop is true
      if (slider.settings.infiniteLoop) {
        var position = '';
        // first slide
        if (slider.active.index === 0) {
          // set the new position
          position = slider.children.eq(0).position();
          // carousel, last slide
        } else if (slider.active.index === getPagerQty() - 1 && slider.carousel) {
          position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
          // last slide
        } else if (slider.active.index === slider.children.length - 1) {
          position = slider.children.eq(slider.children.length - 1).position();
        }
        if (position) {
          if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
          else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
        }
      }
      // declare that the transition is complete
      slider.working = false;
      // onSlideAfter callback
      slider.settings.onSlideAfter.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
    };

    /**
     * Updates the auto controls state (either active, or combined switch)
     *
     * @param state (string) "start", "stop"
     *  - the new state of the auto show
     */
    var updateAutoControls = function (state) {
      // if autoControlsCombine is true, replace the current control with the new state
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.html(slider.controls[state]);
        // if autoControlsCombine is false, apply the "active" class to the appropriate control
      } else {
        slider.controls.autoEl.find('a').removeClass('active');
        slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
      }
    };

    /**
     * Updates the direction controls (checks if either should be hidden)
     */
    var updateDirectionControls = function () {
      if (getPagerQty() === 1) {
        slider.controls.prev.addClass('disabled');
        slider.controls.next.addClass('disabled');
      } else if (!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd) {
        // if first slide
        if (slider.active.index === 0) {
          slider.controls.prev.addClass('disabled');
          slider.controls.next.removeClass('disabled');
          // if last slide
        } else if (slider.active.index === getPagerQty() - 1) {
          slider.controls.next.addClass('disabled');
          slider.controls.prev.removeClass('disabled');
          // if any slide in the middle
        } else {
          slider.controls.prev.removeClass('disabled');
          slider.controls.next.removeClass('disabled');
        }
      }
    };

    /**
     * Initializes the auto process
     */
    var initAuto = function () {
      // if autoDelay was supplied, launch the auto show using a setTimeout() call
      if (slider.settings.autoDelay > 0) {
        var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
        // if autoDelay was not supplied, start the auto show normally
      } else {
        el.startAuto();

        //add focus and blur events to ensure its running if timeout gets paused
        $(window).focus(function () {
          el.startAuto();
        }).blur(function () {
          el.stopAuto();
        });
      }
      // if autoHover is requested
      if (slider.settings.autoHover) {
        // on el hover
        el.hover(function () {
          // if the auto show is currently playing (has an active interval)
          if (slider.interval) {
            // stop the auto show and pass true argument which will prevent control update
            el.stopAuto(true);
            // create a new autoPaused value which will be used by the relative "mouseout" event
            slider.autoPaused = true;
          }
        }, function () {
          // if the autoPaused value was created be the prior "mouseover" event
          if (slider.autoPaused) {
            // start the auto show and pass true argument which will prevent control update
            el.startAuto(true);
            // reset the autoPaused value
            slider.autoPaused = null;
          }
        });
      }
    };

    /**
     * Initializes the ticker process
     */
    var initTicker = function () {
      var startPosition = 0,
      position, transform, value, idx, ratio, property, newSpeed, totalDimens;
      // if autoDirection is "next", append a clone of the entire slider
      if (slider.settings.autoDirection === 'next') {
        el.append(slider.children.clone().addClass('bx-clone'));
        // if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
      } else {
        el.prepend(slider.children.clone().addClass('bx-clone'));
        position = slider.children.first().position();
        startPosition = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
      }
      setPositionProperty(startPosition, 'reset', 0);
      // do not allow controls in ticker mode
      slider.settings.pager = false;
      slider.settings.controls = false;
      slider.settings.autoControls = false;
      // if autoHover is requested
      if (slider.settings.tickerHover) {
        if (slider.usingCSS) {
          idx = slider.settings.mode === 'horizontal' ? 4 : 5;
          slider.viewport.hover(function () {
            transform = el.css('-' + slider.cssPrefix + '-transform');
            value = parseFloat(transform.split(',')[idx]);
            setPositionProperty(value, 'reset', 0);
          }, function () {
            totalDimens = 0;
            slider.children.each(function (index) {
              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
            });
            // calculate the speed ratio (used to determine the new speed to finish the paused animation)
            ratio = slider.settings.speed / totalDimens;
            // determine which property to use
            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
            // calculate the new speed
            newSpeed = ratio * (totalDimens - (Math.abs(parseInt(value))));
            tickerLoop(newSpeed);
          });
        } else {
          // on el hover
          slider.viewport.hover(function () {
            el.stop();
          }, function () {
            // calculate the total width of children (used to calculate the speed ratio)
            totalDimens = 0;
            slider.children.each(function (index) {
              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
            });
            // calculate the speed ratio (used to determine the new speed to finish the paused animation)
            ratio = slider.settings.speed / totalDimens;
            // determine which property to use
            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
            // calculate the new speed
            newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
            tickerLoop(newSpeed);
          });
        }
      }
      // start the ticker loop
      tickerLoop();
    };

    /**
     * Runs a continuous loop, news ticker-style
     */
    var tickerLoop = function (resumeSpeed) {
      var speed = resumeSpeed ? resumeSpeed : slider.settings.speed,
      position = { left: 0, top: 0 },
      reset = { left: 0, top: 0 },
      animateProperty, resetValue, params;

      // if "next" animate left position to last child, then reset left to 0
      if (slider.settings.autoDirection === 'next') {
        position = el.find('.bx-clone').first().position();
        // if "prev" animate left position to 0, then reset left to first non-clone child
      } else {
        reset = slider.children.first().position();
      }
      animateProperty = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
      resetValue = slider.settings.mode === 'horizontal' ? -reset.left : -reset.top;
      params = { resetValue: resetValue };
      setPositionProperty(animateProperty, 'ticker', speed, params);
    };

    /**
     * Check if el is on screen
     */
    var isOnScreen = function (el) {
      var win = $(window),
      viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
      },
      bounds = el.offset();

      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();
      bounds.right = bounds.left + el.outerWidth();
      bounds.bottom = bounds.top + el.outerHeight();

      return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

    /**
     * Initializes keyboard events
     */
    var keyPress = function (e) {
      var activeElementTag = document.activeElement.tagName.toLowerCase(),
      tagFilters = 'input|textarea',
      p = new RegExp(activeElementTag, ['i']),
      result = p.exec(tagFilters);

      if (result == null && isOnScreen(el)) {
        if (e.keyCode === 39) {
          clickNextBind(e);
          return false;
        } else if (e.keyCode === 37) {
          clickPrevBind(e);
          return false;
        }
      }
    };

    /**
     * Initializes touch events
     */
    var initTouch = function () {
      // initialize object to contain all touch values
      slider.touch = {
        start: { x: 0, y: 0 },
        end: { x: 0, y: 0 }
      };
      slider.viewport.bind('touchstart MSPointerDown pointerdown', onTouchStart);

      //for browsers that have implemented pointer events and fire a click after
      //every pointerup regardless of whether pointerup is on same screen location as pointerdown or not
      slider.viewport.on('click', '.bxslider a', function (e) {
        if (slider.viewport.hasClass('click-disabled')) {
          e.preventDefault();
          slider.viewport.removeClass('click-disabled');
        }
      });
    };

    /**
     * Event handler for "touchstart"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchStart = function (e) {
      //disable slider controls while user is interacting with slides to avoid slider freeze that happens on touch devices when a slide swipe happens immediately after interacting with slider controls
      slider.controls.el.addClass('disabled');

      if (slider.working) {
        e.preventDefault();
        slider.controls.el.removeClass('disabled');
      } else {
        // record the original position when touch starts
        slider.touch.originalPos = el.position();
        var orig = e.originalEvent,
        touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig];
        // record the starting touch x, y coordinates
        slider.touch.start.x = touchPoints[0].pageX;
        slider.touch.start.y = touchPoints[0].pageY;

        if (slider.viewport.get(0).setPointerCapture) {
          slider.pointerId = orig.pointerId;
          slider.viewport.get(0).setPointerCapture(slider.pointerId);
        }
        // bind a "touchmove" event to the viewport
        slider.viewport.bind('touchmove MSPointerMove pointermove', onTouchMove);
        // bind a "touchend" event to the viewport
        slider.viewport.bind('touchend MSPointerUp pointerup', onTouchEnd);
        slider.viewport.bind('MSPointerCancel pointercancel', onPointerCancel);
      }
    };

    /**
     * Cancel Pointer for Windows Phone
     *
     * @param e (event)
     *  - DOM event object
     */
    var onPointerCancel = function (e) {
      /* onPointerCancel handler is needed to deal with situations when a touchend
      doesn't fire after a touchstart (this happens on windows phones only) */
      setPositionProperty(slider.touch.originalPos.left, 'reset', 0);

      //remove handlers
      slider.controls.el.removeClass('disabled');
      slider.viewport.unbind('MSPointerCancel pointercancel', onPointerCancel);
      slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
      slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
      if (slider.viewport.get(0).releasePointerCapture) {
        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
      }
    };

    /**
     * Event handler for "touchmove"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchMove = function (e) {
      var orig = e.originalEvent,
      touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
      // if scrolling on y axis, do not prevent default
      xMovement = Math.abs(touchPoints[0].pageX - slider.touch.start.x),
      yMovement = Math.abs(touchPoints[0].pageY - slider.touch.start.y),
      value = 0,
      change = 0;

      // x axis swipe
      if ((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX) {
        e.preventDefault();
        // y axis swipe
      } else if ((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY) {
        e.preventDefault();
      }
      if (slider.settings.mode !== 'fade' && slider.settings.oneToOneTouch) {
        // if horizontal, drag along x axis
        if (slider.settings.mode === 'horizontal') {
          change = touchPoints[0].pageX - slider.touch.start.x;
          value = slider.touch.originalPos.left + change;
          // if vertical, drag along y axis
        } else {
          change = touchPoints[0].pageY - slider.touch.start.y;
          value = slider.touch.originalPos.top + change;
        }
        setPositionProperty(value, 'reset', 0);
      }
    };

    /**
     * Event handler for "touchend"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchEnd = function (e) {
      slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
      //enable slider controls as soon as user stops interacing with slides
      slider.controls.el.removeClass('disabled');
      var orig = e.originalEvent,
      touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
      value = 0,
      distance = 0;
      // record end x, y positions
      slider.touch.end.x = touchPoints[0].pageX;
      slider.touch.end.y = touchPoints[0].pageY;
      // if fade mode, check if absolute x distance clears the threshold
      if (slider.settings.mode === 'fade') {
        distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
        if (distance >= slider.settings.swipeThreshold) {
          if (slider.touch.start.x > slider.touch.end.x) {
            el.goToNextSlide();
          } else {
            el.goToPrevSlide();
          }
          el.stopAuto();
        }
        // not fade mode
      } else {
        // calculate distance and el's animate property
        if (slider.settings.mode === 'horizontal') {
          distance = slider.touch.end.x - slider.touch.start.x;
          value = slider.touch.originalPos.left;
        } else {
          distance = slider.touch.end.y - slider.touch.start.y;
          value = slider.touch.originalPos.top;
        }
        // if not infinite loop and first / last slide, do not attempt a slide transition
        if (!slider.settings.infiniteLoop && ((slider.active.index === 0 && distance > 0) || (slider.active.last && distance < 0))) {
          setPositionProperty(value, 'reset', 200);
        } else {
          // check if distance clears threshold
          if (Math.abs(distance) >= slider.settings.swipeThreshold) {
            if (distance < 0) {
              el.goToNextSlide();
            } else {
              el.goToPrevSlide();
            }
            el.stopAuto();
          } else {
            // el.animate(property, 200);
            setPositionProperty(value, 'reset', 200);
          }
        }
      }
      slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
      if (slider.viewport.get(0).releasePointerCapture) {
        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
      }
    };

    /**
     * Window resize event callback
     */
    var resizeWindow = function (e) {
      // don't do anything if slider isn't initialized.
      if (!slider.initialized) { return; }
      // Delay if slider working.
      if (slider.working) {
        window.setTimeout(resizeWindow, 10);
      } else {
        // get the new window dimens (again, thank you IE)
        var windowWidthNew = $(window).width(),
        windowHeightNew = $(window).height();
        // make sure that it is a true window resize
        // *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
        // are resized. Can you just die already?*
        if (windowWidth !== windowWidthNew || windowHeight !== windowHeightNew) {
          // set the new window dimens
          windowWidth = windowWidthNew;
          windowHeight = windowHeightNew;
          // update all dynamic elements
          el.redrawSlider();
          // Call user resize handler
          slider.settings.onSliderResize.call(el, slider.active.index);
        }
      }
    };

    /**
     * Adds an aria-hidden=true attribute to each element
     *
     * @param startVisibleIndex (int)
     *  - the first visible element's index
     */
    var applyAriaHiddenAttributes = function (startVisibleIndex) {
      var numberOfSlidesShowing = getNumberSlidesShowing();
      // only apply attributes if the setting is enabled and not in ticker mode
      if (slider.settings.ariaHidden && !slider.settings.ticker) {
        // add aria-hidden=true to all elements
        slider.children.attr('aria-hidden', 'true');
        // get the visible elements and change to aria-hidden=false
        slider.children.slice(startVisibleIndex, startVisibleIndex + numberOfSlidesShowing).attr('aria-hidden', 'false');
      }
    };

    /**
     * Returns index according to present page range
     *
     * @param slideOndex (int)
     *  - the desired slide index
     */
    var setSlideIndex = function (slideIndex) {
      if (slideIndex < 0) {
        if (slider.settings.infiniteLoop) {
          return getPagerQty() - 1;
        } else {
          //we don't go to undefined slides
          return slider.active.index;
        }
        // if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
      } else if (slideIndex >= getPagerQty()) {
        if (slider.settings.infiniteLoop) {
          return 0;
        } else {
          //we don't move to undefined pages
          return slider.active.index;
        }
        // set active index to requested slide
      } else {
        return slideIndex;
      }
    };

    /**
     * ===================================================================================
     * = PUBLIC FUNCTIONS
     * ===================================================================================
     */

    /**
     * Performs slide transition to the specified slide
     *
     * @param slideIndex (int)
     *  - the destination slide's index (zero-based)
     *
     * @param direction (string)
     *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
     */
    el.goToSlide = function (slideIndex, direction) {
      // onSlideBefore, onSlideNext, onSlidePrev callbacks
      // Allow transition canceling based on returned value
      var performTransition = true,
      moveBy = 0,
      position = { left: 0, top: 0 },
      lastChild = null,
      lastShowingIndex, eq, value, requestEl;
      // store the old index
      slider.oldIndex = slider.active.index;
      //set new index
      slider.active.index = setSlideIndex(slideIndex);

      // if plugin is currently in motion, ignore request
      if (slider.working || slider.active.index === slider.oldIndex) { return; }
      // declare that plugin is in motion
      slider.working = true;

      performTransition = slider.settings.onSlideBefore.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);

      // If transitions canceled, reset and return
      if (typeof (performTransition) !== 'undefined' && !performTransition) {
        slider.active.index = slider.oldIndex; // restore old index
        slider.working = false; // is not in motion
        return;
      }

      if (direction === 'next') {
        // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
        if (!slider.settings.onSlideNext.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
          performTransition = false;
        }
      } else if (direction === 'prev') {
        // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
        if (!slider.settings.onSlidePrev.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
          performTransition = false;
        }
      }

      // check if last slide
      slider.active.last = slider.active.index >= getPagerQty() - 1;
      // update the pager with active class
      if (slider.settings.pager || slider.settings.pagerCustom) { updatePagerActive(slider.active.index); }
      // // check for direction control update
      if (slider.settings.controls) { updateDirectionControls(); }
      // if slider is set to mode: "fade"
      if (slider.settings.mode === 'fade') {
        // if adaptiveHeight is true and next height is different from current height, animate to the new height
        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
          slider.viewport.animate({ height: getViewportHeight() }, slider.settings.adaptiveHeightSpeed);
        }
        // fade out the visible child and reset its z-index value
        slider.children.filter(':visible').fadeOut(slider.settings.speed).css({ zIndex: 0 });
        // fade in the newly requested slide
        slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex + 1).fadeIn(slider.settings.speed, function () {
          $(this).css('zIndex', slider.settings.slideZIndex);
          updateAfterSlideTransition();
        });
        // slider mode is not "fade"
      } else {
        // if adaptiveHeight is true and next height is different from current height, animate to the new height
        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
          slider.viewport.animate({ height: getViewportHeight() }, slider.settings.adaptiveHeightSpeed);
        }
        // if carousel and not infinite loop
        if (!slider.settings.infiniteLoop && slider.carousel && slider.active.last) {
          if (slider.settings.mode === 'horizontal') {
            // get the last child position
            lastChild = slider.children.eq(slider.children.length - 1);
            position = lastChild.position();
            // calculate the position of the last slide
            moveBy = slider.viewport.width() - lastChild.outerWidth();
          } else {
            // get last showing index position
            lastShowingIndex = slider.children.length - slider.settings.minSlides;
            position = slider.children.eq(lastShowingIndex).position();
          }
          // horizontal carousel, going previous while on first slide (infiniteLoop mode)
        } else if (slider.carousel && slider.active.last && direction === 'prev') {
          // get the last child position
          eq = slider.settings.moveSlides === 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
          lastChild = el.children('.bx-clone').eq(eq);
          position = lastChild.position();
          // if infinite loop and "Next" is clicked on the last slide
        } else if (direction === 'next' && slider.active.index === 0) {
          // get the last clone position
          position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
          slider.active.last = false;
          // normal non-zero requests
        } else if (slideIndex >= 0) {
          //parseInt is applied to allow floats for slides/page
          requestEl = slideIndex * parseInt(getMoveBy());
          position = slider.children.eq(requestEl).position();
        }

        /* If the position doesn't exist
         * (e.g. if you destroy the slider on a next click),
         * it doesn't throw an error.
         */
        if (typeof (position) !== 'undefined') {
          value = slider.settings.mode === 'horizontal' ? -(position.left - moveBy) : -position.top;
          // plugin values to be animated
          setPositionProperty(value, 'slide', slider.settings.speed);
        } else {
          slider.working = false;
        }
      }
      if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
    };

    /**
     * Transitions to the next slide in the show
     */
    el.goToNextSlide = function () {
      // if infiniteLoop is false and last page is showing, disregard call
      if (!slider.settings.infiniteLoop && slider.active.last) { return; }
      var pagerIndex = parseInt(slider.active.index) + 1;
      el.goToSlide(pagerIndex, 'next');
    };

    /**
     * Transitions to the prev slide in the show
     */
    el.goToPrevSlide = function () {
      // if infiniteLoop is false and last page is showing, disregard call
      if (!slider.settings.infiniteLoop && slider.active.index === 0) { return; }
      var pagerIndex = parseInt(slider.active.index) - 1;
      el.goToSlide(pagerIndex, 'prev');
    };

    /**
     * Starts the auto show
     *
     * @param preventControlUpdate (boolean)
     *  - if true, auto controls state will not be updated
     */
    el.startAuto = function (preventControlUpdate) {
      // if an interval already exists, disregard call
      if (slider.interval) { return; }
      // create an interval
      slider.interval = setInterval(function () {
        if (slider.settings.autoDirection === 'next') {
          el.goToNextSlide();
        } else {
          el.goToPrevSlide();
        }
      }, slider.settings.pause);
      // if auto controls are displayed and preventControlUpdate is not true
      if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('stop'); }
    };

    /**
     * Stops the auto show
     *
     * @param preventControlUpdate (boolean)
     *  - if true, auto controls state will not be updated
     */
    el.stopAuto = function (preventControlUpdate) {
      // if no interval exists, disregard call
      if (!slider.interval) { return; }
      // clear the interval
      clearInterval(slider.interval);
      slider.interval = null;
      // if auto controls are displayed and preventControlUpdate is not true
      if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('start'); }
    };

    /**
     * Returns current slide index (zero-based)
     */
    el.getCurrentSlide = function () {
      return slider.active.index;
    };

    /**
     * Returns current slide element
     */
    el.getCurrentSlideElement = function () {
      return slider.children.eq(slider.active.index);
    };

    /**
     * Returns a slide element
     * @param index (int)
     *  - The index (zero-based) of the element you want returned.
     */
    el.getSlideElement = function (index) {
      return slider.children.eq(index);
    };

    /**
     * Returns number of slides in show
     */
    el.getSlideCount = function () {
      return slider.children.length;
    };

    /**
     * Return slider.working variable
     */
    el.isWorking = function () {
      return slider.working;
    };

    /**
     * Update all dynamic slider elements
     */
    el.redrawSlider = function () {
      // resize all children in ratio to new screen size
      slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
      // adjust the height
      slider.viewport.css('height', getViewportHeight());
      // update the slide position
      if (!slider.settings.ticker) { setSlidePosition(); }
      // if active.last was true before the screen resize, we want
      // to keep it last no matter what screen size we end on
      if (slider.active.last) { slider.active.index = getPagerQty() - 1; }
      // if the active index (page) no longer exists due to the resize, simply set the index as last
      if (slider.active.index >= getPagerQty()) { slider.active.last = true; }
      // if a pager is being displayed and a custom pager is not being used, update it
      if (slider.settings.pager && !slider.settings.pagerCustom) {
        populatePager();
        updatePagerActive(slider.active.index);
      }
      if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
    };

    /**
     * Destroy the current instance of the slider (revert everything back to original state)
     */
    el.destroySlider = function () {
      // don't do anything if slider has already been destroyed
      if (!slider.initialized) { return; }
      slider.initialized = false;
      $('.bx-clone', this).remove();
      slider.children.each(function () {
        if ($(this).data('origStyle') !== undefined) {
          $(this).attr('style', $(this).data('origStyle'));
        } else {
          $(this).removeAttr('style');
        }
      });
      if ($(this).data('origStyle') !== undefined) {
        this.attr('style', $(this).data('origStyle'));
      } else {
        $(this).removeAttr('style');
      }
      $(this).unwrap().unwrap();
      if (slider.controls.el) { slider.controls.el.remove(); }
      if (slider.controls.next) { slider.controls.next.remove(); }
      if (slider.controls.prev) { slider.controls.prev.remove(); }
      if (slider.pagerEl && slider.settings.controls && !slider.settings.pagerCustom) { slider.pagerEl.remove(); }
      $('.bx-caption', this).remove();
      if (slider.controls.autoEl) { slider.controls.autoEl.remove(); }
      clearInterval(slider.interval);
      if (slider.settings.responsive) { $(window).unbind('resize', resizeWindow); }
      if (slider.settings.keyboardEnabled) { $(document).unbind('keydown', keyPress); }
      //remove self reference in data
      $(this).removeData('bxSlider');
    };

    /**
     * Reload the slider (revert all DOM changes, and re-initialize)
     */
    el.reloadSlider = function (settings) {
      if (settings !== undefined) { options = settings; }
      el.destroySlider();
      init();
      //store reference to self in order to access public functions later
      $(el).data('bxSlider', this);
    };

    init();

    $(el).data('bxSlider', this);

    // returns the current jQuery object
    return this;
  };

})(jQuery);;
/************************************************
* Override des plugins de carousel
* nécéssite les fichiers js des plugins avant 
* d'exécuter ce script
* nmsCarousel_1.0.1.js
* jquery.bxSlider.js
************************************************/
(function () {
  var bxSlider_pluginName = 'bxSlider',
   nmsCarousel_pluginName = 'nmsCarousel';
  overrideNmsCarousel(bxSlider_pluginName);
  overrideNmsCarousel(nmsCarousel_pluginName);

  function overrideNmsCarousel(pluginName) {
    // si le plugin existe
    if ($.fn.hasOwnProperty(pluginName)) {
      // conserve une référence
      var old = $.fn[pluginName];
      // override le plugin
      $.fn[pluginName] = function (o) {
        // ajoute la configuration a l'image.
        function addImageConfig(src, config) {
          if (config.length > 1) {
            src += "_" + config[1] + "x" + config[2];
            if (config.length == 4 && config[3]) {
              src += ":" + config[3];
            }
          }
          return src;
        }
        // si on a déja fait l'initialisation on utilise l'existante.
        if (nms.altitude.pluginsManager['nmsCarousel'] && nms.altitude.pluginsManager['nmsCarousel'].controls[$(this).attr("id")]) {
          nms.altitude.pluginsManager.register(nms.altitude.pluginsManager['nmsCarousel'].controls[$(this).attr("id")]);
        }
        else {
          var marker = $("<span></span>");
          $(this).before(marker);
          // enregistre le plugin
          nms.altitude.pluginsManager.register({
            pluginType: 'nmsCarousel',
            settings: o,
            selector: $(this).attr("id"),
            instance: this,
            before: marker,
            clone: this.clone(),
            // rafraichissement du plugin
            refresh: function (args, medias) {
              var $template = $($("[data-carousel='" + args.selector + "']").text());
              if (args.instance.parents(".bx-wrapper:first").length) {
                // fix pour le bxSlider
                if (args.instance.destroySlider) {
                  args.instance.stopAuto(true);
                  args.instance.destroySlider(true);
                }
                args.instance.parents(".bx-wrapper:first").remove();
                args.instance.remove();
              }
              else {
                args.instance.remove();
              }
              args.instance = args.clone;
              args.instance.empty();
              args.before.after(args.instance);

              args.clone = args.instance.clone();
              args.instance[0].id = args.selector;
              // pour chaque media
              $.each(medias, function (mediaIndex, media) {
                // réplique le template
                var $newImage = $template.clone(),
                  $a = $newImage.find("a"),
                  $img = $newImage.find("img"),
                  configRegex = /_(\d*)x(\d*):?(\d*)?/;

                var pathCulture = media.CultureID ? "/" + media.CultureID : "";

                // remplace les liens pour la grande image
                $newImage.find("a").attr({
                  href: addImageConfig(pathCulture + "/gpc/_media/image/" + media.ItemFileName, $a.attr("href").match(configRegex)) + media.ItemFileExtension
                });
                // remplace le thumb
                $newImage.find("img").attr({
                  src: addImageConfig(pathCulture + "/gpc/_media/image/" + media.ItemFileName, $img.attr("src").match(configRegex)) + media.ItemFileExtension
                });
                // ajoute le template répliqué
                args.instance.append($newImage);
              });

              if (pluginName == bxSlider_pluginName) {
                window['bx' + args.selector] = $(args.instance)[pluginName](args.settings);
                return window['bx' + args.selector];
              } else {
                return $(args.instance)[pluginName](args.settings);
              }
            }
          });

        }
        return old.call(this, o);
      };
    }
  }
})();;;
