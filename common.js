$(document).ready(function () {

	var height = $(window).height();
	var heightCell = height / 2;
	$('.janitor, .car, .ambulance, .fortress').css('height', heightCell);

	$('#Password').keypress(function(e) {
		if(e.which == 13) {
			$('#save').click();
		}
	});

	!function(i,n,t,e){function l(n,t){this.element=n,this.options=i.extend({},o,t),this._defaults=o,this._name=s,this.init()}var s="addClear",o={closeSymbol:"&#10006;",color:"#CCC",top:1,right:4,returnFocus:!0,showOnLoad:!1,onClear:null,hideOnBlur:!1,tabbable:!0,paddingRight:"20px",lineHeight:"1",display:"block"};l.prototype={init:function(){var n,e=i(this.element),l=this,s=this.options;e.wrap("<div style='display:inline; position:relative;' class='add-clear-span'></div>");var o=s.tabbable?"":" tabindex='-1'";n=i("<a href='#clear' style='display: none;'"+o+">"+s.closeSymbol+"</a>"),e.after(n),e.next().css({color:s.color,textDecoration:"none",display:"none",overflow:"hidden",position:"absolute",right:s.right,top:s.top,lineHeight:s.lineHeight},this),s.paddingRight&&e.css({"padding-right":s.paddingRight}),e.val().length>=1&&s.showOnLoad===!0&&n.css({display:s.display}),e.focus(function(){i(this).val().length>=1&&n.css({display:s.display})}),e.blur(function(i){s.hideOnBlur&&setTimeout(function(){var e=i.relatedTarget||i.explicitOriginalTarget||t.activeElement;e!==n[0]&&n.css({display:"none"})},0)});var a=function(){i(this).val().length>=1?n.css({display:s.display}):n.css({display:"none"})},c=function(){e.off("keyup",a),e.off("cut",a),c=a,a.call(this)};e.on("keyup",a),e.on("cut",function(){var i=this;setTimeout(function(){a.call(i)},0)}),e.on("input",function(){c.call(this)}),s.hideOnBlur&&n.blur(function(){n.css({display:"none"})}),n.click(function(n){var t=i(l.element);t.val(""),i(this).css({display:"none"}),s.returnFocus===!0&&t.focus(),s.onClear&&s.onClear(t),n.preventDefault()})}},i.fn[s]=function(n){return this.each(function(){i.data(this,"plugin_"+s)||i.data(this,"plugin_"+s,new l(this,n))})}}(jQuery,window,document);

	/* Simple JavaScript Inheritance*/
// Inspired by base2 and Prototype

	(function(){var j=false;window.JQClass=function(){};JQClass.classes={};JQClass.extend=function extender(f){var g=this.prototype;j=true;var h=new this();j=false;for(var i in f){h[i]=typeof f[i]=='function'&&typeof g[i]=='function'?(function(d,e){return function(){var b=this._super;this._super=function(a){return g[d].apply(this,a||[])};var c=e.apply(this,arguments);this._super=b;return c}})(i,f[i]):f[i]}function JQClass(){if(!j&&this._init){this._init.apply(this,arguments)}}JQClass.prototype=h;JQClass.prototype.constructor=JQClass;JQClass.extend=extender;return JQClass}})();(function($){JQClass.classes.JQPlugin=JQClass.extend({name:'plugin',defaultOptions:{},regionalOptions:{},_getters:[],_getMarker:function(){return'is-'+this.name},_init:function(){$.extend(this.defaultOptions,(this.regionalOptions&&this.regionalOptions[''])||{});var c=camelCase(this.name);$[c]=this;$.fn[c]=function(a){var b=Array.prototype.slice.call(arguments,1);if($[c]._isNotChained(a,b)){return $[c][a].apply($[c],[this[0]].concat(b))}return this.each(function(){if(typeof a==='string'){if(a[0]==='_'||!$[c][a]){throw'Unknown method: '+a;}$[c][a].apply($[c],[this].concat(b))}else{$[c]._attach(this,a)}})}},setDefaults:function(a){$.extend(this.defaultOptions,a||{})},_isNotChained:function(a,b){if(a==='option'&&(b.length===0||(b.length===1&&typeof b[0]==='string'))){return true}return $.inArray(a,this._getters)>-1},_attach:function(a,b){a=$(a);if(a.hasClass(this._getMarker())){return}a.addClass(this._getMarker());b=$.extend({},this.defaultOptions,this._getMetadata(a),b||{});var c=$.extend({name:this.name,elem:a,options:b},this._instSettings(a,b));a.data(this.name,c);this._postAttach(a,c);this.option(a,b)},_instSettings:function(a,b){return{}},_postAttach:function(a,b){},_getMetadata:function(d){try{var f=d.data(this.name.toLowerCase())||'';f=f.replace(/'/g,'"');f=f.replace(/([a-zA-Z0-9]+):/g,function(a,b,i){var c=f.substring(0,i).match(/"/g);return(!c||c.length%2===0?'"'+b+'":':b+':')});f=$.parseJSON('{'+f+'}');for(var g in f){var h=f[g];if(typeof h==='string'&&h.match(/^new Date\((.*)\)$/)){f[g]=eval(h)}}return f}catch(e){return{}}},_getInst:function(a){return $(a).data(this.name)||{}},option:function(a,b,c){a=$(a);var d=a.data(this.name);if(!b||(typeof b==='string'&&c==null)){var e=(d||{}).options;return(e&&b?e[b]:e)}if(!a.hasClass(this._getMarker())){return}var e=b||{};if(typeof b==='string'){e={};e[b]=c}this._optionsChanged(a,d,e);$.extend(d.options,e)},_optionsChanged:function(a,b,c){},destroy:function(a){a=$(a);if(!a.hasClass(this._getMarker())){return}this._preDestroy(a,this._getInst(a));a.removeData(this.name).removeClass(this._getMarker())},_preDestroy:function(a,b){}});function camelCase(c){return c.replace(/-([a-z])/g,function(a,b){return b.toUpperCase()})}$.JQPlugin={createPlugin:function(a,b){if(typeof a==='object'){b=a;a='JQPlugin'}a=camelCase(a);var c=camelCase(b.name);JQClass.classes[c]=JQClass.classes[a].extend(b);new JQClass.classes[c]()}}})(jQuery);

	/* Max Length for jQuery v2.0.1. */

	(function($){var h='maxlength';$.JQPlugin.createPlugin({name:h,defaultOptions:{max:200,truncate:true,showFeedback:true,feedbackTarget:null,onFull:null},regionalOptions:{'':{feedbackText:'{r} characters remaining ({m} maximum)',overflowText:'{o} characters too many ({m} maximum)'}},_getters:['curLength'],_feedbackClass:h+'-feedback',_fullClass:h+'-full',_overflowClass:h+'-overflow',_disabledClass:h+'-disabled',_instSettings:function(a,b){return{feedbackTarget:$([])}},_postAttach:function(c,d){c.on('keypress.'+d.name,function(a){if(!d.options.truncate){return true}var b=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);return(a.ctrlKey||a.metaKey||b=='\u0000'||$(this).val().length<d.options.max)}).on('keyup.'+d.name+' paste.'+d.name+' cut.'+d.name,function(e){if(e.type==='keyup'){$.maxlength._checkLength(c)}else{setTimeout(function(){$.maxlength._checkLength(c)},1)}})},_optionsChanged:function(a,b,c){$.extend(b.options,c);if(b.feedbackTarget.length>0){if(b.hadFeedbackTarget){b.feedbackTarget.empty().val('').removeClass(this._feedbackClass+' '+this._fullClass+' '+this._overflowClass)}else{b.feedbackTarget.remove()}b.feedbackTarget=$([])}if(b.options.showFeedback){b.hadFeedbackTarget=!!b.options.feedbackTarget;if($.isFunction(b.options.feedbackTarget)){b.feedbackTarget=b.options.feedbackTarget.apply(a[0],[])}else if(b.options.feedbackTarget){b.feedbackTarget=$(b.options.feedbackTarget)}else{b.feedbackTarget=$('<span></span>').insertAfter(a)}b.feedbackTarget.addClass(this._feedbackClass)}a.off('mouseover.'+b.name+' focus.'+b.name+'mouseout.'+b.name+' blur.'+b.name);if(b.options.showFeedback=='active'){a.on('mouseover.'+b.name,function(){b.feedbackTarget.css('visibility','visible')}).on('mouseout.'+b.name,function(){if(!b.focussed){b.feedbackTarget.css('visibility','hidden')}}).on('focus.'+b.name,function(){b.focussed=true;b.feedbackTarget.css('visibility','visible')}).on('blur.'+b.name,function(){b.focussed=false;b.feedbackTarget.css('visibility','hidden')});b.feedbackTarget.css('visibility','hidden')}this._checkLength(a)},curLength:function(a){var b=this._getInst(a);var c=a.val();var d=c.replace(/\r\n/g,'~~').replace(/\n/g,'~~').length;return{used:d,remaining:b.options.max-d}},_checkLength:function(a){var b=this._getInst(a);var c=a.val();var d=c.replace(/\r\n/g,'~~').replace(/\n/g,'~~').length;a.toggleClass(this._fullClass,d>=b.options.max).toggleClass(this._overflowClass,d>b.options.max);if(d>b.options.max&&b.options.truncate){var f=a.val().split(/\r\n|\n/);c='';var i=0;while(c.length<b.options.max&&i<f.length){c+=f[i].substring(0,b.options.max-c.length)+'\r\n';i++}a.val(c.substring(0,b.options.max));a[0].scrollTop=a[0].scrollHeight;d=b.options.max}b.feedbackTarget.toggleClass(this._fullClass,d>=b.options.max).toggleClass(this._overflowClass,d>b.options.max);var g=(d>b.options.max?b.options.overflowText:b.options.feedbackText).replace(/\{c\}/,d).replace(/\{m\}/,b.options.max).replace(/\{r\}/,b.options.max-d).replace(/\{o\}/,d-b.options.max);try{b.feedbackTarget.text(g)}catch(e){}try{b.feedbackTarget.val(g)}catch(e){}if(d>=b.options.max&&$.isFunction(b.options.onFull)){b.options.onFull.apply(a,[d>b.options.max])}},enable:function(a){a=$(a);if(!a.hasClass(this._getMarker())){return}var b=this._getInst(a);a.prop('disabled',false).removeClass(b.name+'-disabled');b.feedbackTarget.removeClass(b.name+'-disabled')},disable:function(a){a=$(a);if(!a.hasClass(this._getMarker())){return}var b=this._getInst(a);a.prop('disabled',true).addClass(b.name+'-disabled');b.feedbackTarget.addClass(b.name+'-disabled')},_preDestroy:function(a,b){if(b.feedbackTarget.length>0){if(b.hadFeedbackTarget){b.feedbackTarget.empty().val('').css('visibility','visible').removeClass(this._feedbackClass+' '+this._fullClass+' '+this._overflowClass)}else{b.feedbackTarget.remove()}}a.removeClass(this._fullClass+' '+this._overflowClass).off('.'+b.name)}})})(jQuery);

	$('#Username').maxlength({
		max: 30,
	});
	$('#Password').maxlength({
		max: 20,
	});
	$('#myModal').modal({
		keyboard: false,
		backdrop: false,
	});
	$('#modalError').modal({
		keyboard: false,
		backdrop: false,
		show: false
	});
	$('#save').on('click', function () {
		if(($('#Username').val() === '') || ($('#Password').val() === '')){
			$('#modalError').modal('show');
			$('#myModal').modal('hide');
			$('#modalError .modal-body').html('<p class="errorText">\n' +
				'\t\t\t\t\t* Поля, \'имя пользователя\' и/или \'пароль\' не доджны быть пустыми!\n' +
				'\t\t\t\t</p>');
		}
	});
	$('#repeat').on('click', function () {
		$('#modalError').modal('hide');
		$('#myModal').modal('show');
	});
	$(".clear").addClear({
		top: 10,
		right: 10,
	});
	$('.input-group a').attr("tabIndex", '-1');
	if (localStorage.chkbx && localStorage.chkbx != '') {
		$('#checkboxID').attr('checked', 'checked');
		$('#Username').val(localStorage.usrname);
		$('#Password').val(localStorage.pass);
	} else {
		$('#checkboxID').removeAttr('checked');
		$('#Username').val('');
		$('#Password').val('');
	}
	$('#checkboxID').click(function() {
		if ($('#checkboxID').is(':checked')) {
			// save username and password
			localStorage.usrname = $('#Username').val();
			localStorage.pass = $('#Password').val();
			localStorage.chkbx = $('#checkboxID').val();
		} else {
			localStorage.usrname = '';
			localStorage.pass = '';
			localStorage.chkbx = '';
		}
	});
});
