const app = document.getElementById('typewriter');

const typewriter = new  Typewriter(app, {
    loop: true,
    delay:75
});


typewriter
 .typeString('La Linda')
 .pauseFor(200)
 .deleteAll()

 .start();    