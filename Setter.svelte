<script>
import {count, timeSet,timeRemain} from './store.js';

const setTime= ()=>{
    $timeSet=$count*60;
    $timeRemain=$timeSet;
}
</script>
<button on:click={setTime}>Set timer</button>