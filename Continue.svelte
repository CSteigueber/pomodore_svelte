<script>
import {on,timeRemain,timeSet} from './store.js';
const keepOn= ()=>{
    $on=true;
}
</script>

{#if $on==false && $timeRemain<$timeSet}
    <button on:click={keepOn}>Continue</button>
{/if}