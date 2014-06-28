US-Phone-Format Plugin v.1.0.1
===============

Plugin to Format a US Phone Number automatically as you type.

Only US Phone Numbers can be formated with this plugin for now. More to come soon.

This plugin offers :
<ul>
<li>Validate Phone Numbers - No Letters or Special Characters allowed.</li>
<li>Format as you type - (xxx)-xxx-xxxx .</li>
<li>Create custom error messages - or do not show any error message at all. </li>
</ul>


How to use it?
===============
<b>Step 1:</b>  Make sure to include the plugin into your HTML - It works with jQuery 1.11+
```html
  <script src="rcformatusphone-minified.js"></script>
```
<b>Step 2:</b> Add code to format your phone number input field.
```html
  <script>
		$(function(){
			$(".phonenumber").rcFormatUSPhoneNumber();
		});
	</script>
```

Options
===============
For now, US-Phone-Format Plugin has this options.
<ul>
<li>Show Errors: True/False</li>
<li>Custom Errors</li>
</ul>



<b>Example</b>
```html
  <script>
		$(function(){
			$(".number2").rcFormatUSPhoneNumber({
					dashError: "Custom Message - No dashes",
					onlyNumbersError: "Custom Message - Only Numbers"
				});
				
			$(".number3").rcFormatUSPhoneNumber({
					showErrors: false
			});
		});
	</script>
```

Defaults are: 
<table>

<tr>
<td><b>showErrors</b></td>
<td>True</td>
</tr>
<tr>
<td><b>dashError</b></td>
<td>"Do not enter dashes(-). They will be entered automatically."</td>
</tr>
<tr>
<td><b>onlyNumbersError</b></td>
<td>"No letters or special characters allowed."</td>
</tr>
</table>

More options coming in future versions.

You are more than welcome to tweak it to fit your needs. If you have any issues/concers/thoughts(politely please!)/comments, you could email me at rob@robertocabrera.us

Hope you guys find this useful.

Happy Coding!

