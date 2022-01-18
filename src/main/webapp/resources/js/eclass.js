/**
 * 
 */
EClass = {
    /**
     * <pre>     * Ajax Wrapper 입니다. (Method : POST)
     *
     * 필수) _URL - 전송 URL (String)
     * 필수) _PARAMETERS - 전송 파라미터 (object or String)
     * 필수) _CALLBACK - 콜백함수 (function)
     * 선택) _async - 동기화 여부 (boolean : 미지정시 true)
     * 선택) _errorMsg - 전송 실패시 메시지 (String)
     * </pre>
     */
    callAjax : function(_URL, _PARAMETERS, _METHOD, _ASYNC_STATUS, _CALLBACK){
        if(_URL != null){
 
            let _async = _ASYNC_STATUS;
            if(_async == null) _async = true;
 
            let _errorMsg = "서버에 요청중 문제가 발생!!";
             
            console.log("=callAjax========================="); 
            console.log("_URL:"+_URL);
            console.log("_PARAMETERS:"+_PARAMETERS);
            
			let _paramArray = Object.keys(_PARAMETERS);//param key목록
            if(_paramArray.length>0){
	            for(let i=1;i<_paramArray.length;i++){
	            	console.log(_paramArray[i]+":"+_PARAMETERS[_paramArray[i]]);
	            }
            }   
            console.log("_METHOD:"+_METHOD);
            console.log("_ASYNC_STATUS:"+_ASYNC_STATUS);
            console.log("=callAjax=========================");
            $.ajax({
	            url     : _URL,
                type    : _METHOD,
                data    : _PARAMETERS,
                async   : _async,
                success : function(rst){
                    _CALLBACK(rst);
                },
                error   : function(xhr,status,err){
                
                    console.log("_errorMsg:"+xhr.status);
                    if(xhr.status == 400){
                         window.location.href = "/ehr/cmn/nullPointerException";
                    }else if(xhr.status == 500){
                         window.location.href = "/ehr/cmn/error";
                    }else if(_errorMsg != null){
                        alert(_errorMsg);
                    }else{
                        alert("서버에 요청중 문제가 발생했습니다.\n관리자에게 문의하여 주십시오.");
                    }
                }
            });
        }else{
            alert("올바른 요청이 아닙니다.");
            return false;
        }
    }
};