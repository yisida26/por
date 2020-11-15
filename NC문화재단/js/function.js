$(function() {
	const $img = $('.sgnb>.snb')
	const $btnPrev = $('.sgnb > .moa-slides-prev')
	const $btnNext = $('.sgnb > .moa-slides-next')
	const $indicators = $('.sgnb > .snb > li > a')
	let nowIdx = 0

	const moveFn = function() {
		$indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')

		$img.stop().animate(
			{
				left: -100 * nowIdx + '%'
			},
			400
		)
	}
	$btnPrev.on('click', function(evt) {
		evt.preventDefault()

		if (nowIdx > 0) {
			nowIdx--
		} else {
			nowIdx = 5
		}

		moveFn()
	})
	$btnNext.on('click', function(evt) {
		evt.preventDefault()

		if (nowIdx < 5) {
			nowIdx++
		} else {
			nowIdx = 0
		}

		moveFn()
	})
})
