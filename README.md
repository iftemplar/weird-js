# weird-js
Javascript: understanding the weird parts

asynchronous-js.html
Despite click was done before the end of the execution stack, 
JS engine put the click event on the end of event queue and processed it after other functions
JS engine doesn't look on the event queue until the execution stack is empty.
