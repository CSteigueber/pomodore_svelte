import { writable, readable} from 'svelte/store';
export const count = writable(20);
export const timeSet = writable(1200);
export const on= writable(false);
export const timeStart= writable(new Date());
export const timeRemain= writable(1200);
export const timeElapsed=writable(0);

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});
