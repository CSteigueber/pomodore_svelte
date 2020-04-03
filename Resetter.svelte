<script>
import {count} from './store.js';
function reset(){
    count.set(20);
}
</script>
<button on:click={reset}>20min</button>