# formUtils
Plugins para validação e manipulação de formulários

# Biblioteca Form Utilities V1.0

## **Includes**
```HTML
<script src="jquery-3.6.0.min.js"></script>
<script src="fontawasome.css"></script>
<script src="formUtils.js"></script>
```

# Examples:
1. **Initialize:** $("form#IdForm").hasRequired();
2. **put mandatory field in element ( insert of class required ):** <input class="required"/> -> (*)
3. **compare if passwords are the same:**
    - **Input paswword:** <input type="password" id="passwd" />
    - **Input confirm:** <input type="password" class="confirm-password" password="#passwd"/>
4. **change displayed text:** <input class="required" required-text="new text" />


## Example Start FormUtils
```JavaScript
<script type="text/javascript">
        $(function () {
            $("form#form1").hasRequired();
        })
</script>
```
## Example apply requirement on element
```HTML
<form id="form1"> 

    <input id="username" name="username" value="User" class="required"/>
    <input type="submit" value="Send"/>
    
</form>
```
## Example apply requirement in the element and verify that the passwords are the same
```HTML
<form id="form1"> 

    <input id="password" name="password" class="required"/>
    <input id="confirm_passwd" name="confirm_passwd" class="confirm-password" password="#password"/>
    <input type="submit" value="Send"/>
    
</form>
```
