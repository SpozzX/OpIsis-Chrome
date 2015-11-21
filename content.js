chrome.storage.local.get('backurl', function (result) {
		backurl = result.backurl;
});

function backUrl(){
	if(backurl)	document.location.href=backurl;
	else document.location.reload();
}


_curDom = document.domain;

if(_curDom=="twitter.com"){
	console.log("twitter");
}else if(_curDom=="facebook.com"){
	if($("#pagelet_page_above_header").length > 0) {
	  sPage();
	}else if($("#pagelet_timeline_profile_actions").length > 0) {
	  sProfil();
	}else if($("#pagelet_groups_edu_controller").length > 0) {
	  console.log('GROUP GROUP');
	  sGroup();
	}else{
		alert('Nothing to report here ! / Rien à signaler ici !');
	}
}else{
	alert('Nothing to report here ! / Rien à signaler ici !');

}


function sGroup(){
	console.log('Signal Group');

	setTimeout(function(){ 
		$("body .fbTimelineSection #pagelet_group_actions a")[0].click();
		console.log('>> Open Menu');
	}, 10);
	
	
	setTimeout(function(){ 
		$("._54ng a._54nc[href*='report.php'] span._54nh").click();
		console.log('>> signalSel OK');
	}, 200);

	
	
	setTimeout(function(){ 
		$("#nfxQuestionNamedhate input[value='account']").prop( "checked", true );
		$("#nfxQuestionNamedhate label.uiInputLabelLabel").trigger('click');
		$(".uiOverlayFooter #nfx_dialog_continue").trigger('click');
	
		console.log('>> Choice OK');
	}, 800);
	
	
	setTimeout(function(){ 
		$("#nfxQuestionNamedrace input[value='fake_name']").prop( "checked", true );
		$("#nfxQuestionNamedrace label.uiInputLabelLabel").trigger('click');
		$(".uiOverlayFooter #nfx_dialog_continue").trigger('click');
		console.log('>> Fake Name');
	}, 1300);
	
	setTimeout(function(){ 
		$("._59s7[role='dialog'] .uiOverlayFooter .layerCancel")[0].click();		
		console.log('>> Close 2');
		backUrl();
	}, 2200);	

}


function sPage(){

	console.log('Signal Page');
	
	setTimeout(function(){ 
		$("body #fbProfileCover #fbPageDropDownActionsMenu span._55pe").click();
		console.log('>> Open Menu');
	}, 10);
	
	
	setTimeout(function(){ 
		$("._54ng a[href*='reportable_ent_token'] span._54nh").trigger('click');
		console.log('>> signalSel OK');
	}, 200);
	
	
	setTimeout(function(){ 
		$("#nfxQuestionNamedoffensive input[value='account']").prop( "checked", true );
		$("#nfxQuestionNamedoffensive label.uiInputLabelLabel").trigger('click');
		$(".uiOverlayFooter #nfx_dialog_continue").trigger('click');
	
		console.log('>> Choice OK');
	}, 1000);
	
	
	setTimeout(function(){ 
		$("#nfxQuestionNamedhatespeech input[value='fake_name']").prop( "checked", true );
		$("#nfxQuestionNamedhatespeech label.uiInputLabelLabel").trigger('click');
		$(".uiOverlayFooter #nfx_dialog_continue").trigger('click');
		console.log('>> Fake Name');
	}, 1300);
	
	
	setTimeout(function(){ 
		$("#nfxQuestionNamedrace_or_ethnicity input[value='fake_name']").prop( "checked", true );
		$("#nfxQuestionNamedrace_or_ethnicity label.uiInputLabelLabel").trigger('click');
		$(".uiOverlayFooter #nfx_dialog_continue").trigger('click');
		console.log('>> Fake Name');
	}, 1800);

	
	setTimeout(function(){ 
		$("._59s7[role='dialog'] a._16gh[ajaxify*='REPORT_CONTENT']").closest('div').trigger('click');
		console.log('>> Soumettre');
	}, 2300);

	setTimeout(function(){ 
		$("._59s7[role='dialog'] .uiOverlayFooter a.layerButton")[0].click();
		
		console.log('>> Close 1');
	}, 2900);
	
	setTimeout(function(){ 
		$("._59s7[role='dialog'] .uiOverlayFooter .layerCancel").trigger('click');		
		console.log('>> Close 2');
		backUrl();
	}, 3100);	
}


function sProfil(){

	console.log('Signal Profil');
	
	setTimeout(function(){ 
		$("body ._6a._6b.uiPopover button").trigger('click');
		console.log('>> Open Menu');
	}, 10);
	
	setTimeout(function(){ 
		$("._54ng a[href*='reportable_ent_token'] span._54nh").trigger('click');
		console.log('>> signalSel OK');
	}, 200);
	
	
	setTimeout(function(){ 
		$("#nfxQuestionNamedaccount input[value='account']").prop( "checked", true );
		$("#nfxQuestionNamedaccount label.uiInputLabelLabel").trigger('click');
		$(".uiOverlayFooter #nfx_dialog_continue").trigger('click');
	
		console.log('>> Choice OK');
	}, 1000);
	
	
	setTimeout(function(){ 
		$("#nfxQuestionNamedfake_name input[value='fake_name']").prop( "checked", true );
		$("#nfxQuestionNamedfake_name label.uiInputLabelLabel").trigger('click');
		$(".uiOverlayFooter #nfx_dialog_continue").trigger('click');
		console.log('>> Fake Name');
	}, 1300);
	
	setTimeout(function(){ 
		$("._59s7[role='dialog'] div._4t2a a.layerCancel[role='button']")[0].click();
		
		console.log('>> Close 1');
	}, 1900);
	
	setTimeout(function(){ 
		$("._59s7[role='dialog'] ._4rdl label div._4rdw._4rdm").click();
		
		console.log('>> Close 2');
	}, 2300);
	
	
	setTimeout(function(){ 
		$("._59s7[role='dialog'] .uiOverlayFooter .layerCancel")[0].click();		
		console.log('>> Close 2');
		backUrl();
	}, 3100);	

}


function sProfil2(){

	console.log('Signal Profil');
	
	setTimeout(function(){ 
		$("body ._6a._6b.uiPopover button").trigger('click');
		console.log('>> Open Menu');
	}, 10);
	
	setTimeout(function(){ 
		$("._54ng a[href*='reportable_ent_token'] span._54nh").trigger('click');
		console.log('>> signalSel OK');
	}, 200);
	
	
	setTimeout(function(){ 
		$("#nfxQuestionNamedaccount input[value='account']").prop( "checked", true );
		$("#nfxQuestionNamedaccount label.uiInputLabelLabel").trigger('click');
		$(".uiOverlayFooter #nfx_dialog_continue").trigger('click');
	
		console.log('>> Choice OK');
	}, 1000);
	
	
	setTimeout(function(){ 
		$("#nfxQuestionNamedinappropriate input[value='fake_name']").prop( "checked", true );
		$("#nfxQuestionNamedinappropriate label.uiInputLabelLabel").trigger('click');
		$(".uiOverlayFooter #nfx_dialog_continue").trigger('click');
		console.log('>> nfxQuestionNamedinappropriate');
	}, 1300);
	
	setTimeout(function(){ 
		$("#nfxQuestionNamedother input[value='fake_name']").prop( "checked", true );
		$("#nfxQuestionNamedother label.uiInputLabelLabel").trigger('click');
		$(".uiOverlayFooter #nfx_dialog_continue").trigger('click');
		console.log('>> nfxQuestionNamedinappropriate');
	}, 1500);
	
	
	setTimeout(function(){ 
		$("._59s7[role='dialog'] a._16gh[ajaxify*='REPORT_CONTENT']").closest('div').trigger('click');
		console.log('>> Soumettre');
	}, 1800);

	setTimeout(function(){ 
		$("._59s7[role='dialog'] .uiOverlayFooter a.layerButton")[0].click();
		
		console.log('>> Close 1');
		backUrl();

	}, 3000);

		
}


