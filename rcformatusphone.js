/*
 * jQuery US Phone Number Formater v. 1.0
 * 
 * Copyright (c) 2014 Roberto Cabrera
 * https://github.com/RobCabrera/US-Phone-Format
 *
 * MIT License
 *     http://www.opensource.org/licenses/mit-license.php
 *
 * Questions - Comemts - Concerns - email me at rob@robertocabrera.us
 * 
 *
*/

(function($){
	$.fn.rcFormatUSPhoneNumber = function(options){

		var opts = $.extend({},$.fn.rcFormatUSPhoneNumber.defaultOptions,options);
		
		/***********************************
		DISABLE PARENTHESIS FROM BEING ENTERED.
		***********************************/
		
		this.keypress(function(e){
			var $this = $(this);
			if (e.which == 40 || e.which == 41) {
				e.preventDefault();
			}
			
		});
		/***********************************
		CODE TO FORMAT PHONE NUMBER FIELDS
		***********************************/
		this.keyup(function(e){
			var $this = $(this);
			var x = this.value; 
			var i = this;
			//console.log(this.value);
			//console.log(this.value.length);
			
			var y, z, a, b;
			var c;
			var numberRegex = /^[0-9 \-\()]+$/;
			//var error = 'Not valid';
			var key = e.keyCode || e.which;
			
			
			
			if (key === 109 || key === 189 || key == 40 || key == 41){
				this.value = x.substring(0, x.length-1);
				
				if (opts.showErrors){
					if ($(".rcErrorContainer").length == 1){
						$this.next().show();
						$this.next().html(opts.dashError);
					}else{
						$this.after('<div class="rcErrorContainer" style="color:#f00; font-size: 11px;"></div>');
						$this.next().html(opts.dashError);
						$this.css("border", "1px solid #f00");
					}
				}

			}else{
				if (opts.showErrors){
					$this.next().html("");

					if ($this.next("div").is(":visible")){
						$this.next().hide();
						$this.css("border-color", "#ccc");
					}
					
					
				}
				if (numberRegex.test(x)){
					if(x.length === 3){
						b = "(";
						y = x.substring(0,4)+")-";

						c = b+y;
						this.value = c;
					}
					if (x.length === 9){
						b = "(";
						y = x.substring(1,4)+")-";
						z = x.substring(6,9)+"-";

						c = b+y+z;

						this.value = c;
					}
					if (x.length === 14){
						b = "(";
						y = x.substring(1,4)+")-";
						z = x.substring(6,9)+"-";
						a = x.substring(10,14);

						c = b+y+z+a;
						this.value = c;
						
					}

				}else{
					this.value = "";
					if (opts.showErrors){
						if ($(".rcErrorContainer").length == 1){
							$this.next().show();
							$this.next().html(opts.onlyNumbersError);
						}else{
							$this.after('<div class="rcErrorContainer" style="color:#f00; font-size: 11px;"></div>');
							$this.next().html(opts.onlyNumbersError);
							$this.css("border", "1px solid #f00");
						}
					}
				}
			}
			
		});
		
		/***********************************
		IF NO VALUE IS ENTERED ON INPUT FIELD, NO ERROR MESSAGE (IF ANY) WILL BE DISPLAYED.
		***********************************/
		this.blur(function(){
			var $this = $(this);
			if (opts.showErrors){
				if($this.val() === ""){
					if ($this.next("div").is(":visible")){
						$this.next().hide();
						$this.css("border-color", "#ccc");
						//console.log("visible");
					}
				}
			}
		});
		//return this;
	};
	
	$.fn.rcFormatUSPhoneNumber.defaultOptions = {
		dashError : "Do not enter dashes(-). They will be entered automatically.",
		onlyNumbersError: "No letters or special characters allowed.",
		showErrors : true
	};
})(jQuery);
