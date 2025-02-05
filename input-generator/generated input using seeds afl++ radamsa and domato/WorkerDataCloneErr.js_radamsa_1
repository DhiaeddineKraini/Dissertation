var result = "Fail";

try
{
    postMessage(navigator﻿);
}
catch(ex)
{
    if(ex.code != null && ex.code == ex.DATA_CLONE_ERR)
    {
        result = "Pass";
    }
}

postMessage(result);