const photos = document.querySelectorAll("#photos img");

photos.forEach(photo => {
  photo.addEventListener("mouseover", () => {
    photo.style.transform = "scale(1.2)";
  });

  photo.addEventListener("mouseout", () => {
    photo.style.transform = "scale(1)";
  });
});

var player;

        window.onload = function () {
            player = document.getElementById('myMusic');
            document.getElementById('btnPlay').addEventListener('click', function () {
                player.play();
            });
            document.getElementById('btnPause').addEventListener('click', function () {
                player.pause();
            });

            $('#rngVolume').on("slidestop", function () {
                var volume = document.getElementById('rngVolume').value;
                console.log(volume);
                player.volume = volume;

            });
        }