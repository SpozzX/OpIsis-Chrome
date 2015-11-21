$('#save').click(function(){
	saveChanges($('#backurl').val());
});

chrome.storage.local.get('backurl', function (result) {
	$('#backurl').val(result.backurl);
});


function saveChanges(val) {
  chrome.storage.local.set({'backurl': val}, function (result) {
  	alert('Saved !');
  });
}
