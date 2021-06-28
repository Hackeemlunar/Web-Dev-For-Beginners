function loadTexture(path) {
<<<<<<< HEAD
	return new Promise((resolve) => {
		const img = new Image();
		img.src = path;
		img.onload = () => {
			resolve(img);
		};
	});
}

function createEnemies(ctx, canvas, enemyImg) {
	// TODO draw enemies
}

window.onload = async () => {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	// TODO load textures

	// TODO draw black background
	// TODO draw hero
	// TODO uncomment the next line when you add enemies to screen
	//createEnemies(ctx, canvas, enemyImg);
};
=======
  return new Promise((resolve) => {
    const img = new Image()
    img.src = path
    img.onload = () => {
      resolve(img)
    }
  })
}

function createEnemies(ctx, canvas, enemyImg) {
  // TODO draw enemies
}

window.onload = async () => {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')
  // TODO load textures

  // TODO draw black background
  // TODO draw hero
  // TODO uncomment the next line when you add enemies to screen
  //createEnemies(ctx, canvas, enemyImg);
}
>>>>>>> 9aa98943f8d4b570e8fbdcc01d8a56a118c2762a
