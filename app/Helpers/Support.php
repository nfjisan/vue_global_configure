<?php
if (!function_exists('returnData')) {
    function returnData($status = 2000, $result = false, $message = false){
        $respose = [];

        if($status){
            $respose['status'] = $status;
        }
        if($result){
            $respose['result'] = $result;
        }
        if($message){
            $respose['message'] = $message;
        }
        return response()->json($respose);
    }
}

