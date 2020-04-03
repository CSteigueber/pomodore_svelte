<script>
import {count, timeRemain} from './store.js';


</script>
<h1>I want to set the timer to {$count} min</h1>
<h2>The remaining time is {Math.floor($timeRemain/60)} min {Math.floor($timeRemain%60)} sec</h2>
