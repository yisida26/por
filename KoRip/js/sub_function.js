$(function() {
	//Mobile Card in App's
	$('.popup').on('click', function(evt) {
		evt.preventDefault()
		$('.popup_box').show()
	})

	$('.esc').click(function() {
		$('.popup_box').hide()
	})
	// $('.agree').click(function() {
	// 	location.href = './Mobile Card in App.html'
	// })
})
$(function() {
	$('.popup_1').on('click', function(evt) {
		evt.preventDefault()
		$('.popup_box_1').show()
	})
	$('.esc').click(function() {
		$('.popup_box_1').hide()
	})
	$('.agree_1').click(function() {
		$('.popup_box_1').hide()
		alert('아직 미구현')
	})
})
