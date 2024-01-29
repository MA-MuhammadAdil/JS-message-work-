 //  function foo(){
//     var a = document.getElementById('i') 
//   var b = a.getAttribute('name')
//     console.log(b)
//  }

// function foo(){
//         var a = document.getElementById('i') 
//       var b = a.hasAttribute('name')
//         console.log(b)
//      }
 
// function foo(){
//     var a = document.getElementById('i')
//     var b = a.setAttribute('class','aaa')
//     console.log(b)
// } 

// var getul = document.getElementById('ul')

// function foo(){
//      var a = document.getElementById('inp')   
//      var li = document.createElement('li')
//      var litext = document.createTextNode(a.value )
//      li.appendChild(litext)
//      getul.appendChild(li)
//      a.value = " "
//      var deletebtn = document.createElement('button')
//      var deletebtntext = document.createTextNode('delete')
//      deletebtn.appendChild(deletebtntext)
//      li.appendChild(deletebtn)
//      deletebtn.setAttribute('onclick','del(this)')
//     }


// function del(e){
//      e.parentNode.remove()
// }

// revesion

// function foo(){
//      var a = document.getElementById('inp')
//      var b = a.getAttribute('name')
//     console.log(b)
// }

function foo(){
     var a = document.getElementById('inp') 
     var li = document.createElement('li')
     var litext = document.createTextNode(a.value)
     li.appendChild(litext)
     getul.appendChild(li)
     a.value = ' '
     var deletebtn =  document.createElement('button')
     var deletebtntext = document.createTextNode('Delete')
     deletebtn.appendChild(deletebtntext)
     li.appendChild(deletebtn)
     deletebtn.setAttribute('onclick','del(this)')
     var editbtn =  document.createElement('button')
     var editbtntext = document.createTextNode('Edit')
     editbtn.appendChild(editbtntext)
     li.appendChild(editbtn)
     editbtn.setAttribute('onclick','editfun(this)')

 }

var getul = document.getElementById('ul')

function deleteall(){
     getul.innerHTML= " "
} 
function del(e){
          e.parentNode.remove()
     }

     function editfun(e){
        var a =  prompt('Entet edit message',e.parentNode.firstChild.nodeValue)
          e.parentNode.firstChild.nodeValue = a
     }