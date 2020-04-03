<script>
import {timeSet,on,timeStart,timeRemain} from './store.js';
const toggleStart = ()=>{
    $on=!$on;
    if ($on==true){
        $timeStart= new Date();
    }
}
</script>
<button on:click={toggleStart}>{$on? 'Stop':$timeSet>$timeRemain? 'Restart':'Start'}</button>