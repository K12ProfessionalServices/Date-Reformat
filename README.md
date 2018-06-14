# Date-Reformat
Reformats dates from US mm/dd/yyyy format to the format specified in the dateSwitch function.

---

For abbreviated month name, use "short". For full name, use "long".  
```javascript
var options = { year: "numeric", month: "short", day: "numeric" };
```

---

Dates can be displayed in thousands of languages and formats. Learn more at the links below.

* https://www.w3.org/International/questions/qa-choosing-language-tags
* http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry

The example below is set to "en-GB" for UK English. To change this just replace with the necessary subtag from the link above. 
```javascript
theDates[b].innerHTML = thisDate.toLocaleDateString("en-GB", options);
```
