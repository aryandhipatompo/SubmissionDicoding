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

	for (let i = 0; i < sliders2.length; i++)
	{
		sliders2[i].style.display = "none";
	}

	if (start >= sliders2.length)
	{
		start = 0;
	}

	sliders2[start].style.display = "block";
	start++;

	setTimeout(slidersLayanan, 1500);
}

let start = 0;
slidersFasilitas();
slidersLayanan();

function orderNow()
{
    alert("Mohon maaf layanan ini belum tersedia, website masih dalam tahap pengembangan.");
}
