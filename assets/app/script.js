function slidersFasilitas()
{
	const sliders = document.querySelectorAll(".slider");

	for (let i = 0; i < sliders.length; i++)
	{
		sliders[i].style.display = "none";
	}

	if (start >= sliders.length)
	{
		start = 0;
	}

	sliders[start].style.display = "block";
	start++;

	setTimeout(slidersFasilitas, 1500);
}

function slidersLayanan()
{
	const sliders2 = document.querySelectorAll(".slider2");

	for (let j = 0; j < sliders2.length; j++)
	{
		sliders2[j].style.display = "none";
	}

	if (start2 >= sliders2.length)
	{
		start2 = 0;
	}

	sliders2[start2].style.display = "block";
	start2++;

	setTimeout(slidersLayanan, 1500);
}

let start = 0;
let start2 = 0
slidersFasilitas();
slidersLayanan();

function orderNow()
{
    alert("Mohon maaf layanan ini belum tersedia, website masih dalam tahap pengembangan.");
}
