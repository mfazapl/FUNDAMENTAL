import '../component/frame-task'

const main = () =>{
   const btn = document.getElementById('bClick');
   const frame = document.querySelector('frame-task');

   btn.addEventListener('click', function(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((result) => {
        const imageElement = document.createElement('img');
        imageElement.src  =result.message;
        frame.appendChild(imageElement);

            console.log(result);

    })
    .catch((err) =>{
        console.log(err);
    });
   });

};



export default main;