<script>
	import '../app.css';
    import {onMount} from "svelte";
    import axios from "axios";

    onMount(async ()=>{
        const test = await axios.get('/api/test')
	    const {data} = test;

    })
</script>


<h1 class="border-2 border-red-950">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

