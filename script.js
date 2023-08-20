    // var a=document.getElementById('newid1')

    // console.log(a.innerHTML)
    function enableQ1(){
        // let continaer=document.getElementsByClassName('container1')   
        // let  q1=continaer.getElementById('newid1');
        let  q1=document.getElementById('newid1');
        // let  q1=document.querySelectorAll('container1.newid1');
        q1.innerText="The element is accesed ";
        q1.style.color="red";
        }
    
        function resetQ1(){
        let  q1=document.getElementById('newid1');
        q1.innerText="The element is not accesed";
        q1.style.color="black";
        
        }
    
        function enableQ2(){
            document.getElementsByTagName('h1')[0].innerText="The Element value has been changed"
            document.getElementsByTagName('h1')[0].style.color="red"
        }
    
        function resetQ2(){
            document.getElementsByTagName('h1')[0].innerText="The element is not accesed"
            document.getElementsByTagName('h1')[0].style.color="black"
    
        }
    
        function enableQ3(){
            document.getElementsByClassName('box')[0].innerText="The Element value has been changed"
            document.getElementsByClassName('box')[0].style.color="red"
        }
    
        function resetQ3(){
            document.getElementsByClassName('box')[0].innerText="The element is not accesed"
            document.getElementsByClassName('box')[0].style.color="black"
    
        }
    
        function enableQ4(){
            let a=document.getElementsByTagName('h1')
            for(let i=0;i<a.length;i++){
                console.log(a[i])
                if(a[i].innerText=="Hello"){
                    a[i].innerText="Hello World"
                    break
                }
            }
        }
        
        function resetQ4(){
            let a=document.getElementsByTagName('h1')
            for(let i=0;i<a.length;i++){
                console.log(a[i].innerText)
                if(a[i].innerText=="Hello World"){
                    a[i].innerText="Hello"
                    break
                }
            }
        }
    
        function enableQ5(){
            let a=document.getElementsByTagName('h1')
            for(let i=0;i<a.length;i++){
                console.log(a[i].innerText)
                if(a[i].innerText=="Hello world"){
                    a[i].innerText="Welcome to Elevation academy"  
                    break
                }
            }
        }
    
        function resetQ5(){
            let a=document.getElementsByTagName('h1')
            for(let i=0;i<a.length;i++){
                console.log(a[i].innerText)
                if(a[i].innerText=="Welcome to Elevation academy"  ){
                    a[i].innerText="Hello world"
                    break
                }
            }
        }
    
        function enableQ6(){
           document.getElementById('heading').style.color="red"
            
        }
        function resetQ6(){
           document.getElementById('heading').style.color="black"
            
        }
    
        function enableQ7(){
            if(document.getElementsByClassName('cards')[0].style.flexDirection=="row"){
                // console.log(document.getElementsByClassName('cards')[0].style.flexDirection)
                document.getElementsByClassName('cards')[0].style.flexDirection="column" 
            }
            else  
            // if(document.getElementsByClassName('cards')[0].style.flexDirection=="column")
            {
                // console.log("flexdirection =row")
                document.getElementsByClassName('cards')[0].style.flexDirection="row"
             }
        }
        setInterval(update_time,1000)
        function update_time(){
            instanceofdate= new Date()
            document.getElementById('hours').innerText=instanceofdate.getHours()
            document.getElementById('mins').innerText=instanceofdate.getMinutes()
            document.getElementById('secs').innerText=instanceofdate.getSeconds()
    
        }