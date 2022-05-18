
// sliders

flashSlider('.head-slider', {
	gap: 10,
	slideToShow: 1,
	width: "100%",
	height: "100vw",
	slideToScrollAbsolutely: true,
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slideToShow: 2,
				height: "65vw",

			}
		},
		{
			breakpoint: 768,
			settings: {
				slideToShow: 3,
				height: "45vw",

			}
		},
		{
			breakpoint: 992,
			settings: {
				gap: 20,
				slideToShow: 4,
				height: "32vw",
			}
		}
	]
});

flashSlider('.body-slider', {
	gap: 10,
	slideToShow: 2,
	width: "100%",
	slideToScrollAbsolutely: true,
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slideToShow: 3,

			}
		},
		{
			breakpoint: 768,
			settings: {
				slideToShow: 4,

			}
		},
		{
			breakpoint: 992,
			settings: {
				gap: 20,
				slideToShow: 5,
			}
		}
	]
});

// the-end-of-sliders