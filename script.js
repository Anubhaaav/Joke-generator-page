const joke = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click', generateJoke);

aync function generateJoke() {
    //call the API
    const jokeRes = await fetch('https://icanhazdadjoke.com/'
    {
        headers: {
            accept: 'application/json'
        }
    });

    const joke = await jokeRes.json();
    console.log(joke);

    //Set random joke


}