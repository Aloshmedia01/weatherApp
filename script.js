
window.onload= (event) => {

    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
      }
      
      function showPosition(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.latitude;
          console.log(`${lat} and ${lon}`)
      
    

    
  axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=`)
    .then(response => {
      const apiResponse = response.data;
      console.log(apiResponse);
    }).catch(error => {
      console.log(error);
    });
  
}
getLocation();


    console.log('i dn load')

}

