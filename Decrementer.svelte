<script>
import {count} from './store.js';
function decrement(){
    if ($count>0){
        count.update(n=>n-1)
    }
}
</script>
<button on:click={decrement}>-</button>