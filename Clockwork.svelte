<script>
import {timeSet,timeStart,time,on, timeRemain,timeElapsed} from './store.js';
import Alarm from './Alarm.svelte';
$:if ($on==true){
    $timeElapsed=Math.round(($time-$timeStart)/1000)
    $timeRemain=Math.round($timeSet-$timeElapsed);
    if ($timeRemain<=0){
        $on=false;
}}


</script>
    <h4>Clockwork is {$on? 'on':'off'}</h4>
{#if $timeRemain==0}
    <Alarm/>
{/if}
