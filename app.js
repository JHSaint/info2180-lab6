window.onload = () => {

  //let httpRequest = new XMLHttpRequest();
  const btn = document.getElementById("search");
  let httpRequest = new XMLHttpRequest();
  let url = 'superheroes.php';

  btn.addEventListener('click', search);


  function search(){
    httpRequest.onreadystatechange = doSomething;
    httpRequest.open('GET', url);
    httpRequest.send();
  }
  
  function doSomething(){
    if(httpRequest.readyState === XMLHttpRequest.DONE){
      if(httpRequest.status === 200){

          let response = httpRequest.responseText;
          alert(response);

        }else{

          alert('There is a problem with the request');

        }
    }
  }


}



