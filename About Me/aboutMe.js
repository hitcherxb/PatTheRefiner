function burgerTransition(e) {
    e.classList.toggle("change");
}

document.addEventListener("keypress", function onPress(event) {
    if (event.key === "z" && event.ctrlKey) {
        // document.body.style.backgroundColor = 'green';
        document.body.style.backgroundImage = "url('pics/space.jpeg')";
        document.querySelector('#face').src = 'pics/alien.jpeg'
        document.querySelector('.nameText h1').innerHTML = 'HTM aLiens!'
        document.getElementById("name").style.color = "green";
        document.querySelector("p").style.color = "green";
        document.querySelector('.nameText p').innerHTML = '⟟ ⏃⋔ ⏃ ☊⍀⟒⏃⏁⟟⎐⟒ ⎍⌖/⎍⟟ ⎅⟒⌇⟟☌⋏⟒⍀ ⍙⟟⏁⊑ ⍜⎐⟒⍀ ⏁⟒⋏ ⊬⟒⏃⍀⌇ ⍜⎎ ⟒⌖⌿⟒⍀⟟⟒⋏☊⟒. ⟟ ⏃⋔ ⍙⟒⌰⌰-⎐⟒⍀⌇⟒⎅ ⟟⋏ ⎎⟟☌⋔⏃, ⏃⎅⍜⏚⟒⌖⎅, ⌿⊑⍜⏁⍜⌇⊑⍜⌿, ⌇☍⟒⏁☊⊑, ⌇⌰⏃☊☍, ⏚⏃⌰⌇⏃⋔⟟⍾, ⊑⏁⋔⌰, ⏃⋏⎅ ☊⌇⌇. ⋔⊬ ⌇⌿⟒☊⟟⏃⌰⏁⟟⟒⌇ ⏃⍀⟒⟟⌰⌰⎍⌇⏁⍀⏃⏁⟟⍜⋏ ⏃⋏⎅ ☌⍀⏃⌿⊑⟟☊ ⎅⟒⌇⟟☌⋏, ⏃⋏⎅ ⟟ ⎎⍜☊⎍⌇ ⍜⋏ ⟒⋏⊑⏃⋏☊⟟⋏☌ ⏁⊑⟒ ⎐⟟⌇⎍⏃⌰ ⟒⌖⌿⟒⍀⟟⟒⋏☊⟒, ⏚⏃⌰⏃⋏☊⟟⋏☌ ⎎⍜⍀⋔ ⏃⋏⎅ ⎎⎍⋏☊⏁⟟⍜⋏, ⏃⋏⎅ ⟟⋏☊⍀⟒⏃⌇⟟⋏☌⏃☊☊⟒⌇⌇⟟⏚⟟⌰⟟⏁⊬ ⎎⍜⍀ ⎅⟒⌇☍⏁⍜⌿ ⏃⋏⎅ ⋔⍜⏚⟟⌰⟒ ⎍⌇⟒⍀⌇. ⎎⟒⟒⌰ ⎎⍀⟒⟒ ⏁⍜ ⏚⍀⍜⍙⌇⟒ ⋔⊬ ⌿⏃⌇⏁ ⌿⍀⍜⟊⟒☊⏁⌇ ⏃⋏⎅ ☌⟒⏁ ⟟⋏ ⏁⍜⎍☊⊑ ⍙⟟⏁⊑ ⋔⟒ ⍜⋏ ⌇⍜☊⟟⏃⌰ ⋔⟒⎅⟟⏃!'

    }
});