fetch('https://animechan.xyz/api/random')
    .then((response) => {
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then ((data) => {
        document.getElementById("Character").innerHTML = `Character: ${data.character}`;
        document.getElementById("anime").innerHTML = `Anime: ${data.anime}`;
        document.getElementById("quote").innerHTML = `Quote: ${data.quote}`;
    })
    .catch((err) => {
        document.getElementById("Character").innerHTML = 'Network response was not ok';
        console.error(err);
      })
