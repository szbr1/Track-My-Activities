## Understanding React.Js Core Concepts Under the Hood Learning.
### Date: 6:25

### Day 1
Today i learn some topics of react about how they working under the hood 
that was a shocking  experience for me. 

- What is the difference between `Immparative Programming` & `Declartive Programming`?
    
   
    
- What is `Recursion` ?
- What is `Component`
    
    
    
- What is **`Reconciliation`  means ?**
    
    Ra  Concilation   > this way you can pronounce the word
    
    ---
    
    It’s the process where **React compares the new virtual DOM with the old one and finds what changed.**
    
    After finding the difference, it **updates only those parts** in the real DOM — not the whole page.
    
- What is `jsx`  ?
    
    `Jsx` is the way to write the html code into js file that looks we are writing in the html way and easy to understand 
    
    For example: 
    
    ## 📌 What happens behind the scenes?
    
    React converts this:
    
    ```jsx
    jsx
    CopyEdit
    <h1>Hello, world!</h1>
    
    ```
    
    Into this JavaScript:
    
    ```jsx
    javascript
    CopyEdit
    React.createElement('h1', null, 'Hello, world!');
    
    ```
    
- What is `transpillation`  and `semantic`?
    